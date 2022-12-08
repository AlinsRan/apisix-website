"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3988],{35318:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(r),m=a,b=h["".concat(p,".").concat(m)]||h[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10036:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"Event-Driven APIs with Webhook and API Gateway",authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607"}],keywords:["API Gateway","Apache APISIX","API","Architecture","Use-cases","Webhook","Event-driven"],description:"This post elaborates on building event-driven APIs by making use of Webhook and API Gateway, we understand the role of each in this solution.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/11/07/6368d30abf672.png"},i=void 0,s={permalink:"/blog/2022/11/07/webhook-api-gateway-event-driven-apis",source:"@site/blog/2022/11/07/webhook-api-gateway-event-driven-apis.md",title:"Event-Driven APIs with Webhook and API Gateway",description:"This post elaborates on building event-driven APIs by making use of Webhook and API Gateway, we understand the role of each in this solution.",date:"2022-11-07T00:00:00.000Z",formattedDate:"November 7, 2022",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:5.8,truncated:!0,authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607",imageURL:"https://avatars.githubusercontent.com/u/14247607"}],prevItem:{title:"Geo-routing with Apache APISIX",permalink:"/blog/2022/11/09/georouting-apisix"},nextItem:{title:"Apache APISIX 3.0: 11 Highlights of Open Source API Gateway",permalink:"/blog/2022/11/02/apache-apisix-v3-preview"}},p={authorsImageUrls:[void 0]},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"There are many ways and technology options to consider when implementing an event-driven API. For example, we explored how to ",(0,a.kt)("a",{parentName:"p",href:"https://dev.to/apisix/building-event-driven-api-services-using-cqrs-api-gateway-and-serverless-af4"},"build event-driven APIs using these 3 well-known patterns"),": ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs"},"CQRS"),", ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/api-gateway/"},"API Gateway")," and ",(0,a.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/architecture/serverless/serverless-architecture"},"Serverless")," on the previous blog post. This post elaborates on ",(0,a.kt)("strong",{parentName:"p"},"building event-driven APIs by making use of Webhook and API Gateway"),", we understand the role of each in this solution. Firstly, let\u2019s turn our attention to the initial problem statement without the webhook in place.")))}u.isMDXComponent=!0}}]);