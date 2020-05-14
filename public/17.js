(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/loading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    loading: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      styles: {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    };
  },
  name: "CubeSpinner"
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/loading.vue */ "./resources/js/components/layouts/loading.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    CubeSpinner: _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      user: this.initializeUserObject(),
      login: true,
      passwordFieldType: 'password',
      height: 0,
      activeItem: '',
      serverErrors: [],
      alerts: [],
      dis: false,
      url: location.pathname
    };
  },
  computed: {
    map: function map() {
      return "height:".concat(this.height, "px;");
    }
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
    onLogin: function onLogin() {
      var _this = this;

      var data = {
        type: 'axios',
        email: this.user.email,
        password: this.user.password,
        remember: true
      };
      this.dis = true;
      axios.post('/login', data).then(function (response) {
        // console.log(response.data);
        location.reload();
      })["catch"](function (errorResponse) {
        // console.log(errorResponse.data);
        _this.dis = false;
        _this.serverErrors = errorResponse.response.data.errors;
      });
    },
    handleResize: function handleResize() {
      this.height = window.innerHeight;
    },
    switchLogin: function switchLogin() {
      this.serverErrors = [];
      this.$v.$reset();
      this.url == '/login' ? this.url = '/register' : this.url = '/login';
    },
    switchVisibility: function switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
    },
    urlClick: function urlClick(value) {
      window.location.href = "/login/".concat(value);
    },
    onForget: function onForget() {
      var _this2 = this;

      if (!this.user.email) {
        return false;
      }

      ;
      var data = {
        type: 'axios',
        email: this.user.email
      };
      this.dis = true;
      console.log(data);
      axios.post('/password/email', data).then(function (response) {
        _this2.dis = false;
        console.log(response.data);
        _this2.alerts = response.data;
      })["catch"](function (errorResponse) {
        console.log(errorResponse.data);
        _this2.serverErrors = errorResponse.response.data.errors;
      });
    },
    toggleConfirm: function toggleConfirm() {
      this.activeItem = 'password';
      this.$v.user.password.$touch;
      this.serverErrors = [];
    },
    toggleEmail: function toggleEmail() {
      this.activeItem = 'email';
      this.serverErrors = [];
    },
    onRegister: function onRegister() {
      var _this3 = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      ;
      var data = {
        type: 'axios',
        email: this.user.email,
        password: this.user.password,
        name: this.user.name,
        password_confirmation: this.user.passwordConfirm
      };
      this.dis = true;
      axios.post('/register', data).then(function (response) {
        // console.log(response.data);
        window.location.href = '/email/verify';
      })["catch"](function (errorResponse) {
        // console.log(errorResponse.data);
        _this3.dis = false;
        _this3.serverErrors = errorResponse.response.data.errors;
      });
    },
    //checks to see if passed variable is in the server errors
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
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(50)
      },
      password: {
        serverFailed: function serverFailed() {
          return !this.hasServerError('password');
        },
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
      },
      passwordConfirm: {
        // serverFailed(){ return !this.hasServerError('password'); },
        // required: requiredIf(function(form){
        //     return this.url == '/register'
        // }),
        sameAsPassword: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["sameAs"])('password')
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _vm.loading
    ? _c("div", { staticClass: "spinner" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "svg",
          { attrs: { xmlns: "http://www.w3.org/2000/svg", version: "1.1" } },
          [
            _c("defs", [
              _c(
                "filter",
                { attrs: { id: "goo" } },
                [
                  _c("feGaussianBlur", {
                    attrs: {
                      in: "SourceGraphic",
                      stdDeviation: "10",
                      result: "blur"
                    }
                  }),
                  _vm._v(" "),
                  _c("feColorMatrix", {
                    attrs: {
                      in: "blur",
                      mode: "matrix",
                      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                    }
                  })
                ],
                1
              )
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "area" }, [
      _c("div", { staticClass: "dot dot-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "dot dot-2" }),
      _vm._v(" "),
      _c("div", { staticClass: "dot dot-3" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/register.vue?vue&type=template&id=67bc7134&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/register.vue?vue&type=template&id=67bc7134& ***!
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
  return _c(
    "div",
    { staticClass: "login-index grid", style: _vm.map },
    [
      _vm.url == "/login"
        ? _c("div", { staticClass: "login-information" }, [
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
                staticClass: "email",
                class: {
                  active: _vm.activeItem == "email",
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
                  click: _vm.toggleEmail,
                  blur: function($event) {
                    _vm.activeItem = null
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
                    return _vm.onLogin($event)
                  }
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
              _vm.passwordFieldType === "checkbox"
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
                      active: _vm.activeItem == "password",
                      error: _vm.$v.user.password.$error
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
                        _vm.activeItem = "password"
                      },
                      blur: function($event) {
                        _vm.activeItem = null
                      },
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
                        return _vm.onLogin($event)
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
                              _vm.$set(_vm.user, "password", $$a.concat([$$v]))
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
                : _vm.passwordFieldType === "radio"
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
                      active: _vm.activeItem == "password",
                      error: _vm.$v.user.password.$error
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
                        _vm.activeItem = "password"
                      },
                      blur: function($event) {
                        _vm.activeItem = null
                      },
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
                        return _vm.onLogin($event)
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
                      active: _vm.activeItem == "password",
                      error: _vm.$v.user.password.$error
                    },
                    attrs: {
                      id: "password",
                      required: "",
                      placeholder: "password",
                      type: _vm.passwordFieldType
                    },
                    domProps: { value: _vm.user.password },
                    on: {
                      click: function($event) {
                        _vm.activeItem = "password"
                      },
                      blur: function($event) {
                        _vm.activeItem = null
                      },
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
                        return _vm.onLogin($event)
                      },
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.user, "password", $event.target.value)
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
                _vm.passwordFieldType == "password"
                  ? _c("img", {
                      attrs: {
                        src: "/storage/website-files/password-eye.png",
                        alt: ""
                      },
                      on: { click: _vm.switchVisibility }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _vm.passwordFieldType !== "password"
                  ? _c("img", {
                      attrs: {
                        src: "/storage/website-files/password-eye-closed.png",
                        alt: ""
                      },
                      on: { click: _vm.switchVisibility }
                    })
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "field" }, [
              _c(
                "p",
                {
                  staticClass: "login-information__forgot-password",
                  class: { inprogress: _vm.dis },
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
                  attrs: { type: "submit", disabled: _vm.dis },
                  on: { click: _vm.onLogin }
                },
                [_vm._v(" Sign In ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "login-information__social-login grid" }, [
              _c(
                "button",
                {
                  staticClass: "social-login",
                  on: {
                    click: function($event) {
                      return _vm.urlClick("Facebook")
                    }
                  }
                },
                [_c("p", [_vm._v("Facebook")])]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "social-login",
                  on: {
                    click: function($event) {
                      return _vm.urlClick("Google")
                    }
                  }
                },
                [_c("p", [_vm._v("Google")])]
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
                        return _vm.switchLogin($event)
                      }
                    }
                  },
                  [_vm._v("Join Now")]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/register"
        ? _c("div", { staticClass: "login-information" }, [
            _vm._m(2),
            _vm._v(" "),
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
                  active: _vm.activeItem == "name",
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
                    _vm.activeItem = "name"
                  },
                  blur: function($event) {
                    _vm.activeItem = null
                  },
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "name", $event.target.value)
                    },
                    _vm.$v.user.name.$touch
                  ],
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onRegister($event)
                  }
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
                  active: _vm.activeItem == "email",
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
                  click: _vm.toggleEmail,
                  blur: function($event) {
                    _vm.activeItem = null
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
                    return _vm.onRegister($event)
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
                  active: _vm.activeItem == "password",
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
                  click: _vm.toggleConfirm,
                  blur: function($event) {
                    _vm.activeItem = null
                  },
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "password", $event.target.value)
                    },
                    _vm.toggleConfirm
                  ],
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onRegister($event)
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
                  active: _vm.activeItem == "passwordConfirm",
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
                    _vm.activeItem = "passwordConfirm"
                  },
                  blur: function($event) {
                    _vm.activeItem = null
                  },
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "passwordConfirm", $event.target.value)
                    },
                    function($event) {
                      _vm.activeItem = "passwordConfirm"
                    }
                  ],
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.onRegister($event)
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
                  attrs: { type: "submit", disabled: _vm.dis },
                  on: { click: _vm.onRegister }
                },
                [_vm._v(" Register ")]
              )
            ]),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "login-information__social-login grid" }, [
              _c(
                "button",
                {
                  staticClass: "social-login",
                  on: {
                    click: function($event) {
                      return _vm.urlClick("Facebook")
                    }
                  }
                },
                [_c("p", [_vm._v("Facebook")])]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "social-login",
                  on: {
                    click: function($event) {
                      return _vm.urlClick("Google")
                    }
                  }
                },
                [_c("p", [_vm._v("Google")])]
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
                        return _vm.switchLogin($event)
                      }
                    }
                  },
                  [_vm._v("Sign In Now")]
                )
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "login-image" }, [
        _c("picture", [
          _c("img", {
            style: _vm.map,
            attrs: { src: "/storage/website-files/login-image.jpg" }
          })
        ])
      ]),
      _vm._v(" "),
      _vm.alerts.message
        ? _c("vue-alert", { attrs: { message: _vm.alerts.message } })
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
      _c("h3", [_vm._v("Everything Immersive")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-information__line" }, [
      _c("hr"),
      _vm._v(" "),
      _c("span", [_vm._v("or")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-information__title" }, [
      _c("h3", [_vm._v("Everything Immersive")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-information__line" }, [
      _c("hr"),
      _vm._v(" "),
      _c("span", [_vm._v("or")])
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

/***/ "./resources/js/components/layouts/loading.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/loading.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=7cdf693b& */ "./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layouts/loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=7cdf693b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/register.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/layouts/register.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_vue_vue_type_template_id_67bc7134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.vue?vue&type=template&id=67bc7134& */ "./resources/js/components/layouts/register.vue?vue&type=template&id=67bc7134&");
/* harmony import */ var _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _register_vue_vue_type_template_id_67bc7134___WEBPACK_IMPORTED_MODULE_0__["render"],
  _register_vue_vue_type_template_id_67bc7134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/layouts/register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/register.vue?vue&type=template&id=67bc7134&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/layouts/register.vue?vue&type=template&id=67bc7134& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_67bc7134___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./register.vue?vue&type=template&id=67bc7134& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/register.vue?vue&type=template&id=67bc7134&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_67bc7134___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_template_id_67bc7134___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);