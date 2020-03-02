<template>
    <div>

        <div class="container">

            <h1>cookie notification component</h1>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-2">
                <li>Message (rich text)</li>
            </ul>

            <v-spacer :size="[2,3,4]"></v-spacer>

            <cookie-notification>
                <template slot="msg">
                    <div class="like-p text-center">
                        We use cookies to better understand how you use our website so that we can improve in our
                        experice. By continuing to browse or closing this banner, you indicate your agreement. To learm
                        more, plase visit our <a href="#">Privacy Policy.</a>
                    </div>
                </template>
            </cookie-notification>

            <v-spacer :size="[2,3,4]"></v-spacer>

        </div>

    </div>
</template>

<script>
    import CookieNotification from '../components/CookieNotification'

    export default {
        name: 'CookieNotificationPage',
        components: {
            'cookie-notification': CookieNotification
        }
    }
</script>
