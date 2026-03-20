# Error Handling

## Overview
Most workflow errors come from:
- Type mismatches in LEAFlisp expressions (for example string vs number).
- Missing dictionary keys or list index misuse.
- Invalid assumptions about synchronous/asynchronous arrival.
- Accidentally anchored subgraphs.

## When to use
Use this page when workflow output is missing, malformed, or delayed.

## Example
When numeric addition returns string concatenation, parse inputs first:

```lisp
(+ "1.5" 2)           ; "1.52"
(+ (parse "1.5") 2)   ; "3.5"
```

## Related topics
See also:
- [Troubleshooting Common Errors](../troubleshooting/common-errors.md)
- [Execution Model](../architecture/execution-model.md)
- [Testing Overview](../testing/overview.md)
