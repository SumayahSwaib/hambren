-- MySQL dump 10.13  Distrib 8.0.30, for macos11.6 (x86_64)
--
-- Host: localhost    Database: kings
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `academic_backgrounds`
--

DROP TABLE IF EXISTS `academic_backgrounds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `academic_backgrounds` (
  `id` int NOT NULL AUTO_INCREMENT,
  `grades` text,
  `level` smallint DEFAULT '1',
  `user` int NOT NULL,
  `school` int NOT NULL,
  `date_added` date NOT NULL,
  `_timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` smallint NOT NULL DEFAULT '0',
  `former_school` char(100) DEFAULT NULL,
  `index_number` char(100) DEFAULT NULL,
  `year_of_sitting` year NOT NULL,
  `final_result` char(100) DEFAULT NULL,
  `result_type` smallint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `academic_backgrounds`
--

LOCK TABLES `academic_backgrounds` WRITE;
/*!40000 ALTER TABLE `academic_backgrounds` DISABLE KEYS */;
/*!40000 ALTER TABLE `academic_backgrounds` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` int NOT NULL,
  `address` text,
  `school` int NOT NULL,
  `added_by` int NOT NULL,
  `date_added` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bio`
--

DROP TABLE IF EXISTS `bio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bio` (
  `religion` char(30) DEFAULT NULL,
  `names` char(120) NOT NULL,
  `gender` char(1) NOT NULL DEFAULT 'M',
  `dob` char(21) DEFAULT NULL,
  `year_joined` int NOT NULL,
  `user` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `photo` char(100) NOT NULL DEFAULT (_utf8mb4'blank.png'),
  `school` int NOT NULL,
  `is_disabled` smallint NOT NULL DEFAULT (0),
  PRIMARY KEY (`id`),
  UNIQUE KEY `user` (`user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bio`
--

LOCK TABLES `bio` WRITE;
/*!40000 ALTER TABLE `bio` DISABLE KEYS */;
INSERT INTO `bio` VALUES (NULL,'Ashiraff Tumusiime','M',NULL,2022,1,1,'blank.png',1,0);
/*!40000 ALTER TABLE `bio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `_class` char(30) NOT NULL,
  `added_by` int NOT NULL,
  `status` smallint NOT NULL DEFAULT '1',
  `school` int NOT NULL,
  `level` int DEFAULT NULL,
  `date_added` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'S.1',1,1,1,1,'2022-12-30'),(2,'S.2',1,1,1,1,'2022-12-30'),(3,'S.3',1,1,1,1,'2022-12-30'),(4,'S.4',1,1,1,1,'2022-12-30');
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `houses`
--

DROP TABLE IF EXISTS `houses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `houses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `school` int NOT NULL,
  `added_by` int NOT NULL,
  `status` smallint NOT NULL,
  `house` char(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `houses`
--

LOCK TABLES `houses` WRITE;
/*!40000 ALTER TABLE `houses` DISABLE KEYS */;
INSERT INTO `houses` VALUES (1,1,1,1,'Kyoga'),(2,1,1,1,'Mwanga'),(3,1,1,1,'Ashiraff');
/*!40000 ALTER TABLE `houses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parents`
--

DROP TABLE IF EXISTS `parents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `parents` (
  `id` int NOT NULL AUTO_INCREMENT,
  `parent` char(200) NOT NULL,
  `telephone` char(100) DEFAULT NULL,
  `address` char(200) DEFAULT NULL,
  `nin` char(100) DEFAULT NULL,
  `user` int NOT NULL,
  `parent_type` smallint NOT NULL DEFAULT '1' COMMENT '1 is for father and 2 is for mother',
  `is_alive` smallint NOT NULL DEFAULT '1',
  `school` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parents`
--

LOCK TABLES `parents` WRITE;
/*!40000 ALTER TABLE `parents` DISABLE KEYS */;
/*!40000 ALTER TABLE `parents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schools`
--

DROP TABLE IF EXISTS `schools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schools` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` char(200) NOT NULL,
  `school` char(225) NOT NULL,
  `telephone` char(100) DEFAULT NULL,
  `email` char(100) DEFAULT NULL,
  `website` char(100) DEFAULT NULL,
  `date_added` date DEFAULT NULL,
  `logo` char(200) DEFAULT 'blank.png',
  `status` smallint NOT NULL DEFAULT '1',
  `deleted` smallint NOT NULL DEFAULT '1',
  `location` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schools`
--

LOCK TABLES `schools` WRITE;
/*!40000 ALTER TABLE `schools` DISABLE KEYS */;
INSERT INTO `schools` VALUES (1,'mkings','Mukono Kings School','0700000000','mkings@mkings.com','mkings.com','2022-12-24','blank.png',1,1,'Mukono along jinja road'),(3,'Seeta High','seeta','0700000000','mkings@mkings.com','mkings.com','2022-12-24','blank.png',1,1,'Mukono along jinja road');
/*!40000 ALTER TABLE `schools` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `streams`
--

DROP TABLE IF EXISTS `streams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `streams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `stream` char(100) NOT NULL,
  `school` int NOT NULL,
  `added_by` int NOT NULL,
  `status` smallint NOT NULL DEFAULT (1),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `streams`
--

LOCK TABLES `streams` WRITE;
/*!40000 ALTER TABLE `streams` DISABLE KEYS */;
INSERT INTO `streams` VALUES (1,'East',1,1,1),(2,'West',1,1,1),(3,'North',1,1,1),(4,'Blue',1,1,1);
/*!40000 ALTER TABLE `streams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_class_allocation`
--

DROP TABLE IF EXISTS `student_class_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_class_allocation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `school` int NOT NULL,
  `student` bigint NOT NULL,
  `added_by` int NOT NULL,
  `class` int NOT NULL,
  `stream` int NOT NULL,
  `_term_year` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_class_allocation`
--

LOCK TABLES `student_class_allocation` WRITE;
/*!40000 ALTER TABLE `student_class_allocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_class_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_house_allocation`
--

DROP TABLE IF EXISTS `student_house_allocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_house_allocation` (
  `id` int NOT NULL,
  `student` bigint NOT NULL,
  `school` int NOT NULL,
  `house` int NOT NULL,
  `added_by` int NOT NULL,
  `date_added` date NOT NULL,
  `deleted` smallint NOT NULL DEFAULT '0',
  `_term_year` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_house_allocation`
--

LOCK TABLES `student_house_allocation` WRITE;
/*!40000 ALTER TABLE `student_house_allocation` DISABLE KEYS */;
/*!40000 ALTER TABLE `student_house_allocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students_id`
--

DROP TABLE IF EXISTS `students_id`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students_id` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `student_no` char(200) DEFAULT NULL,
  `reg_no` char(200) DEFAULT NULL,
  `date_added` date DEFAULT NULL,
  `school` bigint NOT NULL,
  `user` bigint NOT NULL,
  `_left` smallint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students_id`
--

LOCK TABLES `students_id` WRITE;
/*!40000 ALTER TABLE `students_id` DISABLE KEYS */;
/*!40000 ALTER TABLE `students_id` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `terms_of_study`
--

DROP TABLE IF EXISTS `terms_of_study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `terms_of_study` (
  `id` int NOT NULL AUTO_INCREMENT,
  `term` smallint NOT NULL,
  `year` smallint NOT NULL,
  `school` bigint NOT NULL,
  `added_by` int DEFAULT NULL,
  `deleted` smallint NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `terms_of_study`
--

LOCK TABLES `terms_of_study` WRITE;
/*!40000 ALTER TABLE `terms_of_study` DISABLE KEYS */;
INSERT INTO `terms_of_study` VALUES (1,3,2022,1,1,0);
/*!40000 ALTER TABLE `terms_of_study` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` char(128) NOT NULL,
  `date_added` date NOT NULL,
  `role` smallint NOT NULL DEFAULT '1',
  `state` smallint NOT NULL DEFAULT '1',
  `email` char(128) DEFAULT NULL,
  `username` char(128) NOT NULL,
  `school` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'$2y$10$OIy1GrwTZBTBC1CQaBZXtueHqyDaRr8CkpvbdXxtm4Nma4P.PcZW2','2022-12-20',1,1,'hello@example.com','admin',1);
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

-- Dump completed on 2022-12-31 16:07:13
