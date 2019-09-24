<template>
  <div>

    <div class="container">

      <h1>breadcrumbs component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <h6 class="margin-bottom-1">Use in your project:</h6>
      <p class="bg-light-gray padding-1 margin-bottom-1">npm i @bit/kimlarocca.vue.breadcrumbs</p>

      <h6 class="margin-bottom-1">Props:</h6>
      <ul>
        <li>:crumbs - an array of objects containing the breadcrumb name and link</li>
        <li>&nbsp;&nbsp;&nbsp;[{name, link}] - link is optional</li>
        <li>&nbsp;&nbsp;&nbsp;the separator is defined in the _breadcrumbs.scss file</li>
      </ul>

      <div class="section-padding-50"></div>

      <h6 class="margin-bottom-1">Example:</h6>

      <breadcrumbs
        :crumbs="[{name: 'Home', link: 'http://www.google.com'},{name: 'Resources', link: 'http://www.yahoo.com'},{name: 'This Article', link: ''}]"
      >
      </breadcrumbs>

      <div class="section-padding-50"></div>

      <breadcrumbs class="bg-light-gray padding-1"
        :crumbs="[{name: 'Home', link: 'http://www.google.com'},{name: 'Resources', link: 'http://www.yahoo.com'},{name: 'This Article', link: ''}]"
      >
      </breadcrumbs>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
