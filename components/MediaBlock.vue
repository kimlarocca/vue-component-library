<template>
    <div class="responsive-embed widescreen margin-bottom-0">
        <iframe width="1240" height="700" :src="url" allowfullscreen></iframe>
    </div>
</template>

<script>
    export default {
        name: 'Template',
        props: {
            url: String
        }
    }
</script>
