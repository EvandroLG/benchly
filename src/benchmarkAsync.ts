import { FnAsync } from './types';

/**
 * Benchmarks an asynchronous function by measuring the average time
 * it takes to execute over a specified number of iterations.
 *
 * @param fn - The asynchronous function to benchmark. It should return a Promise.
 * @param iterations - The number of times to execute the function concurrently during the benchmark.
 * @returns A Promise that resolves to the average time (in milliseconds) taken to execute the function per iteration.
 *
 * @example
 * // Benchmark an asynchronous function
 * const averageTime = await benchmarkAsync(async () => {
 *   await new Promise(resolve => setTimeout(resolve, 10));
 * }, 100);
 * console.log(`Average time: ${averageTime} ms`);
 */
export async function benchmarkAsync(fn: FnAsync, iterations: number) {
  const start = performance.now();
  await Promise.all(Array.from({ length: iterations }, fn));
  const end = performance.now();

  return (end - start) / iterations;
}
