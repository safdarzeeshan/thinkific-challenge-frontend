'use strict';

/**
 * @ngdoc service
 * @name thinkificChallengeFrontendApp.integer
 * @description
 * # integer
 * Service in the thinkificChallengeFrontendApp.
 */
angular.module('thinkificChallengeFrontendApp')
  .factory('Integer', function ($http, $cookies, $localStorage) {

    var integerFactory = {},
        // baseUrl = 'http://127.0.0.1:8000';
        baseUrl = 'http://thinkificapi.zeeshansafdar.com';

    integerFactory.$getCurrentInteger = function() {
        return $http.get( baseUrl + '/api/currentint/' );
    };

    integerFactory.$getNextInteger = function() {
        return $http.get( baseUrl + '/api/nextint/' );
    };

    integerFactory.$setNewCurrentInteger = function(newInteger) {
        return $http({
            method: 'PUT',
            url: baseUrl + '/api/currentint/',
            data: { current_integer: newInteger }
        });
    };

    return integerFactory;


  });
