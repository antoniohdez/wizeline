app.controller("mainController", ["$scope", "","$location", "$window", "urlsFactory",
    function ($scope, $location, $window, authService, urlsFactory) {
        $scope.url = {};
        $scope.urls = [];

        $scope.getUrls = function () {
             
        };

        $scope.createUrl = function() {
            urlsFactory.create($scope.url).$promise.then(function() {
                $scope.urls = urlsFactory.query();
                $scope.clearForm();
            }); 
        }

        $scope.clearForm = function() {
            $scope.user = {};
        }

        $scope.urls = urlsFactory.query();
        
    }]);