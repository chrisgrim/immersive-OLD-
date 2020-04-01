(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/categories/category-show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/categories/category-show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import {mapGetters} from 'vuex'

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  props: {
    category: {
      type: Object
    }
  },
  data: function data() {
    return {
      value: '',
      list: [],
      price: '',
      eventName: '',
      location: ''
    };
  },
  methods: {//  locationPromise() {
    //   return new Promise((resolve, reject) => {
    //       let params = {
    //           key: 'af4b25e28c2b00',
    //           q: this.location,
    //       };
    //       let url = `https://cors-anywhere.herokuapp.com/https://us1.locationiq.com/v1/search.php?key=af4b25e28c2b00&q=` + this.location + `&format=json`;
    // axios.get(url)
    // .then(response => {
    //  console.log(response.data[0].lat);
    //  let params = {
    //      eventLat: response.data[0].lat,
    //      eventLong: response.data[0].lon,
    //      locationName: this.location
    //  };
    //  resolve(params);
    // });
    //   });
    //  },
    // getFilteredEvents(data) {
    //  axios.post('/eventsFilter/eventfilter', data)
    //  .then(response => {
    //      this.allEvents = response.data;
    //      console.log(response.data);
    //  })
    //  .catch(errorResponse => {
    //      //show if there are server side validation errors
    //      if(!_.has(errorResponse, 'response.data.errors')) {
    //          return false;
    //      }
    //      for (const[field, errors] of Object.entries(errorResponse.response.data.errors)) {
    //          for(const error in errors) {
    //              this.errors.add({
    //                  field: field,
    //                  msg: errors[error]
    //              });
    //          }
    //      }
    //  });
    // },
    // locationSearch() {
    //  let params = {
    //      key: 'af4b25e28c2b00',
    //      q: this.location,
    //  };
    //  let url = `https://cors-anywhere.herokuapp.com/https://us1.locationiq.com/v1/search.php?key=af4b25e28c2b00&q=` + this.location + `&format=json`;
    //  axios.get(url)
    //  .then(response => {
    //            console.log(response.data[0].lat);
    //            let params = {
    //       eventLat: response.data[0].lat,
    //       eventLong: response.data[0].lon,
    //       locationName: this.location
    //   };
    //   axios.post('/eventsFilter/locationfilter', params)
    //   .then(response => {
    //             this.allEvents = response.data;
    //         })
    //         .catch(errorResponse => {
    //            // show if there are server side validation errors
    //             if (!_.has(errorResponse, 'response.data.errors')) { return false; }
    //                 for (const [field, errors] of Object.entries(errorResponse.response.data.errors)) {
    //                  for (const error in errors) {
    //                     this.errors.add({ field: field, msg: errors[error] });
    //                 }
    //                 }
    //         });
    //        })
    //        .catch(errorResponse => {
    //           // show if there are server side validation errors
    //           if (!_.has(errorResponse, 'response.data.errors')) { return false; }
    //            for (const [field, errors] of Object.entries(errorResponse.response.data.errors)) {
    //                for (const error in errors) {
    //                   this.errors.add({ field: field, msg: errors[error] });
    //                }
    //                }
    //        });
    // },
  } // mounted() {
  //           this.$store.dispatch('fetchEvents')
  //       },

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/categories/category-show.vue?vue&type=template&id=17ff8e84&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/categories/category-show.vue?vue&type=template&id=17ff8e84& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "category" }, [
      _c("div", { staticClass: "list" }, [
        _c("h2", [_vm._v("Explore " + _vm._s(_vm.category.name))]),
        _vm._v(" "),
        _c("div", [
          _c(
            "div",
            { attrs: { id: "grid" } },
            _vm._l(_vm.category.events, function(event) {
              return _c(
                "div",
                [_c("event-listing-item", { attrs: { event: event } })],
                1
              )
            }),
            0
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/categories/category-show.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/categories/category-show.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _category_show_vue_vue_type_template_id_17ff8e84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-show.vue?vue&type=template&id=17ff8e84& */ "./resources/js/components/categories/category-show.vue?vue&type=template&id=17ff8e84&");
/* harmony import */ var _category_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-show.vue?vue&type=script&lang=js& */ "./resources/js/components/categories/category-show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _category_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _category_show_vue_vue_type_template_id_17ff8e84___WEBPACK_IMPORTED_MODULE_0__["render"],
  _category_show_vue_vue_type_template_id_17ff8e84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/categories/category-show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/categories/category-show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/categories/category-show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./category-show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/categories/category-show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_category_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/categories/category-show.vue?vue&type=template&id=17ff8e84&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/categories/category-show.vue?vue&type=template&id=17ff8e84& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_show_vue_vue_type_template_id_17ff8e84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./category-show.vue?vue&type=template&id=17ff8e84& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/categories/category-show.vue?vue&type=template&id=17ff8e84&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_show_vue_vue_type_template_id_17ff8e84___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_category_show_vue_vue_type_template_id_17ff8e84___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);