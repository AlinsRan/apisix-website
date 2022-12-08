"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[43687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},49928:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={title:"csrf",keywords:["APISIX","Plugin","Cross-site request forgery","csrf"],description:"The CSRF Plugin can be used to protect your API against CSRF attacks using the Double Submit Cookie method."},o=void 0,l={unversionedId:"plugins/csrf",id:"plugins/csrf",isDocsHomePage:!1,title:"csrf",description:"The CSRF Plugin can be used to protect your API against CSRF attacks using the Double Submit Cookie method.",source:"@site/docs/apisix/plugins/csrf.md",sourceDirName:"plugins",slug:"/plugins/csrf",permalink:"/docs/apisix/next/plugins/csrf",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/csrf.md",tags:[],version:"current",frontMatter:{title:"csrf",keywords:["APISIX","Plugin","Cross-site request forgery","csrf"],description:"The CSRF Plugin can be used to protect your API against CSRF attacks using the Double Submit Cookie method."},sidebar:"docs",previous:{title:"consumer-restriction",permalink:"/docs/apisix/next/plugins/consumer-restriction"},next:{title:"public-api",permalink:"/docs/apisix/next/plugins/public-api"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," Plugin can be used to protect your API against ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"CSRF attacks")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery#Double_Submit_Cookie"},"Double Submit Cookie")," method."),(0,r.kt)("p",null,"This Plugin considers the ",(0,r.kt)("inlineCode",{parentName:"p"},"GET"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"HEAD")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"OPTIONS")," methods to be safe operations (",(0,r.kt)("inlineCode",{parentName:"p"},"safe-methods"),") and such requests are not checked for interception by an attacker. Other methods are termed as ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafe-methods"),"."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"apisix-csrf-token")),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the token in the generated cookie.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expires"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"7200")),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration time in seconds of the CSRF cookie. Set to ",(0,r.kt)("inlineCode",{parentName:"td"},"0")," to skip checking expiration time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Secret key used to encrypt the cookie.")))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"The example below shows how you can enable the Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT-d \'\n{\n  "uri": "/hello",\n  "plugins": {\n    "csrf": {\n      "key": "edd1c9f034335f136f87ad84b625c8f1"\n    }\n  },\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:9001": 1\n    }\n  }\n}\'\n')),(0,r.kt)("p",null,"The Route is now protected and trying to access it with methods other than ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," will be blocked with a 401 status code."),(0,r.kt)("p",null,"Sending a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello")," endpoint will send back a cookie with an encrypted token. The name of the token can be set through the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute of the Plugin configuration and if unset, it defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-csrf-token"),"."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A new cookie is returned for each request."))),(0,r.kt)("p",null,"For subsequent requests with ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafe-methods"),", you need to read the encrypted token from the cookie and append the token to the request header by setting the field name to the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attribute in the Plugin configuration."),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"After you have configured the Plugin as shown above, trying to directly make a ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/hello")," Route will result in an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X POST\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"error_msg":"no csrf token in headers"}\n')),(0,r.kt)("p",null,"To get the cookie with the encrypted token, you can make a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nSet-Cookie: apisix-csrf-token=eyJyYW5kb20iOjAuNjg4OTcyMzA4ODM1NDMsImV4cGlyZXMiOjcyMDAsInNpZ24iOiJcL09uZEF4WUZDZGYwSnBiNDlKREtnbzVoYkJjbzhkS0JRZXVDQm44MG9ldz0ifQ==;path=/;Expires=Mon, 13-Dec-21 09:33:55 GMT\n")),(0,r.kt)("p",null,"This token must then be read from the cookie and added to the request header for subsequent ",(0,r.kt)("inlineCode",{parentName:"p"},"unsafe-methods")," requests."),(0,r.kt)("p",null,"For example, you can use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/js-cookie/js-cookie"},"js-cookie")," to read the cookie and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios"},"axios")," to send requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const token = Cookie.get('apisix-csrf-token');\n\nconst instance = axios.create({\n  headers: {'apisix-csrf-token': token}\n});\n")),(0,r.kt)("p",null,"Also make sure that you carry the cookie."),(0,r.kt)("p",null,"You can also use curl to send the request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello -X POST -H 'apisix-csrf-token: eyJyYW5kb20iOjAuNjg4OTcyMzA4ODM1NDMsImV4cGlyZXMiOjcyMDAsInNpZ24iOiJcL09uZEF4WUZDZGYwSnBiNDlKREtnbzVoYkJjbzhkS0JRZXVDQm44MG9ldz0ifQ==' -b 'apisix-csrf-token=eyJyYW5kb20iOjAuNjg4OTcyMzA4ODM1NDMsImV4cGlyZXMiOjcyMDAsInNpZ24iOiJcL09uZEF4WUZDZGYwSnBiNDlKREtnbzVoYkJjbzhkS0JRZXVDQm44MG9ldz0ifQ=='\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"csrf")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/hello",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "127.0.0.1:1980": 1\n    }\n  }\n}\'\n')))}u.isMDXComponent=!0}}]);