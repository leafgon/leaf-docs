# Quickstart

## Overview
This quickstart builds a small workflow that reads input, transforms it via LEAFlisp, and sends output to both visual and data endpoints.

## When to use
Use this page for your first runnable LEAF graph.

## Example
Graph layout:

```mermaid
flowchart LR
  I[Inport] --> L[Leaflisp]
  L --> S[ScreenIO]
  L --> O[Outport]
```

Suggested LEAFlisp expression:

```lisp
(do
  (def msg "hello from LEAF")
  {:message msg :status "ok"}
)
```

## Related topics
See also:
- [First Workflow](first-workflow.md)
- [Nodes](../core-concepts/nodes.md)
- [Inport Node](../core-concepts/node-types/inport.md)
- [Leaflisp Node](../core-concepts/node-types/leaflisp.md)
- [ScreenIO Node](../core-concepts/node-types/screenio.md)
- [Outport Node](../core-concepts/node-types/outport.md)
- [LEAFlisp Reference](../reference/leaflisp.md)
- [Workflows Overview](../workflows/overview.md)
