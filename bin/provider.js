const axios = require('axios')
const path = require('path')
const fs = require('fs')

const SITE_AUTH_KEY = process.env.SITE_AUTH_KEY // 用于site-cms-data云函数中的身份校验
const ENV_ID = 'offcial-site-cms-15fc4b' // 和运营侧共用的云开发环境
const HTTP_PATH = '/site-cms-data' // site-cms-data云函数的http触发路径

const url = `http://${ENV_ID}.service.tcloudbase.com${HTTP_PATH}`

if (!SITE_AUTH_KEY) {
  throw new Error(`Please run '$ export SITE_AUTH_KEY="cms云函数身份密钥"'`)
} else {
  renderProduct()
}

/**
 * 获取产品公告数据，并生成对应的markdown
 */
async function renderProduct() {
  const FRONT_MATTER_OF_PRODUCT = `---
title: "产品公告"
date: "2020-05-17"
permalink: "product"
sidebar: "auto"
---

`
  const MARKDOWN_PATH = path.join(__dirname, '..', 'pages', 'product.md')

  const data = {
    key: SITE_AUTH_KEY,
    api: 'fetchAll',
    params: {
      collectionName: "operation-product",
      orderBy: ['level', 'desc']
    }
  }

  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    data: JSON.stringify(data)
  }

  const res = await axios(url, axiosConfig)
  const { success, result, msg } = res.data
  if (!success) {
    throw new Error('获取「产品公告」数据失败:' + msg)
  }

  if (!result.data.length) {
    throw new Error('「产品公告」数据为空，请联系运营同学')
  }

  const markdown = FRONT_MATTER_OF_PRODUCT + result.data[0].content
  fs.writeFileSync(MARKDOWN_PATH, markdown)
}