import Vue from 'vue';
import Router from 'vue-router';
import Homepage from '@/pages/Homepage';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }

    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
  ],
});
