<template>
  <div class="hello">
    <span>{{ msg }}</span>
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
