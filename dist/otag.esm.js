let _selector=function(e){let t=[],s=(e.match(/\[([0-9A-Za-z.-_şŞüÜöÖçÇİığĞ]+)="([0-9A-Za-z0-9,'.-_şŞüÜöÖçÇİığĞ#\(\):@ ]+)"\]/g)||[]).reduce((t,s)=>(e=e.replace(s,""),t[(s=s.match(/([0-9A-Za-z.şŞüÜöÖçÇİığĞ]+)="([0-9A-Za-z0-9,.-_şŞüÜöÖçÇİığĞ#\(\):@ ]+)/))[1]]=s[2],t),{});e.indexOf(":")>-1&&(t=e.split(":"),e=t.shift());var r={class:/\.([0-9A-Za-z_\-şŞüÜöÖçÇİığĞ]+)/g,id:/#([0-9A-Za-z\-_şŞüÜöÖçÇİığĞ]+)/,ui:/[$|₺|₸|₼]([0-9A-Za-zşŞüÜöÖçÇİığĞ]+)/,tag:/^[a-zşüöçığ][a-zşüöçığ0-9]*?$/g};return(r=Object.keys(r).reduce((t,s)=>{for(var i,n=[],a=-1,o=r[s];(i=o.exec(e))&&o.lastIndex!=a;){if(n.push(i[0]),a=o.lastIndex,!(t[s]instanceof Array)){t[s]=i[1]||i[0],e=e.replace(i[0],"");break}t[s].push(i[1])}return n.forEach(t=>{e=e.replace(t,"")}),t},{class:[],id:"",ui:null,tag:null})).args=t,r.attr=s,e.length&&(r.class=r.class.concat(e.split(" "))),r},proto={Element:{destroy(e=0,t=300){return new Promise(s=>{setTimeout(()=>{setTimeout(()=>{this.remove(),s()},t),this.Class("destroy")},e)})},disp(e){return e||this.hasOwnProperty("dispState")||(this.dispState=this.style.display),this.style.display=e?this.dispState:"none",this},class(e){if("function"==typeof e)this.class(e());else{let t={add:[],rem:[]};Object.keys(e).forEach(s=>{t[("function"==typeof e[s]?e[s]():e[s])?"add":"rem"].push(s)}),this.Class(t.rem,0).Class(t.add)}return this},Class(e,t=!0){return e instanceof Array||(e=[e]),e[0]&&""!=e[0]&&(this.className=e.reduce((e,s)=>(e=e.replace(new RegExp("(\\b"+s+")+"),""),(t?e+" "+s:e).replace(/\s{2}/g," ").trim()),this.className),""==this.className.trim()&&this.removeAttribute("class")),this},do(e,t="click",s){return arguments[3]&&(s=O$1.toArray(arguments).splice(2)),this["on"+t]=(()=>{this.parent[e].apply(this.parent,s||[])}),this},append(e,t){return e&&(e instanceof Array||(e=[e]),t&&(e=e.reverse()),e.forEach(e=>this.appendChild(e.el))),this},set(e){return"string"==typeof e&&(this.innerHTML=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;")),this},pitch(e){return e.html&&(this.innerHTML=Disk[e.html]),this.innerHTML="",e?this.append.apply(this,arguments):this}},String:{kur(e={}){return new Sanal$$1(Object.assign(e,{_el:this}))},get(e){var t=O$1.toArray(document.querySelectorAll(this));return this.indexOf("#")>-1&&(e=0),null!=e&&(t=t[e]),t},val(e){let t=this.split(",").map(t=>e.val[t]);return 1==t.length?t[0]:t},vars(e){return e="object"==typeof e?e:arguments,Object.keys(e).reduce((t,s)=>t.replace(new RegExp("("+s+"[₺|$|₸|₼])+"),e[s]),this)},replaceAll(e,t){let s=this;for(var r in e)for(;s.indexOf(e[r])>-1;)s=s.replace(e[r],t[r]);return s},of(e){return"*"==this?e:this.split(",").reduce((t,s)=>(t[s]=e[s]||null,t),{})},from(e){let t=("*"==this?Object.keys(e):this.split(",")).map(t=>e[t]);return-1==this.indexOf(",")&&"*"!=this?t[0]:t},obj(e,t){return this.split(",").reduce(t instanceof Array?(s,r,i)=>(s[r]=e[i]||t[i],s):(s,r,i)=>(s[r]=e[i]||t,s),{})}},Function:{interval(e){let t,s=this;return{start(){return this.stop(),t=setInterval.apply(null,[s,e].concat(arguments)),this},stop(){return clearInterval(t),this}}},prom(e){let t=this.bind(e);return function(){let e=arguments;return new Promise((s,r)=>{try{var i=t.apply(null,e);i.then?i.then(s).catch(r):s(i)}catch(e){r(e)}})}},debounce(e){let t,s=this;return function(){let r=arguments;return clearTimeout(t),t=setTimeout(()=>{s.apply(s,r)},e),this}}},SVGElement:{set(e,t,s){return this.disp(0),O$1.req(e).then(e=>{let r=(new DOMParser).parseFromString(e,"text/xml").children[0];O$1.toArray(r.attributes).forEach(e=>this.setAttribute(e.name,e.value)),this.style.height=t,this.style.width=s,this.innerHTML=r.innerHTML,this.disp(1)}),this}},Image:{set(e,t){return t?(O$1.req(e).then(e=>this.innerHTML=e),this):(this.loader=new Promise((t,s)=>{Object.assign(this,{onload(){this.Class("loading",0),t()},onerror(){this.Class("loading",0).Class("error"),s()},src:e})}),this.Class("loading"))}}},props={String:{to:{set(e){this.el.to=e}},el:{get(){let e,t=_selector(this+"");return t.ui?(O$1.UI[t.ui]||console.error(t.ui,"is not defined"),e=O$1.UI[t.ui].apply(t.ui,t.args)):(e="svg"==t.tag?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(t.tag||"div"),t.args.length&&e.set.apply(e,t.args)),Object.keys(t.attr).map(s=>e.setAttribute(s,t.attr[s])),t.id.length&&(e.id=t.id),t.class.length&&(e.className=t.class.join(" ")),e},set(e){let t=this.el;return["click","load"].forEach(s=>{delete e[s],e[s]&&(t["on"+s]=e[s])}),["prop","has","layout","resp","set","attr","valid"].forEach(s=>{e.hasOwnProperty()&&(t[s](e[s]),delete e[s])}),e.to&&("string"==typeof e.to?e.to.append(t):t.to=e.to,delete e.to),Object.assign(t,e),t}}},Element:{el:{get(){return this}},str:{get(){let e=["id","class"],t="DIV"!=this.tagName?this.tagName.toLowerCase():"";return t+=""!=this.id?"#"+this.id:"",t+=O$1.toArray(this.classList).map(e=>"."+e).join(""),O$1.toArray(this.attributes).forEach(s=>{e.indexOf(s.name)<0&&(s.value=s.value.replace("https:","").replace("http:",""),t+="["+s.name+'="'+s.value+'"]')}),t}},to:{set(e){"string"==typeof e?O$1.ready.then(()=>{e.get(0).pitch(this)}):(e instanceof Sanal$$1&&(e=e.el),e.pitch(this))}}},Function:{prevent:{get(){return e=>{e.preventDefault(),this(e)}}},stop:{get(){return e=>{e.stopPropagation(),this(e)}}},bounced:{get(){return this.debounce(100)}}},Image:{value:{get(){return this.src},set(e){return this.loader=new Promise((t,s)=>{this.prop({onload(){this.Class("loading",0),t()},onerror(){this.Class("loading",0).Class("error"),s()},src:e})}),this.Class("loading"),e}}}};(e=>{Object.keys(proto).filter(t=>e[t].prototype||e[t]).forEach(t=>Object.assign(e[t].prototype||e[t],proto[t])),Object.keys(props).filter(t=>e[t].prototype||e[t]).forEach(t=>Object.defineProperties(e[t].prototype||e[t],props[t])),Object.keys(proto.Element).forEach(t=>{e.Number.prototype[t]=e.String.prototype[t]=function(){let e=this.kur();return e[t].apply(e,arguments)}})})(window||global);let Time=new Proxy({interval(){let e,t=arguments;return{start(){return this.stop(),e=setInterval.apply(null,t),this},stop(){return clearInterval(e),this}}},rules:{yesterday:864e5,today:0,now:0,tomorrow:-864e5}},{get(e,t){if("interval"==t)return e[t];let s=new Date(+new Date-e.rules[t]);return"now"!=t&&["Hours","Minutes","Seconds"].map(e=>s["set"+e](0)),Math.floor(s.getTime()/1e3)}}),Chain=function(e){let t=this||null;return function(){let s=arguments;return t=this||t,new Promise(function(r,i){let n,a=e.shift().prom().apply(t,s);for(;n=e.shift();)a=a.then(n).catch(i);a.then(r).catch(i)})}};class Sanal$$1{constructor(e={_el:""}){Object.assign(this,e),e.ƒ&&Object.defineProperties(this,Object.keys(e.ƒ).reduce((t,s)=>(console.log(s),t[s]={get:e.ƒ[s]},t),{})),e.resp&&Object.defineProperties(this,Object.keys(e.resp).reduce((t,s)=>(t[s]={get:()=>this["_"+s],set(t){e.resp[s](t),this["_"+s]=t}},t),{})),this.has(this.View)}V(e=""){return e.split(":").reduce((e,t)=>e&&e.View?""==t?e.View:e.View[t]:null,this)}p(e){let t=this;for(;e--;)t=t.parent;return t}do(e,t){return this.click=(()=>this.parent[e]()),this}has(e){return e&&(Object.keys(e).forEach(t=>{"string"==typeof e[t]?e[t]=new Sanal$$1({_el:e[t],parent:this}):e[t]instanceof Sanal$$1||(e[t].parent=this,e[t]=new Sanal$$1(e[t]))}),this.View=e),this}append(e){return this.content=e,this}set content(e){this.$content=e,this._el&&"string"!=typeof this._el&&(this._el.innerHTML="",this._el.append(e.map(e=>e.el)))}get content(){return this.$content}set to(e){this.el.to=e}get valid(){if(this.validate){if("function"==typeof this.validate)return this.validate(this.value);{let e;return!Object.keys(this.validate).some(t=>(e=this.validate[t])&&!("function"==typeof e?e(this.View[t].value):e.test(this.View[t].value)))}}return!0}set value(e){if(e instanceof Promise&&e.then(e=>{this.value=e}),this.bind){let t=[];this.bind.before&&t.push(this.bind.before),t=t.concat(Object.keys(e).map(t=>{let s=this.bind.model.el;return s.value={key:t,value:e[t],_model:this.bind.model},s})),this.bind.after&&t.push(this.bind.after),this.content=t}else this.View?(e._model&&(e=e.value),Object.keys(e).forEach(t=>{this.View[t]&&("string"==typeof this.View[t]?this.View[t]=this.View[t].split(":").shift()+":"+e[t]:this.View[t].value=e[t])})):this.el.set&&this.el.set(e);this.set&&this.set(e)}get el(){if("string"==typeof this._el){if(this._el=this._el.el,this._el.sanal=this,this.template?this.layout=this.template:this.content?this._el.append(this.content):this.View&&this._el.append(O$1.toArray(this.View)),"string"==typeof this.bind&&(this.bind={model:this.bind}),this.fetch){let e;this.fetch.save&&(e=Disk[this.fetch.save])?this.value=e:O$1.req(this.fetch.from).then(e=>{this.fetch.shape&&(e=this.fetch.shape(e)),this.value=e,this.fetch.save&&(Disk[this.fetch.save]=e)})}["click","load","select"].filter(e=>this[e]).forEach(e=>this._el["on"+e]=this[e])}return this._el}set layout(e){this.el.innerHTML="";let t,s,r,i,n=this.el,a=n,o=this.View;e=e.split("\n").forEach(e=>{if(i=e.trim(),t=i.length){if(r=(e.length-t)/2,o&&o[i])i=o[i].el;else if(":"==i[0]){if(n instanceof Text&&s==r)return void(n.data+="<br>"+i.substring(1).trimLeft());i=document.createTextNode(i.substring(1).trimLeft())}else i=i.el;null!=s&&r!=s&&(a=r>s?n:a.p),a.appendChild(i),n=i,i.p=a,s=r}})}}var none={_el:"Bulunamadı",name:"Bulunamadı",template:"\n    center\n      h1:Bet Bulunamadı\n      p:Aradığınız bet bulunamadı"};class Page$$1{constructor(e={}){(e=Object.assign({routes:{},none:none,handler:"body"},e)).routes.none=e.none,this.handler=e.handler;let t=this.routes=e.routes;Object.keys(t).filter(e=>"string"!=typeof t[e]).map(e=>(t[e]instanceof Sanal$$1||(t[e]=new Sanal$$1(t[e])),t[e].name||(t[e].name=e),t[e]._name=t[e].name,Object.defineProperty(t[e],"name",{get:()=>t[e]._name,set:s=>{this.title(s),this.Nav.value={[e]:s},t[e]._name=s}}),t[e])),O$1.ready.then(()=>{this.route(),window.onpopstate=this.route.bind(this)})}title(e){this._title&&(e=this._title.vars({title:e})),document.title=e}route(e){let t=0;e||(e=decodeURI(location.hash)),e instanceof Object&&!(e instanceof Array)&&(t=e.type&&"pushstate"==e.type,e=e.state||decodeURI(location.hash));var s=e.split("/");if("#"==s[0]&&s.shift(),""==s[0]&&this.routes.index)return this.route("index");let r,i=s.shift();if((r=this.routes[i])||(i="none",r=this.routes.none),"string"==typeof r)return this.route(r);if("function"==typeof r&&r.apply(null,s),r instanceof Sanal$$1){let e=this.page!=i;if(this.page=i,this.handler){let t=t=>{this.handler.handle?this.handler.handle(t,e):e&&this.handler.pitch(t)};"function"==typeof this.handler?this.handler(r):"string"==typeof this.handler?r.to=this.handler:t(r)}r.once?(r.once.apply(r,s),delete r.once):r.wake&&r.wake.apply(r,s)}t||window.history[(t?"push":"replace")+"State"](e,null,-1==e.indexOf("#")?"#/"+e:e)}Navigation(e={}){(e=Object.assign({hide:[]},e)).hide.push("none");let t=this.Nav="Nav".kur({View:Object.keys(this.routes).filter(t=>"string"!=typeof this.routes[t]&&-1==e.hide.indexOf(t)).reduce((e,t)=>(e[t]='a[href="/#/'+t+'"]',e),{})});return t.value=Object.keys(t.View).reduce((e,t)=>(e[t]=this.routes[t].name,e),{}),t}set page(e){this._page!=e&&(this.now=this.routes[e],this._page=e)}get page(){return this._page}set now(e){this.now&&this.now.idle&&this.now.idle();let{name:t}=e;this.title(t),this._now=e}get now(){return this._now}}var Tor={Sock:Sock,req:req};function Sock(e){(e=Object.assign({url:null,q:{},interval:3e3},"string"==typeof e?{url:e}:e||{})).q=Object.assign(e.q,e.socketio?{transport:"polling",EIO:3}:{_osid:O._uid(16)}),e.url=e.url||window.location.origin,e.socketio&&(e.url+="socket.io/");let t=/((ws|http)s?):\/\//g.exec(e.url);t?"http"==(t=t[1]).substr(0,4)&&(e.url=(t.length>4?"wss://":"ws://")+e.url.split("://")[1]):e.url="wss://"+e.url,e.url+="?"+_queryString(e.q);let s,r,i,n={};return i={on(e,t){return e instanceof Object?Object.keys(e).forEach(t=>{n[t]=e[t]}):n[e]=t,this},connect(){return this.connected||((s=Object.assign(new WebSocket(e.url+"&_tstamp="+O.Time.now),{onopen(e){r.stop(),this.connected=1,n.open&&n.open(e.data)},lib:this,onmessage(e){let t=(e=e.data).indexOf(","),s=e.substr(0,t);n[s]&&n[s](JSON.parse(e.substring(t+1)),this)},onclose(e){"error"==e.type&&n.error&&n.error(e),console.log("error",e),this.lib.connected=0,r.start()}})).onerror=s.onclose),this},emit(e,t){s.send(e+","+JSON.stringify(t))}},r=O.interval(i.connect,e.interval).start(),i.connect()}function req(e="",t,s){var r=new XMLHttpRequest;return e=e.indexOf("//")>-1?e:("string"!=typeof this?"./ep₺":this).vars({ep:e}),r.open(s?s.toUpperCase():t?"POST":"GET",e,!0),r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),new Promise(function(e,s){r.onreadystatechange=function(){if(4==this.readyState)if(200==this.status)if(""!=this.response){var t;try{t=JSON.parse(this.response)}catch(e){t=this.response}e(t)}else s({error:"empty response"});else s({error:{code:this.status}})},r.send(t?O._queryString(t):"")})}let _queryString=e=>{let t=arguments[1];var s=[];for(var r in e)if(e.hasOwnProperty(r)){var i=t?t+"["+r+"]":r,n=e[r];s.push("object"==typeof n?_queryString(n,i):encodeURIComponent(i)+"="+encodeURIComponent(n))}return s.join("&")},Disk=new Proxy({expire:function(e,t){Disk[e+":expire"]=Math.floor(+new Date/1e3)+Number(t)},rem:e=>{"string"==typeof e&&(e=[e]),e.forEach(e=>{localStorage.removeItem(e)})}},{get:(e,t)=>{if(e[t])return e[t];let s;if((s=localStorage.getItem(t+":expire"))&&Number(s)<Math.floor(+new Date/1e3))return delete Disk[t],null;t=localStorage.getItem(t);try{return JSON.parse(t)}catch(e){return t}},set:(e,t,s)=>(localStorage.setItem(t,JSON.stringify(s)),!0),deleteProperty:(e,t)=>(localStorage.removeItem(t),!0),has:(e,t)=>!!localStorage[t]}),O$1={require(js,path=""){return Tor.req(path+js+".js").then(code=>{let module={};return eval(code),module.exports})},define(e,t){this[e]||(this[e]={}),Object.keys(t).forEach(s=>{this[e][s]=t[s]})},UI:{M(){let e=O$1.toArray(arguments);return O$1.Model[e.shift()].apply("",e)}},req:Tor.req,Model:{},toArray:e=>Object.keys(e).map(t=>e[t]),ready:new Promise(e=>{document.addEventListener("DOMContentLoaded",()=>{let{body:t,head:s}=document;e({body:t,head:s})})})};export default O$1;export{Time,Chain,Tor,Page$$1 as Page,Disk,Sanal$$1 as Sanal,O$1 as O};