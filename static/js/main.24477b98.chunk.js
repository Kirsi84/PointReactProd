(this["webpackJsonplearning-react"]=this["webpackJsonplearning-react"]||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/kahvi.1a7e95c7.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/letut.cc5dcdf3.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/horsmat.1a489123.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/herne.96ce251c.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/mustatorvisieni.6fde0fcc.jpg"},43:function(e,t,a){e.exports=a(82)},48:function(e,t,a){},49:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(31),c=a.n(r),o=(a(48),a(49),a(3)),m=a(9),s=a(11),i=a(32),u=a(36),d=a(13),b=a(33),p=a.n(b);var E=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:"font-bold py-3 text-black"},n.a.createElement("div",{className:"h-10 w-10"},n.a.createElement("img",{src:p.a,alt:"kahvi"})),n.a.createElement("br",null),"Touko Myll\xe4rin luomutila"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(o.b,{to:"/",className:"text-blue-500 py-3 border-t border-b block",onClick:e.closeMenu},"Tuotteet")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/message",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"L\xe4het\xe4 viesti")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/contact",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Yhteystiedot")),n.a.createElement("li",null,n.a.createElement(o.b,{to:"/about",className:"text-blue-500 py-3 border-b block",onClick:e.closeMenu},"Tietoja"))))};var x=function(){var e=Object(l.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(d.b)(a,null,{from:{position:"absolute",opacity:0},enter:{opacity:1},leave:{opacity:0}}),o=Object(d.b)(a,null,{from:{opacity:0,transform:"translateX(-100%)"},enter:{opacity:1,transform:"translateX(0%)"},leave:{opacity:0,transform:"translateX(-100%)"}});return n.a.createElement("nav",null,n.a.createElement("span",{className:"text-xl text-white"},n.a.createElement(i.a,{icon:u.a,onClick:function(){return r(!a)}})),c.map((function(e){var t=e.item,a=e.key,l=e.props;return t&&n.a.createElement(d.a.div,{key:a,style:l,className:"bg-black-t-50 fixed top-0 left-0 w-full h-full z-50",onClick:function(){return r(!1)}})})),o.map((function(e){var t=e.item,a=e.key,l=e.props;return t&&n.a.createElement(d.a.div,{key:a,style:l,className:"fixed bg-blue-100 top-0 left-0 w-1/3 h-full z-50 shadow p-3"},n.a.createElement(E,{closeMenu:function(){return r(!1)}}))})))},h=a(37),f=a(38);var v=function(){return n.a.createElement("header",{className:"bg-black border-b p-3 flex justify-between items-center fixed w-full\r font-bold text-white"},n.a.createElement("div",{className:"justify-start"},n.a.createElement(o.b,{to:"/"},n.a.createElement(h.Icon,{size:32,icon:f.home})),n.a.createElement(o.b,{className:"pl-10",to:"/message"},"L\xe4het\xe4 viesti"),n.a.createElement(o.b,{className:"pl-10",to:"/contact"},"Yhteystiedot"),n.a.createElement(o.b,{className:"pl-10",to:"/about"},"Tietoja")),n.a.createElement(x,null))};var g=function(){return n.a.createElement("footer",{className:"bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full border-t"},"\xa9 Copyright 2020")};var w=function(){return n.a.createElement("div",{className:"flex justify-center"},n.a.createElement("div",{className:"loader"}))};var N=function(e){return n.a.createElement("div",{className:"p-8"},n.a.createElement("div",{className:"bg-white border-solid border-4 border-green-900 p-6"},n.a.createElement("h3",{className:"font-bold text-xl mb-3"},n.a.createElement(o.b,{to:"/products/".concat(e.product.id)},e.product.name)),n.a.createElement("div",{className:"font-bold mb-3"},"\u20ac ",e.product.price),n.a.createElement("div",{className:"mb-3"},e.product.description),n.a.createElement(o.b,{to:"/products/".concat(e.product.id),className:"bg-red-700 hover:bg-red-900 text-white p-2 flex justify-center w-full"},"Lis\xe4tietoja")))},y=a(15),k=a.n(y);function j(e){var t=Object(l.useState)({loading:!1,data:null,error:!1}),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(l.useEffect)((function(){r({loading:!0,data:null,error:!1}),k.a.get(e).then((function(e){r({loading:!1,data:e.data,error:!1})})).catch((function(){r({loading:!1,data:null,error:!0})}))}),[e]),n}var O=function(){var e=j("http://localhost/point-products.php"),t=null;return e.error&&(t=n.a.createElement("div",null,"return ",n.a.createElement(m.a,{to:"/error"}))),e.loading&&(t=n.a.createElement(w,null)),e.data&&(t=e.data.map((function(e){return n.a.createElement("div",{key:e.id,className:"flex-no-shrink w-full md:w-1/4 md:px-3"},n.a.createElement(N,{product:e}))}))),n.a.createElement("div",{className:"container mx-auto"},n.a.createElement("h1",{className:"font-bold text-2xl mb-3 text-white"},"Tuotteet"),n.a.createElement("div",{className:"md:flex flex-wrap md:-mx-3"},t))},M=a(39),C=a.n(M),S=a(40),T=a.n(S),P=a(41),L=a.n(P);var z=function(){return n.a.createElement("div",{className:"py-24"},n.a.createElement("div",{className:"text-2xl h-40 bg-green-900 border-2 text-white\r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-6 text-center"},"React-PHP-MySql-tailwind harjoitusty\xf6: versio 1.0"),n.a.createElement("div",{className:"h-80 bg-green-900 border-2 \r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-8"},n.a.createElement("div",{className:"flex my-auto content-start flex-wrap bg-gray-400 h-48"},n.a.createElement("div",{className:"w-1/3 p-2"},n.a.createElement("div",{className:"text-gray-700 text-center bg-green-900 p-2"},n.a.createElement("img",{className:"w-full h-40",src:C.a,alt:"letut"}))),n.a.createElement("div",{className:"w-1/3 p-2"},n.a.createElement("div",{className:"text-gray-700 text-center bg-gray-400 p-2"},n.a.createElement("img",{className:"w-auto h-40",src:T.a,alt:"horsmat"}))),n.a.createElement("div",{className:"w-1/3 p-2"},n.a.createElement("div",{className:"text-gray-700 text-center bg-green-900 p-2"},n.a.createElement("img",{className:"w-full h-40 content-center ",src:L.a,alt:"herne"}))))))},F=a(42),K=a.n(F);var V=function(){return n.a.createElement("div",{className:"py-24"},n.a.createElement("div",{className:"text-xl h-48 bg-green-900 border-2 text-white w-1/2\r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-6 text-center"},"Touko Myll\xe4rin luomutila",n.a.createElement("br",null),"T\xe4hk\xe4tie 25",n.a.createElement("br",null),"Puimala",n.a.createElement("br",null),"Puh. 040 - 123 456"),n.a.createElement("div",{className:"h-80 bg-green-900 border-2 \r content-center max-w-screen-md mx-auto w-3/4\r px-16 py-6 text-center"},n.a.createElement("img",{className:"w-auto",src:K.a,alt:"mustatorvisieni"})))};var X=function(){var e=Object(l.useState)({submitting:!1,status:null}),t=Object(s.a)(e,2),a=t[0],r=t[1],c=function(e,t,a){r({submitting:!1,status:{ok:e,msg:t}}),e&&a.reset()};return n.a.createElement("div",{className:"pt-20"},n.a.createElement("div",{className:"bg-green-900 border-2 border-white\r w-1/2 content-center max-w-screen-md mx-auto w-3/4"},n.a.createElement("form",{className:"m-6",onSubmit:function(e){e.preventDefault();var t=e.target;r({submitting:!0}),k()({method:"post",url:"http://localhost/point-upd-message.php",data:new FormData(t)}).then((function(e){if(1===e.data.success)c(!0,"Kiitos viestist\xe4si!",t);else{c(!1,"Virhe tietojen k\xe4sittelyss\xe4, tietoja ei ole tallennettu",t)}})).catch((function(e){c(!1,"Virhe tietojen k\xe4sittelyss\xe4. Kokeile hetken kuluttua uudelleen!",t)}))}},n.a.createElement("h1",{className:"text-2xl text-white"},"Ota yhteytt\xe4:"),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("label",{className:"block text-white text-xl font-bold mb-2",htmlFor:"email"},"S\xe4hk\xf6posti:"),n.a.createElement("input",{className:"shadow appearance-none w-full py-2 px-3\r text-gray-900 leading-tight focus:outline-none focus:shadow-outline\r border-teal-700 p-4 border-2",id:"email",type:"email",name:"email",required:!0})),n.a.createElement("div",null,n.a.createElement("label",{className:"block text-white text-xl font-bold mb-2",htmlFor:"message"},"Viesti:"),n.a.createElement("textarea",{className:"h-64 shadow appearance-none w-full py-2 px-3\r text-gray-900 leading-tight focus:outline-none focus:shadow-outline\r border-teal-700 p-4 border-2 ",id:"message",name:"message"})),n.a.createElement("br",null),n.a.createElement("div",null,n.a.createElement("button",{type:"submit",disabled:a.submitting,className:"w-full bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 border border-teal-700 rounde"},"L\xe4het\xe4")),n.a.createElement("br",null),n.a.createElement("div",{className:"text-white text-xl font-bold"},a.status&&n.a.createElement("p",{className:a.status.ok?"":"errorMsg"},a.status.msg)))))};var q=function(){var e=Object(m.g)().id,t=j("http://localhost/point-product.php/?id=".concat(e)),a=null;return t.error&&(a=n.a.createElement("div",null,"return ",n.a.createElement(m.a,{to:"/error"}))),t.loading&&(a=n.a.createElement(w,null)),t.data&&(a=n.a.createElement("div",{className:"p-10"},n.a.createElement("div",{className:"max-w-screen-md mx-auto w-3/4  h-auto bg-white\r border-solid border-4 border-green-900 p-6"},n.a.createElement("h1",{className:"text-2xl font-bold mb-3"},t.data.name),n.a.createElement("div",{className:"font-bold text-xl mb-3"},"\u20ac  ",t.data.price),n.a.createElement("div",{className:"text-xl mb-3"},t.data.description),n.a.createElement("div",{className:"text-xl mb-3"},t.data.information)))),n.a.createElement("div",{className:"container mx-auto p-16"},a)};var B=function(){return n.a.createElement("div",null,n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"h-32 bg-blue-300 border-2 text-white text-2xl\r w-1/2 content-center max-w-screen-md mx-auto w-3/4\r px-16 py-4 font-bold"},"Palvelimeen ei saada yhteytt\xe4. Kokeile hetken kuluttua uudelleen!"))};var D=function(){return n.a.createElement("div",{className:"relative pb-10 min-h-screen"},n.a.createElement(o.a,null,n.a.createElement(v,null),n.a.createElement("div",{className:"p-3"},n.a.createElement(m.d,null,n.a.createElement(m.b,{exact:!0,path:"/"},n.a.createElement(O,null)),n.a.createElement(m.b,{path:"/about"},n.a.createElement(z,null)),n.a.createElement(m.b,{path:"/contact"},n.a.createElement(V,null)),n.a.createElement(m.b,{path:"/message"},n.a.createElement(X,null)),n.a.createElement(m.b,{path:"/products/:id"},n.a.createElement(q,null)),n.a.createElement(m.b,{path:"/error"},n.a.createElement(B,null)))),n.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.24477b98.chunk.js.map