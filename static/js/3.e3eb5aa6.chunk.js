(this["webpackJsonpaudio-monitor-test"]=this["webpackJsonpaudio-monitor-test"]||[]).push([[3],{40:function(e,t,c){"use strict";c.d(t,"a",(function(){return f})),c.d(t,"b",(function(){return v}));var n=c(0),o=c(3),s=c(4),a=c(6),i=c(5),r=c(1),u=c.n(r),l=c(25),A={index:0};function d(){if(0==A.index){var e=document.querySelector(".mstr-audio-node");[e,l.g,l.j,l.i].forEach((function(e){e.volume=1}));var t="";function c(){var c=document.querySelector(".ui-slider-handle");t=setInterval((function(){var t=parseInt(c.style.left)/100;[e,l.g,l.j,l.i].forEach((function(e){e.volume=t}))}),20)}var n=document.querySelector(".slider.green");n.addEventListener("mousedown",(function(e){c()})),n.addEventListener("mouseup",(function(){clearInterval(t)})),n.addEventListener("touchstart",(function(e){c()})),n.addEventListener("touchend",(function(){clearInterval(t)}))}}var p=u.a.lazy((function(){return c.e(6).then(c.bind(null,47))})),h=document.createElement("script");function v(e){document.querySelector(".ui-slider-range")||(h.remove(),setTimeout((function(){h.src="https://koalacode.com.au/External_Scripts/Audio_Range_Script.js",document.body.appendChild(h),document.querySelector(".ui-slider-range")?A.index++&&d():v()}),100))}var f=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={},n}return Object(s.a)(c,[{key:"componentWillMount",value:function(){!function(){if(!document.querySelector(".jq")){var e=document.createElement("script");e.src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js",e.classList.add("jq"),document.body.appendChild(e)}}(),function(){if(!document.querySelector(".jq-ui")){var e=document.createElement("script");e.src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui.min.js",e.classList.add("jq-ui"),document.body.appendChild(e)}}()}},{key:"componentDidMount",value:function(){setTimeout((function(){var e=document.querySelector(".jq")?document.querySelector(".jq").onload=t():e();function t(){document.querySelector(".jq-ui")?document.querySelector(".jq-ui").onload=void setTimeout((function(){h.src="https://koalacode.com.au/External_Scripts/Audio_Range_Script.js",h.setAttribute("defer","defer"),document.body.appendChild(h),d(),document.querySelector(".ui-slider-range")&&A.index++}),100):t(),console.log("yes im trying")}}),110)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)(r.Suspense,{fallback:Object(n.jsx)("div",{style:{display:"none"},children:"loading"}),children:Object(n.jsx)(p,{})})})}}]),c}(u.a.Component)},41:function(e,t,c){"use strict";c.r(t);var n=c(0),o=c(3),s=c(4),a=c(6),i=c(5),r=c(1),u=c.n(r),l=c(7),A=c(25),d=c.p+"static/media/test-sound-five.ca7b93a1.mp3",p=c.p+"static/media/test-sound-six.dc97e161.mp3",h=c.p+"static/media/test-sound-seven.a7dd1e19.mp3",v=c.p+"static/media/test-sound-eight.96b86617.mp3",f=c.p+"static/media/test-sound-one.3222d749.mp3",m=c.p+"static/media/test-sound-two.b89f8670.mp3",g=c.p+"static/media/test-sound-three.be5a648c.mp3",b=c.p+"static/media/test-sound-four.a9bff439.mp3",y=c(39),j=c(11),w=Object(n.jsx)(j.a,{icon:y.a,size:"3x",color:"black",style:{padding:"4.5px"}}),O=Object(n.jsx)(j.a,{icon:y.b,size:"3x",color:"black",style:{padding:"4.5px"}}),S=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={type:"rpb"},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){q.AXSource=document.querySelector(".mstr-audio-node")}},{key:"render",value:function(){function e(e,t){switch(e){case 0:if("voice"==t)return d;if("music"==t)return f;case 1:if("voice"==t)return p;if("music"==t)return m;case 2:if("voice"==t)return h;if("music"==t)return g;case 3:if("voice"==t)return v;if("music"==t)return b}}return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"audio-rpb-wrap tool-element-wrap display-none","aria-controls":"Recording playback buttons",children:[Object(n.jsxs)("div",{className:"audio-controls-wrap human-voice",children:[Object(n.jsx)("h2",{className:"rpb-header audio-header human-voice",children:"Human Voice"}),Object(n.jsx)("div",{className:"audio-banner-wrap human-voice rpb",children:[1,2,3,4].map((function(t,c){return Object(n.jsx)("div",{className:"btn-rpb-wrap",children:Object(n.jsxs)("div",{className:"rpb icon-wrap wrap voice off","data-number":c,onClick:function(e){return k(e)},children:[Object(n.jsx)("label",{className:"rpb icon-label",type:"text",for:"hv-rpb-btn ".concat(c+1),style:{fontSize:"1.5em"},children:c+1}),Object(n.jsxs)("li",{className:"human-voice btn-pb",id:"hv-rpb-btn ".concat(c+1),children:[Object(n.jsx)("span",{class:"on rpb-icon play",children:w}),Object(n.jsx)("span",{class:"off rpb-icon stop",children:O})]}),Object(n.jsx)("audio",{src:e(c,"voice"),className:"rpb-audio human-voice",loop:!0})]})})}))})]}),Object(n.jsxs)("div",{className:"audio-controls-wrap music",children:[Object(n.jsx)("h2",{className:"rpb-header audio-header music",style:{marginTop:"70px"},children:"Music"}),Object(n.jsx)("div",{className:"audio-banner-wrap music rpb",style:{marginBottom:"5   0px"},children:[1,2,3,4].map((function(t,c){return Object(n.jsx)("div",{className:"btn-rpb-wrap",children:Object(n.jsxs)("div",{className:"rpb icon-wrap wrap music off","data-number":c,onClick:function(e){return k(e)},children:[Object(n.jsx)("label",{className:"rpb icon-label",type:"text",for:"music-rpb-btn ".concat(c+1),style:{fontSize:"1.5em"},children:c+1}),Object(n.jsxs)("li",{className:"human-voice btn-pb",id:"music-rpb-btn".concat(c+1),children:[Object(n.jsx)("span",{class:"on rpb-icon play",children:w}),Object(n.jsx)("span",{class:"off rpb-icon stop",children:O})]}),Object(n.jsx)("audio",{src:e(c,"music"),className:"rpb-audio music",loop:!0})]})})}))})]})]})})}}]),c}(u.a.Component);console.log("master audio node is "+document.querySelector(".mstr-audio-node"));var q={state:"stopped",AXSource:document.querySelector(".mstr-audio-node")};function L(e){e.classList.contains("off")?(e.classList.add("on"),e.classList.remove("off")):(e.classList.remove("on"),e.classList.add("off"))}function x(e){var t=function(e){var t="";switch(e.dataset.number){case"0":t=e.classList.contains("voice")?d:f;break;case"1":t=e.classList.contains("voice")?p:m;break;case"2":t=e.classList.contains("voice")?h:g;break;case"3":t=e.classList.contains("voice")?v:b}return t}(e);q.AXSource.setAttribute("src",t),q.AXSource.load(),q.AXSource.play(),e.children[1].children[0].classList.remove("on"),e.children[1].children[0].classList.add("off"),e.children[1].children[1].classList.remove("off"),["on","playing"].forEach((function(t){return e.children[1].children[1].classList.add(t)}))}function k(e){if(document.querySelector(".audio-test-type-btn.rpb").classList.contains("on")){console.log("trigger play button");var t=Object(l.e)(e);"stopped"==q.state?(L(t),x(t),q.state="playing"):"playing"==q.state&&t.classList.contains("off")?(!function(e){document.querySelector(".rpb.icon-wrap.wrap.on").classList.add("off"),document.querySelector(".rpb.icon-wrap.wrap.on").classList.remove("on"),document.querySelector(".rpb-icon.playing").parentElement.children[1].classList.add("off"),document.querySelector(".rpb-icon.playing").parentElement.children[1].classList.remove("on"),document.querySelector(".rpb-icon.playing").parentElement.children[0].classList.add("on"),document.querySelector(".rpb-icon.playing").parentElement.children[0].classList.remove("off"),["playing"].forEach((function(e){return document.querySelector(".rpb-icon.playing").classList.remove(e)})),e.children[1].children[0].classList.remove("off"),e.children[1].children[0].classList.add("on"),X([q.AXSource]),x(e)}(t),L(t)):"playing"==q.state&&t.classList.contains("on")&&(L(t),function(e){X([q.AXSource]),e.children[1].children[0].classList.remove("off"),e.children[1].children[0].classList.add("on"),e.children[1].children[1].classList.remove("on"),e.children[1].children[1].classList.add("off"),document.querySelector(".rpb-icon.playing").classList.remove("playing")}(t),q.state="stopped")}}function X(e){e.forEach((function(e){e.pause(),e.currentTime=0}))}function N(e){var t=document.querySelector(".play-stop-btn");"stop"==e?(A.e.state="stopped",t.classList.add("off"),t.classList.remove("on"),document.querySelector(".play-stop-btn").children[0].innerText="PLAY"):"play"==e&&(A.e.state="playing",t.classList.add("on"),t.classList.remove("off"),document.querySelector(".play-stop-btn").children[0].innerText="STOP")}function E(){var e=document.querySelector(".rpb.icon-wrap.wrap.on");e.children[1].children[0].classList.remove("off"),e.children[1].children[0].classList.add("on"),e.children[1].children[1].classList.remove("on"),e.children[1].children[1].classList.add("off"),document.querySelector(".rpb-icon.playing").classList.remove("playing"),e.classList.add("off"),e.classList.remove("on"),q.state="stopped"}var R=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={type:"play-stop"},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){Object(A.a)(this.state.type),function(){console.log("trigger started"),document.querySelector(".play-stop-btn").addEventListener("click",(function(){!function(){var e=document.querySelector(".play-stop-btn");if(e.classList.contains("off")){switch(A.e.AXSource[0]){case"sine wave":"constant"==A.e.character?A.k.forEach((function(e){return e.play()})):"sweeping"==A.e.character&&(A.e.AXSource[1].load(),A.e.AXSource[1].play());break;case"pink noise":case"white noise":A.e.AXSource[1].load(),A.e.AXSource[1].play()}N("play")}else if(e.classList.contains("on")){switch(A.e.AXSource[0]){case"sine wave":"constant"==A.e.character?X(A.k):("sweeping"==A.e.character&&document.querySelector(".cos.high-to-low").classList.contains("on")||"sweeping"==A.e.character&&document.querySelector(".cos.low-to-high").classList.contains("on"))&&X([A.e.AXSource[1]]);break;case"pink noise":case"white noise":X([A.e.AXSource[1]])}N("stop")}}(),void 0==window.safari||D||(alert("Unfortunately the frequency selection tool will not work for white and pink noise in Safari, please use any other modern browser for these features. Thanks :-)"),D=!0)})),document.querySelectorAll(".audio-source.constant.noise").forEach((function(e){e.addEventListener("play",(function(e){var t=document.querySelector(".mstr-audio-node");(null==t||t.classList.contains("sg-on")&&I<3)&&(void 0==window.safari&&function(e){console.log("this thing kind aworks"+A.e);Object(l.e)(e);var t,c,n,o=new(AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext);(t=o.createBiquadFilter()).type="lowshelf",t.frequency.value=400,(c=o.createBiquadFilter()).type="peaking",c.frequency.value=1e3,c.Q.value=.5,(n=o.createBiquadFilter()).type="highshelf",n.frequency.value=5e3,null!=C&&(C.classList.contains("off")?t.gain.value=-12:t.gain.value=0,z.classList.contains("off")?c.gain.value=-12:c.gain.value=0,B.classList.contains("off")?n.gain.value=-12:n.gain.value=0);o.createMediaElementSource(A.e.AXSource[1]).connect(n).connect(c).connect(t).connect(o.destination),document.querySelectorAll(".frequency.wrap").forEach((function(e){e.addEventListener("click",(function(e){var o=Object(l.e)(e);switch(o.dataset.frequency){case"high":o.classList.contains("off")?n.gain.value=-12:n.gain.value=0;break;case"mid":o.classList.contains("off")?c.gain.value=-12:c.gain.value=0;break;case"low":o.classList.contains("off")?t.gain.value=-12:t.gain.value=0}}))}))}(e),I=3)}))}));var e=function e(){console.log("eeeeed"),1==I&&setTimeout((function(){[document.querySelector(".mstr-audio-node")].forEach((function(e){e.volume=0,e.play(),X([e]),e.volume=1})),document.removeEventListener("click",e()),I=2}),100)};document.querySelector(".main-nav-link.Audio").addEventListener("click",(function(){return e()}))}()}},{key:"render",value:function(){return Object(n.jsx)("button",{className:"play-stop-btn off",children:Object(n.jsx)("span",{children:"PLAY"})})}}]),c}(u.a.Component),I=1,D=!1;var C,z,B,M=setInterval((function(){null!=document.querySelector(".audio-control-btn.low-frequency")&&(C=document.querySelector(".audio-control-btn.low-frequency"),z=document.querySelector(".audio-control-btn.mid-frequency"),B=document.querySelector(".audio-control-btn.high-frequency"),clearInterval(M))}),200);var T=c.p+"static/media/Low_Freq_Transparent.0341123e.png",U=c.p+"static/media/Mid_Freq_Transparent.9cffa9b7.png",F=c.p+"static/media/High_Freq_Transparent.5f962947.png";function G(e,t){t.classList.contains("off")?(e=A.e.frequency.indexOf(e),A.e.frequency.splice(e,1)):t.classList.contains("on")&&A.e.frequency.push(e)}function W(e,t){switch(e){case"high":t.classList.contains("off")?A.k.splice(A.k.indexOf(A.g),1):A.k.push(A.g);break;case"mid":t.classList.contains("off")?A.k.splice(A.k.indexOf(A.j),1):A.k.push(A.j);break;case"low":t.classList.contains("off")?A.k.splice(A.k.indexOf(A.i),1):A.k.push(A.i)}}var Q,K=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={type:"filters"},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){Object(A.a)(this.state.type),function(){for(var e=document.querySelectorAll(".frequency.wrap"),t="",c=0;c<e.length;c++)e[c].addEventListener("click",(function(e){console.log(A.e.frequency);var c=document.querySelectorAll(".audio-control-btn.frequency.on"),n="";if(e.target.classList.contains("wrap")||e.target.parentElement.classList.contains("wrap")){var o=(t=e.target.classList.contains("wrap")?e.target:e.target.parentElement.classList.contains("wrap")?e.target.parentElement:void 0).dataset.frequency;if(t.classList.contains("on")&&c.length>1?(t.classList.add("off"),t.classList.remove("on")):t.classList.contains("off")&&(t.classList.add("on"),t.classList.remove("off")),G(o,t),W(o,t),n=A.e.frequency,"sine wave"==A.e.AXSource[0]&&Q!=n)switch(o){case"high":"playing"==A.e.state&&(t.classList.contains("off")?X([A.g]):A.g.play());break;case"mid":"playing"==A.e.state&&(t.classList.contains("off")?X([A.j]):A.j.play());break;case"low":"playing"==A.e.state&&(t.classList.contains("off")?X([A.i]):A.i.play())}n&&(Q=n.slice(0,n.length))}}))}()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"audio-controls-wrap frequency",children:[Object(n.jsx)("h2",{className:"sg-header audio-header frequency",children:"Frequency"}),Object(n.jsxs)("div",{className:"audio-banner-wrap low-frequency",children:[" ",Object(n.jsxs)("div",{className:"audio-control-btn low-frequency on frequency wrap","data-frequency":"low",children:[Object(n.jsx)("img",{alt:"Low Frequency",className:"audio-control-icon low-frequency frequency",src:T}),Object(n.jsx)("label",{className:"audio-control-label low-frequency frequency",children:"Low Frequency"})]}),Object(n.jsxs)("div",{className:"audio-control-btn mid-frequency on frequency wrap","data-frequency":"mid",children:[Object(n.jsx)("img",{alt:"White Noise",className:"audio-control-icon mid-frequency frequency",src:U}),Object(n.jsx)("label",{className:"audio-control-label mid-frequency frequency",children:"Mid Frequency"})]}),Object(n.jsxs)("div",{className:"audio-control-btn high-frequency on frequency wrap","data-frequency":"high",children:[Object(n.jsx)("img",{alt:"High Frequency",className:"audio-control-icon high-frequency frequency",src:F}),Object(n.jsx)("label",{className:"audio-control-label high-frequency frequency",children:"High Frequency"})]})]})]})}}]),c}(u.a.Component);var P=c.p+"static/media/Sinewave_Transparent.38784c8d.png",H=c.p+"static/media/Sine_Wave_High.4bf03c1d.wav",Y=c.p+"static/media/Sine_Wave_Mid.30bc7d7d.wav",V=c.p+"static/media/Sine_Wave_Low.fa4929f1.wav",J=(c(16),c(15),function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={type:"sources"},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){Object(A.a)(this.state.type)}},{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"audio-controls-wrap noise-type",children:[Object(n.jsx)("h2",{className:"sg-header audio-header noise-type",children:"Source"}),Object(n.jsxs)("div",{className:"audio-banner-wrap noise-type",children:[" ",Object(n.jsxs)("div",{className:"audio-control-btn pink-noise off source wrap","data-source":"pink noise",onClick:function(e){return Z(e)},children:[Object(n.jsx)("img",{alt:"Pink Noise",className:"audio-control-icon pink-noise source",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACf1BMVEUAAADhvOzguuzguuvguuvguevgu+zms+bguuzguuvgu+rguezhu+reuu3guuvmv+bhuurguerguuvguuvfuuzguevhtPDhuevhuuvhuuzguevguejfuerguuvguuvguuv/gP/huerguuvYsevguuvguOvgu+vguurgu+vdu+7guenhvO3guerguuvguuv/qv/huurgu+v/v//gvO3guuvhu+vgu+neuOzfuuvgu+vfv9/fuuzguuvguuvfuezfuuvgu+zqv+rfuevfuuzguezdu+7guevguevguuv////fuuviuuvhuuzfuurduuriuuvguuvguuvgu+vMzP/huO3huevfuuvhuuzguuzguurhuuzhuunhuevguurhuevgu+vguuvguuvbtu3fv+rktu3guuvguuvguevjvezjxuPguezguuvhuuvguuvet+vguuvguuvft+fguuvguuvhuerfuuvhuerguuvguOvguuvfu+rguuvfuuvbttvcue3evOnfv+/Vqv/guurguezouejguuvkvPLguuvguuvguuvjuOrguuvbtufivenfuuvfuurguevhuuviuOrguuvgu+rgu+vhuurguuvguuvhu+vguuvfuerguezguevfvOrguuvhu+rguureve/fuezguuvhuuzguerguuvguuvhvOnfuezguuzhu+zjuPHhuevhuuvguuvfuurcuejfuuvgu+vgu+rhuurgu+zguuvguuvfu+vguurguuvguuvgu+zguuvguuvguOveuerguergu+vfuezhuuzgu+zivOzgu+vguuvguuvguuvfuuvguuvguerguuzhu+vfu+zguusAAACS9C48AAAA03RSTlMARJ7EwIspCqv7e6xtRvMUoGPIjNKWEWaYn3UhV+76ggJU/g3qMlqUih46KknP6ANvswQ5/X9TNrHyCJD45F8/gwxYkUIPW7f1AVk0doglGrzdvgUrM9pd3+x3O7BKTEvD6w4YHNnvmhsJhPfB4yfgpyD824dobvkZvWHhgQcdFxAG05IL5RPU9qYk0BUjqbrRlz30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"}),Object(n.jsx)("label",{className:"audio-control-label pink-noise noise",children:"Pink Noise"})]}),Object(n.jsxs)("div",{className:"audio-control-btn white-noise on source wrap","data-source":"white noise",onClick:function(e){return Z(e)},children:[Object(n.jsx)("img",{alt:"White Noise",className:"audio-control-icon white-noise source",src:"data:image/png;base64,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"}),Object(n.jsx)("label",{className:"audio-control-label white-noise noise",children:"White Noise"}),Object(n.jsx)("audio",{className:"audio-test",src:""})]}),Object(n.jsxs)("div",{className:"audio-control-btn sinewave off source wrap","data-source":"sine wave",onClick:function(e){return Z(e)},children:[Object(n.jsx)("img",{alt:"Sine Wave",className:"audio-control-icon sinewave source",src:P}),Object(n.jsx)("label",{className:"audio-control-label sinewave",children:"Sine Wave"}),Object(n.jsx)("audio",{className:"audio-source sine-wave-high constant sine",src:H,loop:!0}),Object(n.jsx)("audio",{className:"audio-source sine-wave-mid constant sine",src:Y,loop:!0}),Object(n.jsx)("audio",{className:"audio-source sine-wave-low constant sine",src:V,loop:!0})]})]})]})})}}]),c}(u.a.Component));function Z(e){var t="";if((t=e.target.classList.contains("wrap")?e.target:e.target.parentElement.classList.contains("wrap")?e.target.parentElement:void 0).classList.contains("off")&&t.classList.contains("source")){document.querySelector(".audio-control-btn.source");if(void 0!=A.e.AXSource[1][0]&&(A.e.AXSource[1]=document.querySelector(".mstr-audio-node")),"playing"==A.e.state)switch(A.e.AXSource[0]){case"pink noise":case"white noise":X([A.e.AXSource[1]]);break;case"sine wave":"constant"==A.e.character?X(A.k):"sweeping"==A.e.character&&X([A.e.AXSource[1]])}switch(t.classList.contains("off")&&(document.querySelector(".audio-control-btn.source.on").classList.add("off"),document.querySelector(".audio-control-btn.source.on").classList.remove("on"),t.classList.add("on"),t.classList.remove("off")),t.dataset.source){case"pink noise":A.e.AXSource[0]="pink noise","constant"==A.e.character?A.e.AXSource[1].setAttribute("src",A.b):"sweeping"==A.e.character&&document.querySelector(".cos.high-to-low").classList.contains("on")?A.e.AXSource[1].setAttribute("src",A.c):"sweeping"==A.e.character&&document.querySelector(".cos.low-to-high").classList.contains("on")&&A.e.AXSource[1].setAttribute("src",A.d);break;case"white noise":A.e.AXSource[0]="white noise","constant"==A.e.character?A.e.AXSource[1].setAttribute("src",A.l):"sweeping"==A.e.character&&document.querySelector(".cos.high-to-low").classList.contains("on")?A.e.AXSource[1].setAttribute("src",A.m):"sweeping"==A.e.character&&document.querySelector(".cos.low-to-high").classList.contains("on")&&A.e.AXSource[1].setAttribute("src",A.n);break;case"sine wave":A.e.AXSource[0]="sine wave","constant"==A.e.character?A.e.AXSource[1]=A.k:"sweeping"==A.e.character&&document.querySelector(".cos.high-to-low").classList.contains("on")?A.e.AXSource[1].setAttribute("src",A.f):"sweeping"==A.e.character&&document.querySelector(".cos.low-to-high").classList.contains("on")&&A.e.AXSource[1].setAttribute("src",A.h)}if("playing"==A.e.state)switch(t.dataset.source){case"pink noise":A.e.AXSource[1].load(),A.e.AXSource[1].play();case"white noise":A.e.AXSource[1].play();break;case"sine wave":"constant"==A.e.character?A.k.forEach((function(e){return e.play()})):"sweeping"==A.e.character&&(A.e.AXSource[1].load(),A.e.AXSource[1].play())}}}var _="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG8AAAArCAYAAAB2DNYaAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAb6ADAAQAAAABAAAAKwAAAABAkgXDAAADiUlEQVR4Ae1bTWgTQRSeSXazSRsVQoIHgwepCBa8BMSTFMSDJw9NqviHJ08ieBA8ePAmeCgoeOhJRAQR0YMU7ME/KqVaq6IoiqLiD6IgWhryt5uMX2lI0ibpbra7yf68Oc2+efNm5/uYt+/NznBZkgTzcAkytrOgaZNenGLAi5NqnFOZsfuKLJ9slHml7nnyQJRUEWI0JEk34/H4Gq8QtzAP7nW32UgW5/w943y4VCq9aZS7te6HlVfjRgixRVQqT0Kh0IGa0MUVX5FX5akfBF6TZfliKpWSXcydv9xmE1GcT0uSlMnn89+b2lwg8OPKq9MixA5NVZ+Hw+FddaF7av4mb5GnRFnTJhCNnsY3kbuHOp9Fm3rEgLk7fdHokX8oerpOaPdVqmAEcKQTn7DlNKyq6ksj+r3UIbe5DH24zk1MiClEo0eXNTnukchrTUkEBF4GgWMDAwNKa5XeS8lt6nHA+WwwGEwXCoUveqrdbqeVp4e4EClEo7OKouzRU+12O5FnDPFYpVwex7baWRTHYEZu0xh5NS2kExNKJHJwfn7+T03YowqRZwJ4pBNfJcbSOVWdMdHdsi6OcQGWzagLhpBObFSFmEQ0eqwLw7UdgshrC41ug4J0Yiwky1eSyWREV9sGBXKbFoAKN/qKBwLDxWLxowXmDJuglWcYqvaKcKPbEI0+QzS6t72W9S1EnnWYrsNP3tsg8Fwmk8GhNfsLuU17MH6ghMP7s9nsb3vML1ol8mxCF/ngDyy/kbymTdk0BCO3aROy+K20QWPsIc6MnrBpCCLPLmCrdmWcGb2AdOJ6IpGIWj0WuU2rEW1jD+nE2+qZ0XdtVDoWk9vsGDJzHZBObEU0OoNoNGPOQnMvIq8ZEzslURB4A9tqo0NDQ9geXV0ht7k6/Mz35vwxSBzJ5XI/zRoh8swiZ02/X0gn9uEK2iMz5shtmkHNuj7rcQXtniJJp8yYJPLMoGZtn2CFsfM49HsrFout7cQ0uc1O0LJZF+nEh2o68drIULTyjKDUJR2kE5sRjU4jnThkZEgizwhK3dXpA4FXEYleGhwcDK00NLnNldDpdRvnT3EFLY0raN9avQqtvFaoOEUmxPaFK2g4M7q71SsRea1QcZYsjr/0dxGNnsE3EX+a6oXcZh0Lx9fA3Hikv//w3Nzc34WXJfIcT9nSF0Q68bl6Be0FkbcUG7c8FZAPHv8PAS7xHfSJKNQAAAAASUVORK5CYII=",$=c(20),ee=c(19),te=c(17),ce=c(18),ne=c(21),oe=c(22),se=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={type:"cos"},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){Object(A.a)(this.state.type),console.log("trigger master"),document.querySelectorAll(".audio-control-btn.cos").forEach((function(e){return e.addEventListener("click",(function(e){return ie(e)}))}))}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"audio-controls-wrap constant-sweep",children:[Object(n.jsx)("h2",{className:"sg-header audio-header constant-sweep",children:"Constant / Sweep"}),Object(n.jsxs)("div",{className:"audio-banner-wrap cos constant-sweep wrap","data-type":"constant",children:[" ",Object(n.jsxs)("div",{className:"audio-control-btn cos constant on wrap",children:[Object(n.jsx)("div",{class:"audio-control-icon-wrap constant",children:Object(n.jsx)("img",{alt:"Constant Full Spectrum",className:"audio-control-icon constant cos",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAAAwCAYAAADJuP4nAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAcKADAAQAAAABAAAAMAAAAACGcQn4AAAC4ElEQVR4Ae1bO07EMBBdfltBtQ090oqGliOABAeAMmeAK4BExxVW3IGKmpWoqeACUAMNFMB7i7whUb5O7PgzI42cZON45r3YO34so5FdO8ZwP4E7cwzSxsjqGR46gcyRuVqxNSuj/A1yjubE4nhDDTXBwB/w+6ECMDHuNh76Bg999qn8mCtzDsZmyEQlF0vLnIOwfWTxDY+FOJUnc2buXtsKon+Aq6Ria5k7MfDWEkQeG2n5fImBl7aFqF/g+YRiOycGxMKImdxGXCLiAyNR+/XQTYS7Ab/zKewpgv2ExzbbyvIlFsTEG7tFpGXJxHqdmHhhMeidui+h8zopNcAnuG6CofcjNsSoN+u7iKHeedpbdOE9yGmdNDa9U3e1cFYnnWHC6CYVWz9i5ZTFqnfqvnhO6aSx6526JDqjkyZYC3STiL0fsetkXZVyanz8CUFQf7zshGi7zq+4nQrNe7tu6d1dtxGid6ZY6hwNqpPyzRG9s/vXx2A6qeid3clTNYB1nVT0zv7IUyRa00lF7+yfPJKopZPqFDFnGEz0Tp2SpboPdVJWo/Pq27Kftt1GcLvAbYOxnwhkw4vujASyOOT2opGtNrorvekKh0JeikffR8SWGBsx0TvNfPepIka1RnRS0TvtkKdI7F0nTTCn1cOltYMFMa+1JkWM6J21MBq5oZFO2mQbcYHwDo2EKA+tQoA66Tq88vekdTOQJe0jnJt3MfsIfGHIPTi3boVWt424Ri8hrxA6KxeJPTnQsiP0koLFDQzIRaGVLaFknkvntLCXXLSNAJdQLqVcUjNWVsSI3pmBafCTCSKgzDbPR1I0A0XvzKPkxjkJ5IqY0UmLihjRO90gLB9FI51U9E43ipay4rFSJ+VyGvP/s5eB5tr1Up00AYGuBSvxFHNCrhamihjROxUifrRLnVRtI0Tv9IM4FeVSJ+UMZGnKTftYfSqtFwgsdFLOwBv4rhchS5D/ESB3O78gE6jxkqobtwAAAABJRU5ErkJggg=="})}),Object(n.jsx)("label",{className:"audio-control-label constant cos",children:"Full Spectrum"})]}),Object(n.jsxs)("div",{className:"audio-control-btn cos high-to-low sweep off wrap","data-type":"sweeping","data-name":"high-to-low",children:[Object(n.jsx)("div",{class:"audio-control-icon-wrap high-to-low",children:Object(n.jsx)("img",{alt:"High To Low",className:"audio-control-icon high-to-low cos",src:_})}),Object(n.jsx)("label",{className:"audio-control-label high-to-low cos",children:"High To Low"}),Object(n.jsx)("audio",{className:"audio-source high-to-low sweep sine-wave",src:oe.a,loop:!0}),Object(n.jsx)("audio",{className:"audio-source high-to-low sweep pink-noise",src:$.a,loop:!0}),Object(n.jsx)("audio",{className:"audio-source high-to-low sweep white-noise",src:te.a,loop:!0})]}),Object(n.jsxs)("div",{className:"audio-control-btn cos low-to-high sweep off wrap","data-type":"sweeping","data-name":"low-to-high",children:[Object(n.jsx)("div",{class:"audio-control-icon-wrap low-to-high",children:Object(n.jsx)("img",{alt:"LowToHigh",className:"audio-control-icon low-to-high cos",src:_})}),Object(n.jsx)("label",{className:"audio-control-label low-to-high cos",children:"Low To High"}),Object(n.jsx)("audio",{className:"audio-source low-to-high sweep sine-wave",src:ne.a,loop:!0}),Object(n.jsx)("audio",{className:"audio-source low-to-high sweep pink-noise",src:ee.a,loop:!0}),Object(n.jsx)("audio",{className:"audio-source low-to-high sweep white-noise",src:ce.a,loop:!0})]})]})]})}}]),c}(u.a.Component);var ae="",ie="";ie=function(e){var t=Object(l.e)(e);switch(document.querySelector(".cos.on").classList.add("off"),document.querySelector(".cos.on").classList.remove("on"),t.classList.add("on"),t.classList.remove("off"),console.log("working"),A.e.character){case"constant":document.querySelectorAll(".audio-control-btn.frequency").forEach((function(e){return e.classList.add("disabled")})),"playing"==A.e.state&&("sine wave"==A.e.AXSource[0]?X(A.e.AXSource[1]):X([A.e.AXSource[1]]),ue(e),A.e.AXSource[1].load(),A.e.AXSource[1].play()),A.e.character=t.dataset.type,ae=[A.e.frequency].slice(0),A.e.frequency="frequencies disabled",1==re&&ue(e);break;case"sweeping":t.classList.contains("sweep")&&("playing"==A.e.state&&(X([A.e.AXSource[1]]),ue(e),A.e.AXSource[1].load(),A.e.AXSource[1].play()),1==re&&ue(e),A.e.character=t.dataset.type),t.classList.contains("constant")&&(document.querySelectorAll(".audio-control-btn.frequency").forEach((function(e){return e.classList.remove("disabled")})),"playing"==A.e.state&&X([A.e.AXSource[1]]),A.e.frequency=ae,A.e.character="constant","pink noise"==A.e.AXSource[0]?(document.querySelector(".mstr-audio-node").setAttribute("src",A.b),"playing"==A.e.state&&(A.e.AXSource[1].load(),A.e.AXSource[1].play())):"white noise"==A.e.AXSource[0]?(document.querySelector(".mstr-audio-node").setAttribute("src",A.l),"playing"==A.e.state&&(A.e.AXSource[1].load(),A.e.AXSource[1].play())):"sine wave"==A.e.AXSource[0]&&("playing"==A.e.state&&A.k.forEach((function(e){return e.play()})),A.e.AXSource[1]=A.k))}};var re=1;function ue(e){re++,setTimeout((function(){re--}),500);var t=Object(l.e)(e);"pink noise"==A.e.AXSource[0]?t.classList.contains("high-to-low")?A.e.AXSource[1].setAttribute("src",A.c):t.classList.contains("low-to-high")&&A.e.AXSource[1].setAttribute("src",A.d):"white noise"==A.e.AXSource[0]?t.classList.contains("high-to-low")?A.e.AXSource[1].setAttribute("src",A.m):t.classList.contains("low-to-high")&&A.e.AXSource[1].setAttribute("src",A.n):"sine wave"==A.e.AXSource[0]&&(void 0!=A.e.AXSource[1][0]&&(A.e.AXSource[1]=document.querySelector(".mstr-audio-node")),t.classList.contains("high-to-low")?A.e.AXSource[1].setAttribute("src",A.f):t.classList.contains("low-to-high")&&A.e.AXSource[1].setAttribute("src",A.h))}var le=c(42);function Ae(){void 0!=A.e.AXSource[1][0]?X(A.e.AXSource[1]):X([A.e.AXSource[1]]),"playing"==A.e.state?N("stop"):"playing"==q.state&&E()}function de(){}var pe=function(){function e(t,c,n,s){var a=this;Object(o.a)(this,e),this.mutationCallback=function(e){var t,c=Object(le.a)(e);try{for(c.s();!(t=c.n()).done;){var n=t.value;if("attributes"===n.type&&"class"===n.attributeName){var o=n.target.classList.contains(a.classToWatch);a.lastClassState!==o&&(a.lastClassState=o,o?a.classAddedCallback():a.classRemovedCallback())}}}catch(s){c.e(s)}finally{c.f()}},this.targetNode=t,this.classToWatch=c,this.classAddedCallback=n,this.classRemovedCallback=s,this.observer=null,this.lastClassState=t.classList.contains(this.classToWatch),this.init()}return Object(s.a)(e,[{key:"init",value:function(){this.observer=new MutationObserver(this.mutationCallback),this.observe()}},{key:"observe",value:function(){this.observer.observe(this.targetNode,{attributes:!0})}},{key:"disconnect",value:function(){this.observer.disconnect()}}]),e}();var he=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={type:"btn_toggle"},n}return Object(s.a)(c,[{key:"componentDidMount",value:function(){!function(){var e=document.querySelector(".audio-tool-wrap");new pe(e,"display-none",Ae,de)}()}},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"audio-test-type-wrap sg-on",children:[Object(n.jsx)("button",{className:"audio-test-type-btn sg on wrap",onClick:function(e){return fe(e)},style:{marginLeft:"25px"},children:Object(n.jsx)("span",{children:"Signal Generator"})}),Object(n.jsx)("button",{className:"audio-test-type-btn rpb off wrap",onClick:function(e){return fe(e)},style:{marginRight:"25px"},children:Object(n.jsx)("span",{children:"Recording Playback"})})]})}}]),c}(u.a.Component),ve="";function fe(e){document.querySelector(".audio-rpb-wrap.tool-element-wrap"),document.querySelector(".audio-sg-wrap.tool-element-wrap");var t=document.querySelector(".play-stop-btn"),c=Object(l.e)(e);void 0!=A.e.AXSource[1][0]?X(A.e.AXSource[1]):X([A.e.AXSource[1]]),c.classList.contains("sg")&&c.classList.contains("off")?(document.querySelector(".audio-sg-wrap.tool-element-wrap").classList.remove("display-none"),document.querySelector(".audio-rpb-wrap.tool-element-wrap").classList.add("display-none"),t.classList.remove("display-none"),document.querySelector(".audio-test-type-btn.on").classList.add("off"),document.querySelector(".audio-test-type-btn.on").classList.remove("on"),c.classList.add("on"),c.classList.remove("off"),document.querySelector(".mstr-audio-node").classList.remove("rpb-on"),document.querySelector(".mstr-audio-node").classList.add("sg-on"),document.querySelector(".mstr-audio-node").setAttribute("src",ve),"playing"==q.state&&E()):c.classList.contains("rpb")&&c.classList.contains("off")&&(ve=[A.e.AXSource[1]].slice(-1)[0].src,document.querySelector(".audio-rpb-wrap.tool-element-wrap").classList.remove("display-none"),document.querySelector(".audio-sg-wrap.tool-element-wrap").classList.add("display-none"),t.classList.add("display-none"),document.querySelector(".audio-test-type-btn.on").classList.add("off"),document.querySelector(".audio-test-type-btn.on").classList.remove("on"),c.classList.add("on"),c.classList.remove("off"),document.querySelector(".mstr-audio-node").classList.add("rpb-on"),document.querySelector(".mstr-audio-node").classList.remove("sg-on"),"playing"==A.e.state&&N("stop"))}var me=c(40),ge=function(e){Object(a.a)(c,e);var t=Object(i.a)(c);function c(e){var n;return Object(o.a)(this,c),(n=t.call(this,e)).state={},n}return Object(s.a)(c,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"audio-tool-wrap display-none","aria-controls":"Audio Controls",children:[Object(n.jsxs)("div",{className:"audio-ctrl",children:[Object(n.jsx)(me.a,{}),Object(n.jsx)(R,{})]}),Object(n.jsxs)("div",{className:"audio-sg-wrap tool-element-wrap",children:[Object(n.jsx)("audio",{className:"mstr-audio-node master audio-source constant noise sg-on",id:"mstr-audio-source",src:A.l,loop:!0}),Object(n.jsx)(se,{}),Object(n.jsx)(J,{}),Object(n.jsx)(K,{})]}),Object(n.jsx)(S,{}),Object(n.jsx)(he,{})]})}}]),c}(u.a.Component);document.querySelector(".mstr-audio-node"),t.default=ge}}]);
//# sourceMappingURL=3.e3eb5aa6.chunk.js.map