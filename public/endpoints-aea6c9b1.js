function he(e,t){return function(){return e.apply(t,arguments)}}const{toString:pe}=Object.prototype,{getPrototypeOf:G}=Object,Q=(e=>t=>{const n=pe.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),A=e=>(e=e.toLowerCase(),t=>Q(t)===e),I=e=>t=>typeof t===e,{isArray:P}=Array,F=I("undefined");function Be(e){return e!==null&&!F(e)&&e.constructor!==null&&!F(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const me=A("ArrayBuffer");function Le(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&me(e.buffer),t}const Ue=I("string"),g=I("function"),ye=I("number"),Y=e=>e!==null&&typeof e=="object",je=e=>e===!0||e===!1,U=e=>{if(Q(e)!=="object")return!1;const t=G(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ke=A("Date"),He=A("File"),Me=A("Blob"),Ie=A("FileList"),qe=e=>Y(e)&&g(e.pipe),ze=e=>{const t="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||pe.call(e)===t||g(e.toString)&&e.toString()===t)},Je=A("URLSearchParams"),$e=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function D(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),P(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function Ee(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const we=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),be=e=>!F(e)&&e!==we;function W(){const{caseless:e}=be(this)&&this||{},t={},n=(r,s)=>{const i=e&&Ee(t,s)||s;U(t[i])&&U(r)?t[i]=W(t[i],r):U(r)?t[i]=W({},r):P(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&D(arguments[r],n);return t}const Ve=(e,t,n,{allOwnKeys:r}={})=>(D(t,(s,i)=>{n&&g(s)?e[i]=he(s,n):e[i]=s},{allOwnKeys:r}),e),We=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ke=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ve=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&G(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Xe=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ge=e=>{if(!e)return null;if(P(e))return e;let t=e.length;if(!ye(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Qe=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&G(Uint8Array)),Ye=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ze=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},et=A("HTMLFormElement"),tt=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),re=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),nt=A("RegExp"),Se=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};D(n,(s,i)=>{t(s,i,e)!==!1&&(r[i]=s)}),Object.defineProperties(e,r)},rt=e=>{Se(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},st=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return P(e)?r(e):r(String(e).split(t)),n},ot=()=>{},it=(e,t)=>(e=+e,Number.isFinite(e)?e:t),at=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=P(r)?[]:{};return D(r,(o,u)=>{const d=n(o,s+1);!F(d)&&(i[u]=d)}),t[s]=void 0,i}}return r};return n(e,0)},a={isArray:P,isArrayBuffer:me,isBuffer:Be,isFormData:ze,isArrayBufferView:Le,isString:Ue,isNumber:ye,isBoolean:je,isObject:Y,isPlainObject:U,isUndefined:F,isDate:ke,isFile:He,isBlob:Me,isRegExp:nt,isFunction:g,isStream:qe,isURLSearchParams:Je,isTypedArray:Qe,isFileList:Ie,forEach:D,merge:W,extend:Ve,trim:$e,stripBOM:We,inherits:Ke,toFlatObject:ve,kindOf:Q,kindOfTest:A,endsWith:Xe,toArray:Ge,forEachEntry:Ye,matchAll:Ze,isHTMLForm:et,hasOwnProperty:re,hasOwnProp:re,reduceDescriptors:Se,freezeMethods:rt,toObjectSet:st,toCamelCase:tt,noop:ot,toFiniteNumber:it,findKey:Ee,global:we,isContextDefined:be,toJSONObject:at};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Re=m.prototype,Oe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Oe[e]={value:e}});Object.defineProperties(m,Oe);Object.defineProperty(Re,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Re);return a.toFlatObject(e,o,function(d){return d!==Error.prototype},u=>u!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var ct=typeof self=="object"?self.FormData:window.FormData;const ut=ct;function K(e){return a.isPlainObject(e)||a.isArray(e)}function Ae(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function se(e,t,n){return e?e.concat(t).map(function(s,i){return s=Ae(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function lt(e){return a.isArray(e)&&!e.some(K)}const ft=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function dt(e){return e&&a.isFunction(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator]}function q(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new(ut||FormData),n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,R){return!a.isUndefined(R[p])});const r=n.metaTokens,s=n.visitor||l,i=n.dots,o=n.indexes,d=(n.Blob||typeof Blob<"u"&&Blob)&&dt(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(f){if(f===null)return"";if(a.isDate(f))return f.toISOString();if(!d&&a.isBlob(f))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(f)||a.isTypedArray(f)?d&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function l(f,p,R){let b=f;if(f&&!R&&typeof f=="object"){if(a.endsWith(p,"{}"))p=r?p:p.slice(0,-2),f=JSON.stringify(f);else if(a.isArray(f)&&lt(f)||a.isFileList(f)||a.endsWith(p,"[]")&&(b=a.toArray(f)))return p=Ae(p),b.forEach(function(B,_e){!(a.isUndefined(B)||B===null)&&t.append(o===!0?se([p],_e,i):o===null?p:p+"[]",c(B))}),!1}return K(f)?!0:(t.append(se(R,p,i),c(f)),!1)}const h=[],w=Object.assign(ft,{defaultVisitor:l,convertValue:c,isVisitable:K});function y(f,p){if(!a.isUndefined(f)){if(h.indexOf(f)!==-1)throw Error("Circular reference detected in "+p.join("."));h.push(f),a.forEach(f,function(b,N){(!(a.isUndefined(b)||b===null)&&s.call(t,b,a.isString(N)?N.trim():N,p,w))===!0&&y(b,p?p.concat(N):[N])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return y(e),t}function oe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Z(e,t){this._pairs=[],e&&q(e,this,t)}const Te=Z.prototype;Te.append=function(t,n){this._pairs.push([t,n])};Te.toString=function(t){const n=t?function(r){return t.call(this,r,oe)}:oe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function ht(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ge(e,t,n){if(!t)return e;const r=n&&n.encode||ht,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new Z(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class pt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ie=pt,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},mt=typeof URLSearchParams<"u"?URLSearchParams:Z,yt=FormData,Et=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),wt=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),S={isBrowser:!0,classes:{URLSearchParams:mt,FormData:yt,Blob},isStandardBrowserEnv:Et,isStandardBrowserWebWorkerEnv:wt,protocols:["http","https","file","blob","url","data"]};function bt(e,t){return q(e,new S.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return S.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function St(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Rt(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function xe(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),d=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,d?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=Rt(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(St(r),s,n,0)}),n}return null}const Ot={"Content-Type":void 0};function At(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const z={transitional:Ne,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(xe(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return bt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=this.env&&this.env.FormData;return q(u?{"files[]":t}:t,d&&new d,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),At(t)):t}],transformResponse:[function(t){const n=this.transitional||z.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:S.classes.FormData,Blob:S.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};a.forEach(["delete","get","head"],function(t){z.headers[t]={}});a.forEach(["post","put","patch"],function(t){z.headers[t]=a.merge(Ot)});const ee=z,Tt=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gt=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&Tt[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ae=Symbol("internals");function C(e){return e&&String(e).trim().toLowerCase()}function j(e){return e===!1||e==null?e:a.isArray(e)?e.map(j):String(e)}function Nt(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}function xt(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function ce(e,t,n,r){if(a.isFunction(r))return r.call(this,t,n);if(a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Pt(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Ct(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class J{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,d,c){const l=C(d);if(!l)throw new Error("header name must be a non-empty string");const h=a.findKey(s,l);(!h||s[h]===void 0||c===!0||c===void 0&&s[h]!==!1)&&(s[h||d]=j(u))}const o=(u,d)=>a.forEach(u,(c,l)=>i(c,l,d));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!xt(t)?o(gt(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=C(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return Nt(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=C(t),t){const r=a.findKey(this,t);return!!(r&&(!n||ce(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=C(o),o){const u=a.findKey(r,o);u&&(!n||ce(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=j(s),delete n[i];return}const u=t?Pt(i):String(i).trim();u!==i&&delete n[i],n[u]=j(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ae]=this[ae]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=C(o);r[u]||(Ct(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}J.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]);a.freezeMethods(J.prototype);a.freezeMethods(J);const O=J;function $(e,t){const n=this||ee,r=t||n,s=O.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Pe(e){return!!(e&&e.__CANCEL__)}function _(e,t,n){m.call(this,e??"canceled",m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(_,m,{__CANCEL__:!0});const Ft=null;function Dt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const _t=S.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const d=[];d.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),a.isString(i)&&d.push("path="+i),a.isString(o)&&d.push("domain="+o),u===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Bt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Lt(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ce(e,t){return e&&!Bt(t)?Lt(e,t):t}const Ut=S.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function jt(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function kt(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(d){const c=Date.now(),l=r[i];o||(o=c),n[s]=d,r[s]=c;let h=i,w=0;for(;h!==s;)w+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),c-o<t)return;const y=l&&c-l;return y?Math.round(w*1e3/y):void 0}}function ue(e,t){let n=0;const r=kt(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,d=r(u),c=i<=o;n=i;const l={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:d||void 0,estimated:d&&o&&c?(o-i)/d:void 0,event:s};l[t?"download":"upload"]=!0,e(l)}}const Ht=typeof XMLHttpRequest<"u",Mt=Ht&&function(e){return new Promise(function(n,r){let s=e.data;const i=O.from(e.headers).normalize(),o=e.responseType;let u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}a.isFormData(s)&&(S.isStandardBrowserEnv||S.isStandardBrowserWebWorkerEnv)&&i.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const y=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(y+":"+f))}const l=Ce(e.baseURL,e.url);c.open(e.method.toUpperCase(),ge(l,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function h(){if(!c)return;const y=O.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),p={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:y,config:e,request:c};Dt(function(b){n(b),d()},function(b){r(b),d()},p),c=null}if("onloadend"in c?c.onloadend=h:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(h)},c.onabort=function(){c&&(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let f=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const p=e.transitional||Ne;e.timeoutErrorMessage&&(f=e.timeoutErrorMessage),r(new m(f,p.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},S.isStandardBrowserEnv){const y=(e.withCredentials||Ut(l))&&e.xsrfCookieName&&_t.read(e.xsrfCookieName);y&&i.set(e.xsrfHeaderName,y)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(f,p){c.setRequestHeader(p,f)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ue(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ue(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=y=>{c&&(r(!y||y.type?new _(null,e,c):y),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const w=jt(l);if(w&&S.protocols.indexOf(w)===-1){r(new m("Unsupported protocol "+w+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})},k={http:Ft,xhr:Mt};a.forEach(k,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const It={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let s=0;s<t&&(n=e[s],!(r=a.isString(n)?k[n.toLowerCase()]:n));s++);if(!r)throw r===!1?new m(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(a.hasOwnProp(k,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!a.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:k};function V(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new _(null,e)}function le(e){return V(e),e.headers=O.from(e.headers),e.data=$.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),It.getAdapter(e.adapter||ee.adapter)(e).then(function(r){return V(e),r.data=$.call(e,e.transformResponse,r),r.headers=O.from(r.headers),r},function(r){return Pe(r)||(V(e),r&&r.response&&(r.response.data=$.call(e,e.transformResponse,r.response),r.response.headers=O.from(r.response.headers))),Promise.reject(r)})}const fe=e=>e instanceof O?e.toJSON():e;function x(e,t){t=t||{};const n={};function r(c,l,h){return a.isPlainObject(c)&&a.isPlainObject(l)?a.merge.call({caseless:h},c,l):a.isPlainObject(l)?a.merge({},l):a.isArray(l)?l.slice():l}function s(c,l,h){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c,h)}else return r(c,l,h)}function i(c,l){if(!a.isUndefined(l))return r(void 0,l)}function o(c,l){if(a.isUndefined(l)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,l)}function u(c,l,h){if(h in t)return r(c,l);if(h in e)return r(void 0,c)}const d={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(c,l)=>s(fe(c),fe(l),!0)};return a.forEach(Object.keys(e).concat(Object.keys(t)),function(l){const h=d[l]||s,w=h(e[l],t[l],l);a.isUndefined(w)&&h!==u||(n[l]=w)}),n}const Fe="1.2.3",te={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{te[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const de={};te.transitional=function(t,n,r){function s(i,o){return"[Axios v"+Fe+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!de[o]&&(de[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function qt(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],d=u===void 0||o(u,i,e);if(d!==!0)throw new m("option "+i+" must be "+d,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}const v={assertOptions:qt,validators:te},T=v.validators;class M{constructor(t){this.defaults=t,this.interceptors={request:new ie,response:new ie}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=x(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&v.assertOptions(r,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1),s!==void 0&&v.assertOptions(s,{encode:T.function,serialize:T.function},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=i&&a.merge(i.common,i[n.method]),o&&a.forEach(["delete","get","head","post","put","patch","common"],f=>{delete i[f]}),n.headers=O.concat(o,i);const u=[];let d=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(n)===!1||(d=d&&p.synchronous,u.unshift(p.fulfilled,p.rejected))});const c=[];this.interceptors.response.forEach(function(p){c.push(p.fulfilled,p.rejected)});let l,h=0,w;if(!d){const f=[le.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,c),w=f.length,l=Promise.resolve(n);h<w;)l=l.then(f[h++],f[h++]);return l}w=u.length;let y=n;for(h=0;h<w;){const f=u[h++],p=u[h++];try{y=f(y)}catch(R){p.call(this,R);break}}try{l=le.call(this,y)}catch(f){return Promise.reject(f)}for(h=0,w=c.length;h<w;)l=l.then(c[h++],c[h++]);return l}getUri(t){t=x(this.defaults,t);const n=Ce(t.baseURL,t.url);return ge(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){M.prototype[t]=function(n,r){return this.request(x(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(x(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}M.prototype[t]=n(),M.prototype[t+"Form"]=n(!0)});const H=M;class ne{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new _(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ne(function(s){t=s}),cancel:t}}}const zt=ne;function Jt(e){return function(n){return e.apply(null,n)}}function $t(e){return a.isObject(e)&&e.isAxiosError===!0}const X={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(X).forEach(([e,t])=>{X[t]=e});const Vt=X;function De(e){const t=new H(e),n=he(H.prototype.request,t);return a.extend(n,H.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return De(x(e,s))},n}const E=De(ee);E.Axios=H;E.CanceledError=_;E.CancelToken=zt;E.isCancel=Pe;E.VERSION=Fe;E.toFormData=q;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Jt;E.isAxiosError=$t;E.mergeConfig=x;E.AxiosHeaders=O;E.formToJSON=e=>xe(a.isHTMLForm(e)?new FormData(e):e);E.HttpStatusCode=Vt;E.default=E;const L=E,Wt={getArtistasLista(){return L.get("http://localhost:4005/artistas").then(e=>e).catch(e=>console.log(e))},getArtistasIndividual(e){return L.get(`http://localhost:4005/artistas/${e}`).then(t=>t).catch(t=>console.log(t))},getAlbumesLista(){return L.get("http://localhost:4005/albumes").then(e=>e).catch(e=>console.log(e))},getAlbumIndividual(e){return L.get(`http://localhost:4005/albumes/${e}`).then(t=>t).catch(t=>console.log(t))}};export{Wt as e};
