(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-categories.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminArea/admin-categories.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/loading.vue */ "./resources/js/components/layouts/loading.vue");
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
//
//
//
//
//
//
//
//
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
    CubeSpinner: _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      categories: '',
      nameActive: false,
      name: '',
      description: '',
      imageSrc: '',
      finalImage: '',
      isModalVisible: false,
      isEditModalVisible: false,
      modalDelete: '',
      tempCat: '',
      serverErrors: [],
      isLoading: false
    };
  },
  computed: {},
  methods: {
    //check if validation rules have been followed and returns false if not. Then I submit the new name and slug. I then get the response data and pass it to the new window load.
    submitNewCategory: function submitNewCategory() {
      var _this = this;

      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitNewCategory$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.$v.$touch();

              if (!this.$v.$invalid) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", false);

            case 3:
              ;
              this.isLoading = true;
              data = new FormData();
              data.append('imagePath', this.finalImage);
              data.append('name', this.name);
              data.append('description', this.description);
              console.log(data);
              axios.post('/categories', data).then(function (response) {
                console.log(response.data);
                _this.isModalVisible = false;
                _this.name = '';
                _this.description = '';
                _this.imageSrc = '';
                _this.finalImage = '';
                _this.isLoading = false;

                _this.loadCategories();
              })["catch"](function (error) {
                _this.serverErrors = error.response.data.errors;
                _this.isLoading = false;
                _this.isModalVisible = true;
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    },
    deleteCategory: function deleteCategory(category) {
      var _this2 = this;

      axios["delete"]("/categories/".concat(category.slug)).then(function (response) {
        _this2.isEditModalVisible = false;

        _this2.loadCategories();
      })["catch"](function (error) {
        _this2.serverErrors = error.response.data.errors;
      });
    },
    clearInfo: function clearInfo() {
      this.$v.name.$touch;
      this.serverErrors = [];
    },
    loadCategories: function loadCategories() {
      var _this3 = this;

      axios.get('/categories').then(function (response) {
        _this3.categories = response.data;
      })["catch"](function (error) {
        _this3.serverErrors = error.response.data.errors;
      });
    },
    onImageUpload: function onImageUpload(image) {
      this.finalImage = image.file;
      this.finalImage.width = image.width;
      this.finalImage.height = image.height;
      this.$v.finalImage.$touch();

      if (this.$v.finalImage.$invalid) {
        return false;
      }

      ;
      this.imageSrc = image.src;
    },
    onImageEdit: function onImageEdit(image) {
      console.log(image.file);

      if (image.file.size > 20971520) {
        return alert('Image Filesize Too Big');
      }

      ;

      if (!["image/jpeg", "image/png", 'image/gif'].includes(image.file.type)) {
        return alert('Image needs to be jpeg, pgn or gif');
      }

      ;

      if (image.width < 800 || image.height < 800) {
        return alert('Image Proportions Too Small');
      }

      ;
      this.isLoading = true;
      var data = new FormData();
      data.append('imagePath', image.file);
      data.append('_method', 'PATCH');
      axios.post("/categories/".concat(this.tempCat.slug), data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function (response) {
        location.reload();
        console.log(response.data);
      })["catch"](function (error) {
        console.log(error.response.data.errors); // this.serverErrors = error.response.data.errors; 
      });
    },
    showModal: function showModal(category) {
      this.modalDelete = category;
      this.isEditModalVisible = true;
    },
    saveName: function saveName(category) {
      var _this4 = this;

      var data = {
        name: category.name
      };
      axios.patch("/categories/".concat(category.slug), data).then(function (response) {
        console.log(response.data);

        _this4.loadCategories();
      })["catch"](function (error) {
        console.log(error.response.data.errors);
        _this4.serverErrors = error.response.data.errors;
      });
    },
    hasServerError: function hasServerError(field) {
      return field && lodash__WEBPACK_IMPORTED_MODULE_3___default.a.has(this, 'serverErrors.' + field) && !lodash__WEBPACK_IMPORTED_MODULE_3___default.a.isEmpty(this.serverErrors[field]);
    },
    saveDescription: function saveDescription(category) {
      var _this5 = this;

      var data = {
        description: category.description
      };
      axios.patch("/categories/".concat(category.slug), data).then(function (response) {
        console.log(response.data);
      })["catch"](function (error) {
        _this5.serverErrors = error.response.data.errors;
      });
    }
  },
  created: function created() {
    this.loadCategories();
  },
  validations: {
    name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      serverFailed: function serverFailed() {
        return !this.hasServerError('name');
      }
    },
    description: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    },
    finalImage: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"],
      fileSize: function fileSize() {
        return this.finalImage ? this.finalImage.size < 20971520 : true;
      },
      fileType: function fileType() {
        return this.finalImage ? ['image/jpeg', 'image/png', 'image/gif'].includes(this.finalImage.type) : true;
      },
      imageRatio: function imageRatio() {
        return this.finalImage ? this.finalImage.width > 800 && this.finalImage.height > 800 : true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/loading.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    loading: {
      type: Boolean,
      "default": true
    }
  },
  data: function data() {
    return {
      styles: {
        width: this.width + 'px',
        height: this.height + 'px'
      }
    };
  },
  name: "CubeSpinner"
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-categories.vue?vue&type=template&id=37f9a498&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/adminArea/admin-categories.vue?vue&type=template&id=37f9a498& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "categories" },
    [
      _c("div", {}, [
        _c("div", { staticClass: "title" }, [
          _c("h1", [_vm._v("Categories")]),
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
      _vm._l(_vm.categories, function(category, index) {
        return _c("div", { staticClass: "list" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: category.name,
                expression: "category.name"
              }
            ],
            attrs: { type: "text", placeholder: "Category Name" },
            domProps: { value: category.name },
            on: {
              blur: function($event) {
                return _vm.saveName(category)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(category, "name", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: category.description,
                expression: "category.description"
              }
            ],
            attrs: { type: "text", placeholder: "Category Name" },
            domProps: { value: category.description },
            on: {
              blur: function($event) {
                return _vm.saveDescription(category)
              },
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(category, "description", $event.target.value)
              }
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "box",
              style: {
                backgroundImage:
                  "url('/storage/" + category.thumbImagePath + "')"
              }
            },
            [
              _c(
                "label",
                {
                  on: {
                    click: function($event) {
                      _vm.tempCat = category
                    }
                  }
                },
                [
                  _c("image-upload", { on: { loaded: _vm.onImageEdit } }),
                  _vm._v(" "),
                  _c("CubeSpinner", { attrs: { loading: _vm.isLoading } })
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "delete-circle",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.showModal(category)
                }
              }
            },
            [_c("p", [_vm._v("X")])]
          )
        ])
      }),
      _vm._v(" "),
      _c(
        "modal",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.isEditModalVisible,
              expression: "isEditModalVisible"
            }
          ],
          on: {
            close: function($event) {
              _vm.isEditModalVisible = false
            }
          }
        },
        [
          _c("div", { attrs: { slot: "header" }, slot: "header" }, [
            _c("div", { staticClass: "circle del" }, [_c("p", [_vm._v("X")])])
          ]),
          _vm._v(" "),
          _c("div", { attrs: { slot: "body" }, slot: "body" }, [
            _c("h3", [_vm._v("Are you sure?")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "You are deleting your " +
                  _vm._s(_vm.modalDelete.name) +
                  " category."
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
                    return _vm.deleteCategory(_vm.modalDelete)
                  }
                }
              },
              [_vm._v("Delete")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pin" },
        [
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
                { staticClass: "body", attrs: { slot: "body" }, slot: "body" },
                [
                  _c(
                    "label",
                    {
                      style: { backgroundImage: "url('" + _vm.imageSrc + "')" }
                    },
                    [
                      !_vm.imageSrc
                        ? _c("div", { staticClass: "box" }, [
                            _c("div", { staticClass: "in" }, [
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
                              _c("div", [
                                _c("p", [_vm._v("Click here to upload image")]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "Must be at least 720x960 and under 2mb"
                                  )
                                ])
                              ])
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("image-upload", { on: { loaded: _vm.onImageUpload } }),
                      _vm._v(" "),
                      _c("CubeSpinner", { attrs: { loading: _vm.isLoading } }),
                      _vm._v(" "),
                      _vm.$v.finalImage.$error
                        ? _c("div", { staticClass: "validation-error" }, [
                            !_vm.$v.finalImage.required
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Please Add Image ")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$v.finalImage.fileSize
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Image needs to be less than 2mb ")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$v.finalImage.fileType
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Image should be jpg, gif, or png")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$v.finalImage.imageRatio
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Needs to be at least 720 x 960")
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "text" }, [
                    _c("div", { staticClass: "name" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.name,
                            expression: "name"
                          }
                        ],
                        class: { active: _vm.nameActive },
                        attrs: { type: "text", placeholder: "Category Name" },
                        domProps: { value: _vm.name },
                        on: {
                          click: function($event) {
                            _vm.nameActive = true
                          },
                          blur: function($event) {
                            _vm.nameActive = false
                          },
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.name = $event.target.value
                            },
                            _vm.clearInfo
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.name.$error
                        ? _c("div", { staticClass: "validation-error" }, [
                            !_vm.$v.name.required
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Please Add Category Name ")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$v.name.serverFailed
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v(
                                    "This category has already been created"
                                  )
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "desc" }, [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.description,
                            expression: "description"
                          }
                        ],
                        class: { active: _vm.nameActive },
                        attrs: {
                          type: "text",
                          rows: "6",
                          placeholder: "Category Description"
                        },
                        domProps: { value: _vm.description },
                        on: {
                          click: function($event) {
                            _vm.nameActive = true
                          },
                          blur: function($event) {
                            _vm.nameActive = false
                          },
                          input: [
                            function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.description = $event.target.value
                            },
                            _vm.$v.description.$touch
                          ]
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.description.$error
                        ? _c("div", { staticClass: "validation-error" }, [
                            !_vm.$v.description.required
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Please Add Category Description ")
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
                        return _vm.submitNewCategory()
                      }
                    }
                  },
                  [_vm._v("Submit")]
                )
              ])
            ]
          )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _vm.loading
    ? _c("div", { staticClass: "spinner" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "svg",
          { attrs: { xmlns: "http://www.w3.org/2000/svg", version: "1.1" } },
          [
            _c("defs", [
              _c(
                "filter",
                { attrs: { id: "goo" } },
                [
                  _c("feGaussianBlur", {
                    attrs: {
                      in: "SourceGraphic",
                      stdDeviation: "10",
                      result: "blur"
                    }
                  }),
                  _vm._v(" "),
                  _c("feColorMatrix", {
                    attrs: {
                      in: "blur",
                      mode: "matrix",
                      values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                    }
                  })
                ],
                1
              )
            ])
          ]
        )
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "area" }, [
      _c("div", { staticClass: "dot dot-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "dot dot-2" }),
      _vm._v(" "),
      _c("div", { staticClass: "dot dot-3" })
    ])
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

/***/ "./resources/js/components/adminArea/admin-categories.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-categories.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _admin_categories_vue_vue_type_template_id_37f9a498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-categories.vue?vue&type=template&id=37f9a498& */ "./resources/js/components/adminArea/admin-categories.vue?vue&type=template&id=37f9a498&");
/* harmony import */ var _admin_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-categories.vue?vue&type=script&lang=js& */ "./resources/js/components/adminArea/admin-categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _admin_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _admin_categories_vue_vue_type_template_id_37f9a498___WEBPACK_IMPORTED_MODULE_0__["render"],
  _admin_categories_vue_vue_type_template_id_37f9a498___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/adminArea/admin-categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/adminArea/admin-categories.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-categories.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/adminArea/admin-categories.vue?vue&type=template&id=37f9a498&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/adminArea/admin-categories.vue?vue&type=template&id=37f9a498& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_categories_vue_vue_type_template_id_37f9a498___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./admin-categories.vue?vue&type=template&id=37f9a498& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/adminArea/admin-categories.vue?vue&type=template&id=37f9a498&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_categories_vue_vue_type_template_id_37f9a498___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_admin_categories_vue_vue_type_template_id_37f9a498___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/loading.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/loading.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=7cdf693b& */ "./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layouts/loading.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=7cdf693b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/loading.vue?vue&type=template&id=7cdf693b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7cdf693b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);