(()=>{"use strict";var e={652:(e,t,o)=>{o.r(t)},796:(e,t,o)=>{t.KG=t._R=void 0,o(652),t._R=()=>{const e="true"===localStorage.getItem("darkMode");document.documentElement.classList.toggle("dark",!e),localStorage.setItem("darkMode",(!e).toString())},t.KG=()=>{const e="true"===localStorage.getItem("darkMode");document.documentElement.classList.toggle("dark",e)};const l=document.querySelectorAll(".darkModeToggle");null==l||l.forEach((e=>e.addEventListener("click",t._R))),(0,t.KG)(),document.querySelectorAll(".question").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(".question.active");t&&t!==e&&(t.classList.toggle("active"),t.nextElementSibling.style.maxHeight=" 0"),e.classList.toggle("active");const o=e.nextElementSibling;e.classList.contains("active")?o.style.maxHeight=o.scrollHeight+"px":o.style.maxHeight="0"}))}));const n=new Splide(".splide-schools",{perMove:1,perPage:1,arrows:!1}).mount();new Splide(".splide-title",{mediaQuery:"min",perPage:2,perMove:1,gap:"1rem",arrows:!1,breakpoints:{550:{perPage:4},840:{destroy:!0}}}).mount();const r=document.querySelectorAll(".splide__custom__arrow--next"),c=document.querySelectorAll(".splide__custom__arrow--prev");r.forEach((e=>{e.addEventListener("click",(()=>{n.go(">")}))})),c.forEach((e=>{e.addEventListener("click",(()=>{n.go("-1")}))}));const s=document.querySelectorAll(".toggle-menu"),i=document.querySelectorAll(".toggle-login"),d=document.querySelector(".menu"),a=document.querySelector(".login-overlay");null==s||s.forEach((e=>{e.addEventListener("click",(()=>{null==d||d.classList.toggle("hidden"),document.documentElement.classList.toggle("overflow-hidden")}))})),i.forEach((e=>{e.addEventListener("click",(()=>{null==a||a.classList.toggle("hidden")}))})),window.addEventListener("click",(e=>{(null==a?void 0:a.classList.contains("hidden"))||e.target.closest(".toggle-login")||null==a||a.classList.add("hidden")}))}},t={};function o(l){var n=t[l];if(void 0!==n)return n.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,o),r.exports}o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(796)})();