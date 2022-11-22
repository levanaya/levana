"use strict";(self.webpackChunklevana_website=self.webpackChunklevana_website||[]).push([[3932],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(a),d=r,u=s["".concat(o,".").concat(d)]||s[d]||k[d]||l;return a?n.createElement(u,p(p({ref:t},m),{},{components:a})):n.createElement(u,p({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<l;c++)p[c]=a[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4398:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},p="React \u5165\u95e8",i={unversionedId:"react/React \u5165\u95e8",id:"react/React \u5165\u95e8",title:"React \u5165\u95e8",description:"react1",source:"@site/study/dev/react/React \u5165\u95e8.md",sourceDirName:"react",slug:"/react/React \u5165\u95e8",permalink:"/levana/dev/react/React \u5165\u95e8",draft:!1,tags:[],version:"current",lastUpdatedBy:"levana",lastUpdatedAt:1669125419,formattedLastUpdatedAt:"2022\u5e7411\u670822\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/levana/dev/category/react"},next:{title:"React \u9762\u5411\u7ec4\u4ef6\u7f16\u7a0b",permalink:"/levana/dev/react/React \u9762\u5411\u7ec4\u4ef6\u7f16\u7a0b"}},o={},c=[{value:"1. React\u7b80\u4ecb",id:"1-react\u7b80\u4ecb",level:2},{value:"1.1 \u5b98\u7f51",id:"11-\u5b98\u7f51",level:3},{value:"1.2 \u4ecb\u7ecd\u63cf\u8ff0",id:"12-\u4ecb\u7ecd\u63cf\u8ff0",level:3},{value:"1.3 React\u7684\u7279\u70b9",id:"13-react\u7684\u7279\u70b9",level:3},{value:"1.4 React\u9ad8\u6548\u7684\u539f\u56e0",id:"14-react\u9ad8\u6548\u7684\u539f\u56e0",level:3},{value:"1.5 \u865a\u62dfDOM",id:"15-\u865a\u62dfdom",level:3},{value:"2. React\u7684\u57fa\u672c\u4f7f\u7528",id:"2-react\u7684\u57fa\u672c\u4f7f\u7528",level:2},{value:"2.1 \u76f8\u5173js\u5e93",id:"21-\u76f8\u5173js\u5e93",level:3},{value:"2.2 \u521b\u5efa\u865a\u62dfDOM\u7684\u4e24\u79cd\u65b9\u5f0f",id:"22-\u521b\u5efa\u865a\u62dfdom\u7684\u4e24\u79cd\u65b9\u5f0f",level:3},{value:"2.3 \u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM",id:"23-\u865a\u62dfdom\u4e0e\u771f\u5b9edom",level:3},{value:"3. React JSX",id:"3-react-jsx",level:2},{value:"3.1 JSX",id:"31-jsx",level:3},{value:"3.2 \u6e32\u67d3\u865a\u62dfDOM(\u5143\u7d20)",id:"32-\u6e32\u67d3\u865a\u62dfdom\u5143\u7d20",level:3},{value:"4. \u6a21\u5757\u4e0e\u7ec4\u4ef6\u3001\u6a21\u5757\u5316\u4e0e\u7ec4\u4ef6\u5316\u7684\u7406\u89e3",id:"4-\u6a21\u5757\u4e0e\u7ec4\u4ef6\u6a21\u5757\u5316\u4e0e\u7ec4\u4ef6\u5316\u7684\u7406\u89e3",level:2},{value:"4.1 \u6a21\u5757",id:"41-\u6a21\u5757",level:3},{value:"4.2 \u7ec4\u4ef6",id:"42-\u7ec4\u4ef6",level:3},{value:"4.3 \u6a21\u5757\u5316",id:"43-\u6a21\u5757\u5316",level:3},{value:"4.4 \u7ec4\u4ef6\u5316",id:"44-\u7ec4\u4ef6\u5316",level:3}],m={toc:c};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-\u5165\u95e8"},"React \u5165\u95e8"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016143200.png",alt:"react1"})),(0,r.kt)("h2",{id:"1-react\u7b80\u4ecb"},"1. React\u7b80\u4ecb"),(0,r.kt)("h3",{id:"11-\u5b98\u7f51"},"1.1 \u5b98\u7f51"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u82f1\u6587\u5b98\u7f51:",(0,r.kt)("a",{parentName:"li",href:"https://reactjs.org/"}," https://reactjs.org/")),(0,r.kt)("li",{parentName:"ol"},"\u4e2d\u6587\u5b98\u7f51: ",(0,r.kt)("a",{parentName:"li",href:"https://react.docschina.org/"},"https://react.docschina.org/"))),(0,r.kt)("h3",{id:"12-\u4ecb\u7ecd\u63cf\u8ff0"},"1.2 \u4ecb\u7ecd\u63cf\u8ff0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7528\u4e8e\u52a8\u6001\u6784\u5efa\u7528\u6237\u754c\u9762\u7684 JavaScript \u5e93(\u53ea\u5173\u6ce8\u4e8e\u89c6\u56fe)"),(0,r.kt)("li",{parentName:"ol"},"\u7531Facebook\u5f00\u6e90")),(0,r.kt)("h3",{id:"13-react\u7684\u7279\u70b9"},"1.3 React\u7684\u7279\u70b9"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u58f0\u660e\u5f0f\u7f16\u7801"),(0,r.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u5316\u7f16\u7801"),(0,r.kt)("li",{parentName:"ol"},"React Native \u7f16\u5199\u539f\u751f\u5e94\u7528"),(0,r.kt)("li",{parentName:"ol"},"\u9ad8\u6548\uff08\u4f18\u79c0\u7684Diffing\u7b97\u6cd5\uff09")),(0,r.kt)("h3",{id:"14-react\u9ad8\u6548\u7684\u539f\u56e0"},"1.4 React\u9ad8\u6548\u7684\u539f\u56e0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u865a\u62df(virtual)DOM, \u4e0d\u603b\u662f\u76f4\u63a5\u64cd\u4f5c\u9875\u9762\u771f\u5b9eDOM\u3002"),(0,r.kt)("li",{parentName:"ol"},"DOM Diffing\u7b97\u6cd5, \u6700\u5c0f\u5316\u9875\u9762\u91cd\u7ed8\u3002")),(0,r.kt)("h3",{id:"15-\u865a\u62dfdom"},"1.5 \u865a\u62dfDOM"),(0,r.kt)("p",null,"\u865a\u62dfDOM\uff08Virtual DOM\uff09\u5b83\u662f\u4f7f\u7528javaScript\u5bf9\u8c61\u6765\u63cf\u8ff0\u771f\u5b9eDOM\uff0c\u865a\u62dfDOM\u7684\u672c\u8d28\u5c31\u662f",(0,r.kt)("strong",{parentName:"p"},"javaScript\u5bf9\u8c61"),"\uff0c\u4f7f\u7528javaScript\u5bf9\u8c61\u6765\u63cf\u8ff0DOM\u7684\u7ed3\u6784\uff0c\u7a0b\u5e8f\u7684\u5404\u79cd\u72b6\u6001\u53d8\u5316\u9996\u5148\u4f5c\u7528\u4e8e\u865a\u62dfDOM\uff0c\u6700\u7ec8\u6620\u5c04\u5230\u771f\u5b9eDOM\u4e0a\u3002"),(0,r.kt)("h2",{id:"2-react\u7684\u57fa\u672c\u4f7f\u7528"},"2. React\u7684\u57fa\u672c\u4f7f\u7528"),(0,r.kt)("h3",{id:"21-\u76f8\u5173js\u5e93"},"2.1 \u76f8\u5173js\u5e93"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"react.js\uff1aReact\u6838\u5fc3\u5e93\u3002"),(0,r.kt)("li",{parentName:"ol"},"react-dom.js\uff1a\u63d0\u4f9b\u64cd\u4f5cDOM\u7684react\u6269\u5c55\u5e93\u3002"),(0,r.kt)("li",{parentName:"ol"},"babel.min.js\uff1a\u89e3\u6790JSX\u8bed\u6cd5\u4ee3\u7801\u8f6c\u4e3aJS\u4ee3\u7801\u7684\u5e93\u3002")),(0,r.kt)("h3",{id:"22-\u521b\u5efa\u865a\u62dfdom\u7684\u4e24\u79cd\u65b9\u5f0f"},"2.2 \u521b\u5efa\u865a\u62dfDOM\u7684\u4e24\u79cd\u65b9\u5f0f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7eafJS\u65b9\u5f0f(\u4e00\u822c\u4e0d\u7528)"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"//\u9700\u6c42\uff1a\u5c55\u793a\u4e00\u4e2aHello,React\u5230\u9875\u9762\u4e0a\n//\u521b\u5efa\u865a\u62dfDOM Virtual DOM\n// const VDOM = React.createElement(\u6807\u7b7e\u540d, \u6807\u7b7e\u5c5e\u6027, \u6807\u7b7e\u5185\u5bb9)\n// \u65b0\u9700\u6c42\uff1a\u5728\u4e0a\u9762\u7684h2\u6807\u7b7e\u4e2d\u5d4c\u5957span\u6807\u7b7e\uff0cspan\u6807\u7b7e\u4e2d\u7684\u5185\u5bb9\u662fHello,React\n// const Span=React.createElement('span',{},'Hello,React')//\u521b\u5efa\u4e00\u4e2a\u865a\u62dfDOM\u5bf9\u8c61\n// const VDOM=React.createElement('h2',{id:'title'},Span)\n//\u5c06\u865a\u62dfDOM\u6e32\u67d3\u5230\u9875\u9762\n// ReactDOM.render(\u865a\u62dfDOM,\u5bb9\u5668)\nReactDOM.render(VDOM, document.getElementById('test'))\n")))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"JSX\u65b9\u5f0f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'//\u9700\u6c42\uff1a\u5c55\u793a\u4e00\u4e2aHello,React\u5230\u9875\u9762\u4e0a\n//\u521b\u5efa\u865a\u62dfDOM Virtual DOM\n//jsx\u5199html\uff0c\u4e0d\u8981\u52a0\u5f15\u53f7\uff0c\u6807\u7b7e\u548cjs\u6df7\u7740\u5199\n      const VDOM = (\n        <h2>\n          <span>Hello,React</span>\n          <span></span>\n        </h2>\n      );\n//\u5c06\u865a\u62dfDOM\u6e32\u67d3\u5230\u9875\u9762\n // ReactDOM.render(\u865a\u62dfDOM,\u5bb9\u5668)\n      ReactDOM.render(VDOM, document.getElementById("test"));\n')))),(0,r.kt)("h3",{id:"23-\u865a\u62dfdom\u4e0e\u771f\u5b9edom"},"2.3 \u865a\u62dfDOM\u4e0e\u771f\u5b9eDOM"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"React\u63d0\u4f9b\u4e86\u4e00\u4e9bAPI\u6765\u521b\u5efa\u4e00\u79cd \u201c\u7279\u522b\u201d \u7684\u4e00\u822cjs\u5bf9\u8c61"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"const")," ",(0,r.kt)("strong",{parentName:"p"},"VDOM")," ",(0,r.kt)("strong",{parentName:"p"},"=")," ",(0,r.kt)("strong",{parentName:"p"},"React"),".",(0,r.kt)("strong",{parentName:"p"},"createElement"),"(",(0,r.kt)("strong",{parentName:"p"},"'xx'"),",",(0,r.kt)("strong",{parentName:"p"},"{"),"id:",(0,r.kt)("strong",{parentName:"p"},"'xx'"),"},'xx')")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0a\u9762\u521b\u5efa\u7684\u5c31\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u865a\u62dfDOM\u5bf9\u8c61")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u865a\u62dfDOM\u5bf9\u8c61\u6700\u7ec8\u90fd\u4f1a\u88abReact\u8f6c\u6362\u4e3a\u771f\u5b9e\u7684DOM")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6211\u4eec\u7f16\u7801\u65f6\u57fa\u672c\u53ea\u9700\u8981\u64cd\u4f5creact\u7684\u865a\u62dfDOM\u76f8\u5173\u6570\u636e, react\u4f1a\u8f6c\u6362\u4e3a\u771f\u5b9eDOM\u53d8\u5316\u800c\u66f4\u65b0\u754c\u3002"))),(0,r.kt)("h2",{id:"3-react-jsx"},"3. React JSX"),(0,r.kt)("h3",{id:"31-jsx"},"3.1 JSX"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5168\u79f0: JavaScript XML")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"react\u5b9a\u4e49\u7684\u4e00\u79cd\u7c7b\u4f3c\u4e8eXML\u7684JS\u6269\u5c55\u8bed\u6cd5: JS + XML\u672c\u8d28\u662f",(0,r.kt)("strong",{parentName:"p"},"React"),".",(0,r.kt)("strong",{parentName:"p"},"createElement"),"(",(0,r.kt)("strong",{parentName:"p"},"component"),", ",(0,r.kt)("strong",{parentName:"p"},"props"),", ...",(0,r.kt)("strong",{parentName:"p"},"children"),")\u65b9\u6cd5\u7684\u8bed\u6cd5\u7cd6")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528: \u7528\u6765\u7b80\u5316\u521b\u5efa\u865a\u62dfDOM "))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5199\u6cd5\uff1a"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f1\uff1a\u5b83\u4e0d\u662f\u5b57\u7b26\u4e32, \u4e5f\u4e0d\u662fHTML/XML\u6807\u7b7e"),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f2\uff1a\u5b83\u6700\u7ec8\u4ea7\u751f\u7684\u5c31\u662f\u4e00\u4e2aJS\u5bf9\u8c61")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6807\u7b7e\u540d\u4efb\u610f: HTML\u6807\u7b7e\u6216\u5176\u5b83\u6807\u7b7e")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6807\u7b7e\u5c5e\u6027\u4efb\u610f: HTML\u6807\u7b7e\u5c5e\u6027\u6216\u5176\u5b83")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u57fa\u672c\u8bed\u6cd5\u89c4\u5219"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9047\u5230 <\u5f00\u5934\u7684\u4ee3\u7801, \u4ee5\u6807\u7b7e\u7684\u8bed\u6cd5\u89e3\u6790: html\u540c\u540d\u6807\u7b7e\u8f6c\u6362\u4e3ahtml\u540c\u540d\u5143\u7d20, \u5176\u5b83\u6807\u7b7e\u9700\u8981\u7279\u522b\u89e3\u6790")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9047\u5230\u4ee5 { \u5f00\u5934\u7684\u4ee3\u7801\uff0c\u4ee5JS\u8bed\u6cd5\u89e3\u6790: \u6807\u7b7e\u4e2d\u7684js\u8868\u8fbe\u5f0f\u5fc5\u987b\u7528{ }\u5305\u542b"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221016172325.png",alt:"image-20221016172325428"})))),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"babel.js\u7684\u4f5c\u7528")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d4f\u89c8\u5668\u4e0d\u80fd\u76f4\u63a5\u89e3\u6790JSX\u4ee3\u7801, \u9700\u8981babel\u8f6c\u8bd1\u4e3a\u7eafJS\u7684\u4ee3\u7801\u624d\u80fd\u8fd0\u884c"),(0,r.kt)("li",{parentName:"ul"},'\u53ea\u8981\u7528\u4e86JSX\uff0c\u90fd\u8981\u52a0\u4e0atype="text/babel", \u58f0\u660e\u9700\u8981babel\u6765\u5904\u7406')),(0,r.kt)("h3",{id:"32-\u6e32\u67d3\u865a\u62dfdom\u5143\u7d20"},"3.2 \u6e32\u67d3\u865a\u62dfDOM(\u5143\u7d20)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8bed\u6cd5: ",(0,r.kt)("strong",{parentName:"li"},"ReactDOM"),".",(0,r.kt)("strong",{parentName:"li"},"render"),"(",(0,r.kt)("strong",{parentName:"li"},"virtualDOM"),", ",(0,r.kt)("strong",{parentName:"li"},"containerDOM"),")"),(0,r.kt)("li",{parentName:"ol"},"\u4f5c\u7528: \u5c06\u865a\u62dfDOM\u5143\u7d20\u6e32\u67d3\u5230\u9875\u9762\u4e2d\u7684\u771f\u5b9e\u5bb9\u5668DOM\u4e2d\u663e\u793a"),(0,r.kt)("li",{parentName:"ol"},"\u53c2\u6570\u8bf4\u660e")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u4e00: \u7eafjs\u6216jsx\u521b\u5efa\u7684\u865a\u62dfdom\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570\u4e8c: \u7528\u6765\u5305\u542b\u865a\u62dfDOM\u5143\u7d20\u7684\u771f\u5b9edom\u5143\u7d20\u5bf9\u8c61(\u4e00\u822c\u662f\u4e00\u4e2adiv)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const name = 'Josh Perez';const element = <h1>Hello, {name}</h1>;\nReactDOM.render(\n  element,\n  document.getElementById('root')\n);\n")),(0,r.kt)("h2",{id:"4-\u6a21\u5757\u4e0e\u7ec4\u4ef6\u6a21\u5757\u5316\u4e0e\u7ec4\u4ef6\u5316\u7684\u7406\u89e3"},"4. \u6a21\u5757\u4e0e\u7ec4\u4ef6\u3001\u6a21\u5757\u5316\u4e0e\u7ec4\u4ef6\u5316\u7684\u7406\u89e3"),(0,r.kt)("h3",{id:"41-\u6a21\u5757"},"4.1 \u6a21\u5757"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7406\u89e3\uff1a\u5411\u5916\u63d0\u4f9b\u7279\u5b9a\u529f\u80fd\u7684js\u7a0b\u5e8f, \u4e00\u822c\u5c31\u662f\u4e00\u4e2ajs\u6587\u4ef6")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u8981\u62c6\u6210\u6a21\u5757\uff1a\u968f\u7740\u4e1a\u52a1\u903b\u8f91\u589e\u52a0\uff0c\u4ee3\u7801\u8d8a\u6765\u8d8a\u591a\u4e14\u590d\u6742\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u590d\u7528js, \u7b80\u5316js\u7684\u7f16\u5199, \u63d0\u9ad8js\u8fd0\u884c\u6548\u7387"))),(0,r.kt)("h3",{id:"42-\u7ec4\u4ef6"},"4.2 \u7ec4\u4ef6"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7406\u89e3\uff1a\u7528\u6765\u5b9e\u73b0\u5c40\u90e8\u529f\u80fd\u6548\u679c\u7684\u4ee3\u7801\u548c\u8d44\u6e90\u7684\u96c6\u5408(html/css/js/image\u7b49\u7b49)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u8981\u7528\u7ec4\u4ef6\uff1a \u4e00\u4e2a\u754c\u9762\u7684\u529f\u80fd\u66f4\u590d\u6742")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u590d\u7528\u7f16\u7801, \u7b80\u5316\u9879\u76ee\u7f16\u7801, \u63d0\u9ad8\u8fd0\u884c\u6548\u7387"))),(0,r.kt)("h3",{id:"43-\u6a21\u5757\u5316"},"4.3 \u6a21\u5757\u5316"),(0,r.kt)("p",null,"\u5f53\u5e94\u7528\u7684js\u90fd\u4ee5\u6a21\u5757\u6765\u7f16\u5199\u7684, \u8fd9\u4e2a\u5e94\u7528\u5c31\u662f\u4e00\u4e2a\u6a21\u5757\u5316\u7684\u5e94\u7528"),(0,r.kt)("h3",{id:"44-\u7ec4\u4ef6\u5316"},"4.4 \u7ec4\u4ef6\u5316"),(0,r.kt)("p",null,"\u5f53\u5e94\u7528\u662f\u4ee5\u591a\u7ec4\u4ef6\u7684\u65b9\u5f0f\u5b9e\u73b0, \u8fd9\u4e2a\u5e94\u7528\u5c31\u662f\u4e00\u4e2a\u7ec4\u4ef6\u5316\u7684\u5e94\u7528"))}k.isMDXComponent=!0}}]);