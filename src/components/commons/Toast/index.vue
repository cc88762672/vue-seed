<template>
  <div class="v-toast">
    <transition :name="transition">
      <div class="toast-wrap" :class="positionClass" v-show="showValue">
        <i class="toast-icon iconfont" :class="iconClass" v-show="showIcon"></i>
        <div class="toast-content" v-show="!!content"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  const iconMap = {
    success: 'icon-smile',
    error: 'icon-cry',
    cancel: 'icon-embarrass',
  };
  export default {
    name: 'Toast',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      content: String,
      position: String,
      type: {
        type: String,
        default: 'text',
      },
      time: {
        type: Number,
        default: 2000,
      },
    },
    computed: {
      transition() {
        if (this.position === 'top') return 'slide-from-top';
        if (this.position === 'bottom') return 'slide-from-bottom';
        return 'fade';
      },
      positionClass() {
        if (this.position === 'top' || this.position === 'bottom') {
          return `toast-${this.position}`;
        }
        return 'toast-middle';
      },
      iconClass() {
        return iconMap[this.type];
      },
      showIcon() {
        return Object.keys(iconMap).indexOf(this.type) > -1;
      },
    },
    watch: {
      value(val) {
        this.showValue = val;
      },
      showValue(val) {
        this.$emit('input', val);
        if (val) {
          setTimeout(() => {
            this.showValue = !val;
          }, this.time);
        }
      },
    },
    created() {
      if (this.value) {
        this.showValue = this.value;
      }
    },
  };
</script>

<style lang="scss">
  $toast-font-color: #fff;
  $toast-background-color: rgba(0, 0, 0, 0.6);
  .toast-wrap {
    padding: 10px 12px;
    position: fixed;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    width: fit-content;
    max-width: 300px;
    font-size: 14px;
    text-align: center;
    color: $toast-font-color;
    background-color: $toast-background-color;
    border-radius: 4px;
    z-index: 1;
    &.toast-top {
      top: 30px;
    }
    &.toast-middle {
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
    &.toast-bottom {
      bottom: 30px;
    }
    .toast-icon {
      font-size: 32px;
    }
    .toast-content {
      min-width: 50px;
      word-wrap: break-word;
    }
  }
  .slide-from-top-enter-active {
    animation: slideFromTop 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
  }
  .slide-from-top-leave-active {
    animation: slideFromTop 0.3s cubic-bezier(0.36, 0.66, 0.04, 1) reverse;
  }
  .slide-from-bottom-enter-active {
    animation: slideFromBottom 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
  }
  .slide-from-bottom-leave-active {
    animation: slideFromBottom 0.3s cubic-bezier(0.36, 0.66, 0.04, 1) reverse;
  }
  @keyframes slideFromTop {
    from {
      transform: translate3d(-50%, -100%, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
  @keyframes slideFromBottom {
    from {
      transform: translate3d(-50%, 100%, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
</style>
