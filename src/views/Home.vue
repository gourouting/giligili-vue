<template>
  <div class="home">
    <div class="">
      <el-row :gutter="20">
        <el-col :span="4" v-for="video in videos" :key="video.id">
          <el-card class="video-card" @click.native="goVideo(video)">
            <img class="video-avatar" src="../assets/avatar.jpg">
            <div>
              <div class="video-title">{{video.title}}</div>
              <div class="video-bottom clearfix">
                <span class="video-info">{{video.info.substring(0, 40)}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import * as API from '@/api/video/';

export default {
  name: 'home',
  data() {
    return {
      videos: [],
    };
  },
  methods: {
    load() {
      API.getVideos().then((res) => {
        this.videos = res.data;
      });
    },
    goVideo(video) {
      this.$router.push({ name: 'showVideo', params: { videoID: video.id } });
    },
  },
  components: {
  },
  beforeMount() {
    this.load();
  },
};
</script>

<style>
.video-avatar {
  width: 100%;
}
.video-title {
  margin: 4px 0px 4px 0px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.video-bottom {
  margin-top: 4px;
}
.video-info {
  color: #909399;
}
.video-card {
  cursor: pointer;
}
</style>
