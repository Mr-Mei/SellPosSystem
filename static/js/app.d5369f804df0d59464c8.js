webpackJsonp([1],{B3n5:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"left-nav"},[o("ul",[o("li",[o("i",{staticClass:"iconfont icon-goumai"}),t._v(" "),o("div",[t._v("收银")])]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-jinrudianpu"}),t._v(" "),o("div",[t._v("店铺")])]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-hanbao"}),t._v(" "),o("div",[t._v("商品")])]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-31huiyuanqia"}),t._v(" "),o("div",[t._v("会员")])]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-zuanshi"}),t._v(" "),o("div",[t._v("统计")])]),t._v(" "),o("li",[o("i",{staticClass:"iconfont icon-gongnengjianyi"}),t._v(" "),o("div",[t._v("设置")])])])])}]};var n={name:"App",components:{leftNav:o("VU/8")({name:"leftNav",data:function(){return{}}},a,!1,function(t){o("n5YB")},null,null).exports},data:function(){return{}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("leftNav"),this._v(" "),e("div",{staticClass:"main"},[e("router-view")],1)],1)},staticRenderFns:[]};var l=o("VU/8")(n,i,!1,function(t){o("B3n5")},null,null).exports,c=o("/ocq"),r=o("mtWM"),d=o.n(r),u={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[],totalCount:0,totalPrice:0,multipleSelection:[]}},created:function(){var t=this,e="https://www.easy-mock.com/mock/5c07a781d292dd2dc4f9caa8/mockapi";d.a.get(e+"/oftenGoods").then(function(e){console.log(e),t.oftenGoods=e.data}).catch(function(t){console.log(t),alert("网络错误，不能访问！")}),d.a.get(e+"/typeGoods").then(function(e){console.log(e),t.type0Goods=e.data[0],t.type1Goods=e.data[1],t.type2Goods=e.data[2],t.type3Goods=e.data[3]}).catch(function(t){console.log(t),alert("网络错误，不能访问")})},mounted:function(){var t=document.body.clientHeight;document.getElementById("order-list").style.height=t+"px"},methods:{addOrderList:function(t){for(var e=!1,o=0;o<this.tableData.length;o++)this.tableData[o].goodsId===t.goodsId&&(e=!0);if(e){this.tableData.filter(function(e){return e.goodsId===t.goodsId})[0].count++}else{var s={goodsId:t.goodsId,goodsName:t.goodsName,price:t.price,count:1};this.tableData.push(s)}this.getAllCountPrice()},delSingleGoods:function(t){this.tableData=this.tableData.filter(function(e){return e.goodsId!==t.goodsId}),this.getAllCountPrice()},delAllGoods:function(){this.tableData=[],this.totalCount=0,this.totalPrice=0},getAllCountPrice:function(){var t=this;this.totalCount=0,this.totalPrice=0,this.tableData.forEach(function(e){t.totalCount+=e.count,t.totalPrice+=e.count*e.price})},checkout:function(){0!==this.totalCount?(this.tableData=[],this.totalCount=0,this.totalPrice=0,this.$message({message:"结账成功，感谢您为店里尽了一份力！",type:"success"})):this.$message.error("您好！不能空结账哦")},toggleSelection:function(t){var e=this;t?t.forEach(function(t){e.$refs.multipleTable.toggleRowSelection(t)}):this.$refs.multipleTable.clearSelection()},handleSelectionChange:function(t){this.multipleSelection=t,console.log(this.multipleSelection)}}},v={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"pos"},[o("div",[o("el-row",[o("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"点餐"}},[o("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:"","show-summary":""},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsName",label:"商品名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"count",label:"数量"}}),t._v(" "),o("el-table-column",{attrs:{prop:"price",label:"金额"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",width:"100%",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.delSingleGoods(e.row)}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){return t.addOrderList(e.row)}}},[t._v("增加")])]}}])})],1),t._v(" "),o("div",{staticClass:"total-div"},[o("span",{staticClass:"num-sum"},[o("small",[t._v("数量：")]),t._v(t._s(t.totalCount)+"\n                ")]),t._v(" "),o("span",[o("small",[t._v("总额：")]),t._v(t._s(t.totalPrice)+" 元\n                ")])]),t._v(" "),o("div",{staticClass:"btn-div"},[o("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),o("el-button",{attrs:{type:"danger"},on:{click:function(e){return t.delAllGoods()}}},[t._v("删除")]),t._v(" "),o("el-button",{attrs:{type:"success"},on:{click:function(e){return t.checkout()}}},[t._v("结账")]),t._v(" "),o("el-button",{attrs:{type:"info"},on:{click:function(e){return t.toggleSelection()}}},[t._v("取消选择")])],1)],1),t._v(" "),o("el-tab-pane",{attrs:{label:"挂单"}},[t._v("挂单")]),t._v(" "),o("el-tab-pane",{attrs:{label:"外卖"}},[t._v("外卖")])],1)],1),t._v(" "),o("el-col",{attrs:{span:17}},[o("div",{staticClass:"often-goods"},[o("div",{staticClass:"title"},[t._v("常用商品")]),t._v(" "),o("div",{staticClass:"often-goods-list"},[o("ul",t._l(t.oftenGoods,function(e){return o("li",{key:e},[o("span",[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"o-price"},[t._v("￥"+t._s(e.price)+"元")])])}),0)]),t._v(" "),o("div",{staticClass:"goods-type"},[o("el-tabs",[o("el-tab-pane",{attrs:{label:"汉堡"}},[o("ul",{staticClass:"goods-type-list"},t._l(t.type0Goods,function(e){return o("li",{key:e,on:{click:function(o){return t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%",height:"80px",alt:"商品图片"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])}),0)]),t._v(" "),o("el-tab-pane",{attrs:{label:"小吃"}},[o("ul",{staticClass:"goods-type-list"},t._l(t.type1Goods,function(e){return o("li",{key:e,on:{click:function(o){return t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%",height:"80px",alt:"商品图片"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])}),0)]),t._v(" "),o("el-tab-pane",{attrs:{label:"饮料"}},[o("ul",{staticClass:"goods-type-list"},t._l(t.type2Goods,function(e){return o("li",{key:e,on:{click:function(o){return t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%",height:"80px",alt:"商品图片"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])}),0)]),t._v(" "),o("el-tab-pane",{attrs:{label:"套餐"}},[o("ul",{staticClass:"goods-type-list"},t._l(t.type3Goods,function(e){return o("li",{key:e,on:{click:function(o){return t.addOrderList(e)}}},[o("span",{staticClass:"foodImg"},[o("img",{attrs:{src:e.goodsImg,width:"100%",height:"80px",alt:"商品图片"}})]),t._v(" "),o("span",{staticClass:"foodName"},[t._v(t._s(e.goodsName))]),t._v(" "),o("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(e.price)+"元")])])}),0)])],1)],1)])])],1)],1)])},staticRenderFns:[]};var p=o("VU/8")(u,v,!1,function(t){o("cdTF")},"data-v-28f637ad",null).exports;s.default.use(c.a);var f=new c.a({routes:[{path:"/",name:"Pos",component:p}]}),_=o("zL8q"),g=o.n(_);o("tvR6");s.default.config.productionTip=!1,s.default.use(g.a),new s.default({el:"#app",router:f,components:{App:l},template:"<App/>"})},cdTF:function(t,e){},n5YB:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d5369f804df0d59464c8.js.map