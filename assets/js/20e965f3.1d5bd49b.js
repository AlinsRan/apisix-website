"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[79692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=s,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},37019:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));const i={title:"APISIX Ingress Controller the Hard Way"},r=void 0,o={unversionedId:"tutorials/the-hard-way",id:"tutorials/the-hard-way",isDocsHomePage:!1,title:"APISIX Ingress Controller the Hard Way",description:"In this tutorial, we will install APISIX and APISIX Ingress Controller in Kubernetes from native yaml.",source:"@site/docs/apisix-ingress-controller/tutorials/the-hard-way.md",sourceDirName:"tutorials",slug:"/tutorials/the-hard-way",permalink:"/docs/ingress-controller/next/tutorials/the-hard-way",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/tutorials/the-hard-way.md",tags:[],version:"current",frontMatter:{title:"APISIX Ingress Controller the Hard Way"},sidebar:"docs",previous:{title:"Configuring Mutual Authentication via ApisixTls",permalink:"/docs/ingress-controller/next/tutorials/mtls"},next:{title:"Proxy the httpbin service with Ingress",permalink:"/docs/ingress-controller/next/tutorials/proxy-the-httpbin-service-with-ingress"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"ETCD Installation",id:"etcd-installation",children:[]},{value:"APISIX Installation",id:"apisix-installation",children:[]},{value:"HTTPBIN service",id:"httpbin-service",children:[]},{value:"Define Route",id:"define-route",children:[]},{value:"Install APISIX Ingress Controller",id:"install-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this tutorial, we will install APISIX and APISIX Ingress Controller in Kubernetes from native yaml."),(0,s.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,s.kt)("p",null,"If you don't have a Kubernetes cluster to use, we recommend you to use ",(0,s.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"kind")," to create a local Kubernetes cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns apisix\n")),(0,s.kt)("p",null,"In this tutorial, all our operations will be performed at namespace ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix"),"."),(0,s.kt)("h2",{id:"etcd-installation"},"ETCD Installation"),(0,s.kt)("p",null,"Here, we will deploy a single-node ETCD cluster without authentication inside the Kubernetes cluster."),(0,s.kt)("p",null,"In this case, we assume you have a storage provisioner. If you are using KiND, a local path provisioner will be created automatically. If you don't have a storage provisioner or don't want to use persistence volume, you could use an ",(0,s.kt)("inlineCode",{parentName:"p"},"emptyDir")," as volume."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'# etcd-headless.yaml\napiVersion: v1\nkind: Service\nmetadata:\n  name: etcd-headless\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: etcd\n  annotations:\n    service.alpha.kubernetes.io/tolerate-unready-endpoints: "true"\nspec:\n  type: ClusterIP\n  clusterIP: None\n  ports:\n    - name: "client"\n      port: 2379\n      targetPort: client\n    - name: "peer"\n      port: 2380\n      targetPort: peer\n  selector:\n    app.kubernetes.io/name: etcd\n---\n# etcd.yaml\napiVersion: apps/v1\nkind: StatefulSet\nmetadata:\n  name: etcd\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: etcd\nspec:\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: etcd\n  serviceName: etcd-headless\n  podManagementPolicy: Parallel\n  replicas: 1\n  updateStrategy:\n    type: RollingUpdate\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: etcd\n    spec:\n      securityContext:\n        fsGroup: 1001\n        runAsUser: 1001\n      containers:\n        - name: etcd\n          image: docker.io/bitnami/etcd:3.4.14-debian-10-r0\n          imagePullPolicy: "IfNotPresent"\n          # command:\n            # - /scripts/setup.sh\n          env:\n            - name: BITNAMI_DEBUG\n              value: "false"\n            - name: MY_POD_IP\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            - name: MY_POD_NAME\n              valueFrom:\n                fieldRef:\n                  fieldPath: metadata.name\n            - name: ETCDCTL_API\n              value: "3"\n            - name: ETCD_NAME\n              value: "$(MY_POD_NAME)"\n            - name: ETCD_DATA_DIR\n              value: /etcd/data\n            - name: ETCD_ADVERTISE_CLIENT_URLS\n              value: "http://$(MY_POD_NAME).etcd-headless.apisix.svc.cluster.local:2379"\n            - name: ETCD_LISTEN_CLIENT_URLS\n              value: "http://0.0.0.0:2379"\n            - name: ETCD_INITIAL_ADVERTISE_PEER_URLS\n              value: "http://$(MY_POD_NAME).etcd-headless.apisix.svc.cluster.local:2380"\n            - name: ETCD_LISTEN_PEER_URLS\n              value: "http://0.0.0.0:2380"\n            - name: ALLOW_NONE_AUTHENTICATION\n              value: "yes"\n          ports:\n            - name: client\n              containerPort: 2379\n            - name: peer\n              containerPort: 2380\n          volumeMounts:\n            - name: data\n              mountPath: /etcd\n      # If you don\'t have a storage provisioner or don\'t want to use persistence volume, you could use an `emptyDir` as follow.\n      # volumes:\n      #   - name: data\n      #     emptyDir: {}\n  volumeClaimTemplates:\n    - metadata:\n        name: data\n      spec:\n        accessModes:\n          - "ReadWriteOnce"\n        resources:\n          requests:\n            storage: "8Gi"\n')),(0,s.kt)("p",null,"Apply these two yaml files to Kubernetes, wait few seconds, etcd installation should be successful. We could run a health check to ensure that."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl -n apisix exec -it etcd-0 -- etcdctl endpoint health\n127.0.0.1:2379 is healthy: successfully committed proposal: took = 1.741883ms\n")),(0,s.kt)("p",null,"Please notice that this etcd installation is quite simple and lack of many necessary production features, it should only be used for learning case. If you want to deploy a production-ready etcd, please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://bitnami.com/stack/etcd/helm"},"bitnami/etcd"),"."),(0,s.kt)("h2",{id:"apisix-installation"},"APISIX Installation"),(0,s.kt)("p",null,"Create a config file for our APISIX. We are going to deploy APISIX version 2.5."),(0,s.kt)("p",null,"Note that the APISIX ingress controller needs to communicate with the APISIX admin API, so we set ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix.allow_admin")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0")," for test."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: apisix-conf\n  namespace: apisix\ndata:\n  config.yaml: |-\n    apisix:\n      node_listen: 9080             # APISIX listening port\n      enable_heartbeat: true\n      enable_admin: true\n      enable_admin_cors: true\n      enable_debug: false\n      enable_dev_mode: false          # Sets nginx worker_processes to 1 if set to true\n      enable_reuseport: true          # Enable nginx SO_REUSEPORT switch if set to true.\n      enable_ipv6: true\n      config_center: etcd             # etcd: use etcd to store the config value\n\n      allow_admin:                  # http://nginx.org/en/docs/http/ngx_http_access_module.html#allow\n        - 0.0.0.0/0\n      port_admin: 9180\n\n      # Default token when use API to call for Admin API.\n      # *NOTE*: Highly recommended to modify this value to protect APISIX\'s Admin API.\n      # Disabling this configuration item means that the Admin API does not\n      # require any authentication.\n      admin_key:\n        # admin: can everything for configuration data\n        - name: "admin"\n          key: edd1c9f034335f136f87ad84b625c8f1\n          role: admin\n        # viewer: only can view configuration data\n        - name: "viewer"\n          key: 4054f7cf07e344346cd3f287985e76a2\n          role: viewer\n      # dns_resolver:\n      #   - 127.0.0.1\n      dns_resolver_valid: 30\n      resolver_timeout: 5\n\n    nginx_config:                     # config for render the template to generate nginx.conf\n      error_log: "/dev/stderr"\n      error_log_level: "warn"         # warn,error\n      worker_rlimit_nofile: 20480     # the number of files a worker process can open, should be larger than worker_connections\n      event:\n        worker_connections: 10620\n      http:\n        access_log: "/dev/stdout"\n        keepalive_timeout: 60s         # timeout during which a keep-alive client connection will stay open on the server side.\n        client_header_timeout: 60s     # timeout for reading client request header, then 408 (Request Time-out) error is returned to the client\n        client_body_timeout: 60s       # timeout for reading client request body, then 408 (Request Time-out) error is returned to the client\n        send_timeout: 10s              # timeout for transmitting a response to the client.then the connection is closed\n        underscores_in_headers: "on"   # default enables the use of underscores in client request header fields\n        real_ip_header: "X-Real-IP"    # http://nginx.org/en/docs/http/ngx_http_realip_module.html#real_ip_header\n        real_ip_from:                  # http://nginx.org/en/docs/http/ngx_http_realip_module.html#set_real_ip_from\n          - 127.0.0.1\n          - \'unix:\'\n\n    etcd:\n      host:\n        - "http://etcd-headless.apisix.svc.cluster.local:2379"\n      prefix: "/apisix"     # apisix configurations prefix\n      timeout: 30   # seconds\n    plugins:                          # plugin list\n      - api-breaker\n      - authz-keycloak\n      - basic-auth\n      - batch-requests\n      - consumer-restriction\n      - cors\n      - echo\n      - fault-injection\n      - grpc-transcode\n      - hmac-auth\n      - http-logger\n      - ip-restriction\n      - jwt-auth\n      - kafka-logger\n      - key-auth\n      - limit-conn\n      - limit-count\n      - limit-req\n      - node-status\n      - openid-connect\n      - prometheus\n      - proxy-cache\n      - proxy-mirror\n      - proxy-rewrite\n      - redirect\n      - referer-restriction\n      - request-id\n      - request-validation\n      - response-rewrite\n      - serverless-post-function\n      - serverless-pre-function\n      - sls-logger\n      - syslog\n      - tcp-logger\n      - udp-logger\n      - uri-blocker\n      - wolf-rbac\n      - zipkin\n      - traffic-split\n    stream_plugins:\n      - mqtt-proxy\n')),(0,s.kt)("p",null,"Please make sure ",(0,s.kt)("inlineCode",{parentName:"p"},"etcd.host")," matches the headless service we created at first. In our case, it's ",(0,s.kt)("inlineCode",{parentName:"p"},"http://etcd-headless.apisix.svc.cluster.local:2379"),"."),(0,s.kt)("p",null,"In this config, we defined an access key with the ",(0,s.kt)("inlineCode",{parentName:"p"},"admin")," name under the ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix.admin_key")," section. This key is our API key, will be used to control APISIX later. This key is the default API key for APISIX, and it should be changed in production environments."),(0,s.kt)("p",null,"Save this as ",(0,s.kt)("inlineCode",{parentName:"p"},"config.yaml"),", then run ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl -n apisix create cm apisix-conf --from-file ./config.yaml")," to create configmap. Later we will mount this configmap into APISIX deployment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: apisix\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: apisix\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: apisix\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: apisix\n    spec:\n      containers:\n        - name: apisix\n          image: "apache/apisix:2.5-alpine"\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 9080\n              protocol: TCP\n            - name: tls\n              containerPort: 9443\n              protocol: TCP\n            - name: admin\n              containerPort: 9180\n              protocol: TCP\n          readinessProbe:\n            failureThreshold: 6\n            initialDelaySeconds: 10\n            periodSeconds: 10\n            successThreshold: 1\n            tcpSocket:\n              port: 9080\n            timeoutSeconds: 1\n          lifecycle:\n            preStop:\n              exec:\n                command:\n                - /bin/sh\n                - -c\n                - "sleep 30"\n          volumeMounts:\n            - mountPath: /usr/local/apisix/conf/config.yaml\n              name: apisix-config\n              subPath: config.yaml\n          resources: {}\n      volumes:\n        - configMap:\n            name: apisix-conf\n          name: apisix-config\n')),(0,s.kt)("p",null,"Now, APISIX should be ready to use. Use ",(0,s.kt)("inlineCode",{parentName:"p"},"kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name")," to list APISIX pod name. Here we assume the pod name is ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-7644966c4d-cl4k6"),"."),(0,s.kt)("p",null,"Let's have a check:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it apisix-7644966c4d-cl4k6 -- curl http://127.0.0.1:9080\n")),(0,s.kt)("p",null,"If you are using Linux or macOS, run the command below in bash:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl http://127.0.0.1:9080\n")),(0,s.kt)("p",null,"If APISIX works properly, it should output: ",(0,s.kt)("inlineCode",{parentName:"p"},'{"error_msg":"404 Route Not Found"}'),". Because we haven't defined any route yet."),(0,s.kt)("h2",{id:"httpbin-service"},"HTTPBIN service"),(0,s.kt)("p",null,"Before configuring the APISIX, we need to create a test service. We use ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," here. We put this httpbin service in ",(0,s.kt)("inlineCode",{parentName:"p"},"demo")," namespace."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create ns demo\nkubectl -n demo run httpbin --image-pull-policy=IfNotPresent --image kennethreitz/httpbin --port 80\nkubectl -n demo expose pod httpbin --port 80\n")),(0,s.kt)("p",null,"After the httpbin service started, we should be able to access it inside the APISIX pod via service."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl http://httpbin.demo/get\n")),(0,s.kt)("p",null,"This should output the request's query parameters, for example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.demo",\n    "User-Agent": "curl/7.67.0"\n  },\n  "origin": "172.17.0.1",\n  "url": "http://httpbin.demo/get"\n}\n')),(0,s.kt)("p",null,"To read more, please refer to ",(0,s.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/getting-started"},"Getting Started"),"."),(0,s.kt)("h2",{id:"define-route"},"Define Route"),(0,s.kt)("p",null,"Now, we can define the route for proxying HTTPBIN service traffic through APISIX."),(0,s.kt)("p",null,"Assuming we want to route all traffic which URI has ",(0,s.kt)("inlineCode",{parentName:"p"},"/httpbin")," prefix and the request contains ",(0,s.kt)("inlineCode",{parentName:"p"},"Host: httpbin.org")," header."),(0,s.kt)("p",null,"Please notice that the admin port is ",(0,s.kt)("inlineCode",{parentName:"p"},"9180"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{\n  "uri": "/*",\n  "host": "httpbin.org",\n  "upstream": {\n    "type": "roundrobin",\n    "nodes": {\n      "httpbin.demo:80": 1\n    }\n  }\n}\'\n')),(0,s.kt)("p",null,"The output would be like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"action":"set","node":{"key":"\\/apisix\\/routes\\/1","value":{"status":1,"create_time":1621408897,"upstream":{"pass_host":"pass","type":"roundrobin","hash_on":"vars","nodes":{"httpbin.demo:80":1},"scheme":"http"},"update_time":1621408897,"priority":0,"host":"httpbin.org","id":"1","uri":"\\/*"}}}\n')),(0,s.kt)("p",null,"We could check route rules by ",(0,s.kt)("inlineCode",{parentName:"p"},"GET /apisix/admin/routes"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9180/apisix/admin/routes/1" -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1"\n')),(0,s.kt)("p",null,"It should output like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"action":"get","node":{"key":"\\/apisix\\/routes\\/1","value":{"upstream":{"pass_host":"pass","type":"roundrobin","scheme":"http","hash_on":"vars","nodes":{"httpbin.demo:80":1}},"id":"1","create_time":1621408897,"update_time":1621408897,"host":"httpbin.org","priority":0,"status":1,"uri":"\\/*"}},"count":"1"}\n')),(0,s.kt)("p",null,"Now, we can test the routing rule:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl \"http://127.0.0.1:9080/get\" -H 'Host: httpbin.org'\n")),(0,s.kt)("p",null,"It will output like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "httpbin.org",\n    "User-Agent": "curl/7.67.0",\n    "X-Forwarded-Host": "httpbin.org"\n  },\n  "origin": "127.0.0.1",\n  "url": "http://httpbin.org/get"\n}\n')),(0,s.kt)("h2",{id:"install-apisix-ingress-controller"},"Install APISIX Ingress Controller"),(0,s.kt)("p",null,"APISIX ingress controller can help you manage your configurations declaratively by using Kubernetes resources. Here we will install version 0.5.0."),(0,s.kt)("p",null,"Currently, the APISIX ingress controller supports both official Ingress resource or APISIX's CustomResourceDefinitions, which includes ApisixRoute and ApisixUpstream."),(0,s.kt)("p",null,"Before installing the APISIX controller, we need to create a service account and the corresponding ClusterRole to ensure that the APISIX ingress controller has sufficient permissions to access required resources."),(0,s.kt)("p",null,"Here is an example config from ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-helm-chart"},"apisix-helm-chart"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: apisix-ingress-controller\n  namespace: apisix\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: apisix-clusterrole\n  namespace: apisix\nrules:\n  - apiGroups:\n      - ""\n    resources:\n      - configmaps\n      - endpoints\n      - persistentvolumeclaims\n      - pods\n      - replicationcontrollers\n      - replicationcontrollers/scale\n      - serviceaccounts\n      - services\n      - secrets\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - bindings\n      - events\n      - limitranges\n      - namespaces/status\n      - pods/log\n      - pods/status\n      - replicationcontrollers/status\n      - resourcequotas\n      - resourcequotas/status\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - ""\n    resources:\n      - namespaces\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - apps\n    resources:\n      - controllerrevisions\n      - daemonsets\n      - deployments\n      - deployments/scale\n      - replicasets\n      - replicasets/scale\n      - statefulsets\n      - statefulsets/scale\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - autoscaling\n    resources:\n      - horizontalpodautoscalers\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - batch\n    resources:\n      - cronjobs\n      - jobs\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - extensions\n    resources:\n      - daemonsets\n      - deployments\n      - deployments/scale\n      - ingresses\n      - networkpolicies\n      - replicasets\n      - replicasets/scale\n      - replicationcontrollers/scale\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - policy\n    resources:\n      - poddisruptionbudgets\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - networking.k8s.io\n    resources:\n      - ingresses\n      - networkpolicies\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - metrics.k8s.io\n    resources:\n      - pods\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - apisix.apache.org\n    resources:\n      - apisixroutes\n      - apisixroutes/status\n      - apisixupstreams\n      - apisixupstreams/status\n      - apisixtlses\n      - apisixtlses/status\n      - apisixclusterconfigs\n      - apisixclusterconfigs/status\n      - apisixconsumers\n      - apisixconsumers/status\n    verbs:\n      - get\n      - list\n      - watch\n  - apiGroups:\n      - coordination.k8s.io\n    resources:\n      - leases\n    verbs:\n      - \'*\'\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: apisix-clusterrolebinding\n  namespace: apisix\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: apisix-clusterrole\nsubjects:\n  - kind: ServiceAccount\n    name: apisix-ingress-controller\n    namespace: apisix\n')),(0,s.kt)("p",null,"Then, we need to create ApisixRoute CRD:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/apache/apisix-ingress-controller.git --depth 1\ncd apisix-ingress-controller/\nkubectl apply -k samples/deploy/crd\n")),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"http://github.com/apache/apisix-ingress-controller/blob/master/samples/deploy/crd"},"samples")," for details."),(0,s.kt)("p",null,"To make the ingress controller works properly with APISIX, we need to create a config file containing the APISIX admin API URL and API key as below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\ndata:\n  config.yaml: |\n    # log options\n    log_level: "debug"\n    log_output: "stderr"\n    http_listen: ":8080"\n    enable_profiling: true\n    kubernetes:\n      kubeconfig: ""\n      resync_interval: "30s"\n      namespace_selector:\n      - "apisix.ingress=watching"\n      ingress_class: "apisix"\n      ingress_version: "networking/v1"\n      apisix_route_version: "apisix.apache.org/v2"\n    apisix:\n      default_cluster_base_url: "http://apisix-admin.apisix:9180/apisix/admin"\n      default_cluster_admin_key: "edd1c9f034335f136f87ad84b625c8f1"\nkind: ConfigMap\nmetadata:\n  name: apisix-configmap\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: ingress-controller\n')),(0,s.kt)("p",null,"If you want to learn all the configuration items, see ",(0,s.kt)("a",{parentName:"p",href:"http://github.com/apache/apisix-ingress-controller/blob/master/conf/config-default.yaml"},"conf/config-default.yaml")," for details."),(0,s.kt)("p",null,"Because the ingress controller needs to access APISIX admin API, we need to create a service for APISIX."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  name: apisix-admin\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: apisix\nspec:\n  type: ClusterIP\n  ports:\n  - name: apisix-admin\n    port: 9180\n    targetPort: 9180\n    protocol: TCP\n  selector:\n    app.kubernetes.io/name: apisix\n")),(0,s.kt)("p",null,"Because currently APISIX ingress controller doesn't 100% compatible with APISIX, we need to delete the previously created route in case of some data structure mismatch."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9180/apisix/admin/routes/1" -X DELETE -H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1"\n')),(0,s.kt)("p",null,"After these configurations, we could deploy the ingress controller now."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: apisix-ingress-controller\n  namespace: apisix\n  labels:\n    app.kubernetes.io/name: ingress-controller\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app.kubernetes.io/name: ingress-controller\n  template:\n    metadata:\n      labels:\n        app.kubernetes.io/name: ingress-controller\n    spec:\n      serviceAccountName: apisix-ingress-controller\n      volumes:\n        - name: configuration\n          configMap:\n            name: apisix-configmap\n            items:\n              - key: config.yaml\n                path: config.yaml\n      initContainers:\n        - name: wait-apisix-admin\n          image: busybox:1.28\n          command: ['sh', '-c', \"until nc -z apisix-admin.apisix.svc.cluster.local 9180 ; do echo waiting for apisix-admin; sleep 2; done;\"]\n      containers:\n        - name: ingress-controller\n          command:\n            - /ingress-apisix/apisix-ingress-controller\n            - ingress\n            - --config-path\n            - /ingress-apisix/conf/config.yaml\n          image: \"apache/apisix-ingress-controller:1.4.0\"\n          imagePullPolicy: IfNotPresent\n          ports:\n            - name: http\n              containerPort: 8080\n              protocol: TCP\n          livenessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080\n          readinessProbe:\n            httpGet:\n              path: /healthz\n              port: 8080\n          resources:\n            {}\n          volumeMounts:\n            - mountPath: /ingress-apisix/conf\n              name: configuration\n")),(0,s.kt)("p",null,"In this deployment, we mount the configmap created above as a config file, and tell Kubernetes to use the service account ",(0,s.kt)("inlineCode",{parentName:"p"},"apisix-ingress-controller"),"."),(0,s.kt)("p",null,"After the ingress controller status is converted to ",(0,s.kt)("inlineCode",{parentName:"p"},"Running"),", we could create an ApisixRoute resource and observe its behaviors."),(0,s.kt)("p",null,"Here is an example ApisixRoute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\n  namespace: demo\nspec:\n  http:\n  - name: httpbin\n    match:\n      hosts:\n      - local.httpbin.org\n      paths:\n      - /*\n    backends:\n      - serviceName: httpbin\n        servicePort: 80\n")),(0,s.kt)("p",null,"Note that the apiVersion field should match the configmap above. And the serviceName should match the exposed service name, it's ",(0,s.kt)("inlineCode",{parentName:"p"},"httpbin")," here."),(0,s.kt)("p",null,"Before create it, let's ensure requests with header ",(0,s.kt)("inlineCode",{parentName:"p"},"Host: local.http.demo")," will returns 404:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl \"http://127.0.0.1:9080/get\" -H 'Host: local.httpbin.org'\n")),(0,s.kt)("p",null,"It will return:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"error_msg":"404 Route Not Found"}\n')),(0,s.kt)("p",null,"The ApisixRoute should be applied in the same namespace with the target service, in this case is ",(0,s.kt)("inlineCode",{parentName:"p"},"demo"),". After applying it, let's check if it works."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'kubectl -n apisix exec -it $(kubectl get pods -n apisix -l app.kubernetes.io/name=apisix -o name) -- curl "http://127.0.0.1:9080/get" -H "Host: local.httpbin.org"\n')),(0,s.kt)("p",null,"It should return:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Host": "local.httpbin.org",\n    "User-Agent": "curl/7.67.0",\n    "X-Forwarded-Host": "local.httpbin.org"\n  },\n  "origin": "127.0.0.1",\n  "url": "http://local2.httpbin.org/get"\n}\n')),(0,s.kt)("p",null,"That's all! Enjoy your journey with APISIX and APISIX ingress controller!"))}c.isMDXComponent=!0}}]);