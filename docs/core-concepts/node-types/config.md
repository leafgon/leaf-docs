# Config Node

## Overview
`config` changes default authorization settings for a LEAF URI in Leafgon.

## Usage pattern
- Place `config` near graph entry points to make policy intent visible.
- Separate configuration concerns from business transformation logic.
- Pair with `gate` for explicit authorization-dependent branching.

## Example
```mermaid
flowchart LR
  C[Config] --> I[Inport]
  I --> T[Leaflisp]
  T --> O[Outport]
```

## Related topics
See also:
- [Nodes](../nodes.md)
- [Getting Started Configuration](../../getting-started/configuration.md)
- [Reference Configuration](../../reference/configuration.md)
- [Gate Node](gate.md)
