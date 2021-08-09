<template>
  <base-form-item class="base-textarea">
    <base-label v-if="label">{{ label }}</base-label>
    <textarea v-model="localModel" rows="6" class="base-textarea__control" :placeholder="placeholder"></textarea>
  </base-form-item>
</template>

<script>
import BaseFormItem from '@/components/common/BaseFormItem.vue';
import BaseLabel from '@/components/common/BaseLabel.vue';

export default {
  name: 'BaseTextarea',
  components: { BaseFormItem, BaseLabel },
  model: {
    prop: 'value',
    event: 'update:value',
  },
  props: {
    value: { type: String, default: '' },
    label: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    errorMessage: { type: String, default: '' },
    required: { type: Boolean, default: false },
  },
  computed: {
    localModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('update:value', value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.base-textarea {
  &__control {
    display: block;
    width: 100%;
    padding: 10px $--gutter;
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: $--border-radius-base;
    font-size: $--font-size-medium;
    font-family: inherit;
    background: $--yellow-light;
    resize: none;

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0px 2px 5px 4px rgba(0, 0, 0, 0.1);
    }

    &::placeholder {
      font-size: $--font-size-medium;
      color: $--gray300;
    }

    &--error {
      border-color: $--red;
    }
  }
}
</style>
