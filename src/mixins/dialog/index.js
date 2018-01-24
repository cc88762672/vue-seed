const showAlert = {
  methods: {
    showAlert(content, title = '提示', onShow, onHide) {
      this.$alert.show({
        title,
        content,
        onShow,
        onHide,
      });
    },
  },
};

const showConfirm = {
  methods: {
    showConfirm(content, title = '提示', onConfirm, onCancel) {
      this.$confirm.show({
        title,
        content,
        onCancel,
        onConfirm,
      });
    },
  },
};

const showPrompt = {
  methods: {
    showPrompt(placeholder, title = '提示', onConfirm, onCancel) {
      this.$prompt.show({
        title,
        placeholder,
        onCancel,
        onConfirm,
      });
    },
  },
};

export { showAlert, showConfirm, showPrompt };
