"use strict";(self.webpackChunklevana_website=self.webpackChunklevana_website||[]).push([[5926],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var l=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=l.createContext({}),u=function(t){var e=l.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=u(t.components);return l.createElement(o.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},m=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=u(n),s=r,d=m["".concat(o,".").concat(s)]||m[s]||k[s]||a;return n?l.createElement(d,p(p({ref:e},c),{},{components:n})):l.createElement(d,p({ref:e},c))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4488:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7},p=void 0,i={unversionedId:"\u524d\u7aef\u9762\u8bd5/TCP",id:"\u524d\u7aef\u9762\u8bd5/TCP",title:"TCP",description:"1. \u80fd\u4e0d\u80fd\u8bf4\u4e00\u8bf4 TCP \u548c UDP \u7684\u533a\u522b\uff1f",source:"@site/interview/\u524d\u7aef\u9762\u8bd5/TCP.md",sourceDirName:"\u524d\u7aef\u9762\u8bd5",slug:"/\u524d\u7aef\u9762\u8bd5/TCP",permalink:"/levana/interview/\u524d\u7aef\u9762\u8bd5/TCP",draft:!1,editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/interview/\u524d\u7aef\u9762\u8bd5/TCP.md",tags:[],version:"current",lastUpdatedBy:"levana",lastUpdatedAt:1669125419,formattedLastUpdatedAt:"2022\u5e7411\u670822\u65e5",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",permalink:"/levana/interview/\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406"},next:{title:"Http\u534f\u8bae",permalink:"/levana/interview/\u524d\u7aef\u9762\u8bd5/Http\u534f\u8bae"}},o={},u=[{value:"1. \u80fd\u4e0d\u80fd\u8bf4\u4e00\u8bf4 TCP \u548c UDP \u7684\u533a\u522b\uff1f",id:"1-\u80fd\u4e0d\u80fd\u8bf4\u4e00\u8bf4-tcp-\u548c-udp-\u7684\u533a\u522b",level:2},{value:"2. \u4e00\u6b21\u5b8c\u6574\u7684HTTP\u670d\u52a1\u8fc7\u7a0b\u662f\u4ec0\u4e48",id:"2-\u4e00\u6b21\u5b8c\u6574\u7684http\u670d\u52a1\u8fc7\u7a0b\u662f\u4ec0\u4e48",level:2},{value:"3. \u4ec0\u4e48\u662fDNS \u89e3\u6790",id:"3-\u4ec0\u4e48\u662fdns-\u89e3\u6790",level:2},{value:"4. TCP \u4e09\u6b21\u63e1\u624b\u7406\u89e3 (\u53cc\u65b9\u786e\u8ba4)",id:"4-tcp-\u4e09\u6b21\u63e1\u624b\u7406\u89e3-\u53cc\u65b9\u786e\u8ba4",level:2},{value:"5. \u5173\u95edTCP\u8fde\u63a5\u56db\u6b21\u6325\u624b\u7684\u7406\u89e3 (\u5ba2\u6c14\u633d\u7559)",id:"5-\u5173\u95edtcp\u8fde\u63a5\u56db\u6b21\u6325\u624b\u7684\u7406\u89e3-\u5ba2\u6c14\u633d\u7559",level:2}],c={toc:u};function k(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u80fd\u4e0d\u80fd\u8bf4\u4e00\u8bf4-tcp-\u548c-udp-\u7684\u533a\u522b"},"1. \u80fd\u4e0d\u80fd\u8bf4\u4e00\u8bf4 TCP \u548c UDP \u7684\u533a\u522b\uff1f"),(0,r.kt)("p",null,"\u9996\u5148\u6982\u62ec\u4e00\u4e0b\u57fa\u672c\u7684\u533a\u522b: TCP\u662f\u4e00\u4e2a\u9762\u5411\u8fde\u63a5\u7684\u3001\u53ef\u9760\u7684\u3001\u57fa\u4e8e\u5b57\u8282\u6d41\u7684\u4f20\u8f93\u5c42\u534f\u8bae\u3002 "),(0,r.kt)("p",null,"\u800cUDP\u662f\u4e00\u4e2a\u9762\u5411\u65e0\u8fde\u63a5\u7684\u4f20\u8f93\u5c42\u534f\u8bae\u3002(\u5c31\u8fd9\u4e48\u7b80\u5355\uff0c\u5176\u5b83TCP\u7684\u7279\u6027\u4e5f\u5c31\u6ca1\u6709\u4e86)\u3002 "),(0,r.kt)("p",null,"TCP \u4f7f\u2f64\u6821\u9a8c\u3001\u786e\u8ba4\u548c\u91cd\u4f20\u673a\u5236\u6765\u4fdd\u8bc1\u53ef\u9760\u4f20\u8f93 "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u800c HTTP\u534f\u8bae \u5c31\u662f\u5efa\u7acb\u5728 TCP / IP \u534f\u8bae \u4e4b\u4e0a\u7684\u4e00\u79cd\u5e94\u7528\u3002")),(0,r.kt)("p",null,"TCP: \u4e09\u6b21\u63e1\u624b, \u56db\u6b21\u6325\u624b~"),(0,r.kt)("p",null,"\u5177\u4f53\u6765\u5206\u6790\uff0c\u548c UDP \u76f8\u6bd4\uff0c TCP \u6709\u4e09\u5927\u6838\u5fc3\u7279\u6027: "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\uff09\u9762\u5411\u8fde\u63a5"),"\u3002\u6240\u8c13\u7684\u8fde\u63a5\uff0c\u6307\u7684\u662f\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u7684\u8fde\u63a5\uff0c\u5728\u53cc\u65b9\u4e92\u76f8\u901a\u4fe1\u4e4b\u524d\uff0cTCP \u9700\u8981\u4e09\u6b21\u63e1\u624b\u5efa\u7acb\u8fde\u63a5\uff0c\u800c UDP \u6ca1\u6709\u76f8\u5e94\u5efa\u7acb\u8fde\u63a5\u7684\u8fc7\u7a0b\u3002 "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\uff09\u53ef\u9760\u6027\u3002"),"TCP \u82b1\u4e86\u975e\u5e38\u591a\u7684\u529f\u592b\u4fdd\u8bc1\u8fde\u63a5\u7684\u53ef\u9760\uff0c\u8fd9\u4e2a\u53ef\u9760\u6027\u4f53\u73b0\u5728\u54ea\u4e9b\u65b9\u9762\u5462\uff1f\u4e00\u4e2a\u662f\u6709\u72b6\u6001\uff0c\u53e6 \u4e00\u4e2a\u662f\u53ef\u63a7\u5236\u3002 "),(0,r.kt)("p",null,"TCP \u4f1a\u7cbe\u51c6\u8bb0\u5f55\u54ea\u4e9b\u6570\u636e\u53d1\u9001\u4e86\uff0c\u54ea\u4e9b\u6570\u636e\u88ab\u5bf9\u65b9\u63a5\u6536\u4e86\uff0c\u54ea\u4e9b\u6ca1\u6709\u88ab\u63a5\u6536\u5230\uff0c\u800c\u4e14\u4fdd\u8bc1\u6570\u636e\u5305\u6309\u5e8f\u5230\u8fbe\uff0c\u4e0d\u5141\u8bb8\u534a\u70b9\u5dee\u9519\u3002\u8fd9\u662f\u6709\u72b6\u6001\u3002 "),(0,r.kt)("p",null,"\u5f53\u610f\u8bc6\u5230\u4e22\u5305\u4e86\u6216\u8005\u7f51\u7edc\u73af\u5883\u4e0d\u4f73\uff0cTCP \u4f1a\u6839\u636e\u5177\u4f53\u60c5\u51b5\u8c03\u6574\u81ea\u5df1\u7684\u884c\u4e3a\uff0c\u63a7\u5236\u81ea\u5df1\u7684\u53d1\u9001\u901f\u5ea6\u6216\u8005\u91cd\u53d1\u3002\u8fd9\u662f\u53ef\u63a7\u5236\u3002 "),(0,r.kt)("p",null,"\u76f8\u5e94\u7684\uff0cUDP \u5c31\u662f\u65e0\u72b6\u6001 , \u4e0d\u53ef\u63a7\u7684\u3002 "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\uff09\u9762\u5411\u5b57\u8282\u6d41\u3002")),(0,r.kt)("p",null,"UDP \u7684\u6570\u636e\u4f20\u8f93\u662f\u57fa\u4e8e\u6570\u636e\u62a5\u7684\uff0c\u8fd9\u662f\u56e0\u4e3a\u4ec5\u4ec5\u53ea\u662f\u7ee7\u627f\u4e86 IP \u5c42\u7684\u7279\u6027\uff0c\u800c TCP \u4e3a\u4e86\u7ef4\u62a4\u72b6\u6001\uff0c\u5c06\u4e00\u4e2a\u4e2a IP \u5305\u53d8\u6210\u4e86\u5b57\u8282\u6d41\u3002"),(0,r.kt)("h2",{id:"2-\u4e00\u6b21\u5b8c\u6574\u7684http\u670d\u52a1\u8fc7\u7a0b\u662f\u4ec0\u4e48"},"2. \u4e00\u6b21\u5b8c\u6574\u7684HTTP\u670d\u52a1\u8fc7\u7a0b\u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u5728web\u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f\u4e2d\u8f93\u5165\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"www.baidu.com"),"\uff0c\u5177\u4f53\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5bf9",(0,r.kt)("inlineCode",{parentName:"li"},"www.baidu.com"),"\u8fd9\u4e2a\u7f51\u5740\u8fdb\u884cDNS\u57df\u540d\u89e3\u6790\uff0c\u5f97\u5230\u5bf9\u5e94\u7684IP\u5730\u5740"),(0,r.kt)("li",{parentName:"ol"},"\u6839\u636e\u8fd9\u4e2aIP\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5668\uff0c\u53d1\u8d77TCP\u7684\u4e09\u6b21\u63e1\u624b"),(0,r.kt)("li",{parentName:"ol"},"\u5efa\u7acbTCP\u8fde\u63a5\u540e, \u53d1\u8d77HTTP\u8bf7\u6c42"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u5668\u54cd\u5e94HTTP\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u5f97\u5230html\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u89e3\u6790html\u4ee3\u7801\uff0c\u5e76\u8bf7\u6c42html\u4ee3\u7801\u4e2d\u7684\u8d44\u6e90\uff08\u5982js\u3001css\u3001\u56fe\u7247\u7b49\uff09\uff08\u5148\u5f97\u5230html\u4ee3\u7801\uff0c\u624d\u80fd\u53bb\u627e\u8fd9\u4e9b\u8d44\u6e90\uff09"),(0,r.kt)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u5bf9\u9875\u9762\u8fdb\u884c\u6e32\u67d3\u5448\u73b0\u7ed9\u7528\u6237"),(0,r.kt)("li",{parentName:"ol"},"\u670d\u52a1\u8fc7\u7a0b\u5b8c\u6bd5, \u5173\u95edTCP\u8fde\u63a5, \u56db\u6b21\u6325\u624b")),(0,r.kt)("p",null,"\u6ce8\uff1a"),(0,r.kt)("p",null,"1.DNS\u600e\u4e48\u627e\u5230\u57df\u540d\u7684\uff1f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DNS\u57df\u540d\u89e3\u6790\u91c7\u7528\u7684\u662f\u9012\u5f52\u67e5\u8be2\u7684\u65b9\u5f0f\uff0c\u8fc7\u7a0b\u662f\uff0c\u5148\u53bb\u627eDNS\u7f13\u5b58->\u7f13\u5b58\u627e\u4e0d\u5230\u5c31\u53bb\u627e\u6839\u57df\u540d\u670d\u52a1\u5668->\u6839\u57df\u540d\u53c8\u4f1a\u53bb\u627e\u4e0b\u4e00\u7ea7\uff0c\u8fd9\u6837\u9012\u5f52\u67e5\u627e\u4e4b\u540e\uff0c\u627e\u5230\u4e86\uff0c\u7ed9\u6211\u4eec\u7684web\u6d4f\u89c8\u5668")),(0,r.kt)("p",null,"2.\u4e3a\u4ec0\u4e48HTTP\u534f\u8bae\u8981\u57fa\u4e8eTCP\u6765\u5b9e\u73b0\uff1f  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TCP\u662f\u4e00\u4e2a\u7aef\u5230\u7aef\u7684\u53ef\u9760\u9762\u76f8\u8fde\u63a5\u7684\u534f\u8bae\uff0cHTTP\u57fa\u4e8e\u4f20\u8f93\u5c42TCP\u534f\u8bae\u4e0d\u7528\u62c5\u5fc3\u6570\u636e\u4f20\u8f93\u7684\u5404\u79cd\u95ee\u9898\uff08\u5f53\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u53ef\u4ee5\u91cd\u4f20\uff09")),(0,r.kt)("p",null,"3.\u6700\u540e\u4e00\u6b65\u6d4f\u89c8\u5668\u662f\u5982\u4f55\u5bf9\u9875\u9762\u8fdb\u884c\u6e32\u67d3\u7684\uff1f  "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"a\uff09\u89e3\u6790html\u6587\u4ef6\u6784\u6210 DOM\u6811\nb\uff09\u89e3\u6790CSS\u6587\u4ef6\u6784\u6210\u6e32\u67d3\u6811\nc\uff09\u8fb9\u89e3\u6790\uff0c\u8fb9\u6e32\u67d3\nd\uff09JS \u5355\u7ebf\u7a0b\u8fd0\u884c\uff0cJS\u6709\u53ef\u80fd\u4fee\u6539DOM\u7ed3\u6784\uff0c\u610f\u5473\u7740JS\u6267\u884c\u5b8c\u6210\u524d\uff0c\u540e\u7eed\u6240\u6709\u8d44\u6e90\u7684\u4e0b\u8f7d\u662f\u6ca1\u6709\u5fc5\u8981\u7684\uff0c\u6240\u4ee5JS\u662f\u5355\u7ebf\u7a0b\uff0c\u4f1a\u963b\u585e\u540e\u7eed\u8d44\u6e90\u4e0b\u8f7d")),(0,r.kt)("h2",{id:"3-\u4ec0\u4e48\u662fdns-\u89e3\u6790"},"3. \u4ec0\u4e48\u662fDNS \u89e3\u6790"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DNS\u89e3\u6790\uff08\u57df\u540d\u89e3\u6790\u670d\u52a1\u5668\uff09"),"  \u5c06 \u57df\u540d \u8f6c\u6362\u6210 ip\u5730\u5740   (\u4e00\u4e2a\u57df\u540d\u548cip\u7684\u6620\u5c04\u5173\u7cfb, \u5177\u4f53\u767b\u8bb0\u5728\u54ea\u91cc, \u770b\u6211\u4eec\u5982\u4f55\u7533\u8bf7\u5173\u8054\u7684!)"),(0,r.kt)("p",null,"\u5047\u5b9a\u8bf7\u6c42\u7684\u662f ",(0,r.kt)("a",{parentName:"p",href:"http://www.baidu.com"},"www.baidu.com")),(0,r.kt)("p",null,"a\uff09\u9996\u5148\u4f1a\u641c\u7d22\u6d4f\u89c8\u5668\u81ea\u8eab\u7684DNS\u7f13\u5b58\uff08\u7f13\u5b58\u65f6\u95f4\u6bd4\u8f83\u77ed\uff0c\u5927\u6982\u53ea\u67091\u5206\u949f\uff0c\u4e14\u53ea\u80fd\u5bb9\u7eb31000\u6761\u7f13\u5b58\uff09"),(0,r.kt)("p",null,"b\uff09\u5982\u679c\u6d4f\u89c8\u5668\u81ea\u8eab\u7684\u7f13\u5b58\u91cc\u9762\u6ca1\u6709\u627e\u5230\uff0c\u90a3\u4e48\u6d4f\u89c8\u5668\u4f1a\u641c\u7d22\u7cfb\u7edf\u81ea\u8eab\u7684DNS\u7f13\u5b58"),(0,r.kt)("p",null,"c\uff09\u5982\u679c\u8fd8\u6ca1\u6709\u627e\u5230\uff0c\u90a3\u4e48\u5c1d\u8bd5\u4ece hosts \u6587\u4ef6\u91cc\u9762\u53bb\u627e  (\u4e00\u4e2a\u7cfb\u7edf\u7535\u8111\u7684\u6587\u4ef6, \u53ef\u4ee5\u7f16\u8f91, \u53ef\u4ee5\u5b58 \u57df\u540d \u548c ip \u7684\u5bf9\u5e94\u5173\u7cfb)"),(0,r.kt)("p",null,"d\uff09\u5728\u524d\u9762\u4e09\u4e2a\u8fc7\u7a0b\u90fd\u6ca1\u83b7\u53d6\u5230\u7684\u60c5\u51b5\u4e0b\uff0c\u5c31\u9012\u5f52\u5730\u53bb\u57df\u540d\u670d\u52a1\u5668\u53bb\u67e5\u627e(\u5c31\u8fd1\u67e5\u627e)\uff0c\u5177\u4f53\u8fc7\u7a0b\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018224018.png",alt:"image-20221018224017986"})),(0,r.kt)("p",null,"DNS\u4f18\u5316\u4e24\u4e2a\u65b9\u9762\uff1aDNS\u7f13\u5b58\u3001DNS\u8d1f\u8f7d\u5747\u8861 (\u51c6\u5907\u591a\u53f0dns\u670d\u52a1\u5668, \u8fdb\u884cdns\u89e3\u6790)"),(0,r.kt)("h2",{id:"4-tcp-\u4e09\u6b21\u63e1\u624b\u7406\u89e3-\u53cc\u65b9\u786e\u8ba4"},"4. TCP \u4e09\u6b21\u63e1\u624b\u7406\u89e3 (\u53cc\u65b9\u786e\u8ba4)"),(0,r.kt)("p",null,"TCP\u662f\u4e00\u4e2a\u7aef\u5230\u7aef\u7684  ",(0,r.kt)("strong",{parentName:"p"},"\u53ef\u9760"),"  \u9762\u76f8\u8fde\u63a5\u7684\u534f\u8bae\uff0c"),(0,r.kt)("p",null,"HTTP\u57fa\u4e8e\u4f20\u8f93\u5c42TCP\u534f\u8bae\u4e0d\u7528\u62c5\u5fc3\u6570\u636e\u4f20\u8f93\u7684\u5404\u79cd\u95ee\u9898\uff08\u5f53\u53d1\u751f\u9519\u8bef\u65f6\uff0c\u53ef\u4ee5\u91cd\u4f20\uff09"),(0,r.kt)("p",null,"\u6839\u636e\u8fd9\u4e2aIP\uff0c\u627e\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5668\uff0c\u53d1\u8d77TCP\u7684\u4e09\u6b21\u63e1\u624b (",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_38950316/article/details/81087809"},"tcp \u4e09\u6b21\u63e1\u624b\u56db\u6b21\u6325\u624b")," ) "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018224137.png",alt:"image-20221018224137062"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u89813\u6b21\u63e1\u624b")),(0,r.kt)("p",null,"\u6211\u4eec\u5047\u5b9a\u7b2c\u4e00\u6b21\u53d1\u9001\u7684\u8bf7\u6c42,  \u56e0\u4e3a\u7f51\u7edc\u5ef6\u8fdf\u5f88\u6162\u624d\u5230\u8fbe\u670d\u52a1\u7aef\uff0c"),(0,r.kt)("p",null,"\u7136\u540e\u5ba2\u6237\u7aef\u4ee5\u4e3a\u8fd9\u670d\u52a1\u5668\u5c45\u7136\u4e0d\u7406\u776c\u6211\uff0c\u7136\u540e\u9ed8\u9ed8\u7684\u5173\u95ed\u7684\u7b49\u5f85\u8fde\u63a5\u7684\u8bf7\u6c42\uff0c\u8d70\u5f00\u4e86\uff08\u597d\u6bd4\u8ffd\u5973\u795e\uff09\uff1b"),(0,r.kt)("p",null,"\u4f46\u4e8b\u5b9e\u5462\uff1f\u5973\u795e\uff08\u670d\u52a1\u5668\uff09\u662f\u56e0\u4e3a\u5404\u79cd\u5404\u6837\u7684\u539f\u56e0\uff0c\u5f88\u665a\u624d\u770b\u5230\uff0c\u7136\u540e\u8bf4\u6211\u63a5\u53d7\u4f60\u4e86, \u540c\u610f\u4f60\u7684\u8981\u6c42\u54b1\u4eec\u4e24\u7ed3\u5a5a\u5427\uff01"),(0,r.kt)("p",null,"\u4f46\u662f\uff0cA\u65e9\u5df2\u7ecf\u8fdc\u8d70\u9ad8\u98de\uff0c\u8fd9\u4e2a\u8bf7\u6c42A\u5b8c\u5168\u4e0d\u4f1a\u6536\u5230\uff08\u5728\u7b2c\u4e8c\u6b21\u63e1\u624b\uff0c\u670d\u52a1\u7aef\u6253\u5f00\u8fde\u63a5\uff0c\u7b49\u5f85\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\uff09\uff0c"),(0,r.kt)("p",null,"\u90a3\u4e48\u5973\u751f\u5462\uff0c\u4ee5\u4e3a\u5bf9\u65b9\u6536\u5230\u4e86\uff0c\u5c31\u4f1a\u4e00\u76f4\u7b49\u5f85\uff0c\u8fd9\u6837B\u7684\u8d44\u6e90\u5c31\u4f1a\u88ab\u6d6a\u8d39\u7684\uff08\u521b\u5efa\u8fde\u63a5\u7684\u65f6\u5019\uff0c\u7a7a\u95f4\u6d6a\u8d39\u4ee5\u53ca\u7aef\u53e3\u6d88\u8017\uff09\uff1b"),(0,r.kt)("p",null,"\u800c\u4e09\u6b21\u63e1\u624b, \u5c31\u4e0d\u4f1a\u53d1\u751f\uff0c\u670d\u52a1\u7aef\u540c\u610f\u8fde\u63a5\u4e86\uff0c\u4f46\u662fA\u5374\u4e00\u76f4\u6ca1\u6709\u4e0b\u4e00\u6b65\u7684\u52a8\u4f5c\uff0c\u5bfc\u81f4\u8d44\u6e90\u6d6a\u8d39\uff1b"),(0,r.kt)("h2",{id:"5-\u5173\u95edtcp\u8fde\u63a5\u56db\u6b21\u6325\u624b\u7684\u7406\u89e3-\u5ba2\u6c14\u633d\u7559"},"5. \u5173\u95edTCP\u8fde\u63a5\u56db\u6b21\u6325\u624b\u7684\u7406\u89e3 (\u5ba2\u6c14\u633d\u7559)"),(0,r.kt)("p",null,"\u76ee\u6807: \u5173\u95ed\u8fde\u63a5(\u56db\u6b21\u6325\u624b) "),(0,r.kt)("p",null,"\u4e0d\u80fd\u76f4\u63a5\u4e00\u6b21\u6027\u65ad\u5f00\u8fde\u63a5(\u53cc\u65b9\u77e5\u6653), \u4e07\u4e00\u8fd8\u6709\u4ec0\u4e48\u6570\u636e\u6ca1\u6709\u4f20\u5b8c, \u9020\u6210\u6570\u636e\u7684\u4e22\u5931!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018230017.png",alt:"image-20221018230017562"})),(0,r.kt)("p",null," \u8fd9\u548c\u6709\u793c\u8c8c\u7684\u597d\u53cb\u9053\u522b\u4e00\u6837\uff1a\uff08a\uff1a\u5ba2\u6237\u7aef b:\u670d\u52a1\u7aef\uff09\n1\u3001\u4e00\u5f00\u59cbA\u60f3\u8981\u56de\u5bb6\u79bb\u5f00\uff0c\u4f46\u662f\u5462\uff1f\u6015B\u8fd8\u6709\u4e8b\u60c5\u8981\u4ea4\u4ee3\uff0c\u90a3\u4e48\u5462\uff1f\u53ea\u597d\u5148\u5411B\u6253\u62db\u547c\uff0c\u6211\u8981\u8d70\u4e86\uff0c\u8bf7\u6c42\u505c\u6b62\u4ea4\u8c08(\u8bf7\u6c42\u65ad\u5f00\u8fde\u63a5)"),(0,r.kt)("p",null,"\u200b    (\u6b64\u65f6\uff0ca\u5230B\u7684\u8fde\u63a5\u6ca1\u6709\u65ad\u5f00\uff0c\u4f9d\u65e7\u53ef\u4ee5\u8fdb\u884c\u901a\u4fe1\uff09\uff1b\n2\u3001\u540c\u610fA\u7684\u8bf7\u6c42\uff0c\u8bf4\u597d\u7684\uff0c\u4f46\u662f\u6211\u8fd9\u91cc\u53ef\u80fd\u8fd8\u6709\u4e00\u4e9b\u8bdd\uff08\u6570\u636e\uff09\u6ca1\u8bf4\u5b8c\u3002\u6211\u68c0\u67e5\u770b\u770b,  \u4f60\u7b49\u7b49,  \u7b49\u6211\u8bf4\u5b8c\u4f60\u518d\u8d70\u3002\n3\u3001B\u786e\u5b9e\u6ca1\u5565\u8981\u8865\u5145\u7684\u4e86\uff0c\u5c31\u544a\u77e5\u4f60\u6211\u53ef\u4ee5\u64a4\u4e86\n4\u3001A\u8bf4\u597d\u7684\uff0c\u77e5\u9053\u4e86\uff0c88\uff1b\uff08B\u5f97\u77e5A\u8d70\u5f00\u4e86\uff0c\u5173\u95ed\u4e86\u81ea\u5df1\u7684\u8fde\u63a5 )"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u7684\u4e00\u6b21 http \u8bf7\u6c42\u6d41\u7a0b\u624d\u7b97\u7ed3\u675f")))}k.isMDXComponent=!0}}]);