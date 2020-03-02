<template>
    <div class="spacer">
        <div class="show-for-large" :style="'padding-top: '+size[2]+'rem'"></div>
        <div class="show-for-medium-only" :style="'padding-top: '+size[1]+'rem'"></div>
        <div class="show-for-small-only" :style="'padding-top: '+size[0]+'rem'"></div>
    </div>
</template>

<script>
    export default {
        props: {
            size: {
                type: Array,
                default: function () {
                    return [1, 1, 1]
                }
            }
        }
    }
</script>
