import { benchmarkSync } from '../benchmarkSync';

describe('benchmarkSync', () => {
  test('measures the average execution time for a synchronous function', () => {
    const mockFn = jest.fn(() => {
      for (let i = 0; i < 1000; i++) {
        // Intentionally empty loop for benchmarking
      }
    });

    const iterations = 100;

    const result = benchmarkSync(mockFn, iterations);

    expect(mockFn).toHaveBeenCalledTimes(iterations);
    expect(typeof result).toBe('number');
  });

  test('handles functions that execute instantly', () => {
    const mockFn = jest.fn(() => {});
    const iterations = 100;

    const result = benchmarkSync(mockFn, iterations);

    expect(mockFn).toHaveBeenCalledTimes(iterations);
    expect(typeof result).toBe('number');
  });
});
