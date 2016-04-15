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
    
    $scope.productTypes = [];
    $scope.loadProductTypes = function() {
        return $scope.productTypes.length ? null : $http.get('api/product-type-list').success(function(data) {
            $scope.productTypes = data;
        });
    };
       
    $scope.saveProduct = function(data, id) {
        //$scope.user not updated yet
        angular.extend(data, {product_id: id});
        return $http.post('api/product-save', data);
    };
    
    $scope.showProductType = function(product) {
        if (product.product_type_id && $scope.productTypes.length) {
            var selected = $filter('filter')($scope.productTypes, {product_type_id: product.product_type_id});
            return selected.length ? selected[0].product_type_machine : 'Not set';
        } else {
            return product.product_type_machine || 'Not set';
        }
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

