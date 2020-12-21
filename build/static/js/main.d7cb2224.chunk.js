(this["webpackJsonpyellow-carte"]=this["webpackJsonpyellow-carte"]||[]).push([[0],{179:function(e,t,n){e.exports=n(268)},210:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),i=n(149),l=n(36),s=n(64),m=n(156),d=n(176),u=n(153),g=n(50);function f(){var e=localStorage.getItem("restaurent_cookie");return"string"===typeof e?JSON.parse(e):{}}var p=n(178),v=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_IMAGE_URL,f()),b=v.jwtToken?"Bearer ".concat(v.jwtToken):"";console.log(b);var E=Object(u.a)((function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.forEach((function(e){var t=e.message,n=e.locations,a=e.path;return console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a))})),n&&console.log("[Network error]: ".concat(n))})),y=Object(m.createUploadLink)({uri:"http://3.137.193.103:3007/",headers:{Authorization:b}}),h=new s.c({link:g.ApolloLink.from([E,y]),cache:new d.a,defaultHttpLink:!1,connectToDevTools:!0});h.defaultOptions={watchQuery:{fetchPolicy:"network-only",errorPolicy:"ignore"},query:{fetchPolicy:"network-only",errorPolicy:"all"}};var O=h,k=n(62),w=n(158),j=n(25),N=n(101),x={},S=function(e){return{type:"ADD_CARD",payload:e}},C={tableId:"",restaurantId:"",lang:"",note:""},_=function(e){return{type:"ADD_INFO",payload:e}},R=Object(k.c)({card:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"CLEAR_ITEM":return{};case"ADD_CARD":var r=a.id,o=Object(N.a)(a,["id"]);return e[r]=Object(j.a)(Object(j.a)({item:r},o),{},{_id:r}),Object(j.a)({},e);case"DELETE_ITEM":var c=e;return delete c[a.id],Object(j.a)({},c);default:return e}},info:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ADD_INFO":return Object(j.a)(Object(j.a)({},e),a);case"CLEAR_NOTE":return Object(j.a)(Object(j.a)({},e),{},{note:""});default:return e}}}),L=function(e){try{!function(e){var t=JSON.stringify(e);localStorage.setItem("restaurent_cookie",t)}(e)}catch(t){}},I=function(){try{return f()||void 0}catch(e){return}}(),A=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d)(Object(k.a)(w.a)),T=Object(k.e)(R,I,A);T.subscribe((function(){L(T.getState())}));var B=T,D=n(39),z=(n(208),n(209),n(210),n(42)),F=n(20),P=function(){var e=Object(F.g)(),t=Object(F.f)(),n=new URLSearchParams(e.search),o=n.get("restaurant"),c=n.get("table");return Object(a.useEffect)((function(){c&&o&&t.push("/language?table=".concat(c,"&restaurant=").concat(o))}),[c,o]),r.a.createElement("div",{className:"container qrCode"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("h2",{className:"mb-5"},"Scan to see menu :)"),r.a.createElement("div",{className:"scanner-wrapper"},r.a.createElement("img",{src:"/img/custom-scanner.png",className:"img-fluid"})))))},M=n(65),W=n(274),$=n(67),q=n(102),U=n(103),J=n.n(U);function K(){var e=Object(q.a)(["\n  query FetchLanguagesByRestaurant($restaurant: ID!, $active: Boolean!) {\n    FetchLanguagesByRestaurant(restaurant: $restaurant, active: $active) {\n      code\n      message\n      count\n      result {\n        _id\n        key\n        name\n        active\n        restaurant\n      }\n    }\n  }\n"]);return K=function(){return e},e}function V(){var e=Object(q.a)(["\n  mutation CreateOrder($orderData: OrderInput) {\n    CreateOrder(orderData: $orderData) {\n      code\n      success\n      message\n    }\n  }\n"]);return V=function(){return e},e}function Y(){var e=Object(q.a)(["\n  query FetchMenuByRestaurantId(\n    $limit: Int\n    $offset: Int\n    $lang: String\n    $resId: ID!\n  ) {\n    FetchMenuByRestaurantId(\n      limit: $limit\n      offset: $offset\n      lang: $lang\n      resId: $resId\n    ) {\n      code\n      message\n      count\n      success\n      restaurant {\n        menuStyle {\n          color\n          fontFamily\n          fontSize\n          backgroundColor\n        }\n      }\n      result {\n        _id\n        category\n        owner\n        lang\n        active\n        translation {\n          lang\n          name\n          price\n          method\n        }\n        submenu {\n          _id\n          active\n          category\n          translation {\n            lang\n            name\n            price\n            desc\n          }\n          items {\n            _id\n            name\n            active\n            desc\n            price\n            translation {\n              lang\n              name\n              price\n              desc\n            }\n          }\n        }\n        items {\n          _id\n          name\n          active\n          desc\n          price\n          translation {\n            lang\n            name\n            price\n            desc\n          }\n        }\n      }\n    }\n  }\n"]);return Y=function(){return e},e}var H=J()(Y()),Q=J()(V()),G=J()(K()),X=function(){var e,t=Object(D.b)(),n=Object(F.g)(),a=Object(F.f)(),o=new URLSearchParams(n.search),c=o.get("restaurant"),i=o.get("table"),l=Object(M.b)(G,{variables:{restaurant:c,active:!0}}),s=l.data,m=l.loading,d=(null===s||void 0===s||null===(e=s.FetchLanguagesByRestaurant)||void 0===e?void 0:e.result)||[],u=function(e){t(_({tableId:i,restaurantId:c,lang:e})),a.push("/menu-items")};return r.a.createElement(W.a,{spinning:m},r.a.createElement("div",{className:"container welcome"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("h2",{className:"mb-5"},"Welcome"),r.a.createElement($.a,{className:"mb-4",onClick:function(){return u("")}},"English"),d.map((function(e){var t=e.name,n=e.key;return r.a.createElement($.a,{className:"mb-4",onClick:function(){return u(n)},key:n},t)}))))))},Z=n(40),ee=n(284),te=n(277);n(160).a.CustomButton={btnText:String};var ne=n(161),ae=n.n(ne),re=n(281),oe=n(282),ce=n(283),ie=n(278),le=function(e){var t=e.fromCard,n=e.id,a=e.name,o=e.price,c=Object(D.c)((function(e){var t;return null===e||void 0===e||null===(t=e.card[n])||void 0===t?void 0:t.quantity})),i=Object(D.b)();return r.a.createElement("div",null,r.a.createElement(ae.a,{style:{maxWidth:"100px",marginLeft:"30px"}},r.a.createElement($.a,{onClick:function(){var e=c-1;e<0&&(e=0),i(S({id:n,quantity:e,name:a,price:o}))},style:{padding:"4px 10px"}},r.a.createElement(re.a,null)),r.a.createElement(ie.a,{value:c||0,onChange:function(e){var t=e.target.value;t||(t=0),i(S({id:n,quantity:parseInt(t),name:a,price:o}))},style:{borderRight:"none",borderLeft:"none",textAlign:"center",padding:0,minWidth:"32px"}}),r.a.createElement($.a,{onClick:function(){return i(S({id:n,name:a,price:o,quantity:(c||0)+1}))},style:{padding:"4px 10px"}},r.a.createElement(oe.a,null))),t&&r.a.createElement(ce.a,{style:{color:"red",marginLeft:"10px"},onClick:function(){return i({type:"DELETE_ITEM",payload:{id:n}})}}))},se=function(e){var t,n=e.item,o=void 0===n?{}:n,c=e.fromCard,i=void 0===c||c,l=e.menuStyle,s=void 0===l?{}:l,m=Object(a.useState)(me),d=Object(Z.a)(m,2),u=d[0],g=d[1],f=o._id,p=o.price,v=o.desc,b=0===(null===o||void 0===o||null===(t=o.translation)||void 0===t?void 0:t.length)?null===o||void 0===o?void 0:o.name:Array.isArray(null===o||void 0===o?void 0:o.translation)&&(null===o||void 0===o?void 0:o.translation[0].name);return b||(b=o.name),Object(a.useEffect)((function(){0!==Object.keys(s).length&&g(s)}),[s]),r.a.createElement("div",{className:"mb-3"},r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement("h3",{style:u},b),r.a.createElement(le,{fromCard:i,id:f,name:b,price:p})),r.a.createElement("p",{style:{width:"75%",color:"#717171"}},v),r.a.createElement("p",{style:Object(j.a)(Object(j.a)({},u),{},{fontSize:"1rem"})},"RSD ",Number(p||0).toFixed(2)))},me={color:"#6d9d62",fontSize:"1.3rem"},de=n(68),ue=function(e){var t,n=e.subMenu,a=void 0===n?{}:n,o=e.menuStyle,c=0===(null===a||void 0===a||null===(t=a.translation)||void 0===t?void 0:t.length)?null===a||void 0===a?void 0:a.category:Array.isArray(null===a||void 0===a?void 0:a.translation)&&(null===a||void 0===a?void 0:a.translation[0].name);return r.a.createElement(de.Element,{name:a._id},r.a.createElement("div",{className:"mb-3"},r.a.createElement("h3",{style:{color:o.color||"#6d9d62",marginBottom:"30px",fontFamily:o.fontFamily||"inherit"}},c),null===a||void 0===a?void 0:a.items.map((function(e){return r.a.createElement(se,{item:e,fromCard:!1,key:e._id,menuStyle:o})}))))},ge=function(e){var t=e.category,n=e.menuStyle,a=(null===t||void 0===t?void 0:t.submenu)||[],o=(null===t||void 0===t?void 0:t.items)||[];return r.a.createElement(r.a.Fragment,null,a.map((function(e){return r.a.createElement(ue,{subMenu:e,key:e._id,menuStyle:n})})),o.map((function(e){return r.a.createElement(se,{item:e,key:e._id,menuStyle:n,fromCard:!1})})))},fe=n(276),pe=function(e){var t=e.item,n=e.onClose,o=e.open,c=Object(a.useState)([]),i=Object(Z.a)(c,2),l=i[0],s=i[1],m=t.category,d=t.submenu,u=fe.a.Panel;return Object(a.useEffect)((function(){s([])}),[o]),0===d.length?r.a.createElement(de.Link,{to:t._id,spy:!0,smooth:!0,duration:500,onClick:n,style:ve},m):r.a.createElement(fe.a,{bordered:!1,activeKey:l,onChange:function(e){return s(e)}},r.a.createElement(u,{header:m,key:"1",showArrow:!1,className:"custom-collaps"},console.log(d),d.map((function(e){var t,a=e.translation;return t=Array.isArray(a)&&0!==a.length?a[0].name:e.category,r.a.createElement(de.Link,{to:e._id,key:e._id,spy:!0,smooth:!0,duration:500,onClick:n,style:ve},t)}))))},ve={display:"block",border:"none",paddingLeft:0,paddingRight:0,fontSize:"1.5rem",color:"#6d9d62",marginBottom:"10px",textTransform:"capitalize"},be=function(){var e,t,n,o=Object(a.useState)(!1),c=Object(Z.a)(o,2),i=c[0],l=c[1],s=Object(F.f)(),m=Object(D.c)((function(e){return e.info})),d=m.restaurantId,u=m.lang,g=function(){return l(!1)},f=Object(M.b)(H,{variables:{limit:100,offset:0,resId:d,lang:u}}),p=f.data,v=f.loading,b=(null===p||void 0===p||null===(e=p.FetchMenuByRestaurantId)||void 0===e?void 0:e.result)||[],E=(null===p||void 0===p||null===(t=p.FetchMenuByRestaurantId)||void 0===t||null===(n=t.restaurant)||void 0===n?void 0:n.menuStyle)||{};Object(a.useEffect)((function(){d||s.push("/language")}),[d]);var y={backgroundColor:E.backgroundColor,padding:"10px",marginTop:"10px"},h={color:E.color||"#6d9d62",fontFamily:E.fontFamily||"inherit"};return r.a.createElement(W.a,{spinning:v},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("div",{className:"mt-3 mb-3 position-fixed custom-filter"},r.a.createElement(ee.a,{style:{fontSize:"30px"},onClick:function(){return l(!0)}})),r.a.createElement("div",{className:"text-center mt-5"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mb-3"})),b.map((function(e){var t;return r.a.createElement(de.Element,{name:e._id,key:e._id},r.a.createElement("div",{style:y},r.a.createElement("h2",{style:h,className:"mb-4"},0===(null===e||void 0===e||null===(t=e.translation)||void 0===t?void 0:t.length)?null===e||void 0===e?void 0:e.category:Array.isArray(null===e||void 0===e?void 0:e.translation)&&(null===e||void 0===e?void 0:e.translation[0].name)),r.a.createElement(ge,{category:e,menuStyle:E})))}))))),r.a.createElement(te.a,{title:"Filter menu",visible:i,onCancel:g,footer:null,style:Ee,bodyStyle:ye},r.a.createElement("div",null,b.map((function(e){return r.a.createElement(pe,{key:e._id,item:e,onClose:g,open:i})})))))},Ee={paddingTop:0,paddingBottom:0,top:0},ye={height:"100vh",overflowY:"scroll"},he=n(124),Oe=n.n(he),ke=n(172),we=n(173),je=n.n(we),Ne=n(280),xe=n(275),Se=function(){var e=Object(a.useState)([]),t=Object(Z.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(0),i=Object(Z.a)(c,2),l=i[0],s=i[1],m=Object(a.useState)(0),d=Object(Z.a)(m,2),u=d[0],g=d[1],f=Object(a.useState)([]),v=Object(Z.a)(f,2),b=v[0],E=v[1],y=Object(D.b)(),h=Object(F.f)(),O=Object(D.c)((function(e){return e})),k=O.card,w=O.info,N={tableId:null===w||void 0===w?void 0:w.tableId,currency:"RSD",total:String(l),paymentMethod:"cash"},x=Object(M.a)(Q),S=Object(Z.a)(x,2),C=S[0],R=S[1].loading,L=function(){var e=Object(ke.a)(Oe.a.mark((function e(){var t,n;return Oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C({variables:{orderData:Object(j.a)(Object(j.a)({},N),{},{note:null===w||void 0===w?void 0:w.note,items:b})}});case 3:t=e.sent,(n=t.data.CreateOrder).success?(y({type:"CLEAR_ITEM"}),y({type:"CLEAR_NOTE"}),p.a.success({message:n.message,placement:"bottomRight"}),h.push("/complete-order")):p.a.warn({message:n.message,placement:"bottomRight"}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=0,t=0,n=[],a=Object.keys(k).map((function(a){var r=k[a];return e+=+r.price*+r.quantity,t+=Number(r.quantity),n.push({item:r._id,quantity:r.quantity}),r}));E(n),o(a),s(e),g(t)}),[k]),Object(a.useEffect)((function(){w.tableId||h.push("/language")}),[w]),r.a.createElement("div",{className:"cart"},r.a.createElement("h2",{className:"main-title mb-4"},n.length?"Your orders":"Empty cart"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},n.map((function(e){return r.a.createElement(se,{item:e,key:e._id})})),r.a.createElement("div",{style:{width:"95%",margin:"150px auto 0"}},r.a.createElement("p",{style:{color:"#6d9d62",fontSize:"1.5rem"}},"Order note"),r.a.createElement(je.a,{value:null===w||void 0===w?void 0:w.note,onChange:function(e){return y(_({note:e.target.value}))},placeholder:"order note...",rows:5,style:{borderColor:"#717171"}})),r.a.createElement("div",{style:{border:"1px solid #717171",borderRadius:"5px",padding:"10px",marginTop:"20px",marginBottom:"20px"}},r.a.createElement("p",{style:{color:"#6d9d62",fontSize:"1.3rem"}},u," items in cart"),r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("p",{style:{color:"#6d9d62",fontSize:"1.6rem"}},"Total"),r.a.createElement("p",{style:{color:"#6d9d62",fontSize:"1.3rem"}},"RSD ",l))),r.a.createElement("div",{className:"text-center"},r.a.createElement(Ne.a,{disabled:!n.length,style:{backgroundColor:"#717171",color:"#fff",border:"none",fontSize:"20px",marginBottom:"30px"},onClick:L},r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},R&&r.a.createElement(xe.a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"}),r.a.createElement("span",{className:"ml-2"},"Order"))))))))},Ce=function(){var e=Object(F.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("div",{className:"mt-5"},r.a.createElement($.a,{style:Object(j.a)(Object(j.a)({},_e),{},{marginBottom:"30px"}),onClick:function(){return e.push("/ask-for-waiter")}},"Call waiter"),r.a.createElement($.a,{style:_e,onClick:function(){return e.push("/ask-for-bill")}},"Ask for bill")))))},_e={border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",fontSize:"1.5rem"},Re=n(285),Le=function(){var e=Object(F.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("div",{className:"mt-5"},r.a.createElement($.a,{style:Ie,className:"not-active"},"Your waiter will be there soon"),r.a.createElement(Re.a,{style:{color:"#6d9d62",marginBottom:"30px"}}),r.a.createElement($.a,{style:Ie,onClick:function(){return e.push("/comming-soon")}},"Ask for bill")))))},Ie={border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",marginBottom:"30px",fontSize:"1.5rem"},Ae=function(){var e=Object(F.f)();return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("div",{className:"mt-5"},r.a.createElement($.a,{style:Te,className:"not-active"},"Your bill is on it\u2019s way"),r.a.createElement(Re.a,{style:{color:"#6d9d62",marginBottom:"30px"}}),r.a.createElement($.a,{style:Te,onClick:function(){return e.push("/comming-soon")}},"Call waiter")))))},Te={border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",marginBottom:"30px",fontSize:"1.5rem"},Be=function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("div",{className:"mt-5"},r.a.createElement($.a,{style:De,className:"not-active"},"Waiter comming soon"),r.a.createElement(Re.a,{style:{color:"#6d9d62",marginBottom:"30px"}}),r.a.createElement($.a,{style:De,className:"not-active"},"Bill on it's way")))))},De={border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",marginBottom:"30px",fontSize:"1.5rem"},ze=[{path:"/",exact:!0,component:P},{path:"/language",exact:!0,component:X},{path:"/menu-items",exact:!0,component:be},{path:"/cart",exact:!0,component:Se},{path:"/call-waiter",exact:!0,component:Ce},{path:"/ask-for-waiter",exact:!0,component:Le},{path:"/ask-for-bill",exact:!0,component:Ae},{path:"/comming-soon",exact:!0,component:Be},{path:"/complete-order",exact:!0,component:function(){var e=Object(F.f)(),t=function(){return e.push("/ask-for-waiter")};return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("img",{src:"/img/logo.png",alt:"logo",className:"img-fluid mt-5 mb-5"}),r.a.createElement("div",{className:"mt-5"},r.a.createElement($.a,{style:{border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",marginBottom:"30px",fontSize:"1.5rem",color:"#6d9d62"}},"Thank you"),r.a.createElement($.a,{style:{border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",marginBottom:"30px",fontSize:"1.5rem"},onClick:function(){return e.push("/menu-items")}},"New order"),r.a.createElement($.a,{style:{border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",marginBottom:"30px",fontSize:"1.5rem"},onClick:t},"Call waiter"),r.a.createElement($.a,{style:{border:"none",paddingLeft:0,paddingRight:0,display:"block",margin:"auto",fontSize:"1.5rem"},onClick:t},"Ask for bill")))))}}],Fe=n(286),Pe=n(287),Me=n(288),We=n(279),$e=n(47),qe=function(){var e=Object(F.g)().pathname,t=Object(D.c)((function(e){return e})).card,n=Object(a.useState)(0),o=Object(Z.a)(n,2),c=o[0],i=o[1];if(Object(a.useEffect)((function(){var e=0;Object.values(t).map((function(t){e+=t.quantity})),i(e)}),[t]),!("/menu-items"===e||"/cart"===e||"/complete-order"===e||"/comming-soon"===e||"/call-waiter"===e||"/ask-for-waiter"===e||"/ask-for-bill"===e))return null;var l=[{text:"Menu",path:"/menu-items",icon:r.a.createElement(Fe.a,{style:{fontSize:"30px"}})},{text:"View cart",path:"/cart",icon:r.a.createElement(Pe.a,{style:{fontSize:"30px"}})},{text:"Call waiter",path:"/call-waiter",icon:r.a.createElement(Me.a,{style:{fontSize:"30px"}})}],s=function(t,n){return 1===n?"/complete-order"===e||"/cart"===e:2===n?"/comming-soon"===e||"/call-waiter"===e||"/ask-for-waiter"===e||"/ask-for-bill"===e:t===e};return r.a.createElement("div",{className:"d-flex justify-content-around menu"},l.map((function(e,t){return r.a.createElement("div",{className:"position-relative",key:e.path},"View cart"===e.text&&r.a.createElement("span",{style:Ue},c),r.a.createElement($e.a,{to:e.path,className:"text-center",key:e.path},r.a.createElement("span",{className:"d-block"},e.icon),r.a.createElement(We.a,{dot:s(e.path,t)},r.a.createElement("span",{className:"menu-text"},e.text))))})))},Ue={position:"absolute",color:"red",top:"-3px",right:"20px",fontSize:"15px"},Je=Object(z.a)(),Ke=function(){return r.a.createElement("div",{style:{paddingBottom:"91px"}},r.a.createElement(F.b,{history:Je},r.a.createElement(F.c,null,ze.map((function(e,t){return r.a.createElement(F.a,Object.assign({key:t},e))}))),r.a.createElement(qe,null)))},Ve=n(174),Ye=n.n(Ve);try{new PerformanceObserver((function(e){var t,n=Object(i.a)(e.getEntries());try{for(n.s();!(t=n.n()).done;){var a=t.value,r=a.processingStart-a.startTime;console.log("FID:",r)}}catch(o){n.e(o)}finally{n.f()}})).observe({type:"first-input",buffered:!0}),Ye.a.set("user","brainiacs-ez")}catch(Xe){console.log(Xe)}var He=function(){return r.a.createElement(l.a,{client:O},r.a.createElement(D.a,{store:B},r.a.createElement(Ke,null)))},Qe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(He,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");Qe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!==a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ge(t,e)}))}}()}},[[179,1,2]]]);
//# sourceMappingURL=main.d7cb2224.chunk.js.map