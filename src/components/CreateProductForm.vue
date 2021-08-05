<template>
  <form class="create-product-form">
    <base-input v-model="model.name" placeholder="Введите наименование товара" label="Наименование товара" required />
    <base-text-area v-model="model.description" label="Описание товара" placeholder="Введите описание товара" />
    <base-input v-model="model.imageLink" placeholder="Введите ссылку" label="Ссылка на изображение товара" required />
    <base-input v-model="model.price" placeholder="Введите цену" label="Цена товара" required />

    <base-button class="create-product-form__button" primary>Добавить товар</base-button>
  </form>
</template>

<script>
import BaseInput from '@/components/common/BaseInput.vue';
import BaseTextArea from '@/components/common/BaseTextArea.vue';
import BaseButton from '@/components/common/BaseButton.vue';

export default {
  name: 'CreateProductForm',
  components: { BaseInput, BaseTextArea, BaseButton },
  data() {
    return {
      model: {
        name: '',
        description: '',
        imageLink: '',
        price: '',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.create-product-form {
  padding: 15px 24px;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;

  &__button {
    margin-top: 8px;
  }
}
</style>
