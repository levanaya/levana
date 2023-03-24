"use strict";(self.webpackChunklevana_website=self.webpackChunklevana_website||[]).push([[892],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=m(a),d=n,s=k["".concat(o,".").concat(d)]||k[d]||u[d]||l;return a?r.createElement(s,p(p({ref:t},c),{},{components:a})):r.createElement(s,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=k;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var m=2;m<l;m++)p[m]=a[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8959:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const l={sidebar_position:4},p="React \u8def\u7531",i={unversionedId:"react/React \u8def\u7531",id:"react/React \u8def\u7531",title:"React \u8def\u7531",description:"\u7ec4\u4ef6\u8def\u7531",source:"@site/study/dev/react/React \u8def\u7531.md",sourceDirName:"react",slug:"/react/React \u8def\u7531",permalink:"/levana/dev/react/React \u8def\u7531",draft:!1,tags:[],version:"current",lastUpdatedBy:"levana",lastUpdatedAt:1679635316,formattedLastUpdatedAt:"2023\u5e743\u670824\u65e5",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"React \u5e94\u7528(\u57fa\u4e8eReact\u811a\u624b\u67b6)",permalink:"/levana/dev/react/React \u5e94\u7528"},next:{title:"Redux",permalink:"/levana/dev/react/Redux"}},o={},m=[{value:"1. \u76f8\u5173\u7406\u89e3",id:"1-\u76f8\u5173\u7406\u89e3",level:2},{value:"1.1 SPA\u7684\u7406\u89e3",id:"11-spa\u7684\u7406\u89e3",level:3},{value:"1.2 \u8def\u7531\u7684\u7406\u89e3",id:"12-\u8def\u7531\u7684\u7406\u89e3",level:3},{value:"1.3 react-router-dom\u7684\u7406\u89e3",id:"13-react-router-dom\u7684\u7406\u89e3",level:3},{value:"2. react-router-dom\u76f8\u5173API",id:"2-react-router-dom\u76f8\u5173api",level:2},{value:"2.1 \u5185\u7f6e\u7ec4\u4ef6",id:"21-\u5185\u7f6e\u7ec4\u4ef6",level:3},{value:"2.2 \u5176\u5b83",id:"22-\u5176\u5b83",level:3},{value:"3. \u57fa\u672c\u8def\u7531\u4f7f\u7528",id:"3-\u57fa\u672c\u8def\u7531\u4f7f\u7528",level:2}],c={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"react-\u8def\u7531"},"React \u8def\u7531"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016210227.png",alt:"\u7ec4\u4ef6\u8def\u7531"})),(0,n.kt)("h2",{id:"1-\u76f8\u5173\u7406\u89e3"},"1. \u76f8\u5173\u7406\u89e3"),(0,n.kt)("h3",{id:"11-spa\u7684\u7406\u89e3"},"1.1 SPA\u7684\u7406\u89e3"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5355\u9875Web\u5e94\u7528\uff08single page web application\uff0cSPA\uff09\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6574\u4e2a\u5e94\u7528\u53ea\u6709",(0,n.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u5b8c\u6574\u7684\u9875\u9762"),"\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u70b9\u51fb\u9875\u9762\u4e2d\u7684\u94fe\u63a5",(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u4f1a\u5237\u65b0"),"\u9875\u9762\uff0c\u53ea\u4f1a\u505a\u9875\u9762\u7684",(0,n.kt)("strong",{parentName:"p"},"\u5c40\u90e8\u66f4\u65b0\u3002"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6570\u636e\u90fd\u9700\u8981\u901a\u8fc7ajax\u8bf7\u6c42\u83b7\u53d6, \u5e76\u5728\u524d\u7aef\u5f02\u6b65\u5c55\u73b0\u3002"))),(0,n.kt)("h3",{id:"12-\u8def\u7531\u7684\u7406\u89e3"},"1.2 \u8def\u7531\u7684\u7406\u89e3"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1."),"   ",(0,n.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662f\u8def\u7531?")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e00\u4e2a\u8def\u7531\u5c31\u662f\u4e00\u4e2a\u6620\u5c04\u5173\u7cfb(key:value)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"key\u4e3a\u8def\u5f84, value\u53ef\u80fd\u662ffunction\u6216component"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2."),"   ",(0,n.kt)("strong",{parentName:"p"},"\u8def\u7531\u5206\u7c7b")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u540e\u7aef\u8def\u7531\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7406\u89e3\uff1a value\u662ffunction, \u7528\u6765\u5904\u7406\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u8bf7\u6c42\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u8def\u7531\uff1a router.get(path, function(req, res))"),(0,n.kt)("li",{parentName:"ul"},"\u5de5\u4f5c\u8fc7\u7a0b\uff1a\u5f53node\u63a5\u6536\u5230\u4e00\u4e2a\u8bf7\u6c42\u65f6, \u6839\u636e\u8bf7\u6c42\u8def\u5f84\u627e\u5230\u5339\u914d\u7684\u8def\u7531, \u8c03\u7528\u8def\u7531\u4e2d\u7684\u51fd\u6570\u6765\u5904\u7406\u8bf7\u6c42, \u8fd4\u56de\u54cd\u5e94\u6570\u636e")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u524d\u7aef\u8def\u7531\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u7aef\u8def\u7531\uff0cvalue\u662fcomponent\uff0c\u7528\u4e8e\u5c55\u793a\u9875\u9762\u5185\u5bb9\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6ce8\u518c\u8def\u7531:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'<Route path="/test" component={Test}>\n'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5de5\u4f5c\u8fc7\u7a0b\uff1a\u5f53\u6d4f\u89c8\u5668\u7684path\u53d8\u4e3a/test\u65f6, \u5f53\u524d\u8def\u7531\u7ec4\u4ef6\u5c31\u4f1a\u53d8\u4e3aTest\u7ec4\u4ef6"))),(0,n.kt)("h3",{id:"13-react-router-dom\u7684\u7406\u89e3"},"1.3 react-router-dom\u7684\u7406\u89e3"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"react\u7684\u4e00\u4e2a\u63d2\u4ef6\u5e93\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e13\u95e8\u7528\u6765\u5b9e\u73b0\u4e00\u4e2aSPA\u5e94\u7528\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u57fa\u4e8ereact\u7684\u9879\u76ee\u57fa\u672c\u90fd\u4f1a\u7528\u5230\u6b64\u5e93\u3002"))),(0,n.kt)("h2",{id:"2-react-router-dom\u76f8\u5173api"},"2. react-router-dom\u76f8\u5173API"),(0,n.kt)("h3",{id:"21-\u5185\u7f6e\u7ec4\u4ef6"},"2.1 \u5185\u7f6e\u7ec4\u4ef6"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<BrowserRouter>"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<HashRouter>"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Route>"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Redirect>"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Link>"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<NavLink>"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"<Switch>")))),(0,n.kt)("h3",{id:"22-\u5176\u5b83"},"2.2 \u5176\u5b83"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"history\u5bf9\u8c61")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"match\u5bf9\u8c61")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"withRouter\u51fd\u6570"))),(0,n.kt)("h2",{id:"3-\u57fa\u672c\u8def\u7531\u4f7f\u7528"},"3. \u57fa\u672c\u8def\u7531\u4f7f\u7528"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016211842.png",alt:"image-20221016211842283"})))}u.isMDXComponent=!0}}]);