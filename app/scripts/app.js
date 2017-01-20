'use strict';

/**
 * @ngdoc overview
 * @name thinkificChallengeFrontendApp
 * @description
 * # thinkificChallengeFrontendApp
 *
 * Main module of the application.
 */
angular
    .module('thinkificChallengeFrontendApp', [
        'ngAnimate',
        'ngCookies',
        'ui.router',
        'ngStorage',
        'angularModalService'

    ]).config(function($stateProvider, $httpProvider, $locationProvider){

        $httpProvider.interceptors.push(function ($cookies) {
            return {
                'request': function (config) {
                    if($cookies.get('token')){
                        config.headers['Authorization'] = 'Token ' + $cookies.get('token');
                    }
                    return config;
                }
            };
        });

        // $locationProvider.html5Mode(true).hashPrefix('!');

        $stateProvider
        .state('landingPage',{
            url:'',
            templateUrl:'views/landingPage.html',
            controller:'LandingPageCtrl',
            requireLogin:false
        })

        .state('register',{
            url:'/register',
            templateUrl:'views/register.html',
            controller:'RegisterCtrl',
            requireLogin:false
        })

        .state('integer',{
            url:'/integer',
            templateUrl:'views/integer.html',
            controller:'IntegerCtrl',
            requireLogin:true
        });

    }).run(function ($state, Auth, $rootScope) {
        $rootScope.$on('$stateChangeStart', function(event, toState){

            if (toState.requireLogin && !Auth.$isLoggedIn()){

                $state.transitionTo('landingPage');
                event.preventDefault();
            }

            if (!toState.requireLogin && Auth.$isLoggedIn()){

                $state.transitionTo('integer');
                event.preventDefault();
            }
        })
    });

