# API 调用写法

## _e.g._

```javascript
// *.vue
export default {
  /* ... */
  methods: {
    getMethod() {
      const url = `${$api.login}/123`;
      $axios
        .get(url)
        .then(res => {
          // 注意：res即为response.data，不再需要进行response.data.success判断
          console.log(res);
        })
        .catch(err => {
          // 所有error情况统一在此处理，包括返回状态码为200，但response.data.success为false的情况
          console.log(err);
        });
    },
    postMethod() {
      const url = $api.login;
      const params = {
        props,
      };
      $axios
        .post(url, params)
        .then(res => {
          // 注意：res即为response.data，不再需要进行response.data.success判断
          console.log(res);
        })
        .catch(err => {
          // 所有error情况统一在此处理，包括返回状态码为200，但response.data.success为false的情况
          console.log(err);
        });
    },
  },
  /* ... */
};
```

---

**如果你的编辑器没有 markdown 文件预览功能，可以复制  文件内容到[作业部落](https://www.zybuluo.com)去查看**
