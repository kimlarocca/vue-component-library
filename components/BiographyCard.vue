<template>

  <div class="team-member-card" :class="layout">

    <div class="grid-x grid-margin-x grid-margin-y">
      <div v-if="hasImage" :class="isHorizontal ? 'large-2 medium-4 small-12' : 'medium-12'" class="cell">
        <img :src="image" :alt="altText"/>
      </div>
      <div class="cell large-auto medium-auto small-12">
        <div v-if="hasName" class="name">{{ name }}</div>
        <div v-if="hasTitle" class="title like-p">{{ title }}</div>
        <slot></slot>
        <a v-if="hasLink && !hasTextLink" :href="link" class="button">{{ cta }}</a>
        <a v-if="hasLink && hasTextLink" :href="link" class="caret-right">{{ cta }}</a>
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
      link: String,
      hasTextLink: {
        type: Boolean,
        default: false
      },
      layout: {
        type: String,
        default: 'vertical'
      }
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
      },
      isHorizontal () {
        return this.$props['layout'] === 'horizontal'
      }
    }
  }
</script>
