const mix = require('laravel-mix')
const tailwindcss = require('tailwindcss')
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
  .ts('assets/js/app.ts', 'js')
  .sass('assets/sass/app.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./tailwind.config.js')]
  })

if (mix.inProduction()) {
  mix.version()
} else {
  mix.sourceMaps()
    .webpackConfig({ devtool: 'source-map' })
}
mix.webpackConfig({
  devServer: {
    disableHostCheck: true
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue', '.json']
  },
  module: {
    rules: [
      {
        // 'ts-loader' で TypeScript をコンパイル
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        // '*.vue' ファイルも TS として認識させるためのオプション
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        test: /\.(js|vue)?$/
      }
    ]
  }
})
