"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[77217],{79874:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(93106);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13022:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93106),a=n(4706),l="tabItem_RP7f";function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i({children:e,hidden:t,className:n}){return r.createElement("div",o({role:"tabpanel",className:(0,a.Z)(l,n)},{hidden:t}),e)}},72460:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(93106),a=n(4706),l=n(84560),o=n(41505),i=n(63820),c=n(88302),u="tabList_JgiB",s="tabItem_mVYB";function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:b,className:f}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=m?m:v.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),y=(0,o.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const g=null===d?d:null!==(k=null!=d?d:null===(t=v.find((e=>e.props.default)))||void 0===t?void 0:t.props.value)&&void 0!==k?k:v[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,i.U)(),[x,w]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:P}=(0,c.o5)();if(null!=b){const e=N[b];null!=e&&e!==x&&h.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),r=h[n].value;r!==x&&(P(t),w(r),null!=b&&O(b,String(r)))},E=e=>{let t=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const r=T.indexOf(e.currentTarget)+1;var n;t=null!==(n=T[r])&&void 0!==n?n:T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;var r;t=null!==(r=T[n])&&void 0!==r?r:T[T.length-1];break}}null==t||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},f)},h.map((({value:e,label:t,attributes:n})=>r.createElement("li",p({role:"tab",tabIndex:x===e?0:-1,"aria-selected":x===e,key:e,ref:e=>T.push(e),onKeyDown:E,onClick:j},n,{className:(0,a.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":x===e})}),null!=t?t:e)))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,p({key:String(t)},e))}},75456:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});n(93106);var r=n(79874),a=n(72460),l=n(13022);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"Label",sidebar_label:"Label"},u=void 0,s={unversionedId:"components/forms/label",id:"version-3.x/components/forms/label",title:"Label",description:"Improves the availability of form components.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/forms/label.md",sourceDirName:"components/forms",slug:"/components/forms/label",permalink:"/taro-docs/en/docs/components/forms/label",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-3.x/components/forms/label.md",tags:[],version:"3.x",frontMatter:{title:"Label",sidebar_label:"Label"},sidebar:"components",previous:{title:"Input",permalink:"/taro-docs/en/docs/components/forms/input"},next:{title:"Picker",permalink:"/taro-docs/en/docs/components/forms/picker"}},p={},d=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"LabelProps",id:"labelprops",level:2},{value:"API Support",id:"api-support",level:2}],m={toc:d};function b(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Improves the availability of form components."),(0,r.kt)("p",null,"You can use the for property to find the appropriate ID. Alternatively, you can place the control within this tag, so that you can tap the tag to trigger the corresponding control. The for property takes precedence over internal controls. When multiple internal controls are available, the first control is triggered by default. The following controls can be bound to this component: button, checkbox, radio, and switch."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/label.html"}),"Reference"))),(0,r.kt)("h2",o({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"ComponentType<LabelProps>\n")),(0,r.kt)("h2",o({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-tsx"}),"class App extends Components {\n\n  render () {\n    return (\n      <RadioGroup>\n        <Label className='example-body__label' for='1' key='1'>\n          <Radio id='1' value='USA'>USA</Radio>\n        </Label>\n        <Label className='example-body__label' for='2' key='2'>\n          <Radio id='2' value='CHN' checked>\n          CHN\n          </Radio>\n        </Label>\n      </RadioGroup>\n    )\n  }\n}\n"))),(0,r.kt)(l.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-html"}),'<template>\n  <radio-group>\n    <label class="example-body__label" for="1" key="1">\n      <radio id="1" value="USA" />\n      USA\n    </label>\n    <label class="example-body__label" for="2" key="2">\n      <radio id="2" value="CHN" :checked="true" />\n      CHN\n    </label>\n  </radio-group>\n</template>\n')))),(0,r.kt)("h2",o({},{id:"labelprops"}),"LabelProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"for"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The ID of the bound control, not supported in RN")))),(0,r.kt)("h2",o({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Baidu Smart-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"Alipay Mini-Program"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ByteDance Micro-App"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Label"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);