<template>
    <div class="sg-table-of-contents" :class="{'open': isOpen}">
        <div @click="toggleMenu" class="menu"><i class="fas fa-bars" :class="{'fa-times': isOpen}"></i></div>
        <div class="content">
            <p @click="toggleMenu" class="margin-bottom-2"><strong>
                <nuxt-link to="/">Home</nuxt-link>
            </strong></p>
            <p><strong>Style Guide</strong></p>
            <ul class="margin-bottom-2">
                <li>
                    <p @click="toggleMenu">
                        <nuxt-link to="/#typography">Typography</nuxt-link>
                    </p>
                    <p @click="toggleMenu">
                        <nuxt-link to="/#colors">Colors</nuxt-link>
                    </p>
                    <p @click="toggleMenu">
                        <nuxt-link to="/#buttons">Buttons</nuxt-link>
                    </p>
                    <p @click="toggleMenu">
                        <nuxt-link to="/#grid">The Grid</nuxt-link>
                    </p>
                    <p @click="toggleMenu">
                        <nuxt-link to="/Forms">Forms</nuxt-link>
                    </p>
                </li>
            </ul>
            <p><strong>Components</strong></p>
            <ul class="margin-bottom-2">
                <li v-for="(item, index) in tocComponents" :key="index">
                    <p @click="toggleMenu">
                        <nuxt-link :to="'/'+item.link">{{ item.name }}</nuxt-link>
                    </p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                tocComponents: [
                    { 'name': 'Accordions', 'link': 'Accordions' },
                    { 'name': 'Base Components', 'link': 'BaseComponents' },
                    { 'name': 'Biography Cards', 'link': 'BiographyCard' },
                    { 'name': 'Breadcrumbs', 'link': 'Breadcrumbs' },
                    { 'name': 'Callouts', 'link': 'Callout' },
                    { 'name': 'Cards', 'link': 'Card' },
                    { 'name': 'Content Blades', 'link': 'ContentBlade' },
                    { 'name': 'Cookie Notification', 'link': 'CookieNotification' },
                    { 'name': 'CTA Cards', 'link': 'CtaCard' },
                    { 'name': 'Carousels', 'link': 'Carousel' },
                    { 'name': 'Footer', 'link': 'Footer' },
                    { 'name': 'Heroes', 'link': 'Hero' },
                    { 'name': 'Images With Captions', 'link': 'ImageWithCaption' },
                    { 'name': 'Media Blocks', 'link': 'MediaBlock' },
                    { 'name': 'Modal Windows', 'link': 'ModalWindow' },
                    { 'name': 'Pagination', 'link': 'Pagination' },
                    { 'name': 'Reviews / Testimonials', 'link': 'Reviews' },
                    { 'name': 'Social Links', 'link': 'SocialLinks' },
                    { 'name': 'Tabs', 'link': 'Tabs' }
                ],
                isOpen: false
            }
        },
        methods: {
            toggleMenu () {
                this.isOpen = !this.isOpen
                console.log('toggle')
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/variables";

    .sg-table-of-contents {
        position: fixed;
        background: white;
        top: 0;
        left: -215px;
        height: 100vh;
        border-right: solid 2px $primary;
        width: 250px;
        z-index: 100;
        transition: .25s all ease-in;

        .menu {
            position: absolute;
            width: 40px;
            height: 40px;
            top: 30px;
            left: 229px;
            z-index: 200;
            background: white;
            border-radius: 50%;
            border: solid 2px $primary;
            cursor: pointer;
            transition: $transition;

            &:hover {
                background: $light-gray;
            }

            i {
                color: $primary;
                font-size: 22px;
                padding: 7px 8.5px;
            }
        }

        .content {
            position: absolute;
            width: 210px;
            height: 100%;
            top: 150px;
            left: 30px;
            bottom: 30px;
            overflow-y: hidden;

            p {
                margin-bottom: .5rem;
            }
        }

        &.open {
            left: 0;

            .content {
                overflow-y: auto;
                padding-bottom: 150px;
            }

            i {
                padding: 7px 10px;
            }
        }
    }
</style>
