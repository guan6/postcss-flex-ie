var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flex-ie', function (opts) {
  opts = opts || {};

  var ishasTouch = function (i, prop, value) {
    return i.prop === prop && i.value === value
  }
  // Work with options here

  return function (root, result) {
    // Transform CSS AST here
    root.walkRules(function (rule) {
      rule.walkDecls(function (decl) {
        var hasTouch = rule.some(function (i) {
          return i.prop === 'display' && i.value === 'table'
        })
        // if (!hasTouch && decl.prop === 'display' && decl.value === 'flex'){
        //   rule.prepend({ prop: 'display', value: 'table' })
        // }
        if (decl.prop === 'align-items' && decl.value === 'center') {
          rule.after(`${rule.selector} > * {display:table-cell;vertical-align:middle;}`)
        }
      })
    })
  };
});
