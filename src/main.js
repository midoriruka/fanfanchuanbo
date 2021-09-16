import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './css/base.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'ant-design-vue/dist/antd.css';
import MetaInfo from 'vue-meta-info';
import VueLazyload from 'vue-lazyload';

Vue.use(MetaInfo);
Vue.use(VueLazyload);

Vue.use(BootstrapVue);
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  //添加到这里,这里的render-event和vue.config.js里面的renderAfterDocumentEvent配置名称一致
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app');
