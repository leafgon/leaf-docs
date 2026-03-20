# Loopyspell Node

## Overview
`loopyspell` is an abstraction node for iterative and context-sensitive orchestration with three usage modes: in-situ spell definition/casting, iteration, and awaiting semantics.

## Usage pattern
- Use `loopyspell` when repeated processing is needed without manual graph duplication.
- Combine with `chronos` when iteration interacts with asynchronous inputs.
- Keep core transformation logic in `leaflisp` or called spells.

## Example
```mermaid
flowchart LR
  I[Inport list] --> L[Loopyspell]
  L --> T[Leaflisp transform]
  T --> O[Outport]
```

## Related topics
See also:
- [Nodes](../nodes.md)
- [Spell Node](spell.md)
- [Spelldef Node](spelldef.md)
- [Scheduling](../../workflows/scheduling.md)
