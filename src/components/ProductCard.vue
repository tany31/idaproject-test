<template>
  <base-card class="product-card">
    <img class="product-card__image" :src="imageLink" :alt="`${name} image`" />
    <div class="product-card__text">
      <div class="product-card__info">
        <p class="product-card__name" :title="name">{{ name }}</p>
        <p class="product-card__description">{{ description }}</p>
      </div>
      <p class="product-card__price">{{ formattedPrice }} руб.</p>
    </div>
    <base-button class="product-card__delete-button" icon red @click="deleteProduct"><icon-trash /></base-button>
  </base-card>
</template>

<script>
import IconTrash from '@/components/icons/IconTrash.vue';
import BaseCard from '@/components/common/BaseCard.vue';
import BaseButton from '@/components/common/BaseButton.vue';

import { separateThousands } from '@/utils/common';

export default {
  name: 'ProductCard',
  components: { BaseButton, BaseCard, IconTrash },
  props: {
    name: { type: String, default: '' },
    description: { type: String, default: '' },
    imageLink: { type: String, default: '' },
    price: { type: Number, default: 0 },
  },
  computed: {
    formattedPrice() {
      return separateThousands(this.price);
    },
  },
  methods: {
    deleteProduct() {
      this.$emit('delete-product');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins/text-clamp';

.product-card {
  $this: &;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: $--gutter $--gutter $--gutter-md;
  }

  &__image {
    flex-shrink: 0;
    width: 100%;
    height: 200px;
    display: block;
    object-fit: cover;
    border-top-left-radius: $--border-radius-base;
    border-top-right-radius: $--border-radius-base;
  }

  &__name {
    font-size: $--font-size-subtitle;
    font-weight: $--font-weight-semiBold;
    margin-bottom: $--gutter;
    word-break: break-word;
    @include text-clamp(2);
  }

  &__description {
    margin-bottom: $--gutter-lg;
    word-break: break-word;
    @include text-clamp(4);
  }

  &__price {
    font-size: $--font-size-title;
    font-weight: $--font-weight-semiBold;
  }

  &:hover,
  &:focus {
    #{$this}__delete-button {
      opacity: 1;
    }
  }

  &__delete-button {
    opacity: 0;
    position: absolute;
    top: -10px;
    right: -10px;
    transition: opacity 0.2s;
  }
}
</style>
