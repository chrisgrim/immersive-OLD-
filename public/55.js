(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/checklist.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/checklist.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: {
    onReview: function onReview() {
      return this.url === "/create-event/".concat(this.event.slug, "/review") ? true : '';
    }
  },
  data: function data() {
    return {
      onOrganizer: false,
      onTitle: false,
      onLocation: false,
      onCategory: false,
      onShows: false,
      onDescription: false,
      onAdvisories: false,
      onImage: false,
      url: window.location.pathname
    };
  },
  methods: {
    getUrl: function getUrl(data) {
      if (data === "/create-event/".concat(this.event.slug, "/review")) {
        this.onTitle = true;
        this.onLocation = true;
        this.onCategory = true;
        this.onShows = true;
        this.onDescription = true;
        this.onAdvisories = true;
        return this.onImage = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/images")) {
        this.onTitle = true;
        this.onLocation = true;
        this.onCategory = true;
        this.onShows = true;
        this.onDescription = true;
        this.onAdvisories = true;
        return this.onImage = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/advisories")) {
        this.onTitle = true;
        this.onLocation = true;
        this.onCategory = true;
        this.onShows = true;
        this.onDescription = true;
        return this.onAdvisories = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/description")) {
        this.onTitle = true;
        this.onLocation = true;
        this.onCategory = true;
        this.onShows = true;
        return this.onDescription = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/shows")) {
        this.onTitle = true;
        this.onLocation = true;
        this.onCategory = true;
        return this.onShows = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/category")) {
        this.onTitle = true;
        this.onLocation = true;
        return this.onCategory = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/location")) {
        this.onTitle = true;
        return this.onLocation = true;
      }

      if (data === "/create-event/".concat(this.event.slug, "/title")) {
        return this.onTitle = true;
      }
    },
    notAllowed: function notAllowed() {
      if (this.event.status) {
        return ['d', 'n', 'p'].includes(this.event.status) ? '' : window.location.href = '/create-event/edit';
      }
    }
  },
  mounted: function mounted() {
    var data = this.$router.currentRoute.path;
    this.getUrl(data);
  },
  created: function created() {
    this.notAllowed();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/checklist.vue?vue&type=template&id=7a59291e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/checklist.vue?vue&type=template&id=7a59291e& ***!
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
  return _c("div", { staticClass: "steps" }, [
    _c("div", { staticClass: "checklist", class: { review: _vm.onReview } }, [
      _c("div", { staticClass: "c_home" }, [
        _c("a", { attrs: { href: "/create-event/edit" } }, [
          _c(
            "button",
            { staticClass: "home", class: { review: _vm.onReview } },
            [_vm._v("Home")]
          )
        ])
      ]),
      _vm._v(" "),
      _vm.url == "/organizer/create"
        ? _c("div", { staticClass: "item" }, [_vm._m(0)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/title"
        ? _c("div", { staticClass: "item" }, [_vm._m(1)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/location"
        ? _c("div", { staticClass: "item" }, [_vm._m(2)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/category"
        ? _c("div", { staticClass: "item" }, [_vm._m(3)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/shows"
        ? _c("div", { staticClass: "item" }, [_vm._m(4)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/description"
        ? _c("div", { staticClass: "item" }, [_vm._m(5)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/advisories"
        ? _c("div", { staticClass: "item" }, [_vm._m(6)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/images"
        ? _c("div", { staticClass: "item" }, [_vm._m(7)])
        : _vm._e(),
      _vm._v(" "),
      _vm.url == "/create-event/" + this.event.slug + "/review"
        ? _c("div", { staticClass: "item" }, [_vm._m(8)])
        : _vm._e()
    ]),
    _vm._v(" "),
    !_vm.onReview
      ? _c("div", { staticClass: "bar" }, [
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onTitle },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.name
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/title"
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onLocation },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.location_latlon
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/location"
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onCategory },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.category_id
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/category"
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onShows },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.show_times
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/shows"
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onDescription },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.description
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/description"
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onAdvisories },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.advisories_id
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/advisories"
                    }
                  })
                : _vm._e()
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "link",
              class: { fill: _vm.onImage },
              staticStyle: { width: "14.4%", left: "0%", "padding-top": "1rem" }
            },
            [
              _vm.event.largeImagePath
                ? _c("a", {
                    attrs: {
                      href: "/create-event/" + this.event.slug + "/images"
                    }
                  })
                : _vm._e()
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Organizer: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Let users know about your team!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Title: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Make it a good one!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Location: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Give your event an address")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Category: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Select the best fit for your event")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Shows: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Choose your Dates and Pricing")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Description: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Let your users know about the event")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Advisories: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Provide warnings")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text" }, [
      _c("p", [_vm._v("Image: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("Entice our visitors with a great image")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text f" }, [
      _c("p", [_vm._v("Review: ")]),
      _vm._v(" "),
      _c("p", [_vm._v("One last chance to make sure everything looks good")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/create/checklist.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/create/checklist.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checklist_vue_vue_type_template_id_7a59291e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist.vue?vue&type=template&id=7a59291e& */ "./resources/js/components/create/checklist.vue?vue&type=template&id=7a59291e&");
/* harmony import */ var _checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.vue?vue&type=script&lang=js& */ "./resources/js/components/create/checklist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checklist_vue_vue_type_template_id_7a59291e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _checklist_vue_vue_type_template_id_7a59291e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/checklist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/checklist.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/create/checklist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./checklist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/checklist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/checklist.vue?vue&type=template&id=7a59291e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/create/checklist.vue?vue&type=template&id=7a59291e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_template_id_7a59291e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./checklist.vue?vue&type=template&id=7a59291e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/checklist.vue?vue&type=template&id=7a59291e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_template_id_7a59291e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_checklist_vue_vue_type_template_id_7a59291e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);