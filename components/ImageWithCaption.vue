<template>

    <div class="image-with-caption">
        <a v-if="hasLink" :href="link" :aria-label="caption"></a>
        <img :src="image" :alt="altText">
        <div v-if="hasCaption" class="caption">{{caption}}</div>
        <div v-if="hasGradient" class="black-gradient-overlay"></div>
    </div>

</template>

<script>
    export default {
        name: 'PhotoWithCaption',
        props: {
            image: String,
            altText: String,
            caption: String,
            link: String,
            hasGradient: {
                default: true
            }
        },
        computed: {
            hasLink () {
                return !!this.$props['link']
            },
            hasCaption () {
                return !!this.$props['caption']
            }
        }
    }
</script>
