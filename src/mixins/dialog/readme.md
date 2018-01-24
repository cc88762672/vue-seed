# showAlert

## _e.g._

```javascript
import { showAlert } from '@/mixins';

export default {
  /* ... */
  mixins: [showAlert],
  methods: {
    handle() {
      this.showAlert('提示内容');
    },
  },
  /* ... */
};
```

---

# showConfirm

## _e.g._

```javascript
import { showConfirm } from '@/mixins';

export default {
  /* ... */
  mixins: [showConfirm],
  methods: {
    handle() {
      this.showConfirm('确认信息', undefined, () => {});
    },
  },
  /* ... */
};
```

---

# showPrompt

## _e.g._

```javascript
import { showPrompt } from '@/mixins';

export default {
  /* ... */
  mixins: [showPrompt],
  methods: {
    handle() {
      this.showPrompt('备注', undefined, res => {});
    },
  },
  /* ... */
};
```

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
