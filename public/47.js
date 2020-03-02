(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      event: '',
      events: [],
      add: false,
      dates: [],
      datesSubmit: [],
      datesFormatted: [],
      listDates: [],
      rank: '',
      activeItem: '',
      rankOptions: ['1', '2', '3', '4', '5'],
      picks: [],
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
      pickConfig: {
        minDate: "today",
        altFormat: 'M d',
        altInput: true,
        mode: "range",
        inline: false,
        showMonths: 2,
        dateFormat: 'Y-m-d H:i:s',
        onClose: [this.submitDateFunc()]
      }
    };
  },
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  computed: {},
  methods: {
    loadEvents: function loadEvents(query) {
      var _this = this;

      axios.get('/api/admin/search/events', {
        params: {
          keywords: query
        }
      }).then(function (response) {
        _this.events = response.data;
      });
    },
    loadPicks: function loadPicks() {
      var _this2 = this;

      axios.get('/admin/staffpicks').then(function (response) {
        _this2.picks = response.data;
      });
    },
    savePick: function savePick() {
      var _this3 = this;

      var data = {
        event: this.event.id,
        rank: this.rank,
        dates: this.datesSubmit
      };
      axios.post('/admin/staffpicks/', data).then(function (response) {
        console.log(response.data);
        _this3.add = false;
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    dateFunc: function dateFunc() {
      var that = this;
      return function (value) {
        var _this4 = this;

        that.datesSubmit = value.map(function (date) {
          return _this4.formatDate(date, "Y-m-d H:i:S");
        });
        that.datesFormatted = value.map(function (date) {
          return _this4.formatDate(date, "M d");
        });
      };
    },
    submitDateFunc: function submitDateFunc(arr) {
      console.log(arr);
      return function (value) {
        var data = {
          start_date: this.formatDate(value[0], "Y-m-d H:i:S"),
          end_date: this.formatDate(value[1], "Y-m-d H:i:S")
        }; // axios.post('/admin/staffpicks/{id}', data)
        // .then(response => { 
        //     console.log(response.data);
        // })
        // .catch(error => { 
        //     this.serverErrors = error.response.data.errors; 
        // });
      };
    }
  },
  created: function created() {
    this.loadPicks();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=template&id=503b5df9&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=template&id=503b5df9& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "picks" }, [
    _c("div", {}, [
      _c("div", { staticClass: "title" }, [
        _c("h1", [_vm._v("Picks of the Week")]),
        _vm._v(" "),
        _c("div", { staticClass: "add" }, [
          _c(
            "button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.add = true
                }
              }
            },
            [_c("p", [_vm._v("+")])]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.add
      ? _c("div", { staticClass: "new" }, [
          _c("div", { staticClass: "content" }, [
            _c(
              "div",
              { staticClass: "event" },
              [
                _c("label", [_vm._v("Event")]),
                _vm._v(" "),
                _c("multiselect", {
                  attrs: {
                    options: _vm.events,
                    "open-direction": "bottom",
                    placeholder: "Select the event",
                    label: "name",
                    "show-labels": false,
                    "internal-search": false,
                    "options-limit": 30,
                    limit: 5,
                    "track-by": "name",
                    "show-no-results": false,
                    "allow-empty": false
                  },
                  on: { open: _vm.loadEvents, "search-change": _vm.loadEvents },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "singleLabel",
                        fn: function(props) {
                          return [
                            _c("img", {
                              staticClass: "option__image",
                              attrs: {
                                src: "/storage/" + props.option.thumbImagePath,
                                alt: props.option.name
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "option__desc" }, [
                              _c("span", { staticClass: "option__title" }, [
                                _vm._v(
                                  _vm._s(props.option.name) +
                                    "\n                            "
                                )
                              ])
                            ])
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2578371558
                  ),
                  model: {
                    value: _vm.event,
                    callback: function($$v) {
                      _vm.event = $$v
                    },
                    expression: "event"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "rank" },
              [
                _c("label", [_vm._v("Rank")]),
                _vm._v(" "),
                _c("multiselect", {
                  class: { active: _vm.activeItem == "rank" },
                  attrs: {
                    options: _vm.rankOptions,
                    "show-labels": false,
                    placeholder:
                      "Leave blank for default Rank of 5 (1 being most important)",
                    "open-direction": "bottom",
                    "preselect-first": false
                  },
                  on: {
                    click: function($event) {
                      _vm.activeItem = "rank"
                    },
                    blur: function($event) {
                      _vm.activeItem = null
                    }
                  },
                  model: {
                    value: _vm.rank,
                    callback: function($$v) {
                      _vm.rank = $$v
                    },
                    expression: "rank"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.savePick($event)
                  }
                }
              },
              [_vm._v("Add staff pick")]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "dates" },
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
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "listing" },
      [
        _vm._m(0),
        _vm._v(" "),
        _vm._l(_vm.picks, function(pick) {
          return _c("div", { staticClass: "list" }, [
            _c("div", { staticClass: "image" }, [
              _c("img", {
                attrs: {
                  src: /storage/ + pick.event.thumbImagePath,
                  alt: pick.event.name
                }
              })
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "name" }, [
              _vm._v(
                "\n                " +
                  _vm._s(pick.event.name) +
                  "\n            "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "rank" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: pick.rank,
                    expression: "pick.rank"
                  }
                ],
                attrs: { type: "text" },
                domProps: { value: pick.rank },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(pick, "rank", $event.target.value)
                  }
                }
              })
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "dates" },
              [
                _c("flat-pickr", {
                  attrs: {
                    value: (_vm.listDates = [pick.start_date, pick.end_date]),
                    config: _vm.pickConfig,
                    placeholder: "Select date",
                    name: "dates"
                  }
                })
              ],
              1
            )
          ])
        })
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h2", [_vm._v("Current Picks")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/adminArea/admin-staff-picks.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-staff-picks.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_staff_picks_vue_vue_type_template_id_503b5df9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-staff-picks.vue?vue&type=template&id=503b5df9& */ "./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=template&id=503b5df9&");
/* harmony import */ var _admin_staff_picks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-staff-picks.vue?vue&type=script&lang=js& */ "./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_staff_picks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_staff_picks_vue_vue_type_template_id_503b5df9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_staff_picks_vue_vue_type_template_id_503b5df9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/adminArea/admin-staff-picks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_staff_picks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-staff-picks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_staff_picks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=template&id=503b5df9&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=template&id=503b5df9& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_staff_picks_vue_vue_type_template_id_503b5df9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-staff-picks.vue?vue&type=template&id=503b5df9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-staff-picks.vue?vue&type=template&id=503b5df9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_staff_picks_vue_vue_type_template_id_503b5df9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_staff_picks_vue_vue_type_template_id_503b5df9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);