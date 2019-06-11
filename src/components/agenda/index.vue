<template>
  <div id="speakers" class="section">
    <Title title="Speakers" subtitle="Meet our" />
    <div class="speakers-container">
      <div class="border upper-border"/>
      <div class="slots-list">
        <template v-for="slot in slots">
          <div v-if="slot.type === 'filled'" class="frame filled">
            <div class="content" v-for="description in slot.content">
              <div class="text">{{description.text}}</div>
              <div class="time">{{description.time}}</div>
            </div>
          </div>
          <div v-else-if="slot.type === 'icon'" class="frame">
            <img src="@/assets/social/twitter.svg" />
          </div>
          <Speaker
            v-else
            v-bind="slot"
            :key="slot.name"
            :openSpeakerDetails="openSpeakerDetails"
          />
        </template>

      </div>
      <div class="border bottom-border"/>
    </div>
  </div>
</template>

<script>
import Title from '@/components/common/Title';
import Speaker from './Speaker';
import { slots } from './slots.json';

export default {
  name: 'Agenda',
  props: ['openSpeakerDetails'],
  components: {
    Title,
    Speaker,
  },
  data: () => ({ slots }),
};
</script>

<style scoped>
@import '../../variables';

.speakers-container {
  position: relative;
  padding: var(--space);
}

.slots-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (--bellow-desktop) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.bottom-border {
  &::before,
  &::after {
    bottom: 0;
  }
}

.frame {
  width: 200px;
  height: 200px;

  @media (--desktop) {
    grid-column: span 2;

    &:nth-child(3n+9) {
      grid-column: 2 / 4;
    }
  }

  &.filled {
    background-color: var(--main-color);
    color: var(--white);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .content {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: var(--x-small-space) 0;
    }

    & .text {
      @apply --small-font;
      text-transform: uppercase;
      font-weight: lighter;
    }

    & .time {
      font-weight: bold;
      margin-left: var(--x-small-space);
    }
  }
}
</style>
