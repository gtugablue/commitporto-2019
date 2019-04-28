<template>
  <div class="about">
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

.about {
  margin: var(--new-section-margin);
  width: 60%;
  display: flex;
}

.about-img {
  position: relative;
  margin-right: var(--space);

  & img {
    margin: var(--space);
  }
}
.border {
  &::before {
    content: '';
    position: absolute;
    background-color: var(--mainColor);
  }

  &::after {
    content: '';
    position: absolute;
    background-color: var(--mainColor);
  }
}

.upper-border {
  &::before {
    top: 0;
    left: 0;
    width: 15px;
    height: 200px;
  }

  &::after {
    top: 0;
    left: 0;
    width: 150px;
    height: 15px;
  }
}

.bottom-border {
  &::before {
    bottom: 0;
    right: 0;
    width: 15px;
    height: 100px;
  }

  &::after {
    bottom: 0;
    right: 0;
    width: 150px;
    height: 15px;
  }
}

.about-text {
  font-weight: var(--font-weight-light);
  line-height: 2rem;
  font-size: var(--medium-font);
}
</style>
