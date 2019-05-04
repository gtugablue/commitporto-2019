<template>
  <div id="sponsors">
    <Title title="Sponsors" subtitle="Thanks to our" />
    <div class="sponsor diamond">
      <a v-for="sponsor in diamond"
        v-bind="sponsor"
        :key="sponsor.image"
        :href="sponsor.link"
        target="_blank"
      >
        <img :src="imgLink(sponsor.image)" />
      </a>
    </div>
    <div class="sponsor gold">
      <a v-for="sponsor in gold"
        v-bind="sponsor"
        :key="sponsor.image"
        :href="sponsor.link"
        target="_blank"
      >
        <img :src="imgLink(sponsor.image)" />
      </a>
    </div>
    <div class="sponsor silver">
      <a v-for="sponsor in silver"
        v-bind="sponsor"
        :key="sponsor.image"
        :href="sponsor.link"
        target="_blank"
      >
        <img :src="imgLink(sponsor.image)" />
      </a>
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
        link: 'https://blip.pt/',
      },
      {
        image: 'xing.png',
        link: 'https://www.xing.com/',
      },
    ],
    gold: [
      {
        image: 'jumia.png',
        link: 'https://group.jumia.com/',
      },
      {
        image: 'retail.png',
        link: 'http://www.retail-consult.com/',
      },
    ],
    silver: [
      {
        image: 'losch.png',
        link: 'https://www.losch.lu',
      },
    ],
  }),
};
</script>

<style scoped>
@import '../variables';

#sponsors {
  @apply --new-section;
  display: flex;
  flex-direction: column;
}

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
    max-width: 250px;

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
