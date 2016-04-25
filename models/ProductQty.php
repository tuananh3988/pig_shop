<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product_qty".
 *
 * @property integer $product_qty_id
 * @property integer $product_id
 * @property integer $order_id
 * @property double $qty
 * @property double $qty_real
 * @property integer $custom_price
 * @property integer $subtotal
 * @property string $created_date
 * @property string $updated_date
 */
class ProductQty extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'product_qty';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['product_id', 'order_id', 'qty'], 'required'],
            [['product_id', 'order_id', 'custom_price', 'subtotal'], 'integer'],
            [['qty', 'qty_real'], 'number'],
            [['created_date', 'updated_date'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'product_qty_id' => 'Product Qty ID',
            'product_id' => 'Product ID',
            'order_id' => 'Order ID',
            'qty' => 'Qty',
            'qty_real' => 'Qty Real',
            'custom_price' => 'Custom Price',
            'subtotal' => 'Subtotal',
            'created_date' => 'Created Date',
            'updated_date' => 'Updated Date',
        ];
    }
}
