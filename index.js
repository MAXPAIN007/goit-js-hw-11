import{S as g,i as n}from"./assets/vendor-B2mb6eXk.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function h(r){const s="https://pixabay.com/api/",a="50197022-5c303e37ac1e7741936867a9a",i=new URLSearchParams({key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=await fetch(`${s}?${i}`);if(!e.ok)throw new Error(e.statusText);return(await e.json()).hits}const L=new g(".gallery a",{captionsData:"alt",captionDelay:200});function v(r,s){const a=r.map(({webformatURL:i,largeImageURL:e,type:t,tags:l,likes:d,views:p,comments:f,downloads:y})=>`<li class="gallery-item js-gallery-item">
  <a class="gallery-link js-gallery-link" href="${e}">
    <div class="image-wrapper">
      <img
        class="gallery-image js-gallery-image"
        src="${i}"
        data-source="${t}"
        alt="${l}"
      />
    </div>
  
  <div>
    <ul class="wrapper-box">
      <li class="list-item">
        <p class="value-title">Likes</p>
        <p class="label" data-likes>${d}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Views</p>
        <p class="label" data-views>${p}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Comments</p>
        <p class="label" data-comments>${f}</p>
      </li>
      <li class="list-item">
        <p class="value-title">Downloads</p>
        <p class="label" data-downloads>${y}</p>
      </li>
    </ul>
  </div>
  </a>
</li>`).join("");s.insertAdjacentHTML("beforeend",a),L.refresh()}function b(r){r.innerHTML=""}function w(r){r.classList.remove("is-hidden")}function c(r){r.classList.add("is-hidden")}const m=document.querySelector(".form"),S=document.querySelector('[name="search-text"]'),u=document.querySelector(".gallery"),o=document.querySelector(".loader");m.addEventListener("submit",$);function $(r){r.preventDefault();const s=S.value.trim();if(b(u),w(o),!s)return c(o),n.error({title:"Caution",message:"Please enter a search query.",position:"topRight",timeout:3e3});h(s).then(a=>{v(a,u)}).catch(a=>{n.error({title:"Caution",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3})}).finally(()=>{c(o),m.reset()})}
//# sourceMappingURL=index.js.map
