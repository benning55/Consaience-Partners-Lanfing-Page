'use client';

import { useContext } from 'react';
import { AdtechContext } from './provider';

export function useAdtech() {
  const context = useContext(AdtechContext);
  if (!context) {
    throw new Error('useAdtech must be used within an AdtechProvider');
  }
  return context;
}