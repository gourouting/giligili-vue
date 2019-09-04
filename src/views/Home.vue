<template>
  <div class="home">
    <div class="top">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="8" :md="8" v-for="video in videos" :key="video.id">
          <el-card class="video-card" @click.native="goVideo(video)">
            <img class="video-avatar" :src="video.avatar">
            <div>
              <div class="video-title">{{video.title}}</div>
              <div class="video-bottom clearfix">
                <span class="video-info">{{video.info.substring(0, 40)}}</span>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="6"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
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
      start: 0,
      limit: 6,
      total: 0,
    };
  },
  methods: {
    handleCurrentChange(val) {
      this.start = this.limit * (val - 1); // val 页面
      this.load();
    },
    load() {
      API.getVideos(this.start, this.limit).then((res) => {
        this.videos = res.data.items;
        this.total = res.data.total;
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
  margin-bottom: 14px;
  cursor: pointer;
}
</style>
