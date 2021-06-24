(self.webpackChunk=self.webpackChunk||[]).push([[4029],{8326:function(l,e,n){"use strict";n.r(e),n.d(e,{data:function(){return a}});const a={key:"v-5f57d08c",path:"/guide/overview/quickstart.html",title:"快速上手",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"安装 CLI",slug:"安装-cli",children:[{level:3,title:"准备",slug:"准备",children:[]},{level:3,title:"安装",slug:"安装",children:[]}]},{level:2,title:"创建项目",slug:"创建项目",children:[{level:3,title:"命令",slug:"命令",children:[]},{level:3,title:"安装依赖",slug:"安装依赖",children:[]},{level:3,title:"NPM Script",slug:"npm-script",children:[]}]}],filePathRelative:"guide/overview/quickstart.md",git:{updatedTime:1624517712e3,contributors:[]}}},1800:function(l,e,n){"use strict";n.r(e),n.d(e,{default:function(){return G}});var a=n(6252);const s=(0,a.uE)('<h1 id="快速上手"><a class="header-anchor" href="#快速上手">#</a> 快速上手</h1><p>本节将介绍如何在全局环境安装 X-BUILD 和通过命令行快速的生成项目。</p><h2 id="安装-cli"><a class="header-anchor" href="#安装-cli">#</a> 安装 CLI</h2><h3 id="准备"><a class="header-anchor" href="#准备">#</a> 准备</h3>',4),t=(0,a.Uk)("需要在本地安装 "),u={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},c=(0,a.Uk)("node.js"),i=(0,a.Uk)(" 和 "),r={href:"https://git-scm.com/",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("git"),h=(0,a.Uk)("。"),o=(0,a.Wm)("li",null,"（可选）全局安装 vue-cli@4.5，本项目基于 vue-cli@4.5 构建，理论上支持所有功能。",-1),d=(0,a.Wm)("h3",{id:"安装"},[(0,a.Wm)("a",{class:"header-anchor",href:"#安装"},"#"),(0,a.Uk)(" 安装")],-1),p=(0,a.Wm)("p",null,[(0,a.Uk)("我们推荐使用 npm 的方式进行"),(0,a.Wm)("strong",null,"全局"),(0,a.Uk)("安装：")],-1),W=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token function"},"install"),(0,a.Uk)(" x-build -g\n")])])],-1),g=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"yarn"),(0,a.Uk)(" global "),(0,a.Wm)("span",{class:"token function"},"add"),(0,a.Uk)(" x-build\n")])])],-1),k=(0,a.Wm)("p",null,"mac、linux 用户需要权限增加 sudo。",-1),f=(0,a.Wm)("p",null,"使用方式类似于 @vue/cli，提供了终端里的 x-build 或 x（简写）命令。",-1),b=(0,a.Wm)("h2",{id:"创建项目"},[(0,a.Wm)("a",{class:"header-anchor",href:"#创建项目"},"#"),(0,a.Uk)(" 创建项目")],-1),v=(0,a.Wm)("h3",{id:"命令"},[(0,a.Wm)("a",{class:"header-anchor",href:"#命令"},"#"),(0,a.Uk)(" 命令")],-1),U=(0,a.Wm)("p",null,"通过以下指令创建一个新项目：",-1),w=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("x-build create "),(0,a.Wm)("span",{class:"token punctuation"},"["),(0,a.Uk)("name"),(0,a.Wm)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n")])])],-1),x=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("x create "),(0,a.Wm)("span",{class:"token punctuation"},"["),(0,a.Uk)("name"),(0,a.Wm)("span",{class:"token punctuation"},"]"),(0,a.Uk)("\n")])])],-1),_=(0,a.uE)('<h3 id="安装依赖"><a class="header-anchor" href="#安装依赖">#</a> 安装依赖</h3><ul><li>输入命令后，模板文件会自动创建名字为[name] 的文件夹，并将模板文件复制到此文件夹内。</li><li>自动初始化 Git。</li><li>依赖会自动安装，会跟你你所安装的包管理工具按优先级选择：</li></ul><p>优先级：yarn &gt; npm</p><div class="custom-container warning"><p class="custom-container-title">提示</p><p>强烈建议不要用直接使用 cnpm 安装，会有各种诡异的 bug，可以通过重新指定 registry 来解决 npm 安装速度慢的问题。若还是不行，可使用 yarn 替代 npm。</p></div><h3 id="npm-script"><a class="header-anchor" href="#npm-script">#</a> NPM Script</h3><p>根据安装后的相关提示，输入相关命令以继续：</p>',6),y=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run serve\n")])])],-1),S=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run build:test\n")])])],-1),C=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run build\n")])])],-1),L=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run analyzer\n")])])],-1),E=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run lint\n")])])],-1),I=(0,a.Wm)("div",{class:"language-bash ext-sh"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"npm"),(0,a.Uk)(" run stylelint\n")])])],-1),j=(0,a.Wm)("div",{class:"custom-container warning"},[(0,a.Wm)("p",{class:"custom-container-title"},"提示"),(0,a.Wm)("p",null,"通常情况下 ESLint 与 Stylelint 没必要单独执行，husky 提供的 git commit 钩子会在你提交代码时对你缓存区里的代码做校验，这会节省你很多的时间。")],-1);var G={render:function(l,e){const n=(0,a.up)("OutboundLink"),G=(0,a.up)("CodeGroupItem"),P=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[s,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[t,(0,a.Wm)("a",u,[c,(0,a.Wm)(n)]),i,(0,a.Wm)("a",r,[m,(0,a.Wm)(n)]),h]),o]),d,p,(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(G,{title:"npm"},{default:(0,a.w5)((()=>[W])),_:1}),(0,a.Wm)(G,{title:"yarn"},{default:(0,a.w5)((()=>[g])),_:1})])),_:1}),k,f,b,v,U,(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(G,{title:"命令"},{default:(0,a.w5)((()=>[w])),_:1}),(0,a.Wm)(G,{title:"缩写"},{default:(0,a.w5)((()=>[x])),_:1})])),_:1}),_,(0,a.Wm)(P,null,{default:(0,a.w5)((()=>[(0,a.Wm)(G,{title:"开发环境"},{default:(0,a.w5)((()=>[y])),_:1}),(0,a.Wm)(G,{title:"测试环境"},{default:(0,a.w5)((()=>[S])),_:1}),(0,a.Wm)(G,{title:"正式环境"},{default:(0,a.w5)((()=>[C])),_:1}),(0,a.Wm)(G,{title:"包分析工具"},{default:(0,a.w5)((()=>[L])),_:1}),(0,a.Wm)(G,{title:"ESLint"},{default:(0,a.w5)((()=>[E])),_:1}),(0,a.Wm)(G,{title:"Stylelint"},{default:(0,a.w5)((()=>[I])),_:1})])),_:1}),j],64)}}}}]);