const sidebar = require('./sidebar')

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
          items: [{
            text: '云函数',
            link: '/2019-09-03-cloudfunction-summary/'
          },{
            text: '云存储',
            link: '/2019-09-03-cloudstorage-summary/'
          },{
            text: '云数据库',
            link: '/2019-09-03-clouddatabase-summary/'
          },{
            text: '云调用',
            link: '/2019-09-03-cloudinvoke-summary/'
          }]
        },
        {
          text: '增值能力',
          link: '/2019-09-03-value-added-cloud-introduction/'
        }
      ]
    },
    {
      text: 'API文档',
      items: [
        {
          text: '客户端',
          items: [{
            text: '小程序SDK',
            link: '/2019-09-28-MINIPROGRAM-SDK-introduction/'
          },{
            text: 'JavaScript SDK',
            link: '/2019-09-28-WEB-SDK-overview/'
          }]
        },
        {
          text: '服务端',
          items: [{
            text: 'Node.js SDK',
            link: '/2019-09-28-NODEJS-SDK-overview/'
          },{
            text: 'PHP SDK',
            link: '/2019-09-03-PHP-SDK-introduction/'
          }]
        }
      ]
    },
    {
      text: '生态',
      items: [{
        text: '开发者工具',
        items: [
          { text: 'Cloudbase CLI', link: '/2019-09-03-cli/' }
        ]
      }, {
        text: '技术沙龙',
        items: [
          { text: '训练营', link: 'https://mp.weixin.qq.com/s/nFCtlERfhv2FMrNgHei7cQ' },
          { text: '校园技术工坊', link: 'https://mp.weixin.qq.com/s/ENA2TAJ2fHtyMgFQ5kbBAA' },
          { text: '云开发技术圈', link: '/activities/wcc/' },
        ]
      }, {
        text: '资源列表',
        items: [{
          text: '云开发资源',
          link: 'https://github.com/TencentCloudBase/awesome-tcb'
        }, {
          text: '团队主页',
          link: 'https://github.com/TencentCloudBase'
        }]
      },{
        text: '开源生态',
        items: [
          { text: '开源生态协同', link: '/2019-10-28-opensource-guidelines/' },
          { text: 'Task Coding', link: '/2019-11-12-taskcoding-guidelines/' },
        ]
      },]
    },
    {
      text: '学习',
      items: [
        { text: '视频教程', link: '/2019-09-03-share-miniprogram-cloud-basic-concept/' },
        { text: '官方案例', link: '/2019-09-03-share-tree-hole/' },
        { text: '项目实战', link: '/2019-09-03-share-maoyan/' },
        { text: '案例提交', link: 'https://github.com/TencentCloudBase/blog/issues' },
      ]
    },
    {
      text: '更多',
      items: [
        { text: '问题反馈', link: '/feedback/' },
        { text: '官方主页', link: 'https://cloud.tencent.com/product/tcb' },
        { text: '云+社区', link: 'https://cloud.tencent.com/developer/team/tcb' }
      ]
    }
  ]
}
