<template>
  <li>
    <a :href="link" :style="{ background: backgroundColor }" :class="{'no-background' : !hasBackground }">
      <i :class="icon" :style="{ color: iconColor }"></i>
    </a>
  </li>
</template>

<script>
    export default {
        name: 'SocialLink',
        props: {
            id: Number,
            icon: String,
            link: String,
            altText: String,
            iconColor: String,
            backgroundColor: String
        },
        computed: {
            hasBackground () {
                return !!this.$props['backgroundColor']
            }
        }
    }
</script>
