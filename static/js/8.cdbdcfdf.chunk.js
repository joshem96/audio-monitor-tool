(this["webpackJsonpOnline-Audio-And-Monitor-Test"]=this["webpackJsonpOnline-Audio-And-Monitor-Test"]||[]).push([[8],{45:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(4),c=n(5),r=n(7),l=n(6),s=n(1),d=n.n(s),a=n(3),u=!1,v=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={},o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e={state:"off"};console.log("dbl click method"+e.state);var t="";document.querySelector(".solid-node").addEventListener("mousedown",(function(){var n=0;t=setInterval((function(){3==++n&&("off"==e.state?(Object(a.b)(document.querySelector(".solid-node")),e.state="on",setTimeout((function(){var t=setInterval((function(){window.innerHeight!=window.screen.height&&(e.state="off",clearInterval(t))}),20)}),5e3)):"on"==e.state&&Object(a.b)(document.querySelector(".solid-node")),u=!0)}),500)})),document.querySelector(".solid-node").addEventListener("mouseup",(function(){clearInterval(t),setTimeout((function(){1==u&&(u=!1)}),500)}))}},{key:"render",value:function(){var e=["yellow","cyan","lightgreen","pink","red","purple","grey","black","white"],t=0;return document.querySelector(".solid-node"),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"vision-solid-wrap tool-element-wrap display-none",children:Object(o.jsx)("div",{className:"solid-node",onClick:function(){0==u&&(document.querySelector(".solid-node").style.background=e[t],++t>=e.length&&(t=0))},style:{backgroundColor:"white"}})})})}}]),n}(d.a.Component);t.default=v}}]);
//# sourceMappingURL=8.cdbdcfdf.chunk.js.map