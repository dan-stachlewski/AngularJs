/***
 * Created a variable named myApp = Angular Module
 * Purpose: Hold our Modules
 * angular.module('name', [dependencies for the Module go here])
 * var myApp will have all the code for the App = Name spacing
 * good way to protect the App code and make sure no other script on your wbesite will interfere w the App
 * Unique to Angular Object
 */

var myApp = angular.module('myApp', []);

//create controller that will control diff parts of the app
//.controller = method
//$scope is a SUPER var that allows you to pass things from .js to App and Template & vice versa
myApp.controller('MyController', function MyController($scope){
	//$scope is equal to an OBJECT
	//inside the OBJECT is a series of Name Value Pairs
	$scope.author = {
		'name' : 'Dan Stachlewski',
		'title' : 'Staff Author',
		'company' : 'Coders Cub'
	}

});

//Now we have a CONTROLLER & a MODEL we need to update the VIEW = TEMPLATE so it uses the Name Value Pairs