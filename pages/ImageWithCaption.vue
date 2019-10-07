<template>
  <div>

    <div class="container margin-vertical-2">

      <h1 class="margin-bottom-1">image with caption component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul>
        <li>image (required - the wireframes say to display a default image if an image is not given)</li>
        <li>altText (optional, but highly recommend for SEO)</li>
        <li>caption (optional)</li>
        <li>link (optional)</li>
        <li>hasGradient - true or false, will display a black gradient along the bottom so that the caption text is more
          visible (optional, true is the default)
        </li>
      </ul>

      <div class="section-padding-50"></div>

      <image-with-caption
        image="https://picsum.photos/600/400?grayscale"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.bing.com"
      >
      </image-with-caption>

      <div class="section-padding-50"></div>

      <image-with-caption
        image="https://picsum.photos/600/400?grayscale"
        altText="lorem ipsum dolor"
        caption="by john doe"
        link="http://www.google.com"
        :hasGradient="false"
      >
      </image-with-caption>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
