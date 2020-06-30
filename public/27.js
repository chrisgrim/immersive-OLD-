(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{GbXj:function(e,t,i){"use strict";var a={props:{loading:{type:Boolean,default:!0}},data:function(){return{styles:{width:this.width+"px",height:this.height+"px"}}},name:"CubeSpinner"},r=i("KHd+"),o=Object(r.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return this.loading?t("div",{staticClass:"spinner"},[this._m(0),this._v(" "),t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1"}},[t("defs",[t("filter",{attrs:{id:"goo"}},[t("feGaussianBlur",{attrs:{in:"SourceGraphic",stdDeviation:"10",result:"blur"}}),this._v(" "),t("feColorMatrix",{attrs:{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"}})],1)])])]):this._e()}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"area"},[t("div",{staticClass:"dot dot-1"}),this._v(" "),t("div",{staticClass:"dot dot-2"}),this._v(" "),t("div",{staticClass:"dot dot-3"})])}],!1,null,null,null);t.a=o.exports},ciAJ:function(e,t,i){"use strict";t.a={methods:{checkVuelidate:function(){return this.$v.$touch(),!this.$v.$invalid&&(this.disabled=!0),this.$v.$invalid},onErrors:function(e){e&&(this.serverErrors=e.response.data.errors),this.disabled=!1},onBackInitial:function(){return window.location.href="/create-event/edit/"},onBack:function(e){return window.location.href="/create-event/".concat(this.event.slug,"/").concat(e)},onFetch:function(e){return"/create-event/".concat(this.event.slug,"/").concat(e,"/fetch?timestamp=").concat((new Date).getTime())},onForward:function(e){return window.location.href="/create-event/".concat(this.event.slug,"/").concat(e)},onRegistered:function(){return window.location.href="/email/verify"},onFinishOrganizer:function(e){return window.location.href=e}}}},jOyy:function(e,t,i){"use strict";i.r(t);var a=i("ta7f"),r=i("GbXj"),o=i("LvDl"),n=i.n(o),s=i("ciAJ"),l={components:{CubeSpinner:r.a},mixins:[s.a],computed:{endpoint:function(){return"/create-event/".concat(this.event.slug,"/advisories")}},data:function(){return{categories:"",nameActive:!1,name:"",description:"",imageFile:"",isModalVisible:!1,isEditModalVisible:!1,modalDelete:"",serverErrors:[],isLoading:!1,remote:!1}},methods:{submitNewCategory:function(){var e=this;if(this.$v.$touch(),this.$v.$invalid)return!1;this.isLoading=!0;var t=new FormData;t.append("image",this.imageFile.file),t.append("name",this.name),t.append("description",this.description),t.append("remote",this.remote?1:0),axios.post("/categories",t).then((function(e){location.reload()})).catch((function(t){e.serverErrors=t.response.data.errors,e.isLoading=!1,e.isModalVisible=!0}))},deleteCategory:function(e){var t=this;axios.delete("/categories/".concat(e.slug)).then((function(e){t.isEditModalVisible=!1,t.loadCategories()})).catch((function(e){t.serverErrors=e.response.data.errors}))},clearInfo:function(){this.$v.name.$touch,this.serverErrors=[]},loadCategories:function(){var e=this;axios.get("/categories").then((function(t){e.categories=t.data})).catch((function(t){e.serverErrors=t.response.data.errors}))},onImageUpload:function(e){if(this.imageFile=e,this.$v.imageFile.$touch(),this.$v.imageFile.$invalid)return!1},onImageEdit:function(e,t){if(e.file.size>20971520)return alert("Image Filesize Too Big");if(!["image/jpeg","image/png","image/gif"].includes(e.file.type))return alert("Image needs to be jpeg, pgn or gif");if(e.width<800||e.height<800)return alert("Image Proportions Too Small");this.isLoading=!0;var i=new FormData;i.append("image",e.file),i.append("_method","PATCH"),axios.post("/categories/".concat(t.slug),i).then((function(e){window.location.href="/categories/create"})).catch((function(e){console.log(e.response.data.errors)}))},showModal:function(e){this.modalDelete=e,this.isEditModalVisible=!0},onEdit:function(e){var t=this;axios.patch("/categories/".concat(e.slug),e).then((function(e){t.loadCategories()})).catch((function(e){t.onErrors(e)}))},hasServerError:function(e){return e&&n.a.has(this,"serverErrors."+e)&&!n.a.isEmpty(this.serverErrors[e])}},created:function(){this.loadCategories()},validations:{name:{required:a.required,serverFailed:function(){return!this.hasServerError("name")}},description:{required:a.required},imageFile:{required:a.required,fileSize:function(){return!this.imageFile||this.imageFile.file.size<20971520},fileType:function(){return!this.imageFile||["image/jpeg","image/png","image/gif"].includes(this.imageFile.file.type)},imageRatio:function(){return!this.imageFile||this.imageFile.width>800&&this.imageFile.height>800}}}},c=i("KHd+"),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"categories"},[i("div",{},[i("div",{staticClass:"title"},[i("h1",[e._v("Categories")]),e._v(" "),i("div",{staticClass:"add"},[i("button",{on:{click:function(t){t.preventDefault(),e.isModalVisible=!0}}},[i("p",[e._v("+")])])])])]),e._v(" "),i("tabs",[i("tab",{staticClass:"tab-events",attrs:{title:"Location Based Events",active:!0}},e._l(e.categories.location,(function(t,a){return i("div",{staticClass:"list"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],attrs:{type:"text",placeholder:"Category Name"},domProps:{value:t.name},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"name",i.target.value)}}}),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"category.description"}],attrs:{type:"text",placeholder:"Category Name"},domProps:{value:t.description},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"description",i.target.value)}}}),e._v(" "),i("div",{staticClass:"box",style:{backgroundImage:"url('/storage/"+t.thumbImagePath+"')"}},[i("label",[i("image-upload",{on:{loaded:function(i){return e.onImageEdit(i,t)}}}),e._v(" "),i("CubeSpinner",{attrs:{loading:e.isLoading}})],1)]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.credit,expression:"category.credit"}],attrs:{type:"text",placeholder:"image credit"},domProps:{value:t.credit},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"credit",i.target.value)}}}),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rank,expression:"category.rank"}],attrs:{type:"text",placeholder:"Category Rank"},domProps:{value:t.rank},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"rank",i.target.value)}}})]),e._v(" "),i("button",{staticClass:"delete-circle",on:{click:function(i){return i.preventDefault(),e.showModal(t)}}},[i("p",[e._v("X")])])])})),0),e._v(" "),i("tab",{staticClass:"tab-events",attrs:{title:"Online Events"}},e._l(e.categories.remote,(function(t,a){return i("div",{staticClass:"list"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],attrs:{type:"text",placeholder:"Category Name"},domProps:{value:t.name},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"name",i.target.value)}}}),e._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"category.description"}],attrs:{type:"text",placeholder:"Category Name"},domProps:{value:t.description},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"description",i.target.value)}}}),e._v(" "),i("div",{staticClass:"box",style:{backgroundImage:"url('/storage/"+t.thumbImagePath+"')"}},[i("label",[i("image-upload",{on:{loaded:function(i){return e.onImageEdit(i,t)}}}),e._v(" "),i("CubeSpinner",{attrs:{loading:e.isLoading}})],1)]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.credit,expression:"category.credit"}],attrs:{type:"text",placeholder:"image credit"},domProps:{value:t.credit},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"credit",i.target.value)}}}),e._v(" "),i("div",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.rank,expression:"category.rank"}],attrs:{type:"text",placeholder:"Category Rank"},domProps:{value:t.rank},on:{blur:function(i){return e.onEdit(t)},input:function(i){i.target.composing||e.$set(t,"rank",i.target.value)}}})]),e._v(" "),i("button",{staticClass:"delete-circle",on:{click:function(i){return i.preventDefault(),e.showModal(t)}}},[i("p",[e._v("X")])])])})),0)],1),e._v(" "),e.isEditModalVisible?i("modal",{on:{close:function(t){e.isEditModalVisible=!1}}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div",{staticClass:"circle del"},[i("p",[e._v("X")])])]),e._v(" "),i("div",{attrs:{slot:"body"},slot:"body"},[i("h3",[e._v("Are you sure?")]),e._v(" "),i("p",[e._v("You are deleting your "+e._s(e.modalDelete.name)+" category.")])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn del",on:{click:function(t){return t.preventDefault(),e.deleteCategory(e.modalDelete)}}},[e._v("Delete")])])]):e._e(),e._v(" "),i("div",{staticClass:"pin"},[e.isModalVisible?i("modal",{on:{close:function(t){e.isModalVisible=!1}}},[i("div",{attrs:{slot:"header"},slot:"header"},[i("div")]),e._v(" "),i("div",{staticClass:"body",attrs:{slot:"body"},slot:"body"},[i("label",{style:{backgroundImage:"url('"+e.imageFile.src+"')"}},[e.imageFile.src?e._e():i("div",{staticClass:"box"},[i("div",{staticClass:"in"},[i("div",[i("svg",{staticClass:"b",attrs:{height:"32",width:"32",viewBox:"0 0 24 24","aria-label":"Add an image or video",role:"img"}},[i("path",{attrs:{d:"M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z"}})])]),e._v(" "),i("div",[i("p",[e._v("Click here to upload image")]),e._v(" "),i("p",[e._v("Must be at least 720x960 and under 2mb")])])])]),e._v(" "),i("image-upload",{on:{loaded:e.onImageUpload}}),e._v(" "),i("CubeSpinner",{attrs:{loading:e.isLoading}}),e._v(" "),e.$v.imageFile.$error?i("div",{staticClass:"validation-error"},[e.$v.imageFile.required?e._e():i("p",{staticClass:"error"},[e._v("Please Add Image ")]),e._v(" "),e.$v.imageFile.fileSize?e._e():i("p",{staticClass:"error"},[e._v("Image needs to be less than 2mb ")]),e._v(" "),e.$v.imageFile.fileType?e._e():i("p",{staticClass:"error"},[e._v("Image should be jpg, gif, or png")]),e._v(" "),e.$v.imageFile.imageRatio?e._e():i("p",{staticClass:"error"},[e._v("Needs to be at least 720 x 960")])]):e._e()],1),e._v(" "),i("div",{staticClass:"text"},[i("div",{staticClass:"name"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],class:{active:e.nameActive},attrs:{type:"text",placeholder:"Category Name"},domProps:{value:e.name},on:{click:function(t){e.nameActive=!0},blur:function(t){e.nameActive=!1},input:[function(t){t.target.composing||(e.name=t.target.value)},e.clearInfo]}}),e._v(" "),e.$v.name.$error?i("div",{staticClass:"validation-error"},[e.$v.name.required?e._e():i("p",{staticClass:"error"},[e._v("Please Add Category Name ")]),e._v(" "),e.$v.name.serverFailed?e._e():i("p",{staticClass:"error"},[e._v("This category has already been created")])]):e._e()]),e._v(" "),i("div",{staticClass:"desc"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:e.description,expression:"description"}],class:{active:e.nameActive},attrs:{type:"text",rows:"6",placeholder:"Category Description"},domProps:{value:e.description},on:{click:function(t){e.nameActive=!0},blur:function(t){e.nameActive=!1},input:[function(t){t.target.composing||(e.description=t.target.value)},e.$v.description.$touch]}}),e._v(" "),e.$v.description.$error?i("div",{staticClass:"validation-error"},[e.$v.description.required?e._e():i("p",{staticClass:"error"},[e._v("Please Add Category Description ")])]):e._e()]),e._v(" "),i("div",{staticClass:"field"},[i("div",{staticStyle:{"text-align":"left"}},[e._v("Is this a remote category?")]),e._v(" "),i("div",{attrs:{id:"cover"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.remote,expression:"remote"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.remote)?e._i(e.remote,null)>-1:e.remote},on:{change:function(t){var i=e.remote,a=t.target,r=!!a.checked;if(Array.isArray(i)){var o=e._i(i,null);a.checked?o<0&&(e.remote=i.concat([null])):o>-1&&(e.remote=i.slice(0,o).concat(i.slice(o+1)))}else e.remote=r}}}),e._v(" "),i("div",{attrs:{id:"bar"}}),e._v(" "),i("div",{attrs:{id:"knob"}},[e.remote?i("p",[e._v("Yes")]):i("p",[e._v("No")])])])])])]),e._v(" "),i("div",{attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn sub",on:{click:function(t){return t.preventDefault(),e.submitNewCategory()}}},[e._v("Submit")])])]):e._e()],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);