<template>
  <base-card>
    <validation-observer ref="validationForm" v-slot="{ handleSubmit, invalid }">
      <form class="create-product-form" @submit.prevent="handleSubmit(createProduct)">
        <validation-provider v-slot="{ errors }" rules="required" name="name">
          <base-input
            v-model="model.name"
            placeholder="Введите наименование товара"
            label="Наименование товара"
            required
            :error-message="errors[0]"
          />
        </validation-provider>
        <base-text-area v-model="model.description" label="Описание товара" placeholder="Введите описание товара" />
        <validation-provider v-slot="{ errors }" rules="required" name="image">
          <base-input
            v-model="model.imageLink"
            placeholder="Введите ссылку"
            label="Ссылка на изображение товара"
            required
            :error-message="errors[0]"
          />
        </validation-provider>

        <validation-provider v-slot="{ errors }" rules="required" name="price">
          <base-price-input
            v-model="model.price"
            placeholder="Введите цену"
            label="Цена товара"
            required
            :error-message="errors[0]"
          />
        </validation-provider>

        <base-button class="create-product-form__button" :disabled="invalid" primary type="submit"
          >Добавить товар</base-button
        >
      </form>
    </validation-observer>
  </base-card>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import BaseInput from '@/components/common/BaseInput.vue';
import BaseTextArea from '@/components/common/BaseTextArea.vue';
import BaseButton from '@/components/common/BaseButton.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BasePriceInput from '@/components/common/BasePriceInput.vue';

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
  components: { BaseInput, BasePriceInput, BaseTextArea, BaseButton, BaseCard, ValidationProvider, ValidationObserver },
  data() {
    return {
      model: generateModel(),
    };
  },
  methods: {
    createProduct() {
      this.$emit('create-product', { ...this.model, price: +this.model.price, id: Date.now() });
      this.model = generateModel();
      this.$refs.validationForm.reset();
    },
  },
};
</script>

<style lang="scss" scoped>
.create-product-form {
  padding: $--gutter $--gutter-md;

  &__button {
    margin-top: $--gutter-sm;
  }
}
</style>
