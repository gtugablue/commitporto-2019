<template>
  <div class="about">
    <div class="about-img">
      <div class="border upper-border"/>
      <img src="@/assets/aboutus.png"/>
      <div class="border bottom-border"/>
    </div>
    <div>Commit Porto is a tech conference that brings together professionals who tackle challenges in software development with the latest technologies. It is an excellent opportunity for knowledge sharing and inherently promoting Porto as a vibrant and dynamic city for technology-based companies!</div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
@import '../variables';
  .about {
    margin: var(--new-section-margin) auto;
    width: 60%;
    display: flex;
  }

  .about-img {
    position: relative;

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
      width: 20px;
      height: 250px;
    }

    &::after {
      top: 0;
      left: 0;
      width: 150px;
      height: 20px;
    }
  }

  .bottom-border {
    &::before {
      bottom: 0;
      right: 0;
      width: 20px;
      height: 100px;
    }

    &::after {
      bottom: 0;
      right: 0;
      width: 150px;
      height: 20px;
    }
  }

</style>
