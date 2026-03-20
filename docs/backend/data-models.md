# Data Models

## Overview
LEAFlisp uses JSON-native modeling. Dictionaries and lists are first-class values for passing structured data across nodes.

## When to use
Use this page when defining payload shapes shared across workflow boundaries.

## Example
```lisp
(def leaf_overview {
  :leaf {
    :graph {:nodes "25 types" :edges "3 types"}
    :text  {:leaflisp "a Lisp dialect"}
  }
})
```

## Related topics
See also:
- [LEAFlisp in Nodes](../core-concepts/nodes.md)
- [API Schemas](../api/schemas.md)
- [Reference Glossary](../reference/glossary.md)
