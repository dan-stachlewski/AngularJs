var app = angular.module('library', ['ngRoute']);

app.controller('StudentCtrl',['$scope','$http', function($scope, $http) {
  $http.get("student.json").success(function(data){
	$scope.student = data; });
}]);

app.controller('CourseCtrl',['$scope','$routeParams','$http', 
function($scope, $routeParams, $http) {
  $http.get('classes'+$routeParams.id+'.json').success(function(data){
	$scope.timetable = data; });
}]);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/student', {
    templateUrl: 'partial-student.html', 
    controller: 'StudentCtrl'
  }).
  when('/student/:id', {
    templateUrl: 'partial-classes.html',
    controller: 'CourseCtrl'
  }).
  otherwise({
    redirectTo: '/student'
  });
}]);