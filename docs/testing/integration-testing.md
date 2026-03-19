# Integration Testing

## Overview
Integration testing validates connected node behavior across graph boundaries: input contracts, branch conditions, and output shape consistency.

## When to use
Use this page when adding new nodes/branches that affect downstream behavior.

## Example
Test a workflow branch from `inport` -> transform -> `gate` -> output, with cases for both gate outcomes.

## Related topics
See also:
- [Workflows Execution Lifecycle](../workflows/execution-lifecycle.md)
- [Backend Example](../examples/backend-example.md)
- [Debugging](../troubleshooting/debugging.md)
