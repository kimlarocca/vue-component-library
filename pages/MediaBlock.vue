<template>
  <div>

    <div class="container">
      <h1>media blocks</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul>
        <li>url - iframe url for the youtube or vimeo embed</li>
      </ul>
      <div class="section-padding-50"></div>

      <p>Responsive media embeds: youtube</p>
      <media-block url="https://www.youtube.com/embed/ScMzIvxBSi4"></media-block>

      <div class="section-padding-50"></div>

      <p>Responsive media embeds: vimeo</p>
      <media-block url="https://player.vimeo.com/video/90283590"></media-block>

      <div class="section-padding-50"></div>

      <p>In a grid:</p>
      <div class="grid-x grid-margin-x">
        <div class="cell large-6 medium-6">
          <media-block url="https://www.youtube.com/embed/ScMzIvxBSi4"></media-block>
        </div>
        <div class="cell large-6 medium-6">
          <media-block url="https://player.vimeo.com/video/90283590"></media-block>
        </div>
      </div>
    </div>

  </div>

</template>
