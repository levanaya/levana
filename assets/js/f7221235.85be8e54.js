"use strict";(self.webpackChunklevana_website=self.webpackChunklevana_website||[]).push([[1715],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=o(r),g=a,k=c["".concat(u,".").concat(g)]||c[g]||s[g]||i;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1785:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},l="Spring",p={unversionedId:"Java\u6846\u67b6/Spring",id:"Java\u6846\u67b6/Spring",title:"Spring",description:"1 Spring\u4ecb\u7ecd",source:"@site/study/dev/Java\u6846\u67b6/Spring.md",sourceDirName:"Java\u6846\u67b6",slug:"/Java\u6846\u67b6/Spring",permalink:"/levana/dev/Java\u6846\u67b6/Spring",draft:!1,tags:[],version:"current",lastUpdatedBy:"levana",lastUpdatedAt:1679635316,formattedLastUpdatedAt:"2023\u5e743\u670824\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Java\u6846\u67b6",permalink:"/levana/dev/category/java\u6846\u67b6"},next:{title:"Webpack",permalink:"/levana/dev/category/webpack"}},u={},o=[{value:"1 Spring\u4ecb\u7ecd",id:"1-spring\u4ecb\u7ecd",level:3},{value:"1.1 \u4e3a\u4ec0\u4e48\u8981\u5b66",id:"11-\u4e3a\u4ec0\u4e48\u8981\u5b66",level:4},{value:"1.2 \u5b66\u4ec0\u4e48",id:"12-\u5b66\u4ec0\u4e48",level:4},{value:"1.3 \u600e\u4e48\u5b66",id:"13-\u600e\u4e48\u5b66",level:4},{value:"2 \u521d\u8bc6Spring",id:"2-\u521d\u8bc6spring",level:3},{value:"\u95ee\u9898\u5bfc\u5165",id:"\u95ee\u9898\u5bfc\u5165",level:4},{value:"2.1 Spring\u5bb6\u65cf",id:"21-spring\u5bb6\u65cf",level:4},{value:"2.2 Spring\u53d1\u5c55\u53f2",id:"22-spring\u53d1\u5c55\u53f2",level:4}],m={toc:o};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"spring"},"Spring"),(0,a.kt)("h3",{id:"1-spring\u4ecb\u7ecd"},"1 Spring\u4ecb\u7ecd"),(0,a.kt)("h4",{id:"11-\u4e3a\u4ec0\u4e48\u8981\u5b66"},"1.1 \u4e3a\u4ec0\u4e48\u8981\u5b66"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Spring\u6280\u672f\u662fJavaEE\u5f00\u53d1\u5fc5\u5907\u6280\u80fd\uff0c\u4f01\u4e1a\u5f00\u53d1\u6280\u672f\u9009\u578b\u547d\u4e2d\u7387>==90%==")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4e13\u4e1a\u89d2\u5ea6"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"==",(0,a.kt)("strong",{parentName:"li"},"\u7b80\u5316\u5f00\u53d1"),"==\uff0c\u964d\u4f4e\u4f01\u4e1a\u7ea7\u5f00\u53d1\u7684\u590d\u6742\u6027"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"==\u6846\u67b6\u6574\u5408=="),"\uff0c\u9ad8\u6548\u6574\u5408\u5176\u4ed6\u6280\u672f\uff0c\u63d0\u9ad8\u4f01\u4e1a\u7ea7\u5e94\u7528\u5f00\u53d1\u4e0e\u8fd0\u884c\u6548\u7387")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/levanaya/web-img/main/img/image-20230117143605030.png",alt:"image-20230117143605030"})),(0,a.kt)("h4",{id:"12-\u5b66\u4ec0\u4e48"},"1.2 \u5b66\u4ec0\u4e48"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7b80\u5316\u5f00\u53d1"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"==IOC(\u53cd\u8f6c\u63a7\u5236)=="),(0,a.kt)("li",{parentName:"ul"},"==AOP(\u9762\u5411\u5207\u9762\u7f16\u7a0b)==",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"==\u4e8b\u52a1\u5904\u7406=="))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6846\u67b6\u6574\u5408"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MyBatis"),(0,a.kt)("li",{parentName:"ul"},"MyBatis-plus"),(0,a.kt)("li",{parentName:"ul"},"Struts"),(0,a.kt)("li",{parentName:"ul"},"Struts2"),(0,a.kt)("li",{parentName:"ul"},"Hibernate"),(0,a.kt)("li",{parentName:"ul"},"\u2026\u2026")))),(0,a.kt)("h4",{id:"13-\u600e\u4e48\u5b66"},"1.3 \u600e\u4e48\u5b66"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60Spring\u6846\u67b6\u8bbe\u8ba1\u601d\u60f3"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u57fa\u7840\u64cd\u4f5c\uff0c\u601d\u8003\u64cd\u4f5c\u4e0e\u601d\u60f3\u95f4\u7684\u8054\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u5b66\u4e60\u6848\u4f8b\uff0c\u719f\u7ec3\u5e94\u7528\u64cd\u4f5c\u7684\u540c\u65f6\uff0c\u4f53\u4f1a\u601d\u60f3")),(0,a.kt)("h3",{id:"2-\u521d\u8bc6spring"},"2 \u521d\u8bc6Spring"),(0,a.kt)("h4",{id:"\u95ee\u9898\u5bfc\u5165"},"\u95ee\u9898\u5bfc\u5165"),(0,a.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u4f7f\u7528\u7684\u662fSpring\u51e0\u7248\u672c\uff1f"),(0,a.kt)("h4",{id:"21-spring\u5bb6\u65cf"},"2.1 Spring\u5bb6\u65cf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b98\u7f51\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://spring.io"},"https://spring.io")),(0,a.kt)("li",{parentName:"ul"},"Spring\u53d1\u5c55\u5230\u4eca\u5929\u5df2\u7ecf\u5f62\u6210\u4e86\u4e00\u79cd\u5f00\u53d1\u7684\u751f\u6001\u5708\uff0cSpring\u63d0\u4f9b\u4e86\u82e5\u5e72\u4e2a\u9879\u76ee\uff0c\u6bcf\u4e2a\u9879\u76ee\u7528\u4e8e\u5b8c\u6210\u7279\u5b9a\u7684\u529f\u80fd\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/levanaya/web-img/main/img/image-20230117144533463.png",alt:"image-20230117144533463"})),(0,a.kt)("h4",{id:"22-spring\u53d1\u5c55\u53f2"},"2.2 Spring\u53d1\u5c55\u53f2"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/levanaya/web-img/main/img/image-20230117144659593.png",alt:"image-20230117144659593"})))}s.isMDXComponent=!0}}]);