const { declare } = require('@babel/helper-plugin-utils')

function hyphenToCamel(name) {
  return name.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
}

function namespaceToCamel(namespace, name) {
  return namespace + name.charAt(0).toUpperCase() + name.slice(1)
}

function cssToObj(css) {
  const o = {}
  css
    .split(';')
    .filter((el) => !!el)
    .forEach((el) => {
      const s = el.split(':')
      const key = s.shift().trim()
      const value = s.join(':').trim()
      o[key] = value
    })

  return o
}

module.exports = declare(({ types: t }) => {
  return {
    visitor: {
      JSXAttribute({ node }) {
        const { name: originalName } = node
        if (t.isJSXNamespacedName(originalName)) {
          // converts
          // <svg xmlns:xlink="asdf">
          // to
          // <svg xmlnsXlink="asdf">
          node.name = t.jSXIdentifier(
            namespaceToCamel(
              originalName.namespace.name,
              originalName.name.name,
            ),
          )
        } else if (t.isJSXIdentifier(originalName)) {
          // converts
          // <tag class="blah blah1"/>
          // to
          // <tag className="blah blah1"/>
          if (originalName.name === 'class') {
            originalName.name = 'className'
          }

          // converts
          // <tag style="text-align: center; width: 50px">
          // to
          // <tag style={{textAlign: 'center', width: '50px'}}>
          if (originalName.name === 'style') {
            const csso = cssToObj(node.value.value)
            const properties = Object.keys(csso).map((prop) =>
              t.objectProperty(
                t.identifier(hyphenToCamel(prop)),
                t.stringLiteral(csso[prop]),
              ),
            )
            node.value = t.jSXExpressionContainer(
              t.objectExpression(properties),
            )
          }

          // converts
          // <svg stroke-width="5">
          // to
          // <svg strokeWidth="5">
          // don't convert any custom data-* or aria-* attributes just wrap in quotes
          if (/^data-|^aria-/.test(originalName.name)) {
            originalName.name = `'${originalName.name}'`
          } else {
            originalName.name = hyphenToCamel(originalName.name)
          }
        }
      },
    },
  }
})
