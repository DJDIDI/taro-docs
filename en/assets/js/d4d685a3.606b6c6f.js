"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[23722],{79874:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={title:"API Introduction"},p=void 0,l={unversionedId:"apis/about/desc",id:"version-3.x/apis/about/desc",title:"API Introduction",description:"Taro's APIs include the built-in APIs provided by Taro and the different APIs defined by each mini-program platform.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/about/desc.md",sourceDirName:"apis/about",slug:"/apis/about/desc",permalink:"/taro-docs/en/docs/apis/about/desc",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/about/desc.md",tags:[],version:"3.x",frontMatter:{title:"API Introduction"},sidebar:"API",next:{title:"Operating environment",permalink:"/taro-docs/en/docs/apis/about/env"}},s={},c=[],u={toc:c};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Taro's APIs include the built-in APIs provided by Taro and the different APIs defined by each mini-program platform."),(0,r.kt)("p",null,"The encapsulation of the APIs defined by the mini-program platform will be based on the API specification of the WeChat mini-program. For the similar API in other platforms, it will be adapted to the standard format in Taro, and be mounted under the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro"),"."),(0,r.kt)("p",null,"For example, in the Alipay mini-program, ",(0,r.kt)("inlineCode",{parentName:"p"},"my.alert")," is used to pop up a warning modal, while there is no such API in the Wechat mini-program. Instead, it's called ",(0,r.kt)("inlineCode",{parentName:"p"},"wx.showModal")," in the Wechat mini-program, so Alipay\u2019s ",(0,r.kt)("inlineCode",{parentName:"p"}," my.alert")," is unified as ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.showModal"),", thus reducing the redundant writing of cross-platform compatible codes."),(0,r.kt)("p",null,"For APIs that are not available in the WeChat mini-program and are unique to some mini-program platforms, you could first try to call them with ",(0,r.kt)("inlineCode",{parentName:"p"},"Taro.")," + API name. If there is no definition, use the namespace of the corresponding mini-program platform (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"my "),", ",(0,r.kt)("inlineCode",{parentName:"p"},"swan"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"tt"),", etc.) to call and feedback to us."),(0,r.kt)("p",null,"Due to the rapid iteration of each platform, Taro has to keep up with the update of them. Sometimes it is inevitable that the APIs are not adapted to Taro. You could get help by raising a PR or issue."),(0,r.kt)("p",null,"Meanwhile, to facilitate coding, Taro has \u201cpromisify\u201d the asynchronous API of the mini-program. You could call it like a Promise, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-js"}),"import Taro from '@tarojs/taro'\n\nTaro.request(url).then(function (res) {\n  console.log(res)\n})\n")))}d.isMDXComponent=!0}}]);