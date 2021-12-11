(this.webpackJsonpcoinstar=this.webpackJsonpcoinstar||[]).push([[0],{35:function(e,t,a){e.exports=a(66)},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(28),l=a.n(r),i=a(11),s=a(7),o=a(9),m=a.n(o),u=a(13),d=a(3),p=a(34),f=a(29),E=a.n(f),b={lineHeightAnnotation:{always:!0,hover:!1,lineWeight:1.5},animation:{duration:2e3},maintainAspectRatio:!1,responsive:!0,scales:{xAxes:[{type:"time",distribution:"linear"}]}},h=function(e){var t=e.data,a=Object(n.useRef)(),r=t.day,l=t.week,i=t.year,s=t.detail,o=Object(n.useState)("24h"),m=Object(d.a)(o,2),u=m[0],f=m[1],h=function(){switch(u){case"24h":return r;case"7d":return l;case"1y":return i;default:return r}};Object(n.useEffect)((function(){if(a&&a.current&&s){console.log("yeah");new E.a(a.current,{type:"line",data:{datasets:[{label:"".concat(s.name," price"),data:h(),backgroundColor:"rgba(174, 305, 194, 0.5)",borderColor:"rgba(174, 305, 194, 0.4",pointRadius:0}]},options:Object(p.a)({},b)})}}));return c.a.createElement("div",{className:"bg-white border mt-2 rounded p-3"},c.a.createElement("div",null,function(){if(s)return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"my-0"},"$",s.current_price.toFixed(2)),c.a.createElement("p",{className:s.price_change_24h<0?"text-danger my-0":"text-success my-0"},s.price_change_percentage_24h.toFixed(2),"%"))}()),c.a.createElement("div",null,c.a.createElement("canvas",{ref:a,id:"myChart",width:250,height:250})),c.a.createElement("div",{className:"chart-button mt-1"},c.a.createElement("button",{onClick:function(){return f("24h")},className:"btn btn-outline-secondary btn-sm"},"24h"),c.a.createElement("button",{onClick:function(){return f("7d")},className:"btn btn-outline-secondary btn-sm mx-1"},"7d"),c.a.createElement("button",{onClick:function(){return f("1y")},className:"btn btn-outline-secondary btn-sm"},"1y")))},g=function(e){var t=e.data;return c.a.createElement("div",null,function(){if(t)return c.a.createElement("div",{className:"bg-white mt-3 p-2 rounded border row"},c.a.createElement("div",{className:"col-sm"},c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("span",{className:"text-muted coin-data-category"},"Market Cap"),c.a.createElement("span",null,t.market_cap)),c.a.createElement("hr",null),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("span",{className:"text-muted coin-data-category"},"Total Supply"),c.a.createElement("span",null,t.total_supply))),c.a.createElement("div",{className:"col-sm"},c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("span",{className:"text-muted coin-data-category"},"Volume(24H)"),c.a.createElement("span",null,t.total_volume)),c.a.createElement("hr",null),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("span",{className:"text-muted coin-data-category"},"high 24h"),c.a.createElement("span",null,t.high_24h))),c.a.createElement("div",{className:"col-sm"},c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("span",{className:"text-muted coin-data-category"},"Circulating Supply"),c.a.createElement("span",null,t.circulating_supply)),c.a.createElement("hr",null),c.a.createElement("div",{className:"d-flex flex-column"},c.a.createElement("span",{className:"text-muted coin-data-category"},"low 24h"),c.a.createElement("span",null,t.low_24h))))}())},v=a(30),y=a.n(v).a.create({baseURL:"https://api.coingecko.com/api/v3"}),x=function(){var e=Object(s.e)().id,t=Object(n.useState)({}),a=Object(d.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(d.a)(i,2),p=o[0],f=o[1],E=function(e){return e.map((function(e){return{t:e[0],y:e[1].toFixed(2)}}))};Object(n.useEffect)((function(){(function(){var t=Object(u.a)(m.a.mark((function t(){var a,n,c,r,i,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return f(!0),t.next=3,Promise.all([y.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"usd",days:"1"}}),y.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"usd",days:"7"}}),y.get("/coins/".concat(e,"/market_chart/"),{params:{vs_currency:"usd",days:"365"}}),y.get("/coins/markets/",{params:{vs_currency:"usd",ids:e}})]);case 3:a=t.sent,n=Object(d.a)(a,4),c=n[0],r=n[1],i=n[2],s=n[3],console.log(c),l({day:E(c.data.prices),week:E(r.data.prices),year:E(i.data.prices),detail:s.data[0]}),f(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);return p?c.a.createElement("div",null,"Loading...."):c.a.createElement("div",{className:"coinlist"},c.a.createElement(h,{data:r}),c.a.createElement(g,{data:r.detail}))},N=a(33),w=Object(n.createContext)(),j=function(e){var t;console.log();var a=Object(n.useState)((null===(t=localStorage.getItem("watchList"))||void 0===t?void 0:t.split(","))||["bitcoin","ethereum","ripple","litecoin"]),r=Object(d.a)(a,2),l=r[0],i=r[1];Object(n.useEffect)((function(){localStorage.setItem("watchList",l)}),[l]);return c.a.createElement(w.Provider,{value:{watchList:l,deleteCoin:function(e){i(l.filter((function(t){return t!==e})))},addCoin:function(e){-1===l.indexOf(e)&&i([].concat(Object(N.a)(l),[e]))}}},e.children)},_=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(w).addCoin;return c.a.createElement("div",{className:"dropdown"},c.a.createElement("button",{onClick:function(){return r(!a)},className:"btn btn-primary dropdown-toggle",type:"button"},"Add Coin"),c.a.createElement("div",{className:a?"dropdown-menu show":"dropdown-menu"},["bitcoin","ethereum","ripple","tether","bitcoin-cash","litecoin","eos","okb","tezos","cardano"].map((function(e){return c.a.createElement("a",{onClick:function(){return l(e),void r(!1)},href:"#",className:"dropdown-item"},e)}))))},O=function(e){var t=e.coin,a=e.deleteCoin;return c.a.createElement(i.b,{to:"/coins/".concat(t.id),className:"text-decoration-none my-1 coin"},c.a.createElement("li",{className:"coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark"},c.a.createElement("img",{className:"coinlist-image",src:t.image,alt:""}),c.a.createElement("span",{className:"text-decoration-none"},t.current_price),c.a.createElement("span",{className:t.price_change_percentage_24h<0?"text-danger mr-2":"text-success mr-2"}," ",t.price_change_percentage_24h<0?c.a.createElement("i",{className:"fas fa-sort-down align-middle mr-1"}):c.a.createElement("i",{className:"fas fa-sort-up align-middle mr-1"}),t.price_change_percentage_24h),c.a.createElement("i",{onClick:function(e){e.preventDefault(),a(t.id)},className:"delete-icon far fa-times-circle text-danger"})))},k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useContext)(w),i=l.watchList,s=l.deleteCoin,o=Object(n.useState)(!1),p=Object(d.a)(o,2),f=p[0],E=p[1];console.log(i),Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,y.get("/coins/markets/",{params:{vs_currency:"usd",ids:i.join(",")}});case 3:t=e.sent,r(t.data),E(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();i.length>0?e():r([])}),[i]);return c.a.createElement("div",null,f?c.a.createElement("div",null,"Loading..."):c.a.createElement("ul",{className:"coinlist list-group mt-2"},a.map((function(e){return c.a.createElement(O,{key:e.id,coin:e,deleteCoin:s})}))))},C=function(){return c.a.createElement("div",{className:"coinsummary shadow border p-2 rounded mt-2 bg-light"},c.a.createElement(_,null),c.a.createElement(k,null))},S=function(){return c.a.createElement("div",null,c.a.createElement("h1",{className:"text-center text-warning mt-3 mb-4"},"Coinstar"))},L=(a(65),function(){return c.a.createElement("div",{className:"container"},c.a.createElement(j,null,c.a.createElement(i.a,null,c.a.createElement(S,null),c.a.createElement(s.a,{exact:!0,path:"/",component:C}),c.a.createElement(s.a,{path:"/coins/:id",component:x}))))});l.a.render(c.a.createElement(L,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.04061888.chunk.js.map