(()=>{"use strict";var e={652:(e,t,n)=>{n.r(t)},743:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggleDarkMode=void 0,t.toggleDarkMode=()=>{const e="true"===localStorage.getItem("darkMode");document.documentElement.classList.toggle("dark",!e),localStorage.setItem("darkMode",(!e).toString())};const n=document.querySelectorAll(".darkModeToggle");null==n||n.forEach((e=>e.addEventListener("click",t.toggleDarkMode)));const o=document.querySelectorAll(".toggle-menu"),i=document.querySelectorAll(".toggle-login"),s=document.querySelector(".menu"),l=document.querySelector(".login-overlay");null==o||o.forEach((e=>{e.addEventListener("click",(()=>{null==s||s.classList.toggle("hidden"),document.documentElement.classList.toggle("overflow-hidden")}))})),i.forEach((e=>{e.addEventListener("click",(()=>{null==l||l.classList.toggle("hidden")}))})),window.addEventListener("click",(e=>{(null==l?void 0:l.classList.contains("hidden"))||e.target.closest(".toggle-login")||null==l||l.classList.add("hidden")}));const r=document.getElementById("scroll-top");null==r||r.addEventListener("click",(()=>{window.scroll({top:0,behavior:"smooth"})}))}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(652),n(743),document.querySelectorAll(".question").forEach((e=>{e.addEventListener("click",(()=>{const t=document.querySelector(".question.active");t&&t!==e&&(t.classList.toggle("active"),t.nextElementSibling.style.maxHeight=" 0"),e.classList.toggle("active");const n=e.nextElementSibling;e.classList.contains("active")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight="0"}))}));const e=new Splide(".splide-schools",{perMove:1,perPage:1,arrows:!1}).mount();new Splide(".splide-title",{mediaQuery:"min",perPage:2,perMove:1,gap:"1rem",arrows:!1,breakpoints:{550:{perPage:3},680:{perPage:4},840:{destroy:!0}}}).mount();var t=document.querySelectorAll(".splide-school-image");const o=document.querySelectorAll(".school-pagination-checkbox");for(var i=0;i<t.length;i++){const e=new Splide(t[i],{perPage:1,arrows:!1,width:"30rem",fixedHeight:"max-content"}).mount(),n=o[i].querySelectorAll(".p-checkbox");n.forEach(((t,o)=>{t.addEventListener("change",(()=>{e.go(o),n.forEach((e=>{e!==t&&(e.checked=!1)}))}))}))}const s=document.querySelectorAll(".splide__custom__arrow--next"),l=document.querySelectorAll(".splide__custom__arrow--prev");s.forEach((t=>{t.addEventListener("click",(()=>{e.go(">")}))})),l.forEach((t=>{t.addEventListener("click",(()=>{e.go("-1")}))}));class r{constructor(e,t,n={}){this.element=e,this.texts=t,this.element=e,this.texts=t,this.currentIndex=0,this.options=Object.assign({minIterations:5,maxIterations:10,iterationInterval:300,pauseDuration:2e3,changeTextDuration:150},n)}changeText(e){this.element.style.opacity="0",this.element.style.transform="translateY(-20px)",setTimeout((()=>{this.element.textContent=e,this.element.style.opacity="1",this.element.style.transform="translateY(0)"}),this.options.changeTextDuration)}iterateTexts(){let e=0;const t=Math.floor(Math.random()*(this.options.maxIterations-this.options.minIterations+1))+this.options.minIterations,n=Math.floor(Math.random()*this.texts.length),o=setInterval((()=>{this.changeText(this.texts[this.currentIndex]),this.currentIndex=(this.currentIndex+1)%this.texts.length,e++,e>=t&&(clearInterval(o),this.changeText(this.texts[n]),setTimeout((()=>this.startAnimation()),this.options.pauseDuration))}),this.options.iterationInterval)}startAnimation(){this.iterateTexts()}}const a=new r(document.getElementById("animated-text-1"),["Hello","Welcome","Changing","Text","Animation"],{minIterations:5,maxIterations:10}),c=new r(document.getElementById("animated-text-2"),["Reusable","Flexible","Random","Stop","Example"],{minIterations:3,maxIterations:7}),d=()=>{(function(){const e=document.querySelector(".booking-animation");return!!e&&e.getBoundingClientRect().y<70})()&&(c.startAnimation(),a.startAnimation(),window.removeEventListener("scroll",d))};window.addEventListener("scroll",d);const m=document.querySelectorAll(".filter-checkbox"),u=document.querySelectorAll(".remove-filter-btn");m.forEach(((e,t)=>{e.addEventListener("change",(()=>{u[t].classList.toggle("hidden"),u[t].addEventListener("click",(()=>{e.checked=!1,u[t].classList.add("hidden")}))}))}))})()})();