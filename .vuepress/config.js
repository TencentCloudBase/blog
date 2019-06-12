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
          clientID: '500fe78f5be2549053a1',
          clientSecret: '1ec36557e7e1f0e9fa81543cae888e76c169d7e4',
          repo: 'blog',
          owner: 'TencentCloudBase',
          admin: ['dongyuanxin'],
          distractionFreeMode: false 
        }
      }
    ]
  ]
}