(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"8Ciq":function(e,t,n){"use strict";n.r(t);var i={props:{message:{type:String}},computed:{},data:function(){return{body:"",visible:!0}},methods:{resend:function(){var e=this;axios.post("/email/resend").then((function(t){e.visible=!1,console.log(t.data)})).catch((function(e){console.log(e.data)}))},onClickOutside:function(e){var t=this.$refs.panel;if(!t||t.contains(e.target))return console.log("one");this.visible=!1,this.$emit("close")},hide:function(){this.visible=!1,this.$emit("close")}},mounted:function(){var e=this;setTimeout((function(){return e.hide()}),2e4),setTimeout((function(){return document.addEventListener("click",e.onClickOutside)}),200)},beforeDestroy:function(){document.removeEventListener("click",this.onClickOutside)}},s=n("KHd+"),o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visible?n("div",[n("div",{staticClass:"verify_bar"},[n("div",{ref:"panel",staticClass:"panel"},[n("div",{staticClass:"text"},[n("div",{staticClass:"close",on:{click:function(t){e.visible=!1}}},[e._v("\n                    X\n                ")]),e._v(" "),n("img",{staticStyle:{width:"10rem"},attrs:{src:"/storage/website-files/email-logo.png",alt:""}}),e._v(" "),n("h3",[e._v("Please verify your email")]),e._v(" "),n("p",[e._v("Check your email and spam for our email.")])]),e._v(" "),n("div",{staticClass:"submit"},[n("hr"),e._v(" "),n("p",[e._v("Recieved nothing?"),n("span",{staticClass:"another",on:{click:e.resend}},[e._v(" Click here to request another.")])])])])])]):e._e()}),[],!1,null,null,null);t.default=o.exports},"KHd+":function(e,t,n){"use strict";function i(e,t,n,i,s,o,r,a){var c,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=c):s&&(c=a?function(){s.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:s),c)if(l.functional){l._injectStyles=c;var u=l.render;l.render=function(e,t){return c.call(t),u(e,t)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,c):[c]}return{exports:e,options:l}}n.d(t,"a",(function(){return i}))}}]);