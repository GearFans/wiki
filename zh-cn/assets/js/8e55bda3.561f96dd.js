"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1194],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=s(r),m=a,f=b["".concat(l,".").concat(m)]||b[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1353:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_label:"WebAssembly (WASM)",sidebar_position:6},l="\u4ec0\u4e48\u662f WebAssembly(WASM)",s={unversionedId:"gear/WASM",id:"gear/WASM",title:"\u4ec0\u4e48\u662f WebAssembly(WASM)",description:"WebAssembly \u662f\u4e00\u79cd\u5c06 JavaScript \u4ee5\u5916\u7684\u7f16\u7a0b\u8bed\u8a00\u7684\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u7f51\u9875\u8fd0\u884c\u7684\u65b9\u5f0f\u3002\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0cWASM \u53ea\u662f\u4e00\u4e2a\u5728\u6240\u6709\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\u7684\u865a\u62df\u673a\uff0c\u4f46\u5728\u8fc7\u53bb\uff0c\u4f60\u9700\u8981\u4f7f\u7528 JavaScript \u6765\u8fd0\u884c\u7f51\u9875\u4e2d\u7684\u4ee3\u7801\uff0c\u800c WASM \u4f7f\u4f60\u6709\u53ef\u80fd\u5728 JavaScript \u4ee5\u5916\u7684\u7f16\u7a0b\u8bed\u8a00\u7684\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u4ee3\u7801\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/gear/WASM.md",sourceDirName:"gear",slug:"/gear/WASM",permalink:"/zh-cn/gear/WASM",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/gear/WASM.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_label:"WebAssembly (WASM)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5185\u5b58\u5e76\u884c",permalink:"/zh-cn/gear/memory-parallelism"},next:{title:"Polkadot",permalink:"/zh-cn/ecosystem/polkadot"}},u={},p=[],b={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4ec0\u4e48\u662f-webassemblywasm"},"\u4ec0\u4e48\u662f WebAssembly(WASM)"),(0,o.kt)("p",null,"WebAssembly \u662f\u4e00\u79cd\u5c06 JavaScript \u4ee5\u5916\u7684\u7f16\u7a0b\u8bed\u8a00\u7684\u5e94\u7528\u7a0b\u5e8f\u4f5c\u4e3a\u7f51\u9875\u8fd0\u884c\u7684\u65b9\u5f0f\u3002\u4ece\u672c\u8d28\u4e0a\u8bb2\uff0cWASM \u53ea\u662f\u4e00\u4e2a\u5728\u6240\u6709\u73b0\u4ee3\u6d4f\u89c8\u5668\u4e0a\u8fd0\u884c\u7684\u865a\u62df\u673a\uff0c\u4f46\u5728\u8fc7\u53bb\uff0c\u4f60\u9700\u8981\u4f7f\u7528 JavaScript \u6765\u8fd0\u884c\u7f51\u9875\u4e2d\u7684\u4ee3\u7801\uff0c\u800c WASM \u4f7f\u4f60\u6709\u53ef\u80fd\u5728 JavaScript \u4ee5\u5916\u7684\u7f16\u7a0b\u8bed\u8a00\u7684\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u7531\u4e8e\u6280\u672f\u7684\u7279\u6b8a\u6027\uff0cWebAssembly \u865a\u62df\u673a\uff0c\u7b80\u79f0 WASM\uff0c\u88ab\u8bc1\u660e\u6bd4\u4efb\u4f55\u5176\u4ed6\u865a\u62df\u673a\u90fd\u5feb\u3002WebAssembly \u7684\u4f7f\u7528\u4f7f Gear \u7684\u667a\u80fd\u5408\u7ea6\u80fd\u591f\u76f4\u63a5\u7f16\u8bd1\u6210\u673a\u5668\u4ee3\u7801\uff0c\u5e76\u4ee5\u63a5\u8fd1\u539f\u751f\u7684\u901f\u5ea6\u8fd0\u884c\u3002\u66f4\u9ad8\u7684\u901f\u5ea6\u610f\u5473\u7740\u66f4\u4f4e\u7684\u4ea4\u6613\u6210\u672c\u548c\u66f4\u9ad8\u7684\u6548\u7387\u3002"),(0,o.kt)("p",null,"\u6240\u6709 Gear \u7a0b\u5e8f\u548c\u667a\u80fd\u5408\u7ea6\u90fd\u662f\u4f5c\u4e3a WebAssembly \u7a0b\u5e8f\u8fd0\u884c\u7684\u3002\u8fd9\u610f\u5473\u7740\uff0c\u4f8b\u5982\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5c06\u4ed6\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5e26\u5230\u7f51\u7edc\u4e0a\uff0c\u5e76\u5728\u7f51\u7edc\u6d4f\u89c8\u5668\u4e2d\u5b9e\u73b0\u5e94\u7528\u7a0b\u5e8f\u7684\u5168\u90e8\u6027\u80fd--\u5b83\u4eec\u901a\u5e38\u5728 Windows \u6216 Mac \u4e0a\u8fd0\u884c\u539f\u751f\u7a0b\u5e8f\u65f6\u5177\u6709\u7684\u6027\u80fd\u3002\u5f00\u53d1\u4eba\u5458\u5b9e\u9645\u4e0a\u4e5f\u4e0d\u5fc5\u76f4\u63a5\u7f16\u5199 WASM \u4ee3\u7801\u3002\u76f8\u53cd\uff0c\u4ed6\u4eec\u5c06\u4f7f\u7528 WASM \u4f5c\u4e3a\u7528\u5176\u4ed6\u8bed\u8a00\u7f16\u5199\u7684\u7a0b\u5e8f\u7684\u7f16\u8bd1\u76ee\u6807\u3002"),(0,o.kt)("p",null,"WASM \u89e3\u51b3\u7684\u4e3b\u8981\u95ee\u9898\u662f\u65e0\u6cd5\u5728\u7f51\u7edc\u4e0a\u4f7f\u7528 JavaScript \u4ee5\u5916\u7684\u7f16\u7a0b\u8bed\u8a00\u3002\u867d\u7136 JavaScript \u662f\u4e00\u79cd\u4f1f\u5927\u7684\u7f16\u7a0b\u8bed\u8a00\uff0c\u4f46\u5b83\u7684\u8bbe\u8ba1\u5e76\u4e0d\u662f\u4e3a\u4e86\u5728\u5927\u578b\u5e94\u7528\u7a0b\u5e8f\u4e2d\u5b9e\u73b0\u8d85\u9ad8\u901f\u3002WASM \u6539\u53d8\u6e38\u620f\u89c4\u5219\u7684\u5730\u65b9\u5728\u4e8e\uff0c\u5b83\u4ee5\u4e00\u79cd\u5b8c\u5168\u5b89\u5168\u7684\u65b9\u5f0f\u5c06\u7528\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\u7684\u672c\u5730\u5e94\u7528\u7a0b\u5e8f\u7684\u6027\u80fd\u5e26\u5230\u4e86\u7f51\u7edc\u4e0a\u3002"),(0,o.kt)("p",null,"WASM \u5e94\u8be5\u5728\u4e24\u4e2a\u4e3b\u8981\u65b9\u9762\u63d0\u4f9b\u663e\u8457\u7684\u901f\u5ea6\u63d0\u5347\u3002\u9996\u5148\uff0c\u5b83\u5e94\u8be5\u5927\u5927\u589e\u52a0\u5e94\u7528\u7a0b\u5e8f\u7684\u542f\u52a8\u901f\u5ea6\u3002\u4e8b\u5b9e\u4e0a\uff0c\u5df2\u7ecf\u4f7f\u7528 WASM \u7684\u5e94\u7528\u7a0b\u5e8f\u5df2\u7ecf\u80fd\u591f\u5c06\u5e94\u7528\u7a0b\u5e8f\u7684\u542f\u52a8\u65f6\u95f4\u51cf\u5c11\u4e00\u534a\uff0c\u800c\u4e14\u968f\u7740\u66f4\u591a\u7684\u4f18\u5316\uff0c\u5b83\u53ea\u4f1a\u7ee7\u7eed\u8fdb\u4e00\u6b65\u63d0\u9ad8\u542f\u52a8\u901f\u5ea6\u3002\u8fd9\u5c06\u4f7f\u5de8\u5927\u7684\u5e94\u7528\u7a0b\u5e8f\u80fd\u591f\u975e\u5e38\u3001\u975e\u5e38\u8fc5\u901f\u5730\u52a0\u8f7d\u8d77\u6765\u3002\u5176\u6b21\uff0cWASM \u5728\u541e\u5410\u91cf\u65b9\u9762\u4e5f\u6709\u5f88\u5927\u7684\u597d\u5904\uff0c\u8fd9\u610f\u5473\u7740\u4e00\u65e6\u4ee3\u7801\u88ab\u7f16\u8bd1\uff0c\u5b83\u7684\u8fd0\u884c\u901f\u5ea6\u4f1a\u66f4\u5feb--\u4f7f\u5e94\u7528\u7a0b\u5e8f\u66f4\u6709\u6548\uff0c\u53cd\u5e94\u66f4\u5feb\uff0c\u8fd9\u5c06\u5927\u5927\u6539\u5584\u7528\u6237\u4f53\u9a8c\u3002"),(0,o.kt)("p",null,"WebAssembly \u6709\u4ee5\u4e0b\u4f18\u70b9:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WASM \u662f\u975e\u5e38\u5feb\u901f\u3001\u9ad8\u6548\u548c\u53ef\u79fb\u690d\u7684\u3002\u4ee3\u7801\u53ef\u4ee5\u5728\u4e0d\u540c\u7684\u5e73\u53f0\u4e0a\u4ee5\u63a5\u8fd1\u539f\u751f\u7684\u901f\u5ea6\u6267\u884c\u3002"),(0,o.kt)("li",{parentName:"ul"},"WASM \u4e5f\u662f\u53ef\u8bfb\u548c\u53ef\u8c03\u8bd5\u7684\u3002\u867d\u7136 WebAssembly \u662f\u4e00\u79cd\u4f4e\u7ea7\u8bed\u8a00\uff0c\u4f46\u5b83\u786e\u5b9e\u6709\u4e00\u79cd\u4eba\u7c7b\u53ef\u8bfb\u7684\u6587\u672c\u683c\u5f0f\uff0c\u53ef\u4ee5\u7528\u624b\u5199\u3001\u67e5\u770b\u548c\u8c03\u8bd5\u4ee3\u7801\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5b83\u4e5f\u662f\u975e\u5e38\u5b89\u5168\u7684\uff0c\u56e0\u4e3a\u5b83\u662f\u5728\u4e00\u4e2a\u5b89\u5168\u7684\u6c99\u76d2\u73af\u5883\u4e2d\u8fd0\u884c\u7684\uff0c\u50cf\u5176\u4ed6\u7f51\u7edc\u4ee3\u7801\u4e00\u6837\uff0c\u5b83\u5c06\u6267\u884c\u6d4f\u89c8\u5668\u7684\u540c\u6e90\u548c\u65e0\u6743\u9650\u5b89\u5168\u7b56\u7565\u3002")))}m.isMDXComponent=!0}}]);