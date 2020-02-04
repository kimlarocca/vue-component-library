<template>
    <div>

        <div class="container margin-top-2">

            <h1 class="margin-bottom-1">content blade component</h1>

            <hr class="margin-vertical-3">

            <p><strong>IMAGES:</strong></p>
            <p>We recommend a minimum image width of 768px for this component.</p>

            <div class="section-padding-25"></div>

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-2">
                <li>background color: can be white, gray, dark, primary or secondary (optional, the default is white)
                </li>
                <li>title: (optional)</li>
                <li>image: (optional)</li>
                <li>alternative image text: (optional, but highly recommended)</li>
                <li>video: iframe url for vimeo or youtube (optional)</li>
                <li>alignment: aligns the image or video and can be set to left or right (optional, the default is
                    left)
                </li>
                <li>cta text: text for the button (optional, but required if link is given)</li>
                <li>link: url for the button (optional, but required if cta is given)</li>
                <li>content: (optional)</li>
            </ul>
            <div class="section-padding-25"></div>

            <p><strong>EXAMPLES:</strong></p>

            <p><strong>Default (white) style:</strong></p>

        </div>

        <content-blade
                title="Title Lorem Ipsum Dolor"
                link="http://www.google.com"
                cta="learn more"
                backgroundColor="white"
                image="https://picsum.photos/600/400?grayscale"
        >
            <template slot="content">
                <div class="like-h4">Rich text content goes here</div>
                <div class="like-p">Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
                    lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
                    ultrices
                </div>
                <div class="like-p"><strong>LOREM IPSUM DOLOR SITE AMET</strong></div>
            </template>
        </content-blade>

        <div class="section-padding-50"></div>

        <div class="container">

            <p><strong>Gray style:</strong></p>

            <div class="section-padding-50"></div>

        </div>

        <content-blade
                title="Title orem Ipsum Dolor"
                backgroundColor="gray"
                image="https://picsum.photos/600/400?grayscale"
                alignment="right"
        >
            <template slot="content">
                <div class="like-h4">Rich text content goes here</div>
                <div class="like-p">Proin non vehicula ante. Morbi ornare, est ac euismod ultricies, ex ante lacinia
                    lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
                    ultrices
                </div>
                <a href="#">This is a link to learn more.</a>
            </template>
        </content-blade>

        <div class="section-padding-50"></div>

        <div class="container">

            <p><strong>Dark style:</strong></p>

            <div class="section-padding-50"></div>

        </div>

        <content-blade
                title="Title Lorem Ipsum Dolor"
                link="http://www.google.com"
                cta="learn more"
                backgroundColor="dark"
        >
            <template slot="content">
                <div class="like-p">Rich text content goes here. Proin non vehicula ante. Morbi ornare, est ac euismod
                    ultricies, ex ante
                    lacinia
                    lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
                    ultrices
                </div>
                <div class="like-p"><strong>LOREM IPSUM DOLOR SITE AMET</strong></div>
            </template>
        </content-blade>

        <div class="section-padding-50"></div>

        <div class="container">

            <p><strong>Primary color style:</strong></p>

            <div class="section-padding-50"></div>

        </div>

        <content-blade
                title="Title Lorem Ipsum Dolor"
                link="http://www.google.com"
                cta="learn more"
                backgroundColor="primary"
                video="https://player.vimeo.com/video/90283590"
                alignment="left"
        >
            <template slot="content">
                <div class="like-p">Rich text content goes here. Proin non vehicula ante. Morbi ornare, est ac euismod
                    ultricies, ex ante
                    lacinia
                    lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
                    ultrices
                </div>
            </template>
        </content-blade>

        <div class="section-padding-50"></div>

        <div class="container">

            <p><strong>Secondary color style:</strong></p>

            <div class="section-padding-50"></div>

        </div>

        <content-blade
                title="Title Lorem Ipsum Dolor"
                link="http://www.google.com"
                cta="learn more"
                backgroundColor="secondary"
                video="https://player.vimeo.com/video/90283590"
                alignment="right"
        >
            <template slot="content">
                <div class="like-p">Rich text content goes here. Proin non vehicula ante. Morbi ornare, est ac euismod
                    ultricies, ex ante
                    lacinia
                    lacus, in mollis neque velit a lorem. Nulla feugiat sem vel augue varius tincidunt. Quisque
                    ultrices
                </div>
            </template>
        </content-blade>

        <div class="section-padding-100"></div>

    </div>
</template>

<script>
    import ContentBlade from '../components/ContentBlade'

    export default {
        name: 'ContentBladePage',
        components: {
            'content-blade': ContentBlade
        }
    }
</script>
