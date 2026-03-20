# Scaling And Performance

## Overview
Readability and maintainability are performance enablers for human teams. Practical scaling guidance for LEAF workflows includes:
- Keep graphs modular with spell/spelldef abstractions.
- Use anchor edges to isolate inactive branches during development and staged rollouts.
- Use chronos only where asynchronous behavior is necessary.
- Keep LEAFlisp expressions focused and testable.

## When to use
Use this page when workflows grow large or execution behavior becomes difficult to reason about.

## Example
A common pattern is splitting one dense graph into page-level spells, referenced through `leafgraph`.

## Related topics
See also:
- [Workflows Overview](../workflows/overview.md)
- [Runtime](../core-concepts/runtime.md)
- [ADR 002: Runtime Design](../adr/002-runtime-design.md)
