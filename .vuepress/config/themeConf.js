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
    { 
      text: '产品介绍', 
      items: [
        { text: '产品概述', link: '/产品介绍/产品概述.html' },
        { text: '应用场景', link: '/产品介绍/应用场景.html' },
        { text: '相关产品', link: '/产品介绍/相关产品.html' },
        {
          text: '云开发',
          items: [
            { text: '小程序', link: '/产品介绍/基本概念/小程序端基本概念.html' },
            { text: 'Web', link: '/产品介绍/基本概念/Web 端基本概念.html' }
          ]
        }
      ]
    },
    { 
      text: '开发指南', 
      items: [
        { text: '控制台简介', link: '/开发指南/控制台简介/小程序云开发控制台.html' },
        { text: '云数据库', link: '/开发指南/数据库/概述.html' },
        { text: '云存储', link: '/开发指南/存储管理/概述.html' },
        { text: '云函数', link: '/开发指南/云函数/概述.html' },
      ]
    },
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
      text: '了解更多',
      items: [
        { text: '团队介绍', link: '/about/' },
        { text: '参与协作', link: '/together/' },
        { text: '更新日志', link: '/log/' },
      ]
    }
  ]
}
