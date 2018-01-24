import { Prompt as PromptComponent } from '@/components/commons';
import { show, hide } from './util';

const plugin = {
  install(Vue, options = {}) {
    const Prompt = Vue.extend(PromptComponent);
    const $vm = new Prompt({
      el: document.createElement('div'),
      propsData: {
        ...options,
      },
    });
    document.body.appendChild($vm.$el);

    const prompt = {
      show: show.bind($vm),
      hide: hide.bind($vm),
      setInputValue(val) {
        $vm.$nextTick(() => {
          setTimeout(() => {
            $vm.setInputValue(val);
          }, 0);
        });
      },
    };

    // 使用mixin会在所有创建的vue对象中添加$prompt对象，我认为此处在prototype上添加更为合理
    // Vue.mixin({
    //   created() {
    //     this.$prompt = prompt;
    //   },
    // });

    if (!Vue.prototype.$prompt) {
      Vue.prototype.$prompt = prompt; // eslint-disable-line
    }
  },
};

export default plugin;
