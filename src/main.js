// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { AlertPlugin, ConfirmPlugin, PromptPlugin, LoadingPlugin, NotifyPlugin, ToastPlugin } from '@/plugins';
import { Tabbar,TabbarItem,ViewBox,XHeader} from 'vux';

import App from './App';
import router from './router';
import store from './store';

import './utils/directives';
import './utils/filters';

// 注册项目通用插件
Vue.use(AlertPlugin);
Vue.use(ConfirmPlugin);
Vue.use(PromptPlugin);
Vue.use(LoadingPlugin);
Vue.use(NotifyPlugin);
Vue.use(ToastPlugin);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(ViewBox);
Vue.use(XHeader);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
