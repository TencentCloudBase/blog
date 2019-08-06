## 介绍
TCB提供开发应用所需服务和基础设施。tcb-php-sdk 让你可以在服务端（如腾讯云云函数或CVM等）使用php服务访问TCB的的服务。

需要php7及以上版本。

## 使用方式：通过源码包引入
require_once 'tcb-php-sdk/autoload.php'; //相对路径自行调整 

```php
use TencentCloudBase\TCB;
$tcb = new TCB([]);
```
