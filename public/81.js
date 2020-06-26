(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[81],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/organizers/contact-organizer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/organizers/contact-organizer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['loadorganizer', 'user'],
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_1__["default"]],
  computed: {
    canMessage: function canMessage() {
      return this.user && this.user.id != this.loadorganizer.user_id && this.user.email_verified_at ? true : false;
    },
    verify: function verify() {
      return this.user && !this.user.email_verified_at ? true : false;
    },
    endPoint: function endPoint() {
      return "/message/organizer/".concat(this.organizer.slug, "/").concat(this.user.id);
    }
  },
  data: function data() {
    return {
      isModalVisible: false,
      isLoginVisible: false,
      isVerifyVisible: false,
      message: '',
      organizer: this.loadorganizer,
      close: false,
      disabled: false,
      serverErrors: []
    };
  },
  methods: {
    onSubmit: function onSubmit(arr) {
      return arr == 'guest' ? this.isLoginVisible = true : this.isVerifyVisible = true;
    },
    toggleBodyClass: function toggleBodyClass(addRemoveClass, className) {
      var el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    onSend: function onSend() {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.post(this.endPoint, {
        message: this.message
      }).then(function (res) {
        _this.isModalVisible = false;
        _this.message = '';
        _this.disabled = false;
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    }
  },
  mounted: function mounted() {},
  watch: {
    isModalVisible: function isModalVisible() {
      return this.isModalVisible ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
    },
    isLoginVisible: function isLoginVisible() {
      return this.isLoginVisible ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
    },
    isVerifyVisible: function isVerifyVisible() {
      return this.isVerifyVisible ? this.toggleBodyClass('addClass', 'noscroll') : this.toggleBodyClass('removeClass', 'noscroll');
    }
  },
  validations: {
    message: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(2000),
      sameUser: function sameUser() {
        return this.user == this.loadorganizer.user_id ? false : true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/organizers/contact-organizer.vue?vue&type=template&id=026d4800&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/organizers/contact-organizer.vue?vue&type=template&id=026d4800& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "organizer-show-contact" },
    [
      _vm.canMessage
        ? _c("div", { staticClass: "contact" }, [
            _c(
              "button",
              {
                staticClass: "default-border",
                on: {
                  click: function($event) {
                    _vm.isModalVisible = true
                  }
                }
              },
              [_vm._v("\n            Contact\n        ")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.verify
        ? _c("div", { staticClass: "contact" }, [
            _c(
              "button",
              {
                staticClass: "default-border",
                on: {
                  click: function($event) {
                    return _vm.onSubmit("verify")
                  }
                }
              },
              [_vm._v("\n            Contact\n        ")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      !_vm.user
        ? _c("div", { staticClass: "contact" }, [
            _c(
              "button",
              {
                staticClass: "default-border",
                on: {
                  click: function($event) {
                    return _vm.onSubmit("guest")
                  }
                }
              },
              [_vm._v("\n            Contact\n        ")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isLoginVisible
        ? _c("login-pop", {
            attrs: { visible: _vm.isLoginVisible },
            on: {
              close: function($event) {
                _vm.isLoginVisible = false
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.isModalVisible
        ? _c(
            "modal",
            {
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
                _c("h3", [_vm._v("Ask " + _vm._s(_vm.organizer.name))]),
                _vm._v(" "),
                _c("p", [
                  _vm._v("Send a question to the organizer or about an event.")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.message,
                        expression: "message"
                      }
                    ],
                    staticClass: "message",
                    class: { error: _vm.$v.message.$error },
                    attrs: { rows: "8", type: "text" },
                    domProps: { value: _vm.message },
                    on: {
                      input: [
                        function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.message = $event.target.value
                        },
                        function($event) {
                          return _vm.$v.message.$touch()
                        }
                      ]
                    }
                  })
                ]),
                _vm._v(" "),
                _vm.$v.message.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.message.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Please include a message")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.message.maxLength
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The message is too long.")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn sub",
                    class: { bspin: _vm.disabled },
                    attrs: { disabled: _vm.disabled },
                    on: {
                      click: function($event) {
                        return _vm.onSend()
                      }
                    }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isVerifyVisible
        ? _c("vue-email-verify", {
            attrs: { user: _vm.user, message: "verify" },
            on: {
              close: function($event) {
                _vm.isVerifyVisible = false
              }
            }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/pages/organizers/contact-organizer.vue":
/*!*************************************************************!*\
  !*** ./resources/js/pages/organizers/contact-organizer.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contact_organizer_vue_vue_type_template_id_026d4800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-organizer.vue?vue&type=template&id=026d4800& */ "./resources/js/pages/organizers/contact-organizer.vue?vue&type=template&id=026d4800&");
/* harmony import */ var _contact_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-organizer.vue?vue&type=script&lang=js& */ "./resources/js/pages/organizers/contact-organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _contact_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _contact_organizer_vue_vue_type_template_id_026d4800___WEBPACK_IMPORTED_MODULE_0__["render"],
  _contact_organizer_vue_vue_type_template_id_026d4800___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/organizers/contact-organizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/organizers/contact-organizer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/organizers/contact-organizer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./contact-organizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/organizers/contact-organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/organizers/contact-organizer.vue?vue&type=template&id=026d4800&":
/*!********************************************************************************************!*\
  !*** ./resources/js/pages/organizers/contact-organizer.vue?vue&type=template&id=026d4800& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_organizer_vue_vue_type_template_id_026d4800___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./contact-organizer.vue?vue&type=template&id=026d4800& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/organizers/contact-organizer.vue?vue&type=template&id=026d4800&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_organizer_vue_vue_type_template_id_026d4800___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_contact_organizer_vue_vue_type_template_id_026d4800___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);