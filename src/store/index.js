import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let store = new Vuex.Store({
	state:{
		gouwudata: [],//购物车商品参数
		tanshow: false,//控制弹窗显示
		goushow: false,//控制购物车显示
		ball: {//小球
			el: null,
			ballshow: false,
			img: ''
		},
		receiveInfo: [{
	      "name": "王某某",
	      "phone": "13811111112",
	      "areaCode": "010",
	      "landLine": "64627856",
	      "provinceId": 110000,
	      "province": "北京市",
	      "cityId": 110100,
	      "city": "市辖区",
	      "countyId": 110106,
	      "county": "海淀区",
	      "add": "上地十街辉煌国际西6号楼319室",
	      "default": true
	    },{
	      "name": "李某某",
	      "phone": "13811111111",
	      "areaCode": "010",
	      "landLine": "64627856",
	      "provinceId": 110000,
	      "province": "北京市",
	      "cityId": 110100,
	      "city": "市辖区",
	      "countyId": 110106,
	      "county": "海淀区",
	      "add": "上地十街辉煌国际东6号楼350室",
	      "default": false
	    }],
	    dingdan: []
	},
	getters:{
		heji (state) {//购物车商品的数量
			let count = 0
			state.gouwudata.forEach(time => {
				count += time.count
 			})
			return count

		},
		pricezong (state) {//购物车商品总价
			let price = 0
			state.gouwudata.forEach(time => {
				price +=time.count*time.price
			})
			return price
		},
		quanxuan (state) {
			let xuan = true
			state.gouwudata.forEach(time => {
				if(!time.chek){
					xuan = false
					return
				}
			})
			return xuan
		},//选中几件商品
		zonglag (state) {
			let count = 0
			state.gouwudata.forEach(time => {
				if(time.chek) {
					count += time.count
				}
			})
			return count
		},//选中商品的总价
		zongjian (state) {
			let qian = 0
			state.gouwudata.forEach(time => {
				if(time.chek) {
					qian += time.count*time.price
				}
			})
			return qian
		},//选中的商品
		chekdata (state) {
			let data = []
			state.gouwudata.forEach(time => {
				if(time.chek) {
					data.push(time)
				}
			})
			return data
		}
	},
	mutations:{
		gouwudata (state,data) {//添加商品
			let baad = true //判断购物车是否添加过
			state.gouwudata.forEach(time => {
				if(time.sku_id == data.idata.sku_id) {
					time.count+=data.count
					if(time.count > time.limit_num){
						time.count = time.limit_num
						state.tanshow = true
					}
					baad = false
					state.goushow = true
					state.ball.ballshow = true
					state.ball.el = event.path[0]
					state.ball.img = data.idata.ali_image
					console.log(state.ball.img)
				}
			})
			if(baad){
				let shangpin = data.idata 
				Vue.set(shangpin, 'count', data.count)
				Vue.set(shangpin, 'chek', true)
				state.gouwudata.push(shangpin)
				state.goushow = true
				state.ball.ballshow = true
				state.ball.el = event.path[0]
				state.ball.img = data.idata.ali_image
				console.log(state.ball.img)

			}
		},//删除
		delgou (state,id) {
			state.gouwudata.forEach((time,index) => {
				if(time.sku_id == id) {
					state.gouwudata.splice(index, 1)
				}
			})
		},
		tanhidden (state) {
			state.tanshow = false
		},
		goushow (state) {
			state.goushow = true
		},
		gouhidden (state) {
			setTimeout(function () {
				state.goushow = false
			},5000)
		},//增加
		countjia (state,id) {
			console.log('加')
			state.gouwudata.forEach(time => {
				if(time.sku_id == id) {
					if(time.count >=time.limit_num) return
						time.count++
				}
			})
		},//减少
		countjian (state,id) {
				state.gouwudata.forEach(time => {
				if(time.sku_id == id) {
					if(time.count <=1) return
					time.count--								
				}
			})
		},//单选
		active (state,id) {
			state.gouwudata.forEach(time => {
				if(time.sku_id == id) {
					time.chek = !time.chek
				}
			})
		},//全选 allactive
		allactive (state,xuan) {
			if(xuan) {
				state.gouwudata.forEach(time => {
					time.chek = false
				})
			}else {
				state.gouwudata.forEach(time => {
					time.chek = true
				})
			}
		},//删除
		delchek (state) {
			state.gouwudata.forEach((time,index) => {
				if(time.chek) {
					state.gouwudata.splice(index,1)
				}
			})
		},
		tijiao (state,data) {
			if(data.default) {
				state.receiveInfo.forEach(time => {
					time.default = false
				})
				state.receiveInfo.push(data)
			}
		},
		dingdan (state,data) {
			// console.log(data.zongjia+'这是总价')
		
			state.dingdan.unshift(data)
			// console.log(state.dingdan[0].zongjia)
			// console.log(state.dingdan.zongjia)
			let i = state.gouwudata.length
			while(i--) {
				if(state.gouwudata[i].chek) {
					state.gouwudata.splice(i,1)
				}
			}
		},
		zhifu (state, id) {
			state.dingdan.forEach(time => {
				if(time.timeid == id) {
					time.fukuan = true
				}
			})
		},
		delzhi (state, id) {
			console.log(id)
			state.receiveInfo.forEach((time,index) => {
				if(index == id) {
					state.receiveInfo.splice(index,1)
				}
			})
		},
		moren (state,id) {
			state.receiveInfo.forEach((time,index) => {
				if(index == id) {
					time.default = true
				}else {
					time.default = false
				}
			})
		}
	}
})

export default store