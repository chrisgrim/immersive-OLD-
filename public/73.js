(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{w7hX:function(t,e,i){"use strict";i.r(e);i("LvDl");var s=i("jl8+"),n=i.n(s),a=(i("cPJV"),{components:{Multiselect:n.a},props:{events:{type:Array},user:{type:String}},data:function(){return{value:"",list:[],price:"",eventName:"",location:[],imageWidth:""}},methods:{loc:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.location=e.coords,console.log(e.coords)}),(function(t){console.log(t)}))},handleResize:function(){window.innerWidth<768&&(this.imageWidth=window.innerWidth/1.4)}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()}}),r=i("KHd+"),c=Object(r.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"events"},[t._m(0),t._v(" "),i("section",{},[i("div",{staticClass:"event-index-eventlist grid"},t._l(t.events,(function(e,s){return i("div",{staticClass:"eventlist__element"},[i("a",{staticClass:"url",attrs:{href:"/finish/events/"+e.slug}},[i("div",{staticClass:"card-image",style:"width:"+t.imageWidth+"px"},[i("picture",[i("source",{attrs:{type:"image/webp",srcset:"/storage/"+e.thumbImagePath}}),t._v(" "),i("img",{attrs:{src:"/storage/"+e.thumbImagePath.slice(0,-4)+"jpg",alt:e.name+" Immersive Event"}})])]),t._v(" "),i("div",{staticClass:"card-title"},[i("h3",[t._v(t._s(e.name))])]),t._v(" "),i("div",{staticClass:"card-price"},[i("h4",[t._v(t._s(e.price_range))])])])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"create-title"},[e("h2",[this._v("Event Approval")]),this._v(" "),e("p",[this._v("These are the events that need approval")])])}],!1,null,null,null);e.default=c.exports}}]);