(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"KHd+":function(e,t,r){"use strict";function n(e,t,r,n,i,a,s,o){var l,v="function"==typeof e?e.options:e;if(t&&(v.render=t,v.staticRenderFns=r,v._compiled=!0),n&&(v.functional=!0),a&&(v._scopeId="data-v-"+a),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},v._ssrRegister=l):i&&(l=o?function(){i.call(this,(v.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(v.functional){v._injectStyles=l;var c=v.render;v.render=function(e,t){return l.call(t),c(e,t)}}else{var d=v.beforeCreate;v.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:v}}r.d(t,"a",(function(){return n}))},i1or:function(e,t,r){"use strict";r.r(t);var n=r("ta7f"),i={props:{user:{type:String}},data:function(){return{modal:"",selectedModal:"",showMore:"",organizerEvents:[],review:"",reviewername:"",url:"",activeItem:"",webp:!1}},computed:{getUrl:function(e){return this.events.in_progress_events},organizerStyle:function(){var e=this;return function(t){return t.thumbImagePath?e.webp?"background-image:url('/storage/".concat(t.thumbImagePath,"')"):"background-image:url('/storage/".concat(t.thumbImagePath.slice(0,-4),"jpg')"):"background:".concat(t.hexColor)}},status:function(){return function(e){return"r"!==e.status}},canView:function(){return function(e){return"p"==e.status}}},methods:{deleteRow:function(e){axios.delete("/events/".concat(this.selectedModal.slug)).then((function(e){location.reload()})).catch((function(e){e.response.data.errors}))},deleteOrg:function(e){var t=this;axios.delete("/organizer/".concat(this.selectedModal.slug)).then((function(e){t.events=e.data,t.selectedModal="",t.modal="",t.loadEvents()})).catch((function(e){e.response.data.errors}))},submitReview:function(e){var t=this,r={event:this.selectedModal,url:this.url,review:this.review,reviewername:this.reviewername};axios.post("/reviewevents",r).then((function(e){t.selectedModal="",t.modal=""})).catch((function(e){}))},showModal:function(e,t){console.log(e),this.selectedModal=e,this.modal=t},closeModal:function(){this.isModalVisible=!1},loadEvents:function(){var e=this;axios.get("/create-event/edit/fetch?timestamp=".concat((new Date).getTime())).then((function(t){e.organizerEvents=t.data}))},newEvent:function(e){var t=this;axios.post("/events",e).then((function(e){window.location.href="/create-event/".concat(e.data.slug,"/title")})).catch((function(e){t.serverErrors=e.response.data.errors}))},showOrganizer:function(e){window.location.href="/organizer/".concat(e.slug)},canUseWebP:function(){if(0==document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp"))return this.webp=!0}},mounted:function(){this.canUseWebP()},created:function(){this.loadEvents()},validations:{reviewername:{required:n.required},url:{required:n.required,url:n.url},review:{required:n.required,maxLength:Object(n.maxLength)(120)}}},a=r("KHd+"),s=Object(a.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"event-edit"},[e._l(e.organizerEvents,(function(t,n){return r("div",[r("div",{staticClass:"event-edit__organizer"},[r("div",{staticClass:"organizer-card grid"},[r("div",{staticClass:"organizer-card__image",style:e.organizerStyle(t)},[t.thumbImagePath?e._e():r("div",{staticClass:"organizer-card__image-icontext"},[r("h2",[e._v(e._s(t.name.charAt(0)))])])]),e._v(" "),r("div",{staticClass:"organizer-card__title"},[e._v("\n                        "+e._s(t.name)+"\n                    ")]),e._v(" "),r("div",{staticClass:"organizer-card__nav"},[r("a",{attrs:{href:"/organizer/"+t.slug+"/edit"}},[r("button",{staticClass:"edit-organizer"},[e._v("Edit")])]),e._v(" "),!t.in_progress_events.length||t.past_events.length?r("button",{staticClass:"edit-organizer",on:{click:function(r){return r.preventDefault(),e.showModal(t,"deleteOrg")}}},[e._v("Delete")]):e._e(),e._v(" "),r("button",{staticClass:"preview-organizer",on:{click:function(r){return r.preventDefault(),e.showOrganizer(t)}}},[e._v("Preview Organizer")])])]),e._v(" "),r("div",{staticClass:"listing-details-block"},[r("tabs",[r("tab",{staticClass:"event-edit-eventlist grid",attrs:{title:"Current Events",active:!0,id:t.id}},[r("div",{staticClass:"add-new-event-card"},[r("button",{staticClass:"new-event__button",on:{click:function(r){return r.preventDefault(),e.newEvent(t)}}},[r("div",{staticClass:"new-event__center"},[r("div",[r("svg",{staticClass:"b",attrs:{height:"32",width:"32",viewBox:"0 0 24 24","aria-label":"Add an Event",role:"img"}},[r("path",{attrs:{d:"M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"}})])]),e._v(" "),r("div",[r("p",[e._v("Add New Event")])])])])]),e._v(" "),e._l(t.in_progress_events,(function(t,n){return n<10?r("div",{key:t.id,staticClass:"edit-event__element"},[r("div",{staticClass:"edit-event__buttons"},[e.canView(t)?r("a",{attrs:{href:"/events/"+t.slug}},[r("button",{staticClass:"edit-event__sub-button"},[e._v("View")])]):e._e(),e._v(" "),e.status(t)?r("a",{attrs:{href:"/create-event/"+t.slug+"/title"}},[r("button",{staticClass:"edit-event__sub-button"},[e._v("Edit")])]):e._e(),e._v(" "),e.status(t)?r("button",{staticClass:"edit-event__sub-button",on:{click:function(r){return r.preventDefault(),e.showModal(t,"delete")}}},[e._v("Delete")]):e._e(),e._v(" "),e._e()]),e._v(" "),r("vue-event-edit-listing-item",{attrs:{user:e.user,event:t}})],1):e._e()})),e._v(" "),"delete"==e.modal?r("modal",{on:{close:function(t){e.modal=null}}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"circle del"},[r("p",[e._v("X")])])]),e._v(" "),r("div",{attrs:{slot:"body"},slot:"body"},[r("h3",[e._v("Are you sure?")]),e._v(" "),r("p",[e._v("You are deleting your "+e._s(e.selectedModal.name)+" event.")])]),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("button",{staticClass:"btn del",on:{click:function(t){return e.deleteRow()}}},[e._v("Delete")])])]):e._e(),e._v(" "),"deleteOrg"==e.modal?r("modal",{on:{close:function(t){e.modal=null}}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("div",{staticClass:"circle del"},[r("p",[e._v("X")])])]),e._v(" "),r("div",{attrs:{slot:"body"},slot:"body"},[r("h3",[e._v("Are you sure?")]),e._v(" "),r("p",[e._v("You are deleting your "+e._s(e.selectedModal.name)+" event.")])]),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("button",{staticClass:"btn del",on:{click:function(t){return e.deleteOrg()}}},[e._v("Delete")])])]):e._e(),e._v(" "),"addreview"==e.modal?r("modal",{on:{close:function(t){e.modal=null}}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h3",[e._v("Add Review")])]),e._v(" "),r("div",{attrs:{slot:"body"},slot:"body"},[r("div",{staticClass:"review"},[r("div",{staticClass:"field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.reviewername,expression:"reviewername"}],class:{active:"reviewername"==e.activeItem,error:e.$v.reviewername.$error},attrs:{type:"text",placeholder:"Reviewer's name"},domProps:{value:e.reviewername},on:{input:[function(t){t.target.composing||(e.reviewername=t.target.value)},function(t){return e.$v.reviewername.$touch()}],click:function(t){e.activeItem="reviewername"},blur:function(t){e.activeItem="reviewername"}}}),e._v(" "),e.$v.reviewername.$error?r("div",{staticClass:"validation-error"},[e.$v.reviewername.required?e._e():r("p",{staticClass:"error"},[e._v("Please add a title.")])]):e._e()]),e._v(" "),r("div",{staticClass:"field"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],class:{active:"url"==e.activeItem,error:e.$v.url.$error},attrs:{type:"text",placeholder:"Link to the review"},domProps:{value:e.url},on:{input:[function(t){t.target.composing||(e.url=t.target.value)},function(t){return e.$v.url.$touch()}],click:function(t){e.activeItem="url"},blur:function(t){e.activeItem="url"}}}),e._v(" "),e.$v.url.$error?r("div",{staticClass:"validation-error"},[e.$v.url.required?e._e():r("p",{staticClass:"error"},[e._v("Please add a title.")]),e._v(" "),e.$v.url.url?e._e():r("p",{staticClass:"error"},[e._v("Must be a url (https://...)")])]):e._e()])]),e._v(" "),r("div",{staticClass:"field"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],class:{active:"review"==e.activeItem,error:e.$v.review.$error},attrs:{type:"textarea",rows:"6",placeholder:"Review snippet (no longer than 120 characters)"},domProps:{value:e.review},on:{input:[function(t){t.target.composing||(e.review=t.target.value)},function(t){return e.$v.review.$touch()}],click:function(t){e.activeItem="review"},blur:function(t){e.activeItem="review"}}}),e._v(" "),e.$v.review.$error?r("div",{staticClass:"validation-error"},[e.$v.review.required?e._e():r("p",{staticClass:"error"},[e._v("Must include review snippet")]),e._v(" "),e.$v.review.maxLength?e._e():r("p",{staticClass:"error"},[e._v("The review snippit is too long.")])]):e._e()])]),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("button",{staticClass:"btn del",on:{click:function(t){return e.submitReview()}}},[e._v("Submit")])])]):e._e()],2),e._v(" "),r("tab",{staticClass:"event-edit-eventlist grid",attrs:{title:"Past Events",id:t.id+1}},[e._l(t.past_events,(function(t,n){return n<4?r("div",{key:t.id,staticClass:"edit-event__element"},[r("div",{staticClass:"edit-event__buttons"},[e.status(t)?r("a",{attrs:{href:"/events/"+t.slug}},[r("button",{staticClass:"edit-event__sub-button"},[e._v("View")])]):e._e(),e._v(" "),e.status(t)?r("button",{staticClass:"edit-event__sub-button",on:{click:function(r){return r.preventDefault(),e.showModal(t,"delete")}}},[e._v("Delete")]):e._e()]),e._v(" "),r("vue-event-edit-listing-item",{attrs:{user:e.user,loadurl:"/events/"+t.slug,event:t}})],1):e._e()})),e._v(" "),"delete"==e.modal?r("modal",{on:{close:function(t){e.modal=null}}},[r("div",{attrs:{slot:"header"},slot:"header"},[e._v("Ready to Delete?")]),e._v(" "),r("div",{attrs:{slot:"body"},slot:"body"},[e._v(" Are you sure you want to delete event "+e._s(e.selectedModal.name))]),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("button",{on:{click:function(t){return e.deleteRow()}}},[e._v("Yes")])])]):e._e()],2)],1)],1)])])})),e._v(" "),e._m(0)],2)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"new-organization"},[t("div",{staticClass:"new-organization__title"},[t("a",{attrs:{href:"/organizer/create"}},[t("button",{staticClass:"preview-organizer"},[this._v("Add another organization")])])])])])}],!1,null,null,null);t.default=s.exports}}]);