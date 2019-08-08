const sidebar = require('./sidebar')

module.exports = {
  repo: 'TencentCloudBase/blog',
  navbar: true, 
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  logo: '/favicon.ico',
  nav: [
    { 
      text: '指南', 
      items: [
        {
          text: '快速入门',
          items: [
            { text: '小程序端', link: '/开发指南/多端快速入门/小程序端快速入门/入门概述.html' },
            { text: 'Web端', link: '/开发指南/多端快速入门/Web端快速入门/入门概述.html' },
          ]
        },
        {
          text: '数据库',
          items: [
            { text: '小程序端', link: '/开发指南/能力详解/数据库/小程序端/概述.html' },
            { text: 'Web端', link: '/开发指南/能力详解/数据库/Web端/概述.html' },
          ]
        },
        {
          text: '云函数',
          items: [
            { text: '小程序端', link: '/开发指南/能力详解/云函数/小程序端/概述.html' },
            { text: 'Web端', link: '/开发指南/能力详解/云函数/Web端/概述.html' },
          ]
        },
        {
          text: '存储',
          items: [
            { text: '小程序端', link: '/开发指南/能力详解/数据库/小程序端/概述.html' },
            { text: 'Web端', link: '/开发指南/能力详解/数据库/Web端/概述.html' },
          ]
        },
        {
          text: '云调用',
          items: [
            { text: '小程序端', link: '/开发指南/能力详解/云调用/小程序端/能力概览.html'},
          ]
        }
      ]
    },
    {
      text: 'SDK',
      items: [
        { text: 'PHP', link: '/SDK%20文档/PHP%20SDK/0.介绍.html' },
        { text: 'Node', link: '/SDK%20文档/服务端%20SDK/概览.html' },
        { text: '小程序', link: '/SDK%20文档/客户端%20SDK/小程序端%20SDK.html' },
        { text: 'Java', link: '/404.html' },
        { text: 'Python', link: '/404.html' },
        { text: 'JavaScript', link: '/SDK%20文档/客户端%20SDK/Web%20端%20SDK/概述.html' },
      ]
    },
    {
      text: '技术分享',
      items: [
        { text: 'Demos', link: '/技术分享/官方教程/树洞小程序.html' },
        { text: '视频教学', link: '/技术分享/视频教学/基础教程/1.小程序-云开发-概念基础.html' },
        { text: '最佳实践', link: '/技术分享/实战分享/Taro商城实战.html' },
        { text: '客户案例', link: '/技术分享/客户案例/猫眼.html' },
        { text: '每周分享', link: '/404.html' },
      ]
    },
    {
      text: '了解更多',
      items: [
        { text: '云开发主页', link: 'https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-http-api/' },
        { text: '更新日志', link: '/log/' },
      ]
    }
  ]
}
