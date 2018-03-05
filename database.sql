/*
Navicat MySQL Data Transfer

Source Server         : blog
Source Server Version : 50524
Source Host           : localhost:3306
Source Database       : database

Target Server Type    : MYSQL
Target Server Version : 50524
File Encoding         : 65001

Date: 2018-01-30 19:34:31
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admintable
-- ----------------------------
DROP TABLE IF EXISTS `admintable`;
CREATE TABLE `admintable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `pasw` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admintable
-- ----------------------------
INSERT INTO `admintable` VALUES ('1', '0001', '123456');
INSERT INTO `admintable` VALUES ('2', '0002', '123456');

-- ----------------------------
-- Table structure for orderdata
-- ----------------------------
DROP TABLE IF EXISTS `orderdata`;
CREATE TABLE `orderdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `orderjson` longtext NOT NULL,
  `UserId` varchar(255) NOT NULL,
  `staffID` varchar(255) DEFAULT NULL,
  `staffarr` varchar(255) DEFAULT NULL,
  `state` varchar(255) NOT NULL,
  `oldtime` varchar(255) NOT NULL,
  `newtime` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orderdata
-- ----------------------------
INSERT INTO `orderdata` VALUES ('98', '空调移机', '{\"typeProblem\":{\"problem\":\"您的空调属于什么类型？-单选(必填)\",\"Answer\":\"嵌入式\"},\"onfloorProblem\":{\"problem\":\"您所住的楼层是？-单选(必填)\",\"Answer\":\"10层以上\"},\"tofloorProblem\":{\"problem\":\"您所迁往的楼层是？-单选(必填)\",\"Answer\":\"6-10层\"},\"ispersonalProblem\":{\"problem\":\"您的服务是针对个人/公司？-单选(必填)\",\"Answer\":\"个人\"},\"additionalProblem\":{\"problem\":\"您是否需要额外的服务？-单选(必填)\",\"Answer\":\"空调清洗\"},\"horsesProblem\":{\"problem\":\"您的空调匹数是？-单选(必填)\",\"Answer\":\"2P（约21-34㎡）\"},\"timeProblem\":{\"problem\":\"您理想的服务时间是？-单选(必填)\",\"Answer\":\"一周以内\"},\"addresetOutInput\":{\"problem\":\"你的出发地的地址是哪里\",\"Answer\":\"213\"},\"addreDestinationInput\":{\"problem\":\"你的目的地的地址是哪里\",\"Answer\":\"321\"},\"phoneProblem\":{\"problem\":\"我们如何联系到您？(必填)\",\"Answer\":\"18982221387\"}}', '31', '107', '107,', '完成', '1517308558.242', '1517310094.926');
INSERT INTO `orderdata` VALUES ('99', '公司搬家', '{\"isenterpriseProblem\":{\"problem\":\"您属于企业搬家还是工厂搬迁？-单选(必填)\",\"Answer\":\"个企业搬迁\"},\"additionalProblem\":{\"problem\":\"您是否需要额外的服务？-单选(必填)\",\"Answer\":\"大型设备搬运\"},\"isfragileProblem\":{\"problem\":\"您搬运的物件中是否含易碎物品？-单选(必填)\",\"Answer\":\"包含\"},\"onfloorProblem\":{\"problem\":\"您要搬出的地方有电梯吗？-单选(必填)\",\"Answer\":\"1-3层\"},\"tofloorProblem\":{\"problem\":\"您要搬去的地方有电梯吗？-单选(必填)\",\"Answer\":\"1-3层\"},\"timeProblem\":{\"problem\":\"您理想的服务时间是？-单选(必填)\",\"Answer\":\"一周以内\"},\"addresetOutInput\":{\"problem\":\"你的出发地的地址是哪里\",\"Answer\":\"dsfa\"},\"addreDestinationInput\":{\"problem\":\"你的目的地的地址是哪里\",\"Answer\":\"fsda\"},\"phoneProblem\":{\"problem\":\"我们如何联系到您？(必填)\",\"Answer\":\"18988221387\"}}', '31', '108', '108,', '完成', '1517309870.107', '1517310676.814');
INSERT INTO `orderdata` VALUES ('100', '空调移机', '{\"typeProblem\":{\"problem\":\"您的空调属于什么类型？-单选(必填)\",\"Answer\":\"立体式\"},\"onfloorProblem\":{\"problem\":\"您所住的楼层是？-单选(必填)\",\"Answer\":\"6-10层\"},\"tofloorProblem\":{\"problem\":\"您所迁往的楼层是？-单选(必填)\",\"Answer\":\"10层以上\"},\"ispersonalProblem\":{\"problem\":\"您的服务是针对个人/公司？-单选(必填)\",\"Answer\":\"公司\"},\"additionalProblem\":{\"problem\":\"您是否需要额外的服务？-单选(必填)\",\"Answer\":\"空调加液\"},\"horsesProblem\":{\"problem\":\"您的空调匹数是？-单选(必填)\",\"Answer\":\"2P（约21-34㎡）\"},\"timeProblem\":{\"problem\":\"您理想的服务时间是？-单选(必填)\",\"Answer\":\"一周以内\"},\"addresetOutInput\":{\"problem\":\"你的出发地的地址是哪里\",\"Answer\":\"fasd\"},\"addreDestinationInput\":{\"problem\":\"你的目的地的地址是哪里\",\"Answer\":\"fads\"},\"phoneProblem\":{\"problem\":\"我们如何联系到您？(必填)\",\"Answer\":\"18982221387\"}}', '31', '107', '107,', '完成', '1517310084.109', '1517310958.308');
INSERT INTO `orderdata` VALUES ('101', '空调移机', '{\"typeProblem\":{\"problem\":\"您的空调属于什么类型？-单选(必填)\",\"Answer\":\"嵌入式\"},\"onfloorProblem\":{\"problem\":\"您所住的楼层是？-单选(必填)\",\"Answer\":\"10层以上\"},\"tofloorProblem\":{\"problem\":\"您所迁往的楼层是？-单选(必填)\",\"Answer\":\"6-10层\"},\"ispersonalProblem\":{\"problem\":\"您的服务是针对个人/公司？-单选(必填)\",\"Answer\":\"公司\"},\"additionalProblem\":{\"problem\":\"您是否需要额外的服务？-单选(必填)\",\"Answer\":\"空调加液\"},\"horsesProblem\":{\"problem\":\"您的空调匹数是？-单选(必填)\",\"Answer\":\"2P（约21-34㎡）\"},\"timeProblem\":{\"problem\":\"您理想的服务时间是？-单选(必填)\",\"Answer\":\"三天以内\"},\"addresetOutInput\":{\"problem\":\"你的出发地的地址是哪里\",\"Answer\":\"123\"},\"addreDestinationInput\":{\"problem\":\"你的目的地的地址是哪里\",\"Answer\":\"123321\"},\"phoneProblem\":{\"problem\":\"我们如何联系到您？(必填)\",\"Answer\":\"15999999999\"}}', '32', '108', '108,', '完成', '1517310536.836', '1517310742.764');
INSERT INTO `orderdata` VALUES ('102', '货运服务', '{\"modelsProblem\":{\"problem\":\"您搬家需要的车型是？-单选(必填)\",\"Answer\":\"中型厢货\"},\"artificialProblem\":{\"problem\":\"您是否需要人工搬运？-单选(必填)\",\"Answer\":\"不，我不需要\"},\"timeProblem\":{\"problem\":\"您理想的搬家时间是？-单选(必填)\",\"Answer\":\"一周以内\"},\"addresetOutInput\":{\"problem\":\"你的出发地的地址是哪里\",\"Answer\":\"12313\"},\"addreDestinationInput\":{\"problem\":\"你的目的地的地址是哪里\",\"Answer\":\"123\"},\"phoneProblem\":{\"problem\":\"我们如何联系到您？(必填)\",\"Answer\":\"15999999991\"}}', '32', '108', '108,', '完成', '1517310776.611', '1517310843.492');
INSERT INTO `orderdata` VALUES ('103', '空调移机', '{\"typeProblem\":{\"problem\":\"您的空调属于什么类型？-单选(必填)\",\"Answer\":\"嵌入式\"},\"onfloorProblem\":{\"problem\":\"您所住的楼层是？-单选(必填)\",\"Answer\":\"10层以上\"},\"tofloorProblem\":{\"problem\":\"您所迁往的楼层是？-单选(必填)\",\"Answer\":\"10层以上\"},\"ispersonalProblem\":{\"problem\":\"您的服务是针对个人/公司？-单选(必填)\",\"Answer\":\"公司\"},\"additionalProblem\":{\"problem\":\"您是否需要额外的服务？-单选(必填)\",\"Answer\":\"空调加液\"},\"horsesProblem\":{\"problem\":\"您的空调匹数是？-单选(必填)\",\"Answer\":\"3P（约32-50㎡）\"},\"timeProblem\":{\"problem\":\"您理想的服务时间是？-单选(必填)\",\"Answer\":\"一周以内\"},\"addresetOutInput\":{\"problem\":\"你的出发地的地址是哪里\",\"Answer\":\"321\"},\"addreDestinationInput\":{\"problem\":\"你的目的地的地址是哪里\",\"Answer\":\"123\"},\"phoneProblem\":{\"problem\":\"我们如何联系到您？(必填)\",\"Answer\":\"15999999991\"}}', '32', '107', '108,107,', '完成', '1517310868.875', '1517311026.604');

-- ----------------------------
-- Table structure for stafftable
-- ----------------------------
DROP TABLE IF EXISTS `stafftable`;
CREATE TABLE `stafftable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `pasw` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stafftable
-- ----------------------------
INSERT INTO `stafftable` VALUES ('107', '100-1', '123456789', '张三', '18982221387', 'true');
INSERT INTO `stafftable` VALUES ('108', '100-2', '123456', '李四', '13882171015', 'true');

-- ----------------------------
-- Table structure for usertable
-- ----------------------------
DROP TABLE IF EXISTS `usertable`;
CREATE TABLE `usertable` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL,
  `pasw` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of usertable
-- ----------------------------
INSERT INTO `usertable` VALUES ('31', '2695007449', '222222', '廖先森', '18228060432');
INSERT INTO `usertable` VALUES ('32', 'zzqzzqzzq', '123123', 'zzq', '15999999999');
