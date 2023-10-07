(function(){"use strict";var e={4846:function(e,t,n){var r=n(9242),s=n(3396),i=n.p+"img/bell_sound.15b5bf4c.svg",u=n.p+"img/bell_not_sound.8aab292d.svg";const _={id:"main_container",style:{height:"100vh",width:"100vw",position:"fixed",top:"0",left:"0"}},l={style:{position:"absolute",right:"20px",top:"20px"}};function o(e,t,n,r,o,c){const p=(0,s.up)("SettingView"),d=(0,s.up)("TimerView");return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",l,[o.ring_sound?((0,s.wg)(),(0,s.iD)("img",{key:0,class:"bell_image",src:i,onClick:t[0]||(t[0]=(...e)=>c.toggle_sound&&c.toggle_sound(...e))})):((0,s.wg)(),(0,s.iD)("img",{key:1,class:"bell_image",src:u,onClick:t[1]||(t[1]=(...e)=>c.toggle_sound&&c.toggle_sound(...e))}))]),o.setting_view?((0,s.wg)(),(0,s.j4)(p,{key:0,onStartingTimer:c.starting_timer},null,8,["onStartingTimer"])):((0,s.wg)(),(0,s.j4)(d,{key:1,prop_number:o.number,is_ring_on:o.ring_sound,onReset_button:c.reset_button},null,8,["prop_number","is_ring_on","onReset_button"]))])}var c=n.p+"img/set_image.af22389c.svg",p=n.p+"img/minus_image.b046d9f3.svg",d=n.p+"img/plus_image.e921d967.svg";const a=e=>((0,s.dD)("data-v-6570bdac"),e=e(),(0,s.Cn)(),e),h={style:{width:"100%",height:"100%"}},g={id:"set_container",style:{"margin-top":"140px"}},m={class:"makanai"},v=a((()=>(0,s._)("div",null,[(0,s._)("img",{src:c})],-1))),b=a((()=>(0,s._)("div",null," 세트 수(회) ",-1))),x={style:{"margin-left":"20px"}},f=a((()=>(0,s._)("img",{src:p},null,-1))),y=[f],w=a((()=>(0,s._)("img",{src:d},null,-1))),k=[w],D={class:"makanai"},C=a((()=>(0,s._)("div",null,[(0,s._)("img",{src:c})],-1))),z=a((()=>(0,s._)("div",null," 세트 간격(초) ",-1))),I={style:{"margin-left":"20px"}},O=a((()=>(0,s._)("img",{src:p},null,-1))),j=[O],P=a((()=>(0,s._)("img",{src:d},null,-1))),V=[P],$={id:"rep_container"},M={class:"makanai"},T=a((()=>(0,s._)("div",null,[(0,s._)("img",{src:c})],-1))),A=a((()=>(0,s._)("div",null," 반복 수(회) ",-1))),U={style:{"margin-left":"20px"}},q=a((()=>(0,s._)("img",{src:p},null,-1))),S=[q],Z=a((()=>(0,s._)("img",{src:d},null,-1))),F=[Z],H={class:"makanai"},R=a((()=>(0,s._)("div",null,[(0,s._)("img",{src:c})],-1))),Y=a((()=>(0,s._)("div",null," 운동 시간(초) ",-1))),B={style:{"margin-left":"20px"}},E=a((()=>(0,s._)("img",{src:p},null,-1))),K=[E],G=a((()=>(0,s._)("img",{src:d},null,-1))),J=[G],L={class:"makanai"},N=a((()=>(0,s._)("div",null,[(0,s._)("img",{src:c})],-1))),Q=a((()=>(0,s._)("div",null," 휴식 시간(초) ",-1))),W={style:{"margin-left":"20px"}},X=a((()=>(0,s._)("img",{src:p},null,-1))),ee=[X],te=a((()=>(0,s._)("img",{src:d},null,-1))),ne=[te],re=a((()=>(0,s._)("div",null,"프리셋",-1))),se=[re],ie=a((()=>(0,s._)("div",null," 시작 ",-1))),ue=[ie];function _e(e,t,n,i,u,_){return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",g,[(0,s._)("div",m,[v,b,(0,s._)("div",x,[(0,s._)("div",{onClick:t[0]||(t[0]=(...e)=>_.minusing_set_count&&_.minusing_set_count(...e))},y)]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"makanai_number",id:"set_count","onUpdate:modelValue":t[1]||(t[1]=e=>u.number.set_count=e),type:"text"},null,512),[[r.nr,u.number.set_count]])]),(0,s._)("div",null,[(0,s._)("div",{onClick:t[2]||(t[2]=(...e)=>_.plusing_set_count&&_.plusing_set_count(...e))},k)])]),(0,s._)("div",D,[C,z,(0,s._)("div",I,[(0,s._)("div",{onClick:t[3]||(t[3]=(...e)=>_.minusing_set_interval&&_.minusing_set_interval(...e))},j)]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"makanai_number",id:"set_count","onUpdate:modelValue":t[4]||(t[4]=e=>u.number.set_interval=e),type:"text"},null,512),[[r.nr,u.number.set_interval]])]),(0,s._)("div",null,[(0,s._)("div",{onClick:t[5]||(t[5]=(...e)=>_.plusing_set_interval&&_.plusing_set_interval(...e))},V)])])]),(0,s._)("div",$,[(0,s._)("div",M,[T,A,(0,s._)("div",U,[(0,s._)("div",{onClick:t[6]||(t[6]=(...e)=>_.minusing_rep_count&&_.minusing_rep_count(...e))},S)]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"makanai_number",id:"set_count","onUpdate:modelValue":t[7]||(t[7]=e=>u.number.rep_count=e),type:"text"},null,512),[[r.nr,u.number.rep_count]])]),(0,s._)("div",null,[(0,s._)("div",{onClick:t[8]||(t[8]=(...e)=>_.plusing_rep_count&&_.plusing_rep_count(...e))},F)])]),(0,s._)("div",H,[R,Y,(0,s._)("div",B,[(0,s._)("div",{onClick:t[9]||(t[9]=(...e)=>_.minusing_rep_excute&&_.minusing_rep_excute(...e))},K)]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"makanai_number",id:"set_count","onUpdate:modelValue":t[10]||(t[10]=e=>u.number.rep_excute=e),type:"text"},null,512),[[r.nr,u.number.rep_excute]])]),(0,s._)("div",null,[(0,s._)("div",{onClick:t[11]||(t[11]=(...e)=>_.plusing_rep_excute&&_.plusing_rep_excute(...e))},J)])]),(0,s._)("div",L,[N,Q,(0,s._)("div",W,[(0,s._)("div",{onClick:t[12]||(t[12]=(...e)=>_.minusing_rep_rest&&_.minusing_rep_rest(...e))},ee)]),(0,s._)("div",null,[(0,s.wy)((0,s._)("input",{class:"makanai_number",id:"set_count","onUpdate:modelValue":t[13]||(t[13]=e=>u.number.rep_rest=e),type:"text"},null,512),[[r.nr,u.number.rep_rest]])]),(0,s._)("div",null,[(0,s._)("div",{onClick:t[14]||(t[14]=(...e)=>_.plusing_rep_rest&&_.plusing_rep_rest(...e))},ne)])])]),(0,s._)("div",{id:"preset_button",onClick:t[15]||(t[15]=(...e)=>_.preset_button&&_.preset_button(...e))},se),(0,s._)("div",{id:"start_button",onClick:t[16]||(t[16]=(...e)=>_.starting&&_.starting(...e))},ue)])}var le={data(){return{number:{set_count:1,set_interval:0,rep_count:0,rep_excute:0,rep_rest:0}}},methods:{plusing_set_count(){this.number.set_count++},minusing_set_count(){this.number.set_count<=1?this.number.set_count=1:this.number.set_count--},plusing_set_interval(){this.number.set_interval++},minusing_set_interval(){this.number.set_interval<=0?this.number.set_interval=0:this.number.set_interval--},plusing_rep_count(){this.number.rep_count++},minusing_rep_count(){this.number.rep_count<=0?this.number.rep_count=0:this.number.rep_count--},plusing_rep_excute(){this.number.rep_excute++},minusing_rep_excute(){this.number.rep_excute<=0?this.number.rep_excute=0:this.number.rep_excute--},plusing_rep_rest(){this.number.rep_rest++},minusing_rep_rest(){this.number.rep_rest<=0?this.number.rep_rest=0:this.number.rep_rest--},starting(){this.$emit("startingTimer",this.number)},preset_button(){this.number={set_count:5,set_interval:60,rep_count:20,rep_excute:15,rep_rest:15}}}},oe=n(89);const ce=(0,oe.Z)(le,[["render",_e],["__scopeId","data-v-6570bdac"]]);var pe=ce,de=n(7139);const ae=e=>((0,s.dD)("data-v-57dfb488"),e=e(),(0,s.Cn)(),e),he={style:{width:"100%",height:"100%"}},ge={style:{"margin-top":"50px"}},me={height:"300",width:"300",style:{display:"block",margin:"0 auto"}},ve=["r"],be=["r"],xe=["r"],fe=["r"],ye=["r"],we=["r"],ke={key:0,style:{position:"absolute",top:"200px",left:"50%",transform:"translate(-50%, -50%)","text-align":"center"}},De={key:1,style:{position:"absolute",top:"200px",left:"50%",transform:"translate(-50%, -50%)","text-align":"center"}},Ce=ae((()=>(0,s._)("div",null," 끝! ",-1))),ze=[Ce],Ie={style:{"margin-top":"10px"}},Oe={style:{"text-align":"center"}},je={key:0},Pe={key:0,style:{"margin-right":"10px"}},Ve={style:{display:"flex","justify-content":"center","align-items":"center","flex-wrap":"wrap","overflow-y":"scroll",height:"calc(100vh - 50px - 300px - 50px - 80px - 25px - 40px)"}},$e={id:"main_button_container"},Me={key:0},Te={key:1},Ae=ae((()=>(0,s._)("div",null,"리셋",-1))),Ue=[Ae],qe={key:0,style:{display:"flex","justify-content":"center","align-items":"center",position:"fixed",top:"0",left:"0",width:"100%",height:"100%","background-color":"rgb(0,0,0,0.8)"}},Se={style:{color:"white","font-size":"50px"}};function Ze(e,t,n,r,i,u){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",he,[(0,s._)("div",ge,[((0,s.wg)(),(0,s.iD)("svg",me,[(0,s._)("circle",{class:"progress_back",cx:"150",cy:"150",r:i.set_r,"stroke-width":"22",style:{fill:"none",stroke:"#f3f3f3"}},null,8,ve),(0,s._)("circle",{ref:"progress_color_set",class:"progress_color",cx:"150",cy:"150",r:i.set_r,"stroke-width":"22",style:{fill:"none",stroke:"#f9a885"}},null,8,be),(0,s._)("circle",{class:"progress_back",cx:"150",cy:"150",r:i.rep_r,"stroke-width":"22",style:{fill:"none",stroke:"#ededed"}},null,8,xe),(0,s._)("circle",{ref:"progress_color_rep",class:"progress_color",cx:"150",cy:"150",r:i.rep_r,"stroke-width":"22",style:{fill:"none",stroke:"#60e372"}},null,8,fe),(0,s._)("circle",{class:"progress_back",cx:"150",cy:"150",r:i.excute_r,"stroke-width":"22",style:{fill:"none",stroke:"#e0e0e0"}},null,8,ye),(0,s._)("circle",{ref:"progress_color",class:"progress_color",cx:"150",cy:"150",r:i.excute_r,"stroke-width":"22",style:{fill:"none",stroke:"#5976cc"}},null,8,we)])),i.schedule.length>0&&i.current_index<i.schedule.length?((0,s.wg)(),(0,s.iD)("div",ke,[(0,s._)("div",null,(0,de.zw)(i.schedule[i.current_index].type),1),(0,s._)("div",null,(0,de.zw)((parseInt(100*i.current_time)/100).toFixed(2))+" / "+(0,de.zw)(i.schedule[i.current_index].value)+"s ",1),(0,s._)("div",{id:"small_reset_button",onClick:t[0]||(t[0]=(...e)=>u.excute_stop&&u.excute_stop(...e)),style:{"border-radius":"10px",padding:"5px 10px","margin-top":"20px"}},(0,de.zw)(0==i.small_reset_state?"리셋":"시작"),1)])):i.current_index>=i.schedule.length?((0,s.wg)(),(0,s.iD)("div",De,ze)):(0,s.kq)("",!0)]),(0,s._)("div",Ie,[(0,s._)("div",Oe,[i.schedule.length>0&&i.current_index<i.schedule.length?((0,s.wg)(),(0,s.iD)("span",je,[i.schedule[i.current_index].hasOwnProperty("rep")?((0,s.wg)(),(0,s.iD)("span",Pe,(0,de.zw)(i.schedule[i.current_index].rep+1)+" / "+(0,de.zw)(i.number.rep_count)+"랩 ",1)):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,de.zw)(i.schedule[i.current_index].set+1)+" / "+(0,de.zw)(i.number.set_count)+"세트 ",1)])):(0,s.kq)("",!0)]),(0,s._)("div",Ve,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(i.schedule,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{key:e,class:(0,de.C_)(["schedule_unit",[i.current_index<t?"schedule_complete":"schedule_to_do"]])},(0,de.zw)(e.type)+" : "+(0,de.zw)(e.value)+"s ",3)))),128))])]),(0,s._)("div",$e,[(0,s._)("div",{class:"ui_button",onClick:t[1]||(t[1]=(...e)=>u.chuushi&&u.chuushi(...e))},[i.is_running?((0,s.wg)(),(0,s.iD)("div",Me,"중지")):((0,s.wg)(),(0,s.iD)("div",Te,"재시작"))]),(0,s._)("div",{class:"ui_button",onClick:t[2]||(t[2]=(...e)=>u.reset_button&&u.reset_button(...e))},Ue)])]),i.black_screen?((0,s.wg)(),(0,s.iD)("div",qe,[(0,s._)("div",Se,(0,de.zw)(i.counting_down),1)])):(0,s.kq)("",!0)],64)}n(7658);var Fe=n.p+"media/do_rest.27278c70.mp3",He=n.p+"media/excute.52de3a13.mp3",Re=n.p+"media/end_rep.dbc1dcc2.mp3",Ye=n.p+"media/end_set.4ec8a363.mp3",Be=n.p+"media/beep.eb4f2756.mp3",Ee=n.p+"media/end_ex.81b11ebb.mp3",Ke={props:{prop_number:{type:Object,default:()=>({set_count:0,set_interval:0,rep_count:0,rep_excute:0,rep_rest:0})},is_ring_on:Boolean},data(){return{number:{set_count:5,set_interval:3,rep_count:2,rep_excute:2,rep_rest:1},schedule:[],current_index:0,screen_w:0,excute_r:100,rep_r:110,set_r:120,current_time:0,interval:void 0,schedule_tree:{},is_running:!0,sound_zip:{},counting_down:5,start_interval:void 0,black_screen:!0,small_reset_state:!1}},mounted(){this.screen_w=screen.width;for(let e=0;e<this.number.set_count;e++){for(let t=0;t<this.number.rep_count;t++)this.number.rep_excute>0&&this.schedule.push({type:"운동",value:this.number.rep_excute,set:e,rep:t}),this.number.rep_rest>0&&this.schedule.push({type:"휴식",value:this.number.rep_rest,set:e,rep:t});this.number.rep_rest>0&&this.schedule.pop(),this.number.set_interval>0&&this.schedule.push({type:"세트휴식",value:this.number.set_interval,set:e+1})}if(this.number.set_interval>0&&this.schedule.pop(),0==this.schedule.length)return alert("운동스케쥴을 확인해 주세요"),void this.reset_button();this.$refs.progress_color.style.strokeDasharray=this.excute_r*Math.PI*2,this.$refs.progress_color_rep.style.strokeDasharray=this.rep_r*Math.PI*2,this.$refs.progress_color_set.style.strokeDasharray=this.set_r*Math.PI*2,this.progress(0),this.progress_rep(0),this.progress_set(0),this.start_interval=setInterval((()=>{if(0==this.counting_down)return clearInterval(this.start_interval),this.black_screen=!1,void(this.interval=setInterval((()=>{this.progress(this.current_time),this.current_time+=.01}),10));this.counting_down--}),1e3)},created(){this.sound_zip={do_rest:new Audio(Fe),do_excute:new Audio(He),end_rep:new Audio(Re),end_set:new Audio(Ye),beep:new Audio(Be),end_ex:new Audio(Ee)},this.number=this.prop_number},methods:{progress(e){let t=e/this.schedule[this.current_index].value,n=this.excute_r*Math.PI*2*(1-t);if(this.$refs.progress_color.style.strokeDashoffset=n,t>=1){if(this.current_index+=1,this.current_index==this.schedule.length)return this.progress_rep(this.number.rep_count),this.progress_set(this.number.set_count),clearInterval(this.interval),void(this.is_ring_on&&(this.sound_zip.beep.play(),this.sound_zip.end_ex.play()));this.schedule[this.current_index-1].rep!=this.schedule[this.current_index].rep&&(this.progress_rep(this.schedule[this.current_index].rep),this.is_ring_on&&this.sound_zip.beep.play()),this.schedule[this.current_index-1].set!=this.schedule[this.current_index].set&&(this.progress_set(this.schedule[this.current_index].set),this.is_ring_on&&this.sound_zip.end_set.play()),this.schedule[this.current_index-1].rep==this.schedule[this.current_index].rep&&this.schedule[this.current_index-1].set==this.schedule[this.current_index].set&&this.is_ring_on&&(console.log(this.schedule[this.current_index]),this.sound_zip.beep.play()),this.current_time=0}},progress_rep(e){let t=e/this.number.rep_count,n=this.rep_r*Math.PI*2*(1-t);this.$refs.progress_color_rep.style.strokeDashoffset=n},progress_set(e){let t=e/this.number.set_count,n=this.set_r*Math.PI*2*(1-t);this.$refs.progress_color_set.style.strokeDashoffset=n},reset_button(){clearInterval(this.interval),this.$emit("reset_button")},chuushi(){if(this.is_running)return clearInterval(this.interval),void(this.is_running=!1);this.is_running=!0,this.interval=setInterval((()=>{this.progress(this.current_time),this.current_time+=.01}),10)},excute_stop(){this.current_time=0,this.progress(0)}}};const Ge=(0,oe.Z)(Ke,[["render",Ze],["__scopeId","data-v-57dfb488"]]);var Je=Ge,Le={components:{SettingView:pe,TimerView:Je},data(){return{ring_sound:!0,setting_view:!0,number:{}}},methods:{toggle_sound(){this.ring_sound=!this.ring_sound},starting_timer(e){this.number=e,this.setting_view=!1},reset_button(){this.setting_view=!0}}};const Ne=(0,oe.Z)(Le,[["render",o],["__scopeId","data-v-23f1be73"]]);var Qe=Ne;(0,r.ri)(Qe).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,i){if(!r){var u=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],i=e[c][2];for(var _=!0,l=0;l<r.length;l++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(_=!1,i<u&&(u=i));if(_){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[r,s,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p=""}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,i,u=r[0],_=r[1],l=r[2],o=0;if(u.some((function(t){return 0!==e[t]}))){for(s in _)n.o(_,s)&&(n.m[s]=_[s]);if(l)var c=l(n)}for(t&&t(r);o<u.length;o++)i=u[o],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},r=self["webpackChunkexercise_timer"]=self["webpackChunkexercise_timer"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(4846)}));r=n.O(r)})();
//# sourceMappingURL=app.650b0bf8.js.map