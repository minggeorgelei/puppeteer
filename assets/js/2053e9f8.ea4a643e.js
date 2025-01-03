/*! For license information please see 2053e9f8.ea4a643e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14289],{11534:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"faq","title":"FAQ","description":"Q: Who maintains Puppeteer?","source":"@site/versioned_docs/version-23.11.1/faq.md","sourceDirName":".","slug":"/faq","permalink":"/faq","draft":false,"unlisted":false,"tags":[],"version":"23.11.1","frontMatter":{},"sidebar":"docs","previous":{"title":"Supported browsers","permalink":"/supported-browsers"}}');var s=t(74848),i=t(28453);const o={},a="FAQ",p={},d=[{value:"Q: Who maintains Puppeteer?",id:"q-who-maintains-puppeteer",level:2},{value:"Q: What is the status of cross-browser support?",id:"q-what-is-the-status-of-cross-browser-support",level:2},{value:"Q: Does Puppeteer support WebDriver BiDi?",id:"q-does-puppeteer-support-webdriver-bidi",level:2},{value:"Q: Will keep Puppeteer supporting CDP?",id:"q-will-keep-puppeteer-supporting-cdp",level:2},{value:"Q: What are Puppeteer\u2019s goals and principles?",id:"q-what-are-puppeteers-goals-and-principles",level:2},{value:"Q: Is Puppeteer a replacement for Selenium?",id:"q-is-puppeteer-a-replacement-for-selenium",level:2},{value:"Q: Why doesn\u2019t Puppeteer v.XXX work with a certain version of Chrome or Firefox?",id:"q-why-doesnt-puppeteer-vxxx-work-with-a-certain-version-of-chrome-or-firefox",level:2},{value:"Q: Which Chrome and Firefox version does Puppeteer use?",id:"q-which-chrome-and-firefox-version-does-puppeteer-use",level:2},{value:"Q: What\u2019s considered a \u201cNavigation\u201d?",id:"q-whats-considered-a-navigation",level:2},{value:"Q: What\u2019s the difference between a \u201ctrusted&quot; and &quot;untrusted&quot; input event?",id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",level:2},{value:"Q: Does Puppeteer support media and audio playback?",id:"q-does-puppeteer-support-media-and-audio-playback",level:2},{value:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?",id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",level:2},{value:"Q: I have more questions! Where do I ask?",id:"q-i-have-more-questions-where-do-i-ask",level:2}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"faq",children:"FAQ"})}),"\n",(0,s.jsx)(r.h2,{id:"q-who-maintains-puppeteer",children:"Q: Who maintains Puppeteer?"}),"\n",(0,s.jsxs)(r.p,{children:["The Chrome Browser Automation team maintains the library, but we'd love your help and\nexpertise on the project! See our\n",(0,s.jsx)(r.a,{href:"https://pptr.dev/contributing",children:"contributing guide"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"q-what-is-the-status-of-cross-browser-support",children:"Q: What is the status of cross-browser support?"}),"\n",(0,s.jsx)(r.p,{children:"From Puppeteer v23.0.0 onwards Puppeteer provides support for both Chrome and Firefox."}),"\n",(0,s.jsx)(r.p,{children:"To automate Chrome Puppeteer uses the Chrome DevTools Protocol (CDP) by default, but it can\nalso be automated using WebDriver BiDi which is the default for automating Firefox."}),"\n",(0,s.jsxs)(r.p,{children:["To understand the subtle differences in API support refer to our\n",(0,s.jsx)(r.a,{href:"https://pptr.dev/webdriver-bidi",children:"WebDriver BiDi guide"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"q-does-puppeteer-support-webdriver-bidi",children:"Q: Does Puppeteer support WebDriver BiDi?"}),"\n",(0,s.jsx)(r.p,{children:"From Puppeteer v23.0.0 and up Puppeteer has production-ready support for WebDriver BiDi\nto automate both Chrome and Firefox."}),"\n",(0,s.jsx)(r.h2,{id:"q-will-keep-puppeteer-supporting-cdp",children:"Q: Will keep Puppeteer supporting CDP?"}),"\n",(0,s.jsx)(r.p,{children:"We are not going to stop supporting automation of Chrome with CDP - despite\nPuppeteer's support for WebDriver BiDi. To not break existing automations relying on CDP,\nbut also to keep enabling automation use-cases unique to Chrome and not standardized\nwith WebDriver BiDi."}),"\n",(0,s.jsx)(r.h2,{id:"q-what-are-puppeteers-goals-and-principles",children:"Q: What are Puppeteer\u2019s goals and principles?"}),"\n",(0,s.jsx)(r.p,{children:"The goals of the project are:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["Provide a reference implementation that highlights the capabilities of the\n",(0,s.jsx)(r.a,{href:"https://chromedevtools.github.io/devtools-protocol/",children:"Chrome DevTools"}),"\nand ",(0,s.jsx)(r.a,{href:"https://w3c.github.io/webdriver-bidi/",children:"WebDriver BiDi"})," protocols."]}),"\n",(0,s.jsx)(r.li,{children:"Grow the adoption of automated cross-browser testing."}),"\n",(0,s.jsx)(r.li,{children:"Help dogfood new DevTools Protocol and WebDriver BiDi features...and catch bugs!"}),"\n",(0,s.jsx)(r.li,{children:"Learn more about the pain points of automated browser testing and help fill\nthose gaps."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["We adapt\n",(0,s.jsx)(r.a,{href:"https://www.chromium.org/developers/core-principles",children:"Chromium principles"})," to\nhelp us drive product decisions:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Speed"}),": Puppeteer has almost zero performance overhead over an automated\npage."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Security"}),": Puppeteer operates off-process with respect to the browser, making\nit safe to automate potentially malicious pages."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Stability"}),": Puppeteer should not be flaky and should not leak memory."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Simplicity"}),": Puppeteer provides a high-level API that\u2019s easy to use,\nunderstand, and debug."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"q-is-puppeteer-a-replacement-for-selenium",children:"Q: Is Puppeteer a replacement for Selenium?"}),"\n",(0,s.jsx)(r.p,{children:"Puppeteer is a Node.js based reference implementation of how to automate browsers\nwith CDP and WebDriver BiDi - the same web standard the Selenium project is also\ncontributing to."}),"\n",(0,s.jsx)(r.p,{children:"The Selenium project goes beyond what Puppeteer offers in multiple aspects: it provides\nbindings for more languages than just JavaScript and for example it also offers tooling\nto orchestrate automation at large, like Selenium Grid. Both is beyond Puppeteer's scope."}),"\n",(0,s.jsx)(r.p,{children:"There are community projects that add capabilities to Puppeteer beyond its core,\nmaking things like testing more convenient. For example see:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"jest-puppeteer"})," or"]}),"\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://pptr.dev/integrations/ng-schematics",children:"Puppeteer's Angular integration"})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"q-why-doesnt-puppeteer-vxxx-work-with-a-certain-version-of-chrome-or-firefox",children:"Q: Why doesn\u2019t Puppeteer v.XXX work with a certain version of Chrome or Firefox?"}),"\n",(0,s.jsx)(r.p,{children:"Every Puppeteer release is tightly bundled with a specific browser release\nto ensure compatibility with the implementation of the underlying protocols,\nthe Chrome DevTools Protocol and WebDriver BiDi."}),"\n",(0,s.jsx)(r.p,{children:"This is to prevent changes in either Chrome or Firefox not unexpectedly break Puppeteer."}),"\n",(0,s.jsx)(r.h2,{id:"q-which-chrome-and-firefox-version-does-puppeteer-use",children:"Q: Which Chrome and Firefox version does Puppeteer use?"}),"\n",(0,s.jsxs)(r.p,{children:["Look for the ",(0,s.jsx)(r.code,{children:"chrome"})," and ",(0,s.jsx)(r.code,{children:"firefox"})," entries in\n",(0,s.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/blob/main/packages/puppeteer-core/src/revisions.ts",children:"revisions.ts"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"q-whats-considered-a-navigation",children:"Q: What\u2019s considered a \u201cNavigation\u201d?"}),"\n",(0,s.jsxs)(r.p,{children:["From Puppeteer\u2019s standpoint, ",(0,s.jsx)(r.strong,{children:"\u201cnavigation\u201d is anything that changes a page\u2019s\nURL"}),". Aside from regular navigation where the browser hits the network to fetch\na new document from the web server, this includes\n",(0,s.jsx)(r.a,{href:"https://www.w3.org/TR/html5/single-page.html#scroll-to-fragid",children:"anchor navigations"}),"\nand ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",children:"History API"}),"\nusage."]}),"\n",(0,s.jsxs)(r.p,{children:["With this definition of \u201cnavigation,\u201d ",(0,s.jsx)(r.strong,{children:"Puppeteer works seamlessly with\nsingle-page applications."})]}),"\n",(0,s.jsx)(r.h2,{id:"q-whats-the-difference-between-a-trusted-and-untrusted-input-event",children:'Q: What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?'}),"\n",(0,s.jsx)(r.p,{children:"In browsers, input events could be divided into two big groups: trusted vs.\nuntrusted."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Trusted events"}),": events generated by users interacting with the page, e.g.\nusing a mouse or keyboard."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.strong,{children:"Untrusted event"}),": events generated by Web APIs, e.g. ",(0,s.jsx)(r.code,{children:"document.createEvent"}),"\nor ",(0,s.jsx)(r.code,{children:"element.click()"})," methods."]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Websites can distinguish between these two groups:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["using an\n",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted",children:(0,s.jsx)(r.code,{children:"Event.isTrusted"})}),"\nevent flag"]}),"\n",(0,s.jsxs)(r.li,{children:["sniffing for accompanying events. For example, every trusted ",(0,s.jsx)(r.code,{children:"'click'"})," event\nis preceded by ",(0,s.jsx)(r.code,{children:"'mousedown'"})," and ",(0,s.jsx)(r.code,{children:"'mouseup'"})," events."]}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["For automation purposes it\u2019s important to generate trusted events. ",(0,s.jsx)(r.strong,{children:"All input\nevents generated with Puppeteer are trusted and fire proper accompanying\nevents."})," If, for some reason, one needs an untrusted event, it\u2019s always\npossible to hop into a page context with ",(0,s.jsx)(r.code,{children:"page.evaluate"})," and generate a fake\nevent:"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n"})}),"\n",(0,s.jsx)(r.h2,{id:"q-does-puppeteer-support-media-and-audio-playback",children:"Q: Does Puppeteer support media and audio playback?"}),"\n",(0,s.jsxs)(r.p,{children:["Puppeteer uses ",(0,s.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"Chrome for Testing"})," binaries\nby default which ship with properietary codecs support starting from\n",(0,s.jsx)(r.a,{href:"https://chromiumdash.appspot.com/commit/12d607016c31ea13579e897740c765be189ed6eb",children:"M120"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"q-i-am-having-trouble-installing--running-puppeteer-in-my-test-environment-where-should-i-look-for-help",children:"Q: I am having trouble installing / running Puppeteer in my test environment. Where should I look for help?"}),"\n",(0,s.jsxs)(r.p,{children:["We have a\n",(0,s.jsx)(r.a,{href:"https://pptr.dev/troubleshooting",children:"troubleshooting"}),"\nguide for various operating systems that lists the required dependencies."]}),"\n",(0,s.jsx)(r.h2,{id:"q-i-have-more-questions-where-do-i-ask",children:"Q: I have more questions! Where do I ask?"}),"\n",(0,s.jsx)(r.p,{children:"There are many ways to get help on Puppeteer:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["For questions: ",(0,s.jsx)(r.a,{href:"https://stackoverflow.com/questions/tagged/puppeteer",children:"Stack Overflow"})]}),"\n",(0,s.jsxs)(r.li,{children:["For bug reports: ",(0,s.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues",children:"GitHub Issues"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Make sure to search these channels before posting your question."})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},21020:(e,r,t)=>{var n=t(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)o.call(r,n)&&!p.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:l,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>a});var n=t(96540);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);