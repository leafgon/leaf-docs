# Bottle Node

## Overview
`bottle` compartmentalizes data flowing in the dataflow plane.

## Usage pattern
- Wrap payloads before routing through shared branches.
- Preserve grouping boundaries until a downstream `unbottle` step.
- Combine with `crate` for multi-bottle packaging.

## Example
```mermaid
flowchart LR
  I[Inport] --> B[Bottle]
  B --> M[Mix]
  M --> O[Outport]
```

## Related topics
See also:
- [Nodes](../nodes.md)
- [Unbottle Node](unbottle.md)
- [Crate Node](crate.md)
- [Dataflow Edge](../edge-types/dataflow.md)
