<template>
  <div class="home">123</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { doLogin } from '@/apis/user'
export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  mounted() {
    const data = {
      phone: '18253137881',
      password: '123456',
    }
    doLogin(data).then((res) => {
      this.$toast('登录成功')
    })
  },
}
</script>

//
<style lang="scss" scoped>
.demo-box {
  background: #f0f0f0;
  width: 7.5rem;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.32rem;
}
</style>
