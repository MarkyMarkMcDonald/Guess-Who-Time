'use strict';

/**
 * @ngdoc function
 * @name guessWhoTimeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guessWhoTimeApp
 */
angular.module('guessWhoTimeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
