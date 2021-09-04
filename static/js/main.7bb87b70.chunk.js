(this["webpackJsonpcra-pwa"]=this["webpackJsonpcra-pwa"]||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(5),s=c.n(r),i=(c(11),c.p,c(12),c(4)),o=c.n(i),l=c(6),d=c(2),h=c(0);var j=function(e){var t=e.covidData,c=e.flag;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"text-light bg-secondary mb-3 w-100 d-flex align-items-center justify-content-center",children:[Object(h.jsx)("h1",{children:t[0].country}),Object(h.jsx)("img",{className:"ms-2",src:"https://www.countryflags.io/".concat(c,"/flat/64.png"),alt:""})]}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-xl-4 col-sm-10 col-md-6",children:Object(h.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(h.jsx)("div",{className:"card-header bg-dark text-light fs-4",children:"Total cases"}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("h1",{className:"card-title text-center",children:t[0].cases.toLocaleString()})})]})}),Object(h.jsx)("div",{className:"col-xl-4 col-sm-10 col-md-6",children:Object(h.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(h.jsx)("div",{className:"card-header bg-dark text-light fs-4",children:"Recovered"}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("h1",{className:"card-title text-center",children:t[0].recovered.toLocaleString()})})]})}),Object(h.jsx)("div",{className:"col-xl-4 col-sm-10 col-md-6",children:Object(h.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(h.jsx)("div",{className:"card-header bg-dark text-light fs-4",children:"Active"}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("h1",{className:"card-title text-center",children:t[0].active.toLocaleString()})})]})}),Object(h.jsx)("div",{className:"col-xl-4 col-sm-10 col-md-6",children:Object(h.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(h.jsx)("div",{className:"card-header bg-dark text-light fs-4",children:"Total Deaths"}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("h1",{className:"card-title text-center",children:t[0].deaths.toLocaleString()})})]})}),Object(h.jsx)("div",{className:"col-xl-4 col-sm-10 col-md-6",children:Object(h.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(h.jsx)("div",{className:"card-header bg-dark text-light fs-4",children:"Today cases"}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("h1",{className:"card-title text-center",children:t[0].todayCases.toLocaleString()})})]})}),Object(h.jsx)("div",{className:"col-xl-4 col-sm-10 col-md-6",children:Object(h.jsxs)("div",{className:"card text-dark bg-light mb-3",children:[Object(h.jsx)("div",{className:"card-header bg-dark text-light fs-4",children:"Today Deaths"}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("h1",{className:"card-title text-center",children:t[0].todayDeaths.toLocaleString()})})]})})]})]})};var b=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)("World"),s=Object(d.a)(r,2),i=s[0],b=s[1],u=Object(n.useState)({}),x=Object(d.a)(u,2),m=x[0],g=x[1],f=Object(n.useState)(!0),v=Object(d.a)(f,2),O=v[0],p=v[1],N=Object(n.useState)(""),w=Object(d.a)(N,2),k=w[0],y=w[1],S=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n,a,r,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://coronavirus-19-api.herokuapp.com/countries");case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,(n=c.filter((function(e){return i===e.country})))&&(g(n),p(!1)),e.next=11,fetch("https://gist.githubusercontent.com/DmytroLisitsyn/1c31186e5b66f1d6c52da6b5c70b12ad/raw/01b1af9b267471818f4f8367852bd4a2814cbae6/country_dial_info.json");case 11:return a=e.sent,e.next=14,a.json();case 14:r=e.sent,s=r.filter((function(e){return e.name===i})),y(s[0].code),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log("The error is ",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){S()}),[i]),Object(n.useEffect)((function(){S()}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"container-fluid",children:[Object(h.jsx)("h1",{className:"text-center my-3",children:"Covid-19 Tracker"}),Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("input",{className:"mb-3 w-25 p-2",placeholder:"Search by country name",type:"text",onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("button",{className:"btn-dark text-light ms-2 p-2",style:{width:"80px"},onClick:function(){b(c.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))),g({}),p(!0)},children:"Search"})]}),O?Object(h.jsx)("h1",{className:"d-flex justify-content-center align-items-center mt-5",children:"Loading...."}):0===Object.entries(m).length?Object(h.jsx)("h1",{className:"d-flex justify-content-center align-items-center mt-5",children:"No Data Found!"}):Object(h.jsx)(j,{covidData:m,flag:k})]})})};var u=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(b,{})})},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var c=e.installing;null!=c&&(c.onstatechange=function(){"installed"===c.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(c){var n=c.headers.get("content-type");404===c.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):m(t,e)}))}}(),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.7bb87b70.chunk.js.map