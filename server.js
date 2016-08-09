var echo = require('laravel-echo-server')

var options = {
  authHost: 'http://web812.pro',
  authPath: '/broadcasting/auth',
  host: 'http://web812.pro',
  port: 6001,
  socketPath: '/broadcasting/socket'
}

echo.run(options)
