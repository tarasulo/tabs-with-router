(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(32)},28:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),l=a.n(r),o=a(6),i=a(16),m=a(17),s=a(21),u=a(18),b=a(22),E=(a(28),a(5)),d=function(e){var t=e.tabs,a=e.activeTab;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tabs"},t.map(function(e){return c.a.createElement("div",{className:"button"},c.a.createElement(o.b,{className:"tabs__button",to:"/tabs/".concat(e.id)},e.title))})),c.a.createElement("div",{className:"tabs__content"},a?t.find(function(e){return e.id===a}).content:c.a.createElement("h6",null,"You can choose any tab!")))},p=function(){return c.a.createElement("h1",null," Welcome to our Home page!")},v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.tabs;return c.a.createElement("div",{className:"App"},c.a.createElement("ul",{className:"nav-links"},c.a.createElement("li",null,c.a.createElement(o.c,{to:"/",exact:!0},"Home")),c.a.createElement("li",null,c.a.createElement(o.c,{to:"/tabs"},"Tabs"))),c.a.createElement(E.c,null,c.a.createElement(E.a,{path:"/",exact:!0,component:p}),c.a.createElement(E.a,{path:"/tabs/:id?",render:function(t){var a=t.match;return c.a.createElement(d,{tabs:e,activeTab:a.params.id})}})))}}]),t}(c.a.Component);l.a.render(c.a.createElement(o.a,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.f0f8f64b.chunk.js.map