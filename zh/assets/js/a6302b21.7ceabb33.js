"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5345],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u8bd1\u6587 | A poor man's API",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://github.com/nfrankel.png"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["APISIX","API","REST API","\u5f00\u6e90","PostgREST"],description:"\u672c\u6587\u5c06\u5c55\u793a\u5982\u4f55\u5728\u4e0d\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u7b80\u5355\u5b9e\u73b0\u4e00\u4e2a API \u5b9e\u8df5\u3002",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/11/28/63841cb4ad10a.png"},i=void 0,c={permalink:"/zh/blog/2022/12/a-poor-man\u2018s-api",source:"@site/blog/2022/12/a-poor-man\u2018s-api.md",title:"\u8bd1\u6587 | A poor man's API",description:"\u672c\u6587\u5c06\u5c55\u793a\u5982\u4f55\u5728\u4e0d\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u7b80\u5355\u5b9e\u73b0\u4e00\u4e2a API \u5b9e\u8df5\u3002",date:"2022-12-08T05:04:42.948Z",formattedDate:"2022\u5e7412\u67088\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:10.69,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://github.com/nfrankel.png",imageURL:"https://github.com/nfrankel.png"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],nextItem:{title:"APISIX Ingress \u662f\u5982\u4f55\u652f\u6301\u4e0a\u5343\u4e2a Pod \u526f\u672c\u7684\u5e94\u7528",permalink:"/zh/blog/2022/11/25/how-apisix-support-1000-pods"}},l={authorsImageUrls:[void 0,void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728 API \u65e5\u6e10\u6d41\u884c\u7684\u5e74\u4ee3\uff0c\u8d8a\u6765\u8d8a\u591a\u7684\u975e\u6280\u672f\u4eba\u5458\u4e5f\u5e0c\u671b\u80fd\u4ece API \u7684\u4f7f\u7528\u4e2d\u83b7\u5229\uff0c\u800c\u521b\u5efa\u4e00\u5957\u6210\u719f\u7684 API \u65b9\u6848\u9700\u8981\u65f6\u95f4\u6210\u672c\u548c\u91d1\u94b1\u4e24\u65b9\u9762\u7684\u8d44\u6e90\u52a0\u6301\u3002\u5728\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u4f60\u9700\u8981\u8003\u8651\u6a21\u578b\u3001\u8bbe\u8ba1\u3001REST \u539f\u5219\u7b49\uff0c\u800c\u4e0d\u4ec5\u4ec5\u662f\u7f16\u5199\u4e00\u884c\u4ee3\u7801\u3002\u5982\u4f55\u6253\u9020\u4e00\u4e2a\u5177\u6709\u9ad8\u6027\u4ef7\u6bd4\u4e14\u80fd\u6301\u7eed\u8fed\u4ee3\u7684\u4ea7\u54c1\uff0c\u6210\u4e3a\u8d8a\u6765\u8d8a\u591a\u6280\u672f\u56e2\u961f\u7684\u76ee\u6807\u3002")))}u.isMDXComponent=!0}}]);