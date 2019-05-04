<template>
  <div id="sponsors">
    <Title title="Sponsors" subtitle="Thanks to our" />
    <div class="sponsor diamond">
      <router-link v-for="sponsor in diamond"
        v-bind="sponsor"
        :key="sponsor.image"
        to={sponsor.link}
      >
        <img :src="imgLink(sponsor.image)" />
      </router-link>
    </div>
    <div class="sponsor gold">
      <router-link v-for="sponsor in gold"
        v-bind="sponsor"
        :key="sponsor.image"
        to={sponsor.link}
      >
        <img :src="imgLink(sponsor.image)" />
      </router-link>
    </div>
    <div class="sponsor silver">
      <router-link v-for="sponsor in silver"
        v-bind="sponsor"
        :key="sponsor.image"
        to={sponsor.link}
      >
        <img :src="imgLink(sponsor.image)" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';

export default {
  name: 'Sponsors',
  components: {
    Title,
  },
  methods: {
    imgLink(fileName) {
      return `/static/sponsors/${fileName}`;
    },
  },
  data: () => ({
    diamond: [
      {
        image: 'blip.png',
        link: '',
      },
      {
        image: 'xing.png',
        link: '',
      },
    ],
    gold: [
      {
        image: 'jumia.png',
        link: '',
      },
      {
        image: 'retail.png',
        link: '',
      },
    ],
    silver: [
      {
        image: 'losch.png',
        link: '',
      },
    ],
  }),
};
</script>

<style scoped>
@import '../variables';

#sponsors {
  margin: var(--new-section-margin);
  width: 70%;
  display: flex;
  flex-direction: column;

  & img {
    margin-right: var(--large-space);
  }
}

.sponsor {
  display: flex;
  align-items: center;
  margin-bottom: var(--large-space);
}

.diamond {
  & img {
    max-height: 200px;
    max-width: 350px;
  }
}

.gold {
  & img {
    max-height: 130px;
    max-width: 280px;
  }
}

.silver {
  & img {
    max-height: 70px;
    max-width: 190px;
  }
}

</style>
