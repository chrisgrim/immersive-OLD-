(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"+fbh":function(e,t,i){"use strict";i.r(t);var r=i("ta7f"),n=i("jl8+"),a={components:{Multiselect:i.n(n).a},computed:{submitObject:function(){return{reviewername:this.reviewername?this.reviewername:"",review:this.review?this.review:"",url:this.url?this.url:"",rank:this.rank?this.rank:"",event:this.event?this.event:"",image_path:this.image_path?this.image_path:"/storage/reviews/default.png"}}},data:function(){return{event:"",events:[],add:!1,rank:"",rankOptions:["1","2","3","4","5"],modal:"",isLoading:"",isActive:"",reviewername:"",image_path:"",review:"",reviews:[],url:"",selectedModal:"",reviewerList:["No Proscenium","Room Escape Artist"],pagination:{paginate:10}}},methods:{loadEvents:function(e){var t=this;axios.get("/api/admin/search/events",{params:{keywords:e}}).then((function(e){t.events=e.data}))},assignUrl:function(e){return this.$v.reviewername.$touch,"No Proscenium"==e?this.image_path="/storage/reviews/nopro.png":(this.image_path="/storage/reviews/default.png",this.url="")},addReview:function(){if(this.$v.$touch(),this.$v.$invalid)return!1;axios.post("/reviewevents",this.submitObject).then((function(e){location.reload()})).catch((function(e){}))},showModal:function(e,t){this.selectedModal=e,this.modal=t},deleteReview:function(e){var t=this;axios.delete("/reviewevents/".concat(e.id)).then((function(e){t.modal=null,t.loadReviews()})).catch((function(e){t.serverErrors=e.response.data.errors}))},loadReviews:function(){var e=this;axios.get("/reviewevents/").then((function(t){e.reviews=t.data})).catch((function(t){e.serverErrors=t.response.data.errors}))},updateReview:function(e,t){var i=this,r=new FormData;"name"==t&&r.append("reviewer_name",e.reviewer_name),"url"==t&&r.append("url",e.url),"review"==t&&r.append("review",e.review),"rank"==t&&r.append("rank",e.rank),r.append("_method","PATCH"),axios.post("/reviewevents/".concat(e.id),r).then((function(e){console.log(e.data)})).catch((function(e){i.serverErrors=e.response.data.errors}))},addTag:function(e){this.reviewerList.push(e),this.reviewername=e}},created:function(){this.loadReviews()},validations:{event:{required:r.required},reviewername:{required:r.required},url:{required:r.required,url:r.url},review:{required:r.required,maxLength:Object(r.maxLength)(1200)}}},s=i("KHd+"),o=Object(s.a)(a,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"reviewevent"},[i("div",{},[i("div",{staticClass:"title"},[i("h1",[e._v("Add Reviews to events")]),e._v(" "),i("div",{staticClass:"add"},[i("button",{on:{click:function(t){t.preventDefault(),e.add=!0}}},[i("p",[e._v("+")])])])])]),e._v(" "),e.add?i("div",{staticClass:"new"},[i("div",{staticClass:"content"},[i("div",{staticClass:"event"},[i("label",[e._v("Event")]),e._v(" "),i("multiselect",{class:{active:"event"==e.isActive,error:e.$v.event.$error},attrs:{options:e.events,"open-direction":"bottom",placeholder:"Select the event",label:"name","show-labels":!1,"internal-search":!1,"options-limit":30,"track-by":"name",limit:5,"show-no-results":!1,"allow-empty":!1},on:{click:function(t){e.isActive="event"},blur:function(t){e.isActive=null},open:e.loadEvents,"search-change":e.loadEvents,input:e.$v.event.$touch},scopedSlots:e._u([{key:"singleLabel",fn:function(t){return[i("img",{staticClass:"option__image",attrs:{src:"/storage/"+t.option.thumbImagePath,alt:t.option.name}}),e._v(" "),i("span",{staticClass:"option__desc"},[i("span",{staticClass:"option__title"},[e._v(e._s(t.option.name)+"\n                            ")])])]}}],null,!1,2578371558),model:{value:e.event,callback:function(t){e.event=t},expression:"event"}}),e._v(" "),e.$v.event.$error?i("div",{staticClass:"validation-error"},[e.$v.event.required?e._e():i("p",{staticClass:"error"},[e._v("Please select event")])]):e._e()],1),e._v(" "),i("div",{staticClass:"field"},[i("label",[e._v("Reviewer")]),e._v(" "),i("multiselect",{class:{active:"name"==e.isActive,error:e.$v.reviewername.$error},attrs:{"show-labels":!1,options:e.reviewerList,multiple:!1,"tag-placeholder":"Add this as new tag",taggable:!0,"tag-position":"bottom",placeholder:"Select reviewer or add your own","open-direction":"bottom"},on:{tag:e.addTag,input:function(t){return e.assignUrl(e.reviewername)},click:function(t){e.isActive="name"},blur:function(t){e.isActive=null}},model:{value:e.reviewername,callback:function(t){e.reviewername=t},expression:"reviewername"}}),e._v(" "),e.$v.reviewername.$error?i("div",{staticClass:"validation-error"},[e.$v.reviewername.required?e._e():i("p",{staticClass:"error"},[e._v("Please add reviews name")])]):e._e()],1),e._v(" "),i("div",{staticClass:"field"},[i("label",[e._v("Review URL")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.url,expression:"url"}],class:{active:"url"==e.isActive,error:e.$v.url.$error},attrs:{type:"text",placeholder:"Link to the review"},domProps:{value:e.url},on:{click:function(t){e.isActive="url"},input:[function(t){t.target.composing||(e.url=t.target.value)},e.$v.url.$touch],blur:function(t){e.isActive=null}}}),e._v(" "),e.$v.url.$error?i("div",{staticClass:"validation-error"},[e.$v.url.required?e._e():i("p",{staticClass:"error"},[e._v("Please add url")])]):e._e()]),e._v(" "),i("div",{staticClass:"rank"},[i("label",[e._v("Rank")]),e._v(" "),i("multiselect",{class:{active:"rank"==e.isActive},attrs:{options:e.rankOptions,"show-labels":!1,placeholder:"Leave blank for default Rank of 5 (1 being most important)","open-direction":"bottom","preselect-first":!1},on:{click:function(t){e.isActive="rank"},blur:function(t){e.isActive=null}},model:{value:e.rank,callback:function(t){e.rank=t},expression:"rank"}})],1)]),e._v(" "),i("div",{staticClass:"content"},[i("label",[e._v("Review")]),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.review,expression:"review"}],class:{active:"review"==e.isActive,error:e.$v.review.$error},attrs:{type:"textarea",rows:"6",placeholder:"Review snippet (no longer than 120 characters)"},domProps:{value:e.review},on:{click:function(t){e.isActive="review"},input:[function(t){t.target.composing||(e.review=t.target.value)},e.$v.review.$touch],blur:function(t){e.isActive=null}}}),e._v(" "),e.$v.review.$error?i("div",{staticClass:"validation-error"},[e.$v.review.required?e._e():i("p",{staticClass:"error"},[e._v("Please add review snippet.")]),e._v(" "),e.$v.review.maxLength?e._e():i("p",{staticClass:"error"},[e._v("Please keep it under 1200 letters.")])]):e._e()]),e._v(" "),i("div",{staticClass:"content"},[i("button",{on:{click:function(t){return t.preventDefault(),e.addReview(t)}}},[e._v("Add Review")])])]):e._e(),e._v(" "),i("div",{staticClass:"listing"},[e._m(0),e._v(" "),e._l(e.reviews,(function(t,r){return i("div",{staticClass:"list"},[i("div",{staticClass:"field"},[e._v("\n                "+e._s(t.event.name)+"\n            ")]),e._v(" "),i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.reviewer_name,expression:"item.reviewer_name"}],class:{active:"reviewername"==e.isActive},attrs:{type:"text",placeholder:"Reviewer's name"},domProps:{value:t.reviewer_name},on:{click:function(t){e.isActive="reviewername"},blur:function(i){return e.updateReview(t,"name")},input:function(i){i.target.composing||e.$set(t,"reviewer_name",i.target.value)}}})]),e._v(" "),i("div",{staticClass:"field"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"item.url"}],class:{active:"url"==e.isActive},attrs:{type:"text",placeholder:"Link to the review"},domProps:{value:t.url},on:{click:function(t){e.isActive="url"},blur:function(i){return e.updateReview(t,"url")},input:function(i){i.target.composing||e.$set(t,"url",i.target.value)}}})]),e._v(" "),i("div",{staticClass:"field"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.review,expression:"item.review"}],class:{active:"review"==e.isActive},attrs:{type:"textarea",rows:"6",placeholder:"Review snippet"},domProps:{value:t.review},on:{click:function(t){e.isActive="review"},blur:function(i){return e.updateReview(t,"review")},input:function(i){i.target.composing||e.$set(t,"review",i.target.value)}}})]),e._v(" "),i("div",{staticClass:"field"},[i("multiselect",{class:{active:"rank"==e.isActive},attrs:{options:e.rankOptions,"show-labels":!1,placeholder:"Leave blank for default Rank of 5 (1 being most important)","open-direction":"bottom","preselect-first":!1},on:{input:function(i){return e.updateReview(t,"rank")}},model:{value:t.rank,callback:function(i){e.$set(t,"rank",i)},expression:"item.rank"}})],1),e._v(" "),i("button",{staticClass:"delete-circle",on:{click:function(i){return i.preventDefault(),e.showModal(t,"delete")}}},[i("p",[e._v("X")])])])}))],2),e._v(" "),"delete"==e.modal?i("modal",{on:{close:function(t){e.modal=null}}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"circle del"},[i("p",[e._v("X")])])]),e._v(" "),i("div",{attrs:{slot:"body"},slot:"body"},[i("h3",[e._v("Are you sure?")]),e._v(" "),i("p",[e._v("You are deleting the review "+e._s(e.selectedModal.name)+".")])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn del",on:{click:function(t){return t.preventDefault(),e.deleteReview(e.selectedModal)}}},[e._v("Delete")])])]):e._e()],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Latest Reviews")])])}],!1,null,null,null);t.default=o.exports},"KHd+":function(e,t,i){"use strict";function r(e,t,i,r,n,a,s,o){var l,v="function"==typeof e?e.options:e;if(t&&(v.render=t,v.staticRenderFns=i,v._compiled=!0),r&&(v.functional=!0),a&&(v._scopeId="data-v-"+a),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},v._ssrRegister=l):n&&(l=o?function(){n.call(this,(v.functional?this.parent:this).$root.$options.shadowRoot)}:n),l)if(v.functional){v._injectStyles=l;var c=v.render;v.render=function(e,t){return l.call(t),c(e,t)}}else{var u=v.beforeCreate;v.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:v}}i.d(t,"a",(function(){return r}))}}]);