<template>

  <section class="callout" :class="[backgroundColor, alignment]">
    <div class="content">
      <h3 v-if="hasTitle" class="margin-bottom-1">{{ title }}</h3>
      <div v-if="hasDescription" class="description">
        <slot></slot>
      </div>
      <div v-if="(hasLink || hasLink2) && background !== 'white'" class="cell buttons">
        <a v-if="hasLink2" class="button" :href="link2">{{ cta2 }}</a>
        <a v-if="hasLink" class="button ghost" :href="link">{{ cta }}</a>
      </div>
    </div>
  </section>

</template>

<script>
  export default {
    name: 'Callout',
    props: {
      title: String,
      description: String,
      cta: String,
      link: String,
      cta2: String,
      link2: String,
      backgroundColor: {
        default: 'white'
      },
      alignment: {
        default: 'center'
      }
    },
    computed: {
      hasTitle () {
        return !!this.$props.title
      },
      hasDescription () {
        return !!this.$props.title
      },
      hasLink () {
        return !!this.$props.link && !!this.$props.cta
      },
      hasLink2 () {
        return !!this.$props.link2 && !!this.$props.cta2
      }
    }
  }
</script>
