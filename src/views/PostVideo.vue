<template>
  <div class="post-video">
    <h2>欢迎投稿：</h2>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="视频地址">
        <el-input type="url" v-model="form.url"></el-input>
      </el-form-item>

      <el-form-item label="描述">
        <el-input type="textarea" v-model="form.info"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import * as API from '@/api/video/';

export default {
  name: 'PostVideo',
  data() {
    return {
      form: {
        title: '',
        info: '',
        url: '',
      },
    };
  },
  methods: {
    onSubmit() {
      API.postVideo(this.form).then((res) => {
        if (res.status > 0) {
          this.$notify.error({
            title: '投稿失败',
            message: res.msg,
          });
        } else {
          this.$notify({
            title: '投稿成功',
            message: `您投稿的ID为${res.data.id}`,
            type: 'success',
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '网路错误，或者服务器宕机',
          message: error,
        });
      });
    },
  },
  components: {
  },
};
</script>
