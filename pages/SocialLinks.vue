<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">social links component</h1>
            <p>
                <nuxt-link to="/">&lt; back to style guide</nuxt-link>
            </p>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>icon: the font awesome class name e.g. "fab fa-facebook-f"</li>
                <li>link</li>
                <li>alternative image text</li>
                <li>icon color (default is black)</li>
                <li>background color (default is transparent)</li>
            </ul>

            <div class="section-padding-25"></div>

            <p><strong>EXAMPLES:</strong></p>

            <div class="section-padding-25"></div>

            <ul class="social-links">
                <social-link
                        icon="fab fa-facebook-f"
                        link="https://www.facebook.com"
                        altText="facebook"
                >
                </social-link>
                <social-link
                        icon="fab fa-twitter"
                        link="https://www.twitter.com"
                        altText="twitter"
                >
                </social-link>
                <social-link
                        icon="fab fa-youtube"
                        link="https://www.youtube.com"
                        altText="youtube"
                >
                </social-link>
                <social-link
                        icon="fab fa-instagram"
                        link="https://www.instagram.com"
                        altText="instagram"
                >
                </social-link>
                <social-link
                        icon="fab fa-linkedin-in"
                        link="https://www.linkedin.com"
                        altText="linkedin"
                >
                </social-link>
            </ul>

            <div class="section-padding-50"></div>

            <div class="bg-dark-gray padding-3">
                <ul class="social-links">
                    <social-link
                            icon="fab fa-facebook-f"
                            link="https://www.facebook.com/sfsymphony"
                            altText="facebook"
                            iconColor="black"
                            backgroundColor="white"
                    >
                    </social-link>
                    <social-link
                            icon="fab fa-twitter"
                            link="https://www.facebook.com/sfsymphony"
                            altText="facebook"
                            iconColor="black"
                            backgroundColor="white"
                    >
                    </social-link>
                    <social-link
                            icon="fab fa-youtube"
                            link="https://www.facebook.com/sfsymphony"
                            altText="facebook"
                            iconColor="black"
                            backgroundColor="white"
                    >
                    </social-link>
                    <social-link
                            icon="fab fa-spotify"
                            link="https://www.facebook.com/sfsymphony"
                            altText="facebook"
                            iconColor="black"
                            backgroundColor="white"
                    >
                    </social-link>
                    <social-link
                            icon="fab fa-instagram"
                            link="https://www.facebook.com/sfsymphony"
                            altText="facebook"
                            iconColor="black"
                            backgroundColor="white"
                    >
                    </social-link>
                </ul>
            </div>

            <div class="section-padding-100"></div>

        </div>

    </div>
</template>

<script>
    import SocialLink from '../components/SocialLink'

    export default {
        components: {
            'social-link': SocialLink
        }
    }
</script>
