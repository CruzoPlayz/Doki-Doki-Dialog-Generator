(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],h=0,d=[];h<s.length;h++)o=s[h],i[o]&&d.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/Doki-Doki-Dialog-Generator/beta/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0213":function(e,t,n){"use strict";var r=n("4f00"),i=n.n(r);i.a},"151a":function(e,t,n){},1615:function(e,t,n){"use strict";var r=n("151a"),i=n.n(r);i.a},"1fe4":function(e,t,n){},"4ec5":function(e,t,n){},"4f00":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),i=n.n(r);i.a},"5e27":function(e,t,n){},"804e":function(e,t,n){},"8ea7":function(e,t,n){"use strict";var r=n("804e"),i=n.n(r);i.a},b33e:function(e,t,n){"use strict";var r=n("4ec5"),i=n.n(r);i.a},b367:function(e,t,n){"use strict";var r=n("ea81"),i=n.n(r);i.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"container"}},[n("canvas",{ref:"sd",style:{width:e.canvasWidth+"px",height:e.canvasHeight+"px"},attrs:{id:"scaled_display",height:"720",width:"1280"},on:{click:e.onUiClick}},[e._v("\n\t\t\tHTML5 is required to use this\n\t\t\t"),n("strike",[e._v("shitpost")]),e._v("meme generator.\n\t\t")],1)]),n("div",{class:{vertical:e.vertical},attrs:{id:"panels"}},[n("div",{attrs:{id:"toolbar"}},[n("button",{class:{active:"add"===e.panel},on:{click:function(t){e.panel="add"===e.panel?"":"add"}}},[e._v("A")]),n("button",{class:{active:"backgrounds"===e.panel},on:{click:function(t){e.panel="backgrounds"===e.panel?"":"backgrounds"}}},[e._v("B")]),n("button",[e._v(" ")]),n("button",{on:{click:e.download}},[e._v("D")])]),n("keep-alive",[""===e.panel?n("general-panel",{attrs:{options:e.textbox,vertical:e.vertical,lqRendering:e.lqRendering},on:{"update:lqRendering":function(t){e.lqRendering=t},"update:lq-rendering":function(t){e.lqRendering=t}}}):e._e(),"add"===e.panel?n("add-panel",{attrs:{vertical:e.vertical},on:{chosen:e.onDokiChosen}}):e._e(),"backgrounds"===e.panel?n("backgrounds-panel",{attrs:{vertical:e.vertical},model:{value:e.currentBackground,callback:function(t){e.currentBackground=t},expression:"currentBackground"}}):e._e(),"doki"===e.panel?n("doki-panel",{attrs:{vertical:e.vertical,girl:e.selectedGirl},on:{shiftLayer:e.onDokiLayerShift,"invalidate-render":e.invalidateRender}}):e._e()],1)],1)])},a=[],o=n("768b"),s=(n("5df3"),n("ac4d"),n("8a81"),n("ac6a"),n("96cf"),n("3b8d")),c=n("d225"),l=n("b0b4"),u=n("308d"),h=n("6bb5"),d=n("4e2b"),p=n("9ab4"),f=n("60a3"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn",on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},b=[],g=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),t}(f["c"]);g=p["a"]([Object(f["a"])({components:{}})],g);var k=g,m=k,y=(n("b367"),n("2877")),w=Object(y["a"])(m,v,b,!1,null,null,null),x=w.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v("General")]),n("toggle",{attrs:{label:"Low quality preview?",title:"Reduces the quality of the preview images to speed up the user experience and consume less data. Does not effect final render.",value:e.lqRendering},on:{input:function(t){return e.$emit("update:lqRendering",t)}}}),n("toggle",{attrs:{label:"Textbox visible?"},model:{value:e.options.display,callback:function(t){e.$set(e.options,"display",t)},expression:"options.display"}}),n("toggle",{attrs:{label:"Textbox corrupt?"},model:{value:e.options.corrupted,callback:function(t){e.$set(e.options,"corrupted",t)},expression:"options.corrupted"}}),n("div",[e._v("\n\t\tPerson talking:\n\t\t"),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:e.options.talking,expression:"options.talking"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.$set(e.options,"talking",t.target.multiple?n:n[0])}}},[n("option",{attrs:{value:""}},[e._v("No-one")]),n("option",{attrs:{value:"Sayori"}},[e._v("Sayori")]),n("option",{attrs:{value:"Yuri"}},[e._v("Yuri")]),n("option",{attrs:{value:"Natsuki"}},[e._v("Natsuki")]),n("option",{attrs:{value:"Monika"}},[e._v("Monika")]),n("option",{attrs:{value:"other"}},[e._v("Other")])])]),n("div",[e._v("\n\t\tOther name:\n\t\t"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.options.customName,expression:"options.customName"}],domProps:{value:e.options.customName},on:{input:function(t){t.target.composing||e.$set(e.options,"customName",t.target.value)}}})]),n("toggle",{attrs:{label:"Controls visible?"},model:{value:e.options.showControls,callback:function(t){e.$set(e.options,"showControls",t)},expression:"options.showControls"}}),n("toggle",{attrs:{label:"Able to skip?"},model:{value:e.options.allowSkipping,callback:function(t){e.$set(e.options,"allowSkipping",t)},expression:"options.allowSkipping"}}),n("toggle",{attrs:{label:"Continue arrow?"},model:{value:e.options.showContinueArrow,callback:function(t){e.$set(e.options,"showContinueArrow",t)},expression:"options.showContinueArrow"}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.options.dialog,expression:"options.dialog"}],domProps:{value:e.options.dialog},on:{input:function(t){t.target.composing||e.$set(e.options,"dialog",t.target.value)}}})],1)},j=[],C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{ref:"checkbox",attrs:{id:e._uid,type:"checkbox"},domProps:{checked:e.value},on:{change:e.onChange}}),n("label",{attrs:{for:e._uid}},[e._v(e._s(e.label))])])},P=[],_=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"onChange",value:function(e){this.$emit("input",!!this.$refs.checkbox.checked)}},{key:"checkbox",get:function(){return this.$refs.checkbox}}]),t}(f["c"]);p["a"]([Object(f["b"])({type:String})],_.prototype,"label",void 0),p["a"]([Object(f["b"])({type:Boolean,default:!1})],_.prototype,"value",void 0),_=p["a"]([Object(f["a"])({components:{}})],_);var R=_,S=R,A=(n("8ea7"),Object(y["a"])(S,C,P,!1,null,null,null)),q=A.exports,$=function(e){function t(){return Object(c["a"])(this,t),Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments))}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"talkingChange",value:function(){this.options.talking="other"}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0})],$.prototype,"options",void 0),p["a"]([Object(f["b"])({required:!0,type:Boolean})],$.prototype,"vertical",void 0),p["a"]([Object(f["b"])({required:!0,type:Boolean})],$.prototype,"lqRendering",void 0),p["a"]([Object(f["d"])("options.customName")],$.prototype,"talkingChange",null),$=p["a"]([Object(f["a"])({components:{Toggle:q}})],$);var H,T=$,B=T,D=(n("b33e"),Object(y["a"])(B,O,j,!1,null,"d6cde16e",null)),I=D.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return void 0!==e.isWebPSupported?n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v("Add doki")]),e._l(e.dokis,function(t){return n("div",{key:t,staticClass:"doki",attrs:{title:t},on:{click:function(n){e.$emit("chosen",t.toLowerCase())}}},[n("img",{attrs:{src:e.assetPath(t),alt:t}})])})],2):e._e()},E=[],W=(n("a481"),function(){function e(t,n){Object(c["a"])(this,e),this.name=n,this.path="/backgrounds/"+t}return Object(l["a"])(e,[{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,z(this.path,t.hq);case 3:e.t1=e.sent,e.t2={image:e.t1,x:0,y:0},e.t0.drawImage.call(e.t0,e.t2);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}()),N=new W("transparent","Transparent");function G(){return H||(H=new Promise(function(e,t){var n="data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA=",r=document.createElement("img");r.addEventListener("load",function(){e(2===r.width&&1===r.height)}),r.addEventListener("error",function(){e(!1)}),r.src=n})),H}N.render=function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t.preview){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,W.prototype.render.call(this,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();var M={};function z(e){return U.apply(this,arguments)}function U(){return U=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=!(i.length>1&&void 0!==i[1])||i[1],e.t0="".concat("/Doki-Doki-Dialog-Generator/beta/","/assets/").concat(t).concat(n?"":".lq"),e.next=4,G();case 4:if(!e.sent){e.next=8;break}e.t1=".webp",e.next=9;break;case 8:e.t1=".png";case 9:return e.t2=e.t1,r=e.t0.concat.call(e.t0,e.t2).replace(/\/+/,"/"),M[r]||(M[r]=new Promise(function(e,t){var n=new Image;n.addEventListener("load",function(){e(n)}),n.addEventListener("error",function(){t('Failed to load "'.concat(r,'"'))}),n.crossOrigin="Anonymous",n.src=r,n.style.display="none",document.body.appendChild(n)})),e.abrupt("return",M[r]);case 13:case"end":return e.stop()}},e)})),U.apply(this,arguments)}var F=[new W("club","Clubroom"),new W("closet","Closet"),new W("corridor","Corridor"),new W("class","Classroom"),new W("residential","Street"),new W("house","House"),new W("bedroom","Bedroom"),new W("kitchen","Kitchen"),new W("sayori_bedroom","Sayori's bedroom"),new W("club-skill","Clubroom with hanging Sayori poster"),new W("bsod","Blue screen of death"),new W("unused-house","Unused house found in game files"),N],Y={};function X(e,t){Y[e]=t}X("sayori",{name:"Sayori",folder:"sayori",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y"],sideways:["a2","b2","c2","d2"]},poses:[{compatibleHeads:["straight"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["sideways"],static:"3"},{compatibleHeads:["straight"],left:["1bl","2bl"],right:["1br","2br"]}]}),X("yuri",{name:"Yuri",folder:"yuri",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y1","y2","y3","y4","y5","y6","y7","hisui"],sideways:["a2","b2","c2","d2","e2"]},poses:[{compatibleHeads:["straight"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["sideways"],static:"3"},{compatibleHeads:["straight"],left:["1bl","2bl"],right:["1br","2br"]},{compatibleHeads:["sideways"],static:"3b"}]}),X("natsuki",{name:"Natsuki",folder:"natsuki",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1t","scream","corrupt","crying"],sideways:["2t","2ta","2tb","2tc","2td","2te","2tf","2tg","2th","2ti","2bta","2btb","2btc","2btd","2bte","2btf","2btg","2bth","2bti"]},poses:[{compatibleHeads:["straight","sideways"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["straight"],headAnchor:[18,22],static:"3"},{compatibleHeads:["straight","sideways"],left:["1bl","2bl"],right:["1br","2br"]},{compatibleHeads:["straight"],headAnchor:[18,22],static:"3b"}]}),X("monika",{name:"Monika",folder:"monika",heads:{straight:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r"],sideways:["a2","b2"]},poses:[{compatibleHeads:["straight"],left:["1l","2l"],right:["1r","2r"]},{compatibleHeads:["sideways"],static:"3"}]});var J=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.isWebPSupported=null,e.dokis=["Monika","Natsuki","Sayori","Yuri"],e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:this.isWebPSupported=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"assetPath",value:function(e){return"".concat("/Doki-Doki-Dialog-Generator/beta/","/assets/chibis/").concat(e.toLowerCase(),".lq.").concat(this.isWebPSupported?"webp":"png").replace(/\/+/,"/")}},{key:"onClick",value:function(e){var t=this.$el,n=e.clientX-t.offsetLeft,r=n<123?"sayori":n<247?"yuri":n<370?"monika":"natsuki";this.$emit("chosen",r)}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0,type:Boolean})],J.prototype,"vertical",void 0),J=p["a"]([Object(f["a"])({components:{}})],J);var Q=J,K=Q,V=(n("0213"),Object(y["a"])(K,L,E,!1,null,"6706d058",null)),Z=V.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v(e._s(e.captialize(e.girl.name)))]),n("fieldset",[n("legend",[e._v("Pose:")]),n("table",[n("tbody",[n("tr",[n("td",[n("button",{on:{click:function(t){return e.girl.posel()}}},[e._v("<")])]),n("td",[e._v("Pose")]),n("td",[n("button",{on:{click:function(t){return e.girl.poser()}}},[e._v(">")])])]),e._l(e.parts,function(t){return n("tr",{key:t},[n("td",[n("button",{on:{click:function(n){return e.girl.partl(t)}}},[e._v("<")])]),n("td",[e._v(e._s(e.captialize(t)))]),n("td",[n("button",{on:{click:function(n){return e.girl.partr(t)}}},[e._v(">")])])])})],2)])]),n("fieldset",[n("legend",[e._v("Position:")]),n("button",{on:{click:function(t){e.girl.pos=Math.max(1,e.girl.pos-1),e.$emit("invalidate-render")}}},[e._v("< left")]),n("button",{on:{click:function(t){e.girl.pos=Math.min(7,e.girl.pos+1),e.$emit("invalidate-render")}}},[e._v("> right")])]),n("fieldset",{attrs:{id:"layerfs"}},[n("legend",[e._v("Layer:")]),n("button",{attrs:{title:"Move to back"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Back"})}}},[e._v("⤓")]),n("button",{attrs:{title:"Move backwards"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Backward"})}}},[e._v("↓")]),n("button",{attrs:{title:"Move forwards"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Forward"})}}},[e._v("↑")]),n("button",{attrs:{title:"Move to front"},on:{click:function(t){return e.$emit("shiftLayer",{girl:e.girl,move:"Front"})}}},[e._v("⤒")])]),n("toggle",{attrs:{label:"In front of textbox?"},on:{input:function(t){return e.$emit("invalidate-render")}},model:{value:e.girl.infront,callback:function(t){e.$set(e.girl,"infront",t)},expression:"girl.infront"}}),n("toggle",{attrs:{label:"Close up?"},on:{input:function(t){return e.$emit("invalidate-render")}},model:{value:e.girl.close,callback:function(t){e.$set(e.girl,"close",t)},expression:"girl.close"}}),n("toggle",{attrs:{label:"Flipped?"},on:{input:function(t){return e.$emit("invalidate-render")}},model:{value:e.girl.flip,callback:function(t){e.$set(e.girl,"flip",t)},expression:"girl.flip"}}),n("button",{on:{click:function(t){e.$emit("shiftLayer",{girl:e.girl,move:"Delete"}),e.$emit("close")}}},[e._v("Delete")])],1)},te=[],ne=(n("7f7f"),n("75fc")),re=n("01c8"),ie=[null,208,256,500,640,790,1024,1094],ae=(n("34ef"),n("28a5"),n("8e6e"),n("456d"),n("bd86")),oe=function e(){Object(c["a"])(this,e)};function se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?se(n,!0).forEach(function(t){Object(ae["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):se(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var le=function(){function e(t,n,r){Object(c["a"])(this,e),this.fsCtx=t,this.hq=n,this.preview=r,this.aborted=!1}return Object(l["a"])(e,[{key:"drawText",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"white",o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#533643",s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"20px aller";if(this.aborted)throw new oe;this.fsCtx.fillStyle=a,o&&(this.fsCtx.strokeStyle=o),this.fsCtx.lineWidth=2*i,this.fsCtx.textAlign=r,this.fsCtx.font=s,this.fsCtx.lineJoin="round",o&&this.fsCtx.strokeText(e,t,n),this.fsCtx.fillText(e,t,n)}},{key:"drawImage",value:function(e){if(this.aborted)throw new oe;var t=ce({flip:!1,w:e.image.width,h:e.image.height},e),n=t.image,r=t.flip,i=t.x,a=t.y,o=t.w,s=t.h;if(this.fsCtx.save(),e.shadow){var c=e.shadow;c.color&&(this.fsCtx.shadowColor=c.color),c.blur&&(this.fsCtx.shadowBlur=c.blur),c.offsetX&&(this.fsCtx.shadowOffsetX=c.offsetX),c.offsetY&&(this.fsCtx.shadowOffsetY=c.offsetY)}this.fsCtx.translate(i+o/2,a+s/2),this.fsCtx.scale(r?-1:1,1),n instanceof ue?n.paintOnto(this.fsCtx,-o/2,-s/2,o,s):this.fsCtx.drawImage(n,-o/2,-s/2,o,s),this.fsCtx.restore()}},{key:"drawRectOutline",value:function(e,t,n,r,i,a){if(this.aborted)throw new oe;this.fsCtx.beginPath(),this.fsCtx.rect(e,t,n,r),this.fsCtx.strokeStyle=i,this.fsCtx.lineWidth=a,this.fsCtx.stroke()}},{key:"measureText",value:function(e){if(this.aborted)throw new oe;return this.fsCtx.measureText(e)}},{key:"abort",value:function(){this.aborted=!0}}]),e}(),ue=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1280,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:720;Object(c["a"])(this,e),this.runningContext=null,this.previewCanvas=document.createElement("canvas"),this.previewCanvas.width=t,this.previewCanvas.height=n}return Object(l["a"])(e,[{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=!(a.length>1&&void 0!==a[1])||a[1],this.runningContext&&this.runningContext.abort(),r=this.previewCanvas.getContext("2d"),r.clearRect(0,0,this.previewCanvas.width,this.previewCanvas.height),i=this.runningContext=new le(r,n,!0),e.prev=5,e.next=8,t(this.runningContext);case 8:e.next=15;break;case 10:if(e.prev=10,e.t0=e["catch"](5),!(e.t0 instanceof oe)){e.next=14;break}return e.abrupt("return");case 14:throw e.t0;case 15:return e.prev=15,i===this.runningContext&&(this.runningContext=null),e.finish(15);case 18:case"end":return e.stop()}},e,this,[[5,10,15,18]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"paintOnto",value:function(e,t,n,r,i){r&&i?e.drawImage(this.previewCanvas,t,n,r,i):e.drawImage(this.previewCanvas,t,n)}},{key:"download",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t,n){var r,i,a,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=document.createElement("canvas"),r.width=this.previewCanvas.width,r.height=this.previewCanvas.height,i=r.getContext("2d"),i.clearRect(0,0,this.previewCanvas.width,this.previewCanvas.height),e.next=7,t(new le(i,!0,!1));case 7:a=r.toDataURL(),void 0===window.navigator.msSaveOrOpenBlob?(o=document.createElement("a"),o.setAttribute("href",a),o.setAttribute("download",n),document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.navigator.msSaveBlob(this.dataURItoBlob(a),n);case 9:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"getDataAt",value:function(e,t){var n=this.previewCanvas.getContext("2d");return n.getImageData(e,t,1,1).data}},{key:"dataURItoBlob",value:function(e){for(var t=atob(e.split(",")[1]),n=[],r=0;r<t.length;r++)n.push(t.charCodeAt(r));return new Blob([new Uint8Array(n)],{type:"image/png"})}},{key:"width",get:function(){return this.previewCanvas.width}},{key:"height",get:function(){return this.previewCanvas.height}}]),e}(),he=function(){function e(t,n){Object(c["a"])(this,e),this.name=t,this.invalidator=n,this.pos=4,this.infront=!1,this.close=!1,this.flip=!1,this.lq=!0,this.selected=!1,this.poseId=0,this.posePositions={variant:0,left:0,right:0,head:0,headType:0},this.size=960,this.localRenderer=new ue(960,960),this.dirty=!0}return Object(l["a"])(e,[{key:"select",value:function(){this.selected=!0}},{key:"unselect",value:function(){this.selected=!1}},{key:"getParts",value:function(){var e=this.pose,t=this.pose.compatibleHeads.length>0?["head"]:[];return"variant"in e?[].concat(t,["variant"]):"left"in e?[].concat(t,["left","right"]):t}},{key:"updateLocalCanvas",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.localRenderer.render(function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(n){var r,i,a,o,s,c,l,u,h,d,p,f,v,b,g,k,m,y,w,x,O,j,C;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.pose,i=[],a=t.getParts(),o=(t.doki.folder?t.doki.folder+"/":"")+(t.pose.folder?t.pose.folder+"/":""),s=(t.doki.folder?t.doki.folder+"/":"")+(t.currentHeads&&t.currentHeads.folder?t.currentHeads.folder+"/":""),!r.static){e.next=9;break}i.push(o+r.static),e.next=36;break;case 9:c=!0,l=!1,u=void 0,e.prev=12,h=a[Symbol.iterator]();case 14:if(c=(d=h.next()).done){e.next=22;break}if(p=d.value,"head"!==p){e.next=18;break}return e.abrupt("continue",19);case 18:i.push(o+r[p][t.posePositions[p]]);case 19:c=!0,e.next=14;break;case 22:e.next=28;break;case 24:e.prev=24,e.t0=e["catch"](12),l=!0,u=e.t0;case 28:e.prev=28,e.prev=29,c||null==h.return||h.return();case 31:if(e.prev=31,!l){e.next=34;break}throw u;case 34:return e.finish(31);case 35:return e.finish(28);case 36:return f=t.currentHeads?s+t.currentHeads.all[t.posePositions.head]:null,e.next=39,Promise.all([f?z(f,n.hq):Promise.resolve(null)].concat(Object(ne["a"])(i.map(function(e){return z(e,n.hq)}))));case 39:for(v=e.sent,b=Object(re["a"])(v),g=b[0],k=b.slice(1),g&&(m=t.pose.headAnchor?t.pose.headAnchor:[0,0],n.drawImage({image:g,x:m[0],y:("monika"===t.name?1:0)+m[1]})),y=!0,w=!1,x=void 0,e.prev=47,O=k[Symbol.iterator]();!(y=(j=O.next()).done);y=!0)C=j.value,n.drawImage({image:C,x:0,y:0});e.next=55;break;case 51:e.prev=51,e.t1=e["catch"](47),w=!0,x=e.t1;case 55:e.prev=55,e.prev=56,y||null==O.return||O.return();case 58:if(e.prev=58,!w){e.next=61;break}throw x;case 61:return e.finish(58);case 62:return e.finish(55);case 63:case"end":return e.stop()}},e,null,[[12,24,28,36],[29,,31,35],[47,51,55,63],[56,,58,62]])}));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!this.dirty&&this.lq===!t.hq){e.next=3;break}return e.next=3,this.updateLocalCanvas();case 3:n=this.close?2:1,r=720*n,i=ie[this.pos]-r/2,a=this.close?-100:0,t.drawImage({image:this.localRenderer,x:i,y:a,w:r,h:r,flip:this.flip,shadow:this.selected?{blur:20,color:"red"}:void 0});case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"hittest",value:function(e,t){var n=this.close?1.6:.8,r=960*n,i=(e-ie[this.pos]+r/2)/n,a=(t-(this.close?-100:0))/n,o=this.localRenderer.getDataAt(i,a);return 0!==o[3]}},{key:"headl",value:function(){this.currentHeads&&(--this.posePositions.head,this.posePositions.head<0&&(--this.posePositions.headType,this.posePositions.headType<0&&(this.posePositions.headType=this.pose.compatibleHeads.length-1),this.posePositions.head=this.currentHeads.all.length-1),this.dirty=!0,this.invalidator())}},{key:"headr",value:function(){this.currentHeads&&(++this.posePositions.head,this.posePositions.head>=this.currentHeads.all.length&&(++this.posePositions.headType,this.posePositions.headType>=this.pose.compatibleHeads.length&&(this.posePositions.headType=0),this.posePositions.head=0),this.dirty=!0,this.invalidator())}},{key:"partl",value:function(e){if("head"===e)return this.headl();this.pose[e]&&(--this.posePositions[e],this.posePositions[e]<0&&(this.posePositions[e]=this.pose[e].length-1),this.dirty=!0,this.invalidator())}},{key:"partr",value:function(e){if("head"===e)return this.headr();this.pose[e]&&(++this.posePositions[e],this.posePositions[e]>=this.pose[e].length&&(this.posePositions[e]=0),this.dirty=!0,this.invalidator())}},{key:"posel",value:function(){var e=this.pose.compatibleHeads[this.posePositions.headType];--this.poseId,this.poseId<0&&(this.poseId=this.doki.poses.length-1);var t=this.pose.compatibleHeads.indexOf(e);t>=0?this.posePositions.headType=t:(this.posePositions.headType=0,this.posePositions.head=0),this.posePositions.left=0,this.posePositions.right=0,this.posePositions.variant=0,this.dirty=!0,this.invalidator()}},{key:"poser",value:function(){var e=this.pose.compatibleHeads[this.posePositions.headType];++this.poseId,this.poseId>=this.doki.poses.length&&(this.poseId=0);var t=this.pose.compatibleHeads.indexOf(e);t>=0?this.posePositions.headType=t:(this.posePositions.headType=0,this.posePositions.head=0),this.posePositions.left=0,this.posePositions.right=0,this.posePositions.variant=0,this.dirty=!0,this.invalidator()}},{key:"doki",get:function(){return Y[this.name]}},{key:"pose",get:function(){return this.doki.poses[this.poseId]}},{key:"currentHeads",get:function(){if(!this.pose.compatibleHeads||0===this.pose.compatibleHeads.length)return null;var e=this.doki.heads[this.pose.compatibleHeads[this.posePositions.headType]];return e instanceof Array?{all:e}:e}}]),e}(),de=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.isWebPSupported=null,e.dokis=["Monika","Natsuki","Sayori","Yuri"],e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:this.isWebPSupported=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"captialize",value:function(e){return e.charAt(0).toUpperCase()+e.substring(1)}},{key:"assetPath",value:function(e){return"/assets/chibis/".concat(e.toLowerCase(),".lq.").concat(this.isWebPSupported?"webp":"png")}},{key:"onClick",value:function(e){var t=this.$el,n=e.clientX-t.offsetLeft,r=n<123?"sayori":n<247?"yuri":n<370?"monika":"natsuki";this.$emit("chosen",r)}},{key:"parts",get:function(){return this.girl.getParts()}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0,type:Boolean})],de.prototype,"vertical",void 0),p["a"]([Object(f["b"])({type:he,required:!0})],de.prototype,"girl",void 0),de=p["a"]([Object(f["a"])({components:{Toggle:q}})],de);var pe=de,fe=pe,ve=(n("d168"),Object(y["a"])(fe,ee,te,!1,null,"2ed3cbc2",null)),be=ve.exports,ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return void 0!==e.isWebPSupported?n("div",{class:{panel:!0,vertical:e.vertical}},[n("h1",[e._v("Background")]),e._l(e.backgrounds,function(t){return n("div",{key:t.name,class:{background:!0,active:t===e.value},style:{backgroundImage:"url("+e.assetPath(t.path)+")"},attrs:{title:t.name},on:{click:function(n){return e.$emit("input",t)}}},[e._v(e._s(t.name))])})],2):e._e()},ke=[],me=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.isWebPSupported=null,e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"created",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,G();case 2:this.isWebPSupported=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"assetPath",value:function(e){return"".concat("/Doki-Doki-Dialog-Generator/beta/","/assets/").concat(e.toLowerCase(),".lq.").concat(this.isWebPSupported?"webp":"png").replace(/\/+/,"/")}},{key:"onClick",value:function(e){var t=this.$el,n=e.clientX-t.offsetLeft,r=n<123?"sayori":n<247?"yuri":n<370?"monika":"natsuki";this.$emit("chosen",r)}},{key:"backgrounds",get:function(){return F}}]),t}(f["c"]);p["a"]([Object(f["b"])({required:!0,type:Boolean})],me.prototype,"vertical",void 0),p["a"]([Object(f["b"])({type:W,required:!0})],me.prototype,"value",void 0),me=p["a"]([Object(f["a"])({components:{}})],me);var ye=me,we=ye,xe=(n("1615"),Object(y["a"])(we,ge,ke,!1,null,"3e4a4648",null)),Oe=xe.exports,je=function(){function e(){Object(c["a"])(this,e),this.display=!0,this.corrupted=!1,this.showControls=!0,this.allowSkipping=!0,this.showContinueArrow=!0,this.talking="",this.customName="",this.dialog=""}return Object(l["a"])(e,[{key:"render",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.display){e.next=2;break}return e.abrupt("return");case 2:if(!this.corrupted){e.next=11;break}return e.t0=t,e.next=6,z("textbox_monika");case 6:e.t1=e.sent,e.t2={image:e.t1,x:190,y:565},e.t0.drawImage.call(e.t0,e.t2),e.next=17;break;case 11:return e.t3=t,e.next=14,z("textbox");case 14:e.t4=e.sent,e.t5={image:e.t4,x:232,y:565},e.t3.drawImage.call(e.t3,e.t5);case 17:if(n=this.talking,!n){e.next=27;break}return e.t6=t,e.next=22,z("namebox");case 22:e.t7=e.sent,e.t8=526,e.t9={image:e.t7,x:264,y:e.t8},e.t6.drawImage.call(e.t6,e.t9),t.drawText("other"===n?this.customName:n,348,555,"center",3,"white","#b59","24px riffic");case 27:if(this.renderText(t),this.showControls&&(t.drawText("Skip",566,700,"left",1,this.allowSkipping?"#522":"#a66",null,"13px aller"),t.drawText("History",512,700,"left",1,"#522",null,"13px aller"),t.drawText("Auto   Save   Load   Settings",600,700,"left",1,"#522",null,"13px aller")),!this.showContinueArrow){e.next=36;break}return e.t10=t,e.next=33,z("next");case 33:e.t11=e.sent,e.t12={image:e.t11,x:1020,y:685},e.t10.drawImage.call(e.t10,e.t12);case 36:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"renderText",value:function(e){var t=[],n=!1,r=!0,i=!1,a=void 0;try{for(var o,s=this.dialog.split("\n")[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var c=o.value,l=void 0;t.push(l=[]);var u=!0,h=!1,d=void 0;try{for(var p,f=c[Symbol.iterator]();!(u=(p=f.next()).done);u=!0){var v=p.value;"["===v?n=!0:"]"===v?n=!1:l.push({l:v,b:n})}}catch(C){h=!0,d=C}finally{try{u||null==f.return||f.return()}finally{if(h)throw d}}}}catch(C){i=!0,a=C}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var b=620,g=0,k=t;g<k.length;g++){var m=k[g],y=!1;if(m.length){var w=270,x=0;while(x<m.length){var O="",j=m[x].b;y=y||j;while(x<m.length&&m[x].b===j)O+=m[x].l,j&&(O+=" "),x++;e.drawText(O,w,b,"left",j?8:2,"#fff",j?"#000":"#523140","24px aller"),w+=e.measureText(O).width}}b+=26}}}]),e}(),Ce=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(u["a"])(this,Object(h["a"])(t).apply(this,arguments)),e.canvasWidth=0,e.canvasHeight=0,e.currentBackground=null,e.girls=[],e.selectedGirl=null,e.dokiSelectorOpen=!1,e.backgroundSelectorOpen=!1,e.editDialog=!1,e.vertical=!1,e.textbox=new je,e.renderer=new ue,e.showUI=!0,e.loaded=!1,e.uiSize=192,e.lqRendering=!0,e.panel="",e.renderInProgress=!1,e.queuedRender=null,e}return Object(d["a"])(t,e),Object(l["a"])(t,[{key:"onSelectedGirlChange",value:function(e,t){t&&t.unselect(),e&&(e.select(),this.panel="doki"),this.invalidateRender()}},{key:"onPanel",value:function(e){"doki"!==e&&(this.selectedGirl=null)}},{key:"invalidateRender",value:function(){var e=this;this.queuedRender||(this.queuedRender=requestAnimationFrame(function(){return e.render_()}))}},{key:"render_",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.queuedRender&&(cancelAnimationFrame(this.queuedRender),this.queuedRender=null),this.renderInProgress&&this.invalidateRender(),this.renderInProgress=!0,e.prev=3,n=t||!this.lqRendering,e.next=7,this.renderer.render(this.renderCallback,n);case 7:this.display();case 8:return e.prev=8,this.renderInProgress=!1,e.finish(8);case 11:case"end":return e.stop()}},e,this,[[3,,8,11]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"renderCallback",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,i,a,o,s,c,l,u,h,d,p;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.loaded){e.next=4;break}t.drawText("Starting...",this.renderer.width/2,this.renderer.height/2,"center",5,"white","#b59","32px riffic"),e.next=63;break;case 4:if(!this.currentBackground){e.next=7;break}return e.next=7,this.currentBackground.render(t);case 7:n=!0,r=!1,i=void 0,e.prev=10,a=this.girls[Symbol.iterator]();case 12:if(n=(o=a.next()).done){e.next=20;break}if(s=o.value,s.infront){e.next=17;break}return e.next=17,s.render(t);case 17:n=!0,e.next=12;break;case 20:e.next=26;break;case 22:e.prev=22,e.t0=e["catch"](10),r=!0,i=e.t0;case 26:e.prev=26,e.prev=27,n||null==a.return||a.return();case 29:if(e.prev=29,!r){e.next=32;break}throw i;case 32:return e.finish(29);case 33:return e.finish(26);case 34:return e.next=36,this.textbox.render(t);case 36:c=!0,l=!1,u=void 0,e.prev=39,h=this.girls[Symbol.iterator]();case 41:if(c=(d=h.next()).done){e.next=49;break}if(p=d.value,!p.infront){e.next=46;break}return e.next=46,p.render(t);case 46:c=!0,e.next=41;break;case 49:e.next=55;break;case 51:e.prev=51,e.t1=e["catch"](39),l=!0,u=e.t1;case 55:e.prev=55,e.prev=56,c||null==h.return||h.return();case 58:if(e.prev=58,!l){e.next=61;break}throw u;case 61:return e.finish(58);case 62:return e.finish(55);case 63:case"end":return e.stop()}},e,this,[[10,22,26,34],[27,,29,33],[39,51,55,63],[56,,58,62]])}));function t(t){return e.apply(this,arguments)}return t}()},{key:"created",value:function(){window.cats=this}},{key:"mounted",value:function(){var e=this,t=this.$refs.sd;this.sdCtx=t.getContext("2d")||void 0,this.updateArea(),window.addEventListener("resize",this.updateArea),window.addEventListener("keypress",function(t){27===t.keyCode&&(e.selectedGirl=null,e.panel="")}),this.currentBackground=F[0],this.invalidateRender(),Promise.all([z(this.currentBackground.path,!1),z("textbox"),z("namebox"),z("next")]).then(function(){e.loaded=!0,e.invalidateRender()}).catch(function(){alert("Error while loading. Sorry :/")})}},{key:"optimum",value:function(e,t){var n=e/(16/9),r=t*(16/9);return n>t?n=t:r=e,[r,n]}},{key:"optimizeWithMenu",value:function(e,t){var n=this.optimum(e,t-this.uiSize),r=this.optimum(e-this.uiSize,t);return n[0]*n[1]>r[0]*r[1]?[n[0],n[1],!1]:[r[0],r[1],!0]}},{key:"updateArea",value:function(){var e=this,t=this.optimizeWithMenu(window.innerWidth,window.innerHeight),n=Object(o["a"])(t,3),r=n[0],i=n[1],a=n[2];this.canvasWidth=r,this.canvasHeight=i,this.vertical=a,this.$nextTick(function(){e.display()})}},{key:"display",value:function(){this.sdCtx&&this.renderer.paintOnto(this.sdCtx,0,0,1280,780)}},{key:"download",value:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.selectedGirl=null,this.renderer.download(this.renderCallback,"panel.png");case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"onDokiChosen",value:function(e){this.dokiSelectorOpen=!1,this.girls.push(new he(e,this.invalidateRender)),this.invalidateRender()}},{key:"onUiClick",value:function(e){this.panel="";var t=this.$refs.sd,n=e.clientX-t.offsetLeft,r=e.clientY-t.offsetTop,i=n/t.offsetWidth*t.width,a=r/t.offsetWidth*t.width,o=a>50?this.girlsAt(i,a):[],s=o.indexOf(this.selectedGirl);this.selectedGirl=0===s?null:-1!==s?o[s-1]:o[o.length-1]||null}},{key:"girlsAt",value:function(e,t){return this.girls.filter(function(n){return n.hittest(e,t)})}},{key:"onDokiLayerShift",value:function(e){var t=this.girls.indexOf(e.girl),n=t;switch(this.girls.splice(t,1),e.move){case"Forward":n+=1;break;case"Backward":n-=1;break;case"Back":n=0;break;case"Front":n=this.girls.length;break;case"Delete":return this.panel="",void this.invalidateRender()}n<=0?this.girls.unshift(e.girl):n>=this.girls.length?this.girls.push(e.girl):this.girls.splice(n,0,e.girl),this.invalidateRender()}}]),t}(f["c"]);p["a"]([Object(f["d"])("selectedGirl")],Ce.prototype,"onSelectedGirlChange",null),p["a"]([Object(f["d"])("panel")],Ce.prototype,"onPanel",null),p["a"]([Object(f["d"])("textbox",{deep:!0}),Object(f["d"])("lqRendering"),Object(f["d"])("currentBackground")],Ce.prototype,"invalidateRender",null),Ce=p["a"]([Object(f["a"])({components:{DokiButton:x,GeneralPanel:I,AddPanel:Z,DokiPanel:be,BackgroundsPanel:Oe}})],Ce);var Pe=Ce,_e=Pe,Re=(n("5c0b"),Object(y["a"])(_e,i,a,!1,null,null,null)),Se=Re.exports,Ae=n("9483");Object(Ae["a"])("".concat("/Doki-Doki-Dialog-Generator/beta/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(Se)}}).$mount("#app")},d168:function(e,t,n){"use strict";var r=n("1fe4"),i=n.n(r);i.a},ea81:function(e,t,n){}});
//# sourceMappingURL=app.02ef3caf.js.map