'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Example = new Module('example');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Example.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Example.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    // Example.menus.add({
    //     title: 'example example page',
    //     link: 'example example page',
    //     roles: ['authenticated'],
    //     menu: 'main'
    // });

    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Example.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Example.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Example.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Example;
});
