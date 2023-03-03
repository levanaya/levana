"use strict";(self.webpackChunklevana_website=self.webpackChunklevana_website||[]).push([[3081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(n),s=l,k=u["".concat(o,".").concat(s)]||u[s]||d[s]||r;return n?a.createElement(k,p(p({ref:t},c),{},{components:n})):a.createElement(k,p({ref:t},c))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_position:2},p="JavaScript\u57fa\u7840",i={unversionedId:"JavaScript/JavaScript\u57fa\u7840",id:"JavaScript/JavaScript\u57fa\u7840",title:"JavaScript\u57fa\u7840",description:"\u4e00\u3001\u4ecb\u7ecd",source:"@site/study/dev/JavaScript/JavaScript\u57fa\u7840.md",sourceDirName:"JavaScript",slug:"/JavaScript/JavaScript\u57fa\u7840",permalink:"/levana/dev/JavaScript/JavaScript\u57fa\u7840",draft:!1,tags:[],version:"current",lastUpdatedBy:"levanaya",lastUpdatedAt:1677850659,formattedLastUpdatedAt:"2023\u5e743\u67083\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"ECMAScript 6",permalink:"/levana/dev/JavaScript/ECMAScript6"},next:{title:"Web API",permalink:"/levana/dev/JavaScript/WebApi"}},o={},m=[{value:"\u4e00\u3001\u4ecb\u7ecd",id:"\u4e00\u4ecb\u7ecd",level:3},{value:"1.1 \u5f15\u5165\u65b9\u5f0f",id:"11-\u5f15\u5165\u65b9\u5f0f",level:4},{value:"\u5185\u90e8\u5f62\u5f0f",id:"\u5185\u90e8\u5f62\u5f0f",level:5},{value:"\u5916\u90e8\u5f62\u5f0f",id:"\u5916\u90e8\u5f62\u5f0f",level:5},{value:"1.2 \u6ce8\u91ca\u548c\u7ed3\u675f\u7b26",id:"12-\u6ce8\u91ca\u548c\u7ed3\u675f\u7b26",level:4},{value:"\u5355\u884c\u6ce8\u91ca",id:"\u5355\u884c\u6ce8\u91ca",level:5},{value:"\u591a\u884c\u6ce8\u91ca",id:"\u591a\u884c\u6ce8\u91ca",level:5},{value:"\u7ed3\u675f\u7b26",id:"\u7ed3\u675f\u7b26",level:5},{value:"1.3 \u8f93\u5165\u548c\u8f93\u51fa",id:"13-\u8f93\u5165\u548c\u8f93\u51fa",level:4},{value:"\u8f93\u51fa",id:"\u8f93\u51fa",level:5},{value:"\u8f93\u5165",id:"\u8f93\u5165",level:5},{value:"\u4e8c\u3001\u53d8\u91cf",id:"\u4e8c\u53d8\u91cf",level:3},{value:"2.1 \u58f0\u660e\u548c\u8d4b\u503c",id:"21-\u58f0\u660e\u548c\u8d4b\u503c",level:4},{value:"\u58f0\u660e",id:"\u58f0\u660e",level:5},{value:"\u8d4b\u503c",id:"\u8d4b\u503c",level:5},{value:"2.2 \u5173\u952e\u5b57",id:"22-\u5173\u952e\u5b57",level:4},{value:"2.3 \u53d8\u91cf\u540d\u547d\u540d\u89c4\u5219",id:"23-\u53d8\u91cf\u540d\u547d\u540d\u89c4\u5219",level:4},{value:"\u4e09\u3001\u6570\u636e\u7c7b\u578b",id:"\u4e09\u6570\u636e\u7c7b\u578b",level:3},{value:"3.1 \u6570\u503c\u7c7b\u578b",id:"31-\u6570\u503c\u7c7b\u578b",level:4},{value:"3.2 \u5b57\u7b26\u4e32\u7c7b\u578b",id:"32-\u5b57\u7b26\u4e32\u7c7b\u578b",level:4},{value:"3.3 \u5e03\u5c14\u7c7b\u578b",id:"33-\u5e03\u5c14\u7c7b\u578b",level:4},{value:"3.4 undefined",id:"34-undefined",level:4},{value:"\u56db\u3001\u7c7b\u578b\u8f6c\u6362",id:"\u56db\u7c7b\u578b\u8f6c\u6362",level:3},{value:"4.1 \u9690\u5f0f\u8f6c\u6362",id:"41-\u9690\u5f0f\u8f6c\u6362",level:4},{value:"4.2\u663e\u5f0f\u8f6c\u6362",id:"42\u663e\u5f0f\u8f6c\u6362",level:4},{value:"Number",id:"number",level:5}],c={toc:m};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"javascript\u57fa\u7840"},"JavaScript\u57fa\u7840"),(0,l.kt)("h3",{id:"\u4e00\u4ecb\u7ecd"},"\u4e00\u3001\u4ecb\u7ecd"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u638c\u63e1 JavaScript \u7684\u5f15\u5165\u65b9\u5f0f\uff0c\u521d\u6b65\u8ba4\u8bc6 JavaScript \u7684\u4f5c\u7528")),(0,l.kt)("h4",{id:"11-\u5f15\u5165\u65b9\u5f0f"},"1.1 \u5f15\u5165\u65b9\u5f0f"),(0,l.kt)("p",null,"JavaScript \u7a0b\u5e8f\u4e0d\u80fd\u72ec\u7acb\u8fd0\u884c\uff0c\u5b83\u9700\u8981\u88ab\u5d4c\u5165 HTML \u4e2d\uff0c\u7136\u540e\u6d4f\u89c8\u5668\u624d\u80fd\u6267\u884c JavaScript \u4ee3\u7801\u3002\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," \u6807\u7b7e\u5c06 JavaScript \u4ee3\u7801\u5f15\u5165\u5230 HTML \u4e2d\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,l.kt)("h5",{id:"\u5185\u90e8\u5f62\u5f0f"},"\u5185\u90e8\u5f62\u5f0f"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," \u6807\u7b7e\u5305\u88f9 JavaScript \u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u5f15\u5165\u65b9\u5f0f</title>\n</head>\n<body>\n  \x3c!-- \u5185\u8054\u5f62\u5f0f\uff1a\u901a\u8fc7 script \u6807\u7b7e\u5305\u88f9 JavaScript \u4ee3\u7801 --\x3e\n  <script>\n    alert(\'\u55e8\uff0c\u6b22\u8fce\u6765\u4f20\u667a\u64ad\u5b66\u4e60\u524d\u7aef\u6280\u672f\uff01\');\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h5",{id:"\u5916\u90e8\u5f62\u5f0f"},"\u5916\u90e8\u5f62\u5f0f"),(0,l.kt)("p",null,"\u4e00\u822c\u5c06 JavaScript \u4ee3\u7801\u5199\u5728\u72ec\u7acb\u7684\u4ee5 .js \u7ed3\u5c3e\u7684\u6587\u4ef6\u4e2d\uff0c\u7136\u540e\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"script")," \u6807\u7b7e\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u5c5e\u6027\u5f15\u5165"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// demo.js\ndocument.write('\u55e8\uff0c\u6b22\u8fce\u6765\u4f20\u667a\u64ad\u5b66\u4e60\u524d\u7aef\u6280\u672f\uff01');\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u5f15\u5165\u65b9\u5f0f</title>\n</head>\n<body>\n  \x3c!-- \u5916\u90e8\u5f62\u5f0f\uff1a\u901a\u8fc7 script \u7684 src \u5c5e\u6027\u5f15\u5165\u72ec\u7acb\u7684 .js \u6587\u4ef6 --\x3e\n  <script src="demo.js"><\/script>\n</body>\n</html>\n')),(0,l.kt)("p",null,"\u5982\u679c script \u6807\u7b7e\u4f7f\u7528 src \u5c5e\u6027\u5f15\u5165\u4e86\u67d0 .js \u6587\u4ef6\uff0c\u90a3\u4e48 \u6807\u7b7e\u7684\u4ee3\u7801\u4f1a\u88ab\u5ffd\u7565\uff01\uff01\uff01\u5982\u4e0b\u4ee3\u7801\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u5f15\u5165\u65b9\u5f0f</title>\n</head>\n<body>\n  \x3c!-- \u5916\u90e8\u5f62\u5f0f\uff1a\u901a\u8fc7 script \u7684 src \u5c5e\u6027\u5f15\u5165\u72ec\u7acb\u7684 .js \u6587\u4ef6 --\x3e\n  <script src="demo.js">\n    // \u6b64\u5904\u7684\u4ee3\u7801\u4f1a\u88ab\u5ffd\u7565\u6389\uff01\uff01\uff01\uff01\n    alert(666);  \n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h4",{id:"12-\u6ce8\u91ca\u548c\u7ed3\u675f\u7b26"},"1.2 \u6ce8\u91ca\u548c\u7ed3\u675f\u7b26"),(0,l.kt)("p",null,"\u901a\u8fc7\u6ce8\u91ca\u53ef\u4ee5\u5c4f\u853d\u4ee3\u7801\u88ab\u6267\u884c\u6216\u8005\u6dfb\u52a0\u5907\u6ce8\u4fe1\u606f\uff0cJavaScript \u652f\u6301\u4e24\u79cd\u5f62\u5f0f\u6ce8\u91ca\u8bed\u6cd5\uff1a"),(0,l.kt)("h5",{id:"\u5355\u884c\u6ce8\u91ca"},"\u5355\u884c\u6ce8\u91ca"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"// ")," \u6ce8\u91ca\u5355\u884c\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u6ce8\u91ca</title>\n</head>\n<body>\n  \n  <script>\n    // \u8fd9\u79cd\u662f\u5355\u884c\u6ce8\u91ca\u7684\u8bed\u6cd5\n    // \u4e00\u6b21\u53ea\u80fd\u6ce8\u91ca\u4e00\u884c\n    // \u53ef\u4ee5\u91cd\u590d\u6ce8\u91ca\n    document.write(\'\u55e8\uff0c\u6b22\u8fce\u6765\u4f20\u667a\u64ad\u5b66\u4e60\u524d\u7aef\u6280\u672f\uff01\');\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h5",{id:"\u591a\u884c\u6ce8\u91ca"},"\u591a\u884c\u6ce8\u91ca"),(0,l.kt)("p",null,"\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"/* */")," \u6ce8\u91ca\u591a\u884c\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u6ce8\u91ca</title>\n</head>\n<body>\n  \n  <script>\n    /* \u8fd9\u79cd\u7684\u662f\u591a\u884c\u6ce8\u91ca\u7684\u8bed\u6cd5 */\n    /*\n        \u66f4\u5e38\u89c1\u7684\u591a\u884c\u6ce8\u91ca\u662f\u8fd9\u79cd\u5199\u6cd5\n        \u5728\u4e9b\u53ef\u4ee5\u4efb\u610f\u6362\u884c\n        \u591a\u5c11\u884c\u90fd\u53ef\u4ee5\n      */\n    document.write(\'\u55e8\uff0c\u6b22\u8fce\u6765\u4f20\u667a\u64ad\u5b66\u4e60\u524d\u7aef\u6280\u672f\uff01\');\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u7f16\u8f91\u5668\u4e2d\u5355\u884c\u6ce8\u91ca\u7684\u5feb\u6377\u952e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"ctrl + /"))),(0,l.kt)("h5",{id:"\u7ed3\u675f\u7b26"},"\u7ed3\u675f\u7b26"),(0,l.kt)("p",null,"\u5728 JavaScript \u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},";")," \u4ee3\u8868\u4e00\u6bb5\u4ee3\u7801\u7684\u7ed3\u675f\uff0c\u591a\u6570\u60c5\u51b5\u4e0b\u53ef\u4ee5\u7701\u7565 ",(0,l.kt)("inlineCode",{parentName:"p"},";")," \u4f7f\u7528\u56de\u8f66\uff08enter\uff09\u66ff\u4ee3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u7ed3\u675f\u7b26</title>\n</head>\n<body>\n  \n  <script> \n    alert(1);\n    alert(2);\n    alert(1)\n    alert(2)\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"let num  = 10\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-css"},"div {\n    color: red;\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<div>\n    \n</div>\n")),(0,l.kt)("p",null,"JavaScript \u8ddf HTML \u548c CSS \u4e00\u6837\uff0c\u4f1a\u5ffd\u7565\u3010\u4e00\u4e9b\u3011\u7a7a\u767d\u7b26\uff0c\u4f46\u662f\u6362\u884c\u7b26\uff08\u56de\u8f66\uff09\u4f1a\u88ab\u8bc6\u522b\u6210\u7ed3\u675f\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},";"),"\uff0c\u56e0\u6b64\u5728\u5b9e\u9645\u5f00\u53d1\u4e2d\u6709\u8bb8\u591a\u4eba\u4e3b\u5f20\u4e66\u5199 JavaScript \u4ee3\u7801\u65f6\u7701\u7565\u7ed3\u675f\u7b26 ",(0,l.kt)("inlineCode",{parentName:"p"},";")),(0,l.kt)("h4",{id:"13-\u8f93\u5165\u548c\u8f93\u51fa"},"1.3 \u8f93\u5165\u548c\u8f93\u51fa"),(0,l.kt)("p",null,"\u8f93\u51fa\u548c\u8f93\u5165\u4e5f\u53ef\u7406\u89e3\u4e3a\u4eba\u548c\u8ba1\u7b97\u673a\u7684\u4ea4\u4e92\uff0c\u7528\u6237\u901a\u8fc7\u952e\u76d8\u3001\u9f20\u6807\u7b49\u5411\u8ba1\u7b97\u673a\u8f93\u5165\u4fe1\u606f\uff0c\u8ba1\u7b97\u673a\u5904\u7406\u540e\u518d\u5c55\u793a\u7ed3\u679c\u7ed9\u7528\u6237\uff0c\u8fd9\u4fbf\u662f\u4e00\u6b21\u8f93\u5165\u548c\u8f93\u51fa\u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("p",null,"\u4e3e\u4f8b\u8bf4\u660e\uff1a\u5982\u6309\u952e\u76d8\u4e0a\u7684\u65b9\u5411\u952e\uff0c\u5411\u4e0a/\u4e0b\u952e\u53ef\u4ee5\u6eda\u52a8\u9875\u9762\uff0c\u6309\u5411\u4e0a/\u4e0b\u952e\u8fd9\u4e2a\u52a8\u4f5c\u53eb\u4f5c\u8f93\u5165\uff0c\u9875\u9762\u53d1\u751f\u4e86\u6eda\u52a8\u4e86\u8fd9\u4fbf\u53eb\u8f93\u51fa\u3002"),(0,l.kt)("h5",{id:"\u8f93\u51fa"},"\u8f93\u51fa"),(0,l.kt)("p",null,"JavaScript \u53ef\u4ee5\u63a5\u6536\u7528\u6237\u7684\u8f93\u5165\uff0c\u7136\u540e\u518d\u5c06\u8f93\u5165\u7684\u7ed3\u679c\u8f93\u51fa\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"alert()"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"document.wirte()")),(0,l.kt)("p",null,"\u4ee5\u6570\u5b57\u4e3a\u4f8b\uff0c\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"alert()")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"document.write()"),"\u8f93\u5165\u4efb\u610f\u6570\u5b57\uff0c\u4ed6\u90fd\u4f1a\u4ee5\u5f39\u7a97\u5f62\u5f0f\u5c55\u793a\uff08\u8f93\u51fa\uff09\u7ed9\u7528\u6237\u3002"),(0,l.kt)("h5",{id:"\u8f93\u5165"},"\u8f93\u5165"),(0,l.kt)("p",null,"\u5411 ",(0,l.kt)("inlineCode",{parentName:"p"},"prompt()")," \u8f93\u5165\u4efb\u610f\u5185\u5bb9\u4f1a\u4ee5\u5f39\u7a97\u5f62\u5f0f\u51fa\u73b0\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u4e00\u822c\u63d0\u793a\u7528\u6237\u8f93\u5165\u4e00\u4e9b\u5185\u5bb9\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript \u57fa\u7840 - \u8f93\u5165\u8f93\u51fa</title>\n</head>\n<body>\n  \n  <script> \n    // 1. \u8f93\u5165\u7684\u4efb\u610f\u6570\u5b57\uff0c\u90fd\u4f1a\u4ee5\u5f39\u7a97\u5f62\u5f0f\u5c55\u793a\n    document.write('\u8981\u8f93\u51fa\u7684\u5185\u5bb9');\n    alert('\u8981\u8f93\u51fa\u7684\u5185\u5bb9');\n\n    // 2. \u4ee5\u5f39\u7a97\u5f62\u5f0f\u63d0\u793a\u7528\u6237\u8f93\u5165\u59d3\u540d\uff0c\u6ce8\u610f\u8fd9\u91cc\u7684\u6587\u5b57\u4f7f\u7528\u82f1\u6587\u7684\u5f15\u53f7\n    prompt('\u8bf7\u8f93\u5165\u60a8\u7684\u59d3\u540d:');\n  <\/script>\n</body>\n</html>\n")),(0,l.kt)("h3",{id:"\u4e8c\u53d8\u91cf"},"\u4e8c\u3001\u53d8\u91cf"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7406\u89e3\u53d8\u91cf\u662f\u8ba1\u7b97\u673a\u5b58\u50a8\u6570\u636e\u7684\u201c\u5bb9\u5668\u201d\uff0c\u638c\u63e1\u53d8\u91cf\u7684\u58f0\u660e\u65b9\u5f0f")),(0,l.kt)("p",null,"\u53d8\u91cf\u662f\u8ba1\u7b97\u673a\u4e2d\u7528\u6765\u5b58\u50a8\u6570\u636e\u7684\u201c\u5bb9\u5668\u201d\uff0c\u5b83\u53ef\u4ee5\u8ba9\u8ba1\u7b97\u673a\u53d8\u5f97\u6709\u8bb0\u5fc6\uff0c\u901a\u4fd7\u7684\u7406\u89e3\u53d8\u91cf\u5c31\u662f\u4f7f\u7528\u3010\u67d0\u4e2a\u7b26\u53f7\u3011\u6765\u4ee3\u8868\u3010\u67d0\u4e2a\u5177\u4f53\u7684\u6570\u503c\u3011\uff08\u6570\u636e\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<script>\n  // x \u7b26\u53f7\u4ee3\u8868\u4e86 5 \u8fd9\u4e2a\u6570\u503c\n  x = 5;\n  // y \u7b26\u53f7\u4ee3\u8868\u4e86 6 \u8fd9\u4e2a\u6570\u503c\n  y = 6;\n    \n  //\u4e3e\u4f8b\uff1a \u5728 JavaScript \u4e2d\u4f7f\u7528\u53d8\u91cf\u53ef\u4ee5\u5c06\u67d0\u4e2a\u6570\u636e\uff08\u6570\u503c\uff09\u8bb0\u5f55\u4e0b\u6765\uff01\n\n  // \u5c06\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u4fdd\u5b58\u5728 num \u8fd9\u4e2a\u53d8\u91cf\uff08\u5bb9\u5668\uff09\u4e2d\n  num = prompt('\u8bf7\u8f93\u5165\u4e00\u6570\u5b57!');\n\n  // \u901a\u8fc7 num \u53d8\u91cf\uff08\u5bb9\u5668\uff09\u5c06\u7528\u6237\u8f93\u5165\u7684\u5185\u5bb9\u8f93\u51fa\u51fa\u6765\n  alert(num);\n  document.write(num);\n<\/script>\n")),(0,l.kt)("h4",{id:"21-\u58f0\u660e\u548c\u8d4b\u503c"},"2.1 \u58f0\u660e\u548c\u8d4b\u503c"),(0,l.kt)("h5",{id:"\u58f0\u660e"},"\u58f0\u660e"),(0,l.kt)("p",null,"\u58f0\u660e(\u5b9a\u4e49)\u53d8\u91cf\u6709\u4e24\u90e8\u5206\u6784\u6210\uff1a\u58f0\u660e\u5173\u952e\u5b57\u3001\u53d8\u91cf\u540d\uff08\u6807\u8bc6\uff09"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u58f0\u660e\u548c\u8d4b\u503c</title>\n</head>\n<body>\n  \n  <script> \n    // let \u53d8\u91cf\u540d\n    // \u58f0\u660e(\u5b9a\u4e49)\u53d8\u91cf\u6709\u4e24\u90e8\u5206\u6784\u6210\uff1a\u58f0\u660e\u5173\u952e\u5b57\u3001\u53d8\u91cf\u540d\uff08\u6807\u8bc6\uff09\n    // let \u5373\u5173\u952e\u5b57\uff0c\u6240\u8c13\u5173\u952e\u5b57\u662f\u7cfb\u7edf\u63d0\u4f9b\u7684\u4e13\u95e8\u7528\u6765\u58f0\u660e\uff08\u5b9a\u4e49\uff09\u53d8\u91cf\u7684\u8bcd\u8bed\n    // age \u5373\u53d8\u91cf\u7684\u540d\u79f0\uff0c\u4e5f\u53eb\u6807\u8bc6\u7b26\n    let age;\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("p",null,"\u5173\u952e\u5b57\u662f JavaScript \u4e2d\u5185\u7f6e\u7684\u4e00\u4e9b\u82f1\u6587\u8bcd\u6c47\uff08\u5355\u8bcd\u6216\u7f29\u5199\uff09\uff0c\u5b83\u4eec\u4ee3\u8868\u67d0\u4e9b\u7279\u5b9a\u7684\u542b\u4e49\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u7684\u542b\u4e49\u662f\u58f0\u660e\u53d8\u91cf\u7684\uff0c\u770b\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"let"),"  \u540e\u5c31\u53ef\u60f3\u5230\u8fd9\u884c\u4ee3\u7801\u7684\u610f\u601d\u662f\u5728\u58f0\u660e\u53d8\u91cf\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"let age;")," "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u90fd\u662f JavaScript \u4e2d\u7684\u58f0\u660e\u53d8\u91cf\u7684\u5173\u952e\u5b57\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u58f0\u660e\u53d8\u91cf\uff01\uff01\uff01"),(0,l.kt)("h5",{id:"\u8d4b\u503c"},"\u8d4b\u503c"),(0,l.kt)("p",null,"\u58f0\u660e\uff08\u5b9a\u4e49\uff09\u53d8\u91cf\u76f8\u5f53\u4e8e\u521b\u9020\u4e86\u4e00\u4e2a\u7a7a\u7684\u201c\u5bb9\u5668\u201d\uff0c\u901a\u8fc7\u8d4b\u503c\u5411\u8fd9\u4e2a\u5bb9\u5668\u4e2d\u6dfb\u52a0\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u58f0\u660e\u548c\u8d4b\u503c</title>\n</head>\n<body>\n  \n  <script> \n    // \u58f0\u660e(\u5b9a\u4e49)\u53d8\u91cf\u6709\u4e24\u90e8\u5206\u6784\u6210\uff1a\u58f0\u660e\u5173\u952e\u5b57\u3001\u53d8\u91cf\u540d\uff08\u6807\u8bc6\uff09\n    // let \u5373\u5173\u952e\u5b57\uff0c\u6240\u8c13\u5173\u952e\u5b57\u662f\u7cfb\u7edf\u63d0\u4f9b\u7684\u4e13\u95e8\u7528\u6765\u58f0\u660e\uff08\u5b9a\u4e49\uff09\u53d8\u91cf\u7684\u8bcd\u8bed\n    // age \u5373\u53d8\u91cf\u7684\u540d\u79f0\uff0c\u4e5f\u53eb\u6807\u8bc6\u7b26\n    let age;\n    // \u8d4b\u503c\uff0c\u5c06 18 \u8fd9\u4e2a\u6570\u636e\u5b58\u5165\u4e86 age \u8fd9\u4e2a\u201c\u5bb9\u5668\u201d\u4e2d\n    age = 18;\n    // \u8fd9\u6837 age \u7684\u503c\u5c31\u6210\u4e86 18\n    document.write(age);\n    \n    // \u4e5f\u53ef\u4ee5\u58f0\u660e\u548c\u8d4b\u503c\u540c\u65f6\u8fdb\u884c\n    let str = \'hello world!\';\n    alert(str);\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h4",{id:"22-\u5173\u952e\u5b57"},"2.2 \u5173\u952e\u5b57"),(0,l.kt)("p",null,"JavaScript \u4f7f\u7528\u4e13\u95e8\u7684\u5173\u952e\u5b57 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u6765\u58f0\u660e\uff08\u5b9a\u4e49\uff09\u53d8\u91cf\uff0c\u5728\u4f7f\u7528\u65f6\u9700\u8981\u6ce8\u610f\u4e00\u4e9b\u7ec6\u8282\uff1a"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u65f6\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u58f0\u660e\u548c\u8d4b\u503c\u540c\u65f6\u8fdb\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u4e0d\u5141\u8bb8\u91cd\u590d\u58f0\u660e"),(0,l.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u540c\u65f6\u58f0\u660e\u591a\u4e2a\u53d8\u91cf\u5e76\u8d4b\u503c"),(0,l.kt)("li",{parentName:"ol"},"JavaScript \u4e2d\u5185\u7f6e\u7684\u4e00\u4e9b\u5173\u952e\u5b57\u4e0d\u80fd\u88ab\u5f53\u505a\u53d8\u91cf\u540d")),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u65f6\u7684\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u58f0\u660e\u548c\u8d4b\u503c\u540c\u65f6\u8fdb\u884c"),(0,l.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u91cd\u590d\u58f0\u660e"),(0,l.kt)("li",{parentName:"ol"},"\u5141\u8bb8\u540c\u65f6\u58f0\u660e\u591a\u4e2a\u53d8\u91cf\u5e76\u8d4b\u503c")),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u533a\u522b\u4e0d\u5927\uff0c\u4f46\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u76f8\u8f83 ",(0,l.kt)("inlineCode",{parentName:"p"},"var")," \u66f4\u4e25\u8c28\uff0c\u56e0\u6b64\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"let"),"\uff0c\u540e\u671f\u4f1a\u66f4\u8fdb\u4e00\u6b65\u4ecb\u7ecd\u4e8c\u8005\u95f4\u7684\u533a\u522b\u3002"),(0,l.kt)("h4",{id:"23-\u53d8\u91cf\u540d\u547d\u540d\u89c4\u5219"},"2.3 \u53d8\u91cf\u540d\u547d\u540d\u89c4\u5219"),(0,l.kt)("p",null,"\u5173\u4e8e\u53d8\u91cf\u7684\u540d\u79f0\uff08\u6807\u8bc6\u7b26\uff09\u6709\u4e00\u7cfb\u5217\u7684\u89c4\u5219\u9700\u8981\u9075\u5b88\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u53ea\u80fd\u662f\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u3001$\uff0c\u4e14\u4e0d\u80fd\u80fd\u6570\u5b57\u5f00\u5934"),(0,l.kt)("li",{parentName:"ol"},"\u5b57\u6bcd\u533a\u5206\u5927\u5c0f\u5199\uff0c\u5982 Age \u548c age \u662f\u4e0d\u540c\u7684\u53d8\u91cf"),(0,l.kt)("li",{parentName:"ol"},"JavaScript \u5185\u90e8\u5df2\u5360\u7528\u4e8e\u5355\u8bcd\uff08\u5173\u952e\u5b57\u6216\u4fdd\u7559\u5b57\uff09\u4e0d\u5141\u8bb8\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u5c3d\u91cf\u4fdd\u8bc1\u53d8\u91cf\u5177\u6709\u4e00\u5b9a\u7684\u8bed\u4e49\uff0c\u89c1\u5b57\u77e5\u4e49")),(0,l.kt)("p",null,"\u6ce8\uff1a\u6240\u8c13\u5173\u952e\u5b57\u662f\u6307 JavaScript \u5185\u90e8\u4f7f\u7528\u7684\u8bcd\u8bed\uff0c\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"let")," \u548c",(0,l.kt)("inlineCode",{parentName:"p"},"var"),"\uff0c\u4fdd\u7559\u5b57\u662f\u6307 JavaScript \u5185\u90e8\u76ee\u524d\u6ca1\u6709\u4f7f\u7528\u7684\u8bcd\u8bed\uff0c\u4f46\u662f\u5c06\u6765\u53ef\u80fd\u4f1a\u4f7f\u7528\u8bcd\u8bed\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u53d8\u91cf\u540d\u547d\u540d\u89c4\u5219</title>\n</head>\n<body>\n  \n  <script> \n    let age = 18; // \u6b63\u786e\n    let age1 = 18; // \u6b63\u786e\n    let _age = 18; // \u6b63\u786e\n\n    // let 1age = 18; // \u9519\u8bef\uff0c\u4e0d\u53ef\u4ee5\u6570\u5b57\u5f00\u5934\n    let $age = 18; // \u6b63\u786e\n    let Age = 24; // \u6b63\u786e\uff0c\u5b83\u4e0e\u5c0f\u5199\u7684 age \u662f\u4e0d\u540c\u7684\u53d8\u91cf\n    // let let = 18; // \u9519\u8bef\uff0clet \u662f\u5173\u952e\u5b57\n    let int = 123; // \u4e0d\u63a8\u8350\uff0cint \u662f\u4fdd\u7559\u5b57\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h3",{id:"\u4e09\u6570\u636e\u7c7b\u578b"},"\u4e09\u3001\u6570\u636e\u7c7b\u578b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8ba1\u7b97\u673a\u4e16\u754c\u4e2d\u7684\u4e07\u4e8b\u6210\u7269\u90fd\u662f\u6570\u636e\u3002")),(0,l.kt)("p",null,"\u8ba1\u7b97\u673a\u7a0b\u5e8f\u53ef\u4ee5\u5904\u7406\u5927\u91cf\u7684\u6570\u636e\uff0c\u4e3a\u4e86\u65b9\u4fbf\u6570\u636e\u7684\u7ba1\u7406\uff0c\u5c06\u6570\u636e\u5206\u6210\u4e86\u4e0d\u540c\u7684\u7c7b\u578b\uff1a"),(0,l.kt)("p",null,"\u6ce8\uff1a\u901a\u8fc7 typeof \u5173\u952e\u5b57\u68c0\u6d4b\u6570\u636e\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u6570\u636e\u7c7b\u578b</title>\n</head>\n<body>\n  \n  <script> \n    // \u68c0\u6d4b 1 \u662f\u4ec0\u4e48\u7c7b\u578b\u6570\u636e\uff0c\u7ed3\u679c\u4e3a number\n    document.write(typeof 1);\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h4",{id:"31-\u6570\u503c\u7c7b\u578b"},"3.1 \u6570\u503c\u7c7b\u578b"),(0,l.kt)("p",null,"\u5373\u6211\u4eec\u6570\u5b66\u4e2d\u5b66\u4e60\u5230\u7684\u6570\u5b57\uff0c\u53ef\u4ee5\u662f\u6574\u6570\u3001\u5c0f\u6570\u3001\u6b63\u6570\u3001\u8d1f\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u6570\u636e\u7c7b\u578b</title>\n</head>\n<body>\n  \n  <script> \n    let score = 100; // \u6b63\u6574\u6570\n    let price = 12.345; // \u5c0f\u6570\n    let temperature = -40; // \u8d1f\u6570\n\n    document.write(typeof score); // \u7ed3\u679c\u4e3a number\n    document.write(typeof price); // \u7ed3\u679c\u4e3a number\n    document.write(typeof temperature); // \u7ed3\u679c\u4e3a number\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("p",null,"JavaScript \u4e2d\u7684\u6570\u503c\u7c7b\u578b\u4e0e\u6570\u5b66\u4e2d\u7684\u6570\u5b57\u662f\u4e00\u6837\u7684\uff0c\u5206\u4e3a\u6b63\u6570\u3001\u8d1f\u6570\u3001\u5c0f\u6570\u7b49\u3002"),(0,l.kt)("h4",{id:"32-\u5b57\u7b26\u4e32\u7c7b\u578b"},"3.2 \u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("p",null,"\u901a\u8fc7\u5355\u5f15\u53f7\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},"''"),"\uff09 \u3001\u53cc\u5f15\u53f7\uff08 ",(0,l.kt)("inlineCode",{parentName:"p"},'""'),"\uff09\u6216\u53cd\u5f15\u53f7\u5305\u88f9\u7684\u6570\u636e\u90fd\u53eb\u5b57\u7b26\u4e32\uff0c\u5355\u5f15\u53f7\u548c\u53cc\u5f15\u53f7\u6ca1\u6709\u672c\u8d28\u4e0a\u7684\u533a\u522b\uff0c\u63a8\u8350\u4f7f\u7528\u5355\u5f15\u53f7\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u65e0\u8bba\u5355\u5f15\u53f7\u6216\u662f\u53cc\u5f15\u53f7\u5fc5\u987b\u6210\u5bf9\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u5355\u5f15\u53f7/\u53cc\u5f15\u53f7\u53ef\u4ee5\u4e92\u76f8\u5d4c\u5957\uff0c\u4f46\u662f\u4e0d\u4ee5\u81ea\u5df2\u5d4c\u5957\u81ea\u5df2"),(0,l.kt)("li",{parentName:"ol"},"\u5fc5\u8981\u65f6\u53ef\u4ee5\u4f7f\u7528\u8f6c\u4e49\u7b26 ",(0,l.kt)("inlineCode",{parentName:"li"},"\\"),"\uff0c\u8f93\u51fa\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript \u57fa\u7840 - \u6570\u636e\u7c7b\u578b</title>\n</head>\n<body>\n  \n  <script> \n    let user_name = '\u5c0f\u660e'; // \u4f7f\u7528\u5355\u5f15\u53f7\n    let gender = \"\u7537\"; // \u4f7f\u7528\u53cc\u5f15\u53f7\n    let str = '123'; // \u770b\u4e0a\u53bb\u662f\u6570\u5b57\uff0c\u4f46\u662f\u7528\u5f15\u53f7\u5305\u88f9\u4e86\u5c31\u6210\u4e86\u5b57\u7b26\u4e32\u4e86\n    let str1 = ''; // \u8fd9\u79cd\u60c5\u51b5\u53eb\u7a7a\u5b57\u7b26\u4e32\n        \n    documeent.write(typeof user_name); // \u7ed3\u679c\u4e3a string\n    documeent.write(typeof gender); // \u7ed3\u679c\u4e3a string\n    documeent.write(typeof str); // \u7ed3\u679c\u4e3a string\n  <\/script>\n</body>\n</html>\n")),(0,l.kt)("h4",{id:"33-\u5e03\u5c14\u7c7b\u578b"},"3.3 \u5e03\u5c14\u7c7b\u578b"),(0,l.kt)("p",null,"\u8868\u793a\u80af\u5b9a\u6216\u5426\u5b9a\u65f6\u5728\u8ba1\u7b97\u673a\u4e2d\u5bf9\u5e94\u7684\u662f\u5e03\u5c14\u7c7b\u578b\u6570\u636e\uff0c\u5b83\u6709\u4e24\u4e2a\u56fa\u5b9a\u7684\u503c ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u8868\u793a\u80af\u5b9a\u7684\u6570\u636e\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u8868\u793a\u5426\u5b9a\u7684\u6570\u636e\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u6570\u636e\u7c7b\u578b</title>\n</head>\n<body>\n  \n  <script> \n    //  pink\u8001\u5e08\u5e05\u4e0d\u5e05\uff1f\u56de\u7b54 \u662f \u6216 \u5426\n    let isCool = true; // \u662f\u7684\uff0c\u6454\u6b7b\u4e86\uff01\n    isCool = false; // \u4e0d\uff0c\u5957\u9a6c\u6746\u7684\u6c49\u5b50\uff01\n\n    document.write(typeof isCool); // \u7ed3\u679c\u4e3a boolean\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("h4",{id:"34-undefined"},"3.4 undefined"),(0,l.kt)("p",null,"\u672a\u5b9a\u4e49\u662f\u6bd4\u8f83\u7279\u6b8a\u7684\u7c7b\u578b\uff0c\u53ea\u6709\u4e00\u4e2a\u503c undefined\uff0c\u53ea\u58f0\u660e\u53d8\u91cf\uff0c\u4e0d\u8d4b\u503c\u7684\u60c5\u51b5\u4e0b\uff0c\u53d8\u91cf\u7684\u9ed8\u8ba4\u503c\u4e3a undefined\uff0c\u4e00\u822c\u5f88\u5c11\u3010\u76f4\u63a5\u3011\u4e3a\u67d0\u4e2a\u53d8\u91cf\u8d4b\u503c\u4e3a undefined\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>JavaScript \u57fa\u7840 - \u6570\u636e\u7c7b\u578b</title>\n</head>\n<body>\n  \n  <script> \n    // \u53ea\u58f0\u660e\u4e86\u53d8\u91cf\uff0c\u5e76\u672b\u8d4b\u503c\n    let tmp;\n    document.write(typeof tmp); // \u7ed3\u679c\u4e3a undefined\n  <\/script>\n</body>\n</html>\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\uff1aJavaScript \u4e2d\u53d8\u91cf\u7684\u503c\u51b3\u5b9a\u4e86\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b\u3002")),(0,l.kt)("h3",{id:"\u56db\u7c7b\u578b\u8f6c\u6362"},"\u56db\u3001\u7c7b\u578b\u8f6c\u6362"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7406\u89e3\u5f31\u7c7b\u578b\u8bed\u8a00\u7684\u7279\u5f81\uff0c\u638c\u63e1\u663e\u5f0f\u7c7b\u578b\u8f6c\u6362\u7684\u65b9\u6cd5")),(0,l.kt)("p",null,"\u5728 JavaScript \u4e2d\u6570\u636e\u88ab\u5206\u6210\u4e86\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u5982\u6570\u503c\u3001\u5b57\u7b26\u4e32\u3001\u5e03\u5c14\u503c\u3001undefined\uff0c\u5728\u5b9e\u9645\u7f16\u7a0b\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e0d\u540c\u6570\u636e\u7c7b\u578b\u4e4b\u95f4\u5b58\u5728\u7740\u8f6c\u6362\u7684\u5173\u7cfb\u3002"),(0,l.kt)("h4",{id:"41-\u9690\u5f0f\u8f6c\u6362"},"4.1 \u9690\u5f0f\u8f6c\u6362"),(0,l.kt)("p",null,"\u67d0\u4e9b\u8fd0\u7b97\u7b26\u88ab\u6267\u884c\u65f6\uff0c\u7cfb\u7edf\u5185\u90e8\u81ea\u52a8\u5c06\u6570\u636e\u7c7b\u578b\u8fdb\u884c\u8f6c\u6362\uff0c\u8fd9\u79cd\u8f6c\u6362\u79f0\u4e3a\u9690\u5f0f\u8f6c\u6362\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript \u57fa\u7840 - \u9690\u5f0f\u8f6c\u6362</title>\n</head>\n<body>\n  <script> \n    let num = 13; // \u6570\u503c\n    let num2 = '2'; // \u5b57\u7b26\u4e32\n\n    // \u7ed3\u679c\u4e3a 132\n    // \u539f\u56e0\u662f\u5c06\u6570\u503c num \u8f6c\u6362\u6210\u4e86\u5b57\u7b26\u4e32\uff0c\u76f8\u5f53\u4e8e '13'\n    // \u7136\u540e + \u5c06\u4e24\u4e2a\u5b57\u7b26\u4e32\u62fc\u63a5\u5230\u4e86\u4e00\u8d77\n    console.log(num + num2);\n\n    // \u7ed3\u679c\u4e3a 11\n    // \u539f\u56e0\u662f\u5c06\u5b57\u7b26\u4e32 num2 \u8f6c\u6362\u6210\u4e86\u6570\u503c\uff0c\u76f8\u5f53\u4e8e 2\n    // \u7136\u540e\u6570\u503c 13 \u51cf\u53bb \u6570\u503c 2\n    console.log(num - num2);\n\n    let a = prompt('\u8bf7\u8f93\u5165\u4e00\u4e2a\u6570\u5b57');\n    let b = prompt('\u8bf7\u518d\u8f93\u5165\u4e00\u4e2a\u6570\u5b57');\n\n    alert(a + b);\n  <\/script>\n</body>\n</html>\n")),(0,l.kt)("p",null,"\u6ce8\uff1a\u6570\u636e\u7c7b\u578b\u7684\u9690\u5f0f\u8f6c\u6362\u662f JavaScript \u7684\u7279\u5f81\uff0c\u540e\u7eed\u5b66\u4e60\u4e2d\u8fd8\u4f1a\u9047\u5230\uff0c\u76ee\u524d\u5148\u9700\u8981\u7406\u89e3\u4ec0\u4e48\u662f\u9690\u5f0f\u8f6c\u6362\u3002"),(0,l.kt)("p",null,"\u8865\u5145\u4ecb\u7ecd\u6a21\u677f\u5b57\u7b26\u4e32\u7684\u62fc\u63a5\u7684\u4f7f\u7528"),(0,l.kt)("h4",{id:"42\u663e\u5f0f\u8f6c\u6362"},"4.2\u663e\u5f0f\u8f6c\u6362"),(0,l.kt)("p",null,"\u7f16\u5199\u7a0b\u5e8f\u65f6\u8fc7\u5ea6\u4f9d\u9760\u7cfb\u7edf\u5185\u90e8\u7684\u9690\u5f0f\u8f6c\u6362\u662f\u4e0d\u4e25\u7981\u7684\uff0c\u56e0\u4e3a\u9690\u5f0f\u8f6c\u6362\u89c4\u5f8b\u5e76\u4e0d\u6e05\u6670\uff0c\u5927\u591a\u662f\u9760\u7ecf\u9a8c\u603b\u7ed3\u7684\u89c4\u5f8b\u3002\u4e3a\u4e86\u907f\u514d\u56e0\u9690\u5f0f\u8f6c\u6362\u5e26\u6765\u7684\u95ee\u9898\uff0c\u901a\u5e38\u6839\u903b\u8f91\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u663e\u793a\u8f6c\u6362\u3002"),(0,l.kt)("h5",{id:"number"},"Number"),(0,l.kt)("p",null,"\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Number")," \u663e\u793a\u8f6c\u6362\u6210\u6570\u503c\u7c7b\u578b\uff0c\u5f53\u8f6c\u6362\u5931\u8d25\u65f6\u7ed3\u679c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"NaN"),"\uff08Not a Number\uff09\u5373\u4e0d\u662f\u4e00\u4e2a\u6570\u5b57\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},"<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>JavaScript \u57fa\u7840 - \u9690\u5f0f\u8f6c\u6362</title>\n</head>\n<body>\n  <script>\n    let t = '12';\n    let f = 8;\n\n    // \u663e\u5f0f\u5c06\u5b57\u7b26\u4e32 12 \u8f6c\u6362\u6210\u6570\u503c 12\n    t = Number(t);\n\n    // \u68c0\u6d4b\u8f6c\u6362\u540e\u7684\u7c7b\u578b\n    // console.log(typeof t);\n    console.log(t + f); // \u7ed3\u679c\u4e3a 20\n\n    // \u5e76\u4e0d\u662f\u6240\u6709\u7684\u503c\u90fd\u53ef\u4ee5\u88ab\u8f6c\u6210\u6570\u503c\u7c7b\u578b\n    let str = 'hello';\n    // \u5c06 hello \u8f6c\u6210\u6570\u503c\u662f\u4e0d\u73b0\u5b9e\u7684\uff0c\u5f53\u65e0\u6cd5\u8f6c\u6362\u6210\n    // \u6570\u503c\u65f6\uff0c\u5f97\u5230\u7684\u7ed3\u679c\u4e3a NaN \uff08Not a Number\uff09\n    console.log(Number(str));\n  <\/script>\n</body>\n</html>\n")),(0,l.kt)("p",null,"\u8bb0\u5fc6\u5355\u8bcd\u6848\u4f8b"),(0,l.kt)("p",null,"\u601d\u8def\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5916\u5c42xxx"),(0,l.kt)("li",{parentName:"ul"},"\u91cc\u5c42xxx")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u8bb0\u5fc6\u5355\u8bcd\u6848\u4f8b\n        // \u5206\u6790\n        // 1. \u5916\u9762\u7684\u5faa\u73af \u8bb0\u5f55\u7b2cn\u5929 \n        for (let i = 1; i < 4; i++) {\n            document.write(`\u7b2c${i}\u5929 <br>`)\n            // 2. \u91cc\u5c42\u7684\u5faa\u73af\u8bb0\u5f55 \u51e0\u4e2a\u5355\u8bcd\n            for (let j = 1; j < 6; j++) {\n                document.write(`\u8bb0\u4f4f\u7b2c${j}\u4e2a\u5355\u8bcd<br>`)\n            }\n        }\n")))}d.isMDXComponent=!0}}]);