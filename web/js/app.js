var app = angular.module('PigApp', ['ui.router', "xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home'); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home
    
    $stateProvider
       
        .state('home', {    // Định ngĩa 1 state home
            url: '/home',  // khai báo Url hiển thị
            templateUrl: './templates/home.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('customer', {    // Định ngĩa 1 state home
            url: '/customer',  // khai báo Url hiển thị
            templateUrl: './templates/customer.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
});

app.controller('CustomerController', function($scope, $filter, $http) {
    //list Apartment
    $scope.apartments = [
        {value: 'tsq', text: 'TSQ'},
        {value: 'mulberry', text: 'Mulberry'},
        {value: 'seta', text: 'Seta'},
        {value: 'other', text: 'Other'}
    ];
    
    $scope.showApartment = function(customer) {
        if (customer.apartment && $scope.apartments.length) {
            var selected = $filter('filter')($scope.apartments, {value: customer.apartment});
            return selected.length ? selected[0].text : 'Not set';
        } else {
            return customer.apartment || 'Not set';
        }
    };
    
    // add user
    $scope.addUser = function () {
        $scope.inserted = {
            customer_id: $scope.customers.length + 1,
            customer_name: '',
            phone: '',
            adress: '',
            apartment: null,
        };
        $scope.customers.push($scope.inserted);
    };
    
    $scope.saveUser = function(customer) {
        //$scope.user not updated yet
         var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
        }
        return $http.post('api/customer-save', customer, config);
    };
    
    //config filter
    $scope.sortType     = 'name'; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
    //get list
    var url="api/customer-list";
    $http.get(url).success( function(response) {
        $scope.customers = response;
    });
    
});




