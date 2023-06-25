## uniapp
uniapp 可视化版本，多端开发推荐使用这个模板，H5、小程序推荐使用cli版！

## 目录结构说明
```text
- uniapp
 - common 一些公共的辅助文件
 - components 公共组件
 - logic 一些复杂界面的逻辑层
 - pages 视图文件
 - static 静态文件
 - store pinia
 -- index.ts 应用启动时的逻辑： 检测登录、加载初始化数据等
 -- websocket.ts websocket封装
 -- types  typescript 类型定义
 - config.example.ts 不同环境配置文件，重命名为config.ts覆盖到 common/config.ts下
 - ......
```

## 所需插件 (点击打开，页面最右侧导入HBuilderX)，已安装过则忽略
> [uni-ui](https://ext.dcloud.net.cn/plugin?id=55)
>
> [compile-typescript](https://ext.dcloud.net.cn/plugin?name=compile-typescript)
>
> [compile-node-sass](https://ext.dcloud.net.cn/plugin?name=compile-node-sass)
>
> [pug-language](https://ext.dcloud.net.cn/plugin?name=pug-language)
>
> [compile-pug-cli](https://ext.dcloud.net.cn/plugin?name=compile-pug-cli)