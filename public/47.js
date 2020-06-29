(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/shows.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/shows.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_6__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['event', 'timezones'],
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_6___default.a
  },
  computed: {
    endpoint: function endpoint() {
      return "/create-event/".concat(this.event.slug, "/shows");
    },
    dateArray: function dateArray() {
      if (!Array.isArray(this.dates) && this.dates.includes(",")) {
        return this.dates.split(",");
      } else {
        if (!Array.isArray(this.dates)) {
          return [this.dates];
        } else {
          '';
        }
      }
    },
    weeklyOngoing: function weeklyOngoing() {
      if (this.week.mon == 0) {
        return true;
      }

      ;

      if (this.week.tue == 0) {
        return true;
      }

      ;

      if (this.week.wed == 0) {
        return true;
      }

      ;

      if (this.week.thu == 0) {
        return true;
      }

      ;

      if (this.week.fri == 0) {
        return true;
      }

      ;

      if (this.week.sat == 0) {
        return true;
      }

      ;

      if (this.week.sun == 0) {
        return true;
      }

      ;
      return false;
    },
    submitObject: function submitObject() {
      return {
        'dates': Array.isArray(this.dates) ? this.dates : this.dateArray,
        'showtimes': this.showTimes,
        'shows': this.showType == 'Specific Dates' ? true : false,
        'embargo_date': this.showEmbargoDate ? this.embargoDate : null,
        'week': this.week && this.showType == 'Anytime' ? lodash__WEBPACK_IMPORTED_MODULE_2___default.a.mapValues(this.week, function () {
          return true;
        }) : this.week,
        'onGoing': this.showType == 'Weekly' && this.weeklyOngoing ? true : false,
        'always': this.showType == 'Anytime' || !this.weeklyOngoing ? true : false,
        'start_date': this.startDate ? this.startDate : null,
        'timezone': this.timezone
      };
    }
  },
  data: function data() {
    var _ref;

    return _ref = {
      eventUrl: "/create-event/".concat(this.event.slug),
      showType: this.event.showtype ? this.event.showtype : 's',
      dates: this.event.shows ? this.event.shows.map(function (a) {
        return a.date;
      }) : '',
      startDate: '',
      embargoDate: this.event.embargo_date ? this.event.embargo_date : '',
      showEmbargoDate: this.event.embargo_date ? true : false,
      calendarConfig: this.initializeCalendarObject(),
      mobileCalendarConfig: this.initializeMobileCalendarObject(),
      embargoCalendarConfig: this.initializeEmbargoCalendarObject(),
      week: this.event.show_on_going ? this.event.show_on_going : this.initializeWeekObject(),
      showTimes: this.event.shows.length ? this.event.show_times : '',
      disabled: false,
      active: null,
      modal: false,
      placeholders: 'Please provide a brief description of show times. For example:' + '\n' + '\n' + '“Doors at 7, Show at 8.”' + '\n' + '“Two shows an hour from 8-10.”',
      placeholdero: 'Please provide a brief description of weekly show times. For example:' + '\n' + '\n' + '10:00PM shows on Monday & Tuesday.' + '\n' + '12:00PM on Wednesday and Thursday.',
      placeholdera: 'Please provide a brief description of daily times. For example:' + '\n' + '\n' + 'Show begins everyday at 12PM.' + '\n' + 'Enjoy at any time.'
    }, _defineProperty(_ref, "showType", ''), _defineProperty(_ref, "showTypeOptions", ['Specific Dates', 'Weekly', 'Anytime']), _defineProperty(_ref, "exit", false), _defineProperty(_ref, "showStartDate", this.event.show_on_going ? true : false), _defineProperty(_ref, "timezone", this.event.timezone ? this.event.timezone : ''), _ref;
  },
  methods: {
    initializeCalendarObject: function initializeCalendarObject() {
      return {
        // minDate: "today",
        maxDate: new Date().fp_incr(180),
        mode: "multiple",
        inline: true,
        showMonths: 2,
        dateFormat: 'Y-m-d H:i:s'
      };
    },
    initializeMobileCalendarObject: function initializeMobileCalendarObject() {
      return {
        // minDate: "today",
        maxDate: new Date().fp_incr(180),
        mode: "multiple",
        inline: true,
        showMonths: 1,
        dateFormat: 'Y-m-d H:i:s'
      };
    },
    initializeEmbargoCalendarObject: function initializeEmbargoCalendarObject() {
      return {
        // minDate: "today",
        maxDate: new Date().fp_incr(180),
        mode: "single",
        inline: true,
        showMonths: 1,
        dateFormat: 'Y-m-d H:i:s'
      };
    },
    initializeWeekObject: function initializeWeekObject() {
      return {
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false
      };
    },
    initializeShowtimeObject: function initializeShowtimeObject() {
      return {
        hh: "00",
        mm: "00",
        A: "PM"
      };
    },
    addWeekDay: function addWeekDay(day) {
      this.showStartDate = true;
      this.week[day] = !this.week[day];
    },
    onLoad: function onLoad() {
      var _this = this;

      if (this.event.showtype == 'a') {
        return this.showType = 'Anytime';
      }

      ;

      if (this.event.showtype == 'o') {
        return this.showType = 'Weekly';
      }

      ;

      if (this.event.showtype == 's') {
        return this.showType = 'Specific Dates';
      }

      ;
      axios.get(this.onFetch('shows')).then(function (res) {
        res.data.dates ? _this.dates = res.data.dates : '';
        res.data.week ? _this.week = res.data.week : '';
        res.data.showTimes ? _this.showTimes = res.data.showTimes : '';
      });
    },
    onSubmit: function onSubmit(value) {
      var _this2 = this;

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.post(this.endpoint, this.submitObject).then(function (res) {
        console.log(res.data);
        value == 'exit' || _this2.exit == true ? _this2.onBackInitial() : _this2.onForward('tickets');
      })["catch"](function (err) {
        _this2.onErrors(err);
      });
    },
    setStartDate: function setStartDate() {
      return this.dates.length ? this.startDate = this.dates[0] : '';
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.onLoad();
    this.setStartDate();
    setTimeout(function () {
      return _this3.$refs.datePicker.fp.jumpToDate(new Date());
    }, 100);
  },
  validations: {
    showTimes: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["maxLength"])(1000)
    },
    dates: {
      ifDates: function ifDates() {
        return this.showType == 'Specific Dates' ? this.dates.length ? true : false : true;
      }
    },
    week: {
      ifWeekly: function ifWeekly() {
        return this.showType == 'Weekly' ? this.week.mon == 1 || this.week.tue == 1 || this.week.wed == 1 || this.week.thu == 1 || this.week.fri == 1 || this.week.sat == 1 || this.week.sun == 1 ? true : false : true;
      }
    },
    timezone: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_3__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/shows.vue?vue&type=template&id=6a22caac&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/shows.vue?vue&type=template&id=6a22caac& ***!
  \**********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "event-create__shows" }, [
    _c("section", {}, [
      _c("div", { staticClass: "listing-details-block" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "show-type-selection" }, [
          _c(
            "div",
            { staticClass: "field" },
            [
              _c("label", { staticClass: "area" }, [
                _vm._v("Select the type of operating hours")
              ]),
              _vm._v(" "),
              _c("multiselect", {
                class: { active: _vm.active == "type", error: _vm.$v.$error },
                attrs: {
                  "show-labels": false,
                  options: _vm.showTypeOptions,
                  placeholder: "Show hours type",
                  "open-direction": "bottom",
                  allowEmpty: false
                },
                on: {
                  select: function($event) {
                    _vm.dates = []
                  },
                  click: function($event) {
                    _vm.active = "type"
                  },
                  blur: function($event) {
                    _vm.active = null
                  }
                },
                model: {
                  value: _vm.showType,
                  callback: function($$v) {
                    _vm.showType = $$v
                  },
                  expression: "showType"
                }
              })
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showType == "Specific Dates",
                expression: "showType == 'Specific Dates'"
              }
            ],
            staticClass: "specific-show-dates"
          },
          [
            _c("section", { staticClass: "event-enter-showdates" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Select all show dates")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "calendar desktop" },
                  [
                    _c("flat-pickr", {
                      ref: "datePicker",
                      staticClass: "form-control",
                      attrs: {
                        config: _vm.calendarConfig,
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
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "calendar mobile" },
                  [
                    _c("flat-pickr", {
                      ref: "datePicker",
                      staticClass: "form-control",
                      attrs: {
                        config: _vm.mobileCalendarConfig,
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
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.$v.dates.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.dates.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Please add at least 1 show date")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("section", [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", [_vm._v(" Show Timezone ")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    class: {
                      active: _vm.active == "timezone",
                      error: _vm.$v.timezone.$error
                    },
                    attrs: {
                      "deselect-label": "Can't remove this value",
                      "track-by": "name",
                      label: "description",
                      placeholder: "Select timezone",
                      options: _vm.timezones,
                      "allow-empty": false
                    },
                    on: {
                      click: function($event) {
                        _vm.active = "timezone"
                      },
                      blur: function($event) {
                        _vm.active = null
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "singleLabel",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _c("strong", [_vm._v(_vm._s(option.description))])
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.timezone,
                      callback: function($$v) {
                        _vm.timezone = $$v
                      },
                      expression: "timezone"
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.timezone.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.timezone.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Please include timezone of show")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "event-enter-showtimes" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Show Times")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.showTimes,
                      expression: "showTimes"
                    }
                  ],
                  staticClass: "create-input area",
                  class: {
                    active: _vm.active == "times",
                    error: _vm.$v.showTimes.$error
                  },
                  attrs: {
                    rows: "8",
                    placeholder: _vm.placeholders,
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.showTimes },
                  on: {
                    click: function($event) {
                      _vm.active = "times"
                    },
                    blur: function($event) {
                      _vm.active = null
                    },
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.showTimes = $event.target.value
                      },
                      _vm.$v.showTimes.$touch
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.showTimes.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.showTimes.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v(
                              "Please give a brief description of show times"
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.showTimes.maxLength
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Show time is too long")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("section", [
              _c("div", { staticClass: "field" }, [
                _c("label", [
                  _vm._v(
                    " Does the event have a specific embargo date? (date you would like it to appear on EI) "
                  )
                ]),
                _vm._v(" "),
                _c("div", { attrs: { id: "cover" } }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.showEmbargoDate,
                        expression: "showEmbargoDate"
                      }
                    ],
                    attrs: { type: "checkbox", id: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.showEmbargoDate)
                        ? _vm._i(_vm.showEmbargoDate, null) > -1
                        : _vm.showEmbargoDate
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.showEmbargoDate,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.showEmbargoDate = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.showEmbargoDate = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.showEmbargoDate = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "bar" } }),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "knob" } }, [
                    _vm.showEmbargoDate
                      ? _c("p", [_vm._v("Yes")])
                      : _c("p", [_vm._v("No")])
                  ])
                ]),
                _vm._v(" "),
                _vm.showEmbargoDate
                  ? _c("div", [
                      _c(
                        "div",
                        { staticClass: "embargo-calendar" },
                        [
                          _c("flat-pickr", {
                            ref: "datePicker",
                            staticClass: "form-control",
                            attrs: {
                              config: _vm.embargoCalendarConfig,
                              placeholder: "Select date",
                              name: "dates"
                            },
                            model: {
                              value: _vm.embargoDate,
                              callback: function($$v) {
                                _vm.embargoDate = $$v
                              },
                              expression: "embargoDate"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e()
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
                value: _vm.showType == "Weekly",
                expression: "showType == 'Weekly'"
              }
            ],
            staticClass: "ongoing-show-dates"
          },
          [
            _c("section", { staticClass: "event-enter-showdates" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Select show days")]),
                _vm._v(" "),
                _c("div", { staticClass: "week-calendar grid" }, [
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.mon },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("mon")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Mon")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.tue },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("tue")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Tue")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.wed },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("wed")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Wed")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.thu },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("thu")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Thu")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.fri },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("fri")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Fri")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.sat },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("sat")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Sat")])]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "week-calendar__day",
                      class: { active: _vm.week.sun },
                      on: {
                        click: function($event) {
                          return _vm.addWeekDay("sun")
                        }
                      }
                    },
                    [_c("h4", [_vm._v("Sun")])]
                  )
                ]),
                _vm._v(" "),
                _vm.$v.week.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.week.ifWeekly
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Please select at least one day")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.showStartDate,
                      expression: "showStartDate"
                    }
                  ],
                  staticClass: "field"
                },
                [
                  _c("label", [
                    _vm._v(" Select the first day your weekly shows begin")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "embargo-calendar" },
                    [
                      _c("flat-pickr", {
                        ref: "datePicker",
                        staticClass: "form-control",
                        attrs: {
                          config: _vm.embargoCalendarConfig,
                          placeholder: "Select date",
                          name: "dates"
                        },
                        model: {
                          value: _vm.startDate,
                          callback: function($$v) {
                            _vm.startDate = $$v
                          },
                          expression: "startDate"
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c("section", [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", [_vm._v(" Show Timezone ")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    class: {
                      active: _vm.active == "timezone",
                      error: _vm.$v.timezone.$error
                    },
                    attrs: {
                      "deselect-label": "Can't remove this value",
                      "track-by": "name",
                      label: "description",
                      placeholder: "Select timezone",
                      options: _vm.timezones,
                      "allow-empty": false
                    },
                    on: {
                      click: function($event) {
                        _vm.active = "timezone"
                      },
                      blur: function($event) {
                        _vm.active = null
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "singleLabel",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _c("strong", [_vm._v(_vm._s(option.description))])
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.timezone,
                      callback: function($$v) {
                        _vm.timezone = $$v
                      },
                      expression: "timezone"
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.timezone.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.timezone.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Please include timezone of show")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "event-enter-showtimes" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Show Times (please include time zone)")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.showTimes,
                      expression: "showTimes"
                    }
                  ],
                  staticClass: "create-input area",
                  class: {
                    active: _vm.active == "times",
                    error: _vm.$v.showTimes.$error
                  },
                  attrs: {
                    rows: "8",
                    placeholder: _vm.placeholdero,
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.showTimes },
                  on: {
                    click: function($event) {
                      _vm.active = "times"
                    },
                    blur: function($event) {
                      _vm.active = null
                    },
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.showTimes = $event.target.value
                      },
                      _vm.$v.showTimes.$touch
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.showTimes.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.showTimes.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v(
                              "Please give a brief description of show times"
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.showTimes.maxLength
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Show time is too long")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("section", [
              _c("div", { staticClass: "field" }, [
                _c("label", [
                  _vm._v(
                    " Does the event have a specific embargo date? (date you would like it to appear on EI) "
                  )
                ]),
                _vm._v(" "),
                _c("div", { attrs: { id: "cover" } }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.showEmbargoDate,
                        expression: "showEmbargoDate"
                      }
                    ],
                    attrs: { type: "checkbox", id: "checkbox" },
                    domProps: {
                      checked: Array.isArray(_vm.showEmbargoDate)
                        ? _vm._i(_vm.showEmbargoDate, null) > -1
                        : _vm.showEmbargoDate
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.showEmbargoDate,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.showEmbargoDate = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.showEmbargoDate = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.showEmbargoDate = $$c
                        }
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "bar" } }),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "knob" } }, [
                    _vm.showEmbargoDate
                      ? _c("p", [_vm._v("Yes")])
                      : _c("p", [_vm._v("No")])
                  ])
                ]),
                _vm._v(" "),
                _vm.showEmbargoDate
                  ? _c("div", [
                      _c(
                        "div",
                        { staticClass: "embargo-calendar" },
                        [
                          _c("flat-pickr", {
                            ref: "datePicker",
                            staticClass: "form-control",
                            attrs: {
                              config: _vm.embargoCalendarConfig,
                              placeholder: "Select date",
                              name: "dates"
                            },
                            model: {
                              value: _vm.embargoDate,
                              callback: function($$v) {
                                _vm.embargoDate = $$v
                              },
                              expression: "embargoDate"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  : _vm._e()
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
                value: _vm.showType == "Anytime",
                expression: "showType == 'Anytime'"
              }
            ],
            staticClass: "everyday-show-dates"
          },
          [
            _c("section", { staticClass: "event-enter-showtimes" }, [
              _c("div", { staticClass: "field" }, [
                _c("label", [_vm._v(" Show Times (please include time zone)")]),
                _vm._v(" "),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.showTimes,
                      expression: "showTimes"
                    }
                  ],
                  staticClass: "create-input area",
                  class: {
                    active: _vm.active == "times",
                    error: _vm.$v.showTimes.$error
                  },
                  attrs: {
                    rows: "8",
                    placeholder: _vm.placeholdera,
                    required: "",
                    autofocus: ""
                  },
                  domProps: { value: _vm.showTimes },
                  on: {
                    click: function($event) {
                      _vm.active = "times"
                    },
                    blur: function($event) {
                      _vm.active = null
                    },
                    input: [
                      function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.showTimes = $event.target.value
                      },
                      _vm.$v.showTimes.$touch
                    ]
                  }
                }),
                _vm._v(" "),
                _vm.$v.showTimes.$error
                  ? _c("div", { staticClass: "validation-error" }, [
                      !_vm.$v.showTimes.required
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v(
                              "Please give a brief description of show times"
                            )
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.$v.showTimes.maxLength
                        ? _c("p", { staticClass: "error" }, [
                            _vm._v("Show time is too long")
                          ])
                        : _vm._e()
                    ])
                  : _vm._e()
              ])
            ]),
            _vm._v(" "),
            _c("section", [
              _c(
                "div",
                { staticClass: "field" },
                [
                  _c("label", [_vm._v(" Show Timezone ")]),
                  _vm._v(" "),
                  _c("multiselect", {
                    class: {
                      active: _vm.active == "timezone",
                      error: _vm.$v.timezone.$error
                    },
                    attrs: {
                      "deselect-label": "Can't remove this value",
                      "track-by": "name",
                      label: "description",
                      placeholder: "Select timezone",
                      options: _vm.timezones,
                      "allow-empty": false
                    },
                    on: {
                      click: function($event) {
                        _vm.active = "timezone"
                      },
                      blur: function($event) {
                        _vm.active = null
                      }
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "singleLabel",
                        fn: function(ref) {
                          var option = ref.option
                          return [
                            _c("strong", [_vm._v(_vm._s(option.description))])
                          ]
                        }
                      }
                    ]),
                    model: {
                      value: _vm.timezone,
                      callback: function($$v) {
                        _vm.timezone = $$v
                      },
                      expression: "timezone"
                    }
                  }),
                  _vm._v(" "),
                  _vm.$v.timezone.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !_vm.$v.timezone.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Please include timezone of show")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("section", { staticClass: "event-enter-showdates" }, [
              _c(
                "div",
                { staticClass: "field", staticStyle: { "margin-top": "6rem" } },
                [
                  _c("label", [
                    _vm._v(
                      " Does the event have a specific embargo date? (date you would like it to appear on EI) "
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { attrs: { id: "cover" } }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.showEmbargoDate,
                          expression: "showEmbargoDate"
                        }
                      ],
                      attrs: { type: "checkbox", id: "checkbox" },
                      domProps: {
                        checked: Array.isArray(_vm.showEmbargoDate)
                          ? _vm._i(_vm.showEmbargoDate, null) > -1
                          : _vm.showEmbargoDate
                      },
                      on: {
                        change: function($event) {
                          var $$a = _vm.showEmbargoDate,
                            $$el = $event.target,
                            $$c = $$el.checked ? true : false
                          if (Array.isArray($$a)) {
                            var $$v = null,
                              $$i = _vm._i($$a, $$v)
                            if ($$el.checked) {
                              $$i < 0 &&
                                (_vm.showEmbargoDate = $$a.concat([$$v]))
                            } else {
                              $$i > -1 &&
                                (_vm.showEmbargoDate = $$a
                                  .slice(0, $$i)
                                  .concat($$a.slice($$i + 1)))
                            }
                          } else {
                            _vm.showEmbargoDate = $$c
                          }
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "bar" } }),
                    _vm._v(" "),
                    _c("div", { attrs: { id: "knob" } }, [
                      _vm.showEmbargoDate
                        ? _c("p", [_vm._v("Yes")])
                        : _c("p", [_vm._v("No")])
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.showEmbargoDate
                    ? _c("div", [
                        _c(
                          "div",
                          { staticClass: "embargo-calendar" },
                          [
                            _c("flat-pickr", {
                              ref: "datePicker",
                              staticClass: "form-control",
                              attrs: {
                                config: _vm.embargoCalendarConfig,
                                placeholder: "Select date",
                                name: "dates"
                              },
                              model: {
                                value: _vm.embargoDate,
                                callback: function($$v) {
                                  _vm.embargoDate = $$v
                                },
                                expression: "embargoDate"
                              }
                            })
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ]
              )
            ])
          ]
        )
      ])
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
              return _vm.onBack("category")
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
      _c("h2", [_vm._v("Dates and Times")])
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

/***/ "./resources/js/pages/create/shows.vue":
/*!*********************************************!*\
  !*** ./resources/js/pages/create/shows.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shows_vue_vue_type_template_id_6a22caac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows.vue?vue&type=template&id=6a22caac& */ "./resources/js/pages/create/shows.vue?vue&type=template&id=6a22caac&");
/* harmony import */ var _shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shows.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/shows.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shows_vue_vue_type_template_id_6a22caac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shows_vue_vue_type_template_id_6a22caac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/shows.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/shows.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/pages/create/shows.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./shows.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/shows.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/shows.vue?vue&type=template&id=6a22caac&":
/*!****************************************************************************!*\
  !*** ./resources/js/pages/create/shows.vue?vue&type=template&id=6a22caac& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_template_id_6a22caac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./shows.vue?vue&type=template&id=6a22caac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/shows.vue?vue&type=template&id=6a22caac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_template_id_6a22caac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_template_id_6a22caac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);