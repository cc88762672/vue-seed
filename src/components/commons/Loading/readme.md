# Loading

## _e.g._

```html
<!-- 使用 css loading -->
<loading v-model="show" type="blink"/>

<!-- 使用 svg loading -->
<loading v-model="show" use-svg/>
```

```javascript
import { Loading } from '@/components/commons';

export default {
  /* ... */
  data() {
    return {
      show: false,
    };
  },
  components: {
    Loading,
  },
  /* ... */
};
```

## _Props_

| name    | type    | required | default | description                                                                 |
| ------- | ------- | -------- | ------- | --------------------------------------------------------------------------- |
| value   | Boolean | false    | false   | 是否显示 loading，使用 v-model 绑定                                         |
| use-svg | Boolean | false    | false   | 是否使用 svg loading，默认使用 css loading                                  |
| type    | String  | false    | blink   | loading 类型，只有使用 css loading 时有效，默认只有 blink 可选 ，可自行扩展 |

## _More info_

* css loading 扩展
  * 默认 css loading 使用`blink-loading`样式，如果不想使用该 loading，可以自己添加一个新的 css loading，命名方式遵循`*-loading`，然后使用时设置`type="*"`即可
* svg loading 扩展
  * 默认 svg loading 使用 rolling.svg，如果不想使用该 loading，可以在网上找一个想要的 svg loading，添加到 assets/images/loading/ 目录下，再修改
    Loading/index.vue 文件中 embed 标签的 src 为对应的 svg 文件路径，然后使用时添加`use-svg`属性即可

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
