# Notify

## _e.g._

```html
<notify v-model="show" content="提示内容"/>
```

```javascript
import { Notify } from '@/components/commons';

export default {
  /* ... */
  data() {
    return {
      show: false,
    };
  },
  components: {
    Notify,
  },
  /* ... */
};
```

## _Props_

| name     | type    | required | default | description                        |
| -------- | ------- | -------- | ------- | ---------------------------------- |
| value    | Boolean | false    | false   | 是否显示 notify，使用 v-model 绑定 |
| content  | String  | true     |         | notify 文字内容                    |
| position | String  | false    | top     | notify 位置，有 top/bottom 可选    |
| time     | Number  | false    | 5000    | 持续时间                           |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
