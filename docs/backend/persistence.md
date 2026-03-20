# Persistence

## Overview
`memoryio` is temporary runtime storage that is reset on execution refresh. Persistent storage strategy is therefore external to LEAF graphs and should be integrated through dedicated service nodes.

## When to use
Use this page when deciding between temporary state and durable storage.

## Example
Use `memoryio` for short-lived session correlation, then write durable records through an external API integration node.

## Related topics
See also:
- [State Management](../architecture/state-management.md)
- [Backend Example](../examples/backend-example.md)
- [Deployment Overview](../deployment/overview.md)
