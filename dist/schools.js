(()=>{"use strict";const e=document.querySelectorAll(".sort-button"),t=document.querySelectorAll(".sort-content");e.forEach(((e,t)=>{e.addEventListener("click",(()=>{e.classList.toggle("hidden")}))})),t.forEach(((t,c)=>{t.addEventListener("dblclick",(()=>{e[c].classList.remove("hidden")}))}))})();