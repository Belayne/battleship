(()=>{var t,e,r={943:(t,e,r)=>{const o=r(641).Ship;t.exports={Gameboard:class{constructor(){this.fleet=[],this.attacks=[]}placeShip(t,e,r=!1){this.#t(t),this.#e(e);const n=new o(t),a=[];for(let o=0;o<t;o++){let t=r?[e[0],e[1]+o]:[e[0]+o,e[1]];this.#e(t),a.push(t)}this.fleet.push({ship:n,shipCoordinates:a})}receiveAttack(t){const[e,r]=t;let o=!1;for(const n of this.fleet)for(const[a,s]of n.shipCoordinates)if(a===e&&s===r)return o=!0,n.ship.hit(),this.attacks.push([t,o]),o;return this.attacks.push([t,o]),o}isFleetSunk(){return this.fleet.every((t=>t.ship.isSunk()))}#t(t){if(t>5||t<2)throw new Error("Invalid ship length")}#e(t){const[e,r]=t;if(e<0||e>9||r<0||r>9)throw new Error("Invalid coordinates (out of range)");this.fleet.forEach((t=>{for(const[o,n]of t.shipCoordinates)if(o===e&&n===r)throw new Error("Invalid coordinates (ship already present)")}))}}}},195:(t,e,r)=>{const o=r(943).Gameboard;class n{constructor(t){this.name=t,this.board=new o}randomizeShips(){this.board.fleet=[];const t=[[1,5],[2,4],[3,3],[4,2]];for(const[e,r]of t)for(let t=0;t<e;t++)try{const t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random()),o=!!Math.floor(Math.random());this.board.placeShip(r,[t,e],o)}catch(e){t--}}reset(){this.board.fleet=[],this.board.attacks=[]}}t.exports={Player:n,ComputerPlayer:class extends n{constructor(){super("Opponent"),this.playedCoordinates=[]}randomAttack(){const t={};do{t.x=Math.floor(10*Math.random()),t.y=Math.floor(10*Math.random())}while(this.playedCoordinates.some((e=>e[0]==t.x&&e[1]==t.y)));return this.playedCoordinates.push([t.x,t.y]),[t.x,t.y]}reset(){super.reset(),this.playedCoordinates=[]}}}},641:t=>{t.exports={Ship:class{constructor(t){this.length=t,this.hits=0}hit(){this.hits++}isSunk(){return this.hits>=this.length}}}}},o={};function n(t){var e=o[t];if(void 0!==e)return e.exports;var a=o[t]={id:t,exports:{}};return r[t](a,a.exports,n),a.exports}n.m=r,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.f={},n.e=t=>Promise.all(Object.keys(n.f).reduce(((e,r)=>(n.f[r](t,e),e)),[])),n.u=t=>t+".bundle.js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="battleship:",n.l=(r,o,a,s)=>{if(t[r])t[r].push(o);else{var i,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==e+a){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=r),t[r]=[o];var h=(e,o)=>{i.onerror=i.onload=null,clearTimeout(p);var n=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),n&&n.forEach((t=>t(o))),e)return e(o)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),c&&document.head.appendChild(i)}},n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={524:0};n.f.j=(e,r)=>{var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((r,n)=>o=t[e]=[r,n]));r.push(o[2]=a);var s=n.p+n.u(e),i=new Error;n.l(s,(r=>{if(n.o(t,e)&&(0!==(o=t[e])&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+s+")",i.name="ChunkLoadError",i.type=a,i.request=s,o[1](i)}}),"chunk-"+e,e)}};var e=(e,r)=>{var o,a,[s,i,c]=r,d=0;if(s.some((e=>0!==t[e]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);c&&c(n)}for(e&&e(r);d<s.length;d++)a=s[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0},r=self.webpackChunkbattleship=self.webpackChunkbattleship||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var t=n(195);function e(t,e,r){const o=document.createElementNS("http://www.w3.org/2000/svg","rect"),n=r/11;return o.setAttribute("width",n),o.setAttribute("height",n),o.setAttribute("ry",n/11),o.setAttribute("rx",n/11),o.setAttribute("data-x",""+(t-1)),o.setAttribute("data-y",""+(e-1)),o.setAttribute("x",t*n),o.setAttribute("y",e*n),o}function r(t,r,n=!1){r.querySelector("svg")&&r.querySelector("svg").remove();const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.setAttribute("width",t),s.setAttribute("height",t),s.setAttribute("xmlns","http://www.w3.org/2000/svg");for(let r=0;r<11;r++)for(let i=0;i<11;i++){if(0===r&&0!=i){const e=o(i,t);s.appendChild(e)}if(0===i&&0!=r){const e=a(r,t);s.appendChild(e)}if(r>0&&i>0){const o=e(r,i,t);n&&o.classList.add("opponent"),s.appendChild(o)}}r.append(s)}function o(t,e){const r=document.createElementNS("http://www.w3.org/2000/svg","text"),o=e/11;return r.setAttribute("x",t*o+o/2-4),r.setAttribute("y",o/2),r.textContent=String.fromCharCode(64+t),r}function a(t,e){const r=document.createElementNS("http://www.w3.org/2000/svg","text"),o=e/11;return r.setAttribute("y",t*o+o/2+7),r.setAttribute("x",o/2),r.textContent=t,r}function s(t,e){for(const[[r,o],n]of t){const t=e.querySelector(`rect[data-x='${r}'][data-y='${o}']`);n?t.classList.add("hit"):t.classList.add("miss"),t.classList.add("attacked")}}n.e(511).then(n.bind(n,511)),function(){const e=document.querySelector("#firstPlayerGrid"),o=document.querySelector("#secondPlayerGrid"),n=document.querySelector("#randomizeBtn"),a=document.querySelector("#startBtn"),i=new t.Player("Player"),c=new t.ComputerPlayer;let d=i,l=i,u=c;const h=()=>{var t,n;e.querySelector("h2").textContent=l.name,r(500,e),t=l.board.fleet,n=e,t.forEach((t=>{for(const[e,r]of t.shipCoordinates)n.querySelector(`rect[data-x='${e}'][data-y='${r}']`).classList.add("ship")})),s(l.board.attacks,e),o.querySelector("h2").textContent=u.name,r(500,o,!0),s(u.board.attacks,o)},p=t=>{"rect"==t.target.tagName&&(t.target.classList.contains("attacked")||v([+t.target.getAttribute("data-x"),+t.target.getAttribute("data-y")]))},f=()=>{h(),o.addEventListener("click",p),n.removeEventListener("click",y),n.classList.add("disabled"),a.removeEventListener("click",f),a.classList.add("disabled")},m=()=>i.board.isFleetSunk()||c.board.isFleetSunk(),b=t=>{const e=document.createElement("div"),r=document.createElement("button");r.textContent="Reset",r.addEventListener("click",(()=>{i.reset(),c.reset(),o.removeEventListener("click",p),a.classList.remove("disabled"),n.classList.remove("disabled"),g(),e.remove()})),e.id="winOverlay";const s=document.createElement("h2");s.textContent=t+" wins!",e.appendChild(s),e.appendChild(r),document.querySelector("#container").append(e)},v=t=>{if(d=i,u.board.receiveAttack(t),h(),m())return void b(d.name);d=c;const e=c.randomAttack();i.board.receiveAttack(e),h(),m()&&b(d.name)},y=()=>{i.randomizeShips(),h()};async function g(){i.randomizeShips(),c.randomizeShips(),n.addEventListener("click",y),a.addEventListener("click",f),h()}return{init:g}}().init().then((()=>document.querySelector("#loading").remove()))})()})();