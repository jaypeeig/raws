var express = require('express');
var app = express();
var fs = require('fs');
var path 		= require('path');
var Router = require('router');
var static = require('serve-static');
var getPayload = require(__dirname + '/get_payload');
var resolveModulePath = require(__dirname + '/resolve_module_path');
var url = require('url');
var Gallery = require('express-photo-gallery');
  
//view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var options = {
    title: 'React'
};

var paths = {
    photos: __dirname+'/photos',
    previews: null,
    thumbs: null,
 };

app.use('/', Gallery('photos', options));
app.use(static(resolveModulePath('lightgallery') + '/dist'));
app.use('/js', static(resolveModulePath('lg-zoom') + '/dist'));
app.use('/js', static(resolveModulePath('lg-thumbnail') + '/dist'));
app.use('/js', static(resolveModulePath('lg-fullscreen') + '/dist'));

app.listen(80, function(){
	console.log('server is listening at port of batangas');
});
