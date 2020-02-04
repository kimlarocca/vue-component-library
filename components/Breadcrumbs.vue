<template>
  <section class="breadcrumbs">

    <div class="grid-x">

      <div class="cell large-auto">
        <ul class="crumbs">
          <li :key="index" v-for="(crumb, index) in crumbs">
            <a v-if="hasLink(crumb)" :href="crumb.link">{{ crumb.name }}</a>
            <span v-else>{{ crumb.name }}</span>
          </li>
        </ul>
      </div>

    </div>

  </section>
</template>

<script>
  export default {
    name: 'Breadcrumbs',
    props: {
      crumbs: Array
    },
    methods: {
      hasLink (crumb) {
        return !!crumb.link
      }
    }
  }
</script>
