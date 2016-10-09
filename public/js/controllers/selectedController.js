angular.module('selectedController',[]).controller('main', ['$scope','$http','Selected', function($scope, $http, Selected) {
    $scope.formData = {};
    $scope.loading = true;

    Selected.getRecommendStock().success(function(data) {
        $scope.stocks = data;
        $scope.loading = false;
    });

    $scope.goMenu = function(menu) {
        $scope.loading = true;

        $("li[id^='list_']").removeClass("active");
        $("#list_"+menu).addClass("active");

        if(menu === 'recommend_stock') {
            Selected.getRecommendStock().success(function(data) {
                $scope.stocks = data;
                $scope.loading = false;
            });

            $("#recommend_stock_table").show();
            $("#member_table").hide();
        } else {
            Selected.getMemberList().success(function(data) {
                $scope.members = data;
                $scope.loading = false;
            });

            $("#recommend_stock_table").hide();
            $("#member_table").show();
        }
    };

    $scope.goDetail = function(index, menu) {
        if(menu === 'recommend_stock') {
            alert(index.stock_code);
        } else {

        }

        $('form').attr("action", "/pray/pray_detail");
        $('form').submit();
    };

    $scope.logout = function() {
        $('form').attr("method", "get");
        $('form').attr("action", "/selected");
        $('form').submit();
    };
}]);