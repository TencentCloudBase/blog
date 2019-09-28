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
        { text: 'Node.js', link: '/2019-09-28-NODEJS-SDK-overview/' },
        { text: '小程序', link: '/2019-09-28-MINIPROGRAM-SDK-introduction/' },
        { text: 'Web', link: '/2019-09-28-WEB-SDK-overview/' },
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
      text: '开发者活动',
      items: [
        { text: '训练营', link: 'https://mp.weixin.qq.com/s/nFCtlERfhv2FMrNgHei7cQ' },
        { text: '校园技术工坊', link: 'https://mp.weixin.qq.com/s/0gjrK-HbWHQHC5MuCvayqQ' },
        { text: '云开发技术圈', link: '/docs/开发者活动/小程序云开发城市技术圈.html' },
      ]
    },
    {
      text: '了解更多',
      items: [
        { text: '云开发主页', link: 'https://cloud.tencent.com/product/tcb' },
        { text: '更新日志', link: '/log/' },
      ]
    }
  ]
}
