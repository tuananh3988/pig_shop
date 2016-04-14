<?php

namespace app\models;

use Yii;

/**
 * This is the model class for table "product_type".
 *
 * @property integer $product_type_id
 * @property string $product_type_name
 * @property string $product_type_machine
 */
class ProductType extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'product_type';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['product_type_name', 'product_type_machine'], 'required'],
            [['product_type_name', 'product_type_machine'], 'string', 'max' => 255]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'product_type_id' => 'Product Type ID',
            'product_type_name' => 'Product Type Name',
            'product_type_machine' => 'Product Type Machine',
        ];
    }
}
