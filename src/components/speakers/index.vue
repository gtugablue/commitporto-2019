<template>
  <div id="speakers" class="section">
    <Title title="Speakers" subtitle="Meet our" />
    <div class="speakers-container">
      <div class="border upper-border"/>
      <div class="speakers-list">
        <Speaker v-for="speaker in speakers" v-bind="speaker" :key="speaker.name"/>
      </div>
      <div class="border bottom-border"/>
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title';
import Speaker from './Speaker';
import { speakers } from './speakers.json';

export default {
  name: 'Speakers',
  components: {
    Title,
    Speaker,
  },
  data: () => ({ speakers }),
};
</script>

<style scoped>
@import '../../variables';

.speakers-container {
  position: relative;
  padding: var(--space);
}

.speakers-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (--bellow-desktop) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.bottom-border {
  &::before,
  &::after {
    bottom: 0;
  }
}
</style>
