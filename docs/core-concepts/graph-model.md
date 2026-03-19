# Graph Model

## Overview
LEAF programs are modeled as directed graphs of nodes and typed edges. The corpus frames LEAF as directed acyclic graph-oriented for dataflow composition, extended by lambda and anchor relations.

```mermaid
flowchart LR
  subgraph Dataflow
    A[Node A] --> B[Node B] --> C[Node C]
  end
  L[Lambda Graph] -.-> B
  X[Anchor] -.-> C
```

## When to use
Use this page when defining graph boundaries, refactoring large workflows, or writing ADRs.

## Example
Encapsulate repeatable logic in `spelldef`, invoke through `spell`, and expose reusable fragments via `leafgraph`.

## Related topics
See also:
- [ADR 001: Graph Model](../adr/001-graph-model.md)
- [Nodes](nodes.md)
- [Edges](edges.md)
