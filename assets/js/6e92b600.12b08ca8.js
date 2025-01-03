/*! For license information please see 6e92b600.12b08ca8.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[88641],{69222:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"api/puppeteer.waitforselectoroptions","title":"WaitForSelectorOptions interface","description":"Signature","source":"@site/../docs/api/puppeteer.waitforselectoroptions.md","sourceDirName":"api","slug":"/api/puppeteer.waitforselectoroptions","permalink":"/next/api/puppeteer.waitforselectoroptions","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"WaitForSelectorOptions"},"sidebar":"api","previous":{"title":"WaitForOptions","permalink":"/next/api/puppeteer.waitforoptions"},"next":{"title":"WaitForTargetOptions","permalink":"/next/api/puppeteer.waitfortargetoptions"}}');var r=i(74848),s=i(28453);const l={sidebar_label:"WaitForSelectorOptions"},o="WaitForSelectorOptions interface",d={},c=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"waitforselectoroptions-interface",children:"WaitForSelectorOptions interface"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export interface WaitForSelectorOptions\n"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Property"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Default"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"hidden",children:"hidden"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"boolean"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Wait for the selected element to not be found in the DOM or to be hidden. See ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle.ishidden",children:"ElementHandle.isHidden()"})," for the definition of element invisibility."]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"false"})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"signal",children:"signal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"AbortSignal"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"A signal object that allows you to cancel a waitForSelector call."})}),(0,r.jsx)("td",{})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"timeout",children:"timeout"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"number"})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(t.p,{children:["Maximum time to wait in milliseconds. Pass ",(0,r.jsx)(t.code,{children:"0"})," to disable timeout."]}),(0,r.jsxs)(t.p,{children:["The default value can be changed by using ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.page.setdefaulttimeout",children:"Page.setDefaultTimeout()"})]})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"30_000"})," (30 seconds)"]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"visible",children:"visible"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"optional"})})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"boolean"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:["Wait for the selected element to be present in DOM and to be visible. See ",(0,r.jsx)(t.a,{href:"/next/api/puppeteer.elementhandle.isvisible",children:"ElementHandle.isVisible()"})," for the definition of element visibility."]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"false"})})})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},21020:(e,t,i)=>{var n=i(96540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,i){var n,s={},c=null,a=null;for(n in void 0!==i&&(c=""+i),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,n)&&!d.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:c,ref:a,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>o});var n=i(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);