<template>
  <section class="content-blade" :class="backgroundColor">
    <div class="container grid-x grid-margin-x grid-margin-y">
      <div v-if="hasImage" class="cell medium-6 small-12"
           :class="rightAligned ? 'small-order-1 medium-order-2 large-order-2' : 'order-1'">
        <img :src="image" :alt="altText">
      </div>
      <div v-if="hasVideo" class="cell medium-8 small-12"
           :class="rightAligned ? 'small-order-1 medium-order-2 large-order-2' : 'order-1'">
        <media-block :url="video"></media-block>
      </div>
      <div class="cell medium-auto small-12 content">
        <h3 v-if="hasTitle" class="margin-bottom-2">{{ title }}</h3>
        <slot name="content"></slot>
        <template v-if="hasLink">
          <a :href="ctaLink" class="button" target="_blank">{{cta}}</a>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'ContentBlade',
    props: {
      title: String,
      image: String,
      altText: String,
      video: String,
      alignment: String,
      cta: String,
      ctaLink: String,
      backgroundColor: {
        default: 'white'
      }
    },
    computed: {
      hasTitle () {
        return !!this.$props.title
      },
      hasLink () {
        return !!this.$props.cta
      },
      hasImage () {
        return !!this.$props.image
      },
      hasVideo () {
        return !!this.$props.video
      },
      rightAligned () {
        return this.$props.alignment === 'right'
      }
    }
  }
</script>
