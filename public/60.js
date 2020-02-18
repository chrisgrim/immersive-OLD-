(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav-search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/nav-search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _components$name$name;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = (_components$name$name = {
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  name: "userSearchRequest"
}, _defineProperty(_components$name$name, "name", "searchEvents"), _defineProperty(_components$name$name, "computed", _objectSpread({
  onSearchPage: function onSearchPage() {
    return this.$router.currentRoute.path === '/index/search' ? true : false;
  }
}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['userSearchRequest']), {
  placeholder: function placeholder() {
    return this.$store.state.userSearchRequest.name ? this.$store.state.userSearchRequest.name : 'Try "Los Angeles"';
  }
})), _defineProperty(_components$name$name, "data", function data() {
  return {
    searchBoxInput: [],
    searchBoxOptions: [],
    isLoading: false,
    search: this.initializeSearchObject()
  };
}), _defineProperty(_components$name$name, "methods", {
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
      this.onSearchPage === true ? this.localSearch() : this.globalSearch();
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
    axios.post('/search/storedata', this.searchBoxInput).then(function (response) {
      window.location.href = '/index/search';
    });
  },
  localSearch: function localSearch() {
    this.$store.dispatch('searchEvents', this.searchBoxInput);
    this.$store.dispatch('userSearchRequest', this.searchBoxInput);
  },
  eventSearch: function eventSearch() {
    console.log(); //window.location.href = `/events/${this.searchBoxInput.slug}`;
  }
}), _defineProperty(_components$name$name, "mounted", function mounted() {}), _components$name$name);

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav-search.vue?vue&type=template&id=7e963b3a&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/nav-search.vue?vue&type=template&id=7e963b3a& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "search" }, [
    _c(
      "div",
      {},
      [
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
                          "\n                    " +
                            _vm._s(values.length) +
                            " options selected\n                "
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/nav-search.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/layouts/nav-search.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_search_vue_vue_type_template_id_7e963b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-search.vue?vue&type=template&id=7e963b3a& */ "./resources/js/components/layouts/nav-search.vue?vue&type=template&id=7e963b3a&");
/* harmony import */ var _nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-search.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/nav-search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_search_vue_vue_type_template_id_7e963b3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_search_vue_vue_type_template_id_7e963b3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/nav-search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/nav-search.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/layouts/nav-search.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav-search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/nav-search.vue?vue&type=template&id=7e963b3a&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/layouts/nav-search.vue?vue&type=template&id=7e963b3a& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_template_id_7e963b3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav-search.vue?vue&type=template&id=7e963b3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/nav-search.vue?vue&type=template&id=7e963b3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_template_id_7e963b3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_search_vue_vue_type_template_id_7e963b3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);