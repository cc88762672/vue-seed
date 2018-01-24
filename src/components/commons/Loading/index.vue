<template>
  <div class="v-loading">
    <transition name="fade">
      <div class="loading-mask" v-show="showValue">
        <embed class="svg-loading" :src="require('../../../assets/images/loading/rolling.svg')" type="image/svg+xml" v-if="useSvg">
        <div class="css-loading" :class="type + '-loading'" v-else></div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      useSvg: {
        type: Boolean,
        default: false,
      },
      type: {
        type: String,
        default: 'blink',
      },
    },
    watch: {
      value(val) {
        this.showValue = val;
      },
      showValue(val) {
        this.$emit('input', val);
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
  $blink-loading-color: rgba(157, 187, 223, 1);
  $blink-loading-highlight-color: rgba(157, 187, 223, 0.6);
  .loading-mask {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    .css-loading {
      align-self: center;
      margin-bottom: 100px;
    }
    .svg-loading {
      align-self: center;
      margin-bottom: 100px;
      width: 20%;
    }
  }
  .blink-loading {
    width: 1em;
    height: 1em;
    font-size: 12px;
    border-radius: 50%;
    background: transparent;
    box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    animation: blink 1s steps(1, start) infinite, contrarotate 8s linear infinite;
    &:after {
      content: '';
      position: absolute;
      left: -1em;
      top: -1em;
      width: 3em;
      height: 3em;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
    }
  }
  @keyframes blink {
    0% {}
    12.5% {
      box-shadow: 0 -1.5em $blink-loading-highlight-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    }
    25% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-highlight-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    }
    37.5% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-highlight-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    }
    50% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-highlight-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    }
    62.5% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-highlight-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    }
    75% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-highlight-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-color;
    }
    87.5% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-highlight-color, -1.06066em -1.06066em $blink-loading-color;
    }
    100% {
      box-shadow: 0 -1.5em $blink-loading-color, 1.06066em -1.06066em $blink-loading-color, 1.5em 0 $blink-loading-color, 1.06066em 1.06066em $blink-loading-color, 0 1.5em $blink-loading-color, -1.06066em 1.06066em $blink-loading-color, -1.5em 0 $blink-loading-color, -1.06066em -1.06066em $blink-loading-highlight-color;
    }
  }
  @keyframes contrarotate {
    from {}
    to {
      transform: rotate(-360deg);
    }
  }
</style>
