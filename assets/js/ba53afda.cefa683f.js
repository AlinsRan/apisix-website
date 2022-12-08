"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4319],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(67294);const r=function(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(79443);const o=function(){const e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=a(86010);const s="tabItem_vU9c",l="tabItemActive_cw6a";const p=function(e){var t;const{lazy:a,block:r,defaultValue:p,values:c,groupId:u,className:d}=e,h=n.Children.toArray(e.children),m=null!=c?c:h.map((e=>({value:e.props.value,label:e.props.label}))),g=null!=p?p:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value,{tabGroupChoices:k,setTabGroupChoices:f}=o(),[b,v]=(0,n.useState)(g),N=[];if(null!=u){const e=k[u];null!=e&&e!==b&&m.some((t=>t.value===e))&&v(e)}const y=e=>{const t=e.currentTarget,a=N.indexOf(t),n=m[a].value;v(n),null!=u&&(f(u,n),setTimeout((()=>{(function(e){const{top:t,left:a,bottom:n,right:r}=e.getBoundingClientRect(),{innerHeight:o,innerWidth:i}=window;return t>=0&&r<=i&&n<=o&&a>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((()=>t.classList.remove(l)),2e3))}),150))},I=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=N.indexOf(e.target)+1;a=N[t]||N[0];break}case"ArrowLeft":{const t=N.indexOf(e.target)-1;a=N[t]||N[N.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},m.map((e=>{let{value:t,label:a}=e;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:e=>N.push(e),onKeyDown:I,onFocus:y,onClick:y},null!=a?a:t)}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===b))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})))))}},79443:(e,t,a)=>{a.d(t,{Z:()=>n});const n=(0,a(67294).createContext)(void 0)},892:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(55064),i=a(58215);const s={title:"Getting started",keywords:["APISIX","Getting Started"],description:"This document walks you through how you can get started with Apache APISIX."},l=void 0,p={unversionedId:"getting-started",id:"version-3.0/getting-started",isDocsHomePage:!1,title:"Getting started",description:"This document walks you through how you can get started with Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/apisix/getting-started",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.0/docs/en/latest/getting-started.md",tags:[],version:"3.0",frontMatter:{title:"Getting started",keywords:["APISIX","Getting Started"],description:"This document walks you through how you can get started with Apache APISIX."},sidebar:"version-3.0/docs",next:{title:"Installation",permalink:"/docs/apisix/installation-guide"}},c=[{value:"What is Apache APISIX?",id:"what-is-apache-apisix",children:[{value:"Features",id:"features",children:[]}]},{value:"Key concepts",id:"key-concepts",children:[]},{value:"Before you begin",id:"before-you-begin",children:[]},{value:"Install Apache APISIX",id:"install-apache-apisix",children:[]},{value:"Create a Route",id:"create-a-route",children:[]},{value:"Abstracting to Upstream",id:"abstracting-to-upstream",children:[]},{value:"Using the APISIX Dashboard",id:"using-the-apisix-dashboard",children:[]},{value:"Where to go next?",id:"where-to-go-next",children:[]}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The guide walks you through the concepts, features and how you can get started with Apache APISIX."),(0,r.kt)("p",null,"You will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What Apache APISIX is."),(0,r.kt)("li",{parentName:"ul"},"Architecture and key concepts of APISIX."),(0,r.kt)("li",{parentName:"ul"},"How to install and run APISIX in Docker."),(0,r.kt)("li",{parentName:"ul"},"How to create your first Route and configure an Upstream using Admin API."),(0,r.kt)("li",{parentName:"ul"},"How to use APISIX dashboard."),(0,r.kt)("li",{parentName:"ul"},"Where you can reach out for help.")),(0,r.kt)("h2",{id:"what-is-apache-apisix"},"What is Apache APISIX?"),(0,r.kt)("p",null,"Apache APISIX is an open source, dynamic, scalable, and high-performance cloud native API gateway for all your APIs and microservices."),(0,r.kt)("p",null,"APISIX facilitates interface traffic handling for websites, mobile and IoT applications by providing services such as load balancing, dynamic upstream, canary release, fine-grained routing, rate limiting, and many more."),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-platform support: APISIX can run from bare-metal machines to Kubernetes providing a vendor neutral, multi-platform solution. It also provides integration to cloud services like AWS Lambda, Azure Function, Lua functions and Apache OpenWhisk."),(0,r.kt)("li",{parentName:"ul"},"Fully dynamic: APISIX supports hot-reloading, meaning you don't need to restart the service to reflect changes in the configuration."),(0,r.kt)("li",{parentName:"ul"},"Fine-grained routing: APISIX supports using all ",(0,r.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/varindex.html"},"built-in NGINX variables")," for routing. You can define custom matching functions to filter requests and match Route."),(0,r.kt)("li",{parentName:"ul"},"Ops-friendly: APISIX is renowned for its ops-friendliness by DevOps teams. It integrates with tools and platforms like ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/jwt-auth#usage-with-hashicorp-vault"},"HashiCorp Vault"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/zipkin"},"Zipkin"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/plugins/skywalking"},"Apache SkyWalking"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/discovery/consul_kv"},"Consul"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/discovery/nacos"},"Nacos")," and ",(0,r.kt)("a",{parentName:"li",href:"/docs/apisix/discovery"},"Eureka"),". With ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard"),", operators can configure APISIX through an easy-to-use and intuitive UI."),(0,r.kt)("li",{parentName:"ul"},"Multi-language Plugin support: APISIX supports multiple programming languages for Plugin development. Developers can choose a language-specific SDK to write custom Plugins.")),(0,r.kt)("h2",{id:"key-concepts"},"Key concepts"),(0,r.kt)("p",null,"Here is a high-level overview of APISIX's software architecture:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/flow-software-architecture.png",alt:"flow-software-architecture"})),(0,r.kt)("p",null,"The table below defines the key concepts and components of APISIX referenced in this guide:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Concept/Component"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Route"),(0,r.kt)("td",{parentName:"tr",align:null},"Routes specify how requests to APISIX are forwarded to the Upstream. They match a client's request based on defined rules and loads and executes the configured Plugins.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream"),(0,r.kt)("td",{parentName:"tr",align:null},"Upstream is the service to forward your requests to. They can be configured to a Route or abstracted out to an Upstream object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Admin API"),(0,r.kt)("td",{parentName:"tr",align:null},"API that lets users control their deployed APISIX instance.")))),(0,r.kt)("h2",{id:"before-you-begin"},"Before you begin"),(0,r.kt)("p",null,"Before you start with APISIX, make sure you have the following tools installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker")," and ",(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker Compose"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.se/docs/manpage.html"},"curl")," for testing the API. Alternatively, you can use tools like ",(0,r.kt)("a",{parentName:"li",href:"https://hoppscotch.io/"},"Hoppscotch"),".")),(0,r.kt)("p",null,"The example Upstream service used here is ",(0,r.kt)("a",{parentName:"p",href:"https://httpbin.org"},"httpbin.org")," and you can use it for your testing."),(0,r.kt)("p",null,"This is an echo service, meaning it will return back the parameters we pass in the request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request")),(0,r.kt)("p",null,"The components of the request URL are shown and explained below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.0/docs/assets/images/requesturl.jpg",alt:"RequestURL"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Protocol: The network transport protocol. ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP")," protocol is used for this example."),(0,r.kt)("li",{parentName:"ul"},"Port: The port. ",(0,r.kt)("inlineCode",{parentName:"li"},"80")," is used for this example."),(0,r.kt)("li",{parentName:"ul"},"Host: The host. ",(0,r.kt)("inlineCode",{parentName:"li"},"httpbin.org")," is used for this example."),(0,r.kt)("li",{parentName:"ul"},"Path: The path. ",(0,r.kt)("inlineCode",{parentName:"li"},"/get")," is used for this example."),(0,r.kt)("li",{parentName:"ul"},"Query Parameters: The query string. Two strings ",(0,r.kt)("inlineCode",{parentName:"li"},"foo1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"foo2")," are used for this example.")),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," command to send the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request GET "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response")),(0,r.kt)("p",null,"We receive a JSON response when we send the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {\n    "foo1": "bar1",\n    "foo2": "bar2"\n  },\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.29.0",\n    "X-Amzn-Trace-Id": "Root=1-6088fe84-24f39487166cce1f0e41efc9"\n  },\n  "origin": "58.152.81.42",\n  "url": "http://httpbin.org/get?foo1=bar1&foo2=bar2"\n}\n')),(0,r.kt)("h2",{id:"install-apache-apisix"},"Install Apache APISIX"),(0,r.kt)("p",null,"To get started, we will install Apache APISIX with Docker and enable the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api"},"Admin API"),"."),(0,r.kt)("p",null,"First clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-docker"},"apisix-docker")," repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/apisix-docker.git\ncd apisix-docker/example\n")),(0,r.kt)("p",null,"Now, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," to start APISIX."),(0,r.kt)(o.Z,{groupId:"cpu-arch",defaultValue:"x86",values:[{label:"x86",value:"x86"},{label:"ARM/M1",value:"arm"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"x86",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix up -d\n"))),(0,r.kt)(i.Z,{value:"arm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker-compose -p docker-apisix -f docker-compose-arm64.yml up -d\n")))),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/installation-guide"},"Installing Apache APISIX")," for different installation methods."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure that all the required ports (default: 9080, 9180, 9443 and 2379) are available and not used by other system processes."),(0,r.kt)("p",{parentName:"div"},"On Unix-based systems, you can run the command below to terminate a process listening on a specific port:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo fuser -k 9443/tcp\n")),(0,r.kt)("p",{parentName:"div"},"If a Docker container is crashing, you can inspect the logs to diagnose the problem:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f --tail <container_id>\n")))),(0,r.kt)("p",null,"Once APISIX is running, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"curl")," to access the Admin API. You can also check if APISIX is running properly by running this command and checking the response."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl \"http://127.0.0.1:9180/apisix/admin/services/\" -H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1'\n")),(0,r.kt)("p",null,"This response indicates that APISIX is running successfully:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count":0,\n  "node":{\n    "key":"/apisix/services",\n    "nodes":[],\n    "dir":true\n  }\n}\n')),(0,r.kt)("h2",{id:"create-a-route"},"Create a Route"),(0,r.kt)("p",null,"From the previous step, we have a running instance of APISIX in Docker. Now let's create a Route."),(0,r.kt)("p",null,"APISIX provides a powerful ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api"},"Admin API")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-dashboard"},"APISIX Dashboard"),". Here, we will use the Admin API to create a Route and connect it to an ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/upstream"},"Upstream")," service. When a request arrives, APISIX will forward the request to the specified Upstream service."),(0,r.kt)("p",null,"We will configure the Route so that APISIX can forward the request to the corresponding Upstream service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.org:80": 1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"This configuration means that it will forward all matching inbound requests to the Upstream service (",(0,r.kt)("inlineCode",{parentName:"p"},"httpbin.org:80"),") if they meet these specified criterion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The HTTP method of the request is ",(0,r.kt)("inlineCode",{parentName:"li"},"GET"),"."),(0,r.kt)("li",{parentName:"ul"},"The request header contains the ",(0,r.kt)("inlineCode",{parentName:"li"},"host")," field, and its value is ",(0,r.kt)("inlineCode",{parentName:"li"},"example.com"),"."),(0,r.kt)("li",{parentName:"ul"},"The request path matches ",(0,r.kt)("inlineCode",{parentName:"li"},"/anything/*"),". ",(0,r.kt)("inlineCode",{parentName:"li"},"*")," means any sub path. For example ",(0,r.kt)("inlineCode",{parentName:"li"},"/anything/foo?arg=10"),".")),(0,r.kt)("p",null,"With the Route has created, we can access the Upstream service from the address exposed by APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/anything/foo?arg=10" -H "Host: example.com"\n')),(0,r.kt)("p",null,"This request will be forwarded to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/foo?arg=10")," by APISIX."),(0,r.kt)("h2",{id:"abstracting-to-upstream"},"Abstracting to Upstream"),(0,r.kt)("p",null,"Instead of configuring the Upstream directly to the Route, you can create an Upstream object and use it in the Route."),(0,r.kt)("p",null,"To create an Upstream object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9180/apisix/admin/upstreams/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "type": "roundrobin",\n  "nodes": {\n    "httpbin.org:80": 1\n  }\n}\'\n')),(0,r.kt)("p",null,"This is the same as the Upstream service we configured directly into the Route on the previous section."),(0,r.kt)("p",null,"To bind this Upstream to the Route, we can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream_id")," as ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "methods": ["GET"],\n  "host": "example.com",\n  "uri": "/anything/*",\n  "upstream_id": "1"\n}\'\n')),(0,r.kt)("p",null,"With the Route has created, we can access the Upstream service from the address exposed by APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -i -X GET "http://127.0.0.1:9080/anything/foo?arg=10" -H "Host: example.com"\n')),(0,r.kt)("p",null,"This request will be forwarded to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://httpbin.org:80/anything/foo?arg=10")," by APISIX."),(0,r.kt)("h2",{id:"using-the-apisix-dashboard"},"Using the APISIX Dashboard"),(0,r.kt)("p",null,"You can also use the APISIX Dashboard to create and configure Routes similar to the Admin API."),(0,r.kt)("p",null,"If you have followed the steps above, you would be able to access the dashboard at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000/"},"localhost:9000"),"."),(0,r.kt)("p",null,"Click on ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000/routes/list"},"Route")," from the sidebar to view a list of configured Routes. You would be able to see the Routes you created using the Admin API as well."),(0,r.kt)("p",null,"You can create a new Route through the dashboard by clicking the ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:9000/routes/create"},"Create")," button and following the instructions:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.0/docs/assets/images/create-a-route.png",alt:"Creating a Route with APISIX Dashboard"})),(0,r.kt)("p",null,"The newly created Route is added to the list of Routes:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/3.0/docs/assets/images/list-of-routes.png",alt:"Creating a Route with APISIX Dashboard"})),(0,r.kt)("p",null,"Check out the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard documentation")," to learn more."),(0,r.kt)("h2",{id:"where-to-go-next"},"Where to go next?"),(0,r.kt)("p",null,"If you have followed the steps above, you should have APISIX running and you would have configured a Route."),(0,r.kt)("p",null,"You can now look into adding Plugins to provide features like authentication, security, traffic control and observability. See the ",(0,r.kt)("a",{parentName:"p",href:"/plugins"},"Plugin Hub")," to learn more."),(0,r.kt)("p",null,"If you ever get stuck, you can ask for help in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/join"},"APISIX community channels")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/general/submit-issue"},"open an issue")," on GitHub."))}d.isMDXComponent=!0},86010:(e,t,a)=>{function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r});const r=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}}}]);