// Create web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
var comments = require('./comments');
var qs = require('querystring');

// Create server
var server = http.createServer(function (req, res) {
    // Get request method
    var method = req.method;
    // Get request url
    var url = req.url;
    // Get request headers
    var headers = req.headers;
    // Get request body
    var body = '';
    req.on('data', function (chunk) {
        body += chunk;
    });
    req.on('end', function () {
        // Get request content type
        var contentType = headers['content-type'];
        // Get request accept
        var accept = headers['accept'];
        // Get request accept encoding
        var acceptEncoding = headers['accept-encoding'];
        // Get request accept language
        var acceptLanguage = headers['accept-language'];
        // Get request user agent
        var userAgent = headers['user-agent'];
        // Get request cookie
        var cookie = headers['cookie'];
        // Get request query string
        var query = url.split('?')[1];
        // Get request path
        var path = url.split('?')[0];
        // Get request extension
        var ext = path.split('.').pop();

        // Set response status code
        res.statusCode = 200;
        // Set response status message
        res.statusMessage = 'OK';
        // Set response headers
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('X-Powered-By', 'Node');
    })
})