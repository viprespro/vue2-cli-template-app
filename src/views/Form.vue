<template>
  <div class="wrap">
    <van-cell-group>
      <van-field v-model="value" label="文本" placeholder="请输入用户名" />
      <van-field v-model="cell" label="手机号" placeholder="请输入手机号" />
    </van-cell-group>
    <div class="css-to-rem">测试不同屏幕适配问题</div>
  </div>
</template>

<script>
import Vue from "vue";
import { Field } from "vant";

Vue.use(Field);
export default {
  data() {
    return {
      cell: "18253137881"
    };
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  .css-to-rem {
    width: 100vm;
  }
}
</style>
