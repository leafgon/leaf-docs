# Defining Workflows

## Overview
Define workflows by first identifying inputs, then mapping transformations, control points, and outputs. LEAF best practice is to separate concerns:
- Data ingestion in I/O nodes.
- Transformation in LEAFlisp and utility nodes.
- Orchestration in abstraction nodes (`spell`, `loopyspell`, `anchor`).

## When to use
Use this page while designing new workflows or refactoring dense graphs.

## Example
A practical sequence:
1. Place `inport` nodes for external entry.
2. Add `leaflisp` and utility nodes for data shaping.
3. Add `gate` for branching and `chronos` for async fan-in if needed.
4. Terminate at `screenio`/`outport`.

## Related topics
See also:
- [Scheduling](scheduling.md)
- [Error Handling](error-handling.md)
- [Nodes](../core-concepts/nodes.md)
