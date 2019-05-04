<template>
  <a
    :href="link"
    target="_blank"
  >
    <img :src="imgLink(imagePath)" />
  </a>
</template>

<script>
export default {
  name: 'Sponsor',
  props: ['link', 'imagePath'],
  methods: {
    imgLink(fileName) {
      return `/static/sponsors/${fileName}`;
    },
  },
};
</script>
