<template>
  <button
    class="base-button"
    :type="type"
    :class="{
      'base-button--primary': primary,
      'base-button--red': red,
      'base-button--icon': icon,
      'base-button--disabled': disabled,
    }"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    type: { type: String, default: 'Button' },
    icon: { type: Boolean, default: false },
    red: { type: Boolean, default: false },
    primary: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.base-button {
  width: 100%;
  background: none;
  border: none;
  padding: 10px;
  border-radius: $--border-radius-large;
  cursor: pointer;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.8;
  }

  &--primary {
    background: $--green;
    color: $--white;
  }

  &--red {
    background: $--red;
    color: $--white;
  }

  &--icon {
    width: auto;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &--disabled {
    background: $--gray;
    color: $--gray300;
    cursor: default;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
