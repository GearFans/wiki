"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7958],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(g,l(l({ref:n},p),{},{components:t})):r.createElement(g,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2430:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],i={sidebar_label:"\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210\u670d\u52a1",sidebar_position:2},s="\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210 Linux \u670d\u52a1",u={unversionedId:"node/node-as-service",id:"node/node-as-service",title:"\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210 Linux \u670d\u52a1",description:"\u524d\u671f\u51c6\u5907",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/node/node-as-service.mdx",sourceDirName:"node",slug:"/node/node-as-service",permalink:"/zh-cn/node/node-as-service",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/node/node-as-service.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210\u670d\u52a1",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u8282\u70b9",permalink:"/zh-cn/node/setting-up"},next:{title:"\u8282\u70b9\u76d1\u63a7",permalink:"/zh-cn/node/telemetry"}},p={},c=[{value:"\u524d\u671f\u51c6\u5907",id:"\u524d\u671f\u51c6\u5907",level:2},{value:"\u914d\u7f6e\u670d\u52a1",id:"\u914d\u7f6e\u670d\u52a1",level:2},{value:"\u8fd0\u884c\u8282\u70b9",id:"\u8fd0\u884c\u8282\u70b9",level:2},{value:"\u68c0\u67e5\u65e5\u5fd7",id:"\u68c0\u67e5\u65e5\u5fd7",level:2},{value:"\u66f4\u65b0\u8282\u70b9\u7248\u672c",id:"\u66f4\u65b0\u8282\u70b9\u7248\u672c",level:2},{value:"\u5220\u9664\u8282\u70b9",id:"\u5220\u9664\u8282\u70b9",level:2}],d={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210-linux-\u670d\u52a1"},"\u5c06\u8282\u70b9\u7a0b\u5e8f\u914d\u7f6e\u6210 Linux \u670d\u52a1"),(0,o.kt)("h2",{id:"\u524d\u671f\u51c6\u5907"},"\u524d\u671f\u51c6\u5907"),(0,o.kt)("p",null,"\u4f60\u9700\u8981\u4f9d\u636e\u81ea\u5df1\u7684\u64cd\u4f5c\u7cfb\u7edf\u4e0b\u8f7d\u6216\u8005\u81ea\u884c\u7f16\u8bd1 ",(0,o.kt)("inlineCode",{parentName:"p"},"gear-node")," \u53ef\u6267\u884c\u6587\u4ef6\u3002",(0,o.kt)("a",{parentName:"p",href:"https://wiki.gear-tech.io/node/setting-up#install-with-pre-build-binary"},"\u66f4\u591a\u4fe1\u606f"),"\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u670d\u52a1"},"\u914d\u7f6e\u670d\u52a1"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5c06 Gear \u8282\u70b9\u7a0b\u5e8f\u4f5c\u4e3a Linux \u7684\u670d\u52a1\uff0c\u4f60\u9700\u8981\u53c2\u7167\u4ee5\u4e0b\u65b9\u5f0f\u6765\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," \u6587\u4ef6\uff1a"),(0,o.kt)("p",null,"\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u76ee\u5f55\u5f00\u59cb:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /etc/systemd/system\nsudo nano gear-node.service\n")),(0,o.kt)("p",null,"\u914d\u7f6e\u5e76\u4fdd\u5b58\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Gear Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=root\nWorkingDirectory=/root/\nExecStart=/root/gear-node --name 'NODE_NAME' --telemetry-url 'ws://telemetry-backend-shard.gear-tech.io:32001/submit 0'\nRestart=always\nRestartSec=3\nLimitNOFILE=10000\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"ExecStart")," \u6307\u5411 ",(0,o.kt)("inlineCode",{parentName:"p"},"gear-node")," \u4e8c\u8fdb\u5236\u6587\u4ef6\u6240\u5728\u7684\u4f4d\u7f6e\u3002\u5728\u793a\u4f8b\u4e2d\u662f\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"root")," \u76ee\u5f55\u3002\n\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5f15\u5165\u989d\u5916\u7684\u542f\u52a8\u53c2\u6570\uff0c\u4f46\u8fd9\u4e9b\u53c2\u6570\u5e76\u4e0d\u662f\u5fc5\u987b\u7684\u3002")),(0,o.kt)("h2",{id:"\u8fd0\u884c\u8282\u70b9"},"\u8fd0\u884c\u8282\u70b9"),(0,o.kt)("p",null,"\u5230\u8fd9\u91cc\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u542f\u52a8\u670d\u52a1\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start gear-node\n")),(0,o.kt)("p",null,"\u4f7f\u5176\u80fd\u591f\u968f\u7cfb\u7edf\u81ea\u52a8\u542f\u52a8\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable gear-node\n")),(0,o.kt)("p",null,"\u68c0\u67e5 ",(0,o.kt)("inlineCode",{parentName:"p"},"gear-node")," \u670d\u52a1\u72b6\u6001\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status gear-node\n")),(0,o.kt)("h2",{id:"\u68c0\u67e5\u65e5\u5fd7"},"\u68c0\u67e5\u65e5\u5fd7"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u53ef\u4ee5\u67e5\u770b\u670d\u52a1\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u gear-node\n")),(0,o.kt)("p",null,"\u4f7f\u7528\u5bfc\u822a\u952e\u6d4f\u89c8\u65e5\u5fd7\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"q"),"\u952e\u9000\u51fa\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0\u53c2\u6570",(0,o.kt)("inlineCode",{parentName:"p"},"-n 50"),"\u6765\u67e5\u770b\u6700\u540e50\u884c\u65e5\u5fd7\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u gear-node -n 50\n")),(0,o.kt)("p",null,"\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"-f"),"\u53c2\u6570\uff0c\u5728\u8fde\u7eed\u6a21\u5f0f\u4e0b\u67e5\u770b\u65e5\u5fd7\u7684\u6700\u540e\u4e00\u884c(\u6309Ctrl+C\u9000\u51fa)\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"journalctl -u gear-node -fn 50\n")),(0,o.kt)("h2",{id:"\u66f4\u65b0\u8282\u70b9\u7248\u672c"},"\u66f4\u65b0\u8282\u70b9\u7248\u672c"),(0,o.kt)("p",null,"\u4f60\u53ea\u9700\u8981\u628a\u8282\u70b9\u7684\u53ef\u6267\u884c\u6587\u4ef6\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"gear-node"),"\uff09\u66ff\u6362\u6210\u6700\u65b0\u7248\u672c\uff0c\u7136\u540e\u91cd\u65b0\u542f\u52a8\u6267\u884c\u3002\n\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684Linux\u53ef\u6267\u884c\u6587\u4ef6\u4f4d\u4e8e/root/gear-node\uff08\u5982\u6211\u4eec\u4e0a\u9762\u7684\u914d\u7f6e\uff09\uff0c\u4f60\u8981\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget https://builds.gear.rs/gear-nightly-linux-x86_64.tar.xz\nsudo tar -xvf gear-nightly-linux-x86_64.tar.xz -C /root\nrm gear-nightly-linux-x86_64.tar.xz\nsudo systemctl restart gear-node\n")),(0,o.kt)("h2",{id:"\u5220\u9664\u8282\u70b9"},"\u5220\u9664\u8282\u70b9"),(0,o.kt)("p",null,"\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u5220\u9664\u8282\u70b9\u7684\u5b58\u50a8\u3001\u670d\u52a1\u914d\u7f6e\u548c\u53ef\u6267\u884c\u6587\u4ef6\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl stop gear-node\nsudo systemctl disable gear-node\nsudo rm -rf /root/.local/share/gear-node\nsudo rm /etc/systemd/system/gear-node.service\nsudo rm /root/gear-node\n")))}m.isMDXComponent=!0}}]);