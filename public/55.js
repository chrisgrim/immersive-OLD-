(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/messages/message-index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/messages/message-index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['loaduser'],
  components: {},
  computed: {
    lastItem: function lastItem() {}
  },
  data: function data() {
    return {
      user: this.loaduser ? this.loaduser : '',
      conversations: '',
      anon: 'website-files/default-user-icon.jpg',
      avatar: this.loaduser.thumbImagePath ? "/storage/".concat(this.loaduser.thumbImagePath) : ''
    };
  },
  methods: {
    load: function load() {
      var _this = this;

      axios.get("/conversations/fetch?timestamp=".concat(new Date().getTime())).then(function (response) {
        console.log(response.data);
        _this.conversations = response.data;
      })["catch"](function (errorResponse) {
        _this.validationErrors = errorResponse.response.data.errors;
      });
    }
  },
  mounted: function mounted() {
    this.load();
  },
  created: function created() {},
  destroyed: function destroyed() {},
  validations: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/messages/message-index.vue?vue&type=template&id=11f3e8d8&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/messages/message-index.vue?vue&type=template&id=11f3e8d8& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "messages" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._l(_vm.conversations, function(conversation) {
        return _vm.conversations
          ? _c("div", [
              conversation.messages.length
                ? _c(
                    "a",
                    {
                      staticClass: "row",
                      attrs: { href: "/conversations/" + conversation.id }
                    },
                    [
                      _vm._l(conversation.users, function(user) {
                        return _vm.loaduser.id !== user.id
                          ? _c("div", { staticClass: "user" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "user-message",
                                  style: "background:" + user.hexColor
                                },
                                [
                                  user.largeImagePath
                                    ? _c(
                                        "label",
                                        { staticClass: "profile-image" },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src:
                                                "/storage/" +
                                                user.thumbImagePath,
                                              alt: user.name
                                            }
                                          })
                                        ]
                                      )
                                    : _c("div", { staticClass: "icontext" }, [
                                        _c("h2", [
                                          _vm._v(
                                            _vm._s(
                                              user ? user.name.charAt(0) : ""
                                            )
                                          )
                                        ])
                                      ])
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "name" }, [
                                _c("p", [_vm._v(_vm._s(user.name))])
                              ])
                            ])
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        _vm._l(conversation.messages, function(message, index) {
                          return _c("div", [
                            index == 0
                              ? _c("div", [_vm._v(_vm._s(message.message))])
                              : _vm._e()
                          ])
                        }),
                        0
                      )
                    ],
                    2
                  )
                : _vm._e()
            ])
          : _vm._e()
      }),
      _vm._v(" "),
      _vm._l(_vm.conversations, function(conversation) {
        return _vm.conversations
          ? _c("div", [
              conversation.modmessages.length
                ? _c(
                    "a",
                    {
                      staticClass: "row",
                      attrs: { href: "/conversations/" + conversation.id }
                    },
                    [
                      _c("div", { staticClass: "user" }, [
                        _c("div", { staticClass: "image" }, [
                          _c("img", {
                            attrs: {
                              src:
                                "/storage/" +
                                conversation.modmessages[0].event.largeImagePath
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", [
                          _vm._v(
                            "\n                    " +
                              _vm._s(conversation.modmessages[0].event.name) +
                              "\n                "
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        _vm._l(conversation.modmessages, function(
                          message,
                          index
                        ) {
                          return _c("div", [
                            index == 0
                              ? _c("div", [
                                  _vm._v("Notes: " + _vm._s(message.comments))
                                ])
                              : _vm._e()
                          ])
                        }),
                        0
                      )
                    ]
                  )
                : _vm._e()
            ])
          : _vm._e()
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [_c("h2", [_vm._v("Messages")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/messages/message-index.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/messages/message-index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_index_vue_vue_type_template_id_11f3e8d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-index.vue?vue&type=template&id=11f3e8d8& */ "./resources/js/components/messages/message-index.vue?vue&type=template&id=11f3e8d8&");
/* harmony import */ var _message_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-index.vue?vue&type=script&lang=js& */ "./resources/js/components/messages/message-index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_index_vue_vue_type_template_id_11f3e8d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_index_vue_vue_type_template_id_11f3e8d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/messages/message-index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/messages/message-index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/messages/message-index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/messages/message-index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/messages/message-index.vue?vue&type=template&id=11f3e8d8&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/messages/message-index.vue?vue&type=template&id=11f3e8d8& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_index_vue_vue_type_template_id_11f3e8d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-index.vue?vue&type=template&id=11f3e8d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/messages/message-index.vue?vue&type=template&id=11f3e8d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_index_vue_vue_type_template_id_11f3e8d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_index_vue_vue_type_template_id_11f3e8d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);