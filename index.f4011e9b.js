function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function n(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t,r,a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(t=a.next()).done)&&(o.push(t.value),!n||o.length!==n);i=!0);}catch(e){l=!0,r=e}finally{try{i||null==a.return||a.return()}finally{if(l)throw r}}return o}}(e,n)||r(e,n)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n){return function(n){if(Array.isArray(n))return e(n)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||r(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){if(n){if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);if("Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}}var a,o=document.querySelector("table"),i=o.querySelector("thead tr"),l=o.querySelector("tbody"),c=t(i.children).map(function(e){return e.textContent});function u(e,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=document.querySelector("tbody");r?e.reverse():function(e,n){switch(e){case"Name":case"Position":case"Office":return n.sort(function(n,t){return n[e].localeCompare(t[e])});case"Age":return n.sort(function(n,t){return+n[e]-+t[e]});case"Salary":return n.sort(function(n,t){return+n[e].slice(1).replace(",","")-+t[e].slice(1).replace(",","")})}}(n,e),t(a.children).forEach(function(e){e.remove()}),e.map(function(e){return"\n    <tr>\n    <td>".concat(e.Name," </td>\n    <td>").concat(e.Position," </td>\n    <td>").concat(e.Office," </td>\n    <td>").concat(e.Age," </td>\n    <td>").concat(e.Salary," </td>\n    </tr>\n    ")}).forEach(function(e){a.insertAdjacentHTML("beforeend",e)})}var d=(a=[],function(e){return a.push(e),a});function s(e){return"$"+(+t(e).filter(function(e){return+e>=0}).join("")).toLocaleString("en-US")}function f(e,n){var r=+t(e).filter(function(e){return+e>=0}).join("");return r<18||r>90?n:r}i.addEventListener("click",function(e){var n=e.target.textContent,r=t(l.children).map(function(e){for(var n={},t=0;t<e.children.length;t++)n[c[t]]=e.children[t].textContent;return n}),a=t(d(n));a[a.length-2]===n?u(r,n,!0):u(r,n)}),l.addEventListener("click",function(e){t(l.children).forEach(function(e){e.classList.remove("active")}),e.target.closest("tr").classList.add("active")}),l.addEventListener("dblclick",function(e){var n={elem:e.target,data:e.target.textContent},t=document.createElement("input"),r=document.querySelector("body");t.style.maxWidth=e.target.clientWidth+"px",t.value=n.data.trim(),e.target.textContent="",e.target.append(t),t.focus();var a=!1,o=!1;t.value.includes("$")&&t.closest(".active").children[4]&&(a=!0,t.value=t.value.slice(1)),+t.value&&"number"==typeof+t.value&&t.closest(".active").children[3]&&(o=!0),r.addEventListener("click",function(e){if("INPUT"!==e.target.tagName){if(!t.value){n.elem.innerText=n.data;return}a?n.elem.innerText=s(t.value):o?n.elem.innerText=f(t.value,n.data):n.elem.innerText=t.value}}),t.addEventListener("keyup",function(e){if("Enter"===e.code){if(!t.value){n.elem.innerText=n.data;return}a?n.elem.innerText=s(t.value):o?n.elem.innerText=f(t.value):n.elem.innerText=t.value}})}),function(e){e.insertAdjacentHTML("afterend",'\n      <form\n      action="#"\n      class="new-employee-form"\n    >\n      <label> Name:\n        <input\n          type="text"\n          data-qa="name"\n          required\n        >\n      </label>\n      <label> Position:\n        <input\n          type="text"\n          data-qa="position"\n          required\n        >\n      </label>\n      <label>\n        Office:\n        <select\n          name="office"\n          data-qa="office"\n          required\n        >\n          <option\n            value="Tokyo"\n            selected\n          >Tokyo</option>\n          <option value="London">London</option>\n          <option value="New York">New York</option>\n          <option value="Edinburgh">Edinburgh</option>\n          <option value="Singapure">Singapure</option>\n          <option value="San Francisco">San Francisco</option>\n        </select>\n      </label>\n      <label> Age:\n        <input\n          type="number"\n          data-qa="age"\n          required\n        >\n      </label>\n      <label> Salary\n        <input\n          type="number"\n          data-qa="salary"\n          required\n        >\n      </label>\n      <button type="submit">Save to table</button>\n    </form>\n  ');var n=document.querySelector("form");n.style.opacity=0,n.style.transition="all 1.0s",setTimeout(function(){n.style.opacity=1},500)}(o);var m=document.querySelector("form");m.addEventListener("submit",function(e){e.preventDefault();var r=t(m.elements),a=[];r.forEach(function(e){a.push(e.value)}),a.splice(-1);var i=n((d=(u=n(a,4))[0],s=u[3],f='\n     <div class="notification success" data-qa="notification">\n       <h1 class="title">Sucsess</h1>\n       <p>Employee has been added</p>\n    </div>\n    ',d.length<4?[!1,f='\n    <div class="notification error" data-qa="notification">\n      <h1 class="title">Error</h1>\n      <p><b>Name</b> value less than 4 letters</p>\n   </div>\n   ']:18>+s||+s>90?[!1,f='\n    <div class="notification error" data-qa="notification">\n      <h1 class="title">Error</h1>\n      <p><b>Age</b> value is less than 18 or more than 90</p>\n   </div>\n   ']:[!0,f]),2),l=i[0],c=i[1];if(l){o.insertAdjacentHTML("afterend",c);var u,d,s,f,v,p,y=document.querySelector(".notification");y.style.zIndex=99,setTimeout(function(){y.remove()},2e3),v=document.querySelector("table tbody"),p=document.createElement("tr"),a.forEach(function(e,n,t){n===t.length-1&&(e="$"+(+e).toLocaleString("en-US")),p.insertAdjacentHTML("beforeend","<td>".concat(e,"</td>"))}),v.insertAdjacentElement("beforeend",p),m.reset()}else{o.insertAdjacentHTML("afterend",c);var b=document.querySelector(".notification");b.style.zIndex=99,setTimeout(function(){b.remove()},2e3)}});
//# sourceMappingURL=index.f4011e9b.js.map
