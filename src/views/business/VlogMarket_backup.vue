<template>
    <div style="margin-top: 4rem">
      <div class="row justify-content-center">
        <div class="col-sm-8">
          <div class="row justify-content-left">
            <div class="col-6 col-sm-4" @click="goToDetails(0)">
              <b-card
                img-src="@/assets/business/shortvideo/01.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem;max-height: 25rem"
                class="mb-5"
              >
                <b-card-text class="p-body">
                  短视频营销—抖音代运营
                </b-card-text>
              </b-card>
            </div>
            <div class="col-6 col-sm-4" @click="goToDetails(1)">
              <b-card
                img-src="@/assets/business/shortvideo/02.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem;max-height: 25rem"
                class="mb-2">
                <b-card-text class="p-body">
                  短视频营销—快手代运营
                </b-card-text>
              </b-card>
            </div>
            <div class="col-6 col-sm-4" @click="goToDetails(2)">
              <b-card
                img-src="@/assets/business/shortvideo/03.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem;max-height: 25rem"
                class="mb-2"
              >
                <b-card-text class="p-body">
                  短视频营销—信息流广告投放
                </b-card-text>
              </b-card>
            </div>
            <div class="col-6 col-sm-4" @click="goToDetails(3)">
              <b-card
                img-src="@/assets/business/shortvideo/04.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 25rem;max-height: 25rem"
                class="mb-2"
              >
                <b-card-text class="p-body">
                  短视频营销—信息流广告的优势
                </b-card-text>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "VlogMarket",
        methods:{
            goToDetails(num){
              switch (num){
                case 0:
                  this.$router.push('/main/business/TikTok');
                  break;
                case 1:
                  this.$router.push('/main/business/Kwai');
                  break;
                case 2:
                  this.$router.push('/main/business/FeedsRelease');
                  break;
                case 3:
                  this.$router.push('/main/business/FeedsAdvantage');
                  break;
                default:
                  break;
              }
            }
        }
    }
</script>

<style scoped>
  .p-body{
    font-family: 'SourceHanSansRegular';
  }
</style>
