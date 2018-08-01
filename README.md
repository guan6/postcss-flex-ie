# PostCSS Flex Ie [![Build Status][ci-img]][ci]

[PostCSS] plugin fix ie < 10 flex.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/guan6/postcss-flex-ie.svg
[ci]:      https://travis-ci.org/guan6/postcss-flex-ie

```css
/* Input example */
.foo {
    display: flex;
    align-items: center;
}
```

```css
/* Output example */
.foo > * {
  display: table-cell;
  vertical-align: middle;
}
```

## Usage

```js
postcss([ require('postcss-flex-ie') ])
```

See [PostCSS] docs for examples for your environment.
