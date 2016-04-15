<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>" ng-app="PigApp">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <title update-title>Manager Pig meal</title>
    
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootswatch/3.2.0/sandstone/bootstrap.min.css">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/angular-material/1.1.0-rc3/angular-material.min.css">
    <link href="css\xeditable.css" rel="stylesheet"/>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.js"></script>
    <script src="app/js/angular-material.min.js"></script>
    <script src="app/js/xeditable.js"></script>
	<script src="app/app.js"></script>
    <script src="app/controllers/customerController.js"></script>
    <script src="app/controllers/productTypeController.js"></script>
    <script src="app/controllers/productController.js"></script>
    <script src="app/controllers/ordersController.js"></script>
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
                <li><a href="#">Page 2</a></li> 
                <li><a href="#">Page 3</a></li> 
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
