angular.module('prayService',[]).factory('Prays', ['$http',function($http) {
    return {
        get : function() {
            return $http.get('/pray/pray_list');
        },
        getToday : function() {
            return $http.get('/pray/pray_today_list');
        }
    }
}]);