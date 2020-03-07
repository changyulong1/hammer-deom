<template>
<div class="account-content">
	<div class="account-order">
		<div class="gray-box">
			<div class="title columns-title pre-title">
				<h2>我的订单</h2>
				<div class="gray-btn-menu sort-status-menu">
					<span class="label"><i class="arrow"></i> 全部状态 </span>
					<ul class="menu-list">
						<li class="selected"><a href="javascript:;">全部状态</a></li>
						<li class=""><a href="javascript:;">未完成</a></li>
						<li class=""><a href="javascript:;">已完成</a></li>
						<li class=""><a href="javascript:;">已关闭</a></li>
					</ul>
				</div>
				<div class="gray-btn-menu sort-time-menu -gray-btn-menu-on">
					<span class="label"><i class="arrow"></i> 最近三个月 </span>
					<ul class="menu-list">
						<li class="selected"><a href="javascript:;">最近三个月</a></li>
						<li class=""><a href="javascript:;">今年内</a></li>
						<li class=""><a href="javascript:;">2016年</a></li>
						<li class=""><a href="javascript:;">2015年</a></li>
					</ul>
				</div>
			</div>
			<div class="js-list-inner">
				<div class="box-inner order-cart order-list-cart clear"v-for="(time,index) in shanpin" >
					<div class="gray-sub-title cart-title">
						<span class="date">{{ time.date }}</span>
						<span class="order-id"> 订单号： <a href="javascript:;">{{ time.timeid }}</a> </span>
						<span class="order-detail">
							<router-link :to="{name: 'tijiao', query:{datid: time.timeid}}">查看详情&gt;</router-link> </span> <span class="sub-total">应付总额</span>
						<span class="num">数量</span>
						<span class="price">单价</span>
					</div>
					<div class="cart">
						<div class="cart-items clear" v-for="(tiem,id) in time.shanpin">
							<div class="prod-info clear">
								<div class="items-thumb">
									<a href="javascript:;" target="_blank"><img :src="tiem.ali_image+'?x-oss-process=image/resize,w_80/quality,Q_100/format,webp'"></a>
								</div>
								<div class="items-params clear">
									<div class="name vh-center">
										<a href="javascript:;" target="_blank" title="坚果 Pro 钢化玻璃手感膜 开孔 (后壳用)（黑色）">{{ tiem.title }} (后壳用)（{{ tiem.spec_json.show_name }}）</a>
									</div>
									<div class="detail"></div>
								</div>
								<div class="num">{{ time.count }}</div>
								<div class="price">¥ {{ tiem.price }}</div>
							</div>
						</div>
					</div>
					<div class="prod-operation">
						<div class="total">¥ {{ time.zongjia+time.yunfei }}</div>
						<div class="status">
							<router-link :to="{name: 'tijiao', query:{datid: time.timeid}}" class="blue-small-btn js-payment-order" v-if="!time.fukuan">现在付款</router-link>
							<div v-else>已完成</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
export default {
	computed: {
		shanpin () {
			return this.$store.state.dingdan
		}
	},
	created() {
		let att = this.shanpin
		console.log(56)
		console.log(att.zongjia)
	}
};
	
</script>
<style>
.account-content{
	margin-left: 230px;
}
.gray-box .title{
	height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.gray-box .pre-title{
	position: relative;
    z-index: 2;
}
.gray-box .title h2{
	font-size: 18px;
    font-weight: 400;
    color: #626262;
}	

</style>