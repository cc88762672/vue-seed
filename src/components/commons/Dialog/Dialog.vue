<template>
  <div>
    <transition name="mask">
      <div class="mask-layer" v-show="value && !noMask"></div>
    </transition>
    <transition name="dialog">
      <div class="dialog-wrap" v-show="value">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'VDialog',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
      noMask: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>

<style lang="scss">
  @import './dialogSlot.scss';
  .mask-layer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  .dialog-wrap {
    padding-top: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 80%;
    max-width: 300px;
    font-size: 14px;
    text-align: center;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 4px;
    z-index: 1000;
  }
  .mask-enter,
  .mask-leave-to {
    opacity: 0;
  }
  .mask-enter-active,
  .mask-leave-active {
    transition: opacity 0.3s;
  }
  .dialog-enter,
  .dialog-leave-to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.185);
  }
  .dialog-enter-active {
    transform: translate(-50%, -50%) scale(1);
    transition-property: transform, opacity;
    transition-duration: 0.4s;
  }
  .dialog-leave-active {
    transform: translate(-50%, -50%) scale(0.85);
    transition-property: transform, opacity;
    transition-duration: 0.3s;
  }
</style>
