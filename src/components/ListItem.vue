<template>
  <div>
    <div class="content-list text-left" :class="{ hasTopBorder: borderIndex==0}">
      <img :src=listData.PictureUrl alt="" class="icon"/>
      <p class="name p-header" style="font-size: 18px;color: #333333;">{{listData.Title}}</p>
      <p class="name p-body" style="font-size: 14px;color: #333333;">{{listData.Summary}}</p>
      <p class="name time" style="font-size: 14px;color: #999999;">{{time}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props:{
    listData: {
      type: Object,
    },
    borderIndex:{
      type: Number,
    }
  },
  data(){
    return {
      time:'',
    }
  },
  mounted() {
    this.time=this.formatDate(this.listData.UploadTime);
  },
  methods:{
    formatDate(date) {
      var date = new Date(date* 1000);
      var YY = date.getFullYear() + '-';
      var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
      var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      return YY + MM + DD;
    }
  }
}
</script>

<style scoped>
.content-list{
  padding:30px 20px;
  height:145px;
  border-bottom: 1px solid #eeeeee;
}
.icon{
  float:left;
  margin-left:20px;
  margin-top:5px;
  width: 122px;
  height: 88px;
}
.name{
  padding-left:20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.hasTopBorder{
  border-top: 1px solid #eeeeee;
}
</style>
