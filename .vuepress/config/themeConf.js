const sidebar = require('./sidebar')

module.exports = {
  // repo: 'TencentCloudBase/blog',
  navbar: true, 
  editLinks: true,
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '更新于',
  sidebar,
  logo: '/favicon.png',
  nav: [
    { 
      text: '快速入门', 
      items: [
        { text: '小程序', link: '/2019-09-03-wx-dev-guide-summary/' },
        { text: 'Web', link: '/2019-09-03-web-dev-guide-summary/' },
      ]
    },
    {
      text: '云开发能力',
      items: [
        {
          text: '基础能力',
          items: [
            {text: '云数据库',link: '/2019-09-03-clouddatabase-summary/'},
            {text: '云函数',link: '/2019-09-03-cloudfunction-summary/'},
            {text: '云存储',link: '/2019-09-03-cloudstorage-summary/'},
            {text: '云调用',link: '/2019-09-03-cloudinvoke-summary/'}
          ]
        },
        {
          text: '增值能力',
          items: [
            { text: '实时音视频', link: 'https://cloud.tencent.com/document/product/876/32344'},
            { text: 'AI智能图像', link: '/2019-09-03-value-added-AI-face-detection-intro/'}
          ]
        }
      ]
    },
    {
      text: 'SDK文档',
      items: [
        {
          text: '客户端SDK',
          items: [
            { text: '小程序', link: '/2019-09-28-MINIPROGRAM-SDK-introduction/' },
            { text: 'JavaScript', link: '/2019-09-28-WEB-SDK-overview/' },
          ]
        },
        {
          text: '服务端SDK',
          items: [
            { text: 'PHP', link: '/2019-09-03-PHP-SDK-introduction/' },
            { text: 'Node.js', link: '/2019-09-28-NODEJS-SDK-overview/' }
          ]
        }
      ]
    },
    {
      text: '开发者工具',
      items: [
        { text: 'CLI工具', link: '/2019-09-03-cli/' }
      ]
    },
    {
      text: '案例教学',
      items: [
        { text: '视频教程', link: '/2019-09-03-share-miniprogram-cloud-basic-concept/' },
        { text: '官方案例', link: '/2019-09-03-share-tree-hole/' },
        { text: '项目实战', link: '/2019-09-03-share-maoyan/' }
      ]
    },
    {
      text: '技术沙龙',
      items: [
        { text: '训练营', link: 'https://mp.weixin.qq.com/s/nFCtlERfhv2FMrNgHei7cQ' },
        { text: '校园技术工坊', link: 'https://mp.weixin.qq.com/s/0gjrK-HbWHQHC5MuCvayqQ' },
        { text: '云开发技术圈', link: '/docs/开发者活动/小程序云开发城市技术圈.html' },
      ]
    },
    {
      text: '更多',
      items: [
        { text: '官方主页', link: 'https://cloud.tencent.com/product/tcb' },
        { text: '云+社区', link: 'https://cloud.tencent.com/developer/team/tcb'}
      ]
    }
  ]
}
