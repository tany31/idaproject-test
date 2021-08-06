<template>
  <base-card>
    <form class="create-product-form" @submit.prevent="createProduct">
      <base-input
        v-model="model.name"
        placeholder="Введите наименование товара"
        label="Наименование товара"
        required
        error-message="Поле является обязательным"
      />
      <base-text-area v-model="model.description" label="Описание товара" placeholder="Введите описание товара" />
      <base-input
        v-model="model.imageLink"
        placeholder="Введите ссылку"
        label="Ссылка на изображение товара"
        required
      />
      <base-input v-model="model.price" placeholder="Введите цену" label="Цена товара" required />

      <base-button class="create-product-form__button" primary type="submit">Добавить товар</base-button>
    </form>
  </base-card>
</template>

<script>
import BaseInput from '@/components/common/BaseInput.vue';
import BaseTextArea from '@/components/common/BaseTextArea.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseCard from '@/components/common/BaseCard.vue';

function generateModel() {
  return {
    name: '',
    description: '',
    imageLink: '',
    price: '',
  };
}

export default {
  name: 'CreateProductForm',
  components: { BaseInput, BaseTextArea, BaseButton, BaseCard },
  data() {
    return {
      model: generateModel(),
    };
  },
  methods: {
    createProduct() {
      this.$emit('create-product', { ...this.model, price: +this.model.price, id: Date.now() });
      this.model = generateModel();
    },
  },
};
</script>

<style lang="scss" scoped>
.create-product-form {
  padding: 16px 24px;

  &__button {
    margin-top: 8px;
  }
}
</style>
