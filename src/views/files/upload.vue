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
      // file对象
      // 1. 单个文件 file是object类型
      // 2. 多个文件 file是Array类型
      console.log(file);
      if (file instanceof Array) {
        for (const item of file) {
          this.doUpload(item);
        }
      } else {
        this.doUpload(file);
      }
    },
    doUpload(_file) {
      /**
       * 说明：后端只是提供一个上传的接口 所以多文件的时候选择循环上传
       * 上传的每个文件会返回一个resourceKey作为表单提交的时候传递给后端
       */
      const formData = new FormData();
      formData.append("file", _file.file);
      // 将formData作为参数传递到服务器即可
      // done.then(res => {
      //   file.status = "done"
      //   file.resourceKey = res.resourceKey  /
      // }).catch(res => {
      //   file.status = "failed"
      //   ile.message = "上传失败"
      // })
    },
    onOversize() {
      this.$toast("文件大小超过限制");
    }
  }
};
</script>

<style lang="scss" scoped></style>
