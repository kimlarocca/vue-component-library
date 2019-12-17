<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">cta card component</h1>
            <p>
                <nuxt-link to="/">&lt; back to style guide</nuxt-link>
            </p>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul>
                <li>Image (optional)</li>
                <li>Alt Text (optional but recommended if an image is provided)</li>
                <li>Title (optional)</li>
                <li>Link - this will link the image and the title (optional)</li>
                <li>Description (optional)</li>
                <li>Alignment - can be left, center or centered-on-mobile (optional, the default is left)</li>
            </ul>

            <div class="section-padding-50"></div>

            <cta-card
                    title="Center Aligned CTA"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 1"
                    alignment="center">
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.</div>
                </slot>
            </cta-card>

            <div class="section-padding-50"></div>
            <hr>
            <div class="section-padding-50"></div>

            <cta-card
                    title="Left Aligned CTA"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 2"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.</div>
                </slot>
            </cta-card>

            <div class="section-padding-50"></div>
            <hr>
            <div class="section-padding-50"></div>

            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell medium-4">
                    <cta-card
                            title="Title"
                            image="https://picsum.photos/200?grayscale"
                            altText="placeholder image 1"
                            link="http://www.google.com"
                            alignment="center">
                        <slot>
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.</div>
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
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.</div>
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
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.</div>
                        </slot>
                    </cta-card>
                </div>
            </div>

            <div class="section-padding-50"></div>
            <hr>
            <div class="section-padding-50"></div>

            <cta-card
                    title="Centered On Mobile"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 2"
                    alignment="center-on-mobile"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.</div>
                </slot>
            </cta-card>

            <div class="section-padding-100"></div>

        </div>

    </div>
</template>
