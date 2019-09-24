<template>

  <section class="hero" :class="[size, alignment]">

    <div class="desktop-background" :style="{ backgroundImage: `url('${image}')` }"></div>

    <!-- mobile image is optional, show desktop image if the mobile image doesn't exist -->
    <div class="mobile-background" v-if="mobileImage" :style="{ backgroundImage: `url('${mobileImage}')` }"></div>
    <div class="mobile-background" v-if="!mobileImage" :style="{ backgroundImage: `url('${image}')` }"></div>

    <div class="content">
      <slot><!-- inline editing area --></slot>
      <div v-if="hasLink"><a class="button" :href="link">{{ cta }}</a></div>
    </div>

  </section>
</template>

<script>
  export default {
    name: 'Hero',
    props: {
      image: String,
      mobileImage: {
        default: null
      },
      size: {
        default: 'small'
      },
      alignment: {
        default: 'center'
      },
      link: String,
      cta: String
    },
    computed: {
      hasLink () {
        return !!this.$props.link
      }
    }
  }
</script>
