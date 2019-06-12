const path = require('path')

module.exports = (opts, ctx) => {
  return {
    enhanceAppFiles: path.resolve(__dirname, 'md5.js'),
    globalUIComponents: 'Md5'
  }
}