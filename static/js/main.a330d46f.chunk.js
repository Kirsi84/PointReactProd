(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/kahvi.1a7e95c7.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/letut.cc5dcdf3.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/horsmat.1a489123.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/herne.96ce251c.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/mustatorvisieni.6fde0fcc.jpg"},43:function(e,t,a){e.exports=a(82)},48:function(e,t,a){},49:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),c=a.n(l),o=(a(48),a(49),a(3)),s=a(9),m=a(11),i=a(32),u=a(36),d=a(13),b=a(33),p=a.n(b);var E=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"font-bold py-3 text-black"},r.a.createElement("div",{className:"h-10 w-10"},r.a.createElement("img",{src:p.a,alt:"kahvi"})),r.a.createElement("br",null),"Touko Myll\xe4rin luomutila"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu},"Tuotteet")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/message",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"L\xe4het\xe4 viesti")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/contact",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Yhteystiedot")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Tietoja"))))};var x=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],l=t[1],c=Object(d.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),o=Object(d.b)(a,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return r.a.createElement("nav",null,r.a.createElement("span",{className:"text-xl text-white"},r.a.createElement(i.a,{icon:u.a,onClick:function(){return l(!a)}})),c.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(d.a.div,{key:a,style:n,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return l(!1)}})})),o.map((function(e){var t=e.item,a=e.key,n=e.props;return t&&r.a.createElement(d.a.div,{key:a,style:n,className:"fixed bg-blue-100 top-0 left-0 w-1/3 h-full z-50 shadow p-3"},r.a.createElement(E,{closeMenu:function(){return l(!1)}}))})))},f=a(37),h=a(38);var v=function(){return r.a.createElement("header",{className:"bg-black border-b p-3 flex justify-between items-center fixed w-full\r font-bold text-white"},r.a.createElement("div",{className:"justify-start"},r.a.createElement(o.b,{to:"/"},r.a.createElement(f.Icon,{size:32,icon:h.home})),r.a.createElement(o.b,{className:"pl-10",to:"/message"},"L\xe4het\xe4 viesti"),r.a.createElement(o.b,{className:"pl-10",to:"/contact"},"Yhteystiedot"),r.a.createElement(o.b,{className:"pl-10",to:"/about"},"Tietoja")),r.a.createElement(x,null))};var g=function(){return r.a.createElement("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t"},"\xa9 Copyright 2020")};var w=function(){return r.a.createElement("div",{className:"flex justify-center"},r.a.createElement("div",{className:"loader"}))};var N=function(e){return r.a.createElement("div",{className:"p-8"},r.a.createElement("div",{className:"bg-white border-solid border-4 border-green-900 p-6"},r.a.createElement("h3",{className:"font-bold text-xl mb-3"},r.a.createElement(o.b,{to:"/products/".concat(e.product.id)},e.product.name)),r.a.createElement("div",{className:"font-bold mb-3"},"\u20ac ",e.product.price),r.a.createElement("div",{className:"mb-3"},e.product.description),r.a.createElement(o.b,{to:"/products/".concat(e.product.id),className:"bg-red-700 hover:bg-red-900 text-white p-2 flex justify-center w-full"},"Lis\xe4tietoja")))},y=a(15),k=a.n(y);function j(e){var t=Object(n.useState)({loading:!1,data:null,error:!1}),a=Object(m.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){l({loading:!0,data:null,error:!1}),k.a.get(e).then((function(e){l({loading:!1,data:e.data,error:!1})})).catch((function(){l({loading:!1,data:null,error:!0})}))}),[e]),r}var O=function(){var e=j("https://kirsir.azurewebsites.net/point-products.php"),t=null;return e.error&&(t=r.a.createElement("div",null,"return ",r.a.createElement(s.a,{to:"/error"}))),e.loading&&(t=r.a.createElement(w,null)),e.data&&(t=e.data.map((function(e){return r.a.createElement("div",{key:e.id,className:"flex-no-shrink w-full md:w-1/4 md:px-3"},r.a.createElement(N,{product:e}))}))),r.a.createElement("div",{className:"container mx-auto"},r.a.createElement("h1",{className:"font-bold text-2xl mb-3 text-white"},"Tuotteet"),r.a.createElement("div",{className:"md:flex flex-wrap md:-mx-3"},t))},M=a(39),C=a.n(M),S=a(40),T=a.n(S),z=a(41),P=a.n(z);var L=function(){return r.a.createElement("div",{className:"py-24"},r.a.createElement("div",{className:"h-auto bg-green-900 border-2\r text-white text-2xl\r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-6 text-center"},"React-PHP-MySql-tailwind harjoitusty\xf6: versio 1.0"),r.a.createElement("div",{className:"h-auto bg-green-900 border-2 \r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-8"},r.a.createElement("div",{className:"flex my-auto content-start flex-wrap bg-gray-400 h-48"},r.a.createElement("div",{className:"w-1/3 p-2"},r.a.createElement("div",{className:"text-gray-700 text-center bg-green-900 p-2"},r.a.createElement("img",{className:"w-full h-40",src:C.a,alt:"letut"}))),r.a.createElement("div",{className:"w-1/3 p-2"},r.a.createElement("div",{className:"text-gray-700 text-center bg-gray-400 p-2"},r.a.createElement("img",{className:"w-auto h-40",src:T.a,alt:"horsmat"}))),r.a.createElement("div",{className:"w-1/3 p-2"},r.a.createElement("div",{className:"text-gray-700 text-center bg-green-900 p-2"},r.a.createElement("img",{className:"w-full h-40 content-center ",src:P.a,alt:"herne"}))))))},F=a(42),K=a.n(F);var V=function(){return r.a.createElement("div",{className:"py-24"},r.a.createElement("div",{className:"text-xl h-auto bg-green-900 border-2 text-white w-1/2\r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-6 text-center"},"Touko Myll\xe4rin luomutila",r.a.createElement("br",null),"T\xe4hk\xe4tie 25",r.a.createElement("br",null),"Puimala",r.a.createElement("br",null),"Puh. 040 - 123 456"),r.a.createElement("div",{className:"h-auto bg-green-900 border-2 \r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-6 text-center"},r.a.createElement("img",{className:"w-auto",src:K.a,alt:"mustatorvisieni"})))};var X=function(){var e=Object(n.useState)({submitting:!1,status:null}),t=Object(m.a)(e,2),a=t[0],l=t[1],c=function(e,t,a){l({submitting:!1,status:{ok:e,msg:t}}),e&&a.reset()};return r.a.createElement("div",{className:"pt-20"},r.a.createElement("div",{className:"bg-green-900 border-2 border-white\r w-1/2 content-center max-w-screen-md mx-auto w-3/4"},r.a.createElement("form",{className:"m-6",onSubmit:function(e){e.preventDefault();var t=e.target;l({submitting:!0});k()({method:"post",url:"https://kirsir.azurewebsites.net/point-upd-message.php",data:new FormData(t)}).then((function(e){if(1===e.data.success)c(!0,"Kiitos viestist\xe4si!",t);else{c(!1,"Virhe tietojen k\xe4sittelyss\xe4, tietoja ei ole tallennettu",t)}})).catch((function(e){c(!1,"Virhe tietojen k\xe4sittelyss\xe4. Kokeile hetken kuluttua uudelleen!",t)}))}},r.a.createElement("h1",{className:"text-2xl text-white"},"Ota yhteytt\xe4:"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-white text-xl font-bold mb-2",htmlFor:"email"},"S\xe4hk\xf6posti:"),r.a.createElement("input",{className:"shadow appearance-none w-full py-2 px-3\r text-gray-900 leading-tight focus:outline-none focus:shadow-outline\r border-teal-700 p-4 border-2",id:"email",type:"email",name:"email",required:!0})),r.a.createElement("div",null,r.a.createElement("label",{className:"block text-white text-xl font-bold mb-2",htmlFor:"message"},"Viesti:"),r.a.createElement("textarea",{className:"h-64 shadow appearance-none w-full py-2 px-3\r text-gray-900 leading-tight focus:outline-none focus:shadow-outline\r border-teal-700 p-4 border-2 ",id:"message",name:"message"})),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:a.submitting,className:"w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 border border-teal-700 rounde"},"L\xe4het\xe4")),r.a.createElement("br",null),r.a.createElement("div",{className:"text-white text-xl font-bold"},a.status&&r.a.createElement("p",{className:a.status.ok?"":"errorMsg"},a.status.msg)))))};var q=function(){var e=Object(s.g)().id,t=j("https://kirsir.azurewebsites.net/point-product.php/?id=".concat(e)),a=null;return t.error&&(a=r.a.createElement("div",null,"return ",r.a.createElement(s.a,{to:"/error"}))),t.loading&&(a=r.a.createElement(w,null)),t.data&&(a=r.a.createElement("div",{className:"p-10"},r.a.createElement("div",{className:"max-w-screen-md mx-auto w-3/4  h-auto bg-white\r border-solid border-4 border-green-900 p-6"},r.a.createElement("h1",{className:"text-2xl font-bold mb-3"},t.data.name),r.a.createElement("div",{className:"font-bold text-xl mb-3"},"\u20ac  ",t.data.price),r.a.createElement("div",{className:"text-xl mb-3"},t.data.description),r.a.createElement("div",{className:"text-xl mb-3"},t.data.information)))),r.a.createElement("div",{className:"container mx-auto p-16"},a)};var B=function(){return r.a.createElement("div",{className:"pt-32"},r.a.createElement("div",{className:"self-auto  bg-blue-300 border-2 \r text-2xl font-bold text-white\r w-1/2 content-center \r py-6 px-6 mx-auto"},"Palvelimeen ei saada yhteytt\xe4. Kokeile hetken kuluttua uudelleen!"))};var D=function(){return r.a.createElement("div",{className:"relative pb-10 min-h-screen"},r.a.createElement(o.a,null,r.a.createElement(v,null),r.a.createElement("div",{className:"p-3"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(O,null)),r.a.createElement(s.b,{path:"/about"},r.a.createElement(L,null)),r.a.createElement(s.b,{path:"/contact"},r.a.createElement(V,null)),r.a.createElement(s.b,{path:"/message"},r.a.createElement(X,null)),r.a.createElement(s.b,{path:"/products/:id"},r.a.createElement(q,null)),r.a.createElement(s.b,{path:"/error"},r.a.createElement(B,null)))),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.a330d46f.chunk.js.map