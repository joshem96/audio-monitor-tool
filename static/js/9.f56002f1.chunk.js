(this["webpackJsonpOnline-Audio-And-Monitor-Test"]=this["webpackJsonpOnline-Audio-And-Monitor-Test"]||[]).push([[9],{46:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(3),c=n(4),r=n(6),l=n(5),d=n(1),s=n.n(d),a=n(7),u=!1,v=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={},o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e={state:"off"};console.log("dbl click method"+e.state);var t="";document.querySelector(".solid-node").addEventListener("mousedown",(function(){var n=0;t=setInterval((function(){3==++n&&("off"==e.state?(Object(a.d)(document.querySelector(".solid-node")),e.state="on",setTimeout((function(){var t=setInterval((function(){window.innerHeight!=window.screen.height&&(e.state="off",clearInterval(t))}),20)}),5e3)):"on"==e.state&&Object(a.d)(document.querySelector(".solid-node")),u=!0)}),500)})),document.querySelector(".solid-node").addEventListener("mouseup",(function(){clearInterval(t),setTimeout((function(){1==u&&(u=!1)}),500)}))}},{key:"render",value:function(){var e=["yellow","cyan","lightgreen","pink","red","purple","grey","black","white"],t=0;return document.querySelector(".solid-node"),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"vision-solid-wrap vision-tool tool-element-wrap display-none",children:Object(o.jsx)("div",{className:"solid-node",onClick:function(){0==u&&(document.querySelector(".solid-node").style.background=e[t],++t>=e.length&&(t=0))},style:{backgroundColor:"white"}})})})}}]),n}(s.a.Component);t.default=v}}]);
//# sourceMappingURL=9.f56002f1.chunk.js.map