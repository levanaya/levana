"use strict";(self.webpackChunklevana_website=self.webpackChunklevana_website||[]).push([[5137],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},p=Object.keys(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(l=0;l<p.length;l++)n=p[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),k=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=k(e.components);return l.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=k(n),d=a,c=s["".concat(o,".").concat(d)]||s[d]||u[d]||p;return n?l.createElement(c,r(r({ref:t},m),{},{components:n})):l.createElement(c,r({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,r=new Array(p);r[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var k=2;k<p;k++)r[k]=n[k];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>k});var l=n(7462),a=(n(7294),n(3905));const p={sidebar_position:6},r="\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",i={unversionedId:"\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",id:"\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",title:"\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",description:"1. \u6d4f\u89c8\u5668\u662f\u5982\u4f55\u89e3\u6790CSS\u9009\u62e9\u5668\u7684\uff1f",source:"@site/interview/\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406.md",sourceDirName:"\u524d\u7aef\u9762\u8bd5",slug:"/\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",permalink:"/levana/interview/\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406",draft:!1,editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/interview/\u524d\u7aef\u9762\u8bd5/\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406.md",tags:[],version:"current",lastUpdatedBy:"levanaya",lastUpdatedAt:1677850659,formattedLastUpdatedAt:"2023\u5e743\u67083\u65e5",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/levana/interview/\u524d\u7aef\u9762\u8bd5/React"},next:{title:"TCP",permalink:"/levana/interview/\u524d\u7aef\u9762\u8bd5/TCP"}},o={},k=[{value:"1. \u6d4f\u89c8\u5668\u662f\u5982\u4f55\u89e3\u6790CSS\u9009\u62e9\u5668\u7684\uff1f",id:"1-\u6d4f\u89c8\u5668\u662f\u5982\u4f55\u89e3\u6790css\u9009\u62e9\u5668\u7684",level:2},{value:"2. \u6d4f\u89c8\u5668\u662f\u5982\u4f55\u8fdb\u884c\u754c\u9762\u6e32\u67d3\u7684\uff1f",id:"2-\u6d4f\u89c8\u5668\u662f\u5982\u4f55\u8fdb\u884c\u754c\u9762\u6e32\u67d3\u7684",level:2},{value:"3. \u91cd\u7ed8(repaint)\u548c\u91cd\u6392(\u56de\u6d41reflow)\u662f\u4ec0\u4e48?",id:"3-\u91cd\u7ed8repaint\u548c\u91cd\u6392\u56de\u6d41reflow\u662f\u4ec0\u4e48",level:2},{value:"4. \u4f55\u65f6\u4f1a\u89e6\u53d1\u91cd\u6392\uff1f",id:"4-\u4f55\u65f6\u4f1a\u89e6\u53d1\u91cd\u6392",level:2},{value:"5. \u6d4f\u89c8\u5668\u5bf9\u91cd\u7ed8\u91cd\u6392\u7684\u4f18\u5316",id:"5-\u6d4f\u89c8\u5668\u5bf9\u91cd\u7ed8\u91cd\u6392\u7684\u4f18\u5316",level:2},{value:"6. \u91cd\u7ed8\u91cd\u6392\u89d2\u5ea6, \u6211\u4eec\u5e94\u8be5\u5982\u4f55\u4f18\u5316\u9875\u9762\u6e32\u67d3\u6027\u80fd \uff1f",id:"6-\u91cd\u7ed8\u91cd\u6392\u89d2\u5ea6-\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u4f18\u5316\u9875\u9762\u6e32\u67d3\u6027\u80fd-",level:2},{value:"7. \u524d\u7aef\u5982\u4f55\u5b9e\u73b0\u5373\u65f6\u901a\u8baf\uff1fwebsocket",id:"7-\u524d\u7aef\u5982\u4f55\u5b9e\u73b0\u5373\u65f6\u901a\u8bafwebsocket",level:2},{value:"8. \u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565\uff1f",id:"8-\u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565",level:2},{value:"9. \u5982\u4f55\u5b9e\u73b0\u8de8\u57df\u83b7\u53d6\u6570\u636e\uff1f",id:"9-\u5982\u4f55\u5b9e\u73b0\u8de8\u57df\u83b7\u53d6\u6570\u636e",level:2}],m={toc:k};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406"},"\u6d4f\u89c8\u5668\u5e95\u5c42\u539f\u7406"),(0,a.kt)("h2",{id:"1-\u6d4f\u89c8\u5668\u662f\u5982\u4f55\u89e3\u6790css\u9009\u62e9\u5668\u7684"},"1. \u6d4f\u89c8\u5668\u662f\u5982\u4f55\u89e3\u6790CSS\u9009\u62e9\u5668\u7684\uff1f"),(0,a.kt)("p",null,"\u5728\u751f\u6210\u6e32\u67d3\u6811\u7684\u8fc7\u7a0b\u4e2d\uff0c\u6e32\u67d3\u5f15\u64ce\u4f1a\u6839\u636e\u9009\u62e9\u5668\u63d0\u4f9b\u7684\u4fe1\u606f\u6765\u904d\u5386 DOM \u6811\uff0c\u627e\u5230\u5bf9\u5e94\u7684 DOM \u8282\u70b9\u540e\u5c06\u6837\u5f0f\u89c4\u5219\u9644\u52a0\u5230\u4e0a\u9762\u3002"),(0,a.kt)("p",null,"\u6765\u770b\u4e00\u6bb5\u6837\u5f0f\u9009\u62e9\u5668\u4ee3\u7801\u3001\u4ee5\u53ca\u4e00\u6bb5\u8981\u5e94\u7528\u6837\u5f0f\u7684 HTML\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},".mod-nav h3 span {\n    font-size: 16px;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<div class="mod-nav">\n  <header>\n    <h3>\n      <span>\u6807\u9898</span>\n    </h3>\n  </header>\n  \n  <div>\n    <ul>\n      <li><a href="#">\u9879\u76ee\u4e00</a></li>\n      <li><a href="#">\u9879\u76ee\u4e00</a></li>\n      <li><a href="#">\u9879\u76ee\u4e00</a></li>\n    </ul>\n  </div>\n</div>\n\n<div class="box">\n    ...\n</div>\n')),(0,a.kt)("p",null,"\u6e32\u67d3\u5f15\u64ce\u662f\u600e\u4e48\u6839\u636e\u4ee5\u4e0a\u6837\u5f0f\u9009\u62e9\u5668\u53bb\u904d\u5386\u8fd9\u4e2a DOM \u6811\u7684\u5462\uff1f\u662f\u6309\u7167\u4ece\u5de6\u5f80\u53f3\u7684\u9009\u62e9\u5668\u987a\u5e8f\u53bb\u5339\u914d\uff0c\u8fd8\u662f\u4ece\u53f3\u5f80\u5de6\u5462\uff1f"),(0,a.kt)("p",null,"\u4e3a\u4e86\u66f4\u76f4\u89c2\u7684\u89c2\u67e5\uff0c\u6211\u4eec\u5148\u5c06\u8fd9\u68f5 DOM \u6811\u5148\u7ed8\u5236\u6210\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018010901.png",alt:"image-20221018010854289"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece\u5de6\u5f80\u53f3\uff1a",(0,a.kt)("inlineCode",{parentName:"strong"},".mod-nav  =>   h3  =>    span"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u904d\u5386\u6240\u6709\u7684\u5143\u7d20, \u627e\u6709 .mod-nav \u7c7b\u7684\u8282\u70b9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u4ece ",(0,a.kt)("inlineCode",{parentName:"p"},".mod-nav")," \u5f00\u59cb\u904d\u5386\u6240\u6709\u7684\u2f26\u5b59\u8282\u70b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"header"),"\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"div")," \u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"h3"),"\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"ul")," ...."),(0,a.kt)("p",{parentName:"li"},"\u904d\u5386\u6240\u6709\u7684\u540e\u4ee3\u5143\u7d20\u540e, \u77e5\u9053\u4e86, \u6574\u4e2a\u5b50\u5b59\u540e\u4ee3\u53ea\u6709\u4e00\u4e2a h3")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," ,  \u8fd8\u8981\u7ee7\u7eed\u91cd\u65b0\u904d\u5386 ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," \u7684\u6240\u6709\u5b50\u5b59\u8282\u70b9, \u53bb\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},"span")),(0,a.kt)("p",{parentName:"li"},"..."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95ee\u9898: \u4f1a\u8fdb\u884c\u5927\u91cf\u6811\u5f62\u7ed3\u6784\u5b50\u5b59\u8282\u70b9\u7684\u904d\u5386, \u8fd9\u662f\u975e\u5e38\u6d88\u8017\u6210\u672c\u7684!")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u8fd9\u5728\u771f\u5b9e\u9875\u9762\u4e2d\u2f00\u68f5 DOM \u6811\u7684\u8282\u70b9\u6210\u767e\u4e0a\u5343\u7684\u60c5\u51b5\u4e0b\uff0c\u8fd9\u79cd\u904d\u5386\u65b9\u5f0f\u7684\u6548\u7387\u4f1a\u975e\u5e38\u7684\u4f4e\uff0c\u6839\u672c\u4e0d\u9002\u5408\u91c7\u7528\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ece\u53f3\u5f80\u5de6\uff1a",(0,a.kt)("inlineCode",{parentName:"strong"},"span   =>   h3   =>   .mod-nav"))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5148\u627e\u5230\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"span")," \u8282\u70b9 \uff0c\u7136\u540e\u57fa\u4e8e\u6bcf\u2f00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"span")," \u518d\u5411\u4e0a\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u7531 ",(0,a.kt)("inlineCode",{parentName:"p"},"h3")," \u518d\u5411\u4e0a\u67e5\u627e ",(0,a.kt)("inlineCode",{parentName:"p"},".mod-nav")," \u7684\u8282\u70b9")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6700\u540e\u89e6\u53ca\u6839\u5143\u7d20 ",(0,a.kt)("inlineCode",{parentName:"p"},"html")," \u7ed3\u675f\u8be5\u5206\u2f40\u904d\u5386"),(0,a.kt)("p",{parentName:"li"},"..."))),(0,a.kt)("p",null,"\u4ece\u53f3\u5411\u5de6\u7684\u5339\u914d\u89c4\u5219, \u53ea\u6709\u7b2c\u4e00\u6b21\u4f1a\u904d\u5386\u6240\u6709\u5143\u7d20\u627e\u8282\u70b9, \u800c\u5269\u4e0b\u7684\u5c31\u662f\u5728\u770b\u7236\u8f88\u7956\u8f88\u662f\u5426\u6ee1\u8db3\u9009\u62e9\u5668\u7684\u6761\u4ef6, \u5339\u914d\u6548\u7387\u5927\u5927\u63d0\u5347!"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u6d4f\u89c8\u5668\u9075\u5faa \u201c\u4ece\u53f3\u5f80\u5de6\u201d \u7684\u89c4\u5219\u6765\u89e3\u6790 CSS \u9009\u62e9\u5668\uff01"),(0,a.kt)("h2",{id:"2-\u6d4f\u89c8\u5668\u662f\u5982\u4f55\u8fdb\u884c\u754c\u9762\u6e32\u67d3\u7684"},"2. \u6d4f\u89c8\u5668\u662f\u5982\u4f55\u8fdb\u884c\u754c\u9762\u6e32\u67d3\u7684\uff1f"),(0,a.kt)("p",null,"\u4e0d\u540c\u7684\u6e32\u67d3\u5f15\u64ce\u7684\u5177\u4f53\u505a\u6cd5\u7a0d\u6709\u5dee\u5f02\uff0c\u4f46\u662f\u5927\u4f53\u6d41\u7a0b\u90fd\u662f\u5dee\u4e0d\u591a\u7684\uff0c\u4e0b\u9762\u4ee5 chrome\u6e32\u67d3\u5f15\u64ce \u7684 \u6e32\u67d3\u6d41\u7a0b\u6765\u8bf4\u660e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018011119.png",alt:"image-20221018011119780"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u5c55\u793a\u7684\u6d41\u7a0b\u662f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u83b7\u53d6 HTML \u2f42\u4ef6\u5e76\u8fdb\u2f8f\u89e3\u6790\uff0c\u751f\u6210\u4e00\u68f5 DOM \u6811\uff08DOM Tree\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u89e3\u6790 HTML \u7684\u540c\u65f6\u4e5f\u4f1a\u89e3\u6790 CSS\uff0c\u2f63\u6210\u6837\u5f0f\u89c4\u5219\uff08Style Rules\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u6839\u636e DOM \u6811\u548c\u6837\u5f0f\u89c4\u5219\uff0c\u751f\u6210\u4e00\u68f5\u6e32\u67d3\u6811\uff08Render Tree\uff09")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fdb\u884c\u5e03\u5c40\uff08Layout\uff09(\u91cd\u6392)\uff0c\u5373\u4e3a\u6bcf\u4e2a\u8282\u70b9\u5206\u914d\u2f00\u4e2a\u5728\u5c4f\u5e55\u4e0a\u5e94\u663e\u793a\u7684\u786e\u5207\u5750\u6807\u4f4d\u7f6e ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u8fdb\u2f8f\u7ed8\u5236\uff08Paint\uff09(\u91cd\u7ed8)\uff0c\u904d\u5386\u6e32\u67d3\u6811\u8282\u70b9\uff0c\u8c03\u2f64 GPU(\u56fe\u5f62\u5904\u7406\u5668) \u5c06\u5143\u7d20\u5448\u73b0\u51fa\u6765 "))),(0,a.kt)("h2",{id:"3-\u91cd\u7ed8repaint\u548c\u91cd\u6392\u56de\u6d41reflow\u662f\u4ec0\u4e48"},"3. \u91cd\u7ed8(repaint)\u548c\u91cd\u6392(\u56de\u6d41reflow)\u662f\u4ec0\u4e48?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u6392")),(0,a.kt)("p",null,"\u91cd\u6392\u662f\u6307\u90e8\u5206\u6216\u6574\u4e2a\u6e32\u67d3\u6811\u9700\u8981\u91cd\u65b0\u5206\u6790\uff0c\u5e76\u4e14\u8282\u70b9\u7684\u5c3a\u2f28\u9700\u8981\u91cd\u65b0\u8ba1\u7b97\u3002"),(0,a.kt)("p",null,"\u8868\u73b0\u4e3a ",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u2f63\u6210\u5e03\u5c40\uff0c\u91cd\u65b0\u6392\u5217\u5143\u7d20\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u91cd\u7ed8")),(0,a.kt)("p",null,"\u91cd\u7ed8\u662f\u7531\u4e8e\u8282\u70b9\u7684\u2f0f\u4f55\u5c5e\u6027\u53d1\u2f63\u6539\u53d8\uff0c\u6216\u7531\u4e8e\u6837\u5f0f\u53d1\u2f63\u6539\u53d8\uff08\u4f8b\u5982\uff1a\u6539\u53d8\u5143\u7d20\u80cc\u666f\u2f8a\uff09\u3002"),(0,a.kt)("p",null,"\u8868\u73b0\u4e3a\u67d0\u4e9b\u5143\u7d20\u7684\u5916\u89c2\u88ab\u6539\u53d8\u3002\u6216\u8005\u91cd\u6392\u540e, \u8fdb\u884c\u91cd\u65b0\u7ed8\u5236!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e24\u8005\u7684\u5173\u7cfb")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u91cd\u7ed8\u4e0d\u2f00\u5b9a\u4f1a\u51fa\u73b0\u91cd\u6392\uff0c\u91cd\u6392\u5fc5\u5b9a\u4f1a\u89e6\u53d1\u91cd\u7ed8\u3002")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u9875\u9762\u81f3\u5c11\u9700\u8981\u4e00\u6b21\u56de\u6d41+\u91cd\u7ed8\u3002(\u521d\u59cb\u5316\u6e32\u67d3)"),(0,a.kt)("p",null,"\u91cd\u6392\u548c\u91cd\u7ed8\u7684\u4ee3\u4ef7\u90fd\u5f88\u2fbc\u6602\uff0c\u9891\u7e41\u91cd\u6392\u91cd\u7ed8, \u4f1a\u7834\u574f\u2f64\u6237\u4f53\u9a8c\u3001\u8ba9\u754c\u9762\u663e\u793a\u53d8\u8fdf\u7f13\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u9700\u8981\u5c3d\u53ef\u80fd\u907f\u514d\u9891\u7e41\u89e6\u53d1\u91cd\u6392\u548c\u91cd\u7ed8, \u5c24\u5176\u662f\u91cd\u6392"),(0,a.kt)("h2",{id:"4-\u4f55\u65f6\u4f1a\u89e6\u53d1\u91cd\u6392"},"4. \u4f55\u65f6\u4f1a\u89e6\u53d1\u91cd\u6392\uff1f"),(0,a.kt)("p",null,"\u91cd\u6392\u4ec0\u4e48\u65f6\u5019\u53d1\u751f\uff1f"),(0,a.kt)("p",null,"1\u3001\u6dfb\u52a0\u6216\u8005\u5220\u9664\u53ef\u89c1\u7684DOM\u5143\u7d20\uff1b"),(0,a.kt)("p",null,"2\u3001\u5143\u7d20\u4f4d\u7f6e\u6539\u53d8\uff1b"),(0,a.kt)("p",null,"3\u3001\u5143\u7d20\u5c3a\u5bf8\u6539\u53d8\u2014\u2014\u8fb9\u8ddd\u3001\u586b\u5145\u3001\u8fb9\u6846\u3001\u5bbd\u5ea6\u548c\u9ad8\u5ea6"),(0,a.kt)("p",null,"4\u3001\u5185\u5bb9\u6539\u53d8\u2014\u2014\u6bd4\u5982\u6587\u672c\u6539\u53d8\u6216\u8005\u56fe\u7247\u5927\u5c0f\u6539\u53d8\u800c\u5f15\u8d77\u7684\u8ba1\u7b97\u503c\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u6539\u53d8\uff1b"),(0,a.kt)("p",null,"5\u3001\u9875\u9762\u6e32\u67d3\u521d\u59cb\u5316\uff1b"),(0,a.kt)("p",null,"6\u3001\u6d4f\u89c8\u5668\u7a97\u53e3\u5c3a\u5bf8\u6539\u53d8\u2014\u2014resize\u4e8b\u4ef6\u53d1\u751f\u65f6\uff1b"),(0,a.kt)("h2",{id:"5-\u6d4f\u89c8\u5668\u5bf9\u91cd\u7ed8\u91cd\u6392\u7684\u4f18\u5316"},"5. \u6d4f\u89c8\u5668\u5bf9\u91cd\u7ed8\u91cd\u6392\u7684\u4f18\u5316"),(0,a.kt)("p",null,"\u601d\u8003\u4e0b\u8ff0\u4ee3\u7801\u7684\u91cd\u7ed8\u91cd\u6392\u8fc7\u7a0b!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'let s = document.body.style\ns.padding = "2px" // \u91cd\u6392 + \u91cd\u7ed8\ns.border = "1px solid red" // \u518d\u4e00\u6b21 \u91cd\u6392 + \u91cd\u7ed8\ns.color = "blue" // \u518d\u4e00\u6b21\u91cd\u7ed8\ns.backgroundColor = "#ccc" // \u518d\u4e00\u6b21 \u91cd\u7ed8\ns.fontSize = "14px" // \u518d\u4e00\u6b21 \u91cd\u6392 + \u91cd\u7ed8\ndocument.body.appendChild(document.createTextNode(\'abc!\')) // \u6dfb\u52a0node\uff0c\u518d\u4e00\u6b21 \u91cd\u6392 + \u91cd\u7ed8\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u806a\u660e\u7684\u6d4f\u89c8\u5668:")),(0,a.kt)("p",null,"\u4ece\u4e0a\u4e2a\u5b9e\u4f8b\u4ee3\u7801\u4e2d\u53ef\u4ee5\u770b\u5230\u51e0\u884c\u7b80\u5355\u7684JS\u4ee3\u7801\u5c31\u5f15\u8d77\u4e86 4\u6b21\u91cd\u6392\u30016\u6b21\u91cd\u7ed8\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\u6211\u4eec\u4e5f\u77e5\u9053\u91cd\u6392\u7684\u82b1\u9500\u4e5f\u4e0d\u5c0f\uff0c\u5982\u679c\u6bcf\u53e5JS\u64cd\u4f5c\u90fd\u53bb\u91cd\u6392\u91cd\u7ed8\u7684\u8bdd\uff0c\u6d4f\u89c8\u5668\u53ef\u80fd\u5c31\u4f1a\u53d7\u4e0d\u4e86!"),(0,a.kt)("p",null,"\u6240\u4ee5\u6d4f\u89c8\u5668\u4f1a\u4f18\u5316\u8fd9\u4e9b\u64cd\u4f5c\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6d4f\u89c8\u5668\u4f1a\u7ef4\u62a41\u4e2a\u961f\u5217\uff0c\u628a\u6240\u6709\u4f1a\u5f15\u8d77\u91cd\u6392\u3001\u91cd\u7ed8\u7684\u64cd\u4f5c\u653e\u5165\u8fd9\u4e2a\u961f\u5217"),"\uff0c"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b49\u961f\u5217\u4e2d\u7684\u64cd\u4f5c\u5230\u4e86\u4e00\u5b9a\u7684\u6570\u91cf\u6216\u8005\u5230\u4e86\u4e00\u5b9a\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u6d4f\u89c8\u5668\u5c31\u4f1aflush\u961f\u5217\uff0c\u8fdb\u884c\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"strong"},"\u6279\u5904\u7406"),"\u3002")),(0,a.kt)("p",null,"\u8fd9\u6837\u5c31\u4f1a\u8ba9\u591a\u6b21\u7684\u91cd\u6392\u3001\u91cd\u7ed8\u53d8\u6210\u4e86\u4e00\u6b21\u91cd\u6392\u91cd\u7ed8\u3002"),(0,a.kt)("p",null,"\u867d\u7136\u6709\u4e86\u6d4f\u89c8\u5668\u7684\u4f18\u5316\uff0c\u4f46\u6709\u65f6\u5019\u6211\u4eec\u5199\u7684\u4e00\u4e9b\u4ee3\u7801\u53ef\u80fd\u4f1a\u5f3a\u5236\u6d4f\u89c8\u5668\u63d0\u524dflush\u961f\u5217\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u7684\u4f18\u5316\u53ef\u80fd\u8d77\u4e0d\u5230\u4f5c\u7528\u4e86\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u5f53\u4f60\u8bf7\u6c42\u5411\u6d4f\u89c8\u5668\u83b7\u53d6\u4e00\u4e9b\u6837\u5f0f\u4fe1\u606f\u7684\u65f6\u5019(\u4fdd\u8bc1\u83b7\u53d6\u7ed3\u679c\u7684\u51c6\u786e\u6027)\uff0c\u5c31\u4f1a\u8ba9\u6d4f\u89c8\u5668flush\u961f\u5217"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"offsetTop, offsetLeft, offsetWidth, offsetHeight"),(0,a.kt)("li",{parentName:"ol"},"scrollTop/Left/Width/Height"),(0,a.kt)("li",{parentName:"ol"},"clientTop/Left/Width/Height"),(0,a.kt)("li",{parentName:"ol"},"\u8bf7\u6c42\u4e86getComputedStyle()"),(0,a.kt)("li",{parentName:"ol"},"....")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u731c\u4e00\u731c, \u9875\u9762\u6548\u679c\u662f\u4ec0\u4e48:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n  <style>\n    div {\n      width: 200px;\n      height: 200px;\n      background-color: pink;\n      transition: all 1s;\n    }\n\n  </style>\n</head>\n<body>\n\n  <div id="box"></div>\n\n  <script>\n    const div = document.getElementById("box")\n    // console.log(div.offsetWidth)\n    div.style.width = \'400px\'\n    div.style.height = \'400px\'\n  <\/script>\n  \n</body>\n</html>\n')),(0,a.kt)("h2",{id:"6-\u91cd\u7ed8\u91cd\u6392\u89d2\u5ea6-\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u4f18\u5316\u9875\u9762\u6e32\u67d3\u6027\u80fd-"},"6. \u91cd\u7ed8\u91cd\u6392\u89d2\u5ea6, \u6211\u4eec\u5e94\u8be5\u5982\u4f55\u4f18\u5316\u9875\u9762\u6e32\u67d3\u6027\u80fd \uff1f"),(0,a.kt)("p",null,"\u4f18\u5316\u9875\u9762\u6e32\u67d3\u6027\u80fd\u7684\u89d2\u5ea6:  \u5c3d\u53ef\u80fd\u51cf\u5c11\u91cd\u7ed8\u548c\u91cd\u6392\u7684\u6b21\u6570"),(0,a.kt)("p",null,"\u4e3b\u8981\u6709\u51e0\u5927\u65b9\u5f0f\u6765\u907f\u514d\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1 \u96c6\u4e2d\u4fee\u6539\u6837\u5f0f (\u8fd9\u6837\u53ef\u4ee5\u5c3d\u53ef\u80fd\u5229\u7528\u6d4f\u89c8\u5668\u7684\u4f18\u5316\u673a\u5236, \u4e00\u6b21\u91cd\u6392\u91cd\u7ed8\u5c31\u5b8c\u6210\u6e32\u67d3)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2 \u5c3d\u91cf\u907f\u514d\u5728\u904d\u5386\u5faa\u73af\u4e2d, \u8fdb\u884c\u5143\u7d20 offsetTop \u7b49\u6837\u5f0f\u503c\u7684\u83b7\u53d6\u64cd\u4f5c, \u4f1a\u5f3a\u5236\u6d4f\u89c8\u5668\u5237\u65b0\u961f\u5217, \u8fdb\u884c\u6e32\u67d3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3 \u5229\u7528 transform \u5b9e\u73b0\u52a8\u753b\u53d8\u5316\u6548\u679c, \u53bb\u4ee3\u66ff left top \u7684\u53d8\u6362 (\u8f6e\u64ad\u56fe\u7b49)"),(0,a.kt)("p",{parentName:"li"},"transform\u53d8\u6362, \u53ea\u662f\u89c6\u89c9\u6548\u679c! \u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u76d2\u5b50,  \u53ea\u89e6\u53d1\u4e86\u81ea\u5df1\u7684\u91cd\u7ed8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 \u4f7f\u7528\u6587\u6863\u788e\u7247\uff08DocumentFragment\uff09\u53ef\u4ee5\u7528\u4e8e\u6279\u91cf\u5904\u7406, \u521b\u5efa\u5143\u7d20"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6587\u6863\u788e\u7247\u7684\u7406\u89e3:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"documentFragment"),"\u662f\u4e00\u4e2a\u4fdd\u5b58\u591a\u4e2a\u5143\u7d20\u7684\u5bb9\u5668\u5bf9\u8c61\uff08\u4fdd\u5b58\u5728\u5185\u5b58\uff09\u5f53\u66f4\u65b0\u5176\u4e2d\u7684\u4e00\u4e2a\u6216\u8005\u591a\u4e2a\u5143\u7d20\u65f6\uff0c\u9875\u9762\u4e0d\u4f1a\u66f4\u65b0\u3002"),(0,a.kt)("p",null,"\u5f53documentFragment\u5bb9\u5668\u4e2d\u4fdd\u5b58\u7684\u6240\u6709\u5143\u7d20\u64cd\u4f5c\u5b8c\u6bd5\u4e86,  \u53ea\u6709\u5c06\u5176\u63d2\u5165\u5230\u9875\u9762\u4e2d\u624d\u4f1a\u66f4\u65b0\u9875\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ul id="box"></ul>\n\n<script>\n  let ul = document.getElementById("box")\n  for (let i = 0; i < 20; i++) {\n    let li = document.createElement("li")\n    li.innerHTML = "index: " + i\n    ul.appendChild(li)\n  }\n\n\n  // let ul = document.getElementById("box")\n  // let fragment = document.createDocumentFragment()\n  // for (let i = 0; i < 20; i++) {\n  //     let li = document.createElement("li")\n  //     li.innerHTML = "index: " + i\n  //     fragment.appendChild(li)\n  // }\n  // ul.appendChild(fragment)\n<\/script>\n')),(0,a.kt)("p",null,"vue\u5e95\u5c42\u6e32\u67d3\u66f4\u65b0, \u5c31\u7528\u4e86  document.createDocumentFragment"),(0,a.kt)("h2",{id:"7-\u524d\u7aef\u5982\u4f55\u5b9e\u73b0\u5373\u65f6\u901a\u8bafwebsocket"},"7. \u524d\u7aef\u5982\u4f55\u5b9e\u73b0\u5373\u65f6\u901a\u8baf\uff1fwebsocket"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u4e25\u683c\u610f\u4e49\u4e0a: HTTP\u534f\u8bae\u53ea\u80fd\u505a\u5230\u5ba2\u6237\u7aef\u8bf7\u6c42\u670d\u52a1\u5668, \u670d\u52a1\u5668\u505a\u51fa\u54cd\u5e94, \u505a\u4e0d\u5230\u8ba9\u670d\u52a1\u5668\u4e3b\u52a8\u7ed9\u5ba2\u6237\u7aef\u63a8\u9001\u6d88\u606f!")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u90a3\u4e48\u5982\u679c\u670d\u52a1\u5668\u6570\u636e\u66f4\u65b0\u4e86, \u60f3\u8981\u5373\u65f6\u901a\u77e5\u5230\u5ba2\u6237\u7aef\u600e\u4e48\u529e\u5462 ? (\u5373\u65f6\u901a\u4fe1\u9700\u6c42)")),(0,a.kt)("p",null,"\u5373\u65f6\u901a\u4fe1\u9700\u6c42: \u670d\u52a1\u5668\u6570\u636e\u4e00\u6709\u66f4\u65b0, \u5e0c\u671b\u63a8\u9001\u7ed9\u5230\u6d4f\u89c8\u5668"),(0,a.kt)("p",null,"\u63d0\u95ee\u7684\u56de\u7b54\u91cd\u5fc3:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5373\u65f6\u901a\u4fe1\u6709\u54ea\u4e9b\u65b9\u6848? "),(0,a.kt)("li",{parentName:"ol"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528\u4e86\u5176\u4e2d\u67d0\u4e00\u4e2a\u65b9\u6848! websocket")),(0,a.kt)("p",null,"\u57fa\u4e8eWeb\u7684\u524d\u7aef\uff0c\u5b58\u5728\u4ee5\u4e0b\u51e0\u79cd\u53ef\u5b9e\u73b0\u5373\u65f6\u901a\u8baf\u7684\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u77ed\u8f6e\u8be2 (\u5386\u53f2\u65b9\u6848)   "),(0,a.kt)("p",{parentName:"li"},"\u5f00\u4e2a\u5b9a\u65f6\u5668, \u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u53d1\u8bf7\u6c42 (\u5b9e\u65f6\u6027\u4e0d\u5f3a)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Comet - ajax\u957f\u8f6e\u8be2(\u5386\u53f2\u65b9\u6848)    "),(0,a.kt)("p",{parentName:"li"},"\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42, \u670d\u52a1\u5668\u53ea\u8981\u6570\u636e\u4e0d\u66f4\u65b0, \u5c31\u4e00\u76f4\u963b\u585e  (\u670d\u52a1\u5668\u538b\u529b\u8fc7\u5927)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SSE   "),(0,a.kt)("p",{parentName:"li"},"(\u5229\u7528\u4e86http\u534f\u8bae, \u6d41\u6570\u636e\u7684\u4f20\u8f93, \u5e76\u4e0d\u662f\u4e25\u683c\u610f\u4e49\u7684\u53cc\u5411\u901a\u4fe1, \u65e0\u6cd5\u590d\u7528\u8fde\u63a5)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"WebSocket (\u4e3b\u6d41)  "),(0,a.kt)("p",{parentName:"li"},"\u6027\u80fd\u548c\u6548\u7387\u90fd\u9ad8!"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u77ed\u8f6e\u8be2")," (\u5386\u53f2\u65b9\u6848)"),(0,a.kt)("p",null,"\u77ed\u8f6e\u8be2\u5c31\u662f\u5ba2\u6237\u7aef\u5b9a\u65f6\u53d1\u9001\u8bf7\u6c42\uff0c\u83b7\u53d6\u670d\u52a1\u5668\u4e0a\u7684\u6700\u65b0\u6570\u636e\u3002\u4e0d\u662f\u771f\u6b63\u7684\u5373\u65f6\u901a\u8baf\uff0c\u4f46\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u6a21\u62df\u5373\u65f6\u901a\u8baf\u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018011533.png",alt:"image-20221018011533194"})),(0,a.kt)("p",null,"\u4f18\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u597d\uff0c\u5b9e\u73b0\u7b80\u5355  setInterval"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u5b9e\u65f6\u6027\u4e0d\u9ad8\uff0c\u8d44\u6e90\u6d88\u8017\u9ad8\uff0c\u5b58\u5728\u8f83\u591a\u65e0\u7528\u8bf7\u6c42\uff0c\u5f71\u54cd\u6027\u80fd")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Comet - ajax\u957f\u8f6e\u8be2")," (\u5386\u53f2\u65b9\u6848)"),(0,a.kt)("p",null,"\u77ed\u8f6e\u8be2\u7684\u5b9e\u65f6\u6027, \u7740\u5b9e\u592a\u5dee,  \u6240\u4ee5 Comet \u6280\u672f\u65b9\u6848\u5e94\u8fd0\u800c\u751f, \u7528\u4ee5\u5b9e\u73b0\u5373\u65f6\u901a\u8baf"),(0,a.kt)("p",null,"\u4f7f\u7528 Ajax \u957f\u8f6e\u8be2\uff08long-polling\uff09"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668\u53d1\u51faXMLHttpRequest \u8bf7\u6c42\uff0c\u670d\u52a1\u5668\u7aef\u63a5\u6536\u5230\u8bf7\u6c42\u540e\uff0c\u4f1a\u963b\u585e\u8bf7\u6c42\u76f4\u5230\u6709\u6570\u636e\u6216\u8005\u8d85\u65f6\u624d\u8fd4\u56de")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6d4f\u89c8\u5668JS\u5728\u5904\u7406\u8fd4\u56de\u4fe1\u606f(\u6709\u6570\u636e\u6216\u8005\u8d85\u65f6) \u540e\u518d\u6b21\u53d1\u51fa\u8bf7\u6c42\u3002\u670d\u52a1\u5668\u6536\u5230\u8bf7\u6c42\u540e, \u4f1a\u518d\u6b21\u963b\u585e\u5230\u6709\u6570\u636e\u6216\u8005\u8d85\u65f6 "),(0,a.kt)("p",{parentName:"li"},"..."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018011651.png",alt:"image-20221018011651354"})),(0,a.kt)("p",null,"\u4f18\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u6d4f\u89c8\u5668\u517c\u5bb9\u6027\u597d\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5373\u65f6\u6027\u597d"),"\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u5b58\u5728\u2f46\u2f64\u8bf7\u6c42")," ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u670d\u52a1\u5668\u538b\u529b\u8f83\u5927"),"\uff08\u7ef4\u62a4\u2ed3\u8fde\u63a5\u4f1a\u6d88\u8017\u8f83\u591a\u670d\u52a1\u5668\u8d44\u6e90\uff09"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SSE")),(0,a.kt)("p",null,"\u670d\u52a1\u7aef\u63a8\u9001\u4e8b\u4ef6\uff08Server-Sent Event\uff09\uff0c\u5b83\u662f\u2f00\u79cd\u57fa\u4e8eHTTP\u534f\u8bae,  \u5141\u8bb8\u670d\u52a1\u7aef\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u65b0\u6570\u636e\u7684 HTML5 \u6280\u672f\u3002 "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u95ee\u9898: HTTP\u534f\u8bae \u4e0d\u662f \u65e0\u6cd5\u505a\u5230\u670d\u52a1\u5668\u4e3b\u52a8\u5411\u5ba2\u6237\u7aef\u63a8\u9001\u6d88\u606f\u4e48?")),(0,a.kt)("p",null,"\u8fd9\u4e9b SSE \u91c7\u7528\u4e86\u4e00\u4e9b\u5c0f\u6280\u5de7!  \u8be6\u7ec6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html"},"\u53c2\u8003\u6587\u7ae0\uff1aSSE\u6559\u7a0b")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018011809.png",alt:"image-20221018011809603"})),(0,a.kt)("p",null,"\u4f18\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f18\u70b9\uff1a\u57fa\u4e8e HTTP\uff0c\u65e0\u9700\u592a\u591a\u6539\u9020\u5c31\u80fd\u4f7f\u2f64\uff1b\u76f8\u6bd4 WebSocket \u8981\u7b80\u5355\u4e00\u4e9b"),(0,a.kt)("li",{parentName:"ul"},"\u7f3a\u70b9\uff1a\u57fa\u4e8e\u2f42\u672c\u4f20\u8f93\uff0c\u6548\u7387\u6ca1\u6709 WebSocket \u2fbc\uff1b\u57fa\u4e8eHTTP\u534f\u8bae, \u4e0d\u662f\u4e25\u683c\u7684\u53cc\u5411\u901a\u4fe1")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WebSocket")," (\u76ee\u524d\u4e3b\u6d41)"),(0,a.kt)("p",null,"\u8fd9\u662f\u57fa\u4e8e TCP \u534f\u8bae\u7684\u5168\u65b0\u3001\u72ec\u2f74\u7684\u534f\u8bae\uff0c\u4f5c\u2f64\u662f\u5728\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u5efa\u2f74\u5b9e\u65f6\u7684\u53cc\u5411\u901a\u4fe1\u3002"),(0,a.kt)("p",null,"WebSocket \u534f\u8bae\u4e0e HTTP \u534f\u8bae\u4fdd\u6301\u517c\u5bb9\uff0c\u4f46\u5b83\u4e0d\u4f1a\u878d\u2f0a HTTP \u534f\u8bae\uff0c\u4ec5\u4f5c\u4e3a HTML 5 \u7684\u2f00\u90e8\u5206\u3002 "),(0,a.kt)("p",null,"\u4f18\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u4f18\u70b9\uff1a\u771f\u6b63\u610f\u4e49\u4e0a\u7684\u53cc\u5411\u5b9e\u65f6\u901a\u4fe1\uff0c\u6027\u80fd\u597d\u3001\u5ef6\u8fdf\u4f4e ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7f3a\u70b9\uff1a\u7531\u4e8e\u662f\u72ec\u2f74\u4e8e HTTP \u7684\u534f\u8bae\uff0c\u56e0\u6b64\u8981\u4f7f\u7528\u7684\u8bdd\u9700\u8981\u5bf9\u9879\u2f6c\u4f5c\u6539\u9020\uff1b"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u2f64\u590d\u6742\u5ea6\u4f1a\u2fbc\u4e00\u4e9b\uff0c\u901a\u5e38\u9700\u8981\u5f15\u2f0a\u6210\u719f\u7684\u5e93 (\u5982: Socket-io )\uff1b\u5e76\u4e14\u2f46\u6cd5\u517c\u5bb9\u4f4e\u7248\u672c\u7684\u6d4f\u89c8\u5668"))),(0,a.kt)("p",null,"HTTP \u548c WebSocket \u7684\u8fde\u63a5\u901a\u4fe1\u6bd4\u8f83\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018011910.png",alt:"image-20221018011910680"})),(0,a.kt)("h2",{id:"8-\u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565"},"8. \u4ec0\u4e48\u662f\u6d4f\u89c8\u5668\u540c\u6e90\u7b56\u7565\uff1f"),(0,a.kt)("p",null,'\u9996\u5148\uff0c\u540c\u6e90\u662f\u6307\u8d44\u6e90\u5730\u5740\u7684 "\u534f\u8bae + \u57df\u540d + \u7aef\u2f1d" \u4e09\u8005\u90fd\u76f8\u540c\uff0c\u5373\u4f7f\u4e24\u4e2a\u4e0d\u540c\u57df\u540d\u6307\u5411\u4e86\u540c\u2f00 IP \u5730\u5740\uff0c\u4e5f\u88ab\u5224\u65ad\u4e3a\u2fae\u540c\u6e90\u3002'),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e9b\u5730\u5740\u7684\u540c\u6e90\u5224\u65ad\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e0d\u540c\u5730\u5740\u7684\u9875\u9762, \u53bb\u8bf7\u6c42\u4e00\u4e2a\u63a5\u53e3: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://store.company.com/getInfo")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018012108.png",alt:"image-20221018012108123"})),(0,a.kt)("p",null,"\u540c\u6e90\u7b56\u7565\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6d4f\u89c8\u5668")," \u7684\u4e00\u79cd\u2f64\u4e8e\u9694\u79bb\u6f5c\u5728\u6076\u610f\u2f42\u4ef6\u7684\u91cd\u8981\u5b89\u5168\u4fdd\u62a4\u673a\u5236 !!!  (\u670d\u52a1\u5668\u6ca1\u6709\u8fd9\u4e2a\u7b56\u7565\u9650\u5236)"),(0,a.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u2f24\u90e8\u5206\u5185\u5bb9\u90fd\u53d7\u540c\u6e90\u7b56\u7565\u9650\u5236\uff0c\u9664\u4e86\u4ee5\u4e0b\u4e09\u4e2a\u8d44\u6e90\u83b7\u53d6\u7c7b\u578b\u7684\u6807\u7b7e\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<img>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<link>")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"script"))),(0,a.kt)("h2",{id:"9-\u5982\u4f55\u5b9e\u73b0\u8de8\u57df\u83b7\u53d6\u6570\u636e"},"9. \u5982\u4f55\u5b9e\u73b0\u8de8\u57df\u83b7\u53d6\u6570\u636e\uff1f"),(0,a.kt)("p",null,"\u5386\u53f2\u4e0a\u51fa\u73b0\u8fc7\u7684\u8de8\u57df\u2f3f\u6bb5\u6709\u5f88\u591a\uff0c\u4e3b\u8981\u4e86\u89e33\u79cd\u8de8\u57df\u2f45\u6848\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"JSONP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CORS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u670d\u52a1\u5668\u4ee3\u7406(webpack\u4ee3\u7406, Nginx\u53cd\u5411\u4ee3\u7406)"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JSONP")," "),(0,a.kt)("p",null,"\u8fd9\u662f\u4e00\u79cd\u975e\u5e38\u7ecf\u5178\u7684\u8de8\u57df\u65b9\u6848\uff0c\u5b83\u5229\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"<script>")," \u6807\u7b7e\u4e0d\u53d7\u540c\u6e90\u7b56\u7565\u7684\u9650\u5236\u7684\u7279\u6027\uff0c\u5b9e\u73b0\u8de8\u57df\u6548\u679c\u3002"),(0,a.kt)("p",null,"\u4f18\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u7b80\u5355"),(0,a.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027\u597d")),(0,a.kt)("p",null,"\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 GET \u8bf7\u6c42 \uff08\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"<script>")," \u6807\u7b7e\u53ea\u80fd\u53d1\u9001 GET \u8bf7\u6c42\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u5728\u88ab XSS \u653b\u51fb\u7684\u53ef\u80fd\uff0c\u7f3a\u4e4f\u5b89\u5168\u6027\u4fdd\u8bc1"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u670d\u52a1\u7aef\u914d\u5408\u6539\u9020")),(0,a.kt)("p",null,"axios\u4e2d\u4e0d\u652f\u6301 JSONP, \u5982\u679c\u5728\u5f00\u53d1\u4e2d, \u9700\u8981\u53d1\u9001 JSONP \u8bf7\u6c42, \u53ef\u4ee5\u7528 jsonp \u63d2\u4ef6"),(0,a.kt)("p",null,"\u53c2\u8003\u6587\u6863: ",(0,a.kt)("a",{parentName:"p",href:"https://www.jianshu.com/p/720e453ca27d"},"Vue \u4e2dJSONP \u63d2\u4ef6\u7684\u4f7f\u7528")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"CORS")," (\u4e3b\u6d41)"),(0,a.kt)("p",null,"\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff08CORS\uff09\uff0c\u8fd9\u662f\u2f6c\u524d\u6bd4\u8f83\u4e3b\u6d41\u7684\u8de8\u57df\u89e3\u51b3\u2f45\u6848\uff0c"),(0,a.kt)("p",null,"\u5b83\u5229\u7528\u4e00\u4e9b\u989d\u5916\u7684 HTTP \u54cd\u5e94\u5934\u6765\u901a\u77e5\u6d4f\u89c8\u5668, \u5141\u8bb8\u8bbf\u95ee\u6765\u81ea\u6307\u5b9a origin \u7684\u975e\u540c\u6e90\u670d\u52a1\u5668\u4e0a\u7684\u8d44\u6e90\u3002"),(0,a.kt)("p",null,"Node.js \u7684 Express \u6846\u67b6\u7684\u8bbe\u7f6e\u4ee3\u7801 (Java, PHP\u7b49, \u914d\u7f6e\u4ee3\u7801\u5dee\u4e0d\u591a)\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u521b\u5efa\u4e00\u4e2a CORS \u4e2d\u95f4\u4ef6 \nfunction allowCrossDomain(req, res, next) { \n  res.header('Access-Control-Allow-Origin', 'http://example.com'); \n  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'); \n  res.header('Access-Control-Allow-Headers', 'Content-Type'); \n  next(); \n}\n\n//...\n\napp.configure(function() { \n  // ...\n  \n  // \u4e3a Express \u914d\u7f6e CORS \u4e2d\u95f4\u4ef6\n  app.use(allowCrossDomain); \n  \n  // ...\n});\n")),(0,a.kt)("p",null,"\u6240\u4ee5, \u5f00\u53d1\u4e2d\u6216\u4e0a\u7ebf\u65f6\u9047\u5230\u8de8\u57df, \u5982\u679c\u4e0d\u8003\u8651\u517c\u5bb9\u6027\u95ee\u9898 (IE10+)"),(0,a.kt)("p",null,"\u4f18\u5148\u8ba9\u540e\u53f0\u914d\u7f6e\u4e2a CORS \u89e3\u51b3\u5373\u53ef, \u7b80\u5355\u5feb\u6377!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4ee3\u7406\u670d\u52a1\u5668")),(0,a.kt)("p",null,"\u8bf4\u660e: \u540c\u6e90\u7b56\u7565, \u662f\u6d4f\u89c8\u5668\u7684\u5b89\u5168\u7b56\u7565, \u670d\u52a1\u5668\u4e8e\u670d\u52a1\u5668\u4e4b\u95f4, \u6ca1\u6709\u8de8\u57df\u95ee\u9898! \u6240\u4ee5\u53ef\u4ee5\u5229\u7528\u4ee3\u7406\u670d\u52a1\u5668\u8f6c\u53d1\u8bf7\u6c42!"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5f00\u53d1\u73af\u5883\u7684\u8de8\u57df\u95ee\u9898 (\u4f7f\u7528webpack\u4ee3\u7406\u670d\u52a1\u5668\u89e3\u51b3)"),(0,a.kt)("p",{parentName:"li"},"\u914d\u7f6e devServer \u7684 proxy \u914d\u7f6e\u9879"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"module.exports = {\n  devServer: {\n   // \u4ee3\u7406\u914d\u7f6e\n    proxy: {\n        // \u8fd9\u91cc\u7684api \u8868\u793a\u5982\u679c\u6211\u4eec\u7684\u8bf7\u6c42\u5730\u5740\u6709/api\u7684\u65f6\u5019,\u5c31\u51fa\u89e6\u53d1\u4ee3\u7406\u673a\u5236\n        '/api': {\n          target: 'www.baidu.com', // \u6211\u4eec\u8981\u4ee3\u7406\u8bf7\u6c42\u7684\u5730\u5740\n           // \u8def\u5f84\u91cd\u5199\n          pathRewrite: {\n              // \u8def\u5f84\u91cd\u5199  localhost:8888/api/login  => www.baidu.com/api/login\n              '^/api': '' // \u5047\u8bbe\u6211\u4eec\u60f3\u628a localhost:8888/api/login \u53d8\u6210www.baidu.com/login \u5c31\u9700\u8981\u8fd9\u4e48\u505a \n          }\n      },\n    }\n  }\n}\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u751f\u4ea7\u73af\u5883\u7684\u8de8\u57df\u95ee\u9898 (\u4f7f\u7528 nginx \u670d\u52a1\u5668\u4ee3\u7406)"),(0,a.kt)("p",{parentName:"li"},"\u535a\u5ba2\u53c2\u8003: ",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/elfpower/p/8818759.html"},"https://www.cnblogs.com/elfpower/p/8818759.html")," "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://cdn.jsdelivr.net/gh/levanaya/web-img@main/img/20221018012205.png",alt:"image-20221018012205769"})))))}u.isMDXComponent=!0}}]);