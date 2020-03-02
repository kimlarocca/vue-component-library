<template>
    <div>

        <div class="container">

            <h1>pagination component</h1>

            <hr class="margin-vertical-3">

            <pagination/>

            <v-spacer :size="[2,3,4]"></v-spacer>

        </div>

    </div>
</template>

<script>
    import Pagination from '../components/Pagination'

    export default {
        components: {
            'pagination': Pagination
        }
    }
</script>
