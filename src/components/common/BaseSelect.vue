<template>
  <div class="base-select">
    <div class="base-select__arrow"><icon-arrow-down /></div>
    <select v-model="localModel" class="base-select__control">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
import IconArrowDown from '@/components/icons/IconArrowDown.vue';

export default {
  name: 'BaseSelect',
  components: { IconArrowDown },
  props: {
    value: { type: [String, Number], default: '' },
    options: { type: Array, default: () => [] },
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
.base-select {
  position: relative;
  color: $--gray300;

  &__arrow {
    pointer-events: none;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    height: 100%;
    padding: 10px 16px;
  }

  &__control {
    appearance: none;
    color: inherit;
    border: none;
    padding: 10px 28px;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    cursor: pointer;
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    &:focus,
    &active {
      outline: none;
      box-shadow: 0px 2px 5px 4px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
