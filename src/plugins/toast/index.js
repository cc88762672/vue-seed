import { Toast as ToastComponent } from '@/components/commons';

const plugin = {
  install(Vue, options = {}) {
    const Toast = Vue.extend(ToastComponent);
    const $vm = new Toast({
      el: document.createElement('div'),
      propsData: {
        ...options,
      },
    });
    document.body.appendChild($vm.$el);

    const toast = {
      show(options) {
        if (typeof options !== 'object') {
          throw new Error("Expected Toast's options be an object!");
        }

        const defaults = {};
        Object.entries($vm.$options.props).forEach(([key, value]) => {
          if (typeof value.default !== 'undefined' && key !== 'value') {
            defaults[key] = value.default;
          }
        });
        const combinedOptions = { ...defaults, ...options };
        Object.entries(combinedOptions).forEach(([key, value]) => {
          $vm[key] = value;
        });

        options.onShow && options.onShow();

        $vm.$watcher && $vm.$watcher();
        $vm.$watcher = $vm.$watch('showValue', val => {
          !val && options.onHide && options.onHide();
        });

        $vm.showValue = true;
      },
      hide() {
        $vm.showValue = false;
      },
    };

    // 使用mixin会在所有创建的vue对象中添加$toast对象，我认为此处在prototype上添加更为合理
    // Vue.mixin({
    //   created() {
    //     this.$toast = toast;
    //   },
    // });

    if (!Vue.prototype.$toast) {
      Vue.prototype.$toast = toast; // eslint-disable-line
    }
  },
};

export default plugin;
