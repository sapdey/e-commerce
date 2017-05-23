(function(){ 
angular.module('myApp')
      .controller('SearchController', SearchController);
SearchController.$inject = ['$scope', '$http'];
  	function SearchController($scope, $http) {

      $scope.selectedItem = [];
  $scope.query = function(searchText) {
    return $http
      .get("https://www.guarented.com/search-products?search_string=" + searchText)
      .then(function(response) {
        $scope.results = response.data.data;
        //console.log($scope.results);
        return $scope.results;
        });
      };

    $scope.mySelectedItem = function(){
      console.log($scope.item.selectedItem);
      return $scope.item.selectedItem;
    }
 }
})(); 