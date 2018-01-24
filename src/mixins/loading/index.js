const showLoading = {
  methods: {
    showLoading(onShow, onHide, type = 'blink', useSvg = false) {
      this.$loading.show({
        type,
        useSvg,
        onShow,
        onHide,
      });
    },
  },
};

const hideLoading = {
  methods: {
    hideLoading() {
      this.$loading.hide();
    },
  },
};

export { showLoading, hideLoading };
