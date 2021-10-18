-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: mate@r
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'calabaza','2021-10-09 20:25:32','2021-10-09 20:25:32'),(2,'madera','2021-10-09 20:25:32','2021-10-09 20:25:32'),(3,'cerámico','2021-10-09 20:25:32','2021-10-09 20:25:32'),(4,'térmico','2021-10-09 20:25:32','2021-10-09 20:25:32');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` decimal(8,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `categoryId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Mate Imperial.','Mate de calabaza Imperial importada desde Uruguay. Es trabajado artesanalmente mediante un proceso de recubrimiento en piel para luego ser sellado con una virola de alpaca cincelada.',750.00,'mate-imperial.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(2,'Mate  cerámico','Mate cerámico ultra fino, permite conservar la temperatura por  más tiempo',1300.00,'mate-ceramico.png',3,'2021-10-09 20:25:33','2021-10-13 18:53:14'),(3,'Mate  torpedo','Mate torpedo forrado de cuero natural',1500.00,'mate-torpedo.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(4,'Mate  galaxia','Mate camion forrado de cuero natural',1800.00,'mate-galaxia.png',3,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(5,'Darck ','Mate  forrado de cuero natural',800.00,'mate-darck.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(6,'Mate  fico','Mate fico ',1500.00,'mate-fico.png',2,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(7,'Mate  home','Mates de forma de calabaza',1300.00,'mate-home.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(8,'un re Mate','Mate camion forrado de cuero natural',2000.00,'mate-re.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(9,'Black','Mate black ',2200.00,'mate-black.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(10,'Mate  verde','Mate verde claro',2200.00,'mate-verde.png',4,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(11,'Mate  flor','Mate ceramico con detalle de estampados de flores',800.00,'mate-flor.png',3,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(12,'Mate  pastel','Mate  pastel con relieve',1500.00,'mate-pastel.png',4,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(13,'Mate  Argentino','Mate artesanal ',2500.00,'mate-argentino.png',3,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(14,'Mate  Arena','Mate metalico ',2800.00,'mate-arena.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(15,'Mate  Algarrobo','Mate de algarrobo natural',1000.00,'mate-algarrobo.png',2,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(16,'Mate  Tradicional','Mate estilo tradicional de campo',1300.00,'mate-tradicional.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(17,'Mate  Pampa','Mate de calabaa forrado',1000.00,'mate-pampa.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(18,'Mate  Mijo','Mate de madera de caldén natural',900.00,'mate-mijo.png',2,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(19,'Mate  Nórdico','Mate de madera natural, con un stampado de flores',500.00,'mate-nordico.png',2,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(20,'Mate  Frases','Mate de madera natural, con frases',1200.00,'mate-frases.png',2,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(21,'Mate Taragüi','Mate forrado',1200.00,'mate-taraguy.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(22,'Mate  primavera','Mate ceramico con detalle de estampados de flores',2500.00,'mate-primavera.png',3,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(23,'Mate  pastel 2.0','Mate  pastel con relieve',1355.00,'mate-pastel2.0.png',4,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(24,'Mate  Geométrico','Mate  geometrico con estampado de flores',1890.00,'mate-geometrico.png',2,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(25,'Mate  Corazón','Mate con un corazon',2000.00,'mate-corazon.png',3,'2021-10-09 20:25:33','2021-10-09 20:25:33');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rols` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'admin','2021-10-09 20:25:33','2021-10-09 20:25:33'),(2,'user','2021-10-09 20:25:33','2021-10-09 20:25:33');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20211008183648-create-category.js'),('20211008185730-create-product.js'),('20211008190344-create-rol.js'),('20211008190530-create-user.js'),('20211008191334-create-user-product.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_products`
--

DROP TABLE IF EXISTS `user_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int DEFAULT NULL,
  `productId` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `total` decimal(8,2) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userId` (`userId`),
  KEY `productId` (`productId`),
  CONSTRAINT `user_products_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  CONSTRAINT `user_products_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_products`
--

LOCK TABLES `user_products` WRITE;
/*!40000 ALTER TABLE `user_products` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `rolId` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `rolId` (`rolId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`rolId`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jonathan','Sanchez','masculino','johnnds@gmail.com','$2a$10$jet86NuhdBKk7YV2MNyuOerLw8hyw0SSw4mCaoOKQsG/W/A98gEtW','default-av.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(2,'Lucio','Martinez','masculino','lucio@gmail.com','$2a$10$M3yCCCJFnFqyLYsH4vzkeOTT1SQFz/.Ap2hW4fPntwJkiFGO7ENQu','default-av.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(3,'Marisol','Contreras','femenino','marisol-contreras-@gmail.com','$2a$10$e.FjcF.CJSestxKuFoTZsO3MXhPaPdqlhuSaRXXHc/nFOuTRUCI1C','default-av.png',1,'2021-10-09 20:25:33','2021-10-09 20:25:33'),(4,'Erik','Mena','masculino','erik@gmail.com','$2a$10$/EJe.vUdYUkhhsuBjX42UeM6HtRgfzKdC0Ao12Tzbpuk1svB547Dy','default-av.png',1,'2021-10-09 20:25:34','2021-10-09 20:25:34'),(5,'Cristian','Elias','masculino','cristian@gmail.com','$2a$10$NjnD.kyOZkVaLCItrcp3quemc5psH2bpDbQUj7GA.zlcj7gL8XEQa','default-av.png',1,'2021-10-09 20:25:34','2021-10-09 20:25:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-18 19:58:42
