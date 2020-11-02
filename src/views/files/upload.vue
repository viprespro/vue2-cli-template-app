<template>
  <div>
    <van-uploader
      v-model="imgsList"
      multiple
      :max-size="500 * 1024"
      :after-read="afterRead"
      @oversize="onOversize"
    />
  </div>
</template>

<script>
import Vue from "vue";
import { Uploader } from "vant";

Vue.use(Uploader);

export default {
  name: "FileUpload",
  data() {
    return {
      imgsList: [
        { url: "https://img.yzcdn.cn/vant/leaf.jpg" },
        { url: "https://cloud-image", isImage: true }
      ]
    };
  },
  methods: {
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.doUpload(file);

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 1000);
    },
    doUpload(_file) {
      const formData = new FormData();
      formData.append("file", _file.file);
      // 将formData作为参数传递到服务器即可
      // done.then(res => {
      //   file.status = "done"
      // }).catch(res => {

      // })
    },
    onOversize() {
      this.$toast("文件大小超过限制");
    }
  }
};
</script>

<style lang="scss" scoped></style>
