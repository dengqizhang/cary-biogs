# cary-biogs

## 项目概述

- 该项目用于个人博客的前端框架模板部分，用于生成一个动态的前端模板，基于 vue3+ts+vue-router+axios 等。

## 使用说明

拉取到本地后
`npm install`

运行
`npm run dev`

可查看到测试数据，如果想替换自己的数据，可直接更改`src\localData`的本地数据。

例如：新加文章，就需要在`src\localData\article\index.ts`文件中的 articleData 数组中，新加对象。

格式为 `src\localData\article\types.ts` 的要求，navId 为：

- 2： 项目经历
- 3： 技术积累
- 4： 网络杂谈
- 5： 工具收集

则匹配到对应导航项的文章

## 版本信息

node 18.x

vue3

## 项目状态

完成主要功能，及数据展示，目前数据在 `src\localData`中。

## 联系信息

2435563017@qq.com

## 贡献者
