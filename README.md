<h1>Remixml to DOM rendering</h1>

[![NPM version](http://img.shields.io/npm/v/remixml-dom.svg?style=flat)](https://npmjs.org/package/remixml-dom)
[![Downloads](https://img.shields.io/npm/dm/remixml-dom.svg?style=flat)](https://npmjs.org/package/remixml-dom)
[![Rate on Openbase](https://badges.openbase.io/js/rating/remixml-dom.svg)](https://openbase.io/js/remixml-dom?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

Remixml component that renders directly to the DOM in browsers.

Uses the regular Javascript DOM-API and therefore is not limited by the
pseudo-smart parsing rules that the browser HTML parser imposes, i.e.
it allows the creation of arbitrary DOM structures.

## Requirements

It runs inside any webbrowser environment.

## Reference documentation

- `Remixmldom.abstract2dom(abstract, node?)`<br />
  Converts a DOM `abstract` into DOM nodes.  If the optional `node` argument
  is specified, it replaces the children of `node` with the content
  described in DOM `abstract`.  Returns `node` if specified, or the new
  nodes.

## References

- Postprocessor for the high performance Javascript templating engine
  [Remixml](http://remixml.org/).
- Compatible with the
  fastest [lockandload AMD-loader](https://www.npmjs.com/package/lockandload).

Card-carrying member of the `zerodeps` movement.
