webpackJsonp([1,0],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n(69);var i=n(17),s=a(i),l=n(97),r=a(l),o=n(70),d=a(o),u=n(72),c=a(u),f=n(73),m=a(f),p=n(71),_=a(p),v=n(74),b=a(v),h=n(20),y=a(h),g=n(19),C=a(g);s.default.use(r.default),s.default.use(C.default);var w=new r.default({routes:[{path:"/",component:c.default},{path:"/register",component:m.default},{path:"/about",component:_.default},{path:"/table",component:b.default}]});w.afterEach(function(e,t){setTimeout(function(){window.componentHandler.upgradeDom()},600)}),new s.default({el:"#app",template:"<App/>",components:{App:d.default},store:y.default,router:w})},,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={mounted:function(){window.componentHandler.upgradeElement(this.$el)}}},,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{label:"Register",link:"register"},{label:"About",link:"about"},{label:"Table",link:"table"}]},,,,,,,function(e,t,n){var a,i;a=n(32);var s=n(92);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),window.addEventListener("load",function(){window.MaterialSnackbar.prototype.setMessage=function(e){this.textElement_.textContent=e}}),t.default={show:function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",arguments.length>2&&void 0!==arguments[2]?arguments[2]:2e3);e=e.replace(/(<([^>]+)>)/gi,"");var n=document.querySelector("#snackbar-message");n.className.indexOf("mdl-snackbar--active")===-1?n.MaterialSnackbar.showSnackbar({message:e,timeout:t}):n.MaterialSnackbar.setMessage(e)}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(16),s=a(i),l={install:function(e,t){e.component("ui-title",{template:'<h1 :class="cssClasses"><ui-icon v-if="icon" rounded size="48" :name="icon" /> <slot></slot></h1>',components:{UiIcon:s.default},computed:{cssClasses:function(){return{"title-with-icon":this.icon}}},props:{icon:String}})}};t.default=l},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(17),s=a(i),l=n(2),r=a(l),o=n(22),d=a(o);s.default.use(r.default),t.default=new r.default.Store({modules:[d.default]})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SEND_NEWSLETTER="vuelab/SEND_NEWSLETTER"},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(39),l=i(s),r=n(21),o=a(r),d={newsletter:{name:null,email:null}},u={getNewsletter:function(e){return{name:e.newsletter.name,email:e.newsletter.email}}},c={sendNewsletter:function(e,t){var n=e.commit,a=t.name,i=t.email;n(o.SEND_NEWSLETTER,{name:a,email:i})}},f=(0,l.default)({},o.SEND_NEWSLETTER,function(e,t){var n=t.name,a=t.email;e.newsletter.name=n,e.newsletter.email=a});t.default={state:d,getters:u,actions:c,mutations:f}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=a(i),l=n(2),r=n(80),o=a(r),d=n(78),u=a(d),c=n(81),f=a(c),m=n(76),p=a(m);t.default={name:"app",components:{UiLayout:o.default,UiHeader:u.default,UiNav:f.default,UiContent:p.default},computed:(0,s.default)({},(0,l.mapGetters)({newsletter:"getNewsletter"}))}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"about"}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"home"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=a(i),l=n(2),r=n(18),o=a(r),d=n(75),u=a(d),c=n(82),f=a(c),m=n(79),p=a(m),_=n(77),v=a(_),b=n(16),h=a(b);t.default={name:"register",components:{UiButton:u.default,UiText:f.default,UiLabel:p.default,UiFieldGroup:v.default,UiIcon:h.default},computed:(0,s.default)({},(0,l.mapGetters)({newsletter:"getNewsletter"})),methods:{sendForm:function(e){var t=this;if(this.name){var n=["Obrigado! <strong>"+this.name+"</strong>","Você é demais <strong>"+this.name+"</strong>!","<strong>"+this.name+"</strong>, agrademos muito","<strong>"+this.name+"</strong> até breve!"],a=Math.floor(Math.random()*n.length);o.default.show(n[a],"success"),this.name_error=!1,this.disabled=!0,this.sendNewsletter(this.name,this.email),setTimeout(function(){t.disabled=!1},2e3)}else o.default.show("Por favor, digite os dados completos","error"),this.name_error=!0},notificate:function(e){o.default.show("Hello world!")},sendNewsletter:function(e,t){this.$store.dispatch("sendNewsletter",{name:e,email:t})}},data:function(){return{name:null,email:null,name_error:!1,email_error:!1,disabled:!1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"table"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=a(i);t.default={name:"ui-button",mixins:[s.default],computed:{cssClasses:function(){return{"mdl-button--icon":this.icon&&!this.bigIcon,"mdl-button--accent":this.accent,"mdl-button--primary":this.primary,"mdl-button--mini-fab":this.miniFab,"mdl-button--fab":this.fab||this.miniFab,"mdl-button--raised":this.raised,"mdl-button--colored":this.colored,"mdl-js-button":this.js,"mdl-js-ripple-effect":this.ripple}},isIconSpecified:function(){return this.icon&&"string"==typeof this.icon},isWithIconSpecified:function(){return this.withIcon}},props:{type:{type:String,default:"submit"},disabled:Boolean,icon:[String,Boolean],bigIcon:Boolean,withIcon:String,accent:Boolean,primary:Boolean,miniFab:Boolean,fab:Boolean,raised:Boolean,colored:Boolean,js:{type:Boolean,default:!0},ripple:{type:Boolean,default:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"main-content"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=a(i);t.default={name:"ui-field-group",mixins:[s.default],computed:{cssClasses:function(){return{"mdl-textfield":this.simple,"mdl-js-textfield":this.js,"mdl-textfield--floating-label":this.floating,"mdl-textfield-full":this.full,"is-invalid":this.invalid,"is-dirty":!this.invalid&&null!==this.value}}},props:{simple:{type:Boolean,default:!0},js:{type:Boolean,default:!0},floating:{type:Boolean,default:!0},full:{type:Boolean,default:!0},invalid:Boolean,value:String}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(4),s=a(i),l=n(2),r=n(9),o=a(r);t.default={name:"main-header",data:function(){return{nav:o.default}},computed:(0,s.default)({},(0,l.mapGetters)({newsletter:"getNewsletter"}))}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ui-icon",computed:{cssClasses:function(){var e={"material-icons":!0,"rounded-icon":this.rounded};return this.size&&(e["icon-"+this.size]=!0),e}},props:{rounded:Boolean,size:String,name:{type:String,required:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ui-label",computed:{cssClasses:function(){return{"mdl-textfield__label":this.simple}}},props:{id:String,name:String,value:String,simple:{type:Boolean,default:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"main-layout"}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),s=a(i);t.default={name:"main-nav",data:function(){return{nav:s.default}},methods:{hideNav:function(e){var t=new window.Event("click");document.querySelector(".mdl-layout__drawer-button").dispatchEvent(t)}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(3),s=a(i);t.default={name:"ui-text",mixins:[s.default],computed:{cssClasses:function(){return{"mdl-textfield__input":this.simple}}},props:{id:String,name:String,value:String,simple:{type:Boolean,default:!0}},created:function(){this.updateValue(this.value)},methods:{updateValue:function(e){this.$emit("input",e)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},,function(e,t,n){var a,i;n(67),a=n(23);var s=n(88);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(24);var s=n(91);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(25);var s=n(90);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;n(68),a=n(26);var s=n(89);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,i._scopeId="data-v-77bdbd35",e.exports=a},function(e,t,n){var a,i;a=n(27);var s=n(96);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(28);var s=n(94);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(29);var s=n(86);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(30);var s=n(85);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(31);var s=n(83);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(33);var s=n(87);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(34);var s=n(95);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(35);var s=n(84);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t,n){var a,i;a=n(36);var s=n(93);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=s.render,i.staticRenderFns=s.staticRenderFns,e.exports=a},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"mdl-layout__header mdl-layout__header--transparent"},[n("div",{staticClass:"mdl-layout__header-row"},[n("span",{staticClass:"mdl-layout-title"},[n("router-link",{attrs:{to:"/"}},[e._v("Vue")])],1),e._v(" "),e.newsletter.name?n("span",{staticClass:"welcome-user"},[e._v("\n      Bem-vindo "+e._s(e.newsletter.name)+"\n    ")]):e._e(),e._v(" "),n("div",{staticClass:"mdl-layout-spacer"}),e._v(" "),n("nav",{staticClass:"mdl-navigation mdl-cell--hide-phone"},e._l(e.nav,function(t){return n("router-link",{staticClass:"mdl-navigation__link",attrs:{to:t.link}},[e._v(e._s(t.label))])}))])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdl-layout__drawer"},[n("span",{staticClass:"mdl-layout-title"},[e._v("Vue")]),e._v(" "),n("nav",{staticClass:"mdl-navigation"},e._l(e.nav,function(t){return n("router-link",{staticClass:"mdl-navigation__link",attrs:{to:t.link},nativeOn:{click:function(t){e.hideNav(t)}}},[e._v(e._s(t.label))])})),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdl-layout__drawer-button",attrs:{"aria-expanded":"false",role:"button",tabindex:"0"}},[n("i",{staticClass:"material-icons"},[e._v("more_horiz")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.cssClasses},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{staticClass:"mdl-layout__content"},[n("section",{staticClass:"mdl-layout__tab-panel is-active",attrs:{id:"scroll-tab-1"}},[n("div",{staticClass:"page-content"},[e._t("default")],2)])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{class:e.cssClasses},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("ui-layout",[n("ui-header"),e._v(" "),n("ui-nav"),e._v(" "),n("ui-content",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1),e._v(" "),n("hr"),e._v(" "),n("h3",[e._v("Store")]),e._v(" "),n("ul",{staticClass:"demo-list-icon mdl-list"},e._l(e.newsletter,function(t){return t?n("li",{staticClass:"mdl-list__item"},[n("span",{staticClass:"mdl-list__item-primary-content"},[n("i",{staticClass:"material-icons mdl-list__item-icon"},[e._v("check")]),e._v("\n            "+e._s(t)+"\n          ")])]):e._e()})),e._v(" "),n("div",{staticClass:"mdl-js-snackbar mdl-snackbar mdl-snackbar-large",attrs:{id:"snackbar-message"}},[n("div",{staticClass:"mdl-snackbar__text"}),e._v(" "),n("button",{staticClass:"mdl-snackbar__action",attrs:{type:"button"}})])],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"register"},[n("ui-title",{attrs:{icon:"assignment_ind"}},[e._v("Register")]),e._v(" "),n("form",{attrs:{action:"#"},on:{submit:function(t){t.preventDefault(),e.sendForm(t)}}},[n("ui-field-group",{attrs:{invalid:e.name_error,value:e.name}},[n("ui-text",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{name:"name",value:e.newsletter.name},domProps:{value:e.name},on:{input:function(t){e.name=t}}}),e._v(" "),n("ui-label",[e._v("Nome")])],1),e._v(" "),n("ui-field-group",{attrs:{invalid:e.email_error,value:e.email}},[n("ui-text",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"email",value:e.newsletter.email},domProps:{value:e.email},on:{input:function(t){e.email=t}}}),e._v(" "),n("ui-label",[e._v("E-mail")])],1),e._v(" "),n("div",{staticClass:"submit-box"},[n("ui-button",{attrs:{"with-icon":"send",colored:"",raised:"",disabled:e.disabled}},[e._v("Enviar")])],1)],1),e._v(" "),n("ui-button",{attrs:{icon:"add",type:"button",fab:"","big-icon":""},nativeOn:{click:function(t){t.preventDefault(),e.notificate(t)}}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ui-title",{attrs:{icon:"account_balance"}},[e._v("Home")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolores numquam, facilis temporibus natus itaque, voluptatum aspernatur aut ducimus cupiditate recusandae odio doloremque expedita vel in debitis saepe repudiandae. Enim.")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("ui-title",{attrs:{icon:"account_circle"}},[e._v("About")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis dolores numquam, facilis temporibus natus itaque, voluptatum aspernatur aut ducimus cupiditate recusandae odio doloremque expedita vel in debitis saepe repudiandae. Enim.")])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i",{class:e.cssClasses},[e._v("\n  "+e._s(e.name)+"\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("input",{class:e.cssClasses,attrs:{id:e.id,name:e.name},domProps:{value:e.value,value:e.value},on:{input:function(t){e.updateValue(t.target.value)}}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"mdl-button mdl-js-button",class:e.cssClasses,attrs:{type:e.type,disabled:e.disabled}},[e.isWithIconSpecified?n("i",{staticClass:"material-icons"},[e._v(e._s(e.withIcon))]):e._e(),e._v(" "),e._t("default",[e.isIconSpecified?n("i",{staticClass:"material-icons"},[e._v(e._s(e.icon))]):e._e()])],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-layout-transparent mdl-layout mdl-js-layout"},[e._t("default")],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table"},[n("ui-title",{attrs:{icon:"apps"}},[e._v("Table")]),e._v(" "),e._m(0),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"mdl-spinner mdl-js-spinner is-active"}),e._v(" "),n("hr"),e._v(" "),n("h2",[e._v("Lorem ipsum")]),e._v(" "),n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe deleniti, mollitia, accusantium atque suscipit officiis cupiditate doloremque vitae magni ducimus eaque maxime? Aut dicta culpa eligendi voluptatem quaerat iure nesciunt.")]),e._v(" "),e._m(1)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdl-responsive-table-box"},[n("table",{staticClass:"mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp"},[n("thead",[n("tr",[n("th",{staticClass:"mdl-data-table__cell--non-numeric"},[e._v("Material")]),e._v(" "),n("th",[e._v("Quantity")]),e._v(" "),n("th",[e._v("Unit price")])])]),e._v(" "),n("tbody",[n("tr",[n("td",{staticClass:"mdl-data-table__cell--non-numeric"},[e._v("Acrylic (Transparent)")]),e._v(" "),n("td",[e._v("25")]),e._v(" "),n("td",[e._v("$2.90")])]),e._v(" "),n("tr",[n("td",{staticClass:"mdl-data-table__cell--non-numeric"},[e._v("Plywood (Birch)")]),e._v(" "),n("td",[e._v("50")]),e._v(" "),n("td",[e._v("$1.25")])]),e._v(" "),n("tr",[n("td",{staticClass:"mdl-data-table__cell--non-numeric"},[e._v("Laminate (Gold on Blue)")]),e._v(" "),n("td",{staticClass:"hello"},[e._v("10")]),e._v(" "),n("td",[e._v("$2.35")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdl-grid mdl-grid-negative"},[n("div",{staticClass:"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-cell--order-2-phone"},[n("div",{staticClass:"demo-card-wide mdl-card mdl-shadow--2dp"},[n("div",{staticClass:"mdl-card__title"},[n("h2",{staticClass:"mdl-card__title-text"},[e._v("Welcome 1")])]),e._v(" "),n("div",{staticClass:"mdl-card__supporting-text"},[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n          Mauris sagittis pellentesque lacus eleifend lacinia...\n        ")]),e._v(" "),n("div",{staticClass:"mdl-card__actions mdl-card--border"},[n("a",{staticClass:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"},[e._v("\n            Get Started\n          ")])]),e._v(" "),n("div",{staticClass:"mdl-card__menu"},[n("button",{staticClass:"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"},[n("i",{staticClass:"material-icons"},[e._v("share")])])])])]),e._v(" "),n("div",{staticClass:"mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--4-col-phone mdl-cell--order-1-phone"},[n("div",{staticClass:"demo-card-wide mdl-card mdl-shadow--2dp"},[n("div",{staticClass:"mdl-card__title"},[n("h2",{staticClass:"mdl-card__title-text"},[e._v("Welcome 2")])]),e._v(" "),n("div",{staticClass:"mdl-card__supporting-text"},[e._v("\n          Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n          Mauris sagittis pellentesque lacus eleifend lacinia...\n        ")]),e._v(" "),n("div",{staticClass:"mdl-card__actions mdl-card--border"},[n("a",{staticClass:"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"},[e._v("\n            Get Started\n          ")])]),e._v(" "),n("div",{staticClass:"mdl-card__menu"},[n("button",{staticClass:"mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect"},[n("i",{staticClass:"material-icons"},[e._v("share")])])])])])])}]}}]);
//# sourceMappingURL=app.bc1e13cda351056db182.js.map