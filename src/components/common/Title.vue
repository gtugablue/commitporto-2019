<template>
  <div class="title-section">
    <div class="subtitle">{{subtitle}}</div>
    <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: ['title', 'subtitle'],
};
</script>

<style scoped>
@import '../../variables';

.title-section {
  margin-bottom: var(--space);
}

.subtitle {
  color: var(--text-color);
  text-transform: uppercase;
  font-size: 1.5rem; /* 24px */
  font-weight: var(--font-weight-light);

  @media (--bellow-desktop) {
    font-size: 1rem; /* 16px */
  }
}

.title {
  color: var(--main-color);
  text-transform: capitalize;
  font-size: 3.12rem; /* 50px */
  font-weight: var(--font-weight-light);

  @media (--bellow-desktop) {
    font-size: 2rem; /* 32px */
  }
}
</style>
