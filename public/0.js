(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flatpickr/dist/flatpickr.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--9-1!./node_modules/postcss-loader/src??ref--9-2!./node_modules/flatpickr/dist/flatpickr.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".flatpickr-calendar {\n  background: transparent;\n  opacity: 0;\n  display: none;\n  text-align: center;\n  visibility: hidden;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  background: #fff;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 1px 0 0 #e6e6e6, -1px 0 0 #e6e6e6, 0 1px 0 #e6e6e6, 0 -1px 0 #e6e6e6, 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  max-height: 640px;\n  visibility: visible;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7) {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1) {\n  -webkit-box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -2px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid #e6e6e6;\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: #e6e6e6;\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #fff;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-months {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-months .flatpickr-month {\n  background: transparent;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n  height: 34px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.flatpickr-months .flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  height: 34px;\n  padding: 10px;\n  z-index: 3;\n  color: rgba(0,0,0,0.9);\n  fill: rgba(0,0,0,0.9);\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-disabled,\n.flatpickr-months .flatpickr-next-month.flatpickr-disabled {\n  display: none;\n}\n.flatpickr-months .flatpickr-prev-month i,\n.flatpickr-months .flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-prev-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  left: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-months .flatpickr-next-month.flatpickr-next-month {\n/*\n      /*rtl:begin:ignore*/\n/*\n      */\n  right: 0;\n/*\n      /*rtl:end:ignore*/\n/*\n      */\n}\n/*\n      /*rtl:begin:ignore*/\n/*\n      /*rtl:end:ignore*/\n.flatpickr-months .flatpickr-prev-month:hover,\n.flatpickr-months .flatpickr-next-month:hover {\n  color: #959ea9;\n}\n.flatpickr-months .flatpickr-prev-month:hover svg,\n.flatpickr-months .flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-months .flatpickr-prev-month svg,\n.flatpickr-months .flatpickr-next-month svg {\n  width: 14px;\n  height: 14px;\n}\n.flatpickr-months .flatpickr-prev-month svg path,\n.flatpickr-months .flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper input::-ms-clear {\n  display: none;\n}\n.numInputWrapper input::-webkit-outer-spin-button,\n.numInputWrapper input::-webkit-inner-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(57,57,57,0.15);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(57,57,57,0.6);\n  top: 26%;\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(57,57,57,0.6);\n  top: 40%;\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(0,0,0,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 7.48px 0 0 0;\n  line-height: 1;\n  height: 34px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: rgba(0,0,0,0.9);\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: text;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: auto;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(0,0,0,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months {\n  appearance: menulist;\n  background: transparent;\n  border: none;\n  border-radius: 0;\n  box-sizing: border-box;\n  color: inherit;\n  cursor: pointer;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  height: auto;\n  line-height: inherit;\n  margin: -1px 0 0 0;\n  outline: none;\n  padding: 0 0 0 0.5ch;\n  position: relative;\n  vertical-align: initial;\n  -webkit-box-sizing: border-box;\n  -webkit-appearance: menulist;\n  -moz-appearance: menulist;\n  width: auto;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:focus,\n.flatpickr-current-month .flatpickr-monthDropdown-months:active {\n  outline: none;\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month {\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n.flatpickr-weekdays {\n  background: transparent;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\n.flatpickr-weekdays .flatpickr-weekdaycontainer {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: transparent;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n  -webkit-align-items: flex-start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  width: 307.875px;\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.dayContainer + .dayContainer {\n  -webkit-box-shadow: -1px 0 0 #e6e6e6;\n          box-shadow: -1px 0 0 #e6e6e6;\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #393939;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e6e6e6;\n  border-color: #e6e6e6;\n}\n.flatpickr-day.today {\n  border-color: #959ea9;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #959ea9;\n  background: #959ea9;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #569ff7;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #569ff7;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.startRange.startRange + .endRange:not(:nth-child(7n+1)),\n.flatpickr-day.endRange.startRange + .endRange:not(:nth-child(7n+1)) {\n  -webkit-box-shadow: -10px 0 0 #569ff7;\n          box-shadow: -10px 0 0 #569ff7;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n          box-shadow: -5px 0 0 #e6e6e6, 5px 0 0 #e6e6e6;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.flatpickr-disabled,\n.flatpickr-day.flatpickr-disabled:hover {\n  cursor: not-allowed;\n  color: rgba(57,57,57,0.1);\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n          box-shadow: -5px 0 0 #569ff7, 5px 0 0 #569ff7;\n}\n.flatpickr-day.hidden {\n  visibility: hidden;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  -webkit-box-shadow: 1px 0 0 #e6e6e6;\n          box-shadow: 1px 0 0 #e6e6e6;\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day,\n.flatpickr-weekwrapper span.flatpickr-day:hover {\n  display: block;\n  width: 100%;\n  max-width: none;\n  color: rgba(57,57,57,0.3);\n  background: transparent;\n  cursor: default;\n  border: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #393939;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #393939;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  color: #393939;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-appearance: textfield;\n  -moz-appearance: textfield;\n  appearance: textfield;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  float: left;\n  line-height: inherit;\n  color: #393939;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time input:hover,\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time input:focus,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #eee;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.css":
/*!***************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--9-1!../../postcss-loader/src??ref--9-2!./flatpickr.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/flatpickr/dist/flatpickr.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/flatpickr/dist/flatpickr.js":
/*!**************************************************!*\
  !*** ./node_modules/flatpickr/dist/flatpickr.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, function () { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    var HOOKS = [
        "onChange",
        "onClose",
        "onDayCreate",
        "onDestroy",
        "onKeyDown",
        "onMonthChange",
        "onOpen",
        "onParseConfig",
        "onReady",
        "onValueUpdate",
        "onYearChange",
        "onPreCalendarPosition",
    ];
    var defaults = {
        _disable: [],
        _enable: [],
        allowInput: false,
        altFormat: "F j, Y",
        altInput: false,
        altInputClass: "form-control input",
        animate: typeof window === "object" &&
            window.navigator.userAgent.indexOf("MSIE") === -1,
        ariaDateFormat: "F j, Y",
        clickOpens: true,
        closeOnSelect: true,
        conjunction: ", ",
        dateFormat: "Y-m-d",
        defaultHour: 12,
        defaultMinute: 0,
        defaultSeconds: 0,
        disable: [],
        disableMobile: false,
        enable: [],
        enableSeconds: false,
        enableTime: false,
        errorHandler: function (err) {
            return typeof console !== "undefined" && console.warn(err);
        },
        getWeek: function (givenDate) {
            var date = new Date(givenDate.getTime());
            date.setHours(0, 0, 0, 0);
            // Thursday in current week decides the year.
            date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
            // January 4 is always in week 1.
            var week1 = new Date(date.getFullYear(), 0, 4);
            // Adjust to Thursday in week 1 and count number of weeks from date to week1.
            return (1 +
                Math.round(((date.getTime() - week1.getTime()) / 86400000 -
                    3 +
                    ((week1.getDay() + 6) % 7)) /
                    7));
        },
        hourIncrement: 1,
        ignoredFocusElements: [],
        inline: false,
        locale: "default",
        minuteIncrement: 5,
        mode: "single",
        monthSelectorType: "dropdown",
        nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
        noCalendar: false,
        now: new Date(),
        onChange: [],
        onClose: [],
        onDayCreate: [],
        onDestroy: [],
        onKeyDown: [],
        onMonthChange: [],
        onOpen: [],
        onParseConfig: [],
        onReady: [],
        onValueUpdate: [],
        onYearChange: [],
        onPreCalendarPosition: [],
        plugins: [],
        position: "auto",
        positionElement: undefined,
        prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
        shorthandCurrentMonth: false,
        showMonths: 1,
        static: false,
        time_24hr: false,
        weekNumbers: false,
        wrap: false
    };

    var english = {
        weekdays: {
            shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            longhand: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
            ]
        },
        months: {
            shorthand: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            longhand: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ]
        },
        daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        firstDayOfWeek: 0,
        ordinal: function (nth) {
            var s = nth % 100;
            if (s > 3 && s < 21)
                return "th";
            switch (s % 10) {
                case 1:
                    return "st";
                case 2:
                    return "nd";
                case 3:
                    return "rd";
                default:
                    return "th";
            }
        },
        rangeSeparator: " to ",
        weekAbbreviation: "Wk",
        scrollTitle: "Scroll to increment",
        toggleTitle: "Click to toggle",
        amPM: ["AM", "PM"],
        yearAriaLabel: "Year",
        hourAriaLabel: "Hour",
        minuteAriaLabel: "Minute",
        time_24hr: false
    };

    var pad = function (number) { return ("0" + number).slice(-2); };
    var int = function (bool) { return (bool === true ? 1 : 0); };
    /* istanbul ignore next */
    function debounce(func, wait, immediate) {
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            timeout !== null && clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (immediate && !timeout)
                func.apply(context, args);
        };
    }
    var arrayify = function (obj) {
        return obj instanceof Array ? obj : [obj];
    };

    function toggleClass(elem, className, bool) {
        if (bool === true)
            return elem.classList.add(className);
        elem.classList.remove(className);
    }
    function createElement(tag, className, content) {
        var e = window.document.createElement(tag);
        className = className || "";
        content = content || "";
        e.className = className;
        if (content !== undefined)
            e.textContent = content;
        return e;
    }
    function clearNode(node) {
        while (node.firstChild)
            node.removeChild(node.firstChild);
    }
    function findParent(node, condition) {
        if (condition(node))
            return node;
        else if (node.parentNode)
            return findParent(node.parentNode, condition);
        return undefined; // nothing found
    }
    function createNumberInput(inputClassName, opts) {
        var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
        if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
            numInput.type = "number";
        }
        else {
            numInput.type = "text";
            numInput.pattern = "\\d*";
        }
        if (opts !== undefined)
            for (var key in opts)
                numInput.setAttribute(key, opts[key]);
        wrapper.appendChild(numInput);
        wrapper.appendChild(arrowUp);
        wrapper.appendChild(arrowDown);
        return wrapper;
    }
    function getEventTarget(event) {
        if (typeof event.composedPath === "function") {
            var path = event.composedPath();
            return path[0];
        }
        return event.target;
    }

    var doNothing = function () { return undefined; };
    var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
    var revFormat = {
        D: doNothing,
        F: function (dateObj, monthName, locale) {
            dateObj.setMonth(locale.months.longhand.indexOf(monthName));
        },
        G: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        H: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        J: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        K: function (dateObj, amPM, locale) {
            dateObj.setHours((dateObj.getHours() % 12) +
                12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
        },
        M: function (dateObj, shortMonth, locale) {
            dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
        },
        S: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
        W: function (dateObj, weekNum, locale) {
            var weekNumber = parseInt(weekNum);
            var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
            date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
            return date;
        },
        Y: function (dateObj, year) {
            dateObj.setFullYear(parseFloat(year));
        },
        Z: function (_, ISODate) { return new Date(ISODate); },
        d: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        h: function (dateObj, hour) {
            dateObj.setHours(parseFloat(hour));
        },
        i: function (dateObj, minutes) {
            dateObj.setMinutes(parseFloat(minutes));
        },
        j: function (dateObj, day) {
            dateObj.setDate(parseFloat(day));
        },
        l: doNothing,
        m: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        n: function (dateObj, month) {
            dateObj.setMonth(parseFloat(month) - 1);
        },
        s: function (dateObj, seconds) {
            dateObj.setSeconds(parseFloat(seconds));
        },
        u: function (_, unixMillSeconds) {
            return new Date(parseFloat(unixMillSeconds));
        },
        w: doNothing,
        y: function (dateObj, year) {
            dateObj.setFullYear(2000 + parseFloat(year));
        }
    };
    var tokenRegex = {
        D: "(\\w+)",
        F: "(\\w+)",
        G: "(\\d\\d|\\d)",
        H: "(\\d\\d|\\d)",
        J: "(\\d\\d|\\d)\\w+",
        K: "",
        M: "(\\w+)",
        S: "(\\d\\d|\\d)",
        U: "(.+)",
        W: "(\\d\\d|\\d)",
        Y: "(\\d{4})",
        Z: "(.+)",
        d: "(\\d\\d|\\d)",
        h: "(\\d\\d|\\d)",
        i: "(\\d\\d|\\d)",
        j: "(\\d\\d|\\d)",
        l: "(\\w+)",
        m: "(\\d\\d|\\d)",
        n: "(\\d\\d|\\d)",
        s: "(\\d\\d|\\d)",
        u: "(.+)",
        w: "(\\d\\d|\\d)",
        y: "(\\d{2})"
    };
    var formats = {
        // get the date in UTC
        Z: function (date) { return date.toISOString(); },
        // weekday name, short, e.g. Thu
        D: function (date, locale, options) {
            return locale.weekdays.shorthand[formats.w(date, locale, options)];
        },
        // full month name e.g. January
        F: function (date, locale, options) {
            return monthToStr(formats.n(date, locale, options) - 1, false, locale);
        },
        // padded hour 1-12
        G: function (date, locale, options) {
            return pad(formats.h(date, locale, options));
        },
        // hours with leading zero e.g. 03
        H: function (date) { return pad(date.getHours()); },
        // day (1-30) with ordinal suffix e.g. 1st, 2nd
        J: function (date, locale) {
            return locale.ordinal !== undefined
                ? date.getDate() + locale.ordinal(date.getDate())
                : date.getDate();
        },
        // AM/PM
        K: function (date, locale) { return locale.amPM[int(date.getHours() > 11)]; },
        // shorthand month e.g. Jan, Sep, Oct, etc
        M: function (date, locale) {
            return monthToStr(date.getMonth(), true, locale);
        },
        // seconds 00-59
        S: function (date) { return pad(date.getSeconds()); },
        // unix timestamp
        U: function (date) { return date.getTime() / 1000; },
        W: function (date, _, options) {
            return options.getWeek(date);
        },
        // full year e.g. 2016
        Y: function (date) { return date.getFullYear(); },
        // day in month, padded (01-30)
        d: function (date) { return pad(date.getDate()); },
        // hour from 1-12 (am/pm)
        h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
        // minutes, padded with leading zero e.g. 09
        i: function (date) { return pad(date.getMinutes()); },
        // day in month (1-30)
        j: function (date) { return date.getDate(); },
        // weekday name, full, e.g. Thursday
        l: function (date, locale) {
            return locale.weekdays.longhand[date.getDay()];
        },
        // padded month number (01-12)
        m: function (date) { return pad(date.getMonth() + 1); },
        // the month number (1-12)
        n: function (date) { return date.getMonth() + 1; },
        // seconds 0-59
        s: function (date) { return date.getSeconds(); },
        // Unix Milliseconds
        u: function (date) { return date.getTime(); },
        // number of the day of the week
        w: function (date) { return date.getDay(); },
        // last two digits of year e.g. 16 for 2016
        y: function (date) { return String(date.getFullYear()).substring(2); }
    };

    var createDateFormatter = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (dateObj, frmt, overrideLocale) {
            var locale = overrideLocale || l10n;
            if (config.formatDate !== undefined) {
                return config.formatDate(dateObj, frmt, locale);
            }
            return frmt
                .split("")
                .map(function (c, i, arr) {
                return formats[c] && arr[i - 1] !== "\\"
                    ? formats[c](dateObj, locale, config)
                    : c !== "\\"
                        ? c
                        : "";
            })
                .join("");
        };
    };
    var createDateParser = function (_a) {
        var _b = _a.config, config = _b === void 0 ? defaults : _b, _c = _a.l10n, l10n = _c === void 0 ? english : _c;
        return function (date, givenFormat, timeless, customLocale) {
            if (date !== 0 && !date)
                return undefined;
            var locale = customLocale || l10n;
            var parsedDate;
            var dateOrig = date;
            if (date instanceof Date)
                parsedDate = new Date(date.getTime());
            else if (typeof date !== "string" &&
                date.toFixed !== undefined // timestamp
            )
                // create a copy
                parsedDate = new Date(date);
            else if (typeof date === "string") {
                // date string
                var format = givenFormat || (config || defaults).dateFormat;
                var datestr = String(date).trim();
                if (datestr === "today") {
                    parsedDate = new Date();
                    timeless = true;
                }
                else if (/Z$/.test(datestr) ||
                    /GMT$/.test(datestr) // datestrings w/ timezone
                )
                    parsedDate = new Date(date);
                else if (config && config.parseDate)
                    parsedDate = config.parseDate(date, format);
                else {
                    parsedDate =
                        !config || !config.noCalendar
                            ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                            : new Date(new Date().setHours(0, 0, 0, 0));
                    var matched = void 0, ops = [];
                    for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                        var token_1 = format[i];
                        var isBackSlash = token_1 === "\\";
                        var escaped = format[i - 1] === "\\" || isBackSlash;
                        if (tokenRegex[token_1] && !escaped) {
                            regexStr += tokenRegex[token_1];
                            var match = new RegExp(regexStr).exec(date);
                            if (match && (matched = true)) {
                                ops[token_1 !== "Y" ? "push" : "unshift"]({
                                    fn: revFormat[token_1],
                                    val: match[++matchIndex]
                                });
                            }
                        }
                        else if (!isBackSlash)
                            regexStr += "."; // don't really care
                        ops.forEach(function (_a) {
                            var fn = _a.fn, val = _a.val;
                            return (parsedDate = fn(parsedDate, val, locale) || parsedDate);
                        });
                    }
                    parsedDate = matched ? parsedDate : undefined;
                }
            }
            /* istanbul ignore next */
            if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
                config.errorHandler(new Error("Invalid date provided: " + dateOrig));
                return undefined;
            }
            if (timeless === true)
                parsedDate.setHours(0, 0, 0, 0);
            return parsedDate;
        };
    };
    /**
     * Compute the difference in dates, measured in ms
     */
    function compareDates(date1, date2, timeless) {
        if (timeless === void 0) { timeless = true; }
        if (timeless !== false) {
            return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
                new Date(date2.getTime()).setHours(0, 0, 0, 0));
        }
        return date1.getTime() - date2.getTime();
    }
    var isBetween = function (ts, ts1, ts2) {
        return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
    };
    var duration = {
        DAY: 86400000
    };

    if (typeof Object.assign !== "function") {
        Object.assign = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            if (!target) {
                throw TypeError("Cannot convert undefined or null to object");
            }
            var _loop_1 = function (source) {
                if (source) {
                    Object.keys(source).forEach(function (key) { return (target[key] = source[key]); });
                }
            };
            for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                var source = args_1[_a];
                _loop_1(source);
            }
            return target;
        };
    }

    var DEBOUNCED_CHANGE_MS = 300;
    function FlatpickrInstance(element, instanceConfig) {
        var self = {
            config: __assign({}, defaults, flatpickr.defaultConfig),
            l10n: english
        };
        self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        self._handlers = [];
        self.pluginElements = [];
        self.loadedPlugins = [];
        self._bind = bind;
        self._setHoursFromDate = setHoursFromDate;
        self._positionCalendar = positionCalendar;
        self.changeMonth = changeMonth;
        self.changeYear = changeYear;
        self.clear = clear;
        self.close = close;
        self._createElement = createElement;
        self.destroy = destroy;
        self.isEnabled = isEnabled;
        self.jumpToDate = jumpToDate;
        self.open = open;
        self.redraw = redraw;
        self.set = set;
        self.setDate = setDate;
        self.toggle = toggle;
        function setupHelperFunctions() {
            self.utils = {
                getDaysInMonth: function (month, yr) {
                    if (month === void 0) { month = self.currentMonth; }
                    if (yr === void 0) { yr = self.currentYear; }
                    if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                        return 29;
                    return self.l10n.daysInMonth[month];
                }
            };
        }
        function init() {
            self.element = self.input = element;
            self.isOpen = false;
            parseConfig();
            setupLocale();
            setupInputs();
            setupDates();
            setupHelperFunctions();
            if (!self.isMobile)
                build();
            bindEvents();
            if (self.selectedDates.length || self.config.noCalendar) {
                if (self.config.enableTime) {
                    setHoursFromDate(self.config.noCalendar
                        ? self.latestSelectedDateObj || self.config.minDate
                        : undefined);
                }
                updateValue(false);
            }
            setCalendarWidth();
            self.showTimeInput =
                self.selectedDates.length > 0 || self.config.noCalendar;
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            /* TODO: investigate this further
        
              Currently, there is weird positioning behavior in safari causing pages
              to scroll up. https://github.com/chmln/flatpickr/issues/563
        
              However, most browsers are not Safari and positioning is expensive when used
              in scale. https://github.com/chmln/flatpickr/issues/1096
            */
            if (!self.isMobile && isSafari) {
                positionCalendar();
            }
            triggerEvent("onReady");
        }
        function bindToInstance(fn) {
            return fn.bind(self);
        }
        function setCalendarWidth() {
            var config = self.config;
            if (config.weekNumbers === false && config.showMonths === 1)
                return;
            else if (config.noCalendar !== true) {
                window.requestAnimationFrame(function () {
                    if (self.calendarContainer !== undefined) {
                        self.calendarContainer.style.visibility = "hidden";
                        self.calendarContainer.style.display = "block";
                    }
                    if (self.daysContainer !== undefined) {
                        var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                        self.daysContainer.style.width = daysWidth + "px";
                        self.calendarContainer.style.width =
                            daysWidth +
                                (self.weekWrapper !== undefined
                                    ? self.weekWrapper.offsetWidth
                                    : 0) +
                                "px";
                        self.calendarContainer.style.removeProperty("visibility");
                        self.calendarContainer.style.removeProperty("display");
                    }
                });
            }
        }
        /**
         * The handler for all events targeting the time inputs
         */
        function updateTime(e) {
            if (self.selectedDates.length === 0) {
                setDefaultTime();
            }
            if (e !== undefined && e.type !== "blur") {
                timeWrapper(e);
            }
            var prevValue = self._input.value;
            setHoursFromInputs();
            updateValue();
            if (self._input.value !== prevValue) {
                self._debouncedChange();
            }
        }
        function ampm2military(hour, amPM) {
            return (hour % 12) + 12 * int(amPM === self.l10n.amPM[1]);
        }
        function military2ampm(hour) {
            switch (hour % 24) {
                case 0:
                case 12:
                    return 12;
                default:
                    return hour % 12;
            }
        }
        /**
         * Syncs the selected date object time with user's time input
         */
        function setHoursFromInputs() {
            if (self.hourElement === undefined || self.minuteElement === undefined)
                return;
            var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
                ? (parseInt(self.secondElement.value, 10) || 0) % 60
                : 0;
            if (self.amPM !== undefined) {
                hours = ampm2military(hours, self.amPM.textContent);
            }
            var limitMinHours = self.config.minTime !== undefined ||
                (self.config.minDate &&
                    self.minDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.minDate, true) ===
                        0);
            var limitMaxHours = self.config.maxTime !== undefined ||
                (self.config.maxDate &&
                    self.maxDateHasTime &&
                    self.latestSelectedDateObj &&
                    compareDates(self.latestSelectedDateObj, self.config.maxDate, true) ===
                        0);
            if (limitMaxHours) {
                var maxTime = self.config.maxTime !== undefined
                    ? self.config.maxTime
                    : self.config.maxDate;
                hours = Math.min(hours, maxTime.getHours());
                if (hours === maxTime.getHours())
                    minutes = Math.min(minutes, maxTime.getMinutes());
                if (minutes === maxTime.getMinutes())
                    seconds = Math.min(seconds, maxTime.getSeconds());
            }
            if (limitMinHours) {
                var minTime = self.config.minTime !== undefined
                    ? self.config.minTime
                    : self.config.minDate;
                hours = Math.max(hours, minTime.getHours());
                if (hours === minTime.getHours())
                    minutes = Math.max(minutes, minTime.getMinutes());
                if (minutes === minTime.getMinutes())
                    seconds = Math.max(seconds, minTime.getSeconds());
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Syncs time input values with a date
         */
        function setHoursFromDate(dateObj) {
            var date = dateObj || self.latestSelectedDateObj;
            if (date)
                setHours(date.getHours(), date.getMinutes(), date.getSeconds());
        }
        function setDefaultHours() {
            var hours = self.config.defaultHour;
            var minutes = self.config.defaultMinute;
            var seconds = self.config.defaultSeconds;
            if (self.config.minDate !== undefined) {
                var minHr = self.config.minDate.getHours();
                var minMinutes = self.config.minDate.getMinutes();
                hours = Math.max(hours, minHr);
                if (hours === minHr)
                    minutes = Math.max(minMinutes, minutes);
                if (hours === minHr && minutes === minMinutes)
                    seconds = self.config.minDate.getSeconds();
            }
            if (self.config.maxDate !== undefined) {
                var maxHr = self.config.maxDate.getHours();
                var maxMinutes = self.config.maxDate.getMinutes();
                hours = Math.min(hours, maxHr);
                if (hours === maxHr)
                    minutes = Math.min(maxMinutes, minutes);
                if (hours === maxHr && minutes === maxMinutes)
                    seconds = self.config.maxDate.getSeconds();
            }
            setHours(hours, minutes, seconds);
        }
        /**
         * Sets the hours, minutes, and optionally seconds
         * of the latest selected date object and the
         * corresponding time inputs
         * @param {Number} hours the hour. whether its military
         *                 or am-pm gets inferred from config
         * @param {Number} minutes the minutes
         * @param {Number} seconds the seconds (optional)
         */
        function setHours(hours, minutes, seconds) {
            if (self.latestSelectedDateObj !== undefined) {
                self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
            }
            if (!self.hourElement || !self.minuteElement || self.isMobile)
                return;
            self.hourElement.value = pad(!self.config.time_24hr
                ? ((12 + hours) % 12) + 12 * int(hours % 12 === 0)
                : hours);
            self.minuteElement.value = pad(minutes);
            if (self.amPM !== undefined)
                self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
            if (self.secondElement !== undefined)
                self.secondElement.value = pad(seconds);
        }
        /**
         * Handles the year input and incrementing events
         * @param {Event} event the keyup or increment event
         */
        function onYearInput(event) {
            var year = parseInt(event.target.value) + (event.delta || 0);
            if (year / 1000 > 1 ||
                (event.key === "Enter" && !/[^\d]/.test(year.toString()))) {
                changeYear(year);
            }
        }
        /**
         * Essentially addEventListener + tracking
         * @param {Element} element the element to addEventListener to
         * @param {String} event the event name
         * @param {Function} handler the event handler
         */
        function bind(element, event, handler, options) {
            if (event instanceof Array)
                return event.forEach(function (ev) { return bind(element, ev, handler, options); });
            if (element instanceof Array)
                return element.forEach(function (el) { return bind(el, event, handler, options); });
            element.addEventListener(event, handler, options);
            self._handlers.push({
                element: element,
                event: event,
                handler: handler,
                options: options
            });
        }
        /**
         * A mousedown handler which mimics click.
         * Minimizes latency, since we don't need to wait for mouseup in most cases.
         * Also, avoids handling right clicks.
         *
         * @param {Function} handler the event handler
         */
        function onClick(handler) {
            return function (evt) {
                evt.which === 1 && handler(evt);
            };
        }
        function triggerChange() {
            triggerEvent("onChange");
        }
        /**
         * Adds all the necessary event listeners
         */
        function bindEvents() {
            if (self.config.wrap) {
                ["open", "close", "toggle", "clear"].forEach(function (evt) {
                    Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                        return bind(el, "click", self[evt]);
                    });
                });
            }
            if (self.isMobile) {
                setupMobile();
                return;
            }
            var debouncedResize = debounce(onResize, 50);
            self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
            if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
                bind(self.daysContainer, "mouseover", function (e) {
                    if (self.config.mode === "range")
                        onMouseOver(e.target);
                });
            bind(window.document.body, "keydown", onKeyDown);
            if (!self.config.inline && !self.config.static)
                bind(window, "resize", debouncedResize);
            if (window.ontouchstart !== undefined)
                bind(window.document, "touchstart", documentClick);
            else
                bind(window.document, "mousedown", onClick(documentClick));
            bind(window.document, "focus", documentClick, { capture: true });
            if (self.config.clickOpens === true) {
                bind(self._input, "focus", self.open);
                bind(self._input, "mousedown", onClick(self.open));
            }
            if (self.daysContainer !== undefined) {
                bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
                bind(self.monthNav, ["keyup", "increment"], onYearInput);
                bind(self.daysContainer, "mousedown", onClick(selectDate));
            }
            if (self.timeContainer !== undefined &&
                self.minuteElement !== undefined &&
                self.hourElement !== undefined) {
                var selText = function (e) {
                    return e.target.select();
                };
                bind(self.timeContainer, ["increment"], updateTime);
                bind(self.timeContainer, "blur", updateTime, { capture: true });
                bind(self.timeContainer, "mousedown", onClick(timeIncrement));
                bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
                if (self.secondElement !== undefined)
                    bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
                if (self.amPM !== undefined) {
                    bind(self.amPM, "mousedown", onClick(function (e) {
                        updateTime(e);
                        triggerChange();
                    }));
                }
            }
        }
        /**
         * Set the calendar view to a particular date.
         * @param {Date} jumpDate the date to set the view to
         * @param {boolean} triggerChange if change events should be triggered
         */
        function jumpToDate(jumpDate, triggerChange) {
            var jumpTo = jumpDate !== undefined
                ? self.parseDate(jumpDate)
                : self.latestSelectedDateObj ||
                    (self.config.minDate && self.config.minDate > self.now
                        ? self.config.minDate
                        : self.config.maxDate && self.config.maxDate < self.now
                            ? self.config.maxDate
                            : self.now);
            var oldYear = self.currentYear;
            var oldMonth = self.currentMonth;
            try {
                if (jumpTo !== undefined) {
                    self.currentYear = jumpTo.getFullYear();
                    self.currentMonth = jumpTo.getMonth();
                }
            }
            catch (e) {
                /* istanbul ignore next */
                e.message = "Invalid date supplied: " + jumpTo;
                self.config.errorHandler(e);
            }
            if (triggerChange && self.currentYear !== oldYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            if (triggerChange &&
                (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
                triggerEvent("onMonthChange");
            }
            self.redraw();
        }
        /**
         * The up/down arrow handler for time inputs
         * @param {Event} e the click event
         */
        function timeIncrement(e) {
            if (~e.target.className.indexOf("arrow"))
                incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
        }
        /**
         * Increments/decrements the value of input associ-
         * ated with the up/down arrow by dispatching an
         * "increment" event on the input.
         *
         * @param {Event} e the click event
         * @param {Number} delta the diff (usually 1 or -1)
         * @param {Element} inputElem the input element
         */
        function incrementNumInput(e, delta, inputElem) {
            var target = e && e.target;
            var input = inputElem ||
                (target && target.parentNode && target.parentNode.firstChild);
            var event = createEvent("increment");
            event.delta = delta;
            input && input.dispatchEvent(event);
        }
        function build() {
            var fragment = window.document.createDocumentFragment();
            self.calendarContainer = createElement("div", "flatpickr-calendar");
            self.calendarContainer.tabIndex = -1;
            if (!self.config.noCalendar) {
                fragment.appendChild(buildMonthNav());
                self.innerContainer = createElement("div", "flatpickr-innerContainer");
                if (self.config.weekNumbers) {
                    var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                    self.innerContainer.appendChild(weekWrapper);
                    self.weekNumbers = weekNumbers;
                    self.weekWrapper = weekWrapper;
                }
                self.rContainer = createElement("div", "flatpickr-rContainer");
                self.rContainer.appendChild(buildWeekdays());
                if (!self.daysContainer) {
                    self.daysContainer = createElement("div", "flatpickr-days");
                    self.daysContainer.tabIndex = -1;
                }
                buildDays();
                self.rContainer.appendChild(self.daysContainer);
                self.innerContainer.appendChild(self.rContainer);
                fragment.appendChild(self.innerContainer);
            }
            if (self.config.enableTime) {
                fragment.appendChild(buildTime());
            }
            toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
            toggleClass(self.calendarContainer, "animate", self.config.animate === true);
            toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
            self.calendarContainer.appendChild(fragment);
            var customAppend = self.config.appendTo !== undefined &&
                self.config.appendTo.nodeType !== undefined;
            if (self.config.inline || self.config.static) {
                self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
                if (self.config.inline) {
                    if (!customAppend && self.element.parentNode)
                        self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                    else if (self.config.appendTo !== undefined)
                        self.config.appendTo.appendChild(self.calendarContainer);
                }
                if (self.config.static) {
                    var wrapper = createElement("div", "flatpickr-wrapper");
                    if (self.element.parentNode)
                        self.element.parentNode.insertBefore(wrapper, self.element);
                    wrapper.appendChild(self.element);
                    if (self.altInput)
                        wrapper.appendChild(self.altInput);
                    wrapper.appendChild(self.calendarContainer);
                }
            }
            if (!self.config.static && !self.config.inline)
                (self.config.appendTo !== undefined
                    ? self.config.appendTo
                    : window.document.body).appendChild(self.calendarContainer);
        }
        function createDay(className, date, dayNumber, i) {
            var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
            dayElement.dateObj = date;
            dayElement.$i = i;
            dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
            if (className.indexOf("hidden") === -1 &&
                compareDates(date, self.now) === 0) {
                self.todayDateElem = dayElement;
                dayElement.classList.add("today");
                dayElement.setAttribute("aria-current", "date");
            }
            if (dateIsEnabled) {
                dayElement.tabIndex = -1;
                if (isDateSelected(date)) {
                    dayElement.classList.add("selected");
                    self.selectedDateElem = dayElement;
                    if (self.config.mode === "range") {
                        toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                            compareDates(date, self.selectedDates[0], true) === 0);
                        toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                            compareDates(date, self.selectedDates[1], true) === 0);
                        if (className === "nextMonthDay")
                            dayElement.classList.add("inRange");
                    }
                }
            }
            else {
                dayElement.classList.add("flatpickr-disabled");
            }
            if (self.config.mode === "range") {
                if (isDateInRange(date) && !isDateSelected(date))
                    dayElement.classList.add("inRange");
            }
            if (self.weekNumbers &&
                self.config.showMonths === 1 &&
                className !== "prevMonthDay" &&
                dayNumber % 7 === 1) {
                self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
            }
            triggerEvent("onDayCreate", dayElement);
            return dayElement;
        }
        function focusOnDayElem(targetNode) {
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        }
        function getFirstAvailableDay(delta) {
            var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            for (var m = startMonth; m != endMonth; m += delta) {
                var month = self.daysContainer.children[m];
                var startIndex = delta > 0 ? 0 : month.children.length - 1;
                var endIndex = delta > 0 ? month.children.length : -1;
                for (var i = startIndex; i != endIndex; i += delta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
                        return c;
                }
            }
            return undefined;
        }
        function getNextAvailableDay(current, delta) {
            var givenMonth = current.className.indexOf("Month") === -1
                ? current.dateObj.getMonth()
                : self.currentMonth;
            var endMonth = delta > 0 ? self.config.showMonths : -1;
            var loopDelta = delta > 0 ? 1 : -1;
            for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
                var month = self.daysContainer.children[m];
                var startIndex = givenMonth - self.currentMonth === m
                    ? current.$i + delta
                    : delta < 0
                        ? month.children.length - 1
                        : 0;
                var numMonthDays = month.children.length;
                for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
                    var c = month.children[i];
                    if (c.className.indexOf("hidden") === -1 &&
                        isEnabled(c.dateObj) &&
                        Math.abs(current.$i - i) >= Math.abs(delta))
                        return focusOnDayElem(c);
                }
            }
            self.changeMonth(loopDelta);
            focusOnDay(getFirstAvailableDay(loopDelta), 0);
            return undefined;
        }
        function focusOnDay(current, offset) {
            var dayFocused = isInView(document.activeElement || document.body);
            var startElem = current !== undefined
                ? current
                : dayFocused
                    ? document.activeElement
                    : self.selectedDateElem !== undefined && isInView(self.selectedDateElem)
                        ? self.selectedDateElem
                        : self.todayDateElem !== undefined && isInView(self.todayDateElem)
                            ? self.todayDateElem
                            : getFirstAvailableDay(offset > 0 ? 1 : -1);
            if (startElem === undefined)
                return self._input.focus();
            if (!dayFocused)
                return focusOnDayElem(startElem);
            getNextAvailableDay(startElem, offset);
        }
        function buildMonthDays(year, month) {
            var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
            var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
            var daysInMonth = self.utils.getDaysInMonth(month), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
            var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
            // prepend days from the ending of previous month
            for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
                days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
            }
            // Start at 1 since there is no 0th day
            for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
                days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
            }
            // append days from the next month
            for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth &&
                (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
                days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
            }
            //updateNavigationCurrentMonth();
            var dayContainer = createElement("div", "dayContainer");
            dayContainer.appendChild(days);
            return dayContainer;
        }
        function buildDays() {
            if (self.daysContainer === undefined) {
                return;
            }
            clearNode(self.daysContainer);
            // TODO: week numbers for each month
            if (self.weekNumbers)
                clearNode(self.weekNumbers);
            var frag = document.createDocumentFragment();
            for (var i = 0; i < self.config.showMonths; i++) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
            }
            self.daysContainer.appendChild(frag);
            self.days = self.daysContainer.firstChild;
            if (self.config.mode === "range" && self.selectedDates.length === 1) {
                onMouseOver();
            }
        }
        function buildMonthSwitch() {
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType !== "dropdown")
                return;
            var shouldBuildMonth = function (month) {
                if (self.config.minDate !== undefined &&
                    self.currentYear === self.config.minDate.getFullYear() &&
                    month < self.config.minDate.getMonth()) {
                    return false;
                }
                return !(self.config.maxDate !== undefined &&
                    self.currentYear === self.config.maxDate.getFullYear() &&
                    month > self.config.maxDate.getMonth());
            };
            self.monthsDropdownContainer.tabIndex = -1;
            self.monthsDropdownContainer.innerHTML = "";
            for (var i = 0; i < 12; i++) {
                if (!shouldBuildMonth(i))
                    continue;
                var month = createElement("option", "flatpickr-monthDropdown-month");
                month.value = new Date(self.currentYear, i).getMonth().toString();
                month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
                month.tabIndex = -1;
                if (self.currentMonth === i) {
                    month.selected = true;
                }
                self.monthsDropdownContainer.appendChild(month);
            }
        }
        function buildMonth() {
            var container = createElement("div", "flatpickr-month");
            var monthNavFragment = window.document.createDocumentFragment();
            var monthElement;
            if (self.config.showMonths > 1 ||
                self.config.monthSelectorType === "static") {
                monthElement = createElement("span", "cur-month");
            }
            else {
                self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
                bind(self.monthsDropdownContainer, "change", function (e) {
                    var target = e.target;
                    var selectedMonth = parseInt(target.value, 10);
                    self.changeMonth(selectedMonth - self.currentMonth);
                    triggerEvent("onMonthChange");
                });
                buildMonthSwitch();
                monthElement = self.monthsDropdownContainer;
            }
            var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
            var yearElement = yearInput.getElementsByTagName("input")[0];
            yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
            if (self.config.minDate) {
                yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
            }
            if (self.config.maxDate) {
                yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
                yearElement.disabled =
                    !!self.config.minDate &&
                        self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
            }
            var currentMonth = createElement("div", "flatpickr-current-month");
            currentMonth.appendChild(monthElement);
            currentMonth.appendChild(yearInput);
            monthNavFragment.appendChild(currentMonth);
            container.appendChild(monthNavFragment);
            return {
                container: container,
                yearElement: yearElement,
                monthElement: monthElement
            };
        }
        function buildMonths() {
            clearNode(self.monthNav);
            self.monthNav.appendChild(self.prevMonthNav);
            if (self.config.showMonths) {
                self.yearElements = [];
                self.monthElements = [];
            }
            for (var m = self.config.showMonths; m--;) {
                var month = buildMonth();
                self.yearElements.push(month.yearElement);
                self.monthElements.push(month.monthElement);
                self.monthNav.appendChild(month.container);
            }
            self.monthNav.appendChild(self.nextMonthNav);
        }
        function buildMonthNav() {
            self.monthNav = createElement("div", "flatpickr-months");
            self.yearElements = [];
            self.monthElements = [];
            self.prevMonthNav = createElement("span", "flatpickr-prev-month");
            self.prevMonthNav.innerHTML = self.config.prevArrow;
            self.nextMonthNav = createElement("span", "flatpickr-next-month");
            self.nextMonthNav.innerHTML = self.config.nextArrow;
            buildMonths();
            Object.defineProperty(self, "_hidePrevMonthArrow", {
                get: function () { return self.__hidePrevMonthArrow; },
                set: function (bool) {
                    if (self.__hidePrevMonthArrow !== bool) {
                        toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                        self.__hidePrevMonthArrow = bool;
                    }
                }
            });
            Object.defineProperty(self, "_hideNextMonthArrow", {
                get: function () { return self.__hideNextMonthArrow; },
                set: function (bool) {
                    if (self.__hideNextMonthArrow !== bool) {
                        toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                        self.__hideNextMonthArrow = bool;
                    }
                }
            });
            self.currentYearElement = self.yearElements[0];
            updateNavigationCurrentMonth();
            return self.monthNav;
        }
        function buildTime() {
            self.calendarContainer.classList.add("hasTime");
            if (self.config.noCalendar)
                self.calendarContainer.classList.add("noCalendar");
            self.timeContainer = createElement("div", "flatpickr-time");
            self.timeContainer.tabIndex = -1;
            var separator = createElement("span", "flatpickr-time-separator", ":");
            var hourInput = createNumberInput("flatpickr-hour", {
                "aria-label": self.l10n.hourAriaLabel
            });
            self.hourElement = hourInput.getElementsByTagName("input")[0];
            var minuteInput = createNumberInput("flatpickr-minute", {
                "aria-label": self.l10n.minuteAriaLabel
            });
            self.minuteElement = minuteInput.getElementsByTagName("input")[0];
            self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
            self.hourElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getHours()
                : self.config.time_24hr
                    ? self.config.defaultHour
                    : military2ampm(self.config.defaultHour));
            self.minuteElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getMinutes()
                : self.config.defaultMinute);
            self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
            self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
            self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
            self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
            self.minuteElement.setAttribute("min", "0");
            self.minuteElement.setAttribute("max", "59");
            self.timeContainer.appendChild(hourInput);
            self.timeContainer.appendChild(separator);
            self.timeContainer.appendChild(minuteInput);
            if (self.config.time_24hr)
                self.timeContainer.classList.add("time24hr");
            if (self.config.enableSeconds) {
                self.timeContainer.classList.add("hasSeconds");
                var secondInput = createNumberInput("flatpickr-second");
                self.secondElement = secondInput.getElementsByTagName("input")[0];
                self.secondElement.value = pad(self.latestSelectedDateObj
                    ? self.latestSelectedDateObj.getSeconds()
                    : self.config.defaultSeconds);
                self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
                self.secondElement.setAttribute("min", "0");
                self.secondElement.setAttribute("max", "59");
                self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
                self.timeContainer.appendChild(secondInput);
            }
            if (!self.config.time_24hr) {
                // add self.amPM if appropriate
                self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                    ? self.hourElement.value
                    : self.config.defaultHour) > 11)]);
                self.amPM.title = self.l10n.toggleTitle;
                self.amPM.tabIndex = -1;
                self.timeContainer.appendChild(self.amPM);
            }
            return self.timeContainer;
        }
        function buildWeekdays() {
            if (!self.weekdayContainer)
                self.weekdayContainer = createElement("div", "flatpickr-weekdays");
            else
                clearNode(self.weekdayContainer);
            for (var i = self.config.showMonths; i--;) {
                var container = createElement("div", "flatpickr-weekdaycontainer");
                self.weekdayContainer.appendChild(container);
            }
            updateWeekdays();
            return self.weekdayContainer;
        }
        function updateWeekdays() {
            if (!self.weekdayContainer) {
                return;
            }
            var firstDayOfWeek = self.l10n.firstDayOfWeek;
            var weekdays = self.l10n.weekdays.shorthand.slice();
            if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
                weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
            }
            for (var i = self.config.showMonths; i--;) {
                self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
            }
        }
        /* istanbul ignore next */
        function buildWeeks() {
            self.calendarContainer.classList.add("hasWeeks");
            var weekWrapper = createElement("div", "flatpickr-weekwrapper");
            weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
            var weekNumbers = createElement("div", "flatpickr-weeks");
            weekWrapper.appendChild(weekNumbers);
            return {
                weekWrapper: weekWrapper,
                weekNumbers: weekNumbers
            };
        }
        function changeMonth(value, isOffset) {
            if (isOffset === void 0) { isOffset = true; }
            var delta = isOffset ? value : value - self.currentMonth;
            if ((delta < 0 && self._hidePrevMonthArrow === true) ||
                (delta > 0 && self._hideNextMonthArrow === true))
                return;
            self.currentMonth += delta;
            if (self.currentMonth < 0 || self.currentMonth > 11) {
                self.currentYear += self.currentMonth > 11 ? 1 : -1;
                self.currentMonth = (self.currentMonth + 12) % 12;
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            buildDays();
            triggerEvent("onMonthChange");
            updateNavigationCurrentMonth();
        }
        function clear(triggerChangeEvent, toInitial) {
            if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
            if (toInitial === void 0) { toInitial = true; }
            self.input.value = "";
            if (self.altInput !== undefined)
                self.altInput.value = "";
            if (self.mobileInput !== undefined)
                self.mobileInput.value = "";
            self.selectedDates = [];
            self.latestSelectedDateObj = undefined;
            if (toInitial === true) {
                self.currentYear = self._initialDate.getFullYear();
                self.currentMonth = self._initialDate.getMonth();
            }
            self.showTimeInput = false;
            if (self.config.enableTime === true) {
                setDefaultHours();
            }
            self.redraw();
            if (triggerChangeEvent)
                // triggerChangeEvent is true (default) or an Event
                triggerEvent("onChange");
        }
        function close() {
            self.isOpen = false;
            if (!self.isMobile) {
                if (self.calendarContainer !== undefined) {
                    self.calendarContainer.classList.remove("open");
                }
                if (self._input !== undefined) {
                    self._input.classList.remove("active");
                }
            }
            triggerEvent("onClose");
        }
        function destroy() {
            if (self.config !== undefined)
                triggerEvent("onDestroy");
            for (var i = self._handlers.length; i--;) {
                var h = self._handlers[i];
                h.element.removeEventListener(h.event, h.handler, h.options);
            }
            self._handlers = [];
            if (self.mobileInput) {
                if (self.mobileInput.parentNode)
                    self.mobileInput.parentNode.removeChild(self.mobileInput);
                self.mobileInput = undefined;
            }
            else if (self.calendarContainer && self.calendarContainer.parentNode) {
                if (self.config.static && self.calendarContainer.parentNode) {
                    var wrapper = self.calendarContainer.parentNode;
                    wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                    if (wrapper.parentNode) {
                        while (wrapper.firstChild)
                            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                        wrapper.parentNode.removeChild(wrapper);
                    }
                }
                else
                    self.calendarContainer.parentNode.removeChild(self.calendarContainer);
            }
            if (self.altInput) {
                self.input.type = "text";
                if (self.altInput.parentNode)
                    self.altInput.parentNode.removeChild(self.altInput);
                delete self.altInput;
            }
            if (self.input) {
                self.input.type = self.input._type;
                self.input.classList.remove("flatpickr-input");
                self.input.removeAttribute("readonly");
                self.input.value = "";
            }
            [
                "_showTimeInput",
                "latestSelectedDateObj",
                "_hideNextMonthArrow",
                "_hidePrevMonthArrow",
                "__hideNextMonthArrow",
                "__hidePrevMonthArrow",
                "isMobile",
                "isOpen",
                "selectedDateElem",
                "minDateHasTime",
                "maxDateHasTime",
                "days",
                "daysContainer",
                "_input",
                "_positionElement",
                "innerContainer",
                "rContainer",
                "monthNav",
                "todayDateElem",
                "calendarContainer",
                "weekdayContainer",
                "prevMonthNav",
                "nextMonthNav",
                "monthsDropdownContainer",
                "currentMonthElement",
                "currentYearElement",
                "navigationCurrentMonth",
                "selectedDateElem",
                "config",
            ].forEach(function (k) {
                try {
                    delete self[k];
                }
                catch (_) { }
            });
        }
        function isCalendarElem(elem) {
            if (self.config.appendTo && self.config.appendTo.contains(elem))
                return true;
            return self.calendarContainer.contains(elem);
        }
        function documentClick(e) {
            if (self.isOpen && !self.config.inline) {
                var eventTarget_1 = getEventTarget(e);
                var isCalendarElement = isCalendarElem(eventTarget_1);
                var isInput = eventTarget_1 === self.input ||
                    eventTarget_1 === self.altInput ||
                    self.element.contains(eventTarget_1) ||
                    // web components
                    // e.path is not present in all browsers. circumventing typechecks
                    (e.path &&
                        e.path.indexOf &&
                        (~e.path.indexOf(self.input) ||
                            ~e.path.indexOf(self.altInput)));
                var lostFocus = e.type === "blur"
                    ? isInput &&
                        e.relatedTarget &&
                        !isCalendarElem(e.relatedTarget)
                    : !isInput &&
                        !isCalendarElement &&
                        !isCalendarElem(e.relatedTarget);
                var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
                    return elem.contains(eventTarget_1);
                });
                if (lostFocus && isIgnored) {
                    if (self.timeContainer !== undefined &&
                        self.minuteElement !== undefined &&
                        self.hourElement !== undefined) {
                        updateTime();
                    }
                    self.close();
                    if (self.config.mode === "range" && self.selectedDates.length === 1) {
                        self.clear(false);
                        self.redraw();
                    }
                }
            }
        }
        function changeYear(newYear) {
            if (!newYear ||
                (self.config.minDate && newYear < self.config.minDate.getFullYear()) ||
                (self.config.maxDate && newYear > self.config.maxDate.getFullYear()))
                return;
            var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
            self.currentYear = newYearNum || self.currentYear;
            if (self.config.maxDate &&
                self.currentYear === self.config.maxDate.getFullYear()) {
                self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
            }
            else if (self.config.minDate &&
                self.currentYear === self.config.minDate.getFullYear()) {
                self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
            }
            if (isNewYear) {
                self.redraw();
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
        }
        function isEnabled(date, timeless) {
            if (timeless === void 0) { timeless = true; }
            var dateToCheck = self.parseDate(date, undefined, timeless); // timeless
            if ((self.config.minDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
                (self.config.maxDate &&
                    dateToCheck &&
                    compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
                return false;
            if (self.config.enable.length === 0 && self.config.disable.length === 0)
                return true;
            if (dateToCheck === undefined)
                return false;
            var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
            for (var i = 0, d = void 0; i < array.length; i++) {
                d = array[i];
                if (typeof d === "function" &&
                    d(dateToCheck) // disabled by function
                )
                    return bool;
                else if (d instanceof Date &&
                    dateToCheck !== undefined &&
                    d.getTime() === dateToCheck.getTime())
                    // disabled by date
                    return bool;
                else if (typeof d === "string" && dateToCheck !== undefined) {
                    // disabled by date string
                    var parsed = self.parseDate(d, undefined, true);
                    return parsed && parsed.getTime() === dateToCheck.getTime()
                        ? bool
                        : !bool;
                }
                else if (
                // disabled by range
                typeof d === "object" &&
                    dateToCheck !== undefined &&
                    d.from &&
                    d.to &&
                    dateToCheck.getTime() >= d.from.getTime() &&
                    dateToCheck.getTime() <= d.to.getTime())
                    return bool;
            }
            return !bool;
        }
        function isInView(elem) {
            if (self.daysContainer !== undefined)
                return (elem.className.indexOf("hidden") === -1 &&
                    self.daysContainer.contains(elem));
            return false;
        }
        function onKeyDown(e) {
            // e.key                      e.keyCode
            // "Backspace"                        8
            // "Tab"                              9
            // "Enter"                           13
            // "Escape"     (IE "Esc")           27
            // "ArrowLeft"  (IE "Left")          37
            // "ArrowUp"    (IE "Up")            38
            // "ArrowRight" (IE "Right")         39
            // "ArrowDown"  (IE "Down")          40
            // "Delete"     (IE "Del")           46
            var isInput = e.target === self._input;
            var allowInput = self.config.allowInput;
            var allowKeydown = self.isOpen && (!allowInput || !isInput);
            var allowInlineKeydown = self.config.inline && isInput && !allowInput;
            if (e.keyCode === 13 && isInput) {
                if (allowInput) {
                    self.setDate(self._input.value, true, e.target === self.altInput
                        ? self.config.altFormat
                        : self.config.dateFormat);
                    return e.target.blur();
                }
                else {
                    self.open();
                }
            }
            else if (isCalendarElem(e.target) ||
                allowKeydown ||
                allowInlineKeydown) {
                var isTimeObj = !!self.timeContainer &&
                    self.timeContainer.contains(e.target);
                switch (e.keyCode) {
                    case 13:
                        if (isTimeObj) {
                            e.preventDefault();
                            updateTime();
                            focusAndClose();
                        }
                        else
                            selectDate(e);
                        break;
                    case 27: // escape
                        e.preventDefault();
                        focusAndClose();
                        break;
                    case 8:
                    case 46:
                        if (isInput && !self.config.allowInput) {
                            e.preventDefault();
                            self.clear();
                        }
                        break;
                    case 37:
                    case 39:
                        if (!isTimeObj && !isInput) {
                            e.preventDefault();
                            if (self.daysContainer !== undefined &&
                                (allowInput === false ||
                                    (document.activeElement && isInView(document.activeElement)))) {
                                var delta_1 = e.keyCode === 39 ? 1 : -1;
                                if (!e.ctrlKey)
                                    focusOnDay(undefined, delta_1);
                                else {
                                    e.stopPropagation();
                                    changeMonth(delta_1);
                                    focusOnDay(getFirstAvailableDay(1), 0);
                                }
                            }
                        }
                        else if (self.hourElement)
                            self.hourElement.focus();
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var delta = e.keyCode === 40 ? 1 : -1;
                        if ((self.daysContainer && e.target.$i !== undefined) ||
                            e.target === self.input ||
                            e.target === self.altInput) {
                            if (e.ctrlKey) {
                                e.stopPropagation();
                                changeYear(self.currentYear - delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                            else if (!isTimeObj)
                                focusOnDay(undefined, delta * 7);
                        }
                        else if (e.target === self.currentYearElement) {
                            changeYear(self.currentYear - delta);
                        }
                        else if (self.config.enableTime) {
                            if (!isTimeObj && self.hourElement)
                                self.hourElement.focus();
                            updateTime(e);
                            self._debouncedChange();
                        }
                        break;
                    case 9:
                        if (isTimeObj) {
                            var elems = [
                                self.hourElement,
                                self.minuteElement,
                                self.secondElement,
                                self.amPM,
                            ]
                                .concat(self.pluginElements)
                                .filter(function (x) { return x; });
                            var i = elems.indexOf(e.target);
                            if (i !== -1) {
                                var target = elems[i + (e.shiftKey ? -1 : 1)];
                                e.preventDefault();
                                (target || self._input).focus();
                            }
                        }
                        else if (!self.config.noCalendar &&
                            self.daysContainer &&
                            self.daysContainer.contains(e.target) &&
                            e.shiftKey) {
                            e.preventDefault();
                            self._input.focus();
                        }
                        break;
                    default:
                        break;
                }
            }
            if (self.amPM !== undefined && e.target === self.amPM) {
                switch (e.key) {
                    case self.l10n.amPM[0].charAt(0):
                    case self.l10n.amPM[0].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[0];
                        setHoursFromInputs();
                        updateValue();
                        break;
                    case self.l10n.amPM[1].charAt(0):
                    case self.l10n.amPM[1].charAt(0).toLowerCase():
                        self.amPM.textContent = self.l10n.amPM[1];
                        setHoursFromInputs();
                        updateValue();
                        break;
                }
            }
            if (isInput || isCalendarElem(e.target)) {
                triggerEvent("onKeyDown", e);
            }
        }
        function onMouseOver(elem) {
            if (self.selectedDates.length !== 1 ||
                (elem &&
                    (!elem.classList.contains("flatpickr-day") ||
                        elem.classList.contains("flatpickr-disabled"))))
                return;
            var hoverDate = elem
                ? elem.dateObj.getTime()
                : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
            var containsDisabled = false;
            var minRange = 0, maxRange = 0;
            for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
                if (!isEnabled(new Date(t), true)) {
                    containsDisabled =
                        containsDisabled || (t > rangeStartDate && t < rangeEndDate);
                    if (t < initialDate && (!minRange || t > minRange))
                        minRange = t;
                    else if (t > initialDate && (!maxRange || t < maxRange))
                        maxRange = t;
                }
            }
            for (var m = 0; m < self.config.showMonths; m++) {
                var month = self.daysContainer.children[m];
                var _loop_1 = function (i, l) {
                    var dayElem = month.children[i], date = dayElem.dateObj;
                    var timestamp = date.getTime();
                    var outOfRange = (minRange > 0 && timestamp < minRange) ||
                        (maxRange > 0 && timestamp > maxRange);
                    if (outOfRange) {
                        dayElem.classList.add("notAllowed");
                        ["inRange", "startRange", "endRange"].forEach(function (c) {
                            dayElem.classList.remove(c);
                        });
                        return "continue";
                    }
                    else if (containsDisabled && !outOfRange)
                        return "continue";
                    ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                        dayElem.classList.remove(c);
                    });
                    if (elem !== undefined) {
                        elem.classList.add(hoverDate <= self.selectedDates[0].getTime()
                            ? "startRange"
                            : "endRange");
                        if (initialDate < hoverDate && timestamp === initialDate)
                            dayElem.classList.add("startRange");
                        else if (initialDate > hoverDate && timestamp === initialDate)
                            dayElem.classList.add("endRange");
                        if (timestamp >= minRange &&
                            (maxRange === 0 || timestamp <= maxRange) &&
                            isBetween(timestamp, initialDate, hoverDate))
                            dayElem.classList.add("inRange");
                    }
                };
                for (var i = 0, l = month.children.length; i < l; i++) {
                    _loop_1(i, l);
                }
            }
        }
        function onResize() {
            if (self.isOpen && !self.config.static && !self.config.inline)
                positionCalendar();
        }
        function setDefaultTime() {
            self.setDate(self.config.minDate !== undefined
                ? new Date(self.config.minDate.getTime())
                : new Date(), true);
            setDefaultHours();
            updateValue();
        }
        function open(e, positionElement) {
            if (positionElement === void 0) { positionElement = self._positionElement; }
            if (self.isMobile === true) {
                if (e) {
                    e.preventDefault();
                    e.target && e.target.blur();
                }
                if (self.mobileInput !== undefined) {
                    self.mobileInput.focus();
                    self.mobileInput.click();
                }
                triggerEvent("onOpen");
                return;
            }
            if (self._input.disabled || self.config.inline)
                return;
            var wasOpen = self.isOpen;
            self.isOpen = true;
            if (!wasOpen) {
                self.calendarContainer.classList.add("open");
                self._input.classList.add("active");
                triggerEvent("onOpen");
                positionCalendar(positionElement);
            }
            if (self.config.enableTime === true && self.config.noCalendar === true) {
                if (self.selectedDates.length === 0) {
                    setDefaultTime();
                }
                if (self.config.allowInput === false &&
                    (e === undefined ||
                        !self.timeContainer.contains(e.relatedTarget))) {
                    setTimeout(function () { return self.hourElement.select(); }, 50);
                }
            }
        }
        function minMaxDateSetter(type) {
            return function (date) {
                var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat));
                var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
                if (dateObj !== undefined) {
                    self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                        dateObj.getHours() > 0 ||
                            dateObj.getMinutes() > 0 ||
                            dateObj.getSeconds() > 0;
                }
                if (self.selectedDates) {
                    self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                    if (!self.selectedDates.length && type === "min")
                        setHoursFromDate(dateObj);
                    updateValue();
                }
                if (self.daysContainer) {
                    redraw();
                    if (dateObj !== undefined)
                        self.currentYearElement[type] = dateObj.getFullYear().toString();
                    else
                        self.currentYearElement.removeAttribute(type);
                    self.currentYearElement.disabled =
                        !!inverseDateObj &&
                            dateObj !== undefined &&
                            inverseDateObj.getFullYear() === dateObj.getFullYear();
                }
            };
        }
        function parseConfig() {
            var boolOpts = [
                "wrap",
                "weekNumbers",
                "allowInput",
                "clickOpens",
                "time_24hr",
                "enableTime",
                "noCalendar",
                "altInput",
                "shorthandCurrentMonth",
                "inline",
                "static",
                "enableSeconds",
                "disableMobile",
            ];
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            var formats = {};
            self.config.parseDate = userConfig.parseDate;
            self.config.formatDate = userConfig.formatDate;
            Object.defineProperty(self.config, "enable", {
                get: function () { return self.config._enable; },
                set: function (dates) {
                    self.config._enable = parseDateRules(dates);
                }
            });
            Object.defineProperty(self.config, "disable", {
                get: function () { return self.config._disable; },
                set: function (dates) {
                    self.config._disable = parseDateRules(dates);
                }
            });
            var timeMode = userConfig.mode === "time";
            if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
                var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
                formats.dateFormat =
                    userConfig.noCalendar || timeMode
                        ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                        : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
            }
            if (userConfig.altInput &&
                (userConfig.enableTime || timeMode) &&
                !userConfig.altFormat) {
                var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
                formats.altFormat =
                    userConfig.noCalendar || timeMode
                        ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                        : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
            }
            if (!userConfig.altInputClass) {
                self.config.altInputClass =
                    self.input.className + " " + self.config.altInputClass;
            }
            Object.defineProperty(self.config, "minDate", {
                get: function () { return self.config._minDate; },
                set: minMaxDateSetter("min")
            });
            Object.defineProperty(self.config, "maxDate", {
                get: function () { return self.config._maxDate; },
                set: minMaxDateSetter("max")
            });
            var minMaxTimeSetter = function (type) { return function (val) {
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }; };
            Object.defineProperty(self.config, "minTime", {
                get: function () { return self.config._minTime; },
                set: minMaxTimeSetter("min")
            });
            Object.defineProperty(self.config, "maxTime", {
                get: function () { return self.config._maxTime; },
                set: minMaxTimeSetter("max")
            });
            if (userConfig.mode === "time") {
                self.config.noCalendar = true;
                self.config.enableTime = true;
            }
            Object.assign(self.config, formats, userConfig);
            for (var i = 0; i < boolOpts.length; i++)
                self.config[boolOpts[i]] =
                    self.config[boolOpts[i]] === true ||
                        self.config[boolOpts[i]] === "true";
            HOOKS.filter(function (hook) { return self.config[hook] !== undefined; }).forEach(function (hook) {
                self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
            });
            self.isMobile =
                !self.config.disableMobile &&
                    !self.config.inline &&
                    self.config.mode === "single" &&
                    !self.config.disable.length &&
                    !self.config.enable.length &&
                    !self.config.weekNumbers &&
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            for (var i = 0; i < self.config.plugins.length; i++) {
                var pluginConf = self.config.plugins[i](self) || {};
                for (var key in pluginConf) {
                    if (HOOKS.indexOf(key) > -1) {
                        self.config[key] = arrayify(pluginConf[key])
                            .map(bindToInstance)
                            .concat(self.config[key]);
                    }
                    else if (typeof userConfig[key] === "undefined")
                        self.config[key] = pluginConf[key];
                }
            }
            triggerEvent("onParseConfig");
        }
        function setupLocale() {
            if (typeof self.config.locale !== "object" &&
                typeof flatpickr.l10ns[self.config.locale] === "undefined")
                self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
            self.l10n = __assign({}, flatpickr.l10ns["default"], (typeof self.config.locale === "object"
                ? self.config.locale
                : self.config.locale !== "default"
                    ? flatpickr.l10ns[self.config.locale]
                    : undefined));
            tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";
            var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
            if (userConfig.time_24hr === undefined &&
                flatpickr.defaultConfig.time_24hr === undefined) {
                self.config.time_24hr = self.l10n.time_24hr;
            }
            self.formatDate = createDateFormatter(self);
            self.parseDate = createDateParser({ config: self.config, l10n: self.l10n });
        }
        function positionCalendar(customPositionElement) {
            if (self.calendarContainer === undefined)
                return;
            triggerEvent("onPreCalendarPosition");
            var positionElement = customPositionElement || self._positionElement;
            var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (function (acc, child) { return acc + child.offsetHeight; }), 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" ||
                (configPosVertical !== "below" &&
                    distanceFromBottom < calendarHeight &&
                    inputBounds.top > calendarHeight);
            var top = window.pageYOffset +
                inputBounds.top +
                (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
            toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
            toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
            if (self.config.inline)
                return;
            var left = window.pageXOffset +
                inputBounds.left -
                (configPosHorizontal != null && configPosHorizontal === "center"
                    ? (calendarWidth - inputBounds.width) / 2
                    : 0);
            var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
            var rightMost = left + calendarWidth > window.document.body.offsetWidth;
            var centerMost = right + calendarWidth > window.document.body.offsetWidth;
            toggleClass(self.calendarContainer, "rightMost", rightMost);
            if (self.config.static)
                return;
            self.calendarContainer.style.top = top + "px";
            if (!rightMost) {
                self.calendarContainer.style.left = left + "px";
                self.calendarContainer.style.right = "auto";
            }
            else if (!centerMost) {
                self.calendarContainer.style.left = "auto";
                self.calendarContainer.style.right = right + "px";
            }
            else {
                var doc = document.styleSheets[0];
                // some testing environments don't have css support
                if (doc === undefined)
                    return;
                var bodyWidth = window.document.body.offsetWidth;
                var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
                var centerBefore = ".flatpickr-calendar.centerMost:before";
                var centerAfter = ".flatpickr-calendar.centerMost:after";
                var centerIndex = doc.cssRules.length;
                var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
                toggleClass(self.calendarContainer, "rightMost", false);
                toggleClass(self.calendarContainer, "centerMost", true);
                doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
                self.calendarContainer.style.left = centerLeft + "px";
                self.calendarContainer.style.right = "auto";
            }
        }
        function redraw() {
            if (self.config.noCalendar || self.isMobile)
                return;
            updateNavigationCurrentMonth();
            buildDays();
        }
        function focusAndClose() {
            self._input.focus();
            if (window.navigator.userAgent.indexOf("MSIE") !== -1 ||
                navigator.msMaxTouchPoints !== undefined) {
                // hack - bugs in the way IE handles focus keeps the calendar open
                setTimeout(self.close, 0);
            }
            else {
                self.close();
            }
        }
        function selectDate(e) {
            e.preventDefault();
            e.stopPropagation();
            var isSelectable = function (day) {
                return day.classList &&
                    day.classList.contains("flatpickr-day") &&
                    !day.classList.contains("flatpickr-disabled") &&
                    !day.classList.contains("notAllowed");
            };
            var t = findParent(e.target, isSelectable);
            if (t === undefined)
                return;
            var target = t;
            var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
            var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth ||
                selectedDate.getMonth() >
                    self.currentMonth + self.config.showMonths - 1) &&
                self.config.mode !== "range";
            self.selectedDateElem = target;
            if (self.config.mode === "single")
                self.selectedDates = [selectedDate];
            else if (self.config.mode === "multiple") {
                var selectedIndex = isDateSelected(selectedDate);
                if (selectedIndex)
                    self.selectedDates.splice(parseInt(selectedIndex), 1);
                else
                    self.selectedDates.push(selectedDate);
            }
            else if (self.config.mode === "range") {
                if (self.selectedDates.length === 2) {
                    self.clear(false, false);
                }
                self.latestSelectedDateObj = selectedDate;
                self.selectedDates.push(selectedDate);
                // unless selecting same date twice, sort ascendingly
                if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                    self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
            }
            setHoursFromInputs();
            if (shouldChangeMonth) {
                var isNewYear = self.currentYear !== selectedDate.getFullYear();
                self.currentYear = selectedDate.getFullYear();
                self.currentMonth = selectedDate.getMonth();
                if (isNewYear) {
                    triggerEvent("onYearChange");
                    buildMonthSwitch();
                }
                triggerEvent("onMonthChange");
            }
            updateNavigationCurrentMonth();
            buildDays();
            updateValue();
            if (self.config.enableTime)
                setTimeout(function () { return (self.showTimeInput = true); }, 50);
            // maintain focus
            if (!shouldChangeMonth &&
                self.config.mode !== "range" &&
                self.config.showMonths === 1)
                focusOnDayElem(target);
            else if (self.selectedDateElem !== undefined &&
                self.hourElement === undefined) {
                self.selectedDateElem && self.selectedDateElem.focus();
            }
            if (self.hourElement !== undefined)
                self.hourElement !== undefined && self.hourElement.focus();
            if (self.config.closeOnSelect) {
                var single = self.config.mode === "single" && !self.config.enableTime;
                var range = self.config.mode === "range" &&
                    self.selectedDates.length === 2 &&
                    !self.config.enableTime;
                if (single || range) {
                    focusAndClose();
                }
            }
            triggerChange();
        }
        var CALLBACKS = {
            locale: [setupLocale, updateWeekdays],
            showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
            minDate: [jumpToDate],
            maxDate: [jumpToDate]
        };
        function set(option, value) {
            if (option !== null && typeof option === "object") {
                Object.assign(self.config, option);
                for (var key in option) {
                    if (CALLBACKS[key] !== undefined)
                        CALLBACKS[key].forEach(function (x) { return x(); });
                }
            }
            else {
                self.config[option] = value;
                if (CALLBACKS[option] !== undefined)
                    CALLBACKS[option].forEach(function (x) { return x(); });
                else if (HOOKS.indexOf(option) > -1)
                    self.config[option] = arrayify(value);
            }
            self.redraw();
            updateValue(false);
        }
        function setSelectedDate(inputDate, format) {
            var dates = [];
            if (inputDate instanceof Array)
                dates = inputDate.map(function (d) { return self.parseDate(d, format); });
            else if (inputDate instanceof Date || typeof inputDate === "number")
                dates = [self.parseDate(inputDate, format)];
            else if (typeof inputDate === "string") {
                switch (self.config.mode) {
                    case "single":
                    case "time":
                        dates = [self.parseDate(inputDate, format)];
                        break;
                    case "multiple":
                        dates = inputDate
                            .split(self.config.conjunction)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    case "range":
                        dates = inputDate
                            .split(self.l10n.rangeSeparator)
                            .map(function (date) { return self.parseDate(date, format); });
                        break;
                    default:
                        break;
                }
            }
            else
                self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
            self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
            if (self.config.mode === "range")
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        function setDate(date, triggerChange, format) {
            if (triggerChange === void 0) { triggerChange = false; }
            if (format === void 0) { format = self.config.dateFormat; }
            if ((date !== 0 && !date) || (date instanceof Array && date.length === 0))
                return self.clear(triggerChange);
            setSelectedDate(date, format);
            self.showTimeInput = self.selectedDates.length > 0;
            self.latestSelectedDateObj =
                self.selectedDates[self.selectedDates.length - 1];
            self.redraw();
            jumpToDate();
            setHoursFromDate();
            if (self.selectedDates.length === 0) {
                self.clear(false);
            }
            updateValue(triggerChange);
            if (triggerChange)
                triggerEvent("onChange");
        }
        function parseDateRules(arr) {
            return arr
                .slice()
                .map(function (rule) {
                if (typeof rule === "string" ||
                    typeof rule === "number" ||
                    rule instanceof Date) {
                    return self.parseDate(rule, undefined, true);
                }
                else if (rule &&
                    typeof rule === "object" &&
                    rule.from &&
                    rule.to)
                    return {
                        from: self.parseDate(rule.from, undefined),
                        to: self.parseDate(rule.to, undefined)
                    };
                return rule;
            })
                .filter(function (x) { return x; }); // remove falsy values
        }
        function setupDates() {
            self.selectedDates = [];
            self.now = self.parseDate(self.config.now) || new Date();
            // Workaround IE11 setting placeholder as the input's value
            var preloadedDate = self.config.defaultDate ||
                ((self.input.nodeName === "INPUT" ||
                    self.input.nodeName === "TEXTAREA") &&
                    self.input.placeholder &&
                    self.input.value === self.input.placeholder
                    ? null
                    : self.input.value);
            if (preloadedDate)
                setSelectedDate(preloadedDate, self.config.dateFormat);
            self._initialDate =
                self.selectedDates.length > 0
                    ? self.selectedDates[0]
                    : self.config.minDate &&
                        self.config.minDate.getTime() > self.now.getTime()
                        ? self.config.minDate
                        : self.config.maxDate &&
                            self.config.maxDate.getTime() < self.now.getTime()
                            ? self.config.maxDate
                            : self.now;
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
            if (self.selectedDates.length > 0)
                self.latestSelectedDateObj = self.selectedDates[0];
            if (self.config.minTime !== undefined)
                self.config.minTime = self.parseDate(self.config.minTime, "H:i");
            if (self.config.maxTime !== undefined)
                self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
            self.minDateHasTime =
                !!self.config.minDate &&
                    (self.config.minDate.getHours() > 0 ||
                        self.config.minDate.getMinutes() > 0 ||
                        self.config.minDate.getSeconds() > 0);
            self.maxDateHasTime =
                !!self.config.maxDate &&
                    (self.config.maxDate.getHours() > 0 ||
                        self.config.maxDate.getMinutes() > 0 ||
                        self.config.maxDate.getSeconds() > 0);
            Object.defineProperty(self, "showTimeInput", {
                get: function () { return self._showTimeInput; },
                set: function (bool) {
                    self._showTimeInput = bool;
                    if (self.calendarContainer)
                        toggleClass(self.calendarContainer, "showTimeInput", bool);
                    self.isOpen && positionCalendar();
                }
            });
        }
        function setupInputs() {
            self.input = self.config.wrap
                ? element.querySelector("[data-input]")
                : element;
            /* istanbul ignore next */
            if (!self.input) {
                self.config.errorHandler(new Error("Invalid input element specified"));
                return;
            }
            // hack: store previous type to restore it after destroy()
            self.input._type = self.input.type;
            self.input.type = "text";
            self.input.classList.add("flatpickr-input");
            self._input = self.input;
            if (self.config.altInput) {
                // replicate self.element
                self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
                self._input = self.altInput;
                self.altInput.placeholder = self.input.placeholder;
                self.altInput.disabled = self.input.disabled;
                self.altInput.required = self.input.required;
                self.altInput.tabIndex = self.input.tabIndex;
                self.altInput.type = "text";
                self.input.setAttribute("type", "hidden");
                if (!self.config.static && self.input.parentNode)
                    self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
            }
            if (!self.config.allowInput)
                self._input.setAttribute("readonly", "readonly");
            self._positionElement = self.config.positionElement || self._input;
        }
        function setupMobile() {
            var inputType = self.config.enableTime
                ? self.config.noCalendar
                    ? "time"
                    : "datetime-local"
                : "date";
            self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
            self.mobileInput.step = self.input.getAttribute("step") || "any";
            self.mobileInput.tabIndex = 1;
            self.mobileInput.type = inputType;
            self.mobileInput.disabled = self.input.disabled;
            self.mobileInput.required = self.input.required;
            self.mobileInput.placeholder = self.input.placeholder;
            self.mobileFormatStr =
                inputType === "datetime-local"
                    ? "Y-m-d\\TH:i:S"
                    : inputType === "date"
                        ? "Y-m-d"
                        : "H:i:S";
            if (self.selectedDates.length > 0) {
                self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
            }
            if (self.config.minDate)
                self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
            if (self.config.maxDate)
                self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
            self.input.type = "hidden";
            if (self.altInput !== undefined)
                self.altInput.type = "hidden";
            try {
                if (self.input.parentNode)
                    self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
            }
            catch (_a) { }
            bind(self.mobileInput, "change", function (e) {
                self.setDate(e.target.value, false, self.mobileFormatStr);
                triggerEvent("onChange");
                triggerEvent("onClose");
            });
        }
        function toggle(e) {
            if (self.isOpen === true)
                return self.close();
            self.open(e);
        }
        function triggerEvent(event, data) {
            // If the instance has been destroyed already, all hooks have been removed
            if (self.config === undefined)
                return;
            var hooks = self.config[event];
            if (hooks !== undefined && hooks.length > 0) {
                for (var i = 0; hooks[i] && i < hooks.length; i++)
                    hooks[i](self.selectedDates, self.input.value, self, data);
            }
            if (event === "onChange") {
                self.input.dispatchEvent(createEvent("change"));
                // many front-end frameworks bind to the input event
                self.input.dispatchEvent(createEvent("input"));
            }
        }
        function createEvent(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            return e;
        }
        function isDateSelected(date) {
            for (var i = 0; i < self.selectedDates.length; i++) {
                if (compareDates(self.selectedDates[i], date) === 0)
                    return "" + i;
            }
            return false;
        }
        function isDateInRange(date) {
            if (self.config.mode !== "range" || self.selectedDates.length < 2)
                return false;
            return (compareDates(date, self.selectedDates[0]) >= 0 &&
                compareDates(date, self.selectedDates[1]) <= 0);
        }
        function updateNavigationCurrentMonth() {
            if (self.config.noCalendar || self.isMobile || !self.monthNav)
                return;
            self.yearElements.forEach(function (yearElement, i) {
                var d = new Date(self.currentYear, self.currentMonth, 1);
                d.setMonth(self.currentMonth + i);
                if (self.config.showMonths > 1 ||
                    self.config.monthSelectorType === "static") {
                    self.monthElements[i].textContent =
                        monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
                }
                else {
                    self.monthsDropdownContainer.value = d.getMonth().toString();
                }
                yearElement.value = d.getFullYear().toString();
            });
            self._hidePrevMonthArrow =
                self.config.minDate !== undefined &&
                    (self.currentYear === self.config.minDate.getFullYear()
                        ? self.currentMonth <= self.config.minDate.getMonth()
                        : self.currentYear < self.config.minDate.getFullYear());
            self._hideNextMonthArrow =
                self.config.maxDate !== undefined &&
                    (self.currentYear === self.config.maxDate.getFullYear()
                        ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                        : self.currentYear > self.config.maxDate.getFullYear());
        }
        function getDateStr(format) {
            return self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, format); })
                .filter(function (d, i, arr) {
                return self.config.mode !== "range" ||
                    self.config.enableTime ||
                    arr.indexOf(d) === i;
            })
                .join(self.config.mode !== "range"
                ? self.config.conjunction
                : self.l10n.rangeSeparator);
        }
        /**
         * Updates the values of inputs associated with the calendar
         */
        function updateValue(triggerChange) {
            if (triggerChange === void 0) { triggerChange = true; }
            if (self.mobileInput !== undefined && self.mobileFormatStr) {
                self.mobileInput.value =
                    self.latestSelectedDateObj !== undefined
                        ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                        : "";
            }
            self.input.value = getDateStr(self.config.dateFormat);
            if (self.altInput !== undefined) {
                self.altInput.value = getDateStr(self.config.altFormat);
            }
            if (triggerChange !== false)
                triggerEvent("onValueUpdate");
        }
        function onMonthNavClick(e) {
            var isPrevMonth = self.prevMonthNav.contains(e.target);
            var isNextMonth = self.nextMonthNav.contains(e.target);
            if (isPrevMonth || isNextMonth) {
                changeMonth(isPrevMonth ? -1 : 1);
            }
            else if (self.yearElements.indexOf(e.target) >= 0) {
                e.target.select();
            }
            else if (e.target.classList.contains("arrowUp")) {
                self.changeYear(self.currentYear + 1);
            }
            else if (e.target.classList.contains("arrowDown")) {
                self.changeYear(self.currentYear - 1);
            }
        }
        function timeWrapper(e) {
            e.preventDefault();
            var isKeyDown = e.type === "keydown", input = e.target;
            if (self.amPM !== undefined && e.target === self.amPM) {
                self.amPM.textContent =
                    self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
            }
            var min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta ||
                (isKeyDown ? (e.which === 38 ? 1 : -1) : 0);
            var newValue = curValue + step * delta;
            if (typeof input.value !== "undefined" && input.value.length === 2) {
                var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
                if (newValue < min) {
                    newValue =
                        max +
                            newValue +
                            int(!isHourElem) +
                            (int(isHourElem) && int(!self.amPM));
                    if (isMinuteElem)
                        incrementNumInput(undefined, -1, self.hourElement);
                }
                else if (newValue > max) {
                    newValue =
                        input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                    if (isMinuteElem)
                        incrementNumInput(undefined, 1, self.hourElement);
                }
                if (self.amPM &&
                    isHourElem &&
                    (step === 1
                        ? newValue + curValue === 23
                        : Math.abs(newValue - curValue) > step)) {
                    self.amPM.textContent =
                        self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
                }
                input.value = pad(newValue);
            }
        }
        init();
        return self;
    }
    /* istanbul ignore next */
    function _flatpickr(nodeList, config) {
        // static list
        var nodes = Array.prototype.slice
            .call(nodeList)
            .filter(function (x) { return x instanceof HTMLElement; });
        var instances = [];
        for (var i = 0; i < nodes.length; i++) {
            var node = nodes[i];
            try {
                if (node.getAttribute("data-fp-omit") !== null)
                    continue;
                if (node._flatpickr !== undefined) {
                    node._flatpickr.destroy();
                    node._flatpickr = undefined;
                }
                node._flatpickr = FlatpickrInstance(node, config || {});
                instances.push(node._flatpickr);
            }
            catch (e) {
                console.error(e);
            }
        }
        return instances.length === 1 ? instances[0] : instances;
    }
    /* istanbul ignore next */
    if (typeof HTMLElement !== "undefined" &&
        typeof HTMLCollection !== "undefined" &&
        typeof NodeList !== "undefined") {
        // browser env
        HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
        HTMLElement.prototype.flatpickr = function (config) {
            return _flatpickr([this], config);
        };
    }
    /* istanbul ignore next */
    var flatpickr = function (selector, config) {
        if (typeof selector === "string") {
            return _flatpickr(window.document.querySelectorAll(selector), config);
        }
        else if (selector instanceof Node) {
            return _flatpickr([selector], config);
        }
        else {
            return _flatpickr(selector, config);
        }
    };
    /* istanbul ignore next */
    flatpickr.defaultConfig = {};
    flatpickr.l10ns = {
        en: __assign({}, english),
        "default": __assign({}, english)
    };
    flatpickr.localize = function (l10n) {
        flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
    };
    flatpickr.setDefaults = function (config) {
        flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
    };
    flatpickr.parseDate = createDateParser({});
    flatpickr.formatDate = createDateFormatter({});
    flatpickr.compareDates = compareDates;
    /* istanbul ignore next */
    if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
        jQuery.fn.flatpickr = function (config) {
            return _flatpickr(this, config);
        };
    }
    // eslint-disable-next-line @typescript-eslint/camelcase
    Date.prototype.fp_incr = function (days) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
    };
    if (typeof window !== "undefined") {
        window.flatpickr = flatpickr;
    }

    return flatpickr;

}));


/***/ }),

/***/ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e(__webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js")):undefined}("undefined"!=typeof self?self:this,function(t){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"];function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var a=function(t){return u({},t)},f=i.concat(["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"]),l=["locale","showMonths"],s={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return null===t||t instanceof Date||"string"==typeof t||t instanceof String||t instanceof Array||"number"==typeof t}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return i}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var e=a(this.config);this.events.forEach(function(n){var r,i=o.a.defaultConfig[n]||[];e[n]=(r=e[n]||[],r instanceof Array?r:[r]).concat(i,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var i;t.$emit.apply(t,[(i=n,i.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())].concat(r))})}),e.defaultDate=this.value||e.defaultDate,this.fp=new o.a(this.getElem(),e),this.fpInput().addEventListener("blur",this.onBlur),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var e=this,n=t.target;this.$nextTick(function(){e.$emit("input",n.value)})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",t.target.value)},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var e=this,n=a(t);f.forEach(function(t){delete n[t]}),this.fp.set(n),l.forEach(function(t){void 0!==n[t]&&e.fp.set(t,n[t])})}},value:function(t){t!==this.$el.value&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};n.d(e,"Plugin",function(){return c}),n.d(e,"Component",function(){return s});var c=function(t,e){var n="flat-pickr";"string"==typeof e&&(n=e),t.component(n,s)};s.install=c;e.default=s}]).default});

/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LCircle.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LCircle.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var CircleMixin = {
  mixins: [Path],
  props: {
    fill: {
      type: Boolean,
      custom: true,
      default: true
    },
    radius: {
      type: Number,
      default: null
    }
  },
  mounted: function mounted () {
    this.circleOptions = Object.assign({}, this.pathOptions,
      {radius: this.radius});
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LCircle',
  mixins: [CircleMixin, Options],
  props: {
    latLng: {
      type: [Object, Array],
      default: function () { return [0, 0]; },
    },
  },
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(this.circleOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["circle"])(this.latLng, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  methods: {},
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LCircleMarker.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LCircleMarker.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var CircleMixin = {
  mixins: [Path],
  props: {
    fill: {
      type: Boolean,
      custom: true,
      default: true
    },
    radius: {
      type: Number,
      default: null
    }
  },
  mounted: function mounted () {
    this.circleOptions = Object.assign({}, this.pathOptions,
      {radius: this.radius});
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LCircleMarker',
  mixins: [CircleMixin, Options],
  props: {
    latLng: {
      type: [Object, Array],
      default: function () { return [0, 0]; },
    },
    pane: {
      type: String,
      default: 'markerPane',
    },
  },
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(this.circleOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["circleMarker"])(this.latLng, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LControl.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LControl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var ControlMixin = {
  props: {
    position: {
      type: String,
      default: 'topright'
    }
  },
  mounted: function mounted () {
    this.controlOptions = {
      position: this.position
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LControl',
  mixins: [ControlMixin, Options],
  props: {
    disableClickPropagation: {
      type: Boolean,
      custom: true,
      default: true
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var LControl = leaflet__WEBPACK_IMPORTED_MODULE_0__["Control"].extend({
      element: undefined,
      onAdd: function onAdd () {
        return this.element;
      },
      setElement: function setElement (el) {
        this.element = el;
      }
    });
    var options = optionsMerger(this.controlOptions, this);
    this.mapObject = new LControl(options);
    propsBinder(this, this.mapObject, this.$options.props);
    this.parentContainer = findRealParent(this.$parent);
    this.mapObject.setElement(this.$el);
    if (this.disableClickPropagation) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].disableClickPropagation(this.$el);
    }
    this.mapObject.addTo(this.parentContainer.mapObject);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LControlAttribution.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LControlAttribution.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var ControlMixin = {
  props: {
    position: {
      type: String,
      default: 'topright'
    }
  },
  mounted: function mounted () {
    this.controlOptions = {
      position: this.position
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LControlAttribution',
  mixins: [ControlMixin, Options],
  props: {
    prefix: {
      type: [String, Boolean],
      default: null
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(Object.assign({}, this.controlOptions,
      {prefix: this.prefix}), this);
    this.mapObject = leaflet__WEBPACK_IMPORTED_MODULE_0__["control"].attribution(options);
    propsBinder(this, this.mapObject, this.$options.props);
    this.mapObject.addTo(this.$parent.mapObject);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  render: function render () {
    return null;
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LControlLayers.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LControlLayers.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var ControlMixin = {
  props: {
    position: {
      type: String,
      default: 'topright'
    }
  },
  mounted: function mounted () {
    this.controlOptions = {
      position: this.position
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LControlLayers',
  mixins: [ControlMixin, Options],
  props: {
    collapsed: {
      type: Boolean,
      default: true,
    },
    autoZIndex: {
      type: Boolean,
      default: true,
    },
    hideSingleBase: {
      type: Boolean,
      default: false,
    },
    sortLayers: {
      type: Boolean,
      default: false,
    },
    sortFunction: {
      type: Function,
      default: undefined,
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(
      Object.assign({}, this.controlOptions,
        {collapsed: this.collapsed,
        autoZIndex: this.autoZIndex,
        hideSingleBase: this.hideSingleBase,
        sortLayers: this.sortLayers,
        sortFunction: this.sortFunction}),
      this
    );
    this.mapObject = leaflet__WEBPACK_IMPORTED_MODULE_0__["control"].layers(null, null, options);
    propsBinder(this, this.mapObject, this.$options.props);
    this.$parent.registerLayerControl(this);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  methods: {
    addLayer: function addLayer(layer) {
      if (layer.layerType === 'base') {
        this.mapObject.addBaseLayer(layer.mapObject, layer.name);
      } else if (layer.layerType === 'overlay') {
        this.mapObject.addOverlay(layer.mapObject, layer.name);
      }
    },
    removeLayer: function removeLayer(layer) {
      this.mapObject.removeLayer(layer.mapObject);
    },
  },
  render: function render() {
    return null;
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LControlScale.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LControlScale.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var ControlMixin = {
  props: {
    position: {
      type: String,
      default: 'topright'
    }
  },
  mounted: function mounted () {
    this.controlOptions = {
      position: this.position
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LControlScale',
  mixins: [ControlMixin, Options],
  props: {
    maxWidth: {
      type: Number,
      default: 100
    },
    metric: {
      type: Boolean,
      default: true
    },
    imperial: {
      type: Boolean,
      default: true
    },
    updateWhenIdle: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(Object.assign({}, this.controlOptions,
      {maxWidth: this.maxWidth,
      metric: this.metric,
      imperial: this.imperial,
      updateWhenIdle: this.updateWhenIdle}), this);
    this.mapObject = leaflet__WEBPACK_IMPORTED_MODULE_0__["control"].scale(options);
    propsBinder(this, this.mapObject, this.$options.props);
    this.mapObject.addTo(this.$parent.mapObject);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  render: function render () {
    return null;
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LControlZoom.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LControlZoom.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var ControlMixin = {
  props: {
    position: {
      type: String,
      default: 'topright'
    }
  },
  mounted: function mounted () {
    this.controlOptions = {
      position: this.position
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LControlZoom',
  mixins: [ControlMixin, Options],
  props: {
    zoomInText: {
      type: String,
      default: '+'
    },
    zoomInTitle: {
      type: String,
      default: 'Zoom in'
    },
    zoomOutText: {
      type: String,
      default: '-'
    },
    zoomOutTitle: {
      type: String,
      default: 'Zoom out'
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(Object.assign({}, this.controlOptions,
      {zoomInText: this.zoomInText,
      zoomInTitle: this.zoomInTitle,
      zoomOutText: this.zoomOutText,
      zoomOutTitle: this.zoomOutTitle}), this);
    this.mapObject = leaflet__WEBPACK_IMPORTED_MODULE_0__["control"].zoom(options);
    propsBinder(this, this.mapObject, this.$options.props);
    this.mapObject.addTo(this.$parent.mapObject);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  render: function render () {
    return null;
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LFeatureGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LFeatureGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var LayerGroupMixin = {
  mixins: [Layer],
  mounted: function mounted () {
    this.layerGroupOptions = this.layerOptions;
  },
  methods: {
    addLayer: function addLayer (layer, alreadyAdded) {
      if (!alreadyAdded) {
        this.mapObject.addLayer(layer.mapObject);
      }
      this.parentContainer.addLayer(layer, true);
    },
    removeLayer: function removeLayer (layer, alreadyRemoved) {
      if (!alreadyRemoved) {
        this.mapObject.removeLayer(layer.mapObject);
      }
      this.parentContainer.removeLayer(layer, true);
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LFeatureGroup',
  mixins: [LayerGroupMixin, Options],
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["featureGroup"])();
    propsBinder(this, this.mapObject, this.$options.props);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    if (this.visible) {
      this.parentContainer.addLayer(this);
    }
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LGeoJson.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LGeoJson.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var LayerGroup = {
  mixins: [Layer],
  mounted: function mounted () {
    this.layerGroupOptions = this.layerOptions;
  },
  methods: {
    addLayer: function addLayer (layer, alreadyAdded) {
      if (!alreadyAdded) {
        this.mapObject.addLayer(layer.mapObject);
      }
      this.parentContainer.addLayer(layer, true);
    },
    removeLayer: function removeLayer (layer, alreadyRemoved) {
      if (!alreadyRemoved) {
        this.mapObject.removeLayer(layer.mapObject);
      }
      this.parentContainer.removeLayer(layer, true);
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LGeoJson',
  mixins: [LayerGroup, Options],
  props: {
    geojson: {
      type: [Object, Array],
      custom: true,
      default: function () { return ({}); },
    },
    options: {
      type: Object,
      custom: true,
      default: function () { return ({}); },
    },
    optionsStyle: {
      type: [Object, Function],
      custom: true,
      default: null,
    },
  },
  computed: {
    mergedOptions: function mergedOptions() {
      return optionsMerger(
        Object.assign({}, this.layerGroupOptions,
          {style: this.optionsStyle}),
        this
      );
    },
  },
  mounted: function mounted() {
    var this$1 = this;

    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["geoJSON"])(this.geojson, this.mergedOptions);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.parentContainer.mapObject.removeLayer(this.mapObject);
  },
  methods: {
    setGeojson: function setGeojson(newVal) {
      this.mapObject.clearLayers();
      this.mapObject.addData(newVal);
    },
    getGeoJSONData: function getGeoJSONData() {
      return this.mapObject.toGeoJSON();
    },
    getBounds: function getBounds() {
      return this.mapObject.getBounds();
    },
    setOptions: function setOptions$1(newVal, oldVal) {
      this.mapObject.clearLayers();
      Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(this.mapObject, this.mergedOptions);
      this.mapObject.addData(this.geojson);
    },
    setOptionsStyle: function setOptionsStyle(newVal, oldVal) {
      this.mapObject.setStyle(newVal);
    },
  },
  render: function render() {
    return null;
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LGridLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LGridLayer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);



var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var GridLayerMixin = {
  mixins: [Layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      custom: false,
      default: 1.0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.gridLayerOptions = Object.assign({}, this.layerOptions,
      {pane: this.pane,
      opacity: this.opacity,
      zIndex: this.zIndex,
      tileSize: this.tileSize,
      noWrap: this.noWrap});
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LGridLayer',
  mixins: [GridLayerMixin, Options],

  props: {
    tileComponent: {
      type: Object,
      custom: true,
      required: true
    }
  },

  data: function data () {
    return {
      tileComponents: {}
    };
  },

  computed: {
    TileConstructor: function TileConstructor () {
      return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend(this.tileComponent);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    var GLayer = leaflet__WEBPACK_IMPORTED_MODULE_1__["GridLayer"].extend({});
    var options = optionsMerger(this.gridLayerOptions, this);
    this.mapObject = new GLayer(options);
    leaflet__WEBPACK_IMPORTED_MODULE_1__["DomEvent"].on(this.mapObject, this.$listeners);
    this.mapObject.on('tileunload', this.onUnload, this);
    propsBinder(this, this.mapObject, this.$options.props);
    this.mapObject.createTile = this.createTile;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  beforeDestroy: function beforeDestroy () {
    this.parentContainer.removeLayer(this.mapObject);
    this.mapObject.off('tileunload', this.onUnload);
    this.mapObject = null;
  },

  methods: {
    createTile: function createTile (coords) {
      var div = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div');
      var dummy = leaflet__WEBPACK_IMPORTED_MODULE_1__["DomUtil"].create('div');
      div.appendChild(dummy);

      var tileInstance = new this.TileConstructor({
        el: dummy,
        parent: this,
        propsData: {
          coords: coords
        }
      });

      var key = this.mapObject._tileCoordsToKey(coords);
      this.tileComponents[key] = tileInstance;

      return div;
    },

    onUnload: function onUnload (e) {
      var key = this.mapObject._tileCoordsToKey(e.coords);
      if (typeof this.tileComponents[key] !== 'undefined') {
        this.tileComponents[key].$destroy();
        this.tileComponents[key].$el.remove();
        delete this.tileComponents[key];
      }
    },

    setTileComponent: function setTileComponent (newVal) {
      this.mapObject.redraw();
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LIcon.js":
/*!************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LIcon.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

//

var script = {
  name: 'LIcon',
  props: {
    iconUrl: {
      type: String,
      custom: true,
      default: null
    },
    iconRetinaUrl: {
      type: String,
      custom: true,
      default: null
    },
    iconSize: {
      type: [Object, Array],
      custom: true,
      default: null
    },
    iconAnchor: {
      type: [Object, Array],
      custom: true,
      default: null
    },
    popupAnchor: {
      type: [Object, Array],
      custom: true,
      default: function () { return [0, 0]; }
    },
    tooltipAnchor: {
      type: [Object, Array],
      custom: true,
      default: function () { return [0, 0]; }
    },
    shadowUrl: {
      type: String,
      custom: true,
      default: null
    },
    shadowRetinaUrl: {
      type: String,
      custom: true,
      default: null
    },
    shadowSize: {
      type: [Object, Array],
      custom: true,
      default: null
    },
    shadowAnchor: {
      type: [Object, Array],
      custom: true,
      default: null
    },
    bgPos: {
      type: [Object, Array],
      custom: true,
      default: function () { return [0, 0]; }
    },
    className: {
      type: String,
      custom: true,
      default: ''
    },
    options: {
      type: Object,
      custom: true,
      default: function () { return ({}); }
    }
  },

  data: function data () {
    return {
      parentContainer: null,
      observer: null,
      recreationNeeded: false,
      swapHtmlNeeded: false
    };
  },

  mounted: function mounted () {
    var this$1 = this;

    this.parentContainer = findRealParent(this.$parent);

    propsBinder(this, this.$parent.mapObject, this.$options.props);

    this.observer = new MutationObserver(function () {
      this$1.scheduleHtmlSwap();
    });
    this.observer.observe(
      this.$el,
      { attributes: true, childList: true, characterData: true, subtree: true }
    );
    this.scheduleCreateIcon();
  },

  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer.mapObject) {
      this.parentContainer.mapObject.setIcon(this.parentContainer.$props.icon);
    }

    this.observer.disconnect();
  },

  methods: {
    scheduleCreateIcon: function scheduleCreateIcon () {
      this.recreationNeeded = true;

      this.$nextTick(this.createIcon);
    },

    scheduleHtmlSwap: function scheduleHtmlSwap () {
      this.htmlSwapNeeded = true;

      this.$nextTick(this.createIcon);
    },

    createIcon: function createIcon () {
      // If only html of a divIcon changed, we can just replace the DOM without the need of recreating the whole icon
      if (this.htmlSwapNeeded && !this.recreationNeeded && this.iconObject && this.parentContainer.mapObject.getElement()) {
        this.parentContainer.mapObject.getElement().innerHTML = this.$el.innerHTML;

        this.htmlSwapNeeded = false;
        return;
      }

      if (!this.recreationNeeded) {
        return;
      }

      if (this.iconObject) {
        leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].off(this.iconObject, this.$listeners);
      }

      var options = optionsMerger({
        iconUrl: this.iconUrl,
        iconRetinaUrl: this.iconRetinaUrl,
        iconSize: this.iconSize,
        iconAnchor: this.iconAnchor,
        popupAnchor: this.popupAnchor,
        tooltipAnchor: this.tooltipAnchor,
        shadowUrl: this.shadowUrl,
        shadowRetinaUrl: this.shadowRetinaUrl,
        shadowSize: this.shadowSize,
        shadowAnchor: this.shadowAnchor,
        bgPos: this.bgPos,
        className: this.className,
        html: this.$el.innerHTML || this.html
      }, this);

      if (options.html) {
        this.iconObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["divIcon"])(options);
      } else {
        this.iconObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["icon"])(options);
      }

      leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.iconObject, this.$listeners);

      this.parentContainer.mapObject.setIcon(this.iconObject);

      this.recreationNeeded = false;
      this.htmlSwapNeeded = false;
    },

    setIconUrl: function setIconUrl () {
      this.scheduleCreateIcon();
    },
    setIconRetinaUrl: function setIconRetinaUrl () {
      this.scheduleCreateIcon();
    },
    setIconSize: function setIconSize () {
      this.scheduleCreateIcon();
    },
    setIconAnchor: function setIconAnchor () {
      this.scheduleCreateIcon();
    },
    setPopupAnchor: function setPopupAnchor () {
      this.scheduleCreateIcon();
    },
    setTooltipAnchor: function setTooltipAnchor () {
      this.scheduleCreateIcon();
    },
    setShadowUrl: function setShadowUrl () {
      this.scheduleCreateIcon();
    },
    setShadowRetinaUrl: function setShadowRetinaUrl () {
      this.scheduleCreateIcon();
    },
    setShadowAnchor: function setShadowAnchor () {
      this.scheduleCreateIcon();
    },
    setBgPos: function setBgPos () {
      this.scheduleCreateIcon();
    },
    setClassName: function setClassName () {
      this.scheduleCreateIcon();
    },
    setHtml: function setHtml () {
      this.scheduleCreateIcon();
    }
  },

  render: function render () {
    return null;
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._t("default")],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LIconDefault.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LIconDefault.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var script = {
  name: 'LIconDefault',
  props: {
    imagePath: {
      type: String,
      custom: true,
      default: ''
    }
  },
  mounted: function mounted () {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["Icon"].Default.imagePath = this.imagePath;
    propsBinder(this, {}, this.$options.props);
  },
  methods: {
    setImagePath: function setImagePath (newVal) {
      leaflet__WEBPACK_IMPORTED_MODULE_0__["Icon"].Default.imagePath = newVal;
    }
  },
  render: function render () {
    return null;
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LImageOverlay.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LImageOverlay.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var ImageOverlayMixin = {
  mixins: [Layer, InteractiveLayer],
  props: {
    url: {
      type: String,
      custom: true
    },
    bounds: {
      custom: true
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    alt: {
      type: String,
      default: ''
    },
    interactive: {
      type: Boolean,
      default: false
    },
    crossOrigin: {
      type: Boolean,
      default: false
    },
    errorOverlayUrl: {
      type: String,
      custom: true,
      default: ''
    },
    zIndex: {
      type: Number,
      custom: true,
      default: 1
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted () {
    this.imageOverlayOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {opacity: this.opacity,
      alt: this.alt,
      interactive: this.interactive,
      crossOrigin: this.crossOrigin,
      errorOverlayUrl: this.errorOverlayUrl,
      zIndex: this.zIndex,
      className: this.className});
  },
  methods: {
    setOpacity: function setOpacity (opacity) {
      return this.mapObject.setOpacity(opacity);
    },
    setUrl: function setUrl (url) {
      return this.mapObject.setUrl(url);
    },
    setBounds: function setBounds (bounds) {
      return this.mapObject.setBounds(bounds);
    },
    getBounds: function getBounds () {
      return this.mapObject.getBounds();
    },
    getElement: function getElement () {
      return this.mapObject.getElement();
    },
    bringToFront: function bringToFront () {
      return this.mapObject.bringToFront();
    },
    bringToBack: function bringToBack () {
      return this.mapObject.bringToBack();
    }
  },
  render: function render () {
    return null;
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LImageOverlay',
  mixins: [ImageOverlayMixin, Options],
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(this.imageOverlayOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["imageOverlay"])(this.url, this.bounds, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  render: function render() {
    return null;
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LLayerGroup.js":
/*!******************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LLayerGroup.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var LayerGroupMixin = {
  mixins: [Layer],
  mounted: function mounted () {
    this.layerGroupOptions = this.layerOptions;
  },
  methods: {
    addLayer: function addLayer (layer, alreadyAdded) {
      if (!alreadyAdded) {
        this.mapObject.addLayer(layer.mapObject);
      }
      this.parentContainer.addLayer(layer, true);
    },
    removeLayer: function removeLayer (layer, alreadyRemoved) {
      if (!alreadyRemoved) {
        this.mapObject.removeLayer(layer.mapObject);
      }
      this.parentContainer.removeLayer(layer, true);
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LLayerGroup',
  mixins: [LayerGroupMixin, Options],
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["layerGroup"])();
    propsBinder(this, this.mapObject, this.$options.props);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    if (this.visible) {
      this.parentContainer.addLayer(this);
    }
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LMap.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var debounce = function (fn, time) {
  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      fn.apply(context, args);
      timeout = null;
    }, time);
  };
};

var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LMap',
  mixins: [Options],
  props: {
    center: {
      type: [Object, Array],
      custom: true,
      default: function () { return [0, 0]; },
    },
    bounds: {
      type: [Array, Object],
      custom: true,
      default: null,
    },
    maxBounds: {
      type: [Array, Object],
      default: null,
    },
    zoom: {
      type: Number,
      custom: true,
      default: 0,
    },
    minZoom: {
      type: Number,
      default: null,
    },
    maxZoom: {
      type: Number,
      default: null,
    },
    paddingBottomRight: {
      type: Array,
      custom: true,
      default: null,
    },
    paddingTopLeft: {
      type: Array,
      custom: true,
      default: null,
    },
    padding: {
      type: Array,
      custom: true,
      default: null,
    },
    worldCopyJump: {
      type: Boolean,
      default: false,
    },
    crs: {
      type: Object,
      custom: true,
      default: function () { return leaflet__WEBPACK_IMPORTED_MODULE_0__["CRS"].EPSG3857; },
    },
    maxBoundsViscosity: {
      type: Number,
      default: null,
    },
    inertia: {
      type: Boolean,
      default: null,
    },
    inertiaDeceleration: {
      type: Number,
      default: null,
    },
    inertiaMaxSpeed: {
      type: Number,
      default: null,
    },
    easeLinearity: {
      type: Number,
      default: null,
    },
    zoomAnimation: {
      type: Boolean,
      default: null,
    },
    zoomAnimationThreshold: {
      type: Number,
      default: null,
    },
    fadeAnimation: {
      type: Boolean,
      default: null,
    },
    markerZoomAnimation: {
      type: Boolean,
      default: null,
    },
    noBlockingAnimations: {
      type: Boolean,
      default: false,
    },
  },
  data: function data() {
    return {
      ready: false,
      lastSetCenter: null,
      lastSetBounds: null,
      lastSetZoom: null,
      layerControl: undefined,
      layersToAdd: [],
      layersInControl: [],
    };
  },
  computed: {
    fitBoundsOptions: function fitBoundsOptions() {
      var options = {
        animate: this.noBlockingAnimations ? false : null,
      };
      if (this.padding) {
        options.padding = this.padding;
      } else {
        if (this.paddingBottomRight) {
          options.paddingBottomRight = this.paddingBottomRight;
        }
        if (this.paddingTopLeft) {
          options.paddingTopLeft = this.paddingTopLeft;
        }
      }
      return options;
    },
  },
  beforeDestroy: function beforeDestroy() {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(
      {
        minZoom: this.minZoom,
        maxZoom: this.maxZoom,
        maxBounds: this.maxBounds,
        maxBoundsViscosity: this.maxBoundsViscosity,
        worldCopyJump: this.worldCopyJump,
        crs: this.crs,
        center: this.center,
        zoom: this.zoom,
        inertia: this.inertia,
        inertiaDeceleration: this.inertiaDeceleration,
        inertiaMaxSpeed: this.inertiaMaxSpeed,
        easeLinearity: this.easeLinearity,
        zoomAnimation: this.zoomAnimation,
        zoomAnimationThreshold: this.zoomAnimationThreshold,
        fadeAnimation: this.fadeAnimation,
        markerZoomAnimation: this.markerZoomAnimation,
      },
      this
    );
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["map"])(this.$el, options);
    this.setBounds(this.bounds);
    this.mapObject.on('moveend', debounce(this.moveEndHandler, 100));
    this.mapObject.on('overlayadd', this.overlayAddHandler);
    this.mapObject.on('overlayremove', this.overlayRemoveHandler);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    // DEPRECATED leaflet:load
    this.$emit('leaflet:load');
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  methods: {
    registerLayerControl: function registerLayerControl(lControlLayers) {
      var this$1 = this;

      this.layerControl = lControlLayers;
      this.mapObject.addControl(lControlLayers.mapObject);
      this.layersToAdd.forEach(function (layer) {
        this$1.layerControl.addLayer(layer);
      });
      this.layersToAdd = [];
    },
    addLayer: function addLayer(layer, alreadyAdded) {
      if (layer.layerType !== undefined) {
        if (this.layerControl === undefined) {
          this.layersToAdd.push(layer);
        } else {
          var exist = this.layersInControl.find(
            function (l) { return l.mapObject._leaflet_id === layer.mapObject._leaflet_id; }
          );
          if (!exist) {
            this.layerControl.addLayer(layer);
            this.layersInControl.push(layer);
          }
        }
      }
      if (!alreadyAdded && layer.visible !== false) {
        this.mapObject.addLayer(layer.mapObject);
      }
    },
    hideLayer: function hideLayer(layer) {
      if (layer.layerType !== undefined) {
        this.mapObject.removeLayer(layer.mapObject);
      }
    },
    removeLayer: function removeLayer(layer, alreadyRemoved) {
      if (layer.layerType !== undefined) {
        if (this.layerControl === undefined) {
          this.layersToAdd = this.layersToAdd.filter(
            function (l) { return l.name !== layer.name; }
          );
        } else {
          this.layerControl.removeLayer(layer);
          this.layersInControl = this.layersInControl.filter(
            function (l) { return l.mapObject._leaflet_id !== layer.mapObject._leaflet_id; }
          );
        }
      }
      if (!alreadyRemoved) {
        this.mapObject.removeLayer(layer.mapObject);
      }
    },
    setZoom: function setZoom(newVal, oldVal) {
      this.mapObject.setZoom(newVal, {
        animate: this.noBlockingAnimations ? false : null,
      });
    },
    setCenter: function setCenter(newVal, oldVal) {
      if (newVal == null) {
        return;
      }
      var newCenter = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(newVal);
      var oldCenter = this.lastSetCenter || this.mapObject.getCenter();
      if (oldCenter.lat !== newCenter.lat || oldCenter.lng !== newCenter.lng) {
        this.lastSetCenter = newCenter;
        this.mapObject.panTo(newCenter, {
          animate: this.noBlockingAnimations ? false : null,
        });
      }
    },
    setBounds: function setBounds(newVal, oldVal) {
      if (!newVal) {
        return;
      }
      var newBounds = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLngBounds"])(newVal);
      if (!newBounds.isValid()) {
        return;
      }
      var oldBounds = this.lastSetBounds || this.mapObject.getBounds();
      var boundsChanged = !oldBounds.equals(newBounds, 0); // set maxMargin to 0 - check exact equals
      if (boundsChanged) {
        this.lastSetBounds = newBounds;
        this.mapObject.fitBounds(newBounds, this.fitBoundsOptions);
      }
    },
    setPaddingBottomRight: function setPaddingBottomRight(newVal, oldVal) {
      this.paddingBottomRight = newVal;
    },
    setPaddingTopLeft: function setPaddingTopLeft(newVal, oldVal) {
      this.paddingTopLeft = newVal;
    },
    setPadding: function setPadding(newVal, oldVal) {
      this.padding = newVal;
    },
    setCrs: function setCrs(newVal, oldVal) {
      console.log('Changing CRS is not yet supported by Leaflet');
    },
    fitBounds: function fitBounds(bounds) {
      this.mapObject.fitBounds(bounds, {
        animate: this.noBlockingAnimations ? false : null,
      });
    },
    moveEndHandler: function moveEndHandler() {
      this.$emit('update:zoom', this.mapObject.getZoom());
      var center = this.mapObject.getCenter();
      this.$emit('update:center', center);
      var bounds = this.mapObject.getBounds();
      this.$emit('update:bounds', bounds);
    },
    overlayAddHandler: function overlayAddHandler(e) {
      var layer = this.layersInControl.find(function (l) { return l.name === e.name; });
      if (layer) {
        layer.updateVisibleProp(true);
      }
    },
    overlayRemoveHandler: function overlayRemoveHandler(e) {
      var layer = this.layersInControl.find(function (l) { return l.name === e.name; });
      if (layer) {
        layer.updateVisibleProp(false);
      }
    },
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return function (id, style) { return addStyle(id, style); };
}
var HEAD;
var styles = {};
function addStyle(id, css) {
    var group = isOldIE ? css.media || 'default' : id;
    var style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        var code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                { style.element.setAttribute('media', css.media); }
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            var index = style.ids.size - 1;
            var textNode = document.createTextNode(code);
            var nodes = style.element.childNodes;
            if (nodes[index])
                { style.element.removeChild(nodes[index]); }
            if (nodes.length)
                { style.element.insertBefore(textNode, nodes[index]); }
            else
                { style.element.appendChild(textNode); }
        }
    }
}

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"vue2leaflet-map"},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = function (inject) {
    if (!inject) { return }
    inject("data-v-4d388c28_0", { source: ".vue2leaflet-map{height:100%;width:100%}", map: undefined, media: undefined });

  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    createInjector,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LMarker.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LMarker.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var debounce = function (fn, time) {
  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      fn.apply(context, args);
      timeout = null;
    }, time);
  };
};

var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LMarker',
  mixins: [Layer, Options],
  props: {
    pane: {
      type: String,
      default: 'markerPane'
    },
    draggable: {
      type: Boolean,
      custom: true,
      default: false
    },
    latLng: {
      type: [Object, Array],
      custom: true,
      default: null
    },
    icon: {
      type: [Object],
      custom: false,
      default: function () { return new leaflet__WEBPACK_IMPORTED_MODULE_0__["Icon"].Default(); }
    },
    zIndexOffset: {
      type: Number,
      custom: false,
      default: null
    }
  },
  data: function data () {
    return {
      ready: false
    };
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(Object.assign({}, this.layerOptions,
      {icon: this.icon,
      zIndexOffset: this.zIndexOffset,
      draggable: this.draggable}), this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["marker"])(this.latLng, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    this.mapObject.on('move', debounce(this.latLngSync, 100));
    propsBinder(this, this.mapObject, this.$options.props);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.ready = true;
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  methods: {
    setDraggable: function setDraggable (newVal, oldVal) {
      if (this.mapObject.dragging) {
        newVal ? this.mapObject.dragging.enable() : this.mapObject.dragging.disable();
      }
    },
    setLatLng: function setLatLng (newVal) {
      if (newVal == null) {
        return;
      }

      if (this.mapObject) {
        var oldLatLng = this.mapObject.getLatLng();
        var newLatLng = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["latLng"])(newVal);
        if (newLatLng.lat !== oldLatLng.lat || newLatLng.lng !== oldLatLng.lng) {
          this.mapObject.setLatLng(newLatLng);
        }
      }
    },
    latLngSync: function latLngSync (event) {
      this.$emit('update:latLng', event.latlng);
      this.$emit('update:lat-lng', event.latlng);
    }
  },
  render: function (h) {
    if (this.ready && this.$slots.default) {
      return h('div', { style: { display: 'none' } }, this.$slots.default);
    }
    return null;
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LPolygon.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LPolygon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var Polyline = {
  mixins: [Path],
  props: {
    smoothFactor: {
      type: Number,
      custom: true,
      default: 1.0
    },
    noClip: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  data: function data () {
    return {
      ready: false
    };
  },
  mounted: function mounted () {
    this.polyLineOptions = Object.assign({}, this.pathOptions,
      {smoothFactor: this.smoothFactor,
      noClip: this.noClip});
  },
  methods: {
    setSmoothFactor: function setSmoothFactor (newVal) {
      this.mapObject.setStyle({ smoothFactor: newVal });
    },
    setNoClip: function setNoClip (newVal) {
      this.mapObject.setStyle({ noClip: newVal });
    },
    addLatLng: function addLatLng (value) {
      this.mapObject.addLatLng(value);
    }
  }
};

var PolygonMixin = {
  mixins: [Polyline],
  props: {
    fill: {
      type: Boolean,
      custom: true,
      default: true
    }
  },
  mounted: function mounted () {
    this.polygonOptions = this.polyLineOptions;
  },
  methods: {
    getGeoJSONData: function getGeoJSONData () {
      return this.mapObject.toGeoJSON();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LPolygon',
  mixins: [PolygonMixin, Options],
  props: {
    latLngs: {
      type: Array,
      default: function () { return []; },
    },
  },
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(this.polygonOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["polygon"])(this.latLngs, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LPolyline.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LPolyline.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var PolylineMixin = {
  mixins: [Path],
  props: {
    smoothFactor: {
      type: Number,
      custom: true,
      default: 1.0
    },
    noClip: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  data: function data () {
    return {
      ready: false
    };
  },
  mounted: function mounted () {
    this.polyLineOptions = Object.assign({}, this.pathOptions,
      {smoothFactor: this.smoothFactor,
      noClip: this.noClip});
  },
  methods: {
    setSmoothFactor: function setSmoothFactor (newVal) {
      this.mapObject.setStyle({ smoothFactor: newVal });
    },
    setNoClip: function setNoClip (newVal) {
      this.mapObject.setStyle({ noClip: newVal });
    },
    addLatLng: function addLatLng (value) {
      this.mapObject.addLatLng(value);
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LPolyline',
  mixins: [PolylineMixin, Options],
  props: {
    latLngs: {
      type: Array,
      default: function () { return []; },
    },
  },
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(this.polyLineOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["polyline"])(this.latLngs, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LPopup.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LPopup.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Popper = {
  props: {
    content: {
      type: String,
      default: null,
      custom: true
    }
  },
  mounted: function mounted () {
    this.popperOptions = {};
  },
  methods: {
    setContent: function setContent (newVal) {
      if (this.mapObject && newVal !== null && newVal !== undefined) {
        this.mapObject.setContent(newVal);
      }
    }
  },
  render: function render (h) {
    if (this.$slots.default) {
      return h('div', this.$slots.default);
    }
    return null;
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LPopup',
  mixins: [Popper, Options],
  props: {
    latLng: {
      type: [Object, Array],
      default: function () { return []; }
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(this.popperOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["popup"])(options);
    if (this.latLng !== undefined) {
      this.mapObject.setLatLng(this.latLng);
    }
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.mapObject.setContent(this.content || this.$el);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.mapObject.bindPopup(this.mapObject);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      if (this.parentContainer.unbindPopup) {
        this.parentContainer.unbindPopup();
      } else if (this.parentContainer.mapObject && this.parentContainer.mapObject.unbindPopup) {
        this.parentContainer.mapObject.unbindPopup();
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LRectangle.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LRectangle.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var Polyline = {
  mixins: [Path],
  props: {
    smoothFactor: {
      type: Number,
      custom: true,
      default: 1.0
    },
    noClip: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  data: function data () {
    return {
      ready: false
    };
  },
  mounted: function mounted () {
    this.polyLineOptions = Object.assign({}, this.pathOptions,
      {smoothFactor: this.smoothFactor,
      noClip: this.noClip});
  },
  methods: {
    setSmoothFactor: function setSmoothFactor (newVal) {
      this.mapObject.setStyle({ smoothFactor: newVal });
    },
    setNoClip: function setNoClip (newVal) {
      this.mapObject.setStyle({ noClip: newVal });
    },
    addLatLng: function addLatLng (value) {
      this.mapObject.addLatLng(value);
    }
  }
};

var Polygon = {
  mixins: [Polyline],
  props: {
    fill: {
      type: Boolean,
      custom: true,
      default: true
    }
  },
  mounted: function mounted () {
    this.polygonOptions = this.polyLineOptions;
  },
  methods: {
    getGeoJSONData: function getGeoJSONData () {
      return this.mapObject.toGeoJSON();
    }
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LRectangle',
  mixins: [Polygon, Options],
  props: {
    bounds: {
      type: Array,
      default: function () { return []; },
    },
  },
  data: function data() {
    return {
      ready: false,
    };
  },
  mounted: function mounted() {
    var this$1 = this;

    var options = optionsMerger(this.polygonOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["rectangle"])(this.bounds, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.ready = true;
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[(_vm.ready)?_vm._t("default"):_vm._e()],2)};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LTileLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LTileLayer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var GridLayer = {
  mixins: [Layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      custom: false,
      default: 1.0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.gridLayerOptions = Object.assign({}, this.layerOptions,
      {pane: this.pane,
      opacity: this.opacity,
      zIndex: this.zIndex,
      tileSize: this.tileSize,
      noWrap: this.noWrap});
  }
};

var TileLayerMixin = {
  mixins: [GridLayer],
  props: {
    tms: {
      type: Boolean,
      default: false
    },
    detectRetina: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.tileLayerOptions = Object.assign({}, this.gridLayerOptions,
      {tms: this.tms,
      detectRetina: this.detectRetina});
  },
  render: function render () {
    return null;
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

//

var script = {
  name: 'LTileLayer',
  mixins: [TileLayerMixin, Options],
  props: {
    url: {
      type: String,
      default: null
    },
    tileLayerClass: {
      type: Function,
      default: leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"]
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(this.tileLayerOptions, this);
    this.mapObject = this.tileLayerClass(this.url, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LTooltip.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LTooltip.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Popper = {
  props: {
    content: {
      type: String,
      default: null,
      custom: true
    }
  },
  mounted: function mounted () {
    this.popperOptions = {};
  },
  methods: {
    setContent: function setContent (newVal) {
      if (this.mapObject && newVal !== null && newVal !== undefined) {
        this.mapObject.setContent(newVal);
      }
    }
  },
  render: function render (h) {
    if (this.$slots.default) {
      return h('div', this.$slots.default);
    }
    return null;
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LTooltip',
  mixins: [Popper, Options],
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(this.popperOptions, this);
    this.mapObject = Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["tooltip"])(options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.mapObject.setContent(this.content || this.$el);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.mapObject.bindTooltip(this.mapObject);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      if (this.parentContainer.unbindTooltip) {
        this.parentContainer.unbindTooltip();
      } else if (this.parentContainer.mapObject && this.parentContainer.mapObject.unbindTooltip) {
        this.parentContainer.mapObject.unbindTooltip();
      }
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/components/LWMSTileLayer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/components/LWMSTileLayer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};

var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var GridLayer = {
  mixins: [Layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      custom: false,
      default: 1.0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.gridLayerOptions = Object.assign({}, this.layerOptions,
      {pane: this.pane,
      opacity: this.opacity,
      zIndex: this.zIndex,
      tileSize: this.tileSize,
      noWrap: this.noWrap});
  }
};

var TileLayer = {
  mixins: [GridLayer],
  props: {
    tms: {
      type: Boolean,
      default: false
    },
    detectRetina: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.tileLayerOptions = Object.assign({}, this.gridLayerOptions,
      {tms: this.tms,
      detectRetina: this.detectRetina});
  },
  render: function render () {
    return null;
  }
};

var TileLayerWMS = {
  mixins: [TileLayer],
  props: {
    layers: {
      type: String,
      default: ''
    },
    styles: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'image/jpeg'
    },
    transparent: {
      type: Boolean,
      custom: false
    },
    version: {
      type: String,
      default: '1.1.1'
    },
    crs: {
      default: null
    },
    upperCase: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.tileLayerWMSOptions = Object.assign({}, this.tileLayerOptions,
      {layers: this.layers,
      styles: this.styles,
      format: this.format,
      transparent: this.transparent,
      version: this.version,
      crs: this.crs,
      upperCase: this.upperCase});
  }
};

var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

var script = {
  name: 'LWMSTileLayer',
  mixins: [TileLayerWMS, Options],
  props: {
    baseUrl: {
      type: String,
      default: null
    }
  },
  mounted: function mounted () {
    var this$1 = this;

    var options = optionsMerger(this.tileLayerWMSOptions, this);
    this.mapObject = leaflet__WEBPACK_IMPORTED_MODULE_0__["tileLayer"].wms(this.baseUrl, options);
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomEvent"].on(this.mapObject, this.$listeners);
    propsBinder(this, this.mapObject, this.$options.props);
    this.parentContainer = findRealParent(this.$parent);
    this.parentContainer.addLayer(this, !this.visible);
    this.$nextTick(function () {
      this$1.$emit('ready', this$1.mapObject);
    });
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = undefined;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    {},
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

/* harmony default export */ __webpack_exports__["default"] = (__vue_component__);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Circle.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Circle.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var Circle = {
  mixins: [Path],
  props: {
    fill: {
      type: Boolean,
      custom: true,
      default: true
    },
    radius: {
      type: Number,
      default: null
    }
  },
  mounted: function mounted () {
    this.circleOptions = Object.assign({}, this.pathOptions,
      {radius: this.radius});
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Circle);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Control.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Control.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Control = {
  props: {
    position: {
      type: String,
      default: 'topright'
    }
  },
  mounted: function mounted () {
    this.controlOptions = {
      position: this.position
    };
  },
  beforeDestroy: function beforeDestroy () {
    if (this.mapObject) {
      this.mapObject.remove();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Control);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/GridLayer.js":
/*!************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/GridLayer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var GridLayer = {
  mixins: [Layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      custom: false,
      default: 1.0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.gridLayerOptions = Object.assign({}, this.layerOptions,
      {pane: this.pane,
      opacity: this.opacity,
      zIndex: this.zIndex,
      tileSize: this.tileSize,
      noWrap: this.noWrap});
  }
};

/* harmony default export */ __webpack_exports__["default"] = (GridLayer);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/ImageOverlay.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/ImageOverlay.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var ImageOverlay = {
  mixins: [Layer, InteractiveLayer],
  props: {
    url: {
      type: String,
      custom: true
    },
    bounds: {
      custom: true
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    alt: {
      type: String,
      default: ''
    },
    interactive: {
      type: Boolean,
      default: false
    },
    crossOrigin: {
      type: Boolean,
      default: false
    },
    errorOverlayUrl: {
      type: String,
      custom: true,
      default: ''
    },
    zIndex: {
      type: Number,
      custom: true,
      default: 1
    },
    className: {
      type: String,
      default: ''
    }
  },
  mounted: function mounted () {
    this.imageOverlayOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {opacity: this.opacity,
      alt: this.alt,
      interactive: this.interactive,
      crossOrigin: this.crossOrigin,
      errorOverlayUrl: this.errorOverlayUrl,
      zIndex: this.zIndex,
      className: this.className});
  },
  methods: {
    setOpacity: function setOpacity (opacity) {
      return this.mapObject.setOpacity(opacity);
    },
    setUrl: function setUrl (url) {
      return this.mapObject.setUrl(url);
    },
    setBounds: function setBounds (bounds) {
      return this.mapObject.setBounds(bounds);
    },
    getBounds: function getBounds () {
      return this.mapObject.getBounds();
    },
    getElement: function getElement () {
      return this.mapObject.getElement();
    },
    bringToFront: function bringToFront () {
      return this.mapObject.bringToFront();
    },
    bringToBack: function bringToBack () {
      return this.mapObject.bringToBack();
    }
  },
  render: function render () {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ImageOverlay);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/InteractiveLayer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/InteractiveLayer.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (InteractiveLayer);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Layer.js":
/*!********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Layer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

/* harmony default export */ __webpack_exports__["default"] = (Layer);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/LayerGroup.js":
/*!*************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/LayerGroup.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var LayerGroup = {
  mixins: [Layer],
  mounted: function mounted () {
    this.layerGroupOptions = this.layerOptions;
  },
  methods: {
    addLayer: function addLayer (layer, alreadyAdded) {
      if (!alreadyAdded) {
        this.mapObject.addLayer(layer.mapObject);
      }
      this.parentContainer.addLayer(layer, true);
    },
    removeLayer: function removeLayer (layer, alreadyRemoved) {
      if (!alreadyRemoved) {
        this.mapObject.removeLayer(layer.mapObject);
      }
      this.parentContainer.removeLayer(layer, true);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (LayerGroup);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Options.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Options.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Options = {
  props: {
    options: {
      type: Object,
      default: function () { return ({}); }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Options);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Path.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Path.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Path);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Polygon.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Polygon.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var Polyline = {
  mixins: [Path],
  props: {
    smoothFactor: {
      type: Number,
      custom: true,
      default: 1.0
    },
    noClip: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  data: function data () {
    return {
      ready: false
    };
  },
  mounted: function mounted () {
    this.polyLineOptions = Object.assign({}, this.pathOptions,
      {smoothFactor: this.smoothFactor,
      noClip: this.noClip});
  },
  methods: {
    setSmoothFactor: function setSmoothFactor (newVal) {
      this.mapObject.setStyle({ smoothFactor: newVal });
    },
    setNoClip: function setNoClip (newVal) {
      this.mapObject.setStyle({ noClip: newVal });
    },
    addLatLng: function addLatLng (value) {
      this.mapObject.addLatLng(value);
    }
  }
};

var Polygon = {
  mixins: [Polyline],
  props: {
    fill: {
      type: Boolean,
      custom: true,
      default: true
    }
  },
  mounted: function mounted () {
    this.polygonOptions = this.polyLineOptions;
  },
  methods: {
    getGeoJSONData: function getGeoJSONData () {
      return this.mapObject.toGeoJSON();
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Polygon);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Polyline.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Polyline.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var InteractiveLayer = {
  props: {
    interactive: {
      type: Boolean,
      default: true
    },
    bubblingMouseEvents: {
      type: Boolean,
      default: true
    }
  },
  mounted: function mounted () {
    this.interactiveLayerOptions = {
      interactive: this.interactive,
      bubblingMouseEvents: this.bubblingMouseEvents
    };
  }
};

var Path = {
  mixins: [Layer, InteractiveLayer],
  props: {
    lStyle: {
      type: Object,
      custom: true,
      default: null
    },
    stroke: {
      type: Boolean,
      custom: true,
      default: true
    },
    color: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    weight: {
      type: Number,
      custom: true,
      default: 3
    },
    opacity: {
      type: Number,
      custom: true,
      default: 1.0
    },
    lineCap: {
      type: String,
      custom: true,
      default: 'round'
    },
    lineJoin: {
      type: String,
      custom: true,
      default: 'round'
    },
    dashArray: {
      type: String,
      custom: true,
      default: null
    },
    dashOffset: {
      type: String,
      custom: true,
      default: null
    },
    fill: {
      type: Boolean,
      custom: true,
      default: false
    },
    fillColor: {
      type: String,
      custom: true,
      default: '#3388ff'
    },
    fillOpacity: {
      type: Number,
      custom: true,
      default: 0.2
    },
    fillRule: {
      type: String,
      custom: true,
      default: 'evenodd'
    },
    className: {
      type: String,
      custom: true,
      default: null
    }
  },
  mounted: function mounted () {
    this.pathOptions = Object.assign({}, this.layerOptions,
      this.interactiveLayerOptions,
      {stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      lineJoin: this.lineJoin,
      dashArray: this.dashArray,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillColor: this.fillColor,
      fillOpacity: this.fillOpacity,
      fillRule: this.fillRule,
      className: this.className});

    if (this.lStyle) {
      console.warn('lStyle is deprecated and is going to be removed in the next major version');
      for (var style in this.lStyle) {
        this.pathOptions[style] = this.lStyle[style];
      }
    }
  },
  beforeDestroy: function beforeDestroy () {
    if (this.parentContainer) {
      this.parentContainer.removeLayer(this);
    } else {
      console.error('Missing parent container');
    }
  },
  methods: {
    setLStyle: function setLStyle (newVal) {
      this.mapObject.setStyle(newVal);
    },
    setStroke: function setStroke (newVal) {
      this.mapObject.setStyle({ stroke: newVal });
    },
    setColor: function setColor (newVal) {
      this.mapObject.setStyle({ color: newVal });
    },
    setWeight: function setWeight (newVal) {
      this.mapObject.setStyle({ weight: newVal });
    },
    setOpacity: function setOpacity (newVal) {
      this.mapObject.setStyle({ opacity: newVal });
    },
    setLineCap: function setLineCap (newVal) {
      this.mapObject.setStyle({ lineCap: newVal });
    },
    setLineJoin: function setLineJoin (newVal) {
      this.mapObject.setStyle({ lineJoin: newVal });
    },
    setDashArray: function setDashArray (newVal) {
      this.mapObject.setStyle({ dashArray: newVal });
    },
    setDashOffset: function setDashOffset (newVal) {
      this.mapObject.setStyle({ dashOffset: newVal });
    },
    setFill: function setFill (newVal) {
      this.mapObject.setStyle({ fill: newVal });
    },
    setFillColor: function setFillColor (newVal) {
      this.mapObject.setStyle({ fillColor: newVal });
    },
    setFillOpacity: function setFillOpacity (newVal) {
      this.mapObject.setStyle({ fillOpacity: newVal });
    },
    setFillRule: function setFillRule (newVal) {
      this.mapObject.setStyle({ fillRule: newVal });
    },
    setClassName: function setClassName (newVal) {
      this.mapObject.setStyle({ className: newVal });
    }
  }
};

var Polyline = {
  mixins: [Path],
  props: {
    smoothFactor: {
      type: Number,
      custom: true,
      default: 1.0
    },
    noClip: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  data: function data () {
    return {
      ready: false
    };
  },
  mounted: function mounted () {
    this.polyLineOptions = Object.assign({}, this.pathOptions,
      {smoothFactor: this.smoothFactor,
      noClip: this.noClip});
  },
  methods: {
    setSmoothFactor: function setSmoothFactor (newVal) {
      this.mapObject.setStyle({ smoothFactor: newVal });
    },
    setNoClip: function setNoClip (newVal) {
      this.mapObject.setStyle({ noClip: newVal });
    },
    addLatLng: function addLatLng (value) {
      this.mapObject.addLatLng(value);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Polyline);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/Popper.js":
/*!*********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/Popper.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Popper = {
  props: {
    content: {
      type: String,
      default: null,
      custom: true
    }
  },
  mounted: function mounted () {
    this.popperOptions = {};
  },
  methods: {
    setContent: function setContent (newVal) {
      if (this.mapObject && newVal !== null && newVal !== undefined) {
        this.mapObject.setContent(newVal);
      }
    }
  },
  render: function render (h) {
    if (this.$slots.default) {
      return h('div', this.$slots.default);
    }
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Popper);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/TileLayer.js":
/*!************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/TileLayer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var GridLayer = {
  mixins: [Layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      custom: false,
      default: 1.0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.gridLayerOptions = Object.assign({}, this.layerOptions,
      {pane: this.pane,
      opacity: this.opacity,
      zIndex: this.zIndex,
      tileSize: this.tileSize,
      noWrap: this.noWrap});
  }
};

var TileLayer = {
  mixins: [GridLayer],
  props: {
    tms: {
      type: Boolean,
      default: false
    },
    detectRetina: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.tileLayerOptions = Object.assign({}, this.gridLayerOptions,
      {tms: this.tms,
      detectRetina: this.detectRetina});
  },
  render: function render () {
    return null;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TileLayer);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/mixins/TileLayerWMS.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/mixins/TileLayerWMS.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Layer = {
  props: {
    pane: {
      type: String,
      default: 'overlayPane',
    },
    attribution: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      custom: true,
      default: undefined,
    },
    layerType: {
      type: String,
      custom: true,
      default: undefined,
    },
    visible: {
      type: Boolean,
      custom: true,
      default: true,
    },
  },
  mounted: function mounted() {
    this.layerOptions = {
      attribution: this.attribution,
      pane: this.pane,
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindPopup();
    this.unbindTooltip();
    this.parentContainer.removeLayer(this);
  },
  methods: {
    setAttribution: function setAttribution(val, old) {
      var attributionControl = this.$parent.mapObject.attributionControl;
      attributionControl.removeAttribution(old).addAttribution(val);
    },
    setName: function setName() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setLayerType: function setLayerType() {
      this.parentContainer.removeLayer(this);
      if (this.visible) {
        this.parentContainer.addLayer(this);
      }
    },
    setVisible: function setVisible(newVal) {
      if (this.mapObject) {
        if (newVal) {
          this.parentContainer.addLayer(this);
        } else {
          this.parentContainer.hideLayer(this);
        }
      }
    },
    unbindTooltip: function unbindTooltip() {
      var tooltip = this.mapObject ? this.mapObject.getTooltip() : null;
      if (tooltip) {
        tooltip.unbindTooltip();
      }
    },
    unbindPopup: function unbindPopup() {
      var popup = this.mapObject ? this.mapObject.getPopup() : null;
      if (popup) {
        popup.unbindPopup();
      }
    },
    updateVisibleProp: function updateVisibleProp(value) {
      this.$emit('update:visible', value);
    },
  },
};

var GridLayer = {
  mixins: [Layer],
  props: {
    pane: {
      type: String,
      default: 'tilePane'
    },
    opacity: {
      type: Number,
      custom: false,
      default: 1.0
    },
    zIndex: {
      type: Number,
      default: 1
    },
    tileSize: {
      type: Number,
      default: 256
    },
    noWrap: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.gridLayerOptions = Object.assign({}, this.layerOptions,
      {pane: this.pane,
      opacity: this.opacity,
      zIndex: this.zIndex,
      tileSize: this.tileSize,
      noWrap: this.noWrap});
  }
};

var TileLayer = {
  mixins: [GridLayer],
  props: {
    tms: {
      type: Boolean,
      default: false
    },
    detectRetina: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.tileLayerOptions = Object.assign({}, this.gridLayerOptions,
      {tms: this.tms,
      detectRetina: this.detectRetina});
  },
  render: function render () {
    return null;
  }
};

var TileLayerWMS = {
  mixins: [TileLayer],
  props: {
    layers: {
      type: String,
      default: ''
    },
    styles: {
      type: String,
      default: ''
    },
    format: {
      type: String,
      default: 'image/jpeg'
    },
    transparent: {
      type: Boolean,
      custom: false
    },
    version: {
      type: String,
      default: '1.1.1'
    },
    crs: {
      default: null
    },
    upperCase: {
      type: Boolean,
      default: false
    }
  },
  mounted: function mounted () {
    this.tileLayerWMSOptions = Object.assign({}, this.tileLayerOptions,
      {layers: this.layers,
      styles: this.styles,
      format: this.format,
      transparent: this.transparent,
      version: this.version,
      crs: this.crs,
      upperCase: this.upperCase});
  }
};

/* harmony default export */ __webpack_exports__["default"] = (TileLayerWMS);


/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/utils/utils.js":
/*!*******************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/utils/utils.js ***!
  \*******************************************************/
/*! exports provided: capitalizeFirstLetter, collectionCleaner, debounce, findRealParent, optionsMerger, propsBinder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectionCleaner", function() { return collectionCleaner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findRealParent", function() { return findRealParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsMerger", function() { return optionsMerger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propsBinder", function() { return propsBinder; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);


var debounce = function (fn, time) {
  var timeout;

  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(function () {
      fn.apply(context, args);
      timeout = null;
    }, time);
  };
};

var capitalizeFirstLetter = function (string) {
  if (!string || typeof string.charAt !== 'function') { return string; }
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var propsBinder = function (vueElement, leafletElement, props, options) {
  var loop = function ( key ) {
    var setMethodName = 'set' + capitalizeFirstLetter(key);
    var deepValue = (props[key].type === Object) ||
      (props[key].type === Array) ||
      (Array.isArray(props[key].type));
    if (props[key].custom && vueElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        vueElement[setMethodName](newVal, oldVal);
      }, {
        deep: deepValue
      });
    } else if (setMethodName === 'setOptions') {
      vueElement.$watch(key, function (newVal, oldVal) {
        Object(leaflet__WEBPACK_IMPORTED_MODULE_0__["setOptions"])(leafletElement, newVal);
      }, {
        deep: deepValue
      });
    } else if (leafletElement[setMethodName]) {
      vueElement.$watch(key, function (newVal, oldVal) {
        leafletElement[setMethodName](newVal);
      }, {
        deep: deepValue
      });
    }
  };

  for (var key in props) loop( key );
};

var collectionCleaner = function (options) {
  var result = {};
  for (var key in options) {
    var value = options[key];
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
};

var optionsMerger = function (props, instance) {
  var options = instance.options && instance.options.constructor === Object ? instance.options : {};
  props = props && props.constructor === Object ? props : {};
  var result = collectionCleaner(options);
  props = collectionCleaner(props);
  var defaultProps = instance.$options.props;
  for (var key in props) {
    var def = defaultProps[key] ? defaultProps[key].default : Symbol('unique');
    if (result[key] && def !== props[key]) {
      console.warn((key + " props is overriding the value passed in the options props"));
      result[key] = props[key];
    } else if (!result[key]) {
      result[key] = props[key];
    }
  }  return result;
};

var findRealParent = function (firstVueParent) {
  var found = false;
  while (firstVueParent && !found) {
    if (firstVueParent.mapObject === undefined) {
      firstVueParent = firstVueParent.$parent;
    } else {
      found = true;
    }
  }
  return firstVueParent;
};




/***/ }),

/***/ "./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue2-leaflet/dist/vue2-leaflet.es.js ***!
  \***********************************************************/
/*! exports provided: capitalizeFirstLetter, collectionCleaner, debounce, findRealParent, optionsMerger, propsBinder, CircleMixin, ControlMixin, GridLayerMixin, ImageOverlayMixin, InteractiveLayerMixin, LayerMixin, LayerGroupMixin, OptionsMixin, PathMixin, PolygonMixin, PolylineMixin, PopperMixin, TileLayerMixin, TileLayerWMSMixin, LCircle, LCircleMarker, LControl, LControlAttribution, LControlLayers, LControlScale, LControlZoom, LFeatureGroup, LGeoJson, LGridLayer, LIcon, LIconDefault, LImageOverlay, LLayerGroup, LMap, LMarker, LPolygon, LPolyline, LPopup, LRectangle, LTileLayer, LTooltip, LWMSTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/utils */ "./node_modules/vue2-leaflet/dist/utils/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["capitalizeFirstLetter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "collectionCleaner", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["collectionCleaner"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["debounce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findRealParent", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["findRealParent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optionsMerger", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["optionsMerger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "propsBinder", function() { return _utils_utils__WEBPACK_IMPORTED_MODULE_0__["propsBinder"]; });

/* harmony import */ var _mixins_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mixins/Circle */ "./node_modules/vue2-leaflet/dist/mixins/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleMixin", function() { return _mixins_Circle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _mixins_Control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mixins/Control */ "./node_modules/vue2-leaflet/dist/mixins/Control.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlMixin", function() { return _mixins_Control__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _mixins_GridLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mixins/GridLayer */ "./node_modules/vue2-leaflet/dist/mixins/GridLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayerMixin", function() { return _mixins_GridLayer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _mixins_ImageOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixins/ImageOverlay */ "./node_modules/vue2-leaflet/dist/mixins/ImageOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageOverlayMixin", function() { return _mixins_ImageOverlay__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _mixins_InteractiveLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixins/InteractiveLayer */ "./node_modules/vue2-leaflet/dist/mixins/InteractiveLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractiveLayerMixin", function() { return _mixins_InteractiveLayer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _mixins_Layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixins/Layer */ "./node_modules/vue2-leaflet/dist/mixins/Layer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerMixin", function() { return _mixins_Layer__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _mixins_LayerGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixins/LayerGroup */ "./node_modules/vue2-leaflet/dist/mixins/LayerGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerGroupMixin", function() { return _mixins_LayerGroup__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _mixins_Options__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mixins/Options */ "./node_modules/vue2-leaflet/dist/mixins/Options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsMixin", function() { return _mixins_Options__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _mixins_Path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mixins/Path */ "./node_modules/vue2-leaflet/dist/mixins/Path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PathMixin", function() { return _mixins_Path__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _mixins_Polygon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixins/Polygon */ "./node_modules/vue2-leaflet/dist/mixins/Polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolygonMixin", function() { return _mixins_Polygon__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _mixins_Polyline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mixins/Polyline */ "./node_modules/vue2-leaflet/dist/mixins/Polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineMixin", function() { return _mixins_Polyline__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _mixins_Popper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mixins/Popper */ "./node_modules/vue2-leaflet/dist/mixins/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopperMixin", function() { return _mixins_Popper__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _mixins_TileLayer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixins/TileLayer */ "./node_modules/vue2-leaflet/dist/mixins/TileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayerMixin", function() { return _mixins_TileLayer__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _mixins_TileLayerWMS__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./mixins/TileLayerWMS */ "./node_modules/vue2-leaflet/dist/mixins/TileLayerWMS.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayerWMSMixin", function() { return _mixins_TileLayerWMS__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _components_LCircle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/LCircle */ "./node_modules/vue2-leaflet/dist/components/LCircle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LCircle", function() { return _components_LCircle__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _components_LCircleMarker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/LCircleMarker */ "./node_modules/vue2-leaflet/dist/components/LCircleMarker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LCircleMarker", function() { return _components_LCircleMarker__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _components_LControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/LControl */ "./node_modules/vue2-leaflet/dist/components/LControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LControl", function() { return _components_LControl__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _components_LControlAttribution__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/LControlAttribution */ "./node_modules/vue2-leaflet/dist/components/LControlAttribution.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LControlAttribution", function() { return _components_LControlAttribution__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _components_LControlLayers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/LControlLayers */ "./node_modules/vue2-leaflet/dist/components/LControlLayers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LControlLayers", function() { return _components_LControlLayers__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _components_LControlScale__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/LControlScale */ "./node_modules/vue2-leaflet/dist/components/LControlScale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LControlScale", function() { return _components_LControlScale__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _components_LControlZoom__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/LControlZoom */ "./node_modules/vue2-leaflet/dist/components/LControlZoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LControlZoom", function() { return _components_LControlZoom__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _components_LFeatureGroup__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/LFeatureGroup */ "./node_modules/vue2-leaflet/dist/components/LFeatureGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LFeatureGroup", function() { return _components_LFeatureGroup__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _components_LGeoJson__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/LGeoJson */ "./node_modules/vue2-leaflet/dist/components/LGeoJson.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LGeoJson", function() { return _components_LGeoJson__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _components_LGridLayer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/LGridLayer */ "./node_modules/vue2-leaflet/dist/components/LGridLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LGridLayer", function() { return _components_LGridLayer__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _components_LIcon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/LIcon */ "./node_modules/vue2-leaflet/dist/components/LIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIcon", function() { return _components_LIcon__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _components_LIconDefault__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/LIconDefault */ "./node_modules/vue2-leaflet/dist/components/LIconDefault.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LIconDefault", function() { return _components_LIconDefault__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _components_LImageOverlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/LImageOverlay */ "./node_modules/vue2-leaflet/dist/components/LImageOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LImageOverlay", function() { return _components_LImageOverlay__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _components_LLayerGroup__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/LLayerGroup */ "./node_modules/vue2-leaflet/dist/components/LLayerGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LLayerGroup", function() { return _components_LLayerGroup__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _components_LMap__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/LMap */ "./node_modules/vue2-leaflet/dist/components/LMap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LMap", function() { return _components_LMap__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _components_LMarker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/LMarker */ "./node_modules/vue2-leaflet/dist/components/LMarker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LMarker", function() { return _components_LMarker__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _components_LPolygon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/LPolygon */ "./node_modules/vue2-leaflet/dist/components/LPolygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LPolygon", function() { return _components_LPolygon__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _components_LPolyline__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/LPolyline */ "./node_modules/vue2-leaflet/dist/components/LPolyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LPolyline", function() { return _components_LPolyline__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _components_LPopup__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/LPopup */ "./node_modules/vue2-leaflet/dist/components/LPopup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LPopup", function() { return _components_LPopup__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _components_LRectangle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/LRectangle */ "./node_modules/vue2-leaflet/dist/components/LRectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LRectangle", function() { return _components_LRectangle__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _components_LTileLayer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/LTileLayer */ "./node_modules/vue2-leaflet/dist/components/LTileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LTileLayer", function() { return _components_LTileLayer__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _components_LTooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/LTooltip */ "./node_modules/vue2-leaflet/dist/components/LTooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LTooltip", function() { return _components_LTooltip__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _components_LWMSTileLayer__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/LWMSTileLayer */ "./node_modules/vue2-leaflet/dist/components/LWMSTileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LWMSTileLayer", function() { return _components_LWMSTileLayer__WEBPACK_IMPORTED_MODULE_37__["default"]; });











































/***/ })

}]);