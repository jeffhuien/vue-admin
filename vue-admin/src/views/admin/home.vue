<template>
  <div class="translate-y-full">
    <el-carousel :interval="3000" height="400px" :autoplay="false">
      <el-carousel-item class="flex justify-center items-center">
        <img src="/img/pexels-photo-3408744.jpeg" alt="" />
        <h3 text="2xl" justify="center">111</h3>
      </el-carousel-item>
      <el-carousel-item>
        <img src="/img/head.jpg" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="/img/pexels-photo-4220967.jpeg" alt="" class="" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  @apply w-full object-cover h-full;
}
</style>
