import{d as Y,u as X,g as Me,o as g,c as y,F as z,E as G,k as p,t as I,m as N,f as ve,a as Q,p as re,q as oe,_ as V,h as de,a4 as xe,a5 as Ce,n as me,O as Te,G as Ae,H as Oe,e as he,D as Ie,I as J,w as le,v as pe,a6 as Le,a7 as Pe,a8 as He,a9 as Ne,aa as je,ab as ze,ac as Ee,ad as Ye,ae as Ve,af as Fe,Y as Be,j as Re,z as We,ag as Ue,ah as Je,ai as Ge,aj as Ze}from"./chunks/framework.bbhau2DI.js";import{t as _e}from"./chunks/theme.nxqjYtbD.js";function qe(e){const r={};for(let a=0;a<e.length;a++){const i=e[a],f=i.frontMatter.tags;Array.isArray(f)&&f.forEach(d=>{r[d]||(r[d]=[]),r[d].push(i)})}return r}function Ke(e){const r=[];let a="0",i=-1;for(let f=0;f<e.length;f++){const d=e[f];if(d.frontMatter.date){const _=d.frontMatter.date.split("-")[0];_===a?r[i].push(d):(i++,r[i]=[],r[i].push(d),a=_)}}return r}function Qe(e){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(a=>a.id&&a.hasChildNodes()).map(a=>{const i=Number(a.tagName[1]);return{title:Xe(a),link:"#"+a.id,level:i}})}function Xe(e){let r="";for(const a of e.childNodes)if(a.nodeType===1){if(a.classList.contains("VPBadge")||a.classList.contains("header-anchor"))continue;r+=a.textContent}else a.nodeType===3&&(r+=a.textContent);return r.trim()}const et=e=>(re("data-v-69b61450"),e=e(),oe(),e),tt={class:"main"},nt={class:"yearItem"},st={class:"year"},at=["href"],rt={class:"title"},ot=et(()=>p("div",{class:"title-o"},null,-1)),it={class:"date"},ct=Y({__name:"Archives",setup(e){const{theme:r}=X(),a=Me(()=>Ke(r.value.posts));return(i,f)=>(g(),y("div",tt,[(g(!0),y(z,null,G(a.value,d=>(g(),y("div",nt,[p("div",st,I(d[0].frontMatter.date.split("-")[0]),1),(g(!0),y(z,null,G(d,(_,m)=>(g(),y("a",{href:N(ve)(_.regularPath),key:m,class:"article"},[p("div",rt,[ot,Q(" "+I(_.frontMatter.title),1)]),p("div",it,I(_.frontMatter.date.slice(5)),1)],8,at))),128))]))),256))]))}}),ut=V(ct,[["__scopeId","data-v-69b61450"]]),$e=e=>(re("data-v-6b5bf8a1"),e=e(),oe(),e),lt={class:"main"},dt=$e(()=>p("h1",{class:"tags-header"},"Tags",-1)),ht={class:"tags"},ft=["onClick"],pt={class:"tag-length"},_t={class:"header"},vt={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},mt=$e(()=>p("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),$t=[mt],gt={class:"header-text"},yt=["href"],Mt={class:"title"},wt=$e(()=>p("div",{class:"title-o"},null,-1)),bt={class:"date"},Dt=Y({__name:"Tags",setup(e){const{theme:r}=X(),a=Me(()=>qe(r.value.posts));let i=de("");const f=_=>{i.value=_},d=_=>({fontSize:`${_*.04+.85}em`});return(_,m)=>(g(),y("div",lt,[dt,p("div",ht,[(g(!0),y(z,null,G(a.value,(S,h)=>(g(),y("span",{onClick:T=>f(h),class:me(["tag",{activetag:N(i)===h}]),style:Te(d(a.value[h].length))},[Q(I(h)+" ",1),p("span",pt,I(a.value[h].length),1)],14,ft))),256))]),xe(p("h4",_t,[(g(),y("svg",vt,$t)),p("span",gt,I(N(i)),1)],512),[[Ce,N(i)]]),(g(!0),y(z,null,G(a.value[N(i)],(S,h)=>(g(),y("a",{href:N(ve)(S.regularPath),key:h,class:"article"},[p("div",Mt,[wt,Q(" "+I(S.frontMatter.title),1)]),p("div",bt,I(S.frontMatter.date),1)],8,yt))),128))]))}}),St=V(Dt,[["__scopeId","data-v-6b5bf8a1"]]),kt={},xt={class:"hero"};function Ct(e,r){return g(),y("div",xt,"PC UPGRADE AND REPAIR")}const Tt=V(kt,[["render",Ct],["__scopeId","data-v-7e6c5b5d"]]),At=e=>(re("data-v-5a21af5e"),e=e(),oe(),e),Ot=At(()=>p("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),It=Y({__name:"CopyWright",setup(e){const r=new Date().getFullYear();return(a,i)=>(g(),y("footer",null,[Q(" Powered by "),Ot,Q(" | Copyright © 2022-"+I(N(r))+" | MIT License ",1)]))}}),Lt=V(It,[["__scopeId","data-v-5a21af5e"]]),ge=e=>(re("data-v-cd9851de"),e=e(),oe(),e),Pt=ge(()=>p("h1",{class:"blog-title"},"NOTES",-1)),Ht={class:"blogList"},Nt=["href"],jt={class:"title"},zt={class:"date"},Et={class:"pagination"},Yt=["onClick"],Vt=ge(()=>p("br",null,null,-1)),Ft=ge(()=>p("br",null,null,-1)),Bt=Y({__name:"Page",setup(e){const{theme:r}=X();let a=r.value.posts||[],i=r.value.postLength,f=r.value.pageSize,d=i%f===0?i/f:i/f+1;d=parseInt(d.toString());let _=de(1);a=a.filter(w=>w.regularPath.indexOf("index")<0);let m={};for(let w=0;w<d;w++)m[w]=[];let S=0;for(let w=0;w<a.length;w++)m[S].length>f-1&&(S+=1),m[S].push(a[w]);let h=de([]);h.value=m[_.value-1];const T=w=>{_.value=w,h.value=m[_.value-1]},k=w=>{const A=w.split("-");let b=A[0],M="",F=A[2];switch(A[1]){case"1":case"01":M="Jan";break;case"2":case"02":M="Feb";break;case"3":case"03":M="Mar";break;case"4":case"04":M="Apr";break;case"5":case"05":M="May";break;case"6":case"06":M="Jun";break;case"7":case"07":M="Jul";break;case"8":case"08":M="Aug";break;case"9":case"09":M="Sep";break;case"10":M="Oct";break;case"11":M="Nov";break;case"12":M="Dec";break;default:M="Month"}return`${M} ${F}, ${b}`};return(w,A)=>(g(),y(z,null,[Pt,p("div",Ht,[(g(!0),y(z,null,G(N(h),b=>(g(),y("a",{class:"blog",href:N(ve)(b.regularPath)},[p("div",jt,I(b.frontMatter.title),1),p("div",zt,I(k(b.frontMatter.date)),1)],8,Nt))),256))]),p("div",Et,[(g(!0),y(z,null,G(N(d),b=>(g(),y("div",{class:me(["link",{activeLink:N(_)===b}]),key:b,onClick:M=>T(b)},I(b),11,Yt))),128))]),Vt,Ft],64))}}),Rt=V(Bt,[["__scopeId","data-v-cd9851de"]]),Wt={key:0,class:"category"},Ut={class:"list"},Jt={class:"header"},Gt=["href"],Zt={key:1},qt={class:"header"},Kt=["href"],Qt=Y({__name:"Category",setup(e){const{frontmatter:r,theme:a}=X(),i=Ae([]),f=de(!1);return Oe(()=>{i.value=Qe(r.value.outline??a.value.outline),f.value=i.value.some(d=>d.level===2)}),(d,_)=>i.value.length>0?(g(),y("div",Wt,[p("ul",Ut,[(g(!0),y(z,null,G(i.value,m=>(g(),y("li",Jt,[m.level===2?(g(),y("a",{key:0,href:m.link,class:"header-h2"},I(m.title),9,Gt)):he("",!0),m.level===3?(g(),y("ul",Zt,[p("li",qt,[p("a",{href:m.link,class:me(["header-h3",{showIndent:f.value}])},I(m.title),11,Kt)])])):he("",!0)]))),256))])])):he("",!0)}}),Xt=V(Qt,[["__scopeId","data-v-9d1e4980"]]);var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function be(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var De={exports:{}};(function(e,r){(function(a,i){e.exports=i()})(we,function(){var a=1e3,i=6e4,f=36e5,d="millisecond",_="second",m="minute",S="hour",h="day",T="week",k="month",w="quarter",A="year",b="date",M="Invalid Date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,ee=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,te={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(c){var s=["th","st","nd","rd"],t=c%100;return"["+c+(s[(t-20)%10]||s[t]||s[0])+"]"}},ne=function(c,s,t){var o=String(c);return!o||o.length>=s?c:""+Array(s+1-o.length).join(t)+c},B={s:ne,z:function(c){var s=-c.utcOffset(),t=Math.abs(s),o=Math.floor(t/60),n=t%60;return(s<=0?"+":"-")+ne(o,2,"0")+":"+ne(n,2,"0")},m:function c(s,t){if(s.date()<t.date())return-c(t,s);var o=12*(t.year()-s.year())+(t.month()-s.month()),n=s.clone().add(o,k),u=t-n<0,l=s.clone().add(o+(u?-1:1),k);return+(-(o+(t-n)/(u?n-l:l-n))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:k,y:A,w:T,d:h,D:b,h:S,m,s:_,ms:d,Q:w}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},L="en",P={};P[L]=te;var Z="$isDayjsObject",R=function(c){return c instanceof ce||!(!c||!c[Z])},ie=function c(s,t,o){var n;if(!s)return L;if(typeof s=="string"){var u=s.toLowerCase();P[u]&&(n=u),t&&(P[u]=t,n=u);var l=s.split("-");if(!n&&l.length>1)return c(l[0])}else{var $=s.name;P[$]=s,n=$}return!o&&n&&(L=n),n||!o&&L},x=function(c,s){if(R(c))return c.clone();var t=typeof s=="object"?s:{};return t.date=c,t.args=arguments,new ce(t)},v=B;v.l=ie,v.i=R,v.w=function(c,s){return x(c,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var ce=function(){function c(t){this.$L=ie(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[Z]=!0}var s=c.prototype;return s.parse=function(t){this.$d=function(o){var n=o.date,u=o.utc;if(n===null)return new Date(NaN);if(v.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var l=n.match(F);if(l){var $=l[2]-1||0,D=(l[7]||"0").substring(0,3);return u?new Date(Date.UTC(l[1],$,l[3]||1,l[4]||0,l[5]||0,l[6]||0,D)):new Date(l[1],$,l[3]||1,l[4]||0,l[5]||0,l[6]||0,D)}}return new Date(n)}(t),this.init()},s.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},s.$utils=function(){return v},s.isValid=function(){return this.$d.toString()!==M},s.isSame=function(t,o){var n=x(t);return this.startOf(o)<=n&&n<=this.endOf(o)},s.isAfter=function(t,o){return x(t)<this.startOf(o)},s.isBefore=function(t,o){return this.endOf(o)<x(t)},s.$g=function(t,o,n){return v.u(t)?this[o]:this.set(n,t)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(t,o){var n=this,u=!!v.u(o)||o,l=v.p(t),$=function(U,H){var E=v.w(n.$u?Date.UTC(n.$y,H,U):new Date(n.$y,H,U),n);return u?E:E.endOf(h)},D=function(U,H){return v.w(n.toDate()[U].apply(n.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(H)),n)},C=this.$W,O=this.$M,j=this.$D,q="set"+(this.$u?"UTC":"");switch(l){case A:return u?$(1,0):$(31,11);case k:return u?$(1,O):$(0,O+1);case T:var W=this.$locale().weekStart||0,se=(C<W?C+7:C)-W;return $(u?j-se:j+(6-se),O);case h:case b:return D(q+"Hours",0);case S:return D(q+"Minutes",1);case m:return D(q+"Seconds",2);case _:return D(q+"Milliseconds",3);default:return this.clone()}},s.endOf=function(t){return this.startOf(t,!1)},s.$set=function(t,o){var n,u=v.p(t),l="set"+(this.$u?"UTC":""),$=(n={},n[h]=l+"Date",n[b]=l+"Date",n[k]=l+"Month",n[A]=l+"FullYear",n[S]=l+"Hours",n[m]=l+"Minutes",n[_]=l+"Seconds",n[d]=l+"Milliseconds",n)[u],D=u===h?this.$D+(o-this.$W):o;if(u===k||u===A){var C=this.clone().set(b,1);C.$d[$](D),C.init(),this.$d=C.set(b,Math.min(this.$D,C.daysInMonth())).$d}else $&&this.$d[$](D);return this.init(),this},s.set=function(t,o){return this.clone().$set(t,o)},s.get=function(t){return this[v.p(t)]()},s.add=function(t,o){var n,u=this;t=Number(t);var l=v.p(o),$=function(O){var j=x(u);return v.w(j.date(j.date()+Math.round(O*t)),u)};if(l===k)return this.set(k,this.$M+t);if(l===A)return this.set(A,this.$y+t);if(l===h)return $(1);if(l===T)return $(7);var D=(n={},n[m]=i,n[S]=f,n[_]=a,n)[l]||1,C=this.$d.getTime()+t*D;return v.w(C,this)},s.subtract=function(t,o){return this.add(-1*t,o)},s.format=function(t){var o=this,n=this.$locale();if(!this.isValid())return n.invalidDate||M;var u=t||"YYYY-MM-DDTHH:mm:ssZ",l=v.z(this),$=this.$H,D=this.$m,C=this.$M,O=n.weekdays,j=n.months,q=n.meridiem,W=function(H,E,ae,ue){return H&&(H[E]||H(o,u))||ae[E].slice(0,ue)},se=function(H){return v.s($%12||12,H,"0")},U=q||function(H,E,ae){var ue=H<12?"AM":"PM";return ae?ue.toLowerCase():ue};return u.replace(ee,function(H,E){return E||function(ae){switch(ae){case"YY":return String(o.$y).slice(-2);case"YYYY":return v.s(o.$y,4,"0");case"M":return C+1;case"MM":return v.s(C+1,2,"0");case"MMM":return W(n.monthsShort,C,j,3);case"MMMM":return W(j,C);case"D":return o.$D;case"DD":return v.s(o.$D,2,"0");case"d":return String(o.$W);case"dd":return W(n.weekdaysMin,o.$W,O,2);case"ddd":return W(n.weekdaysShort,o.$W,O,3);case"dddd":return O[o.$W];case"H":return String($);case"HH":return v.s($,2,"0");case"h":return se(1);case"hh":return se(2);case"a":return U($,D,!0);case"A":return U($,D,!1);case"m":return String(D);case"mm":return v.s(D,2,"0");case"s":return String(o.$s);case"ss":return v.s(o.$s,2,"0");case"SSS":return v.s(o.$ms,3,"0");case"Z":return l}return null}(H)||l.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(t,o,n){var u,l=this,$=v.p(o),D=x(t),C=(D.utcOffset()-this.utcOffset())*i,O=this-D,j=function(){return v.m(l,D)};switch($){case A:u=j()/12;break;case k:u=j();break;case w:u=j()/3;break;case T:u=(O-C)/6048e5;break;case h:u=(O-C)/864e5;break;case S:u=O/f;break;case m:u=O/i;break;case _:u=O/a;break;default:u=O}return n?u:v.a(u)},s.daysInMonth=function(){return this.endOf(k).$D},s.$locale=function(){return P[this.$L]},s.locale=function(t,o){if(!t)return this.$L;var n=this.clone(),u=ie(t,o,!0);return u&&(n.$L=u),n},s.clone=function(){return v.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},c}(),ye=ce.prototype;return x.prototype=ye,[["$ms",d],["$s",_],["$m",m],["$H",S],["$W",h],["$M",k],["$y",A],["$D",b]].forEach(function(c){ye[c[1]]=function(s){return this.$g(s,c[0],c[1])}}),x.extend=function(c,s){return c.$i||(c(s,ce,x),c.$i=!0),x},x.locale=ie,x.isDayjs=R,x.unix=function(c){return x(1e3*c)},x.en=P[L],x.Ls=P,x.p={},x})})(De);var en=De.exports;const fe=be(en);var Se={exports:{}};(function(e,r){(function(a,i){e.exports=i()})(we,function(){return function(a,i,f){a=a||{};var d=i.prototype,_={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function m(h,T,k,w){return d.fromToBase(h,T,k,w)}f.en.relativeTime=_,d.fromToBase=function(h,T,k,w,A){for(var b,M,F,ee=k.$locale().relativeTime||_,te=a.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ne=te.length,B=0;B<ne;B+=1){var L=te[B];L.d&&(b=w?f(h).diff(k,L.d,!0):k.diff(h,L.d,!0));var P=(a.rounding||Math.round)(Math.abs(b));if(F=b>0,P<=L.r||!L.r){P<=1&&B>0&&(L=te[B-1]);var Z=ee[L.l];A&&(P=A(""+P)),M=typeof Z=="string"?Z.replace("%d",P):Z(P,T,L.l,F);break}}if(T)return M;var R=F?ee.future:ee.past;return typeof R=="function"?R(M):R.replace("%s",M)},d.to=function(h,T){return m(h,T,this,!0)},d.from=function(h,T){return m(h,T,this)};var S=function(h){return h.$u?f.utc():f()};d.toNow=function(h){return this.to(S(this),h)},d.fromNow=function(h){return this.from(S(this),h)}}})})(Se);var tn=Se.exports;const nn=be(tn),sn={class:"title"},an={class:"date"},rn=Y({__name:"Title",setup(e){const r=X().page.value,{title:a,description:i,lastUpdated:f,frontmatter:d}=r;fe.extend(nn);const _=fe().to(fe(d.date||Date.now()));return(m,S)=>(g(),y(z,null,[p("h1",sn,I(N(a)),1),p("div",an,"🕒 Published at: "+I(N(_)),1)],64))}}),on=V(rn,[["__scopeId","data-v-cec0b25f"]]),cn=e=>(re("data-v-b26aecce"),e=e(),oe(),e),un=cn(()=>p("svg",{xmlns:"http://www.w3.org/2000/svg",display:"block",width:"30",height:"30",fill:"var(--vp-c-green-2)",class:"bi bi-arrow-return-left",viewBox:"0 0 16 16"},[p("path",{"fill-rule":"evenodd",d:"M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"})],-1)),ln=Y({__name:"MyLayout",setup(e){const{Layout:r}=_e,a=()=>{history.back()};return(i,f)=>{const d=Ie("Comments");return g(),y(z,null,[J(N(r),null,{"doc-before":le(()=>[J(on),J(Xt)]),"doc-after":le(()=>[p("div",null,[p("button",{onClick:a},[Q("BACK..."),un])]),J(d)]),"home-hero-before":le(()=>[J(Tt)]),"home-features-after":le(()=>[J(Rt)]),_:1}),J(Lt)],64)}}}),dn=V(ln,[["__scopeId","data-v-b26aecce"]]),hn={..._e,Layout:dn,enhanceApp(e){_e.enhanceApp(e);const{app:r}=e;r.component("Archives",ut),r.component("Tags",St)}};function ke(e){if(e.extends){const r=ke(e.extends);return{...r,...e,async enhanceApp(a){r.enhanceApp&&await r.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const K=ke(hn),fn=Y({name:"VitePressApp",setup(){const{site:e}=X();return Re(()=>{We(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),e.value.router.prefetchLinks&&Ue(),Je(),Ge(),K.setup&&K.setup(),()=>Ze(K.Layout)}});async function pn(){const e=vn(),r=_n();r.provide(Pe,e);const a=He(e.route);return r.provide(Ne,a),r.component("Content",je),r.component("ClientOnly",ze),Object.defineProperties(r.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),K.enhanceApp&&await K.enhanceApp({app:r,router:e,siteData:Ee}),{app:r,router:e,data:a}}function _n(){return Ye(fn)}function vn(){let e=pe,r;return Ve(a=>{let i=Fe(a),f=null;return i&&(e&&(r=i),(e||r===i)&&(i=i.replace(/\.js$/,".lean.js")),f=Be(()=>import(i),__vite__mapDeps([]))),pe&&(e=!1),f},K.NotFound)}pe&&pn().then(({app:e,router:r,data:a})=>{r.go().then(()=>{Le(r.route,a.site),e.mount("#app")})});export{pn as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
