<template>
  <div>
    <div class="container">
      <h1>biography card</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3" />

      <p>
        <strong>RULES &amp; DEPENDENCIES:</strong>
      </p>
      <p>This component will have fields for:</p>
      <ul class="margin-bottom-2">
        <li>layout - can be vertical or horizontal (optional, vertical by default)</li>
        <li>image (optional)</li>
        <li>altText (optional but recommended if an image is provided)</li>
        <li>name (optional)</li>
        <li>title (optional)</li>
        <li>cta (optional)</li>
        <li>link (optional)</li>
        <li>
          hasTextLink - include this if you want the cta to be a text link and not a button (optional, false
          by default)
        </li>
      </ul>

      <h6>
        <strong>SLOTS:</strong>
      </h6>
      <ul>
        <li>bio (optional)</li>
      </ul>

      <div class="section-padding-50"></div>

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell medium-4">
          <biography-card
            image="https://picsum.photos/768/400?grayscale"
            altText="alternative text"
            title="President, Google.com, Seattle"
            name="John Doe"
            link="http://www.google.com"
            cta="read more"
            layout="vertical"
            hasTextLink
          >
            <slot>
              <div class="like-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
                dicta magnam,
                molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
                ipsum odio
                praesentium quis.
              </div>
            </slot>
          </biography-card>
        </div>
      </div>

      <div class="section-padding-50"></div>

      <biography-card
        image="https://picsum.photos/768?grayscale"
        altText="alternative text"
        title="President, Google.com, Seattle"
        name="John Doe"
        link="http://www.google.com"
        cta="read more"
        layout="horizontal"
      >
        <slot>
          <div class="like-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta
            magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum
            odio
            praesentium quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
            consectetur corporis
            dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim
            facilis ipsum
            odio praesentium quis.
          </div>
        </slot>
      </biography-card>

      <div class="section-padding-50"></div>

      <biography-card
        image="https://picsum.photos/768?grayscale"
        altText="alternative text"
        name="John Doe"
        link="http://www.google.com"
        cta="read more"
        hasTextLink
        layout="horizontal"
      >
        <slot>
          <div class="like-p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta
            magnam,
            molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum
            odio
            praesentium quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
            consectetur corporis
            dicta magnam.
          </div>
        </slot>
      </biography-card>

      <div class="section-padding-100"></div>
    </div>
  </div>
</template>
