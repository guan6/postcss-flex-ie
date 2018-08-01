var postcss = require('postcss');

module.exports = postcss.plugin('postcss-flex-ie', function (opts) {
  opts = opts || {};

  // Work with options here

  return function (root, result) {
    // Transform CSS AST here
    root.walkRules(function (rule) {
      rule.walkDecls('display', function (decl) {
        var hasTouch = rule.some(function (i) {
          return i.prop === 'display' && i.value === 'table'
        })
        if (!hasTouch && decl.value === 'flex'){
          rule.insertBefore(decl, decl.clone({ value: 'table' }))
        }
      })
    })
  };
});
