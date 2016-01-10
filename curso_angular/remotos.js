angular.module('myApp',[])
.controller('myControllers',function($scope,$http){
    $http({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v1/all'
    }).then(function(obj){
        $scope.cities = obj.data;
    }, function(error){
        console.log(error);
    })
})