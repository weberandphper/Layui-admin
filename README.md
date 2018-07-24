# Layui-admin

一个现成的基于 Layui+Vue的后台系统模板，开箱即用（最近开源，将会长期维护，文档还在整理中）

# 前言

前后端小伙伴们对后台系统肯定都不陌生，市面上基于主流前端UI框架的后台模板一抓一大把。基于Bootstrap风格的，基于Vue的iView、Element。基于React的Ant Design等等。但是很多时候你想要的仅仅是一个现成的页面模板，一个能迅速帮你完成开发的框架而已，Layui-admin就是这样一个接近完成的后台系统模板，它已经帮你完成了从登录验证，记住密码，权限管理，字段校验，搜索查询，联动全屏，刷新，主题切换等一系列功能的后台模板。它最大的特定就是帮你完成了这类系统中常见的数据交互部分，你需要做的就是理解交互原理，对接接口，替换字段，刷新。哇！原来这么简单！（so cool !）。

__注：因为众所周知的原因，本项目完全不支持ie9及ie9以下的浏览器，对于采用ie内核小于9的国产浏览器给出切换提示。首次加载采用极速模式。__


## 说明

该项目是一个通用的后台系统模板框架，交互方式和代码复用性很高，基本上只要你理解了原理，会写一个页面，其他的自然不成问题。


## 技术栈

Layui 2 + Vue 2 + es5 + Router


## 特点

- 整个前端页面原理基于iframe标签页实现，偏传统开发方式，没有纷杂的前端配置，能够做到上手即用，上手门槛低
- 响应式框架，支持多端，提供常见主题，可自己定制（正在适配）
- 封装了零碎小功能，可以更具需求增删改
- 基础数据采用双向绑定，简单高效，常见交互方式demo完整，功能内容丰富
- 浏览器不支持检测
- 数据请求部分已经帮你写好，你要做的只是获取数据和简单校验
- Layui-Admin基于Layui+vue，采用前后端完成分离的方式运行（JSON WEB TOKEN 认证）
- 免费、


## 适用人群和项目

- 中小型的后台系统
- 服务器端开发人员
- 时间紧，任务重，前端人数少，想尽快完成项目的小伙伴
- 虽然采用了目前主流的方案，但实际效果并不理想



## 项目运行

```
git clone https://github.com/weberandphper/Layui-admin.git

修改common.js的接口配置文件

var baseUrl = window.baseUrl='http://192.168.1.138:8001';

设置WEB服务器站点(nginx,apache,iis,编辑器内置web服务器都可以)

浏览器访问 http:localhost/login.html

```



## 目标功能 （注：demo都是这类系统中最通用的功能模块，实际开发中根据需求自己改写）

- [x] 登录，记住账号密码 -- 完成
- [x] 功能菜单列表切换 -- 完成
- [x] 便捷菜单查询 -- 完成
- [x] 服务器时间，实时天气，主体皮肤切换 -- 完成
- [x] 个人信息，退出，消息提示，更新说明 -- 完成
- [x] 权限列表获取，功能菜单展开，收缩 -- 完成
- [x] 多页面切换，关闭，批量处理功能 -- 完成
- [x] 常见功能按钮（全屏，锁屏，刷新本页，二维码还有若干隐藏按钮） -- 完成









## 效果展示

[查看demo请戳这里](http://www.anspray.com:8081/)（请用chrome浏览器预览）


## 上图



![image](https://github.com/weberandphper/Layui-admin/blob/master/showimg/account.png)


![image](https://note.youdao.com/favicon.ico)


![image](https://note.youdao.com/favicon.ico)


![image](https://note.youdao.com/favicon.ico)





## 运行程序

配置common.js接口地址和Layui模块入口

localhost/index.html


## 项目结构说明


```
.
├── build                                       // 项目主题,自定义模块
├── components                                  // 自定义组件
├── datas                                       // 模拟接口数据
├── module                                      // 业务模块划分(业务代码)
│   ├── account                              	// 账号模块
│   │   ├── account.html                        // 账号管理页面
│   │   └── role.html							// 角色管理页面
│   ├── count                              	    // 会员管理
│   │   ├── account.html                        // 会员列表
│   ├── drugstore                              	// 公司管理模块
│   │   ├── companylist.html                    // 公司列表
│   │   └── form.html							// 外部表单
│   ├── finance                              	// 财务管理模块
│   │   ├── tradedetail.html                    // 交易明细
│   ├── member                              	// 会员管理模块
│   │   ├── memberlist.html                     // 会员列表
│   ├── other                              	    // 其他模块
│   │   ├── resetpassword.html                  // 重置密码
│   ├── plugins                                 // 引用的插件或者资源库存（Layui+vue+echarts）
│   ├── resources                               // 静态资源
│   ├── About.txt                               // 更新说明
│   ├── common.css                              // 公共样式
│   ├── common.js                               // 公共函数,接口和Layui模块配置
│   ├── favicon.ico                             // ico图标
│   ├── index.html                              // 首页
│   ├── login.html                              // 登录页面
│   ├── main.html                               // 首页统计页面
│   ├── manifest.appcache                       // 应用缓存配置
│   ├── README.md                               // README.md
│   ├── styles.css                              // 首页样式


```


## 注意点

如果你想用这套的话，下面的就要好好看了。


由于数据请求全靠ajax，所以这块我已经提前封装好了，函数节流，防抖，还有请求超时或失败提示，token失效跳转等已经写好了，代码很简单，注释也很全面，所以和请求相关的尽量使用此封装，不满足需求的可在此基础上封装，模块位置 /build/js/ajaxmod.js


## 后端接口

后端接口格式


```

{
	"data": {
		"enums": {},
	},
	"success": true,
	"message": "",
	"code": 200
}

```

为了..... 等一系列原因，请尽量保证接口为restful，每个请求验证token。失效需要重新登录


后端特定code的定义

此code非http状态码，即便请求失败，但是code可能依然是200，此处我就不详细解释了。但是一般后端会将约定好的特定code返回表示特定的含义。比如后端小哥告诉我 code == 1001 代表 登录验证失效。所以我在ajax封装中对1001进行了特定的判断，然后 layer.msg('登录验证失效，即将跳转到登录页面');


分页接口

注意：后台系统中分页算是非常重要的一个功能了，其中包含了查询。Layui对分页的封装是我用过目前最方便和好用的。如果你是从后端分页过来的很容易get到点。当然现在即便分页放后端，后端框架也基本上都集成了。分页放前端，后端写的更少。

请尽量保证后端分页接口数据格式为：

```
{
	"data": [{
		"id": 20180612,
		"name": "anspray"
	}],
	"count": 2061,
	"success": true,
	"message": "",
	"code": 200
}

```

如果后端接口格式或者字段不匹配，请使用table.render（...response: {})进行转换


## 前端

checkbox bug

vue 绑定数据在遇到select和checkbox有问题



## 关键代码释解


页面模块如何划分

本项目是后台系统，所以主要开发任务在于功能页面的开发，前端module内的模块划分按照业务模块（原型）或者后端模块划分即可，具体命名可以和后端统一下。划分和单页应用开发的划分是类似的。


## 前端路由部分

该后台模板支持前端路由，采用url hash 原理，比如即  http://localhost/index.html#adduser, iframe 就会去请求module/user/adduser.html 页面完成加载。路由地址在build/js/routermod.js下，路由模块加载位于common.js下，在index.html完成对权限列表的添加。



## 编写原则

为什么采用Layui为主体呢，就是应为Layui提供一致的UI风格(很适合做这种后台系统)，提供众多组件和交互方案，采用这套事倍功半。vue作为当下热门的mvvm框架，其实很多功能和Layui本身是冲突的。同一个功能或者数据操作Layui和Vue都可以完成。如何选择呢？
答：数据交互部分，包括数据的请求，发送，事件的触发常见函数的调用优秀采用Layui提供的，对于数据的操作，数据的绑定，优先用Vue，两者在操作dom和数据上尽量做到不冲突。让二者都发挥各自的优点。


吐槽

到目前为止，后台系统开发了很多个，从前端嵌套在后端页面中，到后端模板输出，到现在的前后端完全分离。每种方式都有自己的优点和特定，但是就后台系统而言，采用前后端分离应该最佳的开发方式了。



Layui 的暂存bug（老旧版本可能会有这个问题）

Layui的form.on在数据提交的时候，checkbox的序列化存在问题，会在[]中加入index，造成后端接受数据错误。目前在序列化表单前解决


Layui配合vue使用中出现的问题

Layui对原生表单的封装在和vue绑定数据的时候会有问题。


## 存在的问题

iframe中相同资源的加载

index.html和子iframe中的相同静态资源浏览器是怎么处理的呢？

你会发现假如你在父页面中引用了common.css,在子页面中的common.css是不是直接用缓存了呢？实际上iframe的所有资源浏览器是会重新请求一遍。这点不同于子页面是ajax获取渲染的方式。父页面和子页面（iframe）的数据传递就不要用url传值了，这个在序列化复杂对象时会有问题，推荐直接layero.find("iframe")[0].contentWindow.vm.setdata(data)这种，细节见代码，子对父的传值 parent.closeandrefresh()，加上双向数据绑定开发会很方便，contentWindow和parent请自行查阅文档

关于缓存

由于该后台模板不是按照单页面那样开发的，所以没有办法对静态资源部分进行单独处理。但在我实际的开发中页面缓存又很烦人，我这边采用的方式是配置应用缓存，appcache的配置和使用方法请自行查阅，web服务器端的meta头的设置不要忘了，不管是IIS还是apache还是nginx思路都是一样的。

多端适配

目前在多端的显示和提示还有很多问题，正在改进。



## 目标


我的目标是想编写一个相对完整的后台系统模板，它的交互方式成熟，页面风格统一，页面整齐。定制化程度相对较高。无论是前端还是后端都能够快速上手，帮助你又好又快的完成产品或者项目。



## 最后

由于我不太善于表达，所以文本都很生硬，请大家见谅

由于水平和时间有限，所以难免会有错误，欢迎lssues提出，我会在线解决。

如果喜欢一定要star呀 ！



