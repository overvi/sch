(()=>{"use strict";const e=document.querySelectorAll(".filter-checkbox"),t=document.querySelectorAll(".remove-filter-btn"),l=document.querySelector(".close-all-filters");let s=0;e.forEach(((d,n)=>{const c=()=>{d.checked?t[n].classList.remove("hidden"):(t[n].classList.add("hidden"),a())},a=()=>{t[n].classList.contains("hide-variant")&&(e[n].parentElement.classList.add("hidden"),s+=1),s==e.length&&(null==l||l.classList.add("hidden"))};d.checked&&c(),d.addEventListener("change",(()=>{c()})),t[n].addEventListener("click",(()=>{d.checked=!1,c()}))})),null==l||l.addEventListener("click",(()=>{e.forEach(((e,l)=>{var s;e.checked=!1,t[l].classList.add("hidden"),null===(s=e.parentElement)||void 0===s||s.classList.add("hidden")})),l.classList.add("hidden")}));const d=document.querySelector(".filters-menu");document.querySelectorAll(".toggle-filters-menu").forEach((e=>{e.addEventListener("click",(()=>{d.classList.toggle("-translate-x-full"),document.documentElement.classList.toggle("overflow-hidden"),d.classList.contains("-translate-x-full")?d.style.animationName="fadeInLeftBig":d.style.animationName="fadeOutLeftBig"}))}))})();