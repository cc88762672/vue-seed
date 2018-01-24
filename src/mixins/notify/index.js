const showNotify = {
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
  },
};

export default showNotify;
