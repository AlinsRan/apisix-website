"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47714],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},73169:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const i={title:"consul_kv"},l=void 0,o={unversionedId:"discovery/consul_kv",id:"discovery/consul_kv",isDocsHomePage:!1,title:"consul_kv",description:"For users that are using nginx-upsync-module and Consul KV as a service discovery, like the Weibo Mobile Team, this may be needed.",source:"@site/docs/apisix/discovery/consul_kv.md",sourceDirName:"discovery",slug:"/discovery/consul_kv",permalink:"/zh/docs/apisix/next/discovery/consul_kv",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/master/docs/zh/latest/discovery/consul_kv.md",tags:[],version:"current",frontMatter:{title:"consul_kv"},sidebar:"docs",previous:{title:"consul",permalink:"/zh/docs/apisix/next/discovery/consul"},next:{title:"nacos",permalink:"/zh/docs/apisix/next/discovery/nacos"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Configuration for discovery client",id:"configuration-for-discovery-client",children:[{value:"Configuration for Consul KV",id:"configuration-for-consul-kv",children:[]},{value:"Register Http API Services",id:"register-http-api-services",children:[]},{value:"Upstream setting",id:"upstream-setting",children:[]}]},{value:"Debugging API",id:"debugging-api",children:[{value:"Memory Dump API",id:"memory-dump-api",children:[]},{value:"Show Dump File API",id:"show-dump-file-api",children:[]}]}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"For users that are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/weibocom/nginx-upsync-module"},"nginx-upsync-module")," and Consul KV as a service discovery, like the Weibo Mobile Team, this may be needed."),(0,r.kt)("p",null,"Thanks to @fatman-x guy, who developed this module, called ",(0,r.kt)("inlineCode",{parentName:"p"},"consul_kv"),", and its worker process data flow is below:\n",(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/548385/107141841-6ced3e00-6966-11eb-8aa4-bc790a4ad113.png",alt:"consul kv module data flow diagram"})),(0,r.kt)("h2",{id:"configuration-for-discovery-client"},"Configuration for discovery client"),(0,r.kt)("h3",{id:"configuration-for-consul-kv"},"Configuration for Consul KV"),(0,r.kt)("p",null,"Add following configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul_kv:\n    servers:\n      - "http://127.0.0.1:8500"\n      - "http://127.0.0.1:8600"\n    prefix: "upstreams"\n    skip_keys:                    # if you need to skip special keys\n      - "upstreams/unused_api/"\n    timeout:\n      connect: 1000               # default 2000 ms\n      read: 1000                  # default 2000 ms\n      wait: 60                    # default 60 sec\n    weight: 1                     # default 1\n    fetch_interval: 5             # default 3 sec, only take effect for keepalive: false way\n    keepalive: true               # default true, use the long pull way to query consul servers\n    default_server:               # you can define default server when missing hit\n      host: "127.0.0.1"\n      port: 20999\n      metadata:\n        fail_timeout: 1           # default 1 ms\n        weight: 1                 # default 1\n        max_fails: 1              # default 1\n    dump:                         # if you need, when registered nodes updated can dump into file\n       path: "logs/consul_kv.dump"\n       expire: 2592000      # unit sec, here is 30 day\n')),(0,r.kt)("p",null,"And you can config it in short by default value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul_kv:\n    servers:\n      - "http://127.0.0.1:8500"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"keepalive")," has two optional values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"true"),", default and recommend value, use the long pull way to query consul servers"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"false"),", not recommend, it would use the short pull way to query consul servers, then you can set the ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch_interval")," for fetch interval")),(0,r.kt)("h4",{id:"dump-data"},"Dump Data"),(0,r.kt)("p",null,"When we need reload ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix")," online, as the ",(0,r.kt)("inlineCode",{parentName:"p"},"consul_kv")," module maybe loads data from CONSUL slower than load routes from ETCD, and would get the log at the moment before load successfully from consul:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," http_access_phase(): failed to set upstream: no valid upstream node\n")),(0,r.kt)("p",null,"So, we import the ",(0,r.kt)("inlineCode",{parentName:"p"},"dump")," function for ",(0,r.kt)("inlineCode",{parentName:"p"},"consul_kv")," module. When reload, would load the dump file before from consul; when the registered nodes in consul been updated, would dump the upstream nodes into file automatically."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dump")," has three optional values now:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"path"),", the dump file save path",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"support relative path, eg: ",(0,r.kt)("inlineCode",{parentName:"li"},"logs/consul_kv.dump")),(0,r.kt)("li",{parentName:"ul"},"support absolute path, eg: ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/consul_kv.bin")),(0,r.kt)("li",{parentName:"ul"},"make sure the dump file's parent path exist"),(0,r.kt)("li",{parentName:"ul"},"make sure the ",(0,r.kt)("inlineCode",{parentName:"li"},"apisix")," has the dump file's read-write access permission,eg: ",(0,r.kt)("inlineCode",{parentName:"li"},"chown  www:root conf/upstream.d/")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"load_on_init"),", default value is ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"if ",(0,r.kt)("inlineCode",{parentName:"li"},"true"),", just try to load the data from the dump file before loading data from  consul when starting, does not care the dump file exists or not"),(0,r.kt)("li",{parentName:"ul"},"if ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", ignore loading data from the dump file"),(0,r.kt)("li",{parentName:"ul"},"Whether ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", we don't need to prepare a dump file for apisix at anytime"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expire"),", unit sec, avoiding load expired dump data when load",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"default ",(0,r.kt)("inlineCode",{parentName:"li"},"0"),", it is unexpired forever"),(0,r.kt)("li",{parentName:"ul"},"recommend 2592000, which is 30 days(equals 3600 ","*"," 24 ","*"," 30)")))),(0,r.kt)("h3",{id:"register-http-api-services"},"Register Http API Services"),(0,r.kt)("p",null,"Service register Key&Value template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Key:    {Prefix}/{Service_Name}/{IP}:{Port}\nValue: {"weight": <Num>, "max_fails": <Num>, "fail_timeout": <Num>}\n')),(0,r.kt)("p",null,"The register consul key use ",(0,r.kt)("inlineCode",{parentName:"p"},"upstreams")," as prefix by default. The http api service name called ",(0,r.kt)("inlineCode",{parentName:"p"},"webpages")," for example, and you can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"webpages/oneteam/hello")," as service name. The api instance of node's ip and port make up new key: ",(0,r.kt)("inlineCode",{parentName:"p"},"<IP>:<Port>"),"."),(0,r.kt)("p",null,"Now, register nodes into consul:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl \\\n    -X PUT \\\n    -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n    http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.19.5.12:8000\n\ncurl \\\n    -X PUT \\\n    -d \' {"weight": 1, "max_fails": 2, "fail_timeout": 1}\' \\\n    http://127.0.0.1:8500/v1/kv/upstreams/webpages/172.19.5.13:8000\n')),(0,r.kt)("p",null,"In some case, same keys exist in different consul servers.\nTo avoid confusion, use the full consul key url path as service name in practice."),(0,r.kt)("h3",{id:"upstream-setting"},"Upstream setting"),(0,r.kt)("p",null,'Here is an example of routing a request with a URL of "/*" to a service which named "',(0,r.kt)("a",{parentName:"p",href:"http://127.0.0.1:8500/v1/kv/upstreams/webpages/%22"},'http://127.0.0.1:8500/v1/kv/upstreams/webpages/"')," and use consul_kv discovery client in the registry :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "service_name": "http://127.0.0.1:8500/v1/kv/upstreams/webpages/",\n        "type": "roundrobin",\n        "discovery_type": "consul_kv"\n    }\n}\'\n')),(0,r.kt)("p",null,"The format response as below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "node": {\n    "value": {\n      "priority": 0,\n      "update_time": 1612755230,\n      "upstream": {\n        "discovery_type": "consul_kv",\n        "service_name": "http://127.0.0.1:8500/v1/kv/upstreams/webpages/",\n        "hash_on": "vars",\n        "type": "roundrobin",\n        "pass_host": "pass"\n      },\n      "id": "1",\n      "uri": "/*",\n      "create_time": 1612755230,\n      "status": 1\n    },\n    "key": "/apisix/routes/1"\n  }\n}\n')),(0,r.kt)("p",null,"You could find more usage in the ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix/t/discovery/consul_kv.t")," file."),(0,r.kt)("h2",{id:"debugging-api"},"Debugging API"),(0,r.kt)("p",null,"It also offers control api for debugging."),(0,r.kt)("h3",{id:"memory-dump-api"},"Memory Dump API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/consul_kv/dump\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# curl http://127.0.0.1:9090/v1/discovery/consul_kv/dump | jq\n{\n  "config": {\n    "fetch_interval": 3,\n    "timeout": {\n      "wait": 60,\n      "connect": 6000,\n      "read": 6000\n    },\n    "prefix": "upstreams",\n    "weight": 1,\n    "servers": [\n      "http://172.19.5.30:8500",\n      "http://172.19.5.31:8500"\n    ],\n    "keepalive": true,\n    "default_service": {\n      "host": "172.19.5.11",\n      "port": 8899,\n      "metadata": {\n        "fail_timeout": 1,\n        "weight": 1,\n        "max_fails": 1\n      }\n    },\n    "skip_keys": [\n      "upstreams/myapi/gateway/apisix/"\n    ]\n  },\n  "services": {\n    "http://172.19.5.31:8500/v1/kv/upstreams/webpages/": [\n      {\n        "host": "127.0.0.1",\n        "port": 30513,\n        "weight": 1\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 30514,\n        "weight": 1\n      }\n    ],\n    "http://172.19.5.30:8500/v1/kv/upstreams/1614480/grpc/": [\n      {\n        "host": "172.19.5.51",\n        "port": 50051,\n        "weight": 1\n      }\n    ],\n    "http://172.19.5.30:8500/v1/kv/upstreams/webpages/": [\n      {\n        "host": "127.0.0.1",\n        "port": 30511,\n        "weight": 1\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 30512,\n        "weight": 1\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"show-dump-file-api"},"Show Dump File API"),(0,r.kt)("p",null,"It offers another control api for dump file view now. Maybe would add more api for debugging in future."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/consul_kv/show_dump_file\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9090/v1/discovery/consul_kv/show_dump_file | jq\n{\n  "services": {\n    "http://172.19.5.31:8500/v1/kv/upstreams/1614480/webpages/": [\n      {\n        "host": "172.19.5.12",\n        "port": 8000,\n        "weight": 120\n      },\n      {\n        "host": "172.19.5.13",\n        "port": 8000,\n        "weight": 120\n      }\n    ]\n  },\n  "expire": 0,\n  "last_update": 1615877468\n}\n')))}u.isMDXComponent=!0}}]);