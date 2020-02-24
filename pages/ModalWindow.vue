<template>
    <div class="container">
        <h1>modal window</h1>
        <p class="subhead5 padding">
            <nuxt-link to="/">&lt; back to style guide</nuxt-link>
        </p>

        <hr class="margin-vertical-3">

        <p><em>* you may need to press refresh to get jquery to load</em></p>

        <a class="button modal-trigger" data-id="modal1" tabindex="0">trigger modal window</a>

        <div id="modal1" class="modal" data-reveal="" aria-labelledby="modal title" aria-hidden="false"
             role="dialog" tabindex="0" aria-modal="true">
            <!-- the element with the modal-title class gets the focus when the modal opens (for accessibility) -->
            <h2 class="modal-title margin-bottom-1" tabindex="0">modal title</h2>
            <p>Modal window #1 content! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at blanditiis commodi
                dolores est exercitationem ipsam magni minus neque odit quidem rerum, vitae. Et ex repudiandae unde
                vero voluptates.</p>
            <a class="close-modal" aria-label="Close" tabindex="0">x</a>
        </div>

        <a class="button modal-trigger" data-id="modal2" tabindex="0">trigger modal window #2</a>

        <div id="modal2" class="modal" data-reveal="" aria-labelledby="modal title #2" aria-hidden="false"
             role="dialog" tabindex="0" aria-modal="true">
            <!-- the element with the modal-title class gets the focus when the modal opens (for accessibility) -->
            <h2 class="modal-title margin-bottom-1" tabindex="0">modal title #2</h2>
            <p>Modal window #2 content! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam at blanditiis commodi
                dolores est exercitationem ipsam magni minus neque odit quidem rerum, vitae. Et ex repudiandae unde
                vero voluptates.</p>
            <a class="close-modal" aria-label="Close" tabindex="0">x</a>
        </div>

        <div class="modal-overlay"></div>

    </div>
</template>
