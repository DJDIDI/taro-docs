"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[10004],{79874:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var n=r(93106);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(r),k=l,m=p["".concat(u,".").concat(k)]||p[k]||s[k]||o;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},90012:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return d}});r(93106);var n=r(79874);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}const a={title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},i=void 0,u={unversionedId:"apis/media/audio/getAvailableAudioSources",id:"version-3.x/apis/media/audio/getAvailableAudioSources",title:"Taro.getAvailableAudioSources(option)",description:"Gets supported audio input sources.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/audio/getAvailableAudioSources.md",sourceDirName:"apis/media/audio",slug:"/apis/media/audio/getAvailableAudioSources",permalink:"/taro-docs/en/docs/apis/media/audio/getAvailableAudioSources",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/apis/media/audio/getAvailableAudioSources.md",tags:[],version:"3.x",frontMatter:{title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},sidebar:"API",previous:{title:"pauseVoice",permalink:"/taro-docs/en/docs/apis/media/audio/pauseVoice"},next:{title:"createWebAudioContext",permalink:"/taro-docs/en/docs/apis/media/audio/createWebAudioContext"}},c={},d=[{value:"Type",id:"type",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Option",id:"option",level:3},{value:"SuccessCallbackResult",id:"successcallbackresult",level:3},{value:"audioSources",id:"audiosources",level:3},{value:"API Support",id:"api-support",level:2}],s={toc:d};function p(e){var{components:t}=e,r=o(e,["components"]);return(0,n.kt)("wrapper",l({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Gets supported audio input sources."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/audio/wx.getAvailableAudioSources.html"}),"Reference"))),(0,n.kt)("h2",l({},{id:"type"}),"Type"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,n.kt)("h2",l({},{id:"parameters"}),"Parameters"),(0,n.kt)("h3",l({},{id:"option"}),"Option"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",{style:{textAlign:"center"}},"Required"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"complete"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"fail"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: any) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a failed API call")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"success"),(0,n.kt)("td",null,(0,n.kt)("code",null,"(res: Result) => void")),(0,n.kt)("td",{style:{textAlign:"center"}},"No"),(0,n.kt)("td",null,"The callback function for a successful API call")))),(0,n.kt)("h3",l({},{id:"successcallbackresult"}),"SuccessCallbackResult"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Type"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"audioSources"),(0,n.kt)("td",null,(0,n.kt)("code",null,'("auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition")[]')),(0,n.kt)("td",null,"The list of supported audio input sources. It can be used in the API",(0,n.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html"},"RecorderManager.start()"),". For the definitions of returned values, please see https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"errMsg"),(0,n.kt)("td",null,(0,n.kt)("code",null,"string")),(0,n.kt)("td",null,"Call result")))),(0,n.kt)("h3",l({},{id:"audiosources"}),"audioSources"),(0,n.kt)("p",null,"Valid values of res.audioSources"),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"Property"),(0,n.kt)("th",null,"Description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"auto"),(0,n.kt)("td",null,"Automatic setup. The mobile microphone is used by default. The headset microphone is automatically adopted when the headset is plugged in. This setup applies to all platforms.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"buildInMic"),(0,n.kt)("td",null,"Mobile microphone for iOS only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"headsetMic"),(0,n.kt)("td",null,"Headset microphone for iOS only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"mic"),(0,n.kt)("td",null,"Microphone (if the headset is not plugged in, the mobile microphone is used; otherwise, the headset microphone is used) for Android only")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"camcorder"),(0,n.kt)("td",null,"Same as mic. Suitable for audio and video recording. For Android only.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"voice_communication"),(0,n.kt)("td",null,"Same as mic. Suitable for real-time communication. For Android only.")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"voice_recognition"),(0,n.kt)("td",null,"Same as mic. Suitable for speech recognition. For Android only.")))),(0,n.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,n.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"Taro.getAvailableAudioSources"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,n.kt)("td",l({parentName:"tr"},{align:"center"})),(0,n.kt)("td",l({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);