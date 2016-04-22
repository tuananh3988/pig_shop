<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" ng-app="PigApp">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <title update-title>Manager Pig meal</title>
    
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootswatch/3.2.0/sandstone/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.0-rc4/angular-material.css">
    <link href="css\xeditable.css" rel="stylesheet"/>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-animate.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-aria.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular-messages.min.js"></script>
    <script src="https://cdn.rawgit.com/a8m/angular-filter/master/dist/angular-filter.js"></script>

    <!-- Angular Material Library -->
    <script src="https://cdn.gitcdn.link/cdn/angular/bower-material/v1.1.0-rc4/angular-material.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.js"></script>
    <script src="app/js/xeditable.js"></script>
	<script src="app/app.js"></script>
    <script src="app/controllers/customerController.js"></script>
    <script src="app/controllers/productTypeController.js"></script>
    <script src="app/controllers/productController.js"></script>
    <script src="app/controllers/ordersController.js"></script>
    
    <style>
        md-autocomplete input:not(.md-input) {
            padding: 0;
        }
        
        .product-order md-input-container {
            margin: 0;
        }
        .product-order.table {
            margin-bottom: 0;
        }
        .product-order.table>thead>tr>th, .product-order.table>tbody>tr>th, .product-order.table>tfoot>tr>th, .product-order.table>thead>tr>td, .product-order.table>tbody>tr>td, .product-order.table>tfoot>tr>td {
            border-top: none;
            padding: 0 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="navbar-header">
                <a class="navbar-brand" href="#">Pig Shop</a>
              </div>
              <ul class="nav navbar-nav">
                <li><a ui-sref="order-add">New order</a></li>
                <li><a ui-sref="customer">Customers</a></li>
                <li><a ui-sref="product">Products</a></li>
                <li><a ui-sref="product-type">Product type</a></li>
              </ul>
            </div>
        </nav>
        
        <div class="row">
            <div class="span12">
                <div class="well" ui-view></div>        
            </div>
        </div>  
    </div>    
</body>
</html>
