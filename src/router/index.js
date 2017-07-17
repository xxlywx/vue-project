/**
 * Created by zhibaokang on 2017/7/14.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';

Vue.use(VueRouter);

export default function createRouter () {
  return new VueRouter({
    mode: 'history',
    routes: [
      {
        name: '/', component: Index
      }
    ]
  });
}