(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(t,n,e){t.exports=e(86)},48:function(t,n,e){},85:function(t,n,e){},86:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),i=e(20),o=e.n(i),c=(e(48),e(5)),u=e(6),l=e(9),p=e(7),s=e(8),m=e(1),b=e(3),g=e(13),d=e.n(g),f=e(14),h=e.n(f),x=function(t){return function(n){h.a.get("/index/start",{params:{file:t}}).then(function(t){return n({type:"GET_POSTERS",payload:t.data})}).catch(function(t){return console.log(t)})}},k=function(t,n){return function(e){h.a.get("/index/card",{params:{numb:t,file:n}}).then(function(t){return e({type:"GET_FILMDATA",payload:t.data})}).catch(function(t){return console.log(t)})}},v=function(t,n,e,a,r){var i;return"up"===t?0===n?(i=10,n=1):1===n?(i=0,n=2):2===n&&(i=5,n=0):"dn"===t&&(0===n?(i=5,n=2):2===n?(i=0,n=1):1===n&&(i=10,n=0)),e.splice(i,5,[a[1][0][0],a[1][0][1]],[a[1][1][0],a[1][1][1]],[a[1][2][0],a[1][2][1]],[a[1][3][0],a[1][3][1]],[a[1][4][0],a[1][4][1]]),{type:r,payload:e,numbs:a[0][0],trigger:n}},j=e(4),E=function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(l.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(r)))).next=function(){2===e.props.count?(e.props.getnext(e.props.trigger,e.props.posters,e.props.numbs,0),e.props.updatecount(e.props.count+1)):5===e.props.count?e.props.updatecount(1):e.props.updatecount(e.props.count+1)},e.last=function(){3===e.props.count?(e.props.getlast(e.props.trigger,e.props.posters,e.props.numbs,0),e.props.updatecount(e.props.count-1)):1===e.props.count?e.props.updatecount(5):e.props.updatecount(e.props.count-1)},e.imageClick=function(t){e.props.getfilmdata(t,0)},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getposters(0),this.props.getfilmdata()}},{key:"render",value:function(){var t=this,n=this.props.posters,e=this.props.numbs,a=0;var i={infinite:!0,slidesToShow:5,vertical:!0,beforeChange:function(t,n){0===n&&14===t&&(n=15),14===n&&0===t&&(t=15),a=n-t},afterChange:function(){1===a&&t.next(),-1===a&&t.last()},slidesToScroll:1,nextArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-5px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/up.png",alt:"up"})},null),prevArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-5px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/dn.png",alt:"dn"})},null)};return r.a.createElement("div",{style:{width:"170px"}},r.a.createElement(d.a,i,n.map(function(n){return r.a.createElement("div",{id:"posters"},r.a.createElement("input",{type:"hidden",name:"id"+n[0],value:n[0]}),r.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/mini/"+n[1]+"m0.jpg",alt:e,onClick:function(){return t.imageClick(n[0])}}))})))}}]),n}(r.a.Component),O=Object(j.b)(function(t){return{numbs:t.post.numbs,posters:t.post.posters,count:t.post.count,trigger:t.post.trigger}},{getposters:x,getfilmdata:k,updatecount:function(t){return function(n){n({type:"UPD_COUNT",payload:t})}},getnext:function(t,n,e,a){return function(r){h.a.get("/index/pgup",{params:{hide:e,file:a}}).then(function(e){return r(v("up",t,n,e.data,"GET_NEXT"))})}},getlast:function(t,n,e,a){return function(r){h.a.get("/index/pgdn",{params:{hide:e,file:a}}).then(function(e){return r(v("dn",t,n,e.data,"GET_NEXT"))})}}})(E),w=function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(l.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(r)))).next=function(){2===e.props.countr?(e.props.getnextr(e.props.triggerr,e.props.animate,e.props.numba,4),e.props.updatecountr(e.props.countr+1)):5===e.props.countr?e.props.updatecountr(1):e.props.updatecountr(e.props.countr+1)},e.last=function(){3===e.props.countr?(e.props.getlastr(e.props.triggerr,e.props.animate,e.props.numba,4),e.props.updatecountr(e.props.countr-1)):1===e.props.countr?e.props.updatecountr(5):e.props.updatecountr(e.props.countr-1)},e.imageClick=function(t){e.props.getfilmdata(t,4)},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.getposters(),this.props.getfilmdata()}},{key:"render",value:function(){var t=this,n=this.props.animate,e=this.props.numba,a=0;var i={infinite:!0,slidesToShow:5,vertical:!0,beforeChange:function(t,n){0===n&&14===t&&(n=15),14===n&&0===t&&(t=15),a=n-t},afterChange:function(){1===a&&t.next(),-1===a&&t.last()},slidesToScroll:1,nextArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-5px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/up.png",alt:"up"})},null),prevArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-5px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/dn.png",alt:"dn"})},null)};return r.a.createElement("div",{style:{width:"170px"}},r.a.createElement(d.a,i,n.map(function(n){return r.a.createElement("div",{id:"posters"},r.a.createElement("input",{type:"hidden",name:"id"+n[0],value:n[0]}),r.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/mini/"+n[1]+"m0.jpg",alt:e,onClick:function(){return t.imageClick(n[0])}}))})))}}]),n}(r.a.Component),y=Object(j.b)(function(t){return{numba:t.post.numba,animate:t.post.animate,count:t.post.count,countr:t.post.countr,triggerr:t.post.triggerr}},{getposters:x,getfilmdata:k,updatecountr:function(t){return function(n){n({type:"UPD_COUNTR",payload:t})}},getnextr:function(t,n,e,a){return function(r){h.a.get("/index/pgup",{params:{hide:e,file:a}}).then(function(e){return r(v("up",t,n,e.data,"GET_NEXTR"))})}},getlastr:function(t,n,e,a){return function(r){h.a.get("/index/pgdn",{params:{hide:e,file:a}}).then(function(e){return r(v("dn",t,n,e.data,"GET_NEXTR"))})}}})(w),C=e(11),N=e(2),z=e(36),T=e.n(z);function D(){var t=Object(m.a)(["\n  color: azure;\n  float: right;\n  width: 265px;\n  height: 68px;\n"]);return D=function(){return t},t}var S=N.a.div(D()),_=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.props.info;return r.a.createElement(S,null,r.a.createElement(T.a,{name:"rate",className:"Rating",starCount:10,value:t[3],starColor:"#3b00ff",emptyStarColor:"#34ada4"}),r.a.createElement("img",{src:"http://imdb.snick.ru/ratefor/01/"+t[9]+".png",alt:""}))}}]),n}(r.a.Component),A=Object(j.b)(function(t){return{info:t.post.info}})(_);function I(){var t=Object(m.a)(["\n  font-family: 'BebasNeueRegular', Arial, Helvetica, sans-serif;\n  padding-left: 18px;\n  color: azure;\n  margin: 1px;\n  float: left;\n  width: 100%;\n  font-weight: 100;\n"]);return I=function(){return t},t}function G(){var t=Object(m.a)(["\n    background: url(http://kshisa.ru/images/bill/clock.png) no-repeat;\n    color: azure;\n    float: right;\n    border: 1px solid azure;\n    width: 28%;\n    margin-right: 44px;\n"]);return G=function(){return t},t}var B=N.a.div(G()),U=N.a.h4(I()),P=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(p.a)(n).call(this,t))).state={date0:new Date,date1:new Date},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var t=new Date,n=(this.props.info[5]-this.props.info[5]%60)/60,e=this.props.info[5]%60;t.setHours(t.getHours()+n),t.setMinutes(t.getMinutes()+e),this.setState({date0:new Date,date1:t})}},{key:"render",value:function(){var t=this.props.info;return r.a.createElement(B,null,r.a.createElement(U,null,this.state.date0.toLocaleTimeString()),r.a.createElement(U,null,((t[5]-t[5]%60)/60<10?"0":"")+(t[5]-t[5]%60)/60+":"+(t[5]%60<10?"0":"")+t[5]%60),r.a.createElement(U,null,this.state.date1.toLocaleTimeString()))}}]),n}(r.a.Component),R=Object(j.b)(function(t){return{info:t.post.info}})(P),L=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this.props.crew;var n={infinite:!0,slidesToShow:5,nextArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-53px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/rt.png",alt:"up"})},null),prevArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-53px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/lt.png",alt:"dn"})},null)};return r.a.createElement("div",null,r.a.createElement(d.a,n,t.map(function(t){return r.a.createElement("div",{id:"crew"},r.a.createElement("div",{style:{color:"black"}},t[0]),r.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/crew/"+t[1]+".jpg",alt:""}),r.a.createElement("div",{style:{color:"black"}},t[2]))})))}}]),n}(r.a.Component),M=Object(j.b)(function(t){return{crew:t.post.crew}})(L),X=function(t){function n(){var t,e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=Object(l.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(r)))).imageClick=function(t){e.props.getfilmdata(t,0)},e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t=this,n=this.props.find;var e={infinite:!0,slidesToShow:5,nextArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-53px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/rt.png",alt:"up"})},null),prevArrow:r.a.createElement(function(t){var n=t.className,e=t.style,a=t.onClick;return r.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-53px",zIndex:"1"}),onClick:a,src:"http://kshisa.ru/images/butt/lt.png",alt:"down"})},null)};return r.a.createElement("div",null,r.a.createElement(d.a,e,n.map(function(n){return r.a.createElement("div",{id:"crew"},r.a.createElement("div",{style:{color:"black"}},n[3]),r.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/mini/"+n[1]+"m0.jpg",alt:"",onClick:function(){return t.imageClick(n[0])}}),r.a.createElement("div",{style:{color:"black"}},n[2]))})))}}]),n}(r.a.Component),F=Object(j.b)(function(t){return{find:t.post.find}},{getfilmdata:k})(X);function H(){var t=Object(m.a)(["\n  margin-left: 10px;\n"]);return H=function(){return t},t}function W(){var t=Object(m.a)(["\n  width: 58px;\n  margin-left: 4px;\n  margin-top: 7px;\n  margin-bottom: 4px;\n"]);return W=function(){return t},t}function J(){var t=Object(m.a)(["\n  width: 170px;\n  margin-left: 10px;\n"]);return J=function(){return t},t}function q(){var t=Object(m.a)(["\n  position: relative;\n  width: 80%;\n  margin: auto;\n  top: 27px;\n"]);return q=function(){return t},t}function V(){var t=Object(m.a)(["\n  position: relative;\n  width: 90%;\n  margin: auto;\n  color: black;\n  font-size: 12px;\n  margin-top: 4px;\n  background: url(http://kshisa.ru/images/butt/board.png) no-repeat;\n  height: 245px;\n  background-size: cover;\n"]);return V=function(){return t},t}function $(){var t=Object(m.a)(["\n  float: left;\n  width: 360px;\n  margin-top: 28px;\n  margin-left: -1px;\n"]);return $=function(){return t},t}function K(){var t=Object(m.a)(["\n  float: left;\n  width: 170px;\n  margin-left: 17px;\n  margin-top: 15px;\n"]);return K=function(){return t},t}function Q(){var t=Object(m.a)(["\n  background: url(http://kshisa.ru/images/butt/TV01.png) no-repeat;\n  background-size: contain;\n  height: 305px;\n  margin-left: 14px;\n"]);return Q=function(){return t},t}function Y(){var t=Object(m.a)(["\n  color: #19b5c4;\n  margin: -1px;\n  float: left;\n  width: 100%;\n  font-size: 13px;\n"]);return Y=function(){return t},t}function Z(){var t=Object(m.a)(["\n  color: white;\n  margin: -1px;\n  float: left;\n  width: 100%;\n"]);return Z=function(){return t},t}function tt(){var t=Object(m.a)(["\n  color: white;\n  float: left;\n  margin-left: 50px;\n  margin-top: 8px;\n"]);return tt=function(){return t},t}function nt(){var t=Object(m.a)(["\n  margin: 1px;\n"]);return nt=function(){return t},t}N.a.hr(nt()),N.a.h2(tt());var et=N.a.h3(Z()),at=N.a.h4(Y()),rt=N.a.div(Q()),it=N.a.img(K()),ot=N.a.div($()),ct=N.a.div(V()),ut=N.a.div(q()),lt=N.a.img(J()),pt=N.a.img(W()),st=N.a.img(H()),mt=function(t){function n(t){var e;return Object(c.a)(this,n),(e=Object(l.a)(this,Object(p.a)(n).call(this,t))).buttClickc=function(){e.setState(function(t){return{ButNumbl:0}})},e.buttClickg=function(){e.setState(function(t){return{ButNumbl:1}})},e.buttClicke=function(){e.props.updateplacard(0)},e.buttClickw=function(){e.props.updateplacard(1)},e.buttClickr=function(){e.setState(function(t){return{ButNumbr:0}})},e.buttClickd=function(){e.setState(function(t){return{ButNumbr:1}})},e.state={ButNumbl:0,ButNumbd:0},e.buttClickc=e.buttClickc.bind(Object(C.a)(Object(C.a)(e))),e.buttClickg=e.buttClickg.bind(Object(C.a)(Object(C.a)(e))),e.buttClickr=e.buttClickr.bind(Object(C.a)(Object(C.a)(e))),e.buttClickd=e.buttClickd.bind(Object(C.a)(Object(C.a)(e))),e}return Object(s.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){var t,n,e,a=this,i=this.props.info,o=this.props.butsc,c=this.props.butsg,u=this.props.placard;return t=0==this.state.ButNumbl?o:c,n=0==this.state.ButNumbr?r.a.createElement(A,null):r.a.createElement(R,null),0===u?e=r.a.createElement(M,null):1===u?e=i[10]:3===u&&(e=r.a.createElement(F,null)),r.a.createElement("div",null,r.a.createElement(rt,null,r.a.createElement(it,{src:"http://kshisa.ru/images/mini/"+i[0]+"m0.jpg",alt:""}),r.a.createElement(ot,null,r.a.createElement(lt,{src:"http://kshisa.ru/images/mini/"+i[0]+"m1.jpg",alt:""}),r.a.createElement(lt,{src:"http://kshisa.ru/images/mini/"+i[0]+"m2.jpg",alt:""}),r.a.createElement(lt,{src:"http://kshisa.ru/images/mini/"+i[0]+"m3.jpg",alt:""}),r.a.createElement(lt,{src:"http://kshisa.ru/images/mini/"+i[0]+"m4.jpg",alt:""})),r.a.createElement(et,null,i[2]+"  ("+i[4]+")"),r.a.createElement(at,null,i[1])),r.a.createElement(et,null,t.map(function(t){return r.a.createElement(pt,{src:"http://kshisa.ru/images/bill/"+t+".png",alt:""})}),n),r.a.createElement(st,{src:"http://kshisa.ru/images/bill/butsc.png",alt:"",onClick:function(){return a.buttClickc()}}),r.a.createElement(st,{src:"http://kshisa.ru/images/bill/butsg.png",alt:"",onClick:function(){return a.buttClickg()}}),r.a.createElement(st,{src:"http://kshisa.ru/images/butt/crew.png",alt:"",onClick:function(){return a.buttClicke()}}),r.a.createElement(st,{src:"http://kshisa.ru/images/butt/rew.png",alt:"",onClick:function(){return a.buttClickw()}}),r.a.createElement(st,{src:"http://kshisa.ru/images/bill/butsr.png",alt:"",onClick:function(){return a.buttClickr()}}),r.a.createElement(st,{src:"http://kshisa.ru/images/bill/butsd.png",alt:"",onClick:function(){return a.buttClickd()}}),r.a.createElement(ct,null,r.a.createElement(ut,null,e)))}}]),n}(a.Component),bt=Object(j.b)(function(t){return{info:t.post.info,butsc:t.post.butsc,butsg:t.post.butsg,placard:t.post.placard}},{updateplacard:function(t){return function(n){n({type:"UPD_PLAC",placard:t})}}})(mt),gt=(e(85),e(15)),dt=e(39),ft={info:"",crew:[],butsc:[],butsg:[],posters:[],animate:[],find:[],numbs:0,numba:0,trigger:0,triggerr:0,count:1,countr:1,placard:0},ht=Object(gt.c)({post:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ft,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_FIND":return Object(b.a)({},t,{placard:3,find:n.payload});case"UPD_PLAC":return Object(b.a)({},t,{placard:n.placard});case"GET_POSTERS":return Object(b.a)({},t,{numbs:n.payload[0],posters:n.payload[1],numba:n.payload[2],animate:n.payload[3]});case"GET_FILMDATA":return Object(b.a)({},t,{info:n.payload,butsc:n.payload[6],butsg:n.payload[7],crew:n.payload[8]});case"UPD_COUNT":return Object(b.a)({},t,{count:n.payload});case"UPD_COUNTR":return Object(b.a)({},t,{countr:n.payload});case"GET_NEXT":return Object(b.a)({},t,{posters:n.payload,numbs:n.numbs,trigger:n.trigger});case"GET_NEXTR":return Object(b.a)({},t,{animate:n.payload,numba:n.numbs,triggerr:n.trigger});default:return t}}}),xt=Object(gt.d)(ht,Object(gt.a)(dt.a)),kt=e(40);function vt(){var t=Object(m.a)(["\n  float: left;\n  margin-top: 6px;\n  margin-left: 4px;\n  height: 49px;\n  width: 47px;\n  border: 1px solid white;\n  padding: 2.2px;\n  background-image: url(http://kshisa.ru/images/butt/search.png);\n"]);return vt=function(){return t},t}function jt(){var t=Object(m.a)(["\n  width: 45px;\n  height: 45px;\n  float: left;\n  padding: 12.8px;\n"]);return jt=function(){return t},t}function Et(){var t=Object(m.a)(["\n  position: relative;\n  width: 70px;\n  height: 70px;\n  background: url(http://icon-icons.com/icons2/72/279581_msg2.png) no-repeat;\n  background-size: 180px 180px;\n  margin: auto;\n  z-index: 3;\n  -webkit-box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);\n  -moz-box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);\n  box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);\n  -webkit-border-radius: 999px;\n  -moz-border-radius: 999px;\n  border-radius: 999px;\n"]);return Et=function(){return t},t}function Ot(){var t=Object(m.a)(["\nposition: absolute;\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  z-index: 2;\n  opacity: 0;\n  border: 1px solid rgba(255,255,255,0);\n  -webkit-animation: pulsejg2 4s linear infinite;\n  -moz-animation: pulsejg2 4s linear infinite;\n  animation: pulsejg2 4s linear infinite;\n  -webkit-border-radius: 999px;\n  -moz-border-radius: 999px;\n  border-radius: 999px;\n  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\n  -moz-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\n  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"]);return Ot=function(){return t},t}function wt(){var t=Object(m.a)(["\n  position: absolute;\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  z-index: 1;\n  opacity: 0;\n  border: 3px solid rgba(255,255,255,.1);\n  -webkit-animation: pulsejg1 4s linear infinite;\n  -moz-animation: pulsejg1 4s linear infinite;\n  animation: pulsejg1 4s linear infinite;\n  -webkit-border-radius: 999px;\n  -moz-border-radius: 999px;\n  border-radius: 999px;\n  -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\n  -moz-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\n  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"]);return wt=function(){return t},t}function yt(){var t=Object(m.a)(["\n  margin: 2px 90px;\n  float: right;\n  position: absolute;\n"]);return yt=function(){return t},t}function Ct(){var t=Object(m.a)(["\n  width: 140px;\n  float: left;\n  margin-top: 6px;\n  margin-left: 17px;\n  height: 42px;\n  border: 4px double wheat\n}\n"]);return Ct=function(){return t},t}function Nt(){var t=Object(m.a)(["\n  background: url(http://kshisa.ru/images/bill/search.png) no-repeat 17px center/16px;\n  padding: 7px 8px 7px 40px;\n  font-size: 1.7em;\n  float: left;\n  margin-top: 6px;\n  margin-left: 3px;\n  color: white;\n  width: 299px;\n"]);return Nt=function(){return t},t}var zt=N.a.input(Nt()),Tt=N.a.img(Ct()),Dt=N.a.div(yt()),St=N.a.div(wt()),_t=N.a.div(Ot()),At=N.a.div(Et()),It=N.a.input(jt()),Gt=N.a.input.attrs({type:"submit",value:""})(vt()),Bt=Object(j.b)(function(t){return{}},{finded:function(t){return function(n){h.a.get("/index/find",{params:{find:t}}).then(function(t){return n({type:"GET_FIND",payload:t.data})}).catch(function(t){return console.log(t)})}}})(function(t){var n=Object(a.useState)(""),e=Object(kt.a)(n,2),i=e[0],o=e[1];return r.a.createElement("div",{className:"head"},r.a.createElement(Tt,{src:"http://kshisa.ru/images/butt/logo.png",alt:"Logo"}),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),t.finded(i)}},r.a.createElement(zt,{type:"input",value:i,onChange:function(t){return o(t.target.value)}}),r.a.createElement(Gt,null)),r.a.createElement(Dt,null,r.a.createElement(St,null),r.a.createElement(_t,null),r.a.createElement(At,null,r.a.createElement(It,{type:"image",name:"avat",src:"http://kshisa.ru/images/butt/ava000.png"}))))});function Ut(){var t=Object(m.a)(["\n    text-align: center;\n    color: #675353;\n    font-weight: 600;\n    font-style: oblique;\n    top: 210px;\n    left: 10%;\n    width: 60%;\n    height: 1320px;\n    float: left;\n    padding: 0 6px 0 6px;\n"]);return Ut=function(){return t},t}function Pt(){var t=Object(m.a)(["\n    width: 16%;\n    height: 1320px;\n    float: left;\n    border-right: 2px;\n    margin-bottom: -15px;\n    text-align: center;\n"]);return Pt=function(){return t},t}function Rt(){var t=Object(m.a)(["\n   \n    width: 960px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return Rt=function(){return t},t}var Lt=N.a.div(Rt()),Mt=N.a.div(Pt()),Xt=N.a.div(Ut()),Ft=function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(s.a)(n,t),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(j.a,{store:xt},r.a.createElement(Lt,null,r.a.createElement(Mt,null,r.a.createElement(O,null)),r.a.createElement(Xt,null,r.a.createElement(Bt,null),r.a.createElement(bt,null)),r.a.createElement(Mt,null,r.a.createElement(y,null))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ft,null),document.getElementById("cent")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.27c81554.chunk.js.map