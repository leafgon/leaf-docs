# Examples

## Overview
API examples in LEAF are primarily workflow patterns: ingest -> request -> transform -> emit.

## When to use
Use this page when drafting concrete API integration recipes for teams.

## Example
Minimal template:
1. `inport` receives request metadata.
2. HTTP/integration node performs call.
3. LEAFlisp maps response fields.
4. `outport` emits normalized payload.

## Related topics
See also:
- [REST](rest.md)
- [Backend Example](../examples/backend-example.md)
- [Testing Integration](../testing/integration-testing.md)
