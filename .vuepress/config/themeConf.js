const sidebar = require('./sidebar')

module.exports = {
  repo: 'TencentCloudBase/blog',
  navbar: true, 
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  nav: [
    { text: '导航页', link: '/guide/' },
    { text: '开发指南', link: '/开发指南/开发简介.html' },
    { text: '产品介绍', link: '/产品介绍/产品概述.html' },
    { text: '技术分享', link: '/技术分享/'},
    {
      text: '更多',
      items: [
        { text: '团队介绍', link: '/about/' },
        { text: '更新日志', link: '/log/' },
      ]
    }
  ]
}
