(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/event-search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-slider-component */ "./node_modules/vue-slider-component/dist/vue-slider-component.umd.min.js");
/* harmony import */ var vue_slider_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_slider_component_theme_antd_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-slider-component/theme/antd.css */ "./node_modules/vue-slider-component/theme/antd.css");
/* harmony import */ var vue_slider_component_theme_antd_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_slider_component_theme_antd_css__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // import '../events/components/clickOutside.js';



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a,
    VueSlider: vue_slider_component__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  props: {
    searchedevents: {
      type: Array
    },
    categories: {
      type: Array
    },
    user: {
      type: String
    }
  },
  computed: {
    showPrice: function showPrice() {
      return this.price[1] == this.options.max && this.price[0] == this.options.min ? true : false;
    },
    data: function data() {
      return {
        results: this.results,
        mapboundary: this.boundaries,
        category: this.category,
        dates: this.datesSubmit,
        price: this.hasPrice ? this.price : '',
        loc: this.boundaries ? '' : {
          lat: this.$route.query.lat,
          lng: this.$route.query.lng
        }
      };
    }
  },
  data: function data() {
    return {
      eventList: this.searchedevents,
      activeItem: null,
      category: '',
      showMap: true,
      price: [0, 0],
      boundaries: '',
      datesSubmit: [],
      datesFormatted: [],
      hasPrice: false,
      dates: [],
      results: '',
      config: {
        minDate: "today",
        altFormat: 'M d',
        altInput: true,
        mode: "range",
        inline: true,
        showMonths: 2,
        dateFormat: 'Y-m-d H:i:s',
        onClose: [this.dateFunc()]
      },
      options: {
        min: 0,
        max: 500
      }
    };
  },
  methods: {
    show: function show(type) {
      var _this = this;

      this.activeItem === type ? this.activeItem = null : this.activeItem = type;
      setTimeout(function () {
        return document.addEventListener("click", _this.onClickOutside);
      }, 200);
    },
    submitCat: function submitCat(value) {
      this.category = value;
      this.submit();
    },
    clearCat: function clearCat() {
      this.category = '';
      this.submit();
    },
    mapSearch: function mapSearch(value) {
      this.boundaries = value;
      this.submit();
    },
    loadMoreEvents: function loadMoreEvents(value) {
      this.results = value;
      this.submit();
    },
    submit: function submit() {
      var _this2 = this;

      this.activeItem = null;
      console.log(this.data);
      axios.post('/api/search/mapboundary', this.data).then(function (response) {
        _this2.eventList = response.data;
        console.log(response.data);
      })["catch"](function (errorResponse) {
        console.log(errorResponse.data);
      });
    },
    getPriceRange: function getPriceRange() {
      var prices = [];
      this.eventList.forEach(function (event) {
        event.priceranges.forEach(function (pricerange) {
          prices.push(pricerange.price);
        });
      });
      var arr = Math.ceil(parseFloat(prices.sort().slice(-1)[0]));
      prices.length ? this.price[1] = arr : this.price[1] = 1000;
      prices.length ? this.options.max = arr : this.options.max = 1000;
    },
    dateFunc: function dateFunc() {
      // Save component this in that
      var that = this; // return function needed

      return function (value) {
        var _this3 = this;

        that.datesSubmit = value.map(function (date) {
          return _this3.formatDate(date, "Y-m-d H:i:S");
        });
        that.datesFormatted = value.map(function (date) {
          return _this3.formatDate(date, "M d");
        });
      };
    },
    onClickOutside: function onClickOutside(event) {
      console.log('test');
      var cat = this.$refs.cat;
      var dates = this.$refs.dates;
      var price = this.$refs.price;
      if (!cat || cat.contains(event.target) || !dates || dates.contains(event.target) || !price || price.contains(event.target)) return;
      this.activeItem = null;
      this.submit();
    }
  },
  watch: {
    price: function price() {
      this.hasPrice = true;
    }
  },
  created: function created() {
    this.getPriceRange();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-search.vue?vue&type=template&id=327722f6&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/event-search.vue?vue&type=template&id=327722f6& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      { staticClass: "body" },
      [
        _c("div", { staticClass: "filter" }, [
          _c("div", { staticClass: "item" }, [
            _c("div", { staticClass: "el" }, [
              _c("div", { ref: "dates", staticClass: "button" }, [
                _c(
                  "div",
                  {
                    staticClass: "click",
                    on: {
                      click: function($event) {
                        return _vm.show("dates")
                      }
                    }
                  },
                  [
                    !_vm.datesFormatted.length
                      ? _c("p", [_vm._v("Dates")])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.datesFormatted.length
                      ? _c("p", [
                          _vm._v(
                            _vm._s(_vm.datesFormatted[0]) +
                              _vm._s(
                                _vm.datesFormatted[1]
                                  ? " to " + _vm.datesFormatted[1]
                                  : ""
                              ) +
                              " "
                          )
                        ])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _vm.activeItem === "dates"
                  ? _c("div", { staticClass: "b_over dates" }, [
                      _c(
                        "div",
                        [
                          _c("flat-pickr", {
                            attrs: {
                              config: _vm.config,
                              placeholder: "Select date",
                              name: "dates"
                            },
                            model: {
                              value: _vm.dates,
                              callback: function($$v) {
                                _vm.dates = $$v
                              },
                              expression: "dates"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "save" }, [
                        _vm.datesFormatted.length
                          ? _c(
                              "button",
                              {
                                staticClass: "cancel",
                                on: {
                                  click: function($event) {
                                    _vm.datesFormatted = []
                                    _vm.datesSubmit = []
                                  }
                                }
                              },
                              [_vm._v("clear")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.datesFormatted.length
                          ? _c(
                              "button",
                              {
                                staticClass: "cancel",
                                on: {
                                  click: function($event) {
                                    _vm.activeItem = null
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          { staticClass: "submit", on: { click: _vm.submit } },
                          [_vm._v("Save")]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c("div", { staticClass: "el" }, [
              _c("div", { ref: "cat", staticClass: "button" }, [
                _c(
                  "div",
                  {
                    staticClass: "click",
                    on: {
                      click: function($event) {
                        return _vm.show("category")
                      }
                    }
                  },
                  [
                    !_vm.category ? _c("p", [_vm._v("Categories")]) : _vm._e(),
                    _vm._v(" "),
                    _vm.category
                      ? _c("p", [_vm._v(_vm._s(_vm.category.name))])
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _vm.activeItem === "category"
                  ? _c("div", { staticClass: "b_over cat" }, [
                      _c(
                        "div",
                        { staticClass: "box" },
                        [
                          _c("multiselect", {
                            attrs: {
                              label: "name",
                              options: _vm.categories,
                              placeholder: "Categories",
                              "open-direction": "bottom",
                              "preselect-first": false
                            },
                            on: { select: _vm.submitCat },
                            model: {
                              value: _vm.category,
                              callback: function($$v) {
                                _vm.category = $$v
                              },
                              expression: "category"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "save" }, [
                        _vm.category
                          ? _c(
                              "button",
                              {
                                staticClass: "cancel",
                                on: { click: _vm.clearCat }
                              },
                              [_vm._v("clear")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.category
                          ? _c(
                              "button",
                              {
                                staticClass: "cancel",
                                on: {
                                  click: function($event) {
                                    _vm.activeItem = null
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            )
                          : _vm._e()
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "item" }, [
            _c("div", { staticClass: "el" }, [
              _c("div", { ref: "price", staticClass: "button" }, [
                _c(
                  "div",
                  {
                    staticClass: "click",
                    on: {
                      click: function($event) {
                        return _vm.show("price")
                      }
                    }
                  },
                  [
                    !_vm.showPrice && _vm.price[0] == 0
                      ? _c("p", [
                          _vm._v(_vm._s(" Up to " + "$" + _vm.price[1]))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    !_vm.showPrice && _vm.price[0] != 0
                      ? _c("p", [
                          _vm._v(
                            _vm._s("$" + _vm.price[0]) +
                              _vm._s(" to " + "$" + _vm.price[1])
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.showPrice ? _c("p", [_vm._v("Price")]) : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _vm.activeItem === "price"
                  ? _c("div", { staticClass: "b_over price" }, [
                      _c(
                        "div",
                        { staticClass: "box price" },
                        [
                          _c(
                            "vue-slider",
                            _vm._b(
                              {
                                attrs: { "enable-cross": false },
                                model: {
                                  value: _vm.price,
                                  callback: function($$v) {
                                    _vm.price = $$v
                                  },
                                  expression: "price"
                                }
                              },
                              "vue-slider",
                              _vm.options,
                              false
                            )
                          ),
                          _vm._v(" "),
                          _c("label", [_vm._v(" Min ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.price[0],
                                expression: "price[0]"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: _vm.price[0] },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.price, 0, $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("label", [_vm._v(" Max ")]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.price[1],
                                expression: "price[1]"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: _vm.price[1] },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.price, 1, $event.target.value)
                              }
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "save" }, [
                        _vm.showPrice
                          ? _c(
                              "button",
                              {
                                staticClass: "cancel",
                                on: {
                                  click: function($event) {
                                    _vm.activeItem = null
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.showPrice
                          ? _c(
                              "button",
                              {
                                staticClass: "cancel",
                                on: {
                                  click: function($event) {
                                    _vm.price = [
                                      _vm.options.min,
                                      _vm.options.max
                                    ]
                                  }
                                }
                              },
                              [_vm._v("clear")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          { staticClass: "submit", on: { click: _vm.submit } },
                          [_vm._v("Save")]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "showmap" }, [
            _c("p", [_vm._v("Show Map")]),
            _vm._v(" "),
            _c("div", { attrs: { id: "cover" } }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.showMap,
                    expression: "showMap"
                  }
                ],
                attrs: { type: "checkbox", id: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.showMap)
                    ? _vm._i(_vm.showMap, null) > -1
                    : _vm.showMap
                },
                on: {
                  change: function($event) {
                    var $$a = _vm.showMap,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.showMap = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.showMap = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.showMap = $$c
                    }
                  }
                }
              }),
              _vm._v(" "),
              _c("div", { attrs: { id: "bar" } }),
              _vm._v(" "),
              _c("div", { attrs: { id: "knob" } }, [
                _vm.showMap
                  ? _c("p", [
                      _c(
                        "svg",
                        {
                          staticStyle: {
                            height: "28px",
                            width: "28px",
                            display: "block",
                            overflow: "visible"
                          },
                          attrs: {
                            viewBox: "0 0 52 52",
                            fill: "black",
                            "fill-opacity": "0",
                            stroke: "currentColor",
                            "stroke-width": "3",
                            focusable: "false",
                            "aria-hidden": "true",
                            role: "presentation",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }
                        },
                        [
                          _c("path", {
                            attrs: { d: "m19.1 25.2 4.7 6.2 12.1-11.2" }
                          })
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.showMap
          ? _c("event-map-search", {
              attrs: { user: _vm.user, events: _vm.eventList },
              on: {
                mapCenterUpdated: _vm.mapSearch,
                loadMore: _vm.loadMoreEvents
              }
            })
          : _c("event-list-search", {
              attrs: { user: _vm.user, events: _vm.eventList }
            })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/events/event-search.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/events/event-search.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_search_vue_vue_type_template_id_327722f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-search.vue?vue&type=template&id=327722f6& */ "./resources/js/components/events/event-search.vue?vue&type=template&id=327722f6&");
/* harmony import */ var _event_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-search.vue?vue&type=script&lang=js& */ "./resources/js/components/events/event-search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _event_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _event_search_vue_vue_type_template_id_327722f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _event_search_vue_vue_type_template_id_327722f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/events/event-search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/events/event-search.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/events/event-search.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/events/event-search.vue?vue&type=template&id=327722f6&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/events/event-search.vue?vue&type=template&id=327722f6& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_search_vue_vue_type_template_id_327722f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-search.vue?vue&type=template&id=327722f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-search.vue?vue&type=template&id=327722f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_search_vue_vue_type_template_id_327722f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_search_vue_vue_type_template_id_327722f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);