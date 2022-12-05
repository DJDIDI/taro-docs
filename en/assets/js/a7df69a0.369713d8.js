"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[87807],{79874:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var l=n(93106);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),u=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(i,".").concat(k)]||p[k]||d[k]||o;return n?l.createElement(m,a(a({ref:e},s),{},{components:n})):l.createElement(m,a({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1636:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return s}});n(93106);var l=n(79874);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},r.apply(this,arguments)}function o(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const a={title:"Taro.getLocation(option)",sidebar_label:"getLocation"},c=void 0,i={unversionedId:"apis/location/getLocation",id:"apis/location/getLocation",title:"Taro.getLocation(option)",description:"Gets current geographic location and speed. The API cannot be called when the user exits the Mini Program.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/apis/location/getLocation.md",sourceDirName:"apis/location",slug:"/apis/location/getLocation",permalink:"/taro-docs/en/docs/next/apis/location/getLocation",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/apis/location/getLocation.md",tags:[],version:"current",frontMatter:{title:"Taro.getLocation(option)",sidebar_label:"getLocation"},sidebar:"API",previous:{title:"offLocationChange",permalink:"/taro-docs/en/docs/next/apis/location/offLocationChange"},next:{title:"getFuzzyLocation",permalink:"/taro-docs/en/docs/next/apis/location/getFuzzyLocation"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"Sample Code",id:"sample-code",level:2},{value:"API Support",id:"api-support",level:2}],d={toc:s};function p(t){var{components:e}=t,n=o(t,["components"]);return(0,l.kt)("wrapper",r({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Gets current geographic location and speed. The API cannot be called when the user exits the Mini Program."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Location simulation in the tool uses IP-based location, and there may have some error. The tool only supports GCJ-02 coordinates now."),(0,l.kt)("li",{parentName:"ul"},"When using a third-party service for reverse address resolution, please check the default coordinate system of the third-party service and perform coordinate conversion correctly.")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",r({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.getLocation.html"}),"Reference"))),(0,l.kt)("h2",r({},{id:"type"}),"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,l.kt)("h2",r({},{id:"parameters"}),"Parameters"),(0,l.kt)("h3",r({},{id:"option"}),"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"altitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Altitude information is returned if true is passed. The API will take a longer time to respond since a higher accuracy is required to obtain the altitude.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"highAccuracyExpireTime"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"High accuracy positioning timeout (ms), the specified time to return the highest accuracy, the value of 3000ms or more high accuracy positioning to have effect.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"isHighAccuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Turn on high accuracy positioning")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"wgs84 returns the gps coordinates, gcj02 returns the coordinates available for ",(0,l.kt)("code",null,"Taro.openLocation"))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: any) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: Result) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h3",r({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"accuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Location accuracy")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"altitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Altitude (in m)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"horizontalAccuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Horizontal accuracy (in m)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"latitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Latitude. The value ranges from -90 to +90, and the negative number means south latitude.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"longitude"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Longitude. The value ranges from -180 to +180, and the negative number means west longitude.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"speed"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Speed (in m/s)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"verticalAccuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"Vertical accuracy (in m) (Not available for Android, and 0 will be returned)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Call result")))),(0,l.kt)("h2",r({},{id:"sample-code"}),"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",r({parentName:"pre"},{className:"language-tsx"}),"Taro.getLocation({\ntype: 'wgs84',\nsuccess: function (res) {\n  const latitude = res.latitude\n  const longitude = res.longitude\n  const speed = res.speed\n  const accuracy = res.accuracy\n}\n})\n")),(0,l.kt)("h2",r({},{id:"api-support"}),"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"API"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"H5"),(0,l.kt)("th",r({parentName:"tr"},{align:"center"}),"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"Taro.getLocation"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,l.kt)("td",r({parentName:"tr"},{align:"center"})),(0,l.kt)("td",r({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);