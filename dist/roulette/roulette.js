!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Roulette=e():t.Roulette=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="dist/roulette/",e(e.s=0)}([function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),a=function(t){return t&&t.__esModule?t:{default:t}}(r);a.default.install=function(t){t.component(a.default.name,a.default)},e.default=a.default},function(t,e,n){"use strict";function r(t){n(3)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(9),o=n.n(a),i=n(10),s=n(8),u=r,d=s(o.a,i.a,!1,u,"data-v-6fbaf6df",null);e.default=d.exports},function(t,e,n){var r=n(4);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(6)("244272f4",r,!0)},function(t,e,n){e=t.exports=n(5)(void 0),e.push([t.i,'.roulette[data-v-6fbaf6df]{position:relative;border-radius:50%;display:inline-block}.roulette[data-v-6fbaf6df],.roulette [data-v-6fbaf6df]{-webkit-box-sizing:border-box;box-sizing:border-box}.roulette_roundel[data-v-6fbaf6df]{position:relative;width:100%;height:100%;background-size:100%;background-position:50%;background-repeat:no-repeat}.roulette_roundel--cover[data-v-6fbaf6df]{display:block;width:100%;height:100%;position:absolute;z-index:1;left:0;top:0}.roulette_roundel--subline[data-v-6fbaf6df]{position:absolute;display:inline-block;top:0;left:50%;height:50%;transform-origin:0 100%;text-align:center;width:1px;z-index:9}.roulette_roundel--subline.\\--line[data-v-6fbaf6df]{border-top:5px solid blue;background:#ddd}.roulette_roundel--subline.\\--mid[data-v-6fbaf6df]{border-top:5px solid red;background-color:transparent}.roulette_pointer--image[data-v-6fbaf6df]{position:absolute;top:50%;left:40%;width:20%;height:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.roulette_pointer--image img[data-v-6fbaf6df]{width:100%}.roulette_pointer--test[data-v-6fbaf6df]{position:absolute;width:10px;height:35%;left:50%;top:15%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:50% 50% 5px 5px;background-color:rgba(0,0,0,.75)}.roulette_pointer--test[data-v-6fbaf6df]:after{content:"";position:absolute;width:20px;height:30px;display:inline-block;background-color:rgba(0,0,0,.75);bottom:-10px;left:-5px;border-radius:50% 50% 10px 10px}.brake[data-v-6fbaf6df],.static[data-v-6fbaf6df],.trans[data-v-6fbaf6df]{-webkit-transform:rotate(0deg);-webkit-transition-property:-webkit-transform;-webkit-transition-timing-function:ease-out;transform:rotate(0deg);transition-property:transform;transition-timing-function:ease-out}.play[data-v-6fbaf6df]{-webkit-animation-name:play--rotate-data-v-6fbaf6df;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;animation-name:play--rotate-data-v-6fbaf6df;animation-iteration-count:infinite;animation-timing-function:linear}@-webkit-keyframes play--rotate-data-v-6fbaf6df{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes play--rotate-data-v-6fbaf6df{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",a=t[3];if(!a)return n;if(e&&"function"==typeof btoa){var o=r(a);return[n].concat(a.sources.map(function(t){return"/*# sourceURL="+a.sourceRoot+t+" */"})).concat([o]).join("\n")}return[n].join("\n")}function r(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=n(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},a=0;a<this.length;a++){var o=this[a][0];"number"==typeof o&&(r[o]=!0)}for(a=0;a<t.length;a++){var i=t[a];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){function r(t){for(var e=0;e<t.length;e++){var n=t[e],r=f[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(o(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(o(n.parts[a]));f[n.id]={id:n.id,refs:1,parts:i}}}}function a(){var t=document.createElement("style");return t.type="text/css",l.appendChild(t),t}function o(t){var e,n,r=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(r){if(b)return h;r.parentNode.removeChild(r)}if(m){var o=p++;r=c||(c=a()),e=i.bind(null,r,o,!1),n=i.bind(null,r,o,!0)}else r=a(),e=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}function i(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,a);else{var o=document.createTextNode(a),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function s(t,e){var n=e.css,r=e.media,a=e.sourceMap;if(r&&t.setAttribute("media",r),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=n(7),f={},l=u&&(document.head||document.getElementsByTagName("head")[0]),c=null,p=0,b=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){b=n;var a=d(t,e);return r(a),function(e){for(var n=[],o=0;o<a.length;o++){var i=a[o],s=f[i.id];s.refs--,n.push(s)}e?(a=d(t,e),r(a)):a=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete f[s.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],r={},a=0;a<e.length;a++){var o=e[a],i=o[0],s=o[1],u=o[2],d=o[3],f={id:t+":"+a,css:s,media:u,sourceMap:d};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}},function(t,e){t.exports=function(t,e,n,r,a,o){var i,s=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(i=t,s=t.default);var d="function"==typeof s?s.options:s;e&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0),n&&(d.functional=!0),a&&(d._scopeId=a);var f;if(o?(f=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},d._ssrRegister=f):r&&(f=r),f){var l=d.functional,c=l?d.render:d.beforeCreate;l?(d._injectStyles=f,d.render=function(t,e){return f.call(e),c(t,e)}):d.beforeCreate=c?[].concat(c,f):[f]}return{esModule:i,exports:s,options:d}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={STATIC:"static",PLAY:"play",TRANS:"trans",BRAKE:"brake",STOP:"stop"},a=function(t,e){var n=t>e?[e,t]:[t,e];return Math.floor(Math.random()*(n[1]-n[0]+1))+n[0]};e.default={name:"Roulette",data:function(){return{el:null,elId:0,currState:r.STATIC}},props:{datas:{type:Array,default:function(){return[{name:"p1",degs:[30,90]},{name:"p2",degs:[90,150]},{name:"p3",degs:[150,210]},{name:"p4",degs:[210,270]},{name:"p5",degs:[270,330]},{name:"p6",degs:[330,390]}]}},r:{type:Number,default:100},ease:{type:Number,default:5},speed:{type:Number,default:1},during:{type:Function,default:new Function},coverurl:{type:String},pointerurl:{type:String},test:{type:Boolean,default:!1},vague:{type:Number,default:10},disabled:{type:Boolean,default:!1}},computed:{datum:function(){var t=[],e=[];return this.datas.forEach(function(n,r){var a=n.degs;t.push((a[0]+a[1])/2%360),e.push(a[0],a[1])}),{mid:t,line:e}},diameter:function(){return{width:2*this.r+"px",height:2*this.r+"px"}}},methods:{handleClick:function(t){this.$emit("click",t)},play:function(){var t=this;this.disabled||this.currState!=r.STATIC&&this.currState!=r.STOP||(this.reset(),setTimeout(function(){t.currState=r.PLAY},20))},brake:function(t){var e=this;if(this.currState==r.PLAY){var n=this.datas.find(function(e,n){return e.name==t});if(!n)return void console.log("No target found");var o=n.degs,i=a(o[0]+this.vague,o[1]-this.vague),s=360*parseInt(Math.abs(this.ease))+360-i,u=(s/360*this.speed).toFixed(2);this.currState=r.TRANS,setTimeout(function(){e.currState=r.BRAKE,e.el.style.cssText="-webkit-transform:rotate("+s+"deg);\n\t\t\t\t\t\t-webkit-transition-duration:"+u+"s;\n\t\t\t\t\t\ttransform:rotate("+s+"deg);\n\t\t\t\t\t\ttransition-duration:"+u+"s"},20)}},reset:function(){this.currState=r.STATIC},_sublineStyle:function(t){return"-webkit-transform:rotate("+t+"deg) translateX(-50%);transform:rotate("+t+"deg) translateX(-50%);"},_roundelStyle:function(){var t=Math.max(this.speed-.15,.15);return"play"==this.currState?"-webkit-animation-duration: "+t+"s;animation-duration: "+t+"s;":""},_transEnd:function(){this.currState==r.BRAKE&&(this.currState=r.STOP)}},watch:{currState:function(t,e){t==r.STATIC&&(this.el.style.cssText=""),this.during(t)}},created:function(){this.elId="__roulette_"+this._uid+"_"+(new Date).getTime()},mounted:function(){this.el=document.getElementById(this.elId)}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roulette",style:[t.diameter]},[n("div",{staticClass:"roulette_roundel",class:t.currState,style:t._roundelStyle(),attrs:{id:t.elId},on:{transitionend:t._transEnd,webkitTransitionEnd:t._transEnd}},[n("span",{staticClass:"roulette_roundel--cover"},[t.coverurl?n("img",{attrs:{width:"100%",height:"100%",src:t.coverurl,alt:""}}):t._e()]),t._v(" "),t._l(t.datum.mid,function(e,r){return t.test?n("span",{key:"m"+r,staticClass:"roulette_roundel--subline --mid",style:t._sublineStyle(e)}):t._e()}),t._v(" "),t._l(t.datum.line,function(e,r){return t.test?n("span",{key:"l"+r,staticClass:"roulette_roundel--subline --line",style:t._sublineStyle(e)}):t._e()})],2),t._v(" "),t.test?n("div",{staticClass:"roulette_pointer--test"}):t._e(),t._v(" "),n("div",{staticClass:"roulette_pointer--image",on:{click:t.handleClick}},[t.pointerurl?n("img",{attrs:{src:t.pointerurl,alt:""}}):t._e()])])},a=[],o={render:r,staticRenderFns:a};e.a=o}])});