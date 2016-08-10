var Elixir = require('laravel-elixir')

require('laravel-elixir-uglify')
require('laravel-elixir-webpack-advanced')
// require('laravel-elixir-image-optimize')

Elixir.config = require('./elixir.conf.js')

Elixir(function(mix) {
  mix
    .styles('./node_modules/bulma/css/bulma.css')
    .sass('app.scss')
    .webpack('../../../assets/main.js', require('./webpack.config.js'), {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })

    // .imageOptimize(src,output,baseDir);
})

