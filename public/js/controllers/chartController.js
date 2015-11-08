angular.module('chartController', []).controller('main', ['$scope','$http','Restaurants', function($scope, $http, Restaurants) {
    $scope.formData = {};
    $scope.loading = true;

    Restaurants.get().success(function(data) {
        $scope.restaurants = data;
        $scope.loading = false;
    });

    $scope.createRestaurant = function() {
        if ($scope.formData.name != undefined) {
            $scope.loading = true;

            Restaurants.create($scope.formData).success(function(data) {
                $scope.loading = false;
                $scope.formData = {};
                $scope.restaurants = data;
            });
        }
    };

    $scope.deleteRestaurant = function(id) {
        $scope.loading = true;

        Restaurants.delete(id).success(function(data) {
            $scope.loading = false;
            $scope.restaurants = data;
        });
    };
}]);