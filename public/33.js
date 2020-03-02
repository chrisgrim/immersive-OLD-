(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/event-edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    user: {
      type: String
    }
  },
  data: function data() {
    return {
      isModalVisible: false,
      modalDelete: '',
      showMore: '',
      organizerEvents: []
    };
  },
  computed: {
    getUrl: function getUrl(event) {
      return this.events.in_progress_events;
    }
  },
  methods: {
    //deletes a ticket row or clears the first one
    deleteRow: function deleteRow(index) {
      var _this = this;

      axios["delete"]("/events/".concat(this.modalDelete.slug)).then(function (response) {
        _this.events = response.data;
        _this.modalDelete = '';
        _this.isModalVisible = false;

        _this.loadEvents();
      })["catch"](function (errorResponse) {
        errorResponse.response.data.errors;
      });
    },
    showModal: function showModal(event) {
      this.modalDelete = event;
      this.isModalVisible = true;
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    },
    loadEvents: function loadEvents() {
      var _this2 = this;

      axios.get("/create-event/edit/fetch?timestamp=".concat(new Date().getTime())).then(function (response) {
        _this2.organizerEvents = response.data;
      });
    },
    newEvent: function newEvent(organizer) {
      var _this3 = this;

      axios.post("/events", organizer).then(function (response) {
        window.location.href = "/create-event/".concat(response.data.slug, "/title");
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    showOrganizer: function showOrganizer(organizer) {
      window.location.href = "/organizer/".concat(organizer.slug);
    }
  },
  created: function created() {
    this.loadEvents();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "editevents" },
    _vm._l(_vm.organizerEvents, function(organizer, index) {
      return _c("div", [
        _c("div", { staticClass: "section" }, [
          _c("div", { staticClass: "title-block" }, [
            _c("div", {
              staticClass: "image",
              style: {
                backgroundImage: "url('/storage/" + organizer.imagePath + "')"
              }
            }),
            _vm._v(" "),
            _c("div", { staticClass: "title" }, [
              _vm._v(
                "\n                        " +
                  _vm._s(organizer.name) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "buttons" }, [
              _c("button", { staticClass: "edit" }, [_vm._v("Edit")]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "prev",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.showOrganizer(organizer)
                    }
                  }
                },
                [_vm._v("Preview Organizer")]
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "listing-details-block" },
            [
              _c(
                "tabs",
                [
                  _c(
                    "tab",
                    {
                      staticClass: "tab-events",
                      attrs: {
                        title: "Current Events",
                        active: true,
                        id: "grid"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.newEvent(organizer)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "enew" }, [
                            _c("div", { staticClass: "body" }, [
                              _c("div", { staticClass: "event" }, [
                                _c("div", [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "b",
                                      attrs: {
                                        height: "32",
                                        width: "32",
                                        viewBox: "0 0 24 24",
                                        "aria-label": "Add an image or video",
                                        role: "img"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          d:
                                            "M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", [_c("p", [_vm._v("Add New Event")])])
                              ])
                            ])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _vm._l(organizer.in_progress_events, function(
                        event,
                        index
                      ) {
                        return index < 10
                          ? _c(
                              "div",
                              { staticClass: "item" },
                              [
                                _c("event-listing-item", {
                                  attrs: { user: _vm.user, event: event }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "del",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.showModal(event)
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c(
                        "modal",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isModalVisible,
                              expression: "isModalVisible"
                            }
                          ],
                          on: { close: _vm.closeModal }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [
                              _c("div", { staticClass: "circle del" }, [
                                _c("p", [_vm._v("X")])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                            _c("h3", [_vm._v("Are you sure?")]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "You are deleting your " +
                                  _vm._s(_vm.modalDelete.name) +
                                  " event."
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { slot: "footer" }, slot: "footer" },
                            [
                              _c(
                                "button",
                                {
                                  staticClass: "btn del",
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteRow()
                                    }
                                  }
                                },
                                [_vm._v("Delete")]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "tab",
                    {
                      staticClass: "tab-events",
                      attrs: { title: "Past Events", id: "grid" }
                    },
                    [
                      _vm._l(organizer.past_events, function(event, index) {
                        return index < 4
                          ? _c(
                              "div",
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "delete-circle",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.showModal(event)
                                      }
                                    }
                                  },
                                  [_vm._v("X")]
                                ),
                                _vm._v(" "),
                                _c("event-listing-item", {
                                  attrs: {
                                    user: _vm.user,
                                    loadurl: "/events/" + event.slug,
                                    event: event
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e()
                      }),
                      _vm._v(" "),
                      _c(
                        "modal",
                        {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: _vm.isModalVisible,
                              expression: "isModalVisible"
                            }
                          ],
                          on: { close: _vm.closeModal }
                        },
                        [
                          _c(
                            "div",
                            { attrs: { slot: "header" }, slot: "header" },
                            [_vm._v("Ready to Delete?")]
                          ),
                          _vm._v(" "),
                          _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                            _vm._v(
                              " Are you sure you want to delete event " +
                                _vm._s(_vm.modalDelete.name)
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { attrs: { slot: "footer" }, slot: "footer" },
                            [
                              _c(
                                "button",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteRow()
                                    }
                                  }
                                },
                                [_vm._v("Yes")]
                              )
                            ]
                          )
                        ]
                      )
                    ],
                    2
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    }),
    0
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

/***/ "./resources/js/components/events/event-edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/events/event-edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-edit.vue?vue&type=template&id=60515fd8& */ "./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&");
/* harmony import */ var _event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-edit.vue?vue&type=script&lang=js& */ "./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/events/event-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/events/event-edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-edit.vue?vue&type=template&id=60515fd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);