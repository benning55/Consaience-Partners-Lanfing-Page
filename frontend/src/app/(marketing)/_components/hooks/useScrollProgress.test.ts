import { clamp01 } from "./useScrollProgress";
import { describe, it, expect } from "vitest";

describe("clamp01", () => {
  it("clamps low values", () => {
    expect(clamp01(-0.5)).toBe(0);
  });
  it("clamps high values", () => {
    expect(clamp01(1.5)).toBe(1);
  });
  it("passes values between 0 and 1", () => {
    expect(clamp01(0.4)).toBe(0.4);
  });
});
