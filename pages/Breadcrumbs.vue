<template>
  <div>

    <div class="container">

      <h1>breadcrumbs component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <h6><strong>PROPS:</strong></h6>
      <ul>
        <li>:crumbs - an array of objects containing the breadcrumb name and link</li>
        <li>&nbsp;&nbsp;&nbsp;[{name, link}] - link is optional</li>
        <li>&nbsp;&nbsp;&nbsp;the separator is defined in the _breadcrumbs.scss file</li>
      </ul>

      <div class="section-padding-50"></div>

      <breadcrumbs
        :crumbs="[{name: 'Home', link: 'http://www.google.com'},{name: 'Resources', link: 'http://www.yahoo.com'},{name: 'This Article', link: ''}]"
      >
      </breadcrumbs>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
