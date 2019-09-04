<template>
  <div class="post-video">
    <div class="video-header">
      <h2>{{video.title}}</h2>
      <div class="video-data">
        {{video.created_at | moment("YYYY-MM-DD h:mm:ss") }}创建 ·
        {{video.view}}观赏
      </div>
    </div>
    <video-player
      class="video-player-box"
      :options="playerOptions">
    </video-player>
    <div class="video-info">
      <pre>{{video.info}}</pre>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
import * as API from '@/api/video/';

export default {
  name: 'ShowVideo',
  data() {
    return {
      video: {},
      playerOptions: {
        fluid: true,
        autoplay: false,
        sources: [{
          type: 'video/mp4',
          src: '',
        }],
      },
    };
  },
  methods: {
    load() {
      API.getVideo(this.$route.params.videoID).then((res) => {
        this.video = res.data;
        this.playerOptions.sources[0].src = this.video.url;
      });
    },
  },
  components: {
    videoPlayer,
  },
  beforeMount() {
    this.load();
  },
};
</script>

<style>
.video-header {
  margin-bottom: 16px;
}
.video-header h2{
  margin-bottom: 0px;
  font-size: 18px;
  font-weight: 500;
  color: #212121;
  line-height: 26px;
  height: 26px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.video-data {
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}
.video-info {
  color: #111;
}
</style>
