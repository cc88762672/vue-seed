const showToast = {
  methods: {
    showToast(content, position = 'bottom', type = 'text', time = 2000, onShow, onHide) {
      this.$toast.show({
        content,
        position,
        type,
        time,
        onShow,
        onHide,
      });
    },
  },
};

export default showToast;
