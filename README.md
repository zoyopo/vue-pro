# vue-part

> a project with .net core webapi

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

<h1>This is a cloud-music App I'm developing,I wish i could hold on to complete it </h1>

<h2>开发日志</h2>

<div><span>2018.05.07&nbsp;&nbsp;</span>使用vuex进行登录信息的响应以及sessionstorage存储</div>

<div><span>2018.05.12&nbsp;&nbsp;</span>由于用的网易云接口都是http的，https服务器访问不了，暂且不用https</div>

<div><span>2018.05.26&nbsp;&nbsp;</span>下一步将歌单详情页，播放音乐详情完成,主要可能涉及到一些问题如下
    <ul>
    <li>旋转cd动画的暂停与开始</li>
    <li>歌曲列表组件的选取或者自己实现</li>
    <li>点击播放的音乐显示信息的动画（因为音乐条用的是别人的组件，绑定事件需明白）</li>
    <li>歌词滚动</li>
    </ul>
</div>

### 2018-08-16
* 歌单详情头部内容的基本完成