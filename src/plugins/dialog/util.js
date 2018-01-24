const show = function(options) {
  if (typeof options !== 'object') {
    throw new Error("Expected Dialog's options be an object!");
  }

  const defaults = {};
  Object.entries(this.$options.props).forEach(([key, value]) => {
    if (typeof value.default !== 'undefined' && key !== 'value') {
      defaults[key] = value.default;
    }
  });
  const combinedOptions = { ...defaults, ...options };
  Object.entries(combinedOptions).forEach(([key, value]) => {
    this[key] = value;
  });

  options.onShow && options.onShow();

  this.$watcher && this.$watcher();
  this.$watcher = this.$watch('showValue', val => {
    !val && options.onHide && options.onHide();
  });

  this.$off(['on-cancel', 'on-confirm']);
  this.$on('on-cancel', () => {
    options.onCancel && options.onCancel();
  });
  this.$on('on-confirm', val => {
    options.onConfirm && options.onConfirm(val);
  });

  this.showValue = true;
};

const hide = function() {
  this.showValue = false;
};

export { show, hide };
