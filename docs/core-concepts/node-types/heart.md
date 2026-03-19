# Heart Node

## Overview
`heart` is a canonical element-family node type. The source corpus lists it as one of the five primary element node types.

## Usage pattern
- Use `heart` as a dedicated element node where you want clear visual/interaction separation.
- Connect input data with dataflow edges.
- Forward produced visualization data to `screenio`.

## Example
```mermaid
flowchart LR
  I[Inport] --> L[Leaflisp]
  L --> H[Heart]
  H --> S[ScreenIO]
```

## Related topics
See also:
- [Nodes](../nodes.md)
- [Element Node](element.md)
- [ScreenIO Node](screenio.md)
- [Dataflow Edge](../edge-types/dataflow.md)
