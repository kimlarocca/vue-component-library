<template>
  <div>

    <div class="container margin-vertical-2">

      <h1 class="margin-bottom-1">announcement callout component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>PROPS:</strong></p>
      <ul class="margin-bottom-3">
        <li>backgroundColor: can be white, gray, dark, primary or secondary (optional, default is white)</li>
        <li>title (optional)</li>
        <li>link - button link (optional)</li>
        <li>cta - button text (optional)</li>
        <li>link2 - secondary button link (optional)</li>
        <li>cta2 - secondary button text (optional)</li>
        <li>alignment - can be left or center (optional - default is center)</li>
      </ul>

      <p><strong>SLOTS:</strong></p>
      <ul>
        <li>description (optional)</li>
      </ul>

      <div class="section-padding-50"></div>

      <p><strong>White style:</strong></p>

      <div class="section-padding-50"></div>

      <callout
        title="Lorem Ipsum Dolor Sit Amet"
        cta="request info"
        link="http://www.google.com"
        cta2="learn more"
        link2="http://www.bing.com"
      >
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati officia repellat
            voluptatum.</p>
        </slot>
      </callout>

      <div class="section-padding-50"></div>

      <p><strong>Gray style:</strong></p>

      <div class="section-padding-50"></div>

      <callout
        title="Lorem Ipsum Dolor Sit Amet"
        backgroundColor="gray"
        cta="request info"
        link="http://www.google.com"
        cta2="learn more"
        link2="http://www.bing.com"
      >
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati officia repellat
            voluptatum.</p>
        </slot>
      </callout>

      <div class="section-padding-50"></div>

      <p><strong>Dark style:</strong></p>

      <div class="section-padding-50"></div>

      <callout
        title="Lorem Ipsum Dolor Sit Amet"
        backgroundColor="dark"
        cta="request info"
        link="http://www.google.com"
        cta2="learn more"
        link2="http://www.bing.com"
      >
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati officia repellat
            voluptatum.</p>
        </slot>
      </callout>

      <div class="section-padding-50"></div>

      <p><strong>Primary color style:</strong></p>

      <div class="section-padding-50"></div>

      <callout
        title="Lorem Ipsum Dolor Sit Amet"
        backgroundColor="primary"
        cta="request info"
        link="http://www.google.com"
        cta2="learn more"
        link2="http://www.bing.com"
      >
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati officia repellat
            voluptatum.</p>
        </slot>
      </callout>

      <div class="section-padding-50"></div>

      <p><strong>Secondary color style:</strong></p>

      <div class="section-padding-50"></div>

      <callout
        title="Lorem Ipsum Dolor Sit Amet"
        backgroundColor="secondary"
        cta="request info"
        link="http://www.google.com"
        cta2="learn more"
        link2="http://www.bing.com"
      >
        <slot>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati officia repellat
            voluptatum.</p>
        </slot>
      </callout>

      <div class="section-padding-50"></div>

      <p><strong>On a right rail:</strong></p>

      <div class="section-padding-50"></div>

      <div class="grid-x grid-margin-x grid-margin-y">
        <div class="cell medium-8 small-12">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta fugit labore magni non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta fugit labore magni non?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta fugit labore magni non?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta fugit labore magni non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta fugit labore magni non?</p>
        </div>
        <div class="cell medium-4 small-12">
          <callout
            title="Lorem Ipsum Dolor Sit Amet"
            backgroundColor="gray"
            cta="request info"
            link="http://www.google.com"
            alignment="left"
          >
            <slot>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati officia repellat
                voluptatum.</p>
            </slot>
          </callout>
        </div>
      </div>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
