'use strict';

require('whatwg-fetch');

exports.readFile = function(file, options, callback) {
    //var url = window.location.origin + '/base/spec/sample' +  file;
    var url = file;

    // no double slashes - hack
    url = url.replace(/\/\//g, '\/');

    fetch(url, {
        method: 'get'
    }).then(function(response) {
        return response.text();
    }).then(function(text) {
        callback(null, text);
    }).catch(function(err) {
        callback(err)
    });
};
