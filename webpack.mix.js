let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.setPublicPath('webroot')
    .js('assets/js/app.js', 'js')
    .sass('assets/sass/app.scss', 'css');

if (mix.inProduction()) {
    mix.version();
} else {
    mix.sourceMaps()
        .webpackConfig({devtool: 'source-map'});
}

mix.webpackConfig({
    devServer: {
        disableHostCheck: true
      }
});