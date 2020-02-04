<template>

    <div class="card">
        <div v-if="hasHeader" class="header">{{ header }}</div>
        <a v-if="hasLink" :href="link" :aria-label="title"></a>
        <img v-if="hasImage" :src="image" :alt="altText"/>
        <div v-if="hasVideo">
            <media-block :url="video"></media-block>
        </div>
        <div class="content">
            <div v-if="hasSubtitle" class="subtitle">{{ subtitle }}</div>
            <div class="title">{{ title }}</div>
            <template v-if="hasTextLink">
                <div class="learn-more caret-right">Learn more</div>
            </template>
        </div>
    </div>

</template>

<script>
    import MediaBlock from '~/components/MediaBlock'

    export default {
        name: 'Card',
        components: {
            'media-block': MediaBlock
        },
        props: {
            header: String,
            video: String,
            image: String,
            altText: String,
            subtitle: String,
            title: String,
            link: String,
            hasTextLink: {
                default: false
            }
        },
        computed: {
            hasHeader () {
                return !!this.$props['header']
            },
            hasImage () {
                return !!this.$props['image']
            },
            hasLink () {
                return !!this.$props['link']
            },
            hasSubtitle () {
                return !!this.$props['subtitle']
            },
            hasVideo () {
                return !!this.$props['video']
            }
        }
    }
</script>
