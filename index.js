'use strict';


exports.readFile = function(file, options, callback) {

    //var url = window.location.origin + '/base/spec/sample' +  file;
    var url = file;

    // no double slashes - hack
    url = url.replace(/\/\//g, '\/');
    console.log(url);
    if(window.fetch) {
        fetch(url, {
            method: 'get'
        }).then(function(response) {
            return response.text();
        }).then(function(response) {
            console.log('response', response);
            callback(null, response);
        }).catch(function(err) {
            console.log('err', err)
        });
    } else {
        callback(new Error('Fetch not supported'));
    }
};
