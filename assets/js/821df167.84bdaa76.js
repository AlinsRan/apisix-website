"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[39545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,u=h["".concat(o,".").concat(m)]||h[m]||d[m]||i;return n?a.createElement(u,s(s({ref:t},c),{},{components:n})):a.createElement(u,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=h;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},68862:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"Install Ingress APISIX on ACK"},s=void 0,l={unversionedId:"deployments/ack",id:"version-1.0.0/deployments/ack",isDocsHomePage:!1,title:"Install Ingress APISIX on ACK",description:"This document explains how to install Ingress APISIX on ali-cloud ACK.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.0.0/deployments/ack.md",sourceDirName:"deployments",slug:"/deployments/ack",permalink:"/docs/ingress-controller/1.0.0/deployments/ack",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.0.0/docs/en/latest/deployments/ack.md",tags:[],version:"1.0.0",frontMatter:{title:"Install Ingress APISIX on ACK"},sidebar:"version-1.0.0/docs",previous:{title:"Proxy the httpbin service",permalink:"/docs/ingress-controller/1.0.0/practices/proxy-the-httpbin-service"},next:{title:"Install Ingress APISIX on Amazon EKS",permalink:"/docs/ingress-controller/1.0.0/deployments/aws"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],p={toc:o};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,r.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/kubernetes"},"ali-cloud ACK"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create an ACK Service on ali-cloud."),(0,r.kt)("li",{parentName:"ul"},"Download the kube config for your ACK, follow the ",(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/zh/doc-detail/86378.html"},"introduction"),"."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,r.kt)("li",{parentName:"ul"},"Clone ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl")," operations thorough this document will be executed in namespace ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,r.kt)("h2",{id:"install-apisix"},"Install APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add apisix https://charts.apiseven.com\n# Use `helm search repo apisix` to search charts about apisix\nhelm repo update\nhelm install apisix apisix/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set admin.allow.ipList="{0.0.0.0/0}" \\\n  --set etcd.persistence.storageClass="alicloud-disk-ssd" \\\n  --set etcd.persistence.size="20Gi" \\\n  --namespace ingress-apisix \\\nkubectl get service --namespace ingress-apisix\n')),(0,r.kt)("p",null,"Two Service resources were created, one is ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,r.kt)("p",null,"The gateway service type is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (See ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/182218.htm"},"Access services through SLB")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer ip by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,r.kt)("p",null,"Another thing should be concerned that the ",(0,r.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/en/doc-detail/86500.htm"},"Pod CIRD configuration of ACK"),", so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ACK")," PV require min_size is ",(0,r.kt)("inlineCode",{parentName:"p"},"20Gi"),",cluster with ",(0,r.kt)("inlineCode",{parentName:"p"},"flexVolume")," component select ",(0,r.kt)("inlineCode",{parentName:"p"},"alicloud-disk-ssd"),",if with ",(0,r.kt)("inlineCode",{parentName:"p"},"helm values.yml")," configure startup ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix"),",",(0,r.kt)("a",{parentName:"p",href:"https://hub.kubeapps.com/charts/bitnami/etcd"},"more helm etcd configure"),",configure format sample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'etcd:\n  persistence:\n    storageClass: "alicloud-disk-ssd"\n    size: 20Gi\n')),(0,r.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,r.kt)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller apisix/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to Wait for while until the corresponding pods are running."),(0,r.kt)("p",null,"Try to create some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.0.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}c.isMDXComponent=!0}}]);