(this.webpackJsonpcryptogalaxy=this.webpackJsonpcryptogalaxy||[]).push([[0],{193:function(t,e,n){},194:function(t,e,n){},215:function(t,e){},217:function(t,e){},226:function(t,e){},228:function(t,e){},253:function(t,e){},254:function(t,e){},259:function(t,e){},261:function(t,e){},268:function(t,e){},287:function(t,e){},327:function(t,e){},422:function(t,e,n){"use strict";n.r(e);var i=n(15),s=n(184),o=n.n(s),r=(n(193),n(194),n(105)),a=n(57),u=n.n(a),h=n(186),c=function(t,e){if(t.length<e)throw new Error("the inverval is bigger than the passed data ");var n=l(t,e);return(n[n.length-1]-n[0])/n[0]},l=function(t,e){for(var n=new Date(t[0].candleDateTimeUTC).getTime()-new Date(t[0].candleDateTimeUTC).getTime()>0?Object(h.a)(t).reverse():t,i=[],s=n.length,o=n.map((function(t){return t.prevClosingPrice})),r=0;r<s-(e-1);r++){var a=o.slice(r,r+(e-1)).reduce((function(t,e){return t+e}),0);i.push(a)}return i},f=n(19),d=Object(i.createContext)({}),y=function(t){var e=t.children,n=Object(i.useState)(),s=Object(r.a)(n,2),o=s[0],a=s[1];Object(i.useEffect)((function(){u.a.candlesDay("KRW-BTC",60).then((function(t){console.log(t),a((function(e){return new Map(e).set("KRW-BTC",{increaseRatio:c(t,20)})}))})),u.a.candlesDay("KRW-ETH",60).then((function(t){console.log(t)})),u.a.candlesDay("KRW-DOGE",60).then((function(t){console.log(t)})),u.a.ticker(["KRW-BTC"]).then((function(t){console.log(t[0])}))}),[]);var h=Object(i.useState)([]),l=Object(r.a)(h,2);l[0],l[1];return Object(f.jsx)(d.Provider,{value:{cryptoData:o},children:e})},v=n(185),w=n(13),C=n(14),x=function(){function t(e,n,i,s){Object(w.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.w=void 0,this.x=e||0,this.y=n||0,this.z=i||0,this.w=s||0}return Object(C.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z,this.w+e.w)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z,this.w-e.w)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z,-this.w)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}},{key:"clone",value:function(){return new t(this.x,this.y,this.z,this.w)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e,this.w*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z&&this.w===t.w}},{key:"toArray",value:function(){return[this.x,this.y,this.z,this.w]}},{key:"toVector2",value:function(){return new k(this.x,this.y)}},{key:"toVector3",value:function(){return new g(this.x,this.y,this.z)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();x.One=new x(1,1,1,1),x.Zero=new x(0,0,0,0),x.UnitX=new x(1,0,0,0),x.UnitY=new x(0,1,0,0),x.UnitZ=new x(0,0,1,0),x.UnitW=new x(0,0,0,1);var g=function(){function t(e,n,i){Object(w.a)(this,t),this.x=void 0,this.y=void 0,this.z=void 0,this.x=e||0,this.y=n||0,this.z=i||0}return Object(C.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y,this.z+e.z)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y,this.z-e.z)}},{key:"negative",value:function(){return new t(-this.x,-this.y,-this.z)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y+this.z*t.z}},{key:"clone",value:function(){return new t(this.x,this.y,this.z)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e,this.z*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y&&this.z===t.z}},{key:"toAffine",value:function(t){return new x(this.x,this.y,this.z,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y,this.z]}},{key:"toVector2",value:function(){return new k(this.x,this.y)}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}}]),t}();g.One=new g(1,1,1),g.Zero=new g(0,0,0),g.UnitX=new g(1,0,0),g.UnitY=new g(0,1,0),g.UnitZ=new g(0,0,1);var k=function(){function t(e,n){Object(w.a)(this,t),this.x=void 0,this.y=void 0,this.x=e||0,this.y=n||0}return Object(C.a)(t,[{key:"add",value:function(e){return new t(this.x+e.x,this.y+e.y)}},{key:"subtract",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"negative",value:function(){return new t(-this.x,-this.y)}},{key:"dot",value:function(t){return this.x*t.x+this.y*t.y}},{key:"clone",value:function(){return new t(this.x,this.y)}},{key:"length",value:function(){return Math.sqrt(this.dot(this))}},{key:"scalarBy",value:function(e){return new t(this.x*e,this.y*e)}},{key:"equals",value:function(t){return this.x===t.x&&this.y===t.y}},{key:"toAffine",value:function(t){return new g(this.x,this.y,t?1:0)}},{key:"toArray",value:function(){return[this.x,this.y]}},{key:"normalize",value:function(){return this.scalarBy(1/this.length())}},{key:"toScreenPointVector",value:function(){return new t(Math.floor(this.x),Math.floor(this.y))}}]),t}();k.One=new k(1,1),k.Zero=new k(0,0),k.UnitX=new k(1,0),k.UnitY=new k(0,1);var p=function(t,e){return e.add(new k(t.width/2,t.height/2))},b=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.UnitX,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:k.UnitY;Object(w.a)(this,t),this.Cols=void 0,this.Cols=[e,n]}return Object(C.a)(t,[{key:"transpose",value:function(){return new t(new k(this.Cols[0].x,this.Cols[1].x),new k(this.Cols[0].y,this.Cols[1].y))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative())}},{key:"determinant",value:function(){return this.Cols[0].x*this.Cols[1].y-this.Cols[0].y-this.Cols[1].x}},{key:"multiplyMatrix",value:function(e){var n=this.transpose();return new t(new k(n.Cols[0].dot(e.Cols[0]),n.Cols[1].dot(e.Cols[0])),new k(n.Cols[0].dot(e.Cols[1]),n.Cols[1].dot(e.Cols[1])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new k(e.Cols[0].dot(t),e.Cols[1].dot(t))}}]),t}(),m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g.UnitX,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g.UnitY,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g.UnitZ;Object(w.a)(this,t),this.Cols=void 0,this.Cols=[e,n,i]}return Object(C.a)(t,[{key:"transpose",value:function(){return new t(new g(this.Cols[0].x,this.Cols[1].x,this.Cols[2].x),new g(this.Cols[0].y,this.Cols[1].y,this.Cols[2].y),new g(this.Cols[0].z,this.Cols[1].z,this.Cols[2].z))}},{key:"add",value:function(e){return new t(this.Cols[0].add(e.Cols[0]),this.Cols[1].add(e.Cols[1]),this.Cols[2].add(e.Cols[2]))}},{key:"subtract",value:function(e){return new t(this.Cols[0].subtract(e.Cols[0]),this.Cols[1].subtract(e.Cols[1]),this.Cols[2].subtract(e.Cols[2]))}},{key:"scalarBy",value:function(e){return new t(this.Cols[0].scalarBy(e),this.Cols[1].scalarBy(e),this.Cols[2].scalarBy(e))}},{key:"negative",value:function(){return new t(this.Cols[0].negative(),this.Cols[1].negative(),this.Cols[2].negative())}},{key:"determinant",value:function(){}},{key:"multiplyMatrix",value:function(e){var n=this.transpose();return new t(new g(n.Cols[0].dot(e.Cols[0]),n.Cols[1].dot(e.Cols[0]),n.Cols[2].dot(e.Cols[0])),new g(n.Cols[0].dot(e.Cols[1]),n.Cols[1].dot(e.Cols[1]),n.Cols[2].dot(e.Cols[1])),new g(n.Cols[0].dot(e.Cols[2]),n.Cols[1].dot(e.Cols[2]),n.Cols[2].dot(e.Cols[2])))}},{key:"multiplyVector",value:function(t){var e=this.transpose();return new g(e.Cols[0].dot(t),e.Cols[1].dot(t),e.Cols[2].dot(t))}},{key:"toMatrix2x2",value:function(){return new b(this.Cols[0].toVector2(),this.Cols[1].toVector2())}}]),t}(),j=function(){function t(e){Object(w.a)(this,t),this.degree=void 0,this.degree=e}return Object(C.a)(t,[{key:"clamp",value:function(){this.degree=t.getClampedValue(this.degree)}},{key:"toRadian",value:function(){return this.clamp(),this.degree*Math.PI/180}},{key:"update",value:function(e){this.degree=t.getClampedValue(e)}},{key:"getRotateMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new b(new k(t,e),new k(-e,t))}},{key:"getRotateAffineMatrix",value:function(){var t=Math.cos(this.toRadian()),e=Math.sin(this.toRadian());return new m(new k(t,e).toAffine(!1),new k(-e,t).toAffine(!1),void 0)}}],[{key:"getClampedValue",value:function(t){var e=t%360;return e<0&&(e+=360),e}}]),t}(),O=function(){function t(e,n,i,s){Object(w.a)(this,t),this.canvas=void 0,this.rotator=void 0,this.radius=void 0,this.position=void 0,this.speed=void 0,this.distanceFromSun=void 0,this.spaceShips=void 0,this.canvas=e,this.speed=i,this.rotator=new j(360*Math.random()),this.distanceFromSun=n,this.radius=s,this.spaceShips=[];var o=new k(n,0).toAffine(!0),r=this.rotator.getRotateAffineMatrix();this.position=r.multiplyVector(o).toVector2()}return Object(C.a)(t,[{key:"draw",value:function(){this.rotator.degree++;var t=new k(this.distanceFromSun,0).toAffine(!0),e=this.rotator.getRotateAffineMatrix();this.position=e.multiplyVector(t).toVector2();var n=p(this.canvas,this.position),i=this.canvas.getContext("2d");i.save(),i.beginPath(),i.arc(n.x,n.y,this.radius,0,2*Math.PI,!1),i.fillStyle="white",i.fill(),i.closePath(),i.restore(),i.save()}}]),t}(),z=function(){function t(e){Object(w.a)(this,t),this.canvas=void 0,this.radius=150,this.color="#FFFF4D",this.position=new k(0,0),this.canvas=e}return Object(C.a)(t,[{key:"draw",value:function(){var t=p(this.canvas,this.position),e=this.canvas.getContext("2d");e.save(),e.beginPath(),e.arc(t.x,t.y,this.radius,0,2*Math.PI,!1),e.fillStyle=this.color,e.fill(),e.restore(),e.save()}},{key:"updateBrightness",value:function(t){console.log(t)}}]),t}(),B=function(){function t(e){var n=this;Object(w.a)(this,t),this.fps=24,this.element=void 0,this.ctx=void 0,this.width=0,this.height=0,this.sun=void 0,this.planets=void 0,this.requestAnimationFrameId=void 0,this.updateFrame=function(){n.render(),setTimeout((function(){n.requestAnimationFrameId=requestAnimationFrame(n.updateFrame.bind(n))}),1e3/n.fps)},this.render=function(){n.clear(),n.drawScene(),setTimeout((function(){requestAnimationFrame(n.render.bind(n))}),1e3/n.fps)},this.element=e,this.ctx=e.getContext("2d"),this.sun=new z(e),this.planets=[],this.initialize(),this.render(),this.requestAnimationFrameId=requestAnimationFrame(this.render)}return Object(C.a)(t,[{key:"initialize",value:function(){this.planets=[new O(this.element,this.sun.radius+50,1,20)]}},{key:"setWidth",value:function(t,e){this.width=t,this.element.width=e?t*e:t,this.element.style.width="".concat(t,"px")}},{key:"setHeight",value:function(t,e){this.height=t,this.element.height=e?t*e:t,this.element.style.height="".concat(t,"px")}},{key:"setSize",value:function(t,e,n){this.setWidth(t,n),this.setHeight(e,n)}},{key:"drawBackground",value:function(){this.ctx.fillStyle="black",this.ctx.fillRect(0,0,this.width,this.height)}},{key:"drawScene",value:function(){this.drawBackground(),this.drawGalaxyComponents()}},{key:"drawGalaxyComponents",value:function(){this.sun.draw();var t,e=Object(v.a)(this.planets);try{for(e.s();!(t=e.n()).done;){t.value.draw()}}catch(n){e.e(n)}finally{e.f()}}},{key:"clear",value:function(){this.ctx.clearRect(0,0,this.width,this.height)}}]),t}(),R=function(){var t=Object(i.useRef)(null),e=Object(i.useRef)(null),n=Object(i.useRef)(null),s=Object(i.useContext)(d).cryptoData;return Object(i.useEffect)((function(){if(!t.current)return function(){};var e=new B(t.current);return n.current=e,function(){e.clear()}}),[]),Object(i.useEffect)((function(){var t=function(){if(e.current&&n.current){var t=e.current.getBoundingClientRect();n.current.setSize(t.width,t.height),n.current.drawScene()}};return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),Object(i.useEffect)((function(){var t;s&&(s.get("KRW-BTC")&&(null===(t=n.current)||void 0===t||t.sun.updateBrightness(s.get("KRW-BTC").increaseRatio)))}),[s]),console.log("canvas rendered"),Object(f.jsx)("div",{style:{width:"100%",height:"100%",position:"fixed"},ref:e,children:Object(f.jsx)("canvas",{ref:t})})};var M=function(){return Object(f.jsx)("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:Object(f.jsx)(y,{children:Object(f.jsx)(R,{})})})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,423)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),o(t),r(t)}))};o.a.createRoot(document.getElementById("root")).render(Object(f.jsx)(M,{})),F()}},[[422,1,2]]]);
//# sourceMappingURL=main.360ec32b.chunk.js.map