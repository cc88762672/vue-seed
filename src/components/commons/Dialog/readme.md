# Alert

## _e.g._

```html
<alert v-model="show" title="提示" content="提示内容"/>
```

```javascript
import { Alert } from '@/components/commons';

export default {
  /* ... */
  data() {
    return {
      show: false,
    };
  },
  components: {
    Alert,
  },
  /* ... */
};
```

## _Props_

| name         | type    | required | default     | description                       |
| ------------ | ------- | -------- | ----------- | --------------------------------- |
| value        | Boolean | false    | false       | 是否显示 alert，使用 v-model 绑定 |
| title        | String  | false    |             | alert 标题                        |
| content      | String  | true     |             | alert 内容                        |
| no-mask      | Boolean | false    | false       | 是否去除遮罩层                    |
| button-color | String  | false    | transparent | 按钮颜色                          |
| button-text  | String  | false    | 确定        | 按钮文案                          |

---

# Confirm

## _e.g._

```html
<confirm v-model="show" title="提示" content="提示内容" @on-confirm="onConfirm"/>
```

```javascript
import { Confirm } from '@/components/commons';

export default {
  /* ... */
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onConfirm() {
      // do something
    },
  },
  components: {
    Confirm,
  },
  /* ... */
};
```

## _Props_

| name          | type    | required | default     | description                         |
| ------------- | ------- | -------- | ----------- | ----------------------------------- |
| value         | Boolean | false    | false       | 是否显示 confirm，使用 v-model 绑定 |
| title         | String  | false    |             | confirm 标题                        |
| content       | String  | true     |             | confirm 内容                        |
| no-mask       | Boolean | false    | false       | 是否去除遮罩层                      |
| cancel-color  | String  | false    | transparent | 取消按钮颜色                        |
| cancel-text   | String  | false    | 取消        | 取消按钮文案                        |
| confirm-color | String  | false    | transparent | 确定按钮颜色                        |
| confirm-text  | String  | false    | 确定        | 确定按钮文案                        |

## _Events_

| name       | params | description        |
| ---------- | ------ | ------------------ |
| on-cancel  |        | 点击取消按钮时触发 |
| on-confirm |        | 点击确认按钮时触发 |

---

# Prompt

## _e.g._

```html
<prompt v-model="show" title="提示" content="提示内容" @on-confirm="onConfirm"/>
```

```javascript
import { Prompt } from '@/components/commons';

export default {
  /* ... */
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onConfirm(val) {
      // do something with val
      console.log(val);
    },
  },
  components: {
    Prompt,
  },
  /* ... */
};
```

## _Props_

| name          | type    | required | default     | description                        |
| ------------- | ------- | -------- | ----------- | ---------------------------------- |
| value         | Boolean | false    | false       | 是否显示 prompt，使用 v-model 绑定 |
| title         | String  | false    |             | prompt 标题                        |
| content       | String  | false    |             | prompt 内容                        |
| no-mask       | Boolean | false    | false       | 是否去除遮罩层                     |
| placeholder   | String  | false    |             | prompt 备注                        |
| cancel-color  | String  | false    | transparent | 取消按钮颜色                       |
| cancel-text   | String  | false    | 取消        | 取消按钮文案                       |
| confirm-color | String  | false    | transparent | 确定按钮颜色                       |
| confirm-text  | String  | false    | 确定        | 确定按钮文案                       |

## _Events_

| name       | params  | description        |
| ---------- | ------- | ------------------ |
| on-cancel  |         | 点击取消按钮时触发 |
| on-confirm | (value) | 点击确认按钮时触发 |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
