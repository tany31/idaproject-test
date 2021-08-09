<template>
  <base-input ref="input" :value="formattedValue" v-bind="$attrs" v-on="inputListeners" />
</template>

<script>
import BaseInput from '@/components/common/BaseInput.vue';
import { separateThousands } from '@/utils/common';

export default {
  name: 'BasePriceInput',
  components: { BaseInput },
  model: {
    prop: 'value',
    event: 'update:value',
  },
  props: {
    value: { type: [String, Number], default: null },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit('update:value', v);
      },
    },

    formattedValue() {
      return separateThousands(this.value);
    },

    inputListeners() {
      return {
        ...this.$listeners,
        'update:value': this.handleInput,
      };
    },
  },
  methods: {
    handleInput(value) {
      this.localValue = value.replace(/\D+/g, '');
      this.$refs.input.$forceUpdate();
      this.updateCursor();
    },

    updateCursor() {
      const input = this.$refs.input.$refs.control;
      const lastValueLength = this.formattedValue.length;
      const positionFromEnd = lastValueLength - input.selectionEnd;

      this.$nextTick(() => {
        const newValueLength = this.formattedValue.length;
        const cursorPosition = Math.max(
          newValueLength - positionFromEnd + Math.sign(lastValueLength - newValueLength),
          0
        );

        this.setCursor(input, cursorPosition);
      });
    },

    setCursor(el, position) {
      if (el === document.activeElement) {
        el.setSelectionRange(position, position);
      }
    },
  },
};
</script>
