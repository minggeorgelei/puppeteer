/*! For license information please see 9aecd751.cb14e449.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55820],{25640:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/puppeteer.keyboard.sendcharacter","title":"Keyboard.sendCharacter() method","description":"Dispatches a keypress and input event. This does not send a keydown or keyup event.","source":"@site/versioned_docs/version-23.11.1/api/puppeteer.keyboard.sendcharacter.md","sourceDirName":"api","slug":"/api/puppeteer.keyboard.sendcharacter","permalink":"/api/puppeteer.keyboard.sendcharacter","draft":false,"unlisted":false,"tags":[],"version":"23.11.1","frontMatter":{"sidebar_label":"Keyboard.sendCharacter"},"sidebar":"api","previous":{"title":"Keyboard.press","permalink":"/api/puppeteer.keyboard.press"},"next":{"title":"Keyboard.type","permalink":"/api/puppeteer.keyboard.type"}}');var s=n(74848),a=n(28453);const d={sidebar_label:"Keyboard.sendCharacter"},i="Keyboard.sendCharacter() method",c={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"keyboardsendcharacter-method",children:"Keyboard.sendCharacter() method"})}),"\n",(0,s.jsxs)(r.p,{children:["Dispatches a ",(0,s.jsx)(r.code,{children:"keypress"})," and ",(0,s.jsx)(r.code,{children:"input"})," event. This does not send a ",(0,s.jsx)(r.code,{children:"keydown"})," or ",(0,s.jsx)(r.code,{children:"keyup"})," event."]}),"\n",(0,s.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Keyboard {\n  abstract sendCharacter(char: string): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsx)("tbody",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"char"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Character to send into the page."})})]})})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Modifier keys DO NOT effect ",(0,s.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"Keyboard.sendCharacter"}),". Holding down ",(0,s.jsx)(r.code,{children:"Shift"})," will not type the text in upper case."]}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"page.keyboard.sendCharacter('\u55e8');\n"})})]})}function l(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,r,n){var t,a={},o=null,p=null;for(t in void 0!==n&&(o=""+n),void 0!==r.key&&(o=""+r.key),void 0!==r.ref&&(p=r.ref),r)d.call(r,t)&&!c.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:s,type:e,key:o,ref:p,props:a,_owner:i.current}}r.Fragment=a,r.jsx=o,r.jsxs=o},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>i});var t=n(96540);const s={},a=t.createContext(s);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);