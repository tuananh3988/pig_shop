(function () {
    'use strict';
    app.controller('ordersController', ordersController);
    function ordersController($timeout, $q, $log, $http, $filter, $scope) {
        $scope.order = {
            customer_id: '',
            product_type_id: 1,
            note: '',
            total: 0,
            total_qty: 0,
            products: [
                {
                product_id: '',
                qty: 0,
                real_qty: 0,
                custom_price: '',
                subtotal: 0,
                free: false,
                }
            ]
        }
        
        // add user
        $scope.addProduct = function () {
            $scope.inserted = {
                product_id: '',
                qty: 0,
                real_qty: 0,
                custom_price: '',
                subtotal: 0,
                free: false,
            };
            
            $scope.order.products.push($scope.inserted);
        };
        
        $scope.productSelected = [];
        $scope.onChangeProduct = function(product_id, product) {
            if (product_id) {
                var index = $scope.productSelected.indexOf(product_id);
                if (index > -1) {
                    $scope.productSelected.splice(index, 1);
                }
            }
            
            setTimeout(function(){
                $scope.productSelected.push(product.product_id);
            }, 500);
        };
        
        $scope.isProductDisable = function(product_id) {
            return $scope.productSelected.indexOf(product_id) > -1;
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
            self.listProducts = response;
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
            $scope.order.customer_id = item.value;
            $log.info('Item changed to ' + JSON.stringify(item));
        }
        
        
        $scope.getTotal = function(){
            var total = 0;
            for(var i = 0; i < $scope.order.products.length; i++){
                var product = $scope.order.products[i];
                total += (product.subtotal);
            }
            return total;
        }
        
        $scope.getQty = function(){
            var total = 0;
            for(var i = 0; i < $scope.order.products.length; i++){
                var product = $scope.order.products[i];
                total += (product.qty);
            }
            return total;
        }
        
        $scope.getRealQty = function(){
            var total = 0;
            for(var i = 0; i < $scope.order.products.length; i++){
                var product = $scope.order.products[i];
                total += (product.real_qty);
            }
            return total;
        }
        
        
        $scope.selected = [];
        $scope.toggle = function (item, list) {
          var idx = list.indexOf(item);
          if (idx > -1) {
            list.splice(idx, 1);
          }
          else {
            list.push(item);
          }
        };
        
        // remove user
        $scope.removeProduct = function(index) {
          $scope.order.products.splice(index, 1);
        };

        
        $scope.isIndeterminate = function() {
          return ($scope.selected.length !== 0 &&
              $scope.selected.length !== $scope.order.products.length);
        };
        $scope.isChecked = function() {
          return $scope.selected.length === $scope.order.products.length;
        };
        $scope.toggleAll = function() {
          if ($scope.selected.length === $scope.order.products.length) {
            $scope.selected = [];
            $scope.setValue('free', false);
          } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
            $scope.selected = $scope.order.products.slice(0);
            $scope.setValue('free', true);
          }
        };
        
        $scope.setValue = function(key, value) {
            for(var i = 0; i < $scope.order.products.length; i++){
                $scope.order.products[i][key] = value;
                
            }
        }
    }
})();