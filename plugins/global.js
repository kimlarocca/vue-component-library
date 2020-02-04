import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import TableOfContents from '~/components/StyleGuide/TableOfContents'
import SgNavigation from '~/components/StyleGuide/SgNavigation'

// custom Vue directives
import { a11yClick } from '../plugins/a11yClickDirective'

// https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js
// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
    // Look for files in the this directory
    '../components',
    // look in subdirectories
    true,
    // Only include "_base-" prefixed .vue files
    /_base-[\w-]+\.vue$/
)

// For each matching file name...
requireComponent.keys().forEach((fileName) => {
    // Get the component config
    const componentConfig = requireComponent(fileName)
    // Get the PascalCase version of the component name
    const componentName = upperFirst(
        camelCase(
            fileName
                // Remove the "./_" from the beginning
                .replace(/^\.\/_/, '')
                // Remove the file extension from the end
                .replace(/\.\w+$/, '')
        )
    )
    // Globally register the component
    Vue.component(componentName, componentConfig.default || componentConfig)
})

Vue.component('table-of-contents', TableOfContents)
Vue.component('sg-navigation', SgNavigation)

// eslint-disable-next-line no-new
new Vue({
    directives: {
        a11yClick
    }
})
