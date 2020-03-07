<template>
<div class="item">
	<div>
		<div class="item-img"><img :alt="time.name" :src="time.sku_info[imgiondex].ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'" style="opacity: 1;">
		</div>
		<h6>{{ time.name }}</h6>
		<h3>{{ time.name_title }}</h3>
		<div class="params-colors">
			<ul class="colors-list">
				<li v-for="(timen,index) in time.sku_info" :key="index">
					<a href="javascript:;" @click="imgdian(index)" :class="{'active': imgiondex == index}"><img :src="'http://img01.smartisanos.cn/'+timen.spec_json.image+'20X20.jpg'">
					</a>
				</li>
			</ul>
		</div>
		<div class="item-btns clearfix">
			<span class="item-gray-btn"><router-link :to="{name: 'xiang',query: {timeid: time.sku_info[imgiondex].sku_id}}" target="_blank">查看详情</router-link> </span><span class="item-blue-btn" @click="goushangpin(time.sku_info[imgiondex])">加入购物车 </span>
		</div>
		<div class="item-price clearfix">
			<i>¥</i><span>{{ time.price }}</span>
		</div>
		<div class="discount-icon">false</div>
		<div class="item-cover">
			<router-link :to="{name: 'xiang',query: {timeid: time.sku_info[imgiondex].sku_id}}" target="_blank"></router-link>
		</div>
	</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			imgiondex: 0
		}
	},
	props: {
		time: Object
	},
	methods: {
		imgdian (id) {
			this.imgiondex = id
			// console.log(this.imgiondex)
		},//添加购物车
		goushangpin (data) {
			let iofodata = {idata: data, count: 1}
			this.$store.commit('gouwudata', iofodata)
		}

	}
};
</script>
<style>
	
</style>
