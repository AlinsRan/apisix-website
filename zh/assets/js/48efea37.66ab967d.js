"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9297],{35318:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>h});var n=l(27378);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},d=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=o(l),h=a,k=s["".concat(p,".").concat(h)]||s[h]||u[h]||r;return l?n.createElement(k,i(i({ref:t},d),{},{components:l})):n.createElement(k,i({ref:t},d))}));function h(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var o=2;o<r;o++)i[o]=l[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}s.displayName="MDXCreateElement"},79232:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=l(25773),a=(l(27378),l(35318));const r={title:"APISIX \u5728\u79fb\u52a8\u4e91\u516c\u53f8\u7684\u5e94\u7528\u5b9e\u8df5",author:"\u9648\u7131\u5c71",keywords:["Apache APISIX","\u4e2d\u56fd\u79fb\u52a8","\u5bf9\u8c61\u5b58\u50a8","\u4e91\u670d\u52a1","API \u7f51\u5173"],description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u4e91\u662f\u5982\u4f55\u57fa\u4e8e\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fdb\u884c\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u7684\u5f00\u53d1\u548c\u529f\u80fd\u6539\u8fdb\u4e0e\u66f4\u65b0\uff0c\u6253\u9020\u51fa\u66f4\u5b8c\u5584\u7684\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E7%A7%BB%E5%8A%A8%E4%BA%91.png"},i=void 0,c={permalink:"/zh/blog/2021/09/13/china-mobile-cloud-usercase",source:"@site/blog/2021/09/13/china-mobile-cloud-usercase.md",title:"APISIX \u5728\u79fb\u52a8\u4e91\u516c\u53f8\u7684\u5e94\u7528\u5b9e\u8df5",description:"\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u4e91\u662f\u5982\u4f55\u57fa\u4e8e\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fdb\u884c\u5bf9\u8c61\u5b58\u50a8\u4ea7\u54c1\u7684\u5f00\u53d1\u548c\u529f\u80fd\u6539\u8fdb\u4e0e\u66f4\u65b0\uff0c\u6253\u9020\u51fa\u66f4\u5b8c\u5584\u7684\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u3002",date:"2021-09-13T00:00:00.000Z",formattedDate:"2021\u5e749\u670813\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:11.935,truncated:!0,authors:[{name:"\u9648\u7131\u5c71"}],prevItem:{title:"APISIX \u5728\u6709\u8d5e\u4e91\u539f\u751f PaaS \u5e73\u53f0\u7684\u5e94\u7528\u5b9e\u8df5",permalink:"/zh/blog/2021/09/14/youzan"},nextItem:{title:"\u4e0d\u5199\u4ee3\u7801\uff0c\u5982\u4f55\u4e3a\u5f00\u6e90\u9879\u76ee\u505a\u8d21\u732e\uff1f",permalink:"/zh/blog/2021/09/09/how-to-contribute-to-an-openSource-without-coding"}},p={authorsImageUrls:[void 0]},o=[{value:"\u80cc\u666f\u8bf4\u660e",id:"\u80cc\u666f\u8bf4\u660e",children:[],level:2},{value:"\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u7f51\u5173",id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-apache-apisix-\u4f5c\u4e3a\u7f51\u5173",children:[{value:"\u4e3a\u4ec0\u4e48\u629b\u5f03 Nginx",id:"\u4e3a\u4ec0\u4e48\u629b\u5f03-nginx",children:[{value:"\u7406\u7531\u4e00\uff1a\u7efc\u5408\u80fd\u529b\u6b20\u7f3a",id:"\u7406\u7531\u4e00\u7efc\u5408\u80fd\u529b\u6b20\u7f3a",children:[],level:4},{value:"\u7406\u7531\u4e8c\uff1a\u914d\u7f6e\u4e0d\u7075\u6d3b",id:"\u7406\u7531\u4e8c\u914d\u7f6e\u4e0d\u7075\u6d3b",children:[],level:4}],level:3},{value:"\u5728\u6280\u672f\u9009\u578b\u65f6\uff0c\u4e3a\u4ec0\u4e48\u6211\u4eec\u6700\u7ec8\u9009\u62e9 Apache APISIX",id:"\u5728\u6280\u672f\u9009\u578b\u65f6\u4e3a\u4ec0\u4e48\u6211\u4eec\u6700\u7ec8\u9009\u62e9-apache-apisix",children:[{value:"\u7406\u7531\u4e00\uff1a\u57fa\u4e8e\u4ea7\u54c1\u67b6\u6784\u7684\u9700\u8981",id:"\u7406\u7531\u4e00\u57fa\u4e8e\u4ea7\u54c1\u67b6\u6784\u7684\u9700\u8981",children:[],level:4},{value:"\u7406\u7531\u4e8c\uff1a\u7ec6\u7c92\u5ea6\u4e1a\u52a1\u529f\u80fd\u7684\u5b9e\u73b0",id:"\u7406\u7531\u4e8c\u7ec6\u7c92\u5ea6\u4e1a\u52a1\u529f\u80fd\u7684\u5b9e\u73b0",children:[],level:4},{value:"\u7406\u7531\u4e09\uff1aSLA \u670d\u52a1\u7b49\u7ea7\u4fdd\u969c",id:"\u7406\u7531\u4e09sla-\u670d\u52a1\u7b49\u7ea7\u4fdd\u969c",children:[],level:4}],level:3}],level:2},{value:"\u5728 Apache APISIX \u7684\u6570\u636e\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48",id:"\u5728-apache-apisix-\u7684\u6570\u636e\u9762\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48",children:[{value:"\u6539\u8fdb\u4e00\uff1a\u5185\u5916\u7f51\u8bf7\u6c42\u5206\u79bb\u8bbf\u95ee",id:"\u6539\u8fdb\u4e00\u5185\u5916\u7f51\u8bf7\u6c42\u5206\u79bb\u8bbf\u95ee",children:[],level:3},{value:"\u6539\u8fdb\u4e8c\uff1a\u8bf7\u6c42\u7194\u65ad\u4fdd\u62a4",id:"\u6539\u8fdb\u4e8c\u8bf7\u6c42\u7194\u65ad\u4fdd\u62a4",children:[],level:3},{value:"\u6539\u8fdb\u4e09\uff1a\u81ea\u5b9a\u4e49 constant key \u5b9e\u73b0\u5168\u5c40\u9650\u6d41",id:"\u6539\u8fdb\u4e09\u81ea\u5b9a\u4e49-constant-key-\u5b9e\u73b0\u5168\u5c40\u9650\u6d41",children:[],level:3},{value:"\u6539\u8fdb\u56db\uff1a\u65b0\u589e\u529f\u80fd\u7279\u6027\u5f00\u5173",id:"\u6539\u8fdb\u56db\u65b0\u589e\u529f\u80fd\u7279\u6027\u5f00\u5173",children:[{value:"\u5f00\u5173 1\uff1a\u4e34\u65f6\u5173\u95ed\u67d0\u4e2a\u5bf9\u8c61\u5b58\u50a8\u529f\u80fd",id:"\u5f00\u5173-1\u4e34\u65f6\u5173\u95ed\u67d0\u4e2a\u5bf9\u8c61\u5b58\u50a8\u529f\u80fd",children:[],level:4},{value:"\u5f00\u5173 2\uff1a\u652f\u6301 GET \u8bf7\u6c42\u4f18\u5148\u7ea7\u6700\u9ad8",id:"\u5f00\u5173-2\u652f\u6301-get-\u8bf7\u6c42\u4f18\u5148\u7ea7\u6700\u9ad8",children:[],level:4},{value:"\u5f00\u5173 3\uff1a\u5bf9 Ordered List \u8bf7\u6c42\u8fd4\u56de 501 Not Implemented",id:"\u5f00\u5173-3\u5bf9-ordered-list-\u8bf7\u6c42\u8fd4\u56de-501-not-implemented",children:[],level:4}],level:3},{value:"\u6539\u8fdb\u4e94\uff1a\u5b9e\u73b0\u900f\u660e\u5347\u7ea7/\u6269\u5bb9/\u914d\u7f6e\u53d8\u66f4",id:"\u6539\u8fdb\u4e94\u5b9e\u73b0\u900f\u660e\u5347\u7ea7\u6269\u5bb9\u914d\u7f6e\u53d8\u66f4",children:[],level:3},{value:"\u6539\u8fdb\u516d\uff1a\u57fa\u4e8e request-id \u5b9e\u73b0\u8bf7\u6c42\u65e5\u5fd7\u8ddf\u8e2a\u5206\u6790",id:"\u6539\u8fdb\u516d\u57fa\u4e8e-request-id-\u5b9e\u73b0\u8bf7\u6c42\u65e5\u5fd7\u8ddf\u8e2a\u5206\u6790",children:[],level:3},{value:"\u6539\u8fdb\u4e03\uff1a\u8de8 AZ \u8bf7\u6c42\u8c03\u5ea6\u529f\u80fd",id:"\u6539\u8fdb\u4e03\u8de8-az-\u8bf7\u6c42\u8c03\u5ea6\u529f\u80fd",children:[],level:3}],level:2},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[],level:2}],d={toc:o};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u6574\u7406\u81ea\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u9648\u7131\u5c71\u5728 ApacheCon 2021 \u4e9a\u6d32\u7ad9\u7684\u6f14\u8bb2\uff0c\u901a\u8fc7\u9605\u8bfb\u672c\u6587\uff0c\u60a8\u53ef\u4ee5\u4e86\u89e3\u5230\u4e2d\u56fd\u79fb\u52a8\u4e91\u662f\u5982\u4f55\u57fa\u4e8e Apache APISIX \u8fdb\u884c\u4ea7\u54c1\u7684\u5f00\u53d1\u548c\u529f\u80fd\u6539\u8fdb\u4e0e\u66f4\u65b0\uff0c\u6253\u9020\u51fa\u66f4\u5b8c\u5584\u7684\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u3002")),(0,a.kt)("p",null,"\u4f5c\u8005\u9648\u7131\u5c71\uff0c\u6765\u81ea\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u3002\u4ece\u4e8b\u5206\u5e03\u5f0f\u5b58\u50a8\u8f6f\u4ef6\u5f00\u53d1\u53ca\u67b6\u6784\u65b9\u6848\u8bbe\u8ba1\u5de5\u4f5c\uff0c\u6df1\u5ea6\u53c2\u4e0e\u79fb\u52a8\u4e91\u7684\u5efa\u8bbe\uff0c\u5728\u5206\u5e03\u5f0f\u5bf9\u8c61\u5b58\u50a8\u9886\u57df\u6709\u4e30\u5bcc\u7684\u5b9e\u6218\u7ecf\u9a8c\u3002"),(0,a.kt)("h2",{id:"\u80cc\u666f\u8bf4\u660e"},"\u80cc\u666f\u8bf4\u660e"),(0,a.kt)("p",null,"\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u4f5c\u4e3a\u4e2d\u56fd\u79fb\u52a8\u4e91\u8bbe\u65bd\u6784\u5efa\u8005\u3001\u4e91\u670d\u52a1\u63d0\u4f9b\u8005\u4ee5\u53ca\u4e91\u751f\u6001\u6c47\u805a\u8005\uff0c\u627f\u62c5\u4e86\u79fb\u52a8\u4e91\u7684\u6280\u672f\u7814\u53d1\u3001\u89c4\u5212\u5efa\u8bbe\u3001\u8fd0\u8425\u7ef4\u62a4\u3001\u5408\u4f5c\u5f15\u5165\u3001\u9500\u552e\u652f\u6491\u3001\u652f\u6301\u4e0a\u4e91\u516d\u5927\u5de5\u4f5c\u804c\u8d23\u3002"),(0,a.kt)("p",null,"\u622a\u81f3 2020 \u5e74 10 \u6708\uff0c\u5168\u56fd\u5171\u8ba1\u5efa\u6210 25 \u4e2a\u516c\u6709\u4e91\u8282\u70b9\uff0c\u7701\u4efd\u8986\u76d6\u7387\u8d85\u8fc7 80%\u3002\u5176\u4e2d\u5bf9\u8c61\u5b58\u50a8 EOS \u4f5c\u4e3a\u5e95\u5c42\u57fa\u7840\u8bbe\u65bd\u80fd\u529b\u4e4b\u4e00\uff0c\u5df2\u5728\u6240\u6709\u8d44\u6e90\u6c60\u4e2d\u8fdb\u884c\u4e86\u90e8\u7f72\u5efa\u8bbe\uff0c\u6574\u4f53\u53ef\u7528\u89c4\u6a21\u8fbe\u5230 EB \u7ea7\u3002"),(0,a.kt)("p",null,"\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u81f3\u4eca\u5df2\u7ecf\u5386\u4e86\u56db\u4ee3\u53d1\u5c55\u5386\u7a0b\u53d8\u8fc1\u3002\u4ece\u81ea\u7814\u5f00\u53d1\u8d77\u624b\uff0c\u901a\u8fc7\u529f\u80fd\u6269\u5c55\u3001\u6df1\u5ea6\u5b9a\u5236\u3001\u6027\u80fd\u63d0\u5347\u5230\u6700\u65b0\u4e00\u4ee3\u62e5\u6709\u8de8\u533a\u57df\u5168\u5c40\u7ea0\u5220\u67b6\u6784\uff0c\u5b9e\u73b0\u4e86\u5f02\u5730\u591a\u6d3b\u5bb9\u707e\u6548\u679c\u3002\u7eb5\u89c2\u4e0b\u6765\uff0c\u53ef\u8c13\u662f\u8fdb\u6b65\u98de\u901f\u3002"),(0,a.kt)("p",null,"\u5728\u4e91\u5bf9\u8c61\u5b58\u50a8\u6280\u672f\u9009\u578b\u521d\u671f\uff0c\u6211\u4eec\u8c03\u7814\u8fc7\u5f88\u591a\u7684 API \u7f51\u5173\uff0c\u5305\u62ec Nginx\u3001Apache APISIX \u7b49\uff0c\u6700\u7ec8\u8fd8\u662f\u9009\u62e9\u4e86 Apache APISIX\u3002Apache APISIX \u4e0d\u4ec5\u80fd\u591f\u6ee1\u8db3\u5f53\u524d\u7684\u4e1a\u52a1\u8981\u6c42\uff0c\u540c\u65f6\u8fd8\u80fd\u5728\u7cfb\u7edf\u53ef\u7528\u6027\u3001\u53ef\u7ef4\u62a4\u6027\u4e0a\u4e3a\u6211\u4eec\u4ea7\u54c1\u63d0\u4f9b\u6bd4\u8f83\u591a\u7684\u601d\u8def\u548c\u9009\u62e9\uff0c\u4e0e\u540e\u7eed\u6574\u4f53\u4ea7\u54c1\u6f14\u8fdb\u89c4\u5212\u548c\u6280\u672f\u6808\u6bd4\u8f83\u543b\u5408\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u9009\u62e9-apache-apisix-\u4f5c\u4e3a\u7f51\u5173"},"\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u7f51\u5173"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u629b\u5f03-nginx"},"\u4e3a\u4ec0\u4e48\u629b\u5f03 Nginx"),(0,a.kt)("h4",{id:"\u7406\u7531\u4e00\u7efc\u5408\u80fd\u529b\u6b20\u7f3a"},"\u7406\u7531\u4e00\uff1a\u7efc\u5408\u80fd\u529b\u6b20\u7f3a"),(0,a.kt)("p",null,"Apache APISIX \u4f5c\u4e3a\u4e00\u4e2a\u5fae\u670d\u52a1\u7f51\u5173\uff0c\u4e0e\u5176\u4ed6 API \u7f51\u5173\u76f8\u6bd4\uff0c\u5b83\u7684\u4e0a\u6e38\u8def\u7531\u63d2\u4ef6\u662f\u5168\u52a8\u6001\u7684\uff0c\u4fee\u6539\u914d\u7f6e\u4e0d\u9700\u8981\u91cd\u542f\u3002\u540c\u65f6\u63d2\u4ef6\u652f\u6301\u70ed\u52a0\u8f7d\uff0c\u53ef\u4ee5\u968f\u65f6\u63d2\u62d4\u3001\u4fee\u6539\u63d2\u4ef6\u3002\u5c24\u5176\u662f\u4e1a\u52a1\u8fde\u7eed\u6027\u8981\u6c42\u975e\u5e38\u9ad8\u7684\u573a\u666f\uff0c\u8fd9\u4e9b\u80fd\u529b\u90fd\u662f Nginx \u4e0d\u5177\u5907\u7684\u3002"),(0,a.kt)("h4",{id:"\u7406\u7531\u4e8c\u914d\u7f6e\u4e0d\u7075\u6d3b"},"\u7406\u7531\u4e8c\uff1a\u914d\u7f6e\u4e0d\u7075\u6d3b"),(0,a.kt)("p",null,"\u4f17\u6240\u5468\u77e5\uff0c\u50cf Nginx \u6240\u6709\u7684\u529f\u80fd\u90fd\u662f\u57fa\u4e8e\u914d\u7f6e\u6587\u4ef6\u6765\u5b9e\u73b0\u7684\uff0c\u56e0\u800c\u50cf Proxy \u5b58\u5728\u8def\u7531\u4e0a\u6e38\u7684\u8bc1\u4e66\u4e0d\u80fd\u52a8\u6001\u52a0\u8f7d\u3002Apache APISIX \u652f\u6301\u5168\u5e73\u53f0\u3001\u591a\u534f\u8bae\u3001\u5168\u52a8\u6001\u3001\u7cbe\u7ec6\u5316\u8def\u7531\u3001\u5b89\u5168\u9632\u62a4\uff0c\u800c\u4e14\u8fd0\u7ef4\u53cb\u597d\uff0c\u53ef\u4ee5\u5bf9\u63a5 Prometheus\u3001SkyWalking \u7b49\uff0c\u6709\u9ad8\u5ea6\u6269\u5c55\u80fd\u529b\uff0c\u8fd9\u4e9b\u90fd\u662f\u5b9e\u9645\u751f\u4ea7\u4e2d\u9700\u8981\u7684\u80fd\u529b\u3002"),(0,a.kt)("h3",{id:"\u5728\u6280\u672f\u9009\u578b\u65f6\u4e3a\u4ec0\u4e48\u6211\u4eec\u6700\u7ec8\u9009\u62e9-apache-apisix"},"\u5728\u6280\u672f\u9009\u578b\u65f6\uff0c\u4e3a\u4ec0\u4e48\u6211\u4eec\u6700\u7ec8\u9009\u62e9 Apache APISIX"),(0,a.kt)("h4",{id:"\u7406\u7531\u4e00\u57fa\u4e8e\u4ea7\u54c1\u67b6\u6784\u7684\u9700\u8981"},"\u7406\u7531\u4e00\uff1a\u57fa\u4e8e\u4ea7\u54c1\u67b6\u6784\u7684\u9700\u8981"),(0,a.kt)("p",null,"\u524d\u8fb9\u63d0\u5230\u8fc7\u76ee\u524d\u5bf9\u8c61\u5b58\u50a8\u5df2\u7ecf\u7ecf\u5386\u4e86\u56db\u4ee3\u53d1\u5c55\u5386\u7a0b\u3002\u968f\u7740\u4ea7\u54c1\u529f\u80fd\u7684\u4e30\u5bcc\u3001\u6574\u4e2a\u67b6\u6784\u96c6\u7fa4\u89c4\u6a21\u53d8\u5927\uff0c\u5c31\u9700\u8981\u6709\u66f4\u591a\u63a7\u5236\u9762\u7b56\u7565\uff0c\u5305\u62ec\u6d41\u91cf\u6cbb\u7406\u3001\u670d\u52a1\u6cbb\u7406\u7b49\u7b56\u7565\u6765\u4fdd\u8bc1\u6574\u4e2a\u7cfb\u7edf\u7684\u7a33\u5b9a\u8fd0\u884c\u3002"),(0,a.kt)("h4",{id:"\u7406\u7531\u4e8c\u7ec6\u7c92\u5ea6\u4e1a\u52a1\u529f\u80fd\u7684\u5b9e\u73b0"},"\u7406\u7531\u4e8c\uff1a\u7ec6\u7c92\u5ea6\u4e1a\u52a1\u529f\u80fd\u7684\u5b9e\u73b0"),(0,a.kt)("p",null,"Apache APISIX \u7684\u7279\u6027\u3001\u529f\u80fd\u63d2\u4ef6\u3001\u81ea\u5b9a\u4e49\u5f00\u53d1\u529f\u80fd\uff0c\u90fd\u53ef\u4ee5\u5728\u540e\u7eed\u7684\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u6ee1\u8db3\u6211\u4eec\u7684\u4e1a\u52a1\u9700\u6c42\u3002"),(0,a.kt)("h4",{id:"\u7406\u7531\u4e09sla-\u670d\u52a1\u7b49\u7ea7\u4fdd\u969c"},"\u7406\u7531\u4e09\uff1aSLA \u670d\u52a1\u7b49\u7ea7\u4fdd\u969c"),(0,a.kt)("p",null,"\u4e00\u822c SLA \u670d\u52a1\u7b49\u7ea7\u7684\u53ef\u7528\u6027\u5f3a\u8c03\u4e24\u4e2a\u6307\u6807\uff1a\u7cfb\u7edf\u5e73\u5747\u65e0\u6545\u969c\u65f6\u95f4\u548c\u7cfb\u7edf\u5e73\u5747\u6545\u969c\u4fee\u590d\u65f6\u95f4\u3002\u5982\u4f55\u6709\u6548\u62c9\u957f\u7cfb\u7edf\u5e73\u5747\u65e0\u6545\u969c\u65f6\u95f4\uff1f\u5982\u4f55\u6709\u6548\u7f29\u5c0f\u7cfb\u7edf\u5e73\u5747\u6545\u969c\u4fee\u590d\u65f6\u95f4\uff1f\u8fd9\u4e24\u4e2a\u95ee\u9898\u662f\u6211\u4eec\u91cd\u70b9\u8003\u8651\u7684\u3002\u800c Apache APISIX \u5728\u6545\u969c\u9694\u79bb\u548c\u81ea\u6108\u65b9\u9762\u90fd\u6709\u7740\u4e0d\u9519\u7684\u6d41\u91cf\u6cbb\u7406\u548c\u670d\u52a1\u6cbb\u7406\u76f8\u5173\u80fd\u529b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631500451210-60ba58d6-1fc4-4db6-b658-5e0066bb1c9b.png",alt:"SLA \u670d\u52a1\u7b49\u7ea7"})),(0,a.kt)("h2",{id:"\u5728-apache-apisix-\u7684\u6570\u636e\u9762\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48"},"\u5728 Apache APISIX \u7684\u6570\u636e\u9762\uff0c\u6211\u4eec\u6539\u4e86\u4e9b\u4ec0\u4e48"),(0,a.kt)("h3",{id:"\u6539\u8fdb\u4e00\u5185\u5916\u7f51\u8bf7\u6c42\u5206\u79bb\u8bbf\u95ee"},"\u6539\u8fdb\u4e00\uff1a\u5185\u5916\u7f51\u8bf7\u6c42\u5206\u79bb\u8bbf\u95ee"),(0,a.kt)("p",null,"\u76ee\u524d\u6211\u4eec\u7684\u4e1a\u52a1\u6a21\u578b\u6709\u4e24\u4e2a\u57df\u540d\uff0c\u5185\u7f51\u57df\u540d\u548c\u5916\u7f51\u57df\u540d\u3002\u5185\u7f51\u57df\u540d\u7684\u8bbf\u95ee\u662f\u8d44\u6e90\u6c60\u4e1c\u897f\u5411\u7684\u8bbf\u95ee\uff0c\u5982\u8d44\u6e90\u6c60\u5185\u90e8\u865a\u62df\u673a\u3001\u5e94\u7528\u5e73\u53f0\u7c7b\u7684\u4ea7\u54c1\u7b49\u3002\u5916\u7f51\u57df\u540d\uff0c\u76f8\u5f53\u4e8e\u662f\u7eaf\u516c\u7f51\u7684\u8bbf\u95ee\uff0c\u6bd4\u5982\uff1a\u516c\u7f51\u7684\u516c\u6709\u4e91\u3001toC \u548c toB \u7684\u5ba2\u6237\uff0c\u901a\u8fc7 satellite \u6216\u8005\u7269\u7406\u4e13\u7ebf\u8bbf\u95ee\u5bf9\u8c61\u5b58\u50a8\u3002\n\u6211\u4eec\u901a\u8fc7\u63a5\u5165 Apache APISIX \u5b9e\u73b0\u4e86\u5185\u5916\u7f51\u57df\u540d\u7684\u591a\u57df\u540d\u8bc1\u4e66\u914d\u7f6e\uff0c\u5e76\u63d0\u4f9b\u4e86\u52a0\u5bc6\u8bbf\u95ee\u529f\u80fd\uff0c\u540c\u65f6\u5b9e\u73b0\u4e86 SSL \u8bc1\u4e66\u52a8\u6001\u52a0\u8f7d\u7684\u529f\u80fd\u5b9e\u73b0\u3002\u5bf9\u4e8e 24 \u5c0f\u65f6\u4e0d\u95f4\u65ad\u7684\u4e1a\u52a1\uff0c\u80fd\u591f\u52a8\u6001\u66f4\u65b0 SSL \u8bc1\u4e66\u662f\u975e\u5e38\u91cd\u8981\u7684\u3002"),(0,a.kt)("h3",{id:"\u6539\u8fdb\u4e8c\u8bf7\u6c42\u7194\u65ad\u4fdd\u62a4"},"\u6539\u8fdb\u4e8c\uff1a\u8bf7\u6c42\u7194\u65ad\u4fdd\u62a4"),(0,a.kt)("p",null,"\u5728\u8fd9\u91cc\u9996\u5148\u7ed9\u5927\u5bb6\u7b80\u5355\u63cf\u8ff0\u4e00\u4e0b\u76ee\u524d\u63a5\u5165 Apache APISIX \u540e\u7684\u5bf9\u8c61\u5b58\u50a8 EOS \u8282\u70b9\u7ba1\u7406\u3002\u6574\u4e2a\u5bf9\u8c61\u5b58\u50a8\u5206\u4e3a\u6570\u636e\u5e73\u9762\u548c\u63a7\u5236\u5e73\u9762\u3002\u6570\u636e\u5e73\u9762\u4e3b\u8981\u627f\u8f7d\u6574\u4e2a\u4e1a\u52a1\u7684 I/O \u6d41\u3002\u4e1a\u52a1\u6570\u636e\u662f\u4ece Apache APISIX \u7684 7 \u5c42\u6d41\u91cf\u6cbb\u7406\u6a21\u5757\u4f5c\u4e3a\u5165\u53e3\uff0c\u901a\u8fc7 APISIX \u540e\u7aef\u4e0a\u6e38\u7684 Accesser\uff0c\u5b9e\u73b0\u4e1a\u52a1\u63a5\u53e3\u5904\u7406\u7684\u4e3b\u8981\u6a21\u5757\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631500499020-4297de78-f9e3-45a5-8f57-2a55280bf7b0.png",alt:"\u7194\u65ad\u4fdd\u62a4"})),(0,a.kt)("p",null,"\u63a7\u5236\u5e73\u9762\u4e3b\u8981\u6709\u51e0\u5927\u670d\u52a1\uff0c\u5305\u62ec\u81ea\u52a8\u9a7e\u9a76\u670d\u52a1 Manager\u3001\u53ef\u89c2\u6d4b\u7cfb\u7edf Observer \u548c\u6df7\u6c8c\u5de5\u7a0b\u6545\u969c\u6ce8\u5165\u6a21\u5757 Checker\u3002\u8fd8\u6709\u989d\u5916\u7684\u6574\u4f53\u4ea4\u4e92\u7f16\u6392\u7cfb\u7edf Orchestrator \u548c\u7070\u5ea6\u53d1\u5e03\u5e73\u53f0 Publisher\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631500520579-1e40b538-377b-4356-b0f2-1038c0a798e4.png",alt:"\u63a7\u5236\u5e73\u9762\u670d\u52a1"})),(0,a.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u8bf7\u6c42\u7194\u65ad\u4fdd\u62a4\uff0c\u6570\u636e\u9762\u5728\u63a5\u5165 Apache APISIX \u540e\u5c31\u5b9e\u73b0\u4e86\u8bf7\u6c42\u4ecb\u5165\u7684\u5904\u7406\u80fd\u529b\u3002\u800c\u63a7\u5236\u9762\u7aef\u7684\u53ef\u89c2\u6d4b\u7cfb\u7edf\u4e3b\u8981\u662f\u57fa\u4e8e Prometheus \u642d\u5efa\u7684\uff0c\u8fdb\u884c\u6307\u6807\u6536\u96c6\u4e0e\u544a\u8b66\uff0c\u6700\u7ec8\u5b9e\u73b0\u540e\u7aef\u6574\u4f53\u7684\u7194\u65ad\u4fdd\u62a4\u3002"),(0,a.kt)("h3",{id:"\u6539\u8fdb\u4e09\u81ea\u5b9a\u4e49-constant-key-\u5b9e\u73b0\u5168\u5c40\u9650\u6d41"},"\u6539\u8fdb\u4e09\uff1a\u81ea\u5b9a\u4e49 constant key \u5b9e\u73b0\u5168\u5c40\u9650\u6d41"),(0,a.kt)("p",null,"limit-conn key \u8fd9\u4e2a\u63d2\u4ef6\u4e3b\u8981\u662f\u652f\u6301 remote_addr\u3001server_addr\u3001X-Forwarded-For\u3001X-Real-IP \uff0c\u4f46\u4e0d\u80fd\u5bf9\u5357\u5317\u5411\u7f51\u5173\u7684\u6d41\u91cf\u505a\u5168\u5c40\u9650\u6d41\u3002"),(0,a.kt)("p",null,"\u4e3a\u4e86\u5339\u914d\u6211\u4eec\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e00\u4e2a constant \u5e38\u91cf\u4f5c\u4e3a limit-conn key \u8303\u56f4\uff0c\u4e0a\u56fe\u53f3\u4fa7\u5373\u662f\u63a5\u5165 Apache APISIX \u540e\u4fee\u6539\u8fc7\u7684\u914d\u7f6e\uff0c\u901a\u8fc7 constant \u5e38\u91cf key \u5b9e\u73b0\u5168\u5c40\u9650\u6d41\u7684\u529f\u80fd\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631500546238-9fd5ebcf-d205-4d99-a34d-236d5589a7e6.png",alt:"\u5168\u5c40\u9650\u6d41"})),(0,a.kt)("h3",{id:"\u6539\u8fdb\u56db\u65b0\u589e\u529f\u80fd\u7279\u6027\u5f00\u5173"},"\u6539\u8fdb\u56db\uff1a\u65b0\u589e\u529f\u80fd\u7279\u6027\u5f00\u5173"),(0,a.kt)("h4",{id:"\u5f00\u5173-1\u4e34\u65f6\u5173\u95ed\u67d0\u4e2a\u5bf9\u8c61\u5b58\u50a8\u529f\u80fd"},"\u5f00\u5173 1\uff1a\u4e34\u65f6\u5173\u95ed\u67d0\u4e2a\u5bf9\u8c61\u5b58\u50a8\u529f\u80fd"),(0,a.kt)("p",null,"\u5728\u7f51\u5173\u5c42\u901a\u8fc7\u63a5\u5165 Apache APISIX\uff0c\u517c\u5bb9\u4e86 S3 \u63a5\u53e3\u89c4\u8303\uff0c\u907f\u514d\u5bf9\u540e\u7aef\u670d\u52a1\u7684\u63a5\u5165\u5c42\u3001\u6301\u4e45\u5316\u5c42\u7684\u8d44\u6e90\u6d6a\u8d39\u3002"),(0,a.kt)("h4",{id:"\u5f00\u5173-2\u652f\u6301-get-\u8bf7\u6c42\u4f18\u5148\u7ea7\u6700\u9ad8"},"\u5f00\u5173 2\uff1a\u652f\u6301 GET \u8bf7\u6c42\u4f18\u5148\u7ea7\u6700\u9ad8"),(0,a.kt)("p",null,"\u5b9e\u73b0\u4e86\u5728\u652f\u6301 GET \u8bf7\u6c42\u4f18\u5148\u7684\u60c5\u51b5\u4e0b\uff0c\u5728\u53d6\u56de\u7528\u6237\u6570\u636e\u65f6 GET \u8bf7\u6c42\u4f18\u5148\u7ea7\u6700\u9ad8\uff0c\u9ad8\u4e8e PUT \u3001DELETE \u7b49\u8bf7\u6c42\u3002"),(0,a.kt)("h4",{id:"\u5f00\u5173-3\u5bf9-ordered-list-\u8bf7\u6c42\u8fd4\u56de-501-not-implemented"},"\u5f00\u5173 3\uff1a\u5bf9 Ordered List \u8bf7\u6c42\u8fd4\u56de 501 Not Implemented"),(0,a.kt)("p",null,"\u5728\u5bf9\u8c61\u5b58\u50a8\u4e2d\u4e00\u822c\u4f1a\u6709\u5bf9\u6876\u7684 Ordered List \u7684\u529f\u80fd\u9700\u6c42\u3002\u7b2c\u4e09\u3001\u56db\u4ee3\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u9762\u5411\u7684\u90fd\u662f\u767e\u4ebf\u6587\u4ef6\u5bf9\u8c61\uff0c\u5982\u679c\u4f9d\u65e7\u4f7f\u7528 Ordered List\uff0c\u4e00\u65b9\u9762\u8bf7\u6c42\u8bbf\u95ee\u540e\u7aef\u54cd\u5e94\u7684\u65f6\u95f4\u4f1a\u7279\u522b\u957f\uff0c\u53e6\u4e00\u65b9\u9762\u4f1a\u5360\u7528\u8f83\u591a\u8d44\u6e90\uff0c\u5bf9\u540e\u7aef\u7684\u7a33\u5b9a\u6027\u63d0\u51fa\u8f83\u5927\u7684\u6311\u6218\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u63a5\u5165 Apache APISIX \u540e\u5c06\u76f4\u63a5\u5728\u7f51\u5173\u5c42\u9762\u8fdb\u884c\u62d2\u7edd\u8bf7\u6c42\uff0c\u5e76\u8fd4\u56de 501 Not Implemented \u7684\u72b6\u6001\u7801\u3002"),(0,a.kt)("h3",{id:"\u6539\u8fdb\u4e94\u5b9e\u73b0\u900f\u660e\u5347\u7ea7\u6269\u5bb9\u914d\u7f6e\u53d8\u66f4"},"\u6539\u8fdb\u4e94\uff1a\u5b9e\u73b0\u900f\u660e\u5347\u7ea7/\u6269\u5bb9/\u914d\u7f6e\u53d8\u66f4"),(0,a.kt)("p",null,"\u7ed3\u5408 Apache APISIX 7 \u5c42\u6cbb\u7406\u80fd\u529b\uff0c\u6211\u4eec\u5bf9\u4e0a\u6e38\u7ec4\u4ef6\u548c\u6574\u4e2a I/O \u8def\u5f84\u4e0a\u5173\u952e\u7ec4\u4ef6\u8fdb\u884c\u4e86\u5347\u7ea7\u3001\u6269\u5bb9\u548c\u914d\u7f6e\u53d8\u66f4\uff0c\u901a\u8fc7\u52a8\u6001\u6269\u5bb9\u3001\u52a8\u6001\u5347\u7ea7\u7b49\u64cd\u4f5c\u6765\u63a7\u5236\u540e\u7aef\u6743\u91cd\uff0c\u8fdb\u884c\u540e\u7eed\u8bf7\u6c42\u5904\u7406\u3002"),(0,a.kt)("h3",{id:"\u6539\u8fdb\u516d\u57fa\u4e8e-request-id-\u5b9e\u73b0\u8bf7\u6c42\u65e5\u5fd7\u8ddf\u8e2a\u5206\u6790"},"\u6539\u8fdb\u516d\uff1a\u57fa\u4e8e request-id \u5b9e\u73b0\u8bf7\u6c42\u65e5\u5fd7\u8ddf\u8e2a\u5206\u6790"),(0,a.kt)("p",null,"\u57fa\u4e8e access.log \u5b9e\u73b0\u4e86\u65e5\u5fd7\u96c6\u4e2d\u6536\u96c6\u7684\u7ba1\u7406\u65b9\u5f0f\uff0c\u628a APISIX \u7684 log \u548c\u5176\u4ed6\u8fdb\u7a0b\u7684 log \u90fd\u6536\u96c6\u8d77\u6765\uff0c\u7136\u540e\u8fdb\u884c\u7efc\u5408\u7684\u5206\u6790\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631500588620-9200d098-b4ac-4b9d-99f4-509f9fada70f.png",alt:"\u65e5\u5fd7\u8ddf\u8e2a"})),(0,a.kt)("p",null,"\u4e0a\u56fe\u53f3\u4fa7\u7684\u914d\u7f6e\u9879\u662f\u4f7f\u7528\u4e86 Apache APISIX \u7684 request-id \u63d2\u4ef6\u3002\u6bcf\u4e2a\u8bf7\u6c42\u5728\u7ecf\u8fc7 APISIX \u65f6\u90fd\u4f1a\u88ab\u5206\u914d\u4e00\u4e2a request-id\uff0c\u88ab\u7528\u4e8e\u4e1a\u52a1\u903b\u8f91\u5904\u7406\u5c42\uff08Accesser\uff09\u548c\u6570\u636e\u6301\u4e45\u5316\u5c42\uff0c\u8fdb\u800c\u5728 Loki \u5b98\u65b9\u9762\u677f\u4e0a\u8fc7\u6ee4\u51fa\u4e0d\u540c\u7ec4\u4ef6\u7684\u65e5\u5fd7\u65f6\u95f4\u6233\uff0c\u6709\u52a9\u4e8e\u540e\u7eed\u4f7f\u7528 AI \u5b9e\u73b0\u4e00\u4e9b\u81ea\u52a8\u5316\u7684\u5206\u6790\u3002"),(0,a.kt)("h3",{id:"\u6539\u8fdb\u4e03\u8de8-az-\u8bf7\u6c42\u8c03\u5ea6\u529f\u80fd"},"\u6539\u8fdb\u4e03\uff1a\u8de8 AZ \u8bf7\u6c42\u8c03\u5ea6\u529f\u80fd"),(0,a.kt)("p",null,"\u76ee\u524d\u8d1f\u8f7d\u5747\u8861\u7684\u540e\u7aef\u662f\u57fa\u4e8e APISIX \u5b9e\u73b0\u7684\u4e03\u5c42\u6d41\u91cf\u6cbb\u7406\u5c42\uff0c\u901a\u8fc7\u7b49 ECMP + BGP \u8def\u7531\u5b9e\u73b0\u591a\u6d3b\u7684\u80fd\u529b\u3002\u6211\u4eec\u5b9a\u4e49\u4e86\u4e09\u79cd\u6d41\u91cf\u7c7b\u578b\uff0c\u6bcf\u4e2a APISIX \u8282\u70b9\u6536\u5230\u4e1a\u52a1\u6d41\u91cf\u65f6\u53ea\u6253\u5230\u672c\u8282\u70b9\u7684\u4e0a\u6e38\u670d\u52a1\u53bb\u5904\u7406\uff08level0\uff0c\u7d2b\u7ebf\uff09\uff0c\u7c7b\u4f3c SideCar \u6a21\u5f0f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1631500626933-473fdd62-dcee-42cc-93c2-93d83acd796c.png",alt:"AZ \u8c03\u5ea6"})),(0,a.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u8282\u70b9\u7684\u4e0a\u6e38\u51fa\u73b0\u95ee\u9898\uff0c\u5c31\u4f1a\u88ab\u8f6c\u53d1\u5230\u540c AZ \u7684\u5176\u4ed6\u4e0a\u6e38\u8282\u70b9\u8fdb\u884c\u5904\u7406\uff08\u7eff\u7ebf\uff09\u3002\u5982\u679c\u6240\u6709\u4e0a\u6e38\u8282\u70b9\u5168\u90e8\u6302\u6389\uff0c\u5219\u4f1a\u57fa\u4e8e Apache APISIX \u5b9e\u73b0\u8bf7\u6c42\u8de8 AZ \u7684\u8c03\u7528\u80fd\u529b\uff08level2\uff0c\u7ea2\u7ebf\uff09\uff0c\u628a\u8bf7\u6c42\u5199\u5165\u5230\u5176\u4ed6 AZ \u4e2d\uff0c\u6700\u7ec8\u5b9e\u73b0\u8de8 AZ \u7684\u8bf7\u6c42\u8c03\u5ea6\u3002"),(0,a.kt)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),(0,a.kt)("p",null,"\u672a\u6765\u79fb\u52a8\u4e91\u5bf9\u8c61\u5b58\u50a8\u5c06\u4f1a\u5168\u9762\u62e5\u62b1\u4e91\u539f\u751f\uff0c\u5e76\u9010\u6b65\u5b9e\u73b0\u4ee5\u4e0b\u8ba1\u5212\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6574\u5408\u6570\u636e\u9762\u529f\u80fd\uff0c\u6700\u7ec8\u5b9e\u73b0\u5168\u9762\u7684\u5bb9\u5668\u5316\u90e8\u7f72\u7f16\u6392"),(0,a.kt)("li",{parentName:"ol"},"\u9646\u7eed\u63a5\u5165\u57fa\u4e8e APISIX \u7684 Ingress Controller\uff0c\u901a\u8fc7 APISIX \u6765\u7edf\u4e00\u8bbf\u95ee\u5165\u53e3"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5f3a\u4e0e\u81ea\u52a8\u9a7e\u9a76 Manager\u3001\u53ef\u89c2\u6d4b\u6027\u7cfb\u7edf Observer \u5b50\u7cfb\u7edf\u7684\u878d\u5408\u80fd\u529b\uff0c\u8fdb\u4e00\u6b65\u5b9e\u73b0\u6545\u969c\u7684\u9694\u79bb\u4e0e\u81ea\u6108"),(0,a.kt)("li",{parentName:"ol"},"\u5c06\u5bf9\u8c61\u5b58\u50a8 S3 \u65b9\u9762\u7684\u8ba4\u8bc1\u80fd\u529b\u79fb\u5165\u5230\u63a5\u53e3\u5c42\u3002\u66f4\u597d\u5730\u5b9e\u73b0\u7edf\u4e00\u9274\u6743\u8ba4\u8bc1\u4ee5\u53ca\u5b89\u5168\u8bbf\u95ee\uff0c\u8fbe\u5230\u4fdd\u62a4\u540e\u7aef\u7684\u6548\u679c")))}u.isMDXComponent=!0}}]);