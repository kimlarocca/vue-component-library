<template>
  <div>

    <div class="container">
      <h1>media block</h1>

      <hr class="margin-vertical-3">

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul class="margin-bottom-1">
        <li>url: the iframe url for the youtube or vimeo embed</li>
      </ul>

      <div class="section-padding-25"></div>

      <p><strong>EXAMPLES:</strong></p>

      <p>youtube:</p>
      <media-block url="https://www.youtube.com/embed/ScMzIvxBSi4"/>

      <div class="section-padding-50"></div>

      <p>vimeo:</p>
      <media-block url="https://player.vimeo.com/video/90283590"/>

      <div class="section-padding-50"></div>

      <p>in a grid:</p>
      <div class="grid-x grid-margin-x">
        <div class="cell large-6 medium-6">
          <media-block url="https://www.youtube.com/embed/ScMzIvxBSi4"/>
        </div>
        <div class="cell large-6 medium-6">
          <media-block url="https://player.vimeo.com/video/90283590"/>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import MediaBlock from '../components/MediaBlock'

  export default {
    components: { MediaBlock }
  }
</script>
