"use strict";(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[30825],{79874:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return C}});var o=n(93106);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=u(n),C=r,x=d["".concat(i,".").concat(C)]||d[C]||s[C]||a;return n?o.createElement(x,l(l({ref:t},p),{},{components:n})):o.createElement(x,l({ref:t},p))}));function C(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<a;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p}});n(93106);var o=n(79874);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={title:"Context"},c=void 0,i={unversionedId:"context",id:"context",title:"Context",description:"\u81ea v1.3.0-beta.5 \u8d77\u652f\u6301",source:"@site/docs/context.md",sourceDirName:".",slug:"/context",permalink:"/taro-docs/docs/next/context",draft:!1,editUrl:"https://github.com/nervjs/taro-docs/edit/master/docs/context.md",tags:[],version:"current",frontMatter:{title:"Context"}},u={},p=[{value:"API",id:"api",level:2},{value:"Taro.createContext",id:"tarocreatecontext",level:3},{value:"Context.Provider",id:"contextprovider",level:3},{value:"Class.contextType",id:"classcontexttype",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u52a8\u6001 Context",id:"\u52a8\u6001-context",level:3},{value:"\u6d88\u8d39\u591a\u4e2a Context",id:"\u6d88\u8d39\u591a\u4e2a-context",level:3}],s={toc:p};function d(e){var{components:t}=e,n=a(e,["components"]);return(0,o.kt)("wrapper",r({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.3.0-beta.5")," \u8d77\u652f\u6301\n\u5728 Taro \u4e2d\u6ca1\u6709\u5bf9 React 15 \u7684 ",(0,o.kt)("a",r({parentName:"p"},{href:"https://zh-hans.reactjs.org/docs/legacy-context.html"}),"legacy context")," \u8fdb\u884c\u652f\u6301\uff0c\u65e0\u6cd5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"getChildContext()")," API\u3002")),(0,o.kt)("p",null,"\u5728\u4e00\u4e2a\u5178\u578b\u7684 Taro \u5e94\u7528\u4e2d\uff0c\u6570\u636e\u662f\u901a\u8fc7 props \u5c5e\u6027\u81ea\u4e0a\u800c\u4e0b\uff08\u7531\u7236\u53ca\u5b50\uff09\u8fdb\u884c\u4f20\u9012\u7684\uff0c\u4f46\u8fd9\u79cd\u505a\u6cd5\u5bf9\u4e8e\u67d0\u4e9b\u7c7b\u578b\u7684\u5c5e\u6027\u800c\u8a00\u662f\u6781\u5176\u7e41\u7410\u7684\uff08\u4f8b\u5982\uff1a\u5730\u533a\u504f\u597d\uff0cUI \u4e3b\u9898\uff09\uff0c\u8fd9\u4e9b\u5c5e\u6027\u662f\u5e94\u7528\u7a0b\u5e8f\u4e2d\u8bb8\u591a\u7ec4\u4ef6\u90fd\u9700\u8981\u7684\u3002Context \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728\u7ec4\u4ef6\u4e4b\u95f4\u5171\u4eab\u6b64\u7c7b\u503c\u7684\u65b9\u5f0f\uff0c\u800c\u4e0d\u5fc5\u663e\u5f0f\u5730\u901a\u8fc7\u7ec4\u4ef6\u6811\u7684\u9010\u5c42\u4f20\u9012 props\u3002"),(0,o.kt)("h2",r({},{id:"api"}),"API"),(0,o.kt)("h3",r({},{id:"tarocreatecontext"}),"Taro.createContext"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"const MyContext = Taro.createContext(defaultValue)\n")),(0,o.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Context \u5bf9\u8c61\u3002\u5f53 Taro \u6e32\u67d3\u4e00\u4e2a\u8ba2\u9605\u4e86\u8fd9\u4e2a Context \u5bf9\u8c61\u7684\u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u4f1a\u4ece\u6700\u5148\u6e32\u67d3\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," \u4e2d\u8bfb\u53d6\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),"\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728 Taro \u4e2d\uff0c\u5373\u4fbf\u5728\u6846\u67b6\u5c42\u9762\u4e5f\u65e0\u6cd5\u77e5\u9053\u7ec4\u4ef6\u7684\u6811\u7ed3\u6784\uff0c\u56e0\u6b64 Taro \u65e0\u6cd5\u50cf React \u4e00\u6837\u5f80\u7236\u7ec4\u4ef6\u627e\u79bb\u81ea\u5df1\u6700\u8fd1\u7684 Provider\u3002\u56e0\u6b64\u521b\u5efa\u7684 Context \u6700\u597d\u53ea\u5728\u4e00\u4e2a\u5730\u65b9\u4f7f\u7528\u3002")),(0,o.kt)("h3",r({},{id:"contextprovider"}),"Context.Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"<MyContext.Provider value={/* \u67d0\u4e2a\u503c */}>\n")),(0,o.kt)("p",null,"\u6bcf\u4e2a Context \u5bf9\u8c61\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a Provider Taro \u7ec4\u4ef6\uff0c\u5b83\u5141\u8bb8\u6d88\u8d39\u7ec4\u4ef6\u8ba2\u9605 context \u7684\u53d8\u5316\u3002"),(0,o.kt)("p",null,"Provider \u63a5\u6536\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u5c5e\u6027\uff0c\u4f20\u9012\u7ed9\u6d88\u8d39\u7ec4\u4ef6\u3002\u4e00\u4e2a Provider \u53ef\u4ee5\u548c\u591a\u4e2a\u6d88\u8d39\u7ec4\u4ef6\u6709\u5bf9\u5e94\u5173\u7cfb\u3002\u591a\u4e2a Provider \u4e5f\u53ef\u4ee5\u5d4c\u5957\u4f7f\u7528\uff0c\u91cc\u5c42\u7684\u4f1a\u8986\u76d6\u5916\u5c42\u7684\u6570\u636e\u3002"),(0,o.kt)("p",null,"\u5f53 Provider \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u503c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u5b83\u5185\u90e8\u7684\u6240\u6709\u6d88\u8d39\u7ec4\u4ef6\u90fd\u4f1a\u91cd\u65b0\u6e32\u67d3\u3002Provider \u53ca\u5176\u5185\u90e8\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"contextType")," \u6216\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," \u7ec4\u4ef6\u90fd\u4e0d\u53d7\u5236\u4e8e shouldComponentUpdate \u51fd\u6570\uff0c\u56e0\u6b64\u5f53 consumer \u7ec4\u4ef6\u5728\u5176\u7956\u5148\u7ec4\u4ef6\u9000\u51fa\u66f4\u65b0\u7684\u60c5\u51b5\u4e0b\u4e5f\u80fd\u66f4\u65b0\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u65b0\u65e7\u503c\u68c0\u6d4b\u6765\u786e\u5b9a\u53d8\u5316\uff0c\u4f7f\u7528\u4e86\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.is")," \u76f8\u540c\u7684\u7b97\u6cd5\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7531\u4e8e\u73b0\u5728 Taro \u8fd8\u6ca1\u6709 render props \u7684\u5b8c\u6574\u652f\u6301\uff0c\u6240\u4ee5\u65e0\u6cd5\u4f7f\u7528 Context.Comsumer API\uff0c\u5982\u679c\u8981\u6d88\u8d39 Context\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ContextType")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," API\u3002")),(0,o.kt)("h3",r({},{id:"classcontexttype"}),"Class.contextType"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"class MyClass extends Taro.Component {\n  componentDidMount() {\n    let value = this.context;\n    /* \u5728\u7ec4\u4ef6\u6302\u8f7d\u5b8c\u6210\u540e\uff0c\u4f7f\u7528 MyContext \u7ec4\u4ef6\u7684\u503c\u6765\u6267\u884c\u4e00\u4e9b\u6709\u526f\u4f5c\u7528\u7684\u64cd\u4f5c */\n  }\n  componentDidUpdate() {\n    let value = this.context;\n    /* ... */\n  }\n  componentWillUnmount() {\n    let value = this.context;\n    /* ... */\n  }\n  render() {\n    let value = this.context;\n    /* \u57fa\u4e8e MyContext \u7ec4\u4ef6\u7684\u503c\u8fdb\u884c\u6e32\u67d3 */\n  }\n}\nMyClass.contextType = MyContext;\n")),(0,o.kt)("p",null,"\u6302\u8f7d\u5728 class \u4e0a\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"contextType")," \u5c5e\u6027\u4f1a\u88ab\u91cd\u8d4b\u503c\u4e3a\u4e00\u4e2a\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"Taro.createContext()")," \u521b\u5efa\u7684 Context \u5bf9\u8c61\u3002\u8fd9\u80fd\u8ba9\u4f60\u4f7f\u7528 this.context \u6765\u6d88\u8d39 Context \u4e0a\u7684\u90a3\u4e2a\u503c\u3002\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u751f\u547d\u5468\u671f\u4e2d\u8bbf\u95ee\u5230\u5b83\uff0c\u5305\u62ec render \u51fd\u6570\u4e2d\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\n\u4f60\u53ea\u901a\u8fc7\u8be5 API \u8ba2\u9605\u5355\u4e00 context\u3002\u5982\u679c\u4f60\u60f3\u8ba2\u9605\u591a\u4e2a\uff0c\u9605\u8bfb\u4f7f\u7528\u591a\u4e2a Context \u7ae0\u8282\n\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u5b9e\u9a8c\u6027\u7684 public class fields \u8bed\u6cd5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 static \u8fd9\u4e2a\u7c7b\u5c5e\u6027\u6765\u521d\u59cb\u5316\u4f60\u7684 contextType\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"class MyClass extends React.Component {\n  static contextType = MyContext;\n  render() {\n    let value = this.context;\n    /* \u57fa\u4e8e\u8fd9\u4e2a\u503c\u8fdb\u884c\u6e32\u67d3\u5de5\u4f5c */\n  }\n}\n")),(0,o.kt)("h2",r({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,o.kt)("h3",r({},{id:"\u52a8\u6001-context"}),"\u52a8\u6001 Context"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"// counter-context.js\nexport const CounterContext = Taro.createContext(0);\n\n// index.js\nclass Index extends Component {\n  render () {\n    const [ count, setCount ] = useState(0)\n    return (\n      <CounterContext.Provider value={count}>\n        <View className='container'>\n          <Test />\n          <Button onClick={() => setCount(0)}>Reset</Button>\n          <Button onClick={() => setCount(prevCount => prevCount + 1)}>+</Button>\n          <Button onClick={() => setCount(prevCount => prevCount - 1)}>-</Button>\n        </View>\n      </CounterContext.Provider>\n    )\n  }\n}\n\n// child.js\nclass Child extends Taro.Component {\n  shouldComponentUpdate () {\n    // \u5373\u4fbf\u8fd4\u56de false \u4e5f\u4e0d\u4f1a\u963b\u6b62 CounterContext \u66f4\u65b0\u6d88\u8d39\u5b83\u7684\u7ec4\u4ef6\n    return false\n  }\n\n  render () {\n    return <Counter />\n  }\n}\n\n// counter.js\nimport { CounterContext } from './counter-context.js'\nclass Counter extends Taro.Component {\n  static contextType = CounterContext\n\n  render () {\n    const value = this.context\n    return (\n      <View>\n        Count: {value}\n      </View>\n    )\n  }\n}\n")),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u628a\u8ba1\u6570\u5668 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u503c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"CounterContext.Provider")," \u5f80\u4e0b\u4f20\u9012\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Child")," \u7ec4\u4ef6\u4e2d\u867d\u7136\u7981\u6b62\u4e86\u66f4\u65b0\uff0c\u4f46 ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter")," \u7ec4\u4ef6\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"CounterContext.Provider")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," \u6bcf\u6b21\u53d8\u5316\u4e4b\u540e\uff0c\u8fd8\u662f\u80fd\u591f\u8ba2\u9605\u66f4\u65b0\uff0c\u6536\u5230\u6bcf\u6b21 ",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u7684\u503c\u3002"),(0,o.kt)("h3",r({},{id:"\u6d88\u8d39\u591a\u4e2a-context"}),"\u6d88\u8d39\u591a\u4e2a Context"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-jsx"}),"const ThemeContext = Taro.createContext('light');\n\n// \u7528\u6237\u767b\u5f55 context\nconst UserContext = Taro.createContext({\n  name: 'Guest',\n});\n\nclass App extends Taro.Component {\n  render() {\n    const {signedInUser, theme} = this.props;\n\n    // \u63d0\u4f9b\u521d\u59cb context \u503c\u7684 App \u7ec4\u4ef6\n    return (\n      <ThemeContext.Provider value={theme}>\n        <UserContext.Provider value={signedInUser}>\n          <Layout />\n        </UserContext.Provider>\n      </ThemeContext.Provider>\n    );\n  }\n}\n\nfunction Layout() {\n  return (\n    <div>\n      <Sidebar />\n      <Content />\n    </div>\n  );\n}\n\n// \u4e00\u4e2a\u7ec4\u4ef6\u53ef\u80fd\u4f1a\u6d88\u8d39\u591a\u4e2a context\nfunction Content() {\n  const theme = useContext(ThemeContext)\n  const user =  useContext(UserContext)\n  return (\n    <ProfilePage user={user} theme={theme} />\n  )\n}\n")))}d.isMDXComponent=!0}}]);