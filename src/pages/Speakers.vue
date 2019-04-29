<template>
  <div id="speakers">
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
import Title from '@/components/Title';
import Speaker from '@/components/Speaker';

export default {
  name: 'Speakers',
  components: {
    Title,
    Speaker,
  },
  data: () => ({
    speakers: [
      {
        file: 'roland.jpg',
        name: 'Roland Kuhn',
        twitter: 'rolandkuhn',
        github: 'rkuhn',
        linkedin: 'roland-kuhn-17828a57',
        website: 'https://rolandkuhn.com/',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 2',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 3',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 4',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 5',
      },
      {

        file: 'roland.jpg',
        name: 'Speaker 6',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 7',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 8',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 9',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 10',
      },
      {
        file: 'roland.jpg',
        name: 'Speaker 11',
      },
    ],
  }),
};
</script>

<style scoped>
@import '../variables';

#speakers {
  margin: var(--new-section-margin);
  width: 70%;
  display: flex;
  flex-direction: column;
}

.speakers-container {
  position: relative;
  padding: var(--space);
}

.speakers-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (--bellow-desktop) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.bottom-border {
  &::before,
  &::after {
    bottom: var(--space);
  }
}
</style>
