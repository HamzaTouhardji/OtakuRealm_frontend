(function(e){function t(t){for(var a,r,s=t[0],i=t[1],u=t[2],l=0,f=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},c=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a9adc4d0"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"d1b9e9a0"}[e]+".css",o=i.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var u=c[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[e],d.parentNode.removeChild(d),n(c)},d.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(d)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0518":function(e,t,n){"use strict";n("ffd2")},1990:function(e,t,n){},"284e":function(e,t,n){"use strict";n("bfaf")},"424a":function(e,t,n){},5054:function(e,t,n){"use strict";n("5096")},5096:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var a=n("7a23");function r(e,t,n,r,o,c){var s=Object(a["w"])("Header"),i=Object(a["w"])("router-view");return Object(a["p"])(),Object(a["d"])(a["a"],null,[Object(a["f"])(s),Object(a["f"])(i)],64)}n("c975"),n("ac1f"),n("1276");var o=Object(a["G"])("data-v-0cbb4a2b");Object(a["s"])("data-v-0cbb4a2b");var c={class:"header"},s={class:"menu-conatiner"},i=Object(a["f"])("span",{class:"logo"},"OtakuRealm-Logo",-1),u={class:"menu"},l=Object(a["e"])("Home"),f=Object(a["e"])("About"),d=Object(a["f"])("div",{class:"search-bar"},[Object(a["f"])("input",{type:"text",class:"search-bar-input",placeholder:"Search Animes here..."})],-1),b={class:"actions"},m=Object(a["e"])("Sign in/Log in"),p=Object(a["e"])(" Profil "),j=Object(a["e"])(" Log out ");Object(a["q"])();var O=o((function(e,t,n,r,O,h){var g=Object(a["w"])("router-link");return Object(a["p"])(),Object(a["d"])("header",c,[Object(a["f"])("div",s,[Object(a["f"])(g,{to:"/"},{default:o((function(){return[i]})),_:1}),Object(a["f"])("div",u,[Object(a["f"])(g,{to:"/",class:"menu-link"},{default:o((function(){return[l]})),_:1}),Object(a["f"])(g,{to:"/about",class:"menu-link"},{default:o((function(){return[f]})),_:1})])]),d,Object(a["f"])("div",b,[e.$store.state.authenticated?(Object(a["p"])(),Object(a["d"])(a["a"],{key:1},[Object(a["f"])(g,{to:"/profil",class:"menu-link"},{default:o((function(){return[p]})),_:1}),Object(a["f"])(g,{to:"/",class:"menu-link",onClick:h.logout},{default:o((function(){return[j]})),_:1},8,["onClick"])],64)):(Object(a["p"])(),Object(a["d"])(g,{key:0,to:"/login",class:"menu-link"},{default:o((function(){return[m]})),_:1}))])])})),h={name:"Header",methods:{logout:function(){var e=this;this.$store.dispatch("auth_logout").then((function(){e.$router.push("/login"),console.log("logout")}))}}};n("0518");h.render=O,h.__scopeId="data-v-0cbb4a2b";var g=h,v={name:"App",components:{Header:g},methods:{getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie),a=n.split(";"),r=0;r<a.length;r++){var o=a[r];while(" "==o.charAt(0))o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}},mounted:function(){""!=this.getCookie("token")&&this.$store.dispatch("authenticated")}};n("80f4");v.render=r;var k=v,w=(n("d3b7"),n("6c02")),y=Object(a["G"])("data-v-0d050bf4");Object(a["s"])("data-v-0d050bf4");var x={class:"home"},A={class:"featured-vertical"},S={class:"featured-horizontal"},T={class:"featured-content"},_={class:"featured-content-title"},E={class:"featured-content-synopsis"},I=Object(a["f"])("div",{class:"featured-content"},[Object(a["f"])("div",{class:"featured-content-title"},"Top all time")],-1),R={class:"carousel__item"},C=Object(a["f"])("div",{class:"featured-content"},[Object(a["f"])("div",{class:"featured-content-title"},"Top Anime Spring 2021")],-1),N={class:"carousel__item"},U=Object(a["f"])("div",{class:"featured-content"},[Object(a["f"])("div",{class:"featured-content-title"},"Top Anime 2021")],-1),L={class:"carousel__item"};Object(a["q"])();var H=y((function(e,t,n,r,o,c){var s=Object(a["w"])("Slide"),i=Object(a["w"])("Navigation"),u=Object(a["w"])("Pagination"),l=Object(a["w"])("Carousel");return Object(a["p"])(),Object(a["d"])("div",x,[Object(a["f"])(l,{key:e.update2},{addons:y((function(){return[Object(a["f"])(i),Object(a["f"])(u)]})),default:y((function(){return[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.animesHead,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e},{default:y((function(){return[Object(a["f"])("div",{class:"featured",style:{"background-image":"url("+e.URL+")"}},[Object(a["f"])("div",A,[Object(a["f"])("div",S,[Object(a["f"])("div",T,[Object(a["f"])("div",_,Object(a["y"])(e.title),1),Object(a["f"])("span",E,Object(a["y"])(e.synopsis),1)])])])],4)]})),_:2},1024)})),128))]})),_:1}),I,Object(a["f"])(l,{settings:e.settings,breakpoints:e.breakpoints,key:e.$store.state.animesAllTime},{addons:y((function(){return[Object(a["f"])(i)]})),default:y((function(){return[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.$store.state.animesAllTime,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e.id},{default:y((function(){return[Object(a["f"])("div",R,[Object(a["f"])("a",{href:"#/detailanime?id="+e.id,draggable:"false"},[Object(a["f"])("img",{src:e.URL,alt:e.title,class:"card-image",draggable:"false"},null,8,["src","alt"])],8,["href"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"]),C,Object(a["f"])(l,{settings:e.settings,breakpoints:e.breakpoints,key:e.$store.state.animesSeason},{addons:y((function(){return[Object(a["f"])(i)]})),default:y((function(){return[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.$store.state.animesSeason,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e.id},{default:y((function(){return[Object(a["f"])("div",N,[Object(a["f"])("a",{href:"#/detailanime?id="+e.id,draggable:"false"},[Object(a["f"])("img",{src:e.URL,alt:e.title,class:"card-image",draggable:"false"},null,8,["src","alt"])],8,["href"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"]),U,Object(a["f"])(l,{settings:e.settings,breakpoints:e.breakpoints,key:e.$store.state.animes},{addons:y((function(){return[Object(a["f"])(i)]})),default:y((function(){return[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.$store.state.animes,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e.id},{default:y((function(){return[Object(a["f"])("div",L,[Object(a["f"])("a",{href:"#/detailanime?id="+e.id,draggable:"false"},[Object(a["f"])("img",{src:e.URL,alt:e.title,class:"card-image",draggable:"false"},null,8,["src","alt"])],8,["href"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])])})),P=(n("96cf"),n("1da1")),$=n("0b81"),V=(n("4001"),Object(a["g"])({name:"Home",components:{Carousel:$["a"],Slide:$["d"],Pagination:$["c"],Navigation:$["b"]},data:function(){return{update:0,update2:0,animes:[],animesHead:[],settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},850:{itemsToShow:5,snapAlign:"center"},1250:{itemsToShow:8,snapAlign:"start"}}}},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAnimesHead();case 2:case"end":return t.stop()}}),t)})))()},methods:{getAnimesHead:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://otakurealm.mooo.com/api/anime/1");case 2:return n=t.sent,t.t0=e.animesHead,t.next=6,n.json();case 6:return t.t1=t.sent,t.t0.push.call(t.t0,t.t1),t.next=10,fetch("http://otakurealm.mooo.com/api/anime/20");case 10:return n=t.sent,t.t2=e.animesHead,t.next=14,n.json();case 14:return t.t3=t.sent,t.t2.push.call(t.t2,t.t3),t.next=18,fetch("http://otakurealm.mooo.com/api/anime/21");case 18:return n=t.sent,t.t4=e.animesHead,t.next=22,n.json();case 22:t.t5=t.sent,t.t4.push.call(t.t4,t.t5),console.log(e.animesHead),e.update2+=1;case 26:case"end":return t.stop()}}),t)})))()}},beforeCreate:function(){this.$store.dispatch("getAnimes"),this.$store.dispatch("getAnimesTopAll"),this.$store.dispatch("getAnimesSeason")}}));n("5054");V.render=H,V.__scopeId="data-v-0d050bf4";var q=V,G=Object(a["G"])("data-v-1940df86");Object(a["s"])("data-v-1940df86");var M={class:"login"},B={class:"featured"},z={class:"featured-vertical"},J={class:"featured-horizontal"},F={class:"featured-content"},D={class:"form"},K={class:"btn-area"};Object(a["q"])();var W=G((function(e,t,n,r,o,c){var s=Object(a["w"])("Log"),i=Object(a["w"])("Signup");return Object(a["p"])(),Object(a["d"])("div",M,[Object(a["f"])("div",B,[Object(a["f"])("div",z,[Object(a["f"])("div",J,[Object(a["f"])("div",F,[Object(a["f"])("div",D,[e.login?(Object(a["p"])(),Object(a["d"])(s,{key:0})):(Object(a["p"])(),Object(a["d"])(i,{key:1}))]),Object(a["f"])("div",K,[e.login?(Object(a["p"])(),Object(a["d"])("button",{key:0,class:"btn",type:"button",onClick:t[1]||(t[1]=function(){return c.isVisible&&c.isVisible.apply(c,arguments)})}," Create account ")):(Object(a["p"])(),Object(a["d"])("button",{key:1,class:"btn",type:"button",onClick:t[2]||(t[2]=function(){return c.isVisible&&c.isVisible.apply(c,arguments)})}," Log-in "))])])])])])])})),Y=Object(a["G"])("data-v-525fe678");Object(a["s"])("data-v-525fe678");var Z={class:"login-box"},Q=Object(a["f"])("h1",null,"Login",-1),X={class:"text-box"},ee=Object(a["f"])("i",{class:"fa fa-user","aria-hidden":"true"},null,-1),te={class:"text-box"},ne=Object(a["f"])("i",{class:"fa fa-lock","aria-hidden":"true"},null,-1);Object(a["q"])();var ae=Y((function(e,t,n,r,o,c){return Object(a["p"])(),Object(a["d"])("div",Z,[Q,Object(a["f"])("div",X,[ee,Object(a["E"])(Object(a["f"])("input",{type:"text",placeholder:"Username",name:"username","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.form.username=e})},null,512),[[a["B"],o.form.username]])]),Object(a["f"])("div",te,[ne,Object(a["E"])(Object(a["f"])("input",{type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.form.password=e})},null,512),[[a["B"],o.form.password]])]),Object(a["f"])("input",{class:"btn",type:"button",name:"",value:"Log-in",onClick:t[3]||(t[3]=function(){return c.login&&c.login.apply(c,arguments)})})])})),re={name:"Log",data:function(){return{form:{username:"",password:""}}},methods:{login:function(){this.$store.dispatch("getToken",{username:this.form.username,password:this.form.password,router:this.$router})}}};n("284e");re.render=ae,re.__scopeId="data-v-525fe678";var oe=re,ce=Object(a["G"])("data-v-33b5527d");Object(a["s"])("data-v-33b5527d");var se={class:"signup-box"},ie=Object(a["f"])("h1",null,"Sign-up",-1),ue=Object(a["f"])("label",{for:"name"},"Usurname : ",-1),le={class:"text-box"},fe=Object(a["f"])("i",{class:"fa fa-user","aria-hidden":"true"},null,-1),de=Object(a["f"])("label",{for:"name"},"Email : ",-1),be={class:"text-box"},me=Object(a["f"])("i",{class:"fa fa-send","aria-hidden":"true"},null,-1),pe=Object(a["f"])("label",{for:"name"},"Confirm your email : ",-1),je={class:"text-box"},Oe=Object(a["f"])("i",{class:"fa fa-send","aria-hidden":"true"},null,-1),he=Object(a["f"])("label",{for:"name"},"Password: ",-1),ge={class:"text-box"},ve=Object(a["f"])("i",{class:"fa fa-lock","aria-hidden":"true"},null,-1),ke=Object(a["f"])("label",{for:"name"},"Confirm your password : ",-1),we={class:"text-box"},ye=Object(a["f"])("i",{class:"fa fa-lock","aria-hidden":"true"},null,-1);Object(a["q"])();var xe=ce((function(e,t,n,r,o,c){return Object(a["p"])(),Object(a["d"])("div",se,[ie,ue,Object(a["f"])("div",le,[fe,Object(a["E"])(Object(a["f"])("input",{type:"text",placeholder:"Username",name:"username","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.form.username=e})},null,512),[[a["B"],o.form.username]])]),de,Object(a["f"])("div",be,[me,Object(a["E"])(Object(a["f"])("input",{type:"email",placeholder:"OtakuRealm@mail.com",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.form.email=e})},null,512),[[a["B"],o.form.email]])]),pe,Object(a["f"])("div",je,[Oe,Object(a["E"])(Object(a["f"])("input",{type:"email",placeholder:"OtakuRealm@mail.com",name:"email2","onUpdate:modelValue":t[3]||(t[3]=function(e){return o.form.email2=e})},null,512),[[a["B"],o.form.email2]])]),he,Object(a["f"])("div",ge,[ve,Object(a["E"])(Object(a["f"])("input",{type:"password",placeholder:"Password",name:"password","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.form.password=e})},null,512),[[a["B"],o.form.password]])]),ke,Object(a["f"])("div",we,[ye,Object(a["E"])(Object(a["f"])("input",{type:"password",placeholder:"Password",name:"password2","onUpdate:modelValue":t[5]||(t[5]=function(e){return o.form.password2=e})},null,512),[[a["B"],o.form.password2]])]),Object(a["f"])("input",{class:"btn",type:"button",name:"",value:"Sign-Up",onClick:t[6]||(t[6]=function(){return c.register&&c.register.apply(c,arguments)})})])})),Ae={name:"Signup",data:function(){return{form:{username:"",password:"",password2:"",email:"",email2:""}}},methods:{register:function(){console.log(JSON.stringify({username:this.form.username,password:this.form.password,email:this.form.email})),this.form.mail==this.form.mail2&&this.form.password==this.form.password2?fetch("http://otakurealm.mooo.com/api/register/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.form.username,password:this.form.password,email:this.form.email})}).then((function(e){return 200===e.status?e.json():(console.log("erreur requete"),null)}),(function(e){console.log("err",e)})).then(this.connect):console.log("pas les meme mdp ou mail")},connect:function(e){if(null==e)return null;void 0!=e.token?(console.log(e.token),document.cookie="token = "+e.token,this.$router.push("/")):console.log("erreur connexion (mauvais mdp ou mail)")}}};n("c417");Ae.render=xe,Ae.__scopeId="data-v-33b5527d";var Se=Ae,Te={name:"Login",data:function(){return{login:!0}},components:{Log:oe,Signup:Se},methods:{isVisible:function(){this.login=!this.login}}};n("cd2e");Te.render=W,Te.__scopeId="data-v-1940df86";var _e=Te,Ee=Object(a["G"])("data-v-0889edd2");Object(a["s"])("data-v-0889edd2");var Ie={class:"profil"},Re={class:"featured"},Ce={class:"featured-vertical"},Ne={class:"featured-horizontal"},Ue={class:"featured-content"},Le=Object(a["f"])("div",{class:"featured-content-title"},"Profil",-1),He={class:"featured-content-synopsis"},Pe=Object(a["f"])("div",{class:"featured-content"},[Object(a["f"])("div",{class:"featured-content-title"},"Watchlist")],-1),$e={class:"carousel__item"};Object(a["q"])();var Ve=Ee((function(e,t,n,r,o,c){var s=Object(a["w"])("Slide"),i=Object(a["w"])("Navigation"),u=Object(a["w"])("Carousel");return Object(a["p"])(),Object(a["d"])("div",Ie,[Object(a["f"])("div",Re,[Object(a["f"])("div",Ce,[Object(a["f"])("div",Ne,[Object(a["f"])("div",Ue,[Le,Object(a["f"])("span",He,[Object(a["f"])("img",{class:"photo",src:e.userInfo[0].photo_de_profil},null,8,["src"]),Object(a["f"])("p",null,Object(a["y"])(e.userInfo[0].bio),1),Object(a["f"])("p",null,"Sex: "+Object(a["y"])(e.userInfo[0].sexe),1),Object(a["f"])("p",null,"Age: "+Object(a["y"])(e.userInfo[0].age),1)])])])])]),Pe,Object(a["f"])(u,{settings:e.settings,breakpoints:e.breakpoints},{addons:Ee((function(){return[Object(a["f"])(i)]})),default:Ee((function(){return[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.images,(function(e){return Object(a["p"])(),Object(a["d"])(s,{key:e},{default:Ee((function(){return[Object(a["f"])("div",$e,[Object(a["f"])("img",{src:e.src,alt:e.alt,class:"card-image",draggable:"false"},null,8,["src","alt"])])]})),_:2},1024)})),128))]})),_:1},8,["settings","breakpoints"])])})),qe=Object(a["g"])({name:"Profil",components:{Carousel:$["a"],Slide:$["d"],Navigation:$["b"]},data:function(){return{userInfo:[{}],settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},850:{itemsToShow:5,snapAlign:"center"},1250:{itemsToShow:5,snapAlign:"start"}},images:[{src:"https://cdn.myanimelist.net/images/anime/1000/110531.jpg?s=3df5ebb6800604dc04c6a6187dd7161b",alt:"Shingeki no Kyojin: The Final Season"},{src:"https://cdn.myanimelist.net/images/anime/1132/110666.jpg?s=a5a23105e2245e9f5ea0499be2fce9a8",alt:"Re:Zero kara Hajimeru Isekai Seikatsu 2nd Season Part 2"},{src:"https://cdn.myanimelist.net/images/anime/1255/110636.jpg?s=2b6005aafc62e746b64d224e60a5a8b4",alt:"Yuru Camp△ Season 2"},{src:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg?s=f5508bab9e7d610a28f12d1828a6ee79",alt:"Jujutsu Kaisen (TV)"},{src:"https://cdn.myanimelist.net/images/anime/1791/110336.jpg?s=6afe0e38492f034cbd6f1b13d782e52f",alt:"Horimiya"},{src:"https://cdn.myanimelist.net/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a",alt:"Holo no Graffiti"},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""},{src:"",alt:""}]}},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getInfoUser();case 2:case"end":return t.stop()}}),t)})))()},methods:{getCookie:function(e){for(var t=e+"=",n=decodeURIComponent(document.cookie),a=n.split(";"),r=0;r<a.length;r++){var o=a[r];while(" "==o.charAt(0))o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""},getInfoUser:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={"Content-Type":"application/json"},console.log(e.getCookie("token")),n["Authorization"]="Token "+e.getCookie("token"),t.next=5,fetch("http://otakurealm.mooo.com/api/info_utilisateur/",{headers:n});case 5:return a=t.sent,t.next=8,a.json();case 8:e.userInfo=t.sent,console.log(e.userInfo);case 10:case"end":return t.stop()}}),t)})))()}}});n("b54e");qe.render=Ve,qe.__scopeId="data-v-0889edd2";var Ge=qe,Me=Object(a["G"])("data-v-71cc0fa3");Object(a["s"])("data-v-71cc0fa3");var Be={class:"profil"},ze={class:"featured"},Je={class:"featured-vertical"},Fe={class:"featured-horizontal"},De={class:"featured-content"},Ke={class:"featured-content-title"},We={class:"featured-content-anime"},Ye={class:"featured-content-synopsis"},Ze={class:"featured-content-details"},Qe={class:"featured-content"},Xe=Object(a["f"])("div",{class:"featured-content-title"},"Synopsis",-1),et={class:"featured-content-synopsis"};Object(a["q"])();var tt=Me((function(e,t,n,r,o,c){return Object(a["p"])(),Object(a["d"])("div",Be,[Object(a["f"])("div",ze,[Object(a["f"])("div",Je,[Object(a["f"])("div",Fe,[Object(a["f"])("div",De,[Object(a["f"])("div",Ke,Object(a["y"])(e.anime.title),1),Object(a["f"])("div",We,[Object(a["f"])("span",Ye,[Object(a["f"])("img",{class:"photo",src:e.anime.URL,alt:e.anime.title},null,8,["src","alt"])]),Object(a["f"])("span",Ze,[Object(a["f"])("p",null,"Season : "+Object(a["y"])(e.anime.season),1),Object(a["f"])("p",null,"Number of episodes : "+Object(a["y"])(e.anime.number_of_episodes),1),Object(a["f"])("p",null,"Episode duration : "+Object(a["y"])(e.anime.episode_duration),1),Object(a["f"])("p",null,"Number of season : "+Object(a["y"])(e.anime.season),1),Object(a["f"])("p",null,"Rating : "+Object(a["y"])(e.anime.rating)+"/10",1)])])])])])]),Object(a["f"])("div",Qe,[Xe,Object(a["f"])("span",et,[Object(a["f"])("p",null,Object(a["y"])(e.anime.synopsis),1)])])])})),nt={name:"Home",data:function(){return{anime:{},settings:{itemsToShow:1,snapAlign:"center"},breakpoints:{700:{itemsToShow:3.5,snapAlign:"center"},850:{itemsToShow:5,snapAlign:"center"},1250:{itemsToShow:5,snapAlign:"start"}}}},created:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getAnimes();case 2:case"end":return t.stop()}}),t)})))()},methods:{getAnimes:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.$route.query.id,t.next=3,fetch("http://otakurealm.mooo.com/api/anime/"+n);case 3:return a=t.sent,t.next=6,a.json();case 6:e.anime=t.sent;case 7:case"end":return t.stop()}}),t)})))()}}};n("9b4f");nt.render=tt,nt.__scopeId="data-v-71cc0fa3";var at=nt,rt=(n("b0c0"),Object(a["G"])("data-v-226571ba"));Object(a["s"])("data-v-226571ba");var ot={class:"Recommandation"},ct={class:"featured"},st={class:"featured-vertical"},it={class:"featured-horizontal"},ut={class:"featured-content"},lt={class:"checkbox"},ft=Object(a["f"])("h3",null,"Renseignez vos genres favoris",-1),dt={class:"genres"},bt=Object(a["f"])("div",{class:"checkbox"},[Object(a["f"])("h3",null,"Renseignez vos animés")],-1);Object(a["q"])();var mt=rt((function(e,t,n,r,o,c){return Object(a["p"])(),Object(a["d"])("div",ot,[Object(a["f"])("div",ct,[Object(a["f"])("div",st,[Object(a["f"])("div",it,[Object(a["f"])("div",ut,[Object(a["f"])("div",lt,[ft,Object(a["f"])("div",dt,[(Object(a["p"])(!0),Object(a["d"])(a["a"],null,Object(a["v"])(e.$store.state.genre,(function(n){return Object(a["p"])(),Object(a["d"])("div",{class:"genre",key:n.id},[Object(a["E"])(Object(a["f"])("input",{type:"checkbox",id:n.id,value:n.id,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.selected=t})},null,8,["id","value"]),[[a["A"],e.selected]]),Object(a["f"])("label",{for:n.id},Object(a["y"])(n.name),9,["for"])])})),128))]),Object(a["f"])("span",null,"selected : "+Object(a["y"])(e.selected),1)]),bt])])])])])})),pt={name:"Recommandation",data:function(){return{selected:[]}},methods:{},mounted:function(){this.$store.dispatch("getGenre")}};n("eca6");pt.render=mt,pt.__scopeId="data-v-226571ba";var jt=pt,Ot=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/login",name:"Login",component:_e},{path:"/recommandation",name:"Recommandation",component:jt},{path:"/profil",name:"Profil",component:Ge},{path:"/detailanime",name:"DetailAnime",component:at}],ht=Object(w["a"])({history:Object(w["b"])(),routes:Ot}),gt=ht,vt=n("5502"),kt=Object(vt["a"])({state:{authenticated:!1,genre:[],animes:[],animesAllTime:[],animesSeason:[]},mutations:{AUTHENTIFICATION:function(e){e.authenticated=!e.authenticated},SETGENRE:function(e,t){t.json().then((function(t){e.genre=t,console.log(t)}))},SETANIME:function(e,t){t.json().then((function(t){e.animes=t,console.log(t)}))},SETANIMEALLTIME:function(e,t){t.json().then((function(t){e.animesAllTime=t,console.log(t)}))},SETANIMESEASON:function(e,t){t.json().then((function(t){e.animesSeason=t,console.log(t)}))}},actions:{getToken:function(e,t){console.log(JSON.stringify({username:t.username,password:t.password})),fetch("http://otakurealm.mooo.com/api/login/",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,password:t.password})}).then((function(e){return 200===e.status?(console.log("status ok!"),e.json()):(console.log("erreur requete"),null)}),(function(e){console.log("err",e)})).then((function(t){if(console.log("connexion..."),null==t)return null;void 0!=t.token?(console.log(t.token),document.cookie="token = "+t.token,e.commit("AUTHENTIFICATION"),1==e.state.authenticated&&gt.push("/")):console.log("erreur connexion (mauvais mdp ou mail)")}))},auth_logout:function(e){e.commit("AUTHENTIFICATION"),document.cookie="token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},authenticated:function(e){e.commit("AUTHENTIFICATION")},getGenre:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://otakurealm.mooo.com/api/genre");case 2:n=t.sent,e.commit("SETGENRE",n);case 4:case"end":return t.stop()}}),t)})))()},getAnimes:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://otakurealm.mooo.com/api/anime");case 2:n=t.sent,e.commit("SETANIME",n);case 4:case"end":return t.stop()}}),t)})))()},getAnimesTopAll:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://otakurealm.mooo.com/api/anime_allTime");case 2:n=t.sent,e.commit("SETANIMEALLTIME",n);case 4:case"end":return t.stop()}}),t)})))()},getAnimesSeason:function(e){return Object(P["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://otakurealm.mooo.com/api/anime_saison");case 2:n=t.sent,e.commit("SETANIMESEASON",n);case 4:case"end":return t.stop()}}),t)})))()}},modules:{}});n("b383"),Object(a["c"])(k).use(kt).use(gt).mount("#app")},5703:function(e,t,n){},6654:function(e,t,n){},"80f4":function(e,t,n){"use strict";n("5703")},"9b4f":function(e,t,n){"use strict";n("1990")},a808:function(e,t,n){},b383:function(e,t,n){},b54e:function(e,t,n){"use strict";n("dec1")},bfaf:function(e,t,n){},c417:function(e,t,n){"use strict";n("6654")},cd2e:function(e,t,n){"use strict";n("a808")},dec1:function(e,t,n){},eca6:function(e,t,n){"use strict";n("424a")},ffd2:function(e,t,n){}});
//# sourceMappingURL=app.8a965d7a.js.map