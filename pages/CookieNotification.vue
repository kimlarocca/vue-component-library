<template>
    <div>

        <div class="container">

            <h1>cookie notification component</h1>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul>
                <li>Message (rich text)</li>
                <li>Note: the user is cookied so that once the close the banner they do not see the notice again for the
                    rest of their session.
                </li>
            </ul>

            <div class="section-padding-50"></div>

            <p>component goes here</p>
            <cookie-notification>
                <template slot="msg">
                    <div class="like-p text-center">
                        We use cookies to better understand how you use our website so that we can improve in our
                        experice. By continuing to browse or closing this banner, you indicate your agreement. To learm
                        more, plase visit our <a href="#">Privacy Policy.</a>
                    </div>
                </template>
            </cookie-notification>

            <div class="section-padding-100"></div>

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
