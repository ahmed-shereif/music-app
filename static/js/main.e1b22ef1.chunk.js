(this["webpackJsonpmusic-app"]=this["webpackJsonpmusic-app"]||[]).push([[0],{20:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(15),i=c.n(r),s=(c(20),c(4)),o=c.n(s),u=c(9),l=c(3),d=c(8),b=c(7);var j=function(){return[{name:"3asfor",cover:"https://i.scdn.co/image/ab67616d0000b2734dbbff68622228d0949f9803",artist:"Aida ALAyouby",audio:"https://cdn1.esm3.com/music/120/3aida16.mp3",color:["#F5949F","#2A416D"],id:Object(b.v4)(),active:!1},{name:"Melodiya",cover:"https://media-exp1.licdn.com/dms/image/C4E1BAQH1Zv9B61xgfg/company-background_10000/0/1519798904815?e=2159024400&v=beta&t=6Dz5Q-P3P5CfUoRyVeDh7Lf_gf4cJa8t2HqtMdxEaHY",artist:"MAMA AIUTO",audio:"https://mp3.chillhop.com/serve.php/?mp3=16060",color:["#3AB49D","##F54933"],id:Object(b.v4)(),active:!1},{name:"Cruising",cover:"https://i.scdn.co/image/ab67616d0000b2739d280fd85c5f52b616a3a053",artist:"Evil Needle",audio:"https://mp3.chillhop.com/serve.php/?mp3=17087",color:["#B4743F","#F8DAC6"],id:Object(b.v4)(),active:!1},{name:"Romance",cover:"https://i.ytimg.com/vi/kEPakJDkTOk/maxresdefault.jpg",artist:"RenBoz",audio:"https://mp3.chillhop.com/serve.php/?mp3=16064",color:["#3AB49D","##F54933"],id:Object(b.v4)(),active:!1},{name:"Night Fall",cover:"https://i.scdn.co/image/ab67616d0000b2738316908e1f7fb1cff65ac234",artist:"Zmeyeve",audio:"https://mp3.chillhop.com/serve.php/?mp3=16069",color:["#3AB49D","##F54933"],id:Object(b.v4)(),active:!1},{name:"Day Light",cover:"https://mir-s3-cdn-cf.behance.net/projects/404/eb1e6c97340503.Y3JvcCw5OTcsNzgwLDIsMA.jpg",artist:"Hndayow",audio:"https://mp3.chillhop.com/serve.php/?mp3=16068",color:["#3AB49D","##F54933"],id:Object(b.v4)(),active:!1},{name:"Moon Light",cover:"https://i1.sndcdn.com/artworks-betszbOdciufyxQX-sA1WNg-t500x500.jpg",artist:"Ringownya",audio:"https://mp3.chillhop.com/serve.php/?mp3=16065",color:["#3AB49D","##F54933"],id:Object(b.v4)(),active:!1}]},p=c(0),v=n.a.createContext();function m(e){var t=e.children,c=Object(a.useState)(j()),n=Object(d.a)(c,2),r=n[0],i=n[1],s=Object(a.useState)(r[0]),o=Object(d.a)(s,2),u=o[0],l=o[1],b=Object(a.useState)(!1),m=Object(d.a)(b,2),h=m[0],O=m[1],f=Object(a.useState)(!1),g=Object(d.a)(f,2),x=g[0],y=g[1],k=Object(a.useRef)(null);return Object(p.jsx)(v.Provider,{value:{songs:r,setSongs:i,currentSong:u,setCurrentSong:l,isPlaying:h,setIsPlaying:O,audioRef:k,playSongHandler:function(){O(!h),h?k.current.pause():k.current.play()},toggleLibrary:x,setToggleLibrary:y},children:t})}var h=c(6),O=c(5);var f=function(){var e=Object(a.useContext)(v),t=e.songs,c=e.setSongs,n=e.currentSong,r=e.setCurrentSong,i=e.isPlaying,s=e.setIsPlaying,b=e.audioRef,j=e.playSongHandler,m=Object(a.useState)({currentTime:0,duraton:0}),f=Object(d.a)(m,2),g=f[0],x=f[1],y=function(e){var t=e.target.currentTime,c=e.target.duration;x(Object(l.a)(Object(l.a)({},g),{},{currentTime:t,duration:c}))},k=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},N=function(){var e=Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((c=t.findIndex((function(e){return e.id===n.id})))<t.length-1)){e.next=4;break}return e.next=4,r(t[c+1]);case 4:i&&b.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((c=t.findIndex((function(e){return e.id===n.id})))<t.length-1)){e.next=4;break}return e.next=4,r(t[c+1]);case 4:i&&b.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){var e=t.map((function(e){return e.id==n.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));c(e)}),[n]),Object(a.useEffect)((function(){s(!0)}),[n]);var S=function(){var e=Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((c=t.findIndex((function(e){return e.id===n.id})))>0)){e.next=4;break}return e.next=4,r(t[c-1]);case 4:i&&b.current.play();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"play",children:[Object(p.jsxs)("div",{className:"time-control",children:[Object(p.jsx)("p",{children:k(g.currentTime)}),Object(p.jsx)("input",{type:"range",min:0,value:g.currentTime,max:g.duration?g.duration:"0:0",onChange:function(e){b.current.currentTime=e.target.value,x(Object(l.a)(Object(l.a)({},g),{},{currentTime:e.target.value}))}}),Object(p.jsx)("p",{children:k(g.duration)})]}),Object(p.jsxs)("div",{className:"play-control",children:[Object(p.jsx)(h.a,{className:"skip-backward",icon:O.a,size:"2x",onClick:S}),Object(p.jsx)(h.a,{onClick:j,className:"play-pause",icon:i?O.d:O.e,size:"2x"}),Object(p.jsx)(h.a,{className:"skip-forward",icon:O.b,size:"2x",onClick:N})]}),Object(p.jsx)("audio",{ref:b,onTimeUpdate:y,onLoadedMetadata:y,src:n.audio,onEnded:C})]})};var g=function(){var e=Object(a.useContext)(v).currentSong;return Object(p.jsxs)("div",{className:"song",children:[Object(p.jsx)("div",{className:"song-img",children:Object(p.jsx)("img",{src:e.cover,alt:e.name})}),Object(p.jsxs)("h2",{children:[e.name," "]}),Object(p.jsx)("h3",{children:e.artist})]})};var x=function(e){var t=e.song,c=Object(a.useContext)(v),n=c.setCurrentSong,r=c.setIsPlaying,i=c.audioRef,s=c.isPlaying,d=c.songs,b=c.setSongs,j=function(){var e=Object(u.a)(o.a.mark((function e(){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t);case 2:r(!0),s&&i.current.play(),c=d.map((function(e){return e.id==t.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),b(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"library-song  ".concat(t.active&&"selected"," "),onClick:j,children:[Object(p.jsx)("img",{src:t.cover,alt:"song cover"}),Object(p.jsxs)("div",{className:"song-infos",children:[Object(p.jsxs)("h2",{children:[t.name," "]}),Object(p.jsx)("h3",{children:t.artist})]})]})};var y=function(){var e=Object(a.useContext)(v),t=e.songs,c=e.toggleLibrary,n=e.setToggleLibrary;return Object(p.jsxs)("div",{className:"library ".concat(c?"active-library":""),children:[Object(p.jsxs)("div",{className:"library-nav",children:[Object(p.jsx)("h2",{className:"library-dashboard",children:"Dashboard"}),Object(p.jsx)(h.a,{className:"library-closeIcon",icon:O.f,size:"2x",onClick:function(){return n(!c)}})]}),Object(p.jsx)("div",{className:"library-content",children:t.map((function(e){return Object(p.jsx)(x,{song:e},e.id)}))})]})};var k=function(){var e=Object(a.useContext)(v),t=(e.currentSong,e.toggleLibrary),c=e.setToggleLibrary;return Object(p.jsxs)("div",{className:"nav",children:[Object(p.jsx)("div",{className:"nav-name",children:"Songer ChillOut"}),Object(p.jsxs)("button",{className:"nav-dashboard",onClick:function(){return c(!t)},children:["Dashboard",Object(p.jsx)(h.a,{className:"music-icon",icon:O.c,size:"1x"})]})]})};var N=function(){var e=Object(a.useContext)(v).toggleLibrary;return Object(p.jsxs)("div",{className:"App ".concat(e?"libraty-active ":"","}"),children:[Object(p.jsx)(k,{}),Object(p.jsx)(g,{}),Object(p.jsx)(f,{}),Object(p.jsx)(y,{})]})};i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(m,{children:Object(p.jsx)(N,{})})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e1b22ef1.chunk.js.map