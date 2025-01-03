/*! For license information please see 55fcb0bf.42660063.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87454],{1336:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>d,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"api/puppeteer.deletecookiesrequest","title":"DeleteCookiesRequest interface","description":"Signature","source":"@site/../docs/api/puppeteer.deletecookiesrequest.md","sourceDirName":"api","slug":"/api/puppeteer.deletecookiesrequest","permalink":"/next/api/puppeteer.deletecookiesrequest","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"sidebar_label":"DeleteCookiesRequest"},"sidebar":"api","previous":{"title":"defaultArgs","permalink":"/next/api/puppeteer.defaultargs"},"next":{"title":"Device","permalink":"/next/api/puppeteer.device"}}');var s=i(74848),n=i(28453);const d={sidebar_label:"DeleteCookiesRequest"},o="DeleteCookiesRequest interface",c={},l=[{value:"Signature",id:"signature",level:3},{value:"Properties",id:"properties",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"deletecookiesrequest-interface",children:"DeleteCookiesRequest interface"})}),"\n",(0,s.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-typescript",children:"export interface DeleteCookiesRequest\n"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Property"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Modifiers"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Description"})}),(0,s.jsx)("th",{children:(0,s.jsx)(t.p,{children:"Default"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"domain",children:"domain"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"If specified, deletes only cookies with the exact domain."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"name",children:"name"})}),(0,s.jsx)("td",{}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"Name of the cookies to remove."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"partitionkey",children:"partitionKey"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/next/api/puppeteer.cookiepartitionkey",children:"CookiePartitionKey"})," | string"]})}),(0,s.jsx)("td",{children:(0,s.jsxs)(t.p,{children:["If specified, deletes cookies in the given partition key. In Chrome, partitionKey matches the top-level site the partitioned cookie is available in. In Firefox, it matches the source origin (",(0,s.jsx)(t.a,{href:"https://w3c.github.io/webdriver-bidi/%5C#type-storage-PartitionKey",children:"https://w3c.github.io/webdriver-bidi/\\#type-storage-PartitionKey"}),")."]})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"path",children:"path"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"If specified, deletes only cookies with the exact path."})}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)("span",{id:"url",children:"url"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"optional"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"string"})}),(0,s.jsx)("td",{children:(0,s.jsx)(t.p,{children:"If specified, deletes all the cookies with the given name where domain and path match provided URL. Otherwise, deletes only cookies related to the current page's domain."})}),(0,s.jsx)("td",{})]})]})]})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},21020:(e,t,i)=>{var r=i(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,i){var r,n={},l=null,a=null;for(r in void 0!==i&&(l=""+i),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)d.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:s,type:e,key:l,ref:a,props:n,_owner:o.current}}t.Fragment=n,t.jsx=l,t.jsxs=l},74848:(e,t,i)=>{e.exports=i(21020)},28453:(e,t,i)=>{i.d(t,{R:()=>d,x:()=>o});var r=i(96540);const s={},n=r.createContext(s);function d(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);