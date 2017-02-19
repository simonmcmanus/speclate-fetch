'use strict';

require('whatwg-fetch');


var doFetch = function(url, type, callback) {
    fetch(url, {
        method: 'get'
    }).then(function(response) {

        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response[type]();
    }).then(function(text) {
        callback(null, text);
    }).catch(function(err) {
        console.log(err, url)
        callback(err)
    });
};


exports.readFile = function(file, options, callback) {
    doFetch(file, 'text', callback)
};

exports.json = function(file, callback) {
    doFetch(file, 'json', callback)
};

exports.text = function(file, callback) {
    doFetch(file, 'text', callback)
};

