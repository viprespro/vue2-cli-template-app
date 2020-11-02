<template>
  <div class="about">
    <h1>This is an about page</h1>

    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>

    <img class="img" src="../assets/imgs/2.png" @click="onTap($event)" alt="" />

    <file-upload />
  </div>
</template>

<script>
import Vue from "vue";
import { Button, Popup, Cell, ImagePreview } from "vant";
import FileUpload from "./files/upload";

Vue.use(Popup)
  .use(Button)
  .use(Cell)
  .use(ImagePreview);

export default {
  name: "About",
  components: {
    FileUpload
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    onTap(_event) {
      console.log(_event);
      // 预览网络图片
      ImagePreview({
        images: [
          "https://img.yzcdn.cn/vant/apple-1.jpg",
          "https://img.yzcdn.cn/vant/apple-2.jpg"
        ],
        closeable: true
      });
    }
  }
};
</script>

<style>
.img {
  width: 100px;
  height: 100px;
}
</style>
