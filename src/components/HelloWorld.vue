<template>
  <div class="hello">
    <span style="color: pink;">{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
}
</script>

<style scoped></style>
