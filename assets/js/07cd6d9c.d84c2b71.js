/*! For license information please see 07cd6d9c.d84c2b71.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[67943],{98992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api/puppeteer.httprequest.failure","title":"HTTPRequest.failure() method","description":"Access information about the request\'s failure.","source":"@site/../docs/api/puppeteer.httprequest.failure.md","sourceDirName":"api","slug":"/api/puppeteer.httprequest.failure","permalink":"/next/api/puppeteer.httprequest.failure","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"HTTPRequest.failure"},"sidebar":"api","previous":{"title":"HTTPRequest.enqueueInterceptAction","permalink":"/next/api/puppeteer.httprequest.enqueueinterceptaction"},"next":{"title":"HTTPRequest.fetchPostData","permalink":"/next/api/puppeteer.httprequest.fetchpostdata"}}');var s=r(74848),a=r(28453);const i={sidebar_label:"HTTPRequest.failure"},l="HTTPRequest.failure() method",u={},o=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function c(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"httprequestfailure-method",children:"HTTPRequest.failure() method"})}),"\n",(0,s.jsx)(t.p,{children:"Access information about the request's failure."}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract failure(): {\n    errorText: string;\n  } | null;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(t.p,{children:"{ errorText: string; } | null"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"null"})," unless the request failed. If the request fails this can return an object with ",(0,s.jsx)(t.code,{children:"errorText"})," containing a human-readable error message, e.g. ",(0,s.jsx)(t.code,{children:"net::ERR_FAILED"}),". It is not guaranteed that there will be failure text if the request fails."]}),"\n",(0,s.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Example of logging all failed requests:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},21020:(e,t,r)=>{var n=r(96540),s=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,a={},o=null,c=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!u.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:s,type:e,key:o,ref:c,props:a,_owner:l.current}}t.Fragment=a,t.jsx=o,t.jsxs=o},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);