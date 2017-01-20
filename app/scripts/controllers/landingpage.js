'use strict';

/**
 * @ngdoc function
 * @name thinkificChallengeFrontendApp.controller:LandingpageCtrl
 * @description
 * # LandingpageCtrl
 * Controller of the thinkificChallengeFrontendApp
 */
angular.module('thinkificChallengeFrontendApp')
.controller('LandingPageCtrl', function ($scope, Auth, Validate, $cookies, $state, $localStorage) {

    console.log('landing page')

    $scope.login = function(formData){
        console.log('pressed login');
        $scope.errors = [];
        Validate.form_validation(formData,$scope.errors);
        if(!formData.$invalid){
            Auth.$login($scope.model.email, $scope.model.password)
            .then(function(response){
                console.log(response.data.key)
                // $http.defaults.headers.common.Authorization = 'Token ' + data.key;
                $cookies.put('token', response.data.key);
                $localStorage.isAuthenticated = 'true';
                $state.go('integer');

            })
            .catch(function(errors){
                $scope.errors = errors.data;
            });
        }
    };

    $scope.gotoRegister = function(){
        console.log('gotoRegister')
        $state.go('register');
    };
});
