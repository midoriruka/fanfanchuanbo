<template>
  <div>
    <a-upload
      action="http://8.131.72.119:8081/upload/video"
      list-type="picture-card"
      :file-list="fileList"
      @change="handleChange"
      :remove="removeBanner"
      method="post"
    >
      <div v-if="fileList.length < 1">
        <a-icon type="plus" />
        <div class="ant-upload-text">
          选择上传视频
        </div>
      </div>
    </a-upload>
  </div>
</template>

<script>
import {deleteMedia, getMediaList} from "@/api/service";

export default {
name: "CaseVideo",
  data(){
    return {
      fileList: [
        // {
        //   uid: '-1',
        //   name: 'image.png',
        //   status: 'done',
        //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        // },
      ],
    }
  },
  mounted() {
    getMediaList('video').then((res)=>{
      console.log('video',res);
      this.fileList = res;
    })
  },
  methods:{
    handleChange({ fileList }) {
      this.fileList = fileList;
    },
    removeBanner(file){
      deleteMedia(file.uid).then(res=>{
        console.log('remove',res)
      })
    }
  }
}
</script>

<style scoped>
/deep/ .ant-upload.ant-upload-select-picture-card{
  width: 604px;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card-container{
  width: 604px;
  height: 219px;
}
/deep/ .ant-upload-list-picture-card .ant-upload-list-item{
  width: 604px;
  height: 219px;
}
</style>
