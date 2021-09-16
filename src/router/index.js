import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'main',
    redirect: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Main.vue'),
    children: [
      // Note we provide the above parent route name on the default child tab
      // route to ensure this tab is rendered by default when using named routes
      {
        path: 'home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'), name: 'home',
      },
      {
        path: 'business',
        component: () => import(/* webpackChunkName: "about" */ '../views/business/Business.vue'), name: 'business',
        children:[
          {
            path: '',
            component: () => import(/* webpackChunkName: "about" */ '../views/business/VlogMarket.vue'),
            // redirect:'/shortvideomarketing',
            name: 'shortvideomarketing',
        },{
            path: 'VideoMaking',
            component: () => import(/* webpackChunkName: "about" */ '../views/business/VideoMaking.vue'),
            // redirect:'/shortvideomarketing',
            name: 'VideoMaking',
        },{
            path: 'LiveBusiness',
            component: () => import(/* webpackChunkName: "about" */ '../views/business/LiveBusiness.vue'),
            // redirect:'/shortvideomarketing',
            name: 'LiveBusiness',
        },{
            path: 'BrandMarket',
            component: () => import(/* webpackChunkName: "about" */ '../views/business/BrandMarket.vue'),
            // redirect:'/shortvideomarketing',
            name: 'BrandMarket',
        },{
            path: 'ElectronicBusiness',
            component: () => import(/* webpackChunkName: "about" */ '../views/business/ElectronicBusiness.vue'),
            // redirect:'/shortvideomarketing',
            name: 'ElectronicBusiness',
        },]
      },{
        path: 'case',
        component: () => import(/* webpackChunkName: "about" */ '../views/case/case.vue'), name: 'case',
      },{
        path: 'school',
        component: () => import(/* webpackChunkName: "about" */ '../views/school/school.vue'), name: 'school',
      },{
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/about.vue'),
        name: 'about',
      },
    ]
  },
  {
    path: '/logon',
    name: 'logon',
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  },{
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: "about" */ '../views/admin/index.vue'),
    children: [
      {
        path: '',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/BannerAdmin.vue'),
        // redirect:'/shortvideomarketing',
        name: 'BannerAdmin',
      },
      {
        path: 'case',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/CaseVideo.vue'),
        // redirect:'/shortvideomarketing',
        name: 'case',
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/AboutAdmin.vue'),
        // redirect:'/shortvideomarketing',
        name: 'about',
      },
      {
        path: 'school',
        component: () => import(/* webpackChunkName: "about" */ '../views/admin/SchoolAdmin.vue'),
        // redirect:'/shortvideomarketing',
        name: 'school',
      },
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
