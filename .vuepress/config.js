const {
  baseConf,
  mdConf,
  themeConf,
} = require('./config/')

module.exports = {
  ...baseConf,
  markdown: mdConf,
  themeConfig: themeConf,
  plugins: [
    [
      'vuepress-plugin-comment',
      {
        choosen: 'gitalk', 
        options: {
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
}