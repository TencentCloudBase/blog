const path = require('path')

module.exports = (opts, ctx) => {
  return {
    define: {
      SCRIPTS: opts.scripts || []
    },
    enhanceAppFiles: path.resolve(__dirname, 'analytics.js'),
    globalUIComponents: 'Analytics'
  }
}