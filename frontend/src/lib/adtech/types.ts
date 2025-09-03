export interface TargetingCriteria {
  firmographic?: {
    industry?: string[];
    companySize?: string[];
    revenue?: string[];
    location?: string[];
  };
  behavioral?: {
    intentSignals?: string[];
    engagementLevel?: string;
    lastActivity?: Date;
  };
  technographic?: {
    technologies?: string[];
    jobTitles?: string[];
  };
}

export interface Audience {
  id: string;
  name: string;
  description?: string;
  criteria: TargetingCriteria;
  size?: number;
  lastUpdated: Date;
  status: 'active' | 'paused' | 'draft';
}

export interface Campaign {
  id: string;
  name: string;
  audienceId: string;
  channel: 'ads' | 'email' | 'web' | 'salesforce';
  status: 'active' | 'paused' | 'completed';
  startDate: Date;
  endDate?: Date;
  metrics?: {
    impressions?: number;
    clicks?: number;
    conversions?: number;
    cost?: number;
  };
}

export interface AdtechAdapter {
  init(): Promise<void>;
  identify(userData: {
    userId?: string;
    email?: string;
    accountId?: string;
    traits?: Record<string, any>;
  }): Promise<void>;
  trackEvent(eventName: string, properties?: Record<string, any>): Promise<void>;
  activateSegment(segmentId: string, audience: Audience): Promise<void>;
  teardown(): Promise<void>;
}

export interface AdtechConfig {
  provider: string;
  apiKey?: string;
  endpoint?: string;
  debug?: boolean;
}

export interface AdtechContextType {
  adapter: AdtechAdapter | null;
  isInitialized: boolean;
  identify: (userData: any) => Promise<void>;
  trackEvent: (eventName: string, properties?: Record<string, any>) => Promise<void>;
  activateSegment: (segmentId: string, audience: Audience) => Promise<void>;
}