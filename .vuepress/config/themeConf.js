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
    { text: '产品介绍', link: '/产品介绍/产品概述.html' },
    { text: '开发指南', link: '/开发指南/开发简介.html' },
    { 
      text: '技术分享', 
      link: '/技术分享/',
      items: [
        { text: '官方教程', link: '/技术分享/官方教程/树洞小程序.html' },
        { text: '实战分享', link: '/技术分享/实战分享/Taro商城实战.html' },
        { text: '客户案例', link: '/技术分享/客户案例/猫眼.html' },
        { text: '洞察', link: '/技术分享/洞察/从前端到全栈.html' },
      ]
    },
    {
      text: '更多',
      items: [
        { text: '团队介绍', link: '/about/' },
        { text: '更新日志', link: '/log/' },
      ]
    }
  ]
}
