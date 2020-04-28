(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/description.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/description.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    event: {
      type: Object
    }
  },
  data: function data() {
    return {
      description: '',
      genreName: '',
      options: [],
      websiteUrl: '',
      ticketUrl: '',
      eventUrl: "/create-event/".concat(this.event.slug),
      dis: false,
      genres: [],
      serverErrors: [],
      activeItem: null
    };
  },
  methods: {
    //submit the data to the database adding the genres then load the new page
    submitDescription: function submitDescription() {
      var _this = this;

      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      ;
      this.dis = true;
      var data = {
        'description': this.description,
        'websiteUrl': this.websiteUrl,
        'ticketUrl': this.ticketUrl
      };
      data.genre = this.genreName.map(function (a) {
        return a.genre;
      });
      axios.patch("".concat(this.eventUrl, "/description"), data).then(function (response) {
        console.log(response.data);
        window.location.href = "".concat(_this.eventUrl, "/advisories");
      })["catch"](function (errors) {
        errors.response.data.message.length ? _this.serverErrors = {
          broken: 'Url is broken'
        } : '';
        errors.response.data.errors ? _this.serverErrors = errors.response.data.errors : '';
        _this.dis = false;
      });
    },
    // makes the organizer website field class active and clears any vuelidate server errors 
    toggleWebsite: function toggleWebsite() {
      this.activeItem = 'website';
      this.serverErrors = [];
    },
    toggleTicket: function toggleTicket() {
      this.activeItem = 'ticket';
      this.serverErrors = [];
    },
    // adds new tags in the multi select
    addTag: function addTag(newTag) {
      var tag = {
        genre: newTag,
        id: newTag.substring(0, 0) + Math.floor(Math.random() * 10000000)
      };
      this.options.push(tag);
      this.genreName.push(tag);
    },
    goBack: function goBack() {
      window.location.href = "".concat(this.eventUrl, "/shows");
    },
    hasServerError: function hasServerError(field) {
      return field && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(this, 'serverErrors.' + field) && !lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(this.serverErrors[field]);
    },
    // If there is data in Database it will load from the database
    load: function load() {
      var _this2 = this;

      axios.get("".concat(this.eventUrl, "/description/fetch?timestamp=").concat(new Date().getTime())).then(function (response) {
        console.log(response.data);
        _this2.description = response.data.event.description;
        _this2.websiteUrl = response.data.event.websiteUrl;
        _this2.ticketUrl = response.data.event.ticketUrl;
        _this2.genreName = response.data.pivots;
        _this2.options = response.data.genres;
        _this2.genres = response.data.genres;
      });
    }
  },
  created: function created() {
    this.load();
  },
  validations: {
    genreName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    description: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    websiteUrl: {
      url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["url"],
      webNotWorking: function webNotWorking() {
        return this.websiteUrl ? !this.hasServerError('broken') : true;
      }
    },
    ticketUrl: {
      url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["url"],
      ticketNotWorking: function ticketNotWorking() {
        return this.ticketUrl ? !this.hasServerError('broken') : true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/description.vue?vue&type=template&id=488b6f18&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/description.vue?vue&type=template&id=488b6f18& ***!
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
  return _c(
    "div",
    { staticClass: "event-create__description container grid" },
    [
      _c("section", { staticClass: "event-create" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "area" }, [
            _vm._v(" Describe your event to our readers ")
          ]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.description,
                expression: "description"
              }
            ],
            class: {
              active: _vm.activeItem == "description",
              error: _vm.$v.description.$error
            },
            attrs: {
              type: "text",
              name: "description",
              placeholder:
                "eg. Our super scary event will bring your fears to the surface...",
              rows: "8"
            },
            domProps: { value: _vm.description },
            on: {
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.description = $event.target.value
                },
                _vm.$v.description.$touch
              ],
              click: function($event) {
                _vm.activeItem = "description"
              },
              blur: function($event) {
                _vm.activeItem = null
              }
            }
          }),
          _vm._v(" "),
          _vm.$v.description.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.description.required
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("Must provide a description")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "field" },
          [
            _c("label", [_vm._v("Event genres")]),
            _vm._v(" "),
            _c("multiselect", {
              class: {
                active: _vm.activeItem == "genre",
                error: _vm.$v.genreName.$error
              },
              attrs: {
                "tag-placeholder": "Add this as new tag",
                placeholder: "Type here to create your own",
                label: "genre",
                "close-on-select": true,
                "track-by": "id",
                options: _vm.options,
                multiple: true,
                taggable: true,
                "tag-position": "bottom"
              },
              on: {
                tag: _vm.addTag,
                input: _vm.$v.genreName.$touch,
                click: function($event) {
                  _vm.activeItem = "genre"
                },
                blur: function($event) {
                  _vm.activeItem = null
                }
              },
              model: {
                value: _vm.genreName,
                callback: function($$v) {
                  _vm.genreName = $$v
                },
                expression: "genreName"
              }
            }),
            _vm._v(" "),
            _vm.$v.genreName.$error
              ? _c("div", { staticClass: "validation-error" }, [
                  !_vm.$v.genreName.required
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("Must select at least one Genre")
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", [_vm._v("Event website")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.websiteUrl,
                expression: "websiteUrl"
              }
            ],
            class: {
              active: _vm.activeItem == "website",
              error: _vm.$v.websiteUrl.$error
            },
            attrs: {
              type: "text",
              placeholder: "Leave blank if using Organizer Website Url"
            },
            domProps: { value: _vm.websiteUrl },
            on: {
              click: function($event) {
                return _vm.toggleWebsite()
              },
              blur: function($event) {
                _vm.activeItem = null
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.websiteUrl = $event.target.value
                },
                _vm.$v.websiteUrl.$touch
              ]
            }
          }),
          _vm._v(" "),
          _vm.$v.websiteUrl.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.websiteUrl.url
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("Must be a url (https://...)")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.websiteUrl.webNotWorking
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("One of your urls isn't working")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c("label", [_vm._v("Ticket website")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.ticketUrl,
                expression: "ticketUrl"
              }
            ],
            class: {
              active: _vm.activeItem == "ticket",
              error: _vm.$v.ticketUrl.$error
            },
            attrs: {
              type: "text",
              placeholder: "Leave blank if using Organizer Website Url"
            },
            domProps: { value: _vm.ticketUrl },
            on: {
              click: function($event) {
                return _vm.toggleTicket()
              },
              blur: function($event) {
                _vm.activeItem = null
              },
              input: [
                function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.ticketUrl = $event.target.value
                },
                _vm.$v.ticketUrl.$touch
              ]
            }
          }),
          _vm._v(" "),
          _vm.$v.ticketUrl.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.ticketUrl.url
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v(" Must be a url (https://...)")
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.$v.ticketUrl.ticketNotWorking
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("One of your urls isn't working")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "event-create__submit-button" }, [
          _c(
            "button",
            {
              staticClass: "create",
              attrs: { disabled: _vm.dis },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submitDescription()
                }
              }
            },
            [_vm._v(" Next ")]
          )
        ])
      ]),
      _vm._v(" "),
      _c("section"),
      _vm._v(" "),
      _c("div", { staticClass: "create-button__in-nav" }, [
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.dis },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.goBack()
              }
            }
          },
          [_vm._v(" Back ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.dis },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submitDescription()
              }
            }
          },
          [_vm._v(" Next ")]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h2", [_vm._v("Description")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/create/description.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/create/description.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_vue_vue_type_template_id_488b6f18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description.vue?vue&type=template&id=488b6f18& */ "./resources/js/components/create/description.vue?vue&type=template&id=488b6f18&");
/* harmony import */ var _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.vue?vue&type=script&lang=js& */ "./resources/js/components/create/description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _description_vue_vue_type_template_id_488b6f18___WEBPACK_IMPORTED_MODULE_0__["render"],
  _description_vue_vue_type_template_id_488b6f18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/description.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/description.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/create/description.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/description.vue?vue&type=template&id=488b6f18&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/create/description.vue?vue&type=template&id=488b6f18& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_488b6f18___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=template&id=488b6f18& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/description.vue?vue&type=template&id=488b6f18&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_488b6f18___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_488b6f18___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);