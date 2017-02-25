'use strict';


function loadXMLDoc(url, callback) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
           if (xmlhttp.status == 200) {
               callback(null, xmlhttp.responseText)
           }
           else {
               callback(new Error('Not Found'))
           }
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

var noFetch = function(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            callback(xmlHttp.responseText);
        } else {
            callback(new Error('Not Found'))
        }

    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

var doFetch = function(url, type, callback) {

    if(typeof fetch === 'undefined') {
        return loadXMLDoc(url, callback);
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

