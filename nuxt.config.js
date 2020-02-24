export default {

    /* delete this section if your SPA is running in the server root directory */
    router: {
        base: '/library/'
    },

    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },
    /*
    ** Global CSS
    */
    css: [
        { lang: 'scss', src: '~/assets/scss/main.scss' }
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/global.js',
        { src: '~/plugins/tabs.js', ssr: false },
        { src: '~/plugins/modalWindow.js', ssr: false },
        { src: '~/plugins/forms.js', ssr: false }
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {},
    /*
    ** Build configuration
    */
    dev: {
        publicPath: '/library/'
    },
    build: {
        /*
        ** You can extend webpack config here
        */
        publicPath: '/library/',
        extractCSS: true,
        splitChunks: {
            layouts: false,
            pages: false,
            commons: false
        },
        filenames: {
            app:
                ({ isDev }) => isDev ? '[name].js' : 'assets/js/[name].js',
            chunk:
                ({ isDev }) => isDev ? '[name].js' : 'assets/js/[name].js',
            css:
                ({ isDev }) => isDev ? '[name].css' : 'assets/css/[name].css',
            img:
                ({ isDev }) => isDev ? '[path][name].[ext]' : 'assets/images/[name].[ext]',
            font:
                ({ isDev }) => isDev ? '[path][name].[ext]' : 'assets/fonts/[name].[ext]',
            video:
                ({ isDev }) => isDev ? '[path][name].[ext]' : 'assets/videos/[name].[ext]'
        }
    },
    generate: {
        minify: {
            removeRedundantAttributes: false,
            trimCustomFragments: false
        }
    }
}
