<template>
  <div>
    <a-tabs default-active-key="1" @tabClick="callback">
      <a-tab-pane key="1" tab="热门资讯">
        <newsshow v-show="showEdit==1" :newType="'热门资讯'" @createNewNews="createNew" @editNews="edit"></newsshow>
        <newsedit v-show="showEdit==2" edit-type ='0'></newsedit>
      </a-tab-pane>
      <a-tab-pane key="2" tab="企业新闻" force-render>
        <newsshow v-show="showEdit==1" :newType="'企业新闻'" @createNewNews="createNew" @editNews="edit"></newsshow>
        <newsedit v-show="showEdit==2" edit-type = '1'></newsedit>
      </a-tab-pane>
      <a-tab-pane key="3" tab="运营干货" force-render>
        <newsshow v-show="showEdit==1" :newType="'运营干货'" @createNewNews="createNew" @editNews="edit"></newsshow>
        <newsedit v-show="showEdit==2" edit-type = '2'></newsedit>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import newsshow from '@/components/NewsShow'
import newsedit from '@/components/NewsEdit'
export default {
  name: "SchoolAdmin",
  components: {
    newsshow,
    newsedit
  },
  data(){
    return {
      showEdit:1
    }
  },
  methods:{
    callback(key) {
      this.showEdit=1;
    },
    createNew(){
      this.showEdit=2;
    },
    edit(value){
      console.log('edit',value);
    }
  }
}
</script>

<style scoped lang="less">

</style>
