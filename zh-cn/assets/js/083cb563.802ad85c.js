"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1476],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=i(n),k=r,m=b["".concat(l,".").concat(k)]||b[k]||p[k]||o;return n?a.createElement(m,c(c({ref:t},u),{},{components:n})):a.createElement(m,c({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},2571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),c=["components"],s={sidebar_position:11,sidebar_label:"Cookbook"},l="Cookbook",i={unversionedId:"api/extra-queries",id:"api/extra-queries",title:"Cookbook",description:"Here is collected a set of useful code snippets in a question-answer format:",source:"@site/docs/api/extra-queries.md",sourceDirName:"api",slug:"/api/extra-queries",permalink:"/zh-cn/api/extra-queries",draft:!1,editUrl:"https://github.com/gear-tech/wiki/edit/master/docs/api/extra-queries.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,sidebar_label:"Cookbook"},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/zh-cn/api/events"},next:{title:"Create-Gear-App",permalink:"/zh-cn/api/tooling/create-gear-app"}},u={},p=[{value:"Subscribe to new blocks",id:"subscribe-to-new-blocks",level:2},{value:"Get block data",id:"get-block-data",level:3},{value:"Get block timestamp",id:"get-block-timestamp",level:3},{value:"Get blockHash by block number",id:"get-blockhash-by-block-number",level:3},{value:"Get block number by blockhash",id:"get-block-number-by-blockhash",level:3},{value:"Get all block&#39;s events",id:"get-all-blocks-events",level:3},{value:"Get all block&#39;s extrinsics",id:"get-all-blocks-extrinsics",level:3},{value:"Get transaction fee",id:"get-transaction-fee",level:2}],b={toc:p};function k(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cookbook"},"Cookbook"),(0,o.kt)("p",null,"Here is collected a set of useful code snippets in a question-answer format:"),(0,o.kt)("h2",{id:"subscribe-to-new-blocks"},"Subscribe to new blocks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const unsub = await gearApi.gearEvents.subscribeToNewBlocks((header) => {\n  console.log(`New block with number: ${header.number.toNumber()} and hash: ${header.hash.toHex()}`);\n});\n// Unsubscribe\nunsub();\n")),(0,o.kt)("h3",{id:"get-block-data"},"Get block data"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const data = await gearApi.blocks.get(blockNumberOrBlockHash);\nconsole.log(data.toHuman());\n")),(0,o.kt)("h3",{id:"get-block-timestamp"},"Get block timestamp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const ts = await gearApi.blocks.getBlockTimestamp(blockNumberOrBlockHash);\nconsole.log(ts.toNumber());\n")),(0,o.kt)("h3",{id:"get-blockhash-by-block-number"},"Get blockHash by block number"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const hash = await gearApi.blocks.getBlockHash(blockNumber);\nconsole.log(hash.toHex());\n")),(0,o.kt)("h3",{id:"get-block-number-by-blockhash"},"Get block number by blockhash"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const hash = await gearApi.blocks.getBlockNumber(blockHash);\nconsole.log(hash.toNumber());\n")),(0,o.kt)("h3",{id:"get-all-blocks-events"},"Get all block's events"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const events = await gearApi.blocks.getEvents(blockHash);\nevents.forEach((event) => {\n  console.log(event.toHuman());\n});\n")),(0,o.kt)("h3",{id:"get-all-blocks-extrinsics"},"Get all block's extrinsics"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const extrinsics = await gearApi.blocks.getExtrinsics(blockHash);\nextrinsics.forEach((extrinsic) => {\n  console.log(extrinsic.toHuman());\n});\n")),(0,o.kt)("h2",{id:"get-transaction-fee"},"Get transaction fee"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const api = await GearApi.create();\napi.program.submit({ code, gasLimit });\n// same for api.message, api.reply and others\nconst paymentInfo = await api.program.paymentInfo(alice);\nconst transactionFee = paymentInfo.partialFee.toNumber();\nconsolg.log(transactionFee);\n")))}k.isMDXComponent=!0}}]);