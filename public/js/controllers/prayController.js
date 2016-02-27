angular.module('prayController',[]).controller('main', ['$scope','$http','Prays', function($scope, $http, Prays) {
    $scope.formData = {};
    $scope.loading = true;

    Prays.get().success(function(data) {
        $scope.prays = data;
        $scope.loading = false;
    });
}]);