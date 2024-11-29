(()=>{"use strict";var e={652:(e,t,o)=>{o.r(t)},540:()=>{document.querySelectorAll(".question").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(".question.active");t&&t!==e&&(t.classList.toggle("active"),t.nextElementSibling.style.maxHeight=" 0"),e.classList.toggle("active");const o=e.nextElementSibling;e.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight="0"}))}))},743:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggleDarkMode=t.animate=void 0,t.animate=(e,t,o)=>{e.classList.contains("hidden")?(e.style.animationName=t[1],e.style.animationDuration=o):(e.style.animationName=t[0],e.style.animationDuration=o)},t.toggleDarkMode=()=>{const e="true"===localStorage.getItem("darkMode");document.documentElement.classList.toggle("dark",!e),localStorage.setItem("darkMode",(!e).toString())};const o=document.querySelectorAll(".darkModeToggle");null==o||o.forEach((e=>e.addEventListener("click",t.toggleDarkMode)));const n=document.querySelectorAll(".toggle-menu"),l=document.querySelectorAll(".toggle-login"),r=document.querySelector(".menu"),i=document.querySelector(".login-overlay");null==n||n.forEach((e=>{e.addEventListener("click",(()=>{r.classList.toggle("-translate-x-full"),document.documentElement.classList.toggle("overflow-hidden"),r.classList.contains("-translate-x-full")?r.style.animationName="fadeInLeftBig":r.style.animationName="fadeOutLeftBig"}))})),l.forEach((e=>{e.addEventListener("click",(()=>{i.classList.toggle("opacity-0"),i.classList.toggle("hidden"),(0,t.animate)(i,["show","vanish"],"1s")}))})),window.addEventListener("click",(e=>{i&&!i.classList.contains("hidden")&&(e.target.closest(".toggle-login, .login-content")||(i.classList.add("opacity-0"),i.classList.add("hidden"),(0,t.animate)(i,["show","vanish"],"1s")))}));const s=document.getElementById("scroll-top");null==s||s.addEventListener("click",(()=>{window.scroll({top:0,behavior:"smooth"})}))},406:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=o(335),l=document.querySelectorAll(".splide-school-image"),r=document.querySelectorAll(".school-pagination-checkbox");for(var i=0;i<l.length;i++){const e=new Splide(l[i],{perPage:1,arrows:!1,width:"30rem",fixedHeight:"max-content"}).mount(),t=r[i].querySelectorAll(".p-checkbox");(0,n.handleNestedCheckboxes)(t,e)}},335:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sliderEvent=function(e,t,o){e.addEventListener("click",(()=>{switch(o){case"next":t.go(">");break;case"prev":t.go("-1")}}))},t.handleNestedCheckboxes=function(e,t){e.forEach(((o,n)=>{o.addEventListener("change",(()=>{t.go(n),e.forEach((e=>{e!==o&&(e.checked=!1)}))}))}))}}},t={};function o(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{o(652),o(743),o(406),o(540);const e=o(335),t=new Splide(".splide-schools",{perMove:1,perPage:1,mediaQuery:"min",fixedWidth:"70%",width:"100%",gap:"1.5rem",arrows:!1,autoplay:!0,breakpoints:{850:{fixedWidth:"100%"}}}).mount(),n=new Splide(".splide-schools-secondary",{perMove:1,perPage:1,mediaQuery:"min",fixedWidth:"70%",width:"100%",gap:"1.5rem",arrows:!1,breakpoints:{850:{fixedWidth:"100%"}}}).mount(),l=document.querySelector(".ss-left"),r=document.querySelector(".ss-right"),i=document.querySelectorAll(".ss-wrapper"),s=document.querySelectorAll(".splide-schools-data");(0,e.sliderEvent)(r,n,"next"),(0,e.sliderEvent)(l,n,"prev"),i.forEach(((t,o)=>{const n=new Splide(s[o],{perMove:1,perPage:1,gap:"1.5rem",arrows:!1,autoPlay:!0,drag:!1,speed:"1"}).mount();t.querySelectorAll(".slide-ss-item").forEach(((t,o)=>{const l=t.querySelectorAll(".ss-p-checkbox");(0,e.handleNestedCheckboxes)(l,n)}))})),new Splide(".splide-title",{mediaQuery:"min",perPage:2,perMove:1,gap:"1rem",arrows:!1,breakpoints:{550:{perPage:3},680:{perPage:4},840:{destroy:!0}}}).mount(),new Splide(".splide-title-secondary",{mediaQuery:"min",perPage:2,perMove:1,fixedWidth:"100%",arrows:!1,breakpoints:{550:{perPage:3},840:{destroy:!0}}}).mount();const a=document.querySelectorAll(".splide__custom__arrow--next"),c=document.querySelectorAll(".splide__custom__arrow--prev");a.forEach((o=>{(0,e.sliderEvent)(o,t,"next")})),c.forEach((o=>{(0,e.sliderEvent)(o,t,"prev")}));const d=()=>{(function(){const e=document.querySelector(".booking-animation");return!!e&&e.getBoundingClientRect().y<70})()&&window.removeEventListener("scroll",d)};function u(e){return Math.floor(Math.random()*e)}window.addEventListener("scroll",d);let m=window.innerWidth>850?85.47:38.39;document.querySelectorAll(".list").forEach((e=>{const t=e.querySelectorAll("li"),o=t.length;let n=u(o);setInterval((()=>{const e=u(o);let l=e*m;setTimeout((()=>{t.forEach((e=>{e.style.transform=`translateY(-${l}px)`}))}),1e3),n=e}),2e3)})),window.addEventListener("resize",(()=>{const e=window.matchMedia("(max-width: 850px)");m=e.matches?38.39:85.47}))})()})();