(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{Ctbq:function(e,t,a){"use strict";a.r(t);var i={props:["name","iconstatus","active"],data:function(){return{}}},s=a("KHd+"),n={props:["event","user"],components:{NavMenuItem:Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"create-menu__item",class:{active:e.active.active}},[a("div",{staticClass:"name"},[a("p",{staticClass:"create-menu-text"},[e._v(e._s(e.name))])]),e._v(" "),a("div",{staticClass:"status-icon"},["completed"==e.iconstatus?a("div",[a("svg",{staticStyle:{height:"20px",width:"20px",display:"block",fill:"rgb(0, 132, 137)"},attrs:{viewBox:"0 0 32 32",role:"img","aria-label":"Completed",focusable:"false"}},[a("path",{attrs:{d:"m21.71 13.71-6 6c-.39.39-1.02.39-1.41 0l-3-3c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l2.29 2.29 5.29-5.29c.39-.39 1.02-.39 1.41 0s .39 1.02 0 1.41m-5.71-13.71c-8.84 0-16 7.16-16 16s7.16 16 16 16 16-7.16 16-16-7.16-16-16-16"}})])]):e._e(),e._v(" "),"uncomplete"==e.iconstatus?a("div",[a("div",{staticClass:"create-nav-icon-border",staticStyle:{width:"20px",height:"20px","border-color":"rgb(176, 176, 176)",color:"rgb(176, 176, 176)"}},[a("svg",{staticStyle:{height:"100%",width:"100%",display:"block",fill:"rgb(176, 176, 176)"},attrs:{viewBox:"0 0 24 24",role:"img","aria-label":"Section collapsed. Click to expand.",focusable:"false"}},[a("rect",{attrs:{height:"2",rx:"1",width:"12",x:"6",y:"11"}}),a("rect",{attrs:{height:"12",rx:"1",width:"2",x:"11",y:"6"}})])])]):e._e(),e._v(" "),"locked"==e.iconstatus?a("div",[a("div",{staticClass:"create-nav-icon-border",staticStyle:{width:"20px",height:"20px","border-color":"rgb(176, 176, 176)",color:"rgb(176, 176, 176)"}},[a("svg",{staticStyle:{height:"75%",width:"75%",display:"block",fill:"rgb(176, 176, 176)"},attrs:{viewBox:"0 0 19 19",role:"img","aria-label":"This step is locked",focusable:"false"}},[a("path",{attrs:{d:"m17.1403105 10.3322131v-1.83599021c-.0044371-2.48293439-2.0786109-4.49407316-4.6371478-4.49622289h-1.0063254c-2.56010616.00215385-4.6349284 2.01566919-4.63714782 4.50012925v1.83208385c-1.0387857.0478557-1.85657082.8775506-1.85968948 1.886773v6.8825219c0 1.0485082.87586388 1.898492 1.95629672 1.898492h10.08740658c1.0804328 0 1.9562967-.8499838 1.9562967-1.898492v-6.8825219c-.0031187-1.0092224-.8209038-1.8389173-1.8596895-1.886773zm-7.90518974-1.83599021c.00267117-2.2124746 1.58801224-2.19412124 2.26171654-2.19488726h1.0063254c.7450523.00084715 2.2590036-.05221743 2.2617165 2.19488726v1.83599021h-5.52975844z"}})])])]):e._e()])])}),[],!1,null,null,null).exports},computed:{backUrl:function(){return this.user.hasCreatedOrganizers?"/create-event/edit":"/"},canReview:function(){return this.readyToSubmit?"/create-event/".concat(this.event.slug,"/review"):"#"}},data:function(){return{onOrganizer:!1,onTitle:!1,onLocation:!1,onCategory:!1,onShows:!1,onDescription:!1,onAdvisories:!1,onImage:!1,url:window.location.pathname,hover:"",pageHeight:"",isNotReview:window.location.pathname!="/create-event/".concat(this.event.slug,"/review"),isOrganizer:"/organizer/create"==window.location.pathname,readyToSubmit:!1,cantReview:"p"!==this.event.status}},methods:{handleResize:function(){this.pageHeight="min-height:".concat(window.innerHeight,"px")},toggleBodyClass:function(e,t){var a=document.querySelector(".create-body");"addClass"===e?a.classList.add(t):a.classList.remove(t)},checkSubmissionStatus:function(){"p"!==this.event.status&&"e"!==this.event.status&&this.event.organizer_id&&this.event.name&&(this.event.location_latlon||!this.event.hasLocation)&&this.event.category_id&&this.event.show_times&&this.event.price_range&&this.event.description&&this.event.largeImagePath&&this.event.advisories_id&&(this.readyToSubmit=!0)}},destroyed:function(){window.removeEventListener("resize",this.handleResize)},mounted:function(){window.location.pathname},created:function(){window.addEventListener("resize",this.handleResize),this.handleResize(),this.checkSubmissionStatus()}},r=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"create",style:e.pageHeight},[a("div",{staticClass:"grid create-nav-header"},[a("div",{staticClass:"create-nav-header__home"},[a("div",{staticClass:"nav-create-logo"},[a("a",{attrs:{href:e.backUrl}},[a("h3",[e._v("EI")])])])]),e._v(" "),e._m(0)]),e._v(" "),e.isOrganizer?a("div",{staticClass:"create-nav-guide"},[a("h3",[e._v("Submit your Organization")])]):a("div",{staticClass:"create-nav-guide"},[a("h3",[e._v("Submit your Event")])]),e._v(" "),e.isOrganizer?e._e():a("div",{staticClass:"grid create-menu"},[a("a",{attrs:{href:"/create-event/"+this.event.slug+"/title"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/title"},name:"Title",iconstatus:this.event.name?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/location"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/location"},name:"Location",iconstatus:this.event.location_latlon||!this.event.hasLocation?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/category"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/category"},name:"Category",iconstatus:this.event.category_id?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/shows"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/shows"},name:"Dates and Times",iconstatus:this.event.show_times?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/tickets"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/tickets"},name:"Tickets",iconstatus:this.event.price_range?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/description"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/description"},name:"Description",iconstatus:this.event.description?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/advisories"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/advisories"},name:"Advisories",iconstatus:this.event.advisories_id?"completed":"uncomplete"}})],1),e._v(" "),a("a",{attrs:{href:"/create-event/"+this.event.slug+"/images"}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/images"},name:"Image",iconstatus:this.event.largeImagePath?"completed":"uncomplete"}})],1),e._v(" "),e.cantReview?a("a",{attrs:{href:e.canReview}},[a("NavMenuItem",{attrs:{active:{active:e.url=="/create-event/"+this.event.slug+"/review"},name:"Final Review",iconstatus:"locked"}})],1):e._e()])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"nav-back"},[t("button",{staticClass:"nav-back-button"},[this._v(" Save and Exit ")])])}],!1,null,null,null);t.default=r.exports},"KHd+":function(e,t,a){"use strict";function i(e,t,a,i,s,n,r,c){var o,v="function"==typeof e?e.options:e;if(t&&(v.render=t,v.staticRenderFns=a,v._compiled=!0),i&&(v.functional=!0),n&&(v._scopeId="data-v-"+n),r?(o=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},v._ssrRegister=o):s&&(o=c?function(){s.call(this,(v.functional?this.parent:this).$root.$options.shadowRoot)}:s),o)if(v.functional){v._injectStyles=o;var l=v.render;v.render=function(e,t){return o.call(t),l(e,t)}}else{var h=v.beforeCreate;v.beforeCreate=h?[].concat(h,o):[o]}return{exports:e,options:v}}a.d(t,"a",(function(){return i}))}}]);