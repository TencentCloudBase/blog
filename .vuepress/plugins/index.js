module.exports = [
  require('./my-frontmatter/index.js'),
  require('./my-md5/index.js'),
  ['@vuepress/google-analytics', {ga: 'UA-124601890-2'}],
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk', 
      options: {
        id: '<%- window.md5(frontmatter.to.path || window.location.pathname) %>',
        title: '「评论」<%- frontmatter.commentTitle %>',
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