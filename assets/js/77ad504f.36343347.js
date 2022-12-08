"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[78535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67699:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const r={title:"Deployment Role"},o=void 0,i={unversionedId:"architecture-design/deployment-role",id:"version-2.15/architecture-design/deployment-role",isDocsHomePage:!1,title:"Deployment Role",description:"Previously, the DP (Data Plane) and the CP (Control Plane) are not separate explicitly.",source:"@site/docs-apisix_versioned_docs/version-2.15/architecture-design/deployment-role.md",sourceDirName:"architecture-design",slug:"/architecture-design/deployment-role",permalink:"/docs/apisix/2.15/architecture-design/deployment-role",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.15/docs/en/latest/architecture-design/deployment-role.md",tags:[],version:"2.15",frontMatter:{title:"Deployment Role"},sidebar:"version-2.15/docs",previous:{title:"Debug Mode",permalink:"/docs/apisix/2.15/architecture-design/debug-mode"},next:{title:"API Gateway",permalink:"/docs/apisix/2.15/terminology/api-gateway"}},c=[{value:"Concept",id:"concept",children:[]},{value:"Deployment Modes",id:"deployment-modes",children:[{value:"Traditional",id:"traditional",children:[]},{value:"Decoupled",id:"decoupled",children:[]},{value:"Standalone",id:"standalone",children:[]}]}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"concept"},"Concept"),(0,l.kt)("p",null,"Previously, the DP (Data Plane) and the CP (Control Plane) are not separate explicitly."),(0,l.kt)("p",null,"Although we clearly distinguish the different responsibilities of DP and CP in the documentation, not everyone has correctly deployed APISIX in the production environment."),(0,l.kt)("p",null,"Therefore, we introduce new concepts called deployment modes/roles, to help users deploy APISIX easily and safely."),(0,l.kt)("p",null,"APISIX under different deployment modes will act differently."),(0,l.kt)("p",null,"The table below shows the relationship among deployment modes and roles:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Deployment Modes"),(0,l.kt)("th",{parentName:"tr",align:null},"Role"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"traditional"),(0,l.kt)("td",{parentName:"tr",align:null},"traditional"),(0,l.kt)("td",{parentName:"tr",align:null},"DP + CP are deployed together by default. People need to disable ",(0,l.kt)("inlineCode",{parentName:"td"},"enable_admin")," manually")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"decoupled"),(0,l.kt)("td",{parentName:"tr",align:null},"data_plane / control_plane"),(0,l.kt)("td",{parentName:"tr",align:null},"DP and CP are deployed independently.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"standalone"),(0,l.kt)("td",{parentName:"tr",align:null},"data_plane"),(0,l.kt)("td",{parentName:"tr",align:null},"Only DP, load the all configurations from local yaml file")))),(0,l.kt)("h2",{id:"deployment-modes"},"Deployment Modes"),(0,l.kt)("h3",{id:"traditional"},"Traditional"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.15/docs/assets/images/deployment-traditional.png",alt:"traditional"})),(0,l.kt)("p",null,"In the traditional deployment mode, one instance can be both DP & CP."),(0,l.kt)("p",null,"There will be a ",(0,l.kt)("inlineCode",{parentName:"p"},"conf server")," listens on UNIX socket and acts as a proxy between APISIX and etcd."),(0,l.kt)("p",null,"Both the DP part and CP part of the instance will connect to the ",(0,l.kt)("inlineCode",{parentName:"p"},"conf server")," via HTTP protocol."),(0,l.kt)("p",null,"Here is the example of configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: traditional\n    role_traditional:\n        config_provider: etcd\n    etcd:\n       host:\n           - http://xxxx\n       prefix: /apisix\n       timeout: 30\n")),(0,l.kt)("h3",{id:"decoupled"},"Decoupled"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/release/2.15/docs/assets/images/deployment-cp_and_dp.png",alt:"decoupled"})),(0,l.kt)("p",null,"The instance deployed as data_plane will:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Fetch configurations from the CP, the default port is 9280"),(0,l.kt)("li",{parentName:"ol"},"Before the DP service starts, it will perform a health check on all CP addresses",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If all CP addresses are unavailable, the startup fails and an exception message is output to the screen."),(0,l.kt)("li",{parentName:"ul"},"If at least one CP address is available, print the unhealthy CP check result log, and then start the APISIX service."),(0,l.kt)("li",{parentName:"ul"},"If all CP addresses are normal, start the APISIX service normally."))),(0,l.kt)("li",{parentName:"ol"},"Handle user requests.")),(0,l.kt)("p",null,"Here is the example of configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: data_plane\n    role_data_plane:\n       config_provider: control_plane\n       control_plane:\n           host:\n               - xxxx:9280\n           timeout: 30\n    certs:\n        cert: /path/to/ca-cert\n        cert_key: /path/to/ca-cert\n        trusted_ca_cert: /path/to/ca-cert\n")),(0,l.kt)("p",null,"The instance deployed as control_plane will:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Listen on 9180 by default, and provide Admin API for Admin user"),(0,l.kt)("li",{parentName:"ol"},"Provide ",(0,l.kt)("inlineCode",{parentName:"li"},"conf server")," which listens on port 9280 by default. Both the DP instances and this CP instance will connect to the ",(0,l.kt)("inlineCode",{parentName:"li"},"conf server")," via HTTPS enforced by mTLS.")),(0,l.kt)("p",null,"Here is the example of configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plan:\n        config_provider: etcd\n        conf_server:\n            listen: 0.0.0.0:9280\n            cert: /path/to/ca-cert\n            cert_key: /path/to/ca-cert\n            client_ca_cert: /path/to/ca-cert\n    etcd:\n       host:\n           - https://xxxx\n       prefix: /apisix\n       timeout: 30\n    certs:\n        cert: /path/to/ca-cert\n        cert_key: /path/to/ca-cert\n        trusted_ca_cert: /path/to/ca-cert\n")),(0,l.kt)("p",null,"As OpenResty <= 1.21.4 doesn't support sending mTLS request, if you need to accept the connections from APISIX running on these OpenResty versions,\nyou need to disable client certificate verification in the CP instance."),(0,l.kt)("p",null,"Here is the example of configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plan:\n        config_provider: etcd\n        conf_server:\n            listen: 0.0.0.0:9280\n            cert: /path/to/ca-cert\n            cert_key: /path/to/ca-cert\n    etcd:\n       host:\n           - https://xxxx\n       prefix: /apisix\n       timeout: 30\n    certs:\n        trusted_ca_cert: /path/to/ca-cert\n")),(0,l.kt)("h3",{id:"standalone"},"Standalone"),(0,l.kt)("p",null,"In this mode, APISIX is deployed as DP and reads configurations from yaml file in the local file system."),(0,l.kt)("p",null,"Here is the example of configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: data_plane\n    role_data_plane:\n       config_provider: yaml\n")))}d.isMDXComponent=!0}}]);