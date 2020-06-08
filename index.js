/**
 * RoutEasy Example Project v.1.0
 * Last updated: 09/29/2016
 */

var req = require('request');
var async = require('async');
var config = require('./config');

var request = req.defaults(
    {
        json: true,
        jar: true
    });

async.waterfall(
    [
        /**
         * 1. LOGIN
         *
         * Routeasy currently supports plain-text credentials over HTTP.
         *
         */
        function(callback)
        {
            request(
                {
                    json: true,
                    url: config.host + '/auth/signin',
                    method: 'POST',
                    body: config.credentials
                }, function(err, response)
                {
                    console.log('1. user display name: ' + response.body.displayName);
                    callback();
                });
        },

        /**
         * 2. VEHICLE LISTING
         *
         */
        function(callback)
        {
            request(
                {
                    url: config.host + '/vehicles',
                    method: 'GET'
                }, function(err, response)
                {
                    if(err) { console.error(err); }
                    console.log('2. first vehicle name: ' + response.body[0].name);
                    callback();
                });
        },

        /**
         * 3. DEPOTS LISTING
         *
         */
        function(callback)
        {
            request(
                {
                    url: config.host + '/depots',
                    method: 'GET'
                }, function(err, response)
                {
                    if(err) { console.error(err); }
                    console.log('3. first depot name: ' + response.body[0].name);
                    callback();
                });
        },

        // ---------------------- DELIVERY GROUP CREATION ----------------------
        /**
         * 10. DELIVERY GROUP CREATION
         *
         * Before run the project, you must receive data deliveries from ERP endpoint
        */
        function(callback)
        {
            request(
                {
                    url: config.host + '/deliveries/group/create/2',
                    method: 'POST',
                    body: require('./samples/deliveries-data')
                }, function(err, response)
                {
                    if(err) { console.error(err); }
                    console.log('10. order name: ' + response.body);
                    callback();
                });
        },
    ]);
