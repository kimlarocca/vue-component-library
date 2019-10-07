<template>
    <div>

        <div class="grid-x grid-margin-x grid-margin-y"
             :class="{ 'text-center': isCentered, 'text-center medium-text-left': isCenteredOnMobile }"
        >
            <div class="cell small-12"
                 :class="{ 'medium-2': !isCentered, 'small-12': isCentered }"
            >
                <a v-if="hasLink" :href="link">
                    <img :src="image" :alt="altText"/>
                </a>
                <img v-else :src="image" :alt="altText"/>

            </div>
            <div class="cell medium-auto small-12">
                <a v-if="hasLink && hasTitle" :href="link">
                    <h3 v-if="hasTitle" class="margin-bottom-1">{{ title }}</h3>
                </a>
                <h3 v-if="!hasLink && hasTitle" class="margin-bottom-1">{{ title }}</h3>
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'CtaCard',
        props: {
            alignment: {
                default: 'left'
            },
            title: String,
            image: String,
            link: String,
            altText: String
        },
        computed: {
            isCentered () {
                return this.$props.alignment === 'center'
            },
            isCenteredOnMobile () {
                return this.$props.alignment === 'center-on-mobile'
            },
            hasTitle () {
                return !!this.$props.title
            },
            hasLink () {
                return !!this.$props.link
            }
        }
    }
</script>
