"use strict";(self.webpackChunksw_coding_exam=self.webpackChunksw_coding_exam||[]).push([[78],{78:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(214),r=n(861),c=n(152),s=n(569),a=n.n(s),o=n(791),l=(n(524),n(184));function d(e){return(0,l.jsxs)("div",{className:"singleNotification__wrapper",children:[(0,l.jsxs)("div",{className:"singleNotification__wrapper-icon",children:[0===e.orderType?(0,l.jsx)("img",{src:"./star.svg",alt:"start icon",width:"20px"}):null,1===e.orderType?(0,l.jsx)("img",{src:"./check.svg",alt:"check icon",width:"20px"}):null,2===e.orderType?(0,l.jsx)("img",{src:"./discount.svg",alt:"discount icon",width:"20px"}):null]}),(0,l.jsxs)("div",{className:"singleNotification__wrapper-content",children:[(0,l.jsx)("h1",{children:e.title}),(0,l.jsx)("p",{children:e.desc})]}),(0,l.jsx)("div",{className:"singleNotification__wrapper-close",children:(0,l.jsx)("img",{className:"close-notif",src:"./close.svg",width:"14px",onClick:function(){return e.removeNotif(e.id)}})})]})}function u(){var e=(0,o.useState)([]),t=(0,c.Z)(e,2),n=t[0],s=t[1],u=(0,o.useState)("default"),p=(0,c.Z)(u,2),f=p[0],h=p[1],x=function(){var e=(0,r.Z)((0,i.Z)().mark((function e(){var t,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a().get("".concat("https://sw-coding-challenge.herokuapp.com/api/v1/notifications"));case 3:for(t=e.sent,n=0;n<t.data.d.length;n++)t.data.d[n].id=n,t.data.d[n].orderType=Math.floor(3*Math.random());s(t.data.d.splice(0,10).map((function(e){return e}))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),h(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){x()}),[]);var m=function(e){s(n.filter((function(t){return t.id!==e})))};return(0,l.jsxs)("div",{className:"notifications__wrapper",children:[f.message?"<h1>Unable to fetch data<h1>":null,0===n.length?(0,l.jsx)("h1",{children:"No notifications :-p"}):null,n.map((function(e,t){return(0,l.jsx)(d,{title:e.title,desc:e.description,id:e.id,orderType:e.orderType,removeNotif:m},t)}))]})}a().interceptors.request.use((function(e){return e.headers.authorization="Bearer ".concat("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs"),e}),(function(e){return Promise.reject(e)}))},524:function(){}}]);
//# sourceMappingURL=78.75cdcbe5.chunk.js.map