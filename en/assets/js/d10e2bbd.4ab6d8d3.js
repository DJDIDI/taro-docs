"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37826],{79874:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(93106);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),f=u(r),m=o,b=f["".concat(l,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(b,c(c({ref:e},p),{},{components:r})):n.createElement(b,c({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},93519:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});r(93106);var n=r(79874);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},o.apply(this,arguments)}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}const c={slug:"2021-03-10-taro-3-1-lts",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",authors:"JJ",tags:["v3"],description:"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\u3002"},i=void 0,l={permalink:"/taro-docs/en/blog/2021-03-10-taro-3-1-lts",editUrl:"https://github.com/nervjs/taro-docs/edit/master/blog/2021-03-10-taro-3-1-lts.md",source:"@site/blog/2021-03-10-taro-3-1-lts.md",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",description:"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\u3002",date:"2021-03-10T00:00:00.000Z",formattedDate:"March 10, 2021",tags:[{label:"v3",permalink:"/taro-docs/en/blog/tags/v-3"}],readingTime:9.225,hasTruncateMarker:!0,authors:[{name:"JJ",title:"Taro \u6280\u672f\u59d4\u5458\u4f1a\u6210\u5458\u3001Taro Core \u5de5\u4f5c\u7ec4 Owner",url:"https://github.com/Chen-jj",imageURL:"https://storage.jd.com/cjj-pub-images/11807297.png",key:"JJ"}],frontMatter:{slug:"2021-03-10-taro-3-1-lts",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.1 \u7248\u672c",authors:"JJ",tags:["v3"],description:"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\u3002"},prevItem:{title:"Taro 3.2 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff1aReact Native \u652f\u6301\uff0c\u738b\u8005\u5f52\u6765",permalink:"/taro-docs/en/blog/2021-04-08-taro-3.2"},nextItem:{title:"Taro \u52a9\u529b\u4eac\u559c\u62fc\u62fc\u9879\u76ee\u6027\u80fd\u4f53\u9a8c\u4f18\u5316",permalink:"/taro-docs/en/blog/2021-02-08-taro-jxpp"}},u={authorsImageUrls:[void 0]},p=[],s={toc:p};function f(t){var{components:e}=t,r=a(t,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u81ea Taro 3.1 \u4f53\u9a8c\u7248\u63a8\u51fa\u540e\uff0c\u6211\u4eec\u4e0d\u65ad\u5730\u6839\u636e\u793e\u533a\u7684\u53cd\u9988\u610f\u89c1\u5bf9 3.1 \u7248\u672c\u8fdb\u884c\u6253\u78e8\u3002\u4e3b\u8981\u6539\u8fdb\u4e86",(0,n.kt)("strong",{parentName:"p"},"\u5f00\u653e\u5f0f\u67b6\u6784"),"\u3001\u5f15\u5165\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"CustomWrapper")," \u7ec4\u4ef6\u4ee5\u89e3\u51b3\u6027\u80fd\u95ee\u9898\u3001\u63d0\u51fa\u4e86\u539f\u751f\u5c0f\u7a0b\u5e8f",(0,n.kt)("strong",{parentName:"p"},"\u6e10\u8fdb\u5f0f\u6df7\u5408\u4f7f\u7528 Taro")," \u7684\u89e3\u51b3\u65b9\u6848\u3002"),(0,n.kt)("p",null,"\u7ecf\u5386\u4e86 12 \u4e2a beta \u7248\u672c\u540e\uff0c\u7ec8\u4e8e\u8fce\u6765\u4e86 3.1 \u6b63\u5f0f\u7248\ud83c\udf89"))}f.isMDXComponent=!0}}]);