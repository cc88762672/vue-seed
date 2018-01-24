import { Alert as AlertComponent } from '@/components/commons';
import { show, hide } from './util';

const plugin = {
  install(Vue, options = {}) {
    const Alert = Vue.extend(AlertComponent);
    const $vm = new Alert({
      el: document.createElement('div'),
      propsData: {
        ...options,
      },
    });
    document.body.appendChild($vm.$el);

    const alert = {
      show: show.bind($vm),
      hide: hide.bind($vm),
    };

    // 使用mixin会在所有创建的vue对象中添加$alert对象，我认为此处在prototype上添加更为合理
    // Vue.mixin({
    //   created() {
    //     this.$alert = alert;
    //   },
    // });

    if (!Vue.prototype.$alert) {
      Vue.prototype.$alert = alert; // eslint-disable-line
    }
  },
};

export default plugin;
