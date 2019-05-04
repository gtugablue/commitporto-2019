<template>
  <div class="speaker" :class="{speakerHover: name}">
    <img class="photo" :src="fullfileName"/>
    <div class="name">{{name}}</div>
    <div class="social">
      <a v-if="twitter" :href="twitterLink" target="_blank">
        <img src="@/assets/social/twitter.svg" />
      </a>
      <a v-if="github" :href="githubLink" target="_blank">
        <img src="@/assets/social/github.svg" />
      </a>
      <a v-if="linkedin" :href="linkedinLink" target="_blank">
        <img src="@/assets/social/linkedin.svg" />
      </a>
      <a v-if="website" :href="website" target="_blank">
        <img src="@/assets/social/link.svg" />
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

  @media (--desktop) {
    grid-column: span 2;

    &:nth-child(7n + 5) {
      grid-column: 2 / 4;
    }
  }

  &.speakerHover {
    cursor: pointer;
    &:hover {
      & .photo {
        opacity: 1;
        animation: shake 0.8s cubic-bezier(.36,.07,.19,.97) both;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
      }
    }
  }
}

.photo {
  width: 200px;
  opacity: 0.8;
  transform: translate3d(0, 0, 0);
  transition: opacity 0.35s, transform 0.35s;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, -1px, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 2px, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-2px, -2px, 0);
  }

  40%, 60% {
    transform: translate3d(1px, 1px, 0);
  }
}

.name {
  text-transform: uppercase;
  color: var(--text-color);
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

