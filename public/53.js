(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"KHd+":function(t,e,n){"use strict";function s(t,e,n,s,a,i,r,o){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),s&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),r?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):a&&(c=o?function(){a.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:a),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return s}))},WDxY:function(t,e,n){"use strict";n.r(e);var s={props:["user","organizer"],computed:{backUrl:function(){return this.user.hasCreatedOrganizers?"/create-event/edit":"/"}},data:function(){return{pageHeight:""}},methods:{}},a=n("KHd+"),i=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"create",style:this.pageHeight},[e("div",{staticClass:"grid create-nav-header"},[e("div",{staticClass:"create-nav-header__home"},[e("div",{staticClass:"nav-create-logo"},[e("a",{attrs:{href:this.backUrl}},[e("h3",[this._v("EI")])])])]),this._v(" "),this._m(0)]),this._v(" "),this._m(1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-back"},[e("button",{staticClass:"nav-back-button"},[this._v(" Save and Exit ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"create-nav-guide"},[e("h3",[this._v("Submit your Organization")])])}],!1,null,null,null);e.default=i.exports}}]);