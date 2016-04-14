<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "products".
 *
 * @property integer $product_id
 * @property string $product_name
 * @property integer $product_type_id
 * @property string $price
 * @property integer $has_special_qty
 */
class Products extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'products';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['product_name', 'product_type_id', 'price'], 'required'],
            [['product_type_id', 'has_special_qty'], 'integer'],
            [['price'], 'number'],
            [['product_name'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'product_id' => 'Product ID',
            'product_name' => 'Product Name',
            'product_type_id' => 'Product Type ID',
            'price' => 'Price',
            'has_special_qty' => 'Has Special Qty',
        ];
    }
}
