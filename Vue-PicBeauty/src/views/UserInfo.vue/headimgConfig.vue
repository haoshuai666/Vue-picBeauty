<template>
  <div>
    <mt-header title="头像">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
        <mt-button @click="handleClose">关闭</mt-button>
      </router-link>
    <mt-button slot="right">确认</mt-button>
    </mt-header>  

  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>

</style>

