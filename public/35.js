(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/category.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/category.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    },
    categories: {
      type: Array
    }
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      defaultImage: '/storage/website-files/upload.png',
      selectedCategory: '',
      eventUrl: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(this.event, 'slug') ? "/create-event/".concat(this.event.slug) : null,
      categoryOptions: this.categories,
      activeItem: null,
      dis: false
    };
  },
  methods: {
    //checks for validation
    //submit to database
    submitCategory: function submitCategory() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitCategory$(_context) {
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
              ;
              this.dis = true;
              axios.patch("".concat(this.eventUrl, "/category"), this.selectedCategory).then(function (response) {
                window.location.href = "".concat(_this.eventUrl, "/shows");
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    load: function load() {
      var _this2 = this;

      axios.get("".concat(this.eventUrl, "/category/fetch?timestamp=").concat(new Date().getTime())).then(function (response) {
        _this2.selectedCategory = response.data;
      });
    },
    goBack: function goBack() {
      window.location.href = "".concat(this.eventUrl, "/location");
    }
  },
  created: function created() {
    this.load();
  },
  validations: {
    selectedCategory: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/category.vue?vue&type=template&id=79475cb6&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/category.vue?vue&type=template&id=79475cb6& ***!
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
  return _c("div", { staticClass: "category" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "section" }, [
      _c(
        "div",
        { staticClass: "text" },
        [
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
              active: _vm.activeItem == "category",
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
                _vm.activeItem = "category"
              },
              blur: function($event) {
                _vm.activeItem = null
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
          _c("div", {}, [
            _c(
              "button",
              {
                staticClass: "create",
                attrs: { disabled: _vm.dis },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submitCategory()
                  }
                }
              },
              [_vm._v(" Next ")]
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "image" }, [
        this.selectedCategory
          ? _c("img", {
              attrs: {
                src: "/storage/" + _vm.selectedCategory.largeImagePath,
                alt: _vm.selectedCategory.name
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _c("h2", {
            domProps: {
              textContent: _vm._s(
                this.selectedCategory ? _vm.selectedCategory.name : ""
              )
            }
          }),
          _vm._v(" "),
          _c("p", {
            domProps: {
              textContent: _vm._s(
                this.selectedCategory ? _vm.selectedCategory.description : ""
              )
            }
          })
        ])
      ])
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
              return _vm.submitCategory()
            }
          }
        },
        [_vm._v(" Next ")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ctitle" }, [
      _c("h2", [_vm._v("Immersive Categories")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/create/category.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/create/category.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_vue_vue_type_template_id_79475cb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category.vue?vue&type=template&id=79475cb6& */ "./resources/js/components/create/category.vue?vue&type=template&id=79475cb6&");
/* harmony import */ var _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.vue?vue&type=script&lang=js& */ "./resources/js/components/create/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_vue_vue_type_template_id_79475cb6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_vue_vue_type_template_id_79475cb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/category.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/category.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/create/category.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/category.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/category.vue?vue&type=template&id=79475cb6&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/create/category.vue?vue&type=template&id=79475cb6& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_79475cb6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category.vue?vue&type=template&id=79475cb6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/category.vue?vue&type=template&id=79475cb6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_79475cb6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_vue_vue_type_template_id_79475cb6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);