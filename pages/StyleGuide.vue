<template>
  <div id="app" class="style-guide">

    <div class="container">

      <div class="gray-container">
        <div class="grid-x grid-margin-x grid-margin-y align-middle">
          <div class="cell large-2 medium-3">
            <img src="../assets/images/logo-bw.png" alt="san francisco symphony logo">
          </div>
          <div class="cell large-2 medium-3">
            <div class="subhead6">pattern library</div>
          </div>
          <div class="cell auto large-text-right medium-text-right">
            <div class="subhead6"><a href="#layouts">Layouts</a> | <a href="#components">components</a></div>
          </div>
        </div>
      </div>

      <section class="section-border">
        <h1>H1 Headline No. 1</h1>
        <h2>H2 Headline No. 2</h2>
        <h3>H3 Headline No. 3</h3>
      </section>

      <section class="section-border">
        <p class="subhead1">.subhead1 Subhead No. 1</p>
        <p class="subhead2">.subhead2 Subhead No. 2</p>
        <p class="subhead3">.subhead3 Subhead No. 3</p>
        <p class="subhead4">.subhead4 Subhead No. 4</p>
        <p class="subhead5">.subhead5 Subhead No. 5</p>
        <p class="subhead6">.subhead6 Subhead No. 6</p>
      </section>

      <section class="section-border">
        <p class="body-text1">.body-text1 Body Text No. 1</p>
        <p class="body-text2">.body-text2 Body Text No. 1</p>
        <p class="body-text3">.body-text3 Body Text No. 1</p>
        <p class="body-text4">.body-text4 Body Text No. 1</p>
      </section>

      <section class="section-border">
        <p>Normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.</p>
        <p><a>This is an inline link</a></p>
        <p><a class="caret-right">.caret-right</a></p>
        <p><a class="caret-down">.caret-down</a></p>
      </section>

      <section class="section-border">
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-yellow"><span>$yellow</span></div>
          <div class="cell auto bg-brown"><span>$brown</span></div>
          <div class="cell auto bg-purple"><span>$purple</span></div>
          <div class="cell auto bg-blue"><span>$blue</span></div>
        </div>
        <div class="grid-x grid-margin-x colors">
          <div class="cell auto bg-light-gray"><span>$light-gray</span></div>
          <div class="cell auto bg-medium-gray"><span>$medium-gray</span></div>
          <div class="cell auto bg-dark-gray"><span>$dark-gray</span></div>
        </div>
      </section>

      <section class="section-border">
        <p class="subhead5">Buttons</p>
        <div class="black-container">
          <p><a class="button">.button</a></p>
          <p><a class="button ghost">.button .ghost</a></p>
        </div>
        <p><a class="button gray">.button .gray</a></p>
        <p><a class="button blue">.button .blue</a></p>
        <p><a class="button light-gray">.button .light-gray</a></p>
        <p><a class="button ghost-black">.button .ghost-black</a></p>
        <p><a class="button purple margin-right-1">.button .purple</a></p>
      </section>

      <h2 class="padding" id="layouts">layouts and examples</h2>

      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="HomePage">home page with the news mosaic</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="AboutPage">about page</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="ConcertDetail">concert detail page with "at a glance", "concert extras", &amp; "related
          content"
        </nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="MediaBlocks">media blocks</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Accordions">content blinds (accordions)</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Carousel">carousels</nuxt-link>
      </p>

      <h2 class="padding" id="components">components</h2>

      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="AnnouncementCallout">Announcement Callout</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="CategoryCard">Category Card</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="ContentBlade">Content Blade</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="EventCard">Event Card</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="FeatureGridCard">Feature Grid Card</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Footer">Footer</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="Hero">Hero</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="MediaBlocks">Media Blocks</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="MiniHero">Mini Hero</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="NewsCard">News Card</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="PerformanceCard">Performance Card</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="PersonProfile">Person Profile</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="PodcastCard">Podcast Card / Inline Media PLayer</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="PressReleaseCard">Press Release Card</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="SocialLinks">Social Links</nuxt-link>
      </p>
      <p class="subhead5 margin-bottom-1">
        <nuxt-link to="SponsorshipCallout">Sponsorship Callout</nuxt-link>
      </p>

    </div>

  </div>
</template>

<style scoped lang="scss">
  .style-guide {
    background: white;
    padding: 30px 0;

    .gray-container {
      background: #f0f0f0;
      padding: 20px;
      margin-bottom: 60px;
    }

    .black-container {
      background: black;
      padding: 20px;
      margin-bottom: 60px;
    }

    .padding {
      padding: 80px 0 1rem;
    }

    .padding-smaller {
      padding: 1rem 0;
    }

    .section-border {
      margin-bottom: 60px;
      padding-left: 38px;
      border-left: solid 2px #ffc373;
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
