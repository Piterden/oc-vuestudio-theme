var elixir = require('laravel-elixir')

require('laravel-elixir-uglify')
require('laravel-elixir-webpack-advanced')
// require('laravel-elixir-image-optimize')

elixir.config = require('./elixir.conf.js')

elixir(function(mix) {
  mix
    .styles('./node_modules/bulma/css/bulma.css')
    .sass('assets/sass/app.scss')
    .webpack('../../../assets/main.js', require('./webpack.config.js'), {
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })

    // .imageOptimize(src,output,baseDir);

  // this.registerWatcher('sass', )
})
