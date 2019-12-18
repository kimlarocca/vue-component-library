<template>

  <div>

    <div class="container margin-vertical-2">

      <h1 class="margin-bottom-1">hero component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul>
        <li>size: can be large or small, large is the default (optional)</li>
        <li>image</li>
        <li>mobileImage (optional - if not given, the desktop image will be displayed)</li>
        <li>alignment: can be left or center (optional - center is the default)</li>
      </ul>

    </div>

    <div class="section-padding-50"></div>

    <hero
      size="large"
      mobileImage="https://picsum.photos/800/400?grayscale"
      image="https://picsum.photos/1600/900?grayscale"
      cta="click here for more information"
      link="http://www.google.com"
    >
      <slot>
        <div class="like-h1">Lorem ipsum dolor sit amet, consectetur facere.</div>
      </slot>
    </hero>

    <div class="section-padding-50"></div>

    <hero
      size="small"
      mobileImage="https://picsum.photos/800/400?grayscale"
      image="https://picsum.photos/1600/900?grayscale"
      alignment="left"
    >
      <slot>
        <div class="like-h1">Lorem ipsum dolor sit amet, consectetur.</div>
        <div class="like-p">Ad atque beatae cumque eligendi facere itaque culpa nobis nostrum quasi repellat.</div>
      </slot>
    </hero>

    <div class="section-padding-50"></div>

  </div>

</template>
