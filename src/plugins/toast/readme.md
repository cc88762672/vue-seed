# ToastPlugin

## _e.g._

```javascript
// main.js
import { ToastPlugin } from '@/plugins';
Vue.use(ToastPlugin);

// *.vue
export default {
  /* ... */
  methods: {
    showToast(content, position = 'bottom', type = 'text', time = 2000, onShow, onHide) {
      this.$toast.show({
        content,
        position,
        type,
        time,
        onShow,
        onHide,
      });
    },
    handle() {
      this.showToast('提示内容');
    },
  },
  /* ... */
};
```

## _Props_

| name     | type   | required | default | description                                   |
| -------- | ------ | -------- | ------- | --------------------------------------------- |
| content  | String | false    |         | toast 文字内容                                |
| position | String | false    | middle  | toast 位置，有 top/middle/bottom 可选         |
| type     | String | false    | text    | toast 类型，有 success/error/cancel/text 可选 |
| time     | Number | false    | 2000    | 持续时间                                      |

## _Events_

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
