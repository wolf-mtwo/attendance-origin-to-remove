'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Institucion = new Module('institucion');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Institucion.register(function(app, auth, database) {

    //We enable routing. By default the Package Object is passed to the routes
    Institucion.routes(app, auth, database);

    //We are adding a link to the main menu for all authenticated users
    // Institucion.menus.add({
    //     title: 'institucion example page',
    //     link: 'institucion example page',
    //     roles: ['authenticated'],
    //     menu: 'main'
    // });

    Institucion.menus.add({
        title: 'Crear Institucion',
        link: 'new institucion',
        roles: ['authenticated'],
        menu: 'main'
    });
    
    Institucion.menus.add({
        title: 'Institucion',
        link: 'list institucion',
        roles: ['authenticated'],
        menu: 'main'
    });

    Institucion.menus.add({
        title: 'Attendace',
        link: 'generator institucion',
        roles: ['authenticated'],
        menu: 'main'
    });

    Institucion.menus.add({
        title: 'reporte',
        link: 'index reporte',
        roles: ['authenticated'],
        menu: 'main'
    });


    Institucion.angularDependencies(['tc.chartjs']);
    
    //Institucion.aggregateAsset('js', 'doughnut.js');
    //Institucion.aggregateAsset('js', 'tc-angular-chartjs.js');
    /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Institucion.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Institucion.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Institucion.settings(function(err, settings) {
        //you now have the settings object
    });
    */

    return Institucion;
});
