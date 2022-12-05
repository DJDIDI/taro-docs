"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[93393],{79874:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,h=s["".concat(c,".").concat(m)]||s[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},13022:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(93106),r=n(4706),i="tabItem_RP7f";function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o({children:e,hidden:t,className:n}){return a.createElement("div",l({role:"tabpanel",className:(0,r.Z)(i,n)},{hidden:t}),e)}},72460:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(93106),r=n(4706),i=n(84560),l=n(41505),o=n(63820),c=n(88302),p="tabList_JgiB",d="tabItem_mVYB";function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function s(e){var t;const{lazy:n,block:i,defaultValue:s,values:m,groupId:h,className:k}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=null!=m?m:f.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),v=(0,l.l)(g,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const b=null===s?s:null!==(y=null!=s?s:null===(t=f.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==y?y:f[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:N}=(0,o.U)(),[x,O]=(0,a.useState)(b),M=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=h){const e=w[h];null!=e&&e!==x&&g.some((t=>t.value===e))&&O(e)}const T=e=>{const t=e.currentTarget,n=M.indexOf(t),a=g[n].value;a!==x&&(P(t),O(a),null!=h&&N(h,String(a)))},j=e=>{let t=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const a=M.indexOf(e.currentTarget)+1;var n;t=null!==(n=M[a])&&void 0!==n?n:M[0];break}case"ArrowLeft":{const n=M.indexOf(e.currentTarget)-1;var a;t=null!==(a=M[n])&&void 0!==a?a:M[M.length-1];break}}null==t||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},g.map((({value:e,label:t,attributes:n})=>a.createElement("li",u({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>M.push(e),onKeyDown:j,onClick:T},n,{className:(0,r.Z)("tabs__item",d,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,i.Z)();return a.createElement(s,u({key:String(t)},e))}},3073:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});n(93106);var a=n(79874),r=n(72460),i=n(13022);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const c={title:"MatchMedia",sidebar_label:"MatchMedia"},p=void 0,d={unversionedId:"components/viewContainer/match-media",id:"components/viewContainer/match-media",title:"MatchMedia",description:"media query match detection node. You can specify a set of media query rules that will be satisfied before this node is displayed.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/viewContainer/match-media.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/match-media",permalink:"/taro-docs/en/docs/next/components/viewContainer/match-media",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/viewContainer/match-media.md",tags:[],version:"current",frontMatter:{title:"MatchMedia",sidebar_label:"MatchMedia"},sidebar:"components",previous:{title:"CoverView",permalink:"/taro-docs/en/docs/next/components/viewContainer/cover-view"},next:{title:"MovableArea",permalink:"/taro-docs/en/docs/next/components/viewContainer/movable-area"}},u={},s=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"matchMediaProps",id:"matchmediaprops",level:2},{value:"API Support",id:"api-support",level:3}],m={toc:s};function h(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",l({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"media query")," match detection node. You can specify a set of ",(0,a.kt)("inlineCode",{parentName:"p"},"media query")," rules that will be satisfied before this node is displayed."),(0,a.kt)("p",null,"This node enables the effect that an area is only displayed when the page is within a certain width and height range."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/match-media.html"}),"Reference"))),(0,a.kt)("h2",l({},{id:"type"}),"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<MatchMediaProps>\n")),(0,a.kt)("h2",l({},{id:"examples"}),"Examples"),(0,a.kt)(r.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),'class App extends Components {\n  render () {\n    return (\n      <View>\n        <MatchMedia minWidth="300" maxWidth="600">\n          <view>Displayed when the page width is between 300 ~ 500 px</view>\n        </MatchMedia>\n        <MatchMedia minHeight="400" orientation="landscape">\n          <view>Displayed here when the page height is not less than 400 px and the screen orientation is portrait</view>\n        </MatchMedia>\n      </View>\n    )\n  }\n}\n'))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class="components-page">\n    <match-media min-width="300" max-width="500">\n      <view>Displayed when the page width is between 300 ~ 500 px</view>\n    </match-media>\n    <match-media min-height="400" orientation="landscape">\n      <view>Displayed here when the page height is not less than 400 px and the screen orientation is portrait</view>\n    </match-media>\n  </view>\n</template>\n')))),(0,a.kt)("h2",l({},{id:"matchmediaprops"}),"matchMediaProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"minWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the minimum page width in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxWidth"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the maximum page width in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"width"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the page width in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"minHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the minimum page height in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxHeight"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the maximum page height in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Height"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the page height in px")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"orientation"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specify the display condition for the screen orientation")))),(0,a.kt)("h3",l({},{id:"api-support"}),"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,a.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.minWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.maxWidth"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.width"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.minHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.maxHeight"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.Height"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"matchMediaProps.orientation"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,a.kt)("td",l({parentName:"tr"},{align:"center"})),(0,a.kt)("td",l({parentName:"tr"},{align:"center"}))))))}h.isMDXComponent=!0}}]);