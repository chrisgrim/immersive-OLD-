(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/shows.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/shows.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/format/index.js");
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_format__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! v-money */ "./node_modules/v-money/dist/v-money.js");
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(v_money__WEBPACK_IMPORTED_MODULE_5__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    event: {
      type: Object
    }
  },
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default.a,
    Money: v_money__WEBPACK_IMPORTED_MODULE_5__["Money"]
  },
  computed: {
    // return this.dates.length > 10 ? this.dates.split(",") : '';
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
    }
  },
  data: function data() {
    return {
      eventUrl: "/create-event/".concat(this.event.slug),
      dates: '',
      config: {
        minDate: "today",
        maxDate: new Date().fp_incr(180),
        mode: "multiple",
        inline: true,
        showMonths: 2,
        dateFormat: 'Y-m-d H:i:s'
      },
      tickets: [this.initializeTicketObject()],
      showTimes: '',
      money: {
        decimal: '.',
        thousands: '',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false
      },
      dis: false,
      num: false,
      activeItem: null
    };
  },
  methods: {
    //deletes a ticket row or clears the first one
    deleteRow: function deleteRow(index) {
      this.$delete(this.tickets, index);
    },
    initializeShowtimeObject: function initializeShowtimeObject() {
      return {
        hh: "00",
        mm: "00",
        A: "PM"
      };
    },
    // when user clicks new ticket this creates a new ticket object
    addTickets: function addTickets() {
      this.tickets.push(this.initializeTicketObject());
    },
    //creates a ticket Object
    initializeTicketObject: function initializeTicketObject() {
      return {
        id: '',
        name: '',
        show_id: '',
        ticket_amount: '',
        ticket_price: ''
      };
    },
    // If there is data in Database it will load from the database
    load: function load() {
      var _this = this;

      axios.get("".concat(this.eventUrl, "/shows/fetch?timestamp=").concat(new Date().getTime())).then(function (response) {
        console.log(response.data);
        response.data.dates.length ? _this.dates = response.data.dates : '';
        response.data.tickets.length ? _this.tickets = response.data.tickets[0].tickets : '';
        response.data.showTimes ? _this.showTimes = response.data.showTimes : '';
      });
    },
    goBack: function goBack() {
      window.location.href = "".concat(this.eventUrl, "/category");
    },
    //Submits the users dates and tickets to the database
    submitDates: function submitDates() {
      var _this2 = this;

      var data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function submitDates$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this.num = true;
              this.$v.$touch();

              if (!this.$v.$invalid) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", false);

            case 4:
              this.dis = true;
              data = {
                'dates': this.dateArray,
                'showtimes': this.showTimes,
                'tickets': this.tickets
              };
              axios.post("".concat(this.eventUrl, "/shows"), data).then(function (response) {
                // console.log(response.data)
                window.location.href = "".concat(_this2.eventUrl, "/description");
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  },
  mounted: function mounted() {
    this.load();
  },
  validations: {
    tickets: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      $each: {
        name: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(80)
        },
        ticket_price: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
          minValue: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["minValue"])(0.01),
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(7)
        }
      }
    },
    showTimes: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(400)
    },
    dates: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"]
    }
  }
});

/***/ }),

/***/ "./node_modules/v-money/dist/v-money.js":
/*!**********************************************!*\
  !*** ./node_modules/v-money/dist/v-money.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(e,t){ true?module.exports=t():undefined})(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p=".",t(t.s=9)}([function(e,t,n){"use strict";t.a={prefix:"",suffix:"",thousands:",",decimal:".",precision:2}},function(e,t,n){"use strict";var r=n(2),i=n(5),u=n(0);t.a=function(e,t){if(t.value){var o=n.i(i.a)(u.a,t.value);if("INPUT"!==e.tagName.toLocaleUpperCase()){var a=e.getElementsByTagName("input");1!==a.length||(e=a[0])}e.oninput=function(){var t=e.value.length-e.selectionEnd;e.value=n.i(r.a)(e.value,o),t=Math.max(t,o.suffix.length),t=e.value.length-t,t=Math.max(t,o.prefix.length+1),n.i(r.b)(e,t),e.dispatchEvent(n.i(r.c)("change"))},e.onfocus=function(){n.i(r.b)(e,e.value.length-o.suffix.length)},e.oninput(),e.dispatchEvent(n.i(r.c)("input"))}}},function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.a;"number"==typeof e&&(e=e.toFixed(o(t.precision)));var n=e.indexOf("-")>=0?"-":"",r=u(e),i=c(r,t.precision),a=d(i).split("."),p=a[0],l=a[1];return p=f(p,t.thousands),t.prefix+n+s(p,l,t.decimal)+t.suffix}function i(e,t){var n=e.indexOf("-")>=0?-1:1,r=u(e),i=c(r,t);return parseFloat(i)*n}function u(e){return d(e).replace(/\D+/g,"")||"0"}function o(e){return a(0,e,20)}function a(e,t,n){return Math.max(e,Math.min(t,n))}function c(e,t){var n=Math.pow(10,t);return(parseFloat(e)/n).toFixed(o(t))}function f(e,t){return e.replace(/(\d)(?=(?:\d{3})+\b)/gm,"$1"+t)}function s(e,t,n){return t?e+n+t:e}function d(e){return e?e.toString():""}function p(e,t){var n=function(){e.setSelectionRange(t,t)};e===document.activeElement&&(n(),setTimeout(n,1))}function l(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!0),t}var m=n(0);n.d(t,"a",function(){return r}),n.d(t,"d",function(){return i}),n.d(t,"b",function(){return p}),n.d(t,"c",function(){return l})},function(e,t,n){"use strict";function r(e,t){t&&Object.keys(t).map(function(e){a.a[e]=t[e]}),e.directive("money",o.a),e.component("money",u.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),u=n.n(i),o=n(1),a=n(0);n.d(t,"Money",function(){return u.a}),n.d(t,"VMoney",function(){return o.a}),n.d(t,"options",function(){return a.a}),n.d(t,"VERSION",function(){return c});var c="0.8.1";t.default=r,"undefined"!=typeof window&&window.Vue&&window.Vue.use(r)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=n(0),u=n(2);t.default={name:"Money",props:{value:{required:!0,type:[Number,String],default:0},masked:{type:Boolean,default:!1},precision:{type:Number,default:function(){return i.a.precision}},decimal:{type:String,default:function(){return i.a.decimal}},thousands:{type:String,default:function(){return i.a.thousands}},prefix:{type:String,default:function(){return i.a.prefix}},suffix:{type:String,default:function(){return i.a.suffix}}},directives:{money:r.a},data:function(){return{formattedValue:""}},watch:{value:{immediate:!0,handler:function(e,t){var r=n.i(u.a)(e,this.$props);r!==this.formattedValue&&(this.formattedValue=r)}}},methods:{change:function(e){this.$emit("input",this.masked?e.target.value:n.i(u.d)(e.target.value,this.precision))}}}},function(e,t,n){"use strict";t.a=function(e,t){return e=e||{},t=t||{},Object.keys(e).concat(Object.keys(t)).reduce(function(n,r){return n[r]=void 0===t[r]?e[r]:t[r],n},{})}},function(e,t,n){var r=n(7)(n(4),n(8),null,null);e.exports=r.exports},function(e,t){e.exports=function(e,t,n,r){var i,u=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(i=e,u=e.default);var a="function"==typeof u?u.options:u;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),n&&(a._scopeId=n),r){var c=a.computed||(a.computed={});Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}})}return{esModule:i,exports:u,options:a}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{directives:[{name:"money",rawName:"v-money",value:{precision:e.precision,decimal:e.decimal,thousands:e.thousands,prefix:e.prefix,suffix:e.suffix},expression:"{precision, decimal, thousands, prefix, suffix}"}],staticClass:"v-money",attrs:{type:"tel"},domProps:{value:e.formattedValue},on:{change:e.change}})},staticRenderFns:[]}},function(e,t,n){e.exports=n(3)}])});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/shows.vue?vue&type=template&id=07ccd6e4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/create/shows.vue?vue&type=template&id=07ccd6e4& ***!
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
  return _c("div", { staticClass: "shows" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "section" }, [
      _c("div", { staticClass: "pricing" }, [
        _c("div", { staticClass: "field" }, [
          _c("label", { staticClass: "area" }, [_vm._v(" Show times")]),
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
              active: _vm.activeItem == "times",
              error: _vm.$v.showTimes.$error
            },
            attrs: {
              rows: "8",
              placeholder:
                "Please provide a brief description of daily show times...8:00PM and 10:00PM shows or 10:00PM shows during the week and 12:00PM during the weekend.",
              required: "",
              autofocus: ""
            },
            domProps: { value: _vm.showTimes },
            on: {
              click: function($event) {
                _vm.activeItem = "times"
              },
              blur: function($event) {
                _vm.activeItem = null
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
                      _vm._v("Please give a brief description of show times")
                    ])
                  : _vm._e()
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field cost" }, [
          _c("label", { staticClass: "area" }, [
            _vm._v(" Ticket types and prices ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "ticket-box" },
            _vm._l(_vm.$v.tickets.$each.$iter, function(v, index) {
              return _c("div", { staticClass: "ticket-box-grid" }, [
                _c("div", { staticClass: "field" }, [
                  _c("label", [_vm._v("Ticket Type")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: v.name.$model,
                        expression: "v.name.$model"
                      }
                    ],
                    staticClass: "create-input",
                    class: {
                      active: _vm.activeItem == "ticket",
                      error: v.name.$error
                    },
                    attrs: {
                      name: "name",
                      placeholder: "ex: General, VIP, Student"
                    },
                    domProps: { value: v.name.$model },
                    on: {
                      click: function($event) {
                        _vm.activeItem = "ticket"
                      },
                      blur: function($event) {
                        _vm.activeItem = null
                      },
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(v.name, "$model", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  v.name.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !v.name.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Must enter a ticket name")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !v.name.maxLength
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Name is too Long")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "field" }, [
                  _c("label", [_vm._v("Ticket Price")]),
                  _vm._v(" "),
                  _vm.money.type === "checkbox"
                    ? _c(
                        "input",
                        _vm._b(
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: v.ticket_price.$model,
                                expression: "v.ticket_price.$model"
                              },
                              {
                                name: "money",
                                rawName: "v-money",
                                value: _vm.money,
                                expression: "money"
                              }
                            ],
                            class: {
                              active: _vm.activeItem == "price",
                              error: v.ticket_price.$error && _vm.num
                            },
                            staticStyle: { "text-align": "right" },
                            attrs: { placeholder: "$0.00", type: "checkbox" },
                            domProps: {
                              checked: Array.isArray(v.ticket_price.$model)
                                ? _vm._i(v.ticket_price.$model, null) > -1
                                : v.ticket_price.$model
                            },
                            on: {
                              click: function($event) {
                                _vm.activeItem = "price"
                              },
                              blur: function($event) {
                                _vm.activeItem = null
                              },
                              keydown: function($event) {
                                $event.key === "-"
                                  ? $event.preventDefault()
                                  : null
                              },
                              change: function($event) {
                                var $$a = v.ticket_price.$model,
                                  $$el = $event.target,
                                  $$c = $$el.checked ? true : false
                                if (Array.isArray($$a)) {
                                  var $$v = null,
                                    $$i = _vm._i($$a, $$v)
                                  if ($$el.checked) {
                                    $$i < 0 &&
                                      _vm.$set(
                                        v.ticket_price,
                                        "$model",
                                        $$a.concat([$$v])
                                      )
                                  } else {
                                    $$i > -1 &&
                                      _vm.$set(
                                        v.ticket_price,
                                        "$model",
                                        $$a
                                          .slice(0, $$i)
                                          .concat($$a.slice($$i + 1))
                                      )
                                  }
                                } else {
                                  _vm.$set(v.ticket_price, "$model", $$c)
                                }
                              }
                            }
                          },
                          "input",
                          _vm.money,
                          false
                        )
                      )
                    : _vm.money.type === "radio"
                    ? _c(
                        "input",
                        _vm._b(
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: v.ticket_price.$model,
                                expression: "v.ticket_price.$model"
                              },
                              {
                                name: "money",
                                rawName: "v-money",
                                value: _vm.money,
                                expression: "money"
                              }
                            ],
                            class: {
                              active: _vm.activeItem == "price",
                              error: v.ticket_price.$error && _vm.num
                            },
                            staticStyle: { "text-align": "right" },
                            attrs: { placeholder: "$0.00", type: "radio" },
                            domProps: {
                              checked: _vm._q(v.ticket_price.$model, null)
                            },
                            on: {
                              click: function($event) {
                                _vm.activeItem = "price"
                              },
                              blur: function($event) {
                                _vm.activeItem = null
                              },
                              keydown: function($event) {
                                $event.key === "-"
                                  ? $event.preventDefault()
                                  : null
                              },
                              change: function($event) {
                                return _vm.$set(v.ticket_price, "$model", null)
                              }
                            }
                          },
                          "input",
                          _vm.money,
                          false
                        )
                      )
                    : _c(
                        "input",
                        _vm._b(
                          {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: v.ticket_price.$model,
                                expression: "v.ticket_price.$model"
                              },
                              {
                                name: "money",
                                rawName: "v-money",
                                value: _vm.money,
                                expression: "money"
                              }
                            ],
                            class: {
                              active: _vm.activeItem == "price",
                              error: v.ticket_price.$error && _vm.num
                            },
                            staticStyle: { "text-align": "right" },
                            attrs: {
                              placeholder: "$0.00",
                              type: _vm.money.type
                            },
                            domProps: { value: v.ticket_price.$model },
                            on: {
                              click: function($event) {
                                _vm.activeItem = "price"
                              },
                              blur: function($event) {
                                _vm.activeItem = null
                              },
                              keydown: function($event) {
                                $event.key === "-"
                                  ? $event.preventDefault()
                                  : null
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  v.ticket_price,
                                  "$model",
                                  $event.target.value
                                )
                              }
                            }
                          },
                          "input",
                          _vm.money,
                          false
                        )
                      ),
                  _vm._v(" "),
                  v.ticket_price.$error
                    ? _c("div", { staticClass: "validation-error" }, [
                        !v.ticket_price.minValue
                          ? _c(
                              "p",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.num,
                                    expression: "num"
                                  }
                                ],
                                staticClass: "error"
                              },
                              [_vm._v("Please enter an amount")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        !v.ticket_price.maxLength
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Please enter an amount under $10,000")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !v.ticket_price.required
                          ? _c("p", { staticClass: "error" }, [
                              _vm._v("Please enter a price")
                            ])
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.tickets.length > 1
                    ? _c(
                        "button",
                        {
                          staticClass: "delete-circle",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.deleteRow(index)
                            }
                          }
                        },
                        [_vm._v("X")]
                      )
                    : _vm._e()
                ])
              ])
            }),
            0
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "add-button",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.addTickets($event)
                }
              }
            },
            [
              _c("button", { staticClass: "add-button" }, [
                _vm._v("+ Ticket Types")
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "calendar" }, [
        _c(
          "div",
          { staticClass: "field" },
          [
            _c("label", [_vm._v(" Select all show dates")]),
            _vm._v(" "),
            _c("flat-pickr", {
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
            _vm.$v.dates.$error
              ? _c("div", { staticClass: "validation-error" }, [
                  !_vm.$v.dates.required
                    ? _c("p", { staticClass: "error" }, [
                        _vm._v("Please add at least 1 show date")
                      ])
                    : _vm._e()
                ])
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "create",
            attrs: { disabled: _vm.dis },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.submitDates()
              }
            }
          },
          [_vm._v(" Next ")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "inNav" }, [
      _c(
        "button",
        {
          staticClass: "create",
          attrs: { disabled: _vm.dis },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.goBack()
            }
          }
        },
        [_vm._v(" Back ")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "create",
          attrs: { disabled: _vm.dis },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.submitDates()
            }
          }
        },
        [_vm._v(" Next ")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ctitle" }, [_c("h2", [_vm._v("Shows")])])
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

/***/ "./resources/js/components/create/shows.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/create/shows.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shows_vue_vue_type_template_id_07ccd6e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows.vue?vue&type=template&id=07ccd6e4& */ "./resources/js/components/create/shows.vue?vue&type=template&id=07ccd6e4&");
/* harmony import */ var _shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shows.vue?vue&type=script&lang=js& */ "./resources/js/components/create/shows.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _shows_vue_vue_type_template_id_07ccd6e4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _shows_vue_vue_type_template_id_07ccd6e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/create/shows.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/create/shows.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/create/shows.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./shows.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/shows.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/create/shows.vue?vue&type=template&id=07ccd6e4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/create/shows.vue?vue&type=template&id=07ccd6e4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_template_id_07ccd6e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./shows.vue?vue&type=template&id=07ccd6e4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/create/shows.vue?vue&type=template&id=07ccd6e4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_template_id_07ccd6e4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_shows_vue_vue_type_template_id_07ccd6e4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);