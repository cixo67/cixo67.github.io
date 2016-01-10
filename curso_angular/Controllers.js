angular.module('MyApp',[])
	//Primer función que se ejecuta en el ciclo de vida de AngularJS
	.run(function($rootScope, $timeout){
		$timeout(function(){
			$rootScope.myLink="http://www.google.com";
			//$rootScope.myImage="http://i1.wp.com/conectica.com/wp-content/uploads/2016/01/pacific-rim-2.jpg";
			$rootScope.myImage="http://i1.wp.com/conectica.com/wp-content/uploads/2016/01/pacific-rim-2.jpg?resize=640%2C320";
		}, 2000)
	})

	.controller('myControllers', function($scope) {
		//Botón que genere un número aleatorio entre 0 y 10	
		$scope.random = function(){
			$scope.aleatorio = Math.floor((Math.random()*10)+1);
		}

		$scope.cities = {
			availableOptions:[
			{name:'Torreón'},
			{name:'México'},
			{name:'Parras'},
			{name:'Juárez'},
			{name:'Boston'},
			{name:'Graz'},
			{name:'Santo Domingo'}
			], 
			selectedOption:{name:'Juárez'}
		}

		$scope.person = {
			name: null
		};

		$scope.people = [];

		$scope.submit = function(){
			if($scope.person.name){
				$scope.people.push({name: $scope.person.name});
				$scope.person.name = "";
			}
		}
	})