<template>
<div id="header">
<div class="nav-global">
	<div class="container">
		<h1 class="nav-logo">
			<a href="javascript:;"></a>
		</h1>
		<ul class="nav-aside">
			<li class="nav-user">
				<a href="javascript:;">个人中心</a>
				<!--active-->
				<div class="nav-user-wrapper">
					<div class="nav-user-list">
						<dl class="nav-user-avatar">
							<dd><span class="ng-scope"></span></dd>
							<dt class="ng-binding">+86 138****9453</dt>
						</dl>
						<ul>
							<router-link to="/ding" tag="li" class="order"><a href="javascript:;">我的订单</a></router-link>
							<li class="support"><a href="javascript:;">售后服务</a></li>
							<li class="coupon"><a href="javascript:;">我的优惠</a></li>
							<li class="information"><a href="javascript:;">账户资料</a></li>
							<li class="address"><a href="javascript:;">收货地址</a></li>
							<li class="logout"><a href="javascript:;">退出</a></li>
						</ul>
					</div>
				</div>
			</li>
			<!--active-->
			<li class="nav-cart">
				<a href="javascript:;" class="ball-rect" @mouseover="goushow" @mouseout="gouhidden">购物车</a>
				<!--根据class改变颜色-->
				<span :class="{'cart-num': count >0}" class="cart-empty-num" >
					<i>{{ count }}</i>
				</span>
					<!-- 购物车组件 -->
				<gouwuche></gouwuche>
				<transition 
					name="ball"
					@before-enter='beforeEnter'
					@enter='enter'
					@after-enter="afterEnter"
				>
					<div class="addcart-mask" v-show="this.ball.ballshow">
						<img  class="mask-item">
					</div>
				</transition>
				
			</li>
		</ul>
		<ul class="nav-list">
			<li><a href="javascript:;">在线商城</a></li>
			<li><a href="javascript:;">坚果 Pro</a></li>
			<li><a href="javascript:;">Smartisan M1 / M1L</a></li>
			<li><a href="javascript:;">Smartisan OS</a></li>
			<li><a href="javascript:;">欢喜云</a></li>
			<li><a href="javascript:;">应用下载</a></li>
			<li><a href="javascript:;">官方论坛</a></li>
		</ul>
	</div>
</div>
<div :class="{'active': show}"  class="nav-sub" >
	<div class="nav-sub-wrapper">
		<div class="container">
			<ul class="nav-list">
				<li><router-link to="/">首页</router-link></li>
				<li @mouseover="dashow" @mouseout="hidden"><router-link to="/shouji">手机</router-link></li>
				<li><router-link to="/zuji">“足迹系列”手感膜</router-link></li>
				<li><router-link to="/parts">官方配件</router-link></li>
				<li><router-link to="/zhoubian">周边产品</router-link></li>
				<li><router-link to="/peijian">第三方配件</router-link></li>
				<li><router-link to="/quan">全部商品</router-link></li>
				<li><router-link to="/fuwu">服务</router-link></li>
			</ul>
		</div>
	</div>
	<jizujian v-if="show"></jizujian>
</div>
</div>
</template>
<script>
import gouwuche from '../components/gouwuche'
import jizujian from '../components/jizujian'
export default {
	data () {
		return {
			show: false
		}
	},
	computed: {
		count () {
			return this.$store.getters.heji
		},
		ball () {
			return this.$store.state.ball
		}
	},
	components: {
		gouwuche,
		jizujian
	},
	methods: {
		goushow () {
			this.$store.commit('goushow')
		},
		gouhidden () {
			this.$store.commit('gouhidden')
		},//动画开始前开始前
		beforeEnter (el) {
			//小球的位置
			let ballpath = this.ball.el.getBoundingClientRect()
			//购物车位置
			let goupath = document.getElementsByClassName('ball-rect')[0].getBoundingClientRect()
			//获取小球
			let ball = document.getElementsByClassName('mask-item')[0]
			let x = (goupath.left+16) - (ballpath.left - ballpath.width/2)
			let y = (ballpath.top + ballpath.width/2) - goupath.top
			// el.style.transform = 'translate3d(0,'+y+'px,0)'
			// ball.style.transform = 'translate3d(-'+x+'px,0,0)'
			el.style.transform = 'translate3d(0,'+y+'px,0)'
			ball.style.transform = 'translate3d(-'+x+'px,0,0)'
			ball.src = this.ball.img

		},//动画开始中	
		enter (el) {
			let tf = el.offsetHeight
			this.$nextTick(()=> {
				el.style.transform= 'translate3d(0,0,0)'
				document.getElementsByClassName('mask-item')[0].style.transform = 'translate3d(0,0,0)'
			})
		},//动画结束
		afterEnter (el) {
			// console.log(2)
			this.ball.ballshow = false
			this.$store.commit('gouhidden')
		},
		dashow () {
			this.show = true
		},
		hidden () {
			this.show = false
		}
	}
};
	
</script>
<style>
.ball-enter-active{
    transition: 1s cubic-bezier(.15,.69,.6,1.29);
  }
  .ball-enter-active .mask-item{
    transition: 1s cubic-bezier(0,0,1,1);
  }	
</style>