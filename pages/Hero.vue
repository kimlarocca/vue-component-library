<template>

    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">hero component</h1>

            <hr class="margin-vertical-3">

            <p><strong>IMAGES:</strong></p>
            <p>We recommend a minimum image width of 1600px for this component.</p>

            <v-spacer/>

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>image</li>
                <li>mobile image (optional - if not given, the desktop image will be displayed)</li>
                <li>size: can be large or small, large is the default (optional)</li>
                <li>alignment: can be left or center (optional - center is the default)</li>
            </ul>

            <v-spacer :size="[2,3,4]"></v-spacer>
            <p><strong>EXAMPLES:</strong></p>

        </div>

        <hero
                size="large"
                mobileImage="https://picsum.photos/800/400?grayscale"
                image="https://picsum.photos/1600/900?grayscale"
                cta="click here for more information"
                link="http://www.google.com"
        >
            <slot>
                <div class="like-h1">Lorem ipsum dolor sit amet, consectetur facere.</div>
            </slot>
        </hero>

        <v-spacer :size="[2,3,4]"></v-spacer>

        <hero
                size="large"
                alignment="left"
                mobileImage="https://picsum.photos/800/400?grayscale"
                image="https://picsum.photos/1600/900?grayscale"
        >
            <slot>
                <div class="like-h1">Lorem ipsum dolor sit amet.</div>
                <div class="like-p">Ad atque beatae cumque eligendi facere itaque culpa nobis nostrum quasi repellat.
                </div>
            </slot>
        </hero>

        <v-spacer :size="[2,3,4]"></v-spacer>

        <hero
                size="small"
                mobileImage="https://picsum.photos/800/400?grayscale"
                image="https://picsum.photos/1600/450?grayscale"
                alignment="left"
        >
            <slot>
                <div class="like-h1">Lorem ipsum dolor sit amet, consectetur.</div>
                <div class="like-p">Ad atque beatae cumque eligendi facere itaque culpa nobis nostrum quasi repellat.
                </div>
            </slot>
        </hero>

        <v-spacer :size="[2,3,4]"></v-spacer>

        <hero
                size="small"
                mobileImage="https://picsum.photos/800/400?grayscale"
                image="https://picsum.photos/1600/500?grayscale"
                cta="click here for more information"
                link="http://www.google.com"
        >
            <slot>
                <div class="like-h1">Lorem ipsum dolor sit amet, consectetur.</div>
            </slot>
        </hero>

        <v-spacer :size="[2,3,4]"></v-spacer>

    </div>

</template>

<script>
    import Hero from '../components/Hero'

    export default {
        name: 'Hero',
        components: {
            'hero': Hero
        }
    }
</script>
