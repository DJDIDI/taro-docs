"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12097],{79874:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(93106);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},13022:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(93106),o=t(4706),a="tabItem_RP7f";function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i({children:e,hidden:n,className:t}){return r.createElement("div",l({role:"tabpanel",className:(0,o.Z)(a,t)},{hidden:n}),e)}},72460:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(93106),o=t(4706),a=t(84560),l=t(41505),i=t(63820),s=t(88302),u="tabList_JgiB",c="tabItem_mVYB";function p(){return p=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},p.apply(this,arguments)}function d(e){var n;const{lazy:t,block:a,defaultValue:d,values:m,groupId:f,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=null!=m?m:g.map((({props:{value:e,label:n,attributes:t}})=>({value:e,label:n,attributes:t}))),b=(0,l.l)(v,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);var k;const y=null===d?d:null!==(k=null!=d?d:null===(n=g.find((e=>e.props.default)))||void 0===n?void 0:n.props.value)&&void 0!==k?k:g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:w}=(0,i.U)(),[E,C]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=f){const e=x[f];null!=e&&e!==E&&v.some((n=>n.value===e))&&C(e)}const N=e=>{const n=e.currentTarget,t=j.indexOf(n),r=v[t].value;r!==E&&(O(n),C(r),null!=f&&w(f,String(r)))},T=e=>{let n=null;switch(e.key){case"Enter":N(e);break;case"ArrowRight":{const r=j.indexOf(e.currentTarget)+1;var t;n=null!==(t=j[r])&&void 0!==t?t:j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;var r;n=null!==(r=j[t])&&void 0!==r?r:j[j.length-1];break}}null==n||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},h)},v.map((({value:e,label:n,attributes:t})=>r.createElement("li",p({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>j.push(e),onKeyDown:T,onClick:N},t,{className:(0,o.Z)("tabs__item",c,null==t?void 0:t.className,{"tabs__item--active":E===e})}),null!=n?n:e)))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==E})))))}function m(e){const n=(0,a.Z)();return r.createElement(d,p({key:String(n)},e))}},89226:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});t(93106);var r=t(79874),o=t(72460),a=t(13022);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const s={title:"\u9519\u8bef\u5904\u7406"},u=void 0,c={unversionedId:"react-error-handling",id:"react-error-handling",title:"\u9519\u8bef\u5904\u7406",description:"React \u548c\u5c0f\u7a0b\u5e8f\u90fd\u63d0\u4f9b\u4e86\u5404\u81ea\u7684\u9519\u8bef\u5904\u7406\u65b9\u6cd5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u7ed3\u5408\u4f7f\u7528\u3002",source:"@site/docs/react-error-handling.mdx",sourceDirName:".",slug:"/react-error-handling",permalink:"/taro-docs/docs/next/react-error-handling",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/react-error-handling.mdx",tags:[],version:"current",frontMatter:{title:"\u9519\u8bef\u5904\u7406"},sidebar:"docs",previous:{title:"Hooks",permalink:"/taro-docs/docs/next/hooks"},next:{title:"React DevTools",permalink:"/taro-docs/docs/next/react-devtools"}},p={},d=[{value:"\u9519\u8bef\u8fb9\u754c",id:"\u9519\u8bef\u8fb9\u754c",level:2},{value:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c",id:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c",level:3},{value:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef",id:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef",level:3},{value:"App onError",id:"app-onerror",level:2}],m={toc:d};function f(e){var{components:n}=e,t=i(e,["components"]);return(0,r.kt)("wrapper",l({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React \u548c\u5c0f\u7a0b\u5e8f\u90fd\u63d0\u4f9b\u4e86\u5404\u81ea\u7684\u9519\u8bef\u5904\u7406\u65b9\u6cd5\uff0c\u672c\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Taro \u4e2d\u7ed3\u5408\u4f7f\u7528\u3002"),(0,r.kt)("h2",l({},{id:"\u9519\u8bef\u8fb9\u754c"}),"\u9519\u8bef\u8fb9\u754c"),(0,r.kt)("p",null,"React 16 \u5f15\u5165\u4e86",(0,r.kt)("a",l({parentName:"p"},{href:"https://reactjs.org/docs/error-boundaries.html"}),"\u9519\u8bef\u8fb9\u754c"),"\u7684\u6982\u5ff5\uff0c\u76f8\u6bd4\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"try catch")," \u548c\u5c0f\u7a0b\u5e8f\u7684\u5168\u5c40\u9519\u8bef\u76d1\u542c\u56de\u8c03 ",(0,r.kt)("inlineCode",{parentName:"p"},"App onError"),"\uff0c\u5b83\u7684\u4f18\u70b9\u5728\u4e8e\u80fd\u6355\u83b7 React \u6e32\u67d3\u8fc7\u7a0b\u4e2d\u7684\u9519\u8bef\u548c\u663e\u793a\u515c\u5e95\u754c\u9762\u3002"),(0,r.kt)("admonition",l({},{type:"note"}),(0,r.kt)("p",{parentName:"admonition"},"\u9519\u8bef\u8fb9\u754c\u4e0d\u80fd\u6355\u83b7\u4ee5\u4e0b\u9519\u8bef\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u56de\u8c03"),(0,r.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u4ee3\u7801\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," \u56de\u8c03"),(0,r.kt)("li",{parentName:"ul"},"\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u81ea\u8eab\u7684\u6e32\u67d3\u9519\u8bef")),(0,r.kt)("p",{parentName:"admonition"},"\u524d\u4e24\u70b9\u5efa\u8bae\u76f4\u63a5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"try catch")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"App onError")," \u8fdb\u884c\u5904\u7406\uff0c\u7b2c\u4e09\u70b9\u5c06\u5728\u540e\u6587\u4e2d\u4ecb\u7ecd\u3002")),(0,r.kt)("h3",l({},{id:"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c"}),"\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c"),(0,r.kt)("p",null,"\u6b63\u5982 React \u6587\u6863\u6240\u6307\u51fa\u7684\uff0c\u9519\u8bef\u8fb9\u754c\u7684\u9897\u7c92\u5ea6\u53ef\u4ee5\u7531\u5f00\u53d1\u8005\u81ea\u884c\u9009\u62e9\u3002\u5982\u679c\u8981\u6355\u83b7",(0,r.kt)("strong",{parentName:"p"},"\u9875\u9762\u5185\u5b50\u7ec4\u4ef6"),"\u7684\u9519\u8bef\uff0c\u53ef\u4ee5\u628a\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"class BuggyCounter extends Component {\n  state = {\n    counter: 0\n  }\n\n  handleClick = () => {\n    this.setState(({ counter }) => ({\n      counter: counter + 1\n    }))\n  }\n\n  render() {\n    if (this.state.counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n    return <Button onClick={this.handleClick}>{this.state.counter}</Button>\n  }\n}\n\n// \u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\nexport default class Index extends Component {\n  state = {\n    hasError: null\n  }\n\n  static getDerivedStateFromError () {\n    return {\n      hasError: true\n    }\n  }\n\n  componentDidCatch(error, errorInfo) {\n    console.log(error, errorInfo)\n  }\n\n  render() {\n    return (\n      this.state.hasError\n        // \u5f02\u5e38\u65f6\u663e\u793a\u515c\u5e95 UI\n        ? <View>Something went wrong.</View>\n        // \u6b63\u5e38\u663e\u793a\n        : <BuggyCounter></BuggyCounter>\n    )\n  }\n}\n")),(0,r.kt)("h3",l({},{id:"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef"}),"\u6355\u83b7\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u7684\u9519\u8bef"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u8ba8\u8bba\uff1a",(0,r.kt)("a",l({parentName:"p"},{href:"https://github.com/NervJS/taro/pull/8191"}),"#8191"))),(0,r.kt)("p",null,"\u8fd8\u8bb0\u5f97\u9519\u8bef\u8fb9\u754c\u7684\u7b2c\u4e09\u4e2a\u9650\u5236",(0,r.kt)("strong",{parentName:"p"},"\u201c\u4e0d\u80fd\u6355\u83b7\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u81ea\u8eab\u7684\u6e32\u67d3\u9519\u8bef\u201d"),"\u5417\uff1f\u5982\u679c\u6211\u4eec\u628a\u9875\u9762\u7ec4\u4ef6\u81ea\u8eab\u4f5c\u4e3a\u9519\u8bef\u8fb9\u754c\uff0c\u8fd9\u65f6\u662f\u4e0d\u80fd\u6355\u83b7\u5176\u81ea\u8eab\u7684\u9519\u8bef\u7684\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u518d\u521b\u5efa\u4e00\u4e2a\u9519\u8bef\u8fb9\u754c\u7ec4\u4ef6\u4ee5\u5305\u88f9\u6211\u4eec\u7684\u9875\u9762\u7ec4\u4ef6\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528\u9ad8\u9636\u7ec4\u4ef6\u4e3a\u9875\u9762\u7ec4\u4ef6\u5d4c\u5957\u9519\u8bef\u8fb9\u754c\uff0c\u5982\u679c\u9875\u9762\u7ec4\u4ef6\u4e3a Class Component\uff0c\u8fd8\u9700\u8981\u5bf9 Taro \u7684\u751f\u547d\u5468\u671f\u8fdb\u884c\u989d\u5916\u5904\u7406\u3002\u56e0\u6b64\u5efa\u8bae\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u9875\u9762\u7ec4\u4ef6\u4f7f\u7528 Functional Component \u7684\u5199\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)(o.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"import React, { Component } from 'react'\nimport { View, Button } from '@tarojs/components'\n\n// \u9875\u9762\u7ec4\u4ef6\nclass Index extends Component {\n  state = {\n    counter: 0\n  }\n\n  componentDidShow () {\n    console.log('show')\n  }\n\n  componentDidHide () {\n    console.log('hide')\n  }\n\n  onShareAppMessage () {\n    return {\n      title: 'myShareTitle'\n    }\n  }\n\n  handleClick = () => {\n    this.setState(({ counter }) => ({\n      counter: counter + 1\n    }))\n  }\n\n  render() {\n    if (this.state.counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n    return <Button onClick={this.handleClick}>{this.state.counter}</Button>\n  }\n}\n\n// \u4f7f\u7528 HOC \u4ee5\u65b9\u4fbf\u4e3a\u5404\u4e2a\u9875\u9762\u590d\u7528\u8fd9\u6bb5\u903b\u8f91\nfunction createErrorBoundary (Page) {\n  return class ErrorBoundary extends Component {\n    el = React.createRef()\n    state = {\n      hasError: null\n    }\n\n    static getDerivedStateFromError () {\n      return {\n        hasError: true\n      }\n    }\n\n    componentDidCatch(error, errorInfo) {\n      console.log(error, errorInfo)\n    }\n\n    /* Start \u9700\u8981\u624b\u52a8\u8c03\u7528\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5 **/\n    componentDidShow () {\n      return this.el.current?.componentDidShow?.()\n    }\n\n    componentDidHide () {\n      return this.el.current?.componentDidHide?.()\n    }\n\n    onShareAppMessage () {\n      return this.el.current?.onShareAppMessage?.()\n    }\n\n    //...\n\n    /* End \u9700\u8981\u624b\u52a8\u8c03\u7528\u9875\u9762\u7ec4\u4ef6\u4e0a\u7684\u751f\u547d\u5468\u671f\u65b9\u6cd5 **/\n\n    render() {\n      return (\n        this.state.hasError\n          ? <View>Something went wrong.</View>\n          : <Page ref={this.el} />\n      )\n    }\n  }\n}\n\nexport default createErrorBoundary(Index)\n"))),(0,r.kt)(a.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="pages/index/index.jsx"',title:'"pages/index/index.jsx"'}),"import { Component, useEffect, useState } from 'react'\nimport { View, Button } from '@tarojs/components'\nimport { useDidShow, useDidHide, useShareAppMessage } from '@tarojs/taro'\n\nfunction Index () {\n  const [counter, setCounter] = useState(0)\n\n  useDidShow(() => console.log('show'))\n\n  useDidHide(() => console.log('hide'))\n\n  useShareAppMessage(() => ({ title: 'myShareTitle' }))\n\n  function handleClick () {\n    setCounter(counter + 1)\n  }\n\n  useEffect(() => {\n    if (counter === 2) {\n      // \u6a21\u62df JS \u62a5\u9519\n      throw new Error('I crashed!')\n    }\n  })\n\n  return <Button onClick={handleClick}>{counter}</Button>\n\n}\n\n// \u4f7f\u7528 HOC \u4ee5\u65b9\u4fbf\u4e3a\u5404\u4e2a\u9875\u9762\u590d\u7528\u8fd9\u6bb5\u903b\u8f91\nfunction createErrorBoundary (Page) {\n  return class ErrorBoundary extends Component {\n    state = {\n      hasError: null\n    }\n\n    static getDerivedStateFromError () {\n      return {\n        hasError: true\n      }\n    }\n\n    componentDidCatch(error, errorInfo) {\n      console.log(error, errorInfo)\n    }\n\n    render() {\n      return (\n        this.state.hasError\n          ? <View>Something went wrong.</View>\n          : <Page />\n      )\n    }\n  }\n}\n\nexport default createErrorBoundary(Index)\n")))),(0,r.kt)("h2",l({},{id:"app-onerror"}),"App onError"),(0,r.kt)("admonition",l({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Taro v3.5+ \u5f00\u59cb\u652f\u6301")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"React \u6e32\u67d3\u6d41\u7a0b\u4e4b\u5916\u7684 JS \u9519\u8bef\u90fd\u80fd\u88ab\u5176\u76d1\u542c\u5230\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6e32\u67d3\u9519\u8bef\u6ca1\u6709\u88ab\u5f00\u53d1\u8005\u8bbe\u7f6e\u7684\u9519\u8bef\u8fb9\u754c\u6355\u83b7\u65f6\uff0c\u6e32\u67d3\u62a5\u9519\u90fd\u53ef\u4ee5\u88ab\u76d1\u542c\u5230\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\u4ee3\u7801\uff1a")),(0,r.kt)(o.Z,{defaultValue:"class",values:[{label:"Class Component",value:"class"},{label:"Functional Component",value:"functional"}],mdxType:"Tabs"},(0,r.kt)(a.Z,{value:"class",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { Component } from 'react'\n\nexport default class App extends Component {\n  onError (error) {\n    console.log(error)\n  }\n\n  render () {\n    return this.props.children\n  }\n}\n"))),(0,r.kt)(a.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-jsx",metastring:'title="app.js"',title:'"app.js"'}),"import { useError } from '@tarojs/taro'\n\nexport default function App (props) {\n  useError(error => console.log(error))\n\n  return props.children\n}\n")))))}f.isMDXComponent=!0}}]);