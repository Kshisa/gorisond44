(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{42:function(t,n,e){t.exports=e(85)},47:function(t,n,e){},84:function(t,n,e){},85:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(20),o=e.n(i),u=(e(47),e(5)),c=e(6),s=e(10),p=e(7),l=e(9),m=e(1),b=e(3),g=e(15),d=e.n(g),f=e(14),h=e.n(f),x=function(t){return function(n){h.a.get("/index/start",{params:{file:t}}).then(function(t){return n({type:"GET_POSTERS",payload:t.data})}).catch(function(t){return console.log(t)})}},k=function(t,n){return function(e){h.a.get("/index/card",{params:{numb:t,file:n}}).then(function(t){return e({type:"GET_FILMDATA",payload:t.data})}).catch(function(t){return console.log(t)})}},v=function(t,n,e,r){var a;return"up"===t?0===n?(a=10,n=1):1===n?(a=0,n=2):2===n&&(a=5,n=0):"dn"===t&&(0===n?(a=5,n=2):2===n?(a=0,n=1):1===n&&(a=10,n=0)),e.splice(a,5,[r[1][0][0],r[1][0][1]],[r[1][1][0],r[1][1][1]],[r[1][2][0],r[1][2][1]],[r[1][3][0],r[1][3][1]],[r[1][4][0],r[1][4][1]]),{type:"GET_NEXTR",payload:e,numbs:r[2][0],triggerr:n}},j=function(t,n,e,r){var a;return"up"===t?0===n?(a=10,n=1):1===n?(a=0,n=2):2===n&&(a=5,n=0):"dn"===t&&(0===n?(a=5,n=2):2===n?(a=0,n=1):1===n&&(a=10,n=0)),e.splice(a,5,[r[1][0][0],r[1][0][1]],[r[1][1][0],r[1][1][1]],[r[1][2][0],r[1][2][1]],[r[1][3][0],r[1][3][1]],[r[1][4][0],r[1][4][1]]),{type:"GET_NEXT",payload:e,numbs:r[0][0],trigger:n}},O=e(8),w=function(t){function n(){var t,e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(s.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(a)))).next=function(){1===e.props.count?(e.props.getnext(e.props.trigger,e.props.posters,e.props.numbs),e.props.updatecount(e.props.count+1)):4===e.props.count?e.props.updatecount(0):e.props.updatecount(e.props.count+1)},e.last=function(){e.props.count>-1?(e.props.getlast(e.props.trigger,e.props.posters,e.props.numbs),e.props.updatecount(e.props.count-1)):-4===e.props.count?e.props.updatecount(0):e.props.updatecount(e.props.count-1)},e.imageClick=function(t){e.props.getfilmdata(t,0)},e}return Object(l.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getposters(0),this.props.getfilmdata()}},{key:"render",value:function(){var t=this,n=this.props.posters,e=this.props.numbs,r=0;var i={infinite:!0,slidesToShow:5,vertical:!0,beforeChange:function(t,n){0===n&&14===t&&(n=15),14===n&&0===t&&(t=15),r=n-t},afterChange:function(){1===r&&t.next(),-1===r&&t.last()},slidesToScroll:1,nextArrow:a.a.createElement(function(t){var n=t.className,e=t.style,r=t.onClick;return a.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-5px",zIndex:"1"}),onClick:r,src:"http://kshisa.ru/images/butt/up.png",alt:"up"})},null),prevArrow:a.a.createElement(function(t){var n=t.className,e=t.style,r=t.onClick;return a.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-5px",zIndex:"1"}),onClick:r,src:"http://kshisa.ru/images/butt/dn.png",alt:"dn"})},null)};return a.a.createElement("div",{style:{width:"170px"}},a.a.createElement(d.a,i,n.map(function(n){return a.a.createElement("div",{id:"posters"},a.a.createElement("input",{type:"hidden",name:"id"+n[0],value:n[0]}),a.a.createElement("div",{style:{color:"white"}},n[0]),a.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/mini/"+n[1]+"m0.jpg",alt:e,onClick:function(){return t.imageClick(n[0])}}))})))}}]),n}(a.a.Component),E=Object(O.b)(function(t){return{numbs:t.post.numbs,posters:t.post.posters,count:t.post.count,trigger:t.post.trigger}},{getposters:x,getfilmdata:k,updatecount:function(t){return function(n){n({type:"UPD_COUNT",payload:t})}},getnext:function(t,n,e){return function(r){h.a.get("/index/pgup",{params:{hide:e}}).then(function(e){return r(j("up",t,n,e.data))})}},getlast:function(t,n,e){return function(r){h.a.get("/index/pgdn",{params:{hide:e}}).then(function(e){return r(j("dn",t,n,e.data))})}}})(w),y=function(t){function n(){var t,e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=Object(s.a)(this,(t=Object(p.a)(n)).call.apply(t,[this].concat(a)))).next=function(){e.props.countr<4&&e.props.updatecountr(e.props.countr+1),4===e.props.countr&&(e.props.updatecountr(0),e.props.getnextr(e.props.triggerr,e.props.posters,e.props.numba))},e.last=function(){e.props.countr>-4&&e.props.updatecountr(e.props.countr-1),-4===e.props.countr&&(e.props.updatecountr(0),e.props.getlastr(e.props.triggerr,e.props.posters,e.props.numba))},e.imageClick=function(t){e.props.getfilmdata(t,4)},e}return Object(l.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getposters(),this.props.getfilmdata()}},{key:"render",value:function(){var t=this,n=this.props.animate,e=this.props.numbs,r=0;var i={infinite:!0,slidesToShow:5,vertical:!0,beforeChange:function(t,n){0===n&&14===t&&(n=15),14===n&&0===t&&(t=15),r=n-t},afterChange:function(){1===r&&t.next(),-1===r&&t.last()},slidesToScroll:1,nextArrow:a.a.createElement(function(t){var n=t.className,e=t.style,r=t.onClick;return a.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-5px",zIndex:"1"}),onClick:r,src:"http://kshisa.ru/images/butt/up.png",alt:"up"})},null),prevArrow:a.a.createElement(function(t){var n=t.className,e=t.style,r=t.onClick;return a.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-5px",zIndex:"1"}),onClick:r,src:"http://kshisa.ru/images/butt/dn.png",alt:"dn"})},null)};return a.a.createElement("div",{style:{width:"170px"}},a.a.createElement(d.a,i,n.map(function(n){return a.a.createElement("div",{id:"posters"},a.a.createElement("input",{type:"hidden",name:"id"+n[0],value:n[0]}),a.a.createElement("div",{style:{color:"white"}},n[0]),a.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/mini/"+n[1]+"m0.jpg",alt:e,onClick:function(){return t.imageClick(n[0])}}))})))}}]),n}(a.a.Component),C=Object(O.b)(function(t){return{numbs:t.post.numba,animate:t.post.animate,count:t.post.count,countr:t.post.countr,trigger:t.post.triggerr}},{getposters:x,getfilmdata:k,updatecountr:function(t){return function(n){n({type:"UPD_COUNTR",payload:t})}},getnextr:function(t,n,e){return function(r){h.a.get("/index/pgup",{params:{hide:e}}).then(function(e){return r(v("up",t,n,e.data))})}},getlastr:function(t,n,e){return function(r){h.a.get("/index/pgdn",{params:{hide:e}}).then(function(e){return r(v("dn",t,n,e.data))})}}})(y),N=e(4),z=e(2),T=e(36),S=e.n(T);function D(){var t=Object(m.a)(["\n  color: azure;\n  float: right;\n  width: 265px;\n  height: 68px;\n"]);return D=function(){return t},t}var B=z.a.div(D()),I=function(t){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){var t=this.props.info;return a.a.createElement(B,null,a.a.createElement(S.a,{name:"rate",className:"Rating",starCount:10,value:t[3],starColor:"#3b00ff",emptyStarColor:"#34ada4"}),a.a.createElement("img",{src:"http://imdb.snick.ru/ratefor/01/"+t[9]+".png",alt:""}))}}]),n}(a.a.Component),_=Object(O.b)(function(t){return{info:t.post.info}})(I);function A(){var t=Object(m.a)(["\n  color: white;\n  margin: 1px;\n  float: left;\n  width: 100%;\n"]);return A=function(){return t},t}function U(){var t=Object(m.a)(["\n  color: azure;\n  float: right;\n  width: 265px;\n"]);return U=function(){return t},t}var G=z.a.div(U()),M=z.a.h4(A()),R=function(t){function n(t){var e;return Object(u.a)(this,n),(e=Object(s.a)(this,Object(p.a)(n).call(this,t))).state={date0:new Date,date1:new Date},e}return Object(l.a)(n,t),Object(c.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerID=setInterval(function(){return t.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var t=new Date,n=(this.props.info[5]-this.props.info[5]%60)/60,e=this.props.info[5]%60;t.setHours(t.getHours()+n),t.setMinutes(t.getMinutes()+e),this.setState({date0:new Date,date1:t})}},{key:"render",value:function(){var t=this.props.info;return a.a.createElement(G,null,a.a.createElement(M,null,this.state.date0.toLocaleTimeString()),a.a.createElement(M,null,(t[5]-t[5]%60)/60+":"+t[5]%60),a.a.createElement(M,null,this.state.date1.toLocaleTimeString()))}}]),n}(a.a.Component),P=Object(O.b)(function(t){return{info:t.post.info}})(R),L=function(t){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){var t=this.props.crew;var n={infinite:!0,slidesToShow:5,nextArrow:a.a.createElement(function(t){var n=t.className,e=t.style,r=t.onClick;return a.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",right:"-53px",zIndex:"1"}),onClick:r,src:"http://kshisa.ru/images/butt/rt.png",alt:"up"})},null),prevArrow:a.a.createElement(function(t){var n=t.className,e=t.style,r=t.onClick;return a.a.createElement("img",{className:n,style:Object(b.a)({},e,{display:"block",width:"30px",height:"30px",left:"-53px",zIndex:"1"}),onClick:r,src:"http://kshisa.ru/images/butt/lt.png",alt:"dn"})},null)};return a.a.createElement("div",null,a.a.createElement(d.a,n,t.map(function(t){return a.a.createElement("div",{id:"crew"},a.a.createElement("div",{style:{color:"black"}},t[0]),a.a.createElement("img",{className:"image",src:"http://kshisa.ru/images/crew/"+t[1]+".jpg",alt:""}),a.a.createElement("div",{style:{color:"black"}},t[2]))})))}}]),n}(a.a.Component),X=Object(O.b)(function(t){return{crew:t.post.crew}})(L);function W(){var t=Object(m.a)(["\n  margin-left: 10px;\n"]);return W=function(){return t},t}function F(){var t=Object(m.a)(["\n  width: 58px;\n  margin-left: 4px;\n  margin-top: 7px;\n  margin-bottom: 4px;\n"]);return F=function(){return t},t}function H(){var t=Object(m.a)(["\n  width: 170px;\n  margin-left: 10px;\n"]);return H=function(){return t},t}function J(){var t=Object(m.a)(["\n  position: relative;\n  width: 80%;\n  margin: auto;\n  top: 27px;\n"]);return J=function(){return t},t}function q(){var t=Object(m.a)(["\n  position: relative;\n  width: 90%;\n  margin: auto;\n  color: black;\n  font-size: 12px;\n  margin-top: 4px;\n  background: url(http://kshisa.ru/images/butt/board.png) no-repeat;\n  height: 245px;\n  background-size: cover;\n"]);return q=function(){return t},t}function V(){var t=Object(m.a)(["\n  float: left;\n  width: 360px;\n  margin-top: 28px;\n  margin-left: -1px;\n"]);return V=function(){return t},t}function $(){var t=Object(m.a)(["\n  float: left;\n  width: 170px;\n  margin-left: 17px;\n  margin-top: 15px;\n"]);return $=function(){return t},t}function K(){var t=Object(m.a)(["\n  background: url(http://kshisa.ru/images/butt/TV01.png) no-repeat;\n  background-size: contain;\n  height: 305px;\n  margin-left: 14px;\n"]);return K=function(){return t},t}function Q(){var t=Object(m.a)(["\n  color: #19b5c4;\n  margin: -1px;\n  float: left;\n  width: 100%;\n  font-size: 13px;\n"]);return Q=function(){return t},t}function Y(){var t=Object(m.a)(["\n  color: white;\n  margin: -1px;\n  float: left;\n  width: 100%;\n"]);return Y=function(){return t},t}function Z(){var t=Object(m.a)(["\n  color: white;\n  float: left;\n  margin-left: 50px;\n  margin-top: 8px;\n"]);return Z=function(){return t},t}function tt(){var t=Object(m.a)(["\n  margin: 1px;\n"]);return tt=function(){return t},t}z.a.hr(tt()),z.a.h2(Z());var nt=z.a.h3(Y()),et=z.a.h4(Q()),rt=z.a.div(K()),at=z.a.img($()),it=z.a.div(V()),ot=z.a.div(q()),ut=z.a.div(J()),ct=z.a.img(H()),st=z.a.img(F()),pt=z.a.img(W()),lt=function(t){function n(t){var e;return Object(u.a)(this,n),(e=Object(s.a)(this,Object(p.a)(n).call(this,t))).buttClickc=function(){e.setState(function(t){return{ButNumbl:0}})},e.buttClickg=function(){e.setState(function(t){return{ButNumbl:1}})},e.buttClicke=function(){e.setState(function(t){return{ButNumbd:0}})},e.buttClickw=function(){e.setState(function(t){return{ButNumbd:1}})},e.buttClickr=function(){e.setState(function(t){return{ButNumbr:0}})},e.buttClickd=function(){e.setState(function(t){return{ButNumbr:1}})},e.state={ButNumbl:0,ButNumbr:0,ButNumbd:0},e.buttClickc=e.buttClickc.bind(Object(N.a)(Object(N.a)(e))),e.buttClickg=e.buttClickg.bind(Object(N.a)(Object(N.a)(e))),e.buttClicke=e.buttClicke.bind(Object(N.a)(Object(N.a)(e))),e.buttClickw=e.buttClickw.bind(Object(N.a)(Object(N.a)(e))),e.buttClickr=e.buttClickr.bind(Object(N.a)(Object(N.a)(e))),e.buttClickd=e.buttClickd.bind(Object(N.a)(Object(N.a)(e))),e}return Object(l.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){var t,n,e,r=this,i=this.props.info,o=this.props.butsc,u=this.props.butsg;return t=0==this.state.ButNumbl?o:u,n=0==this.state.ButNumbr?a.a.createElement(_,null):a.a.createElement(P,null),e=0==this.state.ButNumbd?a.a.createElement(X,null):i[10],a.a.createElement("div",null,a.a.createElement(rt,null,a.a.createElement(at,{src:"http://kshisa.ru/images/mini/"+i[0]+"m0.jpg",alt:""}),a.a.createElement(it,null,a.a.createElement(ct,{src:"http://kshisa.ru/images/mini/"+i[0]+"m1.jpg",alt:""}),a.a.createElement(ct,{src:"http://kshisa.ru/images/mini/"+i[0]+"m2.jpg",alt:""}),a.a.createElement(ct,{src:"http://kshisa.ru/images/mini/"+i[0]+"m3.jpg",alt:""}),a.a.createElement(ct,{src:"http://kshisa.ru/images/mini/"+i[0]+"m4.jpg",alt:""})),a.a.createElement(nt,null,i[2]+"  ("+i[4]+")"),a.a.createElement(et,null,i[1])),a.a.createElement(nt,null,t.map(function(t){return a.a.createElement(st,{src:"http://kshisa.ru/images/bill/"+t+".png",alt:""})}),n),a.a.createElement(pt,{src:"http://kshisa.ru/images/bill/butsc.png",alt:"",onClick:function(){return r.buttClickc()}}),a.a.createElement(pt,{src:"http://kshisa.ru/images/bill/butsg.png",alt:"",onClick:function(){return r.buttClickg()}}),a.a.createElement(pt,{src:"http://kshisa.ru/images/butt/crew.png",alt:"",onClick:function(){return r.buttClicke()}}),a.a.createElement(pt,{src:"http://kshisa.ru/images/butt/rew.png",alt:"",onClick:function(){return r.buttClickw()}}),a.a.createElement(pt,{src:"http://kshisa.ru/images/bill/butsr.png",alt:"",onClick:function(){return r.buttClickr()}}),a.a.createElement(pt,{src:"http://kshisa.ru/images/bill/butsd.png",alt:"",onClick:function(){return r.buttClickd()}}),a.a.createElement(ot,null,a.a.createElement(ut,null,e)))}}]),n}(r.Component),mt=Object(O.b)(function(t){return{info:t.post.info,butsc:t.post.butsc,butsg:t.post.butsg}})(lt),bt=(e(84),e(13)),gt=e(39),dt={info:"",crew:[],butsc:[],butsg:[],posters:[],animate:[],numbs:0,numba:0,trigger:0,triggerr:0,count:0,countr:0},ft=Object(bt.c)({post:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"GET_POSTERS":return Object(b.a)({},t,{numbs:n.payload[0],posters:n.payload[1],numba:n.payload[2],animate:n.payload[3]});case"GET_FILMDATA":return Object(b.a)({},t,{info:n.payload,butsc:n.payload[6],butsg:n.payload[7],crew:n.payload[8]});case"UPD_COUNT":return Object(b.a)({},t,{count:n.payload});case"UPD_COUNTR":return Object(b.a)({},t,{countr:n.payload});case"GET_NEXT":return Object(b.a)({},t,{posters:n.payload,numbs:n.numbs,trigger:n.trigger});case"GET_NEXTR":return Object(b.a)({},t,{posters:n.payload,numbs:n.numba,trigger:n.triggerr});default:return t}}}),ht=Object(bt.d)(ft,Object(bt.a)(gt.a));function xt(){var t=Object(m.a)(["\n  float: left;\n  margin-top: 6px;\n  margin-left: 4px;\n  width: 43px;\n  border: 1px solid white;\n  padding: 2.2px;\n"]);return xt=function(){return t},t}function kt(){var t=Object(m.a)(["\n  width: 45px;\n  height: 45px;\n  float: left;\n  padding: 12.8px;\n"]);return kt=function(){return t},t}function vt(){var t=Object(m.a)(["\n  position: relative;\n  width: 70px;\n  height: 70px;\n  background: url(http://icon-icons.com/icons2/72/279581_msg2.png) no-repeat;\n  background-size: 180px 180px;\n  margin: auto;\n  z-index: 3;\n  -webkit-box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);\n  -moz-box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);\n  box-shadow: 0 0 0 10px rgba(255,255,255,.2), 0 0 25px 2px rgba(0,0,0,.4), inset 0 0 0 15px rgba(255,255,155,.4);\n  -webkit-border-radius: 999px;\n  -moz-border-radius: 999px;\n  border-radius: 999px;\n"]);return vt=function(){return t},t}function jt(){var t=Object(m.a)(["\nposition: absolute;\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  z-index: 2;\n  opacity: 0;\n  border: 1px solid rgba(255,255,255,0);\n  -webkit-animation: pulsejg2 4s linear infinite;\n  -moz-animation: pulsejg2 4s linear infinite;\n  animation: pulsejg2 4s linear infinite;\n  -webkit-border-radius: 999px;\n  -moz-border-radius: 999px;\n  border-radius: 999px;\n  -webkit-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\n  -moz-box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\n  box-shadow: inset 0px 0px 12px 5px rgba(255, 255, 255, .8);\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"]);return jt=function(){return t},t}function Ot(){var t=Object(m.a)(["\n  position: absolute;\n  width: 70px;\n  height: 70px;\n  margin: auto;\n  z-index: 1;\n  opacity: 0;\n  border: 3px solid rgba(255,255,255,.1);\n  -webkit-animation: pulsejg1 4s linear infinite;\n  -moz-animation: pulsejg1 4s linear infinite;\n  animation: pulsejg1 4s linear infinite;\n  -webkit-border-radius: 999px;\n  -moz-border-radius: 999px;\n  border-radius: 999px;\n  -webkit-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\n  -moz-box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\n  box-shadow: inset 0px 0px 15px 10px rgba(0, 0, 0, .6);\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n"]);return Ot=function(){return t},t}function wt(){var t=Object(m.a)(["\n  margin: 2px 90px;\n  float: right;\n  position: absolute;\n"]);return wt=function(){return t},t}function Et(){var t=Object(m.a)(["\n  width: 140px;\n  float: left;\n  margin-top: 6px;\n  margin-left: 17px;\n  height: 42px;\n  border: 4px double wheat\n}\n"]);return Et=function(){return t},t}function yt(){var t=Object(m.a)(["\n  background: url(http://kshisa.ru/images/bill/search.png) no-repeat 17px center/16px;\n  padding: 7px 8px 7px 40px;\n  font-size: 1.7em;\n  float: left;\n  margin-top: 6px;\n  margin-left: 3px;\n  color: white;\n  width: 299px;\n"]);return yt=function(){return t},t}var Ct=z.a.input(yt()),Nt=z.a.img(Et()),zt=z.a.div(wt()),Tt=z.a.div(Ot()),St=z.a.div(jt()),Dt=z.a.div(vt()),Bt=z.a.input(kt()),It=z.a.input(xt()),_t=function(){return a.a.createElement("div",{className:"head"},a.a.createElement(Nt,{src:"http://kshisa.ru/images/butt/logo.png",alt:"Logo"}),a.a.createElement(Ct,null),a.a.createElement(It,{type:"image",src:"http://kshisa.ru/images/butt/search.png"}),a.a.createElement(zt,null,a.a.createElement(Tt,null),a.a.createElement(St,null),a.a.createElement(Dt,null,a.a.createElement(Bt,{type:"image",name:"avat",src:"http://kshisa.ru/images/butt/ava000.png"}))))};function At(){var t=Object(m.a)(["\n    text-align: center;\n    color: #675353;\n    font-weight: 600;\n    font-style: oblique;\n    top: 210px;\n    left: 10%;\n    width: 60%;\n    height: 1320px;\n    float: left;\n    padding: 0 6px 0 6px;\n"]);return At=function(){return t},t}function Ut(){var t=Object(m.a)(["\n    width: 16%;\n    height: 1320px;\n    float: left;\n    border-right: 2px;\n    margin-bottom: -15px;\n    text-align: center;\n"]);return Ut=function(){return t},t}function Gt(){var t=Object(m.a)(["\n   \n    width: 960px;\n    margin-left: auto;\n    margin-right: auto;\n"]);return Gt=function(){return t},t}var Mt=z.a.div(Gt()),Rt=z.a.div(Ut()),Pt=z.a.div(At()),Lt=function(t){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(l.a)(n,t),Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement(O.a,{store:ht},a.a.createElement(Mt,null,a.a.createElement(Rt,null,a.a.createElement(E,null)),a.a.createElement(Pt,null,a.a.createElement(_t,null),a.a.createElement(mt,null)),a.a.createElement(Rt,null,a.a.createElement(C,null))))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Lt,null),document.getElementById("cent")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.1c12ee0d.chunk.js.map