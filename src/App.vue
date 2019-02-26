<template>
  <div id="app">
    <router-view @modalVisible="showModal" />
    <footer>
      <div class="editions">
        <a href="http://2018.commitporto.com" target="_blank">2018</a>.
        <a href="http://2017.commitporto.com" target="_blank">2017</a>.
        <a href="http://2016.commitporto.com" target="_blank">2016</a>.
        <a href="http://2015.commitporto.com" target="_blank">2015</a>
      </div>
      <div class="socials">
        <a href="https://www.facebook.com/commitporto" target="_blank"><img src="@/assets/facebook.svg" /></a>
        <a href="https://twitter.com/commitporto" target="_blank"><img src="@/assets/twitter.svg" /></a>
        <a href="https://www.youtube.com/channel/UCuYn5xuAmChRDcSdQrbp-Fw/videos" target="_blank"><img src="@/assets/youtube.svg" /></a>
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
  }),
  methods: {
    showModal(modalContent) {
      this.isModalVisible = true;
      this.modalContent = modalContent;
    },
    closeModal() {
      this.isModalVisible = false;
    },
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
  height: 100vh;
  overflow: hidden;
  position: relative;
}

#app {
  font-family: var(--main-font);
  color: var(--textColor);
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

footer {
  display: flex;
  justify-content: space-between;
  margin: 15px;

  @media (--bellow-desktop) {
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    flex-direction: column-reverse;
  }
}

.socials {
  @media (--bellow-desktop) {
    margin-bottom: 10px;
  }

  & a:not(:last-child) {
    margin-right: 20px;
  }
}

.editions {
  font-size: 10px;
  margin-top: 5px;

  & a {
    color: var(--textColor);
    text-decoration: none;

    &:not(:first-child) {
      padding-left: 5px;
    }

    &:not(:last-child){
      padding-right: 5px;
    }
  }
}
</style>
