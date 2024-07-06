"use strict";(self.webpackChunkbattleship=self.webpackChunkbattleship||[]).push([[511],{208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"html {\n    font-family: sans-serif;\n}\n\n#container {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    position: relative;\n    width: 80vw;\n    row-gap: 10px;\n    justify-items: center;\n}\n\nh1 {\n    width: 100%;\n    text-align: center;\n    grid-column: 1 / 3;\n}\n\nbody  {\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n}\n\n\nh2 {\n    text-align: center;\n    color: white;\n    font-size: 22px;\n    letter-spacing: 4px;\n    padding: 5px;\n    text-transform: uppercase;\n    width: 100%;\n    background-color: rgb(255, 75, 75);\n    border-radius: 5px;\n}\n\n#winOverlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(240, 248, 255, 0.37);\n}\n\n#secondPlayerGrid rect:not(.attacked):hover {\n    cursor: pointer;\n    fill: rgb(255, 254, 207);\n}\n\ntext {\n    fill: gray;\n    font-size: 24px;\n    text-anchor: middle;\n    font-weight: bold;\n    stroke: none;\n}\n\n.ship {\n    fill: green;\n}\n\nrect {\n    fill: rgba(174, 202, 228, 0.445);\n    stroke: white;\n    stroke-width: 2;\n}\n\n.opponent {\n    fill: rgba(255, 0, 0, 0.137);\n}\n\n.hit {\n    fill: red;\n}\n.miss:not(.opponent){\n    fill: rgb(172, 172, 172);\n}\n\n.miss {\n    fill: rgb(122, 239, 255);\n}\n\nbutton {\n    border: 1px solid lightblue;\n    text-transform: uppercase;\n    color: white;\n    border-radius: 5px;\n    background-color: rgb(76, 141, 76);\n    font-size: 16px;\n    font-weight: bold;\n    padding: 10px;\n}\n\nbutton:hover {\n    cursor: pointer;\n}\n\n.disabled {\n    background-color: gray;\n}\n\n.disabled:hover {\n    cursor: not-allowed;\n}\n\n#buttonDiv {\n    display: flex;\n    justify-content: space-evenly;\n    gap: 30px;\n}\n",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var u=[].concat(n[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},601:n=>{n.exports=function(n){return n[1]}},511:(n,e,t)=>{t.r(e),t.d(e,{default:()=>g});var r=t(72),o=t.n(r),i=t(825),a=t.n(i),s=t(659),c=t.n(s),l=t(56),u=t.n(l),p=t(540),d=t.n(p),f=t(113),h=t.n(f),v=t(208),m={};m.styleTagTransform=h(),m.setAttributes=u(),m.insert=c().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),o()(v.A,m);const g=v.A&&v.A.locals?v.A.locals:void 0},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,p="".concat(l," ").concat(u);i[l]=u+1;var d=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var u=t(i[l]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);