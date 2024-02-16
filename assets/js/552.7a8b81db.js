"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[552],{888:(t,e,s)=>{s.d(e,{R:()=>h});var i=s(348);class h{constructor(t){this.Ca=t}Bb(){(0,i.i)(this.ca)&&this.Oe()}ra(){(0,i.a)(this.ca)&&window.cancelAnimationFrame(this.ca),this.ca=void 0}Oe(){this.ca=window.requestAnimationFrame((()=>{(0,i.i)(this.ca)||(this.Ca(),this.Oe())}))}}},9115:(t,e,s)=>{s.d(e,{E:()=>r,t:()=>a});var i=s(348),h=s(352);function a(t,e=3e3){const s=(0,i.v)();return setTimeout((()=>{const e=t();e&&s.reject(e)}),e),s}class r{constructor(t){this.db=t,this.cb=(0,i.m)(""),this.referrerPolicy=null,t.setAttribute("frameBorder","0"),t.setAttribute("allow","autoplay; fullscreen; encrypted-media; picture-in-picture; accelerometer; gyroscope"),null!==this.referrerPolicy&&t.setAttribute("referrerpolicy",this.referrerPolicy)}get iframe(){return this.db}setup(t){(0,i.e)(this.fd.bind(this)),(0,i.l)(window,"message",this.Lg.bind(this)),(0,i.l)(this.db,"load",this.lc.bind(this))}fd(){const t=this.cb();if(!t.length)return void this.db.setAttribute("src","");const e=(0,i.p)((()=>this.Te()));this.db.setAttribute("src",(0,h.a)(t,e))}gd(t,e){this.db.contentWindow?.postMessage(JSON.stringify(t),e??"*")}Lg(t){const e=this.eb();if(t.source===this.db?.contentWindow&&(!(0,i.r)(e)||e===t.origin)){try{const e=JSON.parse(t.data);return void(e&&this.hd(e,t))}catch(t){}t.data&&this.hd(t.data,t)}}}},552:(t,e,s)=>{s.r(e),s.d(e,{VimeoProvider:()=>l});var i=s(348),h=s(7224),a=s(352),r=s(1716),c=s(4276),n=s(888),o=s(9115);const d=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","playProgress","loadProgress","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"];class l extends o.E{constructor(){super(...arguments),this.$$PROVIDER_TYPE="VIMEO",this.scope=(0,i.q)(),this.Fa=0,this.Ga=new h.T(0,0),this.Hb=new h.T(0,0),this.E=null,this.G=null,this.rd=null,this.N=(0,i.m)(""),this.oc=(0,i.m)(!1),this.sd=null,this.V=null,this.eh=null,this.Da=new n.R(this.bd.bind(this)),this.cookies=!1,this.title=!0,this.byline=!0,this.portrait=!0,this.color="00ADEF"}static{this.jd=/(?:https:\/\/)?(?:player\.)?vimeo(?:\.com)?\/(?:video\/)?(\d+)(?:\?hash=(.*))?/}static{this.dh=new Map}get c(){return this.b.delegate.c}get type(){return"vimeo"}get currentSrc(){return this.V}get videoId(){return this.N()}get hash(){return this.sd}get isPro(){return this.oc()}preconnect(){const t=[this.eb(),"https://i.vimeocdn.com","https://f.vimeocdn.com","https://fresnel.vimeocdn.com"];for(const e of t)(0,a.p)(e,"preconnect")}setup(t){this.b=t,super.setup(t),(0,i.e)(this.kd.bind(this)),(0,i.e)(this.fh.bind(this)),(0,i.e)(this.gh.bind(this)),this.c("provider-setup",this)}destroy(){this.H(),this.q("destroy")}async play(){const{paused:t}=this.b.$state;if((0,i.p)(t))return this.E||(this.E=(0,o.t)((()=>{if(this.E=null,t())return"Timed out."})),this.q("play")),this.E.promise}async pause(){const{paused:t}=this.b.$state;if(!(0,i.p)(t))return this.G||(this.G=(0,o.t)((()=>{if(this.G=null,!t())return"Timed out."})),this.q("pause")),this.G.promise}setMuted(t){this.q("setMuted",t)}setCurrentTime(t){this.q("seekTo",t)}setVolume(t){this.q("setVolume",t),this.q("setMuted",(0,i.p)(this.b.$state.muted))}setPlaybackRate(t){this.q("setPlaybackRate",t)}async loadSource(t){if(!(0,i.r)(t.src))return this.V=null,this.sd=null,void this.N.set("");const e=t.src.match(l.jd),s=e?.[1],h=e?.[2];this.N.set(s??""),this.sd=h??null,this.V=t}kd(){this.H();const t=this.N();t?this.cb.set(`${this.eb()}/video/${t}`):this.cb.set("")}fh(){const t=this.cb(),e=this.N(),s=l.dh,h=s.get(e);if(!e)return;const a=(0,i.v)();if(this.rd=a,h)return void a.resolve(h);const r=`https://vimeo.com/api/oembed.json?url=${t}`,n=new AbortController;return window.fetch(r,{mode:"cors",signal:n.signal}).then((t=>t.json())).then((t=>{const i=t?.thumbnail_url?.match(/vimeocdn.com\/video\/(.*)?_/)?.[1],h=i?`https://i.vimeocdn.com/video/${i}_1920x1080.webp`:"",r={title:t?.title??"",duration:t?.duration??0,poster:h,pro:"basic"!==t.account_type};s.set(e,r),a.resolve(r)})).catch((t=>{a.reject(),this.c("error",{message:`Failed to fetch vimeo video info from \`${r}\`.`,code:1,error:(0,c.c)(t)})})),()=>{a.reject(),n.abort()}}gh(){const t=this.oc(),{$state:e,qualities:s}=this.b;if(e.canSetPlaybackRate.set(t),s[r.L.Mc](!t),t)return(0,i.l)(s,"change",(()=>{if(s.auto)return;const t=s.selected?.id;t&&this.q("setQuality",t)}))}eb(){return"https://player.vimeo.com"}Te(){const{$iosControls:t}=this.b,{keyDisabled:e}=this.b.$props,{controls:s,playsinline:i}=this.b.$state,h=s()||t();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:h,h:this.hash,keyboard:h&&!e(),transparent:!0,playsinline:i(),dnt:!this.cookies}}bd(){this.q("getCurrentTime")}Eb(t,e){const{currentTime:s,paused:i,seeking:a,bufferedEnd:r}=this.b.$state;if(a()&&i()&&(this.q("getBuffered"),r()>t&&this.c("seeked",t,e)),s()===t)return;const c=s(),n={currentTime:t,played:this.Fa>=t?this.Ga:this.Ga=new h.T(0,this.Fa=t)};this.c("time-update",n,e),Math.abs(c-t)>1.5&&(this.c("seeking",t,e),!i()&&r()<t&&this.c("waiting",void 0,e))}bb(t,e){this.c("seeked",t,e)}md(t){const e=this.N();this.rd?.promise.then((e=>{if(!e)return;const{title:s,poster:i,duration:a,pro:r}=e,{$iosControls:c}=this.b,{controls:n}=this.b.$state,o=n()||c();this.Da.Bb(),this.oc.set(r),this.Hb=new h.T(0,a),this.c("poster-change",i,t),this.c("title-change",s,t),this.c("duration-change",a,t);const d={buffered:new h.T(0,0),seekable:this.Hb,duration:a};this.b.delegate.jc(d,t),o||this.q("_hideOverlay"),this.q("getQualities")})).catch((t=>{e===this.N()&&this.c("error",{message:"Failed to fetch oembed data",code:2,error:(0,c.c)(t)})}))}hh(t,e,s){switch(t){case"getCurrentTime":this.Eb(e,s);break;case"getBuffered":(0,i.w)(e)&&e.length&&this.Ye(e[e.length-1][1],s);break;case"setMuted":this.ab((0,i.p)(this.b.$state.volume),e,s);break;case"getChapters":break;case"getQualities":this.pc(e,s)}}ih(){for(const t of d)this.q("addEventListener",t)}Aa(t){this.c("pause",void 0,t),this.G?.resolve(),this.G=null}xb(t){this.c("play",void 0,t),this.E?.resolve(),this.E=null}jh(t){const{paused:e}=this.b.$state;e()||this.c("playing",void 0,t)}Ye(t,e){const s={buffered:new h.T(0,t),seekable:this.Hb};this.c("progress",s,e)}kh(t){this.c("waiting",void 0,t)}lh(t){const{paused:e}=this.b.$state;e()||this.c("playing",void 0,t)}dd(t){const{paused:e}=this.b.$state;e()&&this.c("play",void 0,t),this.c("waiting",void 0,t)}ab(t,e,s){const i={volume:t,muted:e};this.c("volume-change",i,s)}pc(t,e){this.b.qualities[c.Q.Za]=t.some((t=>"auto"===t.id))?()=>{this.q("setQuality","auto")}:void 0;for(const s of t){if("auto"===s.id)continue;const t=+s.id.slice(0,-1);isNaN(t)||this.b.qualities[r.L.oa]({id:s.id,width:t*(16/9),height:t,codec:"avc1,h.264",bitrate:-1},e)}this.fb(t.find((t=>t.active)),e)}fb({id:t}={},e){if(!t)return;const s="auto"===t,i=this.b.qualities.toArray().find((e=>e.id===t));s?(this.b.qualities[c.Q.Ya](s,e),this.b.qualities[r.L.pa](void 0,!0,e)):this.b.qualities[r.L.pa](i,!0,e)}mh(t,e,s){switch(t){case"ready":this.ih();break;case"loaded":this.md(s);break;case"play":this.xb(s);break;case"playProgress":this.jh(s);break;case"pause":this.Aa(s);break;case"loadProgress":this.Ye(e.seconds,s);break;case"waiting":this.dd(s);break;case"bufferstart":this.kh(s);break;case"bufferend":this.lh(s);break;case"volumechange":this.ab(e.volume,(0,i.p)(this.b.$state.muted),s);break;case"durationchange":this.Hb=new h.T(0,e.duration),this.c("duration-change",e.duration,s);break;case"playbackratechange":this.c("rate-change",e.playbackRate,s);break;case"qualitychange":this.fb(e,s);break;case"fullscreenchange":this.c("fullscreen-change",e.fullscreen,s);break;case"enterpictureinpicture":this.c("picture-in-picture-change",!0,s);break;case"leavepictureinpicture":this.c("picture-in-picture-change",!1,s);break;case"ended":this.c("end",void 0,s);break;case"error":this.U(e,s);break;case"seeked":this.bb(e.seconds,s)}}U(t,e){"play"!==t.method||this.E?.reject(t.message)}hd(t,e){t.event?this.mh(t.event,t.data,e):t.method&&this.hh(t.method,t.value,e)}lc(){}q(t,e){return this.gd({method:t,value:e})}H(){this.Da.ra(),this.Fa=0,this.Ga=new h.T(0,0),this.Hb=new h.T(0,0),this.E=null,this.G=null,this.rd=null,this.eh=null,this.oc.set(!1)}}}}]);