(function(e){function t(t){for(var n,c,s=t[0],o=t[1],l=t[2],d=0,u=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},c={app:0},r={app:0},i=[];function s(e){return o.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c7d085cf"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(e){var t=[],a={about:1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"dded6d78"}[e]+".css",r=o.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===r))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete c[e],f.parentNode.removeChild(f),a(i)},f.href=r;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var n=r[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var a=r[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",u.name="ChunkLoadError",u.type=n,u.request=c,a[1](u)}r[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0c72":function(e,t,a){},"4cf9":function(e,t,a){"use strict";a("5a05")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("0cdd");var n=a("7a23");function c(e,t,a,c,r,i){var s=Object(n["x"])("Header"),o=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["d"])(n["a"],null,[Object(n["g"])(s),Object(n["g"])(o)],64)}var r=Object(n["D"])("data-v-390177f6");Object(n["t"])("data-v-390177f6");var i={class:"header"},s={class:"menu-conatiner"},o=Object(n["g"])("span",{class:"logo"},"OtakuRealm-Logo",-1),l={class:"menu"},d=Object(n["f"])("Home"),u=Object(n["f"])("About"),f=Object(n["g"])("div",{class:"search-bar"},[Object(n["g"])("input",{type:"text",class:"search-bar-input",placeholder:"Search Animes here..."})],-1),b={class:"actions"},g=Object(n["f"])("Sign in/Log in");Object(n["r"])();var v=r((function(e,t,a,c,v,m){var p=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["d"])("header",i,[Object(n["g"])("div",s,[Object(n["g"])(p,{to:"/"},{default:r((function(){return[o]})),_:1}),Object(n["g"])("div",l,[Object(n["g"])(p,{to:"/",class:"menu-link"},{default:r((function(){return[d]})),_:1}),Object(n["g"])(p,{to:"/about",class:"menu-link"},{default:r((function(){return[u]})),_:1})])]),f,Object(n["g"])("div",b,[Object(n["g"])(p,{to:"/login",class:"menu-link"},{default:r((function(){return[g]})),_:1})])])})),m={name:"Header"};a("cc93");m.render=v,m.__scopeId="data-v-390177f6";var p=m,j={name:"App",components:{Header:p}};a("c658");j.render=c;var O=j,h=(a("d3b7"),a("6c02")),y=Object(n["D"])("data-v-b0db814e");Object(n["t"])("data-v-b0db814e");var k={class:"home"},w=Object(n["g"])("div",{class:"featured"},[Object(n["g"])("div",{class:"featured-vertical"},[Object(n["g"])("div",{class:"featured-horizontal"},[Object(n["g"])("div",{class:"featured-content"},[Object(n["g"])("div",{class:"featured-content-title"},"Kimestsu no Yaiba"),Object(n["g"])("span",{class:"featured-content-synopsis"}," Ever since the death of his father, the burden of supporting the family has fallen upon Tanjirou Kamado's shoulders. Though living impoverished on a remote mountain, the Kamado family are able to enjoy a relatively peaceful and happy life. One day, Tanjirou decides to go down to the local village to make a little money selling charcoal. On his way back, night falls, forcing Tanjirou to take shelter in the house of a strange man, who warns him of the existence of flesh-eating demons that lurk in the woods at night. When he finally arrives back home the next day, he is met with a horrifying sight—his whole family has been slaughtered. Worse still, the sole survivor is his sister Nezuko, who has been turned into a bloodthirsty demon. Consumed by rage and hatred, Tanjirou swears to avenge his family and stay by his only remaining sibling. Alongside the mysterious group calling themselves the Demon Slayer Corps, Tanjirou will do whatever it takes to slay the demons and protect the remnants of his beloved sister's humanity. ")])])])],-1),_=Object(n["g"])("div",{class:"featured-content"},[Object(n["g"])("div",{class:"featured-content-title"},"Airing Animes")],-1),x={class:"carousel__item"},S=Object(n["g"])("div",{class:"featured-content"},[Object(n["g"])("div",{class:"featured-content-title"},"Airing Animes")],-1),A={class:"carousel__item"},q=Object(n["g"])("div",{class:"featured-content"},[Object(n["g"])("div",{class:"featured-content-title"},"Airing Animes")],-1),T={class:"carousel__item"},C=Object(n["g"])("div",{class:"featured-content"},[Object(n["g"])("div",{class:"featured-content-title"},"Airing Animes")],-1),P={class:"carousel__item"};Object(n["r"])();var L=y((function(e,t,a,c,r,i){var s=Object(n["x"])("Slide"),o=Object(n["x"])("Navigation"),l=Object(n["x"])("Pagination"),d=Object(n["x"])("Carousel");return Object(n["q"])(),Object(n["d"])("div",k,[Object(n["g"])(d,null,{addons:y((function(){return[Object(n["g"])(o),Object(n["g"])(l)]})),default:y((function(){return[(Object(n["q"])(),Object(n["d"])(n["a"],null,Object(n["w"])(10,(function(e){return Object(n["g"])(s,{key:e},{default:y((function(){return[w]})),_:2},1024)})),64))]})),_:1}),_,Object(n["g"])(d,{settings:e.settings,breakpoints:e.breakpoints},{addons:y((function(){return[Object(n["g"])(o)]})),default:y((function(){return[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.images,(function(e){return Object(n["q"])(),Object(n["d"])(s,{key:e},{default:y((function(){return[Object(n["g"])("div",x,[Object(n["g"])("img",{src:e.src,alt:e.alt,class:"card-image"},null,8,["src","alt"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"]),S,Object(n["g"])(d,{settings:e.settings,breakpoints:e.breakpoints},{addons:y((function(){return[Object(n["g"])(o)]})),default:y((function(){return[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.images,(function(e){return Object(n["q"])(),Object(n["d"])(s,{key:e},{default:y((function(){return[Object(n["g"])("div",A,[Object(n["g"])("img",{src:e.src,alt:e.alt,class:"card-image"},null,8,["src","alt"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"]),q,Object(n["g"])(d,{settings:e.settings,breakpoints:e.breakpoints},{addons:y((function(){return[Object(n["g"])(o)]})),default:y((function(){return[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.images,(function(e){return Object(n["q"])(),Object(n["d"])(s,{key:e},{default:y((function(){return[Object(n["g"])("div",T,[Object(n["g"])("img",{src:e.src,alt:e.alt,class:"card-image"},null,8,["src","alt"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"]),C,Object(n["g"])(d,{settings:e.settings,breakpoints:e.breakpoints},{addons:y((function(){return[Object(n["g"])(o)]})),default:y((function(){return[(Object(n["q"])(!0),Object(n["d"])(n["a"],null,Object(n["w"])(e.images,(function(e){return Object(n["q"])(),Object(n["d"])(s,{key:e},{default:y((function(){return[Object(n["g"])("div",P,[Object(n["g"])("img",{src:e.src,alt:e.alt,class:"card-image"},null,8,["src","alt"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])])})),E=a("0b81"),H=(a("4001"),Object(n["h"])({name:"Home",components:{Carousel:E["a"],Slide:E["d"],Pagination:E["c"],Navigation:E["b"]},data:function(){return{settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},850:{itemsToShow:5,snapAlign:"center"},1250:{itemsToShow:8,snapAlign:"start"}},images:[{src:"https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b",alt:"Shingeki no Kyojin: The Final Season"},{src:"https://cdn.myanimelist.net/images/anime/1132/110666.jpg?s=a5a23105e2245e9f5ea0499be2fce9a8",alt:"Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2"},{src:"https://cdn.myanimelist.net/images/anime/1255/110636.jpg?s=2b6005aafc62e746b64d224e60a5a8b4",alt:"Yuru Camp△ Season 2"},{src:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",alt:"Jujutsu Kaisen (TV)"},{src:"https://cdn.myanimelist.net/images/anime/1791/110336.jpg?s=6afe0e38492f034cbd6f1b13d782e52f",alt:"Horimiya"},{src:"https://cdn.myanimelist.net/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a",alt:"Holo no Graffiti"},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""}]}}}));a("6d4b");H.render=L,H.__scopeId="data-v-b0db814e";var D=H,N=Object(n["D"])("data-v-1940df86");Object(n["t"])("data-v-1940df86");var I={class:"login"},K={class:"featured"},V={class:"featured-vertical"},U={class:"featured-horizontal"},M={class:"featured-content"},R={class:"form"},z={class:"btn-area"};Object(n["r"])();var B=N((function(e,t,a,c,r,i){var s=Object(n["x"])("Log"),o=Object(n["x"])("Signup");return Object(n["q"])(),Object(n["d"])("div",I,[Object(n["g"])("div",K,[Object(n["g"])("div",V,[Object(n["g"])("div",U,[Object(n["g"])("div",M,[Object(n["g"])("div",R,[e.login?(Object(n["q"])(),Object(n["d"])(s,{key:0})):(Object(n["q"])(),Object(n["d"])(o,{key:1}))]),Object(n["g"])("div",z,[e.login?(Object(n["q"])(),Object(n["d"])("button",{key:0,class:"btn",type:"button",onClick:t[1]||(t[1]=function(){return i.isVisible&&i.isVisible.apply(i,arguments)})}," Create account ")):(Object(n["q"])(),Object(n["d"])("button",{key:1,class:"btn",type:"button",onClick:t[2]||(t[2]=function(){return i.isVisible&&i.isVisible.apply(i,arguments)})}," Log-in "))])])])])])])})),J=Object(n["D"])("data-v-9f9d4a76");Object(n["t"])("data-v-9f9d4a76");var F={class:"login-box"},W=Object(n["e"])('<h1 data-v-9f9d4a76>Login</h1><div class="text-box" data-v-9f9d4a76><i class="fa fa-user" aria-hidden="true" data-v-9f9d4a76></i><input type="text" placeholder="Username" name="" value="" data-v-9f9d4a76></div><div class="text-box" data-v-9f9d4a76><i class="fa fa-lock" aria-hidden="true" data-v-9f9d4a76></i><input type="password" placeholder="Password" name="" value="" data-v-9f9d4a76></div><input class="btn" type="button" name="" value="Log-in" data-v-9f9d4a76>',4);Object(n["r"])();var Y=J((function(e,t,a,c,r,i){return Object(n["q"])(),Object(n["d"])("div",F,[W])})),G={name:"Log"};a("4cf9");G.render=Y,G.__scopeId="data-v-9f9d4a76";var Z=G,Q=Object(n["D"])("data-v-0e2895cf");Object(n["t"])("data-v-0e2895cf");var X={class:"signup-box"},$=Object(n["e"])('<h1 data-v-0e2895cf>Sign-up</h1><label for="name" data-v-0e2895cf>Usurname : </label><div class="text-box" data-v-0e2895cf><i class="fa fa-user" aria-hidden="true" data-v-0e2895cf></i><input type="text" placeholder="Username" name="" value="" data-v-0e2895cf></div><label for="name" data-v-0e2895cf>Email : </label><div class="text-box" data-v-0e2895cf><i class="fa fa-send" aria-hidden="true" data-v-0e2895cf></i><input type="email" placeholder="OtakuRealm@mail.com" name="" value="" data-v-0e2895cf></div><label for="name" data-v-0e2895cf>Confirm your email : </label><div class="text-box" data-v-0e2895cf><i class="fa fa-send" aria-hidden="true" data-v-0e2895cf></i><input type="email" placeholder="OtakuRealm@mail.com" name="" value="" data-v-0e2895cf></div><label for="name" data-v-0e2895cf>Password: </label><div class="text-box" data-v-0e2895cf><i class="fa fa-lock" aria-hidden="true" data-v-0e2895cf></i><input type="password" placeholder="Password" name="" value="" data-v-0e2895cf></div><label for="name" data-v-0e2895cf>Confirm your password : </label><div class="text-box" data-v-0e2895cf><i class="fa fa-lock" aria-hidden="true" data-v-0e2895cf></i><input type="password" placeholder="Password" name="" value="" data-v-0e2895cf></div><input class="btn" type="button" name="" value="Sign-Up" data-v-0e2895cf>',12);Object(n["r"])();var ee=Q((function(e,t,a,c,r,i){return Object(n["q"])(),Object(n["d"])("div",X,[$])})),te={name:"Signup"};a("f614");te.render=ee,te.__scopeId="data-v-0e2895cf";var ae=te,ne={name:"Login",data:function(){return{login:!0}},components:{Log:Z,Signup:ae},methods:{isVisible:function(){this.login=!this.login}}};a("cd2e");ne.render=B,ne.__scopeId="data-v-1940df86";var ce=ne,re=[{path:"/",name:"Home",component:D},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/login",name:"Login",component:ce}],ie=Object(h["a"])({history:Object(h["b"])(),routes:re}),se=ie;a("b383"),Object(n["c"])(O).use(se).mount("#app")},"5a05":function(e,t,a){},6744:function(e,t,a){},"6d4b":function(e,t,a){"use strict";a("ee19")},"79ff":function(e,t,a){},a808:function(e,t,a){},b383:function(e,t,a){},c658:function(e,t,a){"use strict";a("6744")},cc93:function(e,t,a){"use strict";a("0c72")},cd2e:function(e,t,a){"use strict";a("a808")},ee19:function(e,t,a){},f614:function(e,t,a){"use strict";a("79ff")}});
//# sourceMappingURL=app.a95b6227.js.map