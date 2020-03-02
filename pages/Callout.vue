<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">callout component</h1>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>backgroundColor: can be white, gray, dark, primary or secondary (optional, default is white)</li>
                <li>title (optional)</li>
                <li>link - button link (optional)</li>
                <li>cta - button text (optional)</li>
                <li>link2 - secondary button link (optional)</li>
                <li>cta2 - secondary button text (optional)</li>
                <li>alignment - can be left or center (optional - default is center)</li>
                <li>content (optional)</li>
            </ul>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>EXAMPLES:</strong></p>
            <v-spacer/>

            <p><strong>White style:</strong></p>

            <v-spacer/>

            <callout
                    title="Lorem Ipsum Dolor Sit Amet"
                    cta="request info"
                    link="http://www.google.com"
                    cta2="learn more"
                    link2="http://www.bing.com"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati
                        officia repellat
                        voluptatum.
                    </div>
                </slot>
            </callout>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>Gray style:</strong></p>

            <v-spacer/>

            <callout
                    title="Lorem Ipsum Dolor Sit Amet"
                    backgroundColor="gray"
                    cta="request info"
                    link="http://www.google.com"
                    cta2="learn more"
                    link2="http://www.bing.com"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati
                        officia repellat
                        voluptatum.
                    </div>
                </slot>
            </callout>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>Dark style:</strong></p>

            <v-spacer/>

            <callout
                    title="Lorem Ipsum Dolor Sit Amet"
                    backgroundColor="dark"
                    cta="request info"
                    link="http://www.google.com"
                    cta2="learn more"
                    link2="http://www.bing.com"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati
                        officia repellat
                        voluptatum.
                    </div>
                </slot>
            </callout>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>Primary color style:</strong></p>

            <v-spacer/>

            <callout
                    title="Lorem Ipsum Dolor Sit Amet"
                    backgroundColor="primary"
                    cta="request info"
                    link="http://www.google.com"
                    cta2="learn more"
                    link2="http://www.bing.com"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati
                        officia repellat
                        voluptatum.
                    </div>
                </slot>
            </callout>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>Secondary color style:</strong></p>

            <v-spacer/>

            <callout
                    title="Lorem Ipsum Dolor Sit Amet"
                    backgroundColor="secondary"
                    cta="request info"
                    link="http://www.google.com"
                    cta2="learn more"
                    link2="http://www.bing.com"
            >
                <slot>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero obcaecati
                        officia repellat
                        voluptatum.
                    </div>
                </slot>
            </callout>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <p><strong>On a right rail:</strong></p>

            <v-spacer/>

            <div class="grid-x grid-margin-x grid-margin-y">
                <div class="cell medium-8 small-12">
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea
                        fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta
                        fugit labore magni non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
                        ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae?
                        Dicta fugit labore magni non?
                    </div>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea
                        fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta
                        fugit labore magni non?
                    </div>
                    <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque ea
                        fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae? Dicta
                        fugit labore magni non? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam atque
                        ea fugiat iure maiores, totam veritatis vero. Animi excepturi non quas, qui ut velit vitae?
                        Dicta fugit labore magni non?
                    </div>
                </div>
                <div class="cell medium-4 small-12">
                    <callout
                            title="Lorem Ipsum Dolor Sit Amet"
                            backgroundColor="gray"
                            cta="request info"
                            link="http://www.google.com"
                            alignment="left"
                    >
                        <slot>
                            <div class="like-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum libero
                                obcaecati officia repellat
                                voluptatum.
                            </div>
                        </slot>
                    </callout>
                </div>
            </div>

            <v-spacer :size="[2,3,4]"></v-spacer>

        </div>

    </div>
</template>

<script>
    import Callout from '../components/Callout'

    export default {
        name: 'CalloutPage',
        components: {
            'callout': Callout
        }
    }
</script>
