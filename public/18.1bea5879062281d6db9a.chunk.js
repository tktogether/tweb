(this.webpackJsonp=this.webpackJsonp||[]).push([[18],{18:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var i=n(7),s=n(11),o=n(39),a=n(8),l=n(14);let r=()=>{document.addEventListener("paste",e=>{if(!e.target.hasAttribute("contenteditable")&&!e.target.parentElement.hasAttribute("contenteditable"))return;e.preventDefault();let t=(e.originalEvent||e).clipboardData.getData("text/plain"),n=l.b.parseEntities(t);n=n.filter(e=>"messageEntityEmoji"===e._||"messageEntityLinebreak"===e._),t=l.b.wrapRichText(t,{entities:n,noLinks:!0,wrappingDraft:!0}),window.document.execCommand("insertHTML",!1,t)}),r=null};const c=e=>{const t=(e instanceof HTMLInputElement?e.value:e.innerText)[0];let n="ltr";t&&Object(o.b)(t)&&(n="rtl"),e.style.direction=n};var h;!function(e){e[e.Neutral=0]="Neutral",e[e.Valid=1]="Valid",e[e.Error=2]="Error"}(h||(h={}));t.b=class{constructor(e={}){this.options=e,this.container=document.createElement("div"),this.container.classList.add("input-field"),e.maxLength&&(e.showLengthOn=Math.round(e.maxLength/3));const{placeholder:t,maxLength:n,showLengthOn:o,name:l,plainText:h}=e;let d,u,p=e.label||e.labelText;if(h)this.container.innerHTML=`\n      <input type="text" ${l?`name="${l}"`:""} autocomplete="off" ${p?'required=""':""} class="input-field-input">\n      `,d=this.container.firstElementChild,d.addEventListener("input",()=>c(d));else{r&&r(),this.container.innerHTML='\n      <div contenteditable="true" class="input-field-input"></div>\n      ',d=this.container.firstElementChild;const t=new MutationObserver(()=>{c(d),u&&u()});d.addEventListener("input",()=>{Object(i.s)(d)&&(d.innerHTML=""),this.inputFake&&(this.inputFake.innerHTML=d.innerHTML,this.onFakeInput())}),t.observe(d,{characterData:!0,childList:!0,subtree:!0}),e.animate&&(d.classList.add("scrollable","scrollable-y"),this.wasInputFakeClientHeight=0,this.showScrollDebounced=Object(s.a)(()=>this.input.classList.remove("no-scrollbar"),150,!1,!0),this.inputFake=document.createElement("div"),this.inputFake.setAttribute("contenteditable","true"),this.inputFake.className=d.className+" input-field-input-fake")}if(t&&(Object(a._i18n)(d,t,void 0,"placeholder"),this.inputFake&&Object(a._i18n)(this.inputFake,t,void 0,"placeholder")),p||t){const e=document.createElement("div");e.classList.add("input-field-border"),this.container.append(e)}if(p&&(this.label=document.createElement("label"),this.setLabel(),this.container.append(this.label)),n){const e=this.container.lastElementChild;let t=!1;u=()=>{const s=d.classList.contains("error"),a=h?d.value.length:[...Object(i.l)(d)].length,l=n-a,r=l<0;d.classList.toggle("error",r),r||l<=o?(this.setLabel(),e.append(` (${n-a})`),t||(t=!0)):(s&&!r||t)&&(this.setLabel(),t=!1)},d.addEventListener("input",u)}this.input=d}select(){this.input.value&&this.input.select()}setLabel(){this.label.textContent="",this.options.labelText?this.label.innerHTML=this.options.labelText:this.label.append(Object(a.i18n)(this.options.label,this.options.labelOptions))}onFakeInput(){const{scrollHeight:e,clientHeight:t}=this.inputFake;this.wasInputFakeClientHeight&&this.wasInputFakeClientHeight!==t&&(this.input.classList.add("no-scrollbar"),this.showScrollDebounced()),this.wasInputFakeClientHeight=t,this.input.style.height=e?e+"px":""}get value(){return this.options.plainText?this.input.value:Object(i.l)(this.input)}set value(e){this.setValueSilently(e,!1);const t=new Event("input",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(t)}setValueSilently(e,t=!0){this.options.plainText?this.input.value=e:(this.input.innerHTML=e,this.inputFake&&(this.inputFake.innerHTML=e,t&&this.onFakeInput()))}isValid(){return!this.input.classList.contains("error")&&this.value!==this.originalValue}setOriginalValue(e="",t=!1){this.originalValue=e,this.options.plainText||(e=l.b.wrapDraftText(e)),t?this.setValueSilently(e,!1):this.value=e}setState(e,t){t&&(this.label.textContent="",this.label.append(Object(a.i18n)(t,this.options.labelOptions))),this.input.classList.toggle("error",!!(e&h.Error)),this.input.classList.toggle("valid",!!(e&h.Valid))}setError(e){this.setState(h.Error,e)}}},32:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return h}));var i=n(20),s=n(22),o=n(35),a=n(33),l=n(7);class r{constructor(e,t="",n=document.createElement("div")){this.el=e,this.container=n,this.onScrollMeasure=0,this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation=!1,this.container.classList.add("scrollable"),this.log=Object(s.b)("SCROLL"+(t?"-"+t:""),s.a.Error),e&&(Array.from(e.children).forEach(e=>this.container.append(e)),e.append(this.container))}setListeners(){window.addEventListener("resize",this.onScroll,{passive:!0}),this.container.addEventListener("scroll",this.onScroll,{passive:!0,capture:!0}),Object(a.a)(()=>{this.isHeavyAnimationInProgress=!0,this.onScrollMeasure&&(this.needCheckAfterAnimation=!0,window.cancelAnimationFrame(this.onScrollMeasure))},()=>{this.isHeavyAnimationInProgress=!1,this.needCheckAfterAnimation&&(this.onScroll(),this.needCheckAfterAnimation=!1)})}append(e){this.container.append(e)}scrollIntoViewNew(e,t,n,i,s,a,l){return Object(o.b)(this.container,e,t,n,i,s,a,l)}}class c extends r{constructor(e,t="",n=300,i){super(e,t),this.onScrollOffset=n,this.onAdditionalScroll=null,this.onScrolledTop=null,this.onScrolledBottom=null,this.lastScrollTop=0,this.lastScrollDirection=0,this.loadedAll={top:!0,bottom:!1},this.onScroll=()=>{if(this.isHeavyAnimationInProgress)return this.onScrollMeasure&&window.cancelAnimationFrame(this.onScrollMeasure),void(this.needCheckAfterAnimation=!0);(this.onScrolledTop||this.onScrolledBottom||this.splitUp||this.onAdditionalScroll)&&(this.onScrollMeasure&&window.cancelAnimationFrame(this.onScrollMeasure),this.onScrollMeasure=window.requestAnimationFrame(()=>{this.onScrollMeasure=0;const e=this.container.scrollTop;this.lastScrollDirection=this.lastScrollTop===e?0:this.lastScrollTop<e?1:-1,this.lastScrollTop=e,this.onAdditionalScroll&&0!==this.lastScrollDirection&&this.onAdditionalScroll(),this.checkForTriggers&&this.checkForTriggers()}))},this.checkForTriggers=()=>{if(!this.onScrolledTop&&!this.onScrolledBottom)return;if(this.isHeavyAnimationInProgress)return void this.onScroll();const e=this.container.scrollHeight;if(!e)return;const t=e-this.container.clientHeight,n=this.lastScrollTop;this.onScrolledTop&&n<=this.onScrollOffset&&this.lastScrollDirection<=0&&this.onScrolledTop(),this.onScrolledBottom&&t-n<=this.onScrollOffset&&this.lastScrollDirection>=0&&this.onScrolledBottom()},this.container.classList.add("scrollable-y"),this.setListeners()}setVirtualContainer(e){this.splitUp=e,this.log("setVirtualContainer:",e,this)}prepend(...e){(this.splitUp||this.padding||this.container).prepend(...e)}append(...e){(this.splitUp||this.padding||this.container).append(...e)}getDistanceToEnd(){return this.scrollHeight-Math.round(this.scrollTop+this.container.offsetHeight)}get isScrolledDown(){return this.getDistanceToEnd()<=1}set scrollTop(e){this.container.scrollTop=e}get scrollTop(){return this.container.scrollTop}get scrollHeight(){return this.container.scrollHeight}}class h extends r{constructor(e,t="",n=300,s=15,o=document.createElement("div")){if(super(e,t,o),this.onScrollOffset=n,this.splitCount=s,this.container=o,this.container.classList.add("scrollable-x"),!i.isTouchSupported){const e=e=>{!e.deltaX&&this.container.scrollWidth>this.container.clientWidth&&(this.container.scrollLeft+=e.deltaY/4,Object(l.f)(e))};this.container.addEventListener("wheel",e,{passive:!1})}}}},36:function(e,t,n){"use strict";function i(e){return Math.floor(Math.random()*e)}function s(){return""+i(4294967295)+i(16777215)}n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return s}))},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n(15),s=n(16),o=n(19),a=n(8);class l{constructor(e={}){const t=this.label=document.createElement("label");t.classList.add("checkbox-field"),e.restriction&&t.classList.add("checkbox-field-restriction"),e.round&&t.classList.add("checkbox-field-round"),e.disabled&&this.toggleDisability(!0);const n=this.input=document.createElement("input");let l;if(n.type="checkbox",e.name&&(n.id="input-"+e.name),e.checked&&(n.checked=!0),e.stateKey&&i.default.getState().then(t=>{const o=Object(s.d)(t,e.stateKey);let a;a=e.stateValues?1===e.stateValues.indexOf(o):o,this.setValueSilently(a),n.addEventListener("change",()=>{let t;t=e.stateValues?e.stateValues[n.checked?1:0]:n.checked,i.default.setByKey(e.stateKey,t)})}),e.text?(l=this.span=document.createElement("span"),l.classList.add("checkbox-caption"),Object(a._i18n)(l,e.text,e.textArgs)):t.classList.add("checkbox-without-caption"),t.append(n),e.toggle){t.classList.add("checkbox-field-toggle");const e=document.createElement("div");e.classList.add("checkbox-toggle"),t.append(e)}else{const e=document.createElement("div");e.classList.add("checkbox-box");const n=document.createElementNS("http://www.w3.org/2000/svg","svg");n.classList.add("checkbox-box-check"),n.setAttributeNS(null,"viewBox","0 0 24 24");const i=document.createElementNS("http://www.w3.org/2000/svg","use");i.setAttributeNS(null,"href","#check"),i.setAttributeNS(null,"x","-1"),n.append(i);const s=document.createElement("div");s.classList.add("checkbox-box-background");const o=document.createElement("div");o.classList.add("checkbox-box-border"),e.append(o,s,n),t.append(e)}l&&t.append(l),e.withRipple?(t.classList.add("checkbox-ripple","hover-effect"),Object(o.ripple)(t,void 0,void 0,!0)):e.withHover&&t.classList.add("hover-effect")}get checked(){return this.input.checked}set checked(e){this.setValueSilently(e);const t=new Event("change",{bubbles:!0,cancelable:!0});this.input.dispatchEvent(t)}setValueSilently(e){this.input.checked=e}toggleDisability(e){return this.label.classList.toggle("checkbox-disabled",e),()=>this.toggleDisability(!e)}}},47:function(e,t,n){"use strict";function i(e,t){return e.closest(t)}n.d(t,"a",(function(){return i}))},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(41),s=n(42),o=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{r(i.next(e))}catch(e){o(e)}}function l(e){try{r(i.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};var a=new class{constructor(){this.blobSupported=!0;try{Object(s.a)([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(e,t){return t instanceof Blob?new Promise((n,i)=>{let s=new FileReader;s.onload=function(t){let s=t.target.result,o=new Uint8Array(s);e.write(o).then(n,i)},s.readAsArrayBuffer(t)}):e.write(t)}getFakeFileWriter(e,t){const n=[];return{write:e=>o(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(e)})),truncate:()=>{n.length=0},finalize:(i=!0)=>{const o=Object(s.a)(n,e);return i&&t&&t(o),o}}}},l=function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function a(e){try{r(i.next(e))}catch(e){o(e)}}function l(e){try{r(i.throw(e))}catch(e){o(e)}}function r(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}r((i=i.apply(e,t||[])).next())}))};class r{constructor(e){this.dbName=e,this.useStorage=!0,i.a.test&&(this.dbName+="_test"),this.openDatabase(),r.STORAGES.push(this)}openDatabase(){return this.openDbPromise?this.openDbPromise:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}save(e,t){return this.useStorage?this.timeoutOperation(n=>n.put("/"+e,t)):Promise.reject("STORAGE_OFFLINE")}saveFile(e,t){return this.useStorage?(t instanceof Blob||(t=Object(s.a)(t)),this.save(e,new Response(t)).then(()=>t)):Promise.reject("STORAGE_OFFLINE")}getFile(e,t="blob"){return this.useStorage?this.timeoutOperation(n=>l(this,void 0,void 0,(function*(){const i=yield n.match("/"+e);if(!i||!n)throw"NO_ENTRY_FOUND";return i[t]()}))):Promise.reject("STORAGE_OFFLINE")}timeoutOperation(e){return new Promise((t,n)=>l(this,void 0,void 0,(function*(){let i=!1;const s=setTimeout(()=>{n(),i=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw"no cache?";const s=yield e(n);if(i)return;t(s)}catch(e){n(e)}clearTimeout(s)})))}getFileWriter(e,t){const n=a.getFakeFileWriter(t,t=>this.saveFile(e,t));return Promise.resolve(n)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}r.STORAGES=[]},72:function(e,t,n){"use strict";n.r(t);var i=n(17),s=n(32),o=n(50),a=n(15),l=n(12),r=n(14),c=n(7),h=n(28),d=n(18),u=n(37),p=n(13),b=n(0),m=n(35),f=n(20),g=n(2),v=n(41),L=n(8),S=n(25),E=n(19),w=n(47),y=n(1),k=n(36),O=n(62),T=n(63),x=n(79),A=n(69);let j,F=null;const C=new h.a("page-sign",!0,()=>{v.a.test&&(o.b.push({name:"Test Country",phoneCode:"999 66",code:"TC",emoji:"🤔",pattern:"999 66 XXX XX"}),console.log("Added test country to list!"));const e=o.b.filter(e=>e.emoji).sort((e,t)=>e.name.localeCompare(t.name));let t=null;const h=document.createElement("div");h.classList.add("input-wrapper");const E=new d.b({label:"Login.CountrySelectorLabel",name:Object(k.b)(),plainText:!0});E.container.classList.add("input-select");const D=E.input;D.autocomplete=Object(k.b)();const N=document.createElement("div");N.classList.add("select-wrapper","z-depth-3","hide");const H=document.createElement("span");H.classList.add("arrow","arrow-down"),E.container.append(H);const M=document.createElement("ul");N.appendChild(M);new s.b(N);let _=()=>{_=null,e.forEach(e=>{const t=e.emoji,n=[];e.phoneCode.split(" and ").forEach(i=>{const s=document.createElement("li"),o=document.createElement("span"),a=r.a.wrapRichText(t);s.appendChild(o),o.outerHTML=a,s.append(e.name);const l=document.createElement("span");l.classList.add("phone-code"),l.innerText="+"+i,s.appendChild(l),n.push(s),M.append(s)}),e.li=n}),M.addEventListener("mousedown",e=>{if(0!==e.button)return;let t=e.target;"LI"!==t.tagName&&(t=Object(w.a)(t,"LI")),I(t)}),E.container.appendChild(N)};const I=n=>{const i=n.childNodes[1].textContent,s=n.querySelector(".phone-code").innerText;D.value=i,t=e.find(e=>e.name===i),U.value=W=s,B(),setTimeout(()=>U.focus(),0)};let P;_(),D.addEventListener("focus",(function(t){_?_():e.forEach(e=>{e.li.forEach(e=>e.style.display="")}),clearTimeout(P),P=void 0,N.classList.remove("hide"),N.offsetWidth,N.classList.add("active"),E.select(),Object(m.b)(C.pageEl.parentElement.parentElement,D,"start",4),setTimeout(()=>{V||(document.addEventListener("mousedown",R,{capture:!0}),V=!0)},0)}));let V=!1;const R=e=>{Object(y.a)(e.target,"input-select")||e.target!==D&&(B(),document.removeEventListener("mousedown",R,{capture:!0}),V=!1)},B=()=>{void 0===P&&(N.classList.remove("active"),P=window.setTimeout(()=>{N.classList.add("hide"),P=void 0},200))};D.addEventListener("keyup",(function(t){if(t.ctrlKey||"Control"===t.key)return!1;let n=this.value.toLowerCase(),i=[];e.forEach(e=>{let t=-1!==e.name.toLowerCase().indexOf(n);e.li.forEach(e=>e.style.display=t?"":"none"),t&&i.push(e)}),0===i.length?e.forEach(e=>{e.li.forEach(e=>e.style.display="")}):1===i.length&&"Enter"===t.key&&I(i[0].li[0])})),H.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),D.matches(":focus")?D.blur():D.focus()}));let K=!1,W="";const z=new d.b({label:"Login.PhoneLabel",plainText:!0,name:"phone"});let U=z.input;U.type="tel",U.autocomplete="rr55RandomRR55",U.addEventListener("input",(function(e){this.classList.remove("error"),S.b.loadLottieWorkers();const n=this.value;let s,o;if(Math.abs(n.length-W.length)>1&&!K&&b.isAppleMobile&&(this.value=W+n),K=!1,z.setLabel(),"+"===this.value.replace(/\++/,"+"))this.value="+";else{const e=Object(i.c)(this.value);s=e.formatted,o=e.country,this.value=W=s?"+"+s:""}let a=o?o.name:"";a===D.value||t&&o&&t.phoneCode===o.phoneCode||(D.value=a,t=o),o||this.value.length-1>1?F.style.visibility="":F.style.visibility="hidden"})),U.addEventListener("paste",e=>{K=!0}),U.addEventListener("keypress",(function(e){return F.style.visibility||"Enter"!==e.key?!/\D/.test(e.key)||e.metaKey||e.ctrlKey||"+"===e.key&&e.shiftKey?void 0:(e.preventDefault(),!1):X()}));const G=new u.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0});G.input.addEventListener("change",()=>{const e=G.checked;a.default.pushToState("keepSigned",e),O.a.toggleStorage(e),T.a.toggleStorage(e),l.a.toggleStorage(e)}),a.default.getState().then(e=>{G.checked=e.keepSigned}),F=Object(p.a)("btn-primary btn-color-primary",{text:"Login.Next"}),F.style.visibility="hidden";const X=e=>{e&&Object(c.f)(e);const t=Object(c.A)([F,j],!0);Object(c.z)(F,Object(L.i18n)("PleaseWait")),Object(i.f)(F);let s=U.value;l.a.invokeApi("auth.sendCode",{phone_number:s,api_id:g.a.id,api_hash:g.a.hash,settings:{_:"codeSettings"}}).then(e=>{Promise.all([n.e(3),n.e(14)]).then(n.bind(null,82)).then(t=>t.default.mount(Object.assign(e,{phone_number:s})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":z.setError(),Object(c.z)(z.label,Object(L.i18n)("Login.PhoneLabelInvalid")),U.classList.add("error"),Object(c.z)(F,Object(L.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),F.innerText=e.type}})};Object(c.b)(F,X),j=Object(p.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});j.addEventListener("click",()=>{x.default.mount()}),h.append(E.container,z.container,G.label,F,j);const q=document.createElement("h4");Object(L._i18n)(q,"Login.Title");const $=document.createElement("div");$.classList.add("subtitle"),Object(L._i18n)($,"Login.StartText"),C.pageEl.querySelector(".container").append(q,$,h);f.isTouchSupported||setTimeout(()=>{U.focus()},0),Object(A.a)(h),l.a.invokeApi("help.getNearestDc").then(e=>{const t=[1,2,3,4,5],n=[e.this_dc];let i;return e.nearest_dc!==e.this_dc&&(i=l.a.getNetworker(e.nearest_dc).then(()=>{n.push(e.nearest_dc)})),(i||Promise.resolve()).then(()=>{const e=()=>{const i=t.shift();i&&setTimeout(()=>{l.a.getNetworker(i,{fileDownload:!0}).finally(e)},n.includes(i)?0:3e3)};e()}),e}).then(n=>{let i=e.find(e=>e.code===n.country);i&&(D.value.length||U.value.length||(D.value=i.name,t=i,U.value=W="+"+i.phoneCode.split(" and ").shift()))})},()=>{F&&(Object(c.z)(F,Object(L.i18n)("Login.Next")),Object(E.ripple)(F,void 0,void 0,!0),F.removeAttribute("disabled")),j&&j.removeAttribute("disabled"),a.default.pushToState("authState",{_:"authStateSignIn"})});t.default=C}}]);
//# sourceMappingURL=18.1bea5879062281d6db9a.chunk.js.map