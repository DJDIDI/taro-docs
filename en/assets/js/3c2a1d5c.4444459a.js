"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[1819],{79874:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),s=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),k=s(n),p=r,m=k["".concat(i,".").concat(p)]||k[p]||c[p]||o;return n?l.createElement(m,a(a({ref:e},d),{},{components:n})):l.createElement(m,a({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=k;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6368:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return d}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Taro.getSystemInfo(res)",sidebar_label:"getSystemInfo"},u=void 0,i={unversionedId:"apis/base/system/getSystemInfo",id:"apis/base/system/getSystemInfo",title:"Taro.getSystemInfo(res)",description:"Gets system information. Support for Promise based use.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/base/system/getSystemInfo.md",sourceDirName:"apis/base/system",slug:"/apis/base/system/getSystemInfo",permalink:"/taro-docs/en/docs/next/apis/base/system/getSystemInfo",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/base/system/getSystemInfo.md",tags:[],version:"current",frontMatter:{title:"Taro.getSystemInfo(res)",sidebar_label:"getSystemInfo"},sidebar:"API",previous:{title:"getSystemInfoAsync",permalink:"/taro-docs/en/docs/next/apis/base/system/getSystemInfoAsync"},next:{title:"getDeviceInfo",permalink:"/taro-docs/en/docs/next/apis/base/system/getDeviceInfo"}},s={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"Result",id:"result",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"Example code 1",id:"example-code-1",level:3},{value:"Example code 2",id:"example-code-2",level:3},{value:"API Support",id:"api-support",level:2}],c={toc:d};function k(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Gets system information. Support for Promise based use."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/system/system-info/wx.getSystemInfo.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(res?: Option) => Promise<Result>\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",r({},{id:"result"}),"Result"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"NOTE\uff1a")," Version, statusBarHeight, fontSizeSetting, SDKVersion are not supported on the ",(0,l.kt)("strong",{parentName:"p"},"H5"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"SDKVersion"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Client base library version")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"albumAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to use Photos (only for iOS)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"benchmarkLevel"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"The device performance grade (only for Mini Games on Android). Values: -2 or 0 (the device cannot run the Mini Game), -1 (unknown performance), \u22651 (a higher value (up to 50) indicates a better performance).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"bluetoothEnabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The system switch for Bluetooth")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"brand"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Device brand")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"cameraAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to use the camera")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fontSizeSetting"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"User's font size in px. The setting in ",(0,l.kt)("strong",null,"Me > Settings > General > Text Size")," in the WeChat app prevails.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"language"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Language set in WeChat")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"locationAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to use the location function")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"locationEnabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The system switch for the GPS function")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"microphoneAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to use the microphone")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"model"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Device model")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationAlertAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to send notifications with reminders (only for iOS)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to send notifications")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationBadgeAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to send notifications with flags (only for iOS)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"notificationSoundAuthorized"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The switch that allows WeChat to send notifications with sound (only for iOS).")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"pixelRatio"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Device's pixel ratio")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"platform"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Client platform")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"safeArea"),(0,l.kt)("td",null,(0,l.kt)("code",null,"SafeAreaResult")),(0,l.kt)("td",null,"Safe area when the screen is in vertical orientation")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"screenHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Screen height in px")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"screenWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Screen width in px")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"statusBarHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Status bar height in px")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"system"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Operating system and version")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"version"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"WeChat version")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"wifiEnabled"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"The system switch for Wi-Fi")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"windowHeight"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Available window height in px")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"windowWidth"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Available window width in px")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Call results")))),(0,l.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("h3",r({},{id:"example-code-1"}),"Example code 1"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getSystemInfo({\n  success: res => console.log(res)\n})\n.then(res => console.log(res))\n")),(0,l.kt)("h3",r({},{id:"example-code-2"}),"Example code 2"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getSystemInfo({\n  success: function (res) {\n    console.log(res.model)\n    console.log(res.pixelRatio)\n    console.log(res.windowWidth)\n    console.log(res.windowHeight)\n    console.log(res.language)\n    console.log(res.version)\n    console.log(res.platform)\n  }\n})\n")),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getSystemInfo"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);