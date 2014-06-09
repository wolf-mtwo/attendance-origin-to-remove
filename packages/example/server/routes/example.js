'use strict';

// The Package is past automatically as first parameter
module.exports = function(Example, app, auth, database) {

    app.get('/example/example/anyone', function(req, res, next) {
        res.send('Anyone can access this');
    });

    app.get('/example/example/auth', auth.requiresLogin, function(req, res, next) {
        res.send('Only authenticated users can access this');
    });

    app.get('/example/example/admin', auth.requiresAdmin, function(req, res, next) {
        res.send('Only users with Admin role can access this');
    });

    app.get('/example/example/render', function(req, res, next) {
        Example.render('index', {
            package: 'example'
        }, function(err, html) {
            //Rendering a view from the Package server/views
            res.send(html);
        });
    });
};
