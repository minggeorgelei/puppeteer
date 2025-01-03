/*! For license information please see 21c143ec.2b6424af.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[54751],{66746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"api/puppeteer.waitforoptions","title":"WaitForOptions interface","description":"Signature","source":"@site/versioned_docs/version-23.11.1/api/puppeteer.waitforoptions.md","sourceDirName":"api","slug":"/api/puppeteer.waitforoptions","permalink":"/api/puppeteer.waitforoptions","draft":false,"unlisted":false,"tags":[],"version":"23.11.1","frontMatter":{"sidebar_label":"WaitForOptions"},"sidebar":"api","previous":{"title":"WaitForNetworkIdleOptions","permalink":"/api/puppeteer.waitfornetworkidleoptions"},"next":{"title":"WaitForSelectorOptions","permalink":"/api/puppeteer.waitforselectoroptions"}}');var n=r(74848),s=r(28453);const o={sidebar_label:"WaitForOptions"},l="WaitForOptions interface",a={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"waitforoptions-interface",children:"WaitForOptions interface"})}),"\n",(0,n.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForOptions\n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Property"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Default"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"signal",children:"signal"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"AbortSignal"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"A signal object that allows you to cancel the call."})}),(0,n.jsx)("td",{})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"timeout",children:"timeout"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"number"})}),(0,n.jsxs)("td",{children:[(0,n.jsx)(t.p,{children:"Maximum wait time in milliseconds. Pass 0 to disable the timeout."}),(0,n.jsxs)(t.p,{children:["The default value can be changed by using the ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})," or ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page.setdefaultnavigationtimeout",children:"Page.setDefaultNavigationTimeout()"})," methods."]})]}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"30000"})})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"waituntil",children:"waitUntil"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"optional"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"})," | ",(0,n.jsx)(t.a,{href:"/api/puppeteer.puppeteerlifecycleevent",children:"PuppeteerLifeCycleEvent"}),"[]"]})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"When to consider waiting succeeds. Given an array of event strings, waiting is considered to be successful after all events have been fired."})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"'load'"})})})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,t,r)=>{var i=r(96540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var i,s={},c=null,p=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:p,props:s,_owner:l.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var i=r(96540);const n={},s=i.createContext(n);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);