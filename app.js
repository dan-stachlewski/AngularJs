var app = angular.module('myApp', ['ngRoute']);

app.controller('customersCtrl',['$scope','$http', function($scope, $http) {
  $http.get("customer.json").success(function(data){
	$scope.customers = data; });
}]);

app.controller('orderCtrl',['$scope','$routeParams','$http', 
function($scope, $routeParams, $http) {
  $http.get('order'+$routeParams.id+'.json').success(function(data){
	$scope.order = data; });
}]);


app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customer', {
    templateUrl: 'partial-customer.html', 
    controller: 'customersCtrl'
  }).
  when('/customer/:id', {
    templateUrl: 'partial-order.html',
    controller: 'orderCtrl'
  }).
  otherwise({
    redirectTo: '/customer'
  });
}]);