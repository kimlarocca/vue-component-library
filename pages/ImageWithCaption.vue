<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">image with caption component</h1>

            <hr class="margin-vertical-3">

            <p><strong>IMAGES:</strong></p>
            <p>We recommend a minimum image width of 1600px for this component.</p>

            <div class="section-padding-25"></div>

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>image</li>
                <li>alternative image text (optional, but highly recommend for SEO)</li>
                <li>caption (optional)</li>
                <li>link (optional)</li>
                <li>gradient - true or false, will display a black gradient along the bottom so that the caption text is
                    more
                    visible (optional, true is the default)
                </li>
            </ul>

            <div class="section-padding-25"></div>

            <p><strong>EXAMPLES:</strong></p>

            <div class="section-padding-25"></div>

            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell medium-auto">
                    <image-with-caption
                            image="https://picsum.photos/600/400?grayscale"
                            altText="lorem ipsum dolor"
                            caption="by john doe"
                            link="http://www.bing.com"
                    >
                    </image-with-caption>
                </div>
                <div class="cell medium-auto">
                    <image-with-caption
                            image="https://picsum.photos/600/400?grayscale"
                            altText="lorem ipsum dolor"
                            caption="by john doe"
                            link="http://www.google.com"
                            :hasGradient="false"
                    >
                    </image-with-caption>
                </div>
            </div>

            <div class="section-padding-100"></div>

        </div>

    </div>
</template>

<script>
    import ImageWithCaption from '../components/ImageWithCaption'

    export default {
        name: 'ImageWithCaptionPage',
        components: {
            'image-with-caption': ImageWithCaption
        }
    }
</script>

