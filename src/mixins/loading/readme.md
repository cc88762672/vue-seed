# showLoading & hideLoading

## _e.g._

```javascript
import { showLoading, hideLoading } from '@/mixins';

export default {
  /* ... */
  mixins: [showLoading, hideLoading],
  methods: {
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

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
