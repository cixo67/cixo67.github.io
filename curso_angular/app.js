angular.module('myApp',[])
	.controller('ctrlGreetings', function($scope, $filter){
		$scope.name = "Oscar";
		$scope.today = new Date();

		$scope.greeting = function(){
			console.log("greetings program!!!!");
		}

		$scope.setLowerCase = $filter('lowercase')('PANCHO pantera');

		$scope.isCapitalized = function(str){
			var res = str[0] == str[0].toUpperCase();
			return res;
		};

		$scope.tamanioCadena = function(str){
			var res = str[0] == str[0].toUpperCase();
			return res;
			//var len = str.Lenght();
			//return len;
		}

		/*$scope.capitalize = function(str){
			var res = str[0]
			return res;
		}*/
	})

	.controller('myClock', function($scope){
		$scope.clock = {
			now: new Date()
		}

		var updateClock = function(){
			$scope.clock.now = new Date();
		}

		setInterval(function(){
			$scope.$apply(updateClock())
		},1000);
	})

	.controller('myOperators', function($scope){
		$scope.showData = function(){
			console.log($scope.datoA);
			$scope.result = parseInt($scope.datoA) + parseInt($scope.datoB);
		}

		$scope.add = function(){
			//var value1 = parseInt(document.getElementById('Number1').value);
			//var value2 = parseInt(document.getElementById('Number2').value);

			datoA = parseInt($scope.datoA);
			datoB = parseInt($scope.datoB);

			$scope.result = datoA + datoB;
		}
		$scope.substract = function(){
			//var value1 = parseInt(document.getElementById('Number1').value);
			//var value2 = parseInt(document.getElementById('Number2').value);

			datoA = parseInt($scope.datoA);
			datoB = parseInt($scope.datoB);

			$scope.result = datoA - datoB;
		}
		$scope.multiply = function(){
			var value1 = parseInt(document.getElementById('Number1').value);
			var value2 = parseInt(document.getElementById('Number2').value);

			$scope.result = value1 * value2;
		}
		$scope.divide = function(){
			var value1 = parseInt(document.getElementById('Number1').value);
			var value2 = parseInt(document.getElementById('Number2').value);

			$scope.result = value1 / value2;
		}
	})

	.filter('blankIfNegative', function(){
		return function(input){
			console.log(input);
			if(input<=0)
				return 'NaN';
			else
				return input;
		}
	})

	.filter('capitalize', function(){
		return function(input){
			if(input){
				return input[0].toUpperCase() + input.slice(1);
			}
		}
	})

	.directive('myLogin', function(){
		return {
			//restrict: 'A',
			restrict: 'AEM',
			replace: true, 
			scope:{
				userName:'@'
			},
			template: '\
				<div>\
					<div>Acceso de Usuario</div>\
					<input type="text" value="{{ userName }}" placeholder="Usuario...">\
					<input type="password" placeholder="Password...">\
					<button>Enviar</button>\
				</div>\
			'
		};
	})

	//<input type="text" placeholder="Usuario..." ng-model="user">\