(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-mobility.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-mobility.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mobilities: '',
      mobilityActive: false,
      mobility: '',
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: ''
    };
  },
  computed: {},
  methods: {
    //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
    submitNewMobility: function submitNewMobility() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$v.$touch();

                if (!_this.$v.$invalid) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", false);

              case 3:
                ;
                data = {
                  mobilities: _this.mobility
                };
                axios.post('/mobilities', data).then(function (response) {
                  console.log(response.data);
                  _this.isModalVisible = false;
                  _this.mobility = '';

                  _this.loadMobilities();
                })["catch"](function (error) {
                  _this.isModalVisible = false;
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    showModal: function showModal(mobility) {
      this.modalDelete = mobility;
      this.isEditModalVisible = true;
    },
    deleteMobility: function deleteMobility(mobility) {
      var _this2 = this;

      axios["delete"]("/mobilities/".concat(mobility.id)).then(function (response) {
        console.log(response.data);
        _this2.isEditModalVisible = false;

        _this2.loadMobilities();
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    loadMobilities: function loadMobilities() {
      var _this3 = this;

      axios.get('/mobilities').then(function (response) {
        _this3.mobilities = response.data;
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    saveMobility: function saveMobility(mobility) {
      var _this4 = this;

      var data = {
        mobilities: mobility.mobilities
      };
      axios.patch("/mobilities/".concat(mobility.id), data).then(function (response) {
        console.log(response.data);

        _this4.loadGenres();

        _this4.$v.$reset();
      })["catch"](function (error) {
        _this4.serverErrors = error.response.data.errors;
      });
    },
    saveRank: function saveRank(mobility) {
      var _this5 = this;

      var data = {
        rank: mobility.rank
      };
      axios.patch("/mobilities/".concat(mobility.id), data).then(function (response) {
        console.log(response.data);

        _this5.loadGenres();

        _this5.$v.$reset();
      })["catch"](function (error) {
        _this5.serverErrors = error.response.data.errors;
      });
    }
  },
  created: function created() {
    this.loadMobilities();
  },
  validations: {
    mobility: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-mobility.vue?vue&type=template&id=0a71a276&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-mobility.vue?vue&type=template&id=0a71a276& ***!
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
  return _c(
    "div",
    { staticClass: "mobility" },
    [
      _c("div", {}, [
        _c("div", { staticClass: "title" }, [
          _c("h1", [_vm._v("Mobility")]),
          _vm._v(" "),
          _c("div", { staticClass: "add" }, [
            _c(
              "button",
              {
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.isModalVisible = true
                  }
                }
              },
              [_c("p", [_vm._v("+")])]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._l(_vm.mobilities, function(mobility, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: mobility.mobilities,
                expression: "mobility.mobilities"
              }
            ],
            attrs: { type: "text", placeholder: "Mobilities" },
            domProps: { value: mobility.mobilities },
            on: {
              blur: function($event) {
                return _vm.saveMobility(mobility)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(mobility, "mobilities", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: mobility.rank,
                expression: "mobility.rank"
              }
            ],
            attrs: { type: "text", placeholder: "Mobilities" },
            domProps: { value: mobility.rank },
            on: {
              blur: function($event) {
                return _vm.saveRank(mobility)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(mobility, "rank", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "delete-circle",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showModal(mobility)
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _vm.isEditModalVisible
        ? _c(
            "modal",
            {
              on: {
                close: function($event) {
                  _vm.isEditModalVisible = false
                }
              }
            },
            [
              _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                _c("div", { staticClass: "circle del" }, [
                  _c("p", [_vm._v("X")])
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                _c("h3", [_vm._v("Are you sure?")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "You are deleting " + _vm._s(_vm.modalDelete.mobility) + "."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn del",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.deleteMobility(_vm.modalDelete)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pin noimg" },
        [
          _vm.isModalVisible
            ? _c(
                "modal",
                {
                  on: {
                    close: function($event) {
                      _vm.isModalVisible = false
                    }
                  }
                },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("div")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "body",
                      attrs: { slot: "body" },
                      slot: "body"
                    },
                    [
                      _c("div", { staticClass: "text" }, [
                        _c("div", { staticClass: "name" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.mobility,
                                expression: "mobility"
                              }
                            ],
                            class: { active: _vm.mobilityActive },
                            attrs: { type: "text", placeholder: "Mobilities" },
                            domProps: { value: _vm.mobility },
                            on: {
                              click: function($event) {
                                _vm.mobilityActive = true
                              },
                              blur: function($event) {
                                _vm.mobilityActive = false
                              },
                              input: [
                                function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.mobility = $event.target.value
                                },
                                _vm.$v.mobility.$touch
                              ]
                            }
                          }),
                          _vm._v(" "),
                          _vm.$v.mobility.$error
                            ? _c("div", { staticClass: "validation-error" }, [
                                !_vm.$v.mobility.required
                                  ? _c("p", { staticClass: "error" }, [
                                      _vm._v("Please Add Mobility ")
                                    ])
                                  : _vm._e()
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn sub",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.submitNewMobility()
                          }
                        }
                      },
                      [_vm._v("Submit")]
                    )
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/adminArea/admin-mobility.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-mobility.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_mobility_vue_vue_type_template_id_0a71a276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-mobility.vue?vue&type=template&id=0a71a276& */ "./resources/js/pages/adminArea/admin-mobility.vue?vue&type=template&id=0a71a276&");
/* harmony import */ var _admin_mobility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-mobility.vue?vue&type=script&lang=js& */ "./resources/js/pages/adminArea/admin-mobility.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_mobility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_mobility_vue_vue_type_template_id_0a71a276___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_mobility_vue_vue_type_template_id_0a71a276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/adminArea/admin-mobility.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-mobility.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-mobility.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_mobility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-mobility.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-mobility.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_mobility_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-mobility.vue?vue&type=template&id=0a71a276&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-mobility.vue?vue&type=template&id=0a71a276& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_mobility_vue_vue_type_template_id_0a71a276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-mobility.vue?vue&type=template&id=0a71a276& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-mobility.vue?vue&type=template&id=0a71a276&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_mobility_vue_vue_type_template_id_0a71a276___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_mobility_vue_vue_type_template_id_0a71a276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);