"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4200,4321],{3905:(e,t,r)=>{r.r(t),r.d(t,{MDXContext:()=>p,MDXProvider:()=>d,mdx:()=>y,useMDXComponents:()=>u,withMDXComponents:()=>s});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){return function(t){var r=u(t.components);return n.createElement(e,o({},t,{components:r}))}},u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54299:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=(r(44996),["components"]),l={},c=void 0,p={type:"mdx",permalink:"/docs/plugins/leak-canary/overview",source:"@site/src/embedded-pages/docs/plugins/leak-canary/overview.mdx",description:"The LeakCanary plugin provides Developers with Flipper support for LeakCanary, an open source memory leak detection library.",frontMatter:{}},s=[],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"The LeakCanary plugin provides Developers with Flipper support for ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/square/leakcanary"},"LeakCanary"),", an open source memory leak detection library."),(0,o.mdx)("p",null,"Leaks detected by LeakCanary appear automatically in Flipper. Each leak displays a hierarchy of objects, beginning with the garbage collector root and ending at the leaked class.\nSelecting any object in this list displays contents of the object's various fields."))}d.isMDXComponent=!0},62342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=r(54299),l=["components"],c={id:"leak-canary",title:"LeakCanary Plugin",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/leak_canary/docs/overview.mdx"},p=void 0,s={unversionedId:"features/plugins/leak-canary",id:"features/plugins/leak-canary",title:"LeakCanary Plugin",description:"\u2192 See setup instructions for the LeakCanary plugin",source:"@site/../docs/features/plugins/leak-canary.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/leak-canary",permalink:"/docs/features/plugins/leak-canary",draft:!1,editUrl:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/leak_canary/docs/overview.mdx",tags:[],version:"current",frontMatter:{id:"leak-canary",title:"LeakCanary Plugin",sidebar_label:"LeakCanary",custom_edit_url:"https://github.com/facebook/flipper/blob/main/desktop/plugins/public/leak_canary/docs/overview.mdx"},sidebar:"main",previous:{title:"Layout",permalink:"/docs/features/plugins/inspector"},next:{title:"Navigation",permalink:"/docs/features/plugins/navigation"}},u={},d=[],m={toc:d};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"\u2192 ",(0,o.mdx)("a",{parentName:"p",href:"/docs/setup/plugins/leak-canary"},"See setup instructions for the LeakCanary plugin")),(0,o.mdx)(i.default,{mdxType:"Article"}))}f.isMDXComponent=!0}}]);