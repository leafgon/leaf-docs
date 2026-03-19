# Plugins

## Overview
The source corpus does not define a formal plugin API, but LEAF behaves extensibly through node-based integration points (for example, HTTP/OpenAI/Directus-oriented element patterns).

This page is a draft placeholder for future official plugin contracts.

## When to use
Use this page when planning extension mechanisms and deciding whether to model new capability as a node type.

## Example
Treat third-party integrations as explicit graph nodes so behavior stays inspectable in the dataflow model.

## Related topics
See also:
- [API Overview](../api/overview.md)
- [Backend Overview](../backend/overview.md)
- [ADR 002: Runtime Design](../adr/002-runtime-design.md)
