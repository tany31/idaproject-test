<template>
  <div id="app">
    <main-layout>
      <products />
    </main-layout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue';
import Products from '@/views/Products.vue';

export default {
  name: 'App',
  components: { Products, MainLayout },
};
</script>
