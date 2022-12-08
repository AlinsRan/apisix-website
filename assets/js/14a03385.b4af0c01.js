"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[89874],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),m=o(n),c=r,h=m["".concat(u,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,i(i({ref:e},s),{},{components:n})):a.createElement(h,i({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},12429:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"batch-requests"},i=void 0,p={unversionedId:"plugins/batch-requests",id:"version-2.13/plugins/batch-requests",isDocsHomePage:!1,title:"batch-requests",description:"batch-requests can accept multiple request and send them from apisix via http pipeline, and return an aggregated response to client, which can significantly improve performance when the client needs to access multiple APIs.",source:"@site/docs-apisix_versioned_docs/version-2.13/plugins/batch-requests.md",sourceDirName:"plugins",slug:"/plugins/batch-requests",permalink:"/docs/apisix/2.13/plugins/batch-requests",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.13/docs/en/latest/plugins/batch-requests.md",tags:[],version:"2.13",frontMatter:{title:"batch-requests"},sidebar:"version-2.13/docs",previous:{title:"Installing Apache APISIX",permalink:"/docs/apisix/2.13/how-to-build"},next:{title:"redirect",permalink:"/docs/apisix/2.13/plugins/redirect"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"How To Enable",id:"how-to-enable",children:[]},{value:"How To Configure",id:"how-to-configure",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Batch API Request/Response",id:"batch-api-requestresponse",children:[{value:"Batch API Request:",id:"batch-api-request",children:[]},{value:"Batch API Response\uff1a",id:"batch-api-response",children:[]}]},{value:"How to specify custom uri",id:"how-to-specify-custom-uri",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],o={toc:u};function s(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"batch-requests")," can accept multiple request and send them from ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix")," via ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"http pipeline"),", and return an aggregated response to client, which can significantly improve performance when the client needs to access multiple APIs."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tips")),(0,r.kt)("p",{parentName:"blockquote"},"The HTTP headers for the outer batch request, except for the Content- headers such as Content-Type, apply to every request in the batch. If you specify a given HTTP header in both the outer request and the individual call, the header's value of individual call would override the outer batch request header's value. The headers for an individual call apply only to that call.")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"None"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This plugin will add ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," as the endpoint.\nYou may need to use ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin to expose it."),(0,r.kt)("h2",{id:"how-to-enable"},"How To Enable"),(0,r.kt)("p",null,"Enable the batch-requests plugin in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Add this in config.yaml\nplugins:\n  - ... # plugin you need\n  - batch-requests\n")),(0,r.kt)("h2",{id:"how-to-configure"},"How To Configure"),(0,r.kt)("p",null,"By default, the maximum body size sent to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests")," can't be larger than 1 MiB.\nYou can configure it via ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix/admin/plugin_metadata/batch-requests"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/batch-requests -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X PUT -d '\n{\n    \"max_body_size\": 4194304\n}'\n")),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_body_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"1048576"),(0,r.kt)("td",{parentName:"tr",align:null},"> 0"),(0,r.kt)("td",{parentName:"tr",align:null},"the maximum of request body size in bytes")))),(0,r.kt)("h2",{id:"batch-api-requestresponse"},"Batch API Request/Response"),(0,r.kt)("p",null,"The plugin will create a API in ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix")," to handle your batch request."),(0,r.kt)("h3",{id:"batch-api-request"},"Batch API Request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify ",(0,r.kt)("inlineCode",{parentName:"td"},"query string")," for all request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Specify ",(0,r.kt)("inlineCode",{parentName:"td"},"header")," for all request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"30000"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Aggregate API timeout in ",(0,r.kt)("inlineCode",{parentName:"td"},"ms"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"pipeline"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#httprequest"},"HttpRequest")),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Request's detail")))),(0,r.kt)("h4",{id:"httprequest"},"HttpRequest"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"[1.0, 1.1]"),(0,r.kt)("td",{parentName:"tr",align:null},"http version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"method"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},'["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS", "CONNECT", "TRACE"]'),(0,r.kt)("td",{parentName:"tr",align:null},"http method")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"request's ",(0,r.kt)("inlineCode",{parentName:"td"},"query string"),", if ",(0,r.kt)("inlineCode",{parentName:"td"},"Key")," is conflicted with global ",(0,r.kt)("inlineCode",{parentName:"td"},"query"),", this setting's value will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"request's ",(0,r.kt)("inlineCode",{parentName:"td"},"header"),", if ",(0,r.kt)("inlineCode",{parentName:"td"},"Key")," is conflicted with global ",(0,r.kt)("inlineCode",{parentName:"td"},"headers"),", this setting's value will be used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"http request's path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"http request's body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"verify if SSL cert matches hostname.")))),(0,r.kt)("h3",{id:"batch-api-response"},"Batch API Response\uff1a"),(0,r.kt)("p",null,"Response is ",(0,r.kt)("inlineCode",{parentName:"p"},"Array")," of ",(0,r.kt)("a",{parentName:"p",href:"#httpresponse"},"HttpResponse"),"."),(0,r.kt)("h4",{id:"httpresponse"},"HttpResponse"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"http status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reason"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"http reason phrase")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"http response body")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"http response headers")))),(0,r.kt)("h2",{id:"how-to-specify-custom-uri"},"How to specify custom uri"),(0,r.kt)("p",null,"We have the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin, customizing the uri becomes even easier. We just need to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," you want when creating the route and change the configuration of the ",(0,r.kt)("inlineCode",{parentName:"p"},"public-api")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/br -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/batch-requests",\n    "plugins": {\n        "public-api": {\n            "uri": "/apisix/batch-requests"\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("p",null,"First you need to setup the route for the API that batch request, which will use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/2.13/plugins/public-api"},"public-api")," plugin."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/apisix/admin/routes/br -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/batch-requests",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("p",null,"Then, you can pass your request detail to batch API(",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/batch-requests"),"), APISIX can automatically complete requests via ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HTTP_pipelining"},"http pipeline"),". Such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://127.0.0.1:9080/apisix/batch-requests\' \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n    "headers": {\n        "Content-Type": "application/json",\n        "admin-jwt":"xxxx"\n    },\n    "timeout": 500,\n    "pipeline": [\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test"\n        },\n        {\n            "method": "POST",\n            "path": "/community.GiftSrv/GetGifts",\n            "body": "test2"\n        }\n    ]\n}\'\n')),(0,r.kt)("p",null,"response as below\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "status": 200,\n        "reason": "OK",\n        "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n        "headers": {\n            "Connection": "keep-alive",\n            "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n            "Content-Type": "application/json",\n            "Content-Length": "81",\n            "Server": "APISIX web server"\n        }\n    },\n    {\n        "status": 200,\n        "reason": "OK",\n        "body": "{\\"ret\\":500,\\"msg\\":\\"error\\",\\"game_info\\":null,\\"gift\\":[],\\"to_gets\\":0,\\"get_all_msg\\":\\"\\"}",\n        "headers": {\n            "Connection": "keep-alive",\n            "Date": "Sat, 11 Apr 2020 17:53:20 GMT",\n            "Content-Type": "application/json",\n            "Content-Length": "81",\n            "Server": "APISIX web server"\n        }\n    }\n]\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"Normally, you don't need to disable this plugin. If you do need, please make a new list of ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," you need in ",(0,r.kt)("inlineCode",{parentName:"p"},"/conf/config.yaml")," to cover the original one."))}s.isMDXComponent=!0}}]);