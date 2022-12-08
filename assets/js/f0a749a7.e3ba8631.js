"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[46761],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=i,m=d["".concat(p,".").concat(c)]||d[c]||g[c]||l;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var s=2;s<l;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},31905:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={title:"file-logger",keywords:["APISIX","API Gateway","Plugin","File Logger"],description:"This document contains information about the Apache APISIX file-logger Plugin."},r=void 0,o={unversionedId:"plugins/file-logger",id:"plugins/file-logger",isDocsHomePage:!1,title:"file-logger",description:"This document contains information about the Apache APISIX file-logger Plugin.",source:"@site/docs/apisix/plugins/file-logger.md",sourceDirName:"plugins",slug:"/plugins/file-logger",permalink:"/docs/apisix/next/plugins/file-logger",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/file-logger.md",tags:[],version:"current",frontMatter:{title:"file-logger",keywords:["APISIX","API Gateway","Plugin","File Logger"],description:"This document contains information about the Apache APISIX file-logger Plugin."},sidebar:"docs",previous:{title:"splunk-hec-logging",permalink:"/docs/apisix/next/plugins/splunk-hec-logging"},next:{title:"loggly",permalink:"/docs/apisix/next/plugins/loggly"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Metadata",id:"metadata",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"file-logger")," Plugin is used to push log streams to a specific location."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file-logger")," plugin can count request and response data for individual routes locally, which is useful for ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/next/debug-mode"},"debugging"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file-logger")," plugin can get ",(0,i.kt)("a",{parentName:"li",href:"/docs/apisix/next/apisix-variable"},"APISIX variables")," and ",(0,i.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/varindex.html"},"NGINX variables"),", while ",(0,i.kt)("inlineCode",{parentName:"li"},"access.log")," can only use NGINX variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file-logger")," plugin support hot-loaded so that we can change its configuration at any time with immediate effect."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file-logger")," plugin saves every data in JSON format."),(0,i.kt)("li",{parentName:"ul"},"The user can modify the functions executed by the ",(0,i.kt)("inlineCode",{parentName:"li"},"file-logger")," during the ",(0,i.kt)("inlineCode",{parentName:"li"},"log phase")," to collect the information they want.")))),(0,i.kt)("h2",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"True"),(0,i.kt)("td",{parentName:"tr",align:null},"Log file path.")))),(0,i.kt)("h2",{id:"metadata"},"Metadata"),(0,i.kt)("p",null,"You can also set the format of the logs by configuring the Plugin metadata. The following configurations are available:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"log_format"),(0,i.kt)("td",{parentName:"tr",align:null},"object"),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,i.kt)("td",{parentName:"tr",align:null},"Log format declared as key value pairs in JSON format. Values only support strings. ",(0,i.kt)("a",{parentName:"td",href:"/docs/apisix/next/apisix-variable"},"APISIX")," or ",(0,i.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx")," variables can be used by prefixing the string with ",(0,i.kt)("inlineCode",{parentName:"td"},"$"),".")))),(0,i.kt)("p",null,"The example below shows how you can configure through the Admin API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/file-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "log_format": {\n    "host": "$host",\n    "@timestamp": "$time_iso8601",\n    "client_ip": "$remote_addr"\n  }\n}\'\n')),(0,i.kt)("p",null,"With this configuration, your logs would be formatted as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,i.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,i.kt)("p",null,"The example below shows how you can enable the Plugin on a specific Route:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "plugins": {\n    "file-logger": {\n      "path": "logs/file.log"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:9001": 1\n    }\n  },\n  "uri": "/hello"\n}\'\n')),(0,i.kt)("h2",{id:"example-usage"},"Example usage"),(0,i.kt)("p",null,"Now, if you make a request, it will be logged in the path you specified:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,i.kt)("p",null,"You will be able to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"file.log")," file in the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"logs")," directory."),(0,i.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,i.kt)("p",null,"To disable the ",(0,i.kt)("inlineCode",{parentName:"p"},"file-logger")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "methods": ["GET"],\n  "uri": "/hello",\n  "plugins": {},\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:9001": 1\n    }\n  }\n}\'\n')))}u.isMDXComponent=!0}}]);