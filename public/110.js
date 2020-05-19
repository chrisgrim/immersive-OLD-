(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[110],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/favorite.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/favorite.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['event', 'inputclass'],
  data: function data() {
    return {
      isFavorited: this.event.isFavorited,
      isModalVisible: false,
      login: false,
      modalwidth: 'newsletter',
      newsletter: true
    };
  },
  computed: {
    classes: function classes() {
      return ['fa', this.isFavorited ? 'hearted' : 'unhearted'];
    },
    endpoint: function endpoint() {
      return '/favorite/' + this.event.slug + '/favorites';
    },
    isApproved: function isApproved() {
      return this.event.status !== 'p' ? 'dis' : '';
    },
    user: function user() {
      return this.$store.state.user ? this.$store.state.user : '';
    },
    cookies: function cookies() {
      return this.$cookies.isKey('news');
    }
  },
  methods: {
    toggle: function toggle() {
      return this.isFavorited ? this.destroy() : this.create();
    },
    updateNewsletter: function updateNewsletter() {
      var _this = this;

      this.$cookies.set("news", true, "Infinity");
      var data = {
        newsletter: this.newsletter
      };
      axios.patch("/users/".concat(this.user.id), data).then(function (response) {
        console.log(response.data);
        _this.isFavorited ? _this.destroy() : _this.create();
      })["catch"](function (error) {
        console.log(error.response.data);
      }).then(function (response) {
        location.reload();
      });
    },
    toggleBodyClass: function toggleBodyClass(addRemoveClass, className) {
      var el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    create: function create() {
      axios.post(this.endpoint);
      this.isFavorited = true;
    },
    destroy: function destroy() {
      axios["delete"](this.endpoint);
      this.isFavorited = false;
    }
  },
  watch: {
    isModalVisible: function isModalVisible() {
      return this.isModalVisible ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
    },
    login: function login() {
      return this.login ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/favorite.vue?vue&type=template&id=28fedecb&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/favorite.vue?vue&type=template&id=28fedecb& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "fav" },
    [
      (_vm.user && this.$cookies.isKey("news")
      ? true
      : false)
        ? _c("div", { class: _vm.inputclass }, [
            _c("div", { class: _vm.isApproved }, [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.toggle()
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    { class: _vm.classes, attrs: { viewBox: "0 0 38 38" } },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ])
        : (_vm.user
          ? true
          : false)
        ? _c("div", { class: _vm.inputclass }, [
            _c("div", { class: _vm.isApproved }, [
              _c(
                "a",
                {
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.isModalVisible = true
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    { class: _vm.classes, attrs: { viewBox: "0 0 38 38" } },
                    [
                      _c("path", {
                        attrs: {
                          d:
                            "m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ])
        : _c("div", { class: _vm.inputclass }, [
            _c(
              "a",
              {
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.login = true
                  }
                }
              },
              [
                _c(
                  "svg",
                  { class: _vm.classes, attrs: { viewBox: "0 0 38 38" } },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "m23.99 2.75c-.3 0-.6.02-.9.05-1.14.13-2.29.51-3.41 1.14-1.23.68-2.41 1.62-3.69 2.94-1.28-1.32-2.46-2.25-3.69-2.94-1.12-.62-2.27-1-3.41-1.14a7.96 7.96 0 0 0 -.9-.05c-1.88 0-7.26 1.54-7.26 8.38 0 7.86 12.24 16.33 14.69 17.95a1 1 0 0 0 1.11 0c2.45-1.62 14.69-10.09 14.69-17.95 0-6.84-5.37-8.38-7.26-8.38"
                      }
                    })
                  ]
                )
              ]
            )
          ]),
      _vm._v(" "),
      _vm.login
        ? _c("login-pop", {
            attrs: { visible: _vm.login },
            on: {
              close: function($event) {
                _vm.login = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.isModalVisible
        ? _c(
            "modal",
            {
              attrs: { modalclass: _vm.modalwidth },
              on: {
                close: function($event) {
                  _vm.isModalVisible = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "header" }, slot: "header" }),
              _vm._v(" "),
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c("h3", [_vm._v("Get Notified?")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Would you like to recieve an email whenever the organizers of your favorited events have updates or releases new events? (This can be edited in your profile at any time)"
                  )
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _c("div", { attrs: { id: "cover" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newsletter,
                          expression: "newsletter"
                        }
                      ],
                      attrs: { type: "checkbox", id: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.newsletter)
                          ? _vm._i(_vm.newsletter, null) > -1
                          : _vm.newsletter
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.newsletter,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 && (_vm.newsletter = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.newsletter = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.newsletter = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "bar" } }),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "knob" } }, [
                      _vm.newsletter
                        ? _c("p", [_vm._v("Yes")])
                        : _c("p", [_vm._v("No")])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn sub",
                    on: { click: _vm.updateNewsletter }
                  },
                  [_vm._v("Done")]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/pages/layouts/favorite.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/layouts/favorite.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorite_vue_vue_type_template_id_28fedecb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite.vue?vue&type=template&id=28fedecb& */ "./resources/js/pages/layouts/favorite.vue?vue&type=template&id=28fedecb&");
/* harmony import */ var _favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/favorite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _favorite_vue_vue_type_template_id_28fedecb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _favorite_vue_vue_type_template_id_28fedecb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/favorite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/favorite.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/layouts/favorite.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./favorite.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/favorite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/favorite.vue?vue&type=template&id=28fedecb&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/layouts/favorite.vue?vue&type=template&id=28fedecb& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_template_id_28fedecb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./favorite.vue?vue&type=template&id=28fedecb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/favorite.vue?vue&type=template&id=28fedecb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_template_id_28fedecb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_favorite_vue_vue_type_template_id_28fedecb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);