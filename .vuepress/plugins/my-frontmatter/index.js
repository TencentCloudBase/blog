const path = require('path')

module.exports = {
  extendPageData ($page) {
    const {
      frontmatter,
      path: _path
    } = $page

    frontmatter.comment = frontmatter.comment || false

    if (typeof frontmatter.title === 'string') {
      frontmatter.commentTitle = frontmatter.title
    } else {
      const filepath = decodeURIComponent(_path)
      const extname = path.extname(filepath)
      frontmatter.commentTitle = filepath.substring(0, filepath.lastIndexOf(extname))
    }
  }
}