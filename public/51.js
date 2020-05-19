(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/notifications.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/notifications.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  props: ['user'],
  components: {},
  computed: {},
  data: function data() {
    return {
      monthly: true,
      updates: true,
      messages: true
    };
  },
  methods: {
    submit: function submit() {
      var data = {
        monthly: this.monthly ? this.monthly : '',
        updates: this.updates ? this.updates : '',
        messages: this.messages ? this.messages : ''
      };
      axios.patch("/users/".concat(this.user.id), data).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error.response.data);
      });
    },
    updateNews: function updateNews() {
      if (this.user.newsletter_type == 'n') {
        this.monthly = false;
        this.updates = false;
      }

      ;

      if (this.user.newsletter_type == 'a') {
        this.monthly = true;
        this.updates = true;
      }

      if (this.user.newsletter_type == 'm') {
        this.monthly = true;
        this.updates = false;
      }

      if (this.user.newsletter_type == 'u') {
        this.monthly = false;
        this.updates = true;
      }

      if (this.user.silence == 'y') {
        this.messages = false;
      }
    }
  },
  watch: {
    monthly: function monthly() {
      this.submit();
    },
    updates: function updates() {
      this.submit();
    },
    messages: function messages() {
      this.submit();
    }
  },
  mounted: function mounted() {
    this.updateNews();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/notifications.vue?vue&type=template&id=233e6069&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/notifications.vue?vue&type=template&id=233e6069& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "account-notifications" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("section", { staticClass: "notifications grid" }, [
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "item" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { attrs: { id: "cover" } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.monthly,
                  expression: "monthly"
                }
              ],
              attrs: { type: "checkbox", id: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.monthly)
                  ? _vm._i(_vm.monthly, null) > -1
                  : _vm.monthly
              },
              on: {
                change: function($event) {
                  var $$a = _vm.monthly,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.monthly = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.monthly = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.monthly = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("div", { attrs: { id: "bar" } }),
            _vm._v(" "),
            _c("div", { attrs: { id: "knob" } }, [
              _vm.monthly ? _c("p", [_vm._v("Yes")]) : _c("p", [_vm._v("No")])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "notifications grid" }, [
      _vm._m(2),
      _vm._v(" "),
      _c("div", { staticClass: "item" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { attrs: { id: "cover" } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.updates,
                  expression: "updates"
                }
              ],
              attrs: { type: "checkbox", id: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.updates)
                  ? _vm._i(_vm.updates, null) > -1
                  : _vm.updates
              },
              on: {
                change: function($event) {
                  var $$a = _vm.updates,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.updates = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.updates = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.updates = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("div", { attrs: { id: "bar" } }),
            _vm._v(" "),
            _c("div", { attrs: { id: "knob" } }, [
              _vm.updates ? _c("p", [_vm._v("Yes")]) : _c("p", [_vm._v("No")])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "notifications grid" }, [
      _vm._m(3),
      _vm._v(" "),
      _c("div", { staticClass: "item" }, [
        _c("div", { staticClass: "field" }, [
          _c("div", { attrs: { id: "cover" } }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.messages,
                  expression: "messages"
                }
              ],
              attrs: { type: "checkbox", id: "checkbox" },
              domProps: {
                checked: Array.isArray(_vm.messages)
                  ? _vm._i(_vm.messages, null) > -1
                  : _vm.messages
              },
              on: {
                change: function($event) {
                  var $$a = _vm.messages,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = null,
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.messages = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.messages = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.messages = $$c
                  }
                }
              }
            }),
            _vm._v(" "),
            _c("div", { attrs: { id: "bar" } }),
            _vm._v(" "),
            _c("div", { attrs: { id: "knob" } }, [
              _vm.messages ? _c("p", [_vm._v("Yes")]) : _c("p", [_vm._v("No")])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "account-notifications_header" }, [
      _c("div", { staticClass: "account-notifications_breadcrumbs" }, [
        _c("a", { attrs: { href: "/account-settings" } }, [_vm._v("Account")]),
        _vm._v(" > Notifications")
      ]),
      _vm._v(" "),
      _c("h2", [_vm._v("Notifications")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notifications_element" }, [
      _c("h4", [_vm._v("Subscribe to monthly newsletter")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Get our monthly newsletters about the latest and greatest immersive events."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notifications_element" }, [
      _c("h4", [_vm._v("Subscribe to event update newsletters")]),
      _vm._v(" "),
      _c("p", [
        _vm._v(
          "Get the latest updates about the organizations and events you have liked on EI."
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "notifications_element" }, [
      _c("h4", [_vm._v("Messages")]),
      _vm._v(" "),
      _c("p", [
        _vm._v("Get an email whenever a user or admin sends you a message")
      ])
    ])
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

/***/ "./resources/js/pages/profile/notifications.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/profile/notifications.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notifications_vue_vue_type_template_id_233e6069___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.vue?vue&type=template&id=233e6069& */ "./resources/js/pages/profile/notifications.vue?vue&type=template&id=233e6069&");
/* harmony import */ var _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _notifications_vue_vue_type_template_id_233e6069___WEBPACK_IMPORTED_MODULE_0__["render"],
  _notifications_vue_vue_type_template_id_233e6069___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/profile/notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/notifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/notifications.vue?vue&type=template&id=233e6069&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/profile/notifications.vue?vue&type=template&id=233e6069& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_template_id_233e6069___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./notifications.vue?vue&type=template&id=233e6069& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/notifications.vue?vue&type=template&id=233e6069&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_template_id_233e6069___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_notifications_vue_vue_type_template_id_233e6069___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);