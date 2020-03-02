<template>
    <div>

        <div class="container">
            <h1>media block</h1>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>url: the iframe url for the youtube or vimeo embed</li>
            </ul>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>EXAMPLES:</strong></p>

            <p>youtube:</p>
            <media-block url="https://www.youtube.com/embed/ScMzIvxBSi4"/>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p>vimeo:</p>
            <media-block url="https://player.vimeo.com/video/90283590"/>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p>in a grid:</p>
            <div class="grid-x grid-margin-x">
                <div class="cell large-6 medium-6">
                    <media-block url="https://www.youtube.com/embed/ScMzIvxBSi4"/>
                </div>
                <div class="cell large-6 medium-6">
                    <media-block url="https://player.vimeo.com/video/90283590"/>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
    import MediaBlock from '../components/MediaBlock'

    export default {
        components: {
            'media-block': MediaBlock
        }
    }
</script>
