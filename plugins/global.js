import Vue from 'vue'

// custom Vue directives
import { a11yClick } from '../plugins/a11yClickDirective'

// global components
import TableOfContents from '~/components/StyleGuide/TableOfContents'
import SgNavigation from '~/components/StyleGuide/SgNavigation'
import VSpacer from '~/components/_baseVSpacer'

Vue.component('table-of-contents', TableOfContents)
Vue.component('sg-navigation', SgNavigation)
Vue.component('v-spacer', VSpacer)

// eslint-disable-next-line no-new
new Vue({
    directives: {
        a11yClick
    }
})
