const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .options({
        processCssUrls: false
    })
    .extract(['vue','leaflet','vue-cookies'])
    .sass('resources/sass/app-create.scss', 'public/assets')
    .sass('resources/sass/app-admin.scss', 'public/assets')
    .sass('resources/sass/app-lite.scss', 'public/assets')
    .sass('resources/sass/app.scss', 'public/assets')
    .webpackConfig(require('./webpack.config'));
