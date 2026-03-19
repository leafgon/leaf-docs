# Overview

## Overview
Backend-facing behavior in LEAF is represented through graph nodes and external integrations rather than hidden service code in this corpus snapshot. The most explicit backend-adjacent primitives are:
- API/integration element nodes (for example HTTP, OpenAI, Directus in the corpus narrative).
- Runtime-local storage with `memoryio`.
- Configuration with `config` for URI-level authorization settings.

## When to use
Use this page when mapping LEAF graphs to backend responsibilities.

## Example
A backend-oriented graph typically ingests request data, calls an external service, transforms payloads, and emits a response through `outport`.

## Related topics
See also:
- [API Layer](api-layer.md)
- [Persistence](persistence.md)
- [Backend Example](../examples/backend-example.md)
