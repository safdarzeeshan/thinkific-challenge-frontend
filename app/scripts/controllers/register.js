'use strict';

/**
 * @ngdoc function
 * @name thinkificChallengeFrontendApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the thinkificChallengeFrontendApp
 */
angular.module('thinkificChallengeFrontendApp')
.controller('RegisterCtrl', function ($scope, Auth, Validate, $cookies, $state, $localStorage) {

    $scope.loading = false;
    $scope.newuser ={};

    $scope.register = function(formData){
        console.log($scope.newuser);
        $scope.loading = true;
        $scope.errors = [];
        Validate.form_validation(formData,$scope.errors);
        if(!formData.$invalid){
            var data = {
                'password1':$scope.newuser.password1,
                'password2':$scope.newuser.password2,
                'email':$scope.newuser.email
            };

            Auth.$register(data)
            .then(function(response){
                $cookies.put('token', response.data.key);
                $localStorage.isAuthenticated = 'true';
                $scope.loading = false;
                $state.go('integer');
            })
            .catch(function(errors){
                $scope.loading = false;
                $scope.errors = errors.data;
            });
        }
    };
});
