<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\Customers;
use app\models\ProductType;
use app\models\Products;
use app\models\Orders;
use app\models\ProductQty;

class ApiController extends Controller
{
    public function behaviors()
    {
        return [
            'access' => [
                'class' => AccessControl::className(),
                'only' => ['logout'],
                'rules' => [
                    [
                        'actions' => ['logout'],
                        'allow' => true,
                        'roles' => ['@'],
                    ],
                ],
            ],
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'logout' => ['post'],
                ],
            ],
        ];
    }


    public function actionCustomerList()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $customers = Customers::find()->asArray()->all();
        return $customers;
    }
    
    public function actionCustomerSave()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $post = json_decode(file_get_contents('php://input'), true);
        $customer = Customers::findOne($post['customer_id']);
        if (empty($customer)) {
            $customer = new Customers();
        }
        
        $customer->setAttributes($post);
        $customer->adress = strtoupper($customer->adress);
        $customer->save();
    }
    
    public function actionProductTypeList()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        return ProductType::find()->asArray()->all();
    }
    
    public function actionProductTypeSave()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $post = json_decode(file_get_contents('php://input'), true);
        $productType = ProductType::findOne($post['product_type_id']);
        if (empty($productType)) {
            $productType = new ProductType();
        }
        
        $productType->setAttributes($post);
        $productType->product_type_machine = strtoupper($productType->product_type_machine);
        $productType->save();
    }
    
    public function actionProductList()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $request = Yii::$app->request;
        $get = $request->get();
        $where = [];
        if (isset($get['product_type_id'])) {
            $where['products.product_type_id'] = $get['product_type_id'];
        }
        
        return Products::find()->select(['products.product_id', 'products.product_name', 'products.product_type_id', 'products.price', 'product_type.product_type_machine'])
                ->join('INNER JOIN', 'product_type', 'product_type.product_type_id = products.product_type_id')->where($where)->indexBy('product_id')->asArray()->all();
    }
    
    public function actionProductSave()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $post = json_decode(file_get_contents('php://input'), true);
        $product = Products::findOne($post['product_id']);
        if (empty($product)) {
            $product = new Products();
        }
        
        $product->setAttributes($post);
        $product->save();
    }
    
    public function actionOrderSave()
    {
        \Yii::$app->response->format = \yii\web\Response::FORMAT_JSON;
        $post = json_decode(file_get_contents('php://input'), true);
        //var_dump($post);die;
        $order = new Orders();
        
        $order->setAttributes($post);
        $order->created_by = 1;
        $order->created_date = date('Y-m-d H:i:s');
        $order->save();
        
        $total = 0;
        foreach ($post['products'] as $key => $p) {
            $orderQty = new ProductQty();
            if (empty($p['product_id'])) {
                continue;
            }
            
            $price = Products::getProductPrice($p['product_id']);
            if ($p['free']) {
                $subtotal = 0;
            } else {
                if (empty($p['custom_price'])) {
                    $subtotal = $p['qty_real'] * $price;
                } else {
                    $subtotal = $p['qty_real'] * $p['custom_price'];
                }
            }
            
            $orderQty->setAttributes($p);
            $orderQty->order_id = $order->order_id;
            $orderQty->subtotal = $subtotal;
            $orderQty->save();
            $total += $subtotal;
        }
        
        $order->total = $total;
        $order->save();
    }
}
