<template>
    <div>

        <div class="container margin-vertical-2">

            <h1>tabs</h1>
            <p class="subhead5 padding">
                <nuxt-link to="/">&lt; back to style guide</nuxt-link>
            </p>

            <hr class="margin-vertical-3">

            <p><em>* you may need to press refresh to get jquery to load</em></p>

        </div>

        <section>
            <div class="container">
                <div class="tabs">
                    <div role="tablist">
                        <a id="tab-Thursday" tabindex="0" role="tab" aria-label="Thursday" class="tab active"
                           aria-controls="Thursday" aria-selected="true" href="#Thursday">Tab 1</a>
                        <a id="tab-Friday" tabindex="0" role="tab" aria-label="Friday" class="tab"
                           aria-controls="Friday" href="#Friday">Tab 2</a>
                        <a id="tab-Saturday" tabindex="0" role="tab" aria-label="Saturday" class="tab"
                           aria-controls="Saturday" href="#Saturday">Tab 3</a>
                        <a id="tab-Sunday" tabindex="0" role="tab" aria-label="Sunday" class="tab"
                           aria-controls="Sunday" href="#Sunday">Tab 4</a>
                    </div>
                    <div class="section-padding-50"></div>
                    <div id="Thursday" class="tab-content active" aria-labelledby="tab-Thursday" role="tabpanel">
                        <p>content for tab 1</p>
                    </div>
                    <div id="Friday" class="tab-content" aria-labelledby="tab-Friday" role="tabpanel">
                        <p>content for tab 2</p>
                    </div>
                    <div id="Saturday" class="tab-content" aria-labelledby="tab-Saturday" role="tabpanel">
                        <p>content for tab 3</p>
                    </div>
                    <div id="Sunday" class="tab-content" aria-labelledby="tab-Sunday" role="tabpanel">
                        <p>content for tab 4</p>
                    </div>
                </div>
            </div>
        </section>

        <div class="section-padding-100"></div>

    </div>

</template>
