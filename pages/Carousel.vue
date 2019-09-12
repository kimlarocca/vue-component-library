<template>
  <div>
    <div class="container">
      <h1>Carousels</h1>
      <p class="subhead5 padding">
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>props:</strong></p>
      <ul>
        <li>perPage: number of slides to show per page (default is 2)</li>
        <li>see more options at <a href="https://ssense.github.io/vue-carousel/api/">https://ssense.github.io/vue-carousel/api/</a>
        </li>
      </ul>

      <div class="section-padding-50"></div>

    </div>

    <section>
      <carousel perPage="1">
        <slide>
          <img src="https://placekitten.com/1900/900">
        </slide>
        <slide>
          <img src="https://placekitten.com/1901/900">
        </slide>
        <slide>
          <img src="https://placekitten.com/1899/900">
        </slide>
      </carousel>
    </section>

    <div class="section-padding-100"></div>

    <div class="container">
      <p><strong>Card Carousel Example</strong></p>
      <p class="margin-bottom-2">shows 3 on desktop, 2 on tablet, and 1 on mobile</p>

      <section class="card-carousel">
        <carousel perPage="1" :perPageCustom="[[769, 2], [1024, 3]]">
          <slide>
            <card
              image="https://placekitten.com/800/550"
              altText="alternative text"
              link="http://www.google.com"
              hasTextLink="true"
              subtitle="subtitle"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            >
            </card>
          </slide>
          <slide>
            <card
              image="https://placekitten.com/800/550"
              altText="alternative text"
              link="http://www.google.com"
              hasTextLink="true"
              subtitle="subtitle"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            >
            </card>
          </slide>
          <slide>
            <card
              image="https://placekitten.com/800/550"
              altText="alternative text"
              link="http://www.google.com"
              hasTextLink="true"
              subtitle="subtitle"
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
            >
            </card>
          </slide>
        </carousel>
      </section>
    </div>

    <div class="section-padding-100"></div>

  </div>
</template>
