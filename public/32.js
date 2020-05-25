(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/description.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/description.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['event', 'loadtags'],
  computed: {
    endpoint: function endpoint() {
      return "/create-event/".concat(this.event.slug, "/description");
    }
  },
  data: function data() {
    return {
      group: this.initializeSubmitObject(),
      tagName: this.event.genres ? this.event.genres : '',
      tagOptions: this.loadtags,
      disabled: false,
      serverErrors: [],
      active: null
    };
  },
  methods: {
    initializeSubmitObject: function initializeSubmitObject() {
      return {
        description: this.event.description ? this.event.description : '',
        websiteUrl: this.event.websiteUrl ? this.event.websiteUrl : '',
        ticketUrl: this.event.ticketUrl ? this.event.ticketUrl : '',
        genre: this.event.genres ? this.event.genres.map(function (a) {
          return a.genre;
        }) : ''
      };
    },
    onSubmit: function onSubmit(value) {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.patch(this.endpoint, this.group).then(function (res) {
        value == 'exit' ? _this.onBackInitial() : _this.onForward('advisories');
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    },
    onToggle: function onToggle(arr) {
      this.active = arr;
      this.serverErrors = [];
    },
    addTag: function addTag(newTag) {
      var tag = {
        genre: newTag,
        id: newTag.substring(0, 0) + Math.floor(Math.random() * 10000000)
      };
      this.tagOptions.push(tag);
      this.tagName.push(tag);
    },
    onLoad: function onLoad() {
      var _this2 = this;

      axios.get(this.onFetch('description')).then(function (res) {
        res.data.event ? _this2.group.description = res.data.event.description : '';
        res.data.event ? _this2.group.websiteUrl = res.data.event.websiteUrl : '';
        res.data.event ? _this2.group.ticketUrl = res.data.event.ticketUrl : '';
        res.data.genres ? _this2.group.genre = res.data.genres.map(function (a) {
          return a.genre;
        }) : '';
      });
    }
  },
  created: function created() {
    this.onLoad();
  },
  watch: {
    tagName: function tagName() {
      return this.group.genre = this.tagName.map(function (a) {
        return a.genre;
      });
    }
  },
  validations: {
    tagName: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
    },
    group: {
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
      },
      websiteUrl: {
        url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["url"],
        webNotWorking: function webNotWorking() {
          return this.websiteUrl ? !this.hasServerError('broken') : true;
        }
      },
      ticketUrl: {
        url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["url"],
        ticketNotWorking: function ticketNotWorking() {
          return this.ticketUrl ? !this.hasServerError('broken') : true;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/description.vue?vue&type=template&id=bb041fdc&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/description.vue?vue&type=template&id=bb041fdc& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "event-create__description grid" }, [
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
              value: _vm.group.description,
              expression: "group.description"
            }
          ],
          class: {
            active: _vm.active == "description",
            error: _vm.$v.group.description.$error
          },
          attrs: {
            type: "text",
            name: "description",
            placeholder:
              "eg. Our super scary event will bring your fears to the surface...",
            rows: "8"
          },
          domProps: { value: _vm.group.description },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.group, "description", $event.target.value)
              },
              _vm.$v.group.description.$touch
            ],
            click: function($event) {
              _vm.active = "description"
            },
            blur: function($event) {
              _vm.active = null
            }
          }
        }),
        _vm._v(" "),
        _vm.$v.group.description.$error
          ? _c("div", { staticClass: "validation-error" }, [
              !_vm.$v.group.description.required
                ? _c("p", { staticClass: "error" }, [
                    _vm._v("Must provide a description")
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", [_vm._v("Event website (optional)")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.group.websiteUrl,
              expression: "group.websiteUrl"
            }
          ],
          class: {
            active: _vm.active == "website",
            error: _vm.$v.group.websiteUrl.$error
          },
          attrs: {
            type: "text",
            placeholder: "Leave blank if using organizer website url"
          },
          domProps: { value: _vm.group.websiteUrl },
          on: {
            click: function($event) {
              return _vm.onToggle("website")
            },
            blur: function($event) {
              _vm.active = null
            },
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.group, "websiteUrl", $event.target.value)
              },
              _vm.$v.group.websiteUrl.$touch
            ]
          }
        }),
        _vm._v(" "),
        _vm.$v.group.websiteUrl.$error
          ? _c("div", { staticClass: "validation-error" }, [
              !_vm.$v.group.websiteUrl.url
                ? _c("p", { staticClass: "error" }, [
                    _vm._v("Must be a url (https://...)")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$v.group.websiteUrl.webNotWorking
                ? _c("p", { staticClass: "error" }, [
                    _vm._v("One of your urls isn't working")
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "field" }, [
        _c("label", [_vm._v("Ticket website (optional)")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.group.ticketUrl,
              expression: "group.ticketUrl"
            }
          ],
          class: {
            active: _vm.active == "ticket",
            error: _vm.$v.group.ticketUrl.$error
          },
          attrs: {
            type: "text",
            placeholder: "Leave blank if using organizer website url"
          },
          domProps: { value: _vm.group.ticketUrl },
          on: {
            click: function($event) {
              return _vm.onToggle("ticket")
            },
            blur: function($event) {
              _vm.active = null
            },
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.group, "ticketUrl", $event.target.value)
              },
              _vm.$v.group.ticketUrl.$touch
            ]
          }
        }),
        _vm._v(" "),
        _vm.$v.group.ticketUrl.$error
          ? _c("div", { staticClass: "validation-error" }, [
              !_vm.$v.group.ticketUrl.url
                ? _c("p", { staticClass: "error" }, [
                    _vm._v(" Must be a url (https://...)")
                  ])
                : _vm._e(),
              _vm._v(" "),
              !_vm.$v.group.ticketUrl.ticketNotWorking
                ? _c("p", { staticClass: "error" }, [
                    _vm._v("One of your urls isn't working")
                  ])
                : _vm._e()
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("section", [
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "field" },
        [
          _c("label", [
            _vm._v(
              "Type in or select all show tags. We use these to help people find your event!"
            )
          ]),
          _vm._v(" "),
          _c("multiselect", {
            class: {
              active: _vm.active == "genre",
              error: _vm.$v.tagName.$error
            },
            attrs: {
              "tag-placeholder": "Add this as new tag",
              placeholder: "Type here to create your own",
              label: "genre",
              "close-on-select": true,
              "track-by": "id",
              options: _vm.tagOptions,
              multiple: true,
              taggable: true,
              "tag-position": "bottom"
            },
            on: {
              tag: _vm.addTag,
              input: _vm.$v.tagName.$touch,
              click: function($event) {
                _vm.active = "genre"
              },
              blur: function($event) {
                _vm.active = null
              }
            },
            model: {
              value: _vm.tagName,
              callback: function($$v) {
                _vm.tagName = $$v
              },
              expression: "tagName"
            }
          }),
          _vm._v(" "),
          _vm.$v.tagName.$error
            ? _c("div", { staticClass: "validation-error" }, [
                !_vm.$v.tagName.required
                  ? _c("p", { staticClass: "error" }, [
                      _vm._v("Must select at least one Tag")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "event-create__submit-button" }, [
      _c(
        "button",
        {
          staticClass: "nav-back-button",
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.onSubmit("exit")
            }
          }
        },
        [_vm._v(" Save and Exit ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "create-button__back" }, [
      _c(
        "button",
        {
          staticClass: "create",
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.onBack("shows")
            }
          }
        },
        [_vm._v(" Back ")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "create-button__forward" }, [
      _c(
        "button",
        {
          staticClass: "create",
          attrs: { disabled: _vm.disabled },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.onSubmit()
            }
          }
        },
        [_vm._v(" Save and continue ")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h2", [_vm._v("Description")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "tag-title" }, [
      _c("h3", [_vm._v("Event Tags")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/mixins/form-validation-mixin.js":
/*!******************************************************!*\
  !*** ./resources/js/mixins/form-validation-mixin.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    checkVuelidate: function checkVuelidate() {
      this.$v.$touch();
      !this.$v.$invalid ? this.disabled = true : false;
      return this.$v.$invalid;
    },
    onErrors: function onErrors(err) {
      err ? this.serverErrors = err.response.data.errors : '';
      this.disabled = false;
    },
    onBackInitial: function onBackInitial() {
      return window.location.href = "/create-event/edit/";
    },
    onBack: function onBack(value) {
      return window.location.href = "/create-event/".concat(this.event.slug, "/").concat(value);
    },
    onFetch: function onFetch(value) {
      return "/create-event/".concat(this.event.slug, "/").concat(value, "/fetch?timestamp=").concat(new Date().getTime());
    },
    onForward: function onForward(value) {
      return window.location.href = "/create-event/".concat(this.event.slug, "/").concat(value);
    },
    onRegistered: function onRegistered() {
      return window.location.href = '/email/verify';
    },
    onFinishOrganizer: function onFinishOrganizer(value) {
      return window.location.href = value;
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/create/description.vue":
/*!***************************************************!*\
  !*** ./resources/js/pages/create/description.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_vue_vue_type_template_id_bb041fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./description.vue?vue&type=template&id=bb041fdc& */ "./resources/js/pages/create/description.vue?vue&type=template&id=bb041fdc&");
/* harmony import */ var _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./description.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _description_vue_vue_type_template_id_bb041fdc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _description_vue_vue_type_template_id_bb041fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/description.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/description.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/create/description.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/description.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/description.vue?vue&type=template&id=bb041fdc&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/create/description.vue?vue&type=template&id=bb041fdc& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_bb041fdc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./description.vue?vue&type=template&id=bb041fdc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/description.vue?vue&type=template&id=bb041fdc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_bb041fdc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_template_id_bb041fdc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);