module.exports = [
  require('./my-md5/index.js'),
  [
    'vuepress-plugin-comment',
    {
      choosen: 'gitalk', 
      options: {
        id: '<%- window.md5(window.location.pathname) %>',
        clientID: '9dd8ddadbf5fdee6627b',
        clientSecret: 'f8fd092a45dcaa21ff2271e3b04ebabf1545e601',
        repo: 'blog',
        owner: 'TencentCloudBase',
        admin: ['dongyuanxin'],
        distractionFreeMode: false
      }
    }
  ]
]