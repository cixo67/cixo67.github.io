angular.module('myApp', [])
   .controller('myControllers', function($scope, $http) {
       $http({
               method: 'GET',
               url: 'https://restcountries.eu/rest/v1/all'
           })
           .then(function(obj) {
               console.log(obj.data);
               $scope.cities = obj.data;
           },function(error){
               console.log(error)
           })

		$scope.city = {};
        $scope.getCity = function(city){
        	$scope.city = city;
        }
   })