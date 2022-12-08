"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},55803:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"AEP-0001 Gateway API support"},o=void 0,i={unversionedId:"aeps/gateway-api",id:"version-1.5.0/aeps/gateway-api",isDocsHomePage:!1,title:"AEP-0001 Gateway API support",description:"Gateway API is dedicated to achieving expressive and scalable Kubernetes service networking through many custom resources.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.5.0/aeps/0001-gateway-api.md",sourceDirName:"aeps",slug:"/aeps/gateway-api",permalink:"/zh/docs/ingress-controller/aeps/gateway-api",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.5.0/docs/zh/latest/aeps/0001-gateway-api.md",tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{title:"AEP-0001 Gateway API support"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Motivation",id:"motivation",children:[{value:"Goals",id:"goals",children:[]},{value:"Non-Goals",id:"non-goals",children:[]}]},{value:"Proposal",id:"proposal",children:[]},{value:"Design Details",id:"design-details",children:[{value:"GatewayClass controller",id:"gatewayclass-controller",children:[]},{value:"Gateway controller",id:"gateway-controller",children:[]},{value:"HTTPRoute controller",id:"httproute-controller",children:[]},{value:"TLSRoute Controller",id:"tlsroute-controller",children:[]},{value:"TCPRoute Controller",id:"tcproute-controller",children:[]},{value:"UDPRoute Controller",id:"udproute-controller",children:[]},{value:"Test Plan",id:"test-plan",children:[]},{value:"Graduation Criteria",id:"graduation-criteria",children:[]}]},{value:"Production Readiness",id:"production-readiness",children:[]}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/gateway-api"},"Gateway API")," is dedicated to achieving expressive and scalable Kubernetes service networking through many custom resources."),(0,r.kt)("p",null,"Apache APISIX Ingress controller can realize richer functions by adding support for Gateway API, including Gateway management, multi-cluster support and other features."),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Improve ease of use"),(0,r.kt)("li",{parentName:"ul"},"Support lifecycle management of Apache APISIX Gateway")),(0,r.kt)("h3",{id:"goals"},"Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can bind the Apache APISIX Ingress controller with Gateway resources."),(0,r.kt)("li",{parentName:"ul"},"The traffic rules defined by the Gateway API are processed by the Apache APISIX Gateway")),(0,r.kt)("h3",{id:"non-goals"},"Non-Goals"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Supports all Gateway API versions and capabilities.")),(0,r.kt)("h2",{id:"proposal"},"Proposal"),(0,r.kt)("p",null,"Add support from the definition of HTTP routing. Mainly cover the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GatewayClass"),(0,r.kt)("li",{parentName:"ul"},"Gateway"),(0,r.kt)("li",{parentName:"ul"},"HTTPRoute"),(0,r.kt)("li",{parentName:"ul"},"TLSRoute"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("h2",{id:"design-details"},"Design Details"),(0,r.kt)("p",null,"We need to add a separate switch for the Gateway API to control whether to enable this feature, and add corresponding controllers for various resources."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg/ingress/gateway_class.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg/ingress/gateway.go")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pkg/ingress/http_route.go"))),(0,r.kt)("p",null,"These controllers can handle ",(0,r.kt)("inlineCode",{parentName:"p"},"gateway.networking.k8s.io/v1alpha2")," version of ",(0,r.kt)("inlineCode",{parentName:"p"},"GatewayClass"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Gateway")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPRoute")," resources."),(0,r.kt)("p",null,"For real traffic definition rules, it needs to be translated into rules in Apache APISIX."),(0,r.kt)("h3",{id:"gatewayclass-controller"},"GatewayClass controller"),(0,r.kt)("p",null,"For ",(0,r.kt)("inlineCode",{parentName:"p"},"GatewayClass")," resources, we need to have a unique identifier. We can define ",(0,r.kt)("inlineCode",{parentName:"p"},"controllerName = apisix.apache.org/gateway-controller")," in the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: gateway.networking.k8s.io/v1alpha2\nkind: GatewayClass\nmetadata:\n  name: apisix-lb\nspec:\n  controllerName: apisix.apache.org/gateway-controller\n")),(0,r.kt)("p",null,"After the creation is successful, you will see the following results."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ kubectl get gatewayclass\nNAME        CONTROLLER                             AGE\napisix-lb   apisix.apache.org/gateway-controller   7m\n")),(0,r.kt)("p",null,"We need to update its Status."),(0,r.kt)("h3",{id:"gateway-controller"},"Gateway controller"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"Gateway")," resource, we have two stages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Binding the existing Apache APISIX data plane;"),(0,r.kt)("li",{parentName:"ul"},"Create a self-managed Apache APISIX Gateway;")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: gateway.networking.k8s.io/v1alpha2\nkind: Gateway\nmetadata:\n  name: my-gateway\nspec:\n  gatewayClassName: apisix-lb\n  listeners:\n  - name: http\n    protocol: HTTP\n    port: 80\n")),(0,r.kt)("p",null,"After correct processing, you will get the following results:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u279c  ~ kubectl get gateway\nNAME         CLASS       ADDRESS   READY   AGE\nmy-gateway   apisix-lb   6.6.6.6   True    12m\n")),(0,r.kt)("h3",{id:"httproute-controller"},"HTTPRoute controller"),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTPRoute")," resource, we need to complete its translation to APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: gateway.networking.k8s.io/v1alpha2\nkind: HTTPRoute\nmetadata:\n  name: http-app-1\nspec:\n  parentRefs:\n  - name: my-gateway\n  hostnames:\n  - "foo.com"\n  rules:\n  - matches:\n    - path:\n        type: PathPrefix\n        value: /bar\n    backendRefs:\n    - name: my-service1\n      port: 8080\n  - matches:\n    - headers:\n      - type: Exact\n        name: magic\n        value: foo\n      queryParams:\n      - type: Exact\n        name: great\n        value: example\n      path:\n        type: PathPrefix\n        value: /some/thing\n      method: GET\n    backendRefs:\n    - name: my-service2\n      port: 8080\n')),(0,r.kt)("p",null,"Need to create the corresponding route on Apache APISIX."),(0,r.kt)("h3",{id:"tlsroute-controller"},"TLSRoute Controller"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"tcproute-controller"},"TCPRoute Controller"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"udproute-controller"},"UDPRoute Controller"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h3",{id:"test-plan"},"Test Plan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the e2e test case cover examples in the above document.")),(0,r.kt)("h3",{id:"graduation-criteria"},"Graduation Criteria"),(0,r.kt)("p",null,"TBD"),(0,r.kt)("h2",{id:"production-readiness"},"Production Readiness"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We already have perfect e2e coverage"),(0,r.kt)("li",{parentName:"ul"},"Gateway API reaches GA")))}c.isMDXComponent=!0}}]);