'use strict';

/**
 * @ngdoc function
 * @name thinkificChallengeFrontendApp.controller:IntegerCtrl
 * @description
 * # IntegerCtrl
 * Controller of the thinkificChallengeFrontendApp
 */
angular.module('thinkificChallengeFrontendApp')
.controller('IntegerCtrl', function ($scope, Integer, Auth, $localStorage, $cookies, $state, ModalService) {


    $scope.getCurrentInteger = function(){
        Integer.$getCurrentInteger()
        .then(function(response){
            $scope.openModal('Current Integer is ', response.data.current_integer);
        })
        .catch(function(errors){
            console.log(errors.data);
        })
    };

    $scope.getNextInteger = function(){
        Integer.$getNextInteger()
        .then(function(response){
            $scope.openModal('Next Integer is ', response.data.next_integer);
        })
        .catch(function(errors){
            console.log(errors.data);
        })
    };

    $scope.setNewCurrentInteger = function(newInteger){
        Integer.$setNewCurrentInteger(newInteger)
        .then(function(response){
            $scope.openModal('Current Integer is now ', response.data.current_integer);
        })
        .catch(function(errors){
            console.log(errors.data);
        });
    };

    $scope.openModal = function(title, number){
        console.log(number);
        ModalService.showModal({
            templateUrl: 'views/modal_integer.html',
            controller: "ModalCtrl",
            inputs: {
                title: title,
                number: number
        }
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function() {
            });
        });
    }

    $scope.logout = function(newInteger){
        Auth.$logout()
        .then(function(response){
            $localStorage.$reset();
            delete $cookies.remove('token');
            $state.go('landingPage');
        })
        .catch(function(errors){
            console.log(errors.data);
        });
    }

});

angular.module('thinkificChallengeFrontendApp')
    .controller('ModalCtrl', function($scope, close, title, number) {
        $scope.title = title;
        $scope.number = number;
    });
