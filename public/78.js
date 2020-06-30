(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/events/event-show.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/events/event-show.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue2-leaflet */ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _organizers_contact_organizer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../organizers/contact-organizer.vue */ "./resources/js/pages/organizers/contact-organizer.vue");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LoadMore_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/LoadMore.js */ "./resources/js/components/LoadMore.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['loadevent', 'user', 'tickets'],
  components: {
    LMap: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__["LMap"],
    LTileLayer: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__["LTileLayer"],
    LMarker: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__["LMarker"],
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    ContactOrganizer: _organizers_contact_organizer_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    LPopup: vue2_leaflet__WEBPACK_IMPORTED_MODULE_0__["LPopup"],
    LoadMore: _components_LoadMore_js__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  computed: {
    locationPlaceholder: function locationPlaceholder() {
      return this.event.location.postal_code || this.event.location.city ? (this.event.location.home ? this.event.location.home + ' ' : '') + (this.event.location.street ? this.event.location.street + ' | ' : '') + (this.event.location.city ? this.event.location.city + ' | ' : '') + (this.event.location.region ? this.event.location.region + ' | ' : '') + (this.event.location.country ? this.event.location.country : '') : '';
    },
    eventUrl: function eventUrl() {
      if (this.loadevent.ticketUrl) {
        return this.loadevent.ticketUrl;
      }

      if (this.loadevent.websiteUrl) {
        return this.loadevent.websiteUrl;
      }

      if (this.loadevent.organizer.website) {
        return this.loadevent.organizer.website;
      }
    },
    organizerText: function organizerText() {
      return this.fullOrganizer ? this.loadevent.organizer.description : this.loadevent.organizer.description.substring(0, 160);
    },
    advisoryText: function advisoryText() {
      return this.fullAdvisories ? this.loadevent.advisories.audience : this.loadevent.advisories.audience.substring(0, 160);
    },
    showtimesText: function showtimesText() {
      return this.fullShowtimes ? this.loadevent.show_times : this.loadevent.show_times.substring(0, 160);
    },
    descriptionText: function descriptionText() {
      return this.fullDescription ? this.loadevent.description : this.loadevent.description.substring(0, 400);
    }
  },
  data: function data() {
    return {
      event: this.loadevent ? this.loadevent : '',
      isModalVisible: false,
      zoom: 13,
      center: this.loadevent.location_latlon,
      url: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      allowZoom: false,
      week: this.loadevent ? this.loadevent.show_on_going : '',
      showEventClass: 'show-heart-location',
      showEventMobileClass: 'show-heart-mobile-location',
      showMore: null,
      organizerImage: '',
      dates: [],
      remaining: [],
      bar: false,
      lastScrollPosition: 0,
      config: {
        // minDate: "today",
        maxDate: new Date().fp_incr(180),
        mode: "multiple",
        inline: true,
        showMonths: 2,
        dateFormat: 'Y-m-d H:i:s'
      },
      configMob: {
        // minDate: "today",
        maxDate: new Date().fp_incr(180),
        mode: "multiple",
        inline: true,
        showMonths: 1,
        dateFormat: 'Y-m-d H:i:s'
      },
      searchUrl: '',
      titleFontSize: '',
      fullOrganizer: this.loadevent.organizer.description.length <= 160 ? true : false,
      fullAdvisories: this.loadevent.advisories.audience.length <= 160 ? true : false,
      fullShowtimes: this.loadevent.show_times.length <= 160 ? true : false,
      fullDescription: this.loadevent.description.length <= 400 ? true : false,
      hover: null,
      hasIntersected: false
    };
  },
  methods: {
    getDates: function getDates() {
      var _this = this;

      if (this.event.shows) {
        this.event.shows.forEach(function (event) {
          if (_this.$dayjs().subtract(1, 'day').format('YYYY-MM-DD 23:59:00') < event.date) {
            _this.remaining.push(event.date);
          }

          _this.dates.push(event.date);
        });
      }
    },
    intersected: function intersected() {
      console.log('intersected');
      return this.hasIntersected = true;
    },
    handleScroll: function handleScroll(event) {
      var currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop; // if (window.pageYOffset < 300) { this.hasIntersected = false; };

      if (currentScrollPosition > 60 && this.hasIntersected) {
        return this.bar = true;
      }

      return this.bar = false;
    },
    breadcrumbs: function breadcrumbs() {
      if (new URL(window.location.href).searchParams.get("name")) {
        this.searchUrl = "/index/search?name=".concat(new URL(window.location.href).searchParams.get("name"), "&lat=").concat(new URL(window.location.href).searchParams.get("lat"), "&lng=").concat(new URL(window.location.href).searchParams.get("lng"));
      }
    },
    canUseWebP: function canUseWebP() {
      var webp = document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0;

      if (this.loadevent.organizer.thumbImagePath && webp) {
        return this.organizerImage = "background-image:url('/storage/".concat(this.loadevent.organizer.thumbImagePath, "')");
      }

      ;

      if (this.loadevent.organizer.thumbImagePath) {
        return this.organizerImage = "background-image:url('/storage/".concat(this.loadevent.organizer.thumbImagePath.slice(0, -4), "jpg')");
      }
    },
    getTitleFontSize: function getTitleFontSize() {
      if (this.event.name.length > 70) {
        return this.titleFontSize = "font-size:3rem;line-height:3rem";
      }

      if (this.event.name.length > 40) {
        return this.titleFontSize = "font-size:4rem;line-height:4rem";
      }

      return this.titleFontSize = "font-size:5rem;line-height:5rem";
    }
  },
  watch: {
    dates: function dates() {
      this.$refs.datePicker ? this.$refs.datePicker.fp.jumpToDate(new Date()) : '';
    }
  },
  mounted: function mounted() {
    this.getDates();
    this.canUseWebP();
    this.breadcrumbs();
    this.getTitleFontSize();
  },
  created: function created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/events/event-show.vue?vue&type=template&id=351c07ed&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/events/event-show.vue?vue&type=template&id=351c07ed& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "show-content" }, [
    _c("nav", { staticClass: "event-show mobile" }, [
      _c("div", { staticClass: "back" }, [
        _vm.searchUrl
          ? _c("a", { attrs: { href: _vm.searchUrl } }, [
              _c("div", { staticClass: "event-show-nav__back-arrow" }, [
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
          : _c("a", { attrs: { href: "/" } }, [
              _c("div", { staticClass: "event-show-nav__back-arrow" }, [
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
        { staticClass: "event-show-nav__favorite" },
        [
          _c("favorite", {
            attrs: {
              user: _vm.user,
              inputclass: _vm.showEventMobileClass,
              event: _vm.event
            }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("header", { staticClass: "event-show grid" }, [
      _c("div", { staticClass: "header-left" }, [
        _c("div", { staticClass: "content" }, [
          _c("span", { staticClass: "header-left__cat" }, [
            _vm._v(_vm._s(_vm.event.category ? _vm.event.category.name : ""))
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "header-left__title" }, [
            _c("h1", { style: _vm.titleFontSize }, [
              _vm._v(_vm._s(_vm.event.name))
            ])
          ]),
          _vm._v(" "),
          _c("span", { staticClass: "header-left__tag" }, [
            _c("i", [_vm._v(_vm._s(_vm.event.tag_line))])
          ]),
          _vm._v(" "),
          _vm.event.staffpick
            ? _c("div", [
                _vm._v(
                  "\n                    EI Pick of the week!\n                "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "header-left__details" }, [
            _c("div", { staticClass: "item" }, [
              _c("img", {
                attrs: { src: "/storage/website-files/price.png", alt: "" }
              }),
              _vm._v(" "),
              _c("span", [
                _c("span", { staticClass: "header__show-info" }, [
                  _vm._v("Price")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "header__show-info bold" }, [
                  _vm._v(_vm._s(_vm.event.price_range))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item" }, [
              _c("img", {
                attrs: { src: "/storage/website-files/location.png", alt: "" }
              }),
              _vm._v(" "),
              _vm.event.hasLocation
                ? _c("span", [
                    _c("span", { staticClass: "header__show-info" }, [
                      _vm._v("Location")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header__show-info bold" }, [
                      _vm._v(_vm._s(_vm.event.location.city))
                    ])
                  ])
                : _c("span", [
                    _c("span", { staticClass: "header__show-info" }, [
                      _vm._v("Location")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header__show-info bold" }, [
                      _vm._v("Anywhere")
                    ])
                  ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "item" }, [
              _c("img", {
                attrs: { src: "/storage/website-files/calendar.png", alt: "" }
              }),
              _vm._v(" "),
              _vm.event.showtype == "s"
                ? _c("span", [
                    _c("span", { staticClass: "header__show-info" }, [
                      _vm._v("Shows")
                    ]),
                    _vm._v(" "),
                    (_vm.remaining && _vm.remaining.length > 1
                    ? _vm.remaining.length
                    : "")
                      ? _c("span", { staticClass: "header__show-info bold" }, [
                          _vm._v(_vm._s(_vm.remaining.length) + " dates left")
                        ])
                      : (_vm.remaining && _vm.remaining.length == 1
                        ? _vm.remaining.length
                        : "")
                      ? _c("span", { staticClass: "header__show-info bold" }, [
                          _vm._v(_vm._s(_vm.remaining.length) + " date left")
                        ])
                      : _c("span", { staticClass: "header__show-info bold" }, [
                          _vm._v("no dates left")
                        ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.event.showtype == "o"
                ? _c("span", [
                    _c("span", { staticClass: "header__show-info" }, [
                      _vm._v("Shows")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header__show-info bold" }, [
                      _vm.event.show_on_going.mon
                        ? _c("span", [_vm._v("M")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("M")
                          ]),
                      _vm._v(" "),
                      _vm.event.show_on_going.tue
                        ? _c("span", [_vm._v("T")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("T")
                          ]),
                      _vm._v(" "),
                      _vm.event.show_on_going.wed
                        ? _c("span", [_vm._v("W")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("W")
                          ]),
                      _vm._v(" "),
                      _vm.event.show_on_going.thu
                        ? _c("span", [_vm._v("T")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("T")
                          ]),
                      _vm._v(" "),
                      _vm.event.show_on_going.fri
                        ? _c("span", [_vm._v("F")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("F")
                          ]),
                      _vm._v(" "),
                      _vm.event.show_on_going.sat
                        ? _c("span", [_vm._v("S")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("S")
                          ]),
                      _vm._v(" "),
                      _vm.event.show_on_going.sun
                        ? _c("span", [_vm._v("S")])
                        : _c("span", { staticStyle: { color: "#bbbbbb" } }, [
                            _vm._v("S")
                          ])
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.event.showtype == "a"
                ? _c("span", [
                    _c("span", { staticClass: "header__show-info" }, [
                      _vm._v("Show Days")
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "header__show-info bold" }, [
                      _vm._v("Any Time")
                    ])
                  ])
                : _vm._e()
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "header-right" }, [
        _c("div", { staticClass: "header-right__image" }, [
          _c("picture", [
            _c("source", {
              attrs: {
                type: "image/webp",
                srcset: "/storage/" + _vm.event.largeImagePath
              }
            }),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src:
                  "/storage/" + _vm.event.largeImagePath.slice(0, -4) + "jpg",
                alt: _vm.event.name + " Immersive Event"
              }
            })
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "desktop" },
          [
            _c("favorite", {
              attrs: {
                user: _vm.user,
                inputclass: _vm.showEventClass,
                event: _vm.event
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "event-show grid two-panel" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "right" }, [
        _c("div", { staticClass: "event-show__description" }, [
          _c(
            "p",
            { staticClass: "text", staticStyle: { "white-space": "pre-wrap" } },
            [
              _vm._v(_vm._s(_vm.descriptionText)),
              !_vm.fullDescription
                ? _c(
                    "span",
                    {
                      staticClass: "show-text",
                      on: {
                        click: function($event) {
                          _vm.fullDescription = !_vm.fullDescription
                        }
                      }
                    },
                    [_vm._v("... Show More")]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.fullDescription && _vm.event.description.length >= 400
                ? _c(
                    "span",
                    {
                      staticClass: "show-text",
                      on: {
                        click: function($event) {
                          _vm.fullDescription = !_vm.fullDescription
                        }
                      }
                    },
                    [_vm._v("... Show Less ")]
                  )
                : _vm._e()
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    (_vm.event.eventreviews
    ? _vm.event.eventreviews.length
    : null)
      ? _c("section", { staticClass: " event-show grey event-show-review" }, [
          _c("div", { staticClass: "content grid two-panel" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "event-show-review__right" },
              _vm._l(_vm.event.eventreviews, function(review) {
                return _c("div", { staticClass: "box" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        rel: "noreferrer",
                        target: "_blank",
                        href: review.url
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "event-show-review__right--image" },
                        [
                          _c("img", {
                            attrs: {
                              width: "33px",
                              height: "33px",
                              src: review.image_path,
                              alt: ""
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "event-show-review__right--name" },
                        [_c("h4", [_vm._v(_vm._s(review.reviewer_name))])]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "review" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          rel: "noreferrer",
                          target: "_blank",
                          href: review.url
                        }
                      },
                      [
                        _vm.showMore !== "review"
                          ? _c(
                              "i",
                              {
                                staticClass: "text",
                                staticStyle: { "white-space": "pre-wrap" }
                              },
                              [
                                _vm._v(_vm._s(review.review.substring(0, 300))),
                                review.review.length >= 200
                                  ? _c("span", { staticClass: "show-text" }, [
                                      _vm._v(
                                        "... Read More\n                                "
                                      )
                                    ])
                                  : _vm._e()
                              ]
                            )
                          : _vm._e()
                      ]
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.event.showtype == "s"
      ? _c("section", { staticClass: "grid event-show two-panel" }, [
          _vm._m(2),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "right lockedcalendar desktop" },
            [
              _c("flat-pickr", {
                ref: "datePicker",
                staticClass: "form-control",
                attrs: {
                  config: _vm.config,
                  placeholder: "Select date",
                  name: "dates"
                },
                model: {
                  value: _vm.dates,
                  callback: function($$v) {
                    _vm.dates = $$v
                  },
                  expression: "dates"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "event-show__showtimes--specific" }, [
                _c("p", [_vm._v("Show Details:")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(
                      _vm.event.timezone ? _vm.event.timezone.description : ""
                    )
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "text",
                    staticStyle: { "white-space": "pre-wrap" }
                  },
                  [
                    _vm._v(_vm._s(_vm.showtimesText)),
                    !_vm.fullShowtimes
                      ? _c(
                          "span",
                          {
                            staticClass: "show-text",
                            on: {
                              click: function($event) {
                                _vm.fullShowtimes = !_vm.fullShowtimes
                              }
                            }
                          },
                          [_vm._v("... Show More")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.fullShowtimes && _vm.event.show_times.length >= 160
                      ? _c(
                          "span",
                          {
                            staticClass: "show-text",
                            on: {
                              click: function($event) {
                                _vm.fullShowtimes = !_vm.fullShowtimes
                              }
                            }
                          },
                          [_vm._v("... Show Less ")]
                        )
                      : _vm._e()
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "right lockedcalendar mobile" },
            [
              _c("flat-pickr", {
                ref: "datePicker",
                staticClass: "form-control",
                attrs: {
                  config: _vm.configMob,
                  placeholder: "Select date",
                  name: "dates"
                },
                model: {
                  value: _vm.dates,
                  callback: function($$v) {
                    _vm.dates = $$v
                  },
                  expression: "dates"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "event-show__showtimes--specific" }, [
                _c("p", [_vm._v("Show Details:")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    _vm._s(
                      _vm.event.timezone ? _vm.event.timezone.description : ""
                    )
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  {
                    staticClass: "text",
                    staticStyle: { "white-space": "pre-wrap" }
                  },
                  [
                    _vm._v(_vm._s(_vm.showtimesText)),
                    !_vm.fullShowtimes
                      ? _c(
                          "span",
                          {
                            staticClass: "show-text",
                            on: {
                              click: function($event) {
                                _vm.fullShowtimes = !_vm.fullShowtimes
                              }
                            }
                          },
                          [_vm._v("... Show More")]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.fullShowtimes && _vm.event.show_times.length >= 160
                      ? _c(
                          "span",
                          {
                            staticClass: "show-text",
                            on: {
                              click: function($event) {
                                _vm.fullShowtimes = !_vm.fullShowtimes
                              }
                            }
                          },
                          [_vm._v("... Show Less ")]
                        )
                      : _vm._e()
                  ]
                )
              ])
            ],
            1
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.event.showtype == "o"
      ? _c("section", { staticClass: "grid event-show two-panel" }, [
          _vm._m(3),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _c("div", { staticClass: "calendar" }, [
              _c("div", { staticClass: "field" }, [
                _c("div", { staticClass: "grid show-week-calendar" }, [
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.mon }
                    },
                    [_c("h4", [_vm._v("Mon")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.tue }
                    },
                    [_c("h4", [_vm._v("Tue")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.wed }
                    },
                    [_c("h4", [_vm._v("Wed")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.thu }
                    },
                    [_c("h4", [_vm._v("Thu")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.fri }
                    },
                    [_c("h4", [_vm._v("Fri")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.sat }
                    },
                    [_c("h4", [_vm._v("Sat")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "show-week-calendar_day",
                      class: { active: _vm.week.sun }
                    },
                    [_c("h4", [_vm._v("Sun")])]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "event-show__showtimes--ongoing" }, [
              _c("p", [_vm._v("Show Details:")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  _vm._s(
                    _vm.event.timezone ? _vm.event.timezone.description : ""
                  )
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "text",
                  staticStyle: { "white-space": "pre-wrap" }
                },
                [
                  _vm._v(_vm._s(_vm.showtimesText)),
                  !_vm.fullShowtimes
                    ? _c(
                        "span",
                        {
                          staticClass: "show-text",
                          on: {
                            click: function($event) {
                              _vm.fullShowtimes = !_vm.fullShowtimes
                            }
                          }
                        },
                        [_vm._v("... Show More")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.fullShowtimes && _vm.event.show_times.length >= 160
                    ? _c(
                        "span",
                        {
                          staticClass: "show-text",
                          on: {
                            click: function($event) {
                              _vm.fullShowtimes = !_vm.fullShowtimes
                            }
                          }
                        },
                        [_vm._v("... Show Less ")]
                      )
                    : _vm._e()
                ]
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.event.showtype == "a"
      ? _c("section", { staticClass: "grid event-show two-panel" }, [
          _vm._m(4),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _c("h3", [_vm._v("Anytime")]),
            _vm._v(" "),
            _c("div", { staticClass: "event-show__showtimes--specific" }, [
              _c("p", [_vm._v("Show Details:")]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  _vm._s(
                    _vm.event.timezone ? _vm.event.timezone.description : ""
                  )
                )
              ]),
              _vm._v(" "),
              _c(
                "p",
                {
                  staticClass: "text",
                  staticStyle: { "white-space": "pre-wrap" }
                },
                [
                  _vm._v(_vm._s(_vm.showtimesText)),
                  !_vm.fullShowtimes
                    ? _c(
                        "span",
                        {
                          staticClass: "show-text",
                          on: {
                            click: function($event) {
                              _vm.fullShowtimes = !_vm.fullShowtimes
                            }
                          }
                        },
                        [_vm._v("... Show More")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.fullShowtimes && _vm.event.show_times.length >= 160
                    ? _c(
                        "span",
                        {
                          staticClass: "show-text",
                          on: {
                            click: function($event) {
                              _vm.fullShowtimes = !_vm.fullShowtimes
                            }
                          }
                        },
                        [_vm._v("... Show Less ")]
                      )
                    : _vm._e()
                ]
              )
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c("section", { staticClass: "grid event-show two-panel" }, [
      _vm._m(5),
      _vm._v(" "),
      _c("div", { staticClass: "right" }, [
        _c("div", { staticClass: " grid two-panel" }, [
          _vm._m(6),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "info" },
            [
              _c("li", [
                _c("p", [_vm._v(_vm._s(_vm.event.advisories.ageRestriction))])
              ]),
              _vm._v(" "),
              _vm._l(_vm.event.content_advisories, function(item) {
                return _c("li", [_c("p", [_vm._v(_vm._s(item.advisories))])])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid two-panel" }, [
          _vm._m(7),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "info" },
            _vm._l(_vm.event.contact_levels, function(item) {
              return _c("li", [_c("p", [_vm._v(_vm._s(item.level))])])
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid two-panel" }, [
          _vm._m(8),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "info" },
            [
              _c("li", [
                _c("p", [
                  _vm._v("Event is "),
                  !_vm.event.advisories.wheelchairReady
                    ? _c("span", [_vm._v("not")])
                    : _vm._e(),
                  _vm._v(" wheelchair accessible.")
                ])
              ]),
              _vm._v(" "),
              _vm._l(_vm.event.mobility_advisories, function(item) {
                return _c("li", [_c("p", [_vm._v(_vm._s(item.mobilities))])])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "grid two-panel" }, [
          _vm._m(9),
          _vm._v(" "),
          _c("ul", { staticClass: "audience-role__info" }, [
            _c("li", [
              _c(
                "p",
                {
                  staticClass: "text",
                  staticStyle: { "white-space": "pre-wrap" }
                },
                [
                  _vm._v(_vm._s(_vm.advisoryText)),
                  !_vm.fullAdvisories
                    ? _c(
                        "span",
                        {
                          staticClass: "show-text",
                          on: {
                            click: function($event) {
                              _vm.fullAdvisories = !_vm.fullAdvisories
                            }
                          }
                        },
                        [_vm._v("... Show More")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.fullAdvisories &&
                  _vm.event.advisories.audience.length >= 160
                    ? _c(
                        "span",
                        {
                          staticClass: "show-text",
                          on: {
                            click: function($event) {
                              _vm.fullAdvisories = !_vm.fullAdvisories
                            }
                          }
                        },
                        [_vm._v("... Show Less ")]
                      )
                    : _vm._e()
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _vm.event.advisories.sexual
          ? _c("div", { staticClass: "grid two-panel" }, [
              _vm._m(10),
              _vm._v(" "),
              _c("ul", { staticClass: "info" }, [
                _c("li", [
                  _c("p", [
                    _vm._v(_vm._s(_vm.event.advisories.sexualDescription))
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ]),
    _vm._v(" "),
    _c("section", { staticClass: "grid event-show two-panel" }, [
      _vm._m(11),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "right" },
        [
          _c(
            "a",
            { attrs: { href: "/organizer/" + _vm.event.organizer.slug } },
            [
              _c("div", { staticClass: "event-show-organizer-image" }, [
                _c(
                  "div",
                  {
                    staticClass: "img",
                    style: _vm.event.organizer.thumbImagePath
                      ? _vm.organizerImage
                      : "background:" + _vm.event.organizer.hexColor
                  },
                  [
                    !_vm.event.organizer.thumbImagePath
                      ? _c(
                          "div",
                          { staticClass: "organizer-icon-text event-show" },
                          [
                            _c("span", [
                              _vm._v(_vm._s(_vm.event.organizer.name.charAt(0)))
                            ])
                          ]
                        )
                      : _vm._e()
                  ]
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "a",
            { attrs: { href: "/organizer/" + _vm.event.organizer.slug } },
            [
              _c("div", { staticClass: "name" }, [
                _c("h3", [_vm._v(_vm._s(_vm.event.organizer.name))])
              ])
            ]
          ),
          _vm._v(" "),
          _vm.event.organizer.description
            ? _c(
                "div",
                {
                  staticClass: "description",
                  staticStyle: { "white-space": "pre-wrap" }
                },
                [
                  _c(
                    "span",
                    {
                      staticClass: "text",
                      staticStyle: { "white-space": "pre-wrap" }
                    },
                    [
                      _vm._v(_vm._s(_vm.organizerText)),
                      !_vm.fullOrganizer
                        ? _c(
                            "span",
                            {
                              staticClass: "show-text",
                              on: {
                                click: function($event) {
                                  _vm.fullOrganizer = !_vm.fullOrganizer
                                }
                              }
                            },
                            [_vm._v("... Show More")]
                          )
                        : _c(
                            "span",
                            {
                              staticClass: "show-text",
                              on: {
                                click: function($event) {
                                  _vm.fullOrganizer = !_vm.fullOrganizer
                                }
                              }
                            },
                            [_vm._v("... Show Less ")]
                          )
                    ]
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("ContactOrganizer", {
            attrs: { user: _vm.user, loadorganizer: _vm.event.organizer }
          })
        ],
        1
      )
    ]),
    _vm._v(" "),
    _vm.bar && _vm.event.hasLocation
      ? _c("section", { staticClass: "section event-show location" }, [
          _c("div", [
            _vm._m(12),
            _vm._v(" "),
            _vm.event.location.hiddenLocationToggle
              ? _c("div", { staticClass: "text" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        rel: "noreferrer",
                        target: "_blank",
                        href:
                          "http://maps.google.com/maps?q=" +
                          _vm.event.location.city +
                          ",+" +
                          _vm.event.location.region
                      }
                    },
                    [
                      _c("p", [
                        _vm._v(
                          _vm._s(_vm.event.location.city) +
                            ", " +
                            _vm._s(_vm.event.location.region)
                        )
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("p", [
                        _vm._v(_vm._s(_vm.event.location.hiddenLocation))
                      ])
                    ]
                  )
                ])
              : _c("div", { staticClass: "text" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        rel: "noreferrer",
                        target: "_blank",
                        href:
                          "http://maps.google.com/maps?q=" +
                          _vm.event.location.home +
                          "+" +
                          _vm.event.location.street +
                          ",+" +
                          _vm.event.location.city +
                          ",+" +
                          _vm.event.location.region
                      }
                    },
                    [_c("p", [_vm._v(_vm._s(_vm.locationPlaceholder))])]
                  )
                ]),
            _vm._v(" "),
            _c("div", { staticClass: "event-show-map" }, [
              _vm.center
                ? _c("div", [
                    _c("div", { staticClass: "zoom" }, [
                      _c("div", { staticClass: "zoom__in" }, [
                        _c(
                          "button",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.zoom += 1
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  viewBox: "0 0 16 16",
                                  height: "16",
                                  width: "16",
                                  fill: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d: "M7 1a1 1 0 0 1 2 0v14a1 1 0 1 1-2 0V1z"
                                  }
                                }),
                                _c("path", {
                                  attrs: {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d:
                                      "M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "zoom__out" }, [
                        _c(
                          "button",
                          {
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.zoom -= 1
                              }
                            }
                          },
                          [
                            _c(
                              "svg",
                              {
                                attrs: {
                                  viewBox: "0 0 16 16",
                                  height: "16",
                                  width: "16",
                                  fill: "currentColor"
                                }
                              },
                              [
                                _c("path", {
                                  attrs: {
                                    "fill-rule": "evenodd",
                                    "clip-rule": "evenodd",
                                    d:
                                      "M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z"
                                  }
                                })
                              ]
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticStyle: { width: "100%", height: "400px" } },
                      [
                        _c(
                          "l-map",
                          {
                            attrs: {
                              zoom: _vm.zoom,
                              center: _vm.center,
                              options: {
                                scrollWheelZoom: _vm.allowZoom,
                                zoomControl: _vm.allowZoom
                              }
                            }
                          },
                          [
                            _c("l-tile-layer", { attrs: { url: _vm.url } }),
                            _vm._v(" "),
                            _c(
                              "l-marker",
                              { attrs: { "lat-lng": _vm.center } },
                              [
                                _c("l-popup", [
                                  _c("div", { staticClass: "show-pop" }, [
                                    _c(
                                      "a",
                                      {
                                        attrs: {
                                          rel: "noreferrer",
                                          target: "_blank",
                                          href:
                                            "http://maps.google.com/maps?q=" +
                                            _vm.event.location.home +
                                            "+" +
                                            _vm.event.location.street +
                                            ",+" +
                                            _vm.event.location.city +
                                            ",+" +
                                            _vm.event.location.region
                                        }
                                      },
                                      [
                                        _c("div", { staticClass: "info" }, [
                                          _c("div", { staticClass: "name" }, [
                                            _vm._v(
                                              "\n                                                " +
                                                _vm._s(
                                                  _vm.locationPlaceholder
                                                ) +
                                                " \n                                            "
                                            )
                                          ])
                                        ])
                                      ]
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
                : _vm._e()
            ])
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    !_vm.event.hasLocation
      ? _c("section", { staticClass: "event-show grid two-panel" }, [
          _vm._m(13),
          _vm._v(" "),
          _c("div", { staticClass: "right" }, [
            _c(
              "div",
              [
                _vm._l(_vm.event.remotelocations, function(location) {
                  return _c("div", [
                    _c("h3", [_vm._v(_vm._s(location.name))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(location.description))])
                  ])
                }),
                _vm._v(" "),
                _vm.event.remote_description
                  ? _c("div", [
                      _c("p", [_vm._v(_vm._s(_vm.event.remote_description))])
                    ])
                  : _vm._e()
              ],
              2
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "grid event-bottom-bar", class: { active: _vm.bar } },
      [
        _c("div", { staticClass: "event-bottom-bar__name" }, [
          _c("picture", [
            _c("source", {
              attrs: {
                height: "50",
                width: "50",
                type: "image/webp",
                srcset: "/storage/" + _vm.event.thumbImagePath
              }
            }),
            _vm._v(" "),
            _c("img", {
              staticClass: "event-bottom-bar__img",
              attrs: {
                height: "50",
                width: "50",
                src:
                  "/storage/" + _vm.event.thumbImagePath.slice(0, -4) + "jpg",
                alt: _vm.event.name
              }
            })
          ]),
          _vm._v(" "),
          _c("h4", [_vm._v(_vm._s(_vm.event.name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "event-price" }, [
          _c("h4", [_vm._v(_vm._s(_vm.event.price_range))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "event-get-tickets" }, [
          _c(
            "a",
            {
              attrs: {
                href: _vm.eventUrl,
                rel: "noreferrer noopener",
                target: "_blank"
              }
            },
            [
              _c("button", { staticClass: "event-bottom-bar__button" }, [
                _vm._v("\n                    Get Tickets\n                ")
              ])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event-title" }, [
      _c("h2", [_vm._v("About")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("div", { staticClass: "event-title" }, [
        _c("h2", [_vm._v("Show Reviews")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event-title" }, [
      _c("h2", [_vm._v("Show Dates")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event-title" }, [
      _c("h2", [_vm._v("Show Times")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event-title" }, [
      _c("h2", [_vm._v("Show Times")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("div", { staticClass: "event-title" }, [
        _c("h2", [_vm._v("Show Details")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Content Advisories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Interaction Advisories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Mobility Advisories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Audience Role")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "title" }, [
      _c("h3", [_vm._v("Sexual Advisories")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "left" }, [
      _c("div", { staticClass: "event-title" }, [
        _c("h2", [_vm._v("About the organizer")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event-title" }, [
      _c("h2", [_vm._v("Location")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "event-title" }, [
      _c("h2", [_vm._v("What you will need")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/LoadMore.js":
/*!*********************************************!*\
  !*** ./resources/js/components/LoadMore.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


/* harmony default export */ __webpack_exports__["default"] = ({
  template: '<div></div>',
  data: function data() {
    return {
      observer: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    var options = this.options || {};
    this.observer = new IntersectionObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          entry = _ref2[0];

      if (entry && entry.isIntersecting) {
        _this.$emit("intersect");
      }
    }, options);
    this.observer.observe(this.$el);
  },
  destroyed: function destroyed() {
    this.observer.disconnect();
  },
  methods: {}
});

/***/ }),

/***/ "./resources/js/pages/events/event-show.vue":
/*!**************************************************!*\
  !*** ./resources/js/pages/events/event-show.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _event_show_vue_vue_type_template_id_351c07ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-show.vue?vue&type=template&id=351c07ed& */ "./resources/js/pages/events/event-show.vue?vue&type=template&id=351c07ed&");
/* harmony import */ var _event_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-show.vue?vue&type=script&lang=js& */ "./resources/js/pages/events/event-show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _event_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _event_show_vue_vue_type_template_id_351c07ed___WEBPACK_IMPORTED_MODULE_0__["render"],
  _event_show_vue_vue_type_template_id_351c07ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/events/event-show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/events/event-show.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/events/event-show.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/events/event-show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_event_show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/events/event-show.vue?vue&type=template&id=351c07ed&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/events/event-show.vue?vue&type=template&id=351c07ed& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_show_vue_vue_type_template_id_351c07ed___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./event-show.vue?vue&type=template&id=351c07ed& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/events/event-show.vue?vue&type=template&id=351c07ed&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_show_vue_vue_type_template_id_351c07ed___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_event_show_vue_vue_type_template_id_351c07ed___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);