﻿var app = angular.module('PigApp', ['ui.router', "xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home'); // Mọi đường dẫn không hợp lệ đều được chuyển đến state home
    
    $stateProvider
        .state('home', {    // Định ngĩa 1 state home
            data: {
                pageTitle: 'Pig shop'
            },
            url: '/home',  // khai báo Url hiển thị
            templateUrl: 'app/views/home.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('customer', {    // Định ngĩa 1 state home
            data: {
                pageTitle: 'Pig shop | Customers'
            },
            url: '/customer',  // khai báo Url hiển thị
            templateUrl: 'app/views/customer.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('product-type', {    // Định ngĩa 1 state home
            data: {
                pageTitle: 'Pig shop | Product types'
            },
            url: '/product-type',  // khai báo Url hiển thị
            templateUrl: 'app/views/product-type.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('product', {    // Định ngĩa 1 state home
            data: {
                pageTitle: 'Pig shop | Products'
            },
            url: '/product',  // khai báo Url hiển thị
            templateUrl: 'app/views/product.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
        .state('add-order', {    // Định ngĩa 1 state home
            data: {
                pageTitle: 'Pig shop | New order'
            },
            url: '/add-order',  // khai báo Url hiển thị
            templateUrl: 'app/views/add-order.html',  // đường dẫn view
            controller: function($scope) {  // Khai báo 1 controller cho state home
                
            }
        })
});

app.directive('updateTitle', ['$rootScope', '$timeout',
  function($rootScope, $timeout) {
    return {
      link: function(scope, element) {

        var listener = function(event, toState) {

          var title = 'Default Title';
          if (toState.data && toState.data.pageTitle) title = toState.data.pageTitle;

          $timeout(function() {
            element.text(title);
          }, 0, false);
        };

        $rootScope.$on('$stateChangeSuccess', listener);
      }
    };
  }
]);