<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">cta card component</h1>

            <hr class="margin-vertical-3">

            <p><strong>IMAGES:</strong></p>
            <p>We recommend a minimum image width of 768px for this component.</p>

            <v-spacer/>

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>Image (optional)</li>
                <li>Alternative Image Text (optional but recommended if an image is provided)</li>
                <li>Title (optional)</li>
                <li>Link (optional)</li>
                <li>Description (optional)</li>
                <li>Alignment: can be left, center or centered-on-mobile (optional, the default is left)</li>
            </ul>Note: the user is cookied so that once the close the banner they do not see the notice again for the
            rest of their session.

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>EXAMPLES:</strong></p>

            <cta-card
                    title="Center Aligned CTA"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 1"
                    alignment="center">
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis
                        sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.
                    </div>
                </slot>
            </cta-card>

            <hr class="margin-vertical-3">

            <cta-card
                    title="Left Aligned CTA"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 2"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis
                        sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.
                    </div>
                </slot>
            </cta-card>

            <hr class="margin-vertical-3">

            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell medium-4">
                    <cta-card
                            title="Title"
                            image="https://picsum.photos/200?grayscale"
                            altText="placeholder image 1"
                            link="http://www.google.com"
                            alignment="center">
                        <slot>
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                                reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.
                            </div>
                        </slot>
                    </cta-card>
                </div>
                <div class="cell medium-4">
                    <cta-card
                            title="Title"
                            image="https://picsum.photos/200?grayscale"
                            altText="placeholder image 1"
                            link="http://www.bing.com"
                            alignment="center">
                        <slot>
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                                reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.
                            </div>
                        </slot>
                    </cta-card>
                </div>
                <div class="cell medium-4">
                    <cta-card
                            title="Title"
                            image="https://picsum.photos/200?grayscale"
                            altText="placeholder image 1"
                            link="http://www.yahoo.com"
                            alignment="center">
                        <slot>
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
                                reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.
                            </div>
                        </slot>
                    </cta-card>
                </div>
            </div>

            <hr class="margin-vertical-3">

            <cta-card
                    title="Centered On Mobile"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 2"
                    alignment="center-on-mobile"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis
                        sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.
                    </div>
                </slot>
            </cta-card>

            <v-spacer :size="[2,3,4]"></v-spacer>

        </div>

    </div>
</template>

<script>
    import CtaCard from '../components/CtaCard'

    export default {
        name: 'CtaCardPage',
        components: {
            'cta-card': CtaCard
        }
    }
</script>
