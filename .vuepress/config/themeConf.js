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
      text: '文档',
      items: [
        {
          text: '基础能力',
          link: '/2019-10-16-base-feature/'
        },
        {
          text: '增值能力',
          link: '/2019-09-03-value-added-cloud-introduction/'
        },
        {
          text: 'SDK文档',
          link: '/2019-10-10-sdk-summary/'
        }
      ]
    },
    {
      text: '生态',
      items: [{
        text: '开发者工具',
        items: [
          { text: 'CLI工具', link: '/2019-09-03-cli/' }
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
          { text: '开源生态协同', link: '/2019-10-28-opensource-guidelines/' }
        ]
      },]
    },
    // {
    //   text: '云开发能力',
    //   items: [
    //     {
    //       text: '基础能力',
    //       items: [
    //         {text: '云数据库',link: '/docs/clouddatabase-summary/'},
    //         {text: '云函数',link: '/docs/cloudfunction-summary/'},
    //         {text: '云存储',link: '/docs/cloudstorage-summary/'},
    //         {text: '云调用',link: '/docs/cloudinvoke-summary/'}
    //       ]
    //     },
    //     {
    //       text: '增值能力',
    //       items: [
    //         { text: '实时音视频', link: 'https://cloud.tencent.com/document/product/876/32344'},
    //         { text: 'AI智能图像', link: '/docs/value-added-AI-face-detection-intro/'}
    //       ]
    //     }
    //   ]
    // },
    // {
    //   text: 'SDK文档',
    //   items: [
    //     {
    //       text: '客户端SDK',
    //       items: [
    //         { text: '小程序', link: '/docs/MINIPROGRAM-SDK-introduction/' },
    //         { text: 'JavaScript', link: '/docs/WEB-SDK-overview/' },
    //       ]
    //     },
    //     {
    //       text: '服务端SDK',
    //       items: [
    //         { text: 'PHP', link: '/docs/PHP-SDK-introduction/' },
    //         { text: 'Node.js', link: '/docs/NODEJS-SDK-overview/' }
    //       ]
    //     }
    //   ]
    // },
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
      text: '问题反馈',
      link: '/feedback/'
    },
    {
      text: '更多',
      items: [
        { text: '官方主页', link: 'https://cloud.tencent.com/product/tcb' },
        { text: '云+社区', link: 'https://cloud.tencent.com/developer/team/tcb' }
      ]
    }
  ]
}
