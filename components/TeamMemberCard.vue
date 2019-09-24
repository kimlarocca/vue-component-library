<template>

  <div class="team-member-card">

    <div class="grid-x grid-margin-x grid-margin-y">
      <div v-if="hasImage" class="cell large-2 medium-4 small-12">
        <img :src="image" :alt="altText"/>
      </div>
      <div class="cell large-auto medium-auto small-12">
        <p v-if="hasName" class="name">{{ name }}</p>
        <p v-if="hasTitle" class="title">{{ title }}</p>
        <slot></slot>
        <a v-if="hasLink" :href="link" class="button">{{ cta }}</a>
      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'TeamMemberCard',
    props: {
      name: String,
      image: String,
      altText: String,
      title: String,
      cta: String,
      link: String
    },
    computed: {
      hasHeader () {
        return !!this.$props['header']
      },
      hasImage () {
        return !!this.$props['image']
      },
      hasLink () {
        return !!this.$props['link']
      },
      hasName () {
        return !!this.$props['name']
      },
      hasTitle () {
        return !!this.$props['title']
      }
    }
  }
</script>
