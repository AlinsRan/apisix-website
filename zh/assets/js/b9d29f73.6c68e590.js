"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[13747],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(n),k=l,c=m["".concat(o,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(c,p(p({ref:t},d),{},{components:n})):a.createElement(c,p({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,p[1]=i;for(var u=2;u<r;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},99185:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(87462),l=(n(67294),n(3905));const r={title:"opa",keywords:["APISIX","Plugin","Open Policy Agent","opa"],description:"\u672c\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX \u901a\u8fc7 opa \u63d2\u4ef6\u4e0e Open Policy Agent \u5bf9\u63a5\u7684\u76f8\u5173\u4fe1\u606f\u3002"},p=void 0,i={unversionedId:"plugins/opa",id:"plugins/opa",isDocsHomePage:!1,title:"opa",description:"\u672c\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX \u901a\u8fc7 opa \u63d2\u4ef6\u4e0e Open Policy Agent \u5bf9\u63a5\u7684\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/current/plugins/opa.md",sourceDirName:"plugins",slug:"/plugins/opa",permalink:"/zh/docs/apisix/next/plugins/opa",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/plugins/opa.md",tags:[],version:"current",frontMatter:{title:"opa",keywords:["APISIX","Plugin","Open Policy Agent","opa"],description:"\u672c\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX \u901a\u8fc7 opa \u63d2\u4ef6\u4e0e Open Policy Agent \u5bf9\u63a5\u7684\u76f8\u5173\u4fe1\u606f\u3002"},sidebar:"docs",previous:{title:"ldap-auth",permalink:"/zh/docs/apisix/next/plugins/ldap-auth"},next:{title:"forward-auth",permalink:"/zh/docs/apisix/next/plugins/forward-auth"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u6570\u636e\u5b9a\u4e49",id:"\u6570\u636e\u5b9a\u4e49",children:[{value:"APISIX \u5411 OPA \u53d1\u9001\u4fe1\u606f",id:"apisix-\u5411-opa-\u53d1\u9001\u4fe1\u606f",children:[]},{value:"OPA \u5411 APISIX \u8fd4\u56de\u6570\u636e",id:"opa-\u5411-apisix-\u8fd4\u56de\u6570\u636e",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",children:[]},{value:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u54cd\u5e94",id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u54cd\u5e94",children:[]},{value:"\u53d1\u9001 APISIX \u6570\u636e",id:"\u53d1\u9001-apisix-\u6570\u636e",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],u={toc:o};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u4e0e ",(0,l.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org"},"Open Policy Agent")," \u8fdb\u884c\u96c6\u6210\uff0c\u5b9e\u73b0\u540e\u7aef\u670d\u52a1\u7684\u8ba4\u8bc1\u6388\u6743\u4e0e\u8bbf\u95ee\u670d\u52a1\u7b49\u529f\u80fd\u89e3\u8026\uff0c\u51cf\u5c11\u7cfb\u7edf\u590d\u6742\u6027\u3002"),(0,l.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"host"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"OPA \u670d\u52a1\u7684\u4e3b\u673a\u5730\u5740\uff0c\u4f8b\u5982 ",(0,l.kt)("inlineCode",{parentName:"td"},"https://localhost:8181"),"\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u9a8c\u8bc1 SSL \u8bc1\u4e66\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"policy"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"OPA \u7b56\u7565\u8def\u5f84\uff0c\u662f ",(0,l.kt)("inlineCode",{parentName:"td"},"package")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"decision")," \u914d\u7f6e\u7684\u7ec4\u5408\u3002\u5f53\u4f7f\u7528\u9ad8\u7ea7\u529f\u80fd\uff08\u5982\u81ea\u5b9a\u4e49\u54cd\u5e94\uff09\u65f6\uff0c\u4f60\u53ef\u4ee5\u7701\u7565 ",(0,l.kt)("inlineCode",{parentName:"td"},"decision")," \u914d\u7f6e\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e HTTP \u8c03\u7528\u8d85\u65f6\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u5c06\u4e3a\u591a\u4e2a\u8bf7\u6c42\u4fdd\u6301\u8fde\u63a5\u5e76\u5904\u4e8e\u6d3b\u52a8\u72b6\u6001\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,l.kt)("td",{parentName:"tr",align:null},"[1000, ...]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u65ad\u5f00\u540e\u7684\u95f2\u7f6e\u65f6\u95f4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,l.kt)("td",{parentName:"tr",align:null},"integer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"[1, ...]","ms"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fde\u63a5\u6c60\u9650\u5236\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_route"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u53d1\u9001\u5173\u4e8e\u5f53\u524d Route \u7684\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_service"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u53d1\u9001\u5173\u4e8e\u5f53\u524d Service \u7684\u4fe1\u606f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"with_consumer"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\uff0c\u53d1\u9001\u5173\u4e8e\u5f53\u524d Consumer \u7684\u4fe1\u606f\u3002\u6ce8\u610f\uff0c\u8fd9\u53ef\u80fd\u4f1a\u53d1\u9001\u654f\u611f\u4fe1\u606f\uff0c\u5982 API key\u3002\u8bf7\u786e\u4fdd\u5728\u5b89\u5168\u7684\u60c5\u51b5\u4e0b\u624d\u6253\u5f00\u5b83\u3002")))),(0,l.kt)("h2",{id:"\u6570\u636e\u5b9a\u4e49"},"\u6570\u636e\u5b9a\u4e49"),(0,l.kt)("h3",{id:"apisix-\u5411-opa-\u53d1\u9001\u4fe1\u606f"},"APISIX \u5411 OPA \u53d1\u9001\u4fe1\u606f"),(0,l.kt)("p",null,"\u4e0b\u8ff0\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86\u5982\u4f55\u901a\u8fc7 APISIX \u5411 OPA \u670d\u52a1\u53d1\u9001\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "http",\n    "request": {\n        "scheme": "http",\n        "path": "\\/get",\n        "headers": {\n            "user-agent": "curl\\/7.68.0",\n            "accept": "*\\/*",\n            "host": "127.0.0.1:9080"\n        },\n        "query": {},\n        "port": 9080,\n        "method": "GET",\n        "host": "127.0.0.1"\n    },\n    "var": {\n        "timestamp": 1701234567,\n        "server_addr": "127.0.0.1",\n        "server_port": "9080",\n        "remote_port": "port",\n        "remote_addr": "ip address"\n    },\n    "route": {},\n    "service": {},\n    "consumer": {}\n}\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u4ee3\u7801\u5177\u4f53\u91ca\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"type")," \u4ee3\u8868\u8bf7\u6c42\u7c7b\u578b\uff08\u5982 ",(0,l.kt)("inlineCode",{parentName:"li"},"http")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"stream"),"\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"request")," \u5219\u9700\u8981\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"type")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"http")," \u65f6\u4f7f\u7528\uff0c\u5305\u542b\u57fa\u672c\u7684\u8bf7\u6c42\u4fe1\u606f\uff08\u5982 URL\u3001\u5934\u4fe1\u606f\u7b49\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"var")," \u5305\u542b\u5173\u4e8e\u8bf7\u6c42\u8fde\u63a5\u7684\u57fa\u672c\u4fe1\u606f\uff08\u5982 IP\u3001\u7aef\u53e3\u3001\u8bf7\u6c42\u65f6\u95f4\u6233\u7b49\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"route"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"service")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"consumer")," \u5305\u542b\u7684\u6570\u636e\u4e0e APISIX \u4e2d\u5b58\u50a8\u7684\u6570\u636e\u76f8\u540c\uff0c\u53ea\u6709\u5f53\u8fd9\u4e9b\u5bf9\u8c61\u4e0a\u914d\u7f6e\u4e86 ",(0,l.kt)("inlineCode",{parentName:"li"},"opa")," \u63d2\u4ef6\u65f6\u624d\u4f1a\u53d1\u9001\u3002")),(0,l.kt)("h3",{id:"opa-\u5411-apisix-\u8fd4\u56de\u6570\u636e"},"OPA \u5411 APISIX \u8fd4\u56de\u6570\u636e"),(0,l.kt)("p",null,"\u4e0b\u8ff0\u793a\u4f8b\u4ee3\u7801\u5c55\u793a\u4e86 OPA \u670d\u52a1\u5bf9 APISIX \u53d1\u9001\u8bf7\u6c42\u540e\u7684\u54cd\u5e94\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "allow": true,\n        "reason": "test",\n        "headers": {\n            "an": "header"\n        },\n        "status_code": 401\n    }\n}\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u54cd\u5e94\u4e2d\u7684\u4ee3\u7801\u91ca\u4e49\u5982\u4e0b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"allow")," \u914d\u7f6e\u662f\u5fc5\u4e0d\u53ef\u5c11\u7684\uff0c\u5b83\u8868\u793a\u8bf7\u6c42\u662f\u5426\u5141\u8bb8\u901a\u8fc7 APISIX \u8fdb\u884c\u8f6c\u53d1\uff1b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"reason"),"\u3001",(0,l.kt)("inlineCode",{parentName:"li"},"headers")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"status_code")," \u662f\u53ef\u9009\u7684\uff0c\u53ea\u6709\u5f53\u4f60\u914d\u7f6e\u4e00\u4e2a\u81ea\u5b9a\u4e49\u54cd\u5e94\u65f6\u624d\u4f1a\u8fd4\u56de\u8fd9\u4e9b\u9009\u9879\u4fe1\u606f\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u6cd5\u53ef\u67e5\u770b\u540e\u7eed\u6d4b\u8bd5\u7528\u4f8b\u3002")),(0,l.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,l.kt)("p",null,"\u9996\u5148\u542f\u52a8 OPA \u73af\u5883\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s\n")),(0,l.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,l.kt)("p",null,"\u4e00\u65e6\u4f60\u8fd0\u884c\u4e86 OPA \u670d\u52a1\uff0c\u5c31\u53ef\u4ee5\u8fdb\u884c\u57fa\u672c\u7b56\u7565\u7684\u521b\u5efa\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\\n    -H 'Content-Type: text/plain' \\\n    -d 'package example1\n\nimport input.request\n\ndefault allow = false\n\nallow {\n    # HTTP method must GET\n    request.method == \"GET\"\n}'\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/*",\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "example1"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,l.kt)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -X GET 127.0.0.1:9080/get\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,l.kt)("p",null,"\u5982\u679c\u5c1d\u8bd5\u5411\u4e0d\u540c\u7684\u7aef\u70b9\u53d1\u51fa\u8bf7\u6c42\uff0c\u4f1a\u51fa\u73b0\u8bf7\u6c42\u5931\u8d25\u7684\u72b6\u6001\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -X POST 127.0.0.1:9080/post\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 FORBIDDEN\n")),(0,l.kt)("h3",{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49\u54cd\u5e94"},"\u4f7f\u7528\u81ea\u5b9a\u4e49\u54cd\u5e94"),(0,l.kt)("p",null,"\u9664\u4e86\u57fa\u7840\u7528\u6cd5\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u4e3a\u66f4\u590d\u6742\u7684\u4f7f\u7528\u573a\u666f\u914d\u7f6e\u81ea\u5b9a\u4e49\u54cd\u5e94\uff0c\u53c2\u8003\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'127.0.0.1:8181/v1/policies/example2\' \\\n    -H \'Content-Type: text/plain\' \\\n    -d \'package example2\n\nimport input.request\n\ndefault allow = false\n\nallow {\n    request.method == "GET"\n}\n\n# custom response body (Accepts a string or an object, the object will respond as JSON format)\nreason = "test" {\n    not allow\n}\n\n# custom response header (The data of the object can be written in this way)\nheaders = {\n    "Location": "http://example.com/auth"\n} {\n    not allow\n}\n\n# custom response status code\nstatus_code = 302 {\n    not allow\n}\'\n')),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u4f60\u53ef\u4ee5\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u7684\u7b56\u7565\u53c2\u6570\u8c03\u6574\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"example2"),"\uff0c\u7136\u540e\u53d1\u51fa\u8bf7\u6c42\u8fdb\u884c\u6d4b\u8bd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -X GET 127.0.0.1:9080/get\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,l.kt)("p",null,"\u6b64\u65f6\u5982\u679c\u4f60\u53d1\u51fa\u4e00\u4e2a\u5931\u8d25\u8bf7\u6c42\uff0c\u5c06\u4f1a\u6536\u5230\u6765\u81ea OPA \u670d\u52a1\u7684\u81ea\u5b9a\u4e49\u54cd\u5e94\u53cd\u9988\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -X POST 127.0.0.1:9080/post\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 302 FOUND\nLocation: http://example.com/auth\n\ntest\n")),(0,l.kt)("h3",{id:"\u53d1\u9001-apisix-\u6570\u636e"},"\u53d1\u9001 APISIX \u6570\u636e"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u7684 OPA \u670d\u52a1\u9700\u8981\u6839\u636e APISIX \u7684\u67d0\u4e9b\u6570\u636e\uff08\u5982 Route \u548c Consumer \u7684\u8be6\u7ec6\u4fe1\u606f\uff09\u6765\u8fdb\u884c\u540e\u7eed\u64cd\u4f5c\u65f6\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u63d2\u4ef6\u6765\u5b9e\u73b0\u3002"),(0,l.kt)("p",null,"\u4e0b\u8ff0\u793a\u4f8b\u5c55\u793a\u4e86\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"echo")," \u7b56\u7565\uff0c\u5b83\u5c06\u539f\u6837\u8fd4\u56de APISIX \u53d1\u9001\u7684\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT '127.0.0.1:8181/v1/policies/echo' \\\n    -H 'Content-Type: text/plain' \\\n    -d 'package echo\n\nallow = false\nreason = input'\n")),(0,l.kt)("p",null,"\u73b0\u5728\u5c31\u53ef\u4ee5\u5728\u8def\u7531\u4e0a\u914d\u7f6e\u63d2\u4ef6\u6765\u53d1\u9001 APISIX \u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/*",\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "echo",\n            "with_route": true\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,l.kt)("p",null,"\u6b64\u65f6\u5982\u679c\u4f60\u63d0\u51fa\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u54cd\u5e94\u770b\u5230\u6765\u81ea\u8def\u7531\u7684\u6570\u636e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X GET 127.0.0.1:9080/get\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'{\n    "type": "http",\n    "request": {\n        xxx\n    },\n    "var": {\n        xxx\n    },\n    "route": {\n        xxx\n    }\n}\n')),(0,l.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,l.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"opa")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);