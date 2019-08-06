## 云函数引入 php-sdk 快速教程

### 准备工作

- 安装 cli 工具 npm i -g @cloudbase/cli@0.0.7-9，cli 工具文档参考 https://github.com/TencentCloudBase/cloud-base-cli
- 下载最新的 php-sdk 源码包，sdk 参考内置 readme 文档, 仓库地址 https://github.com/TencentCloudBase/tcb-php-sdk

### 编写 PHP 云函数

- 示例代码包[下载](https://share.weiyun.com/58dQW4M), 可基于示例代码修改（代码包中有引入 tcb-php-sdk，建议使用时下载最新的源码并进行替换）
- 编辑 index.php

```php
<?php

function main_handler($event, $context)
{
  require_once __DIR__ . DIRECTORY_SEPARATOR . 'tcb-php-sdk' . DIRECTORY_SEPARATOR . 'autoload.php';
  $tcb = new TencentCloudBase\TCB(array("secretId" => "xxx", "secretKey" => "xxx"));

  print($tcb)
  // your code

 return 'helllo world'
}
```

- 编辑 tcb.json

```json
{
  "deploys": [
    {
      "name": "phpTestFunc", // 指定当前云函数的function name
      "path": "./",
      "type": "function",
      "envId": "xxx", // tcb envid
      "override": true // 是否覆盖同名函数
    }
  ]
}
```

### 云函数部署

- 上传云函数：在当前云函数文件夹根目录下输入 tcb deploy --runtime Php7（未登录需要先 tcb login（请正确输入 secretID,secretKey），部署成功显示 Depoly serverless function xxx success!

### 云函数调用

- 进入小程序开发者工具，同步云函数列表，可以看到列表中有上传的云函数 phpTestFunc，编写云函数调用代码

示例代码

```javascript
wx.cloud
  .callFunction({
    name: "phpTestFunc",
    data: {}
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });
```
