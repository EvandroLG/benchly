# benchly &middot; [![license](https://badgen.now.sh/badge/license/MIT)](./LICENSE)

A lightweight benchmarking library for measuring the performance of synchronous and asynchronous functions in JavaScript and TypeScript.

## Installation

```bash
npm install benchly --save-dev
// or
yarn add benchly --dev
```

## Usage

### Synchronous Functions

```typescript
import benchmark from 'benchly';

const syncFunction = () => {
  for (let i = 0; i < 1000; i++) {}
};

const result = benchmark(syncFunction, { iterations: 1000 });
console.log(`Time taken: ${result} ms`);
```

### Asynchronous Functions

```typescript
import benchmark from 'benchly';

const asyncFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10));
};

(async () => {
  const result = await benchmark(asyncFunction, { iterations: 100 });
  console.log(`Time taken: ${result} ms`);
})();
```

## API

### Parameters

- `fn`: The function to benchmark.
- `options.iterations` (optional): The number of iterations to run the benchmark. Default: `100`.

### Returns

- The average time taken (in milliseconds) for the function to execute over the specified number of iterations.

## License

[MIT](./LICENSE)
