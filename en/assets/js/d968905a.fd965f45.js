"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[97980],{79874:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(93106);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):m(m({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(i,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(d,m(m({ref:t},l),{},{components:n})):r.createElement(d,m({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,m=new Array(a);m[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,m[1]=c;for(var p=2;p<a;p++)m[p]=n[p];return r.createElement.apply(null,m)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},55986:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return m},metadata:function(){return i},toc:function(){return l}});n(93106);var r=n(79874);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m={title:"Form",sidebar_label:"Form"},c=void 0,i={unversionedId:"components/forms/form",id:"version-1.x/components/forms/form",title:"Form",description:"\u8868\u5355\uff0c\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u3002\u5f53\u70b9\u51fb \u8868\u5355\u4e2d formType \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key",source:"@site/versioned_docs/version-1.x/components/forms/form.md",sourceDirName:"components/forms",slug:"/components/forms/form",permalink:"/taro-docs/en/docs/1.x/components/forms/form",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/versioned_docs/version-1.x/components/forms/form.md",tags:[],version:"1.x",frontMatter:{title:"Form",sidebar_label:"Form"},sidebar:"version-1.x/components",previous:{title:"Checkbox",permalink:"/taro-docs/en/docs/1.x/components/forms/checkbox"},next:{title:"Input",permalink:"/taro-docs/en/docs/1.x/components/forms/input"}},p={},l=[{value:"\u8868\u5355\uff0c\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u3002\u5f53\u70b9\u51fb \u8868\u5355\u4e2d formType \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key",id:"\u8868\u5355\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u5f53\u70b9\u51fb-\u8868\u5355\u4e2d-formtype-\u4e3a-submit-\u7684-button-\u7ec4\u4ef6\u65f6\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684-value-\u503c\u8fdb\u884c\u63d0\u4ea4\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a-name-\u6765\u4f5c\u4e3a-key",level:5},{value:"\u793a\u4f8b\uff1a",id:"\u793a\u4f8b",level:6}],s={toc:l};function u(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h5",o({},{id:"\u8868\u5355\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u5f53\u70b9\u51fb-\u8868\u5355\u4e2d-formtype-\u4e3a-submit-\u7684-button-\u7ec4\u4ef6\u65f6\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684-value-\u503c\u8fdb\u884c\u63d0\u4ea4\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a-name-\u6765\u4f5c\u4e3a-key"}),"\u8868\u5355\uff0c\u5c06\u7ec4\u4ef6\u5185\u7684\u7528\u6237\u8f93\u5165\u7684\u503c\u63d0\u4ea4\u3002\u5f53\u70b9\u51fb \u8868\u5355\u4e2d formType \u4e3a submit \u7684 button \u7ec4\u4ef6\u65f6\uff0c\u4f1a\u5c06\u8868\u5355\u7ec4\u4ef6\u4e2d\u7684 value \u503c\u8fdb\u884c\u63d0\u4ea4\uff0c\u9700\u8981\u5728\u8868\u5355\u7ec4\u4ef6\u4e2d\u52a0\u4e0a name \u6765\u4f5c\u4e3a key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5c5e\u6027\u53ca\u652f\u6301\u5ea6")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"H5"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"ReactNative"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u5c5e\u6027\u503c"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u7c7b\u578b"),(0,r.kt)("th",o({parentName:"tr"},{align:"center"}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"})),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"x"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"reportSubmit"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"Boolean"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de formId \u7528\u4e8e\u53d1\u9001\u6a21\u677f\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"onSubmit"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EventHandle"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u643a\u5e26 form \u4e2d\u7684\u6570\u636e\u89e6\u53d1 submit \u4e8b\u4ef6\uff0cevent.detail = {value : {'name': 'value'}}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u2714"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"x"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"onReset"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"EventHandle"),(0,r.kt)("td",o({parentName:"tr"},{align:"center"}),"\u8868\u5355\u91cd\u7f6e\u65f6\u4f1a\u89e6\u53d1 reset \u4e8b\u4ef6")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5176\u4ed6\u76f8\u5173\u5c5e\u6027\u8bf7\u770b\u5404\u5c0f\u7a0b\u5e8f\u5b98\u65b9\u6587\u6863")),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/form.html"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/component/formlist/#form"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://docs.alipay.com/mini/component/form"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"https://developer.toutiao.com/docs/comp/form.html"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f Form"),"\u3002"),(0,r.kt)("h6",o({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 Form \u7ec4\u4ef6\nimport { View, Form, Switch } from '@tarojs/components'\n\nclass App extends Component {\n\n  formSubmit = e => {\n    console.log(e)\n  }\n\n  formReset = e => {\n    console.log(e)\n  }\n\n  render () {\n    return (\n      <Form onSubmit={this.formSubmit} onReset={this.formReset} >\n        <View className='example-body'>\n          <Switch name='switch' className='form-switch'></Switch>\n        </View>\n      </Form>\n    )\n  }\n}\n")))}u.isMDXComponent=!0}}]);