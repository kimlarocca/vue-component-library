<template>
  <div class="style-guide">

    <div class="container">

      <div class="bg-light-gray padding-1">
        <div class="grid-x grid-margin-x grid-margin-y align-middle">
          <div class="cell large-2 medium-3">
            <img src="https://via.placeholder.com/200x60?text=logo" alt="san francisco symphony logo">
          </div>
          <div class="cell large-2 medium-3">
            <div class="subhead6">pattern library <i class="fas fa-heart"></i></div>
          </div>
          <div class="cell auto large-text-right medium-text-right">
            <div class="subhead6"><a href="#components">components</a> | <a href="#layouts">layouts</a></div>
          </div>
        </div>
      </div>

      <section class="section-border">
        <h1 class="margin-bottom-1">H1 Headline No. 1</h1>
        <h2 class="margin-bottom-1">H2 Headline No. 2</h2>
        <h3 class="margin-bottom-1">H3 Headline No. 3</h3>
        <h4 class="margin-bottom-1">H4 Headline No. 4</h4>
        <h5 class="margin-bottom-1">H5 Headline No. 5</h5>
        <h6>H6 Headline No. 6</h6>
      </section>

      <section class="section-border">
        <p>Normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
        <p class="small-body-text">.small-body-text use this for smaller text</p>
        <p><a>This is an inline link</a></p>
        <p><a class="caret-right">.caret-right</a></p>
        <p><a class="caret-down">.caret-down</a></p>
      </section>

      <section class="section-border">
        <p class="like-h3">Colors</p>
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-primary"><span>$primary</span></div>
          <div class="cell auto bg-secondary"><span>$secondary</span></div>
          <div class="cell auto bg-tertiary"><span>$tertiary</span></div>
          <div class="cell auto bg-quaternary"><span>$quaternary</span></div>
        </div>
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-light-gray"><span>$light-gray</span></div>
          <div class="cell auto bg-medium-gray"><span>$medium-gray</span></div>
          <div class="cell auto bg-medium-dark-gray"><span>$medium-dark-gray</span></div>
          <div class="cell auto bg-dark-gray"><span>$dark-gray</span></div>
        </div>
      </section>

      <section class="section-border">
        <p class="subhead5">Buttons</p>
        <p><a class="button">.button</a></p>
        <div class="bg-dark-gray padding-2">
          <p><a class="button ghost">.button .ghost</a></p>
          <p><a class="button ghost-white">.button .ghost-white</a></p>
          <p><a class="button ghost-primary">.button .ghost-primary</a></p>
          <p><a class="button ghost-secondary">.button .ghost-secondary</a></p>
        </div>
      </section>

      <div class="section-padding-50"></div>

      <h2 class="margin-bottom-1" id="components">components</h2>

      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Accordions">Accordions</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Breadcrumbs">Breadcrumbs</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Callout">Callouts</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Card">Cards</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="ContentBlade">Content Blades</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="CtaCard">CTA Cards</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Carousel">Carousels (Images, Heroes, Cards, Featured X)</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="footer">Footer</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Hero">Heroes</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="ImageWithCaption">Images With Captions</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="MediaBlock">Media Blocks</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Pagination">Pagination</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Reviews">Reviews / Testimonials</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="SocialLinks">Social Links</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="TeamMemberCard">Team Member Cards</nuxt-link>
      </p>

      <div class="section-padding-50"></div>

      <h2 class="margin-bottom-1" id="layouts">layouts</h2>

      <p class="subhead5 margin-bottom-1">
        coming soon
      </p>

    </div>

  </div>
</template>

<style scoped lang="scss">
  @import "../assets/scss/variables";

  .style-guide {
    background: white;
    padding: 30px 0 50px;

    .section-border {
      margin-bottom: 50px;
      padding-left: 2rem;
      border-left: solid 2px $primary;
    }

    .colors {
      margin-bottom: 30px;

      .cell {
        height: 100px;

        span {
          padding: 10px;
          background: white;
        }
      }
    }
  }
</style>
