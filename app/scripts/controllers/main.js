'use strict';

/**
 * @ngdoc function
 * @name guessWhoTimeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guessWhoTimeApp
 */
angular.module('guessWhoTimeApp')
  .controller('MainCtrl', function ($scope) {
  	var player1Rows = [];
  	for (var i = 0; i < 5; i++) {
  		var player1Row = [];
  		for (var j = 0; j < 5; j++) {
  			player1Row.push({ url: 'http://pivots.pivotallabs.com.s3.amazonaws.com/uploads/user/photo/1006/IMG_0370.JPG', id: '' + i + j})
  		}
  		player1Rows.push(player1Row);
  	}
  	$scope.player1Rows = player1Rows;

	var player2Rows = [];
  	for (var i = 0; i < 5; i++) {
  		var player2Row = [];
  		for (var j = 0; j < 5; j++) {
  			player2Row.push({ url: 'http://pivots.pivotallabs.com.s3.amazonaws.com/uploads/user/photo/1116/francisco_hui_designer.png', id: '' + i + j})
  		}
  		player2Rows.push(player2Row);
  	}
  	$scope.player2Rows = player2Rows;

  });

