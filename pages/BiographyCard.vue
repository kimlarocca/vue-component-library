<template>
    <div>
        <div class="container">
            <h1>biography card</h1>

            <hr class="margin-vertical-3"/>

            <p><strong>IMAGES:</strong></p>
            <p>We recommend a minimum image width of 768px for this component.</p>

            <v-spacer/>

            <p>
                <strong>RULES &amp; DEPENDENCIES:</strong>
            </p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>layout - can be vertical or horizontal (optional, vertical by default)</li>
                <li>image (optional)</li>
                <li>altText (optional but recommended if an image is provided)</li>
                <li>name (optional)</li>
                <li>title (optional)</li>
                <li>cta (optional)</li>
                <li>link (optional)</li>
                <li>
                    hasTextLink - include this if you want the cta to be a text link and not a button (optional, false
                    by default)
                </li>
                <li>bio (optional)</li>
            </ul>

            <v-spacer/>

            <p>
                <strong>EXAMPLES:</strong>
            </p>

            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell medium-4">
                    <biography-card
                            image="https://picsum.photos/768/400?grayscale"
                            altText="alternative text"
                            title="President, Google.com, Seattle"
                            name="John Doe 1"
                            link="http://www.google.com"
                            cta="read more"
                            layout="vertical"
                            hasTextLink
                    >
                        <slot>
                            <div class="like-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
                                dicta magnam,
                                molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
                                ipsum odio
                                praesentium quis.
                            </div>
                        </slot>
                    </biography-card>
                </div>
                <div class="cell medium-4">
                    <biography-card
                            image="https://picsum.photos/768/400?grayscale"
                            altText="alternative text"
                            title="President, Google.com, Seattle"
                            name="John Doe 2"
                            link="http://www.google.com"
                            cta="read more"
                            layout="vertical"
                            hasTextLink
                    >
                        <slot>
                            <div class="like-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
                                dicta magnam,
                                molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
                                ipsum odio
                                praesentium quis.
                            </div>
                        </slot>
                    </biography-card>
                </div>
                <div class="cell medium-4">
                    <biography-card
                            image="https://picsum.photos/768/400?grayscale"
                            altText="alternative text"
                            title="President, Google.com, Seattle"
                            name="John Doe 3"
                            link="http://www.google.com"
                            cta="read more"
                            layout="vertical"
                            hasTextLink
                    >
                        <slot>
                            <div class="like-p">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis
                                dicta magnam,
                                molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis
                                ipsum odio
                                praesentium quis.
                            </div>
                        </slot>
                    </biography-card>
                </div>
            </div>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <biography-card
                    image="https://picsum.photos/768?grayscale"
                    altText="alternative text"
                    title="President, Google.com, Seattle"
                    name="John Doe"
                    link="http://www.google.com"
                    cta="read more"
                    layout="horizontal"
            >
                <slot>
                    <div class="like-p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta
                        magnam,
                        molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum
                        odio
                        praesentium quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
                        consectetur corporis
                        dicta magnam, molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim
                        facilis ipsum
                        odio praesentium quis.
                    </div>
                </slot>
            </biography-card>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <biography-card
                    image="https://picsum.photos/768?grayscale"
                    altText="alternative text"
                    name="John Doe"
                    link="http://www.google.com"
                    cta="read more"
                    hasTextLink
                    layout="horizontal"
            >
                <slot>
                    <div class="like-p">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae consectetur corporis dicta
                        magnam,
                        molestias natus nobis, placeat, quae quia suscipit ullam vitae voluptatem? Enim facilis ipsum
                        odio
                        praesentium quis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae
                        consectetur corporis
                        dicta magnam.
                    </div>
                </slot>
            </biography-card>

            <v-spacer :size="[2,3,4]"></v-spacer>
        </div>
    </div>
</template>

<script>
    import BiographyCard from '../components/BiographyCard'

    export default {
        name: 'BiographyCardPage',
        components: {
            'biography-card': BiographyCard
        }
    }
</script>
