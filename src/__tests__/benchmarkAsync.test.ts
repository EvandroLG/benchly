import { benchmarkAsync } from '../benchmarkAsync';

describe('benchmarkAsync', () => {
  test('measures the average execution time for an async function', async () => {
    const mockFn = jest.fn(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });
    const iterations = 10;

    const result = await benchmarkAsync(mockFn, iterations);

    expect(mockFn).toHaveBeenCalledTimes(iterations);
    expect(typeof result).toBe('number');
  });

  test('handles async functions that resolve immediately', async () => {
    const mockFn = jest.fn(async () => {});
    const iterations = 5;

    const result = await benchmarkAsync(mockFn, iterations);

    expect(mockFn).toHaveBeenCalledTimes(iterations);
    expect(typeof result).toBe('number');
    expect(result).toBeGreaterThanOrEqual(0);
  });
});
