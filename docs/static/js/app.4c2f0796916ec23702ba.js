webpackJsonp([1],{0:function(t,e,n){"use strict";function i(t){n(311)}var r=n(252),o=n(109),a=i,s=o(r.a,null,!1,a,null,null);e.a=s.exports},1853:function(t,e,n){"use strict";function i(t){n(1854)}var r=n(253),o=n(1875),a=n(109),s=i,l=a(r.a,o.a,!1,s,null,null);e.a=l.exports},1854:function(t,e){},1872:function(t,e,n){"use strict";function i(t){n(1873)}var r=n(255),o=n(1874),a=n(109),s=i,l=a(r.a,o.a,!1,s,null,null);e.a=l.exports},1873:function(t,e){},1874:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"reminder",class:"reminder-"+t.color,attrs:{"no-body":""}},[n("b-card-header",{attrs:{"header-tag":"header"}},[n("b-button",{attrs:{block:""},on:{click:function(e){return t.toggleReminder(t.reminder_index)}}},[t._v(t._s(t.content.title))])],1),t._v(" "),n("b-collapse",{attrs:{id:"collapse-"+t.reminder_index},model:{value:t.content.visible,callback:function(e){t.$set(t.content,"visible",e)},expression:"content.visible"}},[n("b-card-body",{domProps:{innerHTML:t._s(t.content.body)}})],1)],1)},r=[],o={render:i,staticRenderFns:r};e.a=o},1875:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("main",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-2"},[n("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){return t.closeAll()}}},[t._v("Close all")])],1),t._v(" "),n("div",{staticClass:"col-8"},[n("h1",[t._v(t._s(t.store.title))])]),t._v(" "),n("div",{staticClass:"col-2"},[n("b-button",{attrs:{variant:"outline-dark"},on:{click:function(e){return t.openAll()}}},[t._v("Open all")])],1)]),t._v(" "),n("b-card-group",{attrs:{columns:"",id:"elements"}},t._l(t.store.elements,function(e,i){return n("div",[n("reminder",{attrs:{content:e,reminder_index:i},on:{"toggle-reminder":t.toggleReminder}})],1)}),0)],1)])},r=[],o={render:i,staticRenderFns:r};e.a=o},252:function(t,e,n){"use strict";function i(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}),t}function r(){return"va-"+(h++).toString(16)}function o(t){return t.replace(/[<>"&]/g,function(t){return d[t]||t})}var a=n(312),s=n.n(a),l=n(314),c=n.n(l),u={};e.a={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in u||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:r(),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return c()({"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse},this.$options.name,!0)},icon:function(){return this.name?u[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,n,i){var o=r();return e[i]=o,' id="'+o+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,n,i,r){var o=n||r;return o&&e[o]?"#"+e[o]:t}),t},focusable:function(){var t=this.tabindex;return null==t?"false":("string"==typeof t?parseInt(t,10):t)>=0?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(!this.name&&null!==this.name&&0===this.$children.length)return void console.warn('Invalid prop: prop "name" is required.');if(!this.icon){var e=0,n=0;this.$children.forEach(function(i){i.outerScale=t.normalizedScale,e=Math.max(e,i.width),n=Math.max(n,i.height)}),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach(function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2})}}},render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":String(!(this.label||this.title)),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable}},n="vat-"+this.id;if(this.title&&(e.attrs["aria-labelledby"]=n),this.raw){var i=this.raw;this.title&&(i='<title id="'+n+'">'+o(this.title)+"</title>"+i),e.domProps={innerHTML:i}}var r=this.title?[t("title",{attrs:{id:n}},this.title)]:[];return t("svg",e,this.raw?null:r.concat(this.$slots.default||[].concat(s()(this.icon.paths.map(function(e,n){return t("path",{attrs:e,key:"path-"+n})})),s()(this.icon.polygons.map(function(e,n){return t("polygon",{attrs:e,key:"polygon-"+n})})))))},register:function(t){for(var e in t){var n=t[e],r=n.paths,o=void 0===r?[]:r,a=n.d,s=n.polygons,l=void 0===s?[]:s,c=n.points;a&&o.push({d:a}),c&&l.push({points:c}),u[e]=i({},n,{paths:o,polygons:l})}},icons:u};var h=870711,d={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"}},253:function(t,e,n){"use strict";var i=n(1855),r=n.n(i),o=n(1872);e.a={name:"my-little-reminder",components:{Reminder:o.a},data:function(){return{store:{}}},methods:{toggleReminder:function(t){this.store.elements[t].visible=!this.store.elements[t].visible},changeAll:function(t){this.store.elements.forEach(function(e,n){e.visible=t})},openAll:function(){this.changeAll(!0)},closeAll:function(){this.changeAll(!1)}},mounted:function(){var t={},e=new XMLHttpRequest;e.open("GET","./static/store.json",!1),e.onreadystatechange=function(){if(4===e.readyState&&(200===e.status||0===e.status)){var n=e.responseText;t=JSON.parse(n)}},e.send(null),"object"===r()(t.elements)&&void 0!==t.elements[0]||(console.log("Store type is "+r()(t.elements)),alert("Error: cannot retrieve store elements"));var n=t.config.default_visible;t.elements.forEach(function(t,e){t.visible=n}),this.store=t}}},255:function(t,e,n){"use strict";e.a={name:"reminder",props:["content","reminder_index"],data:function(){return{color:"none"}},methods:{toggleReminder:function(t){this.$emit("toggle-reminder",t)}},mounted:function(){var t=["blue","red","yellow","green","pink","orange","lightblue","darkblue","violet","brown","grey","dark"];this.color=t[Math.floor(Math.random()*t.length)]}}},256:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(62),r=n(259),o=(n.n(r),n(261)),a=(n.n(o),n(262)),s=n(0),l=(n(318),n(1853));i.default.config.productionTip=!1,i.default.use(a.a),i.default.component("icon",s.a),new i.default({el:"#app",template:"<App/>",components:{App:l.a}})},259:function(t,e){},261:function(t,e){},311:function(t,e){}},[256]);
//# sourceMappingURL=app.4c2f0796916ec23702ba.js.map