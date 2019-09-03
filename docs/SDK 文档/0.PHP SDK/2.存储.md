## 存储

<!-- TOC -->

- [上传文件](#上传文件)
- [获取文件下载链接](#获取文件下载链接)
- [删除文件](#删除文件)
- [下载文件](#下载文件)

<!-- /TOC -->

### 上传文件

uploadFile(object)

请求参数

| 字段        | 类型         | 必填 | 说明                                                                                                                                                                                                                                               |
| ----------- | ------------ | ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cloudPath   | string       | 是   | 文件的绝对路径，包含文件名。例如 foo/bar.jpg、foo/bar/baz.jpg 等，不能包含除[0-9 , a-z , A-Z]、/、!、-、\_、.、、\*和中文以外的字符，使用 / 字符来实现类似传统文件系统的层级结构。[查看详情](https://cloud.tencent.com/document/product/436/13324) |
| fileContent | 文件指针资源 | 是   | buffer 或要上传的文件[可读流](https://nodejs.org/api/stream.html#stream_class_stream_readable)                                                                                                                                                     |

响应参数

| 字段      | 类型   | 必填 | 说明                                    |
| --------- | ------ | ---- | --------------------------------------- |
| code      | string | 否   | 状态码，操作成功则不返回                |
| message   | string | 否   | 错误描述                                |
| fileID    | fileID | 是   | 文件唯一 ID，用来访问文件，建议存储起来 |
| requestId | string | 否   | 请求序列号，用于错误排查                |

示例代码

```php
use TencentCloudBase\TCB;
$tcb = new Tcb([]);
$storage = $tcb->getStorage();


$fileContent = fopen('./tests/1.jpg', 'r');
$cloudPath = 'a|b.jpeg';
$fileResult = $storage->uploadFile(array('cloudPath' => $cloudPath, 'fileContent' => $fileContent));
```

### 获取文件下载链接

getTempFileURL(object)

请求参数

| 字段     | 类型                 | 必填 | 说明                       |
| -------- | -------------------- | ---- | -------------------------- |
| fileList | &lt;Array&gt;.string | 是   | 要下载的文件 ID 组成的数组 |

fileList

| 字段   | 类型    | 必填 | 说明           |
| ------ | ------- | ---- | -------------- |
| fileID | string  | 是   | 文件 ID        |
| maxAge | Integer | 是   | 文件链接有效期 |

响应参数

| 字段      | 类型                 | 必填 | 说明                         |
| --------- | -------------------- | ---- | ---------------------------- |
| code      | string               | 否   | 状态码，操作成功则为 SUCCESS |
| message   | string               | 否   | 错误描述                     |
| fileList  | &lt;Array&gt;.object | 否   | 存储下载链接的数组           |
| requestId | string               | 否   | 请求序列号，用于错误排查     |

fileList

| 字段        | 类型   | 必填 | 说明                     |
| ----------- | ------ | ---- | ------------------------ |
| code        | string | 否   | 删除结果，成功为 SUCCESS |
| fileID      | string | 是   | 文件 ID                  |
| tempFileURL | string | 是   | 文件访问链接             |

示例代码

```php

$result = $storage->getTempFileURL([
"fileList" => [
    ["fileID" => "cloud://jimmytest-088bef.jimmytest-088bef-1251059088/a|b.jpeg", "maxAge" => 100000]
]
]);

$fileList = $result["fileList"];
```

### 删除文件

deletfile(object)

请求参数

| 字段     | 类型                 | 必填 | 说明                       |
| -------- | -------------------- | ---- | -------------------------- |
| fileList | &lt;Array&gt;.string | 是   | 要删除的文件 ID 组成的数组 |

响应参数

| 字段      | 类型                 | 必填 | 说明                     |
| --------- | -------------------- | ---- | ------------------------ |
| code      | string               | 否   | 状态码，操作成功则不返回 |
| message   | string               | 否   | 错误描述                 |
| fileList  | &lt;Array&gt;.object | 否   | 删除结果组成的数组       |
| requestId | string               | 否   | 请求序列号，用于错误排查 |

fileList

| 字段   | 类型   | 必填 | 说明                     |
| ------ | ------ | ---- | ------------------------ |
| code   | string | 否   | 删除结果，成功为 SUCCESS |
| fileID | string | 是   | 文件 ID                  |

示例代码

```php
$result = $storage->deleteFile([
"fileList" => [
    "cloud://jimmytest-088bef.jimmytest-088bef-1251059088/a|b.jpeg"
]
]);

$fileList = $result["fileList"];
```

### 下载文件

downloadFile(object)

请求参数

| 字段         | 类型   | 必填 | 说明                   |
| ------------ | ------ | ---- | ---------------------- |
| fileID       | string | 是   | 要下载的文件的 id      |
| tempFilePath | string | 否   | 下载的文件要存储的位置 |

响应参数

| 字段        | 类型   | 必填 | 说明                                                   |
| ----------- | ------ | ---- | ------------------------------------------------------ |
| code        | string | 否   | 状态码，操作成功则不返回                               |
| message     | string | 否   | 错误描述                                               |
| fileContent | Buffer | 否   | 下载的文件的内容。如果传入 tempFilePath 则不返回该字段 |
| requestId   | string | 否   | 请求序列号，用于错误排查                               |

示例代码

```php
$result = $storage->downloadFile([
"fileID" => "cloud://jimmytest-088bef.jimmytest-088bef-1251059088/a|b.jpeg",
// "tempFilePath" => "./tests/2.jpg"
]);
```
