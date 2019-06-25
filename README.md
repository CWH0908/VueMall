# cwh 的 vue 项目

## 到处都是坑呐！~

#vsconde 侧边栏默认工具咋没打开的啊

## 传统方式提交项目到github
1. git add .
2. git commit -m "这是我第？次提交"
3. git push

## 1 首页中的App组件
1. Header 头部， 使用Mint-UI中的Header组件
2. 留出中间路由组件部分
3. Tabbar 底部，使用MUI中的Tabbar.html中的底部栏组件
    + 购物车小图标位于扩展的图标样式文件中，需要导入css和font中的拓展文件，然后给购物车添加样式
## 2 将 tabbar 改为router-link

## 3 点击不同的tabbar底部选项，在中间路由组件中切换不同组件

## 4 制作首页轮播图
+ 轮播图图片加载（此处由于没有后台服务器，只使用本地图片加载轮播图）

## 5 首页下的九宫格菜单选项