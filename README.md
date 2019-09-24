# nuxt-test

> My brilliant Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Site Setup

Trouble setting up the site? Try deleting the node_modules folder then run npm install again.

Be sure to update the router base variable in nuxt.config.js.

Components in the components folder are automatically globally registered (see plugins/global.js). This may not be ideal for your SPA. See https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/components/_globals.js for the code on how to auto register only base components. 

Routes for all pages in the pages folder are automatically created.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
