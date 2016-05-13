angular.module('ToDoList', [])

.controller('mainCtrl', function($scope, dataService) {
	$scope.helloWorld = function(){
		console.log("Hello there!");
	};
	$scope.helloConsole = dataService.helloConsole;
	dataService.getTodos(function(response){
		console.log(response.data);
		$scope.todos = response.data;
	});
})

.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('Hello console');
	};

	this.getTodos = function(callback){
		$http.get('mock/todos.json')
		.then(callback);
	};
});