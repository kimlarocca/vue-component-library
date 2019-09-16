<template>
  <section class="breadcrumbs">

    <div class="grid-x container">

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

<style scoped lang="scss">

  $color: #606060;
  $link-color: #0095da;
  $margin: 5px;
  $separator: '/';

  .crumbs {

    list-style: none;

    a,
    a:visited,
    a:active {
      color: $link-color;
      text-decoration: none;

      &:hover {
        color: $color;
      }
    }

    li {
      display: inline;
      margin-right: $margin;
      color: $color;

      &:after {
        margin-left: $margin;
        content: $separator;
      }

      &:last-of-type {
        &:after {
          content: '';
        }
      }
    }
  }
</style>
