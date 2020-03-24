const sidebar = require("./sidebar");

module.exports = {
  repo: "TencentCloudBase/blog",
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: "更新于",
  sidebar,
  logo: "/favicon.png",
  nav: [
    {
      text: "官网",
      link: "http://www.cloudbase.net/"
    },
    {
      text: "活动",
      items: [
        {
          text: "云开发零基础训练营",
          link: "/2020-03-23-zero-training-camp/"
        },
        {
          text: "云开发实战营",
          link: "/2020-03-23-diy-camp/"
        },
        {
          text: "云开发校园工作坊",
          link: "https://mp.weixin.qq.com/s/ENA2TAJ2fHtyMgFQ5kbBAA"
        }
      ]
    },
    {
      text: "学习",
      items: [
        {
          text: "视频教程",
          link: "/2019-09-03-share-miniprogram-cloud-basic-concept/"
        },
        { text: "官方案例", link: "/2019-09-03-share-tree-hole/" },
        { text: "项目实战", link: "/2019-09-03-share-maoyan/" },
        {
          text: "案例提交",
          link: "https://github.com/TencentCloudBase/blog/issues"
        }
      ]
    },
    {
      text: "生态",
      items: [
        {
          text: "开源生态",
          items: [
          { text: "开源协同", link: "/2019-10-28-opensource-guidelines/" }
          ]
        },
        {
          text: "高校生态",
          items: [
            {
              text: "教学支持",
              link: "https://tencentcloudbase.github.io/2020-03-19-edu-support/"
            },
            {
              text: "校园布道师",
              link: "#"
            }
          ]
        },
        {
          text: "第三方服务",
          items: [{ text: "第三方服务文档规范", link: "/2020-03-24-third-docs/" }]
        },
        {
          text: "云开发布道师",
          items: [
            { text: "云开发布道师权益", link: "/2020-03-23-preacher/" },
            { text: "云开发布道师申请", link: "https://wj.qq.com/s2/5715673/0bcf" }
          ]
        }
      ]
    },
    {
      text: "Q & A",
      link: "/2020-03-24-q-and-a/"
    }
  ]
};
