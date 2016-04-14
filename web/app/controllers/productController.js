app.controller('ProductController', function($scope, $filter, $http) {
    // add user
    $scope.addProduct = function () {
        $scope.inserted = {
            product_id: $scope.products.length + 1,
            product_name: '',
            product_type_id: '',
            price: '',
        };
        $scope.products.push($scope.inserted);
    };
        
    $scope.saveProduct = function(data, id) {
        //$scope.user not updated yet
        angular.extend(data, {product_id: id});
        return $http.post('api/product-save', data);
    };
    
    //config filter
    $scope.sortType     = ''; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
    //get list
    var url="api/product-list";
    $http.get(url).success( function(response) {
        $scope.products = response;
    });
    
});

