(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/nav.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['user', 'onclass'],
  computed: {
    fullmap: function fullmap() {
      return this.$store.state.map ? true : false;
    },
    onClassType: function onClassType() {
      return this.onclass == 'show' || this.onclass == 'message' || this.onclass == 'entry' ? false : true;
    },
    dontShowNav: function dontShowNav() {
      return this.onclass == 'show' || this.onclass == 'favorited' || this.onclass == 'message' || this.onclass == 'profile' || this.onclass == 'messageshow' || this.onclass == 'entry' || this.onclass == 'homepage' || this.onclass == 'onlinesearch' ? false : true;
    },
    dontShowMenu: function dontShowMenu() {
      return this.onclass == 'show' || this.onclass == 'messageshow' ? false : true;
    },
    dontShowNavSearch: function dontShowNavSearch() {
      return this.onclass == 'homepage' || this.onclass == 'onlinesearch' ? false : true;
    }
  },
  data: function data() {
    return {
      bar: true,
      lastScrollPosition: 0,
      mobileDevice: false,
      url: '',
      page: this.onclass
    };
  },
  methods: {
    breadcrumbs: function breadcrumbs() {
      if (new URL(window.location.href).searchParams.get("name")) {
        this.url = "/index/search?name=".concat(new URL(window.location.href).searchParams.get("name"), "&lat=").concat(new URL(window.location.href).searchParams.get("lat"), "&lng=").concat(new URL(window.location.href).searchParams.get("lng"));
      }
    },
    handleScroll: function handleScroll(event) {
      var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollPosition < 100) {
        return this.bar = true;
      }

      if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 60) {
        return;
      }

      this.bar = currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = currentScrollPosition;
    },
    handleResize: function handleResize() {
      window.innerWidth < 768 ? this.mobileDevice = true : false;
      window.innerWidth > 768 ? this.mobileDevice = false : true;
    }
  },
  mounted: function mounted() {
    this.$store.commit('adduser', this.user);
    this.breadcrumbs();
  },
  created: function created() {
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleScroll);
    this.handleResize();
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav.vue?vue&type=template&id=7a9c3f44&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/layouts/nav.vue?vue&type=template&id=7a9c3f44& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    !_vm.mobileDevice
      ? _c("nav", { staticClass: "nav", class: _vm.onclass }, [
          _c(
            "div",
            { staticClass: "nav-grid grid", class: { fullmap: _vm.fullmap } },
            [
              _c(
                "div",
                { staticClass: "nav-logo", class: { active: _vm.bar } },
                [_vm._m(0)]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "nav-search", class: { fullmap: _vm.fullmap } },
                [_vm.dontShowNavSearch ? _c("nav-search") : _vm._e()],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "nav-menu", class: { active: _vm.bar } },
                [
                  _vm.user
                    ? _c(
                        "div",
                        { staticClass: "nav-menu-item" },
                        [
                          _c("profile-button", {
                            attrs: {
                              screenwidth: _vm.mobileDevice,
                              user: _vm.user
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user && !_vm.user.hasCreatedOrganizers
                    ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(1)])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user && _vm.user.hasCreatedOrganizers
                    ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.user && _vm.user.hasMessages
                    ? _c("div", { staticClass: "nav-menu-item" }, [
                        _c(
                          "a",
                          {
                            staticClass: "menu-link",
                            attrs: { href: "/messages" }
                          },
                          [
                            _vm.user.unread
                              ? _c("div", { staticClass: "active-dot" }, [
                                  _c("p")
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            _c("div", [_vm._v("Inbox")])
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.user
                    ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(3)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.user
                    ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(4)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.user
                    ? _c("div", { staticClass: "nav-menu-item" }, [_vm._m(5)])
                    : _vm._e()
                ]
              )
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.mobileDevice && _vm.dontShowNav
      ? _c(
          "nav",
          {
            staticClass: "nav mobile",
            class: {
              fullmap: _vm.fullmap,
              entry: _vm.onclass == "entry",
              show: _vm.onclass == "show",
              message: _vm.onclass == "message",
              messageshow: _vm.onclass == "messageshow"
            }
          },
          [
            _vm.onClassType
              ? _c("div", [
                  _c(
                    "div",
                    { staticClass: "nav-search mobile" },
                    [
                      _vm.onclass
                        ? _c("div", { staticClass: "nav-backarrow" }, [
                            _vm.url && _vm.onclass == "show"
                              ? _c("a", { attrs: { href: _vm.url } }, [
                                  _c(
                                    "svg",
                                    {
                                      staticStyle: {
                                        display: "inline-block",
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
                              : _c("a", { attrs: { href: "/" } }, [
                                  _c(
                                    "svg",
                                    {
                                      staticStyle: {
                                        display: "inline-block",
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
                        : _vm._e(),
                      _vm._v(" "),
                      _c("nav-search")
                    ],
                    1
                  )
                ])
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.mobileDevice && _vm.dontShowMenu
      ? _c(
          "menu",
          {
            staticClass: "nav-menu mobile",
            class: { fullmap: _vm.fullmap, active: _vm.bar }
          },
          [
            !_vm.user ? _c("div") : _vm._e(),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm.user
              ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "a",
                    {
                      staticClass: "menu-link",
                      attrs: { href: "/account-settings/favorited" }
                    },
                    [
                      _c("div", { staticClass: "nav-mobile-footer__icon" }, [
                        _c(
                          "svg",
                          {
                            staticStyle: {
                              height: "100%",
                              width: "100%",
                              display: "inline-block",
                              overflow: "visible"
                            },
                            attrs: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "fill-opacity": "0",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              focusable: "false",
                              "aria-hidden": "true",
                              role: "presentation",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6",
                                "stroke-linejoin": "round"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-nav-footer__text" }, [
                          _vm._v("Liked")
                        ])
                      ])
                    ]
                  )
                ])
              : _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "a",
                    { staticClass: "menu-link", attrs: { href: "/login" } },
                    [
                      _c("div", { staticClass: "nav-mobile-footer__icon" }, [
                        _c(
                          "svg",
                          {
                            staticStyle: {
                              height: "100%",
                              width: "100%",
                              display: "inline-block",
                              overflow: "visible"
                            },
                            attrs: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "fill-opacity": "0",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              focusable: "false",
                              "aria-hidden": "true",
                              role: "presentation",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "m17.5 2.9c-2.1 0-4.1 1.3-5.4 2.8-1.6-1.6-3.8-3.2-6.2-2.7-1.5.2-2.9 1.2-3.6 2.6-2.3 4.1 1 8.3 3.9 11.1 1.4 1.3 2.8 2.5 4.3 3.6.4.3 1.1.9 1.6.9s1.2-.6 1.6-.9c3.2-2.3 6.6-5.1 8.2-8.8 1.5-3.4 0-8.6-4.4-8.6",
                                "stroke-linejoin": "round"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-nav-footer__text" }, [
                          _vm._v("Liked")
                        ])
                      ])
                    ]
                  )
                ]),
            _vm._v(" "),
            _vm.user && _vm.user.hasCreatedOrganizers
              ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "a",
                    {
                      staticClass: "menu-link",
                      attrs: { href: "/create-event/edit" }
                    },
                    [
                      _c("div", { staticClass: "nav-mobile-footer__icon" }, [
                        _c(
                          "svg",
                          {
                            staticStyle: {
                              height: "100%",
                              width: "100%",
                              display: "inline-block",
                              overflow: "visible"
                            },
                            attrs: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "fill-opacity": "0",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              focusable: "false",
                              "aria-hidden": "true",
                              role: "presentation",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              staticClass: "st0",
                              attrs: { cx: "12", cy: "12.2", r: "10.2" }
                            }),
                            _c("line", {
                              staticClass: "st0",
                              attrs: {
                                x1: "12",
                                y1: "8.6",
                                x2: "12",
                                y2: "15.9"
                              }
                            }),
                            _c("line", {
                              staticClass: "st0",
                              attrs: {
                                x1: "8.3",
                                y1: "12.2",
                                x2: "15.7",
                                y2: "12.2"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-nav-footer__text" }, [
                          _vm._v("Events")
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.user && !_vm.user.hasCreatedOrganizers
              ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "a",
                    {
                      staticClass: "menu-link",
                      attrs: { href: "/events/create" }
                    },
                    [
                      _c("div", { staticClass: "nav-mobile-footer__icon" }, [
                        _c(
                          "svg",
                          {
                            staticStyle: {
                              height: "100%",
                              width: "100%",
                              display: "inline-block",
                              overflow: "visible"
                            },
                            attrs: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "fill-opacity": "0",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              focusable: "false",
                              "aria-hidden": "true",
                              role: "presentation",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("circle", {
                              staticClass: "st0",
                              attrs: { cx: "12", cy: "12.2", r: "10.2" }
                            }),
                            _c("line", {
                              staticClass: "st0",
                              attrs: {
                                x1: "12",
                                y1: "8.6",
                                x2: "12",
                                y2: "15.9"
                              }
                            }),
                            _c("line", {
                              staticClass: "st0",
                              attrs: {
                                x1: "8.3",
                                y1: "12.2",
                                x2: "15.7",
                                y2: "12.2"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-nav-footer__text" }, [
                          _vm._v("Events")
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.user
              ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "a",
                    { staticClass: "menu-link", attrs: { href: "/login" } },
                    [
                      _c("div", { staticClass: "nav-mobile-footer__icon" }, [
                        _c(
                          "svg",
                          {
                            staticStyle: {
                              height: "100%",
                              width: "100%",
                              display: "inline-block",
                              overflow: "visible"
                            },
                            attrs: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "fill-opacity": "0",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              focusable: "false",
                              "aria-hidden": "true",
                              role: "presentation",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              staticClass: "st0",
                              attrs: {
                                d:
                                  "M18.6,22.7c0.5,0,0.9-0.3,0.9-0.8c0,0,0-0.1,0-0.1v-4.3c0-2.8-2.3-5.1-5.1-5.1H9.4c-2.8,0-5.1,2.3-5.1,5.1\n        v4.3c0,0.5,0.3,0.9,0.8,0.9"
                              }
                            }),
                            _vm._v(" "),
                            _c("path", {
                              staticClass: "st0",
                              attrs: {
                                d:
                                  "M11.9,10.7c2.3,0,4.2-1.9,4.2-4.3c0-2.4-1.9-4.3-4.2-4.3C9.6,2.1,7.7,4,7.7,6.4c0,0,0,0,0,0\n        C7.7,8.7,9.6,10.6,11.9,10.7z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-nav-footer__text" }, [
                          _vm._v("Login")
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.user
              ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "a",
                    { staticClass: "menu-link", attrs: { href: "/messages" } },
                    [
                      _c("div", { staticClass: "nav-mobile-footer__icon" }, [
                        _vm.user.unread
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "nav-mobile-footer__icon--active-email"
                              },
                              [
                                _c(
                                  "svg",
                                  {
                                    staticStyle: {
                                      height: "24px",
                                      width: "24px",
                                      display: "inline-block",
                                      overflow: "visible"
                                    },
                                    attrs: {
                                      viewBox: "0 0 24 24",
                                      fill: "red",
                                      "fill-opacity": "1",
                                      stroke: "red",
                                      "stroke-width": "1.5",
                                      focusable: "false",
                                      "aria-hidden": "true",
                                      role: "presentation",
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round"
                                    }
                                  },
                                  [
                                    _c("circle", {
                                      attrs: { cx: "20.7", cy: "3.7", r: "3.1" }
                                    })
                                  ]
                                )
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "svg",
                          {
                            staticStyle: {
                              height: "24px",
                              width: "24px",
                              display: "inline-block",
                              overflow: "visible"
                            },
                            attrs: {
                              viewBox: "0 0 24 24",
                              fill: "currentColor",
                              "fill-opacity": "0",
                              stroke: "currentColor",
                              "stroke-width": "1.5",
                              focusable: "false",
                              "aria-hidden": "true",
                              role: "presentation",
                              "stroke-linecap": "round",
                              "stroke-linejoin": "round"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                d:
                                  "M18,19c2.6,0,4.6-1.2,4.5-3.5v-9C22.5,4,20.5,2,18,2H6C3.5,2,1.5,4,1.5,6.5v9c0,2.3,2,3.5,4.5,3.5h2.6 c0.6,0,1.1,0.3,1.5,0.8l1.9,2.7l1.4-2.3c0.2-0.3,0.5-0.6,0.8-0.8c0.4-0.2,0.9-0.4,1.3-0.4H18z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", { staticClass: "mobile-nav-footer__text" }, [
                          _vm._v("Inbox")
                        ])
                      ])
                    ]
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.user
              ? _c("div", { staticClass: "nav-menu-item mobile" }, [
                  _c(
                    "div",
                    { staticClass: "nav-mobile-footer__icon" },
                    [
                      _c(
                        "svg",
                        {
                          staticStyle: {
                            height: "100%",
                            width: "100%",
                            display: "inline-block",
                            overflow: "visible"
                          },
                          attrs: {
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                            "fill-opacity": "0",
                            stroke: "currentColor",
                            "stroke-width": "1.5",
                            focusable: "false",
                            "aria-hidden": "true",
                            role: "presentation",
                            "stroke-linecap": "round",
                            "stroke-linejoin": "round"
                          }
                        },
                        [
                          _c("circle", {
                            attrs: { cx: "12", cy: "12", r: "10.4" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("profile-button", {
                        attrs: { screenwidth: _vm.mobileDevice, user: _vm.user }
                      }),
                      _vm._v(" "),
                      _c("p", { staticClass: "mobile-nav-footer__text" }, [
                        _vm._v("Profile")
                      ])
                    ],
                    1
                  )
                ])
              : _vm._e()
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { href: "/" } }, [_c("h3", [_vm._v("EI")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link", attrs: { href: "/events/create" } },
      [_c("div", [_vm._v("Create Event")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "menu-link", attrs: { href: "/create-event/edit" } },
      [_c("div", [_vm._v("Your Events")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/login" } }, [
      _c("div", [_vm._v("Login")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/register" } }, [
      _c("div", [_vm._v("Register")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "menu-link", attrs: { href: "/register" } }, [
      _c("div", [_vm._v("Host an Experience")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "nav-menu-item mobile" }, [
      _c("a", { attrs: { href: "/" } }, [
        _c("div", { staticClass: "nav-mobile-footer__icon" }, [
          _c("h3", [_vm._v("EI")]),
          _vm._v(" "),
          _c("p", { staticClass: "mobile-nav-footer__text" }, [_vm._v("Home")])
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

/***/ "./resources/js/pages/layouts/nav.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/layouts/nav.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_vue_vue_type_template_id_7a9c3f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.vue?vue&type=template&id=7a9c3f44& */ "./resources/js/pages/layouts/nav.vue?vue&type=template&id=7a9c3f44&");
/* harmony import */ var _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.vue?vue&type=script&lang=js& */ "./resources/js/pages/layouts/nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nav_vue_vue_type_template_id_7a9c3f44___WEBPACK_IMPORTED_MODULE_0__["render"],
  _nav_vue_vue_type_template_id_7a9c3f44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/layouts/nav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/layouts/nav.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/layouts/nav.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/layouts/nav.vue?vue&type=template&id=7a9c3f44&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/layouts/nav.vue?vue&type=template&id=7a9c3f44& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_7a9c3f44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./nav.vue?vue&type=template&id=7a9c3f44& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/layouts/nav.vue?vue&type=template&id=7a9c3f44&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_7a9c3f44___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_nav_vue_vue_type_template_id_7a9c3f44___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);