angular.module('ToDoList', [])
.controller('mainCtrl', function($scope, dataService) {
	$scope.helloConsole = dataService.helloConsole;
	$scope.learningNgChange = function(){
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