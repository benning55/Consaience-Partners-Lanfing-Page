import { describe, it, expect, vi } from 'vitest';
import { shouldDisableMotion } from './motion';

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('motion utilities', () => {
  it('should disable motion when env flag is set', () => {
    const originalEnv = process.env.NEXT_PUBLIC_DISABLE_MOTION;
    process.env.NEXT_PUBLIC_DISABLE_MOTION = 'true';

    expect(shouldDisableMotion()).toBe(true);

    process.env.NEXT_PUBLIC_DISABLE_MOTION = originalEnv;
  });

  it('should disable motion when user prefers reduced motion', () => {
    const mockMatchMedia = vi.fn().mockImplementation(query => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });

    expect(shouldDisableMotion()).toBe(true);
  });

  it('should not disable motion by default', () => {
    const mockMatchMedia = vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: mockMatchMedia,
    });

    expect(shouldDisableMotion()).toBe(false);
  });
});