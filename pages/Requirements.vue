<template>
    <div class="requirements-generator">

        <v-spacer :size="[2,3,4]"></v-spacer>

        <div v-if="!submitted" class="container">
            <h1>Requirements Document Generator</h1>
            <form @submit.prevent="submitted = !submitted">
                <fieldset class="large-7 cell">
                    <legend>Select the components you wish to include:</legend>
                    <label><input id="accordions" type="checkbox" v-model="accordions">accordions</label>
                    <label><input id="biographyCard" type="checkbox" v-model="biographyCard">biography card</label>
                    <label><input id="breadcrumbs" type="checkbox" v-model="breadcrumbs">breadcrumbs</label>
                    <label><input id="callout" type="checkbox" v-model="callout">callout</label>
                    <label><input id="card" type="checkbox" v-model="card">card</label>
                    <label><input id="carousel" type="checkbox" v-model="carousel">carousel</label>
                    <label><input id="contentBlade" type="checkbox" v-model="contentBlade">contentBlade</label>
                    <label><input id="footer" type="checkbox" v-model="footer">footer</label>
                    <label><input id="hero" type="checkbox" v-model="hero">hero</label>
                    <label><input id="imageWithCaptions" type="checkbox"
                                  v-model="imageWithCaptions">imageWithCaptions</label>
                    <label><input id="mediaBlock" type="checkbox" v-model="mediaBlock">mediaBlock</label>
                    <label><input id="pagination" type="checkbox" v-model="pagination">pagination</label>
                    <label><input id="reviews" type="checkbox" v-model="reviews">reviews</label>
                    <label><input id="socialLinks" type="checkbox" v-model="socialLinks">socialLinks</label>
                </fieldset>
                <input type="submit" class="button" value="Submit">
            </form>
        </div>
        <div v-else>
            <div v-if="accordions">
                <accordions-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="biographyCard">
                <biography-card-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="breadcrumbs">
                <breadcrumbs-card-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="callout">
                <callout-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="card">
                <card-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="carousel">
                <carousel-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="ctaCard">
                <cta-card-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="footer">
                <footer-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="hero">
                <hero-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="imageWithCaptions">
                <image-with-caption-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="mediaBlock">
                <media-block-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="pagination">
                <pagination-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="reviews">
                <reviews-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
            <div v-if="socialLinks">
                <social-links-page/>
                <hr>
                <v-spacer :size="[2,3,4]"></v-spacer>
            </div>
        </div>
    </div>
</template>

<script>
    import AccordionsPage from '../pages/Accordions'
    import BiographyCardPage from '../pages/BiographyCard'
    import BreadcrumbsCardPage from '../pages/Breadcrumbs'
    import CalloutPage from '../pages/Callout'
    import CardPage from '../pages/Card'
    import CarouselPage from '../pages/Carousel'
    import CtaCardPage from '../pages/CtaCard'
    import FooterPage from '../pages/Footer'
    import HeroPage from '../pages/Hero'
    import ImageWithCaptionPage from '../pages/ImageWithCaption'
    import MediaBlockPage from '../pages/MediaBlock'
    import PaginationPage from '../pages/Pagination'
    import ReviewsPage from '../pages/Reviews'
    import SocialLinksPage from '../pages/SocialLinks'

    export default {
        layout: 'blank',
        components: {
            AccordionsPage,
            BiographyCardPage,
            BreadcrumbsCardPage,
            CalloutPage,
            CardPage,
            CarouselPage,
            CtaCardPage,
            FooterPage,
            HeroPage,
            ImageWithCaptionPage,
            MediaBlockPage,
            PaginationPage,
            ReviewsPage,
            SocialLinksPage
        },
        data () {
            return {
                submitted: false,
                accordions: true,
                biographyCard: true,
                breadcrumbs: true,
                callout: true,
                card: true,
                carousel: true,
                contentBlade: true,
                ctaCard: true,
                footer: true,
                hero: true,
                imageWithCaptions: true,
                mediaBlock: true,
                pagination: true,
                reviews: true,
                socialLinks: true
            }
        }
    }
</script>
