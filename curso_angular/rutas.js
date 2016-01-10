angular.module('myApp', ['ngRoute'])
	.config(function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html', 
				controller: 'mainController'
			})
			.when('/about', {
				templateUrl: 'views/about.html', 
				controller: 'aboutController'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html', 
				controller: 'contactController'
			})
			.when('/countries', {
				templateUrl: 'views/countries.html', 
				controller: 'countryController'
			})
			.otherwise({ 
				templateUrl: 'views/404.html'
			})
	})

	//*
	.factory('countryService', function($http, $rootScope) {
		var country = {};

		country.data = {};

	    country.greeting = function(){
	    	alert('Saludos !!!')
	    }

		$http({
			method: 'GET', 
			url: 'https://restcountries.eu/rest/v1/all'
		}).then(function(obj) {
				country.data = obj.data;
				$rootScope.$broadcast('loadDataFinish');
				}, function(error){
		        console.log(error);
		    	})

	    return country;

	})
	
	.directive('sayHi', function(){
		return{
			restrict: 'E',
			replace: true, 
			template: "<button ng-click='greeting()'> Click me!</button>"
		}
	})

	/*.controller('mainController', function($scope, countryService <- INYECTAR)*/
	.controller('mainController', function($scope, countryService){
		$scope.message = 'Bienvenidos al Sitio' + ' - ' + countryService.name; 

		$scope.greeting = countryService.greeting; //ng-view lo hace accesible a todos
	})

	.controller('aboutController', function($scope){
		$scope.message = 'Aqui va el About !!!'
	})

	.controller('contactController', function($scope){
		$scope.message = 'Aqui va algo mas'
	})

	/*
	.controller('countryController', function($scope, $location, countryService){
		console.log("test")
		$scope.loadData = false;
	    $http({
	        method: 'GET',
	        url: 'https://restcountries.eu/rest/v1/all'

	    }).then(function(obj){
	        $scope.cities = obj.data;
	        console.log($scope.cities);
	        $scope.loadData = true;

	    }, function(error){
	        console.log(error);
	    })

	    $scope.showDetail = function(detail){
	    	
	    	countryService.name = detail.name;

	    	countryService.region = detail.name;
	    	countryService.population = detail.name;
	    	countryService.capital = detail.name;
	    	countryService.currency = detail.name;
	    	countryService.timezone = detail.name;

	    	$location.path('/');
	    	console.log(detail)
	    }
	/*/

	/*Primero se inyectan los servicios de AngularJS y después los personalizados*/
	//*
	.controller('countryController', function($scope, $location, countryService){
		$scope.message = 'Lista de Paises';
		$scope.loadData = false;

		assingData = function(){
			$scope.cities = countryService.data;
			$scope.loadData = true;
		}

		$scope.$on('loadDataFinish', function(){
			assingData();
		})
		
		assingData();

	    $scope.showDetail = function(detail){
	    	
	    	countryService.name = detail.name;

	    	countryService.region = detail.name;
	    	countryService.population = detail.name;
	    	countryService.capital = detail.name;
	    	countryService.currency = detail.name;
	    	countryService.timezone = detail.name;

	    	$location.path('/');
	    	console.log(detail)
	    }		
	})