<template>
  <div class="products">
    <div class="products__headline">
      <h1 class="products__title">Добавление товара</h1>
    </div>
    <div class="products__content">
      <div class="products__create-form">form</div>
      <div class="products__items">items</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Products',
};
</script>

<style lang="scss" scoped>
.products {
  &__headline {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: $--font-size-title;
    font-weight: $--font-weight-semiBold;
  }

  &__content {
    display: flex;
  }

  &__create-form {
    position: sticky;
    top: 1rem;
    height: 100%;
    width: 332px;
    flex-shrink: 0;
  }

  &__items {
    flex-grow: 1;
  }
}
</style>
