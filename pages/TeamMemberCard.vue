<template>
  <div>

    <div class="container">

      <h1>team member card component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <h6><strong>PROPS:</strong></h6>
      <ul class="margin-bottom-2">
        <li>image (optional)</li>
        <li>altText (optional but recommended if an image is provided)</li>
        <li>name (optional)</li>
        <li>title (optional)</li>
        <li>cta (optional)</li>
        <li>link (optional)</li>
      </ul>

      <h6><strong>SLOTS:</strong></h6>
      <ul>
        <li>bio (optional)</li>
      </ul>

      <div class="section-padding-50"></div>

      <team-member-card
        image="https://picsum.photos/768?grayscale"
        altText="alternative text"
        title="President, Google.com, Seattle"
        name="John Doe"
        link="http://www.google.com"
        cta="read more"
      >
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum odio
            praesentium quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
            dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum
            odio praesentium quis.</p>
        </slot>
      </team-member-card>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
