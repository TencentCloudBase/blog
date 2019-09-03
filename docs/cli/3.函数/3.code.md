# 代码更新

::: warning ⚠️注意事项
所有 Cloudbase CLI 命令均在 `.tcbrc.json` 文件所在目录执行。
:::

当您的函数代码发生改变时，您可以使用下面的命令更新您的云函数的代码：

```sh
# 更新 app 函数的代码
tcb functions:code:update app
```

`functions:code:update` 命令和 `functions:deploy` 命令的主要区别是：`functions:code:update` 命令只会更新函数的代码以及执行入口，不会修改函数的其他配置，而 `functions:deploy` 命令则会修改函数的代码、配置以及触发器等。
