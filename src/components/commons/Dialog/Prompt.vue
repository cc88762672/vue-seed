<template>
  <v-dialog class="v-prompt" :no-mask="noMask" v-model="showValue">
    <div class="dialog-title" v-if="!!title"></div>
    <div class="dialog-content" @touchstart.prevent="setInputFocus">
      <div class="content-input" contenteditable :placeholder="placeholder" @input="setInputValue($event.target.innerText)" ref="input"></div>
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
    name: 'Prompt',
    data() {
      return {
        showValue: false,
        inputValue: '',
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
      placeholder: {
        type: String,
        default: '',
      },
    },
    methods: {
      setInputFocus() {
        this.$refs.input.focus();
      },
      setInputValue(val) {
        this.inputValue = val.trim();
      },
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
        this.$emit('on-confirm', this.inputValue);
        this.hide();
      },
    },
    watch: {
      value(val) {
        this.showValue = val;
      },
      showValue(val) {
        this.$emit('input', val);
        if (val) {
          this.$refs.input.innerText = '';
          this.inputValue = '';
          setTimeout(() => {
            if (this.$refs.input) {
              this.setInputFocus();
            }
          }, 300);
        }
      },
    },
    components: {
      VDialog,
    },
    created() {
      this.value && (this.showValue = this.value);
      this.content && (this.inputValue = this.content);
    },
  };
</script>
