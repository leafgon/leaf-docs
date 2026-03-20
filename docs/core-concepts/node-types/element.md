# Element Module Node

## Overview
`element` is the element module node type used for building visualization, interaction, media, and integration payloads consumed by `screenio` or downstream processing.

LEAF also includes four suit nodes: [Spade Suit Node](spade.md), [Diamond Suit Node](diamond.md), [Heart Suit Node](heart.md), and [Club Suit Node](club.md).

## Usage pattern
- Select an element subtype by intent (UI, media, or integration).
- Keep data shaping in `leaflisp` and let element nodes handle interaction/render/integration behavior.
- Route interactive visualization payloads to `screenio`.

## Example
```mermaid
flowchart TB
  E[Element Module Node]
  E --> UI[text form popup mediaplayer mediainput image gnav]
  E --> Media[sound midi]
  E --> Integration[http openai directus]
  Cards[Suit Nodes] --> Spade[Spade]
  Cards --> Diamond[Diamond]
  Cards --> Heart[Heart]
  Cards --> Club[Club]
```

```mermaid
flowchart LR
  I[Inport] --> L[Leaflisp]
  L --> E[Element subtype]
  E --> S[ScreenIO / Outport]
```

## Standard element modules
- `text`: creates a text editor with Vim support and outputs interactive visualization data.
- `sound`: defines sound using periodic waveforms; can process MIDI/sound inputs and emit sound output.
- `prompt` (deprecated): prompt/form element; replaced by JSON-form patterns using the `html` element.
- `popup`: wraps visualization content in a popup window.
- `openai`: provides API-level access to OpenAI generative models for text and image workflows.
- `midi`: provides MIDI interface input data from connected instruments.
- `mediaplayer`: creates interactive audio/video playback visualization (for example, YouTube-sourced content).
- `mediainput`: creates interactive visualization for image data input.
- `image` (deprecated): interactive image visualization; replaced by `html`-based methods.
- `http`: performs HTTP requests, including `GET` and `POST`.
- `gnav`: creates immersive interactive 3D navigation visualizations.
- `form`: creates forms for prompting users for input.
- `directus`: spawns and interacts with a Directus backend CMS.

## Suit nodes
`spade`, `diamond`, `heart`, and `club` are suit nodes:
- [Spade Suit Node](spade.md)
- [Diamond Suit Node](diamond.md)
- [Heart Suit Node](heart.md)
- [Club Suit Node](club.md)

## Related topics
See also:
- [Nodes](../nodes.md)
- [Visual Elements](../../frontend/visual-elements.md)
- [Spade Suit Node](spade.md)
- [Diamond Suit Node](diamond.md)
- [Heart Suit Node](heart.md)
- [Club Suit Node](club.md)
- [ScreenIO Node](screenio.md)
- [Dataflow Edge](../edge-types/dataflow.md)
