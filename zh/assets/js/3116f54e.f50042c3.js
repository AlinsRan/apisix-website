"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[97311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(t),f=i,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||r;return t?a.createElement(m,l(l({ref:n},s),{},{components:t})):a.createElement(m,l({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=d;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},62714:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=t(87462),i=(t(67294),t(3905));const r={title:"The internal of apisix java plugin runner"},l=void 0,o={unversionedId:"the-internal-of-apisix-java-plugin-runner",id:"version-0.4.0/the-internal-of-apisix-java-plugin-runner",isDocsHomePage:!1,title:"The internal of apisix java plugin runner",description:"This article explains the internal design of apisix-java-plugin-runner.",source:"@site/docs-apisix-java-plugin-runner_versioned_docs/version-0.4.0/the-internal-of-apisix-java-plugin-runner.md",sourceDirName:".",slug:"/the-internal-of-apisix-java-plugin-runner",permalink:"/zh/docs/java-plugin-runner/the-internal-of-apisix-java-plugin-runner",editUrl:"/zh/edit#https://github.com/apache/apisix-java-plugin-runner/edit/release/0.4.0/docs/zh/latest/the-internal-of-apisix-java-plugin-runner.md",tags:[],version:"0.4.0",frontMatter:{title:"The internal of apisix java plugin runner"},sidebar:"version-0.4.0/docs",previous:{title:"How it works",permalink:"/zh/docs/java-plugin-runner/how-it-works"},next:{title:"Installation",permalink:"/zh/docs/java-plugin-runner/installation-guide"}},p=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Overview",id:"overview",children:[]},{value:"Communication",id:"communication",children:[]},{value:"Serialization",id:"serialization",children:[]},{value:"Codec",id:"codec",children:[]}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article explains the internal design of apisix-java-plugin-runner."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#communication"},"Communication")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#serialization"},"Serialization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#codec"},"Codec"))),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The apisix-java-plugin-runner designed as a TCP server built using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/netty/netty"},"netty"),",\nit provides a ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginFilter")," interface for users to implement."),(0,i.kt)("p",null,"Users only need to focus on their business logic, not on the details of how the apisix java plugin runner communicates with APISIX."),(0,i.kt)("p",null,"The inter-process communication between them is depicted by the following diagram."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-java-plugin-runner/release/0.4.0/docs/assets/images/the-internal-of-apisix-java-plugin-runner.png",alt:"the-internal-of-apisix-java-plugin-runner"})),(0,i.kt)("h2",{id:"communication"},"Communication"),(0,i.kt)("p",null,"apisix-java-plugin-runner and APISIX use the Unix Domain Socket for inter-process communication,\nso they need to be deployed in the same instance."),(0,i.kt)("p",null,"apisix-java-plugin-runner is managed by APISIX. APISIX starts the apisix-java-plugin-runner when it starts and ends it when it\nends. if the apisix-java-plugin-runner quits in the middle, APISIX will restart it automatically."),(0,i.kt)("h2",{id:"serialization"},"Serialization"),(0,i.kt)("p",null,"Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/google/flatbuffers"},"flatbuffers")),(0,i.kt)("p",null,"FlatBuffers is a cross platform serialization library architected for maximum memory efficiency.\nIt allows you to directly access serialized data without parsing/unpacking it first, while still having great forward/backward compatibility."),(0,i.kt)("p",null,"You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/api7/ext-plugin-proto/blob/main/ext-plugin.fbs"},"ext-plugin.fbs"),"\nschema file to see how Lua and Java layout the serialized objects."),(0,i.kt)("h2",{id:"codec"},"Codec"),(0,i.kt)("p",null,"apisix-java-plugin-runner and APISIX use a private binary protocol for coding and decoding.\nThe protocol format is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 byte of type + 3 bytes of length + data\n")),(0,i.kt)("p",null,"The type can be 0 ~ 7, and the length can be [0, 8M). The length of data is determined by length."),(0,i.kt)("p",null,"The current type takes the following values"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"0 means error"),(0,i.kt)("li",{parentName:"ul"},"1 means prepare_conf"),(0,i.kt)("li",{parentName:"ul"},"2 means http_req_call")),(0,i.kt)("p",null,"The binary data generated by the flatbuffer serialization is placed in the data segment."))}s.isMDXComponent=!0}}]);