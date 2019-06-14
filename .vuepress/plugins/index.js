module.exports = [
  require('./my-frontmatter/index.js'),
  require('./my-md5/index.js'),
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk', 
      options: {
        id: '<%- window.md5(frontmatter.to.path || window.location.pathname) %>',
        title: '<%- frontmatter.commentTitle %>',
        clientID: '9dd8ddadbf5fdee6627b',
        clientSecret: process.env.TCB_BLOG_clientSecret || '',
        repo: 'blog',
        owner: 'TencentCloudBase',
        admin: ['dongyuanxin'],
        distractionFreeMode: false
      }
    }
  ]
]