(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/organizer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/organizer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_image_upload_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/image-upload.vue */ "./resources/js/pages/layouts/image-upload.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/loading.vue */ "./resources/js/pages/layouts/loading.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: ['user', 'loadorganizer'],
  components: {
    ImageUpload: _layouts_image_upload_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_2___default.a,
    CubeSpinner: _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    hasImage: function hasImage() {
      return this.organizer.largeImagePath || this.imageFile.src ? true : false;
    },
    displayImage: function displayImage() {
      return "backgroundImage: url('".concat(this.imageFile.src ? this.imageFile.src : this.loadorganizer ? '/storage/' + this.loadorganizer.largeImagePath : '', "')");
    },
    endPoint: function endPoint() {
      return this.loadorganizer ? "/organizer/".concat(this.loadorganizer.slug, "/patch") : '/organizer';
    }
  },
  data: function data() {
    return {
      organizer: this.loadorganizer ? this.loadorganizer : this.initializeOrganizerObject(),
      active: '',
      serverErrors: [],
      isLoading: false,
      imageFile: '',
      disabled: false,
      approved: this.loadorganizer ? true : false,
      editButton: false,
      modal: false,
      reSubmit: false,
      formData: new FormData()
    };
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
    toggle: function toggle(value) {
      this.active = value;
      this.serverErrors = [];
    },
    onResubmit: function onResubmit() {
      this.resubmit = 'resubmit';
      this.approved = false;
      this.modal = false;
    },
    onImageUpload: function onImageUpload(image) {
      this.imageFile = image;
      this.$v.imageFile.$touch();

      if (this.$v.imageFile.$invalid) {
        return false;
      }

      ;
      this.formData.append('imagePath', this.imageFile.file);
    },
    onSubmit: function onSubmit() {
      var _this = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      this.appendData();
      axios.post(this.endPoint, this.formData).then(function (res) {
        _this.onFinishOrganizer('/create-event/edit');
      })["catch"](function (err) {
        _this.onErrors(err);
      });
    },
    appendData: function appendData() {
      this.imageFile ? this.isLoading = true : '';
      this.formData.append('slug', this.slugify(this.organizer.name));

      for (var field in this.organizer) {
        if (this.organizer[field] !== null) {
          this.formData.append(field, this.organizer[field]);
        }
      }
    },
    onErrors: function onErrors(errors) {
      errors.response.data.message.length ? this.serverErrors = {
        broken: 'Url is broken'
      } : '';
      errors.response.data.errors ? this.serverErrors = errors.response.data.errors : '';
      this.isLoading = false;
      this.dis = false;
    },
    goBack: function goBack() {
      window.location.href = '/create-event/edit';
    },
    //checks to see if passed variable is in the server errors
    hasServerError: function hasServerError(field) {
      return field && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(this, 'serverErrors.' + field) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isEmpty(this.serverErrors[field]);
    },
    slugify: function slugify(text) {
      var ampersand = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'and';
      var a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ';
      var b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh';
      var p = new RegExp(a.split('').join('|'), 'g');
      return text.toString().toLowerCase().replace(/[\s_]+/g, '-').replace(p, function (c) {
        return b.charAt(a.indexOf(c));
      }).replace(/&/g, "-".concat(ampersand, "-")).replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+|-+$/g, '');
    }
  },
  validations: {
    imageFile: {
      fileSize: function fileSize() {
        return this.imageFile ? this.imageFile.file.size < 20971520 : true;
      },
      fileType: function fileType() {
        return this.imageFile ? ['image/jpeg', 'image/png', 'image/gif'].includes(this.imageFile.file.type) : true;
      },
      imageSize: function imageSize() {
        return this.imageFile ? this.imageFile.width > 400 && this.imageFile.height > 400 : true;
      }
    },
    organizer: {
      description: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["maxLength"])(10000)
      },
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["required"],
        serverFailed: function serverFailed() {
          return !this.hasServerError('name');
        }
      },
      website: {
        // required,
        url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_4__["url"],
        // serverFailed : function(){ return !this.hasServerError('website'); },
        notWorking: function notWorking() {
          return !this.hasServerError('broken');
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/image-upload.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/image-upload.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/loading.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/loading.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/organizer.vue?vue&type=template&id=633d1545&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/organizer.vue?vue&type=template&id=633d1545& ***!
  \**************************************************************************************************************************************************************************************************************/
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
      _vm.serverErrors.length
        ? _c("vue-alert", { attrs: { message: "serverErrors" } })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "event-create__organizer" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "event-create__organizer-container grid" },
          [
            _c("section", { staticClass: "event-enter-organization" }, [
              _c("div", { staticClass: "floating-form" }, [
                _vm.approved
                  ? _c(
                      "div",
                      {
                        staticClass: "field",
                        on: {
                          mouseover: function($event) {
                            _vm.editButton = true
                          }
                        }
                      },
                      [
                        _c("p", { staticClass: "name" }, [
                          _vm._v(_vm._s(_vm.organizer.name))
                        ]),
                        _vm._v(" "),
                        _vm.editButton
                          ? _c(
                              "button",
                              {
                                staticClass: "editTitle",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.modal = true
                                  }
                                }
                              },
                              [_vm._v("Edit")]
                            )
                          : _vm._e()
                      ]
                    )
                  : _c("div", { staticClass: "field" }, [
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
                          active: _vm.active == "name",
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
                              _vm.$set(
                                _vm.organizer,
                                "name",
                                $event.target.value
                              )
                            },
                            _vm.$v.organizer.name.$touch
                          ],
                          click: function($event) {
                            return _vm.toggle("name")
                          },
                          blur: function($event) {
                            _vm.active = null
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.organizer.name.$error
                        ? _c("div", { staticClass: "validation-error" }, [
                            !_vm.$v.organizer.name.required
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("The name is required")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.$v.organizer.name.serverFailed
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("The name needs to be unique")
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
                      active: _vm.active == "description",
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
                        _vm.active = "description"
                      },
                      blur: function($event) {
                        _vm.active = null
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.organizer.description.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.organizer.description.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The description is required")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _c("label", [
                    _vm._v("Your organization website (recommended)")
                  ]),
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
                      active: _vm.active == "website",
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
                          _vm.$set(
                            _vm.organizer,
                            "website",
                            $event.target.value
                          )
                        },
                        _vm.$v.organizer.website.$touch
                      ],
                      click: function($event) {
                        return _vm.toggle("website")
                      },
                      blur: function($event) {
                        _vm.active = null
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.organizer.website.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.organizer.website.url
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Must be a url (Needs http://)")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.$v.organizer.website.notWorking
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("The url doesn't seem to be working")
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
                    class: { active: _vm.active == "email" },
                    attrs: { type: "text", name: "email", placeholder: " " },
                    domProps: { value: _vm.organizer.email },
                    on: {
                      click: function($event) {
                        _vm.active = "email"
                      },
                      blur: function($event) {
                        _vm.active = null
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
                    class: { active: _vm.active == "twitter" },
                    attrs: {
                      type: "text",
                      name: "twitterHandle",
                      placeholder: " "
                    },
                    domProps: { value: _vm.organizer.twitterHandle },
                    on: {
                      click: function($event) {
                        _vm.active = "twitter"
                      },
                      blur: function($event) {
                        _vm.active = null
                      },
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
                    class: { active: _vm.active == "facebook" },
                    attrs: {
                      type: "text",
                      name: "facebookHandle",
                      placeholder: " "
                    },
                    domProps: { value: _vm.organizer.facebookHandle },
                    on: {
                      click: function($event) {
                        _vm.active = "facebook"
                      },
                      blur: function($event) {
                        _vm.active = null
                      },
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
                    class: { active: _vm.active == "instagram" },
                    attrs: {
                      type: "text",
                      name: "instagramHandle",
                      placeholder: " "
                    },
                    domProps: { value: _vm.organizer.instagramHandle },
                    on: {
                      click: function($event) {
                        _vm.active = "instagram"
                      },
                      blur: function($event) {
                        _vm.active = null
                      },
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
            _c("section", { staticClass: "event-enter-organization-image" }, [
              _c("div", { staticClass: "add-organzation-image" }, [
                _c("div", { staticClass: "add-organzation-image_loader" }, [
                  _c(
                    "label",
                    { style: _vm.displayImage },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "add-organzation-image__card",
                          class: { over: _vm.hasImage, load: _vm.isLoading }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "add-organzation-image__dotted" },
                            [
                              _c(
                                "div",
                                { staticClass: "add-organzation-image__text" },
                                [
                                  _c("div", [
                                    !_vm.hasImage
                                      ? _c("div", [
                                          _c("h4", [
                                            _vm._v(
                                              "Click to upload organization image (optional)"
                                            )
                                          ]),
                                          _vm._v(" "),
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
                                                      "aria-label":
                                                        "Add an image or video",
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
                                            : _vm._e()
                                        ])
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.hasImage
                                      ? _c("p", [_vm._v("Change Image")])
                                      : _vm._e()
                                  ])
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("image-upload", {
                            on: { loaded: _vm.onImageUpload }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("CubeSpinner", { attrs: { loading: _vm.isLoading } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", [
                    _vm.$v.imageFile.$error
                      ? _c("div", { staticClass: "validation-error" }, [
                          !_vm.$v.imageFile.fileSize
                            ? _c("p", { staticClass: "error" }, [
                                _vm._v("The Image is too large")
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.imageFile.fileType
                            ? _c("p", { staticClass: "error" }, [
                                _vm._v(
                                  "The Image needs to be a JPG, PNG or GIF"
                                )
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          !_vm.$v.imageFile.imageSize
                            ? _c("p", { staticClass: "error" }, [
                                _vm._v(
                                  "The image needs to be at least 400 x 400"
                                )
                              ])
                            : _vm._e()
                        ])
                      : _vm._e()
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _vm.modal
              ? _c(
                  "modal",
                  {
                    on: {
                      close: function($event) {
                        _vm.modal = false
                      }
                    }
                  },
                  [
                    _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                      _c("div", { staticClass: "circle del" }, [
                        _c("p", [_vm._v("?")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { attrs: { slot: "body" }, slot: "body" }, [
                      _c("h3", [_vm._v("Changing the name?")]),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(
                          "Changing the organization name will break any links you have sent out. This is not advised."
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
                              return _vm.onResubmit()
                            }
                          }
                        },
                        [_vm._v("Change Anyways")]
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "create-button__back" }, [
              this.loadorganizer
                ? _c(
                    "button",
                    {
                      staticClass: "create",
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.goBack($event)
                        }
                      }
                    },
                    [_vm._v(" Back ")]
                  )
                : _vm._e()
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
                      return _vm.onSubmit($event)
                    }
                  }
                },
                [_vm._v(" Save Organizer ")]
              )
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h2", [_vm._v("Organizer")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/image-upload.vue?vue&type=template&id=3b0130e2&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/image-upload.vue?vue&type=template&id=3b0130e2& ***!
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
  return _c("input", {
    staticClass: "fileinput",
    attrs: { type: "file", accept: "image/*" },
    on: { change: _vm.onChange }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/loading.vue?vue&type=template&id=7ed0165d&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/loading.vue?vue&type=template&id=7ed0165d& ***!
  \*************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/pages/create/organizer.vue":
/*!*************************************************!*\
  !*** ./resources/js/pages/create/organizer.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _organizer_vue_vue_type_template_id_633d1545___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./organizer.vue?vue&type=template&id=633d1545& */ "./resources/js/pages/create/organizer.vue?vue&type=template&id=633d1545&");
/* harmony import */ var _organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organizer.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _organizer_vue_vue_type_template_id_633d1545___WEBPACK_IMPORTED_MODULE_0__["render"],
  _organizer_vue_vue_type_template_id_633d1545___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/organizer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/organizer.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/create/organizer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./organizer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/organizer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/organizer.vue?vue&type=template&id=633d1545&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/create/organizer.vue?vue&type=template&id=633d1545& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_template_id_633d1545___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./organizer.vue?vue&type=template&id=633d1545& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/organizer.vue?vue&type=template&id=633d1545&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_template_id_633d1545___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_organizer_vue_vue_type_template_id_633d1545___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/layouts/image-upload.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/layouts/image-upload.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_upload_vue_vue_type_template_id_3b0130e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-upload.vue?vue&type=template&id=3b0130e2& */ "./resources/js/pages/layouts/image-upload.vue?vue&type=template&id=3b0130e2&");
/* harmony import */ var _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-upload.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/image-upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _image_upload_vue_vue_type_template_id_3b0130e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _image_upload_vue_vue_type_template_id_3b0130e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/image-upload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/image-upload.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/layouts/image-upload.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./image-upload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/image-upload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/image-upload.vue?vue&type=template&id=3b0130e2&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/layouts/image-upload.vue?vue&type=template&id=3b0130e2& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_template_id_3b0130e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./image-upload.vue?vue&type=template&id=3b0130e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/image-upload.vue?vue&type=template&id=3b0130e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_template_id_3b0130e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_image_upload_vue_vue_type_template_id_3b0130e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/layouts/loading.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/layouts/loading.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loading_vue_vue_type_template_id_7ed0165d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.vue?vue&type=template&id=7ed0165d& */ "./resources/js/pages/layouts/loading.vue?vue&type=template&id=7ed0165d&");
/* harmony import */ var _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loading_vue_vue_type_template_id_7ed0165d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loading_vue_vue_type_template_id_7ed0165d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/loading.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/loading.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/layouts/loading.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/loading.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/loading.vue?vue&type=template&id=7ed0165d&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/layouts/loading.vue?vue&type=template&id=7ed0165d& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7ed0165d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./loading.vue?vue&type=template&id=7ed0165d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/loading.vue?vue&type=template&id=7ed0165d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7ed0165d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_template_id_7ed0165d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);