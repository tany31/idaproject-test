<template>
  <div class="products">
    <base-loader v-show="loading" />
    <div class="products__headline">
      <h1 class="products__title">Добавление товара</h1>
      <base-select v-model="sortValue" :options="$options.sortOptions" />
    </div>
    <div class="products__content">
      <div class="products__create-form">
        <create-product-form @create-product="createProduct" />
      </div>
      <transition-group name="product-list" class="products__items" tag="div">
        <div v-for="product in sortedProducts" :key="product.id" class="products__item">
          <product-card v-bind="product" @delete-product="deleteProduct(product.id)" />
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import CreateProductForm from '@/components/CreateProductForm.vue';
import ProductCard from '@/components/ProductCard.vue';
import BaseSelect from '@/components/common/BaseSelect.vue';
import BaseLoader from '@/components/common/BaseLoader.vue';

import { PRODUCTS_KEY } from '@/constants/localStorage';
import { saveStorageItem, loadStorageItem } from '@/utils/localStorage';

const SORT_DEFAULT = 'default';
const SORT_PRICE_MIN = 'priceMin';
const SORT_PRICE_MAX = 'priceMax';
const SORT_NAME = 'name';

const sortOptions = [
  { text: 'По умолчанию', value: SORT_DEFAULT },
  { text: 'По увеличению цены', value: SORT_PRICE_MIN },
  { text: 'По уменьшению цены', value: SORT_PRICE_MAX },
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
  components: { CreateProductForm, ProductCard, BaseSelect, BaseLoader },
  sortOptions,
  data() {
    return {
      products: [],
      sortValue: sortOptions[0].value,

      loading: false,
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
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.products = JSON.parse(loadStorageItem(PRODUCTS_KEY)) || [];
    }, 1000);
  },
  methods: {
    createProduct(newProduct) {
      this.loading = true;

      setTimeout(() => {
        this.products.push(newProduct);
        this.loading = false;
      }, 1000);
    },
    deleteProduct(id) {
      this.loading = true;

      setTimeout(() => {
        this.products = this.products.filter((p) => p.id !== id);
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins/media';

.products {
  &__headline {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: $--gutter;

    @include media('xs') {
      flex-direction: column;
    }
  }

  &__title {
    font-size: $--font-size-title;
    font-weight: $--font-weight-semiBold;

    @include media('xs') {
      margin-bottom: $--gutter;
    }
  }

  &__content {
    display: flex;

    @include media('xs') {
      flex-direction: column;
    }
  }

  &__create-form {
    position: sticky;
    top: $--gutter-md;
    height: 100%;
    width: 332px;
    flex-shrink: 0;
    margin-right: $--gutter;

    @include media('sm') {
      width: 300px;
    }

    @include media('xs') {
      position: static;
      margin-bottom: $--gutter;
      width: 100%;
    }
  }

  &__items {
    flex-grow: 1;
    display: flex;
    flex-flow: row wrap;
    margin: -$--gutter-sm;
  }

  &__item {
    transition: all 1s;
    padding: $--gutter-sm;
    width: 33.333%;

    @include media('sm') {
      width: 50%;
    }

    @include media('xxs') {
      width: 100%;
    }
  }
}

.product-list-enter-active,
.product-list-move {
  transition: all 1s;
}

.product-list-leave-active {
  transition: none;
  position: absolute;
  opacity: 0;
  overflow: hidden;
}

.product-list-enter {
  opacity: 0;
  transform: translateY(-50%);
}
</style>
