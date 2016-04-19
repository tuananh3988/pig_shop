(function () {
    'use strict';
    app.controller('ordersController', ordersController);
    function ordersController($timeout, $q, $log, $http, $filter, $scope) {
        $scope.order = {
            customer_id: '',
            product_type_id: 1,
            note: '',
            products: [
                {
                product_id: '',
                qty: 0,
                custom_price: ''
                }
            ]
        }
        
        //get customer list
        var self = this;
        var url="api/customer-list";
        $http.get(url).success( function(response) {
            var allCustomers = response;
            self.customers = allCustomers.map(function (customer) {
                return {
                    value: customer.customer_id,
                    display: customer.customer_name + ' - ' + customer.adress
                };
            });
        });
        
        //get product type list
        var url="api/product-type-list";
        $http.get(url).success( function(response) {
            var allTypes = response;
            self.types = allTypes.map(function (type) {
                return {
                    value: type.product_type_id,
                    name: type.product_type_name
                };
            });
        });
        
        //get products list
        var url="api/product-list?product_type_id=" + $scope.order.product_type_id;
        $http.get(url).success( function(response) {
            var listProducts = response;
            self.listProducts = listProducts.map(function (product) {
                return {
                    value: product.product_id,
                    name: product.product_name
                };
            });
        });

        
        self.simulateQuery = false;
        self.isDisabled = false;
        // list of `state` value/display objects
        self.querySearch = querySearch;
        self.selectedItemChange = selectedItemChange;
        self.searchTextChange = searchTextChange;
        self.newState = newState;
        function newState(state) {
            alert("Sorry! You'll need to create a Constituion for " + state + " first!");
        }
        // ******************************
        // Internal methods
        // ******************************
        /**
         * Search for states... use $timeout to simulate
         * remote dataservice call.
         */
        function querySearch(query) {
            var results = query ? $filter('filter')(self.customers, query) : self.customers,
                    deferred;
            if (self.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else {
                return results;
            }
        }
        function searchTextChange(text) {
            $log.info('Text changed to ' + text);
        }
        function selectedItemChange(item) {
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        
        // add user
        $scope.addProduct = function () {
            $scope.inserted = {
                product_id: '',
                qty: 0,
                custom_price: ''
            };
            $scope.order.products.push($scope.inserted);
        };
    }
})();