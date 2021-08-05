<template>
  <label class="base-label" :class="{ 'base-label--required': required }">
    <slot />
  </label>
</template>

<script>
export default {
  name: 'BaseLabel',
  props: {
    required: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.base-label {
  font-size: $--font-size-small;
  position: relative;

  &--required:after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: $--red;
  }
}
</style>
