# System Components

## Overview
From the source corpus, LEAF systems are composed of:
- Node categories: element, abstraction, utility, wizardry, I/O.
- Edge types: dataflow, lambda, anchor.
- Runtime semantics: synchronous default input joining with optional asynchronous coordination.
- Text execution layer: LEAFlisp for expression-heavy data transformations.

## When to use
Use this page when decomposing a workflow into manageable subsystems.

## Example
A typical interactive app component stack:
1. Inport for event/data intake.
2. Utility/abstraction nodes for control and composition.
3. Element nodes for visualization.
4. ScreenIO/Outport for final delivery.

## Related topics
See also:
- [Nodes](../core-concepts/nodes.md)
- [Edges](../core-concepts/edges.md)
- [Frontend Overview](../frontend/overview.md)
