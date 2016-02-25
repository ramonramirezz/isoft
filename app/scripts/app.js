'use strict';

/**
 * @ngdoc overview
 * @name projectApp
 * @description
 * # projectApp
 *
 * Main module of the application.
 */
 angular
  .module('projectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/crearEmpresa', {
        templateUrl: 'views/crearempresa.html',
        controller: 'CrearempresaCtrl',
        controllerAs: 'vm'
      })
      .when('/crearUsuario', {
        templateUrl: 'views/crearusuario.html',
        controller: 'CrearusuarioCtrl',
        controllerAs: 'vm'
      })
      .when('/verEmpresa', {
        templateUrl: 'views/verempresa.html',
        controller: 'VerempresaCtrl',
        controllerAs: 'vm'
      })
      .when('/asignarUsuario', {
        templateUrl: 'views/asignarusuario.html',
        controller: 'AsignarusuarioCtrl',
        controllerAs: 'vm'
      })
      .when('/editarEmpresa/:item', {
        templateUrl: 'views/editarempresa.html',
        controller: 'EditarempresaCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
