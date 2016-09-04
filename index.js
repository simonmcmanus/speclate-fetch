'use strict';

require('whatwg-fetch');

exports.readFile = function(file, options, callback) {
    var url = file;
    fetch(url, {
        method: 'get'
    }).then(function(response) {

        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.text();
    }).then(function(text) {
        callback(null, text);
    }).catch(function(err) {
        console.log(err, file)
        callback(err)
    });
};
