angular.module('ToDoList', [])
.controller('mainCtrl', function($scope) {
	$scope.helloWorld = function(){
		console.log("Hello there!");
	};

	$scope.todos = [
		{"name" : "clean the house"},
		{"name" : "run"}
	]
})

.service('dataService', function(){
	this.helloConsole = function(){
		console.log('Hello console');
	}
});