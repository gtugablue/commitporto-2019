<template>
  <div id="sponsors">
    <Title title="Sponsors" subtitle="Thanks to our" />
  </div>
</template>

<script>
import Title from '@/components/Title';

export default {
  name: 'Sponsors',
  components: {
    Title,
  },
};
</script>

<style scoped>
@import '../variables';

#sponsors {
  margin: var(--new-section-margin);
  width: 70%;
  display: flex;
  flex-direction: column;
}

</style>
