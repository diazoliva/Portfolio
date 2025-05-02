/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function Kn(t,n,e){return(n=Qn(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Yt(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,a)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?Yt(Object(e),!0).forEach(function(a){Kn(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Yt(Object(e)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}function qn(t,n){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var a=e.call(t,n);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function Qn(t){var n=qn(t,"string");return typeof n=="symbol"?n:n+""}const Ut=()=>{};let Ot={},gn={},pn=null,hn={mark:Ut,measure:Ut};try{typeof window<"u"&&(Ot=window),typeof document<"u"&&(gn=document),typeof MutationObserver<"u"&&(pn=MutationObserver),typeof performance<"u"&&(hn=performance)}catch{}const{userAgent:Wt=""}=Ot.navigator||{},N=Ot,p=gn,Ht=pn,q=hn;N.document;const E=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",bn=~Wt.indexOf("MSIE")||~Wt.indexOf("Trident/");var Jn=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,yn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},te={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},vn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],h="classic",et="duotone",ne="sharp",ee="sharp-duotone",xn=[h,et,ne,ee],ae={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},re={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ie=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),oe={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},se=["fak","fa-kit","fakd","fa-kit-duotone"],Gt={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ce=["kit"],le={kit:{"fa-kit":"fak"}},fe=["fak","fakd"],ue={kit:{fak:"fa-kit"}},Vt={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},me=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],de=["fak","fa-kit","fakd","fa-kit-duotone"],ge={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},pe={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},he={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},dt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},be=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],gt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...me,...be],ye=["solid","regular","light","thin","duotone","brands"],An=[1,2,3,4,5,6,7,8,9,10],ve=An.concat([11,12,13,14,15,16,17,18,19,20]),xe=[...Object.keys(he),...ye,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Q.GROUP,Q.SWAP_OPACITY,Q.PRIMARY,Q.SECONDARY].concat(An.map(t=>"".concat(t,"x"))).concat(ve.map(t=>"w-".concat(t))),Ae={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const P="___FONT_AWESOME___",pt=16,kn="fa",wn="svg-inline--fa",F="data-fa-i2svg",ht="data-fa-pseudo-element",ke="data-fa-pseudo-element-pending",Nt="data-prefix",It="data-icon",Xt="fontawesome-i2svg",we="async",Se=["HTML","HEAD","STYLE","SCRIPT"],Sn=(()=>{try{return!0}catch{return!1}})();function $(t){return new Proxy(t,{get(n,e){return e in n?n[e]:n[h]}})}const Pn=s({},yn);Pn[h]=s(s(s(s({},{"fa-duotone":"duotone"}),yn[h]),Gt.kit),Gt["kit-duotone"]);const Pe=$(Pn),bt=s({},oe);bt[h]=s(s(s(s({},{duotone:"fad"}),bt[h]),Vt.kit),Vt["kit-duotone"]);const Bt=$(bt),yt=s({},dt);yt[h]=s(s({},yt[h]),ue.kit);const Lt=$(yt),vt=s({},pe);vt[h]=s(s({},vt[h]),le.kit);$(vt);const Ce=Jn,Cn="fa-layers-text",Ee=Zn,Me=s({},ae);$(Me);const Oe=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ct=te,Ne=[...ce,...xe],G=N.FontAwesomeConfig||{};function Ie(t){var n=p.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}function Le(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(n=>{let[e,a]=n;const r=Le(Ie(e));r!=null&&(G[a]=r)});const En={styleDefault:"solid",familyDefault:h,cssPrefix:kn,replacementClass:wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};G.familyPrefix&&(G.cssPrefix=G.familyPrefix);const U=s(s({},En),G);U.autoReplaceSvg||(U.observeMutations=!1);const l={};Object.keys(En).forEach(t=>{Object.defineProperty(l,t,{enumerable:!0,set:function(n){U[t]=n,V.forEach(e=>e(l))},get:function(){return U[t]}})});Object.defineProperty(l,"familyPrefix",{enumerable:!0,set:function(t){U.cssPrefix=t,V.forEach(n=>n(l))},get:function(){return U.cssPrefix}});N.FontAwesomeConfig=l;const V=[];function ze(t){return V.push(t),()=>{V.splice(V.indexOf(t),1)}}const O=pt,k={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Te(t){if(!t||!E)return;const n=p.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;const e=p.head.childNodes;let a=null;for(let r=e.length-1;r>-1;r--){const i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return p.head.insertBefore(n,a),t}const Fe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function X(){let t=12,n="";for(;t-- >0;)n+=Fe[Math.random()*62|0];return n}function W(t){const n=[];for(let e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function zt(t){return t.classList?W(t.classList):(t.getAttribute("class")||"").split(" ").filter(n=>n)}function Mn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function _e(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,'="').concat(Mn(t[e]),'" '),"").trim()}function at(t){return Object.keys(t||{}).reduce((n,e)=>n+"".concat(e,": ").concat(t[e].trim(),";"),"")}function Tt(t){return t.size!==k.size||t.x!==k.x||t.y!==k.y||t.rotate!==k.rotate||t.flipX||t.flipY}function De(t){let{transform:n,containerWidth:e,iconWidth:a}=t;const r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(n.x*32,", ").concat(n.y*32,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)"),u={transform:"".concat(i," ").concat(o," ").concat(c)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:u,path:f}}function Re(t){let{transform:n,width:e=pt,height:a=pt,startCentered:r=!1}=t,i="";return r&&bn?i+="translate(".concat(n.x/O-e/2,"em, ").concat(n.y/O-a/2,"em) "):r?i+="translate(calc(-50% + ".concat(n.x/O,"em), calc(-50% + ").concat(n.y/O,"em)) "):i+="translate(".concat(n.x/O,"em, ").concat(n.y/O,"em) "),i+="scale(".concat(n.size/O*(n.flipX?-1:1),", ").concat(n.size/O*(n.flipY?-1:1),") "),i+="rotate(".concat(n.rotate,"deg) "),i}var je=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function On(){const t=kn,n=wn,e=l.cssPrefix,a=l.replacementClass;let r=je;if(e!==t||a!==n){const i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(a))}return r}let $t=!1;function lt(){l.autoAddCss&&!$t&&(Te(On()),$t=!0)}var Ye={mixout(){return{dom:{css:On,insertCss:lt}}},hooks(){return{beforeDOMElementCreation(){lt()},beforeI2svg(){lt()}}}};const C=N||{};C[P]||(C[P]={});C[P].styles||(C[P].styles={});C[P].hooks||(C[P].hooks={});C[P].shims||(C[P].shims=[]);var w=C[P];const Nn=[],In=function(){p.removeEventListener("DOMContentLoaded",In),tt=1,Nn.map(t=>t())};let tt=!1;E&&(tt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),tt||p.addEventListener("DOMContentLoaded",In));function Ue(t){E&&(tt?setTimeout(t,0):Nn.push(t))}function K(t){const{tag:n,attributes:e={},children:a=[]}=t;return typeof t=="string"?Mn(t):"<".concat(n," ").concat(_e(e),">").concat(a.map(K).join(""),"</").concat(n,">")}function Kt(t,n,e){if(t&&t[n]&&t[n][e])return{prefix:n,iconName:e,icon:t[n][e]}}var ft=function(n,e,a,r){var i=Object.keys(n),o=i.length,c=e,u,f,m;for(a===void 0?(u=1,m=n[i[0]]):(u=0,m=a);u<o;u++)f=i[u],m=c(m,n[f],f,n);return m};function We(t){const n=[];let e=0;const a=t.length;for(;e<a;){const r=t.charCodeAt(e++);if(r>=55296&&r<=56319&&e<a){const i=t.charCodeAt(e++);(i&64512)==56320?n.push(((r&1023)<<10)+(i&1023)+65536):(n.push(r),e--)}else n.push(r)}return n}function xt(t){const n=We(t);return n.length===1?n[0].toString(16):null}function He(t,n){const e=t.length;let a=t.charCodeAt(n),r;return a>=55296&&a<=56319&&e>n+1&&(r=t.charCodeAt(n+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function qt(t){return Object.keys(t).reduce((n,e)=>{const a=t[e];return!!a.icon?n[a.iconName]=a.icon:n[e]=a,n},{})}function At(t,n){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=e,r=qt(n);typeof w.hooks.addPack=="function"&&!a?w.hooks.addPack(t,qt(n)):w.styles[t]=s(s({},w.styles[t]||{}),r),t==="fas"&&At("fa",n)}const{styles:B,shims:Ge}=w,Ln=Object.keys(Lt),Ve=Ln.reduce((t,n)=>(t[n]=Object.keys(Lt[n]),t),{});let Ft=null,zn={},Tn={},Fn={},_n={},Dn={};function Xe(t){return~Ne.indexOf(t)}function Be(t,n){const e=n.split("-"),a=e[0],r=e.slice(1).join("-");return a===t&&r!==""&&!Xe(r)?r:null}const Rn=()=>{const t=a=>ft(B,(r,i,o)=>(r[o]=ft(i,a,{}),r),{});zn=t((a,r,i)=>(r[3]&&(a[r[3]]=i),r[2]&&r[2].filter(c=>typeof c=="number").forEach(c=>{a[c.toString(16)]=i}),a)),Tn=t((a,r,i)=>(a[i]=i,r[2]&&r[2].filter(c=>typeof c=="string").forEach(c=>{a[c]=i}),a)),Dn=t((a,r,i)=>{const o=r[2];return a[i]=i,o.forEach(c=>{a[c]=i}),a});const n="far"in B||l.autoFetchSvg,e=ft(Ge,(a,r)=>{const i=r[0];let o=r[1];const c=r[2];return o==="far"&&!n&&(o="fas"),typeof i=="string"&&(a.names[i]={prefix:o,iconName:c}),typeof i=="number"&&(a.unicodes[i.toString(16)]={prefix:o,iconName:c}),a},{names:{},unicodes:{}});Fn=e.names,_n=e.unicodes,Ft=rt(l.styleDefault,{family:l.familyDefault})};ze(t=>{Ft=rt(t.styleDefault,{family:l.familyDefault})});Rn();function _t(t,n){return(zn[t]||{})[n]}function $e(t,n){return(Tn[t]||{})[n]}function T(t,n){return(Dn[t]||{})[n]}function jn(t){return Fn[t]||{prefix:null,iconName:null}}function Ke(t){const n=_n[t],e=_t("fas",t);return n||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function I(){return Ft}const Yn=()=>({prefix:null,iconName:null,rest:[]});function qe(t){let n=h;const e=Ln.reduce((a,r)=>(a[r]="".concat(l.cssPrefix,"-").concat(r),a),{});return xn.forEach(a=>{(t.includes(e[a])||t.some(r=>Ve[a].includes(r)))&&(n=a)}),n}function rt(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:e=h}=n,a=Pe[e][t];if(e===et&&!t)return"fad";const r=Bt[e][t]||Bt[e][a],i=t in w.styles?t:null;return r||i||null}function Qe(t){let n=[],e=null;return t.forEach(a=>{const r=Be(l.cssPrefix,a);r?e=r:a&&n.push(a)}),{iconName:e,rest:n}}function Qt(t){return t.sort().filter((n,e,a)=>a.indexOf(n)===e)}function it(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:e=!1}=n;let a=null;const r=gt.concat(de),i=Qt(t.filter(g=>r.includes(g))),o=Qt(t.filter(g=>!gt.includes(g))),c=i.filter(g=>(a=g,!vn.includes(g))),[u=null]=c,f=qe(i),m=s(s({},Qe(o)),{},{prefix:rt(u,{family:f})});return s(s(s({},m),na({values:t,family:f,styles:B,config:l,canonical:m,givenPrefix:a})),Je(e,a,m))}function Je(t,n,e){let{prefix:a,iconName:r}=e;if(t||!a||!r)return{prefix:a,iconName:r};const i=n==="fa"?jn(r):{},o=T(a,r);return r=i.iconName||o||r,a=i.prefix||a,a==="far"&&!B.far&&B.fas&&!l.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const Ze=xn.filter(t=>t!==h||t!==et),ta=Object.keys(dt).filter(t=>t!==h).map(t=>Object.keys(dt[t])).flat();function na(t){const{values:n,family:e,canonical:a,givenPrefix:r="",styles:i={},config:o={}}=t,c=e===et,u=n.includes("fa-duotone")||n.includes("fad"),f=o.familyDefault==="duotone",m=a.prefix==="fad"||a.prefix==="fa-duotone";if(!c&&(u||f||m)&&(a.prefix="fad"),(n.includes("fa-brands")||n.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Ze.includes(e)&&(Object.keys(i).find(d=>ta.includes(d))||o.autoFetchSvg)){const d=ie.get(e).defaultShortPrefixId;a.prefix=d,a.iconName=T(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=I()||"fas"),a}class ea{constructor(){this.definitions={}}add(){for(var n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];const r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach(i=>{this.definitions[i]=s(s({},this.definitions[i]||{}),r[i]),At(i,r[i]);const o=Lt[h][i];o&&At(o,r[i]),Rn()})}reset(){this.definitions={}}_pullDefinitions(n,e){const a=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(a).map(r=>{const{prefix:i,iconName:o,icon:c}=a[r],u=c[2];n[i]||(n[i]={}),u.length>0&&u.forEach(f=>{typeof f=="string"&&(n[i][f]=c)}),n[i][o]=c}),n}}let Jt=[],j={};const Y={},aa=Object.keys(Y);function ra(t,n){let{mixoutsTo:e}=n;return Jt=t,j={},Object.keys(Y).forEach(a=>{aa.indexOf(a)===-1&&delete Y[a]}),Jt.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(i=>{typeof r[i]=="function"&&(e[i]=r[i]),typeof r[i]=="object"&&Object.keys(r[i]).forEach(o=>{e[i]||(e[i]={}),e[i][o]=r[i][o]})}),a.hooks){const i=a.hooks();Object.keys(i).forEach(o=>{j[o]||(j[o]=[]),j[o].push(i[o])})}a.provides&&a.provides(Y)}),e}function kt(t,n){for(var e=arguments.length,a=new Array(e>2?e-2:0),r=2;r<e;r++)a[r-2]=arguments[r];return(j[t]||[]).forEach(o=>{n=o.apply(null,[n,...a])}),n}function _(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),a=1;a<n;a++)e[a-1]=arguments[a];(j[t]||[]).forEach(i=>{i.apply(null,e)})}function L(){const t=arguments[0],n=Array.prototype.slice.call(arguments,1);return Y[t]?Y[t].apply(null,n):void 0}function wt(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:n}=t;const e=t.prefix||I();if(n)return n=T(e,n)||n,Kt(Un.definitions,e,n)||Kt(w.styles,e,n)}const Un=new ea,ia=()=>{l.autoReplaceSvg=!1,l.observeMutations=!1,_("noAuto")},oa={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(_("beforeI2svg",t),L("pseudoElements2svg",t),L("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n}=t;l.autoReplaceSvg===!1&&(l.autoReplaceSvg=!0),l.observeMutations=!0,Ue(()=>{ca({autoReplaceSvgRoot:n}),_("watch",t)})}},sa={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:T(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=rt(t[0]);return{prefix:e,iconName:T(e,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(l.cssPrefix,"-"))>-1||t.match(Ce))){const n=it(t.split(" "),{skipLookups:!0});return{prefix:n.prefix||I(),iconName:T(n.prefix,n.iconName)||n.iconName}}if(typeof t=="string"){const n=I();return{prefix:n,iconName:T(n,t)||t}}}},v={noAuto:ia,config:l,dom:oa,parse:sa,library:Un,findIconDefinition:wt,toHtml:K},ca=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:n=p}=t;(Object.keys(w.styles).length>0||l.autoFetchSvg)&&E&&l.autoReplaceSvg&&v.dom.i2svg({node:n})};function ot(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>K(e))}}),Object.defineProperty(t,"node",{get:function(){if(!E)return;const e=p.createElement("div");return e.innerHTML=t.html,e.children}}),t}function la(t){let{children:n,main:e,mask:a,attributes:r,styles:i,transform:o}=t;if(Tt(o)&&e.found&&!a.found){const{width:c,height:u}=e,f={x:c/u/2,y:.5};r.style=at(s(s({},i),{},{"transform-origin":"".concat(f.x+o.x/16,"em ").concat(f.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}function fa(t){let{prefix:n,iconName:e,children:a,attributes:r,symbol:i}=t;const o=i===!0?"".concat(n,"-").concat(l.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:s(s({},r),{},{id:o}),children:a}]}]}function Dt(t){const{icons:{main:n,mask:e},prefix:a,iconName:r,transform:i,symbol:o,title:c,maskId:u,titleId:f,extra:m,watchable:g=!1}=t,{width:d,height:b}=e.found?e:n,M=fe.includes(a),z=[l.replacementClass,r?"".concat(l.cssPrefix,"-").concat(r):""].filter(R=>m.classes.indexOf(R)===-1).filter(R=>R!==""||!!R).concat(m.classes).join(" ");let x={children:[],attributes:s(s({},m.attributes),{},{"data-prefix":a,"data-icon":r,class:z,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(d," ").concat(b)})};const S=M&&!~m.classes.indexOf("fa-fw")?{width:"".concat(d/b*16*.0625,"em")}:{};g&&(x.attributes[F]=""),c&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(f||X())},children:[c]}),delete x.attributes.title);const y=s(s({},x),{},{prefix:a,iconName:r,main:n,mask:e,maskId:u,transform:i,symbol:o,styles:s(s({},S),m.styles)}),{children:A,attributes:D}=e.found&&n.found?L("generateAbstractMask",y)||{children:[],attributes:{}}:L("generateAbstractIcon",y)||{children:[],attributes:{}};return y.children=A,y.attributes=D,o?fa(y):la(y)}function Zt(t){const{content:n,width:e,height:a,transform:r,title:i,extra:o,watchable:c=!1}=t,u=s(s(s({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});c&&(u[F]="");const f=s({},o.styles);Tt(r)&&(f.transform=Re({transform:r,startCentered:!0,width:e,height:a}),f["-webkit-transform"]=f.transform);const m=at(f);m.length>0&&(u.style=m);const g=[];return g.push({tag:"span",attributes:u,children:[n]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function ua(t){const{content:n,title:e,extra:a}=t,r=s(s(s({},a.attributes),e?{title:e}:{}),{},{class:a.classes.join(" ")}),i=at(a.styles);i.length>0&&(r.style=i);const o=[];return o.push({tag:"span",attributes:r,children:[n]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}const{styles:ut}=w;function St(t){const n=t[0],e=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(l.cssPrefix,"-").concat(ct.GROUP)},children:[{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(ct.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(l.cssPrefix,"-").concat(ct.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:n,height:e,icon:r}}const ma={found:!1,width:512,height:512};function da(t,n){!Sn&&!l.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(n,'" is missing.'))}function Pt(t,n){let e=n;return n==="fa"&&l.styleDefault!==null&&(n=I()),new Promise((a,r)=>{if(e==="fa"){const i=jn(t)||{};t=i.iconName||t,n=i.prefix||n}if(t&&n&&ut[n]&&ut[n][t]){const i=ut[n][t];return a(St(i))}da(t,n),a(s(s({},ma),{},{icon:l.showMissingIcons&&t?L("missingIconAbstract")||{}:{}}))})}const tn=()=>{},Ct=l.measurePerformance&&q&&q.mark&&q.measure?q:{mark:tn,measure:tn},H='FA "6.7.2"',ga=t=>(Ct.mark("".concat(H," ").concat(t," begins")),()=>Wn(t)),Wn=t=>{Ct.mark("".concat(H," ").concat(t," ends")),Ct.measure("".concat(H," ").concat(t),"".concat(H," ").concat(t," begins"),"".concat(H," ").concat(t," ends"))};var Rt={begin:ga,end:Wn};const J=()=>{};function nn(t){return typeof(t.getAttribute?t.getAttribute(F):null)=="string"}function pa(t){const n=t.getAttribute?t.getAttribute(Nt):null,e=t.getAttribute?t.getAttribute(It):null;return n&&e}function ha(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(l.replacementClass)}function ba(){return l.autoReplaceSvg===!0?Z.replace:Z[l.autoReplaceSvg]||Z.replace}function ya(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function va(t){return p.createElement(t)}function Hn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:e=t.tag==="svg"?ya:va}=n;if(typeof t=="string")return p.createTextNode(t);const a=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){a.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){a.appendChild(Hn(i,{ceFn:e}))}),a}function xa(t){let n=" ".concat(t.outerHTML," ");return n="".concat(n,"Font Awesome fontawesome.com "),n}const Z={replace:function(t){const n=t[0];if(n.parentNode)if(t[1].forEach(e=>{n.parentNode.insertBefore(Hn(e),n)}),n.getAttribute(F)===null&&l.keepOriginalSource){let e=p.createComment(xa(n));n.parentNode.replaceChild(e,n)}else n.remove()},nest:function(t){const n=t[0],e=t[1];if(~zt(n).indexOf(l.replacementClass))return Z.replace(t);const a=new RegExp("".concat(l.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){const i=e[0].attributes.class.split(" ").reduce((o,c)=>(c===l.replacementClass||c.match(a)?o.toSvg.push(c):o.toNode.push(c),o),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}const r=e.map(i=>K(i)).join(`
`);n.setAttribute(F,""),n.innerHTML=r}};function en(t){t()}function Gn(t,n){const e=typeof n=="function"?n:J;if(t.length===0)e();else{let a=en;l.mutateApproach===we&&(a=N.requestAnimationFrame||en),a(()=>{const r=ba(),i=Rt.begin("mutate");t.map(r),i(),e()})}}let jt=!1;function Vn(){jt=!0}function Et(){jt=!1}let nt=null;function an(t){if(!Ht||!l.observeMutations)return;const{treeCallback:n=J,nodeCallback:e=J,pseudoElementsCallback:a=J,observeMutationsRoot:r=p}=t;nt=new Ht(i=>{if(jt)return;const o=I();W(i).forEach(c=>{if(c.type==="childList"&&c.addedNodes.length>0&&!nn(c.addedNodes[0])&&(l.searchPseudoElements&&a(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&l.searchPseudoElements&&a(c.target.parentNode),c.type==="attributes"&&nn(c.target)&&~Oe.indexOf(c.attributeName))if(c.attributeName==="class"&&pa(c.target)){const{prefix:u,iconName:f}=it(zt(c.target));c.target.setAttribute(Nt,u||o),f&&c.target.setAttribute(It,f)}else ha(c.target)&&e(c.target)})}),E&&nt.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Aa(){nt&&nt.disconnect()}function ka(t){const n=t.getAttribute("style");let e=[];return n&&(e=n.split(";").reduce((a,r)=>{const i=r.split(":"),o=i[0],c=i.slice(1);return o&&c.length>0&&(a[o]=c.join(":").trim()),a},{})),e}function wa(t){const n=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=it(zt(t));return r.prefix||(r.prefix=I()),n&&e&&(r.prefix=n,r.iconName=e),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=$e(r.prefix,t.innerText)||_t(r.prefix,xt(t.innerText))),!r.iconName&&l.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Sa(t){const n=W(t.attributes).reduce((r,i)=>(r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return l.autoA11y&&(e?n["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(a||X()):(n["aria-hidden"]="true",n.focusable="false")),n}function Pa(){return{iconName:null,title:null,titleId:null,prefix:null,transform:k,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function rn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:e,prefix:a,rest:r}=wa(t),i=Sa(t),o=kt("parseNodeAttributes",{},t);let c=n.styleParser?ka(t):[];return s({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:k,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:c,attributes:i}},o)}const{styles:Ca}=w;function Xn(t){const n=l.autoReplaceSvg==="nest"?rn(t,{styleParser:!1}):rn(t);return~n.extra.classes.indexOf(Cn)?L("generateLayersText",t,n):L("generateSvgReplacementMutation",t,n)}function Ea(){return[...se,...gt]}function on(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();const e=p.documentElement.classList,a=m=>e.add("".concat(Xt,"-").concat(m)),r=m=>e.remove("".concat(Xt,"-").concat(m)),i=l.autoFetchSvg?Ea():vn.concat(Object.keys(Ca));i.includes("fa")||i.push("fa");const o=[".".concat(Cn,":not([").concat(F,"])")].concat(i.map(m=>".".concat(m,":not([").concat(F,"])"))).join(", ");if(o.length===0)return Promise.resolve();let c=[];try{c=W(t.querySelectorAll(o))}catch{}if(c.length>0)a("pending"),r("complete");else return Promise.resolve();const u=Rt.begin("onTree"),f=c.reduce((m,g)=>{try{const d=Xn(g);d&&m.push(d)}catch(d){Sn||d.name==="MissingIcon"&&console.error(d)}return m},[]);return new Promise((m,g)=>{Promise.all(f).then(d=>{Gn(d,()=>{a("active"),a("complete"),r("pending"),typeof n=="function"&&n(),u(),m()})}).catch(d=>{u(),g(d)})})}function Ma(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Xn(t).then(e=>{e&&Gn([e],n)})}function Oa(t){return function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(n||{}).icon?n:wt(n||{});let{mask:r}=e;return r&&(r=(r||{}).icon?r:wt(r||{})),t(a,s(s({},e),{},{mask:r}))}}const Na=function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=k,symbol:a=!1,mask:r=null,maskId:i=null,title:o=null,titleId:c=null,classes:u=[],attributes:f={},styles:m={}}=n;if(!t)return;const{prefix:g,iconName:d,icon:b}=t;return ot(s({type:"icon"},t),()=>(_("beforeDOMElementCreation",{iconDefinition:t,params:n}),l.autoA11y&&(o?f["aria-labelledby"]="".concat(l.replacementClass,"-title-").concat(c||X()):(f["aria-hidden"]="true",f.focusable="false")),Dt({icons:{main:St(b),mask:r?St(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:d,transform:s(s({},k),e),symbol:a,title:o,maskId:i,titleId:c,extra:{attributes:f,styles:m,classes:u}})))};var Ia={mixout(){return{icon:Oa(Na)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=on,t.nodeCallback=Ma,t}}},provides(t){t.i2svg=function(n){const{node:e=p,callback:a=()=>{}}=n;return on(e,a)},t.generateSvgReplacementMutation=function(n,e){const{iconName:a,title:r,titleId:i,prefix:o,transform:c,symbol:u,mask:f,maskId:m,extra:g}=e;return new Promise((d,b)=>{Promise.all([Pt(a,o),f.iconName?Pt(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(M=>{let[z,x]=M;d([n,Dt({icons:{main:z,mask:x},prefix:o,iconName:a,transform:c,symbol:u,maskId:m,title:r,titleId:i,extra:g,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){let{children:e,attributes:a,main:r,transform:i,styles:o}=n;const c=at(o);c.length>0&&(a.style=c);let u;return Tt(i)&&(u=L("generateAbstractTransformGrouping",{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),e.push(u||r.icon),{children:e,attributes:a}}}},La={mixout(){return{layer(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:e=[]}=n;return ot({type:"layer"},()=>{_("beforeDOMElementCreation",{assembler:t,params:n});let a=[];return t(r=>{Array.isArray(r)?r.map(i=>{a=a.concat(i.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(l.cssPrefix,"-layers"),...e].join(" ")},children:a}]})}}}},za={mixout(){return{counter(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:e=null,classes:a=[],attributes:r={},styles:i={}}=n;return ot({type:"counter",content:t},()=>(_("beforeDOMElementCreation",{content:t,params:n}),ua({content:t.toString(),title:e,extra:{attributes:r,styles:i,classes:["".concat(l.cssPrefix,"-layers-counter"),...a]}})))}}}},Ta={mixout(){return{text(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:e=k,title:a=null,classes:r=[],attributes:i={},styles:o={}}=n;return ot({type:"text",content:t},()=>(_("beforeDOMElementCreation",{content:t,params:n}),Zt({content:t,transform:s(s({},k),e),title:a,extra:{attributes:i,styles:o,classes:["".concat(l.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(n,e){const{title:a,transform:r,extra:i}=e;let o=null,c=null;if(bn){const u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();o=f.width/u,c=f.height/u}return l.autoA11y&&!a&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Zt({content:n.innerHTML,width:o,height:c,transform:r,title:a,extra:i,watchable:!0})])}}};const Fa=new RegExp('"',"ug"),sn=[1105920,1112319],cn=s(s(s(s({},{FontAwesome:{normal:"fas",400:"fas"}}),re),Ae),ge),Mt=Object.keys(cn).reduce((t,n)=>(t[n.toLowerCase()]=cn[n],t),{}),_a=Object.keys(Mt).reduce((t,n)=>{const e=Mt[n];return t[n]=e[900]||[...Object.entries(e)][0][1],t},{});function Da(t){const n=t.replace(Fa,""),e=He(n,0),a=e>=sn[0]&&e<=sn[1],r=n.length===2?n[0]===n[1]:!1;return{value:xt(r?n[0]:n),isSecondary:a||r}}function Ra(t,n){const e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(n),r=isNaN(a)?"normal":a;return(Mt[e]||{})[r]||_a[e]}function ln(t,n){const e="".concat(ke).concat(n.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(e)!==null)return a();const o=W(t.children).filter(d=>d.getAttribute(ht)===n)[0],c=N.getComputedStyle(t,n),u=c.getPropertyValue("font-family"),f=u.match(Ee),m=c.getPropertyValue("font-weight"),g=c.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&g!=="none"&&g!==""){const d=c.getPropertyValue("content");let b=Ra(u,m);const{value:M,isSecondary:z}=Da(d),x=f[0].startsWith("FontAwesome");let S=_t(b,M),y=S;if(x){const A=Ke(M);A.iconName&&A.prefix&&(S=A.iconName,b=A.prefix)}if(S&&!z&&(!o||o.getAttribute(Nt)!==b||o.getAttribute(It)!==y)){t.setAttribute(e,y),o&&t.removeChild(o);const A=Pa(),{extra:D}=A;D.attributes[ht]=n,Pt(S,b).then(R=>{const Bn=Dt(s(s({},A),{},{icons:{main:R,mask:Yn()},prefix:b,iconName:y,extra:D,watchable:!0})),st=p.createElementNS("http://www.w3.org/2000/svg","svg");n==="::before"?t.insertBefore(st,t.firstChild):t.appendChild(st),st.outerHTML=Bn.map($n=>K($n)).join(`
`),t.removeAttribute(e),a()}).catch(r)}else a()}else a()})}function ja(t){return Promise.all([ln(t,"::before"),ln(t,"::after")])}function Ya(t){return t.parentNode!==document.head&&!~Se.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ht)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(E)return new Promise((n,e)=>{const a=W(t.querySelectorAll("*")).filter(Ya).map(ja),r=Rt.begin("searchPseudoElements");Vn(),Promise.all(a).then(()=>{r(),Et(),n()}).catch(()=>{r(),Et(),e()})})}var Ua={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(n){const{node:e=p}=n;l.searchPseudoElements&&fn(e)}}};let un=!1;var Wa={mixout(){return{dom:{unwatch(){Vn(),un=!0}}}},hooks(){return{bootstrap(){an(kt("mutationObserverCallbacks",{}))},noAuto(){Aa()},watch(t){const{observeMutationsRoot:n}=t;un?Et():an(kt("mutationObserverCallbacks",{observeMutationsRoot:n}))}}}};const mn=t=>{let n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,a)=>{const r=a.toLowerCase().split("-"),i=r[0];let o=r.slice(1).join("-");if(i&&o==="h")return e.flipX=!0,e;if(i&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(i){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},n)};var Ha={mixout(){return{parse:{transform:t=>mn(t)}}},hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-transform");return e&&(t.transform=mn(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(n){let{main:e,transform:a,containerWidth:r,iconWidth:i}=n;const o={transform:"translate(".concat(r/2," 256)")},c="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),f="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(c," ").concat(u," ").concat(f)},g={transform:"translate(".concat(i/2*-1," -256)")},d={outer:o,inner:m,path:g};return{tag:"g",attributes:s({},d.outer),children:[{tag:"g",attributes:s({},d.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:s(s({},e.icon.attributes),d.path)}]}]}}}};const mt={x:0,y:0,width:"100%",height:"100%"};function dn(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function Ga(t){return t.tag==="g"?t.children:[t]}var Va={hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-mask"),a=e?it(e.split(" ").map(r=>r.trim())):Yn();return a.prefix||(a.prefix=I()),t.mask=a,t.maskId=n.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(n){let{children:e,attributes:a,main:r,mask:i,maskId:o,transform:c}=n;const{width:u,icon:f}=r,{width:m,icon:g}=i,d=De({transform:c,containerWidth:m,iconWidth:u}),b={tag:"rect",attributes:s(s({},mt),{},{fill:"white"})},M=f.children?{children:f.children.map(dn)}:{},z={tag:"g",attributes:s({},d.inner),children:[dn(s({tag:f.tag,attributes:s(s({},f.attributes),d.path)},M))]},x={tag:"g",attributes:s({},d.outer),children:[z]},S="mask-".concat(o||X()),y="clip-".concat(o||X()),A={tag:"mask",attributes:s(s({},mt),{},{id:S,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,x]},D={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Ga(g)},A]};return e.push(D,{tag:"rect",attributes:s({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(S,")")},mt)}),{children:e,attributes:a}}}},Xa={provides(t){let n=!1;N.matchMedia&&(n=N.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const e=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:s(s({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const i=s(s({},r),{},{attributeName:"opacity"}),o={tag:"circle",attributes:s(s({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:s(s({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:s(s({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:s(s({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:s(s({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||e.push({tag:"path",attributes:s(s({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:s(s({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ba={hooks(){return{parseNodeAttributes(t,n){const e=n.getAttribute("data-fa-symbol"),a=e===null?!1:e===""?!0:e;return t.symbol=a,t}}}},$a=[Ye,Ia,La,za,Ta,Ua,Wa,Ha,Va,Xa,Ba];ra($a,{mixoutsTo:v});v.noAuto;v.config;const Ka=v.library,qa=v.dom;v.parse;v.findIconDefinition;v.toHtml;v.icon;v.layer;v.text;v.counter;/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const Qa={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},Ja={prefix:"fas",iconName:"users",icon:[640,512,[],"f0c0","M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192l42.7 0c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0L21.3 320C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7l42.7 0C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3l-213.3 0zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352l117.3 0C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7l-330.7 0c-14.7 0-26.7-11.9-26.7-26.7z"]},Za={prefix:"fas",iconName:"suitcase",icon:[512,512,[129523],"f0f2","M176 56l0 40 160 0 0-40c0-4.4-3.6-8-8-8L184 48c-4.4 0-8 3.6-8 8zM128 96l0-40c0-30.9 25.1-56 56-56L328 0c30.9 0 56 25.1 56 56l0 40 0 32 0 352-256 0 0-352 0-32zM64 96l32 0 0 384-32 0c-35.3 0-64-28.7-64-64L0 160c0-35.3 28.7-64 64-64zM448 480l-32 0 0-384 32 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64z"]},tr={prefix:"fas",iconName:"language",icon:[640,512,[],"f1ab","M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"]},nr={prefix:"fas",iconName:"code",icon:[640,512,[],"f121","M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"]},er={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]},ar={prefix:"fas",iconName:"screwdriver-wrench",icon:[512,512,["tools"],"f7d9","M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4l54.1 0 109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109 0-54.1c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7L352 176c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"]},rr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},ir={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},or={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},sr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},cr={prefix:"fas",iconName:"desktop",icon:[576,512,[128421,61704,"desktop-alt"],"f390","M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z"]},lr={prefix:"fas",iconName:"paper-plane",icon:[512,512,[61913],"f1d8","M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const fr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},ur={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const mr={prefix:"far",iconName:"user",icon:[448,512,[128100,62144],"f007","M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"]};Ka.add(rr,sr,cr,Qa,or,ir,er,lr,Za,nr,tr,ar,Ja,ur,fr,mr);function dr(){qa.watch()}export{dr as initIcons};
