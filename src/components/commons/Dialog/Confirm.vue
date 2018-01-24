<template>
  <v-dialog class="v-confirm" :no-mask="noMask" v-model="showValue">
    <div class="dialog-title" v-if="!!title"></div>
    <div class="dialog-content">
      <div v-html="content"></div>
    </div>
    <div class="dialog-buttons border-top-line">
      <a href="javascript:;" class="button-cancel border-right-line" @click="cancel"></a>
      <a href="javascript:;" class="button-confirm" @click="confirm"></a>
    </div>
  </v-dialog>
</template>

<script>
  import VDialog from './Dialog';

  export default {
    name: 'Confirm',
    data() {
      return {
        showValue: false,
      };
    },
    props: {
      value: Boolean,
      title: String,
      content: String,
      noMask: Boolean,
      cancelColor: {
        type: String,
        default: 'transparent',
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      confirmColor: {
        type: String,
        default: 'transparent',
      },
      confirmText: {
        type: String,
        default: '确定',
      },
    },
    methods: {
      hide() {
        this.showValue = false;
      },
      cancel() {
        if (!this.showValue) return;
        this.$emit('on-cancel');
        this.hide();
      },
      confirm() {
        if (!this.showValue) return;
        this.$emit('on-confirm');
        this.hide();
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
    components: {
      VDialog,
    },
    created() {
      if (this.value) {
        this.showValue = this.value;
      }
    },
  };
</script>
