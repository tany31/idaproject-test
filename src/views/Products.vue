<template>
  <div class="products">
    <div class="products__headline">
      <h1 class="products__title">Добавление товара</h1>
      <base-select v-model="sortValue" :options="$options.sortOptions" />
    </div>
    <div class="products__content">
      <div class="products__create-form">
        <create-product-form @create-product="createProduct" />
      </div>
      <div class="products__items">
        <div v-for="product in sortedProducts" :key="product.id" class="products__item">
          <product-card v-bind="product" @delete-product="deleteProduct(product.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateProductForm from '@/components/CreateProductForm.vue';
import ProductCard from '@/components/ProductCard.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';

import { PRODUCTS_KEY } from '@/constants/localStorage';
import { saveStorageItem, loadStorageItem } from '@/utils/localStorage';

const SORT_DEFAULT = 'default';
const SORT_PRICE_MIN = 'priceMin';
const SORT_PRICE_MAX = 'priceMax';
const SORT_NAME = 'name';

const sortOptions = [
  { text: 'По умолчанию', value: SORT_DEFAULT },
  { text: 'По цене min', value: SORT_PRICE_MIN },
  { text: 'По цене max', value: SORT_PRICE_MAX },
  { text: 'По наименованию', value: SORT_NAME },
];

const sortModel = {
  [SORT_DEFAULT]: () => 0,
  [SORT_NAME]: (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
  [SORT_PRICE_MIN]: (a, b) => a.price - b.price,
  [SORT_PRICE_MAX]: (a, b) => b.price - a.price,
};

export default {
  name: 'Products',
  components: { CreateProductForm, ProductCard, BaseSelect },
  sortOptions,
  data() {
    return {
      products: [],
      sortValue: sortOptions[0].value,
    };
  },

  computed: {
    sortedProducts() {
      return [...this.products].sort(sortModel[this.sortValue]);
    },
  },

  watch: {
    products() {
      saveStorageItem(PRODUCTS_KEY, JSON.stringify(this.products));
    },
  },
  created() {
    this.products = JSON.parse(loadStorageItem(PRODUCTS_KEY)) || [];
  },
  methods: {
    createProduct(newProduct) {
      this.products.push(newProduct);
    },
    deleteProduct(id) {
      this.products = this.products.filter((p) => p.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  &__headline {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
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
    top: 24px;
    height: 100%;
    width: 332px;
    flex-shrink: 0;
    margin-right: 16px;
  }

  &__items {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    margin: -8px;
  }

  &__item {
    padding: 8px;
    width: 33.333%;
  }
}
</style>
