# Workflows

## Overview
A LEAF workflow is a graph where connected nodes define how data is transformed and routed. Workflow behavior is shaped by:
- Dataflow connectivity (what data goes where).
- Lambda context (what functional behavior is injected).
- Anchor control (what parts are inactive).

## When to use
Use this page when designing or reviewing the logic of an end-to-end graph.

## Example
A workflow often combines I/O, utility logic, and one or more abstraction nodes (`spell`/`loopyspell`) to keep logic modular.

## Related topics
See also:
- [Defining Workflows](../workflows/defining-workflows.md)
- [Execution Lifecycle](../workflows/execution-lifecycle.md)
- [Runtime](runtime.md)
