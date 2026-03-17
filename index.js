import{a as d,S as u,i as f}from"./assets/vendor-BkC4bTqC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const y="55010344-80b9dd901c390fd896df977ab",v="https://pixabay.com/api/";async function m(a){try{return(await d.get(v,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}catch(r){throw r}}const n=document.querySelector(".gallery"),p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(a){const r=a.map(t=>`
            <li class="gallery-item">
                <a href="${t.largeImageURL}">
                    <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" />
                    <div class="info">
                        <div class="stat">
                            <div class="label">Likes</div>
                            <div class="value">${t.likes}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Views</div>
                            <div class="value">${t.views}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Comments</div>
                            <div class="value">${t.comments}</div>
                        </div>
                        <div class="stat">
                            <div class="label">Downloads</div>
                            <div class="value">${t.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>`).join("");n.insertAdjacentHTML("beforeend",r),p.refresh()}function g(){n.innerHTML=""}const c=document.querySelector(".loader");function b(){c.style.display="block"}function L(){c.style.display="none"}const l=document.querySelector(".form");l.addEventListener("submit",async a=>{a.preventDefault();const r=l.elements["search-text"].value.trim();if(r){g(),b();try{const t=await m(r);t.hits.length===0?f.error({message:"Sorry, there are no images matching your search query. Please try again!"}):h(t.hits)}catch{}finally{L()}}});
//# sourceMappingURL=index.js.map
