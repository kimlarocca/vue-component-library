<template>
    <div>

        <div class="container margin-vertical-2">

            <h1 class="margin-bottom-1">footer</h1>

            <v-spacer/>

        </div>

        <v-footer/>

    </div>
</template>

<script>
    import VFooter from '../components/VFooter'

    export default {
        components: {
            'v-footer': VFooter
        }
    }
</script>
