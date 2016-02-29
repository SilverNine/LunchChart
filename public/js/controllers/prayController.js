angular.module('prayController',[]).controller('main', ['$scope','$http','Prays', function($scope, $http, Prays) {
    $scope.formData = {};
    $scope.loading = true;

    Prays.get().success(function(data) {
        $scope.prays = data;
        $scope.loading = false;
    });

    $scope.goMenu = function(menu) {
        $scope.loading = true;

        $("li[id^='list_']").removeClass("active");
        $("#list_"+menu).addClass("active");

        if(menu === 'pray') {
            Prays.get().success(function(data) {
                $scope.prays = data;
                $scope.loading = false;
            });

            $("#pray_today_table").hide();
            $("#pray_table").show();
        } else {
            Prays.getToday().success(function(data) {
                $scope.pray_today_words = data;
                $scope.loading = false;
            });

            $("#pray_table").hide();
            $("#pray_today_table").show();
        }
    };

    $scope.goDetail = function(index, menu) {
        if(menu === 'pray') {

        } else {

        }

        $('form').attr("action", "/pray/pray_detail");
        $('form').submit();
    };

    $scope.logout = function() {
        $('form').attr("method", "get");
        $('form').attr("action", "/pray");
        $('form').submit();
    };
}]);