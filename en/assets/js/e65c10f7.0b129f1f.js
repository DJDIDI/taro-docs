"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[75455],{79874:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(93106);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=s(n),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:e},c),{},{components:n})):r.createElement(f,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13022:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(93106),a=n(4706),o="tabItem_RP7f";function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function i({children:t,hidden:e,className:n}){return r.createElement("div",l({role:"tabpanel",className:(0,a.Z)(o,n)},{hidden:e}),t)}},72460:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(93106),a=n(4706),o=n(84560),l=n(41505),i=n(63820),u=n(88302),s="tabList_JgiB",c="tabItem_mVYB";function m(){return m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},m.apply(this,arguments)}function p(t){var e;const{lazy:n,block:o,defaultValue:p,values:d,groupId:f,className:k}=t,b=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=null!=d?d:b.map((({props:{value:t,label:e,attributes:n}})=>({value:t,label:e,attributes:n}))),v=(0,l.l)(h,((t,e)=>t.value===e.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var y;const g=null===p?p:null!==(y=null!=p?p:null===(e=b.find((t=>t.props.default)))||void 0===e?void 0:e.props.value)&&void 0!==y?y:b[0].props.value;if(null!==g&&!h.some((t=>t.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:w}=(0,i.U)(),[x,O]=(0,r.useState)(g),P=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=f){const t=N[f];null!=t&&t!==x&&h.some((e=>e.value===t))&&O(t)}const S=t=>{const e=t.currentTarget,n=P.indexOf(e),r=h[n].value;r!==x&&(T(e),O(r),null!=f&&w(f,String(r)))},E=t=>{let e=null;switch(t.key){case"Enter":S(t);break;case"ArrowRight":{const r=P.indexOf(t.currentTarget)+1;var n;e=null!==(n=P[r])&&void 0!==n?n:P[0];break}case"ArrowLeft":{const n=P.indexOf(t.currentTarget)-1;var r;e=null!==(r=P[n])&&void 0!==r?r:P[P.length-1];break}}null==e||e.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":o},k)},h.map((({value:t,label:e,attributes:n})=>r.createElement("li",m({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:t=>P.push(t),onKeyDown:E,onClick:S},n,{className:(0,a.Z)("tabs__item",c,null==n?void 0:n.className,{"tabs__item--active":x===t})}),null!=e?e:t)))),n?(0,r.cloneElement)(b.filter((t=>t.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==x})))))}function d(t){const e=(0,o.Z)();return r.createElement(p,m({key:String(e)},t))}},96351:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});n(93106);var r=n(79874),a=n(72460),o=n(13022);function l(){return l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},l.apply(this,arguments)}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}const u={title:"Form",sidebar_label:"Form"},s=void 0,c={unversionedId:"components/forms/form",id:"components/forms/form",title:"Form",description:"Form. It is used to submit the switch, input, checkbox, slider, radio, and picker that are entered by the user in the component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/components/forms/form.md",sourceDirName:"components/forms",slug:"/components/forms/form",permalink:"/taro-docs/en/docs/next/components/forms/form",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/components/forms/form.md",tags:[],version:"current",frontMatter:{title:"Form",sidebar_label:"Form"},sidebar:"components",previous:{title:"Editor",permalink:"/taro-docs/en/docs/next/components/forms/editor"},next:{title:"Input",permalink:"/taro-docs/en/docs/next/components/forms/input"}},m={},p=[{value:"Type",id:"type",level:2},{value:"Examples",id:"examples",level:2},{value:"FormProps",id:"formprops",level:2},{value:"Property Support",id:"property-support",level:3},{value:"onSubmitEventDetail",id:"onsubmiteventdetail",level:3},{value:"API Support",id:"api-support",level:2}],d={toc:p};function f(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)("wrapper",l({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Form. It is used to submit the switch, input, checkbox, slider, radio, and picker that are entered by the user in the component."),(0,r.kt)("p",null,"In the form, when the button component in which form-type is set to submit is tapped, the value in the form component will be submitted. You need to add name to the form component as the key."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",l({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/form.html"}),"Reference"))),(0,r.kt)("h2",l({},{id:"type"}),"Type"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"ComponentType<FormProps>\n")),(0,r.kt)("h2",l({},{id:"examples"}),"Examples"),(0,r.kt)(a.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"React",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-tsx"}),"class App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n"))),(0,r.kt)(o.Z,{value:"Vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-html"}),'<template>\n  <form @submit="formSubmit" @reset="formReset" >\n      <view class="taro-example-body">\n        <switch name="switch" class="form-switch"></Switch>\n      </view>\n      <view class="taro-example-btns">\n        <button form-type="submit">Submit</button>\n        <button type="default" form-type="reset">Reset</button>\n    </view>\n  </form>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {}\n  },\n  methods: {\n    formSubmit (e) {\n      console.log(e)\n    },\n\n    formReset (e) {\n      console.log(e)\n    }\n  }\n}\n<\/script>\n\n')))),(0,r.kt)("h2",l({},{id:"formprops"}),"FormProps"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Default"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"reportSubmit"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"false")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Specifies whether to return the formId for sending a Message Template.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"reportSubmitTimeout"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},(0,r.kt)("code",null,"0")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Duration (in ms) before confirmation on whether the formId takes effect timed out. If this parameter is not specified, there is a low probability (for example, in case of network failure) that the formId does not take effect. Specifying this parameter allows you to detect whether the formId takes effect before timeout. If failed, a formId prefixed with requestFormId:fail is returned.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onSubmit"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<onSubmitEventDetail>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggers a submit event that carries the form data.",(0,r.kt)("br",null),"event.detail = ","{ value : { name': 'value'}, formId: '' }")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"onReset"),(0,r.kt)("td",null,(0,r.kt)("code",null,"BaseEventOrigFunction<any>")),(0,r.kt)("td",{style:{textAlign:"center"}}),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Triggers a submit event that carries the form data.")))),(0,r.kt)("h3",l({},{id:"property-support"}),"Property Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"Property"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"FormProps.reportSubmit"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"FormProps.reportSubmitTimeout"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"FormProps.onSubmit"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"})),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"FormProps.onReset"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))),(0,r.kt)("h3",l({},{id:"onsubmiteventdetail"}),"onSubmitEventDetail"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Param"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"value"),(0,r.kt)("td",null,(0,r.kt)("code",null,"{ [formItemName: string]: any; }")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"When the ",(0,r.kt)("code",null,"<button>")," component of a ",(0,r.kt)("code",null,"<form>")," form with a ",(0,r.kt)("code",null,"form-type")," of submit is clicked,  the the ",(0,r.kt)("code",null,"value")," in the form component is submitted. ",(0,r.kt)("br",null),"You need to add ",(0,r.kt)("code",null,"name")," as the ",(0,r.kt)("code",null,"key")," in the form component.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"formId"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"When ",(0,r.kt)("code",null,"reportSubmit")," is ",(0,r.kt)("code",null,"true"),", returns ",(0,r.kt)("code",null,"formId")," for sending template messages.")))),(0,r.kt)("h2",l({},{id:"api-support"}),"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"API"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"WeChat Mini-Program"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",l({parentName:"tr"},{align:"center"}),"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"Form"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),(0,r.kt)("td",l({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}f.isMDXComponent=!0}}]);