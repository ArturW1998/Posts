(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=a(4),i=a(2),m=a(18),h=function e(){var t=this;Object(m.a)(this,e),this.localStorageKey="state",this.setItem=function(e){return localStorage.setItem(t.localStorageKey,JSON.stringify(e))},this.getItem=function(){return JSON.parse(localStorage.getItem(t.localStorageKey))}},d=function(e){return e.padStart(2,"0")},f=function(e){var t=new Date(1e3*e),a=d("".concat(t.getHours())),n=d("".concat(t.getMinutes())),c=d("".concat(t.getDate())),r=d("".concat(t.getMonth()+1)),l=t.getFullYear();return e?"".concat(a," : ").concat(n," - ").concat(c," : ").concat(r," : ").concat(l):null},p=function(e,t){return!(e.trim()&&t.trim())},b=function(e,t,a){return t[e].toLowerCase()!==a[e].toLowerCase()},g=function(e,t){var a={users:e,articles:t};(new h).setItem(a)},v=function(e){var t=Object(n.useState)(1),a=Object(i.a)(t,2),c=a[0],r=a[1],l=function(e,t){var a=e*B,n=a-B;return[Math.ceil(t.length/B),t.slice(n,a)]}(c,e),o=Object(i.a)(l,2),s=o[0],u=o[1];return[c,function(e){e===H?r(c+1):e===G&&r(c-1)},s,u]},E=(a(27),function(e){var t=e.articles;return c.a.createElement(c.a.Fragment,null,t.map(function(e){var t=e.title,a=e.created_ad,n=e.description,r=e.author;return c.a.createElement("article",{key:a,className:"col-12 article list-group-item"},c.a.createElement(u.b,{className:"title-post",to:a},t),c.a.createElement("p",{className:"post-desc"},n),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},r),c.a.createElement("div",{className:"col-6"},f(a))))}))});E.defaultProps={articles:[]};var N=E,j=a(21),O=a.n(j),k=function(e){var t=e.totalItems,a=e.currentPage,n=e.paginate;if(t<=1)return null;var r=a===Y,l=a===t,o=function(e){return O()("page-item",{disabled:e})};return c.a.createElement("div",{className:"col-12"},c.a.createElement("nav",{"aria-label":"Page navigation"},c.a.createElement("ul",{className:"pagination justify-content-center"},c.a.createElement("li",{className:o(r)},c.a.createElement("button",{onClick:function(){return n(G)},className:"arrow-left page-link"},"<")),c.a.createElement("li",{className:"page-item"},c.a.createElement("span",{className:"page-link"},a," of ",t)),c.a.createElement("li",{className:o(l)},c.a.createElement("button",{onClick:function(){return n(H)},className:"arrow-right page-link"},">")))))};k.defaultProps={totalItems:1,currentPage:1,paginate:function(){}};var w=k,y=a(10),P=a(1),L=function(){var e=Object(n.useContext)(V),t=Object(i.a)(e,2),a=t[0],c=t[1],r=a.users,l=a.articles,o=Object(n.useState)({checkLength:!1,checkEmpty:!1,checkName:!1,checkPass:!1}),s=Object(i.a)(o,2),u=s[0],m=s[1],h=Object(n.useState)({userName:"",pass:""}),d=Object(i.a)(h,2),f=d[0],v=d[1],E=f.userName,N=f.pass;return[function(e){if(e.preventDefault(),p(E,N))return m(Object(P.a)({},u,{checkEmpty:!0}));if(m(Object(P.a)({},u,{checkEmpty:!1})),function(e,t){return!!(e.length<3||e.length>14||t.length<3||t.length>14)}(E,N))return m(Object(P.a)({},u,{checkLength:!0}));m(Object(P.a)({},u,{checkLength:!1}));var t={userName:E,pass:N},a=r.findIndex(function(e){return e.userName.toLowerCase()===t.userName.toLowerCase()});if(a>=0){if(b(q,r[a],t))return m(Object(P.a)({},u,{checkName:!0}));if(m(Object(P.a)({},u,{checkName:!1})),b(z,r[a],t))return m(Object(P.a)({},u,{checkPass:!0}));m(Object(P.a)({},u,{checkPass:!1}));var n=r.map(function(e){return e.userName===t.userName?Object(P.a)({},e,{auth:!0}):Object(P.a)({},e)});c(function(e){return Object(P.a)({},e,{users:n,userAuth:r[a]})}),g(n,l)}else r.push(Object(P.a)({},t,{auth:!0})),c(function(e){return Object(P.a)({},e,{users:r,userAuth:r[r.length-1]})}),g(r,l);v({userName:"",pass:""})},function(e){var t=e.target,a=t.name,n=t.value;v(Object(P.a)({},f,Object(y.a)({},a,n)))},u,f]},x=function(e){var t=e.checkLength,a=e.checkName,n=e.checkEmpty,r=e.checkPass,l=e.checkLengthEdit;return c.a.createElement(c.a.Fragment,null,t||a||n||r||l?c.a.createElement("div",{className:"alert alert-danger",role:"alert"},t&&c.a.createElement("p",null,"Form fields must have more than 2 characters and no more than 14."),a&&c.a.createElement("p",null,"Wrong name entered."),n&&c.a.createElement("p",null,"Fields must not be empty or have spaces."),r&&c.a.createElement("p",null,"Password entered incorrectly."),l&&c.a.createElement("p",null,"Form fields must have more than 4 characters and title should not have more than 24 characters.")):null)};x.defaultProps={checkLength:!1,checkName:!1,checkEmpty:!1,checkPass:!1,checkLengthEdit:!1};var C=x,A=(a(33),function(){var e=L(),t=Object(i.a)(e,4),a=t[0],n=t[1],r=t[2],l=t[3],o=l.userName,s=l.pass,u=r.checkLength,m=r.checkName,h=r.checkEmpty,d=r.checkPass;return c.a.createElement("form",{className:"form-signin",onSubmit:a},c.a.createElement("h1",{className:"h3 mb-3 font-weight-normal text-center"},"Please sign in"),c.a.createElement("input",{type:"text",name:q,id:"userName",className:"form-control",placeholder:"Name",value:o,onChange:n}),c.a.createElement("input",{type:"password",name:z,id:"inputPassword",className:"form-control",placeholder:"Password",value:s,onChange:n}),c.a.createElement(C,{checkLength:u,checkName:m,checkEmpty:h,checkPass:d}),c.a.createElement("input",{className:"btn btn-lg btn-form btn-block",type:"submit",value:"Sign in"}))}),S=function(e){var t=e.userAuth;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement(u.b,{to:"/edit",className:"create-ad btn btn-form"},"Create Ad"):c.a.createElement(A,null))};S.defaultProps={userAuth:null};var F=S,I=(a(34),function(){var e=Object(n.useContext)(V),t=Object(i.a)(e,1)[0],a=t.articles,r=t.userAuth,l=v(a),o=Object(i.a)(l,4),s=o[0],u=o[1],m=o[2],h=o[3];return c.a.createElement("main",{className:"container"},c.a.createElement("section",{className:"row wrapper"},c.a.createElement(F,{userAuth:r}),c.a.createElement(N,{articles:h}),c.a.createElement(w,{currentPage:s,totalItems:m,paginate:u})))}),D=a(8),W=function(e){var t=Object(n.useContext)(V),a=Object(i.a)(t,2),c=a[0],r=a[1],l=c.userAuth,o=c.articles,s=c.users,u=Object(n.useState)({title:"",desc:""}),m=Object(i.a)(u,2),h=m[0],d=m[1],f=h.title,b=h.desc,v=Object(n.useState)({checkLengthEdit:!1,checkEmpty:!1}),E=Object(i.a)(v,2),N=E[0],j=E[1];return[function(e){var t=e.target,a=t.value,n=t.name;d(Object(P.a)({},h,Object(y.a)({},n,a)))},function(t){if(t.preventDefault(),p(f,b))return j(Object(P.a)({},N,{checkEmpty:!0}));if(j(Object(P.a)({},N,{checkEmpty:!1})),function(e,t){return!!(e.length<4||e.length>24||t.length<4)}(f,b))return j(Object(P.a)({},N,{checkLengthEdit:!0}));j(Object(P.a)({},N,{checkLengthEdit:!1}));var a=(Date.now()/1e3).toFixed(),n={title:f,description:b,author:l.userName,created_ad:a};o.push(Object(P.a)({},n)),r(function(e){return Object(P.a)({},e,{articles:o})}),g(s,o),e.push("/".concat(a)),d({title:"",desc:""})},N,h,l]},_=(a(35),function(e){var t=e.history,a=W(t),n=Object(i.a)(a,5),r=n[0],l=n[1],o=n[2],s=n[3],u=n[4],m=s.title,h=s.desc,d=o.checkLengthEdit,f=o.checkEmpty;return u?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"create-article",onSubmit:l},c.a.createElement("label",{htmlFor:"title"},"Title"),c.a.createElement("input",{type:"text",className:"form-control",name:"title",id:"title","aria-describedby":"title",placeholder:"Title",value:m,onChange:r}),c.a.createElement("label",{htmlFor:"desc"},"Description"),c.a.createElement("textarea",{className:"form-control desc",name:"desc",id:"desc",rows:"3",placeholder:"Description",value:h,onChange:r}),c.a.createElement(C,{checkLengthEdit:d,checkEmpty:f}),c.a.createElement("input",{type:"submit",className:"btn btn-form",value:"Create"})))):c.a.createElement(D.a,{to:"/"})});_.defaultProps={history:{push:function(){}}};var J=Object(D.g)(_),T=function(e,t){var a=Object(n.useContext)(V),c=Object(i.a)(a,2),r=c[0],l=c[1],o=r.articles,s=r.userAuth,u=r.users,m=o?o.find(function(t){return t.created_ad===e}):null;return[m,s,function(){var e=m.created_ad,a=o.filter(function(t){return t.created_ad!==e});l(function(e){return Object(P.a)({},e,{articles:a})}),g(u,a),t.push("/")}]},K=function(e){var t=e.delPost;return c.a.createElement("button",{type:"button",className:"btn btn-danger",onClick:t},"Delete")};K.defaultProps={delPost:function(){}};var M=K,R=(a(36),function(e){var t=e.match.params.id,a=e.history,n=T(t,a),r=Object(i.a)(n,3),l=r[0],o=r[1],s=r[2];if(!l)return c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,"Post not found"));var m=l.title,h=l.description,d=l.author,p=l.created_ad,b=f(p);return c.a.createElement("main",{className:"container"},c.a.createElement("section",{className:"row"},c.a.createElement("article",{className:"col-12 article article-post"},c.a.createElement("h3",{className:"title-post"},m),c.a.createElement("p",{className:"post-desc"},h),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},d),c.a.createElement("div",{className:"col-6"},b)))),c.a.createElement("div",{className:"row"},null!==o&&o.userName===d?c.a.createElement("div",{className:"col-6"},c.a.createElement(M,{author:d,userAuth:o,delPost:s})):null,c.a.createElement("div",{className:"col-6"},c.a.createElement(u.b,{to:"/",className:"btn btn-form"},"Going back"))))});R.defaultProps={match:{params:{id:""}},history:{push:function(){}}};var U=Object(D.g)(R),B=5,G="prev",H="next",Y=1,$=[{id:0,path:"/",component:I,exact:!0},{id:1,path:"/edit/",component:J,exact:!0},{id:2,path:"/:id",component:U,exact:!0}],q="userName",z="pass",Q=function(){var e=(new h).getItem(),t={userAuth:null,articles:e?e.articles:[],users:e?e.users:[]},a=Object(n.useState)(t),c=Object(i.a)(a,2),r=c[0],l=c[1];return Object(n.useEffect)(function(){var e=r.users.findIndex(function(e){return e.auth});e>=0&&l(function(t){return Object(P.a)({},t,{userAuth:t.users[e]})})},[r.users]),[r,l]},V=Object(n.createContext)([{},function(){}]),X=function(e){var t=e.children,a=Q();return c.a.createElement(V.Provider,{value:a},t)};X.defaultProps={children:null};var Z=function(){var e=Object(n.useContext)(V),t=Object(i.a)(e,2),a=t[0],r=t[1],l=a.users,o=a.userAuth,s=a.articles;return[o,function(e){e.preventDefault();var t=l.map(function(e){return e.auth?Object(P.a)({},e,{auth:!1}):Object(P.a)({},e)});return r(function(e){return Object(P.a)({},e,{users:t,userAuth:null})}),g(t,s),c.a.createElement(D.a,{to:"/"})}]},ee=(a(37),function(e){var t=e.userAuth,a=e.onLogout;return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"name text-light"},t.userName),c.a.createElement(u.b,{onClick:a,to:"logout",className:"user text-light"},"Logout")))});ee.defaultProps={userAuth:null,onLogout:function(){}};var te=ee,ae=(a(38),function(){var e=Z(),t=Object(i.a)(e,2),a=t[0],n=t[1];return c.a.createElement("header",null,c.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm"},c.a.createElement("div",{className:"container"},c.a.createElement(u.b,{to:"/",className:"navbar-brand"},"Logo"),c.a.createElement(te,{userAuth:a,onLogout:n}))))}),ne=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement(D.d,null,$.map(function(e){var t=e.id,a=e.path,n=e.component,r=e.exact;return c.a.createElement(D.b,{key:t,path:a,component:n,exact:r})})))},ce=function(){return c.a.createElement(u.a,null,c.a.createElement(X,null,c.a.createElement(ne,null)))};l.a.render(c.a.createElement(ce,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Posts",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Posts","/service-worker.js");o?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.321f63a0.chunk.js.map