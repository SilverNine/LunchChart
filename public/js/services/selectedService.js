angular.module('selectedService',[]).factory('Selected', ['$http',function($http) {
    return {
        getRecommendStock : function() {
            return $http.get('/selected/recommend_stock_list');
        },
        getMemberList : function() {
            return $http.get('/selected/member_list');
        }
    }
}]);