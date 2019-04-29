<template>
  <div class="homepage">
    <div class="container">
      <div class="background">
        <div class="bckg-img" />
      </div>
      <div class="logo-section">
        <img class="logo" src="@/assets/logobrancohor.png"/>
        <div class="time">JUNE 22, 2019</div>
      </div>
    </div>
    <AboutUs />
    <Speakers />
    <Sponsors />
  </div>
</template>

<script>
import Button from '@/components/Button';
import AboutUs from '@/pages/AboutUs';
import Speakers from '@/pages/Speakers';

export default {
  name: 'Homepage',
  components: {
    Button,
    AboutUs,
    Speakers,
  },
};
</script>

<style scoped>
@import '../variables';

.homepage {
  display: flex;
  flex-direction: column;
}

.container {
  position: relative;
  height: 100vh;
  color: var(--white);
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media (--mobile) {
    height: 85vh;
  }
}

.bckg-img {
  background: var(--textColor) url('../assets/bckg.jpg') no-repeat center center / cover;
  width: 100%;
  height: 100vh;
  filter: var(--red-filter);
  opacity: 1;
  transition: opacity 1s ease;

  &.hide {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

.logo-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;

  & .logo {
    width: 40%;

    @media (--tablet) {
      width: 70%;
    }

    @media (--mobile) {
      width: 90%;
    }
  }

  & .time {
    font-family: var(--secondary-font);
    font-size: var(--medium-font);
    margin-top: 5px;
    margin-bottom: 10px;
  }
}

</style>
