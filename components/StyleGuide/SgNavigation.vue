<template>

    <div class="container sg-navigation margin-bottom-3">
        <div class="bg-light-gray padding-1">
            <div class="grid-x grid-margin-x grid-margin-y align-middle">
                <div class="cell large-2 medium-3">
                    <img src="https://via.placeholder.com/200x60?text=logo" alt="san francisco symphony logo">
                </div>
                <div class="cell large-2 medium-3">
                    <div class="subhead6"><strong>Pattern Library</strong></div>
                </div>
                <div class="cell auto large-text-right medium-text-right">
                    <div class="subhead6">
                        <nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                tocComponents: [
                    'Hero',
                    'Card'
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/variables";

    .sg-navigation {
        height: 70px;
        margin: 30px auto;

        i {
            font-size: 22px;
        }
    }
</style>
