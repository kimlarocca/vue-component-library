<template>

    <div class="sg-navigation margin-bottom-3">
        <div class="bg-light-gray padding-1">
            <div class="grid-x grid-margin-x grid-margin-y align-middle">
                <div class="cell large-2 medium-3 small-9">
                    <nuxt-link to="/"><img src="https://via.placeholder.com/200x60?text=logo"
                                           alt="san francisco symphony logo"></nuxt-link>
                </div>
                <div class="cell large-2 medium-3 show-for-medium">
                    <strong>Pattern Library</strong>
                </div>
                <div class="cell auto text-right">
                    <nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link>
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
        width: calc(100% - 2rem);
        max-width: $breakpoint-tablet;

        @media all and (max-width: 1440px) {
            margin: 30px 1rem 30px 3.75rem;
            width: calc(100% - 5.25rem);
        }

        i {
            font-size: 22px;
        }
    }
</style>
