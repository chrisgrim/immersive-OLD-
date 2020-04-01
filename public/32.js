(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/event-edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    user: {
      type: String
    }
  },
  data: function data() {
    return {
      modal: '',
      selectedModal: '',
      showMore: '',
      organizerEvents: [],
      review: '',
      reviewername: '',
      url: '',
      activeItem: ''
    };
  },
  computed: {
    getUrl: function getUrl(event) {
      return this.events.in_progress_events;
    }
  },
  methods: {
    //deletes a ticket row or clears the first one
    deleteRow: function deleteRow(index) {
      var _this = this;

      axios["delete"]("/events/".concat(this.selectedModal.slug)).then(function (response) {
        _this.events = response.data;
        _this.selectedModal = '';
        _this.modal = '';

        _this.loadEvents();
      })["catch"](function (errorResponse) {
        errorResponse.response.data.errors;
      });
    },
    deleteOrg: function deleteOrg(index) {
      var _this2 = this;

      axios["delete"]("/organizer/".concat(this.selectedModal.slug)).then(function (response) {
        _this2.events = response.data;
        _this2.selectedModal = '';
        _this2.modal = '';

        _this2.loadEvents();
      })["catch"](function (errorResponse) {
        errorResponse.response.data.errors;
      });
    },
    submitReview: function submitReview(index) {
      var _this3 = this;

      var data = {
        event: this.selectedModal,
        url: this.url,
        review: this.review,
        reviewername: this.reviewername
      };
      axios.post("/reviewevents", data).then(function (response) {
        _this3.selectedModal = '';
        _this3.modal = '';
      })["catch"](function (errorResponse) {});
    },
    showModal: function showModal(event, arr) {
      this.selectedModal = event;
      this.modal = arr;
    },
    closeModal: function closeModal() {
      this.isModalVisible = false;
    },
    loadEvents: function loadEvents() {
      var _this4 = this;

      axios.get("/create-event/edit/fetch?timestamp=".concat(new Date().getTime())).then(function (response) {
        _this4.organizerEvents = response.data;
      });
    },
    newEvent: function newEvent(organizer) {
      var _this5 = this;

      axios.post("/events", organizer).then(function (response) {
        window.location.href = "/create-event/".concat(response.data.slug, "/title");
      })["catch"](function (error) {
        _this5.serverErrors = error.response.data.errors;
      });
    },
    showOrganizer: function showOrganizer(organizer) {
      window.location.href = "/organizer/".concat(organizer.slug);
    }
  },
  created: function created() {
    this.loadEvents();
  },
  validations: {
    reviewername: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    url: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      url: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["url"]
    },
    review: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["maxLength"])(120)
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "editevents" },
    [
      _vm._l(_vm.organizerEvents, function(organizer, index) {
        return _c("div", [
          _c("div", { staticClass: "section" }, [
            _c("div", { staticClass: "title-block" }, [
              _c(
                "div",
                {
                  staticClass: "image",
                  style: organizer.thumbImagePath
                    ? "background-image:url('/storage/" +
                      organizer.thumbImagePath +
                      "')"
                    : "background:" + organizer.hexColor
                },
                [
                  !organizer.thumbImagePath
                    ? _c("div", { staticClass: "icontext" }, [
                        _c("h2", [_vm._v(_vm._s(organizer.name.charAt(0)))])
                      ])
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "title" }, [
                _vm._v(
                  "\n                        " +
                    _vm._s(organizer.name) +
                    "\n                    "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "buttons" }, [
                _c(
                  "a",
                  { attrs: { href: "/organizer/" + organizer.slug + "/edit" } },
                  [_c("button", { staticClass: "edit" }, [_vm._v("Edit")])]
                ),
                _vm._v(" "),
                !organizer.in_progress_events.length ||
                organizer.past_events.length
                  ? _c(
                      "button",
                      {
                        staticClass: "edit",
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.showModal(organizer, "deleteOrg")
                          }
                        }
                      },
                      [_vm._v("Delete")]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "prev",
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.showOrganizer(organizer)
                      }
                    }
                  },
                  [_vm._v("Preview Organizer")]
                )
              ])
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "listing-details-block" },
              [
                _c(
                  "tabs",
                  [
                    _c(
                      "tab",
                      {
                        staticClass: "tab-events",
                        attrs: {
                          title: "Current Events",
                          active: true,
                          id: "grid"
                        }
                      },
                      [
                        _c(
                          "div",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.newEvent(organizer)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "enew" }, [
                              _c("div", { staticClass: "body" }, [
                                _c("div", { staticClass: "event" }, [
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
                                    _c("p", [_vm._v("Add New Event")])
                                  ])
                                ])
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _vm._l(organizer.in_progress_events, function(
                          event,
                          index
                        ) {
                          return index < 10
                            ? _c(
                                "div",
                                { staticClass: "item" },
                                [
                                  _c("vue-event-edit-listing-item", {
                                    attrs: { user: _vm.user, event: event }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "/events/" + event.slug }
                                    },
                                    [
                                      _c("button", { staticClass: "del" }, [
                                        _vm._v("View")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "button",
                                    {
                                      staticClass: "del",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.showModal(event, "delete")
                                        }
                                      }
                                    },
                                    [_vm._v("Delete")]
                                  ),
                                  _vm._v(" "),
                                  false
                                    ? undefined
                                    : _vm._e()
                                ],
                                1
                              )
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _c(
                          "modal",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.modal == "delete",
                                expression: "modal == 'delete'"
                              }
                            ],
                            on: {
                              close: function($event) {
                                _vm.modal = null
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "header" }, slot: "header" },
                              [
                                _c("div", { staticClass: "circle del" }, [
                                  _c("p", [_vm._v("X")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "body" }, slot: "body" },
                              [
                                _c("h3", [_vm._v("Are you sure?")]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "You are deleting your " +
                                      _vm._s(_vm.selectedModal.name) +
                                      " event."
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "footer" }, slot: "footer" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn del",
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteRow()
                                      }
                                    }
                                  },
                                  [_vm._v("Delete")]
                                )
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "modal",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.modal == "deleteOrg",
                                expression: "modal == 'deleteOrg'"
                              }
                            ],
                            on: {
                              close: function($event) {
                                _vm.modal = null
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "header" }, slot: "header" },
                              [
                                _c("div", { staticClass: "circle del" }, [
                                  _c("p", [_vm._v("X")])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "body" }, slot: "body" },
                              [
                                _c("h3", [_vm._v("Are you sure?")]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(
                                    "You are deleting your " +
                                      _vm._s(_vm.selectedModal.name) +
                                      " event."
                                  )
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "footer" }, slot: "footer" },
                              [
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
                              ]
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "modal",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.modal == "addreview",
                                expression: "modal == 'addreview'"
                              }
                            ],
                            on: {
                              close: function($event) {
                                _vm.modal = null
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "header" }, slot: "header" },
                              [_c("h3", [_vm._v("Add Review")])]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "body" }, slot: "body" },
                              [
                                _c("div", { staticClass: "review" }, [
                                  _c("div", { staticClass: "field" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.reviewername,
                                          expression: "reviewername"
                                        }
                                      ],
                                      class: {
                                        active:
                                          _vm.activeItem == "reviewername",
                                        error: _vm.$v.reviewername.$error
                                      },
                                      attrs: {
                                        type: "text",
                                        placeholder: "Reviewer's name"
                                      },
                                      domProps: { value: _vm.reviewername },
                                      on: {
                                        input: [
                                          function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.reviewername =
                                              $event.target.value
                                          },
                                          function($event) {
                                            return _vm.$v.reviewername.$touch()
                                          }
                                        ],
                                        click: function($event) {
                                          _vm.activeItem = "reviewername"
                                        },
                                        blur: function($event) {
                                          _vm.activeItem = "reviewername"
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.$v.reviewername.$error
                                      ? _c(
                                          "div",
                                          { staticClass: "validation-error" },
                                          [
                                            !_vm.$v.reviewername.required
                                              ? _c(
                                                  "p",
                                                  { staticClass: "error" },
                                                  [
                                                    _vm._v(
                                                      "Please add a title."
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "field" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.url,
                                          expression: "url"
                                        }
                                      ],
                                      class: {
                                        active: _vm.activeItem == "url",
                                        error: _vm.$v.url.$error
                                      },
                                      attrs: {
                                        type: "text",
                                        placeholder: "Link to the review"
                                      },
                                      domProps: { value: _vm.url },
                                      on: {
                                        input: [
                                          function($event) {
                                            if ($event.target.composing) {
                                              return
                                            }
                                            _vm.url = $event.target.value
                                          },
                                          function($event) {
                                            return _vm.$v.url.$touch()
                                          }
                                        ],
                                        click: function($event) {
                                          _vm.activeItem = "url"
                                        },
                                        blur: function($event) {
                                          _vm.activeItem = "url"
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.$v.url.$error
                                      ? _c(
                                          "div",
                                          { staticClass: "validation-error" },
                                          [
                                            !_vm.$v.url.required
                                              ? _c(
                                                  "p",
                                                  { staticClass: "error" },
                                                  [
                                                    _vm._v(
                                                      "Please add a title."
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !_vm.$v.url.url
                                              ? _c(
                                                  "p",
                                                  { staticClass: "error" },
                                                  [
                                                    _vm._v(
                                                      "Must be a url (https://...)"
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      : _vm._e()
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "field" }, [
                                  _c("textarea", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.review,
                                        expression: "review"
                                      }
                                    ],
                                    class: {
                                      active: _vm.activeItem == "review",
                                      error: _vm.$v.review.$error
                                    },
                                    attrs: {
                                      type: "textarea",
                                      rows: "6",
                                      placeholder:
                                        "Review snippet (no longer than 120 characters)"
                                    },
                                    domProps: { value: _vm.review },
                                    on: {
                                      input: [
                                        function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.review = $event.target.value
                                        },
                                        function($event) {
                                          return _vm.$v.review.$touch()
                                        }
                                      ],
                                      click: function($event) {
                                        _vm.activeItem = "review"
                                      },
                                      blur: function($event) {
                                        _vm.activeItem = "review"
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _vm.$v.review.$error
                                    ? _c(
                                        "div",
                                        { staticClass: "validation-error" },
                                        [
                                          !_vm.$v.review.required
                                            ? _c(
                                                "p",
                                                { staticClass: "error" },
                                                [
                                                  _vm._v(
                                                    "Must include review snippet"
                                                  )
                                                ]
                                              )
                                            : _vm._e(),
                                          _vm._v(" "),
                                          !_vm.$v.review.maxLength
                                            ? _c(
                                                "p",
                                                { staticClass: "error" },
                                                [
                                                  _vm._v(
                                                    "The review snippit is too long."
                                                  )
                                                ]
                                              )
                                            : _vm._e()
                                        ]
                                      )
                                    : _vm._e()
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "footer" }, slot: "footer" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn del",
                                    on: {
                                      click: function($event) {
                                        return _vm.submitReview()
                                      }
                                    }
                                  },
                                  [_vm._v("Submit")]
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "tab",
                      {
                        staticClass: "tab-events",
                        attrs: { title: "Past Events", id: "grid" }
                      },
                      [
                        _vm._l(organizer.past_events, function(event, index) {
                          return index < 4
                            ? _c(
                                "div",
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "delete-circle",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.showModal(event)
                                        }
                                      }
                                    },
                                    [_vm._v("X")]
                                  ),
                                  _vm._v(" "),
                                  _c("vue-event-edit-listing-item", {
                                    attrs: {
                                      user: _vm.user,
                                      loadurl: "/events/" + event.slug,
                                      event: event
                                    }
                                  })
                                ],
                                1
                              )
                            : _vm._e()
                        }),
                        _vm._v(" "),
                        _c(
                          "modal",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.modal == "delete",
                                expression: "modal == 'delete'"
                              }
                            ],
                            on: {
                              close: function($event) {
                                _vm.modal = null
                              }
                            }
                          },
                          [
                            _c(
                              "div",
                              { attrs: { slot: "header" }, slot: "header" },
                              [_vm._v("Ready to Delete?")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "body" }, slot: "body" },
                              [
                                _vm._v(
                                  " Are you sure you want to delete event " +
                                    _vm._s(_vm.selectedModal.name)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { attrs: { slot: "footer" }, slot: "footer" },
                              [
                                _c(
                                  "button",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.deleteRow()
                                      }
                                    }
                                  },
                                  [_vm._v("Yes")]
                                )
                              ]
                            )
                          ]
                        )
                      ],
                      2
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      }),
      _vm._v(" "),
      _vm._m(0)
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "newOrg" }, [
        _c("div", { staticClass: "title" }, [
          _c("h1", [_vm._v("Add another organization")]),
          _vm._v(" "),
          _c("div", { staticClass: "add" }, [
            _c("a", { attrs: { href: "/organizer/create" } }, [
              _c("p", [_vm._v("+")])
            ])
          ])
        ])
      ])
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

/***/ "./resources/js/components/events/event-edit.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/events/event-edit.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-edit.vue?vue&type=template&id=60515fd8& */ "./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&");
/* harmony import */ var _event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-edit.vue?vue&type=script&lang=js& */ "./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/events/event-edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/events/event-edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-edit.vue?vue&type=template&id=60515fd8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/events/event-edit.vue?vue&type=template&id=60515fd8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_edit_vue_vue_type_template_id_60515fd8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);