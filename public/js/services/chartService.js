angular.module('chartService',[]).factory('Restaurants', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/api/restaurants');
        },
        create : function(data) {
            return $http.post('/api/restaurants', data);
        },
        delete : function(id) {
            return $http.delete('/api/restaurants/' + id);
        }
    }
}]);