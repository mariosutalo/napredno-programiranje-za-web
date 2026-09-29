-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: shop
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_item`
--

DROP TABLE IF EXISTS `cart_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `quantity` decimal(10,2) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `session_uuid` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `session_uuid` (`session_uuid`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `cart_item_ibfk_1` FOREIGN KEY (`session_uuid`) REFERENCES `session` (`uuid`),
  CONSTRAINT `cart_item_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_item`
--

LOCK TABLES `cart_item` WRITE;
/*!40000 ALTER TABLE `cart_item` DISABLE KEYS */;
INSERT INTO `cart_item` VALUES (1,2.00,3,'91bbb2ed-8f84-4ce6-aa16-dd8b6bf72502'),(2,2.00,3,'91bbb2ed-8f84-4ce6-aa16-dd8b6bf72502');
/*!40000 ALTER TABLE `cart_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(400) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (2,'Graphics cards'),(3,'Keyboard'),(1,'Monitors');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_item`
--

DROP TABLE IF EXISTS `order_item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_item` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `quantity` decimal(6,2) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `order_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `order_id` (`order_id`),
  CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`order_id`) REFERENCES `user_order` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_item`
--

LOCK TABLES `order_item` WRITE;
/*!40000 ALTER TABLE `order_item` DISABLE KEYS */;
INSERT INTO `order_item` VALUES (1,2,2.00,329.99,1),(2,4,1.00,799.99,1);
/*!40000 ALTER TABLE `order_item` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(400) NOT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `stock` int DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `image_path` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Phillips bt24h ips',90.00,5,1,NULL,'/assets/no image placeholder.png'),(2,'NVIDIA GeForce RTX 4060',329.99,25,2,'Mid-range GPU ideal for 1080p and 1440p gaming with DLSS 3 support.','/assets/no image placeholder.png'),(3,'NVIDIA GeForce RTX 4070',599.99,18,2,'Efficient GPU for high refresh-rate 1440p gaming with great ray tracing.','/assets/no image placeholder.png'),(4,'NVIDIA GeForce RTX 4070 Ti',799.99,10,2,'High-end GPU designed for demanding 1440p and entry-level 4K gaming.','/assets/no image placeholder.png'),(5,'NVIDIA GeForce RTX 4080 Super',999.99,7,2,'Premium 4K gaming GPU with improved ray tracing performance.','/assets/no image placeholder.png'),(6,'NVIDIA GeForce RTX 4090',1499.99,5,2,'Flagship GPU for 4K and AI workloads, best performance currently available.','/assets/no image placeholder.png'),(7,'AMD Radeon RX 7800 XT',499.99,20,2,'Excellent 1440p gaming GPU with strong rasterization performance.','/assets/no image placeholder.png'),(8,'AMD Radeon RX 7700 XT',449.99,22,2,'Affordable 1440p graphics card offering good value in modern titles.','/assets/no image placeholder.png'),(9,'AMD Radeon RX 7900 XTX',999.99,6,2,'High-end 4K gaming GPU with massive VRAM and strong rasterization.','/assets/no image placeholder.png'),(10,'Intel Arc A770',329.99,15,2,'New entry in GPU market with solid DX12 performance and modern AV1 encoding.','/assets/no image placeholder.png'),(11,'Intel Arc A750',279.99,17,2,'Budget-friendly GPU for 1080p and light 1440p gaming with AV1 support.','/assets/no image placeholder.png'),(12,'Logitech G Pro Mechanical',149.99,30,3,'Compact mechanical keyboard designed for esports with hot-swappable switches.','/assets/no image placeholder.png'),(13,'Keychron K2 V2 Wireless',99.99,40,3,'Wireless 75% keyboard with hot-swap support and Mac/Windows compatibility.','/assets/no image placeholder.png'),(14,'Corsair K70 RGB MK.2',169.99,25,3,'Full-size RGB gaming keyboard with Cherry MX mechanical switches.','/assets/no image placeholder.png'),(15,'Razer Huntsman Elite',199.99,12,3,'Optical switch keyboard offering fast actuation and customizable wrist rest.','/assets/no image placeholder.png'),(16,'SteelSeries Apex Pro TKL',189.99,14,3,'Adjustable actuation keys with OLED display, ideal for competitive gaming.','/assets/no image placeholder.png'),(17,'HyperX Alloy Origins',119.99,33,3,'Durable TKL keyboard with solid aluminum frame and HyperX switches.','/assets/no image placeholder.png'),(18,'Ducky One 3 Mini',129.99,19,3,'60% mechanical keyboard praised for build quality and PBT keycaps.','/assets/no image placeholder.png'),(19,'Glorious GMMK Compact',109.99,21,3,'Customizable hot-swappable keyboard for enthusiasts and modders.','/assets/no image placeholder.png'),(20,'Akko 3068B Plus',89.99,26,3,'70% keyboard with great acoustics and wireless tri-mode connectivity.','/assets/no image placeholder.png'),(21,'Varmilo VA87M',159.99,13,3,'Premium TKL keyboard with dye-sub PBT keycaps and excellent typing feel.','/assets/no image placeholder.png'),(22,'Dell UltraSharp U2723QE',699.99,11,1,'27-inch 4K IPS monitor with USB-C hub and excellent color accuracy.','/assets/no image placeholder.png'),(23,'LG UltraGear 27GP950',899.99,8,1,'4K 144Hz gaming monitor with HDR support and fast response time.','/assets/no image placeholder.png'),(24,'Samsung Odyssey G9',1499.99,4,1,'49-inch ultrawide 240Hz gaming monitor with immersive curved panel.','/assets/no image placeholder.png'),(25,'ASUS ProArt PA279CV',499.99,16,1,'Creator-focused 4K monitor with professional calibration and USB-C.','/assets/no image placeholder.png'),(26,'AOC 24G2 144Hz',199.99,35,1,'Affordable 1080p 144Hz monitor popular for esports setups.','/assets/no image placeholder.png'),(27,'BenQ PD2700U',499.99,10,1,'Professional 4K monitor suited for design and content creation.','/assets/no image placeholder.png'),(28,'MSI Optix MAG274QRF-QD',449.99,14,1,'1440p 165Hz IPS gaming monitor with quantum dot color enhancement.','/assets/no image placeholder.png'),(29,'ViewSonic XG2431',279.99,22,1,'1080p 240Hz esports monitor certified for excellent motion clarity.','/assets/no image placeholder.png'),(30,'Gigabyte M27Q',339.99,18,1,'1440p 170Hz monitor with integrated KVM switch for multiple devices.','/assets/no image placeholder.png'),(31,'Huawei MateView 28.2',699.99,9,1,'High-resolution 3:2 productivity monitor with premium minimalist design.','/assets/no image placeholder.png');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `session`
--

DROP TABLE IF EXISTS `session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `session` (
  `uuid` varchar(36) NOT NULL,
  PRIMARY KEY (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `session`
--

LOCK TABLES `session` WRITE;
/*!40000 ALTER TABLE `session` DISABLE KEYS */;
INSERT INTO `session` VALUES ('91bbb2ed-8f84-4ce6-aa16-dd8b6bf72502');
/*!40000 ALTER TABLE `session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_order`
--

DROP TABLE IF EXISTS `user_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(1000) DEFAULT NULL,
  `street` varchar(1000) DEFAULT NULL,
  `zip_code` varchar(100) DEFAULT NULL,
  `city` varchar(300) DEFAULT NULL,
  `phone` varchar(100) DEFAULT NULL,
  `session_guid` varchar(100) DEFAULT NULL,
  `status` enum('pending','processing','completed','canceled') DEFAULT 'pending',
  `payment_type` enum('card','pay_on_delivery') DEFAULT NULL,
  `order_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_order`
--

LOCK TABLES `user_order` WRITE;
/*!40000 ALTER TABLE `user_order` DISABLE KEYS */;
INSERT INTO `user_order` VALUES (1,'Mario Šutalo','Opuzenske bojne 5','20355','Opuzen','+38763346534','91bbb2ed-8f84-4ce6-aa16-dd8b6bf72502','pending','pay_on_delivery','2026-09-22 13:00:49');
/*!40000 ALTER TABLE `user_order` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-09-29 12:07:41
