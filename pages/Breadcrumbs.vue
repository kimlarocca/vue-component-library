<template>
    <div>

        <div class="container">

            <h1>breadcrumbs component</h1>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>name - the name of the page</li>
                <li>link - the link to the page (optional)</li>
            </ul>
            <p><em>Note: the full breadcrumbs will be shown on desktop, but on mobile only the previous level will be shown</em></p>

            <div class="section-padding-25"></div>

            <p><strong>EXAMPLE:</strong></p>
            <div class="section-padding-25"></div>

            <breadcrumbs
                    :crumbs="[{name: 'Home', link: 'http://www.google.com'},{name: 'Resources', link: 'http://www.yahoo.com'},{name: 'This Article', link: ''}]"
            >
            </breadcrumbs>

            <div class="section-padding-100"></div>

        </div>

    </div>
</template>

<script>
    import Breadcrumbs from '../components/Breadcrumbs'

    export default {
        name: 'BiographyCardPage',
        components: {
            'breadcrumbs': Breadcrumbs
        }
    }
</script>
