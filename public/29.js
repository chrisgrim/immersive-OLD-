(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/messages/message-show.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/messages/message-show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['loaduser', 'loadmessages'],
  components: {},
  computed: {
    conversationType: function conversationType() {
      return this.conversations.messages.length ? this.conversations.messages : this.conversations.modmessages;
    },
    isResponder: function isResponder() {
      var _this = this;

      return function (message) {
        return message.user_id !== _this.loaduser.id ? true : false;
      };
    },
    isMessage: function isMessage() {
      return this.conversations.messages.length ? true : false;
    },
    endpoint: function endpoint() {
      return "/conversations/".concat(this.conversations.id);
    },
    submitObject: function submitObject() {
      return {
        message: this.message,
        type: this.isMessage ? 'message' : 'event'
      };
    }
  },
  data: function data() {
    return {
      user: this.loaduser ? this.loaduser : '',
      conversations: this.loadmessages ? this.loadmessages : '',
      message: '',
      owner: '',
      responder: '',
      disabled: false,
      avatar: this.loaduser.thumbImagePath ? "/storage/".concat(this.loaduser.thumbImagePath) : ''
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this2 = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.post(this.endpoint, this.submitObject).then(function (res) {
        location.reload();
        console.log(res.data);
      })["catch"](function (err) {
        _this2.onErrors(err);
      });
    },
    getOwner: function getOwner() {
      var _this3 = this;

      console.log(this.loadmessages);
      this.loadmessages.users.forEach(function (user) {
        user.id == _this3.loaduser.id ? _this3.owner = user : '';
        user.id !== _this3.loaduser.id ? _this3.responder = user : '';
      });
    }
  },
  mounted: function mounted() {
    this.getOwner();
  },
  validations: {
    message: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_1__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/messages/message-show.vue?vue&type=template&id=edc84766&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/messages/message-show.vue?vue&type=template&id=edc84766& ***!
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
  return _c("div", [
    _c("div", { staticClass: "messages-show" }, [
      _c("nav", { staticClass: "account-notifications_header desktop" }, [
        _c("div", { staticClass: "account-notifications_breadcrumbs" }, [
          _c("a", { attrs: { href: "/messages" } }, [_vm._v("Inbox")]),
          _vm._v(" > \n                "),
          _vm.isMessage
            ? _c("span", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.responder.name) +
                    "\n                "
                )
              ])
            : _c("span", [
                _vm._v(
                  "\n                    " +
                    _vm._s(_vm.conversations.modmessages[0].event.name) +
                    "\n                "
                )
              ])
        ])
      ]),
      _vm._v(" "),
      _c("nav", { staticClass: "event-show mobile" }, [
        _c("div", { staticClass: "back" }, [
          _c("a", { attrs: { href: "/messages" } }, [
            _c(
              "svg",
              {
                staticStyle: {
                  display: "block",
                  fill: "none",
                  height: "16px",
                  width: "16px",
                  stroke: "currentcolor",
                  "stroke-width": "4",
                  overflow: "visible"
                },
                attrs: {
                  "aria-label": "Back",
                  role: "img",
                  viewBox: "0 0 32 32",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("g", { attrs: { fill: "none" } }, [
                  _c("path", {
                    attrs: {
                      d:
                        "m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"
                    }
                  })
                ])
              ]
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "messages-show-content grid",
          class: { single: _vm.isMessage }
        },
        [
          !_vm.isMessage
            ? _c("div", [
                _c("div", { staticClass: "messages-show-event" }, [
                  _c("div", { staticClass: "messages-show-event__image" }, [
                    _c("picture", [
                      _c("source", {
                        attrs: {
                          type: "image/webp",
                          srcset:
                            "/storage/" +
                            _vm.conversations.modmessages[0].event
                              .thumbImagePath
                        }
                      }),
                      _vm._v(" "),
                      _c("img", {
                        attrs: {
                          src:
                            "/storage/" +
                            _vm.conversations.modmessages[0].event.thumbImagePath.slice(
                              0,
                              -4
                            ) +
                            "jpg",
                          alt: _vm.user.name + "'s account"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "messages-show-event__title" }, [
                    _c("h3", [
                      _vm._v(
                        _vm._s(_vm.conversations.modmessages[0].event.name)
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("div", { staticClass: "messages-show__element grid submit" }, [
                _c("div", { staticClass: "field" }, [
                  _c(
                    "div",
                    { staticClass: "messages-show__element-textarea" },
                    [
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.message,
                            expression: "message"
                          }
                        ],
                        attrs: { type: "text", rows: "4" },
                        domProps: { value: _vm.message },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.message = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.$v.message.$error
                        ? _c("div", { staticClass: "validation-error" }, [
                            !_vm.$v.message.required
                              ? _c("p", { staticClass: "error" }, [
                                  _vm._v("Please write something.")
                                ])
                              : _vm._e()
                          ])
                        : _vm._e()
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "messages-show__submit-bottom" }, [
                    _c(
                      "button",
                      {
                        class: { bspin: _vm.disabled },
                        attrs: { disabled: _vm.disabled },
                        on: { click: _vm.onSubmit }
                      },
                      [_vm._v("Send message")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    {
                      staticClass: "message-index__image",
                      style: "background:" + _vm.owner.hexColor
                    },
                    [
                      _vm.owner.largeImagePath
                        ? _c("label", { staticClass: "profile-image" }, [
                            _c("picture", [
                              _c("source", {
                                attrs: {
                                  type: "image/webp",
                                  srcset: "/storage/" + _vm.owner.thumbImagePath
                                }
                              }),
                              _vm._v(" "),
                              _c("img", {
                                attrs: {
                                  src:
                                    "/storage/" +
                                    _vm.owner.thumbImagePath.slice(0, -4) +
                                    "jpg",
                                  alt: _vm.owner.name + "'s account"
                                }
                              })
                            ])
                          ])
                        : _vm.owner.gravatar
                        ? _c("div", { staticClass: "profile-image" }, [
                            _c("img", {
                              attrs: {
                                src: _vm.owner.gravatar,
                                alt: _vm.owner.name + "'s account"
                              }
                            })
                          ])
                        : _c(
                            "div",
                            { staticClass: "message-index__user-noimage" },
                            [
                              _c("h2", [
                                _vm._v(
                                  _vm._s(
                                    _vm.owner ? _vm.owner.name.charAt(0) : ""
                                  )
                                )
                              ])
                            ]
                          )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "message-show__username" }, [
                    _vm._v(
                      "\n                            " +
                        _vm._s(_vm.owner.name) +
                        "\n                        "
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.conversationType, function(message) {
                return message.user_id == _vm.loaduser.id
                  ? _c("div", { staticClass: "messages-show__element grid" }, [
                      _c("div", { staticClass: "field" }, [
                        _c(
                          "div",
                          { staticClass: "messages-show__element-textarea" },
                          [
                            _c("div", [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    message.message
                                      ? message.message
                                      : message.comments
                                  ) +
                                  "\n                            "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "messages-show__element-date" },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      _vm._f("dateFormat")(
                                        new Date(message.created_at),
                                        "MMM DD, YYYY"
                                      )
                                    ) +
                                    "\n                            "
                                )
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "messages-show__element-image" },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "message-index__image",
                              style: "background:" + _vm.owner.hexColor
                            },
                            [
                              _vm.owner.largeImagePath
                                ? _c(
                                    "label",
                                    { staticClass: "profile-image" },
                                    [
                                      _c("picture", [
                                        _c("source", {
                                          attrs: {
                                            type: "image/webp",
                                            srcset:
                                              "/storage/" +
                                              _vm.owner.thumbImagePath
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("img", {
                                          attrs: {
                                            src:
                                              "/storage/" +
                                              _vm.owner.thumbImagePath.slice(
                                                0,
                                                -4
                                              ) +
                                              "jpg",
                                            alt: _vm.owner.name + "'s account"
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                : _vm.owner.gravatar
                                ? _c("div", { staticClass: "profile-image" }, [
                                    _c("img", {
                                      attrs: {
                                        src: _vm.owner.gravatar,
                                        alt: _vm.owner.name + "'s account"
                                      }
                                    })
                                  ])
                                : _c(
                                    "div",
                                    {
                                      staticClass: "message-index__user-noimage"
                                    },
                                    [
                                      _c("h2", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.owner
                                              ? _vm.owner.name.charAt(0)
                                              : ""
                                          )
                                        )
                                      ])
                                    ]
                                  )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "message-show__username" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(_vm.owner.name) +
                                "\n                            "
                            ),
                            _vm.owner.type == "a"
                              ? _c("b", [_vm._v("admin")])
                              : _vm._e()
                          ])
                        ]
                      )
                    ])
                  : _c(
                      "div",
                      {
                        staticClass: "messages-show__element grid",
                        class: { inv: _vm.isResponder(message) }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "messages-show__element-image" },
                          [
                            _c(
                              "div",
                              {
                                staticClass: "message-index__image",
                                style: "background:" + message.user.hexColor
                              },
                              [
                                message.user.largeImagePath
                                  ? _c(
                                      "label",
                                      { staticClass: "profile-image" },
                                      [
                                        _c("picture", [
                                          _c("source", {
                                            attrs: {
                                              type: "image/webp",
                                              srcset:
                                                "/storage/" +
                                                message.user.thumbImagePath
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("img", {
                                            attrs: {
                                              src:
                                                "/storage/" +
                                                message.user.thumbImagePath.slice(
                                                  0,
                                                  -4
                                                ) +
                                                "jpg",
                                              alt:
                                                message.user.name + "'s account"
                                            }
                                          })
                                        ])
                                      ]
                                    )
                                  : message.user.gravatar
                                  ? _c(
                                      "div",
                                      { staticClass: "profile-image" },
                                      [
                                        _c("img", {
                                          attrs: {
                                            src: message.user.gravatar,
                                            alt:
                                              message.user.name + "'s account"
                                          }
                                        })
                                      ]
                                    )
                                  : _c(
                                      "div",
                                      {
                                        staticClass:
                                          "message-index__user-noimage"
                                      },
                                      [
                                        _c("h2", [
                                          _vm._v(
                                            _vm._s(
                                              message.user
                                                ? message.user.name.charAt(0)
                                                : ""
                                            )
                                          )
                                        ])
                                      ]
                                    )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "message-show__username" },
                              [
                                _vm._v(
                                  "\n                            " +
                                    _vm._s(message.user.name) +
                                    "\n                            "
                                ),
                                message.user.type == "a"
                                  ? _c("b", [_vm._v("admin")])
                                  : _vm._e()
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "field" }, [
                          _c(
                            "div",
                            { staticClass: "messages-show__element-textarea" },
                            [
                              _c("div", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(
                                      message.message
                                        ? message.message
                                        : message.comments
                                    ) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "messages-show__element-date" },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm._f("dateFormat")(
                                          new Date(message.created_at),
                                          "MMM DD, YYYY"
                                        )
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ]
                    )
              })
            ],
            2
          )
        ]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "message-bar-mobile" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.message,
            expression: "message"
          }
        ],
        staticClass: "message-bar__input",
        attrs: { type: "text", placeholder: "Write message here" },
        domProps: { value: _vm.message },
        on: {
          keyup: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.onSubmit($event)
          },
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.message = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "message-bar__submit",
          attrs: { disabled: _vm.disabled },
          on: { click: _vm.onSubmit }
        },
        [
          _c(
            "svg",
            {
              staticClass: "svgbutton",
              class: { disabled: _vm.disabled },
              staticStyle: { height: "24px", width: "24px", display: "block" },
              attrs: {
                role: "presentation",
                "aria-hidden": "true",
                focusable: "false",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }
            },
            [
              _c("circle", { attrs: { cx: "12", cy: "12", r: "12" } }),
              _c("g", { attrs: { "clip-path": "url(#clipeSendIcon33)" } }, [
                _c("path", {
                  attrs: {
                    transform: "scale(1)",
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d:
                      "M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L13 9.41421V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V9.41421L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.2929 6.29289Z",
                    fill: "white"
                  }
                })
              ]),
              _c("defs", [
                _c("clipPath", { attrs: { id: "clipeSendIcon33" } }, [
                  _c("rect", {
                    attrs: {
                      width: "12",
                      height: "12",
                      fill: "white",
                      transform: "translate(6 6)"
                    }
                  })
                ])
              ])
            ]
          )
        ]
      )
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

/***/ "./resources/js/pages/messages/message-show.vue":
/*!******************************************************!*\
  !*** ./resources/js/pages/messages/message-show.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _message_show_vue_vue_type_template_id_edc84766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message-show.vue?vue&type=template&id=edc84766& */ "./resources/js/pages/messages/message-show.vue?vue&type=template&id=edc84766&");
/* harmony import */ var _message_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message-show.vue?vue&type=script&lang=js& */ "./resources/js/pages/messages/message-show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _message_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _message_show_vue_vue_type_template_id_edc84766___WEBPACK_IMPORTED_MODULE_0__["render"],
  _message_show_vue_vue_type_template_id_edc84766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/messages/message-show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/messages/message-show.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/messages/message-show.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/messages/message-show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_message_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/messages/message-show.vue?vue&type=template&id=edc84766&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/messages/message-show.vue?vue&type=template&id=edc84766& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_show_vue_vue_type_template_id_edc84766___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./message-show.vue?vue&type=template&id=edc84766& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/messages/message-show.vue?vue&type=template&id=edc84766&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_show_vue_vue_type_template_id_edc84766___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_message_show_vue_vue_type_template_id_edc84766___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);