## 上传文件

`uploadFile(object)`

### 请求参数

| 字段             | 类型             | 必填 | 说明                       |
| ---------------- | ---------------- | ---- | -------------------------- |
| cloudPath        | string           | 是   | 文件的绝对路径，包含文件名 |
| filePath         | HTML upload file | 是   | 要上传的文件对象           |
| onUploadProgress | function         | 否   | 上传进度回调               |

**注：`cloudPath` 为文件的绝对路径，包含文件名 foo/bar.jpg、foo/bar/baz.jpg 等，不能包含除[0-9 , a-z , A-Z]、/、!、-、\_、.、、\*和中文以外的字符，使用 / 字符来实现类似传统文件系统的层级结构。[查看详情](https://cloud.tencent.com/document/product/436/13324)**

### 响应参数

| 字段      | 类型   | 必填 | 说明                                    |
| --------- | ------ | ---- | --------------------------------------- |
| code      | string | 否   | 状态码，操作成功则不返回                |
| message   | string | 否   | 错误描述                                |
| fileID    | fileID | 是   | 文件唯一 ID，用来访问文件，建议存储起来 |
| requestId | string | 否   | 请求序列号，用于错误排查                |

### 示例代码

```javascript
// promise
const result = await app.uploadFile({
  cloudPath: 'test-admin.jpeg',
  filePath: document.getElementById('file').files[0],
  onUploadProgress: function(progressEvent) {
    console.log(progressEvent);
    var percentCompleted = Math.round(
      (progressEvent.loaded * 100) / progressEvent.total
    );
  }
});

// callback
await app.uploadFile(
  {
    cloudPath: 'test-admin.jpeg',
    filePath: document.getElementById('file').files[0],
    onUploadProgress: function(progressEvent) {
      console.log(progressEvent);
      var percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
    }
  },
  function(err, res) {}
);
```

#### 注意

**1.0.1 版本后，为了提高文件上传性能，文件上传方式修改为直接上传到对象存储，为了防止在使用过程中出现 CORS 报错，需要到 Web 控制台/用户管理/登录设置选项中设置安全域名。如果已有域名出现 CORS 报错，请删除安全域名，重新添加。**

## 获取文件下载链接

`getTempFileURL(object)`

### 请求参数

| 字段     | 类型                 | 必填 | 说明                       |
| -------- | -------------------- | ---- | -------------------------- |
| fileList | &lt;Array&gt;.string | 是   | 要下载的文件 ID 组成的数组 |

#### fileList

| 字段   | 类型    | 必填 | 说明           |
| ------ | ------- | ---- | -------------- |
| fileID | string  | 是   | 文件 ID        |
| maxAge | Integer | 是   | 文件链接有效期 |

### 响应参数

| 字段      | 类型                 | 必填 | 说明                         |
| --------- | -------------------- | ---- | ---------------------------- |
| code      | string               | 否   | 状态码，操作成功则为 SUCCESS |
| message   | string               | 否   | 错误描述                     |
| fileList  | &lt;Array&gt;.object | 否   | 存储下载链接的数组           |
| requestId | string               | 否   | 请求序列号，用于错误排查     |

#### fileList

| 字段        | 类型   | 必填 | 说明                     |
| ----------- | ------ | ---- | ------------------------ |
| code        | string | 否   | 删除结果，成功为 SUCCESS |
| fileID      | string | 是   | 文件 ID                  |
| tempFileURL | string | 是   | 文件访问链接             |

### 示例代码

```javascript
// promise
app
  .getTempFileURL({
    fileList: ['cloud://test-28farb/a.png']
  })
  .then(res => {});

// callback
app.getTempFileURL(
  {
    fileList: ['cloud://test-28farb/a.png']
  },
  function(err, res) {}
);
```

## 删除文件

`deleteFile(object)`

### 请求参数

| 字段     | 类型                 | 必填 | 说明                       |
| -------- | -------------------- | ---- | -------------------------- |
| fileList | &lt;Array&gt;.string | 是   | 要删除的文件 ID 组成的数组 |

### 响应参数

| 字段      | 类型                 | 必填 | 说明                     |
| --------- | -------------------- | ---- | ------------------------ |
| code      | string               | 否   | 状态码，操作成功则不返回 |
| message   | string               | 否   | 错误描述                 |
| fileList  | &lt;Array&gt;.object | 否   | 删除结果组成的数组       |
| requestId | string               | 否   | 请求序列号，用于错误排查 |

### fileList

| 字段   | 类型   | 必填 | 说明                     |
| ------ | ------ | ---- | ------------------------ |
| code   | string | 否   | 删除结果，成功为 SUCCESS |
| fileID | string | 是   | 文件 ID                  |

### 示例代码

```javascript
// promise
app
  .deleteFile({
    fileList: ['cloud://jimmytest-088bef/1534576354877.jpg']
  })
  .then(res => {});

// callback
app.deleteFile(
  {
    fileList: ['cloud://jimmytest-088bef/1534576354877.jpg']
  },
  function(res) {}
);
```

<!-- ### 下载文件

downloadFile(object)

请求参数

| 字段 | 类型 | 必填 | 说明
| --- | --- | --- | --- |
| fileID | string | 是 | 要下载的文件的id
| tempFilePath | string | 否 | 下载的文件要存储的位置

响应参数

| 字段 | 类型 | 必填 | 说明
| --- | --- | --- | --- |
| code | string | 否 | 状态码，操作成功则不返回
| message | string | 否 | 错误描述
| fileContent | Buffer | 否 | 下载的文件的内容。如果传入tempFilePath则不返回该字段
| requestId | string | 否 | 请求序列号，用于错误排查

示例代码

```javascript
let result = await tcb.downloadFile({
    fileID: "cloud://aa-99j9f/my-photo.png",
    // tempFilePath: '/tmp/test/storage/my-photo.png'
});
``` -->
