<template>
  <div class="v-notify">
    <transition :name="transition">
      <div class="notify-wrap" :class="positionClass" v-show="showValue && !!content">
        <div class="notify-content"></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Notify',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      content: String,
      position: String,
      time: {
        type: Number,
        default: 5000,
      },
    },
    computed: {
      transition() {
        if (this.position === 'bottom') return 'slide-in-up';
        return 'slide-in-down';
      },
      positionClass() {
        if (this.position === 'bottom') {
          return 'notify-bottom';
        }
        return 'notify-top';
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
  $notify-font-color: #d8d8d8;
  $notify-background-color: rgba(0, 0, 0, 0.6);
  .notify-wrap {
    padding: 8px 12px;
    position: fixed;
    left: 0;
    right: 0;
    line-height: 18px;
    font-size: 14px;
    text-align: center;
    color: $notify-font-color;
    background-color: $notify-background-color;
    &.notify-top {
      top: 0;
    }
    &.notify-bottom {
      bottom: 0;
    }
    .notify-content {
      word-wrap: break-word;
    }
  }
</style>
