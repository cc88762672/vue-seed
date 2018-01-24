# AlertPlugin

## _e.g._

```javascript
// main.js
import { AlertPlugin } from '@/plugins';
Vue.use(AlertPlugin);

// *.vue
export default {
  /* ... */
  methods: {
    showAlert(content, title = '提示', onShow, onHide) {
      this.$alert.show({
        title,
        content,
        onShow,
        onHide,
      });
    },
    handle() {
      this.showAlert('提示内容');
    },
  },
  /* ... */
};
```

## _Props_

| name         | type    | required | default     | description    |
| ------------ | ------- | -------- | ----------- | -------------- |
| title        | String  | false    |             | alert 标题     |
| content      | String  | true     |             | alert 内容     |
| no-mask      | Boolean | false    | false       | 是否去除遮罩层 |
| button-color | String  | false    | transparent | 按钮颜色       |
| button-text  | String  | false    | 确定        | 按钮文案       |

## _Events_

| name    | params | description |
| ------- | ------ | ----------- |
| on-show |        | 显示时触发  |
| on-hide |        | 隐藏时触发  |

---

# ConfirmPlugin

## _e.g._

```javascript
// main.js
import { ConfirmPlugin } from '@/plugins';
Vue.use(ConfirmPlugin);

// *.vue
export default {
  /* ... */
  methods: {
    showConfirm(content, title = '提示', onConfirm, onCancel) {
      this.$confirm.show({
        title,
        content,
        onCancel,
        onConfirm,
      });
    },
    handle() {
      this.showConfirm('确认信息', undefined, () => {});
    },
  },
  /* ... */
};
```

## _Props_

| name          | type    | required | default     | description    |
| ------------- | ------- | -------- | ----------- | -------------- |
| title         | String  | false    |             | confirm 标题   |
| content       | String  | true     |             | confirm 内容   |
| no-mask       | Boolean | false    | false       | 是否去除遮罩层 |
| cancel-color  | String  | false    | transparent | 取消按钮颜色   |
| cancel-text   | String  | false    | 取消        | 取消按钮文案   |
| confirm-color | String  | false    | transparent | 确定按钮颜色   |
| confirm-text  | String  | false    | 确定        | 确定按钮文案   |

## _Events_

| name       | params | description        |
| ---------- | ------ | ------------------ |
| on-show    |        | 显示时触发         |
| on-hide    |        | 隐藏时触发         |
| on-cancel  |        | 点击取消按钮时触发 |
| on-confirm |        | 点击确认按钮时触发 |

---

# PromptPlugin

## _e.g._

```javascript
// main.js
import { PromptPlugin } from '@/plugins';
Vue.use(PromptPlugin);

// *.vue
export default {
  /* ... */
  methods: {
    showPrompt(placeholder, title = '提示', onConfirm, onCancel) {
      this.$prompt.show({
        title,
        placeholder,
        onCancel,
        onConfirm,
      });
    },
    handle() {
      this.showPrompt('备注', undefined, res => {});
    },
  },
  /* ... */
};
```

## _Props_

| name          | type    | required | default     | description    |
| ------------- | ------- | -------- | ----------- | -------------- |
| title         | String  | false    |             | prompt 标题    |
| content       | String  | false    |             | prompt 内容    |
| no-mask       | Boolean | false    | false       | 是否去除遮罩层 |
| placeholder   | String  | false    |             | prompt 备注    |
| cancel-color  | String  | false    | transparent | 取消按钮颜色   |
| cancel-text   | String  | false    | 取消        | 取消按钮文案   |
| confirm-color | String  | false    | transparent | 确定按钮颜色   |
| confirm-text  | String  | false    | 确定        | 确定按钮文案   |

## _Events_

| name       | params  | description        |
| ---------- | ------- | ------------------ |
| on-show    |         | 显示时触发         |
| on-hide    |         | 隐藏时触发         |
| on-cancel  |         | 点击取消按钮时触发 |
| on-confirm | (value) | 点击确认按钮时触发 |

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
