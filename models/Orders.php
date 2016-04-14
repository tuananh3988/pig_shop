<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "orders".
 *
 * @property integer $order_id
 * @property integer $customer_id
 * @property integer $created_by
 * @property string $note
 * @property integer $product_type_id
 * @property integer $total
 * @property integer $status
 * @property string $created_date
 * @property string $updated_date
 */
class Orders extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'orders';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['customer_id', 'created_by', 'product_type_id', 'status'], 'required'],
            [['customer_id', 'created_by', 'product_type_id', 'total', 'status'], 'integer'],
            [['created_date', 'updated_date'], 'safe'],
            [['note'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'order_id' => 'Order ID',
            'customer_id' => 'Customer ID',
            'created_by' => 'Created By',
            'note' => 'Note',
            'product_type_id' => 'Product Type ID',
            'total' => 'Total',
            'status' => 'Status',
            'created_date' => 'Created Date',
            'updated_date' => 'Updated Date',
        ];
    }
}
