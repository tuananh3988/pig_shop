var app = angular.module('PigApp', ['ui.router', "xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home'); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home
    
    $stateProvider
       
        .state('home', {    // Định ngĩa 1 state home
            url: '/home',  // khai báo Url hiển thị
            templateUrl: 'app/views/home.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('customer', {    // Định ngĩa 1 state home
            url: '/customer',  // khai báo Url hiển thị
            templateUrl: 'app/views/customer.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('product-type', {    // Định ngĩa 1 state home
            url: '/product-type',  // khai báo Url hiển thị
            templateUrl: 'app/views/product-type.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
});