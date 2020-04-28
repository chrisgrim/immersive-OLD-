(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/nav.vue?vue&type=script&lang=js& ***!
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
  props: {
    user: {
      type: Object
    },
    onclass: {
      type: String
    }
  },
  computed: {
    fullmap: function fullmap() {
      return this.$store.state.map ? true : false;
    },
    onClassType: function onClassType() {
      return this.onclass == 'show' || this.onclass == 'message' || this.onclass == 'entry' ? false : true;
    }
  },
  data: function data() {
    return {
      bar: true,
      lastScrollPosition: 0,
      mobileDevice: false,
      url: ''
    };
  },
  methods: {
    breadcrumbs: function breadcrumbs() {
      if (new URL(window.location.href).searchParams.get("name")) {
        this.url = "/index/search?name=".concat(new URL(window.location.href).searchParams.get("name"), "&lat=").concat(new URL(window.location.href).searchParams.get("lat"), "&lng=").concat(new URL(window.location.href).searchParams.get("lng"));
      }
    },
    handleScroll: function handleScroll(event) {
      var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 100) {
        return this.bar = true;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }

      this.bar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    handleResize: function handleResize() {
      window.innerWidth < 768 ? this.mobileDevice = true : false;
      window.innerWidth > 768 ? this.mobileDevice = false : true;
    }
  },
  mounted: function mounted() {
    this.$store.commit('adduser', this.user);
    this.breadcrumbs();
  },
  created: function created() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav.vue?vue&type=template&id=f0d89dbc&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/nav.vue?vue&type=template&id=f0d89dbc& ***!
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
  return _c("div", [
    !_vm.mobileDevice
      ? _c("nav", { staticClass: "nav", class: _vm.onclass }, [
          _c("div", { class: { fullmap: _vm.fullmap } }, [
            _c("div", { staticClass: "nav-logo", class: { active: _vm.bar } }, [
              _vm._m(0)
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "nav-search", class: { fullmap: _vm.fullmap } },
              [_c("nav-search")],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "nav-menu", class: { active: _vm.bar } }, [
              _vm.user
                ? _c(
                    "div",
                    { staticClass: "nav-menu-item" },
                    [
                      _c("profile-button", {
                        attrs: { screenwidth: _vm.mobileDevice, user: _vm.user }
                      })
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.user && !_vm.user.hasCreatedOrganizers
                ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(1)])
                : _vm._e(),
              _vm._v(" "),
              _vm.user && _vm.user.hasCreatedOrganizers
                ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(2)])
                : _vm._e(),
              _vm._v(" "),
              _vm.user && _vm.user.hasMessages
                ? _c("div", { staticClass: "nav-menu-item" }, [
                    _c(
                      "a",
                      {
                        staticClass: "menu-link",
                        attrs: { href: "/messages" }
                      },
                      [
                        _vm.user.unread
                          ? _c("div", { staticClass: "active-dot" }, [_c("p")])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", [_vm._v("Inbox")])
                      ]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.user
                ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(3)])
                : _vm._e(),
              _vm._v(" "),
              !_vm.user
                ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(4)])
                : _vm._e(),
              _vm._v(" "),
              !_vm.user
                ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(5)])
                : _vm._e()
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.mobileDevice && _vm.onclass != "show"
      ? _c(
          "nav",
          {
            staticClass: "nav mobile",
            class: {
              fullmap: _vm.fullmap,
              entry: _vm.onclass == "entry",
              show: _vm.onclass == "show"
            }
          },
          [
            _vm.onClassType
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "nav-search mobile" },
                    [
                      _vm.onclass
                        ? _c("div", { staticClass: "nav-backarrow" }, [
                            _vm.url && _vm.onclass == "show"
                              ? _c("a", { attrs: { href: _vm.url } }, [
                                  _c(
                                    "svg",
                                    {
                                      staticStyle: {
                                        display: "block",
                                        fill: "none",
                                        height: "16px",
                                        width: "16px",
                                        stroke: "currentcolor",
                                        "stroke-width": "4",
                                        overflow: "visible"
                                      },
                                      attrs: {
                                        "aria-label": "Back",
                                        role: "img",
                                        viewBox: "0 0 32 32",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }
                                    },
                                    [
                                      _c("g", { attrs: { fill: "none" } }, [
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                ])
                              : _c("a", { attrs: { href: "/" } }, [
                                  _c(
                                    "svg",
                                    {
                                      staticStyle: {
                                        display: "block",
                                        fill: "none",
                                        height: "16px",
                                        width: "16px",
                                        stroke: "currentcolor",
                                        "stroke-width": "4",
                                        overflow: "visible"
                                      },
                                      attrs: {
                                        "aria-label": "Back",
                                        role: "img",
                                        viewBox: "0 0 32 32",
                                        xmlns: "http://www.w3.org/2000/svg"
                                      }
                                    },
                                    [
                                      _c("g", { attrs: { fill: "none" } }, [
                                        _c("path", {
                                          attrs: {
                                            d:
                                              "m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("nav-search")
                    ],
                    1
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.onclass != "show"
              ? _c(
                  "div",
                  {
                    staticClass: "nav-menu mobile",
                    class: { fullmap: _vm.fullmap, active: _vm.bar }
                  },
                  [
                    !_vm.user ? _c("div") : _vm._e(),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _vm.user && _vm.user.hasCreatedOrganizers
                      ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                          _vm._m(8)
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user && !_vm.user.hasCreatedOrganizers
                      ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                          _vm._m(9)
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.user
                      ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                          _vm._m(10)
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user
                      ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                          _c(
                            "a",
                            {
                              staticClass: "menu-link",
                              attrs: { href: "/messages" }
                            },
                            [
                              _vm.user.unread
                                ? _c("div", { staticClass: "active-dot" }, [
                                    _c("p")
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("div", [_vm._v("Inbox")])
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.user
                      ? _c(
                          "div",
                          { staticClass: "nav-menu-item mobile" },
                          [
                            _c("profile-button", {
                              attrs: {
                                screenwidth: _vm.mobileDevice,
                                user: _vm.user
                              }
                            })
                          ],
                          1
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e()
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [_c("h3", [_vm._v("EI")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link", attrs: { href: "/events/create" } },
      [_c("div", [_vm._v("Create Event")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link", attrs: { href: "/create-event/edit" } },
      [_c("div", [_vm._v("Your Events")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/login" } }, [
      _c("div", [_vm._v("Login")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/register" } }, [
      _c("div", [_vm._v("Register")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/register" } }, [
      _c("div", [_vm._v("Host an Experience")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nav-logo" }, [
      _c("a", { attrs: { href: "/" } }, [_c("h3", [_vm._v("EI")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nav-menu-item mobile" }, [
      _c("a", { staticClass: "menu-link", attrs: { href: "/" } }, [
        _c("div", [_vm._v("Liked")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link", attrs: { href: "/create-event/edit" } },
      [_c("div", [_vm._v("Events")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link", attrs: { href: "/events/create" } },
      [_c("div", [_vm._v("Events")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/login" } }, [
      _c("div", [_vm._v("Login")])
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

/***/ "./resources/js/components/layouts/nav.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/layouts/nav.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_vue_vue_type_template_id_f0d89dbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.vue?vue&type=template&id=f0d89dbc& */ "./resources/js/components/layouts/nav.vue?vue&type=template&id=f0d89dbc&");
/* harmony import */ var _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_vue_vue_type_template_id_f0d89dbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_vue_vue_type_template_id_f0d89dbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/nav.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/layouts/nav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/nav.vue?vue&type=template&id=f0d89dbc&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/layouts/nav.vue?vue&type=template&id=f0d89dbc& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_f0d89dbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=template&id=f0d89dbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav.vue?vue&type=template&id=f0d89dbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_f0d89dbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_f0d89dbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);