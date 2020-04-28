(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/event-edit-item.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/components/event-edit-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
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
//
//
//
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
    loadurl: {
      type: String
    },
    user: {
      type: String
    }
  },
  data: function data() {
    return {
      divBackground: "background-image: url('".concat(this.event.thumbImagePath ? /storage/ + this.event.thumbImagePath : '/storage/default-avatar/default.jpg', "')"),
      showEventClass: 'heart',
      url: "/create-event/".concat(this.event.slug, "/title"),
      isModified: '',
      isDisabled: false,
      imageWidth: ''
    };
  },
  methods: {
    eventStatus: function eventStatus() {
      if (this.event.status == 'r' || this.event.status == 'n') {
        this.event.status == 'r' ? this.isDisabled = true : '';
        return this.isModified = "background: linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)),url('/storage/".concat(this.event.thumbImagePath, "');");
      }
    },
    getUrl: function getUrl() {
      if (this.event.status == 'n') {
        return this.url = "/create-event/".concat(this.event.slug, "/title");
      }

      if (this.event.largeImagePath) {
        return this.url = "/create-event/".concat(this.event.slug, "/images");
      }

      if (this.event.advisories) {
        return this.url = "/create-event/".concat(this.event.slug, "/images");
      }

      if (this.event.description) {
        return this.url = "/create-event/".concat(this.event.slug, "/advisories");
      }

      if (this.event.show_times) {
        return this.url = "/create-event/".concat(this.event.slug, "/description");
      }

      if (this.event.category_id) {
        return this.url = "/create-event/".concat(this.event.slug, "/shows");
      }

      if (this.event.location_latlon) {
        return this.url = "/create-event/".concat(this.event.slug, "/category");
      }

      if (this.event.name) {
        return this.url = "/create-event/".concat(this.event.slug, "/location");
      }

      return this.url = "/create-event/".concat(this.event.slug, "/title");
    },
    handleResize: function handleResize() {
      if (window.innerWidth < 768) {
        this.imageWidth = window.innerWidth / 1.4;
      }
    }
  },
  watch: {
    event: function event(newVal, oldVal) {
      // watch it
      this.getUrl();
    }
  },
  mounted: function mounted() {
    this.event.status == 'p' ? '' : this.getUrl();
    this.eventStatus();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/event-edit-item.vue?vue&type=template&id=460d4285&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/components/event-edit-item.vue?vue&type=template&id=460d4285& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card", class: { dis: _vm.isDisabled } }, [
    _c("a", { staticClass: "url", attrs: { href: _vm.url } }, [
      _vm.event.thumbImagePath
        ? _c(
            "div",
            {
              staticClass: "card-image",
              style: "width:" + _vm.imageWidth + "px"
            },
            [
              _c("picture", [
                _c("source", {
                  attrs: {
                    type: "image/webp",
                    srcset: "/storage/" + _vm.event.thumbImagePath
                  }
                }),
                _vm._v(" "),
                _c("img", {
                  attrs: {
                    src:
                      "/storage/" +
                      _vm.event.thumbImagePath.slice(0, -4) +
                      "jpg",
                    alt: _vm.event.name + " Immersive Event"
                  }
                })
              ])
            ]
          )
        : _c(
            "div",
            {
              staticClass: "card-without-image",
              style: "width:" + _vm.imageWidth + "px"
            },
            [
              _c("div", { staticClass: "card-without-image_name" }, [
                _c("h4", [
                  _vm._v(_vm._s(_vm.event.name ? _vm.event.name : "New Event"))
                ])
              ])
            ]
          ),
      _vm._v(" "),
      _c("div", { staticClass: "card-title" }, [
        _c("h3", [
          _vm._v(_vm._s(_vm.event.name ? _vm.event.name : "New Event"))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-price" }, [
        _c("h4", [_vm._v(_vm._s(_vm.event.price_range))])
      ])
    ]),
    _vm._v(" "),
    _vm.event.status == "r"
      ? _c("div", { staticClass: "card-inprogress" }, [_vm._m(0)])
      : _vm._e(),
    _vm._v(" "),
    _vm.event.status == "n"
      ? _c("div", { staticClass: "card-inprogress" }, [_vm._m(1)])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("b", [_vm._v("Under Review")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", [_c("b", [_vm._v("Needs Changes")])])
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

/***/ "./resources/js/components/events/components/event-edit-item.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/events/components/event-edit-item.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_edit_item_vue_vue_type_template_id_460d4285___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-edit-item.vue?vue&type=template&id=460d4285& */ "./resources/js/components/events/components/event-edit-item.vue?vue&type=template&id=460d4285&");
/* harmony import */ var _event_edit_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-edit-item.vue?vue&type=script&lang=js& */ "./resources/js/components/events/components/event-edit-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _event_edit_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _event_edit_item_vue_vue_type_template_id_460d4285___WEBPACK_IMPORTED_MODULE_0__["render"],
  _event_edit_item_vue_vue_type_template_id_460d4285___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/events/components/event-edit-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/events/components/event-edit-item.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/events/components/event-edit-item.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./event-edit-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/event-edit-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/events/components/event-edit-item.vue?vue&type=template&id=460d4285&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/events/components/event-edit-item.vue?vue&type=template&id=460d4285& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_item_vue_vue_type_template_id_460d4285___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./event-edit-item.vue?vue&type=template&id=460d4285& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/event-edit-item.vue?vue&type=template&id=460d4285&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_item_vue_vue_type_template_id_460d4285___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_item_vue_vue_type_template_id_460d4285___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);