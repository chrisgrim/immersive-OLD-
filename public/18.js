(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/forgotPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/forgotPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    message: {
      type: String
    }
  },
  computed: {},
  data: function data() {
    return {
      body: ''
    };
  },
  methods: {
    onClickOutside: function onClickOutside(event) {
      var panel = this.$refs.panel;
      if (!panel || panel.contains(event.target)) return console.log('one');
      ;
      this.hide();
    },
    hide: function hide() {
      this.$emit('close');
    }
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      return _this.hide();
    }, 20000);
    setTimeout(function () {
      return document.addEventListener("click", _this.onClickOutside);
    }, 200);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/login-pop.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/login-pop.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _forgotPassword_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotPassword.vue */ "./resources/js/pages/layouts/forgotPassword.vue");
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_3__["default"]],
  components: {
    PasswordForget: _forgotPassword_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    passwordIsVisible: function passwordIsVisible() {
      return this.fieldType == 'password' ? false : true;
    },
    submitObject: function submitObject() {
      return {
        email: this.user.email,
        password: this.user.password,
        remember: true,
        name: this.user.name,
        password_confirmation: !this.isLogin ? this.user.passwordConfirm : ''
      };
    },
    endPoint: function endPoint() {
      return this.isLogin ? '/login' : '/register';
    }
  },
  data: function data() {
    return {
      user: this.initializeUserObject(),
      fieldType: 'password',
      active: '',
      serverErrors: [],
      alerts: [],
      disabled: false,
      isLogin: true
    };
  },
  methods: {
    initializeUserObject: function initializeUserObject() {
      return {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
        rememberMe: false
      };
    },
    onClickOutside: function onClickOutside(event) {
      var arr = this.$refs.myDiv;
      if (!arr || arr.contains(event.target)) return;
      this.$emit('close', false);
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.post(this.endPoint, this.submitObject).then(function (res) {
        _this.isLogin ? location.reload() : _this.onRegistered();
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    },
    onForget: function onForget() {
      var _this2 = this;

      if (!this.user.email) {
        return false;
      }

      ;
      this.disabled = true;
      axios.post('/password/email', {
        email: this.user.email
      }).then(function (res) {
        console.log(res.data);
        _this2.alerts = res.data;
      })["catch"](function (err) {
        _this2.onErrors(err);
      });
    },
    hideAlerts: function hideAlerts() {
      this.disabled = false;
      this.alerts = [];
    },
    onPageSwitch: function onPageSwitch() {
      this.serverErrors = [];
      this.$v.$reset();
      this.isLogin = !this.isLogin;
    },
    togglePasswordVisible: function togglePasswordVisible() {
      console.log('test');
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password';
    },
    onAlternateLogin: function onAlternateLogin(value) {
      window.location.href = "/login/".concat(value);
    },
    onToggle: function onToggle(arr) {
      this.active = arr;
      arr == 'password' ? this.$v.user.password.$touch : '';
      this.serverErrors = [];
    },
    hasServerError: function hasServerError(field) {
      return field && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(this, 'serverErrors.' + field) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(this.serverErrors[field]);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    setTimeout(function () {
      return document.addEventListener("click", _this3.onClickOutside);
    }, 200);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
  },
  validations: {
    user: {
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        serverFailed: function serverFailed() {
          return !this.hasServerError('email');
        }
      },
      name: {
        requiredIfRegister: function requiredIfRegister() {
          return !this.isLogin ? this.user.name ? true : false : true;
        },
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50)
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/forgotPassword.vue?vue&type=template&id=d41c7466&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/forgotPassword.vue?vue&type=template&id=d41c7466& ***!
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
  return _c("div", [
    _c("div", { staticClass: "verify_bar" }, [
      _c("div", { ref: "panel", staticClass: "panel" }, [
        _c("div", { staticClass: "text" }, [
          _c("div", { staticClass: "close", on: { click: _vm.hide } }, [
            _vm._v("\n                    X\n                ")
          ]),
          _vm._v(" "),
          _c("img", {
            staticStyle: { width: "10rem" },
            attrs: { src: "/storage/website-files/email-logo.png", alt: "" }
          }),
          _vm._v(" "),
          _c("h3", [_vm._v("We have emailed you a reset password link.")]),
          _vm._v(" "),
          _c("p", [_vm._v("Please check your email.")])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "submit" }, [_c("hr")])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/login-pop.vue?vue&type=template&id=1da7b04e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/login-pop.vue?vue&type=template&id=1da7b04e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "login-popup" },
    [
      _c("div", { ref: "myDiv", staticClass: "login-index popup grid" }, [
        _vm.isLogin
          ? _c("div", { staticClass: "login-information" }, [
              _c(
                "div",
                {
                  staticClass: "login-close-button",
                  on: {
                    click: function($event) {
                      return _vm.$emit("close", false)
                    }
                  }
                },
                [
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
                        "aria-hidden": "true",
                        role: "presentation",
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", { attrs: { d: "m6 6 20 20" } }),
                      _c("path", { attrs: { d: "m26 6-20 20" } })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c("div", {}, [
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
                    staticClass: "email",
                    class: {
                      active: _vm.active == "email",
                      error: _vm.$v.user.email.$error
                    },
                    attrs: {
                      id: "email",
                      type: "email",
                      required: "",
                      placeholder: "email",
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
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.user.email.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.user.email.serverFailed
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The login doesn't match our records")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.user.email.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The email is required")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _vm.fieldType === "checkbox"
                    ? _c("input", {
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
                          error: _vm.$v.user.password.$error,
                          error: _vm.$v.user.email.$error
                        },
                        attrs: {
                          id: "password",
                          required: "",
                          placeholder: "password",
                          type: "checkbox"
                        },
                        domProps: {
                          checked: Array.isArray(_vm.user.password)
                            ? _vm._i(_vm.user.password, null) > -1
                            : _vm.user.password
                        },
                        on: {
                          click: function($event) {
                            return _vm.onToggle("password")
                          },
                          blur: function($event) {
                            _vm.active = null
                          },
                          input: _vm.$v.user.password.$touch,
                          change: function($event) {
                            var $$a = _vm.user.password,
                              $$el = $event.target,
                              $$c = $$el.checked ? true : false
                            if (Array.isArray($$a)) {
                              var $$v = null,
                                $$i = _vm._i($$a, $$v)
                              if ($$el.checked) {
                                $$i < 0 &&
                                  _vm.$set(
                                    _vm.user,
                                    "password",
                                    $$a.concat([$$v])
                                  )
                              } else {
                                $$i > -1 &&
                                  _vm.$set(
                                    _vm.user,
                                    "password",
                                    $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                                  )
                              }
                            } else {
                              _vm.$set(_vm.user, "password", $$c)
                            }
                          }
                        }
                      })
                    : _vm.fieldType === "radio"
                    ? _c("input", {
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
                          error: _vm.$v.user.password.$error,
                          error: _vm.$v.user.email.$error
                        },
                        attrs: {
                          id: "password",
                          required: "",
                          placeholder: "password",
                          type: "radio"
                        },
                        domProps: { checked: _vm._q(_vm.user.password, null) },
                        on: {
                          click: function($event) {
                            return _vm.onToggle("password")
                          },
                          blur: function($event) {
                            _vm.active = null
                          },
                          input: _vm.$v.user.password.$touch,
                          change: function($event) {
                            return _vm.$set(_vm.user, "password", null)
                          }
                        }
                      })
                    : _c("input", {
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
                          error: _vm.$v.user.password.$error,
                          error: _vm.$v.user.email.$error
                        },
                        attrs: {
                          id: "password",
                          required: "",
                          placeholder: "password",
                          type: _vm.fieldType
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
                              _vm.$set(
                                _vm.user,
                                "password",
                                $event.target.value
                              )
                            },
                            _vm.$v.user.password.$touch
                          ]
                        }
                      }),
                  _vm._v(" "),
                  _vm.$v.user.password.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.user.email.serverFailed
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The login doesn't match our records")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.user.password.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The password is required")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "login-information__showpass" }, [
                    _vm.passwordIsVisible
                      ? _c("img", {
                          attrs: {
                            src: "/storage/website-files/password-eye.png",
                            alt: ""
                          },
                          on: { click: _vm.togglePasswordVisible }
                        })
                      : _c("img", {
                          attrs: {
                            src:
                              "/storage/website-files/password-eye-closed.png",
                            alt: ""
                          },
                          on: { click: _vm.togglePasswordVisible }
                        })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _c(
                    "p",
                    {
                      staticClass: "login-information__forgot-password",
                      class: { inprogress: _vm.disabled },
                      on: { click: _vm.onForget }
                    },
                    [_vm._v("Forgot your password?")]
                  )
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
                    [_vm._v(" Sign In ")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "login-information__switch" }, [
                  _c("p", [
                    _vm._v("Don't have an account? "),
                    _c(
                      "button",
                      {
                        staticClass: "switch_login",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onPageSwitch($event)
                          }
                        }
                      },
                      [_vm._v("Join Now")]
                    )
                  ])
                ])
              ])
            ])
          : _c("div", { staticClass: "login-information" }, [
              _c(
                "div",
                {
                  staticClass: "login-close-button",
                  on: {
                    click: function($event) {
                      return _vm.$emit("close", false)
                    }
                  }
                },
                [
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
                        "aria-hidden": "true",
                        role: "presentation",
                        viewBox: "0 0 32 32",
                        xmlns: "http://www.w3.org/2000/svg"
                      }
                    },
                    [
                      _c("path", { attrs: { d: "m6 6 20 20" } }),
                      _c("path", { attrs: { d: "m26 6-20 20" } })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _c("div", {}, [
                _c("div", { staticClass: "field" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.user.name,
                        expression: "user.name"
                      }
                    ],
                    class: {
                      active: _vm.active == "name",
                      error: _vm.$v.user.name.$error
                    },
                    attrs: {
                      id: "name",
                      type: "name",
                      required: "",
                      placeholder: "Name",
                      autofocus: ""
                    },
                    domProps: { value: _vm.user.name },
                    on: {
                      click: function($event) {
                        _vm.active = "name"
                      },
                      blur: function($event) {
                        _vm.active = null
                      },
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "name", $event.target.value)
                        },
                        _vm.$v.user.name.$touch
                      ]
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.user.name.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.user.name.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The name is required")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.user.name.maxLength
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The name too long")
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
                      ]
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
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
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
                          _vm.$set(
                            _vm.user,
                            "passwordConfirm",
                            $event.target.value
                          )
                        },
                        function($event) {
                          _vm.active = "passwordConfirm"
                        }
                      ],
                      keyup: function($event) {
                        if (
                          !$event.type.indexOf("key") &&
                          _vm._k(
                            $event.keyCode,
                            "enter",
                            13,
                            $event.key,
                            "Enter"
                          )
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
                        !_vm.$v.user.passwordConfirm.serverFailed
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v(_vm._s(_vm.serverErrors.password[0]))
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
                      staticClass: "save",
                      attrs: { type: "submit", disabled: _vm.disabled },
                      on: { click: _vm.onSubmit }
                    },
                    [_vm._v(" Register ")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "login-information__switch" }, [
                  _c("p", [
                    _vm._v("Already have an account? "),
                    _c(
                      "button",
                      {
                        staticClass: "switch_login",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.onPageSwitch($event)
                          }
                        }
                      },
                      [_vm._v("Sign In Now")]
                    )
                  ])
                ])
              ])
            ]),
        _vm._v(" "),
        _vm._m(2)
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
      _c("h3", [_vm._v("Hello There!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-information__title" }, [
      _c("h3", [_vm._v("Sign Up!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-image" }, [
      _c("img", {
        attrs: { src: "/storage/website-files/login-image.jpg", alt: "" }
      })
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/pages/layouts/forgotPassword.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/layouts/forgotPassword.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forgotPassword_vue_vue_type_template_id_d41c7466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotPassword.vue?vue&type=template&id=d41c7466& */ "./resources/js/pages/layouts/forgotPassword.vue?vue&type=template&id=d41c7466&");
/* harmony import */ var _forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/forgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _forgotPassword_vue_vue_type_template_id_d41c7466___WEBPACK_IMPORTED_MODULE_0__["render"],
  _forgotPassword_vue_vue_type_template_id_d41c7466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/forgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/forgotPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/layouts/forgotPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/forgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/forgotPassword.vue?vue&type=template&id=d41c7466&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/layouts/forgotPassword.vue?vue&type=template&id=d41c7466& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_template_id_d41c7466___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./forgotPassword.vue?vue&type=template&id=d41c7466& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/forgotPassword.vue?vue&type=template&id=d41c7466&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_template_id_d41c7466___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_forgotPassword_vue_vue_type_template_id_d41c7466___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/layouts/login-pop.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/layouts/login-pop.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_pop_vue_vue_type_template_id_1da7b04e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-pop.vue?vue&type=template&id=1da7b04e& */ "./resources/js/pages/layouts/login-pop.vue?vue&type=template&id=1da7b04e&");
/* harmony import */ var _login_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-pop.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/login-pop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _login_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _login_pop_vue_vue_type_template_id_1da7b04e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _login_pop_vue_vue_type_template_id_1da7b04e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/login-pop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/login-pop.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/layouts/login-pop.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./login-pop.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/login-pop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_pop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/login-pop.vue?vue&type=template&id=1da7b04e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/layouts/login-pop.vue?vue&type=template&id=1da7b04e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_pop_vue_vue_type_template_id_1da7b04e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./login-pop.vue?vue&type=template&id=1da7b04e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/login-pop.vue?vue&type=template&id=1da7b04e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_pop_vue_vue_type_template_id_1da7b04e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_login_pop_vue_vue_type_template_id_1da7b04e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);