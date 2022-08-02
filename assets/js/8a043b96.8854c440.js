"use strict";(self.webpackChunkaurora_docs=self.webpackChunkaurora_docs||[]).push([[800],{9613:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(9496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5773:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(2081),a=(n(9496),n(9613));const i={title:"Networks Endpoints"},o="Networks",l={unversionedId:"getting-started/network-endpoints",id:"getting-started/network-endpoints",title:"Networks Endpoints",description:"Ethereum Virtual Machine (EVM) support is currently available on the",source:"@site/docs/getting-started/network-endpoints.md",sourceDirName:"getting-started",slug:"/getting-started/network-endpoints",permalink:"/getting-started/network-endpoints",draft:!1,editUrl:"https://github.com/aurora-is-near/doc.aurora.dev/edit/master/docs/getting-started/network-endpoints.md",tags:[],version:"current",frontMatter:{title:"Networks Endpoints"},sidebar:"tutorialSidebar",previous:{title:"Aurora Engine",permalink:"/getting-started/aurora-engine"},next:{title:"Overview",permalink:"/interact/"}},p={},s=[{value:"Endpoints",id:"endpoints",level:2},{value:"Mainnet",id:"mainnet",level:3},{value:"HTTPS",id:"https",level:4},{value:"WSS",id:"wss",level:4},{value:"Testnet",id:"testnet",level:3},{value:"WSS",id:"wss-1",level:4}],d={toc:s};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"networks"},"Networks"),(0,a.kt)("p",null,"Ethereum Virtual Machine (EVM) support is currently available on the\nfollowing networks:"),(0,a.kt)("div",{class:"networks-table"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Network"),(0,a.kt)("th",{parentName:"tr",align:null},"Engine ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Chain ID"),(0,a.kt)("th",{parentName:"tr",align:null},"Endpoint URL"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#mainnet"},"Mainnet")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://explorer.near.org/accounts/aurora"},(0,a.kt)("inlineCode",{parentName:"a"},"aurora"))),(0,a.kt)("td",{parentName:"tr",align:null},"1313161554 (0x4e454152)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://mainnet.aurora.dev"},"https://mainnet.aurora.dev"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#testnet"},"Testnet")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://explorer.testnet.near.org/accounts/aurora"},(0,a.kt)("inlineCode",{parentName:"a"},"aurora"))),(0,a.kt)("td",{parentName:"tr",align:null},"1313161555 (0x4e454153)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://testnet.aurora.dev"},"https://testnet.aurora.dev"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Localnet"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"aurora.test.near")),(0,a.kt)("td",{parentName:"tr",align:null},"1313161556 (0x4e454154)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://localhost:8545"},"http://localhost:8545"))))),(0,a.kt)("p",null,"Find the status page and public incident log at\n",(0,a.kt)("a",{parentName:"p",href:"https://api.aurora.dev"},"api.aurora.dev"),".\nYou can also subscribe to incident notifications there."),(0,a.kt)("h2",{id:"endpoints"},"Endpoints"),(0,a.kt)("h3",{id:"mainnet"},"Mainnet"),(0,a.kt)("h4",{id:"https"},"HTTPS"),(0,a.kt)("p",null,"The Mainnet Web3 endpoint is at: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://mainnet.aurora.dev")," (port 443)"),(0,a.kt)("h4",{id:"wss"},"WSS"),(0,a.kt)("p",null,"The Mainnet Webscoket endpoint is at: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://mainnet.aurora.dev")),(0,a.kt)("h3",{id:"testnet"},"Testnet"),(0,a.kt)("p",null,"The Testnet Web3 endpoint is at: ",(0,a.kt)("inlineCode",{parentName:"p"},"https://testnet.aurora.dev")," (port 443)"),(0,a.kt)("h4",{id:"wss-1"},"WSS"),(0,a.kt)("p",null,"The Testnet Webscoket endpoint is at: ",(0,a.kt)("inlineCode",{parentName:"p"},"wss://testnet.aurora.dev")))}u.isMDXComponent=!0}}]);