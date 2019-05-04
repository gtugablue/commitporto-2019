<template>
  <div id="app">
    <nav :class="{scrolled: scrolled}">
      <router-link to="#about">About</router-link>
      <router-link to="#speakers">Speakers</router-link>
      <router-link to="#sponsors">Sponsors</router-link>
    </nav>
    <router-view @modalVisible="showModal" />
    <footer>
      <div class="editions">
        <a href="http://2018.commitporto.com" target="_blank">2018</a>.
        <a href="http://2017.commitporto.com" target="_blank">2017</a>.
        <a href="http://2016.commitporto.com" target="_blank">2016</a>.
        <a href="http://2015.commitporto.com" target="_blank">2015</a>
      </div>
      <div class="organizer">Powered by
        <a href="http://alumniei.pt/" target="_blank">AlumniEI-FEUP</a>
      </div>
      <div class="socials">
        <a href="https://www.facebook.com/commitporto" target="_blank">
          <img src="@/assets/social/facebook.svg" />
        </a>
        <a href="https://twitter.com/commitporto" target="_blank">
          <img src="@/assets/social/twitter.svg" />
        </a>
        <a href="https://www.youtube.com/channel/UCuYn5xuAmChRDcSdQrbp-Fw/videos" target="_blank">
          <img src="@/assets/social/youtube.svg" />
        </a>
      </div>
    </footer>
    <Modal v-show="isModalVisible" @close="closeModal">
      <component :is="modalContent" slot="body"></component>
    </Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal';
import CallForSponsor from '@/pages/CallForSponsor';

export default {
  name: 'App',
  components: {
    Modal,
    CallForSponsor,
  },
  data: () => ({
    isModalVisible: false,
    modalContent: null,
    scrolled: false,
  }),
  methods: {
    showModal(modalContent) {
      this.isModalVisible = true;
      this.modalContent = modalContent;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style>
@import './variables';

html {
  height: 100vh;
}

body {
  margin: 0;
  width: 100vw;
  height: 100%;
  position: relative;
}

#app {
  font-family: var(--main-font);
  color: var(--text-color);
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

nav {
  position: fixed;
  top: var(--small-space);
  right: 0;
  z-index: 1;
  padding: var(--x-small-space) var(--small-space);

  & a {
    text-transform: uppercase;
    text-decoration: none;
    color: var(--white);
    font-weight: lighter;
    font-size: var(--text-font);

    &:not(:last-child) {
      margin-right: var(--space);
    }

    &:hover {
      position: relative;

      &::before {
        content: '⌜';
        position: absolute;
        top: -10px;
        left: -10px;
      }

      &::after {
        content: '⌟';
        position: absolute;
        bottom: -10px;
        right: -10px;
      }
    }
  }

  &.scrolled {
    background: var(--white);
    box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.25);

    & a {
      color: var(--text-color);
    }
  }
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--small-space);
  background: var(--main-color);
  position: relative;

  @media (--bellow-desktop) {
    margin: 0;
    margin-bottom: var(--small-space);
    text-align: center;
    flex-direction: column-reverse;
  }
}

.socials {
  @media (--bellow-desktop) {
    margin-bottom: var(--small-space);
  }

  & a:not(:last-child) {
    margin-right: 20px;
  }

  & img {
    filter: brightness(0) invert(1);
  }
}

.editions {
  @apply --small-font;
  margin-top: 5px;
  color: var(--white);

  & a {
    text-decoration: none;
    color: var(--white);

    &:not(:first-child) {
      padding-left: 5px;
    }

    &:not(:last-child){
      padding-right: 5px;
    }
  }
}

.organizer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &, & a {
    color: var(--white);
    font-size: var(--text-font);
  }
}

.border {
  &::before {
    content: '';
    position: absolute;
    background-color: var(--main-color);
  }

  &::after {
    content: '';
    position: absolute;
    background-color: var(--main-color);
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
</style>
