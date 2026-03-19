# Execution Context

## Overview
Execution context in LEAF is not only data values; it also includes functional context provided via lambda-plane wiring. A lambda graph connected to a node can modify how that node behaves.

[Label Node](node-types/label.md) and [Delabel Node](node-types/delabel.md) support naming and releasing lambda graph references.

## When to use
Use this page when behavior differs between seemingly similar graph fragments due to context injection.

## Example
Attach a lambda graph to multiple nodes to standardize transformation policy without duplicating LEAFlisp text.

## Related topics
See also:
- [Edges](edges.md)
- [Lambda Edge](edge-types/lambda.md)
- [Lambda Node](node-types/lambda.md)
- [Execution Model](../architecture/execution-model.md)
- [Workflows Scheduling](../workflows/scheduling.md)
