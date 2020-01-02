<template>
  <div>

    <div class="container margin-vertical-2">

      <h1 class="margin-bottom-1">card component</h1>

      <hr class="margin-vertical-3">

      <p><strong>IMAGES:</strong></p>
      <p>We recommend a minimum image width of 768px for this component.</p>

      <div class="section-padding-25"></div>

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul class="margin-bottom-1">
        <li>image (optional)</li>
        <li>image alt text (optional, but highly recommend for SEO)</li>
        <li>header (optional)</li>
        <li>video: iframe url for youtube or vimeo (optional)</li>
        <li>subtitle (optional)</li>
        <li>title / description text</li>
        <li>link: the entire card will be clickable to this URL (optional)</li>
        <li>text link: if set to true, the card will display a "learn more" link (optional, the default is false)</li>
      </ul>

      <div class="section-padding-25"></div>

      <p><strong>EXAMPLES:</strong></p>

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
