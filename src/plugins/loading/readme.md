# LoadingPlugin

## _e.g._

```javascript
// main.js
import { LoadingPlugin } from '@/plugins';
Vue.use(LoadingPlugin);

// *.vue
export default {
  /* ... */
  methods: {
    showLoading(onShow, onHide, type = 'blink', useSvg = false) {
      this.$loading.show({
        type,
        useSvg,
        onShow,
        onHide,
      });
    },
    hideLoading() {
      this.$loading.hide();
    },
    showHandle() {
      this.showLoading();
    },
    hideHandle() {
      this.hideLoading();
    },
  },
  /* ... */
};
```

## _Props_

| name    | type    | required | default | description                                                                 |
| ------- | ------- | -------- | ------- | --------------------------------------------------------------------------- |
| use-svg | Boolean | false    | false   | 是否使用 svg loading，默认使用 css loading                                  |
| type    | String  | false    | blink   | loading 类型，只有使用 css loading 时有效，默认只有 blink 可选 ，可自行扩展 |

## _Events_

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
