<?php

namespace app\controllers;

use Yii;
use yii\filters\AccessControl;
use yii\web\Controller;
use yii\filters\VerbFilter;
use app\models\Customers;
use app\models\ProductType;

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

}
