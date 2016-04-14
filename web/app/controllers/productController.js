app.controller('ProductTypeController', function($scope, $filter, $http) {
    // add user
    $scope.addProductType = function () {
        $scope.inserted = {
            product_type_id: $scope.productTypes.length + 1,
            product_type_name: '',
            product_type_machine: '',
        };
        $scope.productTypes.push($scope.inserted);
    };
        
    $scope.saveProductType = function(data, id) {
        //$scope.user not updated yet
        angular.extend(data, {product_type_id: id});
        return $http.post('api/product-type-save', data);
    };
    
    //config filter
    $scope.sortType     = ''; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
    //get list
    var url="api/product-type-list";
    $http.get(url).success( function(response) {
        $scope.productTypes = response;
    });
    
});

