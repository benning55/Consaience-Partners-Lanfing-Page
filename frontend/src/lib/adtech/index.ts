import { AdtechAdapter, AdtechConfig } from './types';
import { MockAdtechAdapter } from './adapter-mock';

export function createAdtechAdapter(config: AdtechConfig): AdtechAdapter {
  const { provider, debug = false } = config;

  switch (provider) {
    case 'mock':
      return new MockAdtechAdapter(debug);

    // Future adapters can be added here
    // case 'segment':
    //   return new SegmentAdapter(config);
    // case 'mixpanel':
    //   return new MixpanelAdapter(config);

    default:
      console.warn(`Unknown adtech provider: ${provider}. Falling back to mock.`);
      return new MockAdtechAdapter(debug);
  }
}

export { AdtechProvider } from './provider';
export { useAdtech } from './hooks';
export * from './types';