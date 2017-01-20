'use strict';

/**
 * @ngdoc service
 * @name thinkificChallengeFrontendApp.auth
 * @description
 * # auth
 * Service in the thinkificChallengeFrontendApp.
 */
angular.module('thinkificChallengeFrontendApp')
.factory('Auth', function( $http, $cookies, $localStorage ) {

    var authFactory = {},
        // baseUrl = 'http://127.0.0.1:8000';
        baseUrl = 'http://thinkificapi.zeeshansafdar.com';

    authFactory.$login = function(email, password) {

        return $http({
            method: 'POST',
            url: baseUrl + '/api/login/',
            data: { email: email, password: password }
        });
    };

    authFactory.$isLoggedIn = function(){
        if ($localStorage.isAuthenticated === 'true'){
            return true;
        }

        else{
            return false;
        }
    };

    authFactory.$register = function(data) {

        return $http({
            method: 'POST',
            url: baseUrl + '/api/registration/',
            data: data
        });
    };

    authFactory.$logout = function() {

        return $http({
            method: 'POST',
            url: baseUrl + '/api/logout/',
        });
    };

    return authFactory;
});
