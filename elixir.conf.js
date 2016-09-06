const p = require('path')
var elixir = require('laravel-elixir')
// const cssnext = require('cssnext')

var config = {

  production: elixir.inProduction,
  assetsPath: 'assets/',
  publicPath: 'build/',
  appPath: '../../bootstrap/',
  viewPath: 'pages/',
  notifications: true,
  muted: process.argv[1].indexOf('bin/_mocha') > -1,
  sourcemaps: !elixir.inProduction,

  batchOptions: {
    // https://github.com/floatdrop/gulp-batch#batchoptions-callback-errorhandler
    limit: undefined,
    timeout: 1000
  },

  css: {
    folder: 'css',
    outputFolder: 'css',
    autoprefix: {
      enabled: true,
      // https://www.npmjs.com/package/gulp-autoprefixer#api
      options: {
        browsers: ['> 1%'],
        cascade: false
      }
    },
    minifier: {
      // https://github.com/jakubpawlowicz/clean-css#how-to-use-clean-css-api
      pluginOptions: {}
    },
    sass: {
      folder: 'sass',
      search: /\.(sass|scss)$/,
      // https://github.com/sass/node-sass#options
      pluginOptions: {
        outputStyle: elixir.inProduction ? 'compressed' : 'nested',
        precision: 10
      }
    }
    // less: {
    //   folder: 'less',
    //   search: /\.(less)$/,
    //   // https://github.com/plus3network/gulp-less#options
    //   pluginOptions: {}
    // }
    // postcss: [cssnext()]
  },

  js: {
    folder: '',
    outputFolder: 'js'
  },

  testing: {
    phpUnit: {
      path: 'tests',
      search: '/**/*Test.php',
      command: p.normalize('vendor/bin/phpunit') + ' --verbose'
    },
    phpSpec: {
      path: 'spec',
      search: '/**/*Spec.php',
      command: p.normalize('vendor/bin/phpspec') + ' run'
    }
  },

  versioning: {
    buildFolder: 'versions'
  },

  browserSync: {
    // http://www.browsersync.io/docs/options/
    proxy: 'homestead.app',
    reloadOnRestart: true,
    notify: true
  }

}

config.get = function(path) {
  var segments = path.split('.'), basePath, current = config
  if(segments[0] == 'assets' || segments[0] == 'public') {
    basePath = config[segments.shift() + 'Path']
  }
  segments.forEach(function(segment) {
    current = current[segment]
  })
  return p.join(basePath, current)
}

module.exports = config
