(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/category.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/category.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['event', 'categories'],
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  computed: {
    endpoint: function endpoint() {
      return "/create-event/".concat(this.event.slug, "/category");
    }
  },
  data: function data() {
    return {
      selectedCategory: '',
      categoryOptions: this.categories,
      active: null,
      pageHeight: 0,
      disabled: false,
      serverErrors: ''
    };
  },
  methods: {
    onSubmit: function onSubmit(value) {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.patch(this.endpoint, this.selectedCategory).then(function (res) {
        value == 'exit' ? _this.onBackInitial() : _this.onForward('shows');
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    },
    handleResize: function handleResize() {
      this.pageHeight = "height:calc(".concat(window.innerHeight, "px - 7rem)");
    },
    onLoad: function onLoad() {
      var _this2 = this;

      axios.get(this.onFetch('category')).then(function (res) {
        _this2.selectedCategory = res.data;
      });
    }
  },
  created: function created() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
    this.onLoad();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  validations: {
    selectedCategory: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/category.vue?vue&type=template&id=7b3809d8&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/category.vue?vue&type=template&id=7b3809d8& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "event-create__category grid" }, [
    _c(
      "section",
      { staticClass: "event-enter-category" },
      [
        _vm._m(0),
        _vm._v(" "),
        _c("multiselect", {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.categories.length > 0,
              expression: "categories.length > 0"
            }
          ],
          class: {
            active: _vm.active == "category",
            error: _vm.$v.selectedCategory.$error
          },
          attrs: {
            placeholder: "Select Category",
            label: "name",
            "track-by": "name",
            deselectLabel: "",
            "allow-empty": false,
            options: _vm.categoryOptions,
            "open-direction": "bottom"
          },
          on: {
            input: _vm.$v.selectedCategory.$touch,
            click: function($event) {
              _vm.active = "category"
            },
            blur: function($event) {
              _vm.active = null
            }
          },
          scopedSlots: _vm._u([
            {
              key: "option",
              fn: function(props) {
                return [
                  _c("div", { staticClass: "option__desc" }, [
                    _c("span", { staticClass: "option__title" }, [
                      _vm._v(_vm._s(props.option.name))
                    ])
                  ])
                ]
              }
            }
          ]),
          model: {
            value: _vm.selectedCategory,
            callback: function($$v) {
              _vm.selectedCategory = $$v
            },
            expression: "selectedCategory"
          }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.selectedCategory,
              expression: "selectedCategory"
            }
          ],
          attrs: { type: "hidden", name: "category" },
          domProps: { value: _vm.selectedCategory },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.selectedCategory = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.$v.selectedCategory.$error
          ? _c("div", { staticClass: "validation-error" }, [
              !_vm.$v.selectedCategory.required
                ? _c("p", { staticClass: "error" }, [
                    _vm._v("Please select your event's category")
                  ])
                : _vm._e()
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _c("p", {
            domProps: {
              textContent: _vm._s(
                this.selectedCategory ? _vm.selectedCategory.description : ""
              )
            }
          })
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.selectedCategory
      ? _c(
          "section",
          { staticClass: "event-show-category__image", style: _vm.pageHeight },
          [
            _c("picture", [
              _c("source", {
                attrs: {
                  type: "image/webp",
                  srcset: "/storage/" + _vm.selectedCategory.largeImagePath
                }
              }),
              _vm._v(" "),
              _c("img", {
                attrs: {
                  src:
                    "/storage/" +
                    _vm.selectedCategory.largeImagePath.slice(0, -4) +
                    "jpg}"
                }
              })
            ])
          ]
        )
      : _vm._e(),
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
              return _vm.onBack("location")
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
        [_vm._v(" Save and Continue ")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h2", [_vm._v("Immersive Categories")])
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

/***/ "./resources/js/pages/create/category.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/create/category.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_7b3809d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=7b3809d8& */ "./resources/js/pages/create/category.vue?vue&type=template&id=7b3809d8&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_7b3809d8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_7b3809d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/category.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/create/category.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/category.vue?vue&type=template&id=7b3809d8&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/create/category.vue?vue&type=template&id=7b3809d8& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_7b3809d8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=7b3809d8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/category.vue?vue&type=template&id=7b3809d8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_7b3809d8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_7b3809d8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);