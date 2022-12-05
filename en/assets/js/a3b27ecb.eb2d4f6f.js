"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[38313],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(93106);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),g=u(n),k=l,c=g["".concat(o,".").concat(k)]||g[k]||m[k]||r;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=g;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},13022:function(t,e,n){n.d(e,{Z:function(){return p}});var a=n(93106),l=n(4706),r="tabItem_RP7f";function i(){return i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},i.apply(this,arguments)}function p({children:t,hidden:e,className:n}){return a.createElement("div",i({role:"tabpanel",className:(0,l.Z)(r,n)},{hidden:e}),t)}},72460:function(t,e,n){n.d(e,{Z:function(){return k}});var a=n(93106),l=n(4706),r=n(84560),i=n(41505),p=n(63820),o=n(88302),u="tabList_JgiB",d="tabItem_mVYB";function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},m.apply(this,arguments)}function g(t){var e;const{lazy:n,block:r,defaultValue:g,values:k,groupId:c,className:N}=t,s=a.Children.map(t.children,(t=>{if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=k?k:s.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),b=(0,i.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var v;const y=null===g?g:null!==(v=null!=g?g:null===(e=s.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==v?v:s[0].props.value;if(null!==y&&!f.some((t=>t.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,p.U)(),[O,x]=(0,a.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:C}=(0,o.o5)();if(null!=c){const t=h[c];null!=t&&t!==O&&f.some((e=>e.value===t))&&x(t)}const j=t=>{const e=t.currentTarget,n=T.indexOf(e),a=f[n].value;a!==O&&(C(e),x(a),null!=c&&w(c,String(a)))},E=t=>{let e=null;switch(t.key){case"Enter":j(t);break;case"ArrowRight":{const a=T.indexOf(t.currentTarget)+1;var n;e=null!==(n=T[a])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(t.currentTarget)-1;var a;e=null!==(a=T[n])&&void 0!==a?a:T[T.length-1];break}}null==e||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},N)},f.map((({value:t,label:e,attributes:n})=>a.createElement("li",m({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:t=>T.push(t),onKeyDown:E,onClick:j},n,{className:(0,l.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":O===t})}),null!=e?e:t)))),n?(0,a.cloneElement)(s.filter((t=>t.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},s.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==O})))))}function k(t){const e=(0,r.Z)();return a.createElement(g,m({key:String(e)},t))}},42065:function(t,e,n){n.d(e,{gQ:function(){return i},p6:function(){return l}});var a=n(93106);function l(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#41B883",d:"M615.6 123.6h165.5L512 589.7 242.9 123.6H63.5L512 900.4l448.5-776.9z"}),a.createElement("path",{fill:"#34495E",d:"M781.1 123.6H615.6L512 303 408.4 123.6H242.9L512 589.7z"})),a.createElement("span",{style:{color:r}},"Vue"))}const r="#4fc08d";function i(){return a.createElement("span",null,a.createElement("svg",{xmlns:"https://www.w3.org/2000/svg",width:"200",height:"200",className:"inline-svg-icon",viewBox:"0 0 1024 1024"},a.createElement("defs",null,a.createElement("style",null)),a.createElement("path",{fill:"#61DAFB",d:"M432 511.8a80 80 0 10160 0 80 80 0 10-160 0z"}),a.createElement("path",{fill:"#61DAFB",d:"M960.5 511.8c0-62.8-73.8-117.2-188.5-150.1 28.9-115.8 18.7-206.9-35.7-238.3-54.5-31.4-138.5 5.3-224.3 88.2-85.8-82.9-169.8-119.6-224.3-88.2-54.4 31.4-64.6 122.6-35.7 238.3C137.3 394.6 63.5 449 63.5 511.8S137.3 629 252 661.9c-28.9 115.7-18.7 206.9 35.7 238.3 13.4 7.8 28.6 11.6 45.2 11.6 39.7 0 87.8-21.8 140-64.2 13-10.6 26.1-22.6 39.1-35.2 13 12.6 26.1 24.6 39.1 35.2 52.2 42.4 100.2 64.2 140 64.2 16.6 0 31.8-3.8 45.2-11.6 54.4-31.4 64.6-122.5 35.7-238.3 114.7-32.9 188.5-87.3 188.5-150.1zM716.8 157.2c35.3 20.4 42.7 94.3 17.6 194.8-36.7-8.4-76.7-14.7-119.3-18.6-24.7-34.9-50.2-66.4-75.8-94 59.2-57.3 114.2-88.4 152-88.4 9.6-.1 18.2 2 25.5 6.2zM637 584c-13.8 24-28.4 47-43.3 69-26.1 2-53.3 3.1-81.7 3.1-28.3 0-55.5-1.1-81.6-3.1-15-22-29.5-45.1-43.3-69-14.1-24.5-26.7-48.6-38.1-72.2 11.4-23.6 24-47.7 38.1-72.2 14.1-24.5 28.7-47.4 43.4-69.1 26.1-2 53.3-3.1 81.6-3.1 28.3 0 55.5 1.1 81.6 3.1 14.7 21.6 29.3 44.6 43.4 69 14.1 24.5 26.7 48.6 38.1 72.2-11.5 23.7-24.1 47.8-38.2 72.3zm58.8-26.4c11.2 26.6 20.4 52.1 28 76.5-24.9 5.6-51.7 10.4-80.3 14 9.3-14.5 18.4-29.3 27.3-44.6 8.8-15.4 17.1-30.7 25-45.9zM512 756.5c-17.7-19.2-35.1-40.1-52.2-62.6 17.1.8 34.5 1.3 52.2 1.3 17.7 0 35.1-.5 52.2-1.3-17.1 22.5-34.5 43.4-52.2 62.6zM380.5 648.1c-28.6-3.6-55.3-8.4-80.3-14 7.6-24.4 16.8-49.9 28-76.5 7.9 15.2 16.1 30.5 25 45.9 8.9 15.2 18 30 27.3 44.6zM328.2 466c-11.2-26.6-20.4-52.1-28-76.5 24.9-5.6 51.6-10.4 80.2-14-9.2 14.4-18.4 29.2-27.2 44.6-8.8 15.4-17.1 30.7-25 45.9zM512 267.1c17.3 18.7 34.8 39.8 52.1 62.7-17.1-.8-34.4-1.3-52.1-1.3-17.7 0-35 .5-52.1 1.3 17.3-22.9 34.8-44 52.1-62.7zm158.7 153c-8.9-15.3-18-30.1-27.2-44.6 28.6 3.6 55.3 8.4 80.2 14-7.6 24.4-16.8 49.9-28 76.5-7.8-15.2-16.1-30.5-25-45.9zM307.2 157.2c7.2-4.2 15.8-6.2 25.6-6.2 37.8 0 92.7 31.1 151.9 88.4-25.6 27.6-51.1 59.2-75.8 94-42.5 3.9-82.6 10.2-119.3 18.6-25.1-100.6-17.6-174.5 17.6-194.8zM102.5 511.8c0-40.8 60.3-84.2 160-112.6 11.1 36 25.6 73.8 43.5 112.6-17.8 38.8-32.4 76.6-43.5 112.6-99.7-28.4-160-71.9-160-112.6zm345.8 305.5c-59.7 48.5-111.1 66.4-141.1 49.2-35.3-20.4-42.7-94.3-17.6-194.8 36.7 8.4 76.7 14.7 119.3 18.6 24.4 34.5 49.9 66.1 75.8 94.2-12.1 11.7-24.2 22.9-36.4 32.8zm268.5 49.2c-29.9 17.3-81.4-.6-141.1-49.2-12.1-9.9-24.3-21.1-36.5-32.8 26-28.1 51.4-59.7 75.8-94.2 42.5-3.9 82.6-10.2 119.3-18.7 25.2 100.6 17.7 174.5-17.5 194.9zm44.8-242.1c-11.1-36-25.6-73.8-43.5-112.6 17.8-38.8 32.4-76.6 43.5-112.6 99.7 28.5 160 71.9 160 112.6-.1 40.7-60.4 84.2-160 112.6z"})),a.createElement("span",{style:{color:"#61dafb"}},"React"))}},43982:function(t,e,n){n.r(e),n.d(e,{assets:function(){return g},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return k}});n(93106);var a=n(79874),l=n(72460),r=n(13022),i=n(42065);function p(){return p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},p.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}const u={title:"\u9875\u9762\u914d\u7f6e"},d=void 0,m={unversionedId:"page-config",id:"version-3.x/page-config",title:"\u9875\u9762\u914d\u7f6e",description:"\u6bcf\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u90fd\u53ef\u4ee5\u4f7f\u7528 .config.js \u6587\u4ef6\u6765\u5bf9\u672c\u9875\u9762\u7684\u7a97\u53e3\u8868\u73b0\u8fdb\u884c\u914d\u7f6e\u3002\u9875\u9762\u4e2d\u914d\u7f6e\u9879\u5728\u5f53\u524d\u9875\u9762\u4f1a\u8986\u76d6\u5168\u5c40\u914d\u7f6e app.config.json \u7684 window \u4e2d\u76f8\u540c\u7684\u914d\u7f6e\u9879\u3002",source:"@site/versioned_docs/version-3.x/page-config.mdx",sourceDirName:".",slug:"/page-config",permalink:"/taro-docs/en/docs/page-config",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/page-config.mdx",tags:[],version:"3.x",frontMatter:{title:"\u9875\u9762\u914d\u7f6e"},sidebar:"docs",previous:{title:"Global Configuration",permalink:"/taro-docs/en/docs/app-config"},next:{title:"Project Configuration",permalink:"/taro-docs/en/docs/project-config"}},g={},k=[{value:"definePageConfig \u5b8f\u51fd\u6570",id:"definepageconfig-\u5b8f\u51fd\u6570",level:2},{value:"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528",level:3},{value:"\u5728\u9875\u9762 JS \u6587\u4ef6\u4e2d\u4f7f\u7528",id:"\u5728\u9875\u9762-js-\u6587\u4ef6\u4e2d\u4f7f\u7528",level:3},{value:"\u914d\u7f6e\u9879\u5217\u8868",id:"\u914d\u7f6e\u9879\u5217\u8868",level:2},{value:"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6",id:"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6",level:3}],c={toc:k};function N(t){var{components:e}=t,n=o(t,["components"]);return(0,a.kt)("wrapper",p({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6bcf\u4e00\u4e2a\u5c0f\u7a0b\u5e8f\u9875\u9762\u90fd\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},".config.js")," \u6587\u4ef6\u6765\u5bf9\u672c\u9875\u9762\u7684\u7a97\u53e3\u8868\u73b0\u8fdb\u884c\u914d\u7f6e\u3002\u9875\u9762\u4e2d\u914d\u7f6e\u9879\u5728\u5f53\u524d\u9875\u9762\u4f1a\u8986\u76d6\u5168\u5c40\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"app.config.json")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"window")," \u4e2d\u76f8\u540c\u7684\u914d\u7f6e\u9879\u3002"),(0,a.kt)("p",null,"\u6587\u4ef6\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"export")," \u4e00\u4e2a\u9ed8\u8ba4\u5bf9\u8c61\uff0c\u914d\u7f6e\u9879\u9075\u5faa",(0,a.kt)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u89c4\u8303"),"\uff0c\u5e76\u4e14\u5bf9\u6240\u6709\u5e73\u53f0\u8fdb\u884c\u7edf\u4e00\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Taro v3.4")," \u4e4b\u524d\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"page.config.js")," \u91cc\u5f15\u7528\u7684 JS \u6587\u4ef6",(0,a.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u7ecf\u8fc7 Babel \u7f16\u8bd1"),"\u3002(",(0,a.kt)("strong",{parentName:"li"},"Taro v3.4")," \u5f00\u59cb\u652f\u6301\uff09"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Taro v3.4")," \u652f\u6301\u5728\u9875\u9762 JS \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"definePageConfig")," \u5b8f\u51fd\u6570\u5b9a\u4e49\u9875\u9762\u914d\u7f6e\uff0c\u4ee3\u66ff ",(0,a.kt)("inlineCode",{parentName:"li"},"page.config.js")," \u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u591a\u7aef\u5dee\u5f02\u5316\u903b\u8f91\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"process.env.TARO_ENV")," \u53d8\u91cf\u4f5c\u6761\u4ef6\u5224\u65ad\u6765\u5b9e\u73b0\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"page.config.js")," \u4e0d\u652f\u6301\u591a\u7aef\u6587\u4ef6\u7684\u5f62\u5f0f\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"index.weapp.js")," \u8fd9\u6837\u662f\u4e0d\u8d77\u4f5c\u7528\u7684\u3002")),(0,a.kt)("h2",p({},{id:"definepageconfig-\u5b8f\u51fd\u6570"}),"definePageConfig \u5b8f\u51fd\u6570"),(0,a.kt)("admonition",p({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Taro v3.4+ \u652f\u6301")),(0,a.kt)("p",null,"\u5f00\u53d1\u8005\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u65f6\u5b8f\u51fd\u6570")," ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5305\u88f9\u914d\u7f6e\u5bf9\u8c61\uff0c\u4ee5\u83b7\u5f97",(0,a.kt)("strong",{parentName:"p"},"\u7c7b\u578b\u63d0\u793a"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u81ea\u52a8\u8865\u5168"),"\u3002"),(0,a.kt)("h3",p({},{id:"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528"}),"\u5728\u9875\u9762\u914d\u7f6e\u6587\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-ts",metastring:'title="page.config.ts"',title:'"page.config.ts"'}),"export default definePageConfig({\n  navigationBarTitleText: '\u9996\u9875'\n})\n")),(0,a.kt)("h3",p({},{id:"\u5728\u9875\u9762-js-\u6587\u4ef6\u4e2d\u4f7f\u7528"}),"\u5728\u9875\u9762 JS \u6587\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("p",null,"\u652f\u6301\u5728\u9875\u9762 JS \u4e2d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5b9a\u4e49\u9875\u9762\u914d\u7f6e\uff0c\u800c\u4e0d\u9700\u8981\u63d0\u4f9b ",(0,a.kt)("inlineCode",{parentName:"p"},"page.config.js")," \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"definePageConfig")," \u5b9a\u4e49\u7684\u9875\u9762\u914d\u7f6e\u5bf9\u8c61",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u80fd\u4f7f\u7528\u53d8\u91cf"),"\u3002"),(0,a.kt)(l.Z,{defaultValue:"React",values:[{label:(0,a.kt)(i.gQ,{mdxType:"ReactIcon"}),value:"React"},{label:(0,a.kt)(i.p6,{mdxType:"VueIcon"}),value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-tsx",metastring:'title="page.ts"',title:'"page.ts"'}),"definePageConfig({\n  navigationBarTitleText: '\u9996\u9875'\n})\n\nexport default function Index () {}\n"))),(0,a.kt)(r.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-html",metastring:'title="page.vue"',title:'"page.vue"'}),"<template>\n  <view className='index' />\n</template>\n\n<script>\ndefinePageConfig({\n  navigationBarTitleText: '\u9996\u9875'\n})\n\nexport default {}\n<\/script>\n")))),(0,a.kt)("h2",p({},{id:"\u914d\u7f6e\u9879\u5217\u8868"}),"\u914d\u7f6e\u9879\u5217\u8868"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationBarBackgroundColor"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"HexColor\uff08\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff09"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"#000000"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u80cc\u666f\u989c\u8272\uff0c\u5982 #000000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationBarTextStyle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"white"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u6807\u9898\u989c\u8272\uff0c\u4ec5\u652f\u6301 black / white")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationBarTitleText"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u6807\u9898\u6587\u5b57\u5185\u5bb9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationStyle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"default"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u6837\u5f0f\uff0c\u4ec5\u652f\u6301\u4ee5\u4e0b\u503c\uff1adefault \u9ed8\u8ba4\u6837\u5f0f\uff1bcustom \u81ea\u5b9a\u4e49\u5bfc\u822a\u680f\uff0c\u53ea\u4fdd\u7559\u53f3\u4e0a\u89d2\u80f6\u56ca\u6309\u94ae")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"transparentTitle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"none"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5bfc\u822a\u680f\u900f\u660e\u8bbe\u7f6e\u3002\u652f\u6301 always \u4e00\u76f4\u900f\u660e / auto \u6ed1\u52a8\u81ea\u9002\u5e94 / none \u4e0d\u900f\u660e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null})),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7a97\u53e3\u7684\u80cc\u666f\u8272")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundTextStyle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"dark"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u4e0b\u62c9 loading \u7684\u6837\u5f0f\uff0c\u4ec5\u652f\u6301 dark / light")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundColorTop"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"#ffffff"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u4ec5 iOS \u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundColorBottom"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"#ffffff"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u4ec5 iOS \u652f\u6301")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"enablePullDownRefresh"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"boolean"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u662f\u5426\u5f00\u542f\u5f53\u524d\u9875\u9762\u7684\u4e0b\u62c9\u5237\u65b0\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"onReachBottomDistance"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Number"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"50"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u9875\u9762\u4e0a\u62c9\u89e6\u5e95\u4e8b\u4ef6\u89e6\u53d1\u65f6\u8ddd\u9875\u9762\u5e95\u90e8\u8ddd\u79bb\uff0c\u5355\u4f4d\u4e3a px")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"pageOrientation"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"portrait"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5c4f\u5e55\u65cb\u8f6c\u8bbe\u7f6e\uff0c\u652f\u6301 auto / portrait / landscape \u8be6\u89c1 \u54cd\u5e94\u663e\u793a\u533a\u57df\u53d8\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"disableScroll"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u8bbe\u7f6e\u4e3a true \u5219\u9875\u9762\u6574\u4f53\u4e0d\u80fd\u4e0a\u4e0b\u6eda\u52a8\u3002",(0,a.kt)("br",null),"\u53ea\u5728\u9875\u9762\u914d\u7f6e\u4e2d\u6709\u6548\uff0c\u65e0\u6cd5\u5728 app.json \u4e2d\u8bbe\u7f6e")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"disableSwipeBack"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Boolean"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"false"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u7981\u6b62\u9875\u9762\u53f3\u6ed1\u624b\u52bf\u8fd4\u56de")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usingComponents"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Object"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5426"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u9875\u9762\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u914d\u7f6e")))),(0,a.kt)("p",null,"\u5176\u4e2d\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"usingComponents")," \u4e00\u822c\u4e0d\u9700\u8981\u914d\u7f6e\uff0c\u53ea\u6709\u5728\u9700\u8981\u4e0e\u5f15\u7528\u539f\u751f\u5c0f\u7a0b\u5e8f\u7ec4\u4ef6\u7684\u65f6\u5019\u624d\u9700\u8981\u914d\u7f6e\u3002"),(0,a.kt)("h3",p({},{id:"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6"}),"\u5404\u7aef\u652f\u6301\u7a0b\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u5c5e\u6027"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"H5"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"RN"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationBarBackgroundColor"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationBarTextStyle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationBarTitleText"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"navigationStyle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u5fae\u4fe1\u5ba2\u6237\u7aef 6.6.0\uff09"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u767e\u5ea6 App \u7248\u672c 11.1.0\uff09"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"transparentTitle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"-"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundColor"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundTextStyle"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundColorTop"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u5fae\u4fe1\u5ba2\u6237\u7aef 6.5.16\uff09"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"backgroundColorBottom"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f\uff08\u5fae\u4fe1\u5ba2\u6237\u7aef 6.5.16\uff09"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"enablePullDownRefresh"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"onReachBottomDistance"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"pageOrientation"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f2.4.0 (auto) / 2.5.0 (landscape)"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"disableScroll"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"disableSwipeBack"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"usingComponents"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2714\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2718")))))}N.isMDXComponent=!0}}]);