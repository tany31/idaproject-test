<template>
  <div class="base-form-item">
    <slot />
    <small class="base-form-item__error">{{ errorMessage }}</small>
  </div>
</template>

<script>
export default {
  name: 'BaseFormItem',
  props: {
    errorMessage: { type: String, default: '' },
  },
};
</script>

<style lang="scss" scoped>
.base-form-item {
  &__error {
    display: block;
    min-height: 13px;
    margin-top: 3px;
    font-size: $--font-size-extra-small;
    color: $--red;
  }
}
</style>
