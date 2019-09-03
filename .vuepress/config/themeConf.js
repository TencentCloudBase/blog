const sidebar = require('./sidebar-auto')

module.exports = {
  repo: 'TencentCloudBase/blog',
  navbar: true, 
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  logo: '/favicon.png',
  nav: [
    { 
      text: '指南', 
      items: [
        {
          text: '快速入门',
          items: [
            { text: '小程序', link: '/docs/开发指南/0.多端快速入门/0.小程序端快速入门/0.入门概述.html' },
            { text: 'Web', link: '/docs/开发指南/0.多端快速入门/1.Web端快速入门/0.入门概述.html' },
          ]
        },
        {
          text: '云数据库',
          items: [
            { text: '小程序', link: '/docs/开发指南/1.能力详解/0.云数据库/0.小程序端/0.概述.html' },
            { text: 'Web', link: '/docs/开发指南/1.能力详解/0.云数据库/1.Web端/0.概述.html' },
          ]
        },
        {
          text: '云函数',
          items: [
            { text: '小程序', link: '/docs/开发指南/1.能力详解/2.云函数/0.小程序端/0.概述.html' },
            { text: 'Web', link: '/docs/开发指南/1.能力详解/2.云函数/1.Web端/0.概述.html' },
          ]
        },
        {
          text: '存储',
          items: [
            { text: '小程序', link: '/docs/开发指南/1.能力详解/1.云存储/0.小程序端/0.概述.html' },
            { text: 'Web', link: '/docs/开发指南/1.能力详解/1.云存储/1.Web端/0.概述.html' },
          ]
        },
        {
          text: '云调用',
          items: [
            { text: '小程序', link: '/docs/开发指南/1.能力详解/3.云调用/0.小程序端/0.能力概览.html'},
          ]
        }
      ]
    },
    {
      text: 'SDK',
      items: [
        { text: 'PHP', link: '/docs/SDK%20文档/0.PHP%20SDK/0.介绍.html' },
        { text: 'NodeJS', link: '/docs/SDK%20文档/服务端%20SDK/概览.html' },
        { text: '小程序', link: '/docs/SDK%20文档/客户端%20SDK/小程序端%20SDK.html' },
        { text: 'JavaScript', link: '/docs/SDK%20文档/客户端%20SDK/Web%20端%20SDK/概述.html' },
      ]
    },
    // {
    //   text: 'CLI',
    //   link: '/cli/'
    // },
    {
      text: '技术分享',
      items: [
        { text: '官方教程', link: '/docs/技术分享/0.官方教程/0.树洞小程序.html' },
        { text: '实战分享', link: '/docs/技术分享/1.实战分享/0.Taro商城实战.html' },
        { text: '客户案例', link: '/docs/技术分享/2.客户案例/0.猫眼.html' },
        { text: '洞察', link: '/docs/技术分享/3.洞察/0.从前端到全栈.html' },
        { text: '视频教学', link: '/docs/技术分享/4.视频教学/0.基础教程/1.小程序-云开发-概念基础.html' },
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
