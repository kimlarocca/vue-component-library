<template>
  <div>

    <div class="container margin-vertical-2">

      <h1 class="margin-bottom-1">card component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>PROPS:</strong></p>
      <ul>
        <li>image (optional)</li>
        <li>video - iframe url for youtube or vimeo (optional)</li>
        <li>altText (optional, but highly recommend for SEO)</li>
        <li>header (optional)</li>
        <li>subtitle (optional)</li>
        <li>title</li>
        <li>link - entire card will be clickable to this URL (optional)</li>
        <li>hasTextLink - if set to true, the card will display a "learn more" link (optional - the default is false)</li>
      </ul>

      <div class="section-padding-50"></div>

      <div class="grid-x grid-margin-x grid-margin-y padding-smaller">
        <div class="cell large-4 medium-6 small-12">
          <card
            header="Header"
            image="https://picsum.photos/600/400?grayscale"
            altText="alternative text"
            subtitle="subtitle"
            title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          >
          </card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <card
            video="https://player.vimeo.com/video/90283590"
            link="http://www.google.com"
            hasTextLink="true"
            subtitle="subtitle"
            title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          >
          </card>
        </div>
        <div class="cell large-4 medium-6 small-12">
          <card
            header="Header"
            link="http://www.google.com"
            hasTextLink="true"
            title="Title text. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
          >
          </card>
        </div>
      </div>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
