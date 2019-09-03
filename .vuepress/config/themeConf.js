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
            { text: '小程序', link: '/2019-09-03-wx-dev-guide-summary/' },
            { text: 'Web', link: '/2019-09-03-web-dev-guide-summary/' },
          ]
        },
        {
          text: '云数据库',
          items: [
            { text: '小程序', link: '/2019-09-03-wx-clouddatabase-summary/' },
            { text: 'Web', link: '/2019-09-03-web-clouddatabase-summary/' },
          ]
        },
        {
          text: '云函数',
          items: [
            { text: '小程序', link: '/2019-09-03-wx-cloudfunction-summary/' },
            { text: 'Web', link: '/2019-09-03-web-cloudfunction-summary/' },
          ]
        },
        {
          text: '存储',
          items: [
            { text: '小程序', link: '/2019-09-03-wx-cloudstorage-summary/' },
            { text: 'Web', link: '/2019-09-03-web-cloudstorage-summary/' },
          ]
        },
        {
          text: '云调用',
          items: [
            { text: '小程序', link: '/2019-09-03-wx-cloudinvoke-summary/'},
          ]
        }
      ]
    },
    {
      text: 'SDK',
      items: [
        { text: 'PHP', link: '/2019-09-03-PHP-SDK-introduction/' },
        { text: 'NodeJS', link: '/docs/SDK%20文档/服务端%20SDK/概览.html' },
        { text: '小程序', link: '/docs/SDK%20文档/客户端%20SDK/小程序端%20SDK.html' },
        { text: 'JavaScript', link: '/docs/SDK%20文档/客户端%20SDK/Web%20端%20SDK/概述.html' },
      ]
    },
    {
      text: '技术分享',
      items: [
        { text: '官方教程', link: '/2019-09-03-share-tree-hole/' },
        { text: '实战分享', link: '/2019-09-03-share-taro-shop/' },
        { text: '客户案例', link: '/2019-09-03-share-maoyan/' },
        { text: '洞察', link: '/2019-09-03-share-from-front-to-all/' },
        { text: '视频教学', link: '/2019-09-03-share-miniprogram-cloud-basic-concept/' },
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
