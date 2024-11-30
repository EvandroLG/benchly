import { benchmarkAsync } from './benchmarkAsync';
import { benchmarkSync } from './benchmarkSync';
import { FnAsync, FnSync } from './types';

/**
 * Benchmarks a given synchronous or asynchronous function by measuring
 * the time it takes to execute over a specified number of iterations.
 *
 * @param fn - The function to benchmark. Can be synchronous or asynchronous.
 * @param options - Configuration options for the benchmark.
 * @param options.iterations - The number of times to execute the function during the benchmark. Defaults to 1000.
 * @returns The time taken to execute the function over the specified iterations.
 *
 * @example
 * // Benchmark a synchronous function
 * const result = benchmark(() => {
 *   for (let i = 0; i < 100; i++) {}
 * });
 * console.log(result); // { timeTaken: <time_in_ms> }
 *
 * @example
 * // Benchmark an asynchronous function
 * const result = await benchmark(async () => {
 *   await new Promise(resolve => setTimeout(resolve, 10));
 * });
 * console.log(result); // { timeTaken: <time_in_ms> }
 */
export default function benchmark(
  fn: FnSync | FnAsync,
  options: { iterations: number } = { iterations: 1000 },
) {
  const isAsync = fn.constructor.name === 'AsyncFunction';
  const { iterations } = options;

  if (isAsync) {
    return benchmarkAsync(fn as FnAsync, iterations);
  }

  return benchmarkSync(fn, iterations);
}
