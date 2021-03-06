// Karma configuration
// Generated on Sat Jul 30 2016 09:01:27 GMT+0100 (BST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],

    // list of files / patterns to load in the browser
    files: [
      'spec/*-spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],
    preprocessors: {
      'spec/*-spec.js': 'browserify'
    },
    plugins: [
        'karma-jasmine',
        'karma-browserify',
        'karma-firefox-launcher',
        'karma-chrome-launcher',

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    customLaunchers: {
        Chrome_travis_ci: {
            base: 'Chrome',
            flags: ['--no-sandbox']
        }
    },

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher

    browsers: ['Firefox', 'Chrome_travis_ci'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
