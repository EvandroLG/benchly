import { FnSync } from './types.js';

/**
 * Benchmarks a synchronous function by measuring the average time
 * it takes to execute over a specified number of iterations.
 *
 * @param fn - The synchronous function to benchmark.
 * @param iterations - The number of times to execute the function during the benchmark.
 * @returns The average time (in milliseconds) taken to execute the function per iteration.
 *
 * @example
 * // Benchmark a simple function
 * const timeTaken = benchmarkSync(() => {
 *   for (let i = 0; i < 100; i++) {}
 * }, 1000);
 * console.log(`Average time: ${timeTaken} ms`);
 */
export function benchmarkSync(fn: FnSync, iterations: number) {
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    fn();
  }

  const end = performance.now();

  return (end - start) / iterations;
}
