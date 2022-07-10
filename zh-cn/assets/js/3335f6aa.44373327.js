"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9575],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=a,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(g,i(i({ref:r},l),{},{components:t})):n.createElement(g,i({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3653:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],p={sidebar_position:4,sidebar_label:"Upload Program"},c="Upload Program",s={unversionedId:"api/upload-program",id:"api/upload-program",title:"Upload Program",description:"A smart contract compiled to Wasm can be uploaded as a program to the Gear network. During uploading it is initialized in the network to be able to send and receive messages with other actors in the network (programs and users).",source:"@site/docs/api/upload-program.md",sourceDirName:"api",slug:"/api/upload-program",permalink:"/zh-cn/api/upload-program",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/upload-program.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Upload Program"},sidebar:"tutorialSidebar",previous:{title:"Calculate gas",permalink:"/zh-cn/api/calculate-gas"},next:{title:"Submit Code",permalink:"/zh-cn/api/submit-code"}},l={},u=[],m={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upload-program"},"Upload Program"),(0,o.kt)("p",null,"A smart contract compiled to Wasm can be uploaded as a program to the Gear network. During uploading it is initialized in the network to be able to send and receive messages with other actors in the network (programs and users)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const code = fs.readFileSync('path/to/program.wasm');\n\nconst program = {\n  code,\n  gasLimit: 1000000,\n  value: 1000,\n  initPayload: somePayload,\n};\n\ntry {\n  const { programId, salt, submitted } = await gearApi.program.submit(uploadProgram, meta);\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n\ntry {\n  await gearApi.program.signAndSend(keyring, (event) => {\n    console.log(event.toHuman());\n  });\n} catch (error) {\n  console.error(`${error.name}: ${error.message}`);\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For the calculation of the required gas for ",(0,o.kt)("inlineCode",{parentName:"p"},"init")," message processing should use ",(0,o.kt)("inlineCode",{parentName:"p"},"api.program.calculateGas.init()")," method."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/api/calculate-gas"},"more info"))))}d.isMDXComponent=!0}}]);