(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/profile-index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/profile-index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_image_upload_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/image-upload.vue */ "./resources/js/pages/layouts/image-upload.vue");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/loading.vue */ "./resources/js/pages/layouts/loading.vue");
/* harmony import */ var _components_profile_location_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile-location-mixin */ "./resources/js/pages/profile/components/profile-location-mixin.js");
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






/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['loaduser', 'events', 'auth'],
  mixins: [_components_profile_location_mixin__WEBPACK_IMPORTED_MODULE_4__["default"], _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_5__["default"]],
  components: {
    ImageUpload: _layouts_image_upload_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CubeSpinner: _layouts_loading_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  computed: {
    locationPlaceholder: function locationPlaceholder() {
      if (this.location.city) {
        return this.location.city + ', ' + this.location.country;
      }

      if (this.location.region) {
        return this.location.region;
      }

      if (this.location.country) {
        return ' the ' + this.location.country;
      }
    },
    userOwnsPage: function userOwnsPage() {
      return parseFloat(this.auth) == this.loaduser.id ? true : false;
    },
    canEditPage: function canEditPage() {
      return this.userOwnsPage && this.user.email_verified_at;
    },
    submitObject: function submitObject() {
      return {
        name: this.user.name,
        location: this.location,
        email: this.user.email
      };
    },
    endPoint: function endPoint() {
      return "/users/".concat(this.user.id);
    }
  },
  data: function data() {
    return {
      user: this.loaduser,
      avatar: this.loaduser.thumbImagePath ? this.loaduser.thumbImagePath : '',
      location: this.loaduser.location ? this.loaduser.location : this.initializeLocationObject(),
      imageFile: '',
      active: null,
      loading: false,
      serverErrors: [],
      onEditUser: false,
      uploading: false,
      onSent: false,
      disabled: false,
      webp: '',
      formData: new FormData()
    };
  },
  methods: {
    initializeLocationObject: function initializeLocationObject() {
      return {
        street: '',
        city: '',
        region: '',
        country: '',
        postal_code: '',
        hiddenLocation: '',
        hiddenLocationToggle: 0,
        latitude: '',
        longitude: '',
        home: ''
      };
    },
    logout: function logout() {
      axios.post('/logout').then(function (response) {
        if (response.status === 302 || 401) {
          window.location.href = '/';
        } else {// throw error and go to catch block
        }
      })["catch"](function (error) {});
    },
    resend: function resend() {
      var _this = this;

      this.disabled = true;
      axios.post("/email/resend").then(function (response) {
        _this.onSent = true;
        _this.disabled = false;
        console.log(response.data);
      })["catch"](function (errorResponse) {
        console.log(errorResponse.data);
      });
    },
    onImageUpload: function onImageUpload(image) {
      this.imageFile = image;
      this.$v.$touch();

      if (this.$v.$invalid) {
        return false;
      }

      ;
      this.onAddImage();
    },
    onAddImage: function onAddImage() {
      this.onToggle();
      this.formData.append('image', this.imageFile.file);
      this.formData.append('_method', 'PATCH');
      axios.post(this.endPoint, this.formData).then(function (response) {
        location.reload();
      })["catch"](function (err) {
        console.log(err);
      });
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.patch(this.endPoint, this.submitObject).then(function (res) {
        _this2.onEditUser = false;
        _this2.disabled = false;
      })["catch"](function (err) {
        _this2.onErrors(err);
      });
    },
    onToggle: function onToggle() {
      this.uploading = true;
      this.loading = true;
      this.disabled = true;
    },
    canUseWebP: function canUseWebP() {
      var webp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

      if (this.loaduser.thumbImagePath && webp) {
        return this.avatar = this.loaduser.thumbImagePath;
      }

      ;

      if (this.loaduser.thumbImagePath) {
        return this.avatar = "".concat(this.loaduser.thumbImagePath.slice(0, -4), "jpg");
      }
    }
  },
  mounted: function mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(this.$refs.autocomplete, {
      types: ['geocode'] // componentRestrictions: {country: 'us'}

    });
    this.autocomplete.addListener('place_changed', this.setPlace);
    this.canUseWebP();
  },
  validations: {
    imageFile: {
      fileSize: function fileSize() {
        return this.imageFile ? this.imageFile.file.size < 20971520 : true;
      },
      fileType: function fileType() {
        return this.imageFile ? ['image/jpeg', 'image/png', 'image/gif'].includes(this.imageFile.file.type) : true;
      },
      imageRatio: function imageRatio() {
        return this.imageFile ? this.imageFile.width > 500 && this.imageFile.height > 500 : true;
      },
      auth: function auth() {
        return this.auth ? this.auth !== this.user.id : true;
      }
    },
    user: {
      name: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(50),
        auth: function auth() {
          return this.auth ? this.auth !== this.user.id : true;
        }
      },
      email: {
        required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
        email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["email"],
        auth: function auth() {
          return this.auth ? this.auth !== this.user.id : true;
        }
      }
    }
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/profile-index.vue?vue&type=template&id=7945c7a2&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/profile/profile-index.vue?vue&type=template&id=7945c7a2& ***!
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
  return _c("div", { staticClass: "user-profile grid" }, [
    _c("section", { staticClass: "user-profile-image" }, [
      !_vm.canEditPage
        ? _c("div", [
            _vm.avatar
              ? _c("div", [
                  _c("picture", [
                    _c("source", {
                      attrs: {
                        type: "image/webp",
                        srcset: "/storage/" + _vm.avatar
                      }
                    }),
                    _vm._v(" "),
                    _c("img", {
                      staticClass: "user-profile-image",
                      attrs: {
                        src: "/storage/" + _vm.avatar.slice(0, -4) + "jpg",
                        alt: "" + _vm.loaduser.name
                      }
                    })
                  ])
                ])
              : _vm.user.gravatar
              ? _c("div", [
                  _c("picture", [
                    _c("img", {
                      staticClass: "user-profile-image",
                      attrs: {
                        src: _vm.user.gravatar,
                        alt: "" + _vm.loaduser.name
                      }
                    })
                  ])
                ])
              : _c(
                  "div",
                  {
                    staticClass: "user-profile-noimage__text",
                    style: "background:" + _vm.user.hexColor
                  },
                  [_c("h2", [_vm._v(_vm._s(_vm.loaduser.name.charAt(0)))])]
                )
          ])
        : _c("div", { staticClass: "user-profile-image" }, [
            _vm.avatar
              ? _c(
                  "label",
                  {
                    staticClass: "user-profile-image__wrapper",
                    class: {
                      imageloaded: _vm.avatar,
                      imageloading: _vm.uploading
                    },
                    style: "background:url('/storage/" + _vm.avatar + "')"
                  },
                  [
                    _c("image-upload", { on: { loaded: _vm.onImageUpload } }),
                    _vm._v(" "),
                    _c("CubeSpinner", { attrs: { loading: _vm.loading } }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "user-profile-image__update-text" },
                      [
                        _vm.uploading
                          ? _c("p", [_vm._v("Loading")])
                          : _c("p", [_vm._v("Update")])
                      ]
                    )
                  ],
                  1
                )
              : _vm.user.gravatar
              ? _c(
                  "label",
                  {
                    staticClass: "user-profile-image__wrapper",
                    class: {
                      imageloaded: _vm.avatar,
                      imageloading: _vm.uploading
                    },
                    style:
                      "background:url('" +
                      _vm.user.gravatar +
                      "')center no-repeat;background-size: cover;"
                  },
                  [
                    _c("image-upload", { on: { loaded: _vm.onImageUpload } }),
                    _vm._v(" "),
                    _c("CubeSpinner", { attrs: { loading: _vm.loading } }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "user-profile-image__update-text" },
                      [
                        _vm.uploading
                          ? _c("p", [_vm._v("Loading")])
                          : _c("p", [_vm._v("Update")])
                      ]
                    )
                  ],
                  1
                )
              : _c("div", { staticClass: "user-profile-image" }, [
                  _c(
                    "div",
                    {
                      staticClass: "user-profile-noimage__text",
                      style: "background:" + _vm.user.hexColor
                    },
                    [_c("h2", [_vm._v(_vm._s(_vm.loaduser.name.charAt(0)))])]
                  ),
                  _vm._v(" "),
                  _c(
                    "label",
                    {
                      staticClass: "profile-wrapper",
                      class: {
                        imageloaded: _vm.avatar,
                        imageloading: _vm.uploading
                      }
                    },
                    [
                      _c("image-upload", { on: { loaded: _vm.onImageUpload } }),
                      _vm._v(" "),
                      _c("CubeSpinner", { attrs: { loading: _vm.loading } }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "user-profile-image__update-text" },
                        [
                          _vm.uploading
                            ? _c("p", [_vm._v("Loading")])
                            : _c("p", [_vm._v("Update")])
                        ]
                      )
                    ],
                    1
                  )
                ]),
            _vm._v(" "),
            _vm.$v.imageFile.$error
              ? _c("div", { staticClass: "validation-error" }, [
                  !_vm.$v.imageFile.fileSize
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("Image size is over 20MB")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.imageFile.fileType
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("Needs to be a Jpg, Png or Gif")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.imageFile.imageRatio
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("Needs to be at least 400 x 400")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.$v.imageFile.auth
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("you don't have permission to edit")
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "user-enter-profile" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.onEditUser,
              expression: "onEditUser"
            }
          ]
        },
        [
          _c("div", { staticClass: "field" }, [
            _c("div", { staticClass: "text" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v("User Name")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.name,
                      expression: "user.name"
                    }
                  ],
                  class: {
                    active: _vm.active == "user",
                    error: _vm.$v.user.name.$error
                  },
                  attrs: { type: "text" },
                  domProps: { value: _vm.user.name },
                  on: {
                    click: function($event) {
                      _vm.active = "website"
                    },
                    blur: function($event) {
                      _vm.active = null
                    },
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "name", $event.target.value)
                      },
                      _vm.$v.user.name.$touch
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.user.name.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.user.name.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Must have a name")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.user.name.maxLength
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Can't be more than 50 characters")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.user.name.auth
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("You don't have permission to edit")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Location ")]),
                _vm._v(" "),
                _c("input", {
                  ref: "autocomplete",
                  class: { active: _vm.active == "location" },
                  attrs: {
                    placeholder: _vm.locationPlaceholder
                      ? _vm.locationPlaceholder
                      : "Choose your location",
                    autocomplete: "false",
                    onfocus: "value = ''",
                    type: "text"
                  },
                  on: {
                    click: function($event) {
                      _vm.active = "location"
                    },
                    blur: function($event) {
                      _vm.active = null
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Email ")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.email,
                      expression: "user.email"
                    }
                  ],
                  class: {
                    active: _vm.active == "email",
                    error: _vm.$v.user.email.$error
                  },
                  attrs: { type: "email" },
                  domProps: { value: _vm.user.email },
                  on: {
                    click: function($event) {
                      _vm.active = "email"
                    },
                    blur: function($event) {
                      _vm.active = null
                    },
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.user, "email", $event.target.value)
                      },
                      _vm.$v.user.email.$touch
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.user.email.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.user.email.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Must have an email")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.user.email.email
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Must be a valid email")
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.user.email.auth
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("You don't have permission to edit")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _c(
                  "button",
                  {
                    staticClass: "save",
                    attrs: { disabled: _vm.disabled },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.onSubmit()
                      }
                    }
                  },
                  [_vm._v(" Save ")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "cancel",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        _vm.onEditUser = false
                      }
                    }
                  },
                  [_vm._v(" Cancel ")]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.onEditUser,
              expression: "!onEditUser"
            }
          ]
        },
        [
          _c("div", { staticClass: "profile-user-name" }, [
            _c("h1", [_vm._v(_vm._s(_vm.user.name))])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "info" }, [
            _c("div", { staticClass: "profile-user-info" }, [
              _vm._v(
                "\n                    Member since " +
                  _vm._s(
                    _vm._f("dateFormat")(new Date(_vm.user.created_at), "YYYY")
                  ) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _vm.canEditPage
              ? _c(
                  "div",
                  {
                    staticClass: "profile-user-edit",
                    on: {
                      click: function($event) {
                        _vm.onEditUser = true
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    Edit profile\n                "
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.userOwnsPage && !_vm.user.email_verified_at && !_vm.onSent
              ? _c(
                  "button",
                  {
                    staticClass: "verify-email",
                    attrs: { disabled: _vm.disabled },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.resend($event)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    Please verify your account.\n                "
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.userOwnsPage && !_vm.user.email_verified_at && _vm.onSent
              ? _c("div", { staticClass: "ver a" }, [
                  _vm._v(
                    "\n                    Please check your email.\n                "
                  )
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.location.latitude
            ? _c("div", { staticClass: "profile-user-info" }, [
                _c("div", [
                  _vm._v("\n                    Lives near "),
                  _c(
                    "span",
                    { staticStyle: { "font-weight": "600", color: "#616161" } },
                    [_vm._v(_vm._s(_vm.locationPlaceholder))]
                  )
                ])
              ])
            : _vm._e()
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "logout mobile" }, [
        _c(
          "button",
          {
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.logout()
              }
            }
          },
          [_vm._v("Log out")]
        )
      ])
    ])
  ])
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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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



/***/ }),

/***/ "./resources/js/pages/profile/components/profile-location-mixin.js":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/profile/components/profile-location-mixin.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    setPlace: function setPlace() {
      var place = this.autocomplete.getPlace();
      this.updateLats(place);
      this.getAddressObject(place.address_components);
    },
    updateLats: function updateLats(e) {
      this.location.latitude = e.geometry.location.lat();
      this.location.longitude = e.geometry.location.lng();
    },
    getAddressObject: function getAddressObject(address_components) {
      var ShouldBeComponent = {
        // home: ["street_number"],
        postal_code: ["postal_code"],
        // street: ["street_address", "route"],
        region: ["administrative_area_level_1", "administrative_area_level_2", "administrative_area_level_3", "administrative_area_level_4", "administrative_area_level_5"],
        city: ["locality", "sublocality", "sublocality_level_1", "sublocality_level_2", "sublocality_level_3", "sublocality_level_4"],
        country: ["country"]
      };
      var address = {
        // home: "",
        postal_code: "",
        // street: "",
        region: "",
        city: "",
        country: ""
      };
      address_components.forEach(function (component) {
        for (var shouldBe in ShouldBeComponent) {
          if (ShouldBeComponent[shouldBe].indexOf(component.types[0]) !== -1) {
            if (shouldBe === "country") {
              address[shouldBe] = component.short_name;
            } else {
              address[shouldBe] = component.long_name;
            }
          }
        }
      });
      this.updateLocationFields(address);
    },
    //after google fields search this inputs data into vue fields
    updateLocationFields: function updateLocationFields(input) {
      if (input !== null && _typeof(input) === "object" && input.id !== null) {
        this.location = _.extend(this.location, input);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/pages/profile/profile-index.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/profile/profile-index.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_index_vue_vue_type_template_id_7945c7a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-index.vue?vue&type=template&id=7945c7a2& */ "./resources/js/pages/profile/profile-index.vue?vue&type=template&id=7945c7a2&");
/* harmony import */ var _profile_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-index.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/profile-index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_index_vue_vue_type_template_id_7945c7a2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _profile_index_vue_vue_type_template_id_7945c7a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/profile-index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/profile-index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/profile/profile-index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile-index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/profile-index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/profile-index.vue?vue&type=template&id=7945c7a2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/profile/profile-index.vue?vue&type=template&id=7945c7a2& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_index_vue_vue_type_template_id_7945c7a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./profile-index.vue?vue&type=template&id=7945c7a2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/profile/profile-index.vue?vue&type=template&id=7945c7a2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_index_vue_vue_type_template_id_7945c7a2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_index_vue_vue_type_template_id_7945c7a2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);