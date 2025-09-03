import { AdtechAdapter, Audience } from './types';

export class MockAdtechAdapter implements AdtechAdapter {
  private isInitialized = false;
  private debug: boolean;

  constructor(debug = false) {
    this.debug = debug;
  }

  async init(): Promise<void> {
    if (this.debug) {
      console.log('[MockAdtech] Initializing...');
    }

    // Simulate async initialization
    await new Promise(resolve => setTimeout(resolve, 100));

    this.isInitialized = true;

    if (this.debug) {
      console.log('[MockAdtech] Initialized successfully');
    }
  }

  async identify(userData: {
    userId?: string;
    email?: string;
    accountId?: string;
    traits?: Record<string, any>;
  }): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('Adapter not initialized');
    }

    if (this.debug) {
      console.log('[MockAdtech] Identifying user:', userData);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 50));

    if (this.debug) {
      console.log('[MockAdtech] User identified successfully');
    }
  }

  async trackEvent(eventName: string, properties?: Record<string, any>): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('Adapter not initialized');
    }

    if (this.debug) {
      console.log('[MockAdtech] Tracking event:', eventName, properties);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 30));

    if (this.debug) {
      console.log('[MockAdtech] Event tracked successfully');
    }
  }

  async activateSegment(segmentId: string, audience: Audience): Promise<void> {
    if (!this.isInitialized) {
      throw new Error('Adapter not initialized');
    }

    if (this.debug) {
      console.log('[MockAdtech] Activating segment:', segmentId, audience);
    }

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 200));

    if (this.debug) {
      console.log('[MockAdtech] Segment activated successfully');
    }
  }

  async teardown(): Promise<void> {
    if (this.debug) {
      console.log('[MockAdtech] Tearing down...');
    }

    this.isInitialized = false;

    if (this.debug) {
      console.log('[MockAdtech] Teardown complete');
    }
  }
}