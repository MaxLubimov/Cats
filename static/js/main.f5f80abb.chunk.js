(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(13),c=n.n(a),r=n(16),s=n(3),i=n(0),l=n(2),o=n(5),u=n.n(o),d=n(7),j=n(8),O=n(10),b=n(9),p=n(4),f=n(6),h=function(t){return{type:"ALLPOSTS",payload:{data:t}}},m={likedPosts:[],allPosts:[]},v=function(t,e,n){g.dispatch(function(t,e){return{type:"TOOGLE_LIKE",payload:{id:t,url:e}}}(t,e)),n.target.classList.toggle("unlike"),n.target.classList.toggle("like")},g=Object(f.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TOOGLE_LIKE":var n=t.likedPosts.some((function(t){return t.id===e.payload.id}))?t.likedPosts.filter((function(t){return t.id!==e.payload.id})):t.likedPosts.concat({id:e.payload.id,url:e.payload.url});return Object(p.a)(Object(p.a)({},t),{},{likedPosts:n});case"ALLPOSTS":return Object(p.a)(Object(p.a)({},t),{},{allPosts:t.allPosts.concat(e.payload.data)});default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),k=g,y=n(1),x=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this,e=this.props.Store.allPosts;return Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("ul",{className:"cat-cards",children:e.map((function(e){return Object(y.jsx)("li",{className:"cat-card",style:{backgroundImage:'url("'.concat(e.url,'")')},children:Object(y.jsx)("input",{onClick:function(t){return v(e.id,e.url,t)},type:"button",className:"heart-img + ".concat(t.props.Store.likedPosts.some((function(t){return t.id===e.id}))?"like":"unlike"),value:"",name:""})},e.id)}))})})}}]),n}(i.Component),E={createPost:h},S=Object(l.b)((function(t){return{Store:t}}),E)(x),N=function(t){Object(O.a)(n,t);var e=Object(b.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){var t=this.props.Store.likedPosts;return 0!==t.length&&Object(y.jsx)("div",{className:"container",children:Object(y.jsx)("ul",{className:"cat-cards",children:t.map((function(t){return Object(y.jsx)("li",{className:"cat-card",style:{backgroundImage:'url("'.concat(t.url,'")')},children:Object(y.jsx)("input",{onClick:function(e){return v(t.id,t.url,e)},type:"button",className:"heart-img like",value:"",name:""})},t.id)}))})})}}]),n}(i.Component),L=Object(l.b)((function(t){return{Store:t}}))(N);n(30);function P(){var t=Object(l.c)(),e=Object(i.useState)(!0),n=Object(s.a)(e,2),a=n[0],o=n[1],u=Object(i.useState)(1),d=Object(s.a)(u,2),j=d[0],O=d[1],b=Object(i.useState)(!1),p=Object(s.a)(b,2),f=p[0],m=p[1],v=Object(i.useState)("allCats"),g=Object(s.a)(v,2),k=g[0],x=g[1];Object(i.useEffect)((function(){return document.addEventListener("scroll",E),function(){document.removeEventListener("scroll",E)}}),[]),Object(i.useEffect)((function(){a&&function(){var e=Object(r.a)(c.a.mark((function e(){var n,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.thecatapi.com/v1/images/search?limit=20&page=".concat(j));case 2:return n=e.sent,O((function(t){return t+1})),e.next=6,n.json();case 6:a=e.sent,t(h(a));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()().finally((function(){return o(!1)}))}),[a]);var E=function(t){t.target.documentElement.scrollHeight-(t.target.documentElement.scrollTop+window.innerHeight)<100&&o(!0)},N=function(t){var e=f;t.preventDefault(),x(t.target.value),m(!e)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("header",{className:"header",children:Object(y.jsx)("div",{className:"container",children:Object(y.jsxs)("div",{className:"nav-items",children:[Object(y.jsx)("button",{autoFocus:!0,className:"allCats"===k?"active":null,value:"allCats",onClick:N,children:"\u0412\u0441\u0435 \u043a\u043e\u0442\u0438\u043a\u0438"}),Object(y.jsx)("button",{className:"favoriteCats"===k?"active":null,value:"favoriteCats",onClick:N,children:"\u041b\u044e\u0431\u0438\u043c\u044b\u0435 \u043a\u043e\u0442\u043a\u0438"})]})})}),function(t){switch(t){case"allCats":return Object(y.jsx)(S,{});case"favoriteCats":return Object(y.jsx)(L,{});default:return null}}(k)]})}var _=document.querySelector("#root");u.a.render(Object(y.jsx)(l.a,{store:k,children:Object(y.jsx)(P,{})}),_)}},[[31,1,2]]]);
//# sourceMappingURL=main.f5f80abb.chunk.js.map