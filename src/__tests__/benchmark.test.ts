import benchmark from '../';
import { benchmarkSync } from '../benchmarkSync';
import { benchmarkAsync } from '../benchmarkAsync';

jest.mock('../benchmarkSync', () => ({
  benchmarkSync: jest.fn(() => 42),
}));

jest.mock('../benchmarkAsync', () => ({
  benchmarkAsync: jest.fn(async () => 84),
}));

const mockBenchmarkSync = benchmarkSync as jest.Mock;
const mockBenchmarkAsync = benchmarkAsync as jest.Mock;

describe('benchmark', () => {
  test('calls benchmarkSync for a synchronous function', () => {
    const mockFn = jest.fn();
    const iterations = 100;

    const result = benchmark(mockFn, { iterations });

    expect(mockBenchmarkSync).toHaveBeenCalledWith(mockFn, iterations);
    expect(mockBenchmarkSync).toHaveBeenCalledTimes(1);
    expect(result).toBe(42); // Value returned by the mock
  });

  test('calls benchmarkAsync for an asynchronous function', async () => {
    const mockFn = jest.fn(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });
    const iterations = 10;

    const result = await benchmark(mockFn, { iterations });

    expect(mockBenchmarkAsync).toHaveBeenCalledWith(mockFn, iterations);
    expect(benchmarkAsync).toHaveBeenCalledTimes(1);
    expect(result).toBe(84); // Value returned by the mock
  });
});
