<template>
  <div id="sponsors" class="section">
    <Title title="Sponsors" subtitle="Thanks to our" />
    <div class="sponsor diamond">
      <Sponsor
        v-for="sponsor in diamond"
        v-bind="sponsor"
        :key="sponsor.image"
        :link="sponsor.link"
        :imagePath="sponsor.image"
      />
    </div>
    <div class="sponsor gold">
      <Sponsor
        v-for="sponsor in gold"
        v-bind="sponsor"
        :key="sponsor.image"
        :link="sponsor.link"
        :imagePath="sponsor.image"
      />
    </div>
    <div class="sponsor silver">
      <Sponsor
        v-for="sponsor in silver"
        v-bind="sponsor"
        :key="sponsor.image"
        :link="sponsor.link"
        :imagePath="sponsor.image"
      />
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title';
import Sponsor from './Sponsor';
import sponsors from './sponsors.json';

export default {
  name: 'Sponsors',
  components: {
    Title,
    Sponsor,
  },
  data: () => ({ ...sponsors }),
};
</script>

<style>
@import '../../variables';

.sponsor {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  & img {
    margin-right: var(--large-space);
    margin-bottom: var(--large-space);
    cursor: pointer;
  }
}

.diamond {
  & img {
    max-height: 200px;
    max-width: 300px;

    @media (--bellow-desktop) {
      max-width: 150px;
    }
  }
}

.gold {
  & img {
    max-height: 130px;
    max-width: 200px;

    @media (--bellow-desktop) {
      max-width: 100px;
    }
  }
}

.silver {
  & img {
    max-height: 70px;
    max-width: 100px;

    @media (--bellow-desktop) {
      max-width: 70px;
    }
  }
}

</style>
