<template>
  <div v-if="isActive===true" class="cookie-notification grid-x grid-margin-x grid-margin-y" :class="{'activeCookie': isActive}">
    <div class="cookie-banner-text cell padding-horizontal-3">
      <slot name="msg"></slot>
    </div>
    <a @click="closeCookie" id="close-cookie-notification">
      <i class="fas fa-times"></i>
    </a>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                isActive: true
            }
        },
        methods: {
            closeCookie () {
                this.isActive = false
            }
        }
    }
</script>

