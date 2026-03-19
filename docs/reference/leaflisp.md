# LEAFlisp

## Overview
LEAFlisp is the text-domain language used in LEAF for data shaping, branching, iteration, and transformation. It is a Lisp dialect with native JSON-friendly dictionaries (`{}`), lists (`[]`), and expression evaluation with function calls (`()`).

This reference consolidates all LEAFlisp functions and operators described in the source corpus, with usage patterns and examples.

## When to use
Use LEAFlisp when graph wiring alone is not enough, especially for:
- Value transformation and validation.
- Conditional logic.
- List and dictionary processing.
- Math, parsing, and utility generation (for example UUIDs).

## Example

```lisp
(do
  (def profile {:name "leaf" :scores [10 20 30]})
  (if (> (count (get profile :scores)) 2)
    (merge-dict profile {:status "ready"})
    (merge-dict profile {:status "pending"})
  )
)
```

## Syntax Forms
### `()` function calls
Usage pattern: `(<function-name> <arg1> <arg2> ...)`

```lisp
(+ 1 2)
```

### `[]` lists
Usage pattern: `[<item1> <item2> ...]`

```lisp
[1 2 3 4]
```

### `{}` dictionaries (JSON-like)
Usage pattern: `{:<key> <value> :<key2> <value2>}`

```lisp
{:hello "world" :happiness "is here"}
```

## Core Functions
### `help`
Usage pattern: `(help)`

```lisp
(help)
```

### `def`
Usage pattern: `(def <name> <something>)`

```lisp
(def greeting "hello")
```

### `fn`
Usage pattern: `(fn [<arg-list>] <function-definition>)`

```lisp
(fn [x] (* x 10))
```

### `defn`
Usage pattern: `(defn <name> [<arg-list>] <function-definition>)`

```lisp
(defn twice [x] (* x 2))
(twice 4)
```

### `do`
Usage pattern: `(do <expr1> <expr2> ... <exprN>)`

```lisp
(do
  (def a 1)
  (+ a 2)
)
```

### `if`
Usage pattern: `(if <condition> <expression> <default-expression>)`

```lisp
(if (== "happiness" "happiness") "is here" "is there")
```

### `case`
Usage pattern:

```lisp
(case <value>
  ((<predicate-1>) <expression-1>)
  ((<predicate-2>) <expression-2>)
  (:else <default-expression>)
)
```

Example:

```lisp
(def inport "happiness")
(case inport
  ((fn [x] (== "hello" x)) "world")
  ((== "happiness") "is here")
  (:else "the rest")
)
```

## Collection and Dictionary Functions
### `get`
Usage patterns:
- Dictionary: `(get <dictionary> <key>)`
- List: `(get <list> <index>)`

```lisp
(def prose {:hello "world" :happiness "is here"})
(get prose :hello)

(def val-list ["world" "is here"])
(get val-list 0)
```

### `keys`
Usage pattern: `(keys <dictionary>)`

```lisp
(keys {:hello "world" :happiness "is here"})
```

### `values`
Usage pattern: `(values <dictionary>)`

```lisp
(values {:hello "world" :happiness "is here"})
```

### `map`
Usage pattern: `(map <map-function> <list>)`

```lisp
(map (fn [cur] (* cur 10)) [1 2 3 4])
```

### `filter`
Usage pattern: `(filter <predicate-function> <list>)`

```lisp
(filter (fn [cur] (== (modulo cur 2) 0)) [1 2 3 4])
```

### `reduce`
Usage pattern: `(reduce <init-value> <reduction-function> <list>)`

```lisp
(reduce 0 (fn [acc cur] (+ acc cur)) [1 2 3 4])
```

### `concat`
Usage pattern: `(concat <list-a> <list-b>)`

```lisp
(concat ["hello" "world"] ["happiness" "is" "here"])
```

### `contains`
Usage pattern: `(contains <value> <list>)`

```lisp
(contains 3 [1 2 3 4])
```

### `count`
Usage pattern: `(count <list>)`

```lisp
(count ["hello" "world" "happiness" "is" "here"])
```

### `head`
Usage pattern: `(head <list>)`

```lisp
(head ["hello" "world" "happiness"])
```

### `tail`
Usage pattern: `(tail <list>)`

```lisp
(tail ["hello" "world" "happiness"])
```

### `slice`
Usage pattern: `(slice <list> <start-index> <end-index>)`

```lisp
(slice ["hello" "world" "happiness" "is here"] 2 4)
```

### `intersperse`
Usage pattern: `(intersperse <string> <list-of-strings>)`

```lisp
(intersperse "," ["hello" "world" "happiness" "is" "here"])
```

### `join-with`
Usage pattern: `(join-with <joiner> <list-of-strings>)`

```lisp
(join-with " " ["hello" "world" "happiness" "is" "here"])
```

### `make-dict`
Usage pattern: `(make-dict <keys-list> <values-list>)`

```lisp
(make-dict ["hello" "happiness"] ["world" "is here"])
```

### `merge-dict`
Usage pattern: `(merge-dict <first-dictionary> <second-dictionary>)`

```lisp
(merge-dict {:hello "world" :happiness "is there"} {:happiness "is here"})
```

## Type Conversion and Parsing
### `parse`
Usage pattern: `(parse <number-string>)`

```lisp
(+ (parse "1.5") 2)
```

### `str`
Usage pattern: `(str <number>)`

```lisp
(str 42)
```

### `regexp`
Usage pattern: `(regexp <target-string> <regular-expression>)`

```lisp
(regexp "hello world, happiness is here." "/^.*, (.*) is (.*)\\.$/")
```

## Utility and Generation Functions
### `random`
Usage pattern: `(random)`

```lisp
(random)
```

### `randomInt`
Usage pattern: `(randomInt <min-value> <max-value>)`

```lisp
(randomInt 0 10)
```

### `shuffle`
Usage pattern: `(shuffle <list>)`

```lisp
(shuffle [0 1 2 3])
```

### `range`
Usage pattern: `(range <min-value> <range-length> <delta>)`

```lisp
(range 0 3 1.5)
```

### `range0`
Usage pattern: `(range0 <range-length>)`

```lisp
(range0 3)
```

### `uuid4`
Usage pattern: `(uuid4)`

```lisp
(uuid4)
```

### `uuid5`
Usage pattern: `(uuid5 <priming-string>)`

```lisp
(uuid5 "hello")
```

## Operators
### Arithmetic Operators
- `+`
  Usage pattern: `(+ <value-a> <value-b>)`

  ```lisp
  (+ 1 2)
  ```

- `-`
  Usage pattern: `(- <value-a> <value-b>)`

  ```lisp
  (- 1 2)
  ```

- `*`
  Usage pattern: `(* <value-a> <value-b>)`

  ```lisp
  (* 2 3)
  ```

- `/`
  Usage pattern: `(/ <value-a> <value-b>)`

  ```lisp
  (/ 1 2)
  ```

- `negate`
  Usage pattern: `(negate <value>)`

  ```lisp
  (negate -1)
  ```

### Boolean Operators
- `not`
  Usage pattern: `(not <logical-value>)`

  ```lisp
  (not true)
  ```

- `and`
  Usage pattern: `(and <value-a> <value-b>)`

  ```lisp
  (and true false)
  ```

- `or`
  Usage pattern: `(or <value-a> <value-b>)`

  ```lisp
  (or true false)
  ```

### Comparison Operators
- `==`
  Usage pattern: `(== <value-a> <value-b>)`

  ```lisp
  (== 2 2)
  ```

- `!=`
  Usage pattern: `(!= <value-a> <value-b>)`

  ```lisp
  (!= 2 3)
  ```

- `>`
  Usage pattern: `(> <value-a> <value-b>)`

  ```lisp
  (> 3 2)
  ```

- `>=`
  Usage pattern: `(>= <value-a> <value-b>)`

  ```lisp
  (>= 3 3)
  ```

- `<`
  Usage pattern: `(< <value-a> <value-b>)`

  ```lisp
  (< 2 3)
  ```

- `<=`
  Usage pattern: `(<= <value-a> <value-b>)`

  ```lisp
  (<= 2 2)
  ```

### Numeric Helper
- `modulo`
  Usage pattern: `(modulo <numerator> <denominator>)`

  ```lisp
  (modulo 11 2)
  ```

## Math Constants
Usage pattern: use constants directly as values.

### `PI`
Usage pattern: `PI`

```lisp
PI
```

### `E`
Usage pattern: `E`

```lisp
E
```

### `LN2`
Usage pattern: `LN2`

```lisp
LN2
```

### `LN10`
Usage pattern: `LN10`

```lisp
LN10
```

### `LOG2E`
Usage pattern: `LOG2E`

```lisp
LOG2E
```

### `LOG10E`
Usage pattern: `LOG10E`

```lisp
LOG10E
```

### `SQRT1_2`
Usage pattern: `SQRT1_2`

```lisp
SQRT1_2
```

### `SQRT2`
Usage pattern: `SQRT2`

```lisp
SQRT2
```

## Math and Geometry Functions
### Numeric Functions
#### `abs`
Usage pattern: `(abs <number>)`

```lisp
(abs -42)
```

#### `sign`
Usage pattern: `(sign <number>)`

```lisp
(sign -12)
```

#### `min`
Usage pattern: `(min <list-of-numbers>)`

```lisp
(min [7 2 9])
```

#### `max`
Usage pattern: `(max <list-of-numbers>)`

```lisp
(max [7 2 9])
```

#### `floor`
Usage pattern: `(floor <number>)`

```lisp
(floor 3.9)
```

#### `round`
Usage pattern: `(round <number>)`

```lisp
(round 3.5)
```

#### `ceil`
Usage pattern: `(ceil <number>)`

```lisp
(ceil 3.1)
```

#### `trunc`
Usage pattern: `(trunc <number>)`

```lisp
(trunc 3.9)
```

#### `cbrt`
Usage pattern: `(cbrt <number>)`

```lisp
(cbrt 27)
```

#### `sqrt`
Usage pattern: `(sqrt <number>)`

```lisp
(sqrt 9)
```

#### `exp`
Usage pattern: `(exp <number>)`

```lisp
(exp 1)
```

#### `pow`
Usage pattern: `(pow <base> <exponent>)`

```lisp
(pow 3 2)
```

#### `log`
Usage pattern: `(log <number>)`

```lisp
(log E)
```

#### `log2`
Usage pattern: `(log2 <number>)`

```lisp
(log2 8)
```

#### `log10`
Usage pattern: `(log10 <number>)`

```lisp
(log10 1000)
```

### Trigonometric and Hyperbolic Functions
#### `sin`
Usage pattern: `(sin <radians>)`

```lisp
(sin (/ PI 2))
```

#### `asin`
Usage pattern: `(asin <value>)`

```lisp
(* (/ (asin 1) PI) 180)
```

#### `asinh`
Usage pattern: `(asinh <value>)`

```lisp
(asinh 10)
```

#### `cos`
Usage pattern: `(cos <radians>)`

```lisp
(cos 0)
```

#### `acos`
Usage pattern: `(acos <value>)`

```lisp
(acos 1)
```

#### `acosh`
Usage pattern: `(acosh <value>)`

```lisp
(acosh 2)
```

#### `tan`
Usage pattern: `(tan <radians>)`

```lisp
(tan 0)
```

#### `atan`
Usage pattern: `(atan <value>)`

```lisp
(atan 1)
```

#### `atan2`
Usage pattern: `(atan2 <y> <x>)`

```lisp
(atan2 1 1)
```

#### `atanh`
Usage pattern: `(atanh <value>)`

```lisp
(atanh 0.5)
```

## Usage Patterns
- Prefer `def` for naming intermediate values in long expressions.
- Use `map` for one-to-one transformation, `filter` for selection, and `reduce` for aggregation.
- Use `parse` before arithmetic when numeric input arrives as strings.
- Keep list item types consistent inside `[]`.
- Use dictionaries and `get` to model structured payloads passed between LEAF nodes.

## Related topics
See also:
- [Core Concepts: Nodes](../core-concepts/nodes.md)
- [Getting Started: Quickstart](../getting-started/quickstart.md)
- [Reference: Glossary](glossary.md)
