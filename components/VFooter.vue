<template>
  <footer>
    <div class="container">

      <div class="grid-x grid-margin-x">
        <div class="cell large-4 content">
          <div class="margin-bottom-2 text-center large-text-left">
            <img src="https://via.placeholder.com/225x70?text=logo" alt="placeholder image"/>
          </div>
          <p class="text-center large-text-left margin-bottom-2"><a class="button" href="#">footer cta button</a></p>
          <ul class="social-links text-center large-text-left">
            <social-link
              icon="fab fa-facebook-f"
              link="https://www.facebook.com"
              altText="facebook"
            >
            </social-link>
            <social-link
              icon="fab fa-twitter"
              link="https://www.twitter.com"
              altText="twitter"
            >
            </social-link>
            <social-link
              icon="fab fa-youtube"
              link="https://www.youtube.com"
              altText="youtube"
            >
            </social-link>
            <social-link
              icon="fab fa-instagram"
              link="https://www.instagram.com"
              altText="instagram"
            >
            </social-link>
            <social-link
              icon="fab fa-linkedin-in"
              link="https://www.linkedin.com"
              altText="linkedin"
            >
            </social-link>
          </ul>
        </div>
        <div class="cell large-2 menus">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <h6>services</h6>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in servicesLinks" :key="index"><a :href="link.url">{{ link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
        <div class="cell large-2">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <h6>why us</h6>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in whyLinks" :key="index"><a :href="link.url">{{ link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
        <div class="cell large-2">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <h6>about us</h6>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in aboutLinks" :key="index"><a :href="link.url">{{ link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
        <div class="cell large-2">
          <accordion mobileOnly="true" class="no-border-on-desktop">
            <accordion-item>
              <template slot="header">
                <h6>resources</h6>
              </template>
              <template slot="content">
                <ul class="menu">
                  <li v-for="(link, index) in resourcesLinks" :key="index"><a :href="link.url">{{ link.name }}</a></li>
                </ul>
              </template>
            </accordion-item>
          </accordion>
        </div>
      </div>

      <div class="bottom content">
        <ul>
          <li class="copyright">©2014-{{ currentYear }} Company Name. All rights reserved.</li>
          <li v-for="(link, index) in footerLinks" :key="index">
            <a :href="link.url"> {{ link.name }}</a>
          </li>
        </ul>
      </div>

    </div>
  </footer>
</template>

<script>
  import navigation from '../assets/json/navigation'

  export default {
    name: 'Footer',
    data: function () {
      return {
        currentYear: this.getCurrentYear(),
        servicesLinks: navigation.services,
        whyLinks: navigation.why,
        aboutLinks: navigation.about,
        resourcesLinks: navigation.resources,
        footerLinks: navigation.footerLinks
      }
    },
    methods: {
      getCurrentYear () {
        return new Date().getFullYear()
      }
    }
  }
</script>
