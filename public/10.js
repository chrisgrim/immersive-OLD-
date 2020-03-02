(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/organizer.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/organizer.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_image_upload_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layouts/image-upload.vue */ "./resources/js/components/layouts/image-upload.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layouts/loading.vue */ "./resources/js/components/layouts/loading.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__);


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ImageUpload: _layouts_image_upload_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_3___default.a,
    CubeSpinner: _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    user: {
      type: Object
    }
  },
  computed: {
    slug: function slug() {
      return this.slugify(this.organizer.name);
    },
    userOwnsOrganization: function userOwnsOrganization() {
      return this.organizer && this.searchModel.user_id == this.user.id ? true : false;
    },
    hasImage: function hasImage() {
      return this.organizerImage || this.imageSrc ? true : false;
    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      searchModel: '',
      tempOrganizer: '',
      organizationImageModel: '',
      organizerImage: '',
      defaultImage: '/storage/website-files/upload-icon.png',
      showSearchField: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(this.searchOptions) ? false : true,
      showFormFields: false,
      organizer: this.initializeOrganizerObject(),
      searchOptions: [this.initializeOrganizerObject()],
      eventUrl: lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.event, 'slug') ? "/create-event/".concat(this.event.slug) : null,
      nameActive: false,
      descriptionActive: false,
      websiteActive: false,
      emailActive: false,
      serverErrors: [],
      isLoading: false,
      finalImage: '',
      imageSrc: ''
    }, _defineProperty(_ref, "isLoading", false), _defineProperty(_ref, "readyToSubmit", false), _defineProperty(_ref, "uploadError", ''), _ref;
  },
  methods: {
    //on page load creates an empty organizer object
    initializeOrganizerObject: function initializeOrganizerObject() {
      return {
        id: '',
        name: '',
        description: '',
        website: '',
        email: '',
        imagePath: '',
        twitterHandle: '',
        facebookHandle: '',
        instagramHandle: '',
        user_id: ''
      };
    },
    // makes the name field class active and clears any vuelidate server errors 
    toggleName: function toggleName() {
      this.nameActive = true;
      this.serverErrors = [];
    },
    // makes the organizer website field class active and clears any vuelidate server errors 
    toggleWebsite: function toggleWebsite() {
      this.websiteActive = true;
      this.serverErrors = [];
    },
    //creates a slug that is sent to be checked by database
    slugify: function slugify(text) {
      var ampersand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';
      var a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ';
      var b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh';
      var p = new RegExp(a.split('').join('|'), 'g');
      return text.toString().toLowerCase().replace(/[\s_]+/g, '-').replace(p, function (c) {
        return b.charAt(a.indexOf(c));
      }).replace(/&/g, "-".concat(ampersand, "-")).replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+|-+$/g, '');
    },
    //checks to see if passed variable is in the server errors
    hasServerError: function hasServerError(field) {
      return field && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this, 'serverErrors.' + field) && !lodash__WEBPACK_IMPORTED_MODULE_1___default.a.isEmpty(this.serverErrors[field]);
    },
    // adds image to the page so user can see it
    //adds file to organizer object for upl
    onImageUpload: function onImageUpload(image) {
      this.finalImage = image.file;
      this.finalImage.width = image.width;
      this.finalImage.height = image.height;
      this.$v.finalImage.$touch();
      console.log(this.finalImage);

      if (this.$v.finalImage.$invalid) {
        return false;
      }

      ;
      this.imageSrc = image.src;
    },
    //checks if validation passes
    //creates a new Form data called params
    //creates a headers variable with correct info
    // adds the organizer fields to formdata
    //adds the slug to the form data
    // submits to database. If statement is for new organizer or if updating organizer
    createOrganizer: function createOrganizer() {
      var _this = this;

      var params, field;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function createOrganizer$(_context) {
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
              this.dis = true;
              params = new FormData();

              for (field in this.organizer) {
                params.append(field, this.organizer[field]);
              }

              params.append('imagePath', this.finalImage);
              params.append('slug', this.slug);
              axios.post('/organizer', params).then(function (response) {
                window.location.href = '/create-event/edit';
              })["catch"](function (errors) {
                console.log(errors);
                _this.uploadError = errors;
                _this.isLoading = false;
                _this.dis = false;
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  },
  validations: {
    finalImage: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
      fileSize: function fileSize() {
        return this.finalImage ? this.finalImage.size < 20971520 : true;
      },
      fileType: function fileType() {
        return this.finalImage ? ['image/jpeg', 'image/png', 'image/gif'].includes(this.finalImage.type) : true;
      },
      imageSize: function imageSize() {
        return this.finalImage ? this.finalImage.width > 600 && this.finalImage.height > 600 : true;
      }
    },
    organizer: {
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["maxLength"])(10000)
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
        serverFailed: function serverFailed() {
          return !this.hasServerError('name');
        }
      },
      website: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["required"],
        url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_5__["url"],
        serverFailed: function serverFailed() {
          return !this.hasServerError('website');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/image-upload.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/image-upload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    onChange: function onChange(e) {
      var _this = this;

      if (!e.target.files.length) return;
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function (e) {
        var src = e.target.result;
        var img = new Image();

        img.onload = function () {
          _this.$emit('loaded', {
            src: src,
            file: file,
            width: img.width,
            height: img.height
          });
        };

        img.onerror = function () {
          _this.$emit('error');
        };

        img.src = src;
      };
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/organizer.vue?vue&type=template&id=27181e27&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/organizer.vue?vue&type=template&id=27181e27& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    [
      _vm.uploadError
        ? _c("vue-alert", { attrs: { message: "uploadError" } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "organizer" }, [
        _c("div", { staticClass: "section" }, [
          _c("div", { staticClass: "text" }, [
            _c("div", { staticClass: "floating-form" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Organization name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.name,
                      expression: "organizer.name"
                    }
                  ],
                  class: {
                    active: _vm.nameActive,
                    error: _vm.$v.organizer.name.$error
                  },
                  attrs: { type: "text", placeholder: " ", name: "name" },
                  domProps: { value: _vm.organizer.name },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.organizer, "name", $event.target.value)
                      },
                      _vm.$v.organizer.name.$touch
                    ],
                    click: function($event) {
                      return _vm.toggleName()
                    },
                    blur: function($event) {
                      _vm.nameActive = false
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.organizer.name.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.organizer.name.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The Name is required")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.organizer.name.serverFailed
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The Name needs to be unique")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Organization description")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.description,
                      expression: "organizer.description"
                    }
                  ],
                  class: {
                    active: _vm.descriptionActive,
                    error: _vm.$v.organizer.description.$error
                  },
                  attrs: {
                    type: "text",
                    name: "description",
                    placeholder: " ",
                    rows: "8"
                  },
                  domProps: { value: _vm.organizer.description },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.organizer,
                          "description",
                          $event.target.value
                        )
                      },
                      _vm.$v.organizer.description.$touch
                    ],
                    click: function($event) {
                      _vm.descriptionActive = true
                    },
                    blur: function($event) {
                      _vm.descriptionActive = false
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.organizer.description.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.organizer.description.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The Description is required")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Your organization website")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.website,
                      expression: "organizer.website"
                    }
                  ],
                  class: {
                    active: _vm.websiteActive,
                    error: _vm.$v.organizer.website.$error
                  },
                  attrs: { type: "url", name: "website", placeholder: " " },
                  domProps: { value: _vm.organizer.website },
                  on: {
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.organizer, "website", $event.target.value)
                      },
                      _vm.$v.organizer.website.$touch
                    ],
                    click: function($event) {
                      return _vm.toggleWebsite()
                    },
                    blur: function($event) {
                      _vm.websiteActive = false
                    }
                  }
                }),
                _vm._v(" "),
                _vm.$v.organizer.website.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.organizer.website.url
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Must be a Url (Needs http://)")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.organizer.website.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The Website is required")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.organizer.website.serverFailed
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("The Website needs to be unique")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Your organization email (optional)")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.email,
                      expression: "organizer.email"
                    }
                  ],
                  class: { active: _vm.websiteActive },
                  attrs: { type: "text", name: "email", placeholder: " " },
                  domProps: { value: _vm.organizer.email },
                  on: {
                    blur: function($event) {
                      _vm.websiteActive = false
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.organizer, "email", $event.target.value)
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Twitter handle (optional)")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.twitterHandle,
                      expression: "organizer.twitterHandle"
                    }
                  ],
                  attrs: {
                    type: "text",
                    name: "twitterHandle",
                    placeholder: " "
                  },
                  domProps: { value: _vm.organizer.twitterHandle },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.organizer,
                        "twitterHandle",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Facebook handle (optional)")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.facebookHandle,
                      expression: "organizer.facebookHandle"
                    }
                  ],
                  attrs: {
                    type: "text",
                    name: "facebookHandle",
                    placeholder: " "
                  },
                  domProps: { value: _vm.organizer.facebookHandle },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.organizer,
                        "facebookHandle",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("Instagram handle (optional)")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.organizer.instagramHandle,
                      expression: "organizer.instagramHandle"
                    }
                  ],
                  attrs: {
                    type: "text",
                    name: "instagramHandle",
                    placeholder: " "
                  },
                  domProps: { value: _vm.organizer.instagramHandle },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.organizer,
                        "instagramHandle",
                        $event.target.value
                      )
                    }
                  }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "image" }, [
            _c("div", { staticClass: "img" }, [
              _c("div", { staticClass: "loader" }, [
                _c(
                  "label",
                  {
                    style: {
                      backgroundImage:
                        "url('" +
                        (_vm.imageSrc ? _vm.imageSrc : _vm.organizerImage) +
                        "')"
                    }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "dash",
                        class: { over: _vm.hasImage, load: _vm.isLoading }
                      },
                      [
                        _c("div", { staticClass: "box" }, [
                          _c("div", { staticClass: "in" }, [
                            !_vm.isLoading
                              ? _c("div", [
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
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", [
                              !_vm.hasImage
                                ? _c("div", [
                                    _c("p", [
                                      _vm._v("Click here to upload image")
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v(
                                        "Please make image at least 600 x 600"
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("p", [
                                      _vm._v("Image needs to be under 20 mb")
                                    ])
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.hasImage
                                ? _c("p", [_vm._v("Change Image")])
                                : _vm._e()
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("image-upload", {
                          on: { loaded: _vm.onImageUpload }
                        }),
                        _vm._v(" "),
                        _c("CubeSpinner", { attrs: { loading: _vm.isLoading } })
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", [
                  _vm.$v.finalImage.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.finalImage.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The Image is required")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.finalImage.fileSize
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The Image is too large")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.finalImage.fileType
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The Image needs to be a JPG, PNG or GIF")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.finalImage.imageSize
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The image needs to be at least 600 x 600")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "inNav" }, [
          _c(
            "button",
            {
              staticClass: "create",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.createOrganizer($event)
                }
              }
            },
            [_vm._v(" Save and create first event ")]
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/image-upload.vue?vue&type=template&id=1688f8c4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/image-upload.vue?vue&type=template&id=1688f8c4& ***!
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
  return _c("input", {
    staticClass: "fileinput",
    attrs: { type: "file", accept: "image/*" },
    on: { change: _vm.onChange }
  })
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

/***/ "./resources/js/components/create/organizer.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/create/organizer.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _organizer_vue_vue_type_template_id_27181e27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organizer.vue?vue&type=template&id=27181e27& */ "./resources/js/components/create/organizer.vue?vue&type=template&id=27181e27&");
/* harmony import */ var _organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizer.vue?vue&type=script&lang=js& */ "./resources/js/components/create/organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _organizer_vue_vue_type_template_id_27181e27___WEBPACK_IMPORTED_MODULE_0__["render"],
  _organizer_vue_vue_type_template_id_27181e27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/organizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/organizer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/create/organizer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./organizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/organizer.vue?vue&type=template&id=27181e27&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/create/organizer.vue?vue&type=template&id=27181e27& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_template_id_27181e27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./organizer.vue?vue&type=template&id=27181e27& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/organizer.vue?vue&type=template&id=27181e27&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_template_id_27181e27___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_template_id_27181e27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/layouts/image-upload.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/layouts/image-upload.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_upload_vue_vue_type_template_id_1688f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-upload.vue?vue&type=template&id=1688f8c4& */ "./resources/js/components/layouts/image-upload.vue?vue&type=template&id=1688f8c4&");
/* harmony import */ var _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-upload.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/image-upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_upload_vue_vue_type_template_id_1688f8c4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_upload_vue_vue_type_template_id_1688f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/image-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/image-upload.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/layouts/image-upload.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./image-upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/image-upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/image-upload.vue?vue&type=template&id=1688f8c4&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/layouts/image-upload.vue?vue&type=template&id=1688f8c4& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_template_id_1688f8c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./image-upload.vue?vue&type=template&id=1688f8c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/image-upload.vue?vue&type=template&id=1688f8c4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_template_id_1688f8c4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_template_id_1688f8c4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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