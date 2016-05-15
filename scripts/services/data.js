'use strict';
angular.module('ToDoList')
.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('Hello console');
	};

	this.getTodos = function(callback){
		$http.get('mock/todos.json')
		.then(callback);
	};

	this.deleteTodo = function(todo) {
		console.log("The" + todo.name + " has been deleted.");
	};

	this.saveTodo = function(todo) {
		console.log("The " + todo.name + " has been saved");
	}
});