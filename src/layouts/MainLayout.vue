<template>
  <main class="main-layout">
    <div class="main-layout__content">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'MainLayout',
};
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  justify-content: center;

  padding: 2rem;

  &__content {
    width: 100%;
    max-width: 1440px;
  }
}
</style>
