(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(t,e,a){},31:function(t,e,a){"use strict";a.r(e);var n=a(13),c=a.n(n),r=a(16),s=a(4),l=a(0),o=a(2),i=a(5),u=a.n(i),d=a(7),j=a(8),O=a(10),b=a(9),p=a(3),f=a(6),m=function(t){return{type:"ALLPOSTS",payload:{data:t}}},v={likedPosts:[],allPosts:[]},h=function(t,e,a){localStorage.setItem(t,e),y.dispatch(function(t,e){return{type:"TOOGLE_LIKE",payload:{id:t,url:e}}}(t,e)),a.target.classList.toggle("unlike"),a.target.classList.toggle("like")},y=Object(f.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TOOGLE_LIKE":var a;return t.likedPosts.some((function(t){return t.id===e.payload.id}))?(localStorage.removeItem(e.payload.id),a=t.likedPosts.filter((function(t){return t.id!==e.payload.id}))):(localStorage.setItem(e.payload.id,e.payload.url),a=t.likedPosts.concat({id:e.payload.id,url:e.payload.url})),Object(p.a)(Object(p.a)({},t),{},{likedPosts:a});case"ADD_TOO_LIKE_POST":var n=t.likedPosts.some((function(t){return t.id===e.payload.id}))?t.likedPosts:t.likedPosts.concat({id:e.payload.id,url:e.payload.url});return Object(p.a)(Object(p.a)({},t),{},{likedPosts:n});case"ALLPOSTS":return Object(p.a)(Object(p.a)({},t),{},{allPosts:t.allPosts.concat(e.payload.data)});default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=y,k=a(1),S=function(t){Object(O.a)(a,t);var e=Object(b.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var t=this,e=this.props.Store.allPosts;return Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("ul",{className:"cat-cards",children:e.map((function(e){return Object(k.jsx)("li",{className:"cat-card",style:{backgroundImage:'url("'.concat(e.url,'")')},children:Object(k.jsx)("input",{onClick:function(t){return h(e.id,e.url,t)},type:"button",className:"heart-img + ".concat(t.props.Store.likedPosts.some((function(t){return t.id===e.id}))?"like":"unlike"),value:"",name:""})},e.id)}))})})}}]),a}(l.Component),x={createPost:m},E=Object(o.b)((function(t){return{Store:t}}),x)(S),P=function(t){Object(O.a)(a,t);var e=Object(b.a)(a);function a(){return Object(d.a)(this,a),e.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var t=this.props.Store.likedPosts;return 0!==t.length&&Object(k.jsx)("div",{className:"container",children:Object(k.jsx)("ul",{className:"cat-cards",children:t.map((function(t){return Object(k.jsx)("li",{className:"cat-card",style:{backgroundImage:'url("'.concat(t.url,'")')},children:Object(k.jsx)("input",{onClick:function(e){return h(t.id,t.url,e)},type:"button",className:"heart-img like",value:"",name:""})},t.id)}))})})}}]),a}(l.Component),_=Object(o.b)((function(t){return{Store:t}}))(P);a(30);function N(){var t=Object(o.c)(),e=Object(l.useState)(!0),a=Object(s.a)(e,2),n=a[0],i=a[1],u=Object(l.useState)(1),d=Object(s.a)(u,2),j=d[0],O=d[1],b=Object(l.useState)(!1),p=Object(s.a)(b,2),f=p[0],v=p[1],h=Object(l.useState)("allCats"),y=Object(s.a)(h,2),g=y[0],S=y[1];Object(l.useEffect)((function(){return document.addEventListener("scroll",x),function(){document.removeEventListener("scroll",x)}}),[]),Object(l.useEffect)((function(){for(var e=0;e<localStorage.length;e++){var a=localStorage.key(e);t((n=a,c=localStorage.getItem(a),{type:"ADD_TOO_LIKE_POST",payload:{id:n,url:c}}))}var n,c})),Object(l.useEffect)((function(){n&&function(){var e=Object(r.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search?limit=20&page=".concat(j));case 2:return a=e.sent,O((function(t){return t+1})),e.next=6,a.json();case 6:n=e.sent,t(m(n));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().finally((function(){return i(!1)}))}),[n]);var x=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<100&&i(!0)},P=function(t){var e=f;t.preventDefault(),S(t.target.value),v(!e)};return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("header",{className:"header",children:Object(k.jsx)("div",{className:"container",children:Object(k.jsxs)("div",{className:"nav-items",children:[Object(k.jsx)("button",{autoFocus:!0,className:"allCats"===g?"active":null,value:"allCats",onClick:P,children:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(k.jsx)("button",{className:"favoriteCats"===g?"active":null,value:"favoriteCats",onClick:P,children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u043a\u0438"})]})})}),function(t){switch(t){case"allCats":return Object(k.jsx)(E,{});case"favoriteCats":return Object(k.jsx)(_,{});default:return null}}(g)]})}var L=document.querySelector("#root");u.a.render(Object(k.jsx)(o.a,{store:g,children:Object(k.jsx)(N,{})}),L)}},[[31,1,2]]]);
//# sourceMappingURL=main.7c2bbc26.chunk.js.map