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
            console.log(selected);
            return selected.length ? selected[0].text : 'Not set';
        } else {
            console.log(customer);
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
        
    $scope.saveUser = function(data, id) {
        //$scope.user not updated yet
        angular.extend(data, {customer_id: id});
        return $http.post('api/customer-save', data);
    };
    
    //config filter
    $scope.sortType     = ''; // set the default sort type
    $scope.sortReverse  = false;  // set the default sort order
    $scope.searchFish   = '';     // set the default search/filter term
    //get list
    var url="api/customer-list";
    $http.get(url).success( function(response) {
        $scope.customers = response;
    });
    
});

