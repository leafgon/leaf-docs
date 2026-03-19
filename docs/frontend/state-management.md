# State Management

## Overview
Frontend state follows LEAF’s broader runtime model: prefer explicit data propagation; use `memoryio` only for temporary interaction state when necessary.

## When to use
Use this page when handling multi-step interactions or event correlation in UI flows.

## Example
Cache a temporary selection in `memoryio`, then recompute derived display state in LEAFlisp.

## Related topics
See also:
- [Architecture State Management](../architecture/state-management.md)
- [Dynamic Rendering](dynamic-rendering.md)
- [Troubleshooting Debugging](../troubleshooting/debugging.md)
