import { Loading as LoadingComponent } from '@/components/commons';

const plugin = {
  install(Vue, options = {}) {
    const Loading = Vue.extend(LoadingComponent);
    const $vm = new Loading({
      el: document.createElement('div'),
      propsData: {
        ...options,
      },
    });
    document.body.appendChild($vm.$el);

    const loading = {
      show(options) {
        if (typeof options !== 'object') {
          throw new Error("Expected Loading's options be an object!");
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

    // 使用mixin会在所有创建的vue对象中添加$loading对象，我认为此处在prototype上添加更为合理
    // Vue.mixin({
    //   created() {
    //     this.$loading = loading;
    //   },
    // });

    if (!Vue.prototype.$loading) {
      Vue.prototype.$loading = loading; // eslint-disable-line
    }
  },
};

export default plugin;
