var app = angular.module('app', []);

app.controller('mainCtrl', function($http, $scope, $q){

	$scope.books = null;
	$scope.books2 = null;
	$scope.books3 = null;

	var get1 = $http.get('http://localhost:3001/get1')
							.success(function (result){
								console.log('success', result);
								$scope.books = result;
							})
							.error(function (result){
								console.log('error');
							});

	var get2 = $http.get('http://localhost:3001/get2')
							.success(function (result){
								console.log('success', result);
								$scope.books2 = result;
							})
							.error(function (result){
								console.log('error');
							});

	$q.all([get1,get2]).then(function(){
		return $http.get('http://localhost:3001/get3')
						.success(function (result){
							console.log('success', result);
							$scope.books3 = result;
						})
						.error(function (result){
							console.log('error');
						});
	});

});