var __vite_style__=document.createElement("style");__vite_style__.innerHTML=`.webgl{width:100%;height:100%}
`;document.head.appendChild(__vite_style__);(function(Gs){typeof define=="function"&&define.amd?define(Gs):Gs()})(function(){"use strict";var Gs="";function Do(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function ks(r,e,t){return e&&Do(r.prototype,e),t&&Do(r,t),r}function ni(){return(ni=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function Xr(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}function Uo(r){return(Uo=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}function Hs(r,e){return(Hs=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(r,e)}function Io(r,e,t){return(Io=function(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}()?Reflect.construct:function(n,i,s){var a=[null];a.push.apply(a,i);var o=new(Function.bind.apply(n,a));return s&&Hs(o,s.prototype),o}).apply(null,arguments)}function No(r){var e=typeof Map=="function"?new Map:void 0;return(No=function(t){if(t===null||Function.toString.call(t).indexOf("[native code]")===-1)return t;if(typeof t!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return Io(t,arguments,Uo(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Hs(n,t)})(r)}function Li(r,e){try{var t=r()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}typeof Symbol!="undefined"&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),typeof Symbol!="undefined"&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var Fn,ch="2.9.7",uh=function(){};(function(r){r[r.off=0]="off",r[r.error=1]="error",r[r.warning=2]="warning",r[r.info=3]="info",r[r.debug=4]="debug"})(Fn||(Fn={}));var Oo=Fn.off,ii=function(){function r(t){this.t=t}r.getLevel=function(){return Oo},r.setLevel=function(t){return Oo=Fn[t]};var e=r.prototype;return e.error=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.error,Fn.error,n)},e.warn=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.warn,Fn.warning,n)},e.info=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.info,Fn.info,n)},e.debug=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.i(console.log,Fn.debug,n)},e.i=function(t,n,i){n<=r.getLevel()&&t.apply(console,["["+this.t+"] "].concat(i))},r}(),ri=Xs,hh=Bo,fh=Vs,dh=zo,ph=Go,Fo="/",mh=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function Vs(r,e){for(var t,n=[],i=0,s=0,a="",o=e&&e.delimiter||Fo,l=e&&e.whitelist||void 0,c=!1;(t=mh.exec(r))!==null;){var u=t[0],f=t[1],h=t.index;if(a+=r.slice(s,h),s=h+u.length,f)a+=f[1],c=!0;else{var p="",g=t[2],_=t[3],m=t[4],d=t[5];if(!c&&a.length){var M=a.length-1,v=a[M];(!l||l.indexOf(v)>-1)&&(p=v,a=a.slice(0,M))}a&&(n.push(a),a="",c=!1);var E=_||m,S=p||o;n.push({name:g||i++,prefix:p,delimiter:S,optional:d==="?"||d==="*",repeat:d==="+"||d==="*",pattern:E?_h(E):"[^"+Mn(S===o?S:S+o)+"]+?"})}}return(a||s<r.length)&&n.push(a+r.substr(s)),n}function Bo(r,e){return function(t,n){var i=r.exec(t);if(!i)return!1;for(var s=i[0],a=i.index,o={},l=n&&n.decode||decodeURIComponent,c=1;c<i.length;c++)if(i[c]!==void 0){var u=e[c-1];o[u.name]=u.repeat?i[c].split(u.delimiter).map(function(f){return l(f,u)}):l(i[c],u)}return{path:s,index:a,params:o}}}function zo(r,e){for(var t=new Array(r.length),n=0;n<r.length;n++)typeof r[n]=="object"&&(t[n]=new RegExp("^(?:"+r[n].pattern+")$",Ws(e)));return function(i,s){for(var a="",o=s&&s.encode||encodeURIComponent,l=!s||s.validate!==!1,c=0;c<r.length;c++){var u=r[c];if(typeof u!="string"){var f,h=i?i[u.name]:void 0;if(Array.isArray(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but got array');if(h.length===0){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var p=0;p<h.length;p++){if(f=o(h[p],u),l&&!t[c].test(f))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'"');a+=(p===0?u.prefix:u.delimiter)+f}}else if(typeof h!="string"&&typeof h!="number"&&typeof h!="boolean"){if(!u.optional)throw new TypeError('Expected "'+u.name+'" to be '+(u.repeat?"an array":"a string"))}else{if(f=o(String(h),u),l&&!t[c].test(f))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but got "'+f+'"');a+=u.prefix+f}}else a+=u}return a}}function Mn(r){return r.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function _h(r){return r.replace(/([=!:$/()])/g,"\\$1")}function Ws(r){return r&&r.sensitive?"":"i"}function Go(r,e,t){for(var n=(t=t||{}).strict,i=t.start!==!1,s=t.end!==!1,a=t.delimiter||Fo,o=[].concat(t.endsWith||[]).map(Mn).concat("$").join("|"),l=i?"^":"",c=0;c<r.length;c++){var u=r[c];if(typeof u=="string")l+=Mn(u);else{var f=u.repeat?"(?:"+u.pattern+")(?:"+Mn(u.delimiter)+"(?:"+u.pattern+"))*":u.pattern;e&&e.push(u),l+=u.optional?u.prefix?"(?:"+Mn(u.prefix)+"("+f+"))?":"("+f+")?":Mn(u.prefix)+"("+f+")"}}if(s)n||(l+="(?:"+Mn(a)+")?"),l+=o==="$"?"$":"(?="+o+")";else{var h=r[r.length-1],p=typeof h=="string"?h[h.length-1]===a:h===void 0;n||(l+="(?:"+Mn(a)+"(?="+o+"))?"),p||(l+="(?="+Mn(a)+"|"+o+")")}return new RegExp(l,Ws(t))}function Xs(r,e,t){return r instanceof RegExp?function(n,i){if(!i)return n;var s=n.source.match(/\((?!\?)/g);if(s)for(var a=0;a<s.length;a++)i.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return n}(r,e):Array.isArray(r)?function(n,i,s){for(var a=[],o=0;o<n.length;o++)a.push(Xs(n[o],i,s).source);return new RegExp("(?:"+a.join("|")+")",Ws(s))}(r,e,t):function(n,i,s){return Go(Vs(n,s),i,s)}(r,e,t)}ri.match=function(r,e){var t=[];return Bo(Xs(r,t,e),t)},ri.regexpToFunction=hh,ri.parse=fh,ri.compile=function(r,e){return zo(Vs(r,e),e)},ri.tokensToFunction=dh,ri.tokensToRegExp=ph;var un={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},si=new(function(){function r(){this.o=un,this.u=new DOMParser}var e=r.prototype;return e.toString=function(t){return t.outerHTML},e.toDocument=function(t){return this.u.parseFromString(t,"text/html")},e.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},e.getHtml=function(t){return t===void 0&&(t=document),this.toString(t.documentElement)},e.getWrapper=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},e.getContainer=function(t){return t===void 0&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},e.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},e.addContainer=function(t,n){var i=this.getContainer();i?this.s(t,i):n.appendChild(t)},e.getNamespace=function(t){t===void 0&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},e.getHref=function(t){if(t.tagName&&t.tagName.toLowerCase()==="a"){if(typeof t.href=="string")return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},e.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=n.length;if(s===0)throw new Error("resolveUrl requires at least one argument; got none.");var a=document.createElement("base");if(a.href=arguments[0],s===1)return a.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(a,o.firstChild);for(var l,c=document.createElement("a"),u=1;u<s;u++)c.href=arguments[u],a.href=l=c.href;return o.removeChild(a),l},e.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},r}()),ko=new(function(){function r(){this.h=[],this.v=-1}var e=r.prototype;return e.init=function(t,n){this.l="barba";var i={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=0;var s={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(s,"",t)},e.change=function(t,n,i){if(i&&i.state){var s=i.state,a=s.index;n=this.m(this.v-a),this.replace(s.states),this.v=a}else this.add(t,n);return n},e.add=function(t,n){var i=this.size,s=this.p(n),a={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(a),this.v=i;var o={from:this.l,index:i,states:[].concat(this.h)};switch(s){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var i=n||this.v,s=ni({},this.get(i),{},t);this.set(i,s)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",i=t,s=un.prefix+"-"+un.history;return i.hasAttribute&&i.hasAttribute(s)&&(n=i.getAttribute(s)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":t===0?"popstate":t>0?"back":"forward"},ks(r,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),r}()),qr=function(r,e){try{var t=function(){if(!e.next.html)return Promise.resolve(r).then(function(n){var i=e.next;if(n){var s=si.toElement(n);i.namespace=si.getNamespace(s),i.container=si.getContainer(s),i.html=n,ko.update({ns:i.namespace});var a=si.toDocument(n);document.title=a.title}})}();return Promise.resolve(t&&t.then?t.then(function(){}):void 0)}catch(n){return Promise.reject(n)}},Ho=ri,gh={__proto__:null,update:qr,nextTick:function(){return new Promise(function(r){window.requestAnimationFrame(r)})},pathToRegexp:Ho},Vo=function(){return window.location.origin},gr=function(r){return r===void 0&&(r=window.location.href),Yr(r).port},Yr=function(r){var e,t=r.match(/:\d+/);if(t===null)/^http/.test(r)&&(e=80),/^https/.test(r)&&(e=443);else{var n=t[0].substring(1);e=parseInt(n,10)}var i,s=r.replace(Vo(),""),a={},o=s.indexOf("#");o>=0&&(i=s.slice(o+1),s=s.slice(0,o));var l=s.indexOf("?");return l>=0&&(a=Wo(s.slice(l+1)),s=s.slice(0,l)),{hash:i,path:s,port:e,query:a}},Wo=function(r){return r.split("&").reduce(function(e,t){var n=t.split("=");return e[n[0]]=n[1],e},{})},qs=function(r){return r===void 0&&(r=window.location.href),r.replace(/(\/#.*|\/|#.*)$/,"")},vh={__proto__:null,getHref:function(){return window.location.href},getOrigin:Vo,getPort:gr,getPath:function(r){return r===void 0&&(r=window.location.href),Yr(r).path},parse:Yr,parseQuery:Wo,clean:qs};function xh(r,e,t){return e===void 0&&(e=2e3),new Promise(function(n,i){var s=new XMLHttpRequest;s.onreadystatechange=function(){if(s.readyState===XMLHttpRequest.DONE){if(s.status===200)n(s.responseText);else if(s.status){var a={status:s.status,statusText:s.statusText};t(r,a),i(a)}}},s.ontimeout=function(){var a=new Error("Timeout error ["+e+"]");t(r,a),i(a)},s.onerror=function(){var a=new Error("Fetch error");t(r,a),i(a)},s.open("GET",r),s.timeout=e,s.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),s.setRequestHeader("x-barba","yes"),s.send()})}var Mh=function(r){return!!r&&(typeof r=="object"||typeof r=="function")&&typeof r.then=="function"};function Di(r,e){return e===void 0&&(e={}),function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var s=!1,a=new Promise(function(o,l){e.async=function(){return s=!0,function(u,f){u?l(u):o(f)}};var c=r.apply(e,n);s||(Mh(c)?c.then(o,l):o(c))});return a}}var Bn=new(function(r){function e(){var n;return(n=r.call(this)||this).logger=new ii("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}Xr(e,r);var t=e.prototype;return t.init=function(){var n=this;this.registered.clear(),this.all.forEach(function(i){n[i]||(n[i]=function(s,a){n.registered.has(i)||n.registered.set(i,new Set),n.registered.get(i).add({ctx:a||{},fn:s})})})},t.do=function(n){for(var i=this,s=arguments.length,a=new Array(s>1?s-1:0),o=1;o<s;o++)a[o-1]=arguments[o];if(this.registered.has(n)){var l=Promise.resolve();return this.registered.get(n).forEach(function(c){l=l.then(function(){return Di(c.fn,c.ctx).apply(void 0,a)})}),l.catch(function(c){i.logger.debug("Hook error ["+n+"]"),i.logger.error(c)})}return Promise.resolve()},t.clear=function(){var n=this;this.all.forEach(function(i){delete n[i]}),this.init()},t.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var n=[];this.registered.forEach(function(i,s){return n.push(s)}),this.logger.info("Registered hooks: "+n.join(","))},e}(uh)),Xo=function(){function r(e){if(this.P=[],typeof e=="boolean")this.g=e;else{var t=Array.isArray(e)?e:[e];this.P=t.map(function(n){return Ho(n)})}}return r.prototype.checkHref=function(e){if(typeof this.g=="boolean")return this.g;var t=Yr(e).path;return this.P.some(function(n){return n.exec(t)!==null})},r}(),Sh=function(r){function e(n){var i;return(i=r.call(this,n)||this).k=new Map,i}Xr(e,r);var t=e.prototype;return t.set=function(n,i,s){return this.k.set(n,{action:s,request:i}),{action:s,request:i}},t.get=function(n){return this.k.get(n)},t.getRequest=function(n){return this.k.get(n).request},t.getAction=function(n){return this.k.get(n).action},t.has=function(n){return!this.checkHref(n)&&this.k.has(n)},t.delete=function(n){return this.k.delete(n)},t.update=function(n,i){var s=ni({},this.k.get(n),{},i);return this.k.set(n,s),s},e}(Xo),Eh=function(){return!window.history.pushState},yh=function(r){return!r.el||!r.href},Th=function(r){var e=r.event;return e.which>1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey},bh=function(r){var e=r.el;return e.hasAttribute("target")&&e.target==="_blank"},Ah=function(r){var e=r.el;return e.protocol!==void 0&&window.location.protocol!==e.protocol||e.hostname!==void 0&&window.location.hostname!==e.hostname},wh=function(r){var e=r.el;return e.port!==void 0&&gr()!==gr(e.href)},Rh=function(r){var e=r.el;return e.getAttribute&&typeof e.getAttribute("download")=="string"},Ch=function(r){return r.el.hasAttribute(un.prefix+"-"+un.prevent)},Ph=function(r){return Boolean(r.el.closest("["+un.prefix+"-"+un.prevent+'="all"]'))},Lh=function(r){var e=r.href;return qs(e)===qs()&&gr(e)===gr()},Dh=function(r){function e(n){var i;return(i=r.call(this,n)||this).suite=[],i.tests=new Map,i.init(),i}Xr(e,r);var t=e.prototype;return t.init=function(){this.add("pushState",Eh),this.add("exists",yh),this.add("newTab",Th),this.add("blank",bh),this.add("corsDomain",Ah),this.add("corsPort",wh),this.add("download",Rh),this.add("preventSelf",Ch),this.add("preventAll",Ph),this.add("sameUrl",Lh,!1)},t.add=function(n,i,s){s===void 0&&(s=!0),this.tests.set(n,i),s&&this.suite.push(n)},t.run=function(n,i,s,a){return this.tests.get(n)({el:i,event:s,href:a})},t.checkLink=function(n,i,s){var a=this;return this.suite.some(function(o){return a.run(o,n,i,s)})},e}(Xo),Ys=function(r){function e(t,n){var i;n===void 0&&(n="Barba error");for(var s=arguments.length,a=new Array(s>2?s-2:0),o=2;o<s;o++)a[o-2]=arguments[o];return(i=r.call.apply(r,[this].concat(a))||this).error=t,i.label=n,Error.captureStackTrace&&Error.captureStackTrace(function(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}(i),e),i.name="BarbaError",i}return Xr(e,r),e}(No(Error)),Uh=function(){function r(t){t===void 0&&(t=[]),this.logger=new ii("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var e=r.prototype;return e.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},e.resolve=function(t,n){var i=this;n===void 0&&(n={});var s=n.once?this.once:this.page;s=s.filter(n.self?function(h){return h.name&&h.name==="self"}:function(h){return!h.name||h.name!=="self"});var a=new Map,o=s.find(function(h){var p=!0,g={};return!(!n.self||h.name!=="self")||(i.A.reverse().forEach(function(_){p&&(p=i.R(h,_,t,g),h.from&&h.to&&(p=i.R(h,_,t,g,"from")&&i.R(h,_,t,g,"to")),h.from&&!h.to&&(p=i.R(h,_,t,g,"from")),!h.from&&h.to&&(p=i.R(h,_,t,g,"to")))}),a.set(h,g),p)}),l=a.get(o),c=[];if(c.push(n.once?"once":"page"),n.self&&c.push("self"),l){var u,f=[o];Object.keys(l).length>0&&f.push(l),(u=this.logger).info.apply(u,["Transition found ["+c.join(",")+"]"].concat(f))}else this.logger.info("No transition found ["+c.join(",")+"]");return o},e.update=function(){var t=this;this.all=this.all.map(function(n){return t.T(n)}).sort(function(n,i){return n.priority-i.priority}).reverse().map(function(n){return delete n.priority,n}),this.page=this.all.filter(function(n){return n.leave!==void 0||n.enter!==void 0}),this.once=this.all.filter(function(n){return n.once!==void 0})},e.R=function(t,n,i,s,a){var o=!0,l=!1,c=t,u=n.name,f=u,h=u,p=u,g=a?c[a]:c,_=a==="to"?i.next:i.current;if(a?g&&g[u]:g[u]){switch(n.type){case"strings":default:var m=Array.isArray(g[f])?g[f]:[g[f]];_[f]&&m.indexOf(_[f])!==-1&&(l=!0),m.indexOf(_[f])===-1&&(o=!1);break;case"object":var d=Array.isArray(g[h])?g[h]:[g[h]];_[h]?(_[h].name&&d.indexOf(_[h].name)!==-1&&(l=!0),d.indexOf(_[h].name)===-1&&(o=!1)):o=!1;break;case"function":g[p](i)?l=!0:o=!1}l&&(a?(s[a]=s[a]||{},s[a][u]=c[a][u]):s[u]=c[u])}return o},e.O=function(t,n,i){var s=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(s+=Math.pow(10,i),t.from&&t.from[n]&&(s+=1),t.to&&t.to[n]&&(s+=2)),s},e.T=function(t){var n=this;t.priority=0;var i=0;return this.A.forEach(function(s,a){i+=n.O(t,s.name,a+1)}),t.priority=i,t},r}(),Ih=function(){function r(t){t===void 0&&(t=[]),this.logger=new ii("@barba/core"),this.S=!1,this.store=new Uh(t)}var e=r.prototype;return e.get=function(t,n){return this.store.resolve(t,n)},e.doOnce=function(t){var n=t.data,i=t.transition;try{var s=function(){a.S=!1},a=this,o=i||{};a.S=!0;var l=Li(function(){return Promise.resolve(a.j("beforeOnce",n,o)).then(function(){return Promise.resolve(a.once(n,o)).then(function(){return Promise.resolve(a.j("afterOnce",n,o)).then(function(){})})})},function(c){a.S=!1,a.logger.debug("Transition error [before/after/once]"),a.logger.error(c)});return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.doPage=function(t){var n=t.data,i=t.transition,s=t.page,a=t.wrapper;try{var o=function(p){if(l)return p;c.S=!1},l=!1,c=this,u=i||{},f=u.sync===!0||!1;c.S=!0;var h=Li(function(){function p(){return Promise.resolve(c.j("before",n,u)).then(function(){var _=!1;function m(M){return _?M:Promise.resolve(c.remove(n)).then(function(){return Promise.resolve(c.j("after",n,u)).then(function(){})})}var d=function(){if(f)return Li(function(){return Promise.resolve(c.add(n,a)).then(function(){return Promise.resolve(c.j("beforeLeave",n,u)).then(function(){return Promise.resolve(c.j("beforeEnter",n,u)).then(function(){return Promise.resolve(Promise.all([c.leave(n,u),c.enter(n,u)])).then(function(){return Promise.resolve(c.j("afterLeave",n,u)).then(function(){return Promise.resolve(c.j("afterEnter",n,u)).then(function(){})})})})})})},function(S){if(c.M(S))throw new Ys(S,"Transition error [sync]")});var M=function(S){return _?S:Li(function(){var A=function(){if(v!==!1)return Promise.resolve(c.add(n,a)).then(function(){return Promise.resolve(c.j("beforeEnter",n,u)).then(function(){return Promise.resolve(c.enter(n,u,v)).then(function(){return Promise.resolve(c.j("afterEnter",n,u)).then(function(){})})})})}();if(A&&A.then)return A.then(function(){})},function(A){if(c.M(A))throw new Ys(A,"Transition error [before/after/enter]")})},v=!1,E=Li(function(){return Promise.resolve(c.j("beforeLeave",n,u)).then(function(){return Promise.resolve(Promise.all([c.leave(n,u),qr(s,n)]).then(function(S){return S[0]})).then(function(S){return v=S,Promise.resolve(c.j("afterLeave",n,u)).then(function(){})})})},function(S){if(c.M(S))throw new Ys(S,"Transition error [before/after/leave]")});return E&&E.then?E.then(M):M(E)}();return d&&d.then?d.then(m):m(d)})}var g=function(){if(f)return Promise.resolve(qr(s,n)).then(function(){})}();return g&&g.then?g.then(p):p()},function(p){throw c.S=!1,p.name&&p.name==="BarbaError"?(c.logger.debug(p.label),c.logger.error(p.error),p):(c.logger.debug("Transition error [page]"),c.logger.error(p),p)});return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(p){return Promise.reject(p)}},e.once=function(t,n){try{return Promise.resolve(Bn.do("once",t,n)).then(function(){return n.once?Di(n.once,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.leave=function(t,n){try{return Promise.resolve(Bn.do("leave",t,n)).then(function(){return n.leave?Di(n.leave,n)(t):Promise.resolve()})}catch(i){return Promise.reject(i)}},e.enter=function(t,n,i){try{return Promise.resolve(Bn.do("enter",t,n)).then(function(){return n.enter?Di(n.enter,n)(t,i):Promise.resolve()})}catch(s){return Promise.reject(s)}},e.add=function(t,n){try{return si.addContainer(t.next.container,n),Bn.do("nextAdded",t),Promise.resolve()}catch(i){return Promise.reject(i)}},e.remove=function(t){try{return si.removeContainer(t.current.container),Bn.do("currentRemoved",t),Promise.resolve()}catch(n){return Promise.reject(n)}},e.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},e.j=function(t,n,i){try{return Promise.resolve(Bn.do(t,n,i)).then(function(){return i[t]?Di(i[t],i)(n):Promise.resolve()})}catch(s){return Promise.reject(s)}},ks(r,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some(function(t){return t.name==="self"})}},{key:"shouldWait",get:function(){return this.store.all.some(function(t){return t.to&&!t.to.route||t.sync})}}]),r}(),Nh=function(){function r(e){var t=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,e.length!==0&&(e.forEach(function(n){t.byNamespace.set(n.namespace,n)}),this.names.forEach(function(n){Bn[n](t.L(n))}))}return r.prototype.L=function(e){var t=this;return function(n){var i=e.match(/enter/i)?n.next:n.current,s=t.byNamespace.get(i.namespace);return s&&s[e]?Di(s[e],s)(n):Promise.resolve()}},r}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(r){var e=this;do{if(e.matches(r))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var Oh={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}},Fh=new(function(){function r(){this.version=ch,this.schemaPage=Oh,this.Logger=ii,this.logger=new ii("@barba/core"),this.plugins=[],this.hooks=Bn,this.dom=si,this.helpers=gh,this.history=ko,this.request=xh,this.url=vh}var e=r.prototype;return e.use=function(t,n){var i=this.plugins;i.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):typeof t.install=="function"?(t.install(this,n),i.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=t===void 0?{}:t,i=n.transitions,s=i===void 0?[]:i,a=n.views,o=a===void 0?[]:a,l=n.schema,c=l===void 0?un:l,u=n.requestError,f=n.timeout,h=f===void 0?2e3:f,p=n.cacheIgnore,g=p!==void 0&&p,_=n.prefetchIgnore,m=_!==void 0&&_,d=n.preventRunning,M=d!==void 0&&d,v=n.prevent,E=v===void 0?null:v,S=n.debug,A=n.logLevel;if(ii.setLevel((S!==void 0&&S)===!0?"debug":A===void 0?"off":A),this.logger.info(this.version),Object.keys(c).forEach(function(x){un[x]&&(un[x]=c[x])}),this.$=u,this.timeout=h,this.cacheIgnore=g,this.prefetchIgnore=m,this.preventRunning=M,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var w=this.data.current;if(!w.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new Sh(g),this.prevent=new Dh(m),this.transitions=new Ih(s),this.views=new Nh(o),E!==null){if(typeof E!="function")throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",E)}this.history.init(w.url.href,w.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach(function(x){return x.init()});var C=this.data;C.trigger="barba",C.next=C.current,C.current=ni({},this.schemaPage),this.hooks.do("ready",C),this.once(C),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,i){var s;if(n===void 0&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(s=n==="popstate"?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,i),i&&(i.stopPropagation(),i.preventDefault()),this.page(t,n,s)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then(function(){function i(){return Promise.resolve(n.hooks.do("afterEnter",t)).then(function(){})}var s=function(){if(n.transitions.hasOnce){var a=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:a,data:t})).then(function(){})}}();return s&&s.then?s.then(i):i()})}catch(i){return Promise.reject(i)}},e.page=function(t,n,i){try{var s=function(){var c=a.data;return Promise.resolve(a.hooks.do("page",c)).then(function(){var u=Li(function(){var f=a.transitions.get(c,{once:!1,self:i});return Promise.resolve(a.transitions.doPage({data:c,page:o,transition:f,wrapper:a._})).then(function(){a.q()})},function(){ii.getLevel()===0&&a.force(c.current.url.href)});if(u&&u.then)return u.then(function(){})})},a=this;a.data.next.url=ni({href:t},a.url.parse(t)),a.data.trigger=n;var o=a.cache.has(t)?a.cache.update(t,{action:"click"}).request:a.cache.set(t,a.request(t,a.timeout,a.onRequestError.bind(a,n)),"click").request,l=function(){if(a.transitions.shouldWait)return Promise.resolve(qr(o,a.data)).then(function(){})}();return Promise.resolve(l&&l.then?l.then(s):s())}catch(c){return Promise.reject(c)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];var a=i[0],o=i[1],l=this.cache.getAction(a);return this.cache.delete(a),!(this.$&&this.$(t,l,a,o)===!1||(l==="click"&&this.force(a),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch(function(i){n.logger.error(i)}),"prefetch")},e.F=function(){this.prefetchIgnore!==!0&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){this.prefetchIgnore!==!0&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,i=this.I(t);if(i){var s=this.dom.getHref(i);this.prevent.checkHref(s)||this.cache.has(s)||this.cache.set(s,this.request(s,this.timeout,this.onRequestError.bind(this,i)).catch(function(a){n.logger.error(a)}),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:ni({href:t},this.url.parse(t))};this.C={current:n,next:ni({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},ks(r,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),r}());/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const js="154",Bh=0,qo=1,zh=2,Yo=1,Gh=2,Sn=3,zn=0,bt=1,En=2,Gn=0,Ui=1,jo=2,$o=3,Ko=4,kh=5,Ii=100,Hh=101,Vh=102,Zo=103,Jo=104,Wh=200,Xh=201,qh=202,Yh=203,Qo=204,el=205,jh=206,$h=207,Kh=208,Zh=209,Jh=210,Qh=0,ef=1,tf=2,$s=3,nf=4,rf=5,sf=6,af=7,tl=0,of=1,lf=2,yn=0,cf=1,uf=2,hf=3,ff=4,df=5,nl=300,Ni=301,Oi=302,Ks=303,Zs=304,jr=306,Js=1e3,Qt=1001,Qs=1002,St=1003,il=1004,ea=1005,Wt=1006,pf=1007,vr=1008,kn=1009,mf=1010,_f=1011,ta=1012,rl=1013,Hn=1014,Vn=1015,xr=1016,sl=1017,al=1018,ai=1020,gf=1021,en=1023,vf=1024,xf=1025,oi=1026,Fi=1027,Mf=1028,ol=1029,Sf=1030,ll=1031,cl=1033,na=33776,ia=33777,ra=33778,sa=33779,ul=35840,hl=35841,fl=35842,dl=35843,Ef=36196,pl=37492,ml=37496,_l=37808,gl=37809,vl=37810,xl=37811,Ml=37812,Sl=37813,El=37814,yl=37815,Tl=37816,bl=37817,Al=37818,wl=37819,Rl=37820,Cl=37821,aa=36492,yf=36283,Pl=36284,Ll=36285,Dl=36286,Ul=3e3,li=3001,Tf=3200,bf=3201,Il=0,Af=1,ci="",Te="srgb",hn="srgb-linear",Nl="display-p3",oa=7680,wf=519,Rf=512,Cf=513,Pf=514,Lf=515,Df=516,Uf=517,If=518,Nf=519,Ol=35044,Fl="300 es",la=1035,Tn=2e3,$r=2001;class Bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ca=Math.PI/180,ua=180/Math.PI;function Mr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pt[r&255]+pt[r>>8&255]+pt[r>>16&255]+pt[r>>24&255]+"-"+pt[e&255]+pt[e>>8&255]+"-"+pt[e>>16&15|64]+pt[e>>24&255]+"-"+pt[t&63|128]+pt[t>>8&255]+"-"+pt[t>>16&255]+pt[t>>24&255]+pt[n&255]+pt[n>>8&255]+pt[n>>16&255]+pt[n>>24&255]).toLowerCase()}function At(r,e,t){return Math.max(e,Math.min(t,r))}function Of(r,e){return(r%e+e)%e}function ha(r,e,t){return(1-t)*r+t*e}function Bl(r){return(r&r-1)===0&&r!==0}function fa(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Kr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ut(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ce{constructor(e,t,n,i,s,a,o,l,c){Ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],g=n[8],_=i[0],m=i[3],d=i[6],M=i[1],v=i[4],E=i[7],S=i[2],A=i[5],w=i[8];return s[0]=a*_+o*M+l*S,s[3]=a*m+o*v+l*A,s[6]=a*d+o*E+l*w,s[1]=c*_+u*M+f*S,s[4]=c*m+u*v+f*A,s[7]=c*d+u*E+f*w,s[2]=h*_+p*M+g*S,s[5]=h*m+p*v+g*A,s[8]=h*d+p*E+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*f+n*h+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(da.makeScale(e,t)),this}rotate(e){return this.premultiply(da.makeRotation(-e)),this}translate(e,t){return this.premultiply(da.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Ce;function zl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Zr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}const Gl={};function Sr(r){r in Gl||(Gl[r]=!0,console.warn(r))}function zi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function pa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ff=new Ce().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Bf=new Ce().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function zf(r){return r.convertSRGBToLinear().applyMatrix3(Bf)}function Gf(r){return r.applyMatrix3(Ff).convertLinearToSRGB()}const kf={[hn]:r=>r,[Te]:r=>r.convertSRGBToLinear(),[Nl]:zf},Hf={[hn]:r=>r,[Te]:r=>r.convertLinearToSRGB(),[Nl]:Gf},tn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return hn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=kf[e],i=Hf[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Gi;class kl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=Zr("canvas")),Gi.width=e.width,Gi.height=e.height;const n=Gi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=zi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zi(t[n]/255)*255):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vf=0;class Hl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Mr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ma(i[a].image)):s.push(ma(i[a]))}else s=ma(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ma(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?kl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wf=0;class It extends Bi{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=Qt,i=Qt,s=Wt,a=vr,o=en,l=kn,c=It.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Mr(),this.name="",this.source=new Hl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===li?Te:ci),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Js:e.x=e.x-Math.floor(e.x);break;case Qt:e.x=e.x<0?0:1;break;case Qs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Js:e.y=e.y-Math.floor(e.y);break;case Qt:e.y=e.y<0?0:1;break;case Qs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?li:Ul}set encoding(e){Sr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===li?Te:ci}}It.DEFAULT_IMAGE=null,It.DEFAULT_MAPPING=nl,It.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,i=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(p+1)/2,S=(d+1)/2,A=(u+h)/4,w=(f+_)/4,C=(g+m)/4;return v>E&&v>S?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=A/n,s=w/n):E>S?E<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(E),n=A/i,s=C/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=C/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ui extends Bi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(Sr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===li?Te:ci),this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Hl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vl extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xf extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==p||u!==g){let m=1-o;const d=l*h+c*p+u*g+f*_,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const S=Math.sqrt(v),A=Math.atan2(S,d*M);m=Math.sin(m*A)/S,o=Math.sin(o*A)/S}const E=o*M;if(l=l*m+h*E,c=c*m+p*E,u=u*m+g*E,f=f*m+_*E,m===1-o){const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*p-c*h,e[t+1]=l*g+u*h+c*f-o*p,e[t+2]=c*g+u*p+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,f=l*i+s*n-a*t,h=-s*t-a*n-o*i;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _a.copy(this).projectOnVector(e),this.sub(_a)}reflect(e){return this.sub(_a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _a=new B,Wl=new Er;class yr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ki.copy(e.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)An.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(An)}else i.boundingBox===null&&i.computeBoundingBox(),ki.copy(i.boundingBox),ki.applyMatrix4(e.matrixWorld),this.union(ki)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),Jr.subVectors(this.max,Tr),Hi.subVectors(e.a,Tr),Vi.subVectors(e.b,Tr),Wi.subVectors(e.c,Tr),Wn.subVectors(Vi,Hi),Xn.subVectors(Wi,Vi),hi.subVectors(Hi,Wi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-hi.z,hi.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,hi.z,0,-hi.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-hi.y,hi.x,0];return!ga(t,Hi,Vi,Wi,Jr)||(t=[1,0,0,0,1,0,0,0,1],!ga(t,Hi,Vi,Wi,Jr))?!1:(Qr.crossVectors(Wn,Xn),t=[Qr.x,Qr.y,Qr.z],ga(t,Hi,Vi,Wi,Jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const bn=[new B,new B,new B,new B,new B,new B,new B,new B],An=new B,ki=new yr,Hi=new B,Vi=new B,Wi=new B,Wn=new B,Xn=new B,hi=new B,Tr=new B,Jr=new B,Qr=new B,fi=new B;function ga(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){fi.fromArray(r,s);const o=i.x*Math.abs(fi.x)+i.y*Math.abs(fi.y)+i.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),u=n.dot(fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qf=new yr,br=new B,va=new B;class xa{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qf.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;br.subVectors(e,this.center);const t=br.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(br,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(va.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(br.copy(e.center).add(va)),this.expandByPoint(br.copy(e.center).sub(va))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new B,Ma=new B,es=new B,qn=new B,Sa=new B,ts=new B,Ea=new B;class Yf{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wn.copy(this.origin).addScaledVector(this.direction,t),wn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ma.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(es),o=qn.dot(this.direction),l=-qn.dot(es),c=qn.lengthSq(),u=Math.abs(1-a*a);let f,h,p,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ma).addScaledVector(es,h),p}intersectSphere(e,t){wn.subVectors(e.center,this.origin);const n=wn.dot(this.direction),i=wn.dot(wn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,wn)!==null}intersectTriangle(e,t,n,i,s){Sa.subVectors(t,e),ts.subVectors(n,e),Ea.crossVectors(Sa,ts);let a=this.direction.dot(Ea),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);const l=o*this.direction.dot(ts.crossVectors(qn,ts));if(l<0)return null;const c=o*this.direction.dot(Sa.cross(qn));if(c<0||l+c>a)return null;const u=-o*qn.dot(Ea);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,s,a,o,l,c,u,f,h,p,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,p,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,p,g,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=i,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Xi.setFromMatrixColumn(e,0).length(),s=1/Xi.setFromMatrixColumn(e,1).length(),a=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jf,e,$f)}lookAt(e,t,n){const i=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),Yn.crossVectors(n,Nt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),Yn.crossVectors(n,Nt)),Yn.normalize(),ns.crossVectors(Nt,Yn),i[0]=Yn.x,i[4]=ns.x,i[8]=Nt.x,i[1]=Yn.y,i[5]=ns.y,i[9]=Nt.y,i[2]=Yn.z,i[6]=ns.z,i[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],M=n[3],v=n[7],E=n[11],S=n[15],A=i[0],w=i[4],C=i[8],x=i[12],b=i[1],z=i[5],q=i[9],L=i[13],U=i[2],I=i[6],$=i[10],G=i[14],H=i[3],K=i[7],Z=i[11],F=i[15];return s[0]=a*A+o*b+l*U+c*H,s[4]=a*w+o*z+l*I+c*K,s[8]=a*C+o*q+l*$+c*Z,s[12]=a*x+o*L+l*G+c*F,s[1]=u*A+f*b+h*U+p*H,s[5]=u*w+f*z+h*I+p*K,s[9]=u*C+f*q+h*$+p*Z,s[13]=u*x+f*L+h*G+p*F,s[2]=g*A+_*b+m*U+d*H,s[6]=g*w+_*z+m*I+d*K,s[10]=g*C+_*q+m*$+d*Z,s[14]=g*x+_*L+m*G+d*F,s[3]=M*A+v*b+E*U+S*H,s[7]=M*w+v*z+E*I+S*K,s[11]=M*C+v*q+E*$+S*Z,s[15]=M*x+v*L+E*G+S*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],d=e[15];return g*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*p-n*l*p)+_*(+t*l*p-t*c*h+s*a*h-i*a*p+i*c*u-s*l*u)+m*(+t*c*f-t*o*p-s*a*f+n*a*p+s*o*u-n*c*u)+d*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],d=e[15],M=f*m*c-_*h*c+_*l*p-o*m*p-f*l*d+o*h*d,v=g*h*c-u*m*c-g*l*p+a*m*p+u*l*d-a*h*d,E=u*_*c-g*f*c+g*o*p-a*_*p-u*o*d+a*f*d,S=g*f*l-u*_*l-g*o*h+a*_*h+u*o*m-a*f*m,A=t*M+n*v+i*E+s*S;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=M*w,e[1]=(_*h*s-f*m*s-_*i*p+n*m*p+f*i*d-n*h*d)*w,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*d+n*l*d)*w,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*p-n*l*p)*w,e[4]=v*w,e[5]=(u*m*s-g*h*s+g*i*p-t*m*p-u*i*d+t*h*d)*w,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*d-t*l*d)*w,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*p+t*l*p)*w,e[8]=E*w,e[9]=(g*f*s-u*_*s-g*n*p+t*_*p+u*n*d-t*f*d)*w,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*d+t*o*d)*w,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*p-t*o*p)*w,e[12]=S*w,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*m+t*f*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,g=s*f,_=a*u,m=a*f,d=o*f,M=l*c,v=l*u,E=l*f,S=n.x,A=n.y,w=n.z;return i[0]=(1-(_+d))*S,i[1]=(p+E)*S,i[2]=(g-v)*S,i[3]=0,i[4]=(p-E)*A,i[5]=(1-(h+d))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(g+v)*w,i[9]=(m-M)*w,i[10]=(1-(h+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Xi.set(i[0],i[1],i[2]).length();const a=Xi.set(i[4],i[5],i[6]).length(),o=Xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],nn.copy(this);const c=1/s,u=1/a,f=1/o;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=f,nn.elements[9]*=f,nn.elements[10]*=f,t.setFromRotationMatrix(nn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Tn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let p,g;if(o===Tn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===$r)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Tn){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-s),h=(t+e)*c,p=(n+i)*u;let g,_;if(o===Tn)g=(a+s)*f,_=-2*f;else if(o===$r)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xi=new B,nn=new ht,jf=new B(0,0,0),$f=new B(1,1,1),Yn=new B,ns=new B,Nt=new B,Xl=new ht,ql=new Er;class is{constructor(e=0,t=0,n=0,i=is.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(At(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class Yl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Kf=0;const jl=new B,qi=new Er,Rn=new ht,rs=new B,Ar=new B,Zf=new B,Jf=new Er,$l=new B(1,0,0),Kl=new B(0,1,0),Zl=new B(0,0,1),Qf={type:"added"},Jl={type:"removed"};class Ot extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ot.DEFAULT_UP.clone();const e=new B,t=new is,n=new Er,i=new B(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ce}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis($l,e)}rotateY(e){return this.rotateOnAxis(Kl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,t){return jl.copy(e).applyQuaternion(this.quaternion),this.position.add(jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($l,e)}translateY(e){return this.translateOnAxis(Kl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Ar,rs,this.up):Rn.lookAt(rs,Ar,this.up),this.quaternion.setFromRotationMatrix(Rn),i&&(Rn.extractRotation(i.matrixWorld),qi.setFromRotationMatrix(Rn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jl)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Jl)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,Jf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ot.DEFAULT_UP=new B(0,1,0),Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const rn=new B,Cn=new B,ya=new B,Pn=new B,Yi=new B,ji=new B,Ql=new B,Ta=new B,ba=new B,Aa=new B;let ss=!1;class sn{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),rn.subVectors(e,t),i.cross(rn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){rn.subVectors(i,t),Cn.subVectors(n,t),ya.subVectors(e,t);const a=rn.dot(rn),o=rn.dot(Cn),l=rn.dot(ya),c=Cn.dot(Cn),u=Cn.dot(ya),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,n,i,s,a,o,l){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(e,t,n,i,s,a,o,l)}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Pn),l.setScalar(0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(e,t,n,i){return rn.subVectors(n,t),Cn.subVectors(e,t),rn.cross(Cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return rn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),rn.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Yi.subVectors(i,n),ji.subVectors(s,n),Ta.subVectors(e,n);const l=Yi.dot(Ta),c=ji.dot(Ta);if(l<=0&&c<=0)return t.copy(n);ba.subVectors(e,i);const u=Yi.dot(ba),f=ji.dot(ba);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Yi,a);Aa.subVectors(e,s);const p=Yi.dot(Aa),g=ji.dot(Aa);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(ji,o);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return Ql.subVectors(s,i),o=(f-u)/(f-u+(p-g)),t.copy(i).addScaledVector(Ql,o);const d=1/(m+_+h);return a=_*d,o=h*d,t.copy(n).addScaledVector(Yi,a).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let ed=0;class wr extends Bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ed++}),this.uuid=Mr(),this.name="",this.type="Material",this.blending=Ui,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qo,this.blendDst=el,this.blendEquation=Ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},as={h:0,s:0,l:0};function wa(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class We{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Te){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tn.workingColorSpace){return this.r=e,this.g=t,this.b=n,tn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tn.workingColorSpace){if(e=Of(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=wa(a,s,e+1/3),this.g=wa(a,s,e),this.b=wa(a,s,e-1/3)}return tn.toWorkingColorSpace(this,i),this}setStyle(e,t=Te){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Te){const n=ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Te){return tn.fromWorkingColorSpace(mt.copy(this),e),Math.round(At(mt.r*255,0,255))*65536+Math.round(At(mt.g*255,0,255))*256+Math.round(At(mt.b*255,0,255))}getHexString(e=Te){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tn.workingColorSpace){tn.fromWorkingColorSpace(mt.copy(this),t);const n=mt.r,i=mt.g,s=mt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tn.workingColorSpace){return tn.fromWorkingColorSpace(mt.copy(this),t),e.r=mt.r,e.g=mt.g,e.b=mt.b,e}getStyle(e=Te){tn.fromWorkingColorSpace(mt.copy(this),e);const t=mt.r,n=mt.g,i=mt.b;return e!==Te?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(as);const n=ha(an.h,as.h,t),i=ha(an.s,as.s,t),s=ha(an.l,as.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const mt=new We;We.NAMES=ec;class tc extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new We(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tt=new B,os=new Be;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRange={offset:0,count:-1},this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix3(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyMatrix4(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.applyNormalMatrix(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tt.fromBufferAttribute(this,t),tt.transformDirection(e),this.setXYZ(t,tt.x,tt.y,tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),i=Ut(i,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class nc extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ic extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let td=0;const Xt=new ht,Ra=new Ot,$i=new B,Bt=new yr,Rr=new yr,at=new B;class Ln extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=Mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zl(e)?ic:nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ce().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(at.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(at),at.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(at)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Rr.setFromBufferAttribute(o),this.morphTargetsRelative?(at.addVectors(Bt.min,Rr.min),Bt.expandByPoint(at),at.addVectors(Bt.max,Rr.max),Bt.expandByPoint(at)):(Bt.expandByPoint(Rr.min),Bt.expandByPoint(Rr.max))}Bt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)at.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(at));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)at.fromBufferAttribute(o,c),l&&($i.fromBufferAttribute(e,c),at.add($i)),i=Math.max(i,n.distanceToSquared(at))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new B,u[b]=new B;const f=new B,h=new B,p=new B,g=new Be,_=new Be,m=new Be,d=new B,M=new B;function v(b,z,q){f.fromArray(i,b*3),h.fromArray(i,z*3),p.fromArray(i,q*3),g.fromArray(a,b*2),_.fromArray(a,z*2),m.fromArray(a,q*2),h.sub(f),p.sub(f),_.sub(g),m.sub(g);const L=1/(_.x*m.y-m.x*_.y);!isFinite(L)||(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(L),M.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(L),c[b].add(d),c[z].add(d),c[q].add(d),u[b].add(M),u[z].add(M),u[q].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let b=0,z=E.length;b<z;++b){const q=E[b],L=q.start,U=q.count;for(let I=L,$=L+U;I<$;I+=3)v(n[I+0],n[I+1],n[I+2])}const S=new B,A=new B,w=new B,C=new B;function x(b){w.fromArray(s,b*3),C.copy(w);const z=c[b];S.copy(z),S.sub(w.multiplyScalar(w.dot(z))).normalize(),A.crossVectors(C,z);const L=A.dot(u[b])<0?-1:1;l[b*4]=S.x,l[b*4+1]=S.y,l[b*4+2]=S.z,l[b*4+3]=L}for(let b=0,z=E.length;b<z;++b){const q=E[b],L=q.start,U=q.count;for(let I=L,$=L+U;I<$;I+=3)x(n[I+0]),x(n[I+1]),x(n[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,f=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)at.fromBufferAttribute(e,t),at.normalize(),e.setXYZ(t,at.x,at.y,at.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ln,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rc=new ht,di=new Yf,ls=new xa,sc=new B,Ki=new B,Zi=new B,Ji=new B,Ca=new B,cs=new B,us=new Be,hs=new Be,fs=new Be,ac=new B,oc=new B,lc=new B,ds=new B,ps=new B;class on extends Ot{constructor(e=new Ln,t=new tc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){cs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ca.fromBufferAttribute(f,e),a?cs.addScaledVector(Ca,u):cs.addScaledVector(Ca.sub(t),u))}t.add(cs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(ls.containsPoint(di.origin)===!1&&(di.intersectSphere(ls,sc)===null||di.origin.distanceToSquared(sc)>(e.far-e.near)**2))&&(rc.copy(s).invert(),di.copy(e.ray).applyMatrix4(rc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,S=v;E<S;E+=3){const A=o.getX(E),w=o.getX(E+1),C=o.getX(E+2);i=ms(this,d,e,n,c,u,f,A,w,C),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=o.getX(m),v=o.getX(m+1),E=o.getX(m+2);i=ms(this,a,e,n,c,u,f,M,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],d=a[m.materialIndex],M=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=M,S=v;E<S;E+=3){const A=E,w=E+1,C=E+2;i=ms(this,d,e,n,c,u,f,A,w,C),i&&(i.faceIndex=Math.floor(E/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const M=m,v=m+1,E=m+2;i=ms(this,a,e,n,c,u,f,M,v,E),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function nd(r,e,t,n,i,s,a,o){let l;if(e.side===bt?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===zn,o),l===null)return null;ps.copy(o),ps.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:r}}function ms(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ki),r.getVertexPosition(l,Zi),r.getVertexPosition(c,Ji);const u=nd(r,e,t,n,Ki,Zi,Ji,ds);if(u){i&&(us.fromBufferAttribute(i,o),hs.fromBufferAttribute(i,l),fs.fromBufferAttribute(i,c),u.uv=sn.getInterpolation(ds,Ki,Zi,Ji,us,hs,fs,new Be)),s&&(us.fromBufferAttribute(s,o),hs.fromBufferAttribute(s,l),fs.fromBufferAttribute(s,c),u.uv1=sn.getInterpolation(ds,Ki,Zi,Ji,us,hs,fs,new Be),u.uv2=u.uv1),a&&(ac.fromBufferAttribute(a,o),oc.fromBufferAttribute(a,l),lc.fromBufferAttribute(a,c),u.normal=sn.getInterpolation(ds,Ki,Zi,Ji,ac,oc,lc,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};sn.getNormal(Ki,Zi,Ji,f.normal),u.face=f}return u}class Qi extends Ln{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function g(_,m,d,M,v,E,S,A,w,C,x){const b=E/w,z=S/C,q=E/2,L=S/2,U=A/2,I=w+1,$=C+1;let G=0,H=0;const K=new B;for(let Z=0;Z<$;Z++){const F=Z*z-L;for(let Y=0;Y<I;Y++){const re=Y*b-q;K[_]=re*M,K[m]=F*v,K[d]=U,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[d]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(Y/w),f.push(1-Z/C),G+=1}}for(let Z=0;Z<C;Z++)for(let F=0;F<w;F++){const Y=h+F+I*Z,re=h+F+I*(Z+1),te=h+(F+1)+I*(Z+1),ie=h+(F+1)+I*Z;l.push(Y,re,ie),l.push(re,te,ie),H+=6}o.addGroup(p,H,x),p+=H,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const n=er(r[t]);for(const i in n)e[i]=n[i]}return e}function id(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cc(r){return r.getRenderTarget()===null?r.outputColorSpace:hn}const rd={clone:er,merge:Et};var sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sd,this.fragmentShader=ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=id(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uc extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Tn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qt extends uc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ca*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const tr=-90,nr=1;class od extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const i=new qt(tr,nr,e,t);i.layers=this.layers,this.add(i);const s=new qt(tr,nr,e,t);s.layers=this.layers,this.add(s);const a=new qt(tr,nr,e,t);a.layers=this.layers,this.add(a);const o=new qt(tr,nr,e,t);o.layers=this.layers,this.add(o);const l=new qt(tr,nr,e,t);l.layers=this.layers,this.add(l);const c=new qt(tr,nr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===$r)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=yn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class hc extends It{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ni,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ld extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Sr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===li?Te:ci),this.texture=new hc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Qi(5,5,5),s=new pi({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:bt,blending:Gn});s.uniforms.tEquirect.value=t;const a=new on(i,s),o=t.minFilter;return t.minFilter===vr&&(t.minFilter=Wt),new od(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const Pa=new B,cd=new B,ud=new Ce;class mi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Pa.subVectors(n,t).cross(cd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),i=this.coplanarPoint(Pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _i=new xa,_s=new B;class fc{constructor(e=new mi,t=new mi,n=new mi,i=new mi,s=new mi,a=new mi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tn){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],p=i[8],g=i[9],_=i[10],m=i[11],d=i[12],M=i[13],v=i[14],E=i[15];if(n[0].setComponents(l-s,h-c,m-p,E-d).normalize(),n[1].setComponents(l+s,h+c,m+p,E+d).normalize(),n[2].setComponents(l+a,h+u,m+g,E+M).normalize(),n[3].setComponents(l-a,h-u,m-g,E-M).normalize(),n[4].setComponents(l-o,h-f,m-_,E-v).normalize(),t===Tn)n[5].setComponents(l+o,h+f,m+_,E+v).normalize();else if(t===$r)n[5].setComponents(o,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_i.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_i.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_i)}intersectsSprite(e){return _i.center.set(0,0,0),_i.radius=.7071067811865476,_i.applyMatrix4(e.matrixWorld),this.intersectsSphere(_i)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_s.x=i.normal.x>0?e.max.x:e.min.x,_s.y=i.normal.y>0?e.max.y:e.min.y,_s.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dc(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function hd(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=r.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=r.SHORT;else if(f instanceof Uint32Array)g=r.UNSIGNED_INT;else if(f instanceof Int32Array)g=r.INT;else if(f instanceof Int8Array)g=r.BYTE;else if(f instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;r.bindBuffer(f,c),p.count===-1?r.bufferSubData(f,0,h):(t?r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):r.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class La extends Ln{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,p=[],g=[],_=[],m=[];for(let d=0;d<u;d++){const M=d*h-a;for(let v=0;v<c;v++){const E=v*f-s;g.push(E,-M,0),_.push(0,0,1),m.push(v/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const v=M+c*d,E=M+c*(d+1),S=M+1+c*(d+1),A=M+1+c*d;p.push(v,E,A),p.push(E,S,A)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.width,e.height,e.widthSegments,e.heightSegments)}}var fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,md=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,gd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Md=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ud=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Od=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",kd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,np=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ip=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,rp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ap=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,up=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_p=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,gp=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ep=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,bp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Np=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const be={alphahash_fragment:fd,alphahash_pars_fragment:dd,alphamap_fragment:pd,alphamap_pars_fragment:md,alphatest_fragment:_d,alphatest_pars_fragment:gd,aomap_fragment:vd,aomap_pars_fragment:xd,begin_vertex:Md,beginnormal_vertex:Sd,bsdfs:Ed,iridescence_fragment:yd,bumpmap_pars_fragment:Td,clipping_planes_fragment:bd,clipping_planes_pars_fragment:Ad,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Rd,color_fragment:Cd,color_pars_fragment:Pd,color_pars_vertex:Ld,color_vertex:Dd,common:Ud,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Nd,displacementmap_pars_vertex:Od,displacementmap_vertex:Fd,emissivemap_fragment:Bd,emissivemap_pars_fragment:zd,colorspace_fragment:Gd,colorspace_pars_fragment:kd,envmap_fragment:Hd,envmap_common_pars_fragment:Vd,envmap_pars_fragment:Wd,envmap_pars_vertex:Xd,envmap_physical_pars_fragment:ip,envmap_vertex:qd,fog_vertex:Yd,fog_pars_vertex:jd,fog_fragment:$d,fog_pars_fragment:Kd,gradientmap_pars_fragment:Zd,lightmap_fragment:Jd,lightmap_pars_fragment:Qd,lights_lambert_fragment:ep,lights_lambert_pars_fragment:tp,lights_pars_begin:np,lights_toon_fragment:rp,lights_toon_pars_fragment:sp,lights_phong_fragment:ap,lights_phong_pars_fragment:op,lights_physical_fragment:lp,lights_physical_pars_fragment:cp,lights_fragment_begin:up,lights_fragment_maps:hp,lights_fragment_end:fp,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:mp,logdepthbuf_vertex:_p,map_fragment:gp,map_pars_fragment:vp,map_particle_fragment:xp,map_particle_pars_fragment:Mp,metalnessmap_fragment:Sp,metalnessmap_pars_fragment:Ep,morphcolor_vertex:yp,morphnormal_vertex:Tp,morphtarget_pars_vertex:bp,morphtarget_vertex:Ap,normal_fragment_begin:wp,normal_fragment_maps:Rp,normal_pars_fragment:Cp,normal_pars_vertex:Pp,normal_vertex:Lp,normalmap_pars_fragment:Dp,clearcoat_normal_fragment_begin:Up,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Np,iridescence_pars_fragment:Op,opaque_fragment:Fp,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:Gp,dithering_fragment:kp,dithering_pars_fragment:Hp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Yp,shadowmask_pars_fragment:jp,skinbase_vertex:$p,skinning_pars_vertex:Kp,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:em,tonemapping_fragment:tm,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:rm,uv_pars_fragment:sm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},ne={common:{diffuse:{value:new We(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ce},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new We(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new We(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0},uvTransform:{value:new Ce}},sprite:{diffuse:{value:new We(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ce},alphaMap:{value:null},alphaMapTransform:{value:new Ce},alphaTest:{value:0}}},dn={basic:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new We(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:Et([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new We(0)},specular:{value:new We(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:Et([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new We(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:Et([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new We(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:Et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:Et([ne.points,ne.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:Et([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:Et([ne.common,ne.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:Et([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:Et([ne.sprite,ne.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:Et([ne.common,ne.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:Et([ne.lights,ne.fog,{color:{value:new We(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};dn.physical={uniforms:Et([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ce},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ce},sheen:{value:0},sheenColor:{value:new We(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ce},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ce},attenuationDistance:{value:0},attenuationColor:{value:new We(0)},specularColor:{value:new We(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ce},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ce}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const gs={r:0,b:0,g:0};function cm(r,e,t,n,i,s,a){const o=new We(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(m,d){let M=!1,v=d.isScene===!0?d.background:null;switch(v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),M=!0),r.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),M=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),M=!0;break}(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===jr)?(u===void 0&&(u=new on(new Qi(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:er(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=v.colorSpace!==Te,(f!==v||h!==v.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new on(new La(2,2),new pi({name:"BackgroundMaterial",uniforms:er(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=v.colorSpace!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(gs,cc(r)),n.buffers.color.setClear(gs.r,gs.g,gs.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function um(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(U,I,$,G,H){let K=!1;if(a){const Z=_(G,$,I);c!==Z&&(c=Z,p(c.object)),K=d(U,G,$,H),K&&M(U,G,$,H)}else{const Z=I.wireframe===!0;(c.geometry!==G.id||c.program!==$.id||c.wireframe!==Z)&&(c.geometry=G.id,c.program=$.id,c.wireframe=Z,K=!0)}H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,C(U,I,$,G),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,I,$){const G=$.wireframe===!0;let H=o[U.id];H===void 0&&(H={},o[U.id]=H);let K=H[I.id];K===void 0&&(K={},H[I.id]=K);let Z=K[G];return Z===void 0&&(Z=m(h()),K[G]=Z),Z}function m(U){const I=[],$=[],G=[];for(let H=0;H<i;H++)I[H]=0,$[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:$,attributeDivisors:G,object:U,attributes:{},index:null}}function d(U,I,$,G){const H=c.attributes,K=I.attributes;let Z=0;const F=$.getAttributes();for(const Y in F)if(F[Y].location>=0){const te=H[Y];let ie=K[Y];if(ie===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(ie=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(ie=U.instanceColor)),te===void 0||te.attribute!==ie||ie&&te.data!==ie.data)return!0;Z++}return c.attributesNum!==Z||c.index!==G}function M(U,I,$,G){const H={},K=I.attributes;let Z=0;const F=$.getAttributes();for(const Y in F)if(F[Y].location>=0){let te=K[Y];te===void 0&&(Y==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),Y==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));const ie={};ie.attribute=te,te&&te.data&&(ie.data=te.data),H[Y]=ie,Z++}c.attributes=H,c.attributesNum=Z,c.index=G}function v(){const U=c.newAttributes;for(let I=0,$=U.length;I<$;I++)U[I]=0}function E(U){S(U,0)}function S(U,I){const $=c.newAttributes,G=c.enabledAttributes,H=c.attributeDivisors;$[U]=1,G[U]===0&&(r.enableVertexAttribArray(U),G[U]=1),H[U]!==I&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,I),H[U]=I)}function A(){const U=c.newAttributes,I=c.enabledAttributes;for(let $=0,G=I.length;$<G;$++)I[$]!==U[$]&&(r.disableVertexAttribArray($),I[$]=0)}function w(U,I,$,G,H,K,Z){Z===!0?r.vertexAttribIPointer(U,I,$,H,K):r.vertexAttribPointer(U,I,$,G,H,K)}function C(U,I,$,G){if(n.isWebGL2===!1&&(U.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const H=G.attributes,K=$.getAttributes(),Z=I.defaultAttributeValues;for(const F in K){const Y=K[F];if(Y.location>=0){let re=H[F];if(re===void 0&&(F==="instanceMatrix"&&U.instanceMatrix&&(re=U.instanceMatrix),F==="instanceColor"&&U.instanceColor&&(re=U.instanceColor)),re!==void 0){const te=re.normalized,ie=re.itemSize,_e=t.get(re);if(_e===void 0)continue;const Ae=_e.buffer,ve=_e.type,ze=_e.bytesPerElement,Dt=n.isWebGL2===!0&&(ve===r.INT||ve===r.UNSIGNED_INT||re.gpuType===rl);if(re.isInterleavedBufferAttribute){const Ue=re.data,N=Ue.stride,xt=re.offset;if(Ue.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)S(Y.location+xe,Ue.meshPerAttribute);U.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let xe=0;xe<Y.locationSize;xe++)E(Y.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let xe=0;xe<Y.locationSize;xe++)w(Y.location+xe,ie/Y.locationSize,ve,te,N*ze,(xt+ie/Y.locationSize*xe)*ze,Dt)}else{if(re.isInstancedBufferAttribute){for(let Ue=0;Ue<Y.locationSize;Ue++)S(Y.location+Ue,re.meshPerAttribute);U.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ue=0;Ue<Y.locationSize;Ue++)E(Y.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ue=0;Ue<Y.locationSize;Ue++)w(Y.location+Ue,ie/Y.locationSize,ve,te,ie*ze,ie/Y.locationSize*Ue*ze,Dt)}}else if(Z!==void 0){const te=Z[F];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(Y.location,te);break;case 3:r.vertexAttrib3fv(Y.location,te);break;case 4:r.vertexAttrib4fv(Y.location,te);break;default:r.vertexAttrib1fv(Y.location,te)}}}}A()}function x(){q();for(const U in o){const I=o[U];for(const $ in I){const G=I[$];for(const H in G)g(G[H].object),delete G[H];delete I[$]}delete o[U]}}function b(U){if(o[U.id]===void 0)return;const I=o[U.id];for(const $ in I){const G=I[$];for(const H in G)g(G[H].object),delete G[H];delete I[$]}delete o[U.id]}function z(U){for(const I in o){const $=o[I];if($[U.id]===void 0)continue;const G=$[U.id];for(const H in G)g(G[H].object),delete G[H];delete $[U.id]}}function q(){L(),u=!0,c!==l&&(c=l,p(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:q,resetDefaultState:L,dispose:x,releaseStatesOfGeometry:b,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:E,disableUnusedAttributes:A}}function hm(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,p;if(i)h=r,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function fm(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext!="undefined"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),h=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),d=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,E=a||e.has("OES_texture_float"),S=v&&E,A=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:A}}function dm(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new mi,o=new Ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:n,v=M*4;let E=d.clippingState||null;l.value=E,E=u(g,h,v,p);for(let S=0;S!==v;++S)E[S]=t[S];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,p,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,E=p;v!==_;++v,E+=4)a.copy(f[v]).applyMatrix4(M,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function pm(r){let e=new WeakMap;function t(a,o){return o===Ks?a.mapping=Ni:o===Zs&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Ks||o===Zs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ld(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mm extends uc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ir=4,pc=[.125,.215,.35,.446,.526,.582],gi=20,Da=new mm,mc=new We;let Ua=null;const vi=(1+Math.sqrt(5))/2,rr=1/vi,_c=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,vi,rr),new B(0,vi,-rr),new B(rr,0,vi),new B(-rr,0,vi),new B(vi,rr,0),new B(-vi,rr,0)];class gc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ua=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ua),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ni||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ua=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wt,minFilter:Wt,generateMipmaps:!1,type:xr,format:en,colorSpace:hn,depthBuffer:!1},i=vc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_m(s)),this._blurMaterial=gm(s,e,t)}return i}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,Da)}_sceneToCubeUV(e,t,n,i){const o=new qt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(mc),u.toneMapping=yn,u.autoClear=!1;const p=new tc({name:"PMREM.Background",side:bt,depthWrite:!1,depthTest:!1}),g=new on(new Qi,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(mc),_=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const v=this._cubeSize;vs(i,M*v,d>2?v:0,v,v),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ni||e.mapping===Oi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xc());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new on(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Da)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=_c[(i-1)%_c.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new on(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let M=0;for(let w=0;w<gi;++w){const C=w/_,x=Math.exp(-C*C/2);d.push(x),w===0?M+=x:w<m&&(M+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const E=this._sizeLods[i],S=3*E*(i>v-ir?i-v+ir:0),A=4*(this._cubeSize-E);vs(t,S,A,3*E,2*E),l.setRenderTarget(t),l.render(f,Da)}}function _m(r){const e=[],t=[],n=[];let i=r;const s=r-ir+1+pc.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ir?l=pc[a-r+ir-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,_=3,m=2,d=1,M=new Float32Array(_*g*p),v=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,C=A>2?0:-1,x=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(x,_*g*A),v.set(h,m*g*A);const b=[A,A,A,A,A,A];E.set(b,d*g*A)}const S=new Ln;S.setAttribute("position",new fn(M,_)),S.setAttribute("uv",new fn(v,m)),S.setAttribute("faceIndex",new fn(E,d)),e.push(S),i>ir&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vc(r,e,t){const n=new ui(r,e,t);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function gm(r,e,t){const n=new Float32Array(gi),i=new B(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function xc(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Mc(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Ia(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vm(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ks||l===Zs,u=l===Ni||l===Oi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new gc(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){t===null&&(t=new gc(r));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xm(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Mm(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",a),delete i[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let _=0;if(p!==null){const M=p.array;_=p.version;for(let v=0,E=M.length;v<E;v+=3){const S=M[v+0],A=M[v+1],w=M[v+2];h.push(S,A,A,w,w,S)}}else{const M=g.array;_=g.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const S=v+0,A=v+1,w=v+2;h.push(S,A,A,w,w,S)}}const m=new(zl(h)?ic:nc)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Sm(r,e,t,n){const i=n.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,p){r.drawElements(s,p,o,h*l),t.update(p,s,1)}function f(h,p,g){if(g===0)return;let _,m;if(i)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,p,o,h*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function Em(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ym(r,e){return r[0]-e[0]}function Tm(r,e){return Math.abs(e[1])-Math.abs(r[1])}function bm(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let U=function(){q.dispose(),s.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const M=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),v===!0&&(C=2),E===!0&&(C=3);let x=u.attributes.position.count*C,b=1;x>e.maxTextureSize&&(b=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const z=new Float32Array(x*b*4*g),q=new Vl(z,x,b,g);q.type=Vn,q.needsUpdate=!0;const L=C*4;for(let I=0;I<g;I++){const $=S[I],G=A[I],H=w[I],K=x*b*4*I;for(let Z=0;Z<$.count;Z++){const F=Z*L;M===!0&&(a.fromBufferAttribute($,Z),z[K+F+0]=a.x,z[K+F+1]=a.y,z[K+F+2]=a.z,z[K+F+3]=0),v===!0&&(a.fromBufferAttribute(G,Z),z[K+F+4]=a.x,z[K+F+5]=a.y,z[K+F+6]=a.z,z[K+F+7]=0),E===!0&&(a.fromBufferAttribute(H,Z),z[K+F+8]=a.x,z[K+F+9]=a.y,z[K+F+10]=a.z,z[K+F+11]=H.itemSize===4?a.w:1)}}_={count:g,texture:q,size:new Be(x,b)},s.set(u,_),u.addEventListener("dispose",U)}let m=0;for(let M=0;M<h.length;M++)m+=h[M];const d=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(r,"morphTargetBaseInfluence",d),f.getUniforms().setValue(r,"morphTargetInfluences",h),f.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}else{const p=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==p){g=[];for(let v=0;v<p;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<p;v++){const E=g[v];E[0]=v,E[1]=h[v]}g.sort(Tm);for(let v=0;v<8;v++)v<p&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(ym);const _=u.morphAttributes.position,m=u.morphAttributes.normal;let d=0;for(let v=0;v<8;v++){const E=o[v],S=E[0],A=E[1];S!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+v)!==_[S]&&u.setAttribute("morphTarget"+v,_[S]),m&&u.getAttribute("morphNormal"+v)!==m[S]&&u.setAttribute("morphNormal"+v,m[S]),i[v]=A,d+=A):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const M=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(r,"morphTargetBaseInfluence",M),f.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Am(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Sc=new It,Ec=new Vl,yc=new Xf,Tc=new hc,bc=[],Ac=[],wc=new Float32Array(16),Rc=new Float32Array(9),Cc=new Float32Array(4);function sr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=bc[i];if(s===void 0&&(s=new Float32Array(i),bc[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function rt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function st(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function xs(r,e){let t=Ac[e];t===void 0&&(t=new Int32Array(e),Ac[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2fv(this.addr,e),st(t,e)}}function Cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rt(t,e))return;r.uniform3fv(this.addr,e),st(t,e)}}function Pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4fv(this.addr,e),st(t,e)}}function Lm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Cc.set(n),r.uniformMatrix2fv(this.addr,!1,Cc),st(t,n)}}function Dm(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;Rc.set(n),r.uniformMatrix3fv(this.addr,!1,Rc),st(t,n)}}function Um(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(rt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),st(t,e)}else{if(rt(t,n))return;wc.set(n),r.uniformMatrix4fv(this.addr,!1,wc),st(t,n)}}function Im(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2iv(this.addr,e),st(t,e)}}function Om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;r.uniform3iv(this.addr,e),st(t,e)}}function Fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4iv(this.addr,e),st(t,e)}}function Bm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rt(t,e))return;r.uniform2uiv(this.addr,e),st(t,e)}}function Gm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rt(t,e))return;r.uniform3uiv(this.addr,e),st(t,e)}}function km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rt(t,e))return;r.uniform4uiv(this.addr,e),st(t,e)}}function Hm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Sc,i)}function Vm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||yc,i)}function Wm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Tc,i)}function Xm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ec,i)}function qm(r){switch(r){case 5126:return wm;case 35664:return Rm;case 35665:return Cm;case 35666:return Pm;case 35674:return Lm;case 35675:return Dm;case 35676:return Um;case 5124:case 35670:return Im;case 35667:case 35671:return Nm;case 35668:case 35672:return Om;case 35669:case 35673:return Fm;case 5125:return Bm;case 36294:return zm;case 36295:return Gm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Hm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Wm;case 36289:case 36303:case 36311:case 36292:return Xm}}function Ym(r,e){r.uniform1fv(this.addr,e)}function jm(r,e){const t=sr(e,this.size,2);r.uniform2fv(this.addr,t)}function $m(r,e){const t=sr(e,this.size,3);r.uniform3fv(this.addr,t)}function Km(r,e){const t=sr(e,this.size,4);r.uniform4fv(this.addr,t)}function Zm(r,e){const t=sr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Jm(r,e){const t=sr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Qm(r,e){const t=sr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function e_(r,e){r.uniform1iv(this.addr,e)}function t_(r,e){r.uniform2iv(this.addr,e)}function n_(r,e){r.uniform3iv(this.addr,e)}function i_(r,e){r.uniform4iv(this.addr,e)}function r_(r,e){r.uniform1uiv(this.addr,e)}function s_(r,e){r.uniform2uiv(this.addr,e)}function a_(r,e){r.uniform3uiv(this.addr,e)}function o_(r,e){r.uniform4uiv(this.addr,e)}function l_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Sc,s[a])}function c_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||yc,s[a])}function u_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Tc,s[a])}function h_(r,e,t){const n=this.cache,i=e.length,s=xs(t,i);rt(n,s)||(r.uniform1iv(this.addr,s),st(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Ec,s[a])}function f_(r){switch(r){case 5126:return Ym;case 35664:return jm;case 35665:return $m;case 35666:return Km;case 35674:return Zm;case 35675:return Jm;case 35676:return Qm;case 5124:case 35670:return e_;case 35667:case 35671:return t_;case 35668:case 35672:return n_;case 35669:case 35673:return i_;case 5125:return r_;case 36294:return s_;case 36295:return a_;case 36296:return o_;case 35678:case 36198:case 36298:case 36306:case 35682:return l_;case 35679:case 36299:case 36307:return c_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return h_}}class d_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=qm(t.type)}}class p_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=f_(t.type)}}class m_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Pc(r,e){r.seq.push(e),r.map[e.id]=e}function __(r,e,t){const n=r.name,i=n.length;for(Na.lastIndex=0;;){const s=Na.exec(n),a=Na.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Pc(t,c===void 0?new d_(o,r,e):new p_(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new m_(o),Pc(t,f)),t=f}}}class Ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);__(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Lc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let g_=0;function v_(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function x_(r){switch(r){case hn:return["Linear","( value )"];case Te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),["Linear","( value )"]}}function Dc(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+v_(r.getShaderSource(e),a)}else return i}function M_(r,e){const t=x_(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function S_(r,e){let t;switch(e){case cf:t="Linear";break;case uf:t="Reinhard";break;case hf:t="OptimizedCineon";break;case ff:t="ACESFilmic";break;case df:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function E_(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Cr).join(`
`)}function y_(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function T_(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Cr(r){return r!==""}function Uc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ic(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const b_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oa(r){return r.replace(b_,w_)}const A_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function w_(r,e){let t=be[e];if(t===void 0){const n=A_.get(e);if(n!==void 0)t=be[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Oa(t)}const R_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nc(r){return r.replace(R_,C_)}function C_(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Oc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function P_(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yo?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Gh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Sn&&(e="SHADOWMAP_TYPE_VSM"),e}function L_(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ni:case Oi:e="ENVMAP_TYPE_CUBE";break;case jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D_(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function U_(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case of:e="ENVMAP_BLENDING_MIX";break;case lf:e="ENVMAP_BLENDING_ADD";break}return e}function I_(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function N_(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=P_(t),c=L_(t),u=D_(t),f=U_(t),h=I_(t),p=t.isWebGL2?"":E_(t),g=y_(s),_=i.createProgram();let m,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Cr).join(`
`),d.length>0&&(d+=`
`)):(m=[Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cr).join(`
`),d=[p,Oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?be.tonemapping_pars_fragment:"",t.toneMapping!==yn?S_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,M_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cr).join(`
`)),a=Oa(a),a=Uc(a,t),a=Ic(a,t),o=Oa(o),o=Uc(o,t),o=Ic(o,t),a=Nc(a),o=Nc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=M+m+a,E=M+d+o,S=Lc(i,i.VERTEX_SHADER,v),A=Lc(i,i.FRAGMENT_SHADER,E);if(i.attachShader(_,S),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),r.debug.checkShaderErrors){const x=i.getProgramInfoLog(_).trim(),b=i.getShaderInfoLog(S).trim(),z=i.getShaderInfoLog(A).trim();let q=!0,L=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,S,A);else{const U=Dc(i,S,"vertex"),I=Dc(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+U+`
`+I)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(b===""||z==="")&&(L=!1);L&&(this.diagnostics={runnable:q,programLog:x,vertexShader:{log:b,prefix:m},fragmentShader:{log:z,prefix:d}})}i.deleteShader(S),i.deleteShader(A);let w;this.getUniforms=function(){return w===void 0&&(w=new Ms(i,_)),w};let C;return this.getAttributes=function(){return C===void 0&&(C=T_(i,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}let O_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new B_(e),t.set(e,n)),n}}class B_{constructor(e){this.id=O_++,this.code=e,this.usedTimes=0}}function z_(r,e,t,n,i,s,a){const o=new Yl,l=new F_,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return x===0?"uv":`uv${x}`}function m(x,b,z,q,L){const U=q.fog,I=L.geometry,$=x.isMeshStandardMaterial?q.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),H=!!G&&G.mapping===jr?G.image.height:null,K=g[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,F=Z!==void 0?Z.length:0;let Y=0;I.morphAttributes.position!==void 0&&(Y=1),I.morphAttributes.normal!==void 0&&(Y=2),I.morphAttributes.color!==void 0&&(Y=3);let re,te,ie,_e;if(K){const vn=dn[K];re=vn.vertexShader,te=vn.fragmentShader}else re=x.vertexShader,te=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),_e=l.getFragmentShaderID(x);const Ae=r.getRenderTarget(),ve=L.isInstancedMesh===!0,ze=!!x.map,Dt=!!x.matcap,Ue=!!G,N=!!x.aoMap,xt=!!x.lightMap,xe=!!x.bumpMap,we=!!x.normalMap,Ee=!!x.displacementMap,Ye=!!x.emissiveMap,Ne=!!x.metalnessMap,Pe=!!x.roughnessMap,He=x.anisotropy>0,dt=x.clearcoat>0,Mt=x.iridescence>0,R=x.sheen>0,y=x.transmission>0,W=He&&!!x.anisotropyMap,J=dt&&!!x.clearcoatMap,Q=dt&&!!x.clearcoatNormalMap,ae=dt&&!!x.clearcoatRoughnessMap,fe=Mt&&!!x.iridescenceMap,oe=Mt&&!!x.iridescenceThicknessMap,j=R&&!!x.sheenColorMap,de=R&&!!x.sheenRoughnessMap,pe=!!x.specularMap,ge=!!x.specularColorMap,ue=!!x.specularIntensityMap,he=y&&!!x.transmissionMap,Le=y&&!!x.thicknessMap,Ve=!!x.gradientMap,P=!!x.alphaMap,se=x.alphaTest>0,k=!!x.alphaHash,ee=!!x.extensions,le=!!I.attributes.uv1,Fe=!!I.attributes.uv2,je=!!I.attributes.uv3;return{isWebGL2:u,shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:re,fragmentShader:te,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:ve,instancingColor:ve&&L.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:hn,map:ze,matcap:Dt,envMap:Ue,envMapMode:Ue&&G.mapping,envMapCubeUVHeight:H,aoMap:N,lightMap:xt,bumpMap:xe,normalMap:we,displacementMap:h&&Ee,emissiveMap:Ye,normalMapObjectSpace:we&&x.normalMapType===Af,normalMapTangentSpace:we&&x.normalMapType===Il,metalnessMap:Ne,roughnessMap:Pe,anisotropy:He,anisotropyMap:W,clearcoat:dt,clearcoatMap:J,clearcoatNormalMap:Q,clearcoatRoughnessMap:ae,iridescence:Mt,iridescenceMap:fe,iridescenceThicknessMap:oe,sheen:R,sheenColorMap:j,sheenRoughnessMap:de,specularMap:pe,specularColorMap:ge,specularIntensityMap:ue,transmission:y,transmissionMap:he,thicknessMap:Le,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Ui,alphaMap:P,alphaTest:se,alphaHash:k,combine:x.combine,mapUv:ze&&_(x.map.channel),aoMapUv:N&&_(x.aoMap.channel),lightMapUv:xt&&_(x.lightMap.channel),bumpMapUv:xe&&_(x.bumpMap.channel),normalMapUv:we&&_(x.normalMap.channel),displacementMapUv:Ee&&_(x.displacementMap.channel),emissiveMapUv:Ye&&_(x.emissiveMap.channel),metalnessMapUv:Ne&&_(x.metalnessMap.channel),roughnessMapUv:Pe&&_(x.roughnessMap.channel),anisotropyMapUv:W&&_(x.anisotropyMap.channel),clearcoatMapUv:J&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:j&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&_(x.sheenRoughnessMap.channel),specularMapUv:pe&&_(x.specularMap.channel),specularColorMapUv:ge&&_(x.specularColorMap.channel),specularIntensityMapUv:ue&&_(x.specularIntensityMap.channel),transmissionMapUv:he&&_(x.transmissionMap.channel),thicknessMapUv:Le&&_(x.thicknessMap.channel),alphaMapUv:P&&_(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(we||He),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:le,vertexUv2s:Fe,vertexUv3s:je,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(ze||P),fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:Y,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:x.toneMapped?r.toneMapping:yn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===En,flipSided:x.side===bt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ee&&x.extensions.derivatives===!0,extensionFragDepth:ee&&x.extensions.fragDepth===!0,extensionDrawBuffers:ee&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ee&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)b.push(z),b.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(M(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),x.push(o.mask)}function E(x){const b=g[x.type];let z;if(b){const q=dn[b];z=rd.clone(q.uniforms)}else z=x.uniforms;return z}function S(x,b){let z;for(let q=0,L=c.length;q<L;q++){const U=c[q];if(U.cacheKey===b){z=U,++z.usedTimes;break}}return z===void 0&&(z=new N_(r,b,x,s),c.push(z)),z}function A(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),x.destroy()}}function w(x){l.remove(x)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:C}}function G_(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function k_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Fc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Bc(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,p,g,_,m){let d=r[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function o(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(f,h,p,g,_,m){const d=a(f,h,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||k_),n.length>1&&n.sort(h||Fc),i.length>1&&i.sort(h||Fc)}function u(){for(let f=e,h=r.length;f<h;f++){const p=r[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function H_(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Bc,r.set(n,[a])):i>=s.length?(a=new Bc,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function V_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new We};break;case"SpotLight":t={position:new B,direction:new B,color:new We,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new We,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new We,groundColor:new We};break;case"RectAreaLight":t={color:new We,position:new B,halfWidth:new B,halfHeight:new B};break}return r[e.id]=t,t}}}function W_(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let X_=0;function q_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Y_(r,e){const t=new V_,n=W_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new B);const s=new B,a=new ht,o=new ht;function l(u,f){let h=0,p=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let _=0,m=0,d=0,M=0,v=0,E=0,S=0,A=0,w=0,C=0;u.sort(q_);const x=f===!0?Math.PI:1;for(let z=0,q=u.length;z<q;z++){const L=u[z],U=L.color,I=L.intensity,$=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*I*x,p+=U.g*I*x,g+=U.b*I*x;else if(L.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],I);else if(L.isDirectionalLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.directionalShadow[_]=Z,i.directionalShadowMap[_]=G,i.directionalShadowMatrix[_]=L.shadow.matrix,E++}i.directional[_]=H,_++}else if(L.isSpotLight){const H=t.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(U).multiplyScalar(I*x),H.distance=$,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[d]=H;const K=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,K.updateMatrices(L),L.castShadow&&C++),i.spotLightMatrix[d]=K.matrix,L.castShadow){const Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,i.spotShadow[d]=Z,i.spotShadowMap[d]=G,A++}d++}else if(L.isRectAreaLight){const H=t.get(L);H.color.copy(U).multiplyScalar(I),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[M]=H,M++}else if(L.isPointLight){const H=t.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity*x),H.distance=L.distance,H.decay=L.decay,L.castShadow){const K=L.shadow,Z=n.get(L);Z.shadowBias=K.bias,Z.shadowNormalBias=K.normalBias,Z.shadowRadius=K.radius,Z.shadowMapSize=K.mapSize,Z.shadowCameraNear=K.camera.near,Z.shadowCameraFar=K.camera.far,i.pointShadow[m]=Z,i.pointShadowMap[m]=G,i.pointShadowMatrix[m]=L.shadow.matrix,S++}i.point[m]=H,m++}else if(L.isHemisphereLight){const H=t.get(L);H.skyColor.copy(L.color).multiplyScalar(I*x),H.groundColor.copy(L.groundColor).multiplyScalar(I*x),i.hemi[v]=H,v++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_FLOAT_1,i.rectAreaLTC2=ne.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ne.LTC_HALF_1,i.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=g;const b=i.hash;(b.directionalLength!==_||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==M||b.hemiLength!==v||b.numDirectionalShadows!==E||b.numPointShadows!==S||b.numSpotShadows!==A||b.numSpotMaps!==w)&&(i.directional.length=_,i.spot.length=d,i.rectArea.length=M,i.point.length=m,i.hemi.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=A+w-C,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=C,b.directionalLength=_,b.pointLength=m,b.spotLength=d,b.rectAreaLength=M,b.hemiLength=v,b.numDirectionalShadows=E,b.numPointShadows=S,b.numSpotShadows=A,b.numSpotMaps=w,i.version=X_++)}function c(u,f){let h=0,p=0,g=0,_=0,m=0;const d=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const E=u[M];if(E.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),h++}else if(E.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),g++}else if(E.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(d),o.identity(),a.copy(E.matrixWorld),a.premultiply(d),o.extractRotation(a),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(E.isPointLight){const S=i.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(d),p++}else if(E.isHemisphereLight){const S=i.hemi[m];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function zc(r,e){const t=new Y_(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function j_(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new zc(r,e),t.set(s,[l])):a>=o.length?(l=new zc(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class $_ extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class K_ extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Q_(r,e,t){let n=new fc;const i=new Be,s=new Be,a=new ut,o=new $_({depthPacking:bf}),l=new K_,c={},u=t.maxTextureSize,f={[zn]:bt,[bt]:zn,[En]:En},h=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ln;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new on(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let d=this.type;this.render=function(S,A,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=r.getRenderTarget(),x=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Gn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=d!==Sn&&this.type===Sn,L=d===Sn&&this.type!==Sn;for(let U=0,I=S.length;U<I;U++){const $=S[U],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const H=G.getFrameExtents();if(i.multiply(H),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/H.x),i.x=s.x*H.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/H.y),i.y=s.y*H.y,G.mapSize.y=s.y)),G.map===null||q===!0||L===!0){const Z=this.type!==Sn?{minFilter:St,magFilter:St}:{};G.map!==null&&G.map.dispose(),G.map=new ui(i.x,i.y,Z),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}r.setRenderTarget(G.map),r.clear();const K=G.getViewportCount();for(let Z=0;Z<K;Z++){const F=G.getViewport(Z);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),z.viewport(a),G.updateMatrices($,Z),n=G.getFrustum(),E(A,w,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===Sn&&M(G,w),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,r.setRenderTarget(C,x,b)};function M(S,A){const w=e.update(_);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new ui(i.x,i.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(A,null,w,h,_,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(A,null,w,p,_,null)}function v(S,A,w,C){let x=null;const b=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(b!==void 0)x=b;else if(x=w.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,q=A.uuid;let L=c[z];L===void 0&&(L={},c[z]=L);let U=L[q];U===void 0&&(U=x.clone(),L[q]=U),x=U}if(x.visible=A.visible,x.wireframe=A.wireframe,C===Sn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:f[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,w.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=r.properties.get(x);z.light=w}return x}function E(S,A,w,C,x){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===Sn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const q=e.update(S),L=S.material;if(Array.isArray(L)){const U=q.groups;for(let I=0,$=U.length;I<$;I++){const G=U[I],H=L[G.materialIndex];if(H&&H.visible){const K=v(S,H,C,x);r.renderBufferDirect(w,null,q,K,S,G)}}}else if(L.visible){const U=v(S,L,C,x);r.renderBufferDirect(w,null,q,U,S,null)}}const z=S.children;for(let q=0,L=z.length;q<L;q++)E(z[q],A,w,C,x)}}function eg(r,e,t){const n=t.isWebGL2;function i(){let P=!1;const se=new ut;let k=null;const ee=new ut(0,0,0,0);return{setMask:function(le){k!==le&&!P&&(r.colorMask(le,le,le,le),k=le)},setLocked:function(le){P=le},setClear:function(le,Fe,je,lt,vn){vn===!0&&(le*=lt,Fe*=lt,je*=lt),se.set(le,Fe,je,lt),ee.equals(se)===!1&&(r.clearColor(le,Fe,je,lt),ee.copy(se))},reset:function(){P=!1,k=null,ee.set(-1,0,0,0)}}}function s(){let P=!1,se=null,k=null,ee=null;return{setTest:function(le){le?Ae(r.DEPTH_TEST):ve(r.DEPTH_TEST)},setMask:function(le){se!==le&&!P&&(r.depthMask(le),se=le)},setFunc:function(le){if(k!==le){switch(le){case Qh:r.depthFunc(r.NEVER);break;case ef:r.depthFunc(r.ALWAYS);break;case tf:r.depthFunc(r.LESS);break;case $s:r.depthFunc(r.LEQUAL);break;case nf:r.depthFunc(r.EQUAL);break;case rf:r.depthFunc(r.GEQUAL);break;case sf:r.depthFunc(r.GREATER);break;case af:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}k=le}},setLocked:function(le){P=le},setClear:function(le){ee!==le&&(r.clearDepth(le),ee=le)},reset:function(){P=!1,se=null,k=null,ee=null}}}function a(){let P=!1,se=null,k=null,ee=null,le=null,Fe=null,je=null,lt=null,vn=null;return{setTest:function(Ze){P||(Ze?Ae(r.STENCIL_TEST):ve(r.STENCIL_TEST))},setMask:function(Ze){se!==Ze&&!P&&(r.stencilMask(Ze),se=Ze)},setFunc:function(Ze,xn,yt){(k!==Ze||ee!==xn||le!==yt)&&(r.stencilFunc(Ze,xn,yt),k=Ze,ee=xn,le=yt)},setOp:function(Ze,xn,yt){(Fe!==Ze||je!==xn||lt!==yt)&&(r.stencilOp(Ze,xn,yt),Fe=Ze,je=xn,lt=yt)},setLocked:function(Ze){P=Ze},setClear:function(Ze){vn!==Ze&&(r.clearStencil(Ze),vn=Ze)},reset:function(){P=!1,se=null,k=null,ee=null,le=null,Fe=null,je=null,lt=null,vn=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,v=null,E=null,S=null,A=null,w=null,C=null,x=!1,b=null,z=null,q=null,L=null,U=null;const I=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,G=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),$=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),$=G>=2);let K=null,Z={};const F=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),re=new ut().fromArray(F),te=new ut().fromArray(Y);function ie(P,se,k,ee){const le=new Uint8Array(4),Fe=r.createTexture();r.bindTexture(P,Fe),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let je=0;je<k;je++)n&&(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)?r.texImage3D(se,0,r.RGBA,1,1,ee,0,r.RGBA,r.UNSIGNED_BYTE,le):r.texImage2D(se+je,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,le);return Fe}const _e={};_e[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),_e[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_e[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(r.DEPTH_TEST),l.setFunc($s),Ee(!1),Ye(qo),Ae(r.CULL_FACE),xe(Gn);function Ae(P){h[P]!==!0&&(r.enable(P),h[P]=!0)}function ve(P){h[P]!==!1&&(r.disable(P),h[P]=!1)}function ze(P,se){return p[P]!==se?(r.bindFramebuffer(P,se),p[P]=se,n&&(P===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=se),P===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=se)),!0):!1}function Dt(P,se){let k=_,ee=!1;if(P)if(k=g.get(se),k===void 0&&(k=[],g.set(se,k)),P.isWebGLMultipleRenderTargets){const le=P.texture;if(k.length!==le.length||k[0]!==r.COLOR_ATTACHMENT0){for(let Fe=0,je=le.length;Fe<je;Fe++)k[Fe]=r.COLOR_ATTACHMENT0+Fe;k.length=le.length,ee=!0}}else k[0]!==r.COLOR_ATTACHMENT0&&(k[0]=r.COLOR_ATTACHMENT0,ee=!0);else k[0]!==r.BACK&&(k[0]=r.BACK,ee=!0);ee&&(t.isWebGL2?r.drawBuffers(k):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(k))}function Ue(P){return m!==P?(r.useProgram(P),m=P,!0):!1}const N={[Ii]:r.FUNC_ADD,[Hh]:r.FUNC_SUBTRACT,[Vh]:r.FUNC_REVERSE_SUBTRACT};if(n)N[Zo]=r.MIN,N[Jo]=r.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(N[Zo]=P.MIN_EXT,N[Jo]=P.MAX_EXT)}const xt={[Wh]:r.ZERO,[Xh]:r.ONE,[qh]:r.SRC_COLOR,[Qo]:r.SRC_ALPHA,[Jh]:r.SRC_ALPHA_SATURATE,[Kh]:r.DST_COLOR,[jh]:r.DST_ALPHA,[Yh]:r.ONE_MINUS_SRC_COLOR,[el]:r.ONE_MINUS_SRC_ALPHA,[Zh]:r.ONE_MINUS_DST_COLOR,[$h]:r.ONE_MINUS_DST_ALPHA};function xe(P,se,k,ee,le,Fe,je,lt){if(P===Gn){d===!0&&(ve(r.BLEND),d=!1);return}if(d===!1&&(Ae(r.BLEND),d=!0),P!==kh){if(P!==M||lt!==x){if((v!==Ii||A!==Ii)&&(r.blendEquation(r.FUNC_ADD),v=Ii,A=Ii),lt)switch(P){case Ui:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jo:r.blendFunc(r.ONE,r.ONE);break;case $o:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ko:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Ui:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case jo:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case $o:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ko:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,S=null,w=null,C=null,M=P,x=lt}return}le=le||se,Fe=Fe||k,je=je||ee,(se!==v||le!==A)&&(r.blendEquationSeparate(N[se],N[le]),v=se,A=le),(k!==E||ee!==S||Fe!==w||je!==C)&&(r.blendFuncSeparate(xt[k],xt[ee],xt[Fe],xt[je]),E=k,S=ee,w=Fe,C=je),M=P,x=!1}function we(P,se){P.side===En?ve(r.CULL_FACE):Ae(r.CULL_FACE);let k=P.side===bt;se&&(k=!k),Ee(k),P.blending===Ui&&P.transparent===!1?xe(Gn):xe(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ee=P.stencilWrite;c.setTest(ee),ee&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):ve(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(P){b!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),b=P)}function Ye(P){P!==Bh?(Ae(r.CULL_FACE),P!==z&&(P===qo?r.cullFace(r.BACK):P===zh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ve(r.CULL_FACE),z=P}function Ne(P){P!==q&&($&&r.lineWidth(P),q=P)}function Pe(P,se,k){P?(Ae(r.POLYGON_OFFSET_FILL),(L!==se||U!==k)&&(r.polygonOffset(se,k),L=se,U=k)):ve(r.POLYGON_OFFSET_FILL)}function He(P){P?Ae(r.SCISSOR_TEST):ve(r.SCISSOR_TEST)}function dt(P){P===void 0&&(P=r.TEXTURE0+I-1),K!==P&&(r.activeTexture(P),K=P)}function Mt(P,se,k){k===void 0&&(K===null?k=r.TEXTURE0+I-1:k=K);let ee=Z[k];ee===void 0&&(ee={type:void 0,texture:void 0},Z[k]=ee),(ee.type!==P||ee.texture!==se)&&(K!==k&&(r.activeTexture(k),K=k),r.bindTexture(P,se||_e[P]),ee.type=P,ee.texture=se)}function R(){const P=Z[K];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function y(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function W(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Q(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function de(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(P){re.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function ue(P){te.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),te.copy(P))}function he(P,se){let k=f.get(se);k===void 0&&(k=new WeakMap,f.set(se,k));let ee=k.get(P);ee===void 0&&(ee=r.getUniformBlockIndex(se,P.name),k.set(P,ee))}function Le(P,se){const ee=f.get(se).get(P);u.get(se)!==ee&&(r.uniformBlockBinding(se,ee,P.__bindingPointIndex),u.set(se,ee))}function Ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},K=null,Z={},p={},g=new WeakMap,_=[],m=null,d=!1,M=null,v=null,E=null,S=null,A=null,w=null,C=null,x=!1,b=null,z=null,q=null,L=null,U=null,re.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:ve,bindFramebuffer:ze,drawBuffers:Dt,useProgram:Ue,setBlending:xe,setMaterial:we,setFlipSided:Ee,setCullFace:Ye,setLineWidth:Ne,setPolygonOffset:Pe,setScissorTest:He,activeTexture:dt,bindTexture:Mt,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:W,texImage2D:de,texImage3D:pe,updateUBOMapping:he,uniformBlockBinding:Le,texStorage2D:oe,texStorage3D:j,texSubImage2D:J,texSubImage3D:Q,compressedTexSubImage2D:ae,compressedTexSubImage3D:fe,scissor:ge,viewport:ue,reset:Ve}}function tg(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,y){return d?new OffscreenCanvas(R,y):Zr("canvas")}function v(R,y,W,J){let Q=1;if((R.width>J||R.height>J)&&(Q=J/Math.max(R.width,R.height)),Q<1||y===!0)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap){const ae=y?fa:Math.floor,fe=ae(Q*R.width),oe=ae(Q*R.height);_===void 0&&(_=M(fe,oe));const j=W?M(fe,oe):_;return j.width=fe,j.height=oe,j.getContext("2d").drawImage(R,0,0,fe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+fe+"x"+oe+")."),j}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function E(R){return Bl(R.width)&&Bl(R.height)}function S(R){return o?!1:R.wrapS!==Qt||R.wrapT!==Qt||R.minFilter!==St&&R.minFilter!==Wt}function A(R,y){return R.generateMipmaps&&y&&R.minFilter!==St&&R.minFilter!==Wt}function w(R){r.generateMipmap(R)}function C(R,y,W,J,Q=!1){if(o===!1)return y;if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=y;return y===r.RED&&(W===r.FLOAT&&(ae=r.R32F),W===r.HALF_FLOAT&&(ae=r.R16F),W===r.UNSIGNED_BYTE&&(ae=r.R8)),y===r.RG&&(W===r.FLOAT&&(ae=r.RG32F),W===r.HALF_FLOAT&&(ae=r.RG16F),W===r.UNSIGNED_BYTE&&(ae=r.RG8)),y===r.RGBA&&(W===r.FLOAT&&(ae=r.RGBA32F),W===r.HALF_FLOAT&&(ae=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ae=J===Te&&Q===!1?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ae=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ae=r.RGB5_A1)),(ae===r.R16F||ae===r.R32F||ae===r.RG16F||ae===r.RG32F||ae===r.RGBA16F||ae===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(R,y,W){return A(R,W)===!0||R.isFramebufferTexture&&R.minFilter!==St&&R.minFilter!==Wt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function b(R){return R===St||R===il||R===ea?r.NEAREST:r.LINEAR}function z(R){const y=R.target;y.removeEventListener("dispose",z),L(y),y.isVideoTexture&&g.delete(y)}function q(R){const y=R.target;y.removeEventListener("dispose",q),I(y)}function L(R){const y=n.get(R);if(y.__webglInit===void 0)return;const W=R.source,J=m.get(W);if(J){const Q=J[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(R),Object.keys(J).length===0&&m.delete(W)}n.remove(R)}function U(R){const y=n.get(R);r.deleteTexture(y.__webglTexture);const W=R.source,J=m.get(W);delete J[y.__cacheKey],a.memory.textures--}function I(R){const y=R.texture,W=n.get(R),J=n.get(y);if(J.__webglTexture!==void 0&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)r.deleteFramebuffer(W.__webglFramebuffer[Q]),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer[Q]);else{if(r.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&r.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&r.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let Q=0;Q<W.__webglColorRenderbuffer.length;Q++)W.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(W.__webglColorRenderbuffer[Q]);W.__webglDepthRenderbuffer&&r.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let Q=0,ae=y.length;Q<ae;Q++){const fe=n.get(y[Q]);fe.__webglTexture&&(r.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(y[Q])}n.remove(y),n.remove(R)}let $=0;function G(){$=0}function H(){const R=$;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),$+=1,R}function K(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function Z(R,y){const W=n.get(R);if(R.isVideoTexture&&dt(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(W,R,y);return}}t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+y)}function F(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ze(W,R,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+y)}function Y(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){ze(W,R,y);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+y)}function re(R,y){const W=n.get(R);if(R.version>0&&W.__version!==R.version){Dt(W,R,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+y)}const te={[Js]:r.REPEAT,[Qt]:r.CLAMP_TO_EDGE,[Qs]:r.MIRRORED_REPEAT},ie={[St]:r.NEAREST,[il]:r.NEAREST_MIPMAP_NEAREST,[ea]:r.NEAREST_MIPMAP_LINEAR,[Wt]:r.LINEAR,[pf]:r.LINEAR_MIPMAP_NEAREST,[vr]:r.LINEAR_MIPMAP_LINEAR},_e={[Rf]:r.NEVER,[Nf]:r.ALWAYS,[Cf]:r.LESS,[Lf]:r.LEQUAL,[Pf]:r.EQUAL,[If]:r.GEQUAL,[Df]:r.GREATER,[Uf]:r.NOTEQUAL};function Ae(R,y,W){if(W?(r.texParameteri(R,r.TEXTURE_WRAP_S,te[y.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,te[y.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,te[y.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ie[y.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ie[y.minFilter])):(r.texParameteri(R,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(R,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(y.wrapS!==Qt||y.wrapT!==Qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(R,r.TEXTURE_MAG_FILTER,b(y.magFilter)),r.texParameteri(R,r.TEXTURE_MIN_FILTER,b(y.minFilter)),y.minFilter!==St&&y.minFilter!==Wt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const J=e.get("EXT_texture_filter_anisotropic");if(y.magFilter===St||y.minFilter!==ea&&y.minFilter!==vr||y.type===Vn&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===xr&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(r.texParameterf(R,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function ve(R,y){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",z));const J=y.source;let Q=m.get(J);Q===void 0&&(Q={},m.set(J,Q));const ae=K(y);if(ae!==R.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Q[ae].usedTimes++;const fe=Q[R.__cacheKey];fe!==void 0&&(Q[R.__cacheKey].usedTimes--,fe.usedTimes===0&&U(y)),R.__cacheKey=ae,R.__webglTexture=Q[ae].texture}return W}function ze(R,y,W){let J=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=r.TEXTURE_3D);const Q=ve(R,y),ae=y.source;t.bindTexture(J,R.__webglTexture,r.TEXTURE0+W);const fe=n.get(ae);if(ae.version!==fe.__version||Q===!0){t.activeTexture(r.TEXTURE0+W),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const oe=S(y)&&E(y.image)===!1;let j=v(y.image,oe,!1,u);j=Mt(y,j);const de=E(j)||o,pe=s.convert(y.format,y.colorSpace);let ge=s.convert(y.type),ue=C(y.internalFormat,pe,ge,y.colorSpace);Ae(J,y,de);let he;const Le=y.mipmaps,Ve=o&&y.isVideoTexture!==!0,P=fe.__version===void 0||Q===!0,se=x(y,j,de);if(y.isDepthTexture)ue=r.DEPTH_COMPONENT,o?y.type===Vn?ue=r.DEPTH_COMPONENT32F:y.type===Hn?ue=r.DEPTH_COMPONENT24:y.type===ai?ue=r.DEPTH24_STENCIL8:ue=r.DEPTH_COMPONENT16:y.type===Vn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===oi&&ue===r.DEPTH_COMPONENT&&y.type!==ta&&y.type!==Hn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Hn,ge=s.convert(y.type)),y.format===Fi&&ue===r.DEPTH_COMPONENT&&(ue=r.DEPTH_STENCIL,y.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ai,ge=s.convert(y.type))),P&&(Ve?t.texStorage2D(r.TEXTURE_2D,1,ue,j.width,j.height):t.texImage2D(r.TEXTURE_2D,0,ue,j.width,j.height,0,pe,ge,null));else if(y.isDataTexture)if(Le.length>0&&de){Ve&&P&&t.texStorage2D(r.TEXTURE_2D,se,ue,Le[0].width,Le[0].height);for(let k=0,ee=Le.length;k<ee;k++)he=Le[k],Ve?t.texSubImage2D(r.TEXTURE_2D,k,0,0,he.width,he.height,pe,ge,he.data):t.texImage2D(r.TEXTURE_2D,k,ue,he.width,he.height,0,pe,ge,he.data);y.generateMipmaps=!1}else Ve?(P&&t.texStorage2D(r.TEXTURE_2D,se,ue,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,j.width,j.height,pe,ge,j.data)):t.texImage2D(r.TEXTURE_2D,0,ue,j.width,j.height,0,pe,ge,j.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ve&&P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,ue,Le[0].width,Le[0].height,j.depth);for(let k=0,ee=Le.length;k<ee;k++)he=Le[k],y.format!==en?pe!==null?Ve?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,j.depth,pe,he.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,k,ue,he.width,he.height,j.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(r.TEXTURE_2D_ARRAY,k,0,0,0,he.width,he.height,j.depth,pe,ge,he.data):t.texImage3D(r.TEXTURE_2D_ARRAY,k,ue,he.width,he.height,j.depth,0,pe,ge,he.data)}else{Ve&&P&&t.texStorage2D(r.TEXTURE_2D,se,ue,Le[0].width,Le[0].height);for(let k=0,ee=Le.length;k<ee;k++)he=Le[k],y.format!==en?pe!==null?Ve?t.compressedTexSubImage2D(r.TEXTURE_2D,k,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(r.TEXTURE_2D,k,ue,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(r.TEXTURE_2D,k,0,0,he.width,he.height,pe,ge,he.data):t.texImage2D(r.TEXTURE_2D,k,ue,he.width,he.height,0,pe,ge,he.data)}else if(y.isDataArrayTexture)Ve?(P&&t.texStorage3D(r.TEXTURE_2D_ARRAY,se,ue,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,ge,j.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,ue,j.width,j.height,j.depth,0,pe,ge,j.data);else if(y.isData3DTexture)Ve?(P&&t.texStorage3D(r.TEXTURE_3D,se,ue,j.width,j.height,j.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,ge,j.data)):t.texImage3D(r.TEXTURE_3D,0,ue,j.width,j.height,j.depth,0,pe,ge,j.data);else if(y.isFramebufferTexture){if(P)if(Ve)t.texStorage2D(r.TEXTURE_2D,se,ue,j.width,j.height);else{let k=j.width,ee=j.height;for(let le=0;le<se;le++)t.texImage2D(r.TEXTURE_2D,le,ue,k,ee,0,pe,ge,null),k>>=1,ee>>=1}}else if(Le.length>0&&de){Ve&&P&&t.texStorage2D(r.TEXTURE_2D,se,ue,Le[0].width,Le[0].height);for(let k=0,ee=Le.length;k<ee;k++)he=Le[k],Ve?t.texSubImage2D(r.TEXTURE_2D,k,0,0,pe,ge,he):t.texImage2D(r.TEXTURE_2D,k,ue,pe,ge,he);y.generateMipmaps=!1}else Ve?(P&&t.texStorage2D(r.TEXTURE_2D,se,ue,j.width,j.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,pe,ge,j)):t.texImage2D(r.TEXTURE_2D,0,ue,pe,ge,j);A(y,de)&&w(J),fe.__version=ae.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Dt(R,y,W){if(y.image.length!==6)return;const J=ve(R,y),Q=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const ae=n.get(Q);if(Q.version!==ae.__version||J===!0){t.activeTexture(r.TEXTURE0+W),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.NONE);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,oe=y.image[0]&&y.image[0].isDataTexture,j=[];for(let k=0;k<6;k++)!fe&&!oe?j[k]=v(y.image[k],!1,!0,c):j[k]=oe?y.image[k].image:y.image[k],j[k]=Mt(y,j[k]);const de=j[0],pe=E(de)||o,ge=s.convert(y.format,y.colorSpace),ue=s.convert(y.type),he=C(y.internalFormat,ge,ue,y.colorSpace),Le=o&&y.isVideoTexture!==!0,Ve=ae.__version===void 0||J===!0;let P=x(y,de,pe);Ae(r.TEXTURE_CUBE_MAP,y,pe);let se;if(fe){Le&&Ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,P,he,de.width,de.height);for(let k=0;k<6;k++){se=j[k].mipmaps;for(let ee=0;ee<se.length;ee++){const le=se[ee];y.format!==en?ge!==null?Le?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee,0,0,le.width,le.height,ge,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee,he,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee,0,0,le.width,le.height,ge,ue,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee,he,le.width,le.height,0,ge,ue,le.data)}}}else{se=y.mipmaps,Le&&Ve&&(se.length>0&&P++,t.texStorage2D(r.TEXTURE_CUBE_MAP,P,he,j[0].width,j[0].height));for(let k=0;k<6;k++)if(oe){Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,j[k].width,j[k].height,ge,ue,j[k].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,he,j[k].width,j[k].height,0,ge,ue,j[k].data);for(let ee=0;ee<se.length;ee++){const Fe=se[ee].image[k].image;Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee+1,0,0,Fe.width,Fe.height,ge,ue,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee+1,he,Fe.width,Fe.height,0,ge,ue,Fe.data)}}else{Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ge,ue,j[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,he,ge,ue,j[k]);for(let ee=0;ee<se.length;ee++){const le=se[ee];Le?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee+1,0,0,ge,ue,le.image[k]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+k,ee+1,he,ge,ue,le.image[k])}}}A(y,pe)&&w(r.TEXTURE_CUBE_MAP),ae.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Ue(R,y,W,J,Q){const ae=s.convert(W.format,W.colorSpace),fe=s.convert(W.type),oe=C(W.internalFormat,ae,fe,W.colorSpace);n.get(y).__hasExternalTextures||(Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,0,oe,y.width,y.height,y.depth,0,ae,fe,null):t.texImage2D(Q,0,oe,y.width,y.height,0,ae,fe,null)),t.bindFramebuffer(r.FRAMEBUFFER,R),He(y)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,Q,n.get(W).__webglTexture,0,Pe(y)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,Q,n.get(W).__webglTexture,0),t.bindFramebuffer(r.FRAMEBUFFER,null)}function N(R,y,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),y.depthBuffer&&!y.stencilBuffer){let J=r.DEPTH_COMPONENT16;if(W||He(y)){const Q=y.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Vn?J=r.DEPTH_COMPONENT32F:Q.type===Hn&&(J=r.DEPTH_COMPONENT24));const ae=Pe(y);He(y)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ae,J,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ae,J,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,J,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(y.depthBuffer&&y.stencilBuffer){const J=Pe(y);W&&He(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,y.width,y.height):He(y)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const J=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let Q=0;Q<J.length;Q++){const ae=J[Q],fe=s.convert(ae.format,ae.colorSpace),oe=s.convert(ae.type),j=C(ae.internalFormat,fe,oe,ae.colorSpace),de=Pe(y);W&&He(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,de,j,y.width,y.height):He(y)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,de,j,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,j,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function xt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const J=n.get(y.depthTexture).__webglTexture,Q=Pe(y);if(y.depthTexture.format===oi)He(y)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,J,0);else if(y.depthTexture.format===Fi)He(y)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function xe(R){const y=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");xt(y.__webglFramebuffer,R)}else if(W){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]=r.createRenderbuffer(),N(y.__webglDepthbuffer[J],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),N(y.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function we(R,y,W){const J=n.get(R);y!==void 0&&Ue(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D),W!==void 0&&xe(R)}function Ee(R){const y=R.texture,W=n.get(R),J=n.get(y);R.addEventListener("dispose",q),R.isWebGLMultipleRenderTargets!==!0&&(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=y.version,a.memory.textures++);const Q=R.isWebGLCubeRenderTarget===!0,ae=R.isWebGLMultipleRenderTargets===!0,fe=E(R)||o;if(Q){W.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)W.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(W.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const oe=R.texture;for(let j=0,de=oe.length;j<de;j++){const pe=n.get(oe[j]);pe.__webglTexture===void 0&&(pe.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&R.samples>0&&He(R)===!1){const oe=ae?y:[y];W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<oe.length;j++){const de=oe[j];W.__webglColorRenderbuffer[j]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[j]);const pe=s.convert(de.format,de.colorSpace),ge=s.convert(de.type),ue=C(de.internalFormat,pe,ge,de.colorSpace,R.isXRRenderTarget===!0),he=Pe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,ue,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+j,r.RENDERBUFFER,W.__webglColorRenderbuffer[j])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),N(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,y,fe);for(let oe=0;oe<6;oe++)Ue(W.__webglFramebuffer[oe],R,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe);A(y,fe)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){const oe=R.texture;for(let j=0,de=oe.length;j<de;j++){const pe=oe[j],ge=n.get(pe);t.bindTexture(r.TEXTURE_2D,ge.__webglTexture),Ae(r.TEXTURE_2D,pe,fe),Ue(W.__webglFramebuffer,R,pe,r.COLOR_ATTACHMENT0+j,r.TEXTURE_2D),A(pe,fe)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(o?oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,J.__webglTexture),Ae(oe,y,fe),Ue(W.__webglFramebuffer,R,y,r.COLOR_ATTACHMENT0,oe),A(y,fe)&&w(oe),t.unbindTexture()}R.depthBuffer&&xe(R)}function Ye(R){const y=E(R)||o,W=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let J=0,Q=W.length;J<Q;J++){const ae=W[J];if(A(ae,y)){const fe=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,oe=n.get(ae).__webglTexture;t.bindTexture(fe,oe),w(fe),t.unbindTexture()}}}function Ne(R){if(o&&R.samples>0&&He(R)===!1){const y=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],W=R.width,J=R.height;let Q=r.COLOR_BUFFER_BIT;const ae=[],fe=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,oe=n.get(R),j=R.isWebGLMultipleRenderTargets===!0;if(j)for(let de=0;de<y.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let de=0;de<y.length;de++){ae.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&ae.push(fe);const pe=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(pe===!1&&(R.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),j&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,oe.__webglColorRenderbuffer[de]),pe===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[fe]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[fe])),j){const ge=n.get(y[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ge,0)}r.blitFramebuffer(0,0,W,J,0,0,W,J,Q,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ae)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),j)for(let de=0;de<y.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,oe.__webglColorRenderbuffer[de]);const pe=n.get(y[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,oe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,pe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Pe(R){return Math.min(f,R.samples)}function He(R){const y=n.get(R);return o&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function dt(R){const y=a.render.frame;g.get(R)!==y&&(g.set(R,y),R.update())}function Mt(R,y){const W=R.colorSpace,J=R.format,Q=R.type;return R.isCompressedTexture===!0||R.format===la||W!==hn&&W!==ci&&(W===Te?o===!1?e.has("EXT_sRGB")===!0&&J===en?(R.format=la,R.minFilter=Wt,R.generateMipmaps=!1):y=kl.sRGBToLinear(y):(J!==en||Q!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),y}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=Y,this.setTextureCube=re,this.rebindTextures=we,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=He}function ng(r,e,t){const n=t.isWebGL2;function i(s,a=ci){let o;if(s===kn)return r.UNSIGNED_BYTE;if(s===sl)return r.UNSIGNED_SHORT_4_4_4_4;if(s===al)return r.UNSIGNED_SHORT_5_5_5_1;if(s===mf)return r.BYTE;if(s===_f)return r.SHORT;if(s===ta)return r.UNSIGNED_SHORT;if(s===rl)return r.INT;if(s===Hn)return r.UNSIGNED_INT;if(s===Vn)return r.FLOAT;if(s===xr)return n?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===gf)return r.ALPHA;if(s===en)return r.RGBA;if(s===vf)return r.LUMINANCE;if(s===xf)return r.LUMINANCE_ALPHA;if(s===oi)return r.DEPTH_COMPONENT;if(s===Fi)return r.DEPTH_STENCIL;if(s===la)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Mf)return r.RED;if(s===ol)return r.RED_INTEGER;if(s===Sf)return r.RG;if(s===ll)return r.RG_INTEGER;if(s===cl)return r.RGBA_INTEGER;if(s===na||s===ia||s===ra||s===sa)if(a===Te)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===na)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ra)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===na)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ia)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ra)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===ul||s===hl||s===fl||s===dl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===ul)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===hl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===dl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ef)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===pl||s===ml)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===pl)return a===Te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ml)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===_l||s===gl||s===vl||s===xl||s===Ml||s===Sl||s===El||s===yl||s===Tl||s===bl||s===Al||s===wl||s===Rl||s===Cl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===_l)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===gl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ml)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===El)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===yl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Al)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Rl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Cl)return a===Te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===aa)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===aa)return a===Te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===yf||s===Pl||s===Ll||s===Dl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===aa)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Pl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ll)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Dl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ai?n?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class ig extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rg={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class sg extends It{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:oi,u!==oi&&u!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===oi&&(n=Hn),n===void 0&&u===Fi&&(n=ai),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ag extends Bi{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const _=t.getContextAttributes();let m=null,d=null;const M=[],v=[],E=new qt;E.layers.enable(1),E.viewport=new ut;const S=new qt;S.layers.enable(2),S.viewport=new ut;const A=[E,S],w=new ig;w.layers.enable(1),w.layers.enable(2);let C=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Y=M[F];return Y===void 0&&(Y=new Fa,M[F]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(F){let Y=M[F];return Y===void 0&&(Y=new Fa,M[F]=Y),Y.getGripSpace()},this.getHand=function(F){let Y=M[F];return Y===void 0&&(Y=new Fa,M[F]=Y),Y.getHandSpace()};function b(F){const Y=v.indexOf(F.inputSource);if(Y===-1)return;const re=M[Y];re!==void 0&&(re.update(F.inputSource,F.frame,c||a),re.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){i.removeEventListener("select",b),i.removeEventListener("selectstart",b),i.removeEventListener("selectend",b),i.removeEventListener("squeeze",b),i.removeEventListener("squeezestart",b),i.removeEventListener("squeezeend",b),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",q);for(let F=0;F<M.length;F++){const Y=v[F];Y!==null&&(v[F]=null,M[F].disconnect(Y))}C=null,x=null,e.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,Z.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",b),i.addEventListener("selectstart",b),i.addEventListener("selectend",b),i.addEventListener("squeeze",b),i.addEventListener("squeezestart",b),i.addEventListener("squeezeend",b),i.addEventListener("end",z),i.addEventListener("inputsourceschange",q),_.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,Y),i.updateRenderState({baseLayer:p}),d=new ui(p.framebufferWidth,p.framebufferHeight,{format:en,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,re=null,te=null;_.depth&&(te=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=_.stencil?Fi:oi,re=_.stencil?ai:Hn);const ie={colorFormat:t.RGBA8,depthFormat:te,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(ie),i.updateRenderState({layers:[h]}),d=new ui(h.textureWidth,h.textureHeight,{format:en,type:kn,depthTexture:new sg(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const _e=e.properties.get(d);_e.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Z.setContext(i),Z.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function q(F){for(let Y=0;Y<F.removed.length;Y++){const re=F.removed[Y],te=v.indexOf(re);te>=0&&(v[te]=null,M[te].disconnect(re))}for(let Y=0;Y<F.added.length;Y++){const re=F.added[Y];let te=v.indexOf(re);if(te===-1){for(let _e=0;_e<M.length;_e++)if(_e>=v.length){v.push(re),te=_e;break}else if(v[_e]===null){v[_e]=re,te=_e;break}if(te===-1)break}const ie=M[te];ie&&ie.connect(re)}}const L=new B,U=new B;function I(F,Y,re){L.setFromMatrixPosition(Y.matrixWorld),U.setFromMatrixPosition(re.matrixWorld);const te=L.distanceTo(U),ie=Y.projectionMatrix.elements,_e=re.projectionMatrix.elements,Ae=ie[14]/(ie[10]-1),ve=ie[14]/(ie[10]+1),ze=(ie[9]+1)/ie[5],Dt=(ie[9]-1)/ie[5],Ue=(ie[8]-1)/ie[0],N=(_e[8]+1)/_e[0],xt=Ae*Ue,xe=Ae*N,we=te/(-Ue+N),Ee=we*-Ue;Y.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ee),F.translateZ(we),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ye=Ae+we,Ne=ve+we,Pe=xt-Ee,He=xe+(te-Ee),dt=ze*ve/Ne*Ye,Mt=Dt*ve/Ne*Ye;F.projectionMatrix.makePerspective(Pe,He,dt,Mt,Ye,Ne),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function $(F,Y){Y===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Y.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;w.near=S.near=E.near=F.near,w.far=S.far=E.far=F.far,(C!==w.near||x!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),C=w.near,x=w.far);const Y=F.parent,re=w.cameras;$(w,Y);for(let te=0;te<re.length;te++)$(re[te],Y);re.length===2?I(w,E,S):w.projectionMatrix.copy(E.projectionMatrix),G(F,w,Y)};function G(F,Y,re){re===null?F.matrix.copy(Y.matrixWorld):(F.matrix.copy(re.matrixWorld),F.matrix.invert(),F.matrix.multiply(Y.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0);const te=F.children;for(let ie=0,_e=te.length;ie<_e;ie++)te[ie].updateMatrixWorld(!0);F.projectionMatrix.copy(Y.projectionMatrix),F.projectionMatrixInverse.copy(Y.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ua*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let H=null;function K(F,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const re=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let te=!1;re.length!==w.cameras.length&&(w.cameras.length=0,te=!0);for(let ie=0;ie<re.length;ie++){const _e=re[ie];let Ae=null;if(p!==null)Ae=p.getViewport(_e);else{const ze=f.getViewSubImage(h,_e);Ae=ze.viewport,ie===0&&(e.setRenderTargetTextures(d,ze.colorTexture,h.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(d))}let ve=A[ie];ve===void 0&&(ve=new qt,ve.layers.enable(ie),ve.viewport=new ut,A[ie]=ve),ve.matrix.fromArray(_e.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(_e.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),ie===0&&(w.matrix.copy(ve.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),te===!0&&w.cameras.push(ve)}}for(let re=0;re<M.length;re++){const te=v[re],ie=M[re];te!==null&&ie!==void 0&&ie.update(te,Y,c||a)}H&&H(F,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Z=new dc;Z.setAnimationLoop(K),this.setAnimationLoop=function(F){H=F},this.dispose=function(){}}}function og(r,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,cc(r)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,M,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,M,v):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const v=r.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,M,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*M,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,M){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===bt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const M=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lg(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const E=v.program;n.uniformBlockBinding(M,E)}function c(M,v){let E=i[M.id];E===void 0&&(g(M),E=u(M),i[M.id]=E,M.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(M,S);const A=e.render.frame;s[M.id]!==A&&(h(M),s[M.id]=A)}function u(M){const v=f();M.__bindingPointIndex=v;const E=r.createBuffer(),S=M.__size,A=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,S,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,E),E}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=i[M.id],E=M.uniforms,S=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let A=0,w=E.length;A<w;A++){const C=E[A];if(p(C,A,S)===!0){const x=C.__offset,b=Array.isArray(C.value)?C.value:[C.value];let z=0;for(let q=0;q<b.length;q++){const L=b[q],U=_(L);typeof L=="number"?(C.__data[0]=L,r.bufferSubData(r.UNIFORM_BUFFER,x+z,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=L.elements[0],C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=L.elements[0],C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=L.elements[0]):(L.toArray(C.__data,z),z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,x,C.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(M,v,E){const S=M.value;if(E[v]===void 0){if(typeof S=="number")E[v]=S;else{const A=Array.isArray(S)?S:[S],w=[];for(let C=0;C<A.length;C++)w.push(A[C].clone());E[v]=w}return!0}else if(typeof S=="number"){if(E[v]!==S)return E[v]=S,!0}else{const A=Array.isArray(E[v])?E[v]:[E[v]],w=Array.isArray(S)?S:[S];for(let C=0;C<A.length;C++){const x=A[C];if(x.equals(w[C])===!1)return x.copy(w[C]),!0}}return!1}function g(M){const v=M.uniforms;let E=0;const S=16;let A=0;for(let w=0,C=v.length;w<C;w++){const x=v[w],b={boundary:0,storage:0},z=Array.isArray(x.value)?x.value:[x.value];for(let q=0,L=z.length;q<L;q++){const U=z[q],I=_(U);b.boundary+=I.boundary,b.storage+=I.storage}if(x.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,w>0){A=E%S;const q=S-A;A!==0&&q-b.boundary<0&&(E+=S-A,x.__offset=E)}E+=b.storage}return A=E%S,A>0&&(E+=S-A),M.__size=E,M.__cache={},this}function _(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function d(){for(const M in i)r.deleteBuffer(i[M]);a=[],i={},s={}}return{bind:l,update:c,dispose:d}}function cg(){const r=Zr("canvas");return r.style.display="block",r}class Gc{constructor(e={}){const{canvas:t=cg(),context:n=null,depth:i=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Te,this.useLegacyLights=!0,this.toneMapping=yn,this.toneMappingExposure=1;const v=this;let E=!1,S=0,A=0,w=null,C=-1,x=null;const b=new ut,z=new ut;let q=null;const L=new We(0);let U=0,I=t.width,$=t.height,G=1,H=null,K=null;const Z=new ut(0,0,I,$),F=new ut(0,0,I,$);let Y=!1;const re=new fc;let te=!1,ie=!1,_e=null;const Ae=new ht,ve=new Be,ze=new B,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?G:1}let N=n;function xt(T,O){for(let V=0;V<T.length;V++){const D=T[V],X=t.getContext(D,O);if(X!==null)return X}return null}try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${js}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",k,!1),t.addEventListener("webglcontextcreationerror",ee,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),N=xt(O,T),N===null)throw xt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext!="undefined"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let xe,we,Ee,Ye,Ne,Pe,He,dt,Mt,R,y,W,J,Q,ae,fe,oe,j,de,pe,ge,ue,he,Le;function Ve(){xe=new xm(N),we=new fm(N,xe,e),xe.init(we),ue=new ng(N,xe,we),Ee=new eg(N,xe,we),Ye=new Em(N),Ne=new G_,Pe=new tg(N,xe,Ee,Ne,we,ue,Ye),He=new pm(v),dt=new vm(v),Mt=new hd(N,we),he=new um(N,xe,Mt,we),R=new Mm(N,Mt,Ye,he),y=new Am(N,R,Mt,Ye),de=new bm(N,we,Pe),fe=new dm(Ne),W=new z_(v,He,dt,xe,we,he,fe),J=new og(v,Ne),Q=new H_,ae=new j_(xe,we),j=new cm(v,He,dt,Ee,y,h,l),oe=new Q_(v,y,we),Le=new lg(N,Ye,we,Ee),pe=new hm(N,xe,Ye,we),ge=new Sm(N,xe,Ye,we),Ye.programs=W.programs,v.capabilities=we,v.extensions=xe,v.properties=Ne,v.renderLists=Q,v.shadowMap=oe,v.state=Ee,v.info=Ye}Ve();const P=new ag(v,N);this.xr=P,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=xe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=xe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(T){T!==void 0&&(G=T,this.setSize(I,$,!1))},this.getSize=function(T){return T.set(I,$)},this.setSize=function(T,O,V=!0){if(P.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=T,$=O,t.width=Math.floor(T*G),t.height=Math.floor(O*G),V===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(I*G,$*G).floor()},this.setDrawingBufferSize=function(T,O,V){I=T,$=O,G=V,t.width=Math.floor(T*V),t.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(b)},this.getViewport=function(T){return T.copy(Z)},this.setViewport=function(T,O,V,D){T.isVector4?Z.set(T.x,T.y,T.z,T.w):Z.set(T,O,V,D),Ee.viewport(b.copy(Z).multiplyScalar(G).floor())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,O,V,D){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,O,V,D),Ee.scissor(z.copy(F).multiplyScalar(G).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(T){Ee.setScissorTest(Y=T)},this.setOpaqueSort=function(T){H=T},this.setTransparentSort=function(T){K=T},this.getClearColor=function(T){return T.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor.apply(j,arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha.apply(j,arguments)},this.clear=function(T=!0,O=!0,V=!0){let D=0;if(T){let X=!1;if(w!==null){const ce=w.texture.format;X=ce===cl||ce===ll||ce===ol}if(X){const ce=w.texture.type,me=ce===kn||ce===Hn||ce===ta||ce===ai||ce===sl||ce===al,Me=j.getClearColor(),Se=j.getClearAlpha(),De=Me.r,ye=Me.g,Re=Me.b;me?(p[0]=De,p[1]=ye,p[2]=Re,p[3]=Se,N.clearBufferuiv(N.COLOR,0,p)):(g[0]=De,g[1]=ye,g[2]=Re,g[3]=Se,N.clearBufferiv(N.COLOR,0,g))}else D|=N.COLOR_BUFFER_BIT}O&&(D|=N.DEPTH_BUFFER_BIT),V&&(D|=N.STENCIL_BUFFER_BIT),N.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",k,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Q.dispose(),ae.dispose(),Ne.dispose(),He.dispose(),dt.dispose(),y.dispose(),he.dispose(),Le.dispose(),W.dispose(),P.dispose(),P.removeEventListener("sessionstart",Ze),P.removeEventListener("sessionend",xn),_e&&(_e.dispose(),_e=null),yt.stop()};function se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Ye.autoReset,O=oe.enabled,V=oe.autoUpdate,D=oe.needsUpdate,X=oe.type;Ve(),Ye.autoReset=T,oe.enabled=O,oe.autoUpdate=V,oe.needsUpdate=D,oe.type=X}function ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function le(T){const O=T.target;O.removeEventListener("dispose",le),Fe(O)}function Fe(T){je(T),Ne.remove(T)}function je(T){const O=Ne.get(T).programs;O!==void 0&&(O.forEach(function(V){W.releaseProgram(V)}),T.isShaderMaterial&&W.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,D,X,ce){O===null&&(O=Dt);const me=X.isMesh&&X.matrixWorld.determinant()<0,Me=Pv(T,O,V,D,X);Ee.setMaterial(D,me);let Se=V.index,De=1;D.wireframe===!0&&(Se=R.getWireframeAttribute(V),De=2);const ye=V.drawRange,Re=V.attributes.position;let Je=ye.start*De,et=(ye.start+ye.count)*De;ce!==null&&(Je=Math.max(Je,ce.start*De),et=Math.min(et,(ce.start+ce.count)*De)),Se!==null?(Je=Math.max(Je,0),et=Math.min(et,Se.count)):Re!=null&&(Je=Math.max(Je,0),et=Math.min(et,Re.count));const cn=et-Je;if(cn<0||cn===1/0)return;he.setup(X,D,Me,V,Se);let On,it=pe;if(Se!==null&&(On=Mt.get(Se),it=ge,it.setIndex(On)),X.isMesh)D.wireframe===!0?(Ee.setLineWidth(D.wireframeLinewidth*Ue()),it.setMode(N.LINES)):it.setMode(N.TRIANGLES);else if(X.isLine){let Oe=D.linewidth;Oe===void 0&&(Oe=1),Ee.setLineWidth(Oe*Ue()),X.isLineSegments?it.setMode(N.LINES):X.isLineLoop?it.setMode(N.LINE_LOOP):it.setMode(N.LINE_STRIP)}else X.isPoints?it.setMode(N.POINTS):X.isSprite&&it.setMode(N.TRIANGLES);if(X.isInstancedMesh)it.renderInstances(Je,cn,X.count);else if(V.isInstancedBufferGeometry){const Oe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ro=Math.min(V.instanceCount,Oe);it.renderInstances(Je,cn,Ro)}else it.render(Je,cn)},this.compile=function(T,O){function V(D,X,ce){D.transparent===!0&&D.side===En&&D.forceSinglePass===!1?(D.side=bt,D.needsUpdate=!0,zs(D,X,ce),D.side=zn,D.needsUpdate=!0,zs(D,X,ce),D.side=En):zs(D,X,ce)}m=ae.get(T),m.init(),M.push(m),T.traverseVisible(function(D){D.isLight&&D.layers.test(O.layers)&&(m.pushLight(D),D.castShadow&&m.pushShadow(D))}),m.setupLights(v.useLegacyLights),T.traverse(function(D){const X=D.material;if(X)if(Array.isArray(X))for(let ce=0;ce<X.length;ce++){const me=X[ce];V(me,T,D)}else V(X,T,D)}),M.pop(),m=null};let lt=null;function vn(T){lt&&lt(T)}function Ze(){yt.stop()}function xn(){yt.start()}const yt=new dc;yt.setAnimationLoop(vn),typeof self!="undefined"&&yt.setContext(self),this.setAnimationLoop=function(T){lt=T,P.setAnimationLoop(T),T===null?yt.stop():yt.start()},P.addEventListener("sessionstart",Ze),P.addEventListener("sessionend",xn),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),P.enabled===!0&&P.isPresenting===!0&&(P.cameraAutoUpdate===!0&&P.updateCamera(O),O=P.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,O,w),m=ae.get(T,M.length),m.init(),M.push(m),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),re.setFromProjectionMatrix(Ae),ie=this.localClippingEnabled,te=fe.init(this.clippingPlanes,ie),_=Q.get(T,d.length),_.init(),d.push(_),ih(T,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(H,K),this.info.render.frame++,te===!0&&fe.beginShadows();const V=m.state.shadowsArray;if(oe.render(V,T,O),te===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),j.render(_,T),m.setupLights(v.useLegacyLights),O.isArrayCamera){const D=O.cameras;for(let X=0,ce=D.length;X<ce;X++){const me=D[X];rh(_,T,me,me.viewport)}}else rh(_,T,O);w!==null&&(Pe.updateMultisampleRenderTarget(w),Pe.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,O),he.resetDefaultState(),C=-1,x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function ih(T,O,V,D){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){D&&ze.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ae);const me=y.update(T),Me=T.material;Me.visible&&_.push(T,me,Me,V,ze.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||re.intersectsObject(T))){const me=y.update(T),Me=T.material;if(D&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ze.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ze.copy(me.boundingSphere.center)),ze.applyMatrix4(T.matrixWorld).applyMatrix4(Ae)),Array.isArray(Me)){const Se=me.groups;for(let De=0,ye=Se.length;De<ye;De++){const Re=Se[De],Je=Me[Re.materialIndex];Je&&Je.visible&&_.push(T,me,Je,V,ze.z,Re)}}else Me.visible&&_.push(T,me,Me,V,ze.z,null)}}const ce=T.children;for(let me=0,Me=ce.length;me<Me;me++)ih(ce[me],O,V,D)}function rh(T,O,V,D){const X=T.opaque,ce=T.transmissive,me=T.transparent;m.setupLightsView(V),te===!0&&fe.setGlobalState(v.clippingPlanes,V),ce.length>0&&Cv(X,ce,O,V),D&&Ee.viewport(b.copy(D)),X.length>0&&Bs(X,O,V),ce.length>0&&Bs(ce,O,V),me.length>0&&Bs(me,O,V),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Cv(T,O,V,D){const X=we.isWebGL2;_e===null&&(_e=new ui(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?xr:kn,minFilter:vr,samples:X?4:0})),v.getDrawingBufferSize(ve),X?_e.setSize(ve.x,ve.y):_e.setSize(fa(ve.x),fa(ve.y));const ce=v.getRenderTarget();v.setRenderTarget(_e),v.getClearColor(L),U=v.getClearAlpha(),U<1&&v.setClearColor(16777215,.5),v.clear();const me=v.toneMapping;v.toneMapping=yn,Bs(T,V,D),Pe.updateMultisampleRenderTarget(_e),Pe.updateRenderTargetMipmap(_e);let Me=!1;for(let Se=0,De=O.length;Se<De;Se++){const ye=O[Se],Re=ye.object,Je=ye.geometry,et=ye.material,cn=ye.group;if(et.side===En&&Re.layers.test(D.layers)){const On=et.side;et.side=bt,et.needsUpdate=!0,sh(Re,V,D,Je,et,cn),et.side=On,et.needsUpdate=!0,Me=!0}}Me===!0&&(Pe.updateMultisampleRenderTarget(_e),Pe.updateRenderTargetMipmap(_e)),v.setRenderTarget(ce),v.setClearColor(L,U),v.toneMapping=me}function Bs(T,O,V){const D=O.isScene===!0?O.overrideMaterial:null;for(let X=0,ce=T.length;X<ce;X++){const me=T[X],Me=me.object,Se=me.geometry,De=D===null?me.material:D,ye=me.group;Me.layers.test(V.layers)&&sh(Me,O,V,Se,De,ye)}}function sh(T,O,V,D,X,ce){T.onBeforeRender(v,O,V,D,X,ce),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(v,O,V,D,T,ce),X.transparent===!0&&X.side===En&&X.forceSinglePass===!1?(X.side=bt,X.needsUpdate=!0,v.renderBufferDirect(V,O,D,X,T,ce),X.side=zn,X.needsUpdate=!0,v.renderBufferDirect(V,O,D,X,T,ce),X.side=En):v.renderBufferDirect(V,O,D,X,T,ce),T.onAfterRender(v,O,V,D,X,ce)}function zs(T,O,V){O.isScene!==!0&&(O=Dt);const D=Ne.get(T),X=m.state.lights,ce=m.state.shadowsArray,me=X.state.version,Me=W.getParameters(T,X.state,ce,O,V),Se=W.getProgramCacheKey(Me);let De=D.programs;D.environment=T.isMeshStandardMaterial?O.environment:null,D.fog=O.fog,D.envMap=(T.isMeshStandardMaterial?dt:He).get(T.envMap||D.environment),De===void 0&&(T.addEventListener("dispose",le),De=new Map,D.programs=De);let ye=De.get(Se);if(ye!==void 0){if(D.currentProgram===ye&&D.lightsStateVersion===me)return ah(T,Me),ye}else Me.uniforms=W.getUniforms(T),T.onBuild(V,Me,v),T.onBeforeCompile(Me,v),ye=W.acquireProgram(Me,Se),De.set(Se,ye),D.uniforms=Me.uniforms;const Re=D.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=fe.uniform),ah(T,Me),D.needsLights=Dv(T),D.lightsStateVersion=me,D.needsLights&&(Re.ambientLightColor.value=X.state.ambient,Re.lightProbe.value=X.state.probe,Re.directionalLights.value=X.state.directional,Re.directionalLightShadows.value=X.state.directionalShadow,Re.spotLights.value=X.state.spot,Re.spotLightShadows.value=X.state.spotShadow,Re.rectAreaLights.value=X.state.rectArea,Re.ltc_1.value=X.state.rectAreaLTC1,Re.ltc_2.value=X.state.rectAreaLTC2,Re.pointLights.value=X.state.point,Re.pointLightShadows.value=X.state.pointShadow,Re.hemisphereLights.value=X.state.hemi,Re.directionalShadowMap.value=X.state.directionalShadowMap,Re.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Re.spotShadowMap.value=X.state.spotShadowMap,Re.spotLightMatrix.value=X.state.spotLightMatrix,Re.spotLightMap.value=X.state.spotLightMap,Re.pointShadowMap.value=X.state.pointShadowMap,Re.pointShadowMatrix.value=X.state.pointShadowMatrix);const Je=ye.getUniforms(),et=Ms.seqWithValue(Je.seq,Re);return D.currentProgram=ye,D.uniformsList=et,ye}function ah(T,O){const V=Ne.get(T);V.outputColorSpace=O.outputColorSpace,V.instancing=O.instancing,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Pv(T,O,V,D,X){O.isScene!==!0&&(O=Dt),Pe.resetTextureUnits();const ce=O.fog,me=D.isMeshStandardMaterial?O.environment:null,Me=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:hn,Se=(D.isMeshStandardMaterial?dt:He).get(D.envMap||me),De=D.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ye=!!V.attributes.tangent&&(!!D.normalMap||D.anisotropy>0),Re=!!V.morphAttributes.position,Je=!!V.morphAttributes.normal,et=!!V.morphAttributes.color,cn=D.toneMapped?v.toneMapping:yn,On=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,it=On!==void 0?On.length:0,Oe=Ne.get(D),Ro=m.state.lights;if(te===!0&&(ie===!0||T!==x)){const Vt=T===x&&D.id===C;fe.setState(D,T,Vt)}let ct=!1;D.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Ro.state.version||Oe.outputColorSpace!==Me||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Se||D.fog===!0&&Oe.fog!==ce||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==fe.numPlanes||Oe.numIntersection!==fe.numIntersection)||Oe.vertexAlphas!==De||Oe.vertexTangents!==ye||Oe.morphTargets!==Re||Oe.morphNormals!==Je||Oe.morphColors!==et||Oe.toneMapping!==cn||we.isWebGL2===!0&&Oe.morphTargetsCount!==it)&&(ct=!0):(ct=!0,Oe.__version=D.version);let Ci=Oe.currentProgram;ct===!0&&(Ci=zs(D,O,X));let oh=!1,Wr=!1,Co=!1;const Tt=Ci.getUniforms(),Pi=Oe.uniforms;if(Ee.useProgram(Ci.program)&&(oh=!0,Wr=!0,Co=!0),D.id!==C&&(C=D.id,Wr=!0),oh||x!==T){if(Tt.setValue(N,"projectionMatrix",T.projectionMatrix),we.logarithmicDepthBuffer&&Tt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),x!==T&&(x=T,Wr=!0,Co=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const Vt=Tt.map.cameraPosition;Vt!==void 0&&Vt.setValue(N,ze.setFromMatrixPosition(T.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&Tt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||X.isSkinnedMesh)&&Tt.setValue(N,"viewMatrix",T.matrixWorldInverse)}if(X.isSkinnedMesh){Tt.setOptional(N,X,"bindMatrix"),Tt.setOptional(N,X,"bindMatrixInverse");const Vt=X.skeleton;Vt&&(we.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Tt.setValue(N,"boneTexture",Vt.boneTexture,Pe),Tt.setValue(N,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Po=V.morphAttributes;if((Po.position!==void 0||Po.normal!==void 0||Po.color!==void 0&&we.isWebGL2===!0)&&de.update(X,V,Ci),(Wr||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Tt.setValue(N,"receiveShadow",X.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Pi.envMap.value=Se,Pi.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),Wr&&(Tt.setValue(N,"toneMappingExposure",v.toneMappingExposure),Oe.needsLights&&Lv(Pi,Co),ce&&D.fog===!0&&J.refreshFogUniforms(Pi,ce),J.refreshMaterialUniforms(Pi,D,G,$,_e),Ms.upload(N,Oe.uniformsList,Pi,Pe)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ms.upload(N,Oe.uniformsList,Pi,Pe),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&Tt.setValue(N,"center",X.center),Tt.setValue(N,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(N,"normalMatrix",X.normalMatrix),Tt.setValue(N,"modelMatrix",X.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const Vt=D.uniformsGroups;for(let Lo=0,Uv=Vt.length;Lo<Uv;Lo++)if(we.isWebGL2){const lh=Vt[Lo];Le.update(lh,Ci),Le.bind(lh,Ci)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ci}function Lv(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Dv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,O,V){Ne.get(T.texture).__webglTexture=O,Ne.get(T.depthTexture).__webglTexture=V;const D=Ne.get(T);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=V===void 0,D.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const V=Ne.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){w=T,S=O,A=V;let D=!0,X=null,ce=!1,me=!1;if(T){const Se=Ne.get(T);Se.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(N.FRAMEBUFFER,null),D=!1):Se.__webglFramebuffer===void 0?Pe.setupRenderTarget(T):Se.__hasExternalTextures&&Pe.rebindTextures(T,Ne.get(T.texture).__webglTexture,Ne.get(T.depthTexture).__webglTexture);const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(me=!0);const ye=Ne.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(X=ye[O],ce=!0):we.isWebGL2&&T.samples>0&&Pe.useMultisampledRTT(T)===!1?X=Ne.get(T).__webglMultisampledFramebuffer:X=ye,b.copy(T.viewport),z.copy(T.scissor),q=T.scissorTest}else b.copy(Z).multiplyScalar(G).floor(),z.copy(F).multiplyScalar(G).floor(),q=Y;if(Ee.bindFramebuffer(N.FRAMEBUFFER,X)&&we.drawBuffers&&D&&Ee.drawBuffers(T,X),Ee.viewport(b),Ee.scissor(z),Ee.setScissorTest(q),ce){const Se=Ne.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Se.__webglTexture,V)}else if(me){const Se=Ne.get(T.texture),De=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Se.__webglTexture,V||0,De)}C=-1},this.readRenderTargetPixels=function(T,O,V,D,X,ce,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ne.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ee.bindFramebuffer(N.FRAMEBUFFER,Me);try{const Se=T.texture,De=Se.format,ye=Se.type;if(De!==en&&ue.convert(De)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Re=ye===xr&&(xe.has("EXT_color_buffer_half_float")||we.isWebGL2&&xe.has("EXT_color_buffer_float"));if(ye!==kn&&ue.convert(ye)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ye===Vn&&(we.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Re){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-D&&V>=0&&V<=T.height-X&&N.readPixels(O,V,D,X,ue.convert(De),ue.convert(ye),ce)}finally{const Se=w!==null?Ne.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Se)}}},this.copyFramebufferToTexture=function(T,O,V=0){const D=Math.pow(2,-V),X=Math.floor(O.image.width*D),ce=Math.floor(O.image.height*D);Pe.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,T.x,T.y,X,ce),Ee.unbindTexture()},this.copyTextureToTexture=function(T,O,V,D=0){const X=O.image.width,ce=O.image.height,me=ue.convert(V.format),Me=ue.convert(V.type);Pe.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,D,T.x,T.y,X,ce,me,Me,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,D,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,me,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,D,T.x,T.y,me,Me,O.image),D===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V,D,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=T.max.x-T.min.x+1,me=T.max.y-T.min.y+1,Me=T.max.z-T.min.z+1,Se=ue.convert(D.format),De=ue.convert(D.type);let ye;if(D.isData3DTexture)Pe.setTexture3D(D,0),ye=N.TEXTURE_3D;else if(D.isDataArrayTexture)Pe.setTexture2DArray(D,0),ye=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const Re=N.getParameter(N.UNPACK_ROW_LENGTH),Je=N.getParameter(N.UNPACK_IMAGE_HEIGHT),et=N.getParameter(N.UNPACK_SKIP_PIXELS),cn=N.getParameter(N.UNPACK_SKIP_ROWS),On=N.getParameter(N.UNPACK_SKIP_IMAGES),it=V.isCompressedTexture?V.mipmaps[0]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,it.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,it.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(ye,X,O.x,O.y,O.z,ce,me,Me,Se,De,it.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ye,X,O.x,O.y,O.z,ce,me,Me,Se,it.data)):N.texSubImage3D(ye,X,O.x,O.y,O.z,ce,me,Me,Se,De,it),N.pixelStorei(N.UNPACK_ROW_LENGTH,Re),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Je),N.pixelStorei(N.UNPACK_SKIP_PIXELS,et),N.pixelStorei(N.UNPACK_SKIP_ROWS,cn),N.pixelStorei(N.UNPACK_SKIP_IMAGES,On),X===0&&D.generateMipmaps&&N.generateMipmap(ye),Ee.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Pe.setTextureCube(T,0):T.isData3DTexture?Pe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Pe.setTexture2DArray(T,0):Pe.setTexture2D(T,0),Ee.unbindTexture()},this.resetState=function(){S=0,A=0,w=null,Ee.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?li:Ul}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===li?Te:hn}}class ug extends Gc{}ug.prototype.isWebGL1Renderer=!0;class hg extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ba extends Ln{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const _=[],m=n/2;let d=0;M(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(p,2));function M(){const E=new B,S=new B;let A=0;const w=(t-e)/n;for(let C=0;C<=s;C++){const x=[],b=C/s,z=b*(t-e)+e;for(let q=0;q<=i;q++){const L=q/i,U=L*l+o,I=Math.sin(U),$=Math.cos(U);S.x=z*I,S.y=-b*n+m,S.z=z*$,f.push(S.x,S.y,S.z),E.set(I,w,$).normalize(),h.push(E.x,E.y,E.z),p.push(L,1-b),x.push(g++)}_.push(x)}for(let C=0;C<i;C++)for(let x=0;x<s;x++){const b=_[x][C],z=_[x+1][C],q=_[x+1][C+1],L=_[x][C+1];u.push(b,z,L),u.push(z,q,L),A+=6}c.addGroup(d,A,0),d+=A}function v(E){const S=g,A=new Be,w=new B;let C=0;const x=E===!0?e:t,b=E===!0?1:-1;for(let q=1;q<=i;q++)f.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),g++;const z=g;for(let q=0;q<=i;q++){const U=q/i*l+o,I=Math.cos(U),$=Math.sin(U);w.x=x*$,w.y=m*b,w.z=x*I,f.push(w.x,w.y,w.z),h.push(0,b,0),A.x=I*.5+.5,A.y=$*.5*b+.5,p.push(A.x,A.y),g++}for(let q=0;q<i;q++){const L=S+q,U=z+q;E===!0?u.push(U,U+1,L):u.push(U+1,U,L),C+=3}c.addGroup(d,C,E===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class za extends Ln{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new B,h=new B,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const M=[],v=d/n;let E=0;d===0&&a===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){const A=S/t;f.x=-e*Math.cos(i+A*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(i+A*s)*Math.sin(a+v*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(A+E,1-v),M.push(c++)}u.push(M)}for(let d=0;d<n;d++)for(let M=0;M<t;M++){const v=u[d][M+1],E=u[d][M],S=u[d+1][M],A=u[d+1][M+1];(d!==0||a>0)&&p.push(v,E,A),(d!==n-1||l<Math.PI)&&p.push(E,S,A)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fg extends wr{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class dg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kc(){return(typeof performance=="undefined"?Date:performance).now()}""+"\\[\\]\\.:\\/".replace("\\.",""),typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:js}})),typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=js);function Dn(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Hc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ar={duration:.5,overwrite:!1,delay:0},Ga,_t,$e,Yt=1e8,Ge=1/Yt,ka=Math.PI*2,pg=ka/4,mg=0,Vc=Math.sqrt,_g=Math.cos,gg=Math.sin,ot=function(e){return typeof e=="string"},Ke=function(e){return typeof e=="function"},Un=function(e){return typeof e=="number"},Ha=function(e){return typeof e=="undefined"},pn=function(e){return typeof e=="object"},wt=function(e){return e!==!1},Va=function(){return typeof window!="undefined"},Es=function(e){return Ke(e)||ot(e)},Wc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gt=Array.isArray,Wa=/(?:-?\.?\d|\.)+/gi,Xc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,or=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qc=/[+-]=-?[.\d]+/,Yc=/[^,'"\[\]\s]+/gi,vg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,jt,qa,Ya,Gt={},ys={},jc,$c=function(e){return(ys=Mi(e,Gt))&&Lt},ja=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ts=function(e,t){return!t&&console.warn(e)},Kc=function(e,t){return e&&(Gt[e]=t)&&ys&&(ys[e]=t)||Gt},Pr=function(){return 0},xg={suppressEvents:!0,isStart:!0,kill:!1},bs={suppressEvents:!0,kill:!1},Mg={suppressEvents:!0},$a={},jn=[],Ka={},Zc,kt={},Za={},Jc=30,As=[],Ja="",Qa=function(e){var t=e[0],n,i;if(pn(t)||Ke(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=As.length;i--&&!As[i].targetTest(t););n=As[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new wu(e[i],n)))||e.splice(i,1);return e},xi=function(e){return e._gsap||Qa(Zt(e))[0]._gsap},Qc=function(e,t,n){return(n=e[t])&&Ke(n)?e[t]():Ha(n)&&e.getAttribute&&e.getAttribute(t)||n},Rt=function(e,t){return(e=e.split(",")).forEach(t)||e},Qe=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},lr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Sg=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},ws=function(){var e=jn.length,t=jn.slice(0),n,i;for(Ka={},jn.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},eu=function(e,t,n,i){jn.length&&!_t&&ws(),e.render(t,n,i||_t&&t<0&&(e._initted||e._startAt)),jn.length&&!_t&&ws()},tu=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Yc).length<2?t:ot(e)?e.trim():e},nu=function(e){return e},$t=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Eg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mi=function(e,t){for(var n in t)e[n]=t[n];return e},iu=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=pn(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Rs=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Lr=function(e){var t=e.parent||Xe,n=e.keyframes?Eg(gt(e.keyframes)):$t;if(wt(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},yg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},ru=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Cs=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$n=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Si=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Tg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},eo=function(e,t,n,i){return e._startAt&&(_t?e._startAt.revert(bs):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},bg=function r(e){return!e||e._ts&&r(e.parent)},su=function(e){return e._repeat?cr(e._tTime,e=e.duration()+e._rDelay)*e:0},cr=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ps=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ls=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ge)||0))},Ds=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=ft(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ls(e),n._dirty||Si(n,e)),e},au=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ps(e.rawTime(),t),(!t._dur||Ur(0,t.totalDuration(),n)-t._tTime>Ge)&&t.render(n,!0)),Si(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ge}},mn=function(e,t,n,i){return t.parent&&$n(t),t._start=ft((Un(n)?n:n||e!==Xe?Kt(e,n,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),ru(e,t,"_first","_last",e._sort?"_start":0),to(t)||(e._recent=t),i||au(e,t),e._ts<0&&Ds(e,e._tTime),e},ou=function(e,t){return(Gt.ScrollTrigger||ja("scrollTrigger",t))&&Gt.ScrollTrigger.create(t,e)},lu=function(e,t,n,i,s){if(uo(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!_t&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Zc!==Ht.frame)return jn.push(e),e._lazy=[s,i],1},Ag=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},to=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},wg=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Ag(e)&&!(!e._initted&&to(e))||(e._ts<0||e._dp._ts<0)&&!to(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Ur(0,e._tDur,t),u=cr(l,o),e._yoyo&&u&1&&(a=1-a),u!==cr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||_t||i||e._zTime===Ge||!t&&e._zTime){if(!e._initted&&lu(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Ge:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&eo(e,t,n,!0),e._onUpdate&&!n&&Jt(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Jt(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&$n(e,1),!n&&!_t&&(Jt(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Rg=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},ur=function(e,t,n,i){var s=e._repeat,a=ft(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ft(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Ds(e,e._tTime=e._tDur*o),e.parent&&Ls(e),n||Si(e.parent,e),e},cu=function(e){return e instanceof Ct?Si(e):ur(e,e._dur)},Cg={_start:0,endTime:Pr,totalDuration:Pr},Kt=function r(e,t,n){var i=e.labels,s=e._recent||Cg,a=e.duration()>=Yt?s.endTime(!1):e._dur,o,l,c;return ot(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(gt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Dr=function(e,t,n){var i=Un(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=wt(l.vars.inherit)&&l.parent;a.immediateRender=wt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new nt(t[0],a,t[s+1])},Kn=function(e,t){return e||e===0?t(e):t},Ur=function(e,t,n){return n<e?e:n>t?t:n},vt=function(e,t){return!ot(e)||!(t=vg.exec(e))?"":t[1]},Pg=function(e,t,n){return Kn(n,function(i){return Ur(e,t,i)})},no=[].slice,uu=function(e,t){return e&&pn(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&pn(e[0]))&&!e.nodeType&&e!==jt},Lg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return ot(i)&&!t||uu(i,1)?(s=n).push.apply(s,Zt(i)):n.push(i)})||n},Zt=function(e,t,n){return $e&&!t&&$e.selector?$e.selector(e):ot(e)&&!n&&(qa||!fr())?no.call((t||Ya).querySelectorAll(e),0):gt(e)?Lg(e,n):uu(e)?no.call(e,0):e?[e]:[]},io=function(e){return e=Zt(e)[0]||Ts("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Zt(t,n.querySelectorAll?n:n===e?Ts("Invalid scope")||Ya.createElement("div"):e)}},hu=function(e){return e.sort(function(){return .5-Math.random()})},fu=function(e){if(Ke(e))return e;var t=pn(e)?e:{each:e},n=Ei(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return ot(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,p,g){var _=(g||t).length,m=a[_],d,M,v,E,S,A,w,C,x;if(!m){if(x=t.grid==="auto"?0:(t.grid||[1,Yt])[1],!x){for(w=-Yt;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x--}for(m=a[_]=[],d=l?Math.min(x,_)*u-.5:i%x,M=x===Yt?0:l?_*f/x-.5:i/x|0,w=0,C=Yt,A=0;A<_;A++)v=A%x-d,E=M-(A/x|0),m[A]=S=c?Math.abs(c==="y"?E:v):Vc(v*v+E*E),S>w&&(w=S),S<C&&(C=S);i==="random"&&hu(m),m.max=w-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=vt(t.amount||t.each)||0,n=n&&_<0?Tu(n):n}return _=(m[h]-m.min)/m.max||0,ft(m.b+(n?n(_):_)*m.v)+m.u}},ro=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=ft(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Un(n)?0:vt(n))}},du=function(e,t){var n=gt(e),i,s;return!n&&pn(e)&&(i=n=e.radius||Yt,e.values?(e=Zt(e.values),(s=!Un(e[0]))&&(i*=i)):e=ro(e.increment)),Kn(t,n?Ke(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Yt,u=0,f=e.length,h,p;f--;)s?(h=e[f].x-o,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Un(a)?u:u+vt(a)}:ro(e))},pu=function(e,t,n,i){return Kn(gt(e)?!t:n===!0?!!(n=0):!i,function(){return gt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},Dg=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Ug=function(e,t){return function(n){return e(parseFloat(n))+(t||vt(n))}},Ig=function(e,t,n){return _u(e,t,0,1,n)},mu=function(e,t,n){return Kn(n,function(i){return e[~~t(i)]})},Ng=function r(e,t,n){var i=t-e;return gt(e)?mu(e,r(0,e.length),t):Kn(n,function(s){return(i+(s-e)%i)%i+e})},Og=function r(e,t,n){var i=t-e,s=i*2;return gt(e)?mu(e,r(0,e.length-1),t):Kn(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ir=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Yc:Wa),n+=e.substr(t,i-t)+pu(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},_u=function(e,t,n,i,s){var a=t-e,o=i-n;return Kn(s,function(l){return n+((l-e)/a*o||0)})},Fg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=ot(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(gt(e)&&!gt(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Mi(gt(e)?[]:{},e));if(!u){for(l in t)lo.call(o,e,l,"get",t[l]);s=function(g){return po(g,o)||(a?e.p:e)}}}return Kn(n,s)},gu=function(e,t,n){var i=e.labels,s=Yt,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Jt=function(e,t,n){var i=e.vars,s=i[t],a=$e,o=e._ctx,l,c,u;if(!!s)return l=i[t+"Params"],c=i.callbackScope||e,n&&jn.length&&ws(),o&&($e=o),u=l?s.apply(c,l):s.call(c),$e=a,u},Nr=function(e){return $n(e),e.scrollTrigger&&e.scrollTrigger.kill(!!_t),e.progress()<1&&Jt(e,"onInterrupt"),e},hr,vu=[],xu=function(e){if(Va()&&e){e=!e.name&&e.default||e;var t=e.name,n=Ke(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Pr,render:po,add:lo,kill:Qg,modifier:Jg,rawVars:0},a={targetTest:0,get:0,getSetter:fo,aliases:{},register:0};if(fr(),e!==i){if(kt[t])return;$t(i,$t(Rs(e,s),a)),Mi(i.prototype,Mi(s,Rs(e,a))),kt[i.prop=t]=i,e.targetTest&&(As.push(i),$a[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Kc(t,i),e.register&&e.register(Lt,i,Pt)}else e&&vu.push(e)},ke=255,Or={aqua:[0,ke,ke],lime:[0,ke,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ke],navy:[0,0,128],white:[ke,ke,ke],olive:[128,128,0],yellow:[ke,ke,0],orange:[ke,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ke,0,0],pink:[ke,192,203],cyan:[0,ke,ke],transparent:[ke,ke,ke,0]},so=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ke+.5|0},Mu=function(e,t,n){var i=e?Un(e)?[e>>16,e>>8&ke,e&ke]:0:Or.black,s,a,o,l,c,u,f,h,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Or[e])i=Or[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ke,i&ke,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ke,e&ke]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Wa),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=so(l+1/3,s,a),i[1]=so(l,s,a),i[2]=so(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Xc),n&&i.length<4&&(i[3]=1),i}else i=e.match(Wa)||Or.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ke,a=i[1]/ke,o=i[2]/ke,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),l=f===s?(a-o)/p+(a<o?6:0):f===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Su=function(e){var t=[],n=[],i=-1;return e.split(Zn).forEach(function(s){var a=s.match(or)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Eu=function(e,t,n){var i="",s=(e+i).match(Zn),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Mu(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Su(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Zn,"1").split(or),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Zn),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Zn=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Or)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Bg=/hsl[a]?\(/,yu=function(e){var t=e.join(" "),n;if(Zn.lastIndex=0,Zn.test(t))return n=Bg.test(t),e[1]=Eu(e[1],n),e[0]=Eu(e[0],n,Su(e[1])),!0},Fr,Ht=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,p,g=function _(m){var d=r()-i,M=m===!0,v,E,S,A;if(d>e&&(n+=d-t),i+=d,S=i-n,v=S-a,(v>0||M)&&(A=++f.frame,h=S-f.time*1e3,f.time=S=S/1e3,a+=v+(v>=s?4:s-v),E=1),M||(l=c(_)),E)for(p=0;p<o.length;p++)o[p](S,h,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){jc&&(!qa&&Va()&&(jt=qa=window,Ya=jt.document||{},Gt.gsap=Lt,(jt.gsapVersions||(jt.gsapVersions=[])).push(Lt.version),$c(ys||jt.GreenSockGlobals||!jt.gsap&&jt||{}),u=jt.requestAnimationFrame,vu.forEach(xu)),l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},Fr=1,g(2))},sleep:function(){(u?jt.cancelAnimationFrame:clearTimeout)(l),Fr=0,c=Pr},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,d,M){var v=d?function(E,S,A,w){m(E,S,A,w),f.remove(v)}:m;return f.remove(m),o[M?"unshift":"push"](v),fr(),v},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f}(),fr=function(){return!Fr&&Ht.wake()},Ie={},zg=/^[\d.\-M][\d.\-,\s]/,Gg=/["']/g,kg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Gg,"").trim():+c,i=l.substr(o+1).trim();return t},Hg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Vg=function(e){var t=(e+"").split("("),n=Ie[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[kg(t[1])]:Hg(e).split(",").map(tu)):Ie._CE&&zg.test(e)?Ie._CE("",e):n},Tu=function(e){return function(t){return 1-e(1-t)}},bu=function r(e,t){for(var n=e._first,i;n;)n instanceof Ct?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Ei=function(e,t){return e&&(Ke(e)?e:Ie[e]||Vg(e))||t},yi=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Rt(e,function(o){Ie[o]=Gt[o]=s,Ie[a=o.toLowerCase()]=n;for(var l in s)Ie[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ie[o+"."+l]=s[l]}),s},Au=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ao=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/ka*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*gg((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Au(o);return s=ka/s,l.config=function(c,u){return r(e,c,u)},l},oo=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Au(n);return i.config=function(s){return r(e,s)},i};Rt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;yi(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),Ie.Linear.easeNone=Ie.none=Ie.Linear.easeIn,yi("Elastic",ao("in"),ao("out"),ao()),function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};yi("Bounce",function(a){return 1-s(1-a)},s)}(7.5625,2.75),yi("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),yi("Circ",function(r){return-(Vc(1-r*r)-1)}),yi("Sine",function(r){return r===1?1:-_g(r*pg)+1}),yi("Back",oo("in"),oo("out"),oo()),Ie.SteppedEase=Ie.steps=Gt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Ge;return function(o){return((i*Ur(0,a,o)|0)+s)*n}}},ar.ease=Ie["quad.out"],Rt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ja+=r+","+r+"Params,"});var wu=function(e,t){this.id=mg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Qc,this.set=t?t.getSetter:fo},Br=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ur(this,+t.duration,1,1),this.data=t.data,$e&&(this._ctx=$e,$e.data.push(this)),Fr||Ht.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ur(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(fr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ds(this,n),!s._dp||s.parent||au(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&mn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ge||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),eu(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+su(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+su(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?cr(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Ge?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ps(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ge?0:this._rts,this.totalTime(Ur(-Math.abs(this._delay),this._tDur,i),!0),Ls(this),Tg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(fr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ge&&(this._tTime-=Ge)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&mn(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wt(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ps(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Mg);var i=_t;return _t=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),_t=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cu(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,cu(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Kt(this,n),wt(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,wt(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ge:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ge,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ge)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Ke(n)?n:nu,o=function(){var c=i.then;i.then=null,Ke(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Nr(this)},r}();$t(Br.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ge,_prom:0,_ps:!1,_rts:1});var Ct=function(r){Hc(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wt(n.sortChildren),Xe&&mn(n.parent||Xe,Dn(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ou(Dn(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Dr(0,arguments,this),this},t.from=function(i,s,a){return Dr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Dr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Lr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new nt(i,s,Kt(this,a),1),this},t.call=function(i,s,a){return mn(this,nt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new nt(i,a,Kt(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Lr(a).immediateRender=wt(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Lr(o).immediateRender=wt(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ft(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,p,g,_,m,d,M,v,E,S,A,w;if(this!==Xe&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,E=this._start,v=this._ts,d=!v,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=ft(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),S=cr(this._tTime,m),!o&&this._tTime&&S!==_&&this._tTime-S*m-this._dur<=0&&(S=_),A&&_&1&&(h=c-h,w=1),_!==S&&!this._lock){var C=A&&S&1,x=C===(A&&_&1);if(_<S&&(C=!C),o=C?0:u%c?c:u,this._lock=1,this.render(o||(w?0:ft(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Jt(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;bu(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=Rg(this,ft(o),ft(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!_&&(Jt(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||h>=p._start)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,a),h!==this._time||!this._ts&&!d){M=0,g&&(u+=this._zTime=-Ge);break}}p=g}else{p=this._last;for(var b=i<0?i:h;p;){if(g=p._prev,(p._act||b<=p._end)&&p._ts&&M!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,a||_t&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){M=0,g&&(u+=this._zTime=b?-Ge:Ge);break}}p=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-Ge)._zTime=h>=o?1:-1,this._ts))return this._start=E,Ls(this),this.render(i,s,a);this._onUpdate&&!s&&Jt(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&$n(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Jt(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Un(s)||(s=Kt(this,s,i)),!(i instanceof Br)){if(gt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(ot(i))return this.addLabel(i,s);if(Ke(i))i=nt.delayedCall(0,i);else return this}return this!==i?mn(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Yt);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof nt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return ot(i)?this.removeLabel(i):Ke(i)?this.killTweensOf(i):(Cs(this,i),i===this._recent&&(this._recent=this._last),Si(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Ht.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Kt(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=nt.delayedCall(0,s||Pr,a);return o.data="isPause",this._hasPause=1,mn(this,o,Kt(this,i))},t.removePause=function(i){var s=this._first;for(i=Kt(this,i);s;)s._start===i&&s.data==="isPause"&&$n(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Jn!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Zt(i),l=this._first,c=Un(s),u;l;)l instanceof nt?Sg(l._targets,o)&&(c?(!Jn||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Kt(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,p,g=nt.to(a,$t({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ge,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&ur(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,$t({startAt:{time:Kt(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),gu(this,Kt(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),gu(this,Kt(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ge)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Si(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Si(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Yt,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,mn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ur(a,a===Xe&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Xe._ts&&(eu(Xe,Ps(i,Xe)),Zc=Ht.frame),Ht.frame>=Jc){Jc+=zt.autoSleep||120;var s=Xe._first;if((!s||!s._ts)&&zt.autoSleep&&Ht._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ht.sleep()}}},e}(Br);$t(Ct.prototype,{_lock:0,_hasPause:0,_forcing:0});var Wg=function(e,t,n,i,s,a,o){var l=new Pt(this._pt,e,t,0,1,Uu,null,s),c=0,u=0,f,h,p,g,_,m,d,M;for(l.b=n,l.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Ir(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Xa)||[];f=Xa.exec(i);)g=f[0],_=i.substring(c,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?lr(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(qc.test(i)||d)&&(l.e=0),this._pt=l,l},lo=function(e,t,n,i,s,a,o,l,c,u){Ke(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Ke(f)?c?e[t.indexOf("set")||!Ke(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,p=Ke(f)?c?$g:Lu:ho,g;if(ot(i)&&(~i.indexOf("random(")&&(i=Ir(i)),i.charAt(1)==="="&&(g=lr(h,i)+(vt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||co)return!isNaN(h*i)&&i!==""?(g=new Pt(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?Zg:Du,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&ja(t,i),Wg.call(this,e,t,h,i,p,l||zt.stringFilter,c))},Xg=function(e,t,n,i,s){if(Ke(e)&&(e=zr(e,s,t,n,i)),!pn(e)||e.style&&e.nodeType||gt(e)||Wc(e))return ot(e)?zr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=zr(e[o],s,t,n,i);return a},Ru=function(e,t,n,i,s,a){var o,l,c,u;if(kt[e]&&(o=new kt[e]).init(s,o.rawVars?t[e]:Xg(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Pt(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==hr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Jn,co,uo=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=e._dur,d=e._startAt,M=e._targets,v=e.parent,E=v&&v.data==="nested"?v.vars.targets:M,S=e._overwrite==="auto"&&!Ga,A=e.timeline,w,C,x,b,z,q,L,U,I,$,G,H,K;if(A&&(!g||!s)&&(s="none"),e._ease=Ei(s,ar.ease),e._yEase=p?Tu(Ei(p===!0?s:p,ar.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!A&&!!i.runBackwards,!A||g&&!i.stagger){if(U=M[0]?xi(M[0]).harness:0,H=U&&i[U.prop],w=Rs(i,$a),d&&(d._zTime<0&&d.progress(1),t<0&&h&&o&&!_?d.render(-1,!0):d.revert(h&&m?bs:xg),d._lazy=0),a){if($n(e._startAt=nt.set(M,$t({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!d&&wt(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t||!o&&!_)&&e._startAt.revert(bs),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!d){if(t&&(o=!1),x=$t({overwrite:!1,data:"isFromStart",lazy:o&&!d&&wt(l),immediateRender:o,stagger:0,parent:v},w),H&&(x[U.prop]=H),$n(e._startAt=nt.set(M,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(_t?e._startAt.revert(bs):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Ge,Ge);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&wt(l)||l&&!m,C=0;C<M.length;C++){if(z=M[C],L=z._gsap||Qa(M)[C]._gsap,e._ptLookup[C]=$={},Ka[L.id]&&jn.length&&ws(),G=E===M?C:E.indexOf(z),U&&(I=new U).init(z,H||w,e,G,E)!==!1&&(e._pt=b=new Pt(e._pt,z,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Z){$[Z]=b}),I.priority&&(q=1)),!U||H)for(x in w)kt[x]&&(I=Ru(x,w,e,G,z,E))?I.priority&&(q=1):$[x]=b=lo.call(e,z,x,"get",w[x],G,E,0,i.stringFilter);e._op&&e._op[C]&&e.kill(z,e._op[C]),S&&e._pt&&(Jn=e,Xe.killTweensOf(z,$,e.globalTime(t)),K=!e.parent,Jn=0),e._pt&&l&&(Ka[L.id]=1)}q&&Iu(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,g&&t<=0&&A.render(Yt,!0,!0)},qg=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,f,h;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,h=e._targets.length;h--;){if(c=f[h][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return co=1,e.vars[t]="+=0",uo(e,o),co=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Qe(n)+vt(u.e)),u.b&&(u.b=c.s+vt(u.b))},Yg=function(e,t){var n=e[0]?xi(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Mi({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},jg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(gt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},zr=function(e,t,n,i,s){return Ke(e)?e.call(t,n,i,s):ot(e)&&~e.indexOf("random(")?Ir(e):e},Cu=Ja+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Pu={};Rt(Cu+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Pu[r]=1});var nt=function(r){Hc(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Lr(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,M=i.parent||Xe,v=(gt(n)||Wc(n)?Un(n[0]):"length"in i)?[n]:Zt(n),E,S,A,w,C,x,b,z;if(o._targets=v.length?Qa(v):Ts("GSAP target "+n+" not found. https://greensock.com",!zt.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||h||Es(c)||Es(u)){if(i=o.vars,E=o.timeline=new Ct({data:"nested",defaults:_||{},targets:M&&M.data==="nested"?M.vars.targets:v}),E.kill(),E.parent=E._dp=Dn(o),E._start=0,h||Es(c)||Es(u)){if(w=v.length,b=h&&fu(h),pn(h))for(C in h)~Cu.indexOf(C)&&(z||(z={}),z[C]=h[C]);for(S=0;S<w;S++)A=Rs(i,Pu),A.stagger=0,d&&(A.yoyoEase=d),z&&Mi(A,z),x=v[S],A.duration=+zr(c,Dn(o),S,x,v),A.delay=(+zr(u,Dn(o),S,x,v)||0)-o._delay,!h&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),E.to(x,A,b?b(S,x,v):0),E._ease=Ie.none;E.duration()?c=u=0:o.timeline=0}else if(g){Lr($t(E.vars.defaults,{ease:"none"})),E._ease=Ei(g.ease||i.ease||"none");var q=0,L,U,I;if(gt(g))g.forEach(function($){return E.to(v,$,">")}),E.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||jg(C,g[C],A,g.easeEach);for(C in A)for(L=A[C].sort(function($,G){return $.t-G.t}),q=0,S=0;S<L.length;S++)U=L[S],I={ease:U.e,duration:(U.t-(S?L[S-1].t:0))/100*c},I[C]=U.v,E.to(v,I,q),q+=I.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!Ga&&(Jn=Dn(o),Xe.killTweensOf(v),Jn=0),mn(M,Dn(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===ft(M._time)&&wt(f)&&bg(Dn(o))&&M.data!=="nested")&&(o._tTime=-Ge,o.render(Math.max(0,-u)||0)),m&&ou(Dn(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ge&&!u?l:i<Ge?0:i,h,p,g,_,m,d,M,v,E;if(!c)wg(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=ft(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===f/_&&(h=c,g--),h>c&&(h=c)),d=this._yoyo&&g&1,d&&(E=this._yEase,h=c-h),m=cr(this._tTime,_),h===o&&!a&&this._initted)return this._tTime=f,this;g!==m&&(v&&this._yEase&&bu(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=a=1,this.render(ft(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(lu(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(E||this._ease)(h/c),this._from&&(this.ratio=M=1-M),h&&!o&&!s&&!g&&(Jt(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(M,p.d),p=p._next;v&&v.render(i<0?i:!h&&d?-Ge:v._dur*v._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&eo(this,i,s,a),Jt(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Jt(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&eo(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&$n(this,1),!s&&!(u&&!o)&&(f||o||d)&&(Jt(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){Fr||Ht.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||uo(this,l),c=this._ease(l/this._dur),qg(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(Ds(this,0),this.parent||ru(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Nr(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Jn&&Jn.vars.overwrite!==!0)._first||Nr(this),this.parent&&a!==this.timeline.totalDuration()&&ur(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Zt(i):o,c=this._ptLookup,u=this._pt,f,h,p,g,_,m,d;if((!s||s==="all")&&yg(o,l))return s==="all"&&(this._pt=0),Nr(this);for(f=this._op=this._op||[],s!=="all"&&(ot(s)&&(_={},Rt(s,function(M){return _[M]=1}),s=_),s=Yg(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){h=c[d],s==="all"?(f[d]=s,g=h,p={}):(p=f[d]=f[d]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Cs(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Nr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Dr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Dr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Xe.killTweensOf(i,s,a)},e}(Br);$t(nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),Rt("staggerTo,staggerFrom,staggerFromTo",function(r){nt[r]=function(){var e=new Ct,t=no.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var ho=function(e,t,n){return e[t]=n},Lu=function(e,t,n){return e[t](n)},$g=function(e,t,n,i){return e[t](i.fp,n)},Kg=function(e,t,n){return e.setAttribute(t,n)},fo=function(e,t){return Ke(e[t])?Lu:Ha(e[t])&&e.setAttribute?Kg:ho},Du=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Zg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Uu=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},po=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Jg=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Qg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Cs(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ev=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Iu=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Pt=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Du,this.d=l||this,this.set=c||ho,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=ev,this.m=n,this.mt=s,this.tween=i},r}();Rt(Ja+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return $a[r]=1}),Gt.TweenMax=Gt.TweenLite=nt,Gt.TimelineLite=Gt.TimelineMax=Ct,Xe=new Ct({sortChildren:!1,defaults:ar,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),zt.stringFilter=yu;var Ti=[],Us={},tv=[],Nu=0,nv=0,mo=function(e){return(Us[e]||tv).map(function(t){return t()})},_o=function(){var e=Date.now(),t=[];e-Nu>2&&(mo("matchMediaInit"),Ti.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=jt.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),mo("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Nu=e,mo("matchMedia"))},Ou=function(){function r(t,n){this.selector=n&&io(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nv++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ke(n)&&(s=i,i=n,n=Ke);var a=this,o=function(){var c=$e,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=io(s)),$e=a,f=i.apply(a,arguments),Ke(f)&&a._r.push(f),$e=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ke?o(a):n?a[n]=o:o},e.ignore=function(n){var i=$e;$e=null,n(this),$e=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1/0}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof nt)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i)for(var o=Ti.length;o--;)Ti[o].id===this.id&&Ti.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),iv=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){pn(n)||(n={matches:n});var a=new Ou(0,s||this.scope),o=a.conditions={},l,c,u;$e&&!a.selector&&(a.selector=$e.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=jt.matchMedia(n[c]),l&&(Ti.indexOf(a)<0&&Ti.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(_o):l.addEventListener("change",_o)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Is={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return xu(i)})},timeline:function(e){return new Ct(e)},getTweensOf:function(e,t){return Xe.getTweensOf(e,t)},getProperty:function(e,t,n,i){ot(e)&&(e=Zt(e)[0]);var s=xi(e||{}).get,a=n?nu:tu;return n==="native"&&(n=""),e&&(t?a((kt[t]&&kt[t].get||s)(e,t,n,i)):function(o,l,c){return a((kt[o]&&kt[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Zt(e),e.length>1){var i=e.map(function(u){return Lt.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=kt[t],o=xi(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;hr._pt=0,f.init(e,n?u+n:u,hr,0,[e]),f.render(1,f),hr._pt&&po(1,hr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Lt.to(e,Mi((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Xe.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ei(e.ease,ar.ease)),iu(ar,e||{})},config:function(e){return iu(zt,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!kt[o]&&!Gt[o]&&Ts(t+" effect requires "+o+" plugin.")}),Za[t]=function(o,l,c){return n(Zt(o),$t(l||{},s),c)},a&&(Ct.prototype[t]=function(o,l,c){return this.add(Za[t](o,pn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ie[e]=Ei(t)},parseEase:function(e,t){return arguments.length?Ei(e,t):Ie},getById:function(e){return Xe.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Ct(e),i,s;for(n.smoothChildTiming=wt(e.smoothChildTiming),Xe.remove(n),n._dp=0,n._time=n._tTime=Xe._time,i=Xe._first;i;)s=i._next,(t||!(!i._dur&&i instanceof nt&&i.vars.onComplete===i._targets[0]))&&mn(n,i,i._start-i._delay),i=s;return mn(Xe,n,0),n},context:function(e,t){return e?new Ou(e,t):$e},matchMedia:function(e){return new iv(e)},matchMediaRefresh:function(){return Ti.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_o()},addEventListener:function(e,t){var n=Us[e]||(Us[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Us[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Ng,wrapYoyo:Og,distribute:fu,random:pu,snap:du,normalize:Ig,getUnit:vt,clamp:Pg,splitColor:Mu,toArray:Zt,selector:io,mapRange:_u,pipe:Dg,unitize:Ug,interpolate:Fg,shuffle:hu},install:$c,effects:Za,ticker:Ht,updateRoot:Ct.updateRoot,plugins:kt,globalTimeline:Xe,core:{PropTween:Pt,globals:Kc,Tween:nt,Timeline:Ct,Animation:Br,getCache:xi,_removeLinkedListItem:Cs,reverting:function(){return _t},context:function(e){return e&&$e&&($e.data.push(e),e._ctx=$e),$e},suppressOverwrites:function(e){return Ga=e}}};Rt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Is[r]=nt[r]}),Ht.add(Ct.updateRoot),hr=Is.to({},{duration:0});var rv=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},sv=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=rv(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},go=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(ot(s)&&(l={},Rt(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}sv(o,s)}}}},Lt=Is.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)_t?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},go("roundProps",ro),go("modifiers"),go("snap",du))||Is;nt.version=Ct.version=Lt.version="3.12.2",jc=1,Va()&&fr(),Ie.Power0,Ie.Power1,Ie.Power2,Ie.Power3,Ie.Power4,Ie.Linear,Ie.Quad,Ie.Cubic,Ie.Quart,Ie.Quint,Ie.Strong,Ie.Elastic,Ie.Back,Ie.SteppedEase,Ie.Bounce,Ie.Sine,Ie.Expo,Ie.Circ;/*!
 * CSSPlugin 3.12.2
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fu,Qn,dr,vo,bi,Bu,xo,av=function(){return typeof window!="undefined"},In={},Ai=180/Math.PI,pr=Math.PI/180,mr=Math.atan2,zu=1e8,Mo=/([A-Z])/g,ov=/(left|right|width|margin|padding|x)/i,lv=/[\s,\(]\S/,_n={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},So=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},cv=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},uv=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hv=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gu=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ku=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},fv=function(e,t,n){return e.style[t]=n},dv=function(e,t,n){return e.style.setProperty(t,n)},pv=function(e,t,n){return e._gsap[t]=n},mv=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},_v=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},gv=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},qe="transform",ln=qe+"Origin",vv=function r(e,t){var n=this,i=this.target,s=i.style;if(e in In&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_n[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Nn(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Nn(i,e);else return _n.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(qe)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ln,t,"")),e=qe}(s||t)&&this.props.push(e,t,s[e])},Hu=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},xv=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Mo,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=xo(),(!s||!s.isStart)&&!n[qe]&&(Hu(n),i.uncache=1)}},Vu=function(e,t){var n={target:e,props:[],revert:xv,save:vv};return e._gsap||Lt.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Wu,Eo=function(e,t){var n=Qn.createElementNS?Qn.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qn.createElement(e);return n.style?n:Qn.createElement(e)},gn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Mo,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,_r(t)||t,1)||""},Xu="O,Moz,ms,Ms,Webkit".split(","),_r=function(e,t,n){var i=t||bi,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Xu[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Xu[a]:"")+e},yo=function(){av()&&window.document&&(Fu=window,Qn=Fu.document,dr=Qn.documentElement,bi=Eo("div")||{style:{}},Eo("div"),qe=_r(qe),ln=qe+"Origin",bi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wu=!!_r("perspective"),xo=Lt.core.reverting,vo=1)},To=function r(e){var t=Eo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(dr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),dr.removeChild(t),this.style.cssText=s,a},qu=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Yu=function(e){var t;try{t=e.getBBox()}catch{t=To.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===To||(t=To.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+qu(e,["x","cx","x1"])||0,y:+qu(e,["y","cy","y1"])||0,width:0,height:0}:t},ju=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Yu(e))},Gr=function(e,t){if(t){var n=e.style;t in In&&t!==ln&&(t=qe),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Mo,"-$1").toLowerCase())):n.removeAttribute(t)}},ei=function(e,t,n,i,s,a){var o=new Pt(e._pt,t,n,0,1,a?ku:Gu);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},$u={deg:1,rad:1,turn:1},Mv={grid:1,flex:1},ti=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=bi.style,l=ov.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",p=i==="%",g,_,m,d;return i===a||!s||$u[i]||$u[a]?s:(a!=="px"&&!h&&(s=r(e,t,n,"px")),d=e.getCTM&&ju(e),(p||a==="%")&&(In[t]||~t.indexOf("adius"))?(g=d?e.getBBox()[l?"width":"height"]:e[u],Qe(p?s/g*f:s/100*g)):(o[l?"width":"height"]=f+(h?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Qn||!_.appendChild)&&(_=Qn.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Ht.time&&!m.uncache?Qe(s/m.width*f):((p||a==="%")&&!Mv[gn(_,"display")]&&(o.position=gn(e,"position")),_===e&&(o.position="static"),_.appendChild(bi),g=bi[u],_.removeChild(bi),o.position="absolute",l&&p&&(m=xi(_),m.time=Ht.time,m.width=_[u]),Qe(h?g*s/f:g&&s?f/g*s:0))))},Nn=function(e,t,n,i){var s;return vo||yo(),t in _n&&t!=="transform"&&(t=_n[t],~t.indexOf(",")&&(t=t.split(",")[0])),In[t]&&t!=="transform"?(s=Hr(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Os(gn(e,ln))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ns[t]&&Ns[t](e,t,n)||gn(e,t)||Qc(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ti(e,t,s,n)+n:s},Sv=function(e,t,n,i){if(!n||n==="none"){var s=_r(t,e,1),a=s&&gn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=gn(e,"borderTopColor"))}var o=new Pt(this._pt,e.style,t,0,1,Uu),l=0,c=0,u,f,h,p,g,_,m,d,M,v,E,S;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=gn(e,t)||i,e.style[t]=n),u=[n,i],yu(u),n=u[0],i=u[1],h=n.match(or)||[],S=i.match(or)||[],S.length){for(;f=or.exec(i);)m=f[0],M=i.substring(l,f.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(p=parseFloat(_)||0,E=_.substr((p+"").length),m.charAt(1)==="="&&(m=lr(p,m)+E),d=parseFloat(m),v=m.substr((d+"").length),l=or.lastIndex-v.length,v||(v=v||zt.units[t]||E,l===i.length&&(i+=v,o.e+=v)),E!==v&&(p=ti(e,t,_,v)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:p,c:d-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?ku:Gu;return qc.test(i)&&(o.e=0),this._pt=o,o},Ku={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ev=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ku[n]||n,t[1]=Ku[i]||i,t.join(" ")},yv=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],In[o]&&(l=1,o=o==="transformOrigin"?ln:qe),Gr(n,o);l&&(Gr(n,qe),a&&(a.svg&&n.removeAttribute("transform"),Hr(n,1),a.uncache=1,Hu(i)))}},Ns={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Pt(e._pt,t,n,0,0,yv);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},kr=[1,0,0,1,0,0],Zu={},Ju=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qu=function(e){var t=gn(e,qe);return Ju(t)?kr:t.substr(7).match(Xc).map(Qe)},bo=function(e,t){var n=e._gsap||xi(e),i=e.style,s=Qu(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?kr:s):(s===kr&&!e.offsetParent&&e!==dr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,dr.appendChild(e)),s=Qu(e),l?i.display=l:Gr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):dr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ao=function(e,t,n,i,s,a){var o=e._gsap,l=s||bo(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],M=l[5],v=t.split(" "),E=parseFloat(v[0])||0,S=parseFloat(v[1])||0,A,w,C,x;n?l!==kr&&(w=p*m-g*_)&&(C=E*(m/w)+S*(-_/w)+(_*M-m*d)/w,x=E*(-g/w)+S*(p/w)-(p*M-g*d)/w,E=C,S=x):(A=Yu(e),E=A.x+(~v[0].indexOf("%")?E/100*A.width:E),S=A.y+(~(v[1]||v[0]).indexOf("%")?S/100*A.height:S)),i||i!==!1&&o.smooth?(d=E-c,M=S-u,o.xOffset=f+(d*p+M*_)-d,o.yOffset=h+(d*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=S,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[ln]="0px 0px",a&&(ei(a,o,"xOrigin",c,E),ei(a,o,"yOrigin",u,S),ei(a,o,"xOffset",f,o.xOffset),ei(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+S)},Hr=function(e,t){var n=e._gsap||new wu(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=gn(e,ln)||"0",u,f,h,p,g,_,m,d,M,v,E,S,A,w,C,x,b,z,q,L,U,I,$,G,H,K,Z,F,Y,re,te,ie;return u=f=h=_=m=d=M=v=E=0,p=g=1,n.svg=!!(e.getCTM&&ju(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qe]!=="none"?l[qe]:"")),i.scale=i.rotate=i.translate="none"),w=bo(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Ao(e,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,w)),S=n.xOrigin||0,A=n.yOrigin||0,w!==kr&&(z=w[0],q=w[1],L=w[2],U=w[3],u=I=w[4],f=$=w[5],w.length===6?(p=Math.sqrt(z*z+q*q),g=Math.sqrt(U*U+L*L),_=z||q?mr(q,z)*Ai:0,M=L||U?mr(L,U)*Ai+_:0,M&&(g*=Math.abs(Math.cos(M*pr))),n.svg&&(u-=S-(S*z+A*L),f-=A-(S*q+A*U))):(ie=w[6],re=w[7],Z=w[8],F=w[9],Y=w[10],te=w[11],u=w[12],f=w[13],h=w[14],C=mr(ie,Y),m=C*Ai,C&&(x=Math.cos(-C),b=Math.sin(-C),G=I*x+Z*b,H=$*x+F*b,K=ie*x+Y*b,Z=I*-b+Z*x,F=$*-b+F*x,Y=ie*-b+Y*x,te=re*-b+te*x,I=G,$=H,ie=K),C=mr(-L,Y),d=C*Ai,C&&(x=Math.cos(-C),b=Math.sin(-C),G=z*x-Z*b,H=q*x-F*b,K=L*x-Y*b,te=U*b+te*x,z=G,q=H,L=K),C=mr(q,z),_=C*Ai,C&&(x=Math.cos(C),b=Math.sin(C),G=z*x+q*b,H=I*x+$*b,q=q*x-z*b,$=$*x-I*b,z=G,I=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Qe(Math.sqrt(z*z+q*q+L*L)),g=Qe(Math.sqrt($*$+ie*ie)),C=mr(I,$),M=Math.abs(C)>2e-4?C*Ai:0,E=te?1/(te<0?-te:te):0),n.svg&&(G=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ju(gn(e,qe)),G&&e.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(p*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Qe(p),n.scaleY=Qe(g),n.rotation=Qe(_)+o,n.rotationX=Qe(m)+o,n.rotationY=Qe(d)+o,n.skewX=M+o,n.skewY=v+o,n.transformPerspective=E+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[ln]=Os(c)),n.xOffset=n.yOffset=0,n.force3D=zt.force3D,n.renderTransform=n.svg?bv:Wu?eh:Tv,n.uncache=0,n},Os=function(e){return(e=e.split(" "))[0]+" "+e[1]},wo=function(e,t,n){var i=vt(t);return Qe(parseFloat(t)+parseFloat(ti(e,"x",n+"px",i)))+i},Tv=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,eh(e,t)},wi="0deg",Vr="0px",Ri=") ",eh=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,d=n.force3D,M=n.target,v=n.zOrigin,E="",S=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==wi||u!==wi)){var A=parseFloat(u)*pr,w=Math.sin(A),C=Math.cos(A),x;A=parseFloat(f)*pr,x=Math.cos(A),a=wo(M,a,w*x*-v),o=wo(M,o,-Math.sin(A)*-v),l=wo(M,l,C*x*-v+v)}m!==Vr&&(E+="perspective("+m+Ri),(i||s)&&(E+="translate("+i+"%, "+s+"%) "),(S||a!==Vr||o!==Vr||l!==Vr)&&(E+=l!==Vr||S?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ri),c!==wi&&(E+="rotate("+c+Ri),u!==wi&&(E+="rotateY("+u+Ri),f!==wi&&(E+="rotateX("+f+Ri),(h!==wi||p!==wi)&&(E+="skew("+h+", "+p+Ri),(g!==1||_!==1)&&(E+="scale("+g+", "+_+Ri),M.style[qe]=E||"translate(0, 0)"},bv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,d=n.yOffset,M=n.forceCSS,v=parseFloat(a),E=parseFloat(o),S,A,w,C,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pr,c*=pr,S=Math.cos(l)*f,A=Math.sin(l)*f,w=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=pr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,C*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),S*=x,A*=x)),S=Qe(S),A=Qe(A),w=Qe(w),C=Qe(C)):(S=f,C=h,A=w=0),(v&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(v=ti(p,"x",a,"px"),E=ti(p,"y",o,"px")),(g||_||m||d)&&(v=Qe(v+g-(g*S+_*w)+m),E=Qe(E+_-(g*A+_*C)+d)),(i||s)&&(x=p.getBBox(),v=Qe(v+i/100*x.width),E=Qe(E+s/100*x.height)),x="matrix("+S+","+A+","+w+","+C+","+v+","+E+")",p.setAttribute("transform",x),M&&(p.style[qe]=x)},Av=function(e,t,n,i,s){var a=360,o=ot(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ai:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*zu)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*zu)%a-~~(c/a)*a)),e._pt=h=new Pt(e._pt,t,n,i,c,cv),h.e=u,h.u="deg",e._props.push(n),h},th=function(e,t){for(var n in t)e[n]=t[n];return e},wv=function(e,t,n){var i=th({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[qe]=t,o=Hr(n,1),Gr(n,qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qe],a[qe]=t,o=Hr(n,1),a[qe]=c);for(l in In)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=vt(c),g=vt(u),f=p!==g?ti(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Pt(e._pt,o,l,f,h-f,So),e._pt.u=g||0,e._props.push(l));th(o,i)};Rt("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Ns[e>1?"border"+r:r]=function(o,l,c,u,f){var h,p;if(arguments.length<4)return h=a.map(function(g){return Nn(o,g,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},a.forEach(function(g,_){return p[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,p,f)}});var nh={name:"css",register:yo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,p,g,_,m,d,M,v,E,S,A,w,C;vo||yo(),this.styles=this.styles||Vu(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(kt[_]&&Ru(_,t,n,i,e,s)))){if(p=typeof u,g=Ns[_],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ir(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Zn.lastIndex=0,Zn.test(c)||(m=vt(c),d=vt(u)),d?m!==d&&(c=ti(e,_,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),C.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],ot(c)&&~c.indexOf("random(")&&(c=Ir(c)),vt(c+"")||(c+=zt.units[_]||vt(Nn(e,_))||""),(c+"").charAt(1)==="="&&(c=Nn(e,_))):c=Nn(e,_),h=parseFloat(c),M=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),f=parseFloat(u),_ in _n&&(_==="autoAlpha"&&(h===1&&Nn(e,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),ei(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=_n[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in In,v){if(this.styles.save(_),E||(S=e._gsap,S.renderTransform&&!t.parseTransform||Hr(e,t.parseTransform),A=t.smoothOrigin!==!1&&S.smooth,E=this._pt=new Pt(this._pt,o,qe,0,1,S.renderTransform,S,0,-1),E.dep=1),_==="scale")this._pt=new Pt(this._pt,S,"scaleY",S.scaleY,(M?lr(S.scaleY,M+f):f)-S.scaleY||0,So),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(ln,0,o[ln]),u=Ev(u),S.svg?Ao(e,u,0,A,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==S.zOrigin&&ei(this,S,"zOrigin",S.zOrigin,d),ei(this,o,_,Os(c),Os(u)));continue}else if(_==="svgOrigin"){Ao(e,u,1,A,0,this);continue}else if(_ in Zu){Av(this,S,_,h,M?lr(h,M+u):u);continue}else if(_==="smoothOrigin"){ei(this,S,"smooth",S.smooth,u);continue}else if(_==="force3D"){S[_]=u;continue}else if(_==="transform"){wv(this,u,e);continue}}else _ in o||(_=_r(_)||_);if(v||(f||f===0)&&(h||h===0)&&!lv.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),d=vt(u)||(_ in zt.units?zt.units[_]:m),m!==d&&(h=ti(e,_,c,d)),this._pt=new Pt(this._pt,v?S:o,_,h,(M?lr(h,M+f):f)-h,!v&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?hv:So),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=uv);else if(_ in o)Sv.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,i,s);else if(_!=="parseTransform"){ja(_,u);continue}v||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||e[_])),a.push(_)}}w&&Iu(this)},render:function(e,t){if(t.tween._time||!xo())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Nn,aliases:_n,getSetter:function(e,t,n){var i=_n[t];return i&&i.indexOf(",")<0&&(t=i),t in In&&t!==ln&&(e._gsap.x||Nn(e,"x"))?n&&Bu===n?t==="scale"?mv:pv:(Bu=n||{})&&(t==="scale"?_v:gv):e.style&&!Ha(e.style[t])?fv:~t.indexOf("-")?dv:fo(e,t)},core:{_removeProperty:Gr,_getMatrix:bo}};Lt.utils.checkPrefix=_r,Lt.core.getStyleSaver=Vu,function(r,e,t,n){var i=Rt(r+","+e+","+t,function(s){In[s]=1});Rt(e,function(s){zt.units[s]="deg",Zu[s]=1}),_n[i[13]]=r+","+e,Rt(n,function(s){var a=s.split(":");_n[a[1]]=i[a[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),Rt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zt.units[r]="px"}),Lt.registerPlugin(nh);var Fs=Lt.registerPlugin(nh)||Lt;Fs.core.Tween;function Rv(){const r=document.querySelector("canvas.webgl"),e=new hg,t={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight,o.aspect=t.width/t.height,o.updateProjectionMatrix(),u.setSize(t.width,t.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2))});const n=new fg,i=new on(new Qi(1,1,1),n),s=new on(new Ba(.5,.5,1.5,16),n),a=new on(new za(.6,32,16),n);i.position.set(0,0,-5),s.position.set(-6,0,-5),a.position.set(6,0,-5),e.add(i,s,a);const o=new qt(75,t.width/t.height,.1,100);o.position.set(0,0,0),e.add(o);function l(){let p=sessionStorage.getItem("page"),g=Fs.timeline({paused:!0}).to(o.position,{x:0,duration:3,ease:"Quart.easeInOut"}),_=Fs.timeline({paused:!0}).to(o.position,{x:-6,duration:3,ease:"Quart.easeInOut"}),m=Fs.timeline({paused:!0}).to(o.position,{x:6,duration:3,ease:"Quart.easeInOut"});switch(p){case"home":g.play();break;case"about":_.play();break;case"contact":m.play();break}}l(),document.querySelectorAll(".header__link").forEach(p=>{p.addEventListener("click",()=>{setTimeout(()=>{l()},150)})});const u=new Gc({canvas:r,antialias:!0});u.setSize(t.width,t.height),u.setPixelRatio(Math.min(window.devicePixelRatio,2));const f=new dg,h=()=>{f.getElapsedTime(),u.render(e,o),window.requestAnimationFrame(h)};h()}Fh.init({transitions:[{name:"default-transition",once(){Rv()},leave(){},enter(){}}],views:[{namespace:"home",beforeEnter(){sessionStorage.setItem("page","home")}},{namespace:"about",beforeEnter(){sessionStorage.setItem("page","about")}},{namespace:"contact",beforeEnter(){sessionStorage.setItem("page","contact")}}]})});
