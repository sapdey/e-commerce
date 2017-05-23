(function(){
angular.module('myApp')
       .controller('DetailController', DetailController);
DetailController.$inject = ['$scope', '$http','$stateParams'];
    function DetailController($scope, $http, $stateParams) {
      
      $scope.parent = $stateParams.parent;
      $scope.nick = $stateParams.nick;

        $scope.getDetails = function() {
          var url = "https://www.guarented.com/products_list/"+ $scope.parent + "?nick=" + $scope.nick;
          return $http.get(url)
            .then(function(response) {
              $scope.details = response.data;
              return $scope.details;
        });
      };
  }
})(); 