# Dynamic Rendering

## Overview
Dynamic rendering in LEAF comes from runtime data moving through element nodes and transformations before final rendering in `screenio`.

## When to use
Use this page when UI output depends on live events or transformed runtime values.

## Example
```mermaid
flowchart LR
  E[Element Event] --> L[Leaflisp]
  L --> P[Payload]
  P --> S[ScreenIO]
```

## Related topics
See also:
- [Event System](../architecture/event-system.md)
- [Visual Elements](visual-elements.md)
- [Frontend Example](../examples/frontend-example.md)
