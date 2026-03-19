# Gate Node

## Overview
`gate` conditionally passes or stops input data in a workflow branch.

## Usage pattern
- Evaluate a condition upstream (often in `leaflisp`).
- Route payload through `gate` to enforce branch policy.
- Use early in a branch to short-circuit expensive downstream work.

## Example
```mermaid
flowchart LR
  I[Inport] --> C[Leaflisp condition]
  C --> G{Gate}
  G -->|pass| O[Outport]
```

## Related topics
See also:
- [Nodes](../nodes.md)
- [Mix Node](mix.md)
- [Defining Workflows](../../workflows/defining-workflows.md)
- [Dataflow Edge](../edge-types/dataflow.md)
