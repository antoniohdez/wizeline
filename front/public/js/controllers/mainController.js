app.controller("mainController", ["$scope","$location", "$window", "urlsFactory",
    function ($scope, $location, $window, urlsFactory) {
        $scope.url = {};
        $scope.urls = [];

        $scope.createUrl = function() {
            
            if ($scope.isValidUrl()) {
                urlsFactory.create($scope.url).$promise.then(function() {
                    $scope.urls = urlsFactory.query();
                    $scope.clearForm();
                }); 
            }
        }

        $scope.isValidUrl = function() {
            return true;
        }

        $scope.clearForm = function() {
            $scope.url = {};
        }

        $scope.urls = urlsFactory.query();
        
    }]);
