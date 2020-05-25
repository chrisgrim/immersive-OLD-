(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/title.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/title.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['event'],
  computed: {
    endpoint: function endpoint() {
      return "/create-event/".concat(this.event.slug, "/title");
    }
  },
  data: function data() {
    return {
      title: this.initializeTitleObject(),
      active: null,
      disabled: false,
      resubmit: false,
      modal: false,
      approved: this.event.status == 'p' || this.event.status == 'e' ? true : false,
      serverErrors: ''
    };
  },
  methods: {
    initializeTitleObject: function initializeTitleObject() {
      return {
        name: this.event.name ? this.event.name : '',
        tagLine: this.event.tag_line ? this.event.tag_line : '',
        reSubmitEvent: ''
      };
    },
    clearinput: function clearinput() {
      this.nameActive = true;
      this.serverErrors = [];
    },
    onSubmit: function onSubmit(value) {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.patch(this.endpoint, this.title).then(function (res) {
        value == 'exit' ? _this.onBackInitial() : _this.onForward('location');
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    },
    onReSubmit: function onReSubmit() {
      this.title.reSubmitEvent = 'reSubmit';
      this.approved = false;
      this.modal = false;
    },
    onLoad: function onLoad() {
      var _this2 = this;

      axios.get(this.onFetch('title')).then(function (res) {
        res.data.name ? _this2.title.name = res.data.name : '';
        res.data.tag_line ? _this2.title.tagLine = res.data.tag_line : '';
      });
    }
  },
  created: function created() {
    this.onLoad();
  },
  validations: {
    title: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(140),
        serverFailed: function serverFailed() {
          return !this.serverErrors['name'];
        }
      },
      tagLine: {
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(140)
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/title.vue?vue&type=template&id=5b3cf6ee&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/title.vue?vue&type=template&id=5b3cf6ee& ***!
  \**********************************************************************************************************************************************************************************************************/
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
    { staticClass: "event-create__title" },
    [
      _c("section", { staticClass: "event-create" }, [
        _vm._m(0),
        _vm._v(" "),
        _vm.approved
          ? _c(
              "div",
              {
                staticClass: "field",
                on: {
                  mouseover: function($event) {
                    _vm.resubmit = true
                  }
                }
              },
              [
                _c("label", [_vm._v("Title")]),
                _vm._v(" "),
                _c("p", { staticClass: "create-titlename" }, [
                  _vm._v(_vm._s(_vm.title.name))
                ]),
                _vm._v(" "),
                _vm.resubmit
                  ? _c(
                      "button",
                      {
                        staticClass: "editTitle",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.modal = true
                          }
                        }
                      },
                      [_vm._v("Edit")]
                    )
                  : _vm._e()
              ]
            )
          : _c("div", { staticClass: "field" }, [
              _c("label", [_vm._v("Project name")]),
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.title.name,
                    expression: "title.name"
                  }
                ],
                class: {
                  active: _vm.active == "name",
                  error: _vm.$v.title.name.$error
                },
                attrs: { type: "text", placeholder: " " },
                domProps: { value: _vm.title.name },
                on: {
                  input: [
                    function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.title, "name", $event.target.value)
                    },
                    function($event) {
                      return _vm.$v.title.name.$touch()
                    }
                  ],
                  click: function($event) {
                    _vm.active = "name"
                  },
                  blur: function($event) {
                    _vm.active = "null"
                  }
                }
              }),
              _vm._v(" "),
              _vm.$v.title.name.$error
                ? _c("div", { staticClass: "validation-error" }, [
                    !_vm.$v.title.name.required
                      ? _c("p", { staticClass: "error" }, [
                          _vm._v("Please add a title.")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.$v.title.name.maxLength
                      ? _c("p", { staticClass: "error" }, [
                          _vm._v("The title is too long.")
                        ])
                      : _vm._e()
                  ])
                : _vm._e()
            ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", [
            _vm._v(
              "Project tag line (Stand out from the other events with a great tag line!)"
            )
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.title.tagLine,
                expression: "title.tagLine"
              }
            ],
            class: {
              active: _vm.active == "tag",
              error: _vm.$v.title.tagLine.$error
            },
            attrs: {
              type: "text",
              placeholder:
                "Quick, one sentence line to get the audience hooked!"
            },
            domProps: { value: _vm.title.tagLine },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.title, "tagLine", $event.target.value)
                },
                function($event) {
                  return _vm.$v.title.tagLine.$touch()
                }
              ],
              click: function($event) {
                _vm.active = "tag"
              },
              blur: function($event) {
                _vm.active = "null"
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.title.tagLine.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.title.tagLine.maxLength
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("The tag line is too long.")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("section"),
      _vm._v(" "),
      _c("div", { staticClass: "event-create__submit-button" }, [
        _c(
          "button",
          {
            staticClass: "nav-back-button",
            attrs: { disabled: _vm.disabled },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onSubmit("exit")
              }
            }
          },
          [_vm._v(" Save and Exit ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "create-button__back" }, [
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.disabled },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onBackInitial()
              }
            }
          },
          [_vm._v(" Back ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "create-button__forward" }, [
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.disabled },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.onSubmit()
              }
            }
          },
          [_vm._v(" Save and continue ")]
        )
      ]),
      _vm._v(" "),
      _vm.modal
        ? _c(
            "modal",
            {
              on: {
                close: function($event) {
                  _vm.modal = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c("div", { staticClass: "circle del" }, [
                  _c("p", [_vm._v("?")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c("h3", [_vm._v("Changing the event name?")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Editing the event name will require the event to be reapproved."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn del",
                    on: {
                      click: function($event) {
                        return _vm.onReSubmit()
                      }
                    }
                  },
                  [_vm._v("Change")]
                )
              ])
            ]
          )
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
    return _c("div", { staticClass: "title" }, [_c("h2", [_vm._v("Title")])])
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

/***/ "./resources/js/pages/create/title.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/create/title.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title_vue_vue_type_template_id_5b3cf6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.vue?vue&type=template&id=5b3cf6ee& */ "./resources/js/pages/create/title.vue?vue&type=template&id=5b3cf6ee&");
/* harmony import */ var _title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/title.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _title_vue_vue_type_template_id_5b3cf6ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _title_vue_vue_type_template_id_5b3cf6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/title.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/title.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/create/title.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./title.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/title.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/title.vue?vue&type=template&id=5b3cf6ee&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/create/title.vue?vue&type=template&id=5b3cf6ee& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_template_id_5b3cf6ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./title.vue?vue&type=template&id=5b3cf6ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/title.vue?vue&type=template&id=5b3cf6ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_template_id_5b3cf6ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_template_id_5b3cf6ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);