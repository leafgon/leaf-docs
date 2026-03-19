# Common Errors

## Overview
Frequent LEAF issues highlighted by the corpus and this draft:
- Mixing strings and numbers unintentionally (`+` concatenates strings).
- Assuming async behavior when graph still waits synchronously.
- Missing keys/index errors in `get` calls.
- Hidden deactivation due to anchor wiring.

## When to use
Use this page first when results look wrong or missing.

## Example
If `(+ "1" 2)` gives unexpected output, convert type first: `(parse "1")`.

## Related topics
See also:
- [Error Handling](../workflows/error-handling.md)
- [Debugging](debugging.md)
- [Execution Model](../architecture/execution-model.md)
