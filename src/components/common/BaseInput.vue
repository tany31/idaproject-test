<template>
  <base-form-item class="base-input" :error-message="errorMessage">
    <base-label v-if="label" :required="required">{{ label }}</base-label>
    <input
      v-model="localModel"
      class="base-input__control"
      :class="{ 'base-input__control--error': errorMessage }"
      type="text"
      :placeholder="placeholder"
    />
  </base-form-item>
</template>

<script>
import BaseLabel from '@/components/common/BaseLabel.vue';
import BaseFormItem from '@/components/common/BaseFormItem.vue';

export default {
  name: 'BaseInput',
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
.base-input {
  &__control {
    display: block;
    width: 100%;
    padding: 10px 16px;
    margin-top: 3px;
    border: 1px solid transparent;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: $--border-radius-base;
    font-family: inherit;
    font-size: $--font-size-medium;
    background: $--yellow-light;

    &:focus,
    &:active {
      outline: none;
      box-shadow: 0px 2px 5px 4px rgba(0, 0, 0, 0.1);
    }

    &::placeholder {
      color: $--gray300;
      font-size: $--font-size-medium;
    }

    &--error {
      border-color: $--red;
    }
  }
}
</style>
