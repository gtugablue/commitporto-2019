<template>
  <div id="about">
    <div class="about-img">
      <div class="border upper-border"/>
      <img src="@/assets/aboutus.png"/>
      <div class="border bottom-border"/>
    </div>
    <div>
      <Title title="About us" subtitle="Welcome" />
      <div class="about-text">
        Commit Porto is a tech conference that brings together professionals who tackle challenges
         in software development with the latest technologies. It is an excellent opportunity for
         knowledge sharing and inherently promoting Porto as a vibrant and dynamic city for
         technology-based companies!
      </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';

export default {
  name: 'AboutUs',
  components: {
    Title,
  },
};
</script>

<style scoped>
@import '../variables';

#about {
  @apply --new-section;
  display: flex;
}

.about-img {
  position: relative;
  margin-right: var(--space);

  & img {
    margin: var(--space);
  }

  @media (--bellow-desktop) {
    display: none;
  }
}
.about-text {
  font-weight: var(--font-weight-light);
  font-size: var(--medium-font);
  line-height: 2rem;
}
</style>
