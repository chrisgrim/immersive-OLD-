(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/reset-password.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/reset-password.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
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
  props: ['token'],
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_2__["default"]],
  computed: {
    passwordIsVisible: function passwordIsVisible() {
      return this.fieldType == 'password' ? false : true;
    },
    submitObject: function submitObject() {
      return {
        email: this.user.email,
        password: this.user.password,
        password_confirmation: !this.isLogin ? this.user.passwordConfirm : '',
        token: this.token
      };
    },
    endPoint: function endPoint() {
      return '/password/reset';
    }
  },
  data: function data() {
    return {
      user: this.initializeUserObject(),
      fieldType: 'password',
      pageHeight: 0,
      active: '',
      serverErrors: [],
      alerts: [],
      disabled: false
    };
  },
  methods: {
    initializeUserObject: function initializeUserObject() {
      return {
        email: '',
        password: '',
        passwordConfirm: ''
      };
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      console.log(this.submitObject);
      axios.post(this.endPoint, this.submitObject).then(function (res) {
        _this.isLogin ? location.reload() : _this.onRegistered();
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    },
    onToggle: function onToggle(arr) {
      this.active = arr;
      arr == 'password' ? this.$v.user.password.$touch : '';
      this.serverErrors = [];
    },
    hideAlerts: function hideAlerts() {
      this.disabled = false;
      this.alerts = [];
    },
    handleResize: function handleResize() {
      this.pageHeight = "height:".concat(window.innerHeight, "px");
    },
    togglePasswordVisible: function togglePasswordVisible() {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
    },
    hasServerError: function hasServerError(field) {
      return field && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(this, 'serverErrors.' + field) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(this.serverErrors[field]);
    }
  },
  created: function created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  validations: {
    user: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        serverFailed: function serverFailed() {
          return !this.hasServerError('email');
        }
      },
      password: {
        serverFailed: function serverFailed() {
          return !this.hasServerError('password');
        },
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      passwordConfirm: {
        sameAsPassword: function sameAsPassword() {
          return !this.isLogin ? this.user.password == this.user.passwordConfirm ? true : false : true;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/reset-password.vue?vue&type=template&id=0d338ac8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/reset-password.vue?vue&type=template&id=0d338ac8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "login-index grid", style: _vm.pageHeight },
    [
      _c("div", { staticClass: "login-information" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.email,
                expression: "user.email"
              }
            ],
            class: {
              active: _vm.active == "email",
              error: _vm.$v.user.email.$error
            },
            attrs: {
              id: "email",
              type: "email",
              required: "",
              placeholder: "Email",
              autofocus: ""
            },
            domProps: { value: _vm.user.email },
            on: {
              click: function($event) {
                return _vm.onToggle("email")
              },
              blur: function($event) {
                _vm.active = null
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "email", $event.target.value)
                },
                _vm.$v.user.email.$touch
              ],
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onSubmit($event)
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.user.email.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.user.email.required
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("The email is required")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.user.email.serverFailed
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v(_vm._s(_vm.serverErrors.email[0]))
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.password,
                expression: "user.password"
              }
            ],
            staticClass: "pass",
            class: {
              active: _vm.active == "password",
              error: _vm.$v.user.password.$error
            },
            attrs: {
              id: "password",
              type: "password",
              required: "",
              placeholder: "Password"
            },
            domProps: { value: _vm.user.password },
            on: {
              click: function($event) {
                return _vm.onToggle("password")
              },
              blur: function($event) {
                _vm.active = null
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "password", $event.target.value)
                },
                function($event) {
                  return _vm.onToggle("password")
                }
              ],
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onSubmit($event)
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.user.password.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.user.password.serverFailed
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("Must be at least 8 characters")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.user.password.required
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("The password is required")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.user.passwordConfirm,
                expression: "user.passwordConfirm"
              }
            ],
            staticClass: "pass",
            class: {
              active: _vm.active == "passwordConfirm",
              error: _vm.$v.user.passwordConfirm.$error
            },
            attrs: {
              id: "password",
              type: "password",
              required: "",
              placeholder: "Confirm Password"
            },
            domProps: { value: _vm.user.passwordConfirm },
            on: {
              click: function($event) {
                _vm.active = "passwordConfirm"
              },
              blur: function($event) {
                _vm.active = null
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.user, "passwordConfirm", $event.target.value)
                },
                function($event) {
                  _vm.active = "passwordConfirm"
                }
              ],
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.onSubmit($event)
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.user.passwordConfirm.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.user.passwordConfirm.sameAsPassword
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("Passwords must be the same")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.user.passwordConfirm.isRequiredRegister
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("The passwordConfirm is required")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c(
            "button",
            {
              staticClass: "login-button",
              attrs: { type: "submit", disabled: _vm.disabled },
              on: { click: _vm.onSubmit }
            },
            [_vm._v(" Reset ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "login-image" }, [
        _c("picture", [
          _c("img", {
            style: _vm.pageHeight,
            attrs: { src: "/storage/website-files/login-image.jpg" }
          })
        ])
      ]),
      _vm._v(" "),
      _vm.alerts.message
        ? _c("PasswordForget", {
            attrs: { message: _vm.alerts.message },
            on: { close: _vm.hideAlerts }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-information__title" }, [
      _c("h3", [_vm._v("Reset Password")])
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

/***/ "./resources/js/mixins/form-validation-mixin.js":
/*!******************************************************!*\
  !*** ./resources/js/mixins/form-validation-mixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    checkVuelidate: function checkVuelidate() {
      this.$v.$touch();
      !this.$v.$invalid ? this.disabled = true : false;
      return this.$v.$invalid;
    },
    onErrors: function onErrors(err) {
      err ? this.serverErrors = err.response.data.errors : '';
      this.disabled = false;
    },
    onBackInitial: function onBackInitial() {
      return window.location.href = "/create-event/edit/";
    },
    onBack: function onBack(value) {
      return window.location.href = "/create-event/".concat(this.event.slug, "/").concat(value);
    },
    onFetch: function onFetch(value) {
      return "/create-event/".concat(this.event.slug, "/").concat(value, "/fetch?timestamp=").concat(new Date().getTime());
    },
    onForward: function onForward(value) {
      return window.location.href = "/create-event/".concat(this.event.slug, "/").concat(value);
    },
    onRegistered: function onRegistered() {
      return window.location.href = '/email/verify';
    },
    onFinishOrganizer: function onFinishOrganizer(value) {
      return window.location.href = value;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/layouts/reset-password.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/layouts/reset-password.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reset_password_vue_vue_type_template_id_0d338ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.vue?vue&type=template&id=0d338ac8& */ "./resources/js/pages/layouts/reset-password.vue?vue&type=template&id=0d338ac8&");
/* harmony import */ var _reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/reset-password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reset_password_vue_vue_type_template_id_0d338ac8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reset_password_vue_vue_type_template_id_0d338ac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/reset-password.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/reset-password.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/layouts/reset-password.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reset-password.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/reset-password.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/reset-password.vue?vue&type=template&id=0d338ac8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/layouts/reset-password.vue?vue&type=template&id=0d338ac8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_template_id_0d338ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./reset-password.vue?vue&type=template&id=0d338ac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/reset-password.vue?vue&type=template&id=0d338ac8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_template_id_0d338ac8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reset_password_vue_vue_type_template_id_0d338ac8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);