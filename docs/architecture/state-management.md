# State Management

## Overview
LEAF execution is functionally pure by default: graph execution should not mutate hidden global state. When transient state is required, `memoryio` provides runtime-local read/write storage.

Memory stored in `memoryio` is temporary and can be lost on runtime refresh.

## When to use
Use this page when deciding whether to keep a workflow pure or introduce explicit temporary state.

## Example
Use `memoryio` for short-lived correlation of temporally related events, but keep durable state in explicit external systems.

## Related topics
See also:
- [Execution Model](execution-model.md)
- [Backend Persistence](../backend/persistence.md)
- [Troubleshooting Common Errors](../troubleshooting/common-errors.md)
