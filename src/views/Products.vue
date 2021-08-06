<template>
  <div class="products">
    <div class="products__headline">
      <h1 class="products__title">Добавление товара</h1>
    </div>
    <div class="products__content">
      <div class="products__create-form">
        <create-product-form @create-product="createProduct" />
      </div>
      <div class="products__items">
        <div v-for="product in products" :key="product.id" class="products__item">
          <product-card v-bind="product" @delete-product="deleteProduct(product.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CreateProductForm from '@/components/CreateProductForm.vue';
import ProductCard from '@/components/ProductCard.vue';

import { PRODUCTS_KEY } from '@/constants/localStorage';
import { saveStorageItem, loadStorageItem } from '@/utils/localStorage';

export default {
  name: 'Products',
  components: { CreateProductForm, ProductCard },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imageLink:
            'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 2,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imageLink: 'https://i.ibb.co/HPdYXpF/Rectangle-31.jpg',
        },
        {
          id: 3,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imageLink:
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        },
        {
          id: 4,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 10000,
          imageLink: 'https://i.ibb.co/HPdYXpF/Rectangle-31.jpg',
        },
        {
          id: 5,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 1000000,
          imageLink: 'https://i.ibb.co/HPdYXpF/Rectangle-31.jpg',
        },
        {
          id: 6,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 1000,
          imageLink: 'https://i.ibb.co/HPdYXpF/Rectangle-31.jpg',
        },
        {
          id: 7,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 1,
          imageLink: 'https://i.ibb.co/HPdYXpF/Rectangle-31.jpg',
        },
        {
          id: 8,
          name: 'Наименование товара',
          description:
            'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
          price: 100,
          imageLink: 'https://i.ibb.co/HPdYXpF/Rectangle-31.jpg',
        },
      ],
    };
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
