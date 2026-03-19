# Club Suit Node

## Overview
`club` is a canonical suit node type. The source corpus identifies it as one of the core element nodes in LEAF.

## Usage pattern
- Use `club` as a dedicated element endpoint within UI/dataflow pipelines.
- Route transformed payloads into `club` from `leaflisp` or utility nodes.
- Emit visual output for final rendering via `screenio`.

## Example
```mermaid
flowchart LR
  I[Inport] --> L[Leaflisp]
  L --> C[Club]
  C --> S[ScreenIO]
```

## Related topics
See also:
- [Nodes](../nodes.md)
- [Element Module Node](element.md)
- [ScreenIO Node](screenio.md)
- [Dataflow Edge](../edge-types/dataflow.md)
