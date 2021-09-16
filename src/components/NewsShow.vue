<template>
  <div class="text-center">
<!--    <div class="box text-center" style="padding-top: 100px;" @click="createNews">-->
<!--      <div>-->
<!--        <a-icon type="plus" :style="{ fontSize: '46px' }"/>-->
<!--        <p style="padding-top: 20px">新的{{newType}}</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="box" v-for="(item,index) in listData" :key="index">-->
<!--      <a-card hoverable style="width: 200px;height: 300px">-->
<!--        <img-->
<!--          slot="cover"-->
<!--          alt="example"-->
<!--          :src=item.url-->
<!--        />-->
<!--        <template slot="actions" class="ant-card-actions">-->
<!--          <a-icon key="edit" type="edit" @click="editItem"/>-->
<!--          <a-icon key="delete" type="delete" @click="deleteItem(item.id)"/>-->
<!--        </template>-->
<!--        <a-card-meta :title=item.title :description=item.description></a-card-meta>-->
<!--      </a-card>-->
<!--    </div>-->
    <a-row :gutter="[4, 8]">
      <a-col :span="4">
        <div class="box" style="padding-top: 100px;margin-bottom: 250px" @click="createNews">
          <div>
            <a-icon type="plus" :style="{ fontSize: '46px' }"/>
            <p style="padding-top: 20px">新的{{newType}}</p>
          </div>
        </div>
      </a-col>
      <a-col span="4" v-for="(item,index) in listData" :key="index">
          <div>
          <a-card hoverable style="width: 200px;height: 300px">
            <img
              slot="cover"
              alt="example"
              :src=item.PictureUrl
              style="height: 180px"
            />
            <template slot="actions" class="ant-card-actions">
<!--              <a-icon key="edit" type="edit" @click="editItem(item.Id)"/>-->
              <a-icon key="delete" type="delete" @click="deleteItem(item.Id)"/>
            </template>
            <a-card-meta :title=item.Title :description=item.Summary></a-card-meta>
          </a-card>
        </div>
        </a-col>
    </a-row>
  </div>
</template>

<script>
import { getNews,deleteNews } from '@/api/service';
export default {
  name: "NewsShow",
  props:{
    newType:{
      type:String,
      defaultValue:' '
    },
  },
  data(){
    return{
      listData:[{
        ArticleText: "text1111",
        ArticleType: 0,
        Id: 1,
        PictureUrl: "http://8.131.72.119:8081/file/article/1.png",
        Summary: "11111",
        Title: "t1",
        UploadTime: 1612614047
      }],
      editType: null,
    }
  },
  mounted() {
    if(this.newType=='热门资讯'){
      this.editType = 0;
    }else if(this.newType=='企业新闻'){
      this.editType = 1;
    }else{
      this.editType = 2;
    }
    this.getList();
  },
  methods:{
    getList(){
      getNews(this.editType).then(res=>{
        console.log('',res);
        this.listData = res.result;
      })
    },
    editItem(id){
      this.$emit('editNews',id);
    },
    deleteItem(id){
      deleteNews(id).then(res=>{
        console.log('',res);
        if(res.result.success){
          this.getList();
        }
      })
    },
    createNews(){
      this.$emit('createNewNews')
    }
  }
}
</script>

<style scoped>
.box{
  width: 200px;
  height: 300px;
  box-shadow: 0px 4px 8px 0px rgba(25, 25, 25, 0.08);
  border-radius: 4px;
  padding: 10px;
  /*overflow: auto;*/
  display: inline-block;
}
</style>
