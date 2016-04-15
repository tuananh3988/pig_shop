/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : manage_shops

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-04-15 17:51:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for customers
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `apartment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES ('1', 'Hien Ho', '123456', 'D1204', 'mulberry');
INSERT INTO `customers` VALUES ('2', 'Khoai To', '4567', 'A2310', 'mulberry');
INSERT INTO `customers` VALUES ('3', 'Chinh Ngoc Nguyen', '098124754', 'T2B-0509', 'tsq');
INSERT INTO `customers` VALUES ('4', 'Do Tam', '0982345762', 'T2B-1109', 'tsq');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_id` int(11) NOT NULL,
  `created_by` int(11) NOT NULL,
  `note` varchar(255) DEFAULT NULL,
  `product_type_id` int(11) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `status` int(1) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `product_type_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `has_special_qty` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Thịt thăn', '1', '150000', null);
INSERT INTO `products` VALUES ('2', 'Sườn', '1', '150000', null);
INSERT INTO `products` VALUES ('3', 'Ba chỉ', '1', '130000', null);

-- ----------------------------
-- Table structure for product_qty
-- ----------------------------
DROP TABLE IF EXISTS `product_qty`;
CREATE TABLE `product_qty` (
  `product_qty_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `qty_real` int(11) DEFAULT NULL,
  `custom_price` int(11) DEFAULT NULL,
  `total_product` int(11) DEFAULT NULL,
  `created_date` datetime DEFAULT NULL,
  `updated_date` datetime DEFAULT NULL,
  PRIMARY KEY (`product_qty_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_qty
-- ----------------------------

-- ----------------------------
-- Table structure for product_type
-- ----------------------------
DROP TABLE IF EXISTS `product_type`;
CREATE TABLE `product_type` (
  `product_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `product_type_name` varchar(255) NOT NULL,
  `product_type_machine` varchar(255) NOT NULL,
  PRIMARY KEY (`product_type_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_type
-- ----------------------------
INSERT INTO `product_type` VALUES ('1', 'Lợn bản', 'LONBAN');
INSERT INTO `product_type` VALUES ('2', 'Xoài', 'XOAI');
INSERT INTO `product_type` VALUES ('3', 'Măng', 'MANG');
