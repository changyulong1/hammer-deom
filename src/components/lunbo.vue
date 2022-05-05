<template>
  <div class="carousel-wrap" id="carousel">
    <transition-group tag="ul" class="slide-ul" name="list">
      <li
        v-for="time in slideList"
        :key="time.id"
        :class="{ active: time.id === currentIndex }"
        @mouseover="stop"
        @mouseout="go"
      >
        <a :href="time.clickUrl">
          <img :src="time.image" :alt="time.desc" />
        </a>
      </li>
    </transition-group>
    <div class="carousel-items">
      <span
        v-for="(time, ind) in slideList.length"
        :class="{ active: currentIndex == ind }"
        :key="ind"
        @mouseover="gaibian(ind)"
      >
      </span>
    </div>
  </div>
</template>
<script>
// v-if="currentIndex === index"
export default {
  data() {
    return {
      slideList: [
        {
          clickUrl: "#",
          desc: "第一张图",
          image:
            "https://resource.smartisan.com/resource/fa808c10081b9fd3040bb7bfd12b891c.jpg?x-oss-process=image/resize,w_1678/format,webp/quality,Q_95",
          id: 0,
        },
        {
          clickUrl: "#",
          desc: "第二张图",
          image:
            "https://static.smartisanos.cn/delta/img/01@2x.4d19c6c.jpg?x-oss-process=image/format,webp",
          id: 1,
        },
        {
          clickUrl: "#",
          desc: "第三张图",
          image:
            "https://resource.smartisan.com/resource/3ccb370f200c595dda0cd440349da257.png?x-oss-process=image/format,webp/quality,Q_90",
          id: 2,
        },
      ],
      currentIndex: 0,
      timer: "",
    };
  },
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.free();
      }, 500);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    free() {
      this.currentIndex++;
      if (this.currentIndex >= this.slideList.length) {
        this.currentIndex = 0;
      }
    },
    gaibian(id) {
      this.currentIndex = id;
    },
  },
};
</script>
<style>
.carousel-wrap {
  height: 453px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
}

.slide-ul {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  width: 100%;
  height: 100%;
  display: none;
}

img {
  width: 100%;
  height: 100%;
}
.slide-ul li.active {
  display: block;
}
.carousel-items {
  position: absolute;
  z-index: 10;
  bottom: 6px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
}
.carousel-items .active {
  background-color: orange;
}

.list-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.list-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.list-enter {
  transform: translateX(100%);
}

.list-leave {
  transform: translateX(0);
}
</style>