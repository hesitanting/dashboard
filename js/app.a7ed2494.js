webpackJsonp([19],{0:function(e,t,n){e.exports=n("NHnr")},"9JUE":function(e,t){e.exports={message:{hello:"世界你好",hello2:"{name}你好"}}},"H/op":function(e,t){},HSE0:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};n.d(o,"title",function(){return I}),n.d(o,"session",function(){return D}),n.d(o,"header",function(){return R}),n.d(o,"sidebar",function(){return M}),n.d(o,"count",function(){return U});var r={};n.d(r,"CHANGE_SESSION",function(){return G}),n.d(r,"TOGGLE_SIDEBAR_COLLAPSE",function(){return L}),n.d(r,"INCREMENT",function(){return z}),n.d(r,"DECREMENT",function(){return B});var u={};n.d(u,"changeTitle",function(){return ee}),n.d(u,"createToken",function(){return te}),n.d(u,"checkToken",function(){return ne}),n.d(u,"deleteToken",function(){return oe}),n.d(u,"getCurrentUser",function(){return re}),n.d(u,"toggleSidebarCollapse",function(){return ue}),n.d(u,"increment",function(){return ae}),n.d(u,"incrementAsync",function(){return ie}),n.d(u,"decrement",function(){return ce}),n.d(u,"decrementAsync",function(){return se});var a={};n.d(a,"comments",function(){return he}),n.d(a,"options",function(){return ve}),n.d(a,"posts",function(){return Ne}),n.d(a,"terms",function(){return He}),n.d(a,"users",function(){return De}),n.d(a,"demo",function(){return Le});var i=n("/5sW"),c=n("zL8q"),s=n.n(c),m={name:"app"},p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade"}},[n("router-view",{staticClass:"wrapper"})],1)},l=[],d=n("XyMi"),h=!1,f=null,g=null,b=null,x=Object(d["a"])(m,p,l,h,f,g,b),E=x.exports,A=n("TXmL");i["default"].use(A["a"]);var v=new A["a"]({locale:"en",messages:{en:n("iD8h"),cn:n("9JUE"),ja:n("fB3c")}}),w=n("NYxO"),q=n("mtWM"),_=n.n(q),y=_.a.create({baseURL:"//jsonplaceholder.uieee.com/",timeout:1e4,headers:{"X-Requested-With":"XMLHttpRequest"}}),N=y,S=n("Y4FN"),O=n.n(S),P=O.a,C=(n("UVIz"),n("Y81h")),H=n.n(C),T=H.a,k={session:P.get("wedn_net_session_info")||{},header:{name:"WEDN.NET",menus:[{text:"0",icon:"bubble",name:"comments"},{text:"New",icon:"plus",name:"new",params:{type:"blog"},children:[{text:"Post",name:"new",params:{type:"blog"}},{text:"Media",name:"upload"},{text:"Page",name:"new",params:{type:"page"}},{text:"User",name:"users"}]},{text:"Components",icon:"lab",name:"components",children:[{text:"Icons",name:"components-icons"},{text:"Button",name:"components-button"},{text:"Table",name:"components-table"}]},{text:"Demo",icon:"magic-wand",name:"demo",children:[{text:"Data",name:"demo-data"},{text:"Params",name:"demo-params",params:{name:"汪磊"}},{text:"Vuex",name:"demo-vuex"},{text:"I18n",name:"demo-i18n"},{divider:!0},{text:"Proxy",name:"demo-proxy"},{text:"CORS",name:"demo-cors"},{divider:!0},{text:"NotFound",path:"/hello-world"}]}]},sidebar:{copyright:"WEDN.NET",collapse:P.get("wedn_net_sidebar_collapse"),menus:[{title:"Actions"},{text:"Dashboard",icon:"meter",name:"dashboard",children:[{text:"Home",name:"dashboard"},{text:"Update",name:"update"}]},{divider:!0},{text:"Posts",icon:"pushpin",name:"posts",params:{type:"blog"},children:[{text:"All",name:"posts",params:{type:"blog"}},{text:"New",name:"new",params:{type:"blog"}},{text:"Categories",name:"terms",params:{type:"blog-category"}},{text:"Tags",name:"terms",params:{type:"blog-tag"}}]},{text:"Pages",icon:"newspaper",name:"posts",params:{type:"page"},children:[{text:"All pages",name:"posts",params:{type:"page"}},{text:"New page",name:"new",params:{type:"page"}}]},{text:"Media",icon:"images",name:"media",children:[{text:"Media library",name:"media"},{text:"Upload",name:"upload"}]},{divider:!0},{text:"Users",icon:"users",name:"users",children:[{text:"All users",name:"users"},{text:"Roles",name:"roles"},{text:"Permissions",name:"permissions"}]},{text:"Comments",icon:"bubbles",name:"comments"},{divider:!0},{text:"Themes",icon:"paint-format",name:"themes",children:[{text:"Themes",name:"themes"},{text:"Customization",name:"customize"},{text:"Widgets",name:"widgets"},{text:"Navigation",name:"navigation"}]},{text:"Plugins",icon:"power-cord",name:"plugins",children:[{text:"Installed plugins",name:"plugins"},{text:"Install plugin",name:"install",params:{type:"plugin"}}]},{text:"Tools",icon:"wrench",name:"tools",children:[{text:"Available tools",name:"tools"},{text:"Import",name:"import"},{text:"Export",name:"export"}]},{text:"Settings",icon:"equalizer",name:"options",params:{type:"general"},children:[{text:"General",name:"options",params:{type:"general"}},{divider:!0},{text:"Write",name:"options",params:{type:"writing"}},{text:"Read",name:"options",params:{type:"reading"}},{text:"Discuss",name:"options",params:{type:"discussion"}},{text:"Media",name:"options",params:{type:"media"}},{text:"Permalink",name:"options",params:{type:"permalink"}}]}]},count:P.get("wedn_net_demo_count")||0};k.session&&k.session.token&&(N.defaults.headers.Authorization="Bearer ".concat(k.session.token));var j=k,I=function(e){return e.title},D=function(e){return e.session},R=function(e){return e.header},M=function(e){return e.sidebar},U=function(e){return e.count},G=(n("n12u"),function(e,t){t&&t.token&&(N.defaults.headers.Authorization="Bearer ".concat(t.token)),Object.assign(e.session,t),P.set("wedn_net_session_info",e.session)}),L=function(e){e.sidebar.collapse=!e.sidebar.collapse,P.set("wedn_net_sidebar_collapse",e.sidebar.collapse)},z=function(e){e.count++,P.set("wedn_net_demo_count",e.count)},B=function(e){e.count--,P.set("wedn_net_demo_count",e.count)},W=(n("y9m4"),n("Oy1H")),X=n.n(W);function Y(e,t){this.base=e,Object.assign(this,t)}Y.prototype={get:function(e,t){var n="/".concat(this.base);return"object"===X()(e)?t=e:void 0!==e&&(n+="/".concat(e)),N.get(n,t)},delete:function(e,t){var n="/".concat(this.base,"/").concat(e);return N.delete(n,t)},post:function(e){var t="/".concat(this.base);return N.post(t,e)},put:function(e,t){var n="/".concat(this.base,"/").concat(e);return N.put(n,t)},patch:function(e,t){var n="/".concat(this.base,"/").concat(e);return N.patch(n,t)}};var $=Y,F=new $("comments"),J=new $("options"),V=new $("posts"),Z=new $("terms"),Q=new $("tokens"),K=new $("users"),ee=function(e,t){var n=e.commit;n("CHANGE_SESSION",{title:t})},te=function(e,t){var n=e.commit,o=t.username,r=t.password;return Q.post({username:o.trim(),password:r.trim()}).then(function(e){return n("CHANGE_SESSION",{token:e.data.token}),e.data.token})},ne=function(e){var t=e.commit,n=e.getters;return new Promise(function(e,o){if(!n.session.token)return e(!1);Q.get().then(function(t){return e(!0)}).catch(function(n){console.error(n),t("CHANGE_SESSION",{token:null}),e(!1)})})},oe=function(e){var t=e.commit,n=e.getters;return Q.delete(n.session.token).then(function(e){t("CHANGE_SESSION",{token:null})})},re=function(e){var t=e.commit;return K.get("me").then(function(e){return t("CHANGE_SESSION",{user:e.data}),e.data})},ue=function(e){var t=e.commit;t("TOGGLE_SIDEBAR_COLLAPSE")},ae=function(e){var t=e.commit;return t("INCREMENT")},ie=function(e){var t=e.commit;return setTimeout(function(){return t("INCREMENT")},1e3)},ce=function(e){var t=e.commit;return t("DECREMENT")},se=function(e){var t=e.commit;return setTimeout(function(){return t("DECREMENT")},1e3)},me={},pe={},le={},de={},he={state:me,getters:pe,mutations:le,actions:de},fe=(n("SldL"),n("7hDC")),ge=n.n(fe),be={options:{}},xe={options:function(e){return e.options}},Ee={CHANGE_OPTIONS:function(e,t){Object.assign(e.options,t)}},Ae={changeOptions:function(){var e=ge()(regeneratorRuntime.mark(function e(t,n){var o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:o=t.commit,o("CHANGE_OPTIONS",{});case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},ve={state:be,getters:xe,mutations:Ee,actions:Ae},we={},qe={},_e={},ye={},Ne={state:we,getters:qe,mutations:_e,actions:ye},Se={},Oe={},Pe={},Ce={},He={state:Se,getters:Oe,mutations:Pe,actions:Ce},Te={},ke={},je={},Ie={},De={state:Te,getters:ke,mutations:je,actions:Ie},Re={message:P.get("wedn_net_demo_message")},Me={message:function(e){return e.message}},Ue={CHANGE_MESSAGE:function(e,t){e.message=t}},Ge={changeMessage:function(e,t){var n=e.commit;console.log(t),n("CHANGE_MESSAGE",t)}},Le={state:Re,getters:Me,mutations:Ue,actions:Ge};i["default"].use(w["a"]);var ze=!1,Be=[],We=new w["a"].Store({state:j,getters:o,mutations:r,actions:u,modules:a,strict:ze,plugins:Be});var Xe=We,Ye=n("/ocq"),$e=[{name:"demo",path:"demo",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("+RJ3"))}.bind(null,n)).catch(n.oe)}},{name:"demo-data",path:"demo/data",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("upEN"))}.bind(null,n)).catch(n.oe)}},{name:"demo-vuex",path:"demo/vuex",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("z9aT"))}.bind(null,n)).catch(n.oe)}},{name:"demo-i18n",path:"demo/i18n",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("5vhj"))}.bind(null,n)).catch(n.oe)}},{name:"demo-proxy",path:"demo/proxy",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("6R3e"))}.bind(null,n)).catch(n.oe)}},{name:"demo-cors",path:"demo/cors",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("LWN5"))}.bind(null,n)).catch(n.oe)}},{name:"demo-params",path:"demo/:name",meta:{requiresAuth:!1},component:function(e){return n.e(1).then(function(){return e(n("Hs43"))}.bind(null,n)).catch(n.oe)}},{name:"components",path:"components",meta:{requiresAuth:!1},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n("BMQF"))}.bind(null,n)).catch(n.oe)}},{name:"components-icons",path:"components/icons",meta:{requiresAuth:!1},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n("hp/E"))}.bind(null,n)).catch(n.oe)}},{name:"components-button",path:"components/button",meta:{requiresAuth:!1},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n("e8EL"))}.bind(null,n)).catch(n.oe)}},{name:"components-table",path:"components/table",meta:{requiresAuth:!1},component:function(e){return Promise.all([n.e(0),n.e(3)]).then(function(){return e(n("6pQe"))}.bind(null,n)).catch(n.oe)}}],Fe=[{name:"dashboard",path:"",meta:{requiresAuth:!0},component:function(e){return n.e(10).then(function(){return e(n("jw7m"))}.bind(null,n)).catch(n.oe)}},{name:"update",path:"update",meta:{requiresAuth:!0},component:function(e){return n.e(12).then(function(){return e(n("gfuz"))}.bind(null,n)).catch(n.oe)}},{name:"about",path:"about",meta:{requiresAuth:!0},component:function(e){return n.e(17).then(function(){return e(n("vZcI"))}.bind(null,n)).catch(n.oe)}},{name:"profile",path:"profile",meta:{requiresAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n("rRYe"))}.bind(null,n)).catch(n.oe)}},{name:"posts",path:"posts/:type",meta:{requiresAuth:!0},component:function(e){return n.e(5).then(function(){return e(n("83qg"))}.bind(null,n)).catch(n.oe)}},{name:"new",path:"new/:type",meta:{requiresAuth:!0},component:function(e){return n.e(5).then(function(){return e(n("wwS6"))}.bind(null,n)).catch(n.oe)}},{name:"edit",path:"edit/:type/:slug?",meta:{requiresAuth:!0},component:function(e){return n.e(5).then(function(){return e(n("d521"))}.bind(null,n)).catch(n.oe)}},{name:"media",path:"media",meta:{requiresAuth:!0},component:function(e){return n.e(15).then(function(){return e(n("uTDp"))}.bind(null,n)).catch(n.oe)}},{name:"upload",path:"upload",meta:{requiresAuth:!0},component:function(e){return n.e(11).then(function(){return e(n("8nLs"))}.bind(null,n)).catch(n.oe)}},{name:"terms",path:"terms/:type",meta:{requiresAuth:!0},component:function(e){return n.e(13).then(function(){return e(n("HnBi"))}.bind(null,n)).catch(n.oe)}},{name:"users",path:"users/:page?",meta:{requiresAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n("B1PU"))}.bind(null,n)).catch(n.oe)}},{name:"roles",path:"roles",meta:{requiresAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n("gHWw"))}.bind(null,n)).catch(n.oe)}},{name:"permissions",path:"permissions",meta:{requiresAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(2)]).then(function(){return e(n("Jmrq"))}.bind(null,n)).catch(n.oe)}},{name:"comments",path:"comments",meta:{requiresAuth:!0},component:function(e){return n.e(16).then(function(){return e(n("+bYH"))}.bind(null,n)).catch(n.oe)}},{name:"themes",path:"themes",meta:{requiresAuth:!0},component:function(e){return n.e(4).then(function(){return e(n("HFlQ"))}.bind(null,n)).catch(n.oe)}},{name:"customize",path:"customize",meta:{requiresAuth:!0},component:function(e){return n.e(4).then(function(){return e(n("i8ZB"))}.bind(null,n)).catch(n.oe)}},{name:"widgets",path:"widgets",meta:{requiresAuth:!0},component:function(e){return n.e(4).then(function(){return e(n("F9YX"))}.bind(null,n)).catch(n.oe)}},{name:"navigation",path:"navigation",meta:{requiresAuth:!0},component:function(e){return n.e(4).then(function(){return e(n("tsWX"))}.bind(null,n)).catch(n.oe)}},{name:"plugins",path:"plugins",meta:{requiresAuth:!0},component:function(e){return n.e(8).then(function(){return e(n("2qWS"))}.bind(null,n)).catch(n.oe)}},{name:"install",path:"install/:type",meta:{requiresAuth:!0},component:function(e){return n.e(8).then(function(){return e(n("qjaC"))}.bind(null,n)).catch(n.oe)}},{name:"tools",path:"tools",meta:{requiresAuth:!0},component:function(e){return n.e(6).then(function(){return e(n("cLUc"))}.bind(null,n)).catch(n.oe)}},{name:"import",path:"import",meta:{requiresAuth:!0},component:function(e){return n.e(6).then(function(){return e(n("i6H/"))}.bind(null,n)).catch(n.oe)}},{name:"export",path:"export",meta:{requiresAuth:!0},component:function(e){return n.e(6).then(function(){return e(n("Z/zH"))}.bind(null,n)).catch(n.oe)}},{name:"options",path:"options/:type",meta:{requiresAuth:!0},component:function(e){return n.e(14).then(function(){return e(n("0IEZ"))}.bind(null,n)).catch(n.oe)}}].concat($e),Je=[{name:"login",path:"/login",meta:{requiresAuth:!1},component:function(e){return Promise.all([n.e(0),n.e(9)]).then(function(){return e(n("Quw4"))}.bind(null,n)).catch(n.oe)}},{path:"/",meta:{requiresAuth:!0},component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){return e(n("4er+"))}.bind(null,n)).catch(n.oe)},children:Fe},{name:"not-found",path:"*",meta:{requiresAuth:!1},component:function(e){return Promise.all([n.e(0),n.e(7)]).then(function(){return e(n("qZa5"))}.bind(null,n)).catch(n.oe)}}];i["default"].use(Ye["a"]);var Ve=new Ye["a"]({routes:Je}),Ze=function(e){Object.defineProperties(e,{axios:{get:function(){return N}}}),Object.defineProperties(e.prototype,{$axios:{get:function(){return N}}})},Qe=(n("EuXz"),function(e,t){var n;Ve.afterEach(function(e){n=e.matched.map(function(e){return(e.components.default[t.property]||e.components.default.name).toUpperCase()}).reverse(),document.title=n.join(t.separator)}),Object.defineProperties(e.prototype,{$title:{get:function(){return function(e,o){o?document.title=e.toUpperCase():(n[0]=e.toUpperCase(),document.title=n.join(t.separator))}}}})}),Ke=function(e){var t={comment:F,option:J,post:V,term:Z,token:Q,user:K};Object.defineProperties(e,{services:{get:function(){return t}}}),Object.defineProperties(e.prototype,{$services:{get:function(){return t}}})},et=function(e){Ve.beforeEach(function(e,t,n){T.start(),n()}),Ve.afterEach(function(e){T.done()}),N.interceptors.request.use(function(e){return T.start(),e}),N.interceptors.response.use(function(e){return T.done(),e},function(e){return T.done(),Promise.reject(e)}),Object.defineProperties(e.prototype,{$nprogress:{get:function(){return T}}})},tt=function(e){Ve.beforeHooks.unshift(function(e,t,n){if(!e.meta.requiresAuth)return n();Xe.dispatch("checkToken").then(function(t){if(t)return n();console.log("Unauthorized"),n({name:"login",query:{redirect:e.fullPath}})})})},nt={install:function(e){Ze(e),Qe(e,{property:"title",separator:" « "}),Ke(e),et(e),tt(e)}};n("HSE0"),n("H/op");i["default"].use(s.a),i["default"].use(nt),i["default"].config.debug=Object({NODE_ENV:"production",BASE_URL:"/"}).DEBUG_MODE,i["default"].config.silent=!Object({NODE_ENV:"production",BASE_URL:"/"}).DEBUG_MODE,i["default"].config.devtools=!0,i["default"].config.productionTip=!1;var ot=new i["default"]({name:"root",i18n:v,store:Xe,router:Ve,render:function(e){return e(E)}});ot.$mount("#app")},UVIz:function(e,t){},fB3c:function(e,t){e.exports={message:{hello:"こんにちは、世界",hello2:"こんにちは、{name}"}}},iD8h:function(e,t){e.exports={message:{hello:"Hello world",hello2:"Hello {name}"}}}},[0]);
//# sourceMappingURL=app.a7ed2494.js.map