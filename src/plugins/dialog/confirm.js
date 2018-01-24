import { Confirm as ConfirmComponent } from '@/components/commons';
import { show, hide } from './util';

const plugin = {
  install(Vue, options = {}) {
    const Confirm = Vue.extend(ConfirmComponent);
    const $vm = new Confirm({
      el: document.createElement('div'),
      propsData: {
        ...options,
      },
    });
    document.body.appendChild($vm.$el);

    const confirm = {
      show: show.bind($vm),
      hide: hide.bind($vm),
    };

    // 使用mixin会在所有创建的vue对象中添加$confirm对象，我认为此处在prototype上添加更为合理
    // Vue.mixin({
    //   created() {
    //     this.$confirm = confirm;
    //   },
    // });

    if (!Vue.prototype.$confirm) {
      Vue.prototype.$confirm = confirm; // eslint-disable-line
    }
  },
};

export default plugin;
