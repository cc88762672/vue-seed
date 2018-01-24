# NotifyPlugin

## _e.g._

```javascript
// main.js
import { NotifyPlugin } from '@/plugins';
Vue.use(NotifyPlugin);

// *.vue
export default {
  /* ... */
  methods: {
    showNotify(content, position = 'top', time = 5000, onShow, onHide) {
      this.$notify.show({
        content,
        position,
        time,
        onShow,
        onHide,
      });
    },
    handle() {
      this.showNotify('提示内容');
    },
  },
  /* ... */
};
```

## _Props_

| name     | type   | required | default | description                     |
| -------- | ------ | -------- | ------- | ------------------------------- |
| content  | String | true     |         | notify 文字内容                 |
| position | String | false    | top     | notify 位置，有 top/bottom 可选 |
| time     | Number | false    | 5000    | 持续时间                        |

## _Events_

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
