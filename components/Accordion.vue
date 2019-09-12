<template>
  <ul class="accordion">
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    props: {
      allowMultiple: {
        default: false
      },
      mobileOnly: {
        default: false
      },
      closeAll: {
        default: false
      }
    },
    data () {
      return {
        Accordion: {
          allowMultiple: this.$props.allowMultiple,
          mobileOnly: this.$props.mobileOnly,
          closeAll: this.$props.closeAll
        }
      }
    },
    provide () {
      return { Accordion: this.Accordion }
    }
  }
</script>

<style lang="scss" scoped>
  .accordion {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
