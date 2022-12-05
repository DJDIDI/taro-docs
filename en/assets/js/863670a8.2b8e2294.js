"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93899],{79874:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(93106);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),k=l,m=p["".concat(d,".").concat(k)]||p[k]||s[k]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13022:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),l=n(4706),a="tabItem_RP7f";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,l.Z)(a,n)},{hidden:t}),e)}},72460:function(e,t,n){n.d(t,{Z:function(){return k}});var r=n(93106),l=n(4706),a=n(84560),o=n(41505),i=n(63820),d=n(88302),c="tabList_JgiB",u="tabItem_mVYB";function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e){var t;const{lazy:n,block:a,defaultValue:p,values:k,groupId:m,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=k?k:g.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var b;const f=null===p?p:null!==(b=null!=p?p:null===(t=g.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==b?b:g[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:N}=(0,i.U)(),[A,w]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,d.o5)();if(null!=m){const e=x[m];null!=e&&e!==A&&h.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),r=h[n].value;r!==A&&(E(t),w(r),null!=m&&N(m,String(r)))},P=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const r=O.indexOf(e.currentTarget)+1;var n;t=null!==(n=O[r])&&void 0!==n?n:O[0];break}case"ArrowLeft":{const n=O.indexOf(e.currentTarget)-1;var r;t=null!==(r=O[n])&&void 0!==r?r:O[O.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},y)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",s({role:"tab",tabIndex:A===e?0:-1,"aria-selected":A===e,key:e,ref:e=>O.push(e),onKeyDown:P,onClick:T},n,{className:(0,l.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":A===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===A))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==A})))))}function k(e){const t=(0,a.Z)();return r.createElement(p,s({key:String(t)},e))}},94798:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return p}});n(93106);var r=n(79874),l=n(72460),a=n(13022);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const d={title:"Ad",sidebar_label:"Ad"},c=void 0,u={unversionedId:"components/open/ad",id:"version-3.x/components/open/ad",title:"Ad",description:"Banner ad.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/ad.md",sourceDirName:"components/open",slug:"/components/open/ad",permalink:"/taro-docs/en/docs/components/open/ad",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/open/ad.md",tags:[],version:"3.x",frontMatter:{title:"Ad",sidebar_label:"Ad"},sidebar:"components",previous:{title:"Canvas",permalink:"/taro-docs/en/docs/components/canvas/"},next:{title:"AdCustom",permalink:"/taro-docs/en/docs/components/open/ad-custom"}},s={},p=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"AdProps",id:"adprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onErrorEventDetail",id:"onerroreventdetail",level:3},{value:"AdErrCode",id:"aderrcode",level:3},{value:"API Support",id:"api-support",level:2}],k={toc:p};function m(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Banner ad."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/ad.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<AdProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n  render () {\n    return (\n      <Ad\n        unitId=''\n        adIntervals={60}\n        onLoad={() => console.log('ad onLoad')}\n        onError={() => console.log('ad onError')}\n        onClose={() => console.log('ad onClose')}\n      />\n    )\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <ad\n    unit-id=""\n    ad-intervals="60"\n    @load="onLoad"\n    @error="onError"\n    @close="onClose"\n  />\n</template>\n')))),(0,r.kt)("h2",o({},{id:"adprops"}),"AdProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"unitId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,r.kt)("td",null,"d unit ID, which can be created via the Ad Host module in",(0,r.kt)("a",{href:"https://mp.weixin.qq.com/?lang=en_US&token="}," Mini Program Console"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"adIntervals"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The interval between the automatic refresh of the advertisements in seconds, the value of the parameter must be greater than or equal to 30.\uff08Banner ads are not refreshed automatically if this parameter is not set.\uff09")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onLoad"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Callback used when an ad is loaded")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onError"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onErrorEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Callback used when ad loading failed. event.detail = ","{errCode: 1002}")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onClose"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Callback used when an ad is closed")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.unitId"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.adIntervals"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.onLoad"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.onError"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"AdProps.onClose"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))),(0,r.kt)("h3",o({},{id:"onerroreventdetail"}),"onErrorEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"errCode"),(0,r.kt)("td",null,(0,r.kt)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008"))))),(0,r.kt)("h3",o({},{id:"aderrcode"}),"AdErrCode"),(0,r.kt)("p",null,"An error code is obtained by executing the binderror callback."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Code"),(0,r.kt)("th",{style:{textAlign:"center"}},"Exception"),(0,r.kt)("th",{style:{textAlign:"center"}},"Cause"),(0,r.kt)("th",{style:{textAlign:"center"}},"Solution"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"1000"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Call failed due to a backend error")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"This error is not caused by developers.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Ignore the error, and it will be automatically recovered after a period of time."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1001"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Parameter error")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The parameter is incorrectly used.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"For details, visit developers.weixin.qq.com. (There are different courses specific to Mini Programs and Mini Games. In the top tab, you can switch between the courses on the right of the ",(0,r.kt)("strong",null,"Design")," column.)"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1002"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Invalid ad unit")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The spelling may be incorrect or the ad ID of another app may be used.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Visit mp.weixin.qq.com to confirm the ad ID."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1003"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Internal error")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"This error is not caused by developers.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Ignore the error, and it will be automatically recovered after a period of time."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1004"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"No suitable ad")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The ad does not appear every time. Maybe it is not appropriate to the user.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"This is a normal case. In addition, you need to improve compatibility in this case."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1005"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The ad component is being reviewed.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Your ad is being reviewed and therefore cannot be displayed.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Visit mp.weixin.qq.com to check the review status. In addition, you need to improve compatibility in this case."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1006"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The ad component is rejected.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Your ad failed to pass the review and therefore cannot be displayed.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Visit mp.weixin.qq.com to check the review status. In addition, you need to improve compatibility in this case."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1007"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The ad component is rejected.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Your advertising capability is suspended. ads cannot be displayed during the suspension.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Visit mp.weixin.qq.com to check the Mini Program ad suspension status."))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1008"),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The ad unit is disabled.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"The advertising capability in the advertising space is disabled.")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"Visit mp.weixin.qq.com to enable the display in the advertising space."))))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Ad"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}))))))}m.isMDXComponent=!0}}]);