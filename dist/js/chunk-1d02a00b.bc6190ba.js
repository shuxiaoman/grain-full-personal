(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d02a00b"],{"1a7f":function(t,e,i){"use strict";var n=i("350c"),a=i.n(n);a.a},"223a":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{class:["default",t.type,t.click?"click":""],style:t.comStyle,on:{click:function(e){return t.$emit("click")}}},[t._t("default")],2)},a=[],c=(i("c975"),{name:"GrainFullButton",props:{type:{type:String,default:"default",validator:function(t){return-1!==["default","unit","circular"].indexOf(t)}},width:{type:String,default:"88px"},height:{type:String,default:"44px"},click:{type:Boolean,default:!1}},data:function(){return{configStyle:{default:{width:this.width,height:this.height},unit:{width:this.width,height:this.width,"border-radius":"25%"},circular:{width:this.width,height:this.width,"border-radius":"50%"}}}},computed:{comStyle:function(){return this.configStyle[this.type]}}}),s=c,l=(i("e5e4"),i("2877")),o=Object(l["a"])(s,n,a,!1,null,"e4d2c9c8",null);e["a"]=o.exports},2257:function(t,e,i){},2396:function(t,e,i){"use strict";var n=i("e737"),a=i.n(n);a.a},"2a95":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"switch"},[t._t("icon",[i("grain-full-icon",{attrs:{name:t.iconName,size:50}})]),t._t("p",[i("span",{staticClass:"p"},[t._v(" "+t._s(t.name)+" ")])]),i("div",[t._t("item3",[i("grain-full-switch",{model:{value:t.switchModel,callback:function(e){t.switchModel=e},expression:"switchModel"}})])],2),t._t("info")],2)},a=[],c=i("8919"),s=i("73d1"),l={name:"SwitchConsole",components:{GrainFullSwitch:s["a"],GrainFullIcon:c["a"]},props:{value:{type:Boolean,default:!1},iconName:{type:String},name:{type:String}},watch:{value:{handler:function(t){this.switchModel=t},immediate:!0},switchModel:{handler:function(t){this.$emit("input",t)},immediate:!0}},data:function(){return{switchModel:!1}},computed:{clickClass:function(){return{"switch-click":!0,on:this.value}},nodeClass:function(){return{"switch-click-node":!0,on:this.value}}}},o=l,r=(i("2396"),i("2877")),u=Object(r["a"])(o,n,a,!1,null,"22208544",null);e["a"]=u.exports},"350c":function(t,e,i){},"379a":function(t,e,i){"use strict";var n=i("70e3"),a=i.n(n);a.a},"580d":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"slider",style:t.sliderStyle},[i("div",{ref:"progress",staticClass:"slider-progress",style:Object.assign({},{width:Math.round(t.value/t.range*100)+"%",transition:t.click?"width 0s":""},t.progressStyle)},[i("div",{ref:"button",staticClass:"slider-progress-button",on:{touchstart:function(e){return e.preventDefault(),t.touchDown(e)},mousedown:function(e){return e.preventDefault(),t.mouseDown(e)}}},[t._t("button",[i("div",{staticClass:"slider-progress-button-default p"},[t._v(" "+t._s(t.showButtonInfo?t.value:"")+" ")])])],2)])])},a=[],c=(i("a9e3"),{name:"GrainFullSlider",props:{value:{type:Number,default:50},max:{type:Number,default:100},min:{type:Number,default:0},sliderStyle:{type:Object},progressStyle:{type:Object},showButtonInfo:{type:Boolean,default:!0}},data:function(){return{click:!1,clickX:0,clickWidth:0,x:0}},computed:{range:function(){return this.max-this.min}},methods:{touchDown:function(t){this.click=!0,this.clickX=t.changedTouches[0].clientX,this.clickWidth=this.$refs.progress.clientWidth,document.addEventListener("touchmove",this.fnMove),document.addEventListener("touchend",this.fnUp)},mouseDown:function(t){this.click=!0,this.clickX=t.clientX,this.clickWidth=this.$refs.progress.clientWidth,document.addEventListener("mousemove",this.fnMove),document.addEventListener("mouseup",this.fnUp)},fnMove:function(t){if(this.click){var e=((t.clientX+1||t.changedTouches[0].clientX+1)-this.clickX+this.clickWidth)/this.$refs.slider.clientWidth;this.$emit("input",Math.round(this.range*(e>1?1:e<0?0:e)))}},fnUp:function(){this.click=!1,document.removeEventListener("mousemove",this.fnMove),document.removeEventListener("mouseup",this.fnUp),document.removeEventListener("touchmove",this.fnMove),document.removeEventListener("touchend",this.fnUp)}}}),s=c,l=(i("1a7f"),i("2877")),o=Object(l["a"])(s,n,a,!1,null,"33302fc7",null);e["a"]=o.exports},"70e3":function(t,e,i){},c445:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","flex-direction":"column",height:"100%"}},[i("div",{staticClass:"head"},[i("div",{staticClass:"head-back",on:{click:t.back}},[i("grain-full-icon",{attrs:{name:"#icon-arrow-left"}})],1),i("p",{staticClass:"p"},[t._v(t._s(t.$options.name))])]),i("div",{staticStyle:{flex:"1"}},[i("div",{staticClass:"panels"},t._l(t.panelItems,(function(e,n){return i("switch-console",{key:n,staticClass:"panels-item",attrs:{name:e.name,"icon-name":e.iconName},scopedSlots:t._u([{key:"p",fn:function(){return[i("span",{staticClass:"p",staticStyle:{"font-weight":"600"}},[t._v(" "+t._s(e.name)+" ")])]},proxy:!0},{key:"icon",fn:function(){return[i("div")]},proxy:!0},{key:"item3",fn:function(){return[i("div")]},proxy:!0},{key:"info",fn:function(){return[i("div")]},proxy:!0}],null,!0)})})),1),i("div",{staticStyle:{display:"flex","justify-content":"space-around","align-items":"center"}},[i("div",[i("grain-full-circle",{attrs:{size:"130px",percent:t.subWoofer,"dotted-line-back-color":"#cbcfd9","dotted-line-active-color":"#878a95","active-light-color":"#afb5c4","active-dark-color":"#afb6c5","dotted-line-divide-num":"12","dotted-line-type":"line"}},[i("p",[t._v("+ "+t._s(t.subWoofer))])]),i("p",{staticClass:"p",staticStyle:{"font-weight":"600","margin-top":"5px","font-size":"12px"}},[t._v(" SubWoofer ")])],1),i("div",[i("grain-full-circle",{attrs:{size:"130px",percent:t.volume,"dotted-line-back-color":"#cbcfd9","dotted-line-active-color":"#878a95","active-light-color":"#afb5c4","active-dark-color":"#afb6c5","dotted-line-divide-num":"12","dotted-line-type":"line"}},[i("p",[t._v(t._s(t.volume))])]),i("p",{staticClass:"p",staticStyle:{"font-weight":"600","margin-top":"5px","font-size":"12px"}},[t._v(" Volume ")])],1)]),i("p",{staticClass:"p",staticStyle:{"font-weight":"600","font-size":"16px"}},[t._v("第一次 - 光良")]),i("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[i("p",{staticClass:"p",staticStyle:{"font-size":"12px",margin:"10px 5px"}},[t._v("2:38")]),i("div",{staticStyle:{width:"70%",margin:"0 10px"}},[i("grain-full-slider",{attrs:{"show-button-info":!1},model:{value:t.sonProgress,callback:function(e){t.sonProgress=e},expression:"sonProgress"}})],1),i("p",{staticClass:"p",staticStyle:{"font-size":"12px",margin:"10px 5px"}},[t._v("4:18")])]),i("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[i("grain-full-button",{staticStyle:{margin:"20px 15px"},attrs:{type:"circular",width:"30px",height:"30px"}},[i("grain-full-icon",{attrs:{name:"#icon-cc-peach"}})],1),i("grain-full-button",{staticStyle:{margin:"20px 10px"},attrs:{type:"circular",width:"30px",height:"30px"}},[i("grain-full-icon",{attrs:{name:"#icon-Playerfastforward-left-copy"}})],1),i("grain-full-button",{staticStyle:{margin:"20px 10px"},attrs:{type:"circular",width:"50px",height:"50px"}},[i("grain-full-icon",{attrs:{name:"#icon-Playerpause"}})],1),i("grain-full-button",{staticStyle:{margin:"20px 10px"},attrs:{type:"circular",width:"30px",height:"30px"}},[i("grain-full-icon",{attrs:{name:"#icon-Playerfastforward"}})],1),i("grain-full-button",{staticStyle:{margin:"20px 15px"},attrs:{type:"circular",width:"30px",height:"30px"}},[i("grain-full-icon",{attrs:{name:"#icon-danquxunhuan"}})],1)],1)])])},a=[],c=i("8919"),s=i("2a95"),l=i("62d0"),o=i("580d"),r=i("223a"),u={name:"SoundBox",components:{GrainFullButton:r["a"],GrainFullSlider:o["a"],GrainFullCircle:l["a"],SwitchConsole:s["a"],GrainFullIcon:c["a"]},data:function(){return{subWoofer:32,volume:78,panelItems:[{name:"Classics"},{name:"Pop"},{name:"Piano"},{name:"Blues"},{name:"Ballad"},{name:"Rock"}],sonProgress:76}},methods:{back:function(){this.$router.back()}}},d=u,f=(i("379a"),i("2877")),p=Object(f["a"])(d,n,a,!1,null,"81f07282",null);e["default"]=p.exports},e5e4:function(t,e,i){"use strict";var n=i("2257"),a=i.n(n);a.a},e737:function(t,e,i){}}]);