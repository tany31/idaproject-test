<template>
  <button
    class="base-button"
    :class="{ 'base-button--primary': primary, 'base-button--disabled': disabled }"
    :type="type"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: { type: String, default: 'Button' },
    primary: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  width: 100%;
  background: none;
  border: 1px solid;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.8;
  }

  &--primary {
    background: $--green;
    border-color: $--green;
    color: $--white;
  }

  &--disabled {
    background: $--gray;
    border-color: $--gray;
    color: $--gray300;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
