<template>
<div class="nav-cart-wrapper" v-if="goushow">
	<div class="nav-cart-list">
		<div class="empty" v-if="count <=0">
			<h3>购物车为空</h3>
			<p>您还没有选购任何商品，现在前往商城选购吧!</p>
		</div>
		<div class="full" v-else>
			<div class="nav-cart-items">
				<ul>
					<li class="clear" v-for="(time,index) in shangpin">
						<div class="cart-item js-cart-item cart-item-sell">
							<div class="cart-item-inner" >
								<div class="item-thumb">
									<img :src="time.ali_image+'?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'">
								</div>
								<div class="item-desc">
									<div class="cart-cell">
										<h4> 
											<a href="#/item/100027401">{{ time.title }}）</a>
										</h4>
										<p class="attrs">
											<span>{{ time.spec_json.show_name }}</span>
										</p>
										<h6>
											<span class="price-icon">¥</span><span class="price-num">{{ time.price }}</span><span class="item-num">x {{ time.count }}</span>
										</h6>
									</div>
								</div>
								<div class="del-btn" @click="delgou(time.sku_id)">删除</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="nav-cart-total" v-if="count>0">
				<p>共 <strong class="ng-binding">{{ count }}</strong> 件商品</p>
				<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{ pricezong }}</span></h5>
				<h6>
					<router-link :to="{name:'qingdan'}" class="nav-cart-btn" >去购物车</router-link>
				</h6>
			</div>
		</div>
	</div>
	<chuang v-if="tanshow"></chuang>
</div>	
</template>
<script>
import chuang from '@/components/chuang'

export default {
	computed: {
		shangpin () {
			return this.$store.state.gouwudata
		},
		count () {//总数
			// console.log(666)
			return this.$store.getters.heji
		},
		pricezong () {//价格
			return this.$store.getters.pricezong
		},
		tanshow () {//弹窗显示
			return this.$store.state.tanshow
		},
		goushow () {
			return this.$store.state.goushow
		}
	},
	methods: {
		delgou (id) {
			this.$store.commit('delgou', id)
		}
	},
	components: {
		chuang
	}
};
	
</script>
<style>
	
</style>