<template>
  <div class="responsive-embed widescreen">
    <iframe width="1240" height="700" :src="url" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
  export default {
    name: 'Template',
    props: {
      url: String
    }
  }
</script>
