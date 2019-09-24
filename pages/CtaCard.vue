<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">cta card component</h1>
            <p>
                <nuxt-link to="/">&lt; back to style guide</nuxt-link>
            </p>

            <hr class="margin-vertical-3">

            <p><strong>PROPS:</strong></p>
            <ul>
                <li>title (optional)</li>
                <li>image</li>
                <li>altText (optional but recommended)</li>
                <li>alignment - can be left, center or centered-on-mobile (optional, default is left)</li>
            </ul>

            <div class="section-padding-50"></div>

            <cta-card
                    title="Center Aligned CTA"
                    image="https://picsum.photos/200?grayscale"
                    altText="placeholder image 1"
                    alignment="center">
                <slot>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.</p>
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
                            alignment="center">
                        <slot>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.</p>
                        </slot>
                    </cta-card>
                </div>
                <div class="cell medium-4">
                    <cta-card
                            title="Title"
                            image="https://picsum.photos/200?grayscale"
                            altText="placeholder image 1"
                            alignment="center">
                        <slot>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.</p>
                        </slot>
                    </cta-card>
                </div>
                <div class="cell medium-4">
                    <cta-card
                            title="Title"
                            image="https://picsum.photos/200?grayscale"
                            altText="placeholder image 1"
                            alignment="center">
                        <slot>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi
                                tempore. Cum
                                iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem
                                minus
                                officiis optio quo rerum sit voluptatum.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore reiciendis sequi tempore. Cum
                        iure necessitatibus nobis quis reprehenderit! Ad asperiores atque ea exercitationem minus
                        officiis optio quo rerum sit voluptatum.</p>
                </slot>
            </cta-card>

            <div class="section-padding-100"></div>

        </div>

    </div>
</template>
