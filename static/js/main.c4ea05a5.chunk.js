(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=a(4),i=a(1),m=a(2),h=a(18),d=a.n(h),f=a(19),p=function e(){var t=this;Object(f.a)(this,e),this.localStorageKey="state",this.setItem=function(e){return localStorage.setItem(t.localStorageKey,JSON.stringify(e))},this.getItem=function(){return JSON.parse(localStorage.getItem(t.localStorageKey))}},b=function(e){return e.padStart(2,"0")},g=function(e){var t=new Date(1e3*e),a=b("".concat(t.getHours())),n=b("".concat(t.getMinutes())),c=b("".concat(t.getDate())),r=b("".concat(t.getMonth()+1)),l=t.getFullYear();return e?"".concat(a," : ").concat(n," - ").concat(c," : ").concat(r," : ").concat(l):null},v=function(e,t){return!(e.trim()&&t.trim())},E=function(e,t,a){return t[e].toLowerCase()!==a[e].toLowerCase()},N=function(e,t){var a={users:e,articles:t};(new p).setItem(a)},j=function(e){return d()("page-item",{disabled:e})},k=function(e){var t=Object(n.useState)(1),a=Object(m.a)(t,2),c=a[0],r=a[1],l=function(e,t){var a=e*G,n=a-G;return[Math.ceil(t.length/G),t.slice(n,a)]}(c,e),o=Object(m.a)(l,2),s=o[0],u=o[1];return[c,function(e){e===Y?c!==s&&r(c+1):e===H&&c!==$&&r(c-1)},s,u]},O=(a(27),function(e){var t=e.articles;return c.a.createElement(c.a.Fragment,null,t.map(function(e){var t=e.title,a=e.created_ad,n=e.description,r=e.author;return c.a.createElement("article",{key:a,className:"col-12 article list-group-item"},c.a.createElement(u.b,{className:"title-post",to:a},t),c.a.createElement("p",{className:"post-desc"},n),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},r),c.a.createElement("div",{className:"col-6"},g(a))))}))});O.defaultProps={articles:[]};var w=O,y=function(e){var t=e.totalItems,a=e.currentPage,n=e.paginate;if(t<=1)return null;var r=a===$,l=a===t;return c.a.createElement("div",{className:"col-12"},c.a.createElement("nav",{"aria-label":"Page navigation"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:j(r)},c.a.createElement("button",{onClick:function(){return n(H)},className:"arrow-left page-link"},"<")),c.a.createElement("li",{className:"page-item"},c.a.createElement("span",{className:"page-link"},a," of ",t)),c.a.createElement("li",{className:j(l)},c.a.createElement("button",{onClick:function(){return n(Y)},className:"arrow-right page-link"},">")))))};y.defaultProps={totalItems:1,currentPage:1,paginate:function(){}};var P=y,L=a(10),x=function(){var e=Object(n.useContext)(V),t=Object(m.a)(e,2),a=t[0],c=t[1],r=a.users,l=a.articles,o=Object(n.useState)({checkLength:!1,checkEmpty:!1,checkName:!1,checkPass:!1}),s=Object(m.a)(o,2),u=s[0],h=s[1],d=Object(n.useState)({userName:"",pass:""}),f=Object(m.a)(d,2),p=f[0],b=f[1],g=p.userName,j=p.pass;return[function(e){if(e.preventDefault(),v(g,j))return h(Object(i.a)({},u,{checkEmpty:!0}));if(h(Object(i.a)({},u,{checkEmpty:!1})),function(e,t){return!!(e.length<3||e.length>14||t.length<3||t.length>14)}(g,j))return h(Object(i.a)({},u,{checkLength:!0}));h(Object(i.a)({},u,{checkLength:!1}));var t={userName:g,pass:j},a=r.findIndex(function(e){return e.userName.toLowerCase()===t.userName.toLowerCase()});if(a>=0){if(E(z,r[a],t))return h(Object(i.a)({},u,{checkName:!0}));if(h(Object(i.a)({},u,{checkName:!1})),E(Q,r[a],t))return h(Object(i.a)({},u,{checkPass:!0}));h(Object(i.a)({},u,{checkPass:!1}));var n=r.map(function(e){return e.userName===t.userName?Object(i.a)({},e,{auth:!0}):Object(i.a)({},e)});c(function(e){return Object(i.a)({},e,{users:n,userAuth:r[a]})}),N(n,l)}else r.push(Object(i.a)({},t,{auth:!0})),c(function(e){return Object(i.a)({},e,{users:r,userAuth:r[r.length-1]})}),N(r,l);b({userName:"",pass:""})},function(e){var t=e.target,a=t.name,n=t.value;b(Object(i.a)({},p,Object(L.a)({},a,n)))},u,p]},C=function(e){var t=e.checkLength,a=e.checkName,n=e.checkEmpty,r=e.checkPass,l=e.checkLengthEdit;return c.a.createElement(c.a.Fragment,null,t||a||n||r||l?c.a.createElement("div",{className:"alert alert-danger",role:"alert"},t&&c.a.createElement("p",null,"Form fields must have more than 2 characters and no more than 14."),a&&c.a.createElement("p",null,"Wrong name entered."),n&&c.a.createElement("p",null,"Fields must not be empty or have spaces."),r&&c.a.createElement("p",null,"Password entered incorrectly."),l&&c.a.createElement("p",null,"Form fields must have more than 4 characters and title should not have more than 24 characters.")):null)};C.defaultProps={checkLength:!1,checkName:!1,checkEmpty:!1,checkPass:!1,checkLengthEdit:!1};var A=C,S=(a(33),function(){var e=x(),t=Object(m.a)(e,4),a=t[0],n=t[1],r=t[2],l=t[3],o=l.userName,s=l.pass,u=r.checkLength,i=r.checkName,h=r.checkEmpty,d=r.checkPass;return c.a.createElement("form",{className:"form-signin",onSubmit:a},c.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"Please sign in"),c.a.createElement("input",{type:"text",name:z,id:"userName",className:"form-control",placeholder:"Name",value:o,onChange:n}),c.a.createElement("input",{type:"password",name:Q,id:"inputPassword",className:"form-control",placeholder:"Password",value:s,onChange:n}),c.a.createElement(A,{checkLength:u,checkName:i,checkEmpty:h,checkPass:d}),c.a.createElement("input",{className:"btn btn-lg btn-form btn-block",type:"submit",value:"Sign in"}))}),F=function(e){var t=e.userAuth;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(u.b,{to:"/edit",className:"create-ad btn btn-form"},"Create Ad"):c.a.createElement(S,null))};F.defaultProps={userAuth:null};var I=F,D=(a(34),function(){var e=Object(n.useContext)(V),t=Object(m.a)(e,1)[0],a=t.articles,r=t.userAuth,l=k(a),o=Object(m.a)(l,4),s=o[0],u=o[1],i=o[2],h=o[3];return c.a.createElement("main",{className:"container"},c.a.createElement("section",{className:"row wrapper"},c.a.createElement(I,{userAuth:r}),c.a.createElement(w,{articles:h}),c.a.createElement(P,{currentPage:s,totalItems:i,paginate:u})))}),W=a(8),_=function(e){var t=Object(n.useContext)(V),a=Object(m.a)(t,2),c=a[0],r=a[1],l=c.userAuth,o=c.articles,s=c.users,u=Object(n.useState)({title:"",desc:""}),h=Object(m.a)(u,2),d=h[0],f=h[1],p=d.title,b=d.desc,g=Object(n.useState)({checkLengthEdit:!1,checkEmpty:!1}),E=Object(m.a)(g,2),j=E[0],k=E[1];return[function(e){var t=e.target,a=t.value,n=t.name;f(Object(i.a)({},d,Object(L.a)({},n,a)))},function(t){if(t.preventDefault(),v(p,b))return k(Object(i.a)({},j,{checkEmpty:!0}));if(k(Object(i.a)({},j,{checkEmpty:!1})),function(e,t){return!!(e.length<4||e.length>24||t.length<4)}(p,b))return k(Object(i.a)({},j,{checkLengthEdit:!0}));k(Object(i.a)({},j,{checkLengthEdit:!1}));var a=(Date.now()/1e3).toFixed(),n={title:p,description:b,author:l.userName,created_ad:a};o.push(Object(i.a)({},n)),r(function(e){return Object(i.a)({},e,{articles:o})}),N(s,o),e.push("/".concat(a)),f({title:"",desc:""})},j,d,l]},J=(a(35),function(e){var t=e.history,a=_(t),n=Object(m.a)(a,5),r=n[0],l=n[1],o=n[2],s=n[3],u=n[4],i=s.title,h=s.desc,d=o.checkLengthEdit,f=o.checkEmpty;return u?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"create-article",onSubmit:l},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",className:"form-control",name:"title",id:"title","aria-describedby":"title",placeholder:"Title",value:i,onChange:r}),c.a.createElement("label",{htmlFor:"desc"},"Description"),c.a.createElement("textarea",{className:"form-control desc",name:"desc",id:"desc",rows:"3",placeholder:"Description",value:h,onChange:r}),c.a.createElement(A,{checkLengthEdit:d,checkEmpty:f}),c.a.createElement("input",{type:"submit",className:"btn btn-form",value:"Create"})))):c.a.createElement(W.a,{to:"/"})});J.defaultProps={history:{push:function(){}}};var T=Object(W.g)(J),K=function(e,t){var a=Object(n.useContext)(V),c=Object(m.a)(a,2),r=c[0],l=c[1],o=r.articles,s=r.userAuth,u=r.users,h=o?o.find(function(t){return t.created_ad===e}):null;return[h,s,function(){var e=h.created_ad,a=o.filter(function(t){return t.created_ad!==e});l(function(e){return Object(i.a)({},e,{articles:a})}),N(u,a),t.push("/")}]},M=function(e){var t=e.delPost;return c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:t},"Delete")};M.defaultProps={delPost:function(){}};var R=M,U=(a(36),function(e){var t=e.match.params.id,a=e.history,n=K(t,a),r=Object(m.a)(n,3),l=r[0],o=r[1],s=r[2];if(!l)return c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,"Post not found"));var i=l.title,h=l.description,d=l.author,f=l.created_ad,p=g(f);return c.a.createElement("main",{className:"container"},c.a.createElement("section",{className:"row"},c.a.createElement("article",{className:"col-12 article article-post"},c.a.createElement("h3",{className:"title-post"},i),c.a.createElement("p",{className:"post-desc"},h),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},d),c.a.createElement("div",{className:"col-6"},p)))),c.a.createElement("div",{className:"row"},null!==o&&o.userName===d?c.a.createElement("div",{className:"col-6"},c.a.createElement(R,{author:d,userAuth:o,delPost:s})):null,c.a.createElement("div",{className:"col-6"},c.a.createElement(u.b,{to:"/",className:"btn btn-form"},"Going back"))))});U.defaultProps={match:{params:{id:""}},history:{push:function(){}}};var B=Object(W.g)(U),G=5,H="prev",Y="next",$=1,q=[{id:0,path:"/",component:D,exact:!0},{id:1,path:"/edit/",component:T,exact:!0},{id:2,path:"/:id",component:B,exact:!0}],z="userName",Q="pass",V=c.a.createContext([{},function(){}]),X=function(e){var t=e.children,a=(new p).getItem(),r=Object(n.useState)({userAuth:null,articles:a?a.articles:[],users:a?a.users:[]}),l=Object(m.a)(r,2),o=l[0],s=l[1];Object(n.useEffect)(function(){var e=o.users.findIndex(function(e){return e.auth});e>=0&&s(function(t){return Object(i.a)({},t,{userAuth:t.users[e]})})},[o.users]);var u=[o,s];return c.a.createElement(V.Provider,{value:u},t)};X.defaultProps={children:null};var Z=function(){var e=Object(n.useContext)(V),t=Object(m.a)(e,2),a=t[0],r=t[1],l=a.users,o=a.userAuth,s=a.articles;return[o,function(e){e.preventDefault();var t=l.map(function(e){return e.auth?Object(i.a)({},e,{auth:!1}):Object(i.a)({},e)});return r(function(e){return Object(i.a)({},e,{users:t,userAuth:null})}),N(t,s),c.a.createElement(W.a,{to:"/"})}]},ee=(a(37),function(e){var t=e.userAuth,a=e.onLogout;return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"name text-light"},t.userName),c.a.createElement(u.b,{onClick:a,to:"logout",className:"user text-light"},"Logout")))});ee.defaultProps={userAuth:null,onLogout:function(){}};var te=ee,ae=(a(38),function(){var e=Z(),t=Object(m.a)(e,2),a=t[0],n=t[1];return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm"},c.a.createElement("div",{className:"container"},c.a.createElement(u.b,{to:"/",className:"navbar-brand"},"Logo"),c.a.createElement(te,{userAuth:a,onLogout:n}))))}),ne=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement(W.d,null,q.map(function(e){var t=e.id,a=e.path,n=e.component,r=e.exact;return c.a.createElement(W.b,{key:t,path:a,component:n,exact:r})})))},ce=function(){return c.a.createElement(u.a,null,c.a.createElement(X,null,c.a.createElement(ne,null)))};l.a.render(c.a.createElement(ce,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Posts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Posts","/service-worker.js");o?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.c4ea05a5.chunk.js.map