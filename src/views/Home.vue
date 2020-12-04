<template>
  <div class="home">
    <HelloWorld msg="Vue-cli template" />
    <div class="demo-box">
      <span>测试字体大小</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { login } from "@/apis/user";
export default {
  name: "Home",
  components: {
    HelloWorld
  },
  mounted() {
    const data = {
      phone: "18253137881",
      password: "123456"
    };
    login(data).then(res => {
      console.log(res);
      this.$toast("登录成功");
    });
  }
};
</script>

<style lang="scss" scoped>
.demo-box {
  background:#f0f0f0;
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.32rem;
}
</style>
