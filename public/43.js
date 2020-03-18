(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/index-item.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/components/index-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
  computed: {// isSubmitted() {
    //     return this.event.approval_process == 'ready' ? this.isModified = `background-image: url('/storage/default-avatar/default-disabled.png'),url('${this.shortBack}')` : false; 
    // },
    // shortBack() {
    //     return this.event.thumbImagePath ? `/storage/${this.event.thumbImagePath}` : 'test';
    // },
    // disabledBackground() {
    //     return `background-image: url('/storage/default-avatar/default-disabled.png'),url('${this.shortBack}')`;
    // },
  },
  data: function data() {
    return {
      divBackground: "background-image: url('".concat(this.event.thumbImagePath ? /storage/ + this.event.thumbImagePath : '/storage/default-avatar/default.jpg', "')"),
      showEventClass: 'heart',
      url: this.loadurl ? this.loadurl : '/events/' + this.event.slug,
      isModified: '',
      isDisabled: false
    };
  },
  methods: {
    eventStatus: function eventStatus() {
      if (this.event.approval_process == 'ready') {
        this.isDisabled = true;
        return this.isModified = "background-image: url('/storage/default-avatar/default-disabled.png'),url('/storage/".concat(this.event.thumbImagePath, "')");
      }

      if (this.event.approval_process == 'hasIssues') {
        return this.isModified = "background-image: url('/storage/default-avatar/default-disabled.png'),url('/storage/".concat(this.event.thumbImagePath, "')");
      }
    },
    getUrl: function getUrl() {
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
    }
  },
  watch: {
    event: function event(newVal, oldVal) {
      // watch it
      this.getUrl();
    }
  },
  mounted: function mounted() {
    this.event.approved ? '' : this.getUrl();
    this.eventStatus();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/index-item.vue?vue&type=template&id=e1b6fec8&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/components/index-item.vue?vue&type=template&id=e1b6fec8& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "item", class: { dis: _vm.isDisabled } },
    [
      _c("favorite", {
        attrs: {
          user: _vm.user,
          inputclass: _vm.showEventClass,
          event: _vm.event
        }
      }),
      _vm._v(" "),
      _c("a", { attrs: { href: _vm.url } }, [
        _c("div", {
          staticClass: "image",
          style: _vm.isModified ? _vm.isModified : _vm.divBackground
        }),
        _vm._v(" "),
        _c("div", { staticClass: "etitle" }, [
          _c("h3", [_vm._v(_vm._s(_vm.event.name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "eprice" }, [
          _c("h4", [_vm._v(_vm._s(_vm.event.price_range))]),
          _c("p", [_vm._v(" / show")])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
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

/***/ "./resources/js/components/events/components/index-item.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/events/components/index-item.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_item_vue_vue_type_template_id_e1b6fec8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-item.vue?vue&type=template&id=e1b6fec8& */ "./resources/js/components/events/components/index-item.vue?vue&type=template&id=e1b6fec8&");
/* harmony import */ var _index_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-item.vue?vue&type=script&lang=js& */ "./resources/js/components/events/components/index-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_item_vue_vue_type_template_id_e1b6fec8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_item_vue_vue_type_template_id_e1b6fec8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/events/components/index-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/events/components/index-item.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/events/components/index-item.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index-item.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/index-item.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/events/components/index-item.vue?vue&type=template&id=e1b6fec8&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/events/components/index-item.vue?vue&type=template&id=e1b6fec8& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_item_vue_vue_type_template_id_e1b6fec8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index-item.vue?vue&type=template&id=e1b6fec8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/components/index-item.vue?vue&type=template&id=e1b6fec8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_item_vue_vue_type_template_id_e1b6fec8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_item_vue_vue_type_template_id_e1b6fec8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);