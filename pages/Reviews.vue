<template>
    <div>

        <div class="container">

            <h1>reviews component</h1>

            <hr class="margin-vertical-3">

            <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
            <p>This component will have fields for:</p>
            <ul class="margin-bottom-1">
                <li>quote</li>
                <li>name (optional)</li>
                <li>review date (optional)</li>
                <li>byline (optional)</li>
                <li>alignment: can be left or center (optional, center is the default)</li>
            </ul>

            <v-spacer/>

            <p><strong>EXAMPLES:</strong></p>
            <v-spacer :size="[2,3,4]"></v-spacer>

        </div>

        <reviews/>
        <v-spacer :size="[2,3,4]"></v-spacer>

        <reviews alignment="left"/>

        <v-spacer :size="[2,3,4]"></v-spacer>

    </div>
</template>

<script>
    import Reviews from '../components/Reviews'

    export default {
        components: {
            'reviews': Reviews
        }
    }
</script>
