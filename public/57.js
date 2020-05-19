(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    return {
      organizer: [],
      organizerList: [],
      initOrganizers: [],
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: '',
      isLoading: '',
      selectedModal: '',
      modal: ''
    };
  },
  computed: {
    organizers: function organizers() {
      return this.organizerList.length ? this.organizerList : this.initOrganizers;
    }
  },
  methods: {
    showModal: function showModal(event, arr) {
      this.selectedModal = event;
      this.modal = arr;
    },
    deleteOrg: function deleteOrg(index) {
      var _this = this;

      axios["delete"]("/organizer/".concat(this.selectedModal.slug)).then(function (response) {
        _this.events = response.data;
        _this.selectedModal = '';
        _this.modal = '';

        _this.loadEvents();
      })["catch"](function (errorResponse) {
        errorResponse.response.data.errors;
      });
    },
    onLoad: function onLoad() {
      var _this2 = this;

      axios.get('/admin/organizer/fetch').then(function (response) {
        _this2.initOrganizers = response.data;
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    onSaveUser: function onSaveUser(val) {
      var _this3 = this;

      var data = {
        user_id: val.user_id
      };
      axios.patch("/admin/organizer/".concat(val.slug), data).then(function (response) {
        console.log(response.data);

        _this3.onLoad();
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    onSaveName: function onSaveName(val) {
      var _this4 = this;

      var data = {
        name: val.name
      };
      axios.patch("/admin/organizer/".concat(val.slug), data).then(function (response) {
        console.log(response.data);

        _this4.onLoad();
      })["catch"](function (error) {
        _this4.serverErrors = error.response.data.errors;
      });
    },
    asyncGenerateOrganizerList: function asyncGenerateOrganizerList(query) {
      var _this5 = this;

      axios.get('/api/organizer/search', {
        params: {
          keywords: query
        }
      }).then(function (response) {
        console.log(response.data);
        _this5.organizerList = response.data;
      });
    }
  },
  created: function created() {
    this.onLoad();
  },
  validations: {
    region: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "organizers" },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.organizer,
              expression: "organizer"
            }
          ],
          staticClass: "general",
          attrs: { placeholder: "Filter by organization name", type: "text" },
          domProps: { value: _vm.organizer },
          on: {
            keyup: function($event) {
              return _vm.asyncGenerateOrganizerList(_vm.organizer)
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.organizer = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _vm._l(_vm.organizers, function(organizer, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: organizer.name,
                expression: "organizer.name"
              }
            ],
            attrs: { type: "text", placeholder: "Organization" },
            domProps: { value: organizer.name },
            on: {
              blur: function($event) {
                return _vm.onSaveName(organizer)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(organizer, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: organizer.user_id,
                expression: "organizer.user_id"
              }
            ],
            attrs: { type: "text", placeholder: "Owner Id" },
            domProps: { value: organizer.user_id },
            on: {
              blur: function($event) {
                return _vm.onSaveUser(organizer)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(organizer, "user_id", $event.target.value)
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
                  return _vm.showModal(organizer, "deleteOrg")
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _vm.modal == "deleteOrg"
        ? _c(
            "modal",
            {
              on: {
                close: function($event) {
                  _vm.modal = null
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
                    "You are deleting your " +
                      _vm._s(_vm.selectedModal.name) +
                      " organization."
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
                        return _vm.deleteOrg()
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ]
          )
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", {}, [
      _c("div", { staticClass: "title" }, [_c("h1", [_vm._v("Organizers")])])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/adminArea/admin-organizer.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-organizer.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-organizer.vue?vue&type=template&id=405f0af6& */ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&");
/* harmony import */ var _admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-organizer.vue?vue&type=script&lang=js& */ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/adminArea/admin-organizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-organizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-organizer.vue?vue&type=template&id=405f0af6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/adminArea/admin-organizer.vue?vue&type=template&id=405f0af6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_organizer_vue_vue_type_template_id_405f0af6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);