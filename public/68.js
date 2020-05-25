(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav-search.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/nav-search.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  computed: {},
  data: function data() {
    return {
      searchBoxInput: [],
      searchBoxOptions: [{
        name: 'Loading List...'
      }],
      isLoading: false,
      search: this.initializeSearchObject(),
      placeholder: new URL(window.location.href).searchParams.get("name") ? new URL(window.location.href).searchParams.get("name") : 'Search by city or event'
    };
  },
  methods: {
    asyncGenerateCitiesList: function asyncGenerateCitiesList(query) {
      var _this = this;

      axios.get('/api/search/navbar/content', {
        params: {
          keywords: query
        }
      }).then(function (response) {
        console.log(response.data);
        _this.searchBoxOptions = response.data;
      });
    },
    initializeSearchObject: function initializeSearchObject() {
      return {
        name: '',
        latitude: '',
        longitude: ''
      };
    },
    searchEvents: function searchEvents() {
      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.searchBoxInput, 'latitude')) {
        this.globalSearch();
      }

      ;

      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.searchBoxInput, 'twitterHandle')) {
        window.location.href = "/organizer/".concat(this.searchBoxInput.slug);
      }

      ;

      if (lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.searchBoxInput, 'tag_line')) {
        window.location.href = "/events/".concat(this.searchBoxInput.slug);
      }
    },
    globalSearch: function globalSearch() {
      window.location.href = "/index/search?name=".concat(this.searchBoxInput.name, "&lat=").concat(this.searchBoxInput.latitude, "&lng=").concat(this.searchBoxInput.longitude);
    }
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav-search.vue?vue&type=template&id=f10eebfe&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/nav-search.vue?vue&type=template&id=f10eebfe& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "nav-search__content" },
    [
      _c("div", { staticClass: "icon" }, [
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
            _c("g", { attrs: { fill: "none" } }, [
              _c("path", {
                attrs: {
                  d:
                    "m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                }
              })
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("multiselect", {
        attrs: {
          options: _vm.searchBoxOptions,
          "open-direction": "bottom",
          placeholder: _vm.placeholder,
          label: "name",
          loading: _vm.isLoading,
          "show-labels": false,
          "internal-search": false,
          "options-limit": 30,
          limit: 5,
          "track-by": "name",
          "show-no-results": false,
          "allow-empty": false
        },
        on: {
          open: _vm.asyncGenerateCitiesList,
          "search-change": _vm.asyncGenerateCitiesList,
          input: _vm.searchEvents
        },
        scopedSlots: _vm._u([
          {
            key: "selection",
            fn: function(ref) {
              var values = ref.values
              var search = ref.search
              var isOpen = ref.isOpen
              return [
                values.length && !isOpen
                  ? _c("span", { staticClass: "multiselect__single" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(values.length) +
                          " options selected\n            "
                      )
                    ])
                  : _vm._e()
              ]
            }
          }
        ]),
        model: {
          value: _vm.searchBoxInput,
          callback: function($$v) {
            _vm.searchBoxInput = $$v
          },
          expression: "searchBoxInput"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/layouts/nav-search.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/layouts/nav-search.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_search_vue_vue_type_template_id_f10eebfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-search.vue?vue&type=template&id=f10eebfe& */ "./resources/js/pages/layouts/nav-search.vue?vue&type=template&id=f10eebfe&");
/* harmony import */ var _nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-search.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/nav-search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_search_vue_vue_type_template_id_f10eebfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_search_vue_vue_type_template_id_f10eebfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/nav-search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/nav-search.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/layouts/nav-search.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav-search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/nav-search.vue?vue&type=template&id=f10eebfe&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/layouts/nav-search.vue?vue&type=template&id=f10eebfe& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_template_id_f10eebfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-search.vue?vue&type=template&id=f10eebfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav-search.vue?vue&type=template&id=f10eebfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_template_id_f10eebfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_template_id_f10eebfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);