"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[11220],{79874:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return d}});var a=r(93106);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return r?a.createElement(f,c(c({ref:t},m),{},{components:r})):a.createElement(f,c({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},72351:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return m}});r(93106);var a=r(79874);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const c={title:"Taro.createCameraContext()",sidebar_label:"createCameraContext"},i=void 0,l={unversionedId:"apis/media/camera/createCameraContext",id:"version-2.x/apis/media/camera/createCameraContext",title:"Taro.createCameraContext()",description:"\u521b\u5efa camera \u4e0a\u4e0b\u6587 CameraContext \u5bf9\u8c61\u3002",source:"@site/versioned_docs/version-2.x/apis/media/camera/createCameraContext.md",sourceDirName:"apis/media/camera",slug:"/apis/media/camera/createCameraContext",permalink:"/taro-docs/en/docs/2.x/apis/media/camera/createCameraContext",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-2.x/apis/media/camera/createCameraContext.md",tags:[],version:"2.x",frontMatter:{title:"Taro.createCameraContext()",sidebar_label:"createCameraContext"},sidebar:"version-2.x/API",previous:{title:"RecorderManager",permalink:"/taro-docs/en/docs/2.x/apis/media/recorder/RecorderManager"},next:{title:"CameraContext",permalink:"/taro-docs/en/docs/2.x/apis/media/camera/CameraContext"}},p={},m=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",level:2},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",level:2}],u={toc:m};function s(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u521b\u5efa camera \u4e0a\u4e0b\u6587 CameraContext \u5bf9\u8c61\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",n({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/camera/wx.createCameraContext.html"}),"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",n({},{id:"\u7c7b\u578b"}),"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"() => CameraContext\n")),(0,a.kt)("h2",n({},{id:"\u53c2\u6570"}),"\u53c2\u6570"),(0,a.kt)("h2",n({},{id:"\u793a\u4f8b\u4ee3\u7801"}),"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-tsx"}),"const cameraContext = Taro.createCameraContext()\n")),(0,a.kt)("h2",n({},{id:"api-\u652f\u6301\u5ea6"}),"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",n({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"Taro.createCameraContext"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",n({parentName:"tr"},{align:"center"})),(0,a.kt)("td",n({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);