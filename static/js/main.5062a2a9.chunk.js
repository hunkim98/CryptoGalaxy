(this.webpackJsonpcryptogalaxy=this.webpackJsonpcryptogalaxy||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var i=n(4),s=n(28),r=n.n(s),a=(n(39),n(40),n(9)),o=n(12),u=n(8),c=n(15),h=n(26),l=n(23),d="https://upbit-next-proxy.vercel.app/api/",w=function(){var t=Object(c.a)(Object(u.a)().mark((function t(e,n){var i;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(d+"days"+"?market=".concat(e,"&count=").concat(n));case 2:return i=t.sent,console.log(i),t.abrupt("return",i.data.data);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(Object(u.a)().mark((function t(e){var n;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(d+"ticker"+"?market=".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(t,e){for(var n=new Date(t[0].candle_date_time_utc).getTime()-new Date(t[t.length-1].candle_date_time_utc).getTime()>0?Object(o.a)(t).reverse():t,i=new Date(e[0].candle_date_time_utc).getTime()-new Date(e[e.length-1].candle_date_time_utc).getTime()>0?Object(o.a)(t).reverse():t,s=n.map((function(t){return t.prev_closing_price})),r=i.map((function(t){return t.prev_closing_price})),a=s.reduce((function(t,e){return t+e}),0)/s.length,u=r.reduce((function(t,e){return t+e}),0)/r.length,c=s.map((function(t){return Math.pow(t-a,2)})).reduce((function(t,e){return t+e}),0),h=r.map((function(t){return Math.pow(t-u,2)})).reduce((function(t,e){return t+e}),0),l=0,d=0;d<t.length;d++)l+=(t[d].prev_closing_price-a)*(e[d].prev_closing_price-u);return l/(Math.sqrt(c)*Math.sqrt(h))},y=function(t,e){if(t.length<e)throw new Error("the inverval is bigger than the passed data ");var n=x(t,e);return(n[n.length-1]-n[0])/n[0]},x=function(t,e){for(var n=new Date(t[0].candle_date_time_utc).getTime()-new Date(t[t.length-1].candle_date_time_utc).getTime()>0?Object(o.a)(t).reverse():t,i=[],s=n.length,r=n.map((function(t){return t.prev_closing_price})),a=0;a<s-(e-1);a++){var u=r.slice(a,a+(e-1)).reduce((function(t,e){return t+e}),0);i.push(u)}return i},g=n(6),p=Object(i.createContext)({}),C=function(t){var e=t.children,n=Object(i.useState)(new Map),s=Object(h.a)(n,2),r=s[0],a=s[1],l=Object(i.useCallback)(function(){var t=Object(c.a)(Object(u.a)().mark((function t(e,n,i){var s,r,o,c;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e,n);case 2:s=t.sent,r=s[0].candle_acc_trade_price,o=y(s,20),c=v(i,s),a((function(t){var n=new Map(t);return n.set(e,{increaseRatio:o,coefficient:c,volume:r}),n}));case 7:case"end":return t.stop()}}),t)})));return function(e,n,i){return t.apply(this,arguments)}}(),[]);Object(i.useEffect)((function(){w("KRW-BTC",30).then((function(t){var e=t,n=y(e,20);return a((function(t){return new Map([].concat(Object(o.a)(t),[["KRW-BTC",{increaseRatio:n}]]))})),e})).then((function(t){l("KRW-ETH",30,t),l("KRW-ETC",30,t),l("KRW-MLK",30,t),l("KRW-BTG",30,t),l("KRW-XRP",30,t),l("KRW-DOGE",30,t)})),f("KRW-BTC").then((function(t){console.log(t)}))}),[]);var d=Object(i.useState)([]),x=Object(h.a)(d,2);x[0],x[1];return Object(g.jsx)(p.Provider,{value:{cryptoData:r},children:e})},b=n(2),k=n(3),m=function(t,e,n,i,s){var r=t;return r>n&&(r=n),r<e&&(r=e),(r-e)/(n-e)*(s-i)+i},O=function(){function t(e,n,i,s){Object(b.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.w=void 0,this.x=e||0,this.y=n||0,this.z=i||0,this.w=s||0}return Object(k.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z,-this.w)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}},{key:"clone",value:function(){return new t(this.x,this.y,this.z,this.w)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}},{key:"toArray",value:function(){return[this.x,this.y,this.z,this.w]}},{key:"toVector2",value:function(){return new z(this.x,this.y)}},{key:"toVector3",value:function(){return new j(this.x,this.y,this.z)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();O.One=new O(1,1,1,1),O.Zero=new O(0,0,0,0),O.UnitX=new O(1,0,0,0),O.UnitY=new O(0,1,0,0),O.UnitZ=new O(0,0,1,0),O.UnitW=new O(0,0,0,1);var j=function(){function t(e,n,i){Object(b.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.x=e||0,this.y=n||0,this.z=i||0}return Object(k.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"clone",value:function(){return new t(this.x,this.y,this.z)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}},{key:"toAffine",value:function(t){return new O(this.x,this.y,this.z,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y,this.z]}},{key:"toVector2",value:function(){return new z(this.x,this.y)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();j.One=new j(1,1,1),j.Zero=new j(0,0,0),j.UnitX=new j(1,0,0),j.UnitY=new j(0,1,0),j.UnitZ=new j(0,0,1);var z=function(){function t(e,n){Object(b.a)(this,t),this.x=void 0,this.y=void 0,this.x=e||0,this.y=n||0}return Object(k.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"toAffine",value:function(t){return new j(this.x,this.y,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}},{key:"toScreenPointVector",value:function(){return new t(Math.floor(this.x),Math.floor(this.y))}}]),t}();z.One=new z(1,1),z.Zero=new z(0,0),z.UnitX=new z(1,0),z.UnitY=new z(0,1);var M=function(t,e){return e.add(new z(t.width/2,t.height/2))},_=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z.UnitX,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:z.UnitY;Object(b.a)(this,t),this.Cols=void 0,this.Cols=[e,n]}return Object(k.a)(t,[{key:"transpose",value:function(){return new t(new z(this.Cols[0].x,this.Cols[1].x),new z(this.Cols[0].y,this.Cols[1].y))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative())}},{key:"determinant",value:function(){return this.Cols[0].x*this.Cols[1].y-this.Cols[0].y-this.Cols[1].x}},{key:"multiplyMatrix",value:function(e){var n=this.transpose();return new t(new z(n.Cols[0].dot(e.Cols[0]),n.Cols[1].dot(e.Cols[0])),new z(n.Cols[0].dot(e.Cols[1]),n.Cols[1].dot(e.Cols[1])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new z(e.Cols[0].dot(t),e.Cols[1].dot(t))}}]),t}(),B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j.UnitX,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j.UnitY,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:j.UnitZ;Object(b.a)(this,t),this.Cols=void 0,this.Cols=[e,n,i]}return Object(k.a)(t,[{key:"transpose",value:function(){return new t(new j(this.Cols[0].x,this.Cols[1].x,this.Cols[2].x),new j(this.Cols[0].y,this.Cols[1].y,this.Cols[2].y),new j(this.Cols[0].z,this.Cols[1].z,this.Cols[2].z))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]),this.Cols[2].add(e.Cols[2]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]),this.Cols[2].subtract(e.Cols[2]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e),this.Cols[2].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative(),this.Cols[2].negative())}},{key:"determinant",value:function(){}},{key:"multiplyMatrix",value:function(e){var n=this.transpose();return new t(new j(n.Cols[0].dot(e.Cols[0]),n.Cols[1].dot(e.Cols[0]),n.Cols[2].dot(e.Cols[0])),new j(n.Cols[0].dot(e.Cols[1]),n.Cols[1].dot(e.Cols[1]),n.Cols[2].dot(e.Cols[1])),new j(n.Cols[0].dot(e.Cols[2]),n.Cols[1].dot(e.Cols[2]),n.Cols[2].dot(e.Cols[2])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new j(e.Cols[0].dot(t),e.Cols[1].dot(t),e.Cols[2].dot(t))}},{key:"toMatrix2x2",value:function(){return new _(this.Cols[0].toVector2(),this.Cols[1].toVector2())}}]),t}(),R=function(){function t(e){Object(b.a)(this,t),this.degree=void 0,this.degree=e}return Object(k.a)(t,[{key:"clamp",value:function(){this.degree=t.getClampedValue(this.degree)}},{key:"toRadian",value:function(){return this.clamp(),this.degree*Math.PI/180}},{key:"update",value:function(e){this.degree=t.getClampedValue(e)}},{key:"getRotateMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new _(new z(t,e),new z(-e,t))}},{key:"getRotateAffineMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new B(new z(t,e).toAffine(!1),new z(-e,t).toAffine(!1),void 0)}}],[{key:"getClampedValue",value:function(t){var e=t%360;return e<0&&(e+=360),e}}]),t}(),S=function(){function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;Object(b.a)(this,t),this.canvas=void 0,this.points=void 0,this.scale=1,this.canvas=e,this.points=n,this.scale=i}return Object(k.a)(t,[{key:"draw",value:function(t,e){var n=this.canvas.getContext("2d");n.save(),n.beginPath(),n.moveTo(this.points[0].x*this.scale+t.x,-this.points[0].y*this.scale+t.y);var i,s=Object(a.a)(this.points);try{for(s.s();!(i=s.n()).done;){var r=i.value;n.lineTo(r.x*this.scale+t.x,-r.y*this.scale+t.y)}}catch(o){s.e(o)}finally{s.f()}n.fillStyle="rgba(".concat(e.r,", ").concat(e.g,", ").concat(e.b,", ").concat(e.a,")"),n.fill(),n.closePath(),n.restore()}}]),t}(),A=[[new z(0,.7),new z(-.4,1),new z(-.8,.6),new z(-.5,.1),new z(-.15,0),new z(-.1,-.6),new z(.1,-.8),new z(.3,-.5),new z(.45,0),new z(.7,.3),new z(.6,.6),new z(.2,.76)],[new z(.3,.8),new z(-.3,.7),new z(-.25,.1),new z(-.25,.1),new z(-.1,0),new z(-.2,-.2),new z(.2,-.6),new z(.6,-.1),new z(.4,.15),new z(.5,.4)],[new z(-.1,.5),new z(-.7,.2),new z(-.6,-.3),new z(-.2,-.4),new z(.3,-.35),new z(.6,-.1),new z(.65,.1),new z(.4,.5),new z(.2,.35)],[new z(-.3,.35),new z(-.7,.1),new z(-.4,-.2),new z(.1,.05),new z(.45,-.15),new z(.75,.1),new z(.4,.4),new z(.1,.3)],[new z(-.5,.5),new z(-.7,.3),new z(-.3,0),new z(-.4,-.4),new z(0,-.8),new z(.8,-.5),new z(.9,-.3),new z(.2,.4)],[new z(0,.9),new z(-.5,.7),new z(-.2,.2),new z(-.4,-.4),new z(.3,-.2),new z(.5,0),new z(.6,.7)],[new z(0,.7),new z(-.5,.6),new z(-.3,.1),new z(0,0),new z(.1,-.6),new z(.45,0),new z(.7,.3),new z(.6,.6),new z(.2,.76)],[new z(0,.8),new z(-.25,.1),new z(-.5,.1),new z(-.4,-.4),new z(-.2,-.6),new z(.3,-0),new z(.4,.15),new z(.5,.4)],[new z(-.5,.35),new z(-.4,.1),new z(-.1,-.2),new z(.3,-.5),new z(.6,-.15),new z(.9,.1),new z(.45,.4),new z(.1,.3)],[new z(-.4,.5),new z(-.5,.2),new z(-.8,-.5),new z(-.5,-.4),new z(.1,-.35),new z(.4,-.3),new z(.65,.1),new z(.4,.2),new z(.2,.4)]],P=function(){function t(e,n,i,s,r){var a=this;Object(b.a)(this,t),this.name=void 0,this.canvas=void 0,this.rotator=void 0,this.radius=void 0,this.position=void 0,this.speed=void 0,this.distanceFromSun=void 0,this.spaceShips=void 0,this.continents=void 0,this.continentOrigins=void 0,this.ctx=void 0,this.name=r,this.canvas=e,this.speed=i,this.rotator=new R(360*Math.random()),this.distanceFromSun=n,this.radius=s,this.spaceShips=[],this.ctx=this.canvas.getContext("2d");var o=new z(n,0).toAffine(!0),u=this.rotator.getRotateAffineMatrix(),c=A.sort((function(){return.5-Math.random()})).slice(0,5);this.continents=c.map((function(t){return new S(a.canvas,t,20)})),this.position=u.multiplyVector(o).toVector2(),this.continentOrigins=[new z(0,-this.radius),new z(0,this.radius)];for(var h=this.continents.length-this.continentOrigins.length,l=0;l<h;l++){var d=2*Math.PI/h,w=new z(Math.cos(d*l),Math.sin(d*l)).scalarBy(Math.random()*this.radius);this.continentOrigins.push(w)}}return Object(k.a)(t,[{key:"drawContinents",value:function(t){var e,n=Object(a.a)(this.continentOrigins);try{for(n.s();!(e=n.n()).done;){var i=e.value,s=this.continents.shift();this.ctx.save(),this.ctx.arc(t.x,t.y,this.radius,0,2*Math.PI,!1),this.ctx.clip(),s.draw(t.add(i),{r:255,g:0,b:255,a:1}),this.ctx.restore(),this.continents.push(s)}}catch(r){n.e(r)}finally{n.f()}}},{key:"draw",value:function(){this.rotator.degree+=this.speed;var t=new z(this.distanceFromSun,0).toAffine(!0),e=this.rotator.getRotateAffineMatrix();this.position=e.multiplyVector(t).toVector2();var n=M(this.canvas,this.position);this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(n.x,n.y,this.radius,0,2*Math.PI,!1),this.ctx.fillStyle="white",this.ctx.fill(),this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.fillText(this.name,n.x,n.y+this.radius+15),this.ctx.closePath(),this.ctx.restore(),this.drawContinents(n)}}]),t}(),T=function(){function t(e){Object(b.a)(this,t),this.canvas=void 0,this.radius=150,this.color="#FFFF4D",this.brightness=0,this.position=new z(0,0),this.canvas=e}return Object(k.a)(t,[{key:"setBrightness",value:function(t){console.log(t),this.brightness=t}},{key:"clampBrightnessRadius",value:function(t,e){var n=1e7*t;return n>e?e:n<0?0:n}},{key:"drawBrightnessInner",value:function(t,e){e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius+this.clampBrightnessRadius(this.brightness,10),0,2*Math.PI,!1),e.fillStyle="rgba(255, 255, 255, 0.4)",e.fill(),e.restore()}},{key:"drawBrightnessOuter",value:function(t,e){e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius+this.clampBrightnessRadius(this.brightness,20),0,2*Math.PI,!1),e.fillStyle="rgba(255, 255, 255, 0.2)",e.fill(),e.restore()}},{key:"drawSun",value:function(t,e){e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.restore()}},{key:"draw",value:function(){var t=this.canvas.getContext("2d"),e=M(this.canvas,this.position);this.drawBrightnessInner(e,t),this.drawBrightnessOuter(e,t),this.drawSun(e,t)}}]),t}(),I=function(){function t(e){var n=this;Object(b.a)(this,t),this.fps=24,this.element=void 0,this.ctx=void 0,this.width=0,this.height=0,this.sun=void 0,this.planets=[],this.requestAnimationFrameId=void 0,this.MIN_PLANET_SIZE=15,this.MAX_PLANET_SIZE=100,this.updateFrame=function(){n.render(),setTimeout((function(){n.requestAnimationFrameId=requestAnimationFrame(n.updateFrame.bind(n))}),1e3/n.fps)},this.render=function(){n.clear(),n.drawScene(),setTimeout((function(){requestAnimationFrame(n.render.bind(n))}),1e3/n.fps)},this.element=e,this.ctx=e.getContext("2d"),this.sun=new T(e),this.render(),this.requestAnimationFrameId=requestAnimationFrame(this.render),this.planets=[],this.initialize()}return Object(k.a)(t,[{key:"addPlanet",value:function(t,e,n,i){console.log(n,e,t);var s=function(t,e,n,i,s){var r=t;return r>n&&(r=n),r<e&&(r=e),(1-(r-e)/(n-e))*(s-i)+i}(n,-.1,.2,this.sun.radius+10,400+this.sun.radius),r=m(e,0,1,.02,.3),a=m(i,1e8,1e12,this.MIN_PLANET_SIZE,this.MAX_PLANET_SIZE),o=new P(this.element,s,r,a,t);this.planets.push(o)}},{key:"initialize",value:function(){}},{key:"setWidth",value:function(t,e){this.width=t,this.element.width=e?t*e:t,this.element.style.width="".concat(t,"px")}},{key:"setHeight",value:function(t,e){this.height=t,this.element.height=e?t*e:t,this.element.style.height="".concat(t,"px")}},{key:"setSize",value:function(t,e,n){this.setWidth(t,n),this.setHeight(e,n)}},{key:"drawBackground",value:function(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"drawScene",value:function(){this.drawBackground(),this.drawGalaxyComponents()}},{key:"drawDummy",value:function(){}},{key:"drawGalaxyComponents",value:function(){this.sun.draw();var t,e=Object(a.a)(this.planets);try{for(e.s();!(t=e.n()).done;){t.value.draw()}}catch(n){e.e(n)}finally{e.f()}}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}},{key:"destroy",value:function(){this.clear(),this.planets=[]}}]),t}(),E=function(){var t=Object(i.useRef)(null),e=Object(i.useRef)(null),n=Object(i.useRef)(null),s=Object(i.useContext)(p).cryptoData;return Object(i.useEffect)((function(){if(!t.current)return function(){};var e=new I(t.current);return n.current=e,function(){n.current&&n.current.destroy()}}),[]),Object(i.useEffect)((function(){if(s&&n.current){var t,e=Object(a.a)(s);try{for(e.s();!(t=e.n()).done;){var i=t.value;"KRW-BTC"===i[0]?n.current.sun.setBrightness(i[1].increaseRatio):!n.current.planets.map((function(t){return t.name})).includes(i[0])&&i[1].coefficient&&i[1].volume&&n.current.addPlanet(i[0],i[1].increaseRatio,i[1].coefficient,i[1].volume)}}catch(r){e.e(r)}finally{e.f()}}}),[s]),Object(i.useEffect)((function(){var t=function(){if(e.current&&n.current){var t=e.current.getBoundingClientRect();n.current.setSize(t.width,t.height),n.current.drawScene()}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(g.jsx)("div",{style:{width:"100%",height:"100%",position:"fixed"},ref:e,children:Object(g.jsx)("canvas",{ref:t})})};var F=function(){return Object(g.jsx)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:Object(g.jsx)(C,{children:Object(g.jsx)(E,{})})})},V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),i(t),s(t),r(t),a(t)}))};r.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(F,{})),V()}},[[46,1,2]]]);
//# sourceMappingURL=main.5062a2a9.chunk.js.map