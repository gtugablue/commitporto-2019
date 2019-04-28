<template>
  <div class="speaker">
    <img class="photo" :src="fullfileName"/>
    <div class="name">{{name}}</div>
    <div class="social">
      <a v-if="twitter" :href="twitterLink" target="_blank">
        <img  src="@/assets/twitter.svg" />
      </a>
      <a v-if="github" :href="githubLink" target="_blank">
        <img  src="@/assets/github.svg" />
      </a>
      <a v-if="linkedin" :href="linkedinLink" target="_blank">
        <img  src="@/assets/linkedin.svg" />
      </a>
      <a v-if="website" :href="website" target="_blank">
        <img  src="@/assets/link.svg" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Speaker',
  props: ['file', 'name', 'twitter', 'github', 'linkedin', 'website'],
  computed: {
    fullfileName() {
      return `/static/speakers/${this.file}`;
    },
    twitterLink() {
      return `https://twitter.com/${this.twitter}`;
    },
    githubLink() {
      return `https://github.com/${this.github}`;
    },
    linkedinLink() {
      return `https://www.linkedin.com/in/${this.linkedin}`;
    },
  },
};
</script>

<style scoped>
@import '../variables';

.speaker {
  display: inline-block;
  text-align: center;
  margin-bottom: var(--space);
  cursor: pointer;

  @media (--desktop) {
    &:nth-child(5) {
      margin-left: 100px;
    }

    &:nth-child(7) {
      margin-right: 100px;
    }
  }
}

.photo {
  width: 200px;
  transition : filter 1s ease;

  &:hover {
    filter: var(--red-filter);
  }
}

.name {
  text-transform: uppercase;
  color: var(--textColor);
  font-size: var(--medium-font);
}

.social img {
  width: 15px;
  margin: 5px;
  transition : filter 300ms ease;

  &:hover {
    filter: var(--red-filter);
  }
}
</style>

