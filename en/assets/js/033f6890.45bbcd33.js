"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[56409],{79874:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13022:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(93106),a=n(4706),l="tabItem_RP7f";function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function c({children:t,hidden:e,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:e}),t)}},72460:function(t,e,n){n.d(e,{Z:function(){return m}});var r=n(93106),a=n(4706),l=n(84560),o=n(41505),c=n(63820),i=n(88302),p="tabList_JgiB",u="tabItem_mVYB";function s(){return s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s.apply(this,arguments)}function d(t){var e;const{lazy:n,block:l,defaultValue:d,values:m,groupId:k,className:h}=t,g=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=m?m:g.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),b=(0,o.l)(f,((t,e)=>t.value===e.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const v=null===d?d:null!==(y=null!=d?d:null===(e=g.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==y?y:g[0].props.value;if(null!==v&&!f.some((t=>t.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,c.U)(),[x,O]=(0,r.useState)(v),P=[],{blockElementScrollPositionUntilNextRender:S}=(0,i.o5)();if(null!=k){const t=N[k];null!=t&&t!==x&&f.some((e=>e.value===t))&&O(t)}const T=t=>{const e=t.currentTarget,n=P.indexOf(e),r=f[n].value;r!==x&&(S(e),O(r),null!=k&&w(k,String(r)))},E=t=>{let e=null;switch(t.key){case"Enter":T(t);break;case"ArrowRight":{const r=P.indexOf(t.currentTarget)+1;var n;e=null!==(n=P[r])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(t.currentTarget)-1;var r;e=null!==(r=P[n])&&void 0!==r?r:P[P.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},h)},f.map((({value:t,label:e,attributes:n})=>r.createElement("li",s({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:t=>P.push(t),onKeyDown:E,onClick:T},n,{className:(0,a.Z)("tabs__item",u,null==n?void 0:n.className,{"tabs__item--active":x===t})}),null!=e?e:t)))),n?(0,r.cloneElement)(g.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function m(t){const e=(0,l.Z)();return r.createElement(d,s({key:String(e)},t))}},90535:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return d}});n(93106);var r=n(79874),a=n(72460),l=n(13022);function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o.apply(this,arguments)}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const i={title:"Switch",sidebar_label:"Switch"},p=void 0,u={unversionedId:"components/forms/switch",id:"components/forms/switch",title:"Switch",description:"Switch picker.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/forms/switch.md",sourceDirName:"components/forms",slug:"/components/forms/switch",permalink:"/taro-docs/en/docs/next/components/forms/switch",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/switch.md",tags:[],version:"current",frontMatter:{title:"Switch",sidebar_label:"Switch"},sidebar:"components",previous:{title:"Slider",permalink:"/taro-docs/en/docs/next/components/forms/slider"},next:{title:"Textarea",permalink:"/taro-docs/en/docs/next/components/forms/textarea"}},s={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"SwitchProps",id:"switchprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onChangeEventDetail",id:"onchangeeventdetail",level:3},{value:"API Support",id:"api-support",level:2}],m={toc:d};function k(t){var{components:e}=t,n=c(t,["components"]);return(0,r.kt)("wrapper",o({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Switch picker."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/switch.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<SwitchProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Text>default style</Text>\n        <Switch checked/>\n        <Switch/>\n        <Text>recommend style</Text>\n        <Switch checked/>\n        <Switch/>\n      </View>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <view class=\'components-page\'>\n    <text>default style</text>\n    <switch :checked="true" />\n    <switch />\n    <text>recommend style</text>\n    <switch :checked="true" />\n    <switch />\n  </view>\n</template>\n')))),(0,r.kt)("h2",o({},{id:"switchprops"}),"SwitchProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"checked"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether the item is selected")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"disabled"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to disable the component.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"type"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"switch" | "checkbox"')),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"switch"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The style. Valid values include `switch` and `checkbox`.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"color"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,'"#04BE02"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The color of the switch component. It is the same as the color of the css component.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onChange"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"A change event triggered when checked changes.")))),(0,r.kt)("h3",o({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"SwitchProps.checked"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"SwitchProps.disabled"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"SwitchProps.type"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"SwitchProps.color"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"SwitchProps.onChange"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,r.kt)("h3",o({},{id:"onchangeeventdetail"}),"onChangeEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean"))))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Switch"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}k.isMDXComponent=!0}}]);