/*!
* Vuetify v3.2.1
* Forged by John Leider
* Released under the MIT License.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Vuetify={},e.Vue)}(this,(function(e,t){"use strict"
const a="undefined"!=typeof window,l=a&&"IntersectionObserver"in window,o=a&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),n=a&&"undefined"!=typeof CSS&&void 0!==CSS.supports&&CSS.supports("selector(:focus-visible)")
function r(e){const l=t.ref(),o=t.ref()
if(a){const a=new ResizeObserver((t=>{e?.(t,a),t.length&&(o.value=t[0].contentRect)}))
t.onBeforeUnmount((()=>{a.disconnect()})),t.watch(l,((e,t)=>{t&&(a.unobserve(t),o.value=void 0),e&&a.observe(e)}),{flush:"post"})}return{resizeRef:l,contentRect:t.readonly(o)}}function i(e,t,a){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,a)}function s(e,t,a){return function(e,t,a){if(t.set)t.set.call(e,a)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=a}}(e,c(e,t,"set"),a),a}function u(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,c(e,t,"get"))}function c(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance")
return t.get(e)}function d(e,t,a){const l=t.length-1
if(l<0)return void 0===e?a:e
for(let o=0;o<l;o++){if(null==e)return a
e=e[t[o]]}return null==e||void 0===e[t[l]]?a:e[t[l]]}function v(e,t){if(e===t)return!0
if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1
if(e!==Object(e)||t!==Object(t))return!1
const a=Object.keys(e)
return a.length===Object.keys(t).length&&a.every((a=>v(e[a],t[a])))}function p(e,t,a){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:d(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a):a}function f(e,t,a){if(null==t)return void 0===e?a:e
if(e!==Object(e)){if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}if("string"==typeof t)return p(e,t,a)
if(Array.isArray(t))return d(e,t,a)
if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return Array.from({length:e},((e,a)=>t+a))}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function h(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}const y=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),b=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"})
function V(e){return Object.keys(e)}function S(e,t,a){const l=Object.create(null),o=Object.create(null)
for(const n in e)t.some((e=>e instanceof RegExp?e.test(n):e===n))&&!a?.some((e=>e===n))?l[n]=e[n]:o[n]=e[n]
return[l,o]}function w(e,t){const a={...e}
return t.forEach((e=>delete a[e])),a}function k(e){return S(e,["class","style","id",/^data-/])}function x(e){return null==e?[]:Array.isArray(e)?e:[e]}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return Math.max(t,Math.min(a,e))}function N(e){const t=e.toString().trim()
return t.includes(".")?t.length-t.indexOf(".")-1:0}function _(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0"
return e+a.repeat(Math.max(0,t-e.length))}function I(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3
if(e<t)return`${e} B`
const a=1024===t?["Ki","Mi","Gi"]:["k","M","G"]
let l=-1
for(;Math.abs(e)>=t&&l<a.length-1;)e/=t,++l
return`${e.toFixed(1)} ${a[l]}B`}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0
const l={}
for(const t in e)l[t]=e[t]
for(const o in t){const n=e[o],r=t[o]
h(n)&&h(r)?l[o]=B(n,r,a):Array.isArray(n)&&Array.isArray(r)&&a?l[o]=a(n,r):l[o]=r}return l}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
if(A.cache.has(e))return A.cache.get(e)
const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()
return A.cache.set(e,t),t}function $(e,t){if(!t||"object"!=typeof t)return[]
if(Array.isArray(t))return t.map((t=>$(e,t))).flat(1)
if(Array.isArray(t.children))return t.children.map((t=>$(e,t))).flat(1)
if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component]
if(t.component.subTree)return $(e,t.component.subTree).flat(1)}return[]}A.cache=new Map
var E=new WeakMap,R=new WeakMap
class T{constructor(e){i(this,E,{writable:!0,value:[]}),i(this,R,{writable:!0,value:0}),this.size=e}push(e){u(this,E)[u(this,R)]=e,s(this,R,(u(this,R)+1)%this.size)}values(){return u(this,E).slice(u(this,R)).concat(u(this,E).slice(0,u(this,R)))}}function P(e){const a=t.reactive({}),l=t.computed(e)
return t.watchEffect((()=>{for(const e in l.value)a[e]=l.value[e]}),{flush:"sync"}),t.toRefs(a)}function L(e,t){return e.includes(t)}const M=/^on[^a-z]/,D=()=>[Function,Array]
function F(e,a){return!!(e[a="on"+t.capitalize(a)]||e[`${a}Once`]||e[`${a}Capture`]||e[`${a}OnceCapture`]||e[`${a}CaptureOnce`])}function O(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
if(Array.isArray(e))for(const t of e)t(...a)
else"function"==typeof e&&e(...a)}function z(e){const t=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}:not([tabindex="-1"]):not([disabled])`)).join(", ")
return[...e.querySelectorAll(t)]}function j(e,t){const a=z(e),l=a.indexOf(document.activeElement)
if(t)if("first"===t)a[0]?.focus()
else if("last"===t)a.at(-1)?.focus()
else{let o,n=l
const r="next"===t?1:-1
do{n+=r,o=a[n]}while((!o||null==o.offsetParent)&&n<a.length&&n>=0)
o?o.focus():j(e,"next"===t?"first":"last")}else e.contains(document.activeElement)||a[0]?.focus()}const H=["top","bottom"],U=["start","end","left","right"]
function W(e,t){let[a,l]=e.split(" ")
return l||(l=L(H,a)?"start":L(U,a)?"top":"center"),{side:Y(a,t),align:Y(l,t)}}function Y(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function G(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function X(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function q(e){return{side:e.align,align:e.side}}function K(e){return L(H,e.side)?"y":"x"}class Z{constructor(e){let{x:t,y:a,width:l,height:o}=e
this.x=t,this.y=a,this.width=l,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function J(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Q(e){const t=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform
if(l){let o,n,r,i,s
if(l.startsWith("matrix3d("))o=l.slice(9,-1).split(/, /),n=+o[0],r=+o[5],i=+o[12],s=+o[13]
else{if(!l.startsWith("matrix("))return new Z(t)
o=l.slice(7,-1).split(/, /),n=+o[0],r=+o[3],i=+o[4],s=+o[5]}const u=a.transformOrigin,c=t.x-i-(1-n)*parseFloat(u),d=t.y-s-(1-r)*parseFloat(u.slice(u.indexOf(" ")+1)),v=n?t.width/n:e.offsetWidth+1,p=r?t.height/r:e.offsetHeight+1
return new Z({x:c,y:d,width:v,height:p})}return new Z(t)}function ee(e,t,a){if(void 0===e.animate)return{finished:Promise.resolve()}
let l
try{l=e.animate(t,a)}catch(e){return{finished:Promise.resolve()}}return void 0===l.finished&&(l.finished=new Promise((e=>{l.onfinish=()=>{e(l)}}))),l}function te(e,t,a){if(a&&(t={__isVue:!0,$parent:a,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return
t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?function(e){if(e.__isVue&&e.$parent){const t=[]
let a=0
for(;e;){if(t.length>0){const l=t[t.length-1]
if(l.constructor===e.constructor){a++,e=e.$parent
continue}a>0&&(t[t.length-1]=[l,a],a=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${ne(e[0])}... (${e[1]} recursive calls)`:ne(e)}`)).join("\n")}return`\n\n(found in ${ne(e)})`}(t):"")}function ae(e,t,a){const l=te(e,t,a)
null!=l&&console.warn(l)}function le(e,t,a){const l=te(e,t,a)
null!=l&&console.error(l)}const oe=/(?:^|[-_])(\w)/g
function ne(e,t){if(e.$root===e)return"<Root>"
const a="function"==typeof e&&null!=e.cid?e.options:e.__isVue?e.$options||e.constructor.options:e||{}
let l=a.name||a._componentTag
const o=a.__file
if(!l&&o){l=o.match(/([^/\\]+)\.vue$/)?.[1]}return(l?`<${n=l,n.replace(oe,(e=>e.toUpperCase())).replace(/[-_]/g,"")}>`:"<Anonymous>")+(o&&!1!==t?` at ${o}`:"")
var n}const re=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],ie=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,se=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],ue=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4
function ce(e){const t=Array(3),a=ie,l=re
for(let o=0;o<3;++o)t[o]=Math.round(255*C(a(l[o][0]*e[0]+l[o][1]*e[1]+l[o][2]*e[2])))
return{r:t[0],g:t[1],b:t[2]}}function de(e){let{r:t,g:a,b:l}=e
const o=[0,0,0],n=ue,r=se
t=n(t/255),a=n(a/255),l=n(l/255)
for(let e=0;e<3;++e)o[e]=r[e][0]*t+r[e][1]*a+r[e][2]*l
return o}const ve=.20689655172413793,pe=e=>e>ve**3?Math.cbrt(e):e/(3*ve**2)+4/29,fe=e=>e>ve?e**3:3*ve**2*(e-4/29)
function me(e){const t=pe,a=t(e[1])
return[116*a-16,500*(t(e[0]/.95047)-a),200*(a-t(e[2]/1.08883))]}function ge(e){const t=fe,a=(e[0]+16)/116
return[.95047*t(a+e[1]/500),t(a),1.08883*t(a-e[2]/200)]}function he(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}function ye(e){if("number"==typeof e)return(isNaN(e)||e<0||e>16777215)&&ae(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e}
if("string"==typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||ae(`'${e}' is not a valid hex(a) color`)
const a=parseInt(t,16)
return(isNaN(a)||a<0||a>4294967295)&&ae(`'${e}' is not a valid hex(a) color`),Ne(t)}throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`)}function be(e){const{h:t,s:a,v:l,a:o}=e,n=e=>{const o=(e+t/60)%6
return l-l*a*Math.max(Math.min(o,4-o,1),0)},r=[n(5),n(3),n(1)].map((e=>Math.round(255*e)))
return{r:r[0],g:r[1],b:r[2],a:o}}function Ve(e){if(!e)return{h:0,s:1,v:1,a:1}
const t=e.r/255,a=e.g/255,l=e.b/255,o=Math.max(t,a,l),n=Math.min(t,a,l)
let r=0
o!==n&&(o===t?r=60*(0+(a-l)/(o-n)):o===a?r=60*(2+(l-t)/(o-n)):o===l&&(r=60*(4+(t-a)/(o-n)))),r<0&&(r+=360)
const i=[r,0===o?0:(o-n)/o,o]
return{h:i[0],s:i[1],v:i[2],a:e.a}}function Se(e){const{h:t,s:a,v:l,a:o}=e,n=l-l*a/2
return{h:t,s:1===n||0===n?0:(l-n)/Math.min(n,1-n),l:n,a:o}}function we(e){const{h:t,s:a,l,a:o}=e,n=l+a*Math.min(l,1-l)
return{h:t,s:0===n?0:2-2*l/n,v:n,a:o}}function ke(e){return function(e){let{r:t,g:a,b:l,a:o}=e
return void 0===o?`rgb(${t}, ${a}, ${l})`:`rgba(${t}, ${a}, ${l}, ${o})`}(be(e))}function xe(e){const t=Math.round(e).toString(16)
return("00".substr(0,2-t.length)+t).toUpperCase()}function Ce(e){let{r:t,g:a,b:l,a:o}=e
return`#${[xe(t),xe(a),xe(l),void 0!==o?xe(Math.round(255*o)):""].join("")}`}function Ne(e){e=Be(e)
let[t,a,l,o]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
const a=[]
let l=0
for(;l<e.length;)a.push(e.substr(l,t)),l+=t
return a}(e,2).map((e=>parseInt(e,16)))
return o=void 0===o?o:o/255,{r:t,g:a,b:l,a:o}}function _e(e){return Ve(Ne(e))}function Ie(e){return Ce(be(e))}function Be(e){return e.startsWith("#")&&(e=e.slice(1)),3!==(e=e.replace(/([^0-9a-f])/gi,"F")).length&&4!==e.length||(e=e.split("").map((e=>e+e)).join("")),6!==e.length&&(e=_(_(e,6),8,"F")),e}function Ae(e,t){const a=me(de(e))
return a[0]=a[0]+10*t,ce(ge(a))}function $e(e,t){const a=me(de(e))
return a[0]=a[0]-10*t,ce(ge(a))}function Ee(e){return de(ye(e))[1]}function Re(e,t){const a=Ee(e),l=Ee(t)
return(Math.max(a,l)+.05)/(Math.min(a,l)+.05)}function Te(e,t){return a=>Object.keys(e).reduce(((l,o)=>{const n="object"==typeof e[o]&&null!=e[o]&&!Array.isArray(e[o])?e[o]:{type:e[o]}
return l[o]=a&&o in a?{...n,default:a[o]}:n,t&&!l[o].source&&(l[o].source=t),l}),{})}const Pe=Te({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component")
function Le(e,a){let l
function o(){l=t.effectScope(),l.run((()=>a.length?a((()=>{l?.stop(),o()})):a()))}t.watch(e,(e=>{e&&!l?o():e||(l?.stop(),l=void 0)}),{immediate:!0}),t.onScopeDispose((()=>{l?.stop()}))}const Me=Symbol.for("vuetify:defaults")
function De(e){return t.ref(e)}function Fe(){const e=t.inject(Me)
if(!e)throw new Error("[Vuetify] Could not find defaults instance")
return e}function Oe(e,a){const l=Fe(),o=t.ref(e),n=t.computed((()=>{if(t.unref(a?.disabled))return l.value
const e=t.unref(a?.scoped),n=t.unref(a?.reset),r=t.unref(a?.root)
let i=B(o.value,{prev:l.value})
if(e)return i
if(n||r){const e=Number(n||1/0)
for(let t=0;t<=e&&(i&&"prev"in i);t++)i=i.prev
return i}return i.prev?B(i.prev,i):i}))
return t.provide(Me,n),n}function ze(e,t){return void 0!==e.props?.[t]||void 0!==e.props?.[A(t)]}function je(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Fe()
const o=Xe("useDefaults")
if(a=a??o.type.name??o.type.__name,!a)throw new Error("[Vuetify] Could not determine component name")
const n=t.computed((()=>l.value?.[e._as??a])),r=new Proxy(e,{get(e,t){const a=Reflect.get(e,t)
return"class"===t||"style"===t?[n.value?.[t],a].filter((e=>null!=e)):"string"!=typeof t||ze(o.vnode,t)?a:n.value?.[t]??l.value?.global?.[t]??a}}),i=t.shallowRef()
function s(){Le(i,(()=>{Oe(B(at(Me)?.value??{},i.value))}))}return t.watchEffect((()=>{if(n.value){const e=Object.entries(n.value).filter((e=>{let[t]=e
return t.startsWith(t[0].toUpperCase())}))
e.length&&(i.value=Object.fromEntries(e))}})),{props:r,provideSubDefaults:s}}function He(e){if(e._setup=e._setup??e.setup,!e.name)return ae("The component is missing an explicit name, unable to generate default prop value"),e
if(e._setup){e.props=Te(e.props??{},A(e.name))()
const t=Object.keys(e.props)
e.filterProps=function(e){return S(e,t,["class","style"])},e.props._as=String,e.setup=function(t,a){const l=Fe()
if(!l.value)return e._setup(t,a)
const{props:o,provideSubDefaults:n}=je(t,t._as??e.name,l),r=e._setup(o,a)
return n(),r}}return e}function Ue(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return a=>(e?He:t.defineComponent)(a)}function We(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",l=arguments.length>2?arguments[2]:void 0
return Ue()({name:l??t.capitalize(t.camelize(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...Pe()},setup(a,l){let{slots:o}=l
return()=>t.h(a.tag,{class:[e,a.class],style:a.style},o.default?.())}})}function Ye(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode
return e!==document?null:document}const t=e.getRootNode()
return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const Ge="cubic-bezier(0.4, 0, 0.2, 1)"
function Xe(e,a){const l=t.getCurrentInstance()
if(!l)throw new Error(`[Vuetify] ${e} ${a||"must be called from inside a setup function"}`)
return l}function qe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables"
const t=Xe(e).type
return A(t?.aliasName||t?.name)}let Ke=0,Ze=new WeakMap
function Je(){const e=Xe("getUid")
if(Ze.has(e))return Ze.get(e)
{const t=Ke++
return Ze.set(e,t),t}}function Qe(e){for(;e;){if(tt(e))return e
e=e.parentElement}return document.scrollingElement}function et(e,t){const a=[]
if(t&&e&&!t.contains(e))return a
for(;e&&(tt(e)&&a.push(e),e!==t);)e=e.parentElement
return a}function tt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function at(e){const{provides:t}=Xe("injectSelf")
if(t&&e in t)return t[e]}function lt(e){Xe("useRender").render=e}Je.reset=()=>{Ke=0,Ze=new WeakMap}
const ot=Symbol.for("vuetify:layout"),nt=Symbol.for("vuetify:layout-item"),rt=Te({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),it=Te({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item")
function st(){const e=t.inject(ot)
if(!e)throw new Error("[Vuetify] Could not find injected layout")
return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function ut(e){const a=t.inject(ot)
if(!a)throw new Error("[Vuetify] Could not find injected layout")
const l=e.id??`layout-item-${Je()}`,o=Xe("useLayoutItem")
t.provide(nt,{id:l})
const n=t.ref(!1)
t.onDeactivated((()=>n.value=!0)),t.onActivated((()=>n.value=!1))
const{layoutItemStyles:r,layoutItemScrimStyles:i}=a.register(o,{...e,active:t.computed((()=>!n.value&&e.active.value)),id:l})
return t.onBeforeUnmount((()=>a.unregister(l))),{layoutItemStyles:r,layoutRect:a.layoutRect,layoutItemScrimStyles:i}}function ct(e){const a=t.inject(ot,null),l=t.computed((()=>a?a.rootZIndex.value-100:1e3)),o=t.ref([]),n=t.reactive(new Map),i=t.reactive(new Map),s=t.reactive(new Map),u=t.reactive(new Map),c=t.reactive(new Map),{resizeRef:d,contentRect:v}=r(),p=t.computed((()=>{const t=new Map,a=e.overlaps??[]
for(const e of a.filter((e=>e.includes(":")))){const[a,l]=e.split(":")
if(!o.value.includes(a)||!o.value.includes(l))continue
const r=n.get(a),s=n.get(l),u=i.get(a),c=i.get(l)
r&&s&&u&&c&&(t.set(l,{position:r.value,amount:parseInt(u.value,10)}),t.set(a,{position:s.value,amount:-parseInt(c.value,10)}))}return t})),f=t.computed((()=>{const e=[...new Set([...s.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[]
for(const a of e){const e=o.value.filter((e=>s.get(e)?.value===a))
t.push(...e)}return((e,t,a,l)=>{let o={top:0,left:0,right:0,bottom:0}
const n=[{id:"",layer:{...o}}]
for(const r of e){const e=t.get(r),i=a.get(r),s=l.get(r)
if(!e||!i||!s)continue
const u={...o,[e.value]:parseInt(o[e.value],10)+(s.value?parseInt(i.value,10):0)}
n.push({id:r,layer:u}),o=u}return n})(t,n,i,u)})),m=t.computed((()=>!Array.from(c.values()).some((e=>e.value)))),h=t.computed((()=>f.value[f.value.length-1].layer)),y=t.computed((()=>({"--v-layout-left":g(h.value.left),"--v-layout-right":g(h.value.right),"--v-layout-top":g(h.value.top),"--v-layout-bottom":g(h.value.bottom),...m.value?void 0:{transition:"none"}}))),b=t.computed((()=>f.value.slice(1).map(((e,t)=>{let{id:a}=e
const{layer:l}=f.value[t],o=i.get(a),r=n.get(a)
return{id:a,...l,size:Number(o.value),position:r.value}})))),V=e=>b.value.find((t=>t.id===e)),S=Xe("createLayout"),w=t.ref(!1)
t.onMounted((()=>{w.value=!0})),t.provide(ot,{register:(e,a)=>{let{id:r,order:d,position:v,layoutSize:g,elementSize:h,active:y,disableTransitions:V,absolute:k}=a
s.set(r,d),n.set(r,v),i.set(r,g),u.set(r,y),V&&c.set(r,V)
const x=$(nt,S?.vnode).indexOf(e)
x>-1?o.value.splice(x,0,r):o.value.push(r)
const C=t.computed((()=>b.value.findIndex((e=>e.id===r)))),N=t.computed((()=>l.value+2*f.value.length-2*C.value))
return{layoutItemStyles:t.computed((()=>{const e="left"===v.value||"right"===v.value,t="right"===v.value,a="bottom"===v.value,o={[v.value]:0,zIndex:N.value,transform:`translate${e?"X":"Y"}(${(y.value?0:-110)*(t||a?-1:1)}%)`,position:k.value||1e3!==l.value?"absolute":"fixed",...m.value?void 0:{transition:"none"}}
if(!w.value)return o
const n=b.value[C.value]
if(!n)throw new Error(`[Vuetify] Could not find layout item "${r}"`)
const i=p.value.get(r)
return i&&(n[i.position]+=i.amount),{...o,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:h.value?`${h.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==v.value?`${n.top}px`:void 0,bottom:"top"!==v.value?`${n.bottom}px`:void 0,width:e?h.value?`${h.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),layoutItemScrimStyles:t.computed((()=>({zIndex:N.value-1}))),zIndex:N}},unregister:e=>{s.delete(e),n.delete(e),i.delete(e),u.delete(e),c.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:h,mainStyles:y,getLayoutItem:V,items:b,layoutRect:v,rootZIndex:l})
return{layoutClasses:t.computed((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),layoutStyles:t.computed((()=>({zIndex:l.value,position:a?"relative":void 0,overflow:a?"hidden":void 0}))),getLayoutItem:V,items:b,layoutRect:v,layoutRef:d}}const dt=2.4,vt=.2126729,pt=.7151522,ft=.072175,mt=.03,gt=12.82051282051282,ht=.06
function yt(e,t){const a=(e.r/255)**dt,l=(e.g/255)**dt,o=(e.b/255)**dt,n=(t.r/255)**dt,r=(t.g/255)**dt,i=(t.b/255)**dt
let s,u=a*vt+l*pt+o*ft,c=n*vt+r*pt+i*ft
if(u<=mt&&(u+=(mt-u)**1.45),c<=mt&&(c+=(mt-c)**1.45),Math.abs(c-u)<5e-4)return 0
if(c>u){const e=1.25*(c**.55-u**.58)
s=e<.001?0:e<.078?e-e*gt*ht:e-ht}else{const e=1.25*(c**.62-u**.57)
s=e>-.001?0:e>-.078?e-e*gt*ht:e+ht}return 100*s}const bt=Symbol.for("vuetify:theme"),Vt=Te({theme:String},"theme"),St={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#6200EE","primary-darken-1":"#3700B3",secondary:"#03DAC6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-variant":"#BDBDBD","on-surface-variant":"#424242",primary:"#BB86FC","primary-darken-1":"#3700B3",secondary:"#03DAC5","secondary-darken-1":"#03DAC5",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
function wt(e){const l=t.reactive(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:St
if(!e)return{...St,isDisabled:!0}
const t={}
for(const[a,l]of Object.entries(e.themes??{})){const e=l.dark||"dark"===a?St.themes?.dark:St.themes?.light
t[a]=B(e,l)}return B(St,{...e,themes:t})}(e)),o=t.ref(l.defaultTheme),n=t.ref(l.themes),r=t.computed((()=>{const e={}
for(const[t,a]of Object.entries(n.value)){const o=e[t]={...a,colors:{...a.colors}}
if(l.variations)for(const e of l.variations.colors){const t=o.colors[e]
if(t)for(const a of["lighten","darken"]){const n="lighten"===a?Ae:$e
for(const r of m(l.variations[a],1))o.colors[`${e}-${a}-${r}`]=Ce(n(ye(t),r))}}for(const e of Object.keys(o.colors)){if(/^on-[a-z]/.test(e)||o.colors[`on-${e}`])continue
const t=`on-${e}`,a=ye(o.colors[e]),l=Math.abs(yt(ye(0),a)),n=Math.abs(yt(ye(16777215),a))
o.colors[t]=n>Math.min(l,50)?"#fff":"#000"}}return e})),i=t.computed((()=>r.value[o.value])),s=t.computed((()=>{const e=[]
i.value.dark&&Ct(e,":root",["color-scheme: dark"]),Ct(e,":root",Nt(i.value))
for(const[t,a]of Object.entries(r.value))Ct(e,`.v-theme--${t}`,["color-scheme: "+(a.dark?"dark":"normal"),...Nt(a)])
const t=[],a=[],l=new Set(Object.values(r.value).flatMap((e=>Object.keys(e.colors))))
for(const e of l)/^on-[a-z]/.test(e)?Ct(a,`.${e}`,[`color: rgb(var(--v-theme-${e})) !important`]):(Ct(t,`.bg-${e}`,[`--v-theme-overlay-multiplier: var(--v-theme-${e}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${e})) !important`,`color: rgb(var(--v-theme-on-${e})) !important`]),Ct(a,`.text-${e}`,[`color: rgb(var(--v-theme-${e})) !important`]),Ct(a,`.border-${e}`,[`--v-border-color: var(--v-theme-${e})`]))
return e.push(...t,...a),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}))
function u(){return{style:[{children:s.value,id:"vuetify-theme-stylesheet",nonce:l.cspNonce||!1}]}}const c=t.computed((()=>l.isDisabled?void 0:`v-theme--${o.value}`))
return{install:function(e){const o=e._context.provides.usehead
if(o)if(o.push){const e=o.push(u)
t.watch(s,(()=>{e.patch(u)}))}else a?(o.addHeadObjs(t.computed(u)),t.watchEffect((()=>o.updateDOM()))):o.addHeadObjs(u())
else{let e=a?document.getElementById("vuetify-theme-stylesheet"):null
function o(){if(!l.isDisabled){if("undefined"!=typeof document&&!e){const t=document.createElement("style")
t.type="text/css",t.id="vuetify-theme-stylesheet",l.cspNonce&&t.setAttribute("nonce",l.cspNonce),e=t,document.head.appendChild(e)}e&&(e.innerHTML=s.value)}}t.watch(s,o,{immediate:!0})}},isDisabled:l.isDisabled,name:o,themes:n,current:i,computedThemes:r,themeClasses:c,styles:s,global:{name:o,current:i}}}function kt(e){Xe("provideTheme")
const a=t.inject(bt,null)
if(!a)throw new Error("Could not find Vuetify theme injection")
const l=t.computed((()=>e.theme??a?.name.value)),o=t.computed((()=>a.isDisabled?void 0:`v-theme--${l.value}`)),n={...a,name:l,themeClasses:o}
return t.provide(bt,n),n}function xt(){Xe("useTheme")
const e=t.inject(bt,null)
if(!e)throw new Error("Could not find Vuetify theme injection")
return e}function Ct(e,t,a){e.push(`${t} {\n`,...a.map((e=>`  ${e};\n`)),"}\n")}function Nt(e){const t=e.dark?2:1,a=e.dark?1:2,l=[]
for(const[o,n]of Object.entries(e.colors)){const e=ye(n)
l.push(`--v-theme-${o}: ${e.r},${e.g},${e.b}`),o.startsWith("on-")||l.push(`--v-theme-${o}-overlay-multiplier: ${Ee(n)>.18?t:a}`)}for(const[t,a]of Object.entries(e.variables)){const e="string"==typeof a&&a.startsWith("#")?ye(a):void 0,o=e?`${e.r}, ${e.g}, ${e.b}`:void 0
l.push(`--v-${t}: ${o??a}`)}return l}function _t(e,a,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e
const r=Xe("useProxiedModel"),i=t.ref(void 0!==e[a]?e[a]:l),s=A(a),u=s!==a,c=u?t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)&&!r.vnode.props?.hasOwnProperty(s)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)&&!r.vnode.props?.hasOwnProperty(`onUpdate:${s}`))))):t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)))))
Le((()=>!c.value),(()=>{t.watch((()=>e[a]),(e=>{i.value=e}))}))
const d=t.computed({get(){const t=e[a]
return o(c.value?t:i.value)},set(l){const s=n(l),u=t.toRaw(c.value?e[a]:i.value)
u!==s&&o(u)!==l&&(i.value=s,r?.emit(`update:${a}`,s))}})
return Object.defineProperty(d,"externalValue",{get:()=>c.value?e[a]:i.value}),d}var It={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}}
const Bt="$vuetify.",At=(e,t)=>e.replace(/\{(\d+)\}/g,((e,a)=>String(t[+a]))),$t=(e,t,a)=>function(l){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r]
if(!l.startsWith(Bt))return At(l,n)
const i=l.replace(Bt,""),s=e.value&&a.value[e.value],u=t.value&&a.value[t.value]
let c=p(s,i,null)
return c||(ae(`Translation key "${l}" not found in "${e.value}", trying fallback locale`),c=p(u,i,null)),c||(le(`Translation key "${l}" not found in fallback`),c=l),"string"!=typeof c&&(le(`Translation key "${l}" has a non-string value`),c=l),At(c,n)}
function Et(e,t){return(a,l)=>new Intl.NumberFormat([e.value,t.value],l).format(a)}function Rt(e,a,l){const o=_t(e,a,e[a]??l.value)
return o.value=e[a]??l.value,t.watch(l,(t=>{null==e[a]&&(o.value=l.value)})),o}function Tt(e){return t=>{const a=Rt(t,"locale",e.current),l=Rt(t,"fallback",e.fallback),o=Rt(t,"messages",e.messages)
return{name:"vuetify",current:a,fallback:l,messages:o,t:$t(a,l,o),n:Et(a,l),provide:Tt({current:a,fallback:l,messages:o})}}}const Pt={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1},Lt=Symbol.for("vuetify:locale")
function Mt(e){const a=e?.adapter&&(l=e?.adapter,null!=l.name)?e?.adapter:function(e){const a=t.ref(e?.locale??"en"),l=t.ref(e?.fallback??"en"),o=t.ref({en:It,...e?.messages})
return{name:"vuetify",current:a,fallback:l,messages:o,t:$t(a,l,o),n:Et(a,l),provide:Tt({current:a,fallback:l,messages:o})}}(e)
var l
const o=function(e,a){const l=t.ref(a?.rtl??Pt),o=t.computed((()=>l.value[e.current.value]??!1))
return{isRtl:o,rtl:l,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(a,e)
return{...a,...o}}function Dt(){const e=t.inject(Lt)
if(!e)throw new Error("[Vuetify] Could not find injected locale instance")
return e}function Ft(e){const a=t.inject(Lt)
if(!a)throw new Error("[Vuetify] Could not find injected locale instance")
const l=a.provide(e),o=function(e,a,l){const o=t.computed((()=>l.rtl??a.value[e.current.value]??!1))
return{isRtl:o,rtl:a,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(l,a.rtl,e),n={...l,...o}
return t.provide(Lt,n),n}function Ot(){const e=t.inject(Lt)
if(!e)throw new Error("[Vuetify] Could not find injected rtl instance")
return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const zt=Ue()({name:"VApp",props:{...Pe(),...rt({fullHeight:!0}),...Vt()},setup(e,a){let{slots:l}=a
const o=kt(e),{layoutClasses:n,layoutStyles:r,getLayoutItem:i,items:s,layoutRef:u}=ct(e),{rtlClasses:c}=Ot()
return lt((()=>t.createVNode("div",{ref:u,class:["v-application",o.themeClasses.value,n.value,c.value,e.class],style:[r.value,e.style]},[t.createVNode("div",{class:"v-application__wrap"},[l.default?.()])]))),{getLayoutItem:i,items:s,theme:o}}}),jt=Ue(!1)({name:"VDefaultsProvider",props:{defaults:Object,disabled:Boolean,reset:[Number,String],root:Boolean,scoped:Boolean},setup(e,a){let{slots:l}=a
const{defaults:o,disabled:n,reset:r,root:i,scoped:s}=t.toRefs(e)
return Oe(o,{reset:r,root:i,scoped:s,disabled:n}),()=>l.default?.()}})
function Ht(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"center center",l=arguments.length>2?arguments[2]:void 0
return Ue()({name:e,props:{disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:{type:String,default:l},origin:{type:String,default:a}},setup(a,l){let{slots:o}=l
const n={onBeforeEnter(e){e.style.transformOrigin=a.origin},onLeave(e){if(a.leaveAbsolute){const{offsetTop:t,offsetLeft:a,offsetWidth:l,offsetHeight:o}=e
e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${a}px`,e.style.width=`${l}px`,e.style.height=`${o}px`}a.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(a.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:a,left:l,width:o,height:n}=e._transitionInitialStyles
delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=a||"",e.style.left=l||"",e.style.width=o||"",e.style.height=n||""}}}
return()=>{const l=a.group?t.TransitionGroup:t.Transition
return t.h(l,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},o.default)}}})}function Ut(e,a){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return Ue()({name:e,props:{mode:{type:String,default:l},disabled:Boolean},setup(l,o){let{slots:n}=o
return()=>t.h(t.Transition,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:a},n.default)}})}function Wt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const l=a?"width":"height",o=t.camelize(`offset-${l}`)
return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[l]:e.style[l]}},onEnter(t){const a=t._initialStyle
t.style.setProperty("transition","none","important"),t.style.overflow="hidden"
const n=`${t[o]}px`
t.style[l]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[l]=n}))},onAfterEnter:r,onEnterCancelled:r,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[l]:e.style[l]},e.style.overflow="hidden",e.style[l]=`${e[o]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[l]="0"))},onAfterLeave:n,onLeaveCancelled:n}
function n(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[l]
e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[l]=t),delete e._initialStyle}}const Yt=Ue()({name:"VDialogTransition",props:{target:Object},setup(e,a){let{slots:l}=a
const o={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,a){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility=""
const{x:l,y:o,sx:n,sy:r,speed:i}=Xt(e.target,t),s=ee(t,[{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0},{}],{duration:225*i,easing:"cubic-bezier(0.0, 0, 0.2, 1)"})
Gt(t)?.forEach((e=>{ee(e,[{opacity:0},{opacity:0,offset:.33},{}],{duration:450*i,easing:Ge})})),s.finished.then((()=>a()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,a){await new Promise((e=>requestAnimationFrame(e)))
const{x:l,y:o,sx:n,sy:r,speed:i}=Xt(e.target,t)
ee(t,[{},{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0}],{duration:125*i,easing:"cubic-bezier(0.4, 0, 1, 1)"}).finished.then((()=>a())),Gt(t)?.forEach((e=>{ee(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*i,easing:Ge})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}}
return()=>e.target?t.createVNode(t.Transition,t.mergeProps({name:"dialog-transition"},o,{css:!1}),l):t.createVNode(t.Transition,{name:"dialog-transition"},l)}})
function Gt(e){const t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children
return t&&[...t]}function Xt(e,t){const a=e.getBoundingClientRect(),l=Q(t),[o,n]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[r,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ")
let s=a.left+a.width/2
"left"===r||"left"===i?s-=a.width/2:"right"!==r&&"right"!==i||(s+=a.width/2)
let u=a.top+a.height/2
"top"===r||"top"===i?u-=a.height/2:"bottom"!==r&&"bottom"!==i||(u+=a.height/2)
const c=a.width/l.width,d=a.height/l.height,v=Math.max(1,c,d),p=c/v||0,f=d/v||0,m=l.width*l.height/(window.innerWidth*window.innerHeight),g=m>.12?Math.min(1.5,10*(m-.12)+1):1
return{x:s-(o+l.left),y:u-(n+l.top),sx:p,sy:f,speed:g}}const qt=Ht("fab-transition","center center","out-in"),Kt=Ht("dialog-bottom-transition"),Zt=Ht("dialog-top-transition"),Jt=Ht("fade-transition"),Qt=Ht("scale-transition"),ea=Ht("scroll-x-transition"),ta=Ht("scroll-x-reverse-transition"),aa=Ht("scroll-y-transition"),la=Ht("scroll-y-reverse-transition"),oa=Ht("slide-x-transition"),na=Ht("slide-x-reverse-transition"),ra=Ht("slide-y-transition"),ia=Ht("slide-y-reverse-transition"),sa=Ut("expand-transition",Wt()),ua=Ut("expand-x-transition",Wt("",!0)),ca=Te({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension")
function da(e){return{dimensionStyles:t.computed((()=>({height:g(e.height),maxHeight:g(e.maxHeight),maxWidth:g(e.maxWidth),minHeight:g(e.minHeight),minWidth:g(e.minWidth),width:g(e.width)})))}}const va=Ue()({name:"VResponsive",props:{aspectRatio:[String,Number],contentClass:String,...Pe(),...ca()},setup(e,a){let{slots:l}=a
const{aspectStyles:o}=function(e){return{aspectStyles:t.computed((()=>{const t=Number(e.aspectRatio)
return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}(e),{dimensionStyles:n}=da(e)
return lt((()=>t.createVNode("div",{class:["v-responsive",e.class],style:[n.value,e.style]},[t.createVNode("div",{class:"v-responsive__sizer",style:o.value},null),l.additional?.(),l.default&&t.createVNode("div",{class:["v-responsive__content",e.contentClass]},[l.default()])]))),{}}})
function pa(e,t){const a=e._observe?.[t.instance.$.uid]
a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const fa={mounted:function(e,t){if(!l)return
const a=t.modifiers||{},o=t.value,{handler:n,options:r}="object"==typeof o?o:{handler:o,options:{}},i=new IntersectionObserver((function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0
const r=e._observe?.[t.instance.$.uid]
if(!r)return
const i=l.some((e=>e.isIntersecting))
!n||a.quiet&&!r.init||a.once&&!i&&!r.init||n(i,l,o),i&&a.once?pa(e,t):r.init=!0}),r)
e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)},unmounted:pa},ma=Te({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),ga=(e,a)=>{let{slots:l}=a
const{transition:o,...n}=e,{component:r=t.Transition,...i}="object"==typeof o?o:{}
return t.h(r,t.mergeProps("string"==typeof o?{name:o}:i,n),l)},ha=Ue()({name:"VImg",directives:{intersect:fa},props:{aspectRatio:[String,Number],alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,width:[String,Number],...Pe(),...ma()},emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:o,slots:n}=a
const r=t.ref(""),i=t.ref(),s=t.ref(e.eager?"loading":"idle"),u=t.ref(),c=t.ref(),d=t.computed((()=>e.src&&"object"==typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),v=t.computed((()=>d.value.aspect||u.value/c.value||0))
function p(a){if((!e.eager||!a)&&(!l||a||e.eager)){if(s.value="loading",d.value.lazySrc){const e=new Image
e.src=d.value.lazySrc,b(e,null)}d.value.src&&t.nextTick((()=>{if(o("loadstart",i.value?.currentSrc||d.value.src),i.value?.complete){if(i.value.naturalWidth||m(),"error"===s.value)return
v.value||b(i.value,null),f()}else v.value||b(i.value),h()}))}}function f(){h(),s.value="loaded",o("load",i.value?.currentSrc||d.value.src)}function m(){s.value="error",o("error",i.value?.currentSrc||d.value.src)}function h(){const e=i.value
e&&(r.value=e.currentSrc||e.src)}t.watch((()=>e.src),(()=>{p("idle"!==s.value)})),t.watch(v,((e,t)=>{!e&&t&&i.value&&b(i.value)})),t.onBeforeMount((()=>p()))
let y=-1
function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100
const a=()=>{clearTimeout(y)
const{naturalHeight:l,naturalWidth:o}=e
l||o?(u.value=o,c.value=l):e.complete||"loading"!==s.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,c.value=1):y=window.setTimeout(a,t)}
a()}const V=t.computed((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),S=()=>{if(!d.value.src||"idle"===s.value)return null
const a=t.createVNode("img",{class:["v-img__img",V.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:i,onLoad:f,onError:m},null),l=n.sources?.()
return t.createVNode(ga,{transition:e.transition,appear:!0},{default:()=>[t.withDirectives(l?t.createVNode("picture",{class:"v-img__picture"},[l,a]):a,[[t.vShow,"loaded"===s.value]])]})},w=()=>t.createVNode(ga,{transition:e.transition},{default:()=>[d.value.lazySrc&&"loaded"!==s.value&&t.createVNode("img",{class:["v-img__img","v-img__img--preload",V.value],src:d.value.lazySrc,alt:e.alt},null)]}),k=()=>n.placeholder?t.createVNode(ga,{transition:e.transition,appear:!0},{default:()=>[("loading"===s.value||"error"===s.value&&!n.error)&&t.createVNode("div",{class:"v-img__placeholder"},[n.placeholder()])]}):null,x=()=>n.error?t.createVNode(ga,{transition:e.transition,appear:!0},{default:()=>["error"===s.value&&t.createVNode("div",{class:"v-img__error"},[n.error()])]}):null,C=()=>e.gradient?t.createVNode("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,N=t.ref(!1)
{const e=t.watch(v,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{N.value=!0}))})),e())}))}return lt((()=>t.withDirectives(t.createVNode(va,{class:["v-img",{"v-img--booting":!N.value},e.class],style:[{width:g("auto"===e.width?u.value:e.width)},e.style],aspectRatio:v.value,"aria-label":e.alt,role:e.alt?"img":void 0},{additional:()=>t.createVNode(t.Fragment,null,[t.createVNode(S,null,null),t.createVNode(w,null,null),t.createVNode(C,null,null),t.createVNode(k,null,null),t.createVNode(x,null,null)]),default:n.default}),[[t.resolveDirective("intersect"),{handler:p,options:e.options},null,{once:!0}]]))),{currentSrc:r,image:i,state:s,naturalWidth:u,naturalHeight:c}}}),ya=Te({tag:{type:String,default:"div"}},"tag"),ba=Te({text:String,...Pe(),...ya()},"v-toolbar-title"),Va=Ue()({name:"VToolbarTitle",props:ba(),setup(e,a){let{slots:l}=a
return lt((()=>{const a=!!(l.default||l.text||e.text)
return t.createVNode(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[a&&t.createVNode("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,l.default?.()])]})})),{}}}),Sa=Te({border:[Boolean,Number,String]},"border")
function wa(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=t.computed((()=>{const l=t.isRef(e)?e.value:e.border,o=[]
if(!0===l||""===l)o.push(`${a}--border`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))o.push(`border-${e}`)
return o}))
return{borderClasses:l}}const ka=Te({elevation:{type:[Number,String],validator(e){const t=parseInt(e)
return!isNaN(t)&&t>=0&&t<=24}}},"elevation")
function xa(e){return{elevationClasses:t.computed((()=>{const a=t.isRef(e)?e.value:e.elevation,l=[]
return null==a||l.push(`elevation-${a}`),l}))}}const Ca=Te({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded")
function Na(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=t.computed((()=>{const l=t.isRef(e)?e.value:e.rounded,o=[]
if(!0===l||""===l)o.push(`${a}--rounded`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))o.push(`rounded-${e}`)
return o}))
return{roundedClasses:l}}function _a(e){return P((()=>{const t=[],a={}
return e.value.background&&(he(e.value.background)?a.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(he(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}}))}function Ia(e,a){const l=t.computed((()=>({text:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=_a(l)
return{textColorClasses:o,textColorStyles:n}}function Ba(e,a){const l=t.computed((()=>({background:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=_a(l)
return{backgroundColorClasses:o,backgroundColorStyles:n}}const Aa=[null,"prominent","default","comfortable","compact"],$a=Te({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Aa.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Sa(),...Pe(),...ka(),...Ca(),...ya({tag:"header"}),...Vt()},"v-toolbar"),Ea=Ue()({name:"VToolbar",props:$a(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ba(t.toRef(e,"color")),{borderClasses:r}=wa(e),{elevationClasses:i}=xa(e),{roundedClasses:s}=Na(e),{themeClasses:u}=kt(e),c=t.ref(!(!e.extended&&!l.extension?.())),d=t.computed((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),v=t.computed((()=>c.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0))
return Oe({VBtn:{variant:"text"}}),lt((()=>{const a=!(!e.title&&!l.title),p=!(!l.image&&!e.image),f=l.extension?.()
return c.value=!(!e.extended&&!f),t.createVNode(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,r.value,i.value,s.value,u.value,e.class],style:[n.value,e.style]},{default:()=>[p&&t.createVNode("div",{key:"image",class:"v-toolbar__image"},[l.image?t.createVNode(jt,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t.createVNode(ha,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(jt,{defaults:{VTabs:{height:g(d.value)}}},{default:()=>[t.createVNode("div",{class:"v-toolbar__content",style:{height:g(d.value)}},[l.prepend&&t.createVNode("div",{class:"v-toolbar__prepend"},[l.prepend?.()]),a&&t.createVNode(Va,{key:"title",text:e.title},{text:l.title}),l.default?.(),l.append&&t.createVNode("div",{class:"v-toolbar__append"},[l.append?.()])])]}),t.createVNode(jt,{defaults:{VTabs:{height:g(v.value)}}},{default:()=>[t.createVNode(sa,null,{default:()=>[c.value&&t.createVNode("div",{class:"v-toolbar__extension",style:{height:g(v.value)}},[f])]})]})]})})),{contentHeight:d,extensionHeight:v}}}),Ra=Te({scrollTarget:{type:String},scrollThreshold:{type:[String,Number]}},"scroll")
function Ta(){const e=t.ref(!1)
t.onMounted((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}))
return{ssrBootStyles:t.computed((()=>e.value?void 0:{transition:"none !important"})),isBooted:t.readonly(e)}}const Pa=Ue()({name:"VAppBar",props:{scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...$a(),...it(),...Ra(),height:{type:[Number,String],default:64}},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.ref(),n=_t(e,"modelValue"),r=t.computed((()=>{const t=new Set(e.scrollBehavior?.split(" ")??[])
return{hide:t.has("hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}})),i=t.computed((()=>{const e=r.value
return e.hide||e.inverted||e.collapse||e.elevate||e.fadeImage||!n.value})),{currentScroll:s,currentThreshold:u,computedScrollThreshold:c,isScrollingUp:d}=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{thresholdMetCallback:l,scrollThreshold:o,canScroll:n}=a
let r=0
const i=t.ref(null),s=t.ref(0),u=t.ref(0),c=t.ref(0),d=t.ref(!1),v=t.ref(!1),p=t.computed((()=>Number(e.scrollThreshold??o??300))),f=()=>{const e=i.value
!e||n&&!n.value||(r=s.value,s.value="window"in e?e.pageYOffset:e.scrollTop,v.value=s.value<r,c.value=Math.abs(s.value-p.value))}
return t.watch(v,(()=>{u.value=u.value||s.value})),t.watch(d,(()=>{u.value=0})),t.onMounted((()=>{t.watch((()=>e.scrollTarget),(e=>{const a=e?document.querySelector(e):window
a?a!==i.value&&(i.value?.removeEventListener("scroll",f),i.value=a,i.value.addEventListener("scroll",f,{passive:!0})):ae(`Unable to locate element with identifier ${e}`,t.getCurrentInstance())}),{immediate:!0})})),t.onBeforeUnmount((()=>{i.value?.removeEventListener("scroll",f)})),l&&t.watch((()=>Math.abs(s.value-u.value)>p.value),(e=>{e&&l({currentThreshold:c.value,isScrollingUp:v.value,savedScroll:u})}),{immediate:!0}),n&&t.watch(n,f,{immediate:!0}),{computedScrollThreshold:p,currentScroll:s,currentThreshold:c,isScrollActive:d,isScrollingUp:v,savedScroll:u}}(e,{canScroll:i}),v=t.computed((()=>e.collapse||r.value.collapse&&(r.value.inverted?s.value<1:s.value>0))),p=t.computed((()=>e.flat||r.value.elevate&&s.value===(r.value.inverted?1:0))),f=t.computed((()=>Math.min((u.value-s.value)/u.value||1,1))),m=t.computed((()=>r.value.fadeImage?r.value.inverted?1-f.value:f.value:void 0)),g=t.computed((()=>{if(r.value.hide&&r.value.inverted)return 0
return(o.value?.contentHeight??0)+(o.value?.extensionHeight??0)}))
function h(){const e=s.value
r.value.hide?r.value.inverted?n.value=e>c.value:n.value=d.value||e<c.value:r.value.inverted?n.value=0===s.value:n.value=!0}t.watch(s,h,{immediate:!0}),t.watch(r,h)
const{ssrBootStyles:y}=Ta(),{layoutItemStyles:b}=ut({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"location"),layoutSize:g,elementSize:t.ref(void 0),active:n,absolute:t.toRef(e,"absolute")})
return lt((()=>{const[a]=Ea.filterProps(e)
return t.createVNode(Ea,t.mergeProps({ref:o,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{...b.value,"--v-toolbar-image-opacity":m.value,height:void 0,...y.value},e.style]},a,{collapse:v.value,flat:p.value}),l)})),{}}}),La=[null,"default","comfortable","compact"],Ma=Te({density:{type:String,default:"default",validator:e=>La.includes(e)}},"density")
function Da(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=t.computed((()=>`${a}--density-${e.density}`))
return{densityClasses:l}}const Fa=["elevated","flat","tonal","outlined","text","plain"]
function Oa(e,a){return t.createVNode(t.Fragment,null,[e&&t.createVNode("span",{key:"overlay",class:`${a}__overlay`},null),t.createVNode("span",{key:"underlay",class:`${a}__underlay`},null)])}const za=Te({color:String,variant:{type:String,default:"elevated",validator:e=>Fa.includes(e)}},"variant")
function ja(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=t.computed((()=>{const{variant:l}=t.unref(e)
return`${a}--variant-${l}`})),{colorClasses:o,colorStyles:n}=_a(t.computed((()=>{const{variant:a,color:l}=t.unref(e)
return{[["elevated","flat"].includes(a)?"background":"text"]:l}})))
return{colorClasses:o,colorStyles:n,variantClasses:l}}const Ha=Te({divided:Boolean,...Sa(),...Pe(),...Ma(),...ka(),...Ca(),...ya(),...Vt(),...za()},"v-btn-group"),Ua=Ue()({name:"VBtnGroup",props:Ha(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{densityClasses:n}=Da(e),{borderClasses:r}=wa(e),{elevationClasses:i}=xa(e),{roundedClasses:s}=Na(e)
Oe({VBtn:{height:"auto",color:t.toRef(e,"color"),density:t.toRef(e,"density"),flat:!0,variant:t.toRef(e,"variant")}}),lt((()=>t.createVNode(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},o.value,r.value,n.value,i.value,s.value,e.class],style:e.style},l)))}}),Wa=Te({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Ya=Te({value:null,disabled:Boolean,selectedClass:String},"group-item")
function Ga(e,a){let l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
const o=Xe("useGroupItem")
if(!o)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function")
const n=Je()
t.provide(Symbol.for(`${a.description}:id`),n)
const r=t.inject(a,null)
if(!r){if(!l)return r
throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const i=t.toRef(e,"value"),s=t.computed((()=>r.disabled.value||e.disabled))
r.register({id:n,value:i,disabled:s},o),t.onBeforeUnmount((()=>{r.unregister(n)}))
const u=t.computed((()=>r.isSelected(n))),c=t.computed((()=>u.value&&[r.selectedClass.value,e.selectedClass]))
return t.watch(u,(e=>{o.emit("group:selected",{value:e})})),{id:n,isSelected:u,toggle:()=>r.select(n,!u.value),select:e=>r.select(n,e),selectedClass:c,value:i,disabled:s,group:r}}function Xa(e,a){let l=!1
const o=t.reactive([]),n=_t(e,"modelValue",[],(e=>null==e?[]:qa(o,x(e))),(t=>{const a=function(e,t){const a=[]
for(let l=0;l<e.length;l++){const o=e[l]
t.includes(o.id)&&a.push(null!=o.value?o.value:l)}return a}(o,t)
return e.multiple?a:a[0]})),r=Xe("useGroup")
function i(){const t=o.find((e=>!e.disabled))
t&&"force"===e.mandatory&&!n.value.length&&(n.value=[t.id])}function s(t){if(e.multiple&&ae('This method is not supported when using "multiple" prop'),n.value.length){const e=n.value[0],a=o.findIndex((t=>t.id===e))
let l=(a+t)%o.length,r=o[l]
for(;r.disabled&&l!==a;)l=(l+t)%o.length,r=o[l]
if(r.disabled)return
n.value=[o[l].id]}else{const e=o.find((e=>!e.disabled))
e&&(n.value=[e.id])}}t.onMounted((()=>{i()})),t.onBeforeUnmount((()=>{l=!0}))
const u={register:function(e,t){const l=e,n=$(Symbol.for(`${a.description}:id`),r?.vnode).indexOf(t)
n>-1?o.splice(n,0,l):o.push(l)},unregister:function(e){if(l)return
i()
const t=o.findIndex((t=>t.id===e))
o.splice(t,1)},selected:n,select:function(t,a){const l=o.find((e=>e.id===t))
if(!a||!l?.disabled)if(e.multiple){const l=n.value.slice(),o=l.findIndex((e=>e===t)),r=~o
if(a=a??!r,r&&e.mandatory&&l.length<=1)return
if(!r&&null!=e.max&&l.length+1>e.max)return
o<0&&a?l.push(t):o>=0&&!a&&l.splice(o,1),n.value=l}else{const l=n.value.includes(t)
if(e.mandatory&&l)return
n.value=a??!l?[t]:[]}},disabled:t.toRef(e,"disabled"),prev:()=>s(o.length-1),next:()=>s(1),isSelected:e=>n.value.includes(e),selectedClass:t.computed((()=>e.selectedClass)),items:t.computed((()=>o)),getItemIndex:e=>function(e,t){const a=qa(e,[t])
return a.length?e.findIndex((e=>e.id===a[0])):-1}(o,e)}
return t.provide(a,u),u}function qa(e,t){const a=[]
for(let l=0;l<e.length;l++){const o=e[l]
null!=o.value?null!=t.find((e=>v(e,o.value)))&&a.push(o.id):t.includes(l)&&a.push(o.id)}return a}const Ka=Symbol.for("vuetify:v-btn-toggle"),Za=Ue()({name:"VBtnToggle",props:{...Ha(),...Wa()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{isSelected:o,next:n,prev:r,select:i,selected:s}=Xa(e,Ka)
return lt((()=>{const[a]=Ua.filterProps(e)
return t.createVNode(Ua,t.mergeProps({class:["v-btn-toggle",e.class]},a,{style:e.style}),{default:()=>[l.default?.({isSelected:o,next:n,prev:r,select:i,selected:s})]})})),{next:n,prev:r,select:i}}}),Ja={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"},Qa={component:e=>t.h(rl,{...e,class:"mdi"})},el=[String,Function,Object,Array],tl=Symbol.for("vuetify:icons"),al=Te({icon:{type:el},tag:{type:String,required:!0}},"icon"),ll=Ue()({name:"VComponentIcon",props:al(),setup(e,a){let{slots:l}=a
return()=>{const a=e.icon
return t.createVNode(e.tag,null,{default:()=>[e.icon?t.createVNode(a,null,null):l.default?.()]})}}}),ol=He({name:"VSvgIcon",inheritAttrs:!1,props:al(),setup(e,a){let{attrs:l}=a
return()=>t.createVNode(e.tag,t.mergeProps(l,{style:null}),{default:()=>[t.createVNode("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map((e=>Array.isArray(e)?t.createVNode("path",{d:e[0],"fill-opacity":e[1]},null):t.createVNode("path",{d:e},null))):t.createVNode("path",{d:e.icon},null)])]})}}),nl=He({name:"VLigatureIcon",props:al(),setup:e=>()=>t.createVNode(e.tag,null,{default:()=>[e.icon]})}),rl=He({name:"VClassIcon",props:al(),setup:e=>()=>t.createVNode(e.tag,{class:e.icon},null)}),il={svg:{component:ol},class:{component:rl}}
function sl(e){return B({defaultSet:"mdi",sets:{...il,mdi:Qa},aliases:Ja},e)}const ul=["x-small","small","default","large","x-large"],cl=Te({size:{type:[String,Number],default:"default"}},"size")
function dl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
return P((()=>{let a,l
return L(ul,e.size)?a=`${t}--size-${e.size}`:e.size&&(l={width:g(e.size),height:g(e.size)}),{sizeClasses:a,sizeStyles:l}}))}const vl=Te({color:String,start:Boolean,end:Boolean,icon:el,...Pe(),...cl(),...ya({tag:"i"}),...Vt()},"v-icon"),pl=Ue()({name:"VIcon",props:vl(),setup(e,a){let l,{attrs:o,slots:n}=a
n.default&&(l=t.computed((()=>{const e=n.default?.()
if(e)return e.filter((e=>e.type===t.Text&&e.children&&"string"==typeof e.children))[0]?.children})))
const{themeClasses:r}=kt(e),{iconData:i}=(e=>{const a=t.inject(tl)
if(!a)throw new Error("Missing Vuetify Icons provide!")
return{iconData:t.computed((()=>{const l=t.isRef(e)?e.value:e.icon
if(!l)return{component:ll}
let o=l
if("string"==typeof o&&(o=o.trim(),o.startsWith("$")&&(o=a.aliases?.[o.slice(1)])),!o)throw new Error(`Could not find aliased icon "${l}"`)
if(Array.isArray(o))return{component:ol,icon:o}
if("string"!=typeof o)return{component:ll,icon:o}
const n=Object.keys(a.sets).find((e=>"string"==typeof o&&o.startsWith(`${e}:`))),r=n?o.slice(n.length+1):o
return{component:a.sets[n??a.defaultSet].component,icon:r}}))}})(l||e),{sizeClasses:s}=dl(e),{textColorClasses:u,textColorStyles:c}=Ia(t.toRef(e,"color"))
return lt((()=>t.createVNode(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,s.value,u.value,{"v-icon--clickable":!!o.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:g(e.size),height:g(e.size),width:g(e.size)},c.value,e.style],role:o.onClick?"button":void 0,"aria-hidden":!o.onClick},{default:()=>[n.default?.()]}))),{}}})
function fl(e,a){const o=t.ref(),n=t.ref(!1)
if(l){const l=new IntersectionObserver((t=>{e?.(t,l),n.value=!!t.find((e=>e.isIntersecting))}),a)
t.onBeforeUnmount((()=>{l.disconnect()})),t.watch(o,((e,t)=>{t&&(l.unobserve(t),n.value=!1),e&&l.observe(e)}),{flush:"post"})}return{intersectionRef:o,isIntersecting:n}}const ml=Ue()({name:"VProgressCircular",props:{bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...Pe(),...cl(),...ya({tag:"div"}),...Vt()},setup(e,a){let{slots:l}=a
const o=2*Math.PI*20,n=t.ref(),{themeClasses:i}=kt(e),{sizeClasses:s,sizeStyles:u}=dl(e),{textColorClasses:c,textColorStyles:d}=Ia(t.toRef(e,"color")),{textColorClasses:v,textColorStyles:p}=Ia(t.toRef(e,"bgColor")),{intersectionRef:f,isIntersecting:m}=fl(),{resizeRef:h,contentRect:y}=r(),b=t.computed((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),V=t.computed((()=>Number(e.width))),S=t.computed((()=>u.value?Number(e.size):y.value?y.value.width:Math.max(V.value,32))),w=t.computed((()=>20/(1-V.value/S.value)*2)),k=t.computed((()=>V.value/S.value*w.value)),x=t.computed((()=>g((100-b.value)/100*o)))
return t.watchEffect((()=>{f.value=n.value,h.value=n.value})),lt((()=>t.createVNode(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":m.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},i.value,s.value,c.value,e.class],style:[u.value,d.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:b.value},{default:()=>[t.createVNode("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[t.createVNode("circle",{class:["v-progress-circular__underlay",v.value],style:p.value,fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":k.value,"stroke-dasharray":o,"stroke-dashoffset":0},null),t.createVNode("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":k.value,"stroke-dasharray":o,"stroke-dashoffset":x.value},null)]),l.default&&t.createVNode("div",{class:"v-progress-circular__content"},[l.default({value:b.value})])]}))),{}}}),gl=Symbol("rippleStop")
function hl(e,t){e.style.transform=t,e.style.webkitTransform=t}function yl(e){return"TouchEvent"===e.constructor.name}function bl(e){return"KeyboardEvent"===e.constructor.name}const Vl={show(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t?._ripple?.enabled)return
const l=document.createElement("span"),o=document.createElement("span")
l.appendChild(o),l.className="v-ripple__container",a.class&&(l.className+=` ${a.class}`)
const{radius:n,scale:r,x:i,y:s,centerX:u,centerY:c}=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=0,o=0
if(!bl(e)){const a=t.getBoundingClientRect(),n=yl(e)?e.touches[e.touches.length-1]:e
l=n.clientX-a.left,o=n.clientY-a.top}let n=0,r=.3
t._ripple?.circle?(r=.15,n=t.clientWidth/2,n=a.center?n:n+Math.sqrt((l-n)**2+(o-n)**2)/4):n=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2
const i=(t.clientWidth-2*n)/2+"px",s=(t.clientHeight-2*n)/2+"px",u=a.center?i:l-n+"px",c=a.center?s:o-n+"px"
return{radius:n,scale:r,x:u,y:c,centerX:i,centerY:s}}(e,t,a),d=2*n+"px"
o.className="v-ripple__animation",o.style.width=d,o.style.height=d,t.appendChild(l)
const v=window.getComputedStyle(t)
v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),hl(o,`translate(${i}, ${s}) scale3d(${r},${r},${r})`),o.dataset.activated=String(performance.now()),setTimeout((()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),hl(o,`translate(${u}, ${c}) scale3d(1,1,1)`)}),0)},hide(e){if(!e?._ripple?.enabled)return
const t=e.getElementsByClassName("v-ripple__animation")
if(0===t.length)return
const a=t[t.length-1]
if(a.dataset.isHiding)return
a.dataset.isHiding="true"
const l=performance.now()-Number(a.dataset.activated),o=Math.max(250-l,0)
setTimeout((()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout((()=>{1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode?.parentNode===e&&e.removeChild(a.parentNode)}),300)}),o)}}
function Sl(e){return void 0===e||!!e}function wl(e){const t={},a=e.currentTarget
if(a?._ripple&&!a._ripple.touched&&!e[gl]){if(e[gl]=!0,yl(e))a._ripple.touched=!0,a._ripple.isTouch=!0
else if(a._ripple.isTouch)return
if(t.center=a._ripple.centered||bl(e),a._ripple.class&&(t.class=a._ripple.class),yl(e)){if(a._ripple.showTimerCommit)return
a._ripple.showTimerCommit=()=>{Vl.show(e,a,t)},a._ripple.showTimer=window.setTimeout((()=>{a?._ripple?.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)}),80)}else Vl.show(e,a,t)}}function kl(e){e[gl]=!0}function xl(e){const t=e.currentTarget
if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{xl(e)})))
window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),Vl.hide(t)}}function Cl(e){const t=e.currentTarget
t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let Nl=!1
function _l(e){Nl||e.keyCode!==y.enter&&e.keyCode!==y.space||(Nl=!0,wl(e))}function Il(e){Nl=!1,xl(e)}function Bl(e){Nl&&(Nl=!1,xl(e))}function Al(e,t,a){const{value:l,modifiers:o}=t,n=Sl(l)
if(n||Vl.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=n,e._ripple.centered=o.center,e._ripple.circle=o.circle,h(l)&&l.class&&(e._ripple.class=l.class),n&&!a){if(o.stop)return e.addEventListener("touchstart",kl,{passive:!0}),void e.addEventListener("mousedown",kl)
e.addEventListener("touchstart",wl,{passive:!0}),e.addEventListener("touchend",xl,{passive:!0}),e.addEventListener("touchmove",Cl,{passive:!0}),e.addEventListener("touchcancel",xl),e.addEventListener("mousedown",wl),e.addEventListener("mouseup",xl),e.addEventListener("mouseleave",xl),e.addEventListener("keydown",_l),e.addEventListener("keyup",Il),e.addEventListener("blur",Bl),e.addEventListener("dragstart",xl,{passive:!0})}else!n&&a&&$l(e)}function $l(e){e.removeEventListener("mousedown",wl),e.removeEventListener("touchstart",wl),e.removeEventListener("touchend",xl),e.removeEventListener("touchmove",Cl),e.removeEventListener("touchcancel",xl),e.removeEventListener("mouseup",xl),e.removeEventListener("mouseleave",xl),e.removeEventListener("keydown",_l),e.removeEventListener("keyup",Il),e.removeEventListener("dragstart",xl),e.removeEventListener("blur",Bl)}const El={mounted:function(e,t){Al(e,t,!1)},unmounted:function(e){delete e._ripple,$l(e)},updated:function(e,t){if(t.value===t.oldValue)return
Al(e,t,Sl(t.oldValue))}},Rl={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Tl=Te({location:String},"location")
function Pl(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2?arguments[2]:void 0
const{isRtl:o}=Ot(),n=t.computed((()=>{if(!e.location)return{}
const{side:t,align:n}=W(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value)
function r(e){return l?l(e):0}const i={}
return"center"!==t&&(a?i[Rl[t]]=`calc(100% - ${r(t)}px)`:i[t]=0),"center"!==n?a?i[Rl[n]]=`calc(100% - ${r(n)}px)`:i[n]=0:("center"===t?i.top=i.left="50%":i[{top:"left",bottom:"left",left:"top",right:"top"}[t]]="50%",i.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[t]),i}))
return{locationStyles:n}}const Ll=Ue()({name:"VProgressLinear",props:{absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...Pe(),...Tl({location:"top"}),...Ca(),...ya(),...Vt()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),{isRtl:n}=Ot(),{themeClasses:r}=kt(e),{locationStyles:i}=Pl(e),{textColorClasses:s,textColorStyles:u}=Ia(e,"color"),{backgroundColorClasses:c,backgroundColorStyles:d}=Ba(t.computed((()=>e.bgColor||e.color))),{backgroundColorClasses:v,backgroundColorStyles:p}=Ba(e,"color"),{roundedClasses:f}=Na(e),{intersectionRef:m,isIntersecting:h}=fl(),y=t.computed((()=>parseInt(e.max,10))),b=t.computed((()=>parseInt(e.height,10))),V=t.computed((()=>parseFloat(e.bufferValue)/y.value*100)),S=t.computed((()=>parseFloat(o.value)/y.value*100)),w=t.computed((()=>n.value!==e.reverse)),k=t.computed((()=>e.indeterminate?"fade-transition":"slide-x-transition")),x=t.computed((()=>null==e.bgOpacity?e.bgOpacity:parseFloat(e.bgOpacity)))
function C(e){if(!m.value)return
const{left:t,right:a,width:l}=m.value.getBoundingClientRect(),n=w.value?l-e.clientX+(a-l):e.clientX-t
o.value=Math.round(n/l*y.value)}return lt((()=>t.createVNode(e.tag,{ref:m,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&h.value,"v-progress-linear--reverse":w.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},f.value,r.value,e.class],style:[{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?g(b.value):0,"--v-progress-linear-height":g(b.value),...i.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:S.value,onClick:e.clickable&&C},{default:()=>[e.stream&&t.createVNode("div",{key:"stream",class:["v-progress-linear__stream",s.value],style:{...u.value,[w.value?"left":"right"]:g(-b.value),borderTop:`${g(b.value/2)} dotted`,opacity:x.value,top:`calc(50% - ${g(b.value/4)})`,width:g(100-V.value,"%"),"--v-progress-linear-stream-to":g(b.value*(w.value?1:-1))}},null),t.createVNode("div",{class:["v-progress-linear__background",c.value],style:[d.value,{opacity:x.value,width:g(e.stream?V.value:100,"%")}]},null),t.createVNode(t.Transition,{name:k.value},{default:()=>[e.indeterminate?t.createVNode("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>t.createVNode("div",{key:e,class:["v-progress-linear__indeterminate",e,v.value],style:p.value},null)))]):t.createVNode("div",{class:["v-progress-linear__determinate",v.value],style:[p.value,{width:g(S.value,"%")}]},null)]}),l.default&&t.createVNode("div",{class:"v-progress-linear__content"},[l.default({value:S.value,buffer:V.value})])]}))),{}}}),Ml=Te({loading:[Boolean,String]},"loader")
function Dl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=t.computed((()=>({[`${a}--loading`]:e.loading})))
return{loaderClasses:l}}function Fl(e,a){let{slots:l}=a
return t.createVNode("div",{class:`${e.name}__loader`},[l.default?.({color:e.color,isActive:e.active})||t.createVNode(Ll,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Ol=["static","relative","fixed","absolute","sticky"],zl=Te({position:{type:String,validator:e=>Ol.includes(e)}},"position")
function jl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=t.computed((()=>e.position?`${a}--${e.position}`:void 0))
return{positionClasses:l}}function Hl(){return Xe("useRouter")?.proxy?.$router}function Ul(e,a){const l=t.resolveDynamicComponent("RouterLink"),o=t.computed((()=>!(!e.href&&!e.to))),n=t.computed((()=>o?.value||F(a,"click")||F(e,"click")))
if("string"==typeof l)return{isLink:o,isClickable:n,href:t.toRef(e,"href")}
const r=e.to?l.useLink(e):void 0
return{isLink:o,isClickable:n,route:r?.route,navigate:r?.navigate,isActive:r&&t.computed((()=>e.exact?r.isExactActive?.value:r.isActive?.value)),href:t.computed((()=>e.to?r?.route.value.href:e.href))}}const Wl=Te({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router")
let Yl=!1
const Gl=Te({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ka},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:el,appendIcon:el,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...Sa(),...Pe(),...Ma(),...ca(),...ka(),...Ya(),...Ml(),...Tl(),...zl(),...Ca(),...Wl(),...cl(),...ya({tag:"button"}),...Vt(),...za({variant:"elevated"})},"VBtn"),Xl=Ue()({name:"VBtn",directives:{Ripple:El},props:Gl(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=kt(e),{borderClasses:r}=wa(e),{colorClasses:i,colorStyles:s,variantClasses:u}=ja(e),{densityClasses:c}=Da(e),{dimensionStyles:d}=da(e),{elevationClasses:v}=xa(e),{loaderClasses:p}=Dl(e),{locationStyles:f}=Pl(e),{positionClasses:m}=jl(e),{roundedClasses:g}=Na(e),{sizeClasses:h,sizeStyles:y}=dl(e),b=Ga(e,e.symbol,!1),V=Ul(e,l),S=t.computed((()=>void 0!==e.active?e.active:V.isLink.value?V.isActive?.value:b?.isSelected.value)),w=t.computed((()=>b?.disabled.value||e.disabled)),k=t.computed((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border))),x=t.computed((()=>{if(void 0!==e.value)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value}))
return function(e,a){t.watch((()=>e.isActive?.value),(l=>{e.isLink.value&&l&&a&&t.nextTick((()=>{a(!0)}))}),{immediate:!0})}(V,b?.select),lt((()=>{const a=V.isLink.value?"a":e.tag,l=!(!e.prependIcon&&!o.prepend),C=!(!e.appendIcon&&!o.append),N=!(!e.icon||!0===e.icon),_=b?.isSelected.value&&(!V.isLink.value||V.isActive?.value)||!b||V.isActive?.value
return t.withDirectives(t.createVNode(a,{type:"a"===a?void 0:"button",class:["v-btn",b?.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":w.value,"v-btn--elevated":k.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},n.value,r.value,_?i.value:void 0,c.value,v.value,p.value,m.value,g.value,h.value,u.value,e.class],style:[_?s.value:void 0,d.value,f.value,y.value,e.style],disabled:w.value||void 0,href:V.href.value,onClick:e=>{w.value||(V.navigate?.(e),b?.toggle())},value:x.value},{default:()=>[Oa(!0,"v-btn"),!e.icon&&l&&t.createVNode("span",{key:"prepend",class:"v-btn__prepend"},[o.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},o.prepend):t.createVNode(pl,{key:"prepend-icon",icon:e.prependIcon},null)]),t.createVNode("span",{class:"v-btn__content","data-no-activator":""},[!o.default&&N?t.createVNode(pl,{key:"content-icon",icon:e.icon},null):t.createVNode(jt,{key:"content-defaults",disabled:!N,defaults:{VIcon:{icon:e.icon}}},{default:()=>[o.default?.()??e.text]})]),!e.icon&&C&&t.createVNode("span",{key:"append",class:"v-btn__append"},[o.append?t.createVNode(jt,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},o.append):t.createVNode(pl,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&t.createVNode("span",{key:"loader",class:"v-btn__loader"},[o.loader?.()??t.createVNode(ml,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[t.resolveDirective("ripple"),!w.value&&e.ripple,null]])})),{}}}),ql=Ue()({name:"VAppBarNavIcon",props:{icon:{type:el,default:"$menu"},...Pe()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(Xl,{class:["v-app-bar-nav-icon",e.class],icon:e.icon,style:e.style},l))),{}}}),Kl=Ue()({name:"VToolbarItems",props:{...Pe(),...za({variant:"text"})},setup(e,a){let{slots:l}=a
return Oe({VBtn:{color:t.toRef(e,"color"),height:"inherit",variant:t.toRef(e,"variant")}}),lt((()=>t.createVNode("div",{class:["v-toolbar-items",e.class],style:e.style},[l.default?.()]))),{}}}),Zl=Ue()({name:"VAppBarTitle",props:ba(),setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(Va,t.mergeProps(e,{class:"v-app-bar-title"}),l))),{}}}),Jl=We("v-alert-title"),Ql=["success","info","warning","error"],eo=Ue()({name:"VAlert",props:{border:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:el,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ql.includes(e)},...Pe(),...Ma(),...ca(),...ka(),...Tl(),...zl(),...Ca(),...ya(),...Vt(),...za({variant:"flat"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=_t(e,"modelValue"),r=t.computed((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),i=t.computed((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:s}=kt(e),{colorClasses:u,colorStyles:c,variantClasses:d}=ja(i),{densityClasses:v}=Da(e),{dimensionStyles:p}=da(e),{elevationClasses:f}=xa(e),{locationStyles:m}=Pl(e),{positionClasses:g}=jl(e),{roundedClasses:h}=Na(e),{textColorClasses:y,textColorStyles:b}=Ia(t.toRef(e,"borderColor")),{t:V}=Dt(),S=t.computed((()=>({"aria-label":V(e.closeLabel),onClick(e){n.value=!1,l("click:close",e)}})))
return()=>{const a=!(!o.prepend&&!r.value),l=!(!o.title&&!e.title),i=!(!e.text&&!o.text),V=!(!o.close&&!e.closable)
return n.value&&t.createVNode(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},s.value,u.value,v.value,f.value,g.value,h.value,d.value,e.class],style:[c.value,p.value,m.value,e.style],role:"alert"},{default:()=>[Oa(!1,"v-alert"),e.border&&t.createVNode("div",{key:"border",class:["v-alert__border",y.value],style:b.value},null),a&&t.createVNode("div",{key:"prepend",class:"v-alert__prepend"},[o.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},o.prepend):t.createVNode(pl,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),t.createVNode("div",{class:"v-alert__content"},[l&&t.createVNode(Jl,{key:"title"},{default:()=>[o.title?.()??e.title]}),i&&(o.text?.()??e.text),o.default?.()]),o.append&&t.createVNode("div",{key:"append",class:"v-alert__append"},[o.append()]),V&&t.createVNode("div",{key:"close",class:"v-alert__close"},[o.close?t.createVNode(jt,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[o.close?.({props:S.value})]}):t.createVNode(Xl,t.mergeProps({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},S.value),null)])]})}}})
function to(e){const{t:a}=Dt()
return{InputIcon:function(l){let{name:o}=l
const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],r=e[`onClick:${o}`],i=r&&n?a(`$vuetify.input.${n}`,e.label??""):void 0
return t.createVNode(pl,{icon:e[`${o}Icon`],"aria-label":i,onClick:r},null)}}}const ao=Ue()({name:"VLabel",props:{text:String,clickable:Boolean,...Pe(),...Vt()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,l.default?.()]))),{}}}),lo=Ue()({name:"VFieldLabel",props:{floating:Boolean,...Pe()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(ao,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l))),{}}}),oo=Te({focused:Boolean,"onUpdate:focused":D()},"focus")
function no(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe()
const l=_t(e,"focused"),o=t.computed((()=>({[`${a}--focused`]:l.value})))
function n(){l.value=!0}function r(){l.value=!1}return{focusClasses:o,isFocused:l,focus:n,blur:r}}const ro=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],io=Te({appendInnerIcon:el,bgColor:String,clearable:Boolean,clearIcon:{type:el,default:"$clear"},active:Boolean,color:String,baseColor:String,dirty:Boolean,disabled:Boolean,error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:el,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>ro.includes(e)},"onClick:clear":D(),"onClick:appendInner":D(),"onClick:prependInner":D(),...Pe(),...Ml(),...Ca(),...Vt()},"v-field"),so=Ue()({name:"VField",inheritAttrs:!1,props:{id:String,...oo(),...io()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{themeClasses:r}=kt(e),{loaderClasses:i}=Dl(e),{focusClasses:s,isFocused:u,focus:c,blur:d}=no(e),{InputIcon:v}=to(e),{roundedClasses:p}=Na(e),f=t.computed((()=>e.dirty||e.active)),m=t.computed((()=>!(e.singleLine||!e.label&&!n.label))),h=Je(),y=t.computed((()=>e.id||`input-${h}`)),b=t.computed((()=>`${y.value}-messages`)),V=t.ref(),S=t.ref(),w=t.ref(),{backgroundColorClasses:k,backgroundColorStyles:x}=Ba(t.toRef(e,"bgColor")),{textColorClasses:C,textColorStyles:N}=Ia(t.computed((()=>e.error||e.disabled?void 0:f.value&&u.value?e.color:e.baseColor)))
t.watch(f,(e=>{if(m.value){const t=V.value.$el,a=S.value.$el
requestAnimationFrame((()=>{const l=Q(t),o=a.getBoundingClientRect(),n=o.x-l.x,r=o.y-l.y-(l.height/2-o.height/2),i=o.width/.75,s=Math.abs(i-l.width)>1?{maxWidth:g(i)}:void 0,u=getComputedStyle(t),c=getComputedStyle(a),d=1e3*parseFloat(u.transitionDuration)||150,v=parseFloat(c.getPropertyValue("--v-field-label-scale")),p=c.getPropertyValue("color")
t.style.visibility="visible",a.style.visibility="hidden",ee(t,{transform:`translate(${n}px, ${r}px) scale(${v})`,color:p,...s},{duration:d,easing:Ge,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),a.style.removeProperty("visibility")}))}))}}),{flush:"post"})
const _=t.computed((()=>({isActive:f,isFocused:u,controlRef:w,blur:d,focus:c})))
function I(e){e.target!==document.activeElement&&e.preventDefault()}return lt((()=>{const a="outlined"===e.variant,o=n["prepend-inner"]||e.prependInnerIcon,u=!(!e.clearable&&!n.clear),g=!!(n["append-inner"]||e.appendInnerIcon||u),h=n.label?n.label({label:e.label,props:{for:y.value}}):e.label
return t.createVNode("div",t.mergeProps({class:["v-field",{"v-field--active":f.value,"v-field--appended":g,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!h,[`v-field--variant-${e.variant}`]:!0},r.value,k.value,s.value,i.value,p.value,e.class],style:[x.value,N.value,e.style],onClick:I},l),[t.createVNode("div",{class:"v-field__overlay"},null),t.createVNode(Fl,{name:"v-field",active:!!e.loading,color:e.error?"error":e.color},{default:n.loader}),o&&t.createVNode("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t.createVNode(v,{key:"prepend-icon",name:"prependInner"},null),n["prepend-inner"]?.(_.value)]),t.createVNode("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&m.value&&t.createVNode(lo,{key:"floating-label",ref:S,class:[C.value],floating:!0,for:y.value},{default:()=>[h]}),t.createVNode(lo,{ref:V,for:y.value},{default:()=>[h]}),n.default?.({..._.value,props:{id:y.value,class:"v-field__input","aria-describedby":b.value},focus:c,blur:d})]),u&&t.createVNode(ua,{key:"clear"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-field__clearable",onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},[n.clear?n.clear():t.createVNode(v,{name:"clear"},null)]),[[t.vShow,e.dirty]])]}),g&&t.createVNode("div",{key:"append",class:"v-field__append-inner"},[n["append-inner"]?.(_.value),e.appendInnerIcon&&t.createVNode(v,{key:"append-icon",name:"appendInner"},null)]),t.createVNode("div",{class:["v-field__outline",C.value]},[a&&t.createVNode(t.Fragment,null,[t.createVNode("div",{class:"v-field__outline__start"},null),m.value&&t.createVNode("div",{class:"v-field__outline__notch"},[t.createVNode(lo,{ref:S,floating:!0,for:y.value},{default:()=>[h]})]),t.createVNode("div",{class:"v-field__outline__end"},null)]),["plain","underlined"].includes(e.variant)&&m.value&&t.createVNode(lo,{ref:S,floating:!0,for:y.value},{default:()=>[h]})])])})),{controlRef:w}}})
function uo(e){return S(e,Object.keys(so.props).filter((e=>{return t=e,!M.test(t)&&"class"!==e&&"style"!==e
var t})))}const co=Ue()({name:"VMessages",props:{active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...Pe(),...ma({transition:{component:ra,leaveAbsolute:!0,group:!0}})},setup(e,a){let{slots:l}=a
const o=t.computed((()=>x(e.messages))),{textColorClasses:n,textColorStyles:r}=Ia(t.computed((()=>e.color)))
return lt((()=>t.createVNode(ga,{transition:e.transition,tag:"div",class:["v-messages",n.value,e.class],style:[r.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&o.value.map(((e,a)=>t.createVNode("div",{class:"v-messages__message",key:`${a}-${o.value}`},[l.message?l.message({message:e}):e])))]}))),{}}}),vo=Symbol.for("vuetify:form"),po=Te({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form")
function fo(){return t.inject(vo,null)}const mo=Te({disabled:Boolean,error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:Boolean,rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...oo()},"validation")
function go(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:qe(),l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Je()
const o=_t(e,"modelValue"),n=t.computed((()=>void 0===e.validationValue?o.value:e.validationValue)),r=fo(),i=t.ref([]),s=t.ref(!0),u=t.computed((()=>!(!x(""===o.value?null:o.value).length&&!x(""===n.value?null:n.value).length))),c=t.computed((()=>!(!e.disabled&&!r?.isDisabled.value))),d=t.computed((()=>!(!e.readonly&&!r?.isReadonly.value))),v=t.computed((()=>e.errorMessages.length?x(e.errorMessages).slice(0,Math.max(0,+e.maxErrors)):i.value)),p=t.computed((()=>!e.error&&!v.value.length&&(!e.rules.length||(!s.value||null)))),f=t.ref(!1),m=t.computed((()=>({[`${a}--error`]:!1===p.value,[`${a}--dirty`]:u.value,[`${a}--disabled`]:c.value,[`${a}--readonly`]:d.value}))),g=t.computed((()=>e.name??t.unref(l)))
t.onBeforeMount((()=>{r?.register({id:g.value,validate:V,reset:y,resetValidation:b})})),t.onBeforeUnmount((()=>{r?.unregister(g.value)}))
const h=t.computed((()=>e.validateOn||r?.validateOn.value||"input"))
function y(){b(),o.value=null}function b(){s.value=!0,i.value=[]}async function V(){const t=[]
f.value=!0
for(const a of e.rules){if(t.length>=+(e.maxErrors??1))break
const l="function"==typeof a?a:()=>a,o=await l(n.value)
!0!==o&&("string"==typeof o?t.push(o):console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`))}return i.value=t,f.value=!1,s.value=!1,i.value}return t.onMounted((()=>r?.update(g.value,p.value,v.value))),Le((()=>"input"===h.value),(()=>{t.watch(n,(()=>{if(null!=n.value)V()
else if(e.focused){const a=t.watch((()=>e.focused),(e=>{e||V(),a()}))}}))})),Le((()=>"blur"===h.value),(()=>{t.watch((()=>e.focused),(e=>{e||V()}))})),t.watch(p,(()=>{r?.update(g.value,p.value,v.value)})),{errorMessages:v,isDirty:u,isDisabled:c,isReadonly:d,isPristine:s,isValid:p,isValidating:f,reset:y,resetValidation:b,validate:V,validationClasses:m}}const ho=Te({id:String,appendIcon:el,prependIcon:el,hideDetails:[Boolean,String],hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":D(),"onClick:append":D(),...Pe(),...Ma(),...mo()},"v-input"),yo=Ue()({name:"VInput",props:{...ho()},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const{densityClasses:r}=Da(e),{InputIcon:i}=to(e),s=Je(),u=t.computed((()=>e.id||`input-${s}`)),c=t.computed((()=>`${u.value}-messages`)),{errorMessages:d,isDirty:v,isDisabled:p,isReadonly:f,isPristine:m,isValid:g,isValidating:h,reset:y,resetValidation:b,validate:V,validationClasses:S}=go(e,"v-input",u),w=t.computed((()=>({id:u,messagesId:c,isDirty:v,isDisabled:p,isReadonly:f,isPristine:m,isValid:g,isValidating:h,reset:y,resetValidation:b,validate:V}))),k=t.computed((()=>d.value.length>0?d.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages))
return lt((()=>{const a=!(!o.prepend&&!e.prependIcon),l=!(!o.append&&!e.appendIcon),n=k.value.length>0,s=!e.hideDetails||"auto"===e.hideDetails&&(n||!!o.details)
return t.createVNode("div",{class:["v-input",`v-input--${e.direction}`,r.value,S.value,e.class],style:e.style},[a&&t.createVNode("div",{key:"prepend",class:"v-input__prepend"},[o.prepend?.(w.value),e.prependIcon&&t.createVNode(i,{key:"prepend-icon",name:"prepend"},null)]),o.default&&t.createVNode("div",{class:"v-input__control"},[o.default?.(w.value)]),l&&t.createVNode("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t.createVNode(i,{key:"append-icon",name:"append"},null),o.append?.(w.value)]),s&&t.createVNode("div",{class:"v-input__details"},[t.createVNode(co,{id:c.value,active:n,messages:k.value},{message:o.message}),o.details?.(w.value)])])})),{reset:y,resetValidation:b,validate:V}}}),bo=Ue()({name:"VCounter",functional:!0,props:{active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...Pe(),...ma({transition:{component:ra}})},setup(e,a){let{slots:l}=a
const o=t.computed((()=>e.max?`${e.value} / ${e.max}`:String(e.value)))
return lt((()=>t.createVNode(ga,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-counter",e.class],style:e.style},[l.default?l.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[t.vShow,e.active]])]}))),{}}}),Vo=Symbol("Forwarded refs")
function So(e,t){let a=e
for(;a;){const e=Reflect.getOwnPropertyDescriptor(a,t)
if(e)return e
a=Object.getPrototypeOf(a)}}function wo(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
return e[Vo]=a,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t)
if("symbol"!=typeof t&&!t.startsWith("__"))for(const e of a)if(e.value&&Reflect.has(e.value,t)){const a=Reflect.get(e.value,t)
return"function"==typeof a?a.bind(e.value):a}},has(e,t){if(Reflect.has(e,t))return!0
if("symbol"==typeof t||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return!0
return!1},getOwnPropertyDescriptor(e,t){const l=Reflect.getOwnPropertyDescriptor(e,t)
if(l)return l
if("symbol"!=typeof t&&!t.startsWith("__")){for(const e of a){if(!e.value)continue
const a=So(e.value,t)??("_"in e.value?So(e.value._?.setupState,t):void 0)
if(a)return a}for(const e of a){const a=e.value&&e.value[Vo]
if(!a)continue
const l=a.slice()
for(;l.length;){const e=l.shift(),a=So(e.value,t)
if(a)return a
const o=e.value&&e.value[Vo]
o&&l.push(...o)}}}}})}const ko=["color","file","time","date","datetime-local","week","month"],xo=Te({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,type:{type:String,default:"text"},modelModifiers:Object,...ho(),...io()},"v-text-field"),Co=Ue()({name:"VTextField",directives:{Intersect:fa},inheritAttrs:!1,props:xo(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=_t(e,"modelValue"),{isFocused:i,focus:s,blur:u}=no(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):(r.value??"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter))
function v(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const p=t.ref(),f=t.ref(),m=t.ref(),g=t.computed((()=>ko.includes(e.type)||e.persistentPlaceholder||i.value))
function h(){m.value!==document.activeElement&&m.value?.focus(),i.value||s()}function y(e){o("mousedown:control",e),e.target!==m.value&&(h(),e.preventDefault())}function b(e){h(),o("click:control",e)}function V(a){a.stopPropagation(),h(),t.nextTick((()=>{r.value=null,O(e["onClick:clear"],a)}))}function S(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}return lt((()=>{const a=!!(n.counter||e.counter||e.counterValue),o=!(!a&&!n.details),[s,w]=k(l),[{modelValue:x,...C}]=yo.filterProps(e),[N]=uo(e)
return t.createVNode(yo,t.mergeProps({ref:p,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},s,C,{focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(so,t.mergeProps({ref:f,onMousedown:y,onClick:b,"onClick:clear":V,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},N,{id:l.value,active:g.value||s.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...i}}=a
const s=t.withDirectives(t.createVNode("input",t.mergeProps({ref:m,value:r.value,onInput:S,autofocus:e.autofocus,readonly:c.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:h,onBlur:u},i,w),null),[[t.resolveDirective("intersect"),{handler:v},null,{once:!0}]])
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[e.prefix]),n.default?t.createVNode("div",{class:l,"data-no-activator":""},[n.default(),s]):t.cloneVNode(s,{class:l}),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(bo,{active:e.persistentCounter||i.value,value:c.value,max:d.value},n.counter)])]):void 0})})),wo({},p,f,m)}}),No=Symbol.for("vuetify:selection-control-group"),_o=Te({color:String,disabled:Boolean,error:Boolean,id:String,inline:Boolean,falseIcon:el,trueIcon:el,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:v},...Vt(),...Ma()},"v-selection-control-group"),Io=Ue()({name:"VSelectionControlGroup",props:{defaultsTarget:{type:String,default:"VSelectionControl"},...Pe(),..._o()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),n=Je(),r=t.computed((()=>e.id||`v-selection-control-group-${n}`)),i=t.computed((()=>e.name||r.value)),s=new Set
return t.provide(No,{modelValue:o,forceUpdate:()=>{s.forEach((e=>e()))},onForceUpdate:e=>{s.add(e),t.onScopeDispose((()=>{s.delete(e)}))}}),Oe({[e.defaultsTarget]:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),density:t.toRef(e,"density"),error:t.toRef(e,"error"),inline:t.toRef(e,"inline"),modelValue:o,multiple:t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),name:i,falseIcon:t.toRef(e,"falseIcon"),trueIcon:t.toRef(e,"trueIcon"),readonly:t.toRef(e,"readonly"),ripple:t.toRef(e,"ripple"),type:t.toRef(e,"type"),valueComparator:t.toRef(e,"valueComparator")}}),lt((()=>t.createVNode("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:"radio"===e.type?"radiogroup":void 0},[l.default?.()]))),{}}}),Bo=Te({label:String,trueValue:null,falseValue:null,value:null,...Pe(),..._o()},"v-selection-control")
const Ao=Ue()({name:"VSelectionControl",directives:{Ripple:El},inheritAttrs:!1,props:Bo(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{group:r,densityClasses:i,icon:s,model:u,textColorClasses:c,textColorStyles:d,trueValue:v}=function(e){const a=t.inject(No,void 0),{densityClasses:l}=Da(e),o=_t(e,"modelValue"),n=t.computed((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),r=t.computed((()=>void 0!==e.falseValue&&e.falseValue)),i=t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),s=t.computed({get(){const t=a?a.modelValue.value:o.value
return i.value?t.some((t=>e.valueComparator(t,n.value))):e.valueComparator(t,n.value)},set(t){if(e.readonly)return
const l=t?n.value:r.value
let s=l
i.value&&(s=t?[...x(o.value),l]:x(o.value).filter((t=>!e.valueComparator(t,n.value)))),a?a.modelValue.value=s:o.value=s}}),{textColorClasses:u,textColorStyles:c}=Ia(t.computed((()=>!s.value||e.error||e.disabled?void 0:e.color))),d=t.computed((()=>s.value?e.trueIcon:e.falseIcon))
return{group:a,densityClasses:l,trueValue:n,falseValue:r,model:s,textColorClasses:u,textColorStyles:c,icon:d}}(e),p=Je(),f=t.computed((()=>e.id||`input-${p}`)),m=t.ref(!1),g=t.ref(!1),h=t.ref()
function y(e){m.value=!0,(!n||n&&e.target.matches(":focus-visible"))&&(g.value=!0)}function b(){m.value=!1,g.value=!1}function V(a){e.readonly&&r&&t.nextTick((()=>r.forceUpdate())),u.value=a.target.checked}return r?.onForceUpdate((()=>{h.value&&(h.value.checked=u.value)})),lt((()=>{const a=o.label?o.label({label:e.label,props:{for:f.value}}):e.label,[n,r]=k(l)
return t.createVNode("div",t.mergeProps({class:["v-selection-control",{"v-selection-control--dirty":u.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":m.value,"v-selection-control--focus-visible":g.value,"v-selection-control--inline":e.inline},i.value,e.class]},n,{style:e.style}),[t.createVNode("div",{class:["v-selection-control__wrapper",c.value],style:d.value},[o.default?.(),t.withDirectives(t.createVNode("div",{class:["v-selection-control__input"]},[s.value&&t.createVNode(pl,{key:"icon",icon:s.value},null),t.createVNode("input",t.mergeProps({ref:h,checked:u.value,disabled:e.disabled,id:f.value,onBlur:b,onFocus:y,onInput:V,"aria-disabled":e.readonly,type:e.type,value:v.value,name:e.name,"aria-checked":"checkbox"===e.type?u.value:void 0},r),null),o.input?.({model:u,textColorClasses:c,textColorStyles:d,props:{onFocus:y,onBlur:b,id:f.value}})]),[[t.resolveDirective("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),a&&t.createVNode(ao,{for:f.value,clickable:!0},{default:()=>[a]})])})),{isFocused:m,input:h}}}),$o=Te({indeterminate:Boolean,indeterminateIcon:{type:el,default:"$checkboxIndeterminate"},...Bo({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),Eo=Ue()({name:"VCheckboxBtn",props:$o(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"indeterminate"),n=_t(e,"modelValue")
function r(e){o.value&&(o.value=!1)}const i=t.computed((()=>e.indeterminate?e.indeterminateIcon:e.falseIcon)),s=t.computed((()=>e.indeterminate?e.indeterminateIcon:e.trueIcon))
return lt((()=>t.createVNode(Ao,t.mergeProps(e,{modelValue:n.value,"onUpdate:modelValue":[e=>n.value=e,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",inline:!0,falseIcon:i.value,trueIcon:s.value,"aria-checked":e.indeterminate?"mixed":void 0}),l))),{}}}),Ro=Ue()({name:"VCheckbox",inheritAttrs:!1,props:{...ho(),...w($o(),["inline"])},emits:{"update:focused":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{isFocused:n,focus:r,blur:i}=no(e),s=Je(),u=t.computed((()=>e.id||`checkbox-${s}`))
return lt((()=>{const[a,s]=k(l),[c,d]=yo.filterProps(e),[v,p]=Eo.filterProps(e)
return t.createVNode(yo,t.mergeProps({class:["v-checkbox",e.class]},a,c,{id:u.value,focused:n.value,style:e.style}),{...o,default:e=>{let{id:a,messagesId:l,isDisabled:n,isReadonly:u}=e
return t.createVNode(Eo,t.mergeProps(v,{id:a.value,"aria-describedby":l.value,disabled:n.value,readonly:u.value},s,{onFocus:r,onBlur:i}),o)}})})),{}}}),To=Te({start:Boolean,end:Boolean,icon:el,image:String,...Pe(),...Ma(),...Ca(),...cl(),...ya(),...Vt(),...za({variant:"flat"})},"v-avatar"),Po=Ue()({name:"VAvatar",props:To(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{colorClasses:n,colorStyles:r,variantClasses:i}=ja(e),{densityClasses:s}=Da(e),{roundedClasses:u}=Na(e),{sizeClasses:c,sizeStyles:d}=dl(e)
return lt((()=>t.createVNode(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},o.value,n.value,s.value,u.value,c.value,i.value,e.class],style:[r.value,d.value,e.style]},{default:()=>[e.image?t.createVNode(ha,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t.createVNode(pl,{key:"icon",icon:e.icon},null):l.default?.(),Oa(!1,"v-avatar")]}))),{}}}),Lo=Symbol.for("vuetify:v-chip-group"),Mo=Ue()({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:v},...Pe(),...Wa({selectedClass:"v-chip--selected"}),...ya(),...Vt(),...za({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=Xa(e,Lo)
return Oe({VChip:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),filter:t.toRef(e,"filter"),variant:t.toRef(e,"variant")}}),lt((()=>t.createVNode(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]}))),{}}}),Do=Ue()({name:"VChip",directives:{Ripple:El},props:{activeClass:String,appendAvatar:String,appendIcon:el,closable:Boolean,closeIcon:{type:el,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:el,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:D(),onClickOnce:D(),...Sa(),...Pe(),...Ma(),...ka(),...Ya(),...Ca(),...Wl(),...cl(),...ya({tag:"span"}),...Vt(),...za({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=Dt(),{borderClasses:i}=wa(e),{colorClasses:s,colorStyles:u,variantClasses:c}=ja(e),{densityClasses:d}=Da(e),{elevationClasses:v}=xa(e),{roundedClasses:p}=Na(e),{sizeClasses:f}=dl(e),{themeClasses:m}=kt(e),g=_t(e,"modelValue"),h=Ga(e,Lo,!1),y=Ul(e,l),b=t.computed((()=>!1!==e.link&&y.isLink.value)),V=t.computed((()=>!e.disabled&&!1!==e.link&&(!!h||e.link||y.isClickable.value))),S=t.computed((()=>({"aria-label":r(e.closeLabel),onClick(e){g.value=!1,o("click:close",e)}})))
function w(e){o("click",e),V.value&&(y.navigate?.(e),h?.toggle())}function k(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),w(e))}return()=>{const a=y.isLink.value?"a":e.tag,l=!(!e.appendIcon&&!e.appendAvatar),o=!(!l&&!n.append),r=!(!n.close&&!e.closable),x=!(!n.filter&&!e.filter)&&h,C=!(!e.prependIcon&&!e.prependAvatar),N=!(!C&&!n.prepend),_=!h||h.isSelected.value
return g.value&&t.withDirectives(t.createVNode(a,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":V.value,"v-chip--filter":x,"v-chip--pill":e.pill},m.value,i.value,_?s.value:void 0,d.value,v.value,p.value,f.value,c.value,h?.selectedClass.value,e.class],style:[_?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:V.value?0:void 0,onClick:w,onKeydown:V.value&&!b.value&&k},{default:()=>[Oa(V.value,"v-chip"),x&&t.createVNode(ua,{key:"filter"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-chip__filter"},[n.filter?t.withDirectives(t.createVNode(jt,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},null),[[t.resolveDirective("slot"),n.filter,"default"]]):t.createVNode(pl,{key:"filter-icon",icon:e.filterIcon},null)]),[[t.vShow,h.isSelected.value]])]}),N&&t.createVNode("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!C,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t.createVNode(t.Fragment,null,[e.prependIcon&&t.createVNode(pl,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t.createVNode(Po,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),n.default?.({isSelected:h?.isSelected.value,selectedClass:h?.selectedClass.value,select:h?.select,toggle:h?.toggle,value:h?.value.value,disabled:e.disabled})??e.text,o&&t.createVNode("div",{key:"append",class:"v-chip__append"},[n.append?t.createVNode(jt,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(pl,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Po,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),r&&t.createVNode("div",t.mergeProps({key:"close",class:"v-chip__close"},S.value),[n.close?t.createVNode(jt,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t.createVNode(pl,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[t.resolveDirective("ripple"),V.value&&e.ripple,null]])}}}),Fo=Ue()({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...Pe(),...Vt()},setup(e,a){let{attrs:l}=a
const{themeClasses:o}=kt(e),{textColorClasses:n,textColorStyles:r}=Ia(t.toRef(e,"color")),i=t.computed((()=>{const t={}
return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=g(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=g(e.thickness)),t}))
return lt((()=>t.createVNode("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value,e.class],style:[i.value,r.value,e.style],"aria-orientation":l.role&&"separator"!==l.role?void 0:e.vertical?"vertical":"horizontal",role:`${l.role||"separator"}`},null))),{}}}),Oo=Symbol.for("vuetify:list")
function zo(){const e=t.inject(Oo,{hasPrepend:t.ref(!1),updateHasPrepend:()=>null}),a={hasPrepend:t.ref(!1),updateHasPrepend:e=>{e&&(a.hasPrepend.value=e)}}
return t.provide(Oo,a),e}function jo(){return t.inject(Oo,null)}const Ho={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){const e=new Set
e.add(t)
let a=o.get(t)
for(;null!=a;)e.add(a),a=o.get(a)
return e}return l.delete(t),l},select:()=>null},Uo={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){let e=o.get(t)
for(l.add(t);null!=e&&e!==t;)l.add(e),e=o.get(e)
return l}return l.delete(t),l},select:()=>null},Wo={open:Uo.open,select:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(!a)return l
const n=[]
let r=o.get(t)
for(;null!=r;)n.push(r),r=o.get(r)
return new Set(n)}},Yo=e=>{const a={select:a=>{let{id:l,value:o,selected:n}=a
if(l=t.toRaw(l),e&&!o){const e=Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l?[...e,a]:e}),[])
if(1===e.length&&e[0]===l)return n}return n.set(l,o?"on":"off"),n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:e=>{const t=[]
for(const[a,l]of e.entries())"on"===l&&t.push(a)
return t}}
return a},Go=e=>{const a=Yo(e)
return{select:e=>{let{selected:l,id:o,...n}=e
o=t.toRaw(o)
const r=l.has(o)?new Map([[o,l.get(o)]]):new Map
return a.select({...n,id:o,selected:r})},in:(e,t,l)=>{let o=new Map
return e?.length&&(o=a.in(e.slice(0,1),t,l)),o},out:(e,t,l)=>a.out(e,t,l)}},Xo=Symbol.for("vuetify:nested"),qo={id:t.ref(),root:{register:()=>null,unregister:()=>null,parents:t.ref(new Map),children:t.ref(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:t.ref(new Set),selected:t.ref(new Map),selectedValues:t.ref([])}},Ko=Te({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),Zo=e=>{let a=!1
const l=t.ref(new Map),o=t.ref(new Map),n=_t(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),r=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
switch(e.selectStrategy){case"single-leaf":return(e=>{const a=Go(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"leaf":return(e=>{const a=Yo(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"independent":return Yo(e.mandatory)
case"single-independent":return Go(e.mandatory)
case"classic":default:return(e=>{const a={select:a=>{let{id:l,value:o,selected:n,children:r,parents:i}=a
l=t.toRaw(l)
const s=new Map(n),u=[l]
for(;u.length;){const e=u.shift()
n.set(e,o?"on":"off"),r.has(e)&&u.push(...r.get(e))}let c=i.get(l)
for(;c;){const e=r.get(c),t=e.every((e=>"on"===n.get(e))),a=e.every((e=>!n.has(e)||"off"===n.get(e)))
n.set(c,t?"on":a?"off":"indeterminate"),c=i.get(c)}return e&&!o&&0===Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l?[...e,a]:e}),[]).length?s:n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:(e,t)=>{const a=[]
for(const[l,o]of e.entries())"on"!==o||t.has(l)||a.push(l)
return a}}
return a})(e.mandatory)}})),i=t.computed((()=>{if("object"==typeof e.openStrategy)return e.openStrategy
switch(e.openStrategy){case"list":return Wo
case"single":return Ho
case"multiple":default:return Uo}})),s=_t(e,"selected",e.selected,(e=>r.value.in(e,l.value,o.value)),(e=>r.value.out(e,l.value,o.value)))
function u(e){const t=[]
let a=e
for(;null!=a;)t.unshift(a),a=o.value.get(a)
return t}t.onBeforeUnmount((()=>{a=!0}))
const c=Xe("nested"),d={id:t.ref(),root:{opened:n,selected:s,selectedValues:t.computed((()=>{const e=[]
for(const[t,a]of s.value.entries())"on"===a&&e.push(t)
return e})),register:(e,t,a)=>{t&&e!==t&&o.value.set(e,t),a&&l.value.set(e,[]),null!=t&&l.value.set(t,[...l.value.get(t)||[],e])},unregister:e=>{if(a)return
l.value.delete(e)
const t=o.value.get(e)
if(t){const a=l.value.get(t)??[]
l.value.set(t,a.filter((t=>t!==e)))}o.value.delete(e),n.value.delete(e)},open:(e,t,a)=>{c.emit("click:open",{id:e,value:t,path:u(e),event:a})
const r=i.value.open({id:e,value:t,opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},openOnSelect:(e,t,a)=>{const r=i.value.select({id:e,value:t,selected:new Map(s.value),opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},select:(e,t,a)=>{c.emit("click:select",{id:e,value:t,path:u(e),event:a})
const n=r.value.select({id:e,value:t,selected:new Map(s.value),children:l.value,parents:o.value,event:a})
n&&(s.value=n),d.root.openOnSelect(e,t,a)},children:l,parents:o}}
return t.provide(Xo,d),d.root},Jo=(e,a)=>{const l=t.inject(Xo,qo),o=Symbol(Je()),n=t.computed((()=>e.value??o)),r={...l,id:n,open:(e,t)=>l.root.open(n.value,e,t),openOnSelect:(e,t)=>l.root.openOnSelect(n.value,e,t),isOpen:t.computed((()=>l.root.opened.value.has(n.value))),parent:t.computed((()=>l.root.parents.value.get(n.value))),select:(e,t)=>l.root.select(n.value,e,t),isSelected:t.computed((()=>"on"===l.root.selected.value.get(t.toRaw(n.value)))),isIndeterminate:t.computed((()=>"indeterminate"===l.root.selected.value.get(n.value))),isLeaf:t.computed((()=>!l.root.children.value.get(n.value))),isGroupActivator:l.isGroupActivator}
return!l.isGroupActivator&&l.root.register(n.value,l.id.value,a),t.onBeforeUnmount((()=>{!l.isGroupActivator&&l.root.unregister(n.value)})),a&&t.provide(Xo,r),r},Qo=He({name:"VListGroupActivator",setup(e,a){let{slots:l}=a
return(()=>{const e=t.inject(Xo,qo)
t.provide(Xo,{...e,isGroupActivator:!0})})(),()=>l.default?.()}}),en=Te({activeColor:String,color:String,collapseIcon:{type:el,default:"$collapse"},expandIcon:{type:el,default:"$expand"},prependIcon:el,appendIcon:el,fluid:Boolean,subgroup:Boolean,value:null,...Pe(),...ya()},"v-list-group"),tn=Ue()({name:"VListGroup",props:{title:String,...en()},setup(e,a){let{slots:l}=a
const{isOpen:o,open:n,id:r}=Jo(t.toRef(e,"value"),!0),i=t.computed((()=>`v-list-group--id-${String(r.value)}`)),s=jo(),{isBooted:u}=Ta()
function c(e){n(!o.value,e)}const d=t.computed((()=>({onClick:c,class:"v-list-group__header",id:i.value}))),v=t.computed((()=>o.value?e.collapseIcon:e.expandIcon)),p=t.computed((()=>({VListItem:{active:o.value,activeColor:e.activeColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}})))
return lt((()=>t.createVNode(e.tag,{class:["v-list-group",{"v-list-group--prepend":s?.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":o.value},e.class],style:e.style},{default:()=>[l.activator&&t.createVNode(jt,{defaults:p.value},{default:()=>[t.createVNode(Qo,null,{default:()=>[l.activator({props:d.value,isOpen:o.value})]})]}),t.createVNode(ga,{transition:{component:sa},disabled:!u.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[l.default?.()]),[[t.vShow,o.value]])]})]}))),{}}}),an=We("v-list-item-subtitle"),ln=We("v-list-item-title"),on=Ue()({name:"VListItem",directives:{Ripple:El},props:{active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:el,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:el,ripple:{type:Boolean,default:!0},subtitle:[String,Number,Boolean],title:[String,Number,Boolean],value:null,onClick:D(),onClickOnce:D(),...Sa(),...Pe(),...Ma(),...ca(),...ka(),...Ca(),...Wl(),...ya(),...Vt(),...za({variant:"text"})},emits:{click:e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const r=Ul(e,l),i=t.computed((()=>e.value??r.href.value)),{select:s,isSelected:u,isIndeterminate:c,isGroupActivator:d,root:v,parent:p,openOnSelect:f}=Jo(i,!1),m=jo(),g=t.computed((()=>!1!==e.active&&(e.active||r.isActive?.value||u.value))),h=t.computed((()=>!1!==e.link&&r.isLink.value)),y=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||r.isClickable.value||null!=e.value&&!!m))),b=t.computed((()=>e.rounded||e.nav)),V=t.computed((()=>({color:g.value?e.activeColor??e.color:e.color,variant:e.variant})))
t.watch((()=>r.isActive?.value),(e=>{e&&null!=p.value&&v.open(p.value,!0),e&&f(e)}),{immediate:!0})
const{themeClasses:S}=kt(e),{borderClasses:w}=wa(e),{colorClasses:k,colorStyles:x,variantClasses:C}=ja(V),{densityClasses:N}=Da(e),{dimensionStyles:_}=da(e),{elevationClasses:I}=xa(e),{roundedClasses:B}=Na(b),A=t.computed((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),$=t.computed((()=>({isActive:g.value,select:s,isSelected:u.value,isIndeterminate:c.value})))
function E(t){n("click",t),!d&&y.value&&(r.navigate?.(t),null!=e.value&&s(!u.value,t))}function R(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),E(e))}return lt((()=>{const a=h.value?"a":e.tag,l=!m||u.value||g.value,n=o.title||e.title,i=o.subtitle||e.subtitle,s=!(!e.appendAvatar&&!e.appendIcon),c=!(!s&&!o.append),d=!(!e.prependAvatar&&!e.prependIcon),v=!(!d&&!o.prepend)
return m?.updateHasPrepend(v),t.withDirectives(t.createVNode(a,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":e.disabled,"v-list-item--link":y.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!v&&m?.hasPrepend.value,[`${e.activeClass}`]:e.activeClass&&g.value},S.value,w.value,l?k.value:void 0,N.value,I.value,A.value,B.value,C.value,e.class],style:[l?x.value:void 0,_.value,e.style],href:r.href.value,tabindex:y.value?0:void 0,onClick:E,onKeydown:y.value&&!h.value&&R},{default:()=>[Oa(y.value||g.value,"v-list-item"),v&&t.createVNode("div",{key:"prepend",class:"v-list-item__prepend"},[o.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!d,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[o.prepend?.($.value)]}):t.createVNode(t.Fragment,null,[e.prependAvatar&&t.createVNode(Po,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t.createVNode(pl,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),t.createVNode("div",{class:"v-list-item__content","data-no-activator":""},[n&&t.createVNode(ln,{key:"title"},{default:()=>[o.title?.({title:e.title})??e.title]}),i&&t.createVNode(an,{key:"subtitle"},{default:()=>[o.subtitle?.({subtitle:e.subtitle})??e.subtitle]}),o.default?.($.value)]),c&&t.createVNode("div",{key:"append",class:"v-list-item__append"},[o.append?t.createVNode(jt,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[o.append?.($.value)]}):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(pl,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(Po,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]}),[[t.resolveDirective("ripple"),y.value&&e.ripple]])})),{}}}),nn=Ue()({name:"VListSubheader",props:{color:String,inset:Boolean,sticky:Boolean,title:String,...Pe(),...ya()},setup(e,a){let{slots:l}=a
const{textColorClasses:o,textColorStyles:n}=Ia(t.toRef(e,"color"))
return lt((()=>{const a=!(!l.default&&!e.title)
return t.createVNode(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},o.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>[a&&t.createVNode("div",{class:"v-list-subheader__text"},[l.default?.()??e.title])]})})),{}}}),rn=Ue()({name:"VListChildren",props:{items:Array},setup(e,a){let{slots:l}=a
return zo(),()=>l.default?.()??e.items?.map((e=>{let{children:a,props:o,type:n,raw:r}=e
if("divider"===n)return l.divider?.({props:o})??t.createVNode(Fo,o,null)
if("subheader"===n)return l.subheader?.({props:o})??t.createVNode(nn,o,{default:l.subheader})
const i={subtitle:l.subtitle?e=>l.subtitle?.({...e,item:r}):void 0,prepend:l.prepend?e=>l.prepend?.({...e,item:r}):void 0,append:l.append?e=>l.append?.({...e,item:r}):void 0,default:l.default?e=>l.default?.({...e,item:r}):void 0,title:l.title?e=>l.title?.({...e,item:r}):void 0},[s,u]=tn.filterProps(o)
return a?t.createVNode(tn,t.mergeProps({value:o?.value},s),{activator:e=>{let{props:a}=e
return l.header?l.header({props:{...o,...a}}):t.createVNode(on,t.mergeProps(o,a),i)},default:()=>t.createVNode(rn,{items:a},l)}):l.item?l.item(o):t.createVNode(on,o,i)}))}}),sn=Te({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean},"item")
function un(e,t){const a=f(t,e.itemTitle,t),l=e.returnObject?t:f(t,e.itemValue,a),o=f(t,e.itemChildren),n={title:a,value:l,...!0===e.itemProps?"object"!=typeof t||null==t||Array.isArray(t)?void 0:"children"in t?S(t,["children"])[1]:t:f(t,e.itemProps)}
return{title:String(n.title??""),value:n.value,props:n,children:Array.isArray(o)?cn(e,o):void 0,raw:t}}function cn(e,t){const a=[]
for(const l of t)a.push(un(e,l))
return a}function dn(e){const a=t.computed((()=>cn(e,e.items)))
return{items:a,transformIn:function(t){return t.map((t=>a.value.find((e=>v(t,e.value)))??un(e,t)))},transformOut:function(e){return e.map((e=>{let{props:t}=e
return t.value}))}}}function vn(e,t){const a=f(t,e.itemType,"item"),l=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(t)?t:f(t,e.itemTitle),o=f(t,e.itemValue,void 0),n=f(t,e.itemChildren),r={title:l,value:o,...!0===e.itemProps?S(t,["children"])[1]:f(t,e.itemProps)}
return{type:a,title:r.title,value:r.value,props:r,children:"item"===a&&n?pn(e,n):void 0,raw:t}}function pn(e,t){const a=[]
for(const l of t)a.push(vn(e,l))
return a}const fn=Ue()({name:"VList",props:{activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},nav:Boolean,...Ko({selectStrategy:"single-leaf",openStrategy:"list"}),...Sa(),...Pe(),...Ma(),...ca(),...ka(),itemType:{type:String,default:"type"},...sn(),...Ca(),...ya(),...Vt(),...za({variant:"text"})},emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:l}=a
const{items:o}=function(e){return{items:t.computed((()=>pn(e,e.items)))}}(e),{themeClasses:n}=kt(e),{backgroundColorClasses:r,backgroundColorStyles:i}=Ba(t.toRef(e,"bgColor")),{borderClasses:s}=wa(e),{densityClasses:u}=Da(e),{dimensionStyles:c}=da(e),{elevationClasses:d}=xa(e),{roundedClasses:v}=Na(e),{open:p,select:f}=Zo(e),m=t.computed((()=>e.lines?`v-list--${e.lines}-line`:void 0)),g=t.toRef(e,"activeColor"),h=t.toRef(e,"color")
zo(),Oe({VListGroup:{activeColor:g,color:h},VListItem:{activeClass:t.toRef(e,"activeClass"),activeColor:g,color:h,density:t.toRef(e,"density"),disabled:t.toRef(e,"disabled"),lines:t.toRef(e,"lines"),nav:t.toRef(e,"nav"),variant:t.toRef(e,"variant")}})
const y=t.ref(!1),b=t.ref()
function V(e){y.value=!0}function S(e){y.value=!1}function w(e){y.value||e.relatedTarget&&b.value?.contains(e.relatedTarget)||x()}function k(e){if(b.value){if("ArrowDown"===e.key)x("next")
else if("ArrowUp"===e.key)x("prev")
else if("Home"===e.key)x("first")
else{if("End"!==e.key)return
x("last")}e.preventDefault()}}function x(e){if(b.value)return j(b.value,e)}return lt((()=>t.createVNode(e.tag,{ref:b,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},n.value,r.value,s.value,u.value,d.value,m.value,v.value,e.class],style:[i.value,c.value,e.style],role:"listbox","aria-activedescendant":void 0,onFocusin:V,onFocusout:S,onFocus:w,onKeydown:k},{default:()=>[t.createVNode(rn,{items:o.value},l)]}))),{open:p,select:f,focus:x}}}),mn=We("v-list-img"),gn=Ue()({name:"VListItemAction",props:{start:Boolean,end:Boolean,...Pe(),...ya()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},l))),{}}}),hn=Ue()({name:"VListItemMedia",props:{start:Boolean,end:Boolean,...Pe(),...ya()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},l))),{}}}),yn=Te({closeDelay:[Number,String],openDelay:[Number,String]},"delay")
function bn(e,t){const l={},o=o=>()=>{if(!a)return Promise.resolve(!0)
const n="openDelay"===o
return l.closeDelay&&window.clearTimeout(l.closeDelay),delete l.closeDelay,l.openDelay&&window.clearTimeout(l.openDelay),delete l.openDelay,new Promise((a=>{const r=parseInt(e[o]??0,10)
l[o]=window.setTimeout((()=>{t?.(n),a(n)}),r)}))}
return{runCloseDelay:o("closeDelay"),runOpenDelay:o("openDelay")}}const Vn=Symbol.for("vuetify:v-menu"),Sn=Te({activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...yn()},"v-overlay-activator")
function wn(e,l){let{isActive:o,isTop:r}=l
const i=t.ref()
let s=!1,u=!1,c=!0
const d=t.computed((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),v=t.computed((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!d.value)),{runOpenDelay:p,runCloseDelay:f}=bn(e,(t=>{t!==(e.openOnHover&&s||d.value&&u)||e.openOnHover&&o.value&&!r.value||(o.value!==t&&(c=!0),o.value=t)})),m=e=>{e.stopPropagation(),i.value=e.currentTarget||e.target,o.value=!o.value},g=e=>{e.sourceCapabilities?.firesTouchEvents||(s=!0,i.value=e.currentTarget||e.target,p())},h=e=>{s=!1,f()},y=e=>{n&&!e.target.matches(":focus-visible")||(u=!0,e.stopPropagation(),i.value=e.currentTarget||e.target,p())},b=e=>{u=!1,e.stopPropagation(),f()},V=t.computed((()=>{const t={}
return v.value&&(t.click=m),e.openOnHover&&(t.mouseenter=g,t.mouseleave=h),d.value&&(t.focus=y,t.blur=b),t})),S=t.computed((()=>{const a={}
if(e.openOnHover&&(a.mouseenter=()=>{s=!0,p()},a.mouseleave=()=>{s=!1,f()}),e.closeOnContentClick){const e=t.inject(Vn,null)
a.click=()=>{o.value=!1,e?.closeParents()}}return a})),w=t.computed((()=>{const t={}
return e.openOnHover&&(t.mouseenter=()=>{c&&(s=!0,c=!1,p())},t.mouseleave=()=>{s=!1,f()}),t}))
t.watch(r,(t=>{!t||(!e.openOnHover||s||d.value&&u)&&(!d.value||u||e.openOnHover&&s)||(o.value=!1)}))
const k=t.ref()
t.watchEffect((()=>{k.value&&t.nextTick((()=>{const e=k.value
i.value=e?.$el?e.$el:e}))}))
const x=Xe("useActivator")
let C
return t.watch((()=>!!e.activator),(l=>{l&&a?(C=t.effectScope(),C.run((()=>{!function(e,a,l){let{activatorEl:o,activatorEvents:n}=l
function r(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
t&&(Object.entries(n.value).forEach((e=>{let[a,l]=e
t.addEventListener(a,l)})),Object.keys(a).forEach((e=>{null==a[e]?t.removeAttribute(e):t.setAttribute(e,a[e])})))}function i(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
t&&(Object.entries(n.value).forEach((e=>{let[a,l]=e
t.removeEventListener(a,l)})),Object.keys(a).forEach((e=>{t.removeAttribute(e)})))}function s(){let t,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator
if(l)if("parent"===l){let e=a?.proxy?.$el?.parentNode
for(;e.hasAttribute("data-no-activator");)e=e.parentNode
t=e}else t="string"==typeof l?document.querySelector(l):"$el"in l?l.$el:l
return o.value=t?.nodeType===Node.ELEMENT_NODE?t:null,o.value}t.watch((()=>e.activator),((e,a)=>{if(a&&e!==a){const e=s(a)
e&&i(e)}e&&t.nextTick((()=>r()))}),{immediate:!0}),t.watch((()=>e.activatorProps),(()=>{r()})),t.onScopeDispose((()=>{i()}))}(e,x,{activatorEl:i,activatorEvents:V})}))):C&&C.stop()}),{flush:"post",immediate:!0}),t.onScopeDispose((()=>{C?.stop()})),{activatorEl:i,activatorRef:k,activatorEvents:V,contentEvents:S,scrimEvents:w}}const kn=Te({eager:Boolean},"lazy")
function xn(e,a){const l=t.ref(!1),o=t.computed((()=>l.value||e.eager||a.value))
return t.watch(a,(()=>l.value=!0)),{isBooted:l,hasContent:o,onAfterLeave:function(){e.eager||(l.value=!1)}}}function Cn(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Nn(e,t){if("top"===e.side||"bottom"===e.side){const{side:a,align:l}=e
return Cn({x:"left"===l?0:"center"===l?t.width/2:"right"===l?t.width:l,y:"top"===a?0:"bottom"===a?t.height:a},t)}if("left"===e.side||"right"===e.side){const{side:a,align:l}=e
return Cn({x:"left"===a?0:"right"===a?t.width:a,y:"top"===l?0:"center"===l?t.height/2:"bottom"===l?t.height:l},t)}return Cn({x:t.width/2,y:t.height/2},t)}const _n={static:function(){},connected:function(e,a,l){(function(e){for(;e;){if("fixed"===window.getComputedStyle(e).position)return!0
e=e.offsetParent}return!1})(e.activatorEl.value)&&Object.assign(l.value,{position:"fixed"})
const{preferredAnchor:o,preferredOrigin:n}=P((()=>{const t=W(a.location,e.isRtl.value),l="overlap"===a.origin?t:"auto"===a.origin?G(t):W(a.origin,e.isRtl.value)
return t.side===l.side&&t.align===X(l).align?{preferredAnchor:q(t),preferredOrigin:q(l)}:{preferredAnchor:t,preferredOrigin:l}})),[r,i,s,u]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>t.computed((()=>{const t=parseFloat(a[e])
return isNaN(t)?1/0:t})))),c=t.computed((()=>{if(Array.isArray(a.offset))return a.offset
if("string"==typeof a.offset){const e=a.offset.split(" ").map(parseFloat)
return e.length<2&&e.push(0),e}return"number"==typeof a.offset?[a.offset,0]:[0,0]}))
let d=!1
const v=new ResizeObserver((()=>{d&&p()}))
function p(){if(d=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>d=!0))})),!e.activatorEl.value||!e.contentEl.value)return
const t=e.activatorEl.value.getBoundingClientRect(),a=function(e,t){const a=Q(e)
t?a.x+=parseFloat(e.style.right||0):a.x-=parseFloat(e.style.left||0)
return a.y-=parseFloat(e.style.top||0),a}(e.contentEl.value,e.isRtl.value),v=et(e.contentEl.value)
v.length||(v.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(a.x+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),a.y+=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)))
const p=v.reduce(((e,t)=>{const a=t.getBoundingClientRect(),l=new Z({x:t===document.documentElement?0:a.x,y:t===document.documentElement?0:a.y,width:t.clientWidth,height:t.clientHeight})
return e?new Z({x:Math.max(e.left,l.left),y:Math.max(e.top,l.top),width:Math.min(e.right,l.right)-Math.max(e.left,l.left),height:Math.min(e.bottom,l.bottom)-Math.max(e.top,l.top)}):l}),void 0)
p.x+=12,p.y+=12,p.width-=24,p.height-=24
let f={anchor:o.value,origin:n.value}
function m(e){const l=new Z(a),o=Nn(e.anchor,t),n=Nn(e.origin,l)
let{x:r,y:i}=(v=n,{x:(d=o).x-v.x,y:d.y-v.y})
var d,v
switch(e.anchor.side){case"top":i-=c.value[0]
break
case"bottom":i+=c.value[0]
break
case"left":r-=c.value[0]
break
case"right":r+=c.value[0]}switch(e.anchor.align){case"top":i-=c.value[1]
break
case"bottom":i+=c.value[1]
break
case"left":r-=c.value[1]
break
case"right":r+=c.value[1]}l.x+=r,l.y+=i,l.width=Math.min(l.width,s.value),l.height=Math.min(l.height,u.value)
return{overflows:J(l,p),x:r,y:i}}let h=0,y=0
const b={x:0,y:0},V={x:!1,y:!1}
let S=-1
for(;;){if(S++>10){le("Infinite loop detected in connectedLocationStrategy")
break}const{x:e,y:t,overflows:l}=m(f)
h+=e,y+=t,a.x+=e,a.y+=t
{const e=K(f.anchor),t=l.x.before||l.x.after,a=l.y.before||l.y.after
let o=!1
if(["x","y"].forEach((n=>{if("x"===n&&t&&!V.x||"y"===n&&a&&!V.y){const t={anchor:{...f.anchor},origin:{...f.origin}},a="x"===n?"y"===e?X:G:"y"===e?G:X
t.anchor=a(t.anchor),t.origin=a(t.origin)
const{overflows:r}=m(t);(r[n].before<=l[n].before&&r[n].after<=l[n].after||r[n].before+r[n].after<(l[n].before+l[n].after)/2)&&(f=t,o=V[n]=!0)}})),o)continue}l.x.before&&(h+=l.x.before,a.x+=l.x.before),l.x.after&&(h-=l.x.after,a.x-=l.x.after),l.y.before&&(y+=l.y.before,a.y+=l.y.before),l.y.after&&(y-=l.y.after,a.y-=l.y.after)
{const e=J(a,p)
b.x=p.width-e.x.before-e.x.after,b.y=p.height-e.y.before-e.y.after,h+=e.x.before,a.x+=e.x.before,y+=e.y.before,a.y+=e.y.before}break}const w=K(f.anchor)
return Object.assign(l.value,{"--v-overlay-anchor-origin":`${f.anchor.side} ${f.anchor.align}`,transformOrigin:`${f.origin.side} ${f.origin.align}`,top:g(Bn(y)),left:e.isRtl.value?void 0:g(Bn(h)),right:e.isRtl.value?g(Bn(-h)):void 0,minWidth:g("y"===w?Math.min(r.value,t.width):r.value),maxWidth:g(An(C(b.x,r.value===1/0?0:r.value,s.value))),maxHeight:g(An(C(b.y,i.value===1/0?0:i.value,u.value)))}),{available:b,contentBox:a}}return t.watch([e.activatorEl,e.contentEl],((e,t)=>{let[a,l]=e,[o,n]=t
o&&v.unobserve(o),a&&v.observe(a),n&&v.unobserve(n),l&&v.observe(l)}),{immediate:!0}),t.onScopeDispose((()=>{v.disconnect()})),t.watch((()=>[o.value,n.value,a.offset,a.minWidth,a.minHeight,a.maxWidth,a.maxHeight]),(()=>p())),t.nextTick((()=>{const e=p()
if(!e)return
const{available:t,contentBox:a}=e
a.height>t.y&&requestAnimationFrame((()=>{p(),requestAnimationFrame((()=>{p()}))}))})),{updateLocation:p}}},In=Te({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"==typeof e||e in _n},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"v-overlay-location-strategies")
function Bn(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function An(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let $n=!0
const En=[]
let Rn=-1
function Tn(){cancelAnimationFrame(Rn),Rn=requestAnimationFrame((()=>{const e=En.shift()
e&&e(),En.length?Tn():$n=!0}))}const Pn={none:null,close:function(e){Mn(e.activatorEl.value??e.contentEl.value,(function(t){e.isActive.value=!1}))},block:function(e,a){const l=e.root.value?.offsetParent,o=[...new Set([...et(e.activatorEl.value,a.contained?l:void 0),...et(e.contentEl.value,a.contained?l:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),n=window.innerWidth-document.documentElement.offsetWidth,r=(i=l||document.documentElement,tt(i)&&i)
var i
r&&e.root.value.classList.add("v-overlay--scroll-blocked")
o.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",g(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",g(-e.scrollTop)),e.style.setProperty("--v-scrollbar-offset",g(n)),e.classList.add("v-overlay-scroll-blocked")})),t.onScopeDispose((()=>{o.forEach(((e,t)=>{const a=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(e.style.getPropertyValue("--v-body-scroll-y"))
e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-a,e.scrollTop=-l})),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))},reposition:function(e,a,l){let o=!1,n=-1,r=-1
function i(t){var a
a=()=>{const a=performance.now()
e.updateLocation.value?.(t)
const l=performance.now()-a
o=l/(1e3/60)>2},!$n||En.length?(En.push(a),Tn()):($n=!1,a(),Tn())}r=("undefined"==typeof requestIdleCallback?e=>e():requestIdleCallback)((()=>{l.run((()=>{Mn(e.activatorEl.value??e.contentEl.value,(e=>{o?(cancelAnimationFrame(n),n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{i(e)}))}))):i(e)}))}))})),t.onScopeDispose((()=>{"undefined"!=typeof cancelIdleCallback&&cancelIdleCallback(r),cancelAnimationFrame(n)}))}},Ln=Te({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"==typeof e||e in Pn}},"v-overlay-scroll-strategies")
function Mn(e,a){const l=[document,...et(e)]
l.forEach((e=>{e.addEventListener("scroll",a,{passive:!0})})),t.onScopeDispose((()=>{l.forEach((e=>{e.removeEventListener("scroll",a)}))}))}const Dn=["sm","md","lg","xl","xxl"],Fn=Symbol.for("vuetify:display"),On={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}}
function zn(e){return a&&!e?window.innerWidth:0}function jn(e){return a&&!e?window.innerHeight:0}function Hn(e){const t=a&&!e?window.navigator.userAgent:"ssr"
function l(e){return Boolean(t.match(e))}return{android:l(/android/i),ios:l(/iphone|ipad|ipod/i),cordova:l(/cordova/i),electron:l(/electron/i),chrome:l(/chrome/i),edge:l(/edge/i),firefox:l(/firefox/i),opera:l(/opera/i),win:l(/win/i),mac:l(/mac/i),linux:l(/linux/i),touch:o,ssr:"ssr"===t}}function Un(e,l){const{thresholds:o,mobileBreakpoint:n}=function(){return B(On,arguments.length>0&&void 0!==arguments[0]?arguments[0]:On)}(e),r=t.ref(jn(l)),i=t.shallowRef(Hn(l)),s=t.reactive({}),u=t.ref(zn(l))
function c(){r.value=jn(),u.value=zn()}return t.watchEffect((()=>{const e=u.value<o.sm,t=u.value<o.md&&!e,a=u.value<o.lg&&!(t||e),l=u.value<o.xl&&!(a||t||e),c=u.value<o.xxl&&!(l||a||t||e),d=u.value>=o.xxl,v=e?"xs":t?"sm":a?"md":l?"lg":c?"xl":"xxl",p="number"==typeof n?n:o[n],f=u.value<p
s.xs=e,s.sm=t,s.md=a,s.lg=l,s.xl=c,s.xxl=d,s.smAndUp=!e,s.mdAndUp=!(e||t),s.lgAndUp=!(e||t||a),s.xlAndUp=!(e||t||a||l),s.smAndDown=!(a||l||c||d),s.mdAndDown=!(l||c||d),s.lgAndDown=!(c||d),s.xlAndDown=!d,s.name=v,s.height=r.value,s.width=u.value,s.mobile=f,s.mobileBreakpoint=n,s.platform=i.value,s.thresholds=o})),a&&window.addEventListener("resize",c,{passive:!0}),{...t.toRefs(s),update:function(){c(),i.value=Hn()},ssr:!!l}}function Wn(){const e=t.inject(Fn)
if(!e)throw new Error("Could not find Vuetify display injection")
return e}function Yn(){if(!a)return t.ref(!1)
const{ssr:e}=Wn()
if(e){const e=t.ref(!1)
return t.onMounted((()=>{e.value=!0})),e}return t.ref(!0)}function Gn(){const e=Xe("useScopeId").vnode.scopeId
return{scopeId:e?{[e]:""}:void 0}}const Xn=Symbol.for("vuetify:stack"),qn=t.reactive([])
function Kn(){return!0}function Zn(e,t,a){if(!e||!1===Jn(e,a))return!1
const l=Ye(t)
if("undefined"!=typeof ShadowRoot&&l instanceof ShadowRoot&&l.host===e.target)return!1
const o=("object"==typeof a.value&&a.value.include||(()=>[]))()
return o.push(t),!o.some((t=>t?.contains(e.target)))}function Jn(e,t){return("object"==typeof t.value&&t.value.closeConditional||Kn)(e)}function Qn(e,t){const a=Ye(e)
t(document),"undefined"!=typeof ShadowRoot&&a instanceof ShadowRoot&&t(a)}const er={mounted(e,t){const a=a=>function(e,t,a){const l="function"==typeof a.value?a.value:a.value.handler
t._clickOutside.lastMousedownWasOutside&&Zn(e,t,a)&&setTimeout((()=>{Jn(e,a)&&l&&l(e)}),0)}(a,e,t),l=a=>{e._clickOutside.lastMousedownWasOutside=Zn(a,e,t)}
Qn(e,(e=>{e.addEventListener("click",a,!0),e.addEventListener("mousedown",l,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[t.instance.$.uid]={onClick:a,onMousedown:l}},unmounted(e,t){e._clickOutside&&(Qn(e,(a=>{if(!a||!e._clickOutside?.[t.instance.$.uid])return
const{onClick:l,onMousedown:o}=e._clickOutside[t.instance.$.uid]
a.removeEventListener("click",l,!0),a.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[t.instance.$.uid])}}
function tr(e){const{modelValue:a,color:l,...o}=e
return t.createVNode(t.Transition,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&t.createVNode("div",t.mergeProps({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const ar=Te({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[String,Boolean],default:!0},zIndex:{type:[Number,String],default:2e3},...Sn(),...Pe(),...ca(),...kn(),...In(),...Ln(),...Vt(),...ma()},"v-overlay"),lr=Ue()({name:"VOverlay",directives:{ClickOutside:er},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...ar()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,l){let{slots:o,attrs:n,emit:r}=l
const i=_t(e,"modelValue"),s=t.computed({get:()=>i.value,set:t=>{t&&e.disabled||(i.value=t)}}),{teleportTarget:u}=(c=t.computed((()=>e.attach||e.contained)),{teleportTarget:t.computed((()=>{const e=c.value
if(!0===e||!a)return
const l=!1===e?document.body:"string"==typeof e?document.querySelector(e):e
if(null==l)return void t.warn(`Unable to locate target ${e}`)
let o=l.querySelector(":scope > .v-overlay-container")
return o||(o=document.createElement("div"),o.className="v-overlay-container",l.appendChild(o)),o}))})
var c
const{themeClasses:d}=kt(e),{rtlClasses:v,isRtl:p}=Ot(),{hasContent:f,onAfterLeave:m}=xn(e,s),h=Ba(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),{globalTop:y,localTop:b,stackStyles:V}=function(e,a,l){const o=Xe("useStack"),n=!l,r=t.inject(Xn,void 0),i=t.reactive({activeChildren:new Set})
t.provide(Xn,i)
const s=t.ref(+a.value)
Le(e,(()=>{const e=qn.at(-1)?.[1]
s.value=e?e+10:+a.value,n&&qn.push([o.uid,s.value]),r?.activeChildren.add(o.uid),t.onScopeDispose((()=>{if(n){const e=t.toRaw(qn).findIndex((e=>e[0]===o.uid))
qn.splice(e,1)}r?.activeChildren.delete(o.uid)}))}))
const u=t.ref(!0)
n&&t.watchEffect((()=>{const e=qn.at(-1)?.[0]===o.uid
setTimeout((()=>u.value=e))}))
const c=t.computed((()=>!i.activeChildren.size))
return{globalTop:t.readonly(u),localTop:c,stackStyles:t.computed((()=>({zIndex:s.value})))}}(s,t.toRef(e,"zIndex"),e._disableGlobalStack),{activatorEl:S,activatorRef:w,activatorEvents:k,contentEvents:x,scrimEvents:C}=wn(e,{isActive:s,isTop:b}),{dimensionStyles:N}=da(e),_=Yn(),{scopeId:I}=Gn()
t.watch((()=>e.disabled),(e=>{e&&(s.value=!1)}))
const B=t.ref(),A=t.ref(),{contentStyles:$,updateLocation:E}=function(e,l){const o=t.ref({}),n=t.ref()
function r(e){n.value?.(e)}return a&&(Le((()=>!(!l.isActive.value||!e.locationStrategy)),(a=>{t.watch((()=>e.locationStrategy),a),t.onScopeDispose((()=>{n.value=void 0})),"function"==typeof e.locationStrategy?n.value=e.locationStrategy(l,e,o)?.updateLocation:n.value=_n[e.locationStrategy](l,e,o)?.updateLocation})),window.addEventListener("resize",r,{passive:!0}),t.onScopeDispose((()=>{window.removeEventListener("resize",r),n.value=void 0}))),{contentStyles:o,updateLocation:n}}(e,{isRtl:p,contentEl:A,activatorEl:S,isActive:s})
function R(t){r("click:outside",t),e.persistent?D():s.value=!1}function T(){return s.value&&y.value}function P(t){"Escape"===t.key&&y.value&&(e.persistent?D():s.value=!1)}!function(e,l){if(!a)return
let o
t.watchEffect((async()=>{o?.stop(),l.isActive.value&&e.scrollStrategy&&(o=t.effectScope(),await t.nextTick(),o.active&&o.run((()=>{"function"==typeof e.scrollStrategy?e.scrollStrategy(l,e,o):Pn[e.scrollStrategy]?.(l,e,o)})))})),t.onScopeDispose((()=>{o?.stop()}))}(e,{root:B,contentEl:A,activatorEl:S,isActive:s,updateLocation:E}),a&&t.watch(s,(e=>{e?window.addEventListener("keydown",P):window.removeEventListener("keydown",P)}),{immediate:!0})
const L=Hl()
Le((()=>e.closeOnBack),(()=>{!function(e,l){let o,n,r=!1
function i(e){e.state?.replaced||(r=!0,setTimeout((()=>r=!1)))}a&&(t.nextTick((()=>{window.addEventListener("popstate",i),o=e?.beforeEach(((e,t,a)=>{Yl?r?l(a):a():setTimeout((()=>r?l(a):a())),Yl=!0})),n=e?.afterEach((()=>{Yl=!1}))})),t.onScopeDispose((()=>{window.removeEventListener("popstate",i),o?.(),n?.()})))}(L,(t=>{y.value&&s.value?(t(!1),e.persistent?D():s.value=!1):t()}))}))
const M=t.ref()
function D(){e.noClickAnimation||A.value&&ee(A.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Ge})}return t.watch((()=>s.value&&(e.absolute||e.contained)&&null==u.value),(e=>{if(e){const e=Qe(B.value)
e&&e!==document.scrollingElement&&(M.value=e.scrollTop)}})),lt((()=>t.createVNode(t.Fragment,null,[o.activator?.({isActive:s.value,props:t.mergeProps({ref:w},t.toHandlers(k.value),e.activatorProps)}),_.value&&t.createVNode(t.Teleport,{disabled:!u.value,to:u.value},{default:()=>[f.value&&t.createVNode("div",t.mergeProps({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},d.value,v.value,e.class],style:[V.value,{top:g(M.value)},e.style],ref:B},I,n),[t.createVNode(tr,t.mergeProps({color:h,modelValue:s.value&&!!e.scrim},t.toHandlers(C.value)),null),t.createVNode(ga,{appear:!0,persisted:!0,transition:e.transition,target:S.value,onAfterLeave:()=>{m(),r("afterLeave")}},{default:()=>[t.withDirectives(t.createVNode("div",t.mergeProps({ref:A,class:["v-overlay__content",e.contentClass],style:[N.value,$.value]},t.toHandlers(x.value),e.contentProps),[o.default?.({isActive:s})]),[[t.vShow,s.value],[t.resolveDirective("click-outside"),{handler:R,closeConditional:T,include:()=>[S.value]}]])]})])]})]))),{activatorEl:S,animateClick:D,contentEl:A,globalTop:y,localTop:b,updateLocation:E}}}),or=Ue()({name:"VMenu",props:{id:String,...w(ar({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Yt}}),["absolute"])},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),{scopeId:n}=Gn(),r=Je(),i=t.computed((()=>e.id||`v-menu-${r}`)),s=t.ref(),u=t.inject(Vn,null),c=t.ref(0)
function d(){u?.closeParents()}t.provide(Vn,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout((()=>{c.value||(o.value=!1,u?.closeParents())}),40)}}),t.watch(o,(e=>{e?u?.register():u?.unregister()}))
const v=t.computed((()=>t.mergeProps({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value},e.activatorProps)))
return lt((()=>{const[a]=lr.filterProps(e)
return t.createVNode(lr,t.mergeProps({ref:s,class:["v-menu",e.class],style:e.style},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,absolute:!0,activatorProps:v.value,"onClick:outside":d},n),{activator:l.activator,default:function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o]
return t.createVNode(jt,{root:!0},{default:()=>[l.default?.(...a)]})}})})),wo({id:i,ΨopenChildren:c},s)}}),nr=Te({chips:Boolean,closableChips:Boolean,eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:el,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,valueComparator:{type:Function,default:v},...sn({itemChildren:!1})},"v-select"),rr=Ue()({name:"VSelect",props:{...nr(),...w(xo({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ma({transition:{component:Yt}})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:l}=a
const{t:o}=Dt(),n=t.ref(),r=t.ref(),i=_t(e,"menu"),s=t.computed({get:()=>i.value,set:e=>{i.value&&!e&&r.value?.ΨopenChildren||(i.value=e)}}),{items:u,transformIn:c,transformOut:d}=dn(e),v=_t(e,"modelValue",[],(e=>c(x(e))),(t=>{const a=d(t)
return e.multiple?a:a[0]??null})),p=fo(),f=t.computed((()=>v.value.map((t=>u.value.find((a=>e.valueComparator(a.value,t.value)))||t)))),m=t.computed((()=>f.value.map((e=>e.props.value)))),g=t.ref(!1)
let h,y=""
const b=t.computed((()=>e.hideSelected?u.value.filter((e=>!f.value.some((t=>t===e)))):u.value)),V=t.ref()
function S(t){e.openOnClear&&(s.value=!0)}function w(){e.hideNoData&&!u.value.length||e.readonly||p?.isReadonly.value||(s.value=!s.value)}function k(t){if(e.readonly||p?.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(s.value=!0),["Escape","Tab"].includes(t.key)&&(s.value=!1),"ArrowDown"===t.key?V.value?.focus("next"):"ArrowUp"===t.key?V.value?.focus("prev"):"Home"===t.key?V.value?.focus("first"):"End"===t.key&&V.value?.focus("last")
if(e.multiple||!function(e){const t=1===e.key.length,a=!e.ctrlKey&&!e.metaKey&&!e.altKey
return t&&a}(t))return
const a=performance.now()
a-h>1e3&&(y=""),y+=t.key.toLowerCase(),h=a
const l=u.value.find((e=>e.title.toLowerCase().startsWith(y)))
void 0!==l&&(v.value=[l])}function C(t){if(e.multiple){const a=m.value.findIndex((a=>e.valueComparator(a,t.value)))
if(-1===a)v.value=[...v.value,t]
else{const e=[...v.value]
e.splice(a,1),v.value=e}}else v.value=[t],s.value=!1}function N(e){V.value?.$el.contains(e.relatedTarget)||(s.value=!1)}function _(e){g.value=!0}function I(e){null==e.relatedTarget&&n.value?.focus()}return lt((()=>{const a=!(!e.chips&&!l.chip),i=!!(!e.hideNoData||b.value.length||l.prepend||l.append||l["no-data"]),u=v.value.length>0,[c]=Co.filterProps(e),d=u||!g.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder
return t.createVNode(Co,t.mergeProps({ref:n},c,{modelValue:v.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":e=>{null==e&&(v.value=[])},focused:g.value,"onUpdate:focused":e=>g.value=e,validationValue:v.externalValue,dirty:u,class:["v-select",{"v-select--active-menu":s.value,"v-select--chips":!!e.chips,["v-select--"+(e.multiple?"multiple":"single")]:!0,"v-select--selected":v.value.length},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:!0,placeholder:d,"onClick:clear":S,"onMousedown:control":w,onBlur:N,onKeydown:k}),{...l,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(or,t.mergeProps({ref:r,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,activator:"parent",contentClass:"v-select__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition},e.menuProps),{default:()=>[i&&t.createVNode(fn,{ref:V,selected:m.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusin:_,onFocusout:I},{default:()=>[!b.value.length&&!e.hideNoData&&(l["no-data"]?.()??t.createVNode(on,{title:o(e.noDataText)},null)),l["prepend-item"]?.(),b.value.map(((a,o)=>l.item?l.item?.({item:a,index:o,props:t.mergeProps(a.props,{onClick:()=>C(a)})}):t.createVNode(on,t.mergeProps({key:o},a.props,{onClick:()=>C(a)}),{prepend:a=>{let{isSelected:l}=a
return e.multiple&&!e.hideSelected?t.createVNode(Eo,{modelValue:l,ripple:!1,tabindex:"-1"},null):void 0}}))),l["append-item"]?.()]})]}),f.value.map(((o,n)=>{const r={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),C(o)},modelValue:!0,"onUpdate:modelValue":void 0}
return t.createVNode("div",{key:o.value,class:"v-select__selection"},[a?l.chip?t.createVNode(jt,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[l.chip?.({item:o,index:n,props:r})]}):t.createVNode(Do,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:o.title},r),null):l.selection?.({item:o,index:n})??t.createVNode("span",{class:"v-select__selection-text"},[o.title,e.multiple&&n<f.value.length-1&&t.createVNode("span",{class:"v-select__selection-comma"},[t.createTextVNode(",")])])])}))])})})),wo({isFocused:g,menu:s,select:C},n)}}),ir=(e,t,a)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),sr=Te({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter")
function ur(e,a,l,o){const n=t.computed((()=>"string"!=typeof l?.value&&"number"!=typeof l?.value?"":String(l.value))),r=t.ref([]),i=t.ref(new Map)
return t.watchEffect((()=>{r.value=[],i.value=new Map
const l=t.unref(a);(function(e,t,a){const l=[],o=a?.default??ir,n=!!a?.filterKeys&&x(a.filterKeys),r=Object.keys(a?.customKeyFilter??{}).length
if(!e?.length)return l
e:for(let i=0;i<e.length;i++){const s=e[i],u={},c={}
let d=-1
if(t&&!a?.noFilter){if("object"==typeof s){const e=n||Object.keys(s)
for(const l of e){const e=f(s,l,s),n=a?.customKeyFilter?.[l]
if(d=n?n(e,t,s):o(e,t,s),-1!==d&&!1!==d)n?u[l]=d:c[l]=d
else if("every"===a?.filterMode)continue e}}else d=o(s,t,s),-1!==d&&!1!==d&&(c.title=d)
const e=Object.keys(c).length,l=Object.keys(u).length
if(!e&&!l)continue
if("union"===a?.filterMode&&l!==r&&!e)continue
if("intersection"===a?.filterMode&&(l!==r||!e))continue}l.push({index:i,matches:{...c,...u}})}return l})(l,n.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:t.unref(o?.filterKeys)??e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).forEach((e=>{let{index:t,matches:a}=e
const o=l[t]
r.value.push(o),i.value.set(o.value,a)}))})),{filteredItems:r,filteredMatches:i,getMatches:function(e){return i.value.get(e.value)}}}const cr=Ue()({name:"VAutocomplete",props:{search:String,...sr({filterKeys:["title"]}),...nr(),...w(xo({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ma({transition:!1})},emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:l}=a
const{t:o}=Dt(),n=t.ref(),r=t.ref(!1),i=t.ref(!0),s=t.ref(),u=_t(e,"menu"),c=t.computed({get:()=>u.value,set:e=>{u.value&&!e&&s.value?.ΨopenChildren||(u.value=e)}}),d=t.ref(-1),v=t.computed((()=>n.value?.color)),{items:p,transformIn:f,transformOut:m}=dn(e),{textColorClasses:g,textColorStyles:h}=Ia(v),y=_t(e,"search",""),b=_t(e,"modelValue",[],(e=>f(x(e))),(t=>{const a=m(t)
return e.multiple?a:a[0]??null})),V=fo(),{filteredItems:S,getMatches:w}=ur(e,p,t.computed((()=>i.value?void 0:y.value))),k=t.computed((()=>b.value.map((t=>p.value.find((a=>e.valueComparator(a.value,t.value)))||t)))),C=t.computed((()=>e.hideSelected?S.value.filter((e=>!k.value.some((t=>t.value===e.value)))):S.value)),N=t.computed((()=>k.value.map((e=>e.props.value)))),_=t.computed((()=>k.value[d.value])),I=t.ref()
function B(t){e.openOnClear&&(c.value=!0),y.value=""}function A(){e.hideNoData&&!p.value.length||e.readonly||V?.isReadonly.value||(c.value=!0)}function $(t){if(e.readonly||V?.isReadonly.value)return
const a=n.value.selectionStart,l=N.value.length
if((d.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(c.value=!0),["Escape"].includes(t.key)&&(c.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(i.value=!0),"ArrowDown"===t.key?I.value?.focus("next"):"ArrowUp"===t.key&&I.value?.focus("prev"),e.multiple){if(["Backspace","Delete"].includes(t.key)){if(d.value<0)return void("Backspace"!==t.key||y.value||(d.value=l-1))
const e=d.value
_.value&&M(_.value),d.value=e>=l-1?l-2:e}if("ArrowLeft"===t.key){if(d.value<0&&a>0)return
const e=d.value>-1?d.value-1:l-1
k.value[e]?d.value=e:(d.value=-1,n.value.setSelectionRange(y.value?.length,y.value?.length))}if("ArrowRight"===t.key){if(d.value<0)return
const e=d.value+1
k.value[e]?d.value=e:(d.value=-1,n.value.setSelectionRange(0,0))}}}function E(e){y.value=e.target.value}function R(){r.value&&(i.value=!0)}function T(e){r.value=!0}function P(e){null==e.relatedTarget&&n.value?.focus()}const L=t.ref(!1)
function M(a){if(e.multiple){const t=N.value.findIndex((t=>e.valueComparator(t,a.value)))
if(-1===t)b.value=[...b.value,a]
else{const e=[...b.value]
e.splice(t,1),b.value=e}}else b.value=[a],L.value=!0,l.selection||(y.value=a.title),c.value=!1,i.value=!0,t.nextTick((()=>L.value=!1))}return t.watch(r,(a=>{a?(L.value=!0,y.value=e.multiple||l.selection?"":String(k.value.at(-1)?.props.title??""),i.value=!0,t.nextTick((()=>L.value=!1))):(c.value=!1,y.value="")})),t.watch(y,(e=>{r.value&&!L.value&&(e&&(c.value=!0),i.value=!e)})),lt((()=>{const a=!(!e.chips&&!l.chip),u=!!(!e.hideNoData||C.value.length||l.prepend||l.append||l["no-data"]),v=b.value.length>0,[p]=Co.filterProps(e)
return t.createVNode(Co,t.mergeProps({ref:n},p,{modelValue:y.value,"onUpdate:modelValue":e=>{null==e&&(b.value=[])},focused:r.value,"onUpdate:focused":e=>r.value=e,validationValue:b.externalValue,dirty:v,onInput:E,class:["v-autocomplete",{"v-autocomplete--active-menu":c.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selecting-index":d.value>-1,["v-autocomplete--"+(e.multiple?"multiple":"single")]:!0,"v-autocomplete--selection-slot":!!l.selection},e.class],style:e.style,appendInnerIcon:e.menuIcon,readonly:e.readonly,placeholder:v?void 0:e.placeholder,"onClick:clear":B,"onMousedown:control":A,onKeydown:$}),{...l,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(or,t.mergeProps({ref:s,modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,activator:"parent",contentClass:"v-autocomplete__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:R},e.menuProps),{default:()=>[u&&t.createVNode(fn,{ref:I,selected:N.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusin:T,onFocusout:P},{default:()=>[!C.value.length&&!e.hideNoData&&(l["no-data"]?.()??t.createVNode(on,{title:o(e.noDataText)},null)),l["prepend-item"]?.(),C.value.map((a=>l.item?.({item:a,props:t.mergeProps(a.props,{onClick:()=>M(a)})})??t.createVNode(on,t.mergeProps({key:a.value},a.props,{onClick:()=>M(a)}),{prepend:a=>{let{isSelected:l}=a
return e.multiple&&!e.hideSelected?t.createVNode(Eo,{modelValue:l,ripple:!1,tabindex:"-1"},null):void 0},title:()=>i.value?a.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-autocomplete__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(a+l)])]):e}(a.title,w(a)?.title,y.value?.length??0)}))),l["append-item"]?.()]})]}),k.value.map(((o,n)=>{const r={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),M(o)},modelValue:!0,"onUpdate:modelValue":void 0}
return t.createVNode("div",{key:o.value,class:["v-autocomplete__selection",n===d.value&&["v-autocomplete__selection--selected",g.value]],style:n===d.value?h.value:{}},[a?l.chip?t.createVNode(jt,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[l.chip?.({item:o,index:n,props:r})]}):t.createVNode(Do,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:o.title},r),null):l.selection?.({item:o,index:n})??t.createVNode("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&n<k.value.length-1&&t.createVNode("span",{class:"v-autocomplete__selection-comma"},[t.createTextVNode(",")])])])}))])})})),wo({isFocused:r,isPristine:i,menu:c,search:y,filteredItems:S,select:M},n)}}),dr=Ue()({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:el,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...Pe(),...Tl({location:"top end"}),...Ca(),...ya(),...Vt(),...ma({transition:"scale-rotate-transition"})},setup(e,a){const{backgroundColorClasses:l,backgroundColorStyles:o}=Ba(t.toRef(e,"color")),{roundedClasses:n}=Na(e),{t:r}=Dt(),{textColorClasses:i,textColorStyles:s}=Ia(t.toRef(e,"textColor")),{themeClasses:u}=xt(),{locationStyles:c}=Pl(e,!0,(t=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0)))
return lt((()=>{const d=Number(e.content),v=!e.max||isNaN(d)?e.content:d<=+e.max?d:`${e.max}+`,[p,f]=S(a.attrs,["aria-atomic","aria-label","aria-live","role","title"])
return t.createVNode(e.tag,t.mergeProps({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},f,{style:e.style}),{default:()=>[t.createVNode("div",{class:"v-badge__wrapper"},[a.slots.default?.(),t.createVNode(ga,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("span",t.mergeProps({class:["v-badge__badge",u.value,l.value,n.value,i.value],style:[o.value,s.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":r(e.label,d),"aria-live":"polite",role:"status"},p),[e.dot?void 0:a.slots.badge?a.slots.badge?.():e.icon?t.createVNode(pl,{icon:e.icon},null):v]),[[t.vShow,e.modelValue]])]})])]})})),{}}}),vr=Ue()({name:"VBannerActions",props:{color:String,density:String,...Pe()},setup(e,a){let{slots:l}=a
return Oe({VBtn:{color:e.color,density:e.density,variant:"text"}}),lt((()=>t.createVNode("div",{class:["v-banner-actions",e.class],style:e.style},[l.default?.()]))),{}}}),pr=We("v-banner-text"),fr=Ue()({name:"VBanner",props:{avatar:String,color:String,icon:el,lines:String,stacked:Boolean,sticky:Boolean,text:String,...Sa(),...Pe(),...Ma(),...ca(),...ka(),...Tl(),...zl(),...Ca(),...ya(),...Vt()},setup(e,a){let{slots:l}=a
const{borderClasses:o}=wa(e),{densityClasses:n}=Da(e),{mobile:r}=Wn(),{dimensionStyles:i}=da(e),{elevationClasses:s}=xa(e),{locationStyles:u}=Pl(e),{positionClasses:c}=jl(e),{roundedClasses:d}=Na(e),{themeClasses:v}=kt(e),p=t.toRef(e,"color"),f=t.toRef(e,"density")
Oe({VBannerActions:{color:p,density:f}}),lt((()=>{const a=!(!e.text&&!l.text),m=!(!e.avatar&&!e.icon),g=!(!m&&!l.prepend)
return t.createVNode(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||r.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},o.value,n.value,s.value,c.value,d.value,v.value,e.class],style:[i.value,u.value,e.style],role:"banner"},{default:()=>[g&&t.createVNode("div",{key:"prepend",class:"v-banner__prepend"},[l.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!m,defaults:{VAvatar:{color:p.value,density:f.value,icon:e.icon,image:e.avatar}}},l.prepend):t.createVNode(Po,{key:"prepend-avatar",color:p.value,density:f.value,icon:e.icon,image:e.avatar},null)]),t.createVNode("div",{class:"v-banner__content"},[a&&t.createVNode(pr,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.()]),l.actions&&t.createVNode(vr,{key:"actions"},l.actions)]})}))}}),mr=Ue()({name:"VBottomNavigation",props:{bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...Sa(),...Pe(),...Ma(),...ka(),...Ca(),...it({name:"bottom-navigation"}),...ya({tag:"header"}),...Wa({modelValue:!0,selectedClass:"v-btn--selected"}),...Vt()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=xt(),{borderClasses:n}=wa(e),{backgroundColorClasses:r,backgroundColorStyles:i}=Ba(t.toRef(e,"bgColor")),{densityClasses:s}=Da(e),{elevationClasses:u}=xa(e),{roundedClasses:c}=Na(e),{ssrBootStyles:d}=Ta(),v=t.computed((()=>Number(e.height)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0))),p=t.toRef(e,"active"),{layoutItemStyles:f}=ut({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:t.computed((()=>p.value?v.value:0)),elementSize:v,active:p,absolute:t.toRef(e,"absolute")})
return Xa(e,Ka),Oe({VBtn:{color:t.toRef(e,"color"),density:t.toRef(e,"density"),stacked:t.computed((()=>"horizontal"!==e.mode)),variant:"text"}},{scoped:!0}),lt((()=>t.createVNode(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":p.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":"shift"===e.mode},o.value,r.value,n.value,s.value,u.value,c.value,e.class],style:[i.value,f.value,{height:g(v.value),transform:`translateY(${g(p.value?0:100,"%")})`},d.value,e.style]},{default:()=>[l.default&&t.createVNode("div",{class:"v-bottom-navigation__content"},[l.default()])]}))),{}}}),gr=Ue()({name:"VBreadcrumbsDivider",props:{divider:[Number,String],...Pe()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[l?.default?.()??e.divider]))),{}}}),hr=Ue()({name:"VBreadcrumbsItem",props:{active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...Pe(),...Wl(),...ya({tag:"li"})},setup(e,a){let{slots:l,attrs:o}=a
const n=Ul(e,o),r=t.computed((()=>e.active||n.isActive?.value)),i=t.computed((()=>r.value?e.activeColor:e.color)),{textColorClasses:s,textColorStyles:u}=Ia(i)
return lt((()=>{const a=n.isLink.value?"a":e.tag
return t.createVNode(a,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":e.disabled,"v-breadcrumbs-item--link":n.isLink.value,[`${e.activeClass}`]:r.value&&e.activeClass},s.value,e.class],style:[u.value,e.style],href:n.href.value,"aria-current":r.value?"page":void 0,onClick:n.navigate},{default:()=>[l.default?.()??e.title]})})),{}}}),yr=Ue()({name:"VBreadcrumbs",props:{activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:el,items:{type:Array,default:()=>[]},...Pe(),...Ma(),...Ca(),...ya({tag:"ul"})},setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ba(t.toRef(e,"bgColor")),{densityClasses:r}=Da(e),{roundedClasses:i}=Na(e)
Oe({VBreadcrumbsDivider:{divider:t.toRef(e,"divider")},VBreadcrumbsItem:{activeClass:t.toRef(e,"activeClass"),activeColor:t.toRef(e,"activeColor"),color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled")}})
const s=t.computed((()=>e.items.map((e=>"string"==typeof e?{item:{title:e},raw:e}:{item:e,raw:e}))))
return lt((()=>{const a=!(!l.prepend&&!e.icon)
return t.createVNode(e.tag,{class:["v-breadcrumbs",o.value,r.value,i.value,e.class],style:[n.value,e.style]},{default:()=>[a&&t.createVNode("div",{key:"prepend",class:"v-breadcrumbs__prepend"},[l.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},l.prepend):t.createVNode(pl,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map(((e,a,o)=>{let{item:n,raw:r}=e
return t.createVNode(t.Fragment,null,[t.createVNode(hr,t.mergeProps({key:n.title,disabled:a>=o.length-1},n),{default:l.title?()=>l.title?.({item:r,index:a}):void 0}),a<o.length-1&&t.createVNode(gr,null,{default:l.divider?()=>l.divider?.({item:r,index:a}):void 0})])})),l.default?.()]})})),{}}}),br=Ue()({name:"VCardActions",props:Pe(),setup(e,a){let{slots:l}=a
return Oe({VBtn:{variant:"text"}}),lt((()=>t.createVNode("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}}),Vr=We("v-card-subtitle"),Sr=We("v-card-title"),wr=Ue()({name:"VCardItem",props:{appendAvatar:String,appendIcon:el,prependAvatar:String,prependIcon:el,subtitle:String,title:String,...Pe(),...Ma()},setup(e,a){let{slots:l}=a
return lt((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),o=!(!a&&!l.prepend),n=!(!e.appendAvatar&&!e.appendIcon),r=!(!n&&!l.append),i=!(!e.title&&!l.title),s=!(!e.subtitle&&!l.subtitle)
return t.createVNode("div",{class:["v-card-item",e.class],style:e.style},[o&&t.createVNode("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?t.createVNode(jt,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},l.prepend):a&&t.createVNode(Po,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t.createVNode("div",{class:"v-card-item__content"},[i&&t.createVNode(Sr,{key:"title"},{default:()=>[l.title?.()??e.title]}),s&&t.createVNode(Vr,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),r&&t.createVNode("div",{key:"append",class:"v-card-item__append"},[l.append?t.createVNode(jt,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},l.append):n&&t.createVNode(Po,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}}),kr=We("v-card-text"),xr=Ue()({name:"VCard",directives:{Ripple:El},props:{appendAvatar:String,appendIcon:el,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:el,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...Sa(),...Pe(),...Ma(),...ca(),...ka(),...Ml(),...Tl(),...zl(),...Ca(),...Wl(),...ya(),...Vt(),...za({variant:"elevated"})},setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=kt(e),{borderClasses:r}=wa(e),{colorClasses:i,colorStyles:s,variantClasses:u}=ja(e),{densityClasses:c}=Da(e),{dimensionStyles:d}=da(e),{elevationClasses:v}=xa(e),{loaderClasses:p}=Dl(e),{locationStyles:f}=Pl(e),{positionClasses:m}=jl(e),{roundedClasses:g}=Na(e),h=Ul(e,l),y=t.computed((()=>!1!==e.link&&h.isLink.value)),b=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||h.isClickable.value)))
return lt((()=>{const a=y.value?"a":e.tag,l=!(!o.title&&!e.title),V=!(!o.subtitle&&!e.subtitle),S=l||V,w=!!(o.append||e.appendAvatar||e.appendIcon),k=!!(o.prepend||e.prependAvatar||e.prependIcon),x=!(!o.image&&!e.image),C=S||k||w,N=!(!o.text&&!e.text)
return t.withDirectives(t.createVNode(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},n.value,r.value,i.value,c.value,v.value,p.value,m.value,g.value,u.value,e.class],style:[s.value,d.value,f.value,e.style],href:h.href.value,onClick:b.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[x&&t.createVNode("div",{key:"image",class:"v-card__image"},[o.image?t.createVNode(jt,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):t.createVNode(ha,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(Fl,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:o.loader}),C&&t.createVNode(wr,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:o.item,prepend:o.prepend,title:o.title,subtitle:o.subtitle,append:o.append}),N&&t.createVNode(kr,{key:"text"},{default:()=>[o.text?.()??e.text]}),o.default?.(),o.actions&&t.createVNode(br,null,{default:o.actions}),Oa(b.value,"v-card")]}),[[t.resolveDirective("ripple"),b.value&&e.ripple]])})),{}}})
function Cr(e,t){const a=e.changedTouches[0]
t.touchstartX=a.clientX,t.touchstartY=a.clientY,t.start?.({originalEvent:e,...t})}function Nr(e,t){const a=e.changedTouches[0]
t.touchendX=a.clientX,t.touchendY=a.clientY,t.end?.({originalEvent:e,...t}),(e=>{const{touchstartX:t,touchendX:a,touchstartY:l,touchendY:o}=e
e.offsetX=a-t,e.offsetY=o-l,Math.abs(e.offsetY)<.5*Math.abs(e.offsetX)&&(e.left&&a<t-16&&e.left(e),e.right&&a>t+16&&e.right(e)),Math.abs(e.offsetX)<.5*Math.abs(e.offsetY)&&(e.up&&o<l-16&&e.up(e),e.down&&o>l+16&&e.down(e))})(t)}function _r(e,t){const a=e.changedTouches[0]
t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,t.move?.({originalEvent:e,...t})}const Ir={mounted:function(e,t){const a=t.value,l=a?.parent?e.parentElement:e,o=a?.options??{passive:!0},n=t.instance?.$.uid
if(!l||!n)return
const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end}
return{touchstart:e=>Cr(e,t),touchend:e=>Nr(e,t),touchmove:e=>_r(e,t)}}(t.value)
l._touchHandlers=l._touchHandlers??Object.create(null),l._touchHandlers[n]=r,V(r).forEach((e=>{l.addEventListener(e,r[e],o)}))},unmounted:function(e,t){const a=t.value?.parent?e.parentElement:e,l=t.instance?.$.uid
if(!a?._touchHandlers||!l)return
const o=a._touchHandlers[l]
V(o).forEach((e=>{a.removeEventListener(e,o[e])})),delete a._touchHandlers[l]}},Br=Symbol.for("vuetify:v-window"),Ar=Symbol.for("vuetify:v-window-group"),$r=Te({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||"hover"===e},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...Pe(),...ya(),...Vt()},"v-window"),Er=Ue()({name:"VWindow",directives:{Touch:Ir},props:$r(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{isRtl:n}=Ot(),{t:r}=Dt(),i=Xa(e,Ar),s=t.ref(),u=t.computed((()=>n.value?!e.reverse:e.reverse)),c=t.ref(!1),d=t.computed((()=>`v-window-${"vertical"===e.direction?"y":"x"}${(u.value?!c.value:c.value)?"-reverse":""}-transition`)),v=t.ref(0),p=t.ref(void 0),f=t.computed((()=>i.items.value.findIndex((e=>i.selected.value.includes(e.id)))))
t.watch(f,((e,t)=>{const a=i.items.value.length,l=a-1
c.value=a<=2?e<t:e===l&&0===t||(0!==e||t!==l)&&e<t})),t.provide(Br,{transition:d,isReversed:c,transitionCount:v,transitionHeight:p,rootRef:s})
const m=t.computed((()=>e.continuous||0!==f.value)),g=t.computed((()=>e.continuous||f.value!==i.items.value.length-1))
function h(){m.value&&i.prev()}function y(){g.value&&i.next()}const b=t.computed((()=>{const a=[],o={icon:n.value?e.nextIcon:e.prevIcon,class:"v-window__"+(u.value?"right":"left"),onClick:i.prev,ariaLabel:r("$vuetify.carousel.prev")}
a.push(m.value?l.prev?l.prev({props:o}):t.createVNode(Xl,o,null):t.createVNode("div",null,null))
const s={icon:n.value?e.prevIcon:e.nextIcon,class:"v-window__"+(u.value?"left":"right"),onClick:i.next,ariaLabel:r("$vuetify.carousel.next")}
return a.push(g.value?l.next?l.next({props:s}):t.createVNode(Xl,s,null):t.createVNode("div",null,null)),a})),V=t.computed((()=>{if(!1===e.touch)return e.touch
return{...{left:()=>{u.value?h():y()},right:()=>{u.value?y():h()},start:e=>{let{originalEvent:t}=e
t.stopPropagation()}},...!0===e.touch?{}:e.touch}}))
return lt((()=>t.withDirectives(t.createVNode(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":"hover"===e.showArrows},o.value,e.class],style:e.style},{default:()=>[t.createVNode("div",{class:"v-window__container",style:{height:p.value}},[l.default?.({group:i}),!1!==e.showArrows&&t.createVNode("div",{class:"v-window__controls"},[b.value])]),l.additional?.({group:i})]}),[[t.resolveDirective("touch"),V.value]]))),{group:i}}}),Rr=Ue()({name:"VCarousel",props:{color:String,cycle:Boolean,delimiterIcon:{type:el,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...$r({continuous:!0,mandatory:"force",showArrows:!0})},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),{t:n}=Dt(),r=t.ref()
let i=-1
function s(){e.cycle&&r.value&&(i=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(i),window.requestAnimationFrame(s)}return t.watch(o,u),t.watch((()=>e.interval),u),t.watch((()=>e.cycle),(e=>{e?u():window.clearTimeout(i)})),t.onMounted(s),lt((()=>t.createVNode(Er,{ref:r,modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:g(e.height)},e.style],continuous:!0,mandatory:"force",showArrows:e.showArrows},{default:l.default,additional:a=>{let{group:r}=a
return t.createVNode(t.Fragment,null,[!e.hideDelimiters&&t.createVNode("div",{class:"v-carousel__controls",style:{left:"left"===e.verticalDelimiters&&e.verticalDelimiters?0:"auto",right:"right"===e.verticalDelimiters?0:"auto"}},[r.items.value.length>0&&t.createVNode(jt,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map(((e,a)=>{const o={id:`carousel-item-${e.id}`,"aria-label":n("$vuetify.carousel.ariaLabel.delimiter",a+1,r.items.value.length),class:[r.isSelected(e.id)&&"v-btn--active"],onClick:()=>r.select(e.id,!0)}
return l.item?l.item({props:o,item:e}):t.createVNode(Xl,t.mergeProps(e,o),null)}))]})]),e.progress&&t.createVNode(Ll,{class:"v-carousel__progress",color:"string"==typeof e.progress?e.progress:void 0,modelValue:(r.getItemIndex(o.value)+1)/r.items.value.length*100},null)])},prev:l.prev,next:l.next}))),{}}}),Tr=Ue()({name:"VWindowItem",directives:{Touch:Ir},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...Pe(),...Ya(),...kn()},emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(Br),n=Ga(e,Ar),{isBooted:r}=Ta()
if(!o||!n)throw new Error("[Vuetify] VWindowItem must be used inside VWindow")
const i=t.ref(!1),s=t.computed((()=>o.isReversed.value?!1!==e.reverseTransition:!1!==e.transition))
function u(){i.value&&o&&(i.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,0===o.transitionCount.value&&(o.transitionHeight.value=void 0)))}function c(){!i.value&&o&&(i.value=!0,0===o.transitionCount.value&&(o.transitionHeight.value=g(o.rootRef.value?.clientHeight)),o.transitionCount.value+=1)}function d(){u()}function v(e){i.value&&t.nextTick((()=>{s.value&&i.value&&o&&(o.transitionHeight.value=g(e.clientHeight))}))}const p=t.computed((()=>{const t=o.isReversed.value?e.reverseTransition:e.transition
return!!s.value&&{name:"string"!=typeof t?o.transition.value:t,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:v}})),{hasContent:f}=xn(e,n.isSelected)
return lt((()=>t.createVNode(ga,{transition:p.value,disabled:!r.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-window-item",n.selectedClass.value,e.class],style:e.style},[f.value&&l.default?.()]),[[t.vShow,n.isSelected.value]])]}))),{}}}),Pr=Ue()({name:"VCarouselItem",inheritAttrs:!1,props:{value:null,...Pe()},setup(e,a){let{slots:l,attrs:o}=a
lt((()=>t.createVNode(Tr,{class:["v-carousel-item",e.class],style:e.style,value:e.value},{default:()=>[t.createVNode(ha,o,l)]})))}}),Lr=We("v-code"),Mr=Te({color:String,...Sa(),...Pe(),...ca(),...ka(),...Tl(),...zl(),...Ca(),...ya(),...Vt()},"v-sheet"),Dr=Ue()({name:"VSheet",props:{...Mr()},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{backgroundColorClasses:n,backgroundColorStyles:r}=Ba(t.toRef(e,"color")),{borderClasses:i}=wa(e),{dimensionStyles:s}=da(e),{elevationClasses:u}=xa(e),{locationStyles:c}=Pl(e),{positionClasses:d}=jl(e),{roundedClasses:v}=Na(e)
return lt((()=>t.createVNode(e.tag,{class:["v-sheet",o.value,n.value,i.value,u.value,d.value,v.value,e.class],style:[r.value,s.value,c.value,e.style]},l))),{}}}),Fr=He({name:"VColorPickerCanvas",props:{color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...Pe()},emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:l}=a
const o=t.ref(!1),n=t.ref(!1),i=t.ref({x:0,y:0}),s=t.computed((()=>{const{x:t,y:a}=i.value,l=parseInt(e.dotSize,10)/2
return{width:g(e.dotSize),height:g(e.dotSize),transform:`translate(${g(t-l)}, ${g(a-l)})`}})),u=t.ref(),c=t.ref(parseFloat(e.width)),d=t.ref(parseFloat(e.height)),{resizeRef:v}=r((e=>{if(!v.value?.offsetParent)return
const{width:t,height:a}=e[0].contentRect
c.value=t,d.value=a}))
function p(e,t,a){const{left:l,top:o,width:n,height:r}=a
i.value={x:C(e-l,0,n),y:C(t-o,0,r)}}function f(t){!e.disabled&&u.value&&p(t.clientX,t.clientY,u.value.getBoundingClientRect())}function m(t){t.preventDefault(),e.disabled||(o.value=!0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",y),window.addEventListener("touchmove",h),window.addEventListener("touchend",y))}function h(t){if(e.disabled||!u.value)return
o.value=!0
const a=function(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}(t)
p(a.clientX,a.clientY,u.value.getBoundingClientRect())}function y(){window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",y),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",y)}function b(){if(!u.value)return
const t=u.value,a=t.getContext("2d")
if(!a)return
const l=a.createLinearGradient(0,0,t.width,0)
l.addColorStop(0,"hsla(0, 0%, 100%, 1)"),l.addColorStop(1,`hsla(${e.color?.h??0}, 100%, 50%, 1)`),a.fillStyle=l,a.fillRect(0,0,t.width,t.height)
const o=a.createLinearGradient(0,0,0,t.height)
o.addColorStop(0,"hsla(0, 0%, 100%, 0)"),o.addColorStop(1,"hsla(0, 0%, 0%, 1)"),a.fillStyle=o,a.fillRect(0,0,t.width,t.height)}return t.watch(i,(()=>{if(n.value)return void(n.value=!1)
if(!u.value)return
const{x:t,y:a}=i.value
l("update:color",{h:e.color?.h??0,s:C(t,0,c.value)/c.value,v:1-C(a,0,d.value)/d.value,a:e.color?.a??1})})),t.watch((()=>e.color?.h),b,{immediate:!0}),t.watch((()=>[c.value,d.value]),((e,t)=>{b(),i.value={x:i.value.x*e[0]/t[0],y:i.value.y*e[1]/t[1]}}),{flush:"post"}),t.watch((()=>e.color),(()=>{o.value?o.value=!1:(n.value=!0,i.value=e.color?{x:e.color.s*c.value,y:(1-e.color.v)*d.value}:{x:0,y:0})}),{deep:!0,immediate:!0}),t.onMounted((()=>b())),lt((()=>t.createVNode("div",{ref:v,class:["v-color-picker-canvas",e.class],style:e.style,onClick:f,onMousedown:m,onTouchstart:m},[t.createVNode("canvas",{ref:u,width:c.value,height:d.value},null),e.color&&t.createVNode("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:s.value},null)]))),{}}})
function Or(e,t){return t.every((t=>e.hasOwnProperty(t)))}function zr(e){if(!e)return null
let t=null
if("string"==typeof e){t=_e(Be(e))}return"object"==typeof e&&(Or(e,["r","g","b"])?t=Ve(e):Or(e,["h","s","l"])?t=we(e):Or(e,["h","s","v"])&&(t=e)),t}const jr={h:0,s:0,v:1,a:1},Hr={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:be,from:Ve},Ur={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(100*e.s)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(100*e.l)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:Se,from:we},Wr={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:Ie,from:_e},Yr={rgb:{...Hr,inputs:Hr.inputs?.slice(0,3)},rgba:Hr,hsl:{...Ur,inputs:Ur.inputs.slice(0,3)},hsla:Ur,hex:{...Wr,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},hexa:Wr},Gr=e=>{let{label:a,...l}=e
return t.createVNode("div",{class:"v-color-picker-edit__input"},[t.createVNode("input",l,null),t.createVNode("span",null,[a])])},Xr=He({name:"VColorPickerEdit",props:{color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(Yr).includes(e)},modes:{type:Array,default:()=>Object.keys(Yr),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(Yr).includes(e)))},...Pe()},emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>e.modes.map((e=>({...Yr[e],name:e}))))),n=t.computed((()=>{const t=o.value.find((t=>t.name===e.mode))
if(!t)return[]
const a=e.color?t.to(e.color):null
return t.inputs?.map((o=>{let{getValue:n,getColor:r,...i}=o
return{...t.inputProps,...i,disabled:e.disabled,value:a&&n(a),onChange:e=>{const o=e.target
o&&l("update:color",t.from(r(a??jr,o.value)))}}}))}))
return lt((()=>t.createVNode("div",{class:["v-color-picker-edit",e.class],style:e.style},[n.value?.map((e=>t.createVNode(Gr,e,null))),o.value.length>1&&t.createVNode(Xl,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const t=o.value.findIndex((t=>t.name===e.mode))
l("update:mode",o.value[(t+1)%o.value.length].name)}},null)]))),{}}}),qr=Symbol.for("vuetify:v-slider")
function Kr(e,t,a){const l="vertical"===a,o=t.getBoundingClientRect(),n="touches"in e?e.touches[0]:e
return l?n.clientY-(o.top+o.height/2):n.clientX-(o.left+o.width/2)}const Zr=Te({disabled:Boolean,error:Boolean,readonly:Boolean,max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>"boolean"==typeof e||"always"===e},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>"boolean"==typeof e||"always"===e},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...Ca(),...ka({elevation:2})},"slider"),Jr=e=>{const a=t.computed((()=>parseFloat(e.min))),l=t.computed((()=>parseFloat(e.max))),o=t.computed((()=>+e.step>0?parseFloat(e.step):0)),n=t.computed((()=>Math.max(N(o.value),N(a.value))))
return{min:a,max:l,step:o,decimals:n,roundValue:function(e){if(o.value<=0)return e
const t=C(e,a.value,l.value),r=a.value%o.value,i=Math.round((t-r)/o.value)*o.value+r
return parseFloat(Math.min(i,l.value).toFixed(n.value))}}},Qr=e=>{let{props:a,steps:l,onSliderStart:o,onSliderMove:n,onSliderEnd:r,getActiveThumb:i}=e
const{isRtl:s}=Ot(),u=t.toRef(a,"reverse"),c=t.computed((()=>{let e=s.value?"rtl":"ltr"
return a.reverse&&(e="rtl"===e?"ltr":"rtl"),e})),{min:d,max:v,step:p,decimals:f,roundValue:g}=l,h=t.computed((()=>parseInt(a.thumbSize,10))),y=t.computed((()=>parseInt(a.tickSize,10))),b=t.computed((()=>parseInt(a.trackSize,10))),V=t.computed((()=>(v.value-d.value)/p.value)),S=t.toRef(a,"disabled"),w=t.computed((()=>"vertical"===a.direction)),k=t.computed((()=>a.error||a.disabled?void 0:a.thumbColor??a.color)),x=t.computed((()=>a.error||a.disabled?void 0:a.trackColor??a.color)),N=t.computed((()=>a.error||a.disabled?void 0:a.trackFillColor??a.color)),_=t.ref(!1),I=t.ref(0),B=t.ref(),A=t.ref()
function $(e){const t="vertical"===a.direction,l=t?"top":"left",o=t?"height":"width",n=t?"clientY":"clientX",{[l]:r,[o]:i}=B.value?.$el.getBoundingClientRect(),s=function(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}(e,n)
let u=Math.min(Math.max((s-r-I.value)/i,0),1)||0
return(t||"rtl"===c.value)&&(u=1-u),g(d.value+u*(v.value-d.value))}const E=e=>{r({value:$(e)}),_.value=!1,I.value=0},R=e=>{A.value=i(e),A.value&&(A.value.focus(),_.value=!0,A.value.contains(e.target)?I.value=Kr(e,A.value,a.direction):(I.value=0,n({value:$(e)})),o({value:$(e)}))},T={passive:!0,capture:!0}
function P(e){n({value:$(e)})}function L(e){e.stopPropagation(),e.preventDefault(),E(e),window.removeEventListener("mousemove",P,T),window.removeEventListener("mouseup",L)}function M(e){E(e),window.removeEventListener("touchmove",P,T),e.target?.removeEventListener("touchend",M)}const D=e=>{const t=(e-d.value)/(v.value-d.value)*100
return C(isNaN(t)?0:t,0,100)},F=t.toRef(a,"showTicks"),O=t.computed((()=>F.value?a.ticks?Array.isArray(a.ticks)?a.ticks.map((e=>({value:e,position:D(e),label:e.toString()}))):Object.keys(a.ticks).map((e=>({value:parseFloat(e),position:D(parseFloat(e)),label:a.ticks[e]}))):V.value!==1/0?m(V.value+1).map((e=>{const t=d.value+e*p.value
return{value:t,position:D(t)}})):[]:[])),z=t.computed((()=>O.value.some((e=>{let{label:t}=e
return!!t})))),j={activeThumbRef:A,color:t.toRef(a,"color"),decimals:f,disabled:S,direction:t.toRef(a,"direction"),elevation:t.toRef(a,"elevation"),hasLabels:z,horizontalDirection:c,isReversed:u,min:d,max:v,mousePressed:_,numTicks:V,onSliderMousedown:function(e){e.preventDefault(),R(e),window.addEventListener("mousemove",P,T),window.addEventListener("mouseup",L,{passive:!1})},onSliderTouchstart:function(e){R(e),window.addEventListener("touchmove",P,T),e.target?.addEventListener("touchend",M,{passive:!1})},parsedTicks:O,parseMouseMove:$,position:D,readonly:t.toRef(a,"readonly"),rounded:t.toRef(a,"rounded"),roundValue:g,showTicks:F,startOffset:I,step:p,thumbSize:h,thumbColor:k,thumbLabel:t.toRef(a,"thumbLabel"),ticks:t.toRef(a,"ticks"),tickSize:y,trackColor:x,trackContainerRef:B,trackFillColor:N,trackSize:b,vertical:w}
return t.provide(qr,j),j},ei=Ue()({name:"VSliderThumb",directives:{Ripple:El},props:{focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:Boolean,default:!0},...Pe()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.inject(qr)
if(!n)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider")
const{thumbColor:r,step:i,vertical:s,disabled:u,thumbSize:c,thumbLabel:d,direction:v,readonly:p,elevation:f,isReversed:m,horizontalDirection:h,mousePressed:y,decimals:V}=n,{textColorClasses:S,textColorStyles:w}=Ia(r),{pageup:k,pagedown:x,end:C,home:N,left:_,right:I,down:B,up:A}=b,$=[k,x,C,N,_,I,B,A],E=t.computed((()=>i.value?[1,2,3]:[1,5,10]))
function R(t){const a=function(t,a){if(!$.includes(t.key))return
t.preventDefault()
const l=i.value||.1,o=(e.max-e.min)/l
if([_,I,B,A].includes(t.key)){const e=("rtl"===h.value?[_,A]:[I,A]).includes(t.key)?1:-1,o=t.shiftKey?2:t.ctrlKey?1:0
a+=e*l*E.value[o]}else t.key===N?a=e.min:t.key===C?a=e.max:a-=(t.key===x?1:-1)*l*(o>100?o/10:10)
return Math.max(e.min,Math.min(e.max,a))}(t,e.modelValue)
null!=a&&o("update:modelValue",a)}return lt((()=>{const a=g(s.value||m.value?100-e.position:e.position,"%"),{elevationClasses:o}=xa(t.computed((()=>u.value?void 0:f.value)))
return t.createVNode("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&y.value},e.class],style:[{"--v-slider-thumb-position":a,"--v-slider-thumb-size":g(c.value)},e.style],role:"slider",tabindex:u.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":p.value,"aria-orientation":v.value,onKeydown:p.value?void 0:R},[t.createVNode("div",{class:["v-slider-thumb__surface",S.value,o.value],style:{...w.value}},null),t.withDirectives(t.createVNode("div",{class:["v-slider-thumb__ripple",S.value],style:w.value},null),[[t.resolveDirective("ripple"),e.ripple,null,{circle:!0,center:!0}]]),t.createVNode(Qt,{origin:"bottom center"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-slider-thumb__label-container"},[t.createVNode("div",{class:["v-slider-thumb__label"]},[t.createVNode("div",null,[l["thumb-label"]?.({modelValue:e.modelValue})??e.modelValue.toFixed(i.value?V.value:1)])])]),[[t.vShow,d.value&&e.focused||"always"===d.value]])]})])})),{}}}),ti=Ue()({name:"VSliderTrack",props:{start:{type:Number,required:!0},stop:{type:Number,required:!0},...Pe()},emits:{},setup(e,a){let{slots:l}=a
const o=t.inject(qr)
if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider")
const{color:n,horizontalDirection:r,parsedTicks:i,rounded:s,showTicks:u,tickSize:c,trackColor:d,trackFillColor:v,trackSize:p,vertical:f,min:m,max:h}=o,{roundedClasses:y}=Na(s),{backgroundColorClasses:b,backgroundColorStyles:V}=Ba(v),{backgroundColorClasses:S,backgroundColorStyles:w}=Ba(d),k=t.computed((()=>"inset-"+(f.value?"block-end":"inline-start"))),x=t.computed((()=>f.value?"height":"width")),C=t.computed((()=>({[k.value]:"0%",[x.value]:"100%"}))),N=t.computed((()=>e.stop-e.start)),_=t.computed((()=>({[k.value]:g(e.start,"%"),[x.value]:g(N.value,"%")}))),I=t.computed((()=>{if(!u.value)return[]
return(f.value?i.value.slice().reverse():i.value).map(((a,o)=>{const n=f.value?"bottom":"margin-inline-start",r=a.value!==m.value&&a.value!==h.value?g(a.position,"%"):void 0
return t.createVNode("div",{key:a.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":a.position>=e.start&&a.position<=e.stop,"v-slider-track__tick--first":a.value===m.value,"v-slider-track__tick--last":a.value===h.value}],style:{[n]:r}},[(a.label||l["tick-label"])&&t.createVNode("div",{class:"v-slider-track__tick-label"},[l["tick-label"]?.({tick:a,index:o})??a.label])])}))}))
return lt((()=>t.createVNode("div",{class:["v-slider-track",y.value,e.class],style:[{"--v-slider-track-size":g(p.value),"--v-slider-tick-size":g(c.value),direction:f.value?void 0:r.value},e.style]},[t.createVNode("div",{class:["v-slider-track__background",S.value,{"v-slider-track__background--opacity":!!n.value||!v.value}],style:{...C.value,...w.value}},null),t.createVNode("div",{class:["v-slider-track__fill",b.value],style:{..._.value,...V.value}},null),u.value&&t.createVNode("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":"always"===u.value}]},[I.value])]))),{}}}),ai=Ue()({name:"VSlider",props:{...oo(),...Zr(),...ho(),modelValue:{type:[Number,String],default:0}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=Jr(e),i=_t(e,"modelValue",void 0,(e=>{const t="string"==typeof e?parseFloat(e):null==e?r.min.value:e
return r.roundValue(t)})),{min:s,max:u,mousePressed:c,roundValue:d,onSliderMousedown:v,onSliderTouchstart:p,trackContainerRef:f,position:m,hasLabels:g,readonly:h}=Qr({props:e,steps:r,onSliderStart:()=>{o("start",i.value)},onSliderEnd:e=>{let{value:t}=e
const a=d(t)
i.value=a,o("end",a)},onSliderMove:e=>{let{value:t}=e
return i.value=d(t)},getActiveThumb:()=>n.value?.$el}),{isFocused:y,focus:b,blur:V}=no(e),S=t.computed((()=>m(i.value)))
return lt((()=>{const[a,o]=yo.filterProps(e),r=!!(e.label||l.label||l.prepend)
return t.createVNode(yo,t.mergeProps({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||g.value,"v-slider--focused":y.value,"v-slider--pressed":c.value,"v-slider--disabled":e.disabled},e.class],style:e.style},a,{focused:y.value}),{...l,prepend:r?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??e.label?t.createVNode(ao,{id:a.id.value,class:"v-slider__label",text:e.label},null):void 0,l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:r}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:h.value?void 0:v,onTouchstartPassive:h.value?void 0:p},[t.createVNode("input",{id:o.value,name:e.name||o.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:i.value},null),t.createVNode(ti,{ref:f,start:0,stop:S.value},{"tick-label":l["tick-label"]}),t.createVNode(ei,{ref:n,"aria-describedby":r.value,focused:y.value,min:s.value,max:u.value,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,position:S.value,elevation:e.elevation,onFocus:b,onBlur:V},{"thumb-label":l["thumb-label"]})])}})})),{}}}),li=He({name:"VColorPickerPreview",props:{color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...Pe()},emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
return lt((()=>t.createVNode("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[t.createVNode("div",{class:"v-color-picker-preview__dot"},[t.createVNode("div",{style:{background:ke(e.color??jr)}},null)]),t.createVNode("div",{class:"v-color-picker-preview__sliders"},[t.createVNode(ai,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:e.color?.h,"onUpdate:modelValue":t=>l("update:color",{...e.color??jr,h:t}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&t.createVNode(ai,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:e.color?.a??1,"onUpdate:modelValue":t=>l("update:color",{...e.color??jr,a:t}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])]))),{}}}),oi=Object.freeze({base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"}),ni=Object.freeze({base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"}),ri=Object.freeze({base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"}),ii=Object.freeze({base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"}),si=Object.freeze({base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"}),ui=Object.freeze({base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"}),ci=Object.freeze({base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"}),di=Object.freeze({base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"}),vi=Object.freeze({base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"}),pi=Object.freeze({base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"}),fi=Object.freeze({base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"}),mi=Object.freeze({base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"}),gi=Object.freeze({base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"}),hi=Object.freeze({base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"}),yi=Object.freeze({base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"}),bi=Object.freeze({base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"}),Vi=Object.freeze({base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"}),Si=Object.freeze({base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"}),wi=Object.freeze({base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"}),ki=Object.freeze({black:"#000000",white:"#ffffff",transparent:"#ffffff00"})
var xi=Object.freeze({red:oi,pink:ni,purple:ri,deepPurple:ii,indigo:si,blue:ui,lightBlue:ci,cyan:di,teal:vi,green:pi,lightGreen:fi,lime:mi,yellow:gi,amber:hi,orange:yi,deepOrange:bi,brown:Vi,blueGrey:Si,grey:wi,shades:ki})
const Ci=He({name:"VColorPickerSwatches",props:{swatches:{type:Array,default:()=>function(e){return Object.keys(e).map((t=>{const a=e[t]
return a.base?[a.base,a.darken4,a.darken3,a.darken2,a.darken1,a.lighten1,a.lighten2,a.lighten3,a.lighten4,a.lighten5]:[a.black,a.white,a.transparent]}))}(xi)},disabled:Boolean,color:Object,maxHeight:[Number,String],...Pe()},emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
return lt((()=>t.createVNode("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:g(e.maxHeight)},e.style]},[t.createVNode("div",null,[e.swatches.map((a=>t.createVNode("div",{class:"v-color-picker-swatches__swatch"},[a.map((a=>{const o=zr(a)
return t.createVNode("div",{class:"v-color-picker-swatches__color",onClick:()=>o&&l("update:color",o)},[t.createVNode("div",{style:{background:a}},[e.color&&v(e.color,o)?t.createVNode(pl,{size:"x-small",icon:"$success",color:Re(a,"#FFFFFF")>2?"white":"black"},null):void 0])])}))])))])]))),{}}}),Ni=He({name:"VColorPicker",props:{canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(Yr).includes(e)},modes:{type:Array,default:()=>Object.keys(Yr),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(Yr).includes(e)))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...w(Mr({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=_t(e,"mode"),l=t.ref(null),o=_t(e,"modelValue",void 0,(e=>{let t=zr(e)
return t?(l.value&&(t={...t,h:l.value.h},l.value=null),t):null}),(t=>t?function(e,t){if(null==t||"string"==typeof t){const t=Ie(e)
return 1===e.a?t.slice(0,7):t}if("object"==typeof t){let a
return Or(t,["r","g","b"])?a=be(e):Or(t,["h","s","l"])?a=Se(e):Or(t,["h","s","v"])&&(a=e),function(e,t){if(t){const{a:t,...a}=e
return a}return e}(a,!Or(t,["a"])&&1===e.a)}return e}(t,e.modelValue):null)),n=e=>{o.value=e,l.value=e}
return t.onMounted((()=>{e.modes.includes(a.value)||(a.value=e.modes[0])})),Oe({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),lt((()=>{const[l]=Dr.filterProps(e)
return t.createVNode(Dr,t.mergeProps({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",e.class],style:[{"--v-color-picker-color-hsv":ke({...o.value??jr,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&t.createVNode(Fr,{key:"canvas",color:o.value,"onUpdate:color":n,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&t.createVNode("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&t.createVNode(li,{key:"preview",color:o.value,"onUpdate:color":n,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&t.createVNode(Xr,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":e=>a.value=e,color:o.value,"onUpdate:color":n,disabled:e.disabled},null)]),e.showSwatches&&t.createVNode(Ci,{key:"swatches",color:o.value,"onUpdate:color":n,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})})),{}}})
const _i=Ue()({name:"VCombobox",props:{delimiters:Array,...sr({filterKeys:["title"]}),...nr({hideNoData:!0,returnObject:!0}),...w(xo({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ma({transition:!1})},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const{t:n}=Dt(),r=t.ref(),i=t.ref(!1),s=t.ref(!0),u=t.ref(),c=_t(e,"menu"),d=t.computed({get:()=>c.value,set:e=>{c.value&&!e&&u.value?.ΨopenChildren||(c.value=e)}}),v=t.ref(-1)
let p=!1
const f=t.computed((()=>r.value?.color)),{items:m,transformIn:g,transformOut:h}=dn(e),{textColorClasses:y,textColorStyles:b}=Ia(f),V=_t(e,"modelValue",[],(e=>g(x(e))),(t=>{const a=h(t)
return e.multiple?a:a[0]??null})),S=fo(),w=t.ref(e.multiple?"":V.value[0]?.title??""),k=t.computed({get:()=>w.value,set:t=>{if(w.value=t,e.multiple||(V.value=[un(e,t)]),t&&e.multiple&&e.delimiters?.length){const a=t.split(new RegExp(`(?:${e.delimiters.join("|")})+`))
a.length>1&&(a.forEach((t=>{(t=t.trim())&&L(un(e,t))})),w.value="")}t||(v.value=-1),s.value=!t}})
t.watch(w,(e=>{p?t.nextTick((()=>p=!1)):i.value&&!d.value&&(d.value=!0),l("update:search",e)})),t.watch(V,(t=>{e.multiple||(w.value=t[0]?.title??"")}))
const{filteredItems:C,getMatches:N}=ur(e,m,t.computed((()=>s.value?void 0:k.value))),_=t.computed((()=>V.value.map((t=>m.value.find((a=>e.valueComparator(a.value,t.value)))||t)))),I=t.computed((()=>e.hideSelected?C.value.filter((e=>!_.value.some((t=>t.value===e.value)))):C.value)),B=t.computed((()=>_.value.map((e=>e.props.value)))),A=t.computed((()=>_.value[v.value])),$=t.ref()
function E(t){p=!0,e.openOnClear&&(d.value=!0)}function R(){e.hideNoData&&!m.value.length||e.readonly||S?.isReadonly.value||(d.value=!0)}function T(t){if(e.readonly||S?.isReadonly.value)return
const a=r.value.selectionStart,l=B.value.length
if((v.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(d.value=!0),["Escape"].includes(t.key)&&(d.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(s.value=!0),"ArrowDown"===t.key?$.value?.focus("next"):"ArrowUp"===t.key&&$.value?.focus("prev"),e.multiple){if(["Backspace","Delete"].includes(t.key)){if(v.value<0)return void("Backspace"!==t.key||k.value||(v.value=l-1))
const e=v.value
A.value&&L(A.value),v.value=e>=l-1?l-2:e}if("ArrowLeft"===t.key){if(v.value<0&&a>0)return
const e=v.value>-1?v.value-1:l-1
_.value[e]?v.value=e:(v.value=-1,r.value.setSelectionRange(k.value.length,k.value.length))}if("ArrowRight"===t.key){if(v.value<0)return
const e=v.value+1
_.value[e]?v.value=e:(v.value=-1,r.value.setSelectionRange(0,0))}"Enter"===t.key&&k.value&&(L(un(e,k.value)),k.value="")}}function P(){i.value&&(s.value=!0)}function L(a){if(e.multiple){const t=B.value.findIndex((t=>e.valueComparator(t,a.value)))
if(-1===t)V.value=[...V.value,a]
else{const e=[...V.value]
e.splice(t,1),V.value=e}k.value=""}else V.value=[a],w.value=a.title,t.nextTick((()=>{d.value=!1,s.value=!0}))}function M(e){i.value=!0}function D(e){null==e.relatedTarget&&r.value?.focus()}return t.watch(C,(t=>{!t.length&&e.hideNoData&&(d.value=!1)})),t.watch(i,(t=>{if(t)v.value=-1
else{if(d.value=!1,!e.multiple||!k.value)return
V.value=[...V.value,un(e,k.value)],k.value=""}})),lt((()=>{const a=!(!e.chips&&!o.chip),l=!!(!e.hideNoData||I.value.length||o.prepend||o.append||o["no-data"]),c=V.value.length>0,[p]=Co.filterProps(e)
return t.createVNode(Co,t.mergeProps({ref:r},p,{modelValue:k.value,"onUpdate:modelValue":[e=>k.value=e,e=>{null==e&&(V.value=[])}],focused:i.value,"onUpdate:focused":e=>i.value=e,validationValue:V.externalValue,dirty:c,class:["v-combobox",{"v-combobox--active-menu":d.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":v.value>-1,["v-combobox--"+(e.multiple?"multiple":"single")]:!0},e.class],style:e.style,appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,placeholder:c?void 0:e.placeholder,"onClick:clear":E,"onMousedown:control":R,onKeydown:T}),{...o,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(or,t.mergeProps({ref:u,modelValue:d.value,"onUpdate:modelValue":e=>d.value=e,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:P},e.menuProps),{default:()=>[l&&t.createVNode(fn,{ref:$,selected:B.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onFocusin:M,onFocusout:D},{default:()=>[!I.value.length&&!e.hideNoData&&(o["no-data"]?.()??t.createVNode(on,{title:n(e.noDataText)},null)),o["prepend-item"]?.(),I.value.map((a=>o.item?.({item:a,props:t.mergeProps(a.props,{onClick:()=>L(a)})})??t.createVNode(on,t.mergeProps({key:a.value},a.props,{onClick:()=>L(a)}),{prepend:a=>{let{isSelected:l}=a
return e.multiple&&!e.hideSelected?t.createVNode(Eo,{modelValue:l,ripple:!1,tabindex:"-1"},null):void 0},title:()=>s.value?a.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-combobox__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(a+l)])]):e}(a.title,N(a)?.title,k.value?.length??0)}))),o["append-item"]?.()]})]}),_.value.map(((l,n)=>{const r={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),L(l)},modelValue:!0,"onUpdate:modelValue":void 0}
return t.createVNode("div",{key:l.value,class:["v-combobox__selection",n===v.value&&["v-combobox__selection--selected",y.value]],style:n===v.value?b.value:{}},[a?o.chip?t.createVNode(jt,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:l.title}}},{default:()=>[o.chip?.({item:l,index:n,props:r})]}):t.createVNode(Do,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:l.title},r),null):o.selection?.({item:l,index:n})??t.createVNode("span",{class:"v-combobox__selection-text"},[l.title,e.multiple&&n<_.value.length-1&&t.createVNode("span",{class:"v-combobox__selection-comma"},[t.createTextVNode(",")])])])}))])})})),wo({isFocused:i,isPristine:s,menu:d,search:k,selectionIndex:v,filteredItems:C,select:L},r)}}),Ii=Ue()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...ar({origin:"center center",scrollStrategy:"block",transition:{component:Yt},zIndex:2400})},emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l
const n=_t(e,"modelValue"),{scopeId:r}=Gn(),i=t.ref()
function s(e){const t=e.relatedTarget,a=e.target
if(t!==a&&i.value?.contentEl&&i.value?.globalTop&&![document,i.value.contentEl].includes(a)&&!i.value.contentEl.contains(a)){const e=z(i.value.contentEl)
if(!e.length)return
const a=e[0],l=e[e.length-1]
t===a?l.focus():a.focus()}}a&&t.watch((()=>n.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)}),{immediate:!0}),t.watch(n,(async e=>{await t.nextTick(),e?i.value.contentEl?.focus({preventScroll:!0}):i.value.activatorEl?.focus({preventScroll:!0})}))
const u=t.computed((()=>t.mergeProps({"aria-haspopup":"dialog","aria-expanded":String(n.value)},e.activatorProps)))
return lt((()=>{const[a]=lr.filterProps(e)
return t.createVNode(lr,t.mergeProps({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:u.value,role:"dialog"},r),{activator:o.activator,default:function(){for(var e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l]
return t.createVNode(jt,{root:!0},{default:()=>[o.default?.(...a)]})}})})),wo({},i)}}),Bi=Symbol.for("vuetify:v-expansion-panel"),Ai=["default","accordion","inset","popout"],$i=Ue()({name:"VExpansionPanels",props:{color:String,variant:{type:String,default:"default",validator:e=>Ai.includes(e)},readonly:Boolean,...Pe(),...Wa(),...ya(),...Vt()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
Xa(e,Bi)
const{themeClasses:o}=kt(e),n=t.computed((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`))
return Oe({VExpansionPanel:{color:t.toRef(e,"color")},VExpansionPanelTitle:{readonly:t.toRef(e,"readonly")}}),lt((()=>t.createVNode(e.tag,{class:["v-expansion-panels",o.value,n.value,e.class],style:e.style},l))),{}}}),Ei=Te({color:String,expandIcon:{type:el,default:"$expand"},collapseIcon:{type:el,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean},"v-expansion-panel-title"),Ri=Ue()({name:"VExpansionPanelTitle",directives:{Ripple:El},props:{...Pe(),...Ei()},setup(e,a){let{slots:l}=a
const o=t.inject(Bi)
if(!o)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel")
const{backgroundColorClasses:n,backgroundColorStyles:r}=Ba(e,"color"),i=t.computed((()=>({collapseIcon:e.collapseIcon,disabled:o.disabled.value,expanded:o.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})))
return lt((()=>t.withDirectives(t.createVNode("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":o.isSelected.value},n.value,e.class],style:[r.value,e.style],type:"button",tabindex:o.disabled.value?-1:void 0,disabled:o.disabled.value,"aria-expanded":o.isSelected.value,onClick:e.readonly?void 0:o.toggle},[t.createVNode("span",{class:"v-expansion-panel-title__overlay"},null),l.default?.(i.value),!e.hideActions&&t.createVNode("span",{class:"v-expansion-panel-title__icon"},[l.actions?l.actions(i.value):t.createVNode(pl,{icon:o.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[t.resolveDirective("ripple"),e.ripple]]))),{}}}),Ti=Ue()({name:"VExpansionPanelText",props:{...Pe(),...kn()},setup(e,a){let{slots:l}=a
const o=t.inject(Bi)
if(!o)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel")
const{hasContent:n,onAfterLeave:r}=xn(e,o.isSelected)
return lt((()=>t.createVNode(sa,{onAfterLeave:r},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&n.value&&t.createVNode("div",{class:"v-expansion-panel-text__wrapper"},[l.default?.()])]),[[t.vShow,o.isSelected.value]])]}))),{}}}),Pi=Ue()({name:"VExpansionPanel",props:{title:String,text:String,bgColor:String,...Pe(),...ka(),...Ya(),...kn(),...Ca(),...ya(),...Ei()},emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=Ga(e,Bi),{backgroundColorClasses:n,backgroundColorStyles:r}=Ba(e,"bgColor"),{elevationClasses:i}=xa(e),{roundedClasses:s}=Na(e),u=t.computed((()=>o?.disabled.value||e.disabled)),c=t.computed((()=>o.group.items.value.reduce(((e,t,a)=>(o.group.selected.value.includes(t.id)&&e.push(a),e)),[]))),d=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==1))})),v=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==-1))}))
return t.provide(Bi,o),lt((()=>{const a=!(!l.text&&!e.text),c=!(!l.title&&!e.title)
return t.createVNode(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":o.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":u.value},s.value,n.value,e.class],style:[r.value,e.style],"aria-expanded":o.isSelected.value},{default:()=>[t.createVNode("div",{class:["v-expansion-panel__shadow",...i.value]},null),c&&t.createVNode(Ri,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[l.title?l.title():e.title]}),a&&t.createVNode(Ti,{key:"text",eager:e.eager},{default:()=>[l.text?l.text():e.text]}),l.default?.()]})})),{}}}),Li=Ue()({name:"VFileInput",inheritAttrs:!1,props:{chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"==typeof e||[1e3,1024].includes(e)},...ho({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>x(e).every((e=>null!=e&&"object"==typeof e))},...io({clearable:!0})},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=Dt(),i=_t(e,"modelValue"),{isFocused:s,focus:u,blur:c}=no(e),d=t.computed((()=>"boolean"!=typeof e.showSize?e.showSize:void 0)),v=t.computed((()=>(i.value??[]).reduce(((e,t)=>{let{size:a=0}=t
return e+a}),0))),p=t.computed((()=>I(v.value,d.value))),f=t.computed((()=>(i.value??[]).map((t=>{const{name:a="",size:l=0}=t
return e.showSize?`${a} (${I(l,d.value)})`:a})))),m=t.computed((()=>{const t=i.value?.length??0
return e.showSize?r(e.counterSizeString,t,p.value):r(e.counterString,t)})),g=t.ref(),h=t.ref(),y=t.ref()
function b(){y.value!==document.activeElement&&y.value?.focus(),s.value||u()}function V(e){w(e)}function S(e){o("mousedown:control",e)}function w(e){y.value?.click(),o("click:control",e)}function x(a){a.stopPropagation(),b(),t.nextTick((()=>{i.value=[],O(e["onClick:clear"],a)}))}return t.watch(i,(e=>{(!Array.isArray(e)||!e.length)&&y.value&&(y.value.value="")})),lt((()=>{const a=!(!n.counter&&!e.counter),o=!(!a&&!n.details),[r,u]=k(l),[{modelValue:d,...C}]=yo.filterProps(e),[N]=uo(e)
return t.createVNode(yo,t.mergeProps({ref:g,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-file-input",e.class],style:e.style,"onClick:prepend":V},r,C,{focused:s.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:r,isReadonly:d,isValid:m}=a
return t.createVNode(so,t.mergeProps({ref:h,"prepend-icon":e.prependIcon,onMousedown:S,onClick:w,"onClick:clear":x,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},N,{id:l.value,active:r.value||s.value,dirty:r.value,disabled:o.value,focused:s.value,error:!1===m.value}),{...n,default:a=>{let{props:{class:l,...r}}=a
return t.createVNode(t.Fragment,null,[t.createVNode("input",t.mergeProps({ref:y,type:"file",readonly:d.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),b()},onChange:e=>{if(!e.target)return
const t=e.target
i.value=[...t.files??[]]},onFocus:b,onBlur:c},r,u),null),t.createVNode("div",{class:l},[!!i.value?.length&&(n.selection?n.selection({fileNames:f.value,totalBytes:v.value,totalBytesReadable:p.value}):e.chips?f.value.map((a=>t.createVNode(Do,{key:a,size:"small",color:e.color},{default:()=>[a]}))):f.value.join(", "))])])}})},details:o?e=>t.createVNode(t.Fragment,null,[n.details?.(e),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(bo,{active:!!i.value?.length,value:m.value},n.counter)])]):void 0})})),wo({},g,h,y)}}),Mi=Ue()({name:"VFooter",props:{app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...Sa(),...Pe(),...ka(),...it(),...Ca(),...ya({tag:"footer"}),...Vt()},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{backgroundColorClasses:n,backgroundColorStyles:i}=Ba(t.toRef(e,"color")),{borderClasses:s}=wa(e),{elevationClasses:u}=xa(e),{roundedClasses:c}=Na(e),d=t.ref(32),{resizeRef:v}=r((e=>{e.length&&(d.value=e[0].target.clientHeight)})),p=t.computed((()=>"auto"===e.height?d.value:parseInt(e.height,10))),{layoutItemStyles:f}=ut({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:p,elementSize:t.computed((()=>"auto"===e.height?void 0:p.value)),active:t.computed((()=>e.app)),absolute:t.toRef(e,"absolute")})
return lt((()=>t.createVNode(e.tag,{ref:v,class:["v-footer",o.value,n.value,s.value,u.value,c.value,e.class],style:[i.value,e.app?f.value:void 0,e.style]},l))),{}}}),Di=Ue()({name:"VForm",props:{...Pe(),...po()},emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=function(e){const a=_t(e,"modelValue"),l=t.computed((()=>e.disabled)),o=t.computed((()=>e.readonly)),n=t.ref(!1),r=t.ref([]),i=t.ref([])
return t.watch(r,(()=>{let e=0,t=0
const l=[]
for(const a of r.value)!1===a.isValid?(t++,l.push({id:a.id,errorMessages:a.errorMessages})):!0===a.isValid&&e++
i.value=l,a.value=!(t>0)&&(e===r.value.length||null)}),{deep:!0}),t.provide(vo,{register:e=>{let{id:t,validate:a,reset:l,resetValidation:o}=e
r.value.some((e=>e.id===t))&&ae(`Duplicate input name "${t}"`),r.value.push({id:t,validate:a,reset:l,resetValidation:o,isValid:null,errorMessages:[]})},unregister:e=>{r.value=r.value.filter((t=>t.id!==e))},update:(e,t,a)=>{const l=r.value.find((t=>t.id===e))
l&&(l.isValid=t,l.errorMessages=a)},isDisabled:l,isReadonly:o,isValidating:n,items:r,validateOn:t.toRef(e,"validateOn")}),{errors:i,isDisabled:l,isReadonly:o,isValidating:n,items:r,validate:async function(){const t=[]
let a=!0
i.value=[],n.value=!0
for(const l of r.value){const o=await l.validate()
if(o.length>0&&(a=!1,t.push({id:l.id,errorMessages:o})),!a&&e.fastFail)break}return i.value=t,n.value=!1,{valid:a,errors:i.value}},reset:function(){r.value.forEach((e=>e.reset())),a.value=null},resetValidation:function(){r.value.forEach((e=>e.resetValidation())),i.value=[],a.value=null}}}(e),r=t.ref()
function i(e){e.preventDefault(),n.reset()}function s(e){const t=e,a=n.validate()
t.then=a.then.bind(a),t.catch=a.catch.bind(a),t.finally=a.finally.bind(a),o("submit",t),t.defaultPrevented||a.then((e=>{let{valid:t}=e
t&&r.value?.submit()})),t.preventDefault()}return lt((()=>t.createVNode("form",{ref:r,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:s},[l.default?.(n)]))),wo(n,r)}}),Fi=Ue()({name:"VContainer",props:{fluid:{type:Boolean,default:!1},...Pe(),...ya()},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},e.class],style:e.style},l))),{}}}),Oi=Dn.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),zi=Dn.reduce(((e,a)=>(e["offset"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),ji=Dn.reduce(((e,a)=>(e["order"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),Hi={col:Object.keys(Oi),offset:Object.keys(zi),order:Object.keys(ji)}
function Ui(e,t,a){let l=e
if(null!=a&&!1!==a){if(t){l+=`-${t.replace(e,"")}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==a&&!0!==a?(l+=`-${a}`,l.toLowerCase()):l.toLowerCase()}}const Wi=["auto","start","end","center","baseline","stretch"],Yi=Ue()({name:"VCol",props:{cols:{type:[Boolean,String,Number],default:!1},...Oi,offset:{type:[String,Number],default:null},...zi,order:{type:[String,Number],default:null},...ji,alignSelf:{type:String,default:null,validator:e=>Wi.includes(e)},...Pe(),...ya()},setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in Hi)Hi[a].forEach((l=>{const o=e[l],n=Ui(a,l,o)
n&&t.push(n)}))
const l=t.some((e=>e.startsWith("v-col-")))
return t.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}))
return()=>t.h(e.tag,{class:[o.value,e.class],style:e.style},l.default?.())}}),Gi=["start","end","center"],Xi=["space-between","space-around","space-evenly"]
function qi(e,a){return Dn.reduce(((l,o)=>(l[e+t.capitalize(o)]=a(),l)),{})}const Ki=[...Gi,"baseline","stretch"],Zi=e=>Ki.includes(e),Ji=qi("align",(()=>({type:String,default:null,validator:Zi}))),Qi=[...Gi,...Xi],es=e=>Qi.includes(e),ts=qi("justify",(()=>({type:String,default:null,validator:es}))),as=[...Gi,...Xi,"stretch"],ls=e=>as.includes(e),os=qi("alignContent",(()=>({type:String,default:null,validator:ls}))),ns={align:Object.keys(Ji),justify:Object.keys(ts),alignContent:Object.keys(os)},rs={align:"align",justify:"justify",alignContent:"align-content"}
function is(e,t,a){let l=rs[e]
if(null!=a){if(t){l+=`-${t.replace(e,"")}`}return l+=`-${a}`,l.toLowerCase()}}const ss=Ue()({name:"VRow",props:{dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Zi},...Ji,justify:{type:String,default:null,validator:es},...ts,alignContent:{type:String,default:null,validator:ls},...os,...Pe(),...ya()},setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in ns)ns[a].forEach((l=>{const o=e[l],n=is(a,l,o)
n&&t.push(n)}))
return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}))
return()=>t.h(e.tag,{class:["v-row",o.value,e.class],style:e.style},l.default?.())}}),us=We("flex-grow-1","div","VSpacer"),cs=Ue()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...yn()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=_t(e,"modelValue"),{runOpenDelay:o,runCloseDelay:n}=bn(e,(t=>!e.disabled&&(l.value=t)))
return()=>a.default?.({isHovering:l.value,props:{onMouseenter:o,onMouseleave:n}})}}),ds=Symbol.for("vuetify:v-item-group"),vs=Ue()({name:"VItemGroup",props:{...Pe(),...Wa({selectedClass:"v-item--selected"}),...ya(),...Vt()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=Xa(e,ds)
return()=>t.createVNode(e.tag,{class:["v-item-group",o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]})}}),ps=Ue()({name:"VItem",props:Ya(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const{isSelected:l,select:o,toggle:n,selectedClass:r,value:i,disabled:s}=Ga(e,ds)
return()=>a.default?.({isSelected:l.value,selectedClass:r.value,select:o,toggle:n,value:i.value,disabled:s.value})}}),fs=We("v-kbd"),ms=Ue()({name:"VLayout",props:{...Pe(),...rt()},setup(e,a){let{slots:l}=a
const{layoutClasses:o,layoutStyles:n,getLayoutItem:r,items:i,layoutRef:s}=ct(e)
return lt((()=>t.createVNode("div",{ref:s,class:[o.value,e.class],style:[n.value,e.style]},[l.default?.()]))),{getLayoutItem:r,items:i}}}),gs=Ue()({name:"VLayoutItem",props:{position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...Pe(),...it()},setup(e,a){let{slots:l}=a
const{layoutItemStyles:o}=ut({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"position"),elementSize:t.toRef(e,"size"),layoutSize:t.toRef(e,"size"),active:t.toRef(e,"modelValue"),absolute:t.toRef(e,"absolute")})
return()=>t.createVNode("div",{class:["v-layout-item",e.class],style:[o.value,e.style]},[l.default?.()])}}),hs=Ue()({name:"VLazy",directives:{intersect:fa},props:{modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...Pe(),...ca(),...ya(),...ma({transition:"fade-transition"})},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=da(e),n=_t(e,"modelValue")
function r(e){n.value||(n.value=e)}return lt((()=>t.withDirectives(t.createVNode(e.tag,{class:["v-lazy",e.class],style:[o.value,e.style]},{default:()=>[n.value&&t.createVNode(ga,{transition:e.transition,appear:!0},{default:()=>[l.default?.()]})]}),[[t.resolveDirective("intersect"),{handler:r,options:e.options},null]]))),{}}}),ys=Ue()({name:"VLocaleProvider",props:{locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...Pe()},setup(e,a){let{slots:l}=a
const{rtlClasses:o}=Ft(e)
return lt((()=>t.createVNode("div",{class:["v-locale-provider",o.value,e.class],style:e.style},[l.default?.()]))),{}}}),bs=Ue()({name:"VMain",props:{scrollable:Boolean,...Pe(),...ya({tag:"main"})},setup(e,a){let{slots:l}=a
const{mainStyles:o}=st(),{ssrBootStyles:n}=Ta()
return lt((()=>t.createVNode(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,n.value,e.style]},{default:()=>[e.scrollable?t.createVNode("div",{class:"v-main__scroller"},[l.default?.()]):l.default?.()]}))),{}}})
function Vs(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ss(e){if(e.length<2)return 0
if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t)
let t=0
for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue
const l=Vs(t),o=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t)
t+=(o-l)*Math.abs(o),a===e.length-1&&(t*=.5)}return 1e3*Vs(t)}function ws(){const e={}
return{addMovement:function(t){Array.from(t.changedTouches).forEach((a=>{(e[a.identifier]??(e[a.identifier]=new T(20))).push([t.timeStamp,a])}))},endTouch:function(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))},getVelocity:function(t){const a=e[t]?.values().reverse()
if(!a)throw new Error(`No samples for touch id ${t}`)
const l=a[0],o=[],n=[]
for(const e of a){if(l[0]-e[0]>100)break
o.push({t:e[0],d:e[1].clientX}),n.push({t:e[0],d:e[1].clientY})}return{x:Ss(o),y:Ss(n),get direction(){const{x:e,y:t}=this,[a,l]=[Math.abs(e),Math.abs(t)]
return a>l&&e>=0?"right":a>l&&e<=0?"left":l>a&&t>=0?"down":l>a&&t<=0?"up":function(){throw new Error}()}}}}}function ks(){throw new Error}const xs=["start","end","left","right","top","bottom"],Cs=Ue()({name:"VNavigationDrawer",props:{color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[String,Boolean],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>xs.includes(e)},sticky:Boolean,...Sa(),...Pe(),...ka(),...it(),...Ca(),...ya({tag:"nav"}),...Vt()},emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{isRtl:r}=Ot(),{themeClasses:i}=kt(e),{borderClasses:s}=wa(e),{backgroundColorClasses:u,backgroundColorStyles:c}=Ba(t.toRef(e,"color")),{elevationClasses:d}=xa(e),{mobile:v}=Wn(),{roundedClasses:p}=Na(e),f=Hl(),m=_t(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:h}=Ta(),y=t.ref(),b=t.ref(!1),V=t.computed((()=>e.rail&&e.expandOnHover&&b.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),S=t.computed((()=>Y(e.location,r.value))),w=t.computed((()=>!e.permanent&&(v.value||e.temporary))),k=t.computed((()=>e.sticky&&!w.value&&"bottom"!==S.value))
e.expandOnHover&&null!=e.rail&&t.watch(b,(e=>o("update:rail",!e))),e.disableResizeWatcher||t.watch(w,(a=>!e.permanent&&t.nextTick((()=>m.value=!a)))),!e.disableRouteWatcher&&f&&t.watch(f.currentRoute,(()=>w.value&&(m.value=!1))),t.watch((()=>e.permanent),(e=>{e&&(m.value=!0)})),t.onBeforeMount((()=>{null!=e.modelValue||w.value||(m.value=e.permanent||!v.value)}))
const{isDragging:x,dragProgress:C,dragStyles:N}=function(e){let{isActive:a,isTemporary:l,width:o,touchless:n,position:r}=e
t.onMounted((()=>{window.addEventListener("touchstart",y,{passive:!0}),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("touchstart",y),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",V)}))
const i=t.computed((()=>["left","right"].includes(r.value))),{addMovement:s,endTouch:u,getVelocity:c}=ws()
let d=!1
const v=t.ref(!1),p=t.ref(0),f=t.ref(0)
let m
function g(e,t){return("left"===r.value?e:"right"===r.value?document.documentElement.clientWidth-e:"top"===r.value?e:"bottom"===r.value?document.documentElement.clientHeight-e:ks())-(t?o.value:0)}function h(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a="left"===r.value?(e-f.value)/o.value:"right"===r.value?(document.documentElement.clientWidth-e-f.value)/o.value:"top"===r.value?(e-f.value)/o.value:"bottom"===r.value?(document.documentElement.clientHeight-e-f.value)/o.value:ks()
return t?Math.max(0,Math.min(1,a)):a}function y(e){if(n.value)return
const t=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY,v="left"===r.value?t<25:"right"===r.value?t>document.documentElement.clientWidth-25:"top"===r.value?c<25:"bottom"===r.value?c>document.documentElement.clientHeight-25:ks(),y=a.value&&("left"===r.value?t<o.value:"right"===r.value?t>document.documentElement.clientWidth-o.value:"top"===r.value?c<o.value:"bottom"===r.value?c>document.documentElement.clientHeight-o.value:ks());(v||y||a.value&&l.value)&&(d=!0,m=[t,c],f.value=g(i.value?t:c,a.value),p.value=h(i.value?t:c),u(e),s(e))}function b(e){const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY
if(d){if(!e.cancelable)return void(d=!1)
const l=Math.abs(t-m[0]),o=Math.abs(a-m[1]);(i.value?l>o&&l>3:o>l&&o>3)?(v.value=!0,d=!1):(i.value?o:l)>3&&(d=!1)}if(!v.value)return
e.preventDefault(),s(e)
const l=h(i.value?t:a,!1)
p.value=Math.max(0,Math.min(1,l)),l>1?f.value=g(i.value?t:a,!0):l<0&&(f.value=g(i.value?t:a,!1))}function V(e){if(d=!1,!v.value)return
s(e),v.value=!1
const t=c(e.changedTouches[0].identifier),l=Math.abs(t.x),o=Math.abs(t.y),n=i.value?l>o&&l>400:o>l&&o>3
a.value=n?t.direction===({left:"right",right:"left",top:"down",bottom:"up"}[r.value]||ks()):p.value>.5}const S=t.computed((()=>v.value?{transform:"left"===r.value?`translateX(calc(-100% + ${p.value*o.value}px))`:"right"===r.value?`translateX(calc(100% - ${p.value*o.value}px))`:"top"===r.value?`translateY(calc(-100% + ${p.value*o.value}px))`:"bottom"===r.value?`translateY(calc(100% - ${p.value*o.value}px))`:ks(),transition:"none"}:void 0))
return{isDragging:v,dragProgress:p,dragStyles:S}}({isActive:m,isTemporary:w,width:V,touchless:t.toRef(e,"touchless"),position:S}),_=t.computed((()=>{const t=w.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value
return x.value?t*C.value:t})),{layoutItemStyles:I,layoutRect:B,layoutItemScrimStyles:A}=ut({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:S,layoutSize:_,elementSize:V,active:t.computed((()=>m.value||x.value)),disableTransitions:t.computed((()=>x.value)),absolute:t.computed((()=>e.absolute||k.value&&"string"!=typeof $.value))}),{isStuck:$,stickyStyles:E}=function(e){let{rootEl:a,isSticky:l,layoutItemStyles:o}=e
const n=t.ref(!1),r=t.ref(0),i=t.computed((()=>{const e="boolean"==typeof n.value?"top":n.value
return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[e]:g(r.value)}:{top:o.value.top}]}))
t.onMounted((()=>{t.watch(l,(e=>{e?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)}),{immediate:!0})})),t.onBeforeUnmount((()=>{document.removeEventListener("scroll",u)}))
let s=0
function u(){const e=s>window.scrollY?"up":"down",t=a.value.getBoundingClientRect(),l=parseFloat(o.value.top??0),i=window.scrollY-Math.max(0,r.value-l),u=t.height+Math.max(r.value,l)-window.scrollY-window.innerHeight
t.height<window.innerHeight-l?(n.value="top",r.value=l):"up"===e&&"bottom"===n.value||"down"===e&&"top"===n.value?(r.value=window.scrollY+t.top,n.value=!0):"down"===e&&u<=0?(r.value=0,n.value="bottom"):"up"===e&&i<=0&&(r.value=t.top+i,n.value="top"),s=window.scrollY}return{isStuck:n,stickyStyles:i}}({rootEl:y,isSticky:k,layoutItemStyles:I}),R=Ba(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),T=t.computed((()=>({...x.value?{opacity:.2*C.value,transition:"none"}:void 0,...B.value?{left:g(B.value.left),right:g(B.value.right),top:g(B.value.top),bottom:g(B.value.bottom)}:void 0,...A.value})))
function P(){b.value=!0}function L(){b.value=!1}return Oe({VList:{bgColor:"transparent"}}),lt((()=>{const a=n.image||e.image
return t.createVNode(t.Fragment,null,[t.createVNode(e.tag,t.mergeProps({ref:y,onMouseenter:P,onMouseleave:L,class:["v-navigation-drawer",`v-navigation-drawer--${S.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":b.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":w.value,"v-navigation-drawer--active":m.value,"v-navigation-drawer--sticky":k.value},i.value,u.value,s.value,d.value,p.value,e.class],style:[c.value,I.value,N.value,h.value,E.value,e.style]},l),{default:()=>[a&&t.createVNode("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?n.image?.({image:e.image}):t.createVNode("img",{src:e.image,alt:""},null)]),n.prepend&&t.createVNode("div",{class:"v-navigation-drawer__prepend"},[n.prepend?.()]),t.createVNode("div",{class:"v-navigation-drawer__content"},[n.default?.()]),n.append&&t.createVNode("div",{class:"v-navigation-drawer__append"},[n.append?.()])]}),t.createVNode(t.Transition,{name:"fade-transition"},{default:()=>[w.value&&(x.value||m.value)&&!!e.scrim&&t.createVNode("div",{class:["v-navigation-drawer__scrim",R.backgroundColorClasses.value],style:[T.value,R.backgroundColorStyles.value],onClick:()=>m.value=!1},null)]})])})),{isStuck:$}}}),Ns=He({name:"VNoSsr",setup(e,t){let{slots:a}=t
const l=Yn()
return()=>l.value&&a.default?.()}})
const _s=Ue()({name:"VPagination",props:{activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1==0},totalVisible:[Number,String],firstIcon:{type:el,default:"$first"},prevIcon:{type:el,default:"$prev"},nextIcon:{type:el,default:"$next"},lastIcon:{type:el,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Sa(),...Pe(),...Ma(),...ka(),...Ca(),...cl(),...ya({tag:"nav"}),...Vt(),...za({variant:"text"})},emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=_t(e,"modelValue"),{t:i,n:s}=Dt(),{isRtl:u}=Ot(),{themeClasses:c}=kt(e),{width:d}=Wn(),v=t.ref(-1)
Oe(void 0,{scoped:!0})
const{resizeRef:p}=r((e=>{if(!e.length)return
const{target:t,contentRect:a}=e[0],l=t.querySelector(".v-pagination__list > *")
if(!l)return
const o=a.width,n=l.offsetWidth+2*parseFloat(getComputedStyle(l).marginRight)
v.value=y(o,n)})),f=t.computed((()=>parseInt(e.length,10))),g=t.computed((()=>parseInt(e.start,10))),h=t.computed((()=>e.totalVisible?parseInt(e.totalVisible,10):v.value>=0?v.value:y(d.value,58)))
function y(t,a){const l=e.showFirstLastPage?5:3
return Math.max(0,Math.floor(+((t-a*l)/a).toFixed(2)))}const V=t.computed((()=>{if(f.value<=0||isNaN(f.value)||f.value>Number.MAX_SAFE_INTEGER)return[]
if(h.value<=1)return[n.value]
if(f.value<=h.value)return m(f.value,g.value)
const t=h.value%2==0,a=t?h.value/2:Math.floor(h.value/2),l=t?a:a+1,o=f.value-a
if(l-n.value>=0)return[...m(Math.max(1,h.value-1),g.value),e.ellipsis,f.value]
if(n.value-o>=(t?1:0)){const t=h.value-1,a=f.value-t+g.value
return[g.value,e.ellipsis,...m(t,a)]}{const t=Math.max(1,h.value-3),a=1===t?n.value:n.value-Math.ceil(t/2)+g.value
return[g.value,e.ellipsis,...m(t,a),e.ellipsis,f.value]}}))
function S(e,t,a){e.preventDefault(),n.value=t,a&&o(a,t)}const{refs:w,updateRef:k}=function(){const e=t.ref([])
return t.onBeforeUpdate((()=>e.value=[])),{refs:e,updateRef:function(t,a){e.value[a]=t}}}()
Oe({VPaginationBtn:{color:t.toRef(e,"color"),border:t.toRef(e,"border"),density:t.toRef(e,"density"),size:t.toRef(e,"size"),variant:t.toRef(e,"variant"),rounded:t.toRef(e,"rounded"),elevation:t.toRef(e,"elevation")}})
const x=t.computed((()=>V.value.map(((t,a)=>{const l=e=>k(e,a)
if("string"==typeof t)return{isActive:!1,key:`ellipsis-${a}`,page:t,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}}
{const a=t===n.value
return{isActive:a,key:t,page:s(t),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:a?e.activeColor:e.color,ariaCurrent:a,ariaLabel:i(a?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:e=>S(e,t)}}}})))),C=t.computed((()=>{const t=!!e.disabled||n.value<=g.value,a=!!e.disabled||n.value>=g.value+f.value-1
return{first:e.showFirstLastPage?{icon:u.value?e.lastIcon:e.firstIcon,onClick:e=>S(e,g.value,"first"),disabled:t,ariaLabel:i(e.firstAriaLabel),ariaDisabled:t}:void 0,prev:{icon:u.value?e.nextIcon:e.prevIcon,onClick:e=>S(e,n.value-1,"prev"),disabled:t,ariaLabel:i(e.previousAriaLabel),ariaDisabled:t},next:{icon:u.value?e.prevIcon:e.nextIcon,onClick:e=>S(e,n.value+1,"next"),disabled:a,ariaLabel:i(e.nextAriaLabel),ariaDisabled:a},last:e.showFirstLastPage?{icon:u.value?e.firstIcon:e.lastIcon,onClick:e=>S(e,g.value+f.value-1,"last"),disabled:a,ariaLabel:i(e.lastAriaLabel),ariaDisabled:a}:void 0}}))
function N(){const e=n.value-g.value
w.value[e]?.$el.focus()}function _(a){a.key===b.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,t.nextTick(N)):a.key===b.right&&!e.disabled&&n.value<g.value+f.value-1&&(n.value=n.value+1,t.nextTick(N))}return lt((()=>t.createVNode(e.tag,{ref:p,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":i(e.ariaLabel),onKeydown:_,"data-test":"v-pagination-root"},{default:()=>[t.createVNode("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t.createVNode("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[l.first?l.first(C.value.first):t.createVNode(Xl,t.mergeProps({_as:"VPaginationBtn"},C.value.first),null)]),t.createVNode("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[l.prev?l.prev(C.value.prev):t.createVNode(Xl,t.mergeProps({_as:"VPaginationBtn"},C.value.prev),null)]),x.value.map(((e,a)=>t.createVNode("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[l.item?l.item(e):t.createVNode(Xl,t.mergeProps({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),t.createVNode("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[l.next?l.next(C.value.next):t.createVNode(Xl,t.mergeProps({_as:"VPaginationBtn"},C.value.next),null)]),e.showFirstLastPage&&t.createVNode("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[l.last?l.last(C.value.last):t.createVNode(Xl,t.mergeProps({_as:"VPaginationBtn"},C.value.last),null)])])]}))),{}}})
const Is=Ue()({name:"VParallax",props:{scale:{type:[Number,String],default:.5},...Pe()},setup(e,a){let{slots:l}=a
const{intersectionRef:o,isIntersecting:n}=fl(),{resizeRef:i,contentRect:s}=r(),{height:u}=Wn(),c=t.ref()
let d
t.watchEffect((()=>{o.value=i.value=c.value?.$el})),t.watch(n,(e=>{e?(d=Qe(o.value),d=d===document.scrollingElement?document:d,d.addEventListener("scroll",f,{passive:!0}),f()):d.removeEventListener("scroll",f)})),t.onBeforeUnmount((()=>{d?.removeEventListener("scroll",f)})),t.watch(u,f),t.watch((()=>s.value?.height),f)
const v=t.computed((()=>1-C(+e.scale)))
let p=-1
function f(){n.value&&(cancelAnimationFrame(p),p=requestAnimationFrame((()=>{const e=c.value?.$el.querySelector(".v-img__img")
if(!e)return
const t=d instanceof Document?document.documentElement.clientHeight:d.clientHeight,a=d instanceof Document?window.scrollY:d.scrollTop,l=o.value.getBoundingClientRect().top+a,n=s.value.height,r=(i=(a-(l+(n-t)/2))*v.value,Math.floor(Math.abs(i))*Math.sign(i))
var i
const u=Math.max(1,(v.value*(t-n)+n)/n)
e.style.setProperty("transform",`translateY(${r}px) scale(${u})`)})))}return lt((()=>t.createVNode(ha,{class:["v-parallax",{"v-parallax--active":n.value},e.class],style:e.style,ref:c,cover:!0,onLoadstart:f,onLoad:f},l))),{}}}),Bs=Ue()({name:"VRadio",props:{...Bo({falseIcon:"$radioOff",trueIcon:"$radioOn"})},setup(e,a){let{slots:l}=a
return lt((()=>t.createVNode(Ao,t.mergeProps(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),l))),{}}}),As=Ue()({name:"VRadioGroup",inheritAttrs:!1,props:{height:{type:[Number,String],default:"auto"},...ho(),...w(_o(),["multiple"]),trueIcon:{type:el,default:"$radioOn"},falseIcon:{type:el,default:"$radioOff"},type:{type:String,default:"radio"}},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=Je(),r=t.computed((()=>e.id||`radio-group-${n}`)),i=_t(e,"modelValue")
return lt((()=>{const[a,n]=k(l),[s,u]=yo.filterProps(e),[c,d]=Ao.filterProps(e),v=o.label?o.label({label:e.label,props:{for:r.value}}):e.label
return t.createVNode(yo,t.mergeProps({class:["v-radio-group",e.class],style:e.style},a,s,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,id:r.value}),{...o,default:a=>{let{id:l,messagesId:r,isDisabled:s,isReadonly:u}=a
return t.createVNode(t.Fragment,null,[v&&t.createVNode(ao,{id:l.value},{default:()=>[v]}),t.createVNode(Io,t.mergeProps(c,{id:l.value,"aria-describedby":r.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:s.value,readonly:u.value,"aria-labelledby":v?l.value:void 0,multiple:!1},n,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e}),o)])}})})),{}}}),$s=Ue()({name:"VRangeSlider",props:{...oo(),...ho(),...Zr(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.ref(),i=t.ref()
const s=Jr(e),u=_t(e,"modelValue",void 0,(e=>e?.length?e.map((e=>s.roundValue(e))):[0,0])),{activeThumbRef:c,hasLabels:d,max:v,min:p,mousePressed:f,onSliderMousedown:m,onSliderTouchstart:g,position:h,trackContainerRef:y}=Qr({props:e,steps:s,onSliderStart:()=>{o("start",u.value)},onSliderEnd:e=>{let{value:t}=e
const a=c.value===n.value?.$el?[t,u.value[1]]:[u.value[0],t]
u.value=a,o("end",a)},onSliderMove:t=>{let{value:a}=t
const[l,o]=u.value
e.strict||l!==o||l===p.value||(c.value=a>l?r.value?.$el:n.value?.$el,c.value?.focus()),c.value===n.value?.$el?u.value=[Math.min(a,o),o]:u.value=[l,Math.max(l,a)]},getActiveThumb:function(t){if(!n.value||!r.value)return
const a=Kr(t,n.value.$el,e.direction),l=Kr(t,r.value.$el,e.direction),o=Math.abs(a),i=Math.abs(l)
return o<i||o===i&&a<0?n.value.$el:r.value.$el}}),{isFocused:b,focus:V,blur:S}=no(e),w=t.computed((()=>h(u.value[0]))),k=t.computed((()=>h(u.value[1])))
return lt((()=>{const[a,o]=yo.filterProps(e),s=!!(e.label||l.label||l.prepend)
return t.createVNode(yo,t.mergeProps({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||d.value,"v-slider--focused":b.value,"v-slider--pressed":f.value,"v-slider--disabled":e.disabled},e.class],style:e.style,ref:i},a,{focused:b.value}),{...l,prepend:s?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??e.label?t.createVNode(ao,{class:"v-slider__label",text:e.label},null):void 0,l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:i}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:m,onTouchstartPassive:g},[t.createVNode("input",{id:`${o.value}_start`,name:e.name||o.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value[0]},null),t.createVNode("input",{id:`${o.value}_stop`,name:e.name||o.value,disabled:e.disabled,readonly:e.readonly,tabindex:"-1",value:u.value[1]},null),t.createVNode(ti,{ref:y,start:w.value,stop:k.value},{"tick-label":l["tick-label"]}),t.createVNode(ei,{ref:n,"aria-describedby":i.value,focused:b&&c.value===n.value?.$el,modelValue:u.value[0],"onUpdate:modelValue":e=>u.value=[e,u.value[1]],onFocus:e=>{V(),c.value=n.value?.$el,u.value[0]===u.value[1]&&u.value[1]===p.value&&e.relatedTarget!==r.value?.$el&&(n.value?.$el.blur(),r.value?.$el.focus())},onBlur:()=>{S(),c.value=void 0},min:p.value,max:u.value[1],position:w.value},{"thumb-label":l["thumb-label"]}),t.createVNode(ei,{ref:r,"aria-describedby":i.value,focused:b&&c.value===r.value?.$el,modelValue:u.value[1],"onUpdate:modelValue":e=>u.value=[u.value[0],e],onFocus:e=>{V(),c.value=r.value?.$el,u.value[0]===u.value[1]&&u.value[0]===v.value&&e.relatedTarget!==n.value?.$el&&(r.value?.$el.blur(),n.value?.$el.focus())},onBlur:()=>{S(),c.value=void 0},min:u.value[0],max:v.value,position:k.value},{"thumb-label":l["thumb-label"]})])}})})),{}}}),Es=Ue()({name:"VRating",props:{name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:el,default:"$ratingEmpty"},fullIcon:{type:el,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...Pe(),...Ma(),...cl(),...ya(),...Vt()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{t:o}=Dt(),{themeClasses:n}=kt(e),r=_t(e,"modelValue"),i=t.computed((()=>C(parseFloat(r.value),0,+e.length))),s=t.computed((()=>m(Number(e.length),1))),u=t.computed((()=>s.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),c=t.ref(-1),d=t.computed((()=>u.value.map((t=>{const a=e.hover&&c.value>-1,l=i.value>=t,o=c.value>=t,n=(a?o:l)?e.fullIcon:e.emptyIcon,r=e.activeColor??e.color
return{isFilled:l,isHovered:o,icon:n,color:l||o?r:e.color}})))),v=t.computed((()=>[0,...u.value].map((t=>({onMouseenter:e.hover?function(){c.value=t}:void 0,onMouseleave:e.hover?function(){c.value=-1}:void 0,onClick:function(){e.disabled||e.readonly||(r.value=i.value===t&&e.clearable?0:t)}}))))),p=t.computed((()=>e.name??`v-rating-${Je()}`))
function f(a){let{value:n,index:r,showStar:s=!0}=a
const{onMouseenter:u,onMouseleave:c,onClick:f}=v.value[r+1],m=`${p.value}-${String(n).replace(".","-")}`,g={color:d.value[r]?.color,density:e.density,disabled:e.disabled,icon:d.value[r]?.icon,ripple:e.ripple,size:e.size,variant:"plain"}
return t.createVNode(t.Fragment,null,[t.createVNode("label",{for:m,class:{"v-rating__item--half":e.halfIncrements&&n%1>0,"v-rating__item--full":e.halfIncrements&&n%1==0},onMouseenter:u,onMouseleave:c,onClick:f},[t.createVNode("span",{class:"v-rating__hidden"},[o(e.itemAriaLabel,n,e.length)]),s?l.item?l.item({...d.value[r],props:g,value:n,index:r,rating:i.value}):t.createVNode(Xl,g,null):void 0]),t.createVNode("input",{class:"v-rating__hidden",name:p.value,id:m,type:"radio",value:n,checked:i.value===n,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function g(e){return l["item-label"]?l["item-label"](e):e.label?t.createVNode("span",null,[e.label]):t.createVNode("span",null,[t.createTextVNode(" ")])}return lt((()=>{const a=!!e.itemLabels?.length||l["item-label"]
return t.createVNode(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},n.value,e.class],style:e.style},{default:()=>[t.createVNode(f,{value:0,index:-1,showStar:!1},null),s.value.map(((l,o)=>t.createVNode("div",{class:"v-rating__wrapper"},[a&&"top"===e.itemLabelPosition?g({value:l,index:o,label:e.itemLabels?.[o]}):void 0,t.createVNode("div",{class:"v-rating__item"},[e.halfIncrements?t.createVNode(t.Fragment,null,[t.createVNode(f,{value:l-.5,index:2*o},null),t.createVNode(f,{value:l,index:2*o+1},null)]):t.createVNode(f,{value:l,index:o},null)]),a&&"bottom"===e.itemLabelPosition?g({value:l,index:o,label:e.itemLabels?.[o]}):void 0])))]})})),{}}})
function Rs(e){const t=Math.abs(e)
return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function Ts(e){let{selectedElement:t,containerSize:a,contentSize:l,isRtl:o,currentScrollOffset:n,isHorizontal:r}=e
const i=r?t.clientWidth:t.clientHeight,s=r?t.offsetLeft:t.offsetTop,u=o&&r?l-s-i:s,c=a+n,d=i+u,v=.4*i
return u<=n?n=Math.max(u-v,0):c<=d&&(n=Math.min(n-(c-d-v),l-a)),n}const Ps=Symbol.for("vuetify:v-slide-group"),Ls=Te({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Ps},nextIcon:{type:el,default:"$next"},prevIcon:{type:el,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["always","desktop","mobile"].includes(e)},...Pe(),...ya(),...Wa({selectedClass:"v-slide-group-item--active"})},"v-slide-group"),Ms=Ue()({name:"VSlideGroup",props:Ls(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:o}=l
const{isRtl:n}=Ot(),{mobile:i}=Wn(),s=Xa(e,e.symbol),u=t.ref(!1),c=t.ref(0),d=t.ref(0),v=t.ref(0),p=t.computed((()=>"horizontal"===e.direction)),{resizeRef:f,contentRect:m}=r(),{resizeRef:g,contentRect:h}=r(),y=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[0])):-1)),b=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[s.selected.value.length-1])):-1))
if(a){let a=-1
t.watch((()=>[s.selected.value,m.value,h.value,p.value]),(()=>{cancelAnimationFrame(a),a=requestAnimationFrame((()=>{if(m.value&&h.value){const e=p.value?"width":"height"
d.value=m.value[e],v.value=h.value[e],u.value=d.value+1<v.value}if(y.value>=0&&g.value){const t=g.value.children[b.value]
0!==y.value&&u.value?e.centerActive?c.value=function(e){let{selectedElement:t,containerSize:a,contentSize:l,isRtl:o,isHorizontal:n}=e
const r=n?t.clientWidth:t.clientHeight,i=n?t.offsetLeft:t.offsetTop,s=o&&n?l-i-r/2-a/2:i+r/2-a/2
return Math.min(l-a,Math.max(0,s))}({selectedElement:t,containerSize:d.value,contentSize:v.value,isRtl:n.value,isHorizontal:p.value}):u.value&&(c.value=Ts({selectedElement:t,containerSize:d.value,contentSize:v.value,isRtl:n.value,currentScrollOffset:c.value,isHorizontal:p.value})):c.value=0}}))}))}const V=t.ref(!1)
let S=0,w=0
function k(e){const t=p.value?"clientX":"clientY",a=n.value&&p.value?-1:1
w=a*c.value,S=e.touches[0][t],V.value=!0}function x(e){if(!u.value)return
const t=p.value?"clientX":"clientY",a=n.value&&p.value?-1:1
c.value=a*(w+S-e.touches[0][t])}function N(e){const t=v.value-d.value
c.value<0||!u.value?c.value=0:c.value>=t&&(c.value=t),V.value=!1}function _(){f.value&&(f.value[p.value?"scrollLeft":"scrollTop"]=0)}const I=t.ref(!1)
function B(e){if(I.value=!0,u.value&&g.value)for(const t of e.composedPath())for(const e of g.value.children)if(e===t)return void(c.value=Ts({selectedElement:e,containerSize:d.value,contentSize:v.value,isRtl:n.value,currentScrollOffset:c.value,isHorizontal:p.value}))}function A(e){I.value=!1}function $(e){I.value||e.relatedTarget&&g.value?.contains(e.relatedTarget)||R()}function E(e){g.value&&(p.value?"ArrowRight"===e.key?R(n.value?"prev":"next"):"ArrowLeft"===e.key&&R(n.value?"next":"prev"):"ArrowDown"===e.key?R("next"):"ArrowUp"===e.key&&R("prev"),"Home"===e.key?R("first"):"End"===e.key&&R("last"))}function R(e){if(g.value)if(e)if("next"===e){const e=g.value.querySelector(":focus")?.nextElementSibling
e?e.focus():R("first")}else if("prev"===e){const e=g.value.querySelector(":focus")?.previousElementSibling
e?e.focus():R("last")}else"first"===e?g.value.firstElementChild?.focus():"last"===e&&g.value.lastElementChild?.focus()
else{z(g.value)[0]?.focus()}}function T(e){const t=c.value+("prev"===e?-1:1)*d.value
c.value=C(t,0,v.value-d.value)}const P=t.computed((()=>{let e=c.value>v.value-d.value?-(v.value-d.value)+Rs(v.value-d.value-c.value):-c.value
c.value<=0&&(e=Rs(-c.value))
const t=n.value&&p.value?-1:1
return{transform:`translate${p.value?"X":"Y"}(${t*e}px)`,transition:V.value?"none":"",willChange:V.value?"transform":""}})),L=t.computed((()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected}))),M=t.computed((()=>{switch(e.showArrows){case"always":return!0
case"desktop":return!i.value
case!0:return u.value||Math.abs(c.value)>0
case"mobile":return i.value||u.value||Math.abs(c.value)>0
default:return!i.value&&(u.value||Math.abs(c.value)>0)}})),D=t.computed((()=>Math.abs(c.value)>0)),F=t.computed((()=>v.value>Math.abs(c.value)+d.value))
return lt((()=>t.createVNode(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":M.value,"v-slide-group--is-overflowing":u.value},e.class],style:e.style,tabindex:I.value||s.selected.value.length?-1:0,onFocus:$},{default:()=>[M.value&&t.createVNode("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!D.value}],onClick:()=>T("prev")},[o.prev?.(L.value)??t.createVNode(Jt,null,{default:()=>[t.createVNode(pl,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),t.createVNode("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:_},[t.createVNode("div",{ref:g,class:"v-slide-group__content",style:P.value,onTouchstartPassive:k,onTouchmovePassive:x,onTouchendPassive:N,onFocusin:B,onFocusout:A,onKeydown:E},[o.default?.(L.value)])]),M.value&&t.createVNode("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!F.value}],onClick:()=>T("next")},[o.next?.(L.value)??t.createVNode(Jt,null,{default:()=>[t.createVNode(pl,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}))),{selected:s.selected,scrollTo:T,scrollOffset:c,focus:R}}}),Ds=Ue()({name:"VSlideGroupItem",props:{...Ya()},emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const l=Ga(e,Ps)
return()=>a.default?.({isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}}),Fs=Ue()({name:"VSnackbar",props:{multiLine:Boolean,timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Tl({location:"bottom"}),...zl(),...Ca(),...za(),...Vt(),...w(ar({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),{locationStyles:n}=Pl(e),{positionClasses:r}=jl(e),{scopeId:i}=Gn(),{themeClasses:s}=kt(e),{colorClasses:u,colorStyles:c,variantClasses:d}=ja(e),{roundedClasses:v}=Na(e),p=t.ref()
t.watch(o,m),t.watch((()=>e.timeout),m),t.onMounted((()=>{o.value&&m()}))
let f=-1
function m(){window.clearTimeout(f)
const t=Number(e.timeout)
o.value&&-1!==t&&(f=window.setTimeout((()=>{o.value=!1}),t))}function g(){window.clearTimeout(f)}return lt((()=>{const[a]=lr.filterProps(e)
return t.createVNode(lr,t.mergeProps({ref:p,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--vertical":e.vertical},r.value,e.class],style:e.style},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,contentProps:t.mergeProps({class:["v-snackbar__wrapper",s.value,u.value,v.value,d.value],style:[n.value,c.value],onPointerenter:g,onPointerleave:m},a.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},i),{default:()=>[Oa(!1,"v-snackbar"),l.default&&t.createVNode("div",{class:"v-snackbar__content",role:"status","aria-live":"polite"},[l.default()]),l.actions&&t.createVNode(jt,{defaults:{VBtn:{variant:"text",ripple:!1}}},{default:()=>[t.createVNode("div",{class:"v-snackbar__actions"},[l.actions()])]})],activator:l.activator})})),wo({},p)}}),Os=Ue()({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...ho(),...Bo()},emits:{"update:focused":e=>!0,"update:modelValue":()=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=_t(e,"indeterminate"),r=_t(e,"modelValue"),{loaderClasses:i}=Dl(e),{isFocused:s,focus:u,blur:c}=no(e),d=t.computed((()=>"string"==typeof e.loading&&""!==e.loading?e.loading:e.color)),v=Je(),p=t.computed((()=>e.id||`switch-${v}`))
function f(){n.value&&(n.value=!1)}return lt((()=>{const[a,v]=k(l),[m,g]=yo.filterProps(e),[h,y]=Ao.filterProps(e),b=t.ref()
function V(e){e.stopPropagation(),e.preventDefault(),b.value?.input?.click()}return t.createVNode(yo,t.mergeProps({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},i.value,e.class],style:e.style},a,m,{id:p.value,focused:s.value}),{...o,default:a=>{let{id:l,messagesId:i,isDisabled:s,isReadonly:p,isValid:m}=a
return t.createVNode(Ao,t.mergeProps({ref:b},h,{modelValue:r.value,"onUpdate:modelValue":[e=>r.value=e,f],id:l.value,"aria-describedby":i.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:s.value,readonly:p.value,onFocus:u,onBlur:c},v),{...o,default:()=>t.createVNode("div",{class:"v-switch__track",onClick:V},null),input:a=>{let{textColorClasses:l,textColorStyles:n}=a
return t.createVNode("div",{class:["v-switch__thumb",l.value],style:n.value},[e.loading&&t.createVNode(Fl,{name:"v-switch",active:!0,color:!1===m.value?void 0:d.value},{default:e=>o.loader?o.loader(e):t.createVNode(ml,{active:e.isActive,color:e.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})})),{}}}),zs=Ue()({name:"VSystemBar",props:{color:String,height:[Number,String],window:Boolean,...Pe(),...ka(),...it(),...Ca(),...ya(),...Vt()},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{backgroundColorClasses:n,backgroundColorStyles:r}=Ba(t.toRef(e,"color")),{elevationClasses:i}=xa(e),{roundedClasses:s}=Na(e),{ssrBootStyles:u}=Ta(),c=t.computed((()=>e.height??(e.window?32:24))),{layoutItemStyles:d}=ut({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.ref("top"),layoutSize:c,elementSize:c,active:t.computed((()=>!0)),absolute:t.toRef(e,"absolute")})
return lt((()=>t.createVNode(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},o.value,n.value,i.value,s.value,e.class],style:[r.value,d.value,u.value,e.style]},l))),{}}}),js=Symbol.for("vuetify:v-tabs"),Hs=Ue()({name:"VTab",props:{fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...w(Gl({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},setup(e,a){let{slots:l,attrs:o}=a
const{textColorClasses:n,textColorStyles:r}=Ia(e,"sliderColor"),i=t.computed((()=>"horizontal"===e.direction)),s=t.ref(!1),u=t.ref(),c=t.ref()
function d(e){let{value:t}=e
if(s.value=t,t){const e=u.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),t=c.value
if(!e||!t)return
const a=getComputedStyle(e).color,l=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=i.value?"x":"y",r=i.value?"X":"Y",s=i.value?"right":"bottom",d=i.value?"width":"height",v=l[n]>o[n]?l[s]-o[s]:l[n]-o[n],p=Math.sign(v)>0?i.value?"right":"bottom":Math.sign(v)<0?i.value?"left":"top":"center",f=(Math.abs(v)+(Math.sign(v)<0?l[d]:o[d]))/Math.max(l[d],o[d]),m=1.5
ee(t,{backgroundColor:[a,""],transform:[`translate${r}(${v}px) scale${r}(${l[d]/o[d]})`,`translate${r}(${v/m}px) scale${r}(${(f-1)/m+1})`,""],transformOrigin:Array(3).fill(p)},{duration:225,easing:Ge})}}return lt((()=>{const[a]=Xl.filterProps(e)
return t.createVNode(Xl,t.mergeProps({symbol:js,ref:u,class:["v-tab",e.class],style:e.style,tabindex:s.value?0:-1,role:"tab","aria-selected":String(s.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,rounded:0},a,o,{"onGroup:selected":d}),{default:()=>[l.default?.()??e.text,!e.hideSlider&&t.createVNode("div",{ref:c,class:["v-tab__slider",n.value],style:r.value},null)]})})),{}}})
const Us=Ue()({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...Ls({mandatory:"force"}),...Ma(),...ya()},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),n=t.computed((()=>{return(t=e.items)?t.map((e=>"string"==typeof e?{title:e,value:e}:e)):[]
var t})),{densityClasses:r}=Da(e),{backgroundColorClasses:i,backgroundColorStyles:s}=Ba(t.toRef(e,"bgColor"))
return Oe({VTab:{color:t.toRef(e,"color"),direction:t.toRef(e,"direction"),stacked:t.toRef(e,"stacked"),fixed:t.toRef(e,"fixedTabs"),sliderColor:t.toRef(e,"sliderColor"),hideSlider:t.toRef(e,"hideSlider")}}),lt((()=>{const[a]=Ms.filterProps(e)
return t.createVNode(Ms,t.mergeProps(a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},r.value,i.value,e.class],style:[{"--v-tabs-height":g(e.height)},s.value,e.style],role:"tablist",symbol:js}),{default:()=>[l.default?l.default():n.value.map((e=>t.createVNode(Hs,t.mergeProps(e,{key:e.title}),null)))]})})),{}}}),Ws=Ue()({name:"VTable",props:{fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Pe(),...Ma(),...ya(),...Vt()},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{densityClasses:n}=Da(e)
return lt((()=>t.createVNode(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!l.top,"v-table--has-bottom":!!l.bottom,"v-table--hover":e.hover},o.value,n.value,e.class],style:e.style},{default:()=>[l.top?.(),l.default?t.createVNode("div",{class:"v-table__wrapper",style:{height:g(e.height)}},[t.createVNode("table",null,[l.default()])]):l.wrapper?.(),l.bottom?.()]}))),{}}}),Ys=Ue()({name:"VTextarea",directives:{Intersect:fa},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...ho(),...io()},emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=_t(e,"modelValue"),{isFocused:i,focus:s,blur:u}=no(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):(r.value||"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter))
function v(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const p=t.ref(),f=t.ref(),m=t.ref(""),h=t.ref(),y=t.computed((()=>i.value||e.persistentPlaceholder))
function b(){h.value!==document.activeElement&&h.value?.focus(),i.value||s()}function V(e){b(),o("click:control",e)}function S(e){o("mousedown:control",e)}function w(a){a.stopPropagation(),b(),t.nextTick((()=>{r.value="",O(e["onClick:clear"],a)}))}function x(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}const N=t.ref()
function _(){e.autoGrow&&t.nextTick((()=>{if(!N.value||!f.value)return
const t=getComputedStyle(N.value),a=getComputedStyle(f.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),o=N.value.scrollHeight,n=parseFloat(t.lineHeight),r=Math.max(parseFloat(e.rows)*n+l,parseFloat(a.getPropertyValue("--v-input-control-height"))),i=parseFloat(e.maxRows)*n+l||1/0
m.value=g(C(o??0,r,i))}))}let I
return t.onMounted(_),t.watch(r,_),t.watch((()=>e.rows),_),t.watch((()=>e.maxRows),_),t.watch((()=>e.density),_),t.watch(N,(e=>{e?(I=new ResizeObserver(_),I.observe(N.value)):I?.disconnect()})),t.onBeforeUnmount((()=>{I?.disconnect()})),lt((()=>{const a=!!(n.counter||e.counter||e.counterValue),o=!(!a&&!n.details),[s,g]=k(l),[{modelValue:C,..._}]=yo.filterProps(e),[I]=uo(e)
return t.createVNode(yo,t.mergeProps({ref:p,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)},e.class],style:e.style},s,_,{focused:i.value}),{...n,default:a=>{let{isDisabled:l,isDirty:o,isReadonly:s,isValid:c}=a
return t.createVNode(so,t.mergeProps({ref:f,style:{"--v-textarea-control-height":m.value},onClick:V,onMousedown:S,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},I,{active:y.value||o.value,dirty:o.value||e.dirty,disabled:l.value,focused:i.value,error:!1===c.value}),{...n,default:a=>{let{props:{class:o,...n}}=a
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[e.prefix]),t.withDirectives(t.createVNode("textarea",t.mergeProps({ref:h,class:o,value:r.value,onInput:x,autofocus:e.autofocus,readonly:s.value,disabled:l.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:u},n,g),null),[[t.resolveDirective("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&t.withDirectives(t.createVNode("textarea",{class:[o,"v-textarea__sizer"],"onUpdate:modelValue":e=>r.value=e,ref:N,readonly:!0,"aria-hidden":"true"},null),[[t.vModelText,r.value]]),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(bo,{active:e.persistentCounter||i.value,value:c.value,max:d.value},n.counter)])]):void 0})})),wo({},p,f,h)}}),Gs=Ue()({name:"VThemeProvider",props:{withBackground:Boolean,...Pe(),...Vt(),...ya()},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e)
return()=>e.withBackground?t.createVNode(e.tag,{class:["v-theme-provider",o.value,e.class],style:e.style},{default:()=>[l.default?.()]}):l.default?.()}}),Xs=Ue()({name:"VTimeline",props:{align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>null==e||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...Pe(),...Ma(),...ya(),...Vt()},setup(e,a){let{slots:l}=a
const{themeClasses:o}=kt(e),{densityClasses:n}=Da(e)
Oe({VTimelineDivider:{lineColor:t.toRef(e,"lineColor")},VTimelineItem:{density:t.toRef(e,"density"),lineInset:t.toRef(e,"lineInset")}})
const r=t.computed((()=>{const t=e.side?e.side:"default"!==e.density?"end":null
return t&&`v-timeline--side-${t}`})),i=t.computed((()=>{const t=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"]
switch(e.truncateLine){case"both":return t
case"start":return t[0]
case"end":return t[1]
default:return null}}))
return lt((()=>t.createVNode(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,i.value,{"v-timeline--inset-line":!!e.lineInset},o.value,n.value,r.value,e.class],style:[{"--v-timeline-line-thickness":g(e.lineThickness)},e.style]},l))),{}}}),qs=Ue()({name:"VTimelineDivider",props:{dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:el,iconColor:String,lineColor:String,...Pe(),...Ca(),...cl(),...ka()},setup(e,a){let{slots:l}=a
const{sizeClasses:o,sizeStyles:n}=dl(e,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:i}=Ba(t.toRef(e,"dotColor")),{roundedClasses:s}=Na(e,"v-timeline-divider__dot"),{elevationClasses:u}=xa(e),{backgroundColorClasses:c,backgroundColorStyles:d}=Ba(t.toRef(e,"lineColor"))
return lt((()=>t.createVNode("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t.createVNode("div",{class:["v-timeline-divider__before",c.value],style:d.value},null),!e.hideDot&&t.createVNode("div",{key:"dot",class:["v-timeline-divider__dot",u.value,s.value,o.value],style:n.value},[t.createVNode("div",{class:["v-timeline-divider__inner-dot",i.value,s.value],style:r.value},[l.default?t.createVNode(jt,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},l.default):t.createVNode(pl,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t.createVNode("div",{class:["v-timeline-divider__after",c.value],style:d.value},null)]))),{}}}),Ks=Ue()({name:"VTimelineItem",props:{density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:el,iconColor:String,lineInset:[Number,String],...Pe(),...ca(),...ka(),...Ca(),...cl(),...ya()},setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=da(e),n=t.ref(0),r=t.ref()
return t.watch(r,(e=>{e&&(n.value=e.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width??0)}),{flush:"post"}),lt((()=>t.createVNode("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":g(n.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${g(e.lineInset)})`:g(0)},e.style]},[t.createVNode("div",{class:"v-timeline-item__body",style:o.value},[l.default?.()]),t.createVNode(qs,{ref:r,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),"compact"!==e.density&&t.createVNode("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&l.opposite?.()])]))),{}}}),Zs=Ue()({name:"VTooltip",props:{id:String,text:String,...w(ar({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=_t(e,"modelValue"),{scopeId:n}=Gn(),r=Je(),i=t.computed((()=>e.id||`v-tooltip-${r}`)),s=t.ref(),u=t.computed((()=>e.location.split(" ").length>1?e.location:e.location+" center")),c=t.computed((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),d=t.computed((()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition")),v=t.computed((()=>t.mergeProps({"aria-describedby":i.value},e.activatorProps)))
return lt((()=>{const[a]=lr.filterProps(e)
return t.createVNode(lr,t.mergeProps({ref:s,class:["v-tooltip",e.class],style:e.style,id:i.value},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,transition:d.value,absolute:!0,location:u.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:v.value,_disableGlobalStack:!0},n),{activator:l.activator,default:function(){for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o]
return l.default?.(...a)??e.text}})})),wo({},s)}}),Js=Ue()({name:"VValidation",props:{...mo()},emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=go(e,"validation")
return()=>a.default?.(l)}}),Qs=Ue()({name:"VVirtualScrollItem",props:{dynamicHeight:Boolean,...Pe()},emits:{"update:height":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const{resizeRef:n,contentRect:i}=r()
Le((()=>e.dynamicHeight),(()=>{t.watch((()=>i.value?.height),(e=>{null!=e&&l("update:height",e)}))})),t.onUpdated((function(){e.dynamicHeight&&i.value&&l("update:height",i.value.height)})),lt((()=>t.createVNode("div",{ref:e.dynamicHeight?n:void 0,class:["v-virtual-scroll__item",e.class],style:e.style},[o.default?.()])))}}),eu=Ue()({name:"VVirtualScroll",props:{items:{type:Array,default:()=>[]},itemHeight:[Number,String],...Pe(),...ca()},setup(e,a){let{slots:l}=a
const o=t.ref(0),n=t.ref(e.itemHeight),i=t.computed({get:()=>parseInt(n.value??0,10),set(e){n.value=e}}),s=t.ref(),{resizeRef:u,contentRect:c}=r()
t.watchEffect((()=>{u.value=s.value}))
const d=Wn(),v=new Map
let p=m(e.items.length).map((()=>i.value))
const f=t.computed((()=>Math.max(12,Math.ceil((c.value?.height??d.height.value)/i.value*1.7+1))))
function h(e){return p.slice(0,e).reduce(((e,t)=>e+(t||i.value)),0)}let y=0
function b(){if(!s.value||!c.value)return
const t=c.value.height,a=s.value.scrollTop,l=a<y?-1:1,n=function(t){const a=e.items.length
let l=0,o=0
for(;o<t&&l<a;)o+=p[l++]||i.value
return l-1}(a+t/2),r=Math.round(f.value/3);-1===l&&n<=o.value+2*r-1?o.value=C(n-r,0,e.items.length):1===l&&n>=o.value+2*r-1&&(o.value=C(n-r,0,e.items.length-f.value)),y=s.value.scrollTop}const V=t.computed((()=>e.items.map(((e,t)=>({raw:e,index:t}))))),S=t.computed((()=>Math.min(e.items.length,o.value+f.value))),w=t.computed((()=>V.value.slice(o.value,S.value))),k=t.computed((()=>h(o.value))),x=t.computed((()=>h(e.items.length)-h(S.value))),{dimensionStyles:N}=da(e)
return t.onMounted((()=>{i.value||(i.value=p.slice(o.value,S.value).reduce(((e,t)=>e+t),0)/f.value)})),t.watch((()=>e.items.length),(()=>{p=m(e.items.length).map((()=>i.value)),v.forEach(((t,a)=>{const l=e.items.indexOf(a);-1===l?v.delete(a):p[l]=t}))})),lt((()=>t.createVNode("div",{ref:s,class:["v-virtual-scroll",e.class],onScroll:b,style:[N.value,e.style]},[t.createVNode("div",{class:"v-virtual-scroll__container",style:{paddingTop:g(k.value),paddingBottom:g(x.value)}},[w.value.map((a=>t.createVNode(Qs,{key:a.index,dynamicHeight:!e.itemHeight,"onUpdate:height":t=>function(t,a){i.value=Math.max(i.value,a),p[t]=a,v.set(e.items[t],a)}(a.index,t)},{default:()=>[l.default?.({item:a.raw,index:a.index})]})))])]))),{scrollToIndex:function(e){if(!s.value)return
const t=h(e)
s.value.scrollTop=t}}}})
var tu=Object.freeze({__proto__:null,VAlert:eo,VAlertTitle:Jl,VApp:zt,VAppBar:Pa,VAppBarNavIcon:ql,VAppBarTitle:Zl,VAutocomplete:cr,VAvatar:Po,VBadge:dr,VBanner:fr,VBannerActions:vr,VBannerText:pr,VBottomNavigation:mr,VBreadcrumbs:yr,VBreadcrumbsDivider:gr,VBreadcrumbsItem:hr,VBtn:Xl,VBtnGroup:Ua,VBtnToggle:Za,VCard:xr,VCardActions:br,VCardItem:wr,VCardSubtitle:Vr,VCardText:kr,VCardTitle:Sr,VCarousel:Rr,VCarouselItem:Pr,VCheckbox:Ro,VCheckboxBtn:Eo,VChip:Do,VChipGroup:Mo,VClassIcon:rl,VCode:Lr,VCol:Yi,VColorPicker:Ni,VCombobox:_i,VComponentIcon:ll,VContainer:Fi,VCounter:bo,VDefaultsProvider:jt,VDialog:Ii,VDialogBottomTransition:Kt,VDialogTopTransition:Zt,VDialogTransition:Yt,VDivider:Fo,VExpandTransition:sa,VExpandXTransition:ua,VExpansionPanel:Pi,VExpansionPanelText:Ti,VExpansionPanelTitle:Ri,VExpansionPanels:$i,VFabTransition:qt,VFadeTransition:Jt,VField:so,VFieldLabel:lo,VFileInput:Li,VFooter:Mi,VForm:Di,VHover:cs,VIcon:pl,VImg:ha,VInput:yo,VItem:ps,VItemGroup:vs,VKbd:fs,VLabel:ao,VLayout:ms,VLayoutItem:gs,VLazy:hs,VLigatureIcon:nl,VList:fn,VListGroup:tn,VListImg:mn,VListItem:on,VListItemAction:gn,VListItemMedia:hn,VListItemSubtitle:an,VListItemTitle:ln,VListSubheader:nn,VLocaleProvider:ys,VMain:bs,VMenu:or,VMessages:co,VNavigationDrawer:Cs,VNoSsr:Ns,VOverlay:lr,VPagination:_s,VParallax:Is,VProgressCircular:ml,VProgressLinear:Ll,VRadio:Bs,VRadioGroup:As,VRangeSlider:$s,VRating:Es,VResponsive:va,VRow:ss,VScaleTransition:Qt,VScrollXReverseTransition:ta,VScrollXTransition:ea,VScrollYReverseTransition:la,VScrollYTransition:aa,VSelect:rr,VSelectionControl:Ao,VSelectionControlGroup:Io,VSheet:Dr,VSlideGroup:Ms,VSlideGroupItem:Ds,VSlideXReverseTransition:na,VSlideXTransition:oa,VSlideYReverseTransition:ia,VSlideYTransition:ra,VSlider:ai,VSnackbar:Fs,VSpacer:us,VSvgIcon:ol,VSwitch:Os,VSystemBar:zs,VTab:Hs,VTable:Ws,VTabs:Us,VTextField:Co,VTextarea:Ys,VThemeProvider:Gs,VTimeline:Xs,VTimelineItem:Ks,VToolbar:Ea,VToolbarItems:Kl,VToolbarTitle:Va,VTooltip:Zs,VValidation:Js,VVirtualScroll:eu,VWindow:Er,VWindowItem:Tr})
function au(e,t){e._mutate?.[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const lu={mounted:function(e,t){const a=t.modifiers||{},l=t.value,{once:o,immediate:n,...r}=a,i=!Object.keys(r).length,{handler:s,options:u}="object"==typeof l?l:{handler:l,options:{attributes:r?.attr??i,characterData:r?.char??i,childList:r?.child??i,subtree:r?.sub??i}},c=new MutationObserver((function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0
s?.(a,l),o&&au(e,t)}))
n&&s?.([],c),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:c},c.observe(e,u)},unmounted:au}
const ou={mounted:function(e,t){const a=t.value,l={passive:!t.modifiers?.active}
window.addEventListener("resize",a,l),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:a,options:l},t.modifiers?.quiet||a()},unmounted:function(e,t){if(!e._onResize?.[t.instance.$.uid])return
const{handler:a,options:l}=e._onResize[t.instance.$.uid]
window.removeEventListener("resize",a,l),delete e._onResize[t.instance.$.uid]}}
function nu(e,t){const{self:a=!1}=t.modifiers??{},l=t.value,o="object"==typeof l&&l.options||{passive:!0},n="function"==typeof l||"handleEvent"in l?l:l.handler,r=a?e:t.arg?document.querySelector(t.arg):window
r&&(r.addEventListener("scroll",n,o),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:n,options:o,target:a?void 0:r})}function ru(e,t){if(!e._onScroll?.[t.instance.$.uid])return
const{handler:a,options:l,target:o=e}=e._onScroll[t.instance.$.uid]
o.removeEventListener("scroll",a,l),delete e._onScroll[t.instance.$.uid]}const iu={mounted:nu,unmounted:ru,updated:function(e,t){t.value!==t.oldValue&&(ru(e,t),nu(e,t))}}
var su=Object.freeze({__proto__:null,ClickOutside:er,Intersect:fa,Mutate:lu,Resize:ou,Ripple:El,Scroll:iu,Touch:Ir})
function uu(e){return new Date(e.getFullYear(),e.getMonth(),1)}function cu(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}const du={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:0,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:0,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0},vu=new Date(2e3,0,2)
function pu(e){return new Date(e,0,1)}function fu(e,t){return e.getTime()>t.getTime()}class mu{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en"
this.locale=e}date(e){return function(e){if(null==e)return null
if(e instanceof Date)return e
if("string"==typeof e){const t=Date.parse(e)
if(!isNaN(t))return new Date(t)}return null}(e)}addDays(e,t){return function(e,t){const a=new Date(e)
return a.setDate(a.getDate()+t),a}(e,t)}addMonths(e,t){return function(e,t){const a=new Date(e)
return a.setMonth(a.getMonth()+t),a}(e,t)}getWeekArray(e){return function(e){let t=[]
const a=[],l=uu(e),o=cu(e)
for(let e=0;e<l.getDay();e++)t.push(null)
for(let l=1;l<=o.getDate();l++){const o=new Date(e.getFullYear(),e.getMonth(),l)
t.push(o),7===t.length&&(a.push(t),t=[])}for(let e=t.length;e<7;e++)t.push(null)
return a.push(t),a}(e)}startOfMonth(e){return uu(e)}endOfMonth(e){return cu(e)}format(e,t){return function(e,t,a){const l=new Date(e)
let o={}
switch(t){case"fullDateWithWeekday":o={weekday:"long",day:"numeric",month:"long",year:"numeric"}
break
case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short",year:"numeric"}
break
case"keyboardDate":o={}
break
case"monthAndDate":o={month:"long",day:"numeric"}
break
case"monthAndYear":o={month:"long",year:"numeric"}
break
default:o={timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(a,o).format(l)}(e,t,this.locale)}isEqual(e,t){return function(e,t){return e.getTime()===t.getTime()}(e,t)}isValid(e){return function(e){const t=new Date(e)
return t instanceof Date&&!isNaN(t.getTime())}(e)}isWithinRange(e,t){return function(e,t){return fu(e,t[0])&&function(e,t){return e.getTime()<t.getTime()}(e,t[1])}(e,t)}isAfter(e,t){return fu(e,t)}isSameDay(e,t){return function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}isSameMonth(e,t){return function(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}setYear(e,t){return function(e,t){const a=new Date(e)
return a.setFullYear(t),a}(e,t)}getDiff(e,t,a){return function(e,t,a){const l=new Date(e),o=new Date(t)
return"month"===a?l.getMonth()-o.getMonth()+12*(l.getFullYear()-o.getFullYear()):Math.floor((l.getTime()-o.getTime())/864e5)}(e,t,a)}getWeek(e){return function(e){let t=e.getFullYear(),a=pu(t)
if(e<a)t-=1,a=pu(t)
else{const l=pu(t+1)
e>=l&&(t+=1,a=l)}const l=Math.abs(e.getTime()-a.getTime()),o=Math.ceil(l/864e5)
return Math.floor(o/7)+1}(e)}getWeekdays(){return function(e){const t=du[e.slice(-2).toUpperCase()]
return m(7).map((a=>{const l=new Date(vu)
return l.setDate(vu.getDate()+t+a),new Intl.DateTimeFormat(e,{weekday:"long"}).format(l)}))}(this.locale)}getYear(e){return function(e){return e.getFullYear()}(e)}getMonth(e){return function(e){return e.getMonth()}(e)}startOfYear(e){return function(e){return new Date(e.getFullYear(),0,1)}(e)}endOfYear(e){return function(e){return new Date(e.getFullYear(),11,31)}(e)}}const gu=Symbol.for("vuetify:date-adapter")
function hu(e){return e??{adapter:mu}}function yu(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{blueprint:l,...o}=e,n=B(l,o),{aliases:r={},components:i={},directives:s={}}=n,u=De(n.defaults),c=Un(n.display,n.ssr),d=wt(n.theme),v=sl(n.icons),p=Mt(n.locale),f=hu(n.date),m=e=>{for(const t in s)e.directive(t,s[t])
for(const t in i)e.component(t,i[t])
for(const t in r)e.component(t,He({...r[t],name:t,aliasName:r[t].name}))
if(d.install(e),e.provide(Me,u),e.provide(Fn,c),e.provide(bt,d),e.provide(tl,v),e.provide(Lt,p),e.provide(gu,f),a&&n.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{c.update()}))
else{const{mount:a}=e
e.mount=function(){const l=a(...arguments)
return t.nextTick((()=>c.update())),e.mount=a,l}}Je.reset(),("boolean"!=typeof __VUE_OPTIONS_API__||__VUE_OPTIONS_API__)&&e.mixin({computed:{$vuetify(){return t.reactive({defaults:bu.call(this,Me),display:bu.call(this,Fn),theme:bu.call(this,bt),icons:bu.call(this,tl),locale:bu.call(this,Lt),date:bu.call(this,gu)})}}})}
return{install:m,defaults:u,display:c,theme:d,icons:v,locale:p,date:f}}function bu(e){const t=this.$,a=t.parent?.provides??t.vnode.appContext?.provides
if(a&&e in a)return a[e]}yu.version="3.2.1"
const Vu=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return yu({components:tu,directives:su,...e})},Su="3.2.1"
Vu.version=Su,e.components=tu,e.createVuetify=Vu,e.directives=su,e.useDefaults=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
const{props:a,provideSubDefaults:l}=je(e,t)
return l(),a},e.useDisplay=Wn,e.useLayout=st,e.useLocale=Dt,e.useRtl=Ot,e.useTheme=xt,e.version=Su}))
//# sourceMappingURL=vuetify.min.js.map