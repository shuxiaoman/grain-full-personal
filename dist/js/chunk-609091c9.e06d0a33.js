(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-609091c9"],{"08ad":function(t,i,n){"use strict";var e=n("685f"),a=n.n(e);a.a},"685f":function(t,i,n){},"98a8":function(t,i,n){},dd88:function(t,i,n){"use strict";var e=n("98a8"),a=n.n(e);a.a},ff38:function(t,i,n){"use strict";n.r(i);var e=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"container"},[n("div",{class:["container-content",t.isMobile?"":"vm-mobile"]},[n("transition",{attrs:{name:t.transitionName}},[n("router-view")],1)],1)])},a=[],r={name:"App",data:function(){return{windowHeight:window.innerHeight,windowWidth:window.innerWidth,transitionName:""}},computed:{isMobile:function(){return this.windowWidth<441}},watch:{$route:function(t,i){"left"===this.$router.slid?this.transitionName="slide-right":"right"===this.$router.slid?this.transitionName="slide-left":this.transitionName="",this.$router.slid=""}}},s=r,o=(n("dd88"),n("08ad"),n("2877")),c=Object(o["a"])(s,e,a,!1,null,"3a68311e",null);i["default"]=c.exports}}]);