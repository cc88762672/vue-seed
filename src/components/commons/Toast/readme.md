# Toast

## _e.g._

```html
<toast v-model="show" type="success" position="bottom" content="提示内容"/>
```

```javascript
import { Toast } from '@/components/commons';

export default {
  /* ... */
  data() {
    return {
      show: false,
    };
  },
  components: {
    Toast,
  },
  /* ... */
};
```

## _Props_

| name     | type    | required | default | description                                     |
| -------- | ------- | -------- | ------- | ----------------------------------------------- |
| value    | Boolean | false    | false   | 是否显示 toast，使用 v-model 绑定               |
| content  | String  | false    |         | toast 文字内容                                  |
| position | String  | false    | middle  | toast 位置，有 top/middle/bottom 可选，默认居中 |
| type     | String  | false    | text    | toast 类型，有 success/error/cancel/text 可选   |
| time     | Number  | false    | 2000    | 持续时间                                        |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
