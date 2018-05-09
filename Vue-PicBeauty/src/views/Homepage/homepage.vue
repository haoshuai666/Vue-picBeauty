<template>
 <div>
    <mt-header title="图图秀">
      <router-link to="/" slot="right">
        <mt-button >登录</mt-button>
      </router-link>
    </mt-header>
     <div class="imglist">
        <see-box class="piczoom">
          <see-item v-for="(item,index) in imgList" :key="index" :url="item.u" :width="item.w" :height="item.h" :caption="item.c"></see-item>
        </see-box>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {
       imgList: [{
                u: 'http://img.mp.itc.cn/upload/20170526/c6ae4bb96b3043be9d45fa5402a7f96c_th.jpg',
                w: 650,
                h: 400,
                c:'imgNumber1'
            }, {
                u: 'http://img.mp.itc.cn/upload/20170526/c6ae4bb96b3043be9d45fa5402a7f96c_th.jpg',
                w: 650,
                h: 400,
                c:'这是图片2'
            }]
    }
  }
}
</script>


<style scoped>
.mint-header{
  background: #000;
  color:#fff;
  max-height:1rem;
}
/* .piczoom>div>figure{
   width: 100%;
   height:100px;
}
.piczoom>div>figure>a{
  width: 100%;
  height:100%;
  display: block;
}
img{
  width: 100%;
  height:100%;
} */
</style>