(this.webpackJsonptejas=this.webpackJsonptejas||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(4),n=a.n(r),l=(a(10),a(2)),o=(a(11),a(0));var i=function(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," ",e.alert.message,Object(o.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]})})})},d=a(5),b=a.n(d);function j(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link","aria-current":"page",href:"",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable DarkMode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),s=a[0],r=a[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"mb-3 my-5",children:[Object(o.jsx)("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label",children:Object(o.jsx)("h3",{style:{color:"dark"===e.mode?"white":"black"},children:Object(o.jsx)("strong",{children:e.heading})})}),Object(o.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",style:{backgroundColor:"light"===e.mode?"white":"#d6feff",color:"black"},rows:"8",value:s,onChange:function(e){r(e.target.value)},placeholder:"Start typing.."})]}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("This was fired");var t=s.toUpperCase();r(t),e.showAlert("Your text was converted to uppercase","success")},children:"Convert To UpperCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){console.log("LowCase Was fired");var t=s.toLowerCase();r(t),e.showAlert("Your text was converted to lowercase","success")},children:"Convert To LowerCase"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=s.split(""),a=0,c=t.map((function(e){return++a%2!==0?e.toUpperCase():e.toLowerCase()}));e.showAlert("Your text was made alternative","success"),r(c.join(""))},children:"Alternating Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("exampleFormControlTextarea1");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Your text was copied","success")},children:"Copy Text"}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){e.showAlert("Your text was cleared","success"),r("")},children:"Clear Text"})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsx)("h2",{style:{color:"dark"===e.mode?"white":"black"},children:Object(o.jsx)("b",{children:"Text Summary"})}),Object(o.jsxs)("p",{style:{color:"dark"===e.mode?"white":"black"},children:[s.split(" ").length," Words and ",s.length," Characters"]}),Object(o.jsxs)("p",{style:{color:"dark"===e.mode?"white":"black"},children:[.008*s.split(" ").length," Minutes Read"]})]}),Object(o.jsxs)("div",{className:"container my-3",children:[Object(o.jsxs)("h2",{style:{color:"dark"===e.mode?"white":"black"},children:["Preview",Object(o.jsx)("br",{})]}),Object(o.jsx)("p",{className:"area",style:{color:"dark"===e.mode?"white":"black"},children:s})]})]})}j.prototype={title:b.a.string},j.defaultProps={title:"this is title"};var m=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],s=t[1],r=Object(c.useState)(null),n=Object(l.a)(r,2),d=n[0],b=n[1],m=function(e,t){b({message:e,type:t}),setTimeout((function(){b(null)}),1500)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{title:"Text Utils",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#212529",m("Dark Mode enabled","success")):(s("light"),document.body.style.backgroundColor="white",m("Light Mode enabled","success"))}}),Object(o.jsx)(i,{alert:d}),Object(o.jsx)(h,{heading:"Enter Your Text Below",mode:a,showAlert:m})]})})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))};n.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.9acc190b.chunk.js.map