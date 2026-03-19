# Runtime

## Overview
The LEAF runtime evaluates graph nodes according to incoming data availability and graph connectivity. Key runtime characteristics from the corpus:
- Stateless by default (functional-purity leaning).
- Optional temporary state through `memoryio`.
- Synchronous multi-input behavior unless `chronos` is introduced.

## When to use
Use this page to reason about runtime semantics before changing graph design.

## Example
Use a pure graph where possible; add `memoryio` only where event correlation requires temporal state.

## Related topics
See also:
- [Execution Model](../architecture/execution-model.md)
- [State Management](../architecture/state-management.md)
- [Troubleshooting Performance Issues](../troubleshooting/performance-issues.md)
