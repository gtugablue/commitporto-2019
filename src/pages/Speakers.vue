<template>
  <div id="speakers" class="section">
    <Title title="Speakers" subtitle="Meet our" />
    <div class="speakers-container">
      <div class="border upper-border"/>
      <div class="speakers-list">
        <Speaker v-for="speaker in speakers" v-bind="speaker" :key="speaker.name"/>
      </div>
      <div class="border bottom-border"/>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title';
import Speaker from '@/components/Speaker';

export default {
  name: 'Speakers',
  components: {
    Title,
    Speaker,
  },
  data: () => ({
    speakers: [
      {
        file: 'roland.jpg',
        name: 'Roland Kuhn',
        role: 'CTO & co-founder @ Actyx',
        twitter: 'rolandkuhn',
        github: 'rkuhn',
        linkedin: 'roland-kuhn-17828a57',
        website: 'https://rolandkuhn.com/',
        bio: 'I am CTO and co-founder of Actyx, author of Reactive Design Patterns, a co-author of the Reactive Manifesto, teacher of the edX course Programming Reactive Systems, and a passionate open-source hakker. Previously I led the Akka project at Lightbend. I also hold a Dr. rer. nat. in particle physics from TU München and have worked in the space industry for several years. I spend most of my life in the central European timezone.',
        title: 'What if you need reliability comparable to paper?',
        abstract: 'In the manufacturing industry downtime is very expensive, therefore most small and midsize factories are still managed using paper-based processes. The problem space is perfectly suited for the microservices approach: well-defined and locally encapsulated responsibilities, collaboration and loose coupling between different links in the chain, rapid evolution of individual pieces for the purpose of optimising business outcomes. But how can we operate microservices such that they can deliver the resilience of paper? How can we leverage the locality of process data and benefit from high bandwidth and low latency communication in the Internet of Things?<br>This talk explores the radical approach of operating microservices in a peer-to-peer network on the factory shop-floor, using event sourcing as the only means of communication and observation. We discuss the consequences of going all in on availability and partition tolerance. In particular consider eventual consistency and its impact on replacing nodes, upgrading services, and evolving event schemas. And we see how event sourcing can help understand the behaviour of such an uncompromisingly distributed system and enable powerful testing—both before and after hitting an issue in production.',
      },
      {
        file: 'andrew.jpg',
        name: 'Andrew Hill',
        role: 'Co-founder & CEO @ textile01',
        twitter: 'andrewxhill',
        github: 'andrewxhill',
        website: 'https://andrewxhill.com/',
        bio: 'Andrew Hill has been a biologist, a mapper, a technologist, and an entrepreneur. Now, he is helping to build Textile, a company that explores technology for decentralized consumer applications. He spends his days trying to further their mission to radically change the way people use their data to interact with technology.',
        title: 'Unleashing the power of decentralization: How to build unstoppable apps using IPFS',
        abstract: 'From before you even wake up in the morning, your day is being encoded into digital data. What started as simply our IP address, nic, or maybe email address has now grown to include our dating profiles, medical histories, mundane conversations, personality traits not even we are aware of, and much more. While our trails of digital data have become more detailed, the technologies that leverage that data have become more opaque and less in our control.<br>Decentralization, content addressable data, and technologies like IPFS give us a new framework to think about how data should be stored, controlled, and used in technology. In this talk, we will present how IPFS can be used to build technologies that give users long-term control of their personal data while still enabling amazing and useful technology to be built around it.<br>You should expect to hear: how protocols in IPFS can be used in consumer apps; what new values and interactions are possible when using decentralized systems in apps; examples of some simple ways to add IPFS to your projects; a long term vision for how data could in the future of technology.',
      },
      {
        file: 'user.png',
        // name: 'Filipa Moura',
      },
      {
        file: 'user.png',
        // name: 'Ricardo Mendes',
        bio: 'Ricardo is a long time open sourcerer and member of the Ember.js learning and framework core teams. Ricardo currently works at Simplabs, and hosts the Porto Codes meetup and the Conversas em Código podcast.',
        // linkedin: 'rmendes',
        title: 'Thriving through the hype cycle: an Ember.js story',
        abstract: 'The front-end development community has been through a fair share of hype cycles in the last ten years. In this time, we have seen libraries and frameworks come and go, sometimes even disappearing completely like batman.js.<br>In this talk we will cover how the Ember.js project has managed not only to keep up with the hype cycles, but to continually push the framework and the web forward and bring its users along.<br>We will close off the presentation by talking how this culminates in the concept of editions, the first of which is Ember Octane.',
      },
      {
        file: 'user.png',
        // name: 'Rodrigo Morales',
        bio: 'My name is Rodrigo, I&apos;m originally from Mexico city. I&apos;ve been living in Madrid, Spain for the past 8 years; where I studied Software Engineering.<br>I work at Vizzuality as a Front Engineer, on my day to day I build cool visualisations using React and Redux. I like to get involved and contribute to open source projects, among the things I enjoy the most are building tools and designing libraries public APIs.<br>On a more personal note, I like beer, tacos and going out dancing.',
        // github: 'sorodrigo',
        // twitter: 'sorodrigo',
      },
      {
        file: 'user.png',
      },
      {
        file: 'user.png',
      },
      {
        file: 'user.png',
      },
      {
        file: 'user.png',
      },
      {
        file: 'user.png',
      },
      {
        file: 'user.png',
      },
    ],
  }),
};
</script>

<style scoped>
@import '../variables';
.speakers-container {
  position: relative;
  padding: var(--space);
}

.speakers-list {
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
</style>
