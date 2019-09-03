# 配置文件说明

`tcbrc.json` 文件是 Cloudbase CLI 使用的配置文件，可以简化简化 Cloudbase CLI 使用，方便项目开发，当使用命令参数缺省时，Cloudbase CLI 会从 `tcbrc.json` 配置文件中解析相关参数并使用，方便开发者以更简单的方式使用 Cloudbase CLI。

## 字段

### envId

**类型**: `String`

envId 代表环境 ID，是环境的唯一标识。

### functionRoot

**类型**：`String`

函数代码存放的文件夹路径，相对于项目根目录的路径。

### functions

**类型**：[CloudFunction](#cloudfunction) 组成的数组

函数配置组成的数组。

## 结构体

### CloudFunction

|   名称   |                          类型                          |               描述                |
| :------: | :----------------------------------------------------: | :-------------------------------: |
|   name   |                         String                         |             函数名称              |
|  config  |      [CloudFunctionConfig](#cloudfunctionconfig)       |           函数配置对象            |
| triggers | Array of [CloudFunctionTrigger](#cloudfunctiontrigger) |                                   |
| handler  |                         String                         |             函数入口              |
|  params  |                         Object                         | invoke 触发函数时，传入函数的参数 |

### CloudFunctionConfig

|     名称     |  类型  |                      描述                       |
| :----------: | :----: | :---------------------------------------------: |
|   timeout    | Number |                  函数超时时间                   |
| envVariables | Object |            包含环境变量的键值对对象             |
|     vpc      |  [VPC](#vpc)   |                  私有网络配置                   |
|   runtime    | String | 运行时环境配置，可选值： `Nodejs8.9, Php7, Java8` |

### CloudFunctionTrigger

|  名称  |  类型  |                         描述                          |
| :----: | :----: | :---------------------------------------------------: |
|  name  | String |                      触发器名称                       |
|  type  | String |               触发器类型，可选值：timer               |
| config | String | 触发器配置，在定时触发器下，config 格式为 cron 表达式 |

### VPC

|   名称   |  类型  |    描述     |
| :------: | :----: | :---------: |
|  vpcId   | String |   VPC Id    |
| subnetId | String | VPC 子网 Id |

## 参考配置

```js
{
    // 关联环境 ID
    "envId": "dev-xxxx",
    // 云函数文件夹名称，相对路径，可以省略 './
    "functionRoot": "functions",
    // 函数配置
    "functions": [
        {
            // functions 文件夹下函数文件夹的名称，即函数名
            "name": "app",
            // 函数配置
            "config": {
                // 超时时间，单位：秒 S
                "timeout": 5,
                // 环境变量
                "envVariables": {
                    "key": "value"
                },
                // 私有网络配置，如果不使用私有网络，可不配置
                "vpc": {
                    // vpc id
                    "vpcId": "vpc-xxx",
                    // 子网 id
                    "subnetId": "subnet-xxx"
                },
                // 运行时，目前可选运行包含：Nodejs8.9, Php7, Java8
                // 此参数可以省略，默认为 Nodejs8.9
                "runtime": "Nodejs8.9"
            },
            // 函数触发器，说明见文档: https://cloud.tencent.com/document/product/876/32314
            "triggers": [
                {
                    // name: 触发器的名字
                    "name": "myTrigger",
                    // type: 触发器类型，目前仅支持 timer （即定时触发器）
                    "type": "timer",
                    // config: 触发器配置，在定时触发器下，config 格式为 cron 表达式
                    "config": "0 0 2 1 * * *"
                }
            ],
            // 函数处理入口，Node 和 PHP 项目可以省略，默认值为 index.main
            // 因 Java 的 handler 配置较为特殊，所以当运行时为 Java 时，handler 不能省略
            // 如：package.Class::mainHandler
            "handler": "index.main",
            // functions:invoke 本地触发云函数时的调用参数
            "params": {},
        }
    ]
}
```
