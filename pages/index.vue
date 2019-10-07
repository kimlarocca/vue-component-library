<template>
    <div class="style-guide">

        <div class="container">
            <h1>style guide</h1>

            <section id="typography">
                <div class="section-padding-50"></div>
                <h3 class="margin-bottom-2">Typography</h3>
                <div class="box">
                    <h1 class="margin-bottom-1">H1 Headline No. 1</h1>
                    <h2 class="margin-bottom-1">H2 Headline No. 2</h2>
                    <h3 class="margin-bottom-1">H3 Headline No. 3</h3>
                    <h4 class="margin-bottom-1">H4 Headline No. 4</h4>
                    <h5 class="margin-bottom-1">H5 Headline No. 5</h5>
                    <h6>H6 Headline No. 6</h6>
                </div>
                <div class="section-padding-50"></div>
                <p>This is normal paragraph text! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui
                    officia deserunt mollit anim id est laborum.</p>
                <p class="small-body-text">.small-body-text</p>
                <p><a>This is an inline link</a></p>
                <p><a class="caret-right">.caret-right</a></p>
                <p><a class="caret-down">.caret-down</a></p>
            </section>

            <div class="section-padding-50"></div>

            <section id="colors">
                <div class="section-padding-50"></div>
                <h3 class="margin-bottom-2">Colors</h3>
                <div class="grid-x grid-margin-x grid-margin-y colors">
                    <div class="cell small-12 medium-6 large-auto bg-primary"><span>$primary</span></div>
                    <div class="cell small-12 medium-6 large-auto bg-secondary"><span>$secondary</span></div>
                    <div class="cell small-12 medium-6 large-auto bg-tertiary"><span>$tertiary</span></div>
                    <div class="cell small-12 medium-6 large-auto bg-quaternary"><span>$quaternary</span></div>
                </div>
                <div class="grid-x grid-margin-x grid-margin-y colors">
                    <div class="cell small-12 medium-6 large-auto bg-light-gray"><span>$light-gray</span></div>
                    <div class="cell small-12 medium-6 large-auto bg-medium-gray"><span>$medium-gray</span></div>
                    <div class="cell small-12 medium-6 large-auto bg-medium-dark-gray"><span>$medium-dark-gray</span></div>
                    <div class="cell small-12 medium-6 large-auto bg-dark-gray"><span>$dark-gray</span></div>
                </div>
            </section>

            <div class="section-padding-50"></div>

            <section id="buttons">
                <h3 class="margin-bottom-2">Buttons</h3>
                <div class="section-padding-50"></div>
                <p><a class="button">.button</a></p>
                <p><a class="button ghost">.button .ghost</a></p>
                <p><a class="button ghost-black">.button .ghost-black</a></p>
                <p><a class="button ghost-primary">.button .ghost-primary</a></p>
                <p><a class="button ghost-secondary">.button .ghost-secondary</a></p>
                <div class="bg-medium-dark-gray padding-2">
                    <p><a class="button ghost-white">.button .ghost-white</a></p>
                </div>
            </section>

            <div class="section-padding-50"></div>

        </div>

    </div>
</template>

<style scoped lang="scss">
    @import "../assets/scss/variables";

    .style-guide {

        .box {
            box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
            padding: 2rem;
        }

        .colors {
            margin-bottom: 30px;

            .cell {
                height: 100px;

                span {
                    padding: 10px;
                    background: white;
                }
            }
        }
    }
</style>
