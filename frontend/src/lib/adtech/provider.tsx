'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { AdtechAdapter, AdtechContextType, Audience } from './types';
import { createAdtechAdapter } from './index';

export const AdtechContext = createContext<AdtechContextType | null>(null);

interface AdtechProviderProps {
  children: ReactNode;
}

export function AdtechProvider({ children }: AdtechProviderProps) {
  const [adapter, setAdapter] = useState<AdtechAdapter | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAdapter = async () => {
      try {
        const provider = process.env.NEXT_PUBLIC_ADTECH_PROVIDER || 'mock';
        const debug = process.env.NODE_ENV === 'development';
        
        const newAdapter = createAdtechAdapter({ provider, debug });
        await newAdapter.init();
        
        setAdapter(newAdapter);
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize adtech adapter:', error);
      }
    };

    initializeAdapter();

    return () => {
      // Cleanup will be handled by the adapter state
    };
  }, []);

  // Separate effect for cleanup
  useEffect(() => {
    return () => {
      if (adapter) {
        adapter.teardown();
      }
    };
  }, [adapter]);

  const identify = async (userData: any) => {
    if (!adapter) {
      console.warn('Adtech adapter not initialized');
      return;
    }
    
    try {
      await adapter.identify(userData);
    } catch (error) {
      console.error('Failed to identify user:', error);
    }
  };

  const trackEvent = async (eventName: string, properties?: Record<string, any>) => {
    if (!adapter) {
      console.warn('Adtech adapter not initialized');
      return;
    }
    
    try {
      await adapter.trackEvent(eventName, properties);
    } catch (error) {
      console.error('Failed to track event:', error);
    }
  };

  const activateSegment = async (segmentId: string, audience: Audience) => {
    if (!adapter) {
      console.warn('Adtech adapter not initialized');
      return;
    }
    
    try {
      await adapter.activateSegment(segmentId, audience);
    } catch (error) {
      console.error('Failed to activate segment:', error);
    }
  };

  const value: AdtechContextType = {
    adapter,
    isInitialized,
    identify,
    trackEvent,
    activateSegment,
  };

  return (
    <AdtechContext.Provider value={value}>
      {children}
    </AdtechContext.Provider>
  );
}

export function useAdtech() {
  const context = useContext(AdtechContext);
  if (!context) {
    throw new Error('useAdtech must be used within an AdtechProvider');
  }
  return context;
}