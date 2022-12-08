"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[82891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68649:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Install Ingress APISIX on K3S and Rancher RKE"},i=void 0,o={unversionedId:"deployments/k3s-rke",id:"version-1.0.0/deployments/k3s-rke",isDocsHomePage:!1,title:"Install Ingress APISIX on K3S and Rancher RKE",description:"This document explains how to install Ingress APISIX on k3S and Rancher RKE.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.0.0/deployments/k3s-rke.md",sourceDirName:"deployments",slug:"/deployments/k3s-rke",permalink:"/docs/ingress-controller/1.0.0/deployments/k3s-rke",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.0.0/docs/en/latest/deployments/k3s-rke.md",tags:[],version:"1.0.0",frontMatter:{title:"Install Ingress APISIX on K3S and Rancher RKE"},sidebar:"version-1.0.0/docs",previous:{title:"Install Ingress APISIX on Google Cloud GKE",permalink:"/docs/ingress-controller/1.0.0/deployments/gke"},next:{title:"Install Ingress APISIX on KubeSphere",permalink:"/docs/ingress-controller/1.0.0/deployments/kubesphere"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,a.kt)("a",{parentName:"p",href:"https://k3s.io/"},"k3S")," and ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/products/rke/"},"Rancher RKE"),"."),(0,a.kt)("p",null,"K3S is a certified Kubernetes distribution built for IoT and Edge computing, whilst ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX")," is also good at IoT (See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/plugins/mqtt-proxy.md"},"MQTT plugin"),") and runs well on ARM architecture.\nIt's a good choice to use Ingress APISIX as the north-south API gateway in K3S."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/"},"K3S")," or ",(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/installation/"},"Rancher RKE"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,a.kt)("li",{parentName:"ul"},"Clone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,a.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,a.kt)("h2",{id:"install-apisix"},"Install APISIX"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add apisix https://charts.apiseven.com\n# Use `helm search repo apisix` to search charts about apisix\nhelm repo update\nhelm install apisix apisix/apisix \\\n  --set gateway.type=NodePort \\\n  --set admin.allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix \\\n  --kubeconfig /etc/rancher/k3s/k3s.yaml\nkubectl get service --namespace ingress-apisix\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you are using K3S, the default kubeconfig file is in /etc/rancher/k3s and root permission may required.")),(0,a.kt)("p",null,"Two Service resources were created, one is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"NodePort"),", so that clients can access Apache APISIX through the Node IPs and the assigned port.\nIf you are using K3S and you want to expose a ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, try to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/k3s-io/klipper-lb"},"Klipper"),"."),(0,a.kt)("p",null,"Another thing should be concerned that the ",(0,a.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the Pod CIDR settings(see ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/k3s/latest/en/installation/install-options/server-config/#networking"},"K3S")," or ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.x/en/cluster-provisioning/rke-clusters/options/#cluster-config-file"},"Rancher RKE"),", so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),(0,a.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,a.kt)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller apisix/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix \\\n  --kubeconfig /etc/rancher/k3s/k3s.yaml\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"If you are using K3S, the default kubeconfig file is in /etc/rancher/k3s and root permission may required.")),(0,a.kt)("p",null,"The admin key used in above mentioned commands is the default one, if you change the admin key configuration when you deployed APISIX, please remember to change it here."),(0,a.kt)("p",null,"Change the ",(0,a.kt)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the corresponding pods are running."),(0,a.kt)("p",null,"Now try to create some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.0.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}c.isMDXComponent=!0}}]);