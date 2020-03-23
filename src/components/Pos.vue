<template>
  <div class="pos">
    <!-- 使用element-ui的组件标签 24比例 -->
      <div>
        <el-row>
          <!-- 订单展示 -->
          <el-col :span='7' class="pos-order" id="order-list">
            <!-- element中tabs标签页效果 -->
            <el-tabs>
              <el-tab-pane label="点餐">
                <el-table 
                :data="tableData" border stripe show-summary ref="multipleTable"
                style="width:100%" @selection-change="handleSelectionChange">
                  <el-table-column type="selection" width="55"></el-table-column>
                  <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                  <el-table-column prop="count" label="数量"></el-table-column>
                  <el-table-column prop="price" label="金额"></el-table-column>
                  <el-table-column label="操作" width="100%" fixed="right">
                    <template slot-scope="scope">
                      <el-button type="text" size="small"
                      @click="delSingleGoods(scope.row)">删除</el-button>
                      <el-button type="text" size="small"
                      @click="addOrderList(scope.row)">增加</el-button>
                    </template>
                  </el-table-column>
                </el-table>
                <div class="total-div">
                  <span class="num-sum">
                    <small>数量：</small>{{totalCount}}
                  </span>
                  <span>
                    <small>总额：</small>{{totalPrice}}&nbsp;元
                  </span>
                </div>
                <div class="btn-div">
                  <el-button type="warning">挂单</el-button>
                  <el-button type="danger" @click="delAllGoods()">删除</el-button>
                  <el-button type="success" @click="checkout()">结账</el-button>
                  <el-button type="info" @click="toggleSelection()">取消选择</el-button>
                </div>
              </el-tab-pane>
              <el-tab-pane label="挂单">挂单</el-tab-pane>
              <el-tab-pane label="外卖">外卖</el-tab-pane>
            </el-tabs>
          </el-col>
          <!-- 商品展示 -->
          <el-col :span='17'>
            <div class="often-goods">
              <div class="title">常用商品</div>
              <div class="often-goods-list">
                <ul>
                  <li v-for="good in oftenGoods" :key="good">
                    <span>{{good.goodsName}}</span>
                    <span class="o-price">￥{{good.price}}元</span>
                  </li>
                </ul>
              </div>
              <div class="goods-type">
                <el-tabs>
                  <el-tab-pane label="汉堡">
                    <ul class="goods-type-list">
                      <li v-for="good in type0Goods" :key="good" @click="addOrderList(good)">
                        <span class="foodImg">
                          <img :src="good.goodsImg" width="100%" height="80px" alt="商品图片">
                        </span>
                        <span class="foodName">{{good.goodsName}}</span>
                        <span class="foodPrice">￥{{good.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="小吃">
                    <ul class="goods-type-list">
                      <li v-for="good in type1Goods" :key="good" @click="addOrderList(good)">
                        <span class="foodImg">
                          <img :src="good.goodsImg" width="100%" height="80px" alt="商品图片">
                        </span>
                        <span class="foodName">{{good.goodsName}}</span>
                        <span class="foodPrice">￥{{good.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="饮料">
                    <ul class="goods-type-list">
                      <li v-for="good in type2Goods" :key="good" @click="addOrderList(good)">
                        <span class="foodImg">
                          <img :src="good.goodsImg" width="100%" height="80px" alt="商品图片">
                        </span>
                        <span class="foodName">{{good.goodsName}}</span>
                        <span class="foodPrice">￥{{good.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="套餐">
                    <ul class="goods-type-list">
                      <li v-for="good in type3Goods" :key="good" @click="addOrderList(good)">
                        <span class="foodImg">
                          <img :src="good.goodsImg" width="100%" height="80px" alt="商品图片">
                        </span>
                        <span class="foodName">{{good.goodsName}}</span>
                        <span class="foodPrice">￥{{good.price}}元</span>
                      </li>
                    </ul>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'Pos',
    data(){
      return{
        tableData:[
          // {
          //   goodsName: '可口可乐',
          //   price: 8,
          //   count:1
          // }, 
          // {
          //   goodsName: '香辣鸡腿堡',
          //   price: 15,
          //   count:1
          // }, 
          // {
          //   goodsName: '爱心薯条',
          //   price: 8,
          //   count:1
          // }, 
          // {
          //   goodsName: '甜筒',
          //   price: 8,
          //   count:1
          // }
        ],   // 订单列表的数据
        oftenGoods:[
          // {
          //   goodsId:1,
          //   goodsName:'香辣鸡腿堡',
          //   price:18
          // }, 
          // {
          //   goodsId:2,
          //   goodsName:'田园鸡腿堡',
          //   price:15
          // }, 
          // {
          //   goodsId:3,
          //   goodsName:'和风汉堡',
          //   price:15
          // }, 
          // {
          //   goodsId:4,
          //   goodsName:'快乐全家桶',
          //   price:80
          // }, 
          // {
          //   goodsId:5,
          //   goodsName:'脆皮炸鸡腿',
          //   price:10
          // }, 
          // {
          //   goodsId:6,
          //   goodsName:'魔法鸡块',
          //   price:20
          // }, 
          // {
          //   goodsId:7,
          //   goodsName:'可乐大杯',
          //   price:10
          // }, 
          // {
          //   goodsId:8,
          //   goodsName:'雪顶咖啡',
          //   price:18
          // }, 
          // {
          //   goodsId:9,
          //   goodsName:'大块鸡米花',
          //   price:15
          // }, 
          // {
          //   goodsId:20,
          //   goodsName:'香脆鸡柳',
          //   price:17
          // }
        ],  // 常用商品列表数据
        type0Goods:[
          // {
          //   goodsId:1,
          //   goodsImg:"http://p0.meituan.net/deal/f8e636eacbf664ec249e31dd5d760939252321.jpg",
          //   goodsName:'香辣鸡腿堡',
          //   price:18
          // }, 
          // {
          //   goodsId:2,
          //   goodsImg:"http://www.benchengwang.cn/attached/image/20160527/20160527160717_74357.jpg",
          //   goodsName:'田园鸡腿堡',
          //   price:15
          // }, 
          // {
          //   goodsId:3,
          //   goodsImg:"http://cfcdn1.azsg.opensnap.com/hk/userphoto/photo/J/F65/02ZVSO179A0B5DF7A65798mx.jpg",
          //   goodsName:'和风汉堡',
          //   price:15
          // },
        ],  // 汉堡列表数据
        type1Goods:[
          //  {
          //   goodsId:5,
          //   goodsImg:"http://img1.99114.com/group10/M00/84/BB/rBADsloSbM2ANtDHAAFPCAD_0fU084.jpg",
          //   goodsName:'脆皮炸鸡腿',
          //   price:10
          // },
          // {
          //   goodsId:6,
          //   goodsImg:"http://www.jlv8.com/images/201504/source_img/7962_G_1429167170094.png",
          //   goodsName:'魔法鸡块',
          //   price:20
          // }, 
          // {
          //   goodsId:9,
          //   goodsImg:"http://img47.foodjx.com/9/20180803/636689128045165643574.jpg",
          //   goodsName:'大块鸡米花',
          //   price:15
          // }, 
          // {
          //   goodsId:20,
          //   goodsImg:"http://5b0988e595225.cdn.sohucs.com/images/20190130/f80c88a571bd48a3b1f2d5a149f36990.jpeg",
          //   goodsName:'香脆鸡柳',
          //   price:17
          // }
        ],    // 小吃列表数据
        type2Goods:[
          // {
          //   goodsId:7,
          //   goodsImg:"http://img009.hc360.cn/y5/M06/39/42/wKhQUVXUUlWEMHalAAAAAD7iYBg200.jpg",
          //   goodsName:'可乐大杯',
          //   price:10
          // }, 
          // {
          //   goodsId:8,
          //   goodsImg:"http://ku.90sjimg.com/element_pic/16/11/11/8450e22ab8044956f90bb02447814100.jpg",
          //   goodsName:'雪顶咖啡',
          //   price:18
          // }, 
        ],   // 饮料列表数据
        type3Goods:[
          // {
          //   goodsId:4,
          //   goodsImg:"http://ku.90sjimg.com/element_origin_min_pic/16/12/24/0d204d1697512d80d0efed5a08df9048.jpg",
          //   goodsName:'快乐全家桶',
          //   price:80
          // },
          // {
          //   goodsId:4,
          //   goodsImg:"http://pic.51yuansu.com/pic3/cover/01/03/89/590083f9c7ac7_610.jpg",
          //   goodsName:'儿童欢乐套餐',
          //   price:80
          // },
        ],  // 套餐列表数据
        totalCount:0,  // 订单商品总数量
        totalPrice:0, // 订单总价格
        multipleSelection:[],   // 标记多选的项改变时的值
      }
    },
    // 创建created钩子函数，并把axios方法写到created钩子函数中，使用get方法拉取远端mock数据
    created:function(){
      let baseUrl = 'https://www.easy-mock.com/mock/5c07a781d292dd2dc4f9caa8/mockapi';
      axios
      .get(baseUrl+'/oftenGoods')
      .then(response => {
        console.log(response);
        this.oftenGoods = response.data;
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问！')
      })
      axios
      .get(baseUrl+'/typeGoods')
      .then(response => {
        console.log(response);
        this.type0Goods = response.data[0];
        this.type1Goods = response.data[1];
        this.type2Goods = response.data[2];
        this.type3Goods = response.data[3]
      })
      .catch(error => {
        console.log(error);
        alert('网络错误，不能访问')
      })
    },
    // 使用钩子函数设置高度
    mounted:function(){
      let orderHeight = document.body.clientHeight;
      document.getElementById("order-list").style.height = orderHeight+'px';
    },
    methods:{
      // 添加单个商品和数量
      addOrderList(goods){
        // 判断点餐列表有无该商品，有则添加数量，无则添加进去
        let isHave = false; // 默认没有该商品
        for(let i=0;i<this.tableData.length;i++){
          if(this.tableData[i].goodsId === goods.goodsId){
            // 商品已经存在列表，设置该商品存在值为true
            isHave = true;
          }
        }
        // 根据isHave的值判断订单列表中是否已经有此商品
        if(isHave){
          // 存在就进行数量添加
          //数组过滤筛选
          let arr = this.tableData.filter(o=>o.goodsId===goods.goodsId)
          arr[0].count++;
        }else{
          // 商品不存在点餐列表，则新增一个数据对象
          let newGoods = {
            goodsId:goods.goodsId,
            goodsName:goods.goodsName,
            price:goods.price,
            count:1
          };
          // 将新的数据添加入点餐列表对象中
          this.tableData.push(newGoods);
        }
        // 计算商品数量和总额
        this.getAllCountPrice();
      },
      // 删除单个商品(ps:删除表格中的一行可使用以下方法)
      delSingleGoods(goods){
        // 过滤器filter，重新给tableData赋值(筛选出不等的goodsId，之后再返回给tableData)
        this.tableData = this.tableData.filter(o => o.goodsId !== goods.goodsId);
        this.getAllCountPrice();
      },
      // 删除所有商品
      delAllGoods(){
        this.tableData = [];
        this.totalCount = 0;
        this.totalPrice = 0;
      },
      // 汇总商品数量和金额
      getAllCountPrice(){
        this.totalCount = 0;
        this.totalPrice = 0;
        this.tableData.forEach((element) => {
          this.totalCount += element.count;
          this.totalPrice += element.count * element.price;
        })
      },
      // 模拟结账
      checkout(){
        if(this.totalCount !== 0){
          this.tableData = [];
          this.totalCount = 0;
          this.totalPrice = 0;
          this.$message({
            message:"结账成功，感谢您为店里尽了一份力！",
            type:'success',
          });
        }else{
          this.$message.error("您好！不能空结账哦");
        }
      },
      // 选择的商品列表多选框，取消所选择的项
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      //多选项存储值（选择或改变选项时调用）
      handleSelectionChange(val) {
        this.multipleSelection = val;    // val 为选中数据的集合
        console.log(this.multipleSelection);
      }
    }
}
</script>

<style scoped>
  /* 商品列表区 */
  .pos .pos-order{
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
    overflow: auto;
  }
  .total-div{
    background-color: #fff;
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
  }
  .total-div .num-sum{
    margin-right: 70px;
  }
  .btn-div{
    margin-top: 10px;
    text-align: center;
  }
  /* 商品展示区 */
  .often-goods .title{
    height: 19px;
    text-align: left;
    background-color: #f9fafc;
    padding: 10px;
    border-bottom: 1px solid #d3dce6;
  }
  .often-goods-list ul li{
    list-style: none;
    float: left;
    background-color:#fff;
    border: 1px solid #e5e9f2;
    padding: 10px;
    margin: 10px;
  }
  .often-goods-list .o-price{
    color: crimson;
  }
  .goods-type{
    clear: both;
    text-align: left;
    border-top: 1px solid #d3dce6;
  }
  .goods-type-list li{
    list-style: none;
    width:23%;
    height: auto;
    float:left;
    border:1px solid #E5E9F2;
    background-color:#fff;
    overflow: hidden;
    padding: 2px;
    margin: 2px;
  }
  .goods-type-list li span{
    display: block;
    float: left;
  }
  .goods-type-list .foodImg{
    width: 40%;
  }
  .goods-type-list .foodName{
    font-size: 18px;
    color: brown;
    padding-left: 10px;
  }
  .goods-type-list .foodPrice{
    font-size: 16px;
    padding-top:10px;
    padding-left: 10px;
  }
</style>