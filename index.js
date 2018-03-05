'use strict';


function loadXMLDoc(url, type, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               var out = xmlhttp.responseText;
               if (type === 'json') {
                out = JSON.parse(xmlhttp.responseText)
               }
               callback(null, out)
           }
           else {
               callback(new Error('Not Found'))
           }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}


var doFetch = function(url, type, callback) {

    if(typeof window.fetch === 'undefined') {
        return loadXMLDoc(url, type, callback);
    }

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
        console.error(err, url)
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

