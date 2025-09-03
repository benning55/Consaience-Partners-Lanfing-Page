import { describe, it, expect, beforeEach } from 'vitest';
import { MockAdtechAdapter } from './adapter-mock';

describe('MockAdtechAdapter', () => {
  let adapter: MockAdtechAdapter;

  beforeEach(() => {
    adapter = new MockAdtechAdapter(false);
  });

  it('should initialize successfully', async () => {
    await expect(adapter.init()).resolves.not.toThrow();
  });

  it('should identify users', async () => {
    await adapter.init();

    const userData = {
      email: 'test@example.com',
      userId: 'user123',
      traits: { name: 'Test User' }
    };

    await expect(adapter.identify(userData)).resolves.not.toThrow();
  });

  it('should track events', async () => {
    await adapter.init();

    await expect(adapter.trackEvent('test_event', { property: 'value' }))
      .resolves.not.toThrow();
  });

  it('should activate segments', async () => {
    await adapter.init();

    const audience = {
      id: 'audience1',
      name: 'Test Audience',
      criteria: { firmographic: { industry: ['tech'] } },
      lastUpdated: new Date(),
      status: 'active' as const
    };

    await expect(adapter.activateSegment('segment1', audience))
      .resolves.not.toThrow();
  });

  it('should teardown successfully', async () => {
    await adapter.init();
    await expect(adapter.teardown()).resolves.not.toThrow();
  });

  it('should throw error when not initialized', async () => {
    await expect(adapter.identify({ email: 'test@example.com' }))
      .rejects.toThrow('Adapter not initialized');
  });
});