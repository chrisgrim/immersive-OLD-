(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/tickets.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/tickets.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/form-validation-mixin */ "./resources/js/mixins/form-validation-mixin.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! v-money */ "./node_modules/v-money/dist/v-money.js");
/* harmony import */ var v_money__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(v_money__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['event'],
  mixins: [_mixins_form_validation_mixin__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    Money: v_money__WEBPACK_IMPORTED_MODULE_3__["Money"],
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  computed: {
    endpoint: function endpoint() {
      return "/create-event/".concat(this.event.slug, "/tickets");
    },
    submitObject: function submitObject() {
      return {
        'tickets': this.tickets
      };
    }
  },
  data: function data() {
    return {
      tickets: this.event.shows.length && this.event.shows[0].tickets.length ? this.event.shows[0].tickets : [],
      money: this.initializeMoneyObject(),
      ticketOptions: [{
        id: '',
        name: 'VIP',
        ticket_price: '',
        description: ''
      }, {
        id: '',
        name: 'Student',
        ticket_price: '',
        description: ''
      }, {
        id: '',
        name: 'General',
        ticket_price: '',
        description: ''
      }, {
        id: '',
        name: 'Free',
        ticket_price: '',
        description: ''
      }, {
        id: '',
        name: 'PWYC',
        ticket_price: '',
        description: ''
      }],
      locked: ['VIP', 'Student', 'General', 'Free', 'PWYC'],
      disabled: false,
      active: null,
      modal: false,
      freeTicket: false,
      exit: false,
      selected: '',
      tempErrorName: false,
      tempErrorPrice: false
    };
  },
  methods: {
    initializeMoneyObject: function initializeMoneyObject() {
      return {
        decimal: '.',
        thousands: '',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false
      };
    },
    initializeTicketObject: function initializeTicketObject() {
      return {
        id: '',
        name: '',
        show_id: '',
        ticket_amount: '',
        ticket_price: ''
      };
    },
    deleteRow: function deleteRow(index, v) {
      this.ticketOptions.push({
        name: v.name.$model,
        ticket_price: 0.00,
        description: ''
      });
      this.$delete(this.tickets, index);
    },
    pushTicket: function pushTicket(value) {
      var val = {
        name: value.name,
        description: '',
        id: '',
        ticket_price: 0.00
      };
      this.tickets.push(val);
      this.selected = '';

      lodash__WEBPACK_IMPORTED_MODULE_1___default.a.remove(this.ticketOptions, {
        name: value.name
      });
    },
    onLoad: function onLoad() {
      var _this = this;

      axios.get(this.onFetch('tickets')).then(function (res) {
        res.data.tickets ? _this.tickets = res.data.tickets[0].tickets : '';
      });
    },
    onSubmit: function onSubmit(value) {
      var _this2 = this;

      var free = ['free', 'pwyc'];
      var previous = [];

      for (var i = 0; i < this.tickets.length; i++) {
        if (!free.includes(this.tickets[i].name.toLowerCase())) {
          if (this.tickets[i].ticket_price == 0.00) {
            this.tempErrorPrice = true;
            return false;
          }
        }

        if (previous.includes(this.tickets[i].name.toLowerCase())) {
          this.tempErrorName = true;
          return false;
        }

        previous.push(this.tickets[i].name.toLowerCase());
      }

      if (this.checkVuelidate()) {
        return false;
      }

      ;
      axios.post(this.endpoint, this.submitObject).then(function (res) {
        console.log(res.data);
        value == 'exit' || _this2.exit == true ? _this2.onBackInitial() : _this2.onForward('description');
      })["catch"](function (err) {
        _this2.onErrors(err);
      });
    },
    addTag: function addTag(newTag) {
      var tag = {
        name: newTag,
        description: '',
        ticket_price: ''
      };
      this.ticketOptions.push(tag);
      this.tickets.push(tag);
    }
  },
  mounted: function mounted() {
    this.onLoad();
  },
  validations: {
    tickets: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
      $each: {
        name: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(30)
        },
        ticket_price: {
          required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["required"],
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(7)
        },
        description: {
          maxLength: Object(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_2__["maxLength"])(80)
        }
      }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/tickets.vue?vue&type=template&id=92d13706&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/create/tickets.vue?vue&type=template&id=92d13706& ***!
  \************************************************************************************************************************************************************************************************************/
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
        _vm.event.show_times
          ? _c("section", { staticClass: "event-enter-tickets" }, [
              _c("div", { staticClass: "field cost" }, [
                _c("div", { staticClass: "event-tickets__add" }, [
                  _c(
                    "div",
                    { staticClass: "field" },
                    [
                      _c("label", { staticClass: "area" }, [
                        _vm._v("Add new tickets")
                      ]),
                      _vm._v(" "),
                      _c("multiselect", {
                        class: { active: _vm.active == "newTicket" },
                        attrs: {
                          "show-labels": false,
                          "hide-selected": true,
                          resetAfter: true,
                          multiple: false,
                          options: _vm.ticketOptions,
                          "tag-placeholder": "Add this as new tag",
                          taggable: true,
                          "tag-position": "bottom",
                          placeholder: "Type here to create your own",
                          "open-direction": "bottom",
                          label: "name",
                          "track-by": "name"
                        },
                        on: {
                          tag: _vm.addTag,
                          select: _vm.pushTicket,
                          click: function($event) {
                            _vm.active = "newTicket"
                          },
                          blur: function($event) {
                            _vm.active = null
                          }
                        },
                        model: {
                          value: _vm.selected,
                          callback: function($$v) {
                            _vm.selected = $$v
                          },
                          expression: "selected"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm.tickets.length
                  ? _c(
                      "div",
                      { staticClass: "create-shows__ticket-box" },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _vm._l(_vm.$v.tickets.$each.$iter, function(v, index) {
                          return _c(
                            "div",
                            { staticClass: "ticket-box__element grid" },
                            [
                              _c("div", { staticClass: "field" }, [
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
                                    active:
                                      _vm.active == v.name.$model + "name",
                                    error: v.name.$error
                                  },
                                  attrs: {
                                    name: "name",
                                    disabled: _vm.locked.includes(v.name.$model)
                                      ? true
                                      : false,
                                    placeholder: "ex: General, VIP, Student"
                                  },
                                  domProps: { value: v.name.$model },
                                  on: {
                                    click: function($event) {
                                      _vm.active = v.name.$model + "name"
                                      _vm.tempErrorName = false
                                    },
                                    blur: function($event) {
                                      _vm.active = null
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        v.name,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                v.name.$error
                                  ? _c(
                                      "div",
                                      { staticClass: "validation-error" },
                                      [
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
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.tempErrorName
                                  ? _c(
                                      "div",
                                      { staticClass: "validation-error" },
                                      [
                                        _c("p", { staticClass: "error" }, [
                                          _vm._v("Cant have same name")
                                        ])
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
                                      value: v.description.$model,
                                      expression: "v.description.$model"
                                    }
                                  ],
                                  class: {
                                    active: _vm.active == v.name.$model + "des"
                                  },
                                  attrs: { placeholder: "optional" },
                                  domProps: { value: v.description.$model },
                                  on: {
                                    click: function($event) {
                                      _vm.active = v.name.$model + "des"
                                    },
                                    blur: function($event) {
                                      _vm.active = null
                                    },
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        v.description,
                                        "$model",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              v.name.$model == "Free" || v.name.$model == "PWYC"
                                ? _c("div", { staticClass: "field" }, [
                                    _c("div", {
                                      staticClass: "free-ticket__field"
                                    })
                                  ])
                                : _c("div", { staticClass: "field" }, [
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
                                                  expression:
                                                    "v.ticket_price.$model"
                                                },
                                                {
                                                  name: "money",
                                                  rawName: "v-money",
                                                  value: _vm.money,
                                                  expression: "money"
                                                }
                                              ],
                                              class: {
                                                active:
                                                  _vm.active ==
                                                  v.name.$model + "price",
                                                error: v.$error,
                                                error: _vm.tempErrorPrice
                                              },
                                              staticStyle: {
                                                "text-align": "right"
                                              },
                                              attrs: {
                                                placeholder: "$0.00",
                                                type: "checkbox"
                                              },
                                              domProps: {
                                                checked: Array.isArray(
                                                  v.ticket_price.$model
                                                )
                                                  ? _vm._i(
                                                      v.ticket_price.$model,
                                                      null
                                                    ) > -1
                                                  : v.ticket_price.$model
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.active =
                                                    v.name.$model + "price"
                                                  _vm.tempErrorPrice = false
                                                },
                                                blur: function($event) {
                                                  _vm.active = null
                                                },
                                                keydown: function($event) {
                                                  $event.key === "-"
                                                    ? $event.preventDefault()
                                                    : null
                                                },
                                                change: function($event) {
                                                  var $$a =
                                                      v.ticket_price.$model,
                                                    $$el = $event.target,
                                                    $$c = $$el.checked
                                                      ? true
                                                      : false
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
                                                            .concat(
                                                              $$a.slice($$i + 1)
                                                            )
                                                        )
                                                    }
                                                  } else {
                                                    _vm.$set(
                                                      v.ticket_price,
                                                      "$model",
                                                      $$c
                                                    )
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
                                                  expression:
                                                    "v.ticket_price.$model"
                                                },
                                                {
                                                  name: "money",
                                                  rawName: "v-money",
                                                  value: _vm.money,
                                                  expression: "money"
                                                }
                                              ],
                                              class: {
                                                active:
                                                  _vm.active ==
                                                  v.name.$model + "price",
                                                error: v.$error,
                                                error: _vm.tempErrorPrice
                                              },
                                              staticStyle: {
                                                "text-align": "right"
                                              },
                                              attrs: {
                                                placeholder: "$0.00",
                                                type: "radio"
                                              },
                                              domProps: {
                                                checked: _vm._q(
                                                  v.ticket_price.$model,
                                                  null
                                                )
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.active =
                                                    v.name.$model + "price"
                                                  _vm.tempErrorPrice = false
                                                },
                                                blur: function($event) {
                                                  _vm.active = null
                                                },
                                                keydown: function($event) {
                                                  $event.key === "-"
                                                    ? $event.preventDefault()
                                                    : null
                                                },
                                                change: function($event) {
                                                  return _vm.$set(
                                                    v.ticket_price,
                                                    "$model",
                                                    null
                                                  )
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
                                                  expression:
                                                    "v.ticket_price.$model"
                                                },
                                                {
                                                  name: "money",
                                                  rawName: "v-money",
                                                  value: _vm.money,
                                                  expression: "money"
                                                }
                                              ],
                                              class: {
                                                active:
                                                  _vm.active ==
                                                  v.name.$model + "price",
                                                error: v.$error,
                                                error: _vm.tempErrorPrice
                                              },
                                              staticStyle: {
                                                "text-align": "right"
                                              },
                                              attrs: {
                                                placeholder: "$0.00",
                                                type: _vm.money.type
                                              },
                                              domProps: {
                                                value: v.ticket_price.$model
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.active =
                                                    v.name.$model + "price"
                                                  _vm.tempErrorPrice = false
                                                },
                                                blur: function($event) {
                                                  _vm.active = null
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
                                    v.$error
                                      ? _c(
                                          "div",
                                          { staticClass: "validation-error" },
                                          [
                                            !v.ticket_price.maxLength
                                              ? _c(
                                                  "p",
                                                  { staticClass: "error" },
                                                  [
                                                    _vm._v(
                                                      "Please enter an amount under $10,000"
                                                    )
                                                  ]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            !v.ticket_price.required
                                              ? _c(
                                                  "p",
                                                  { staticClass: "error" },
                                                  [
                                                    _vm._v(
                                                      "Please enter a price"
                                                    )
                                                  ]
                                                )
                                              : _vm._e()
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _vm.tempErrorPrice
                                      ? _c(
                                          "div",
                                          { staticClass: "validation-error" },
                                          [
                                            _c("p", { staticClass: "error" }, [
                                              _vm._v("Please enter a price")
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "field" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "delete-circle",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.deleteRow(index, v)
                                      }
                                    }
                                  },
                                  [_vm._v("X")]
                                )
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  : _vm._e()
              ])
            ])
          : _c("section", [
              _vm._v(
                "\n                Please head to Dates and Times to enter show times before adding tickets.\n            "
              )
            ])
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
    return _c("div", { staticClass: "title" }, [_c("h2", [_vm._v("Tickets")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "ticket-box__element grid" }, [
      _c("div", [_c("label", [_vm._v("Ticket Type")])]),
      _vm._v(" "),
      _c("div", [_c("label", [_vm._v("Ticket Description (optional)")])]),
      _vm._v(" "),
      _c("div", [_c("label", [_vm._v("Ticket Price")])])
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

/***/ "./resources/js/pages/create/tickets.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/create/tickets.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tickets_vue_vue_type_template_id_92d13706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tickets.vue?vue&type=template&id=92d13706& */ "./resources/js/pages/create/tickets.vue?vue&type=template&id=92d13706&");
/* harmony import */ var _tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets.vue?vue&type=script&lang=js& */ "./resources/js/pages/create/tickets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tickets_vue_vue_type_template_id_92d13706___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tickets_vue_vue_type_template_id_92d13706___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/create/tickets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/create/tickets.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/create/tickets.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./tickets.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/tickets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tickets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/create/tickets.vue?vue&type=template&id=92d13706&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/create/tickets.vue?vue&type=template&id=92d13706& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tickets_vue_vue_type_template_id_92d13706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./tickets.vue?vue&type=template&id=92d13706& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/create/tickets.vue?vue&type=template&id=92d13706&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tickets_vue_vue_type_template_id_92d13706___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tickets_vue_vue_type_template_id_92d13706___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);