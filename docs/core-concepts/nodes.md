# Nodes

## Overview
Nodes are the primary executable units in LEAF. The corpus groups node types into five categories:
- Element nodes: `spade`, `diamond`, `heart`, `club`, `element` and specialized UI/media elements.
- Abstraction nodes: `anchor`, `loopyspell`, `spell`, `spelldef`, `lambda`, `leafgraph`.
- Utility nodes: `unbottle`, `bottle`, `crate`, `delabel`, `label`, `mix`, `gate`, `chronos`, `config`.
- Wizardry nodes: `leaflisp`.
- I/O nodes: `outport`, `inport`, `screenio`, `memoryio`.

Each node has a handle and up to six ports depending on supported edge types.

## When to use
Use this page when selecting the right node family for behavior, control, visualization, or external interaction.

## Example
```mermaid
flowchart LR
  I[Inport] --> U[Gate / Mix]
  U --> W[Leaflisp]
  W --> E[Element Node]
  E --> S[ScreenIO]
```

## Related topics
See also:
- [Edges](edges.md)
- [Execution Context](execution-context.md)
- [Visual Elements](../frontend/visual-elements.md)
