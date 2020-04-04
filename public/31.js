(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/title.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/title.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    event: {
      type: Object
    }
  },
  data: function data() {
    return {
      name: '',
      eventUrl: "/create-event/".concat(this.event.slug),
      tagLine: '',
      activeItem: null,
      dis: false,
      approved: this.event.status == 'p' ? true : false,
      showEdit: false,
      modal: false,
      reapply: ''
    };
  },
  methods: {
    //On click Sets class to green to remove error
    //clears out all server errors
    clearinput: function clearinput() {
      this.nameActive = true;
      this.serverErrors = [];
    },
    //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
    submitName: function submitName() {
      var _this = this;

      var submitObject;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitName$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$v.$touch();

              if (!this.$v.$invalid) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", false);

            case 3:
              this.dis = true;
              submitObject = {
                reapply: this.reapply ? this.reapply : null,
                name: this.name,
                tagline: this.tagLine
              };
              axios.patch("".concat(this.eventUrl, "/title"), submitObject).then(function (response) {
                window.location.href = "".concat(_this.eventUrl, "/location");
              })["catch"](function (error) {
                _this.serverErrors = error.response.data.errors;
                _this.dis = false;
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    showModal: function showModal() {
      this.modal = true;
    },
    onApply: function onApply() {
      this.reapply = 'reapply';
      this.approved = false;
      this.modal = false;
    },
    // If there is data in Database it will load from the database
    getDatabase: function getDatabase() {
      var _this2 = this;

      axios.get("".concat(this.eventUrl, "/title/fetch?timestamp=").concat(new Date().getTime())).then(function (response) {
        response.data.name ? _this2.name = response.data.name : '';
        response.data.tag_line ? _this2.tagLine = response.data.tag_line : '';
      });
    },
    goBack: function goBack() {
      window.location.href = '/create-event/edit';
    }
  },
  created: function created() {
    this.getDatabase();
  },
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(140)
    },
    tagLine: {
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["maxLength"])(140)
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/title.vue?vue&type=template&id=25987e60&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/title.vue?vue&type=template&id=25987e60& ***!
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
    { staticClass: "title" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "section" }, [
        _c("div", { staticClass: "text" }, [
          _vm.approved
            ? _c(
                "div",
                {
                  staticClass: "field",
                  on: {
                    mouseover: function($event) {
                      _vm.showEdit = true
                    }
                  }
                },
                [
                  _c("label", [_vm._v("Title")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "name" }, [_vm._v(_vm._s(_vm.name))]),
                  _vm._v(" "),
                  _vm.showEdit
                    ? _c(
                        "button",
                        {
                          staticClass: "editTitle",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.showModal($event)
                            }
                          }
                        },
                        [_vm._v("Edit")]
                      )
                    : _vm._e()
                ]
              )
            : _c("div", { staticClass: "field" }, [
                _c("label", [
                  _vm._v("Stand out from the other events with a great title")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.name,
                      expression: "name"
                    }
                  ],
                  class: {
                    active: _vm.activeItem == "name",
                    error: _vm.$v.name.$error
                  },
                  attrs: { type: "text", placeholder: " " },
                  domProps: { value: _vm.name },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.name = $event.target.value
                      },
                      function($event) {
                        return _vm.$v.name.$touch()
                      }
                    ],
                    click: function($event) {
                      _vm.activeItem = "name"
                    },
                    blur: function($event) {
                      _vm.activeItem = "null"
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.name.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.name.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Please add a title.")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.name.maxLength
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The title is too long.")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("label", [_vm._v("Event tag line")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.tagLine,
                  expression: "tagLine"
                }
              ],
              class: {
                active: _vm.activeItem == "tag",
                error: _vm.$v.tagLine.$error
              },
              attrs: {
                type: "text",
                placeholder:
                  "Quick, one sentence line to get the audience hooked!"
              },
              domProps: { value: _vm.tagLine },
              on: {
                input: [
                  function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tagLine = $event.target.value
                  },
                  function($event) {
                    return _vm.$v.tagLine.$touch()
                  }
                ],
                click: function($event) {
                  _vm.activeItem = "tag"
                },
                blur: function($event) {
                  _vm.activeItem = "tag"
                }
              }
            }),
            _vm._v(" "),
            _vm.$v.tagLine.$error
              ? _c("div", { staticClass: "validation-error" }, [
                  !_vm.$v.tagLine.maxLength
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("The tag line is too long.")
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "image" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "inNav" }, [
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.dis },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.goBack()
              }
            }
          },
          [_vm._v(" Back ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.dis },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submitName()
              }
            }
          },
          [_vm._v(" Next ")]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "submit" }, [
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.dis },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submitName()
              }
            }
          },
          [_vm._v(" Next ")]
        )
      ]),
      _vm._v(" "),
      _c(
        "modal",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.modal,
              expression: "modal"
            }
          ],
          on: {
            close: function($event) {
              _vm.modal = false
            }
          }
        },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("div", { staticClass: "circle del" }, [_c("p", [_vm._v("X")])])
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
                    return _vm.onApply()
                  }
                }
              },
              [_vm._v("Change")]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ctitle" }, [_c("h2", [_vm._v("Title")])])
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

/***/ "./resources/js/components/create/title.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/create/title.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _title_vue_vue_type_template_id_25987e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./title.vue?vue&type=template&id=25987e60& */ "./resources/js/components/create/title.vue?vue&type=template&id=25987e60&");
/* harmony import */ var _title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title.vue?vue&type=script&lang=js& */ "./resources/js/components/create/title.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _title_vue_vue_type_template_id_25987e60___WEBPACK_IMPORTED_MODULE_0__["render"],
  _title_vue_vue_type_template_id_25987e60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/title.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/title.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/create/title.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./title.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/title.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/title.vue?vue&type=template&id=25987e60&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/create/title.vue?vue&type=template&id=25987e60& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_template_id_25987e60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./title.vue?vue&type=template&id=25987e60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/title.vue?vue&type=template&id=25987e60&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_template_id_25987e60___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_title_vue_vue_type_template_id_25987e60___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);