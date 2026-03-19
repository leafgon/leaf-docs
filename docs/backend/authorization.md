# Authorization

## Overview
Authorization in this draft is modeled as graph-level policy placement and config-driven defaults for app URI behavior. Exact policy engines are out of scope for the source corpus.

## When to use
Use this page when deciding where authorization checks belong in workflows.

## Example
Place policy-check transforms early in the workflow and short-circuit unauthorized paths through `gate`.

## Related topics
See also:
- [Authentication](authentication.md)
- [Error Handling](../workflows/error-handling.md)
- [Troubleshooting Common Errors](../troubleshooting/common-errors.md)
