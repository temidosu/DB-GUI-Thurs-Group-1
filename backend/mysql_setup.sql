-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: db-gui-thurs-1.caayg0tmsczo.us-east-2.rds.amazonaws.com    Database: db
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `AuctionListings`
--

DROP TABLE IF EXISTS `AuctionListings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AuctionListings` (
  `AuctionID` int NOT NULL AUTO_INCREMENT,
  `ContractorID` int DEFAULT NULL,
  `ClientID` int DEFAULT NULL,
  `ProductName` varchar(100) DEFAULT NULL,
  `CurrentBid` double DEFAULT NULL,
  `Description` varchar(100) DEFAULT NULL,
  `TimeRemaining` timestamp NULL DEFAULT NULL,
  `IsSettled` tinyint(1) DEFAULT NULL,
  `ProductImage` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`AuctionID`),
  KEY `client_FK` (`ClientID`),
  KEY `contractor_FK` (`ContractorID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AuctionListings`
--

LOCK TABLES `AuctionListings` WRITE;
/*!40000 ALTER TABLE `AuctionListings` DISABLE KEYS */;
/*!40000 ALTER TABLE `AuctionListings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Client`
--

DROP TABLE IF EXISTS `Client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Client` (
  `clientID` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`clientID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Client`
--

LOCK TABLES `Client` WRITE;
/*!40000 ALTER TABLE `Client` DISABLE KEYS */;
INSERT INTO `Client` VALUES (1);
/*!40000 ALTER TABLE `Client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contractor`
--

DROP TABLE IF EXISTS `Contractor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Contractor` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contractor`
--

LOCK TABLES `Contractor` WRITE;
/*!40000 ALTER TABLE `Contractor` DISABLE KEYS */;
INSERT INTO `Contractor` VALUES (1);
/*!40000 ALTER TABLE `Contractor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CurrentJobs`
--

DROP TABLE IF EXISTS `CurrentJobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CurrentJobs` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `JobDescription` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CurrentJobs`
--

LOCK TABLES `CurrentJobs` WRITE;
/*!40000 ALTER TABLE `CurrentJobs` DISABLE KEYS */;
INSERT INTO `CurrentJobs` VALUES (1,'Make dummy values');
/*!40000 ALTER TABLE `CurrentJobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `JobType`
--

DROP TABLE IF EXISTS `JobType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `JobType` (
  `job_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`job_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `JobType`
--

LOCK TABLES `JobType` WRITE;
/*!40000 ALTER TABLE `JobType` DISABLE KEYS */;
/*!40000 ALTER TABLE `JobType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Locations`
--

DROP TABLE IF EXISTS `Locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Locations` (
  `location_id` int NOT NULL AUTO_INCREMENT,
  `locationDescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Locations`
--

LOCK TABLES `Locations` WRITE;
/*!40000 ALTER TABLE `Locations` DISABLE KEYS */;
INSERT INTO `Locations` VALUES (1,'San Francisco');
/*!40000 ALTER TABLE `Locations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Project_Requests`
--

DROP TABLE IF EXISTS `Project_Requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Project_Requests` (
  `ProjectID` int NOT NULL,
  `ContractorID` int DEFAULT NULL,
  `ClientID` int DEFAULT NULL,
  `Status` varchar(100) DEFAULT NULL,
  `ProjectName` varchar(100) DEFAULT NULL,
  `Description` varchar(500) DEFAULT NULL,
  `Deadline` date DEFAULT NULL,
  PRIMARY KEY (`ProjectID`),
  KEY `ProjectRequests_FK` (`ClientID`),
  KEY `Project_Requests_FK` (`ContractorID`),
  CONSTRAINT `Project_Requests_FK` FOREIGN KEY (`ContractorID`) REFERENCES `Contractor` (`user_id`) ON DELETE SET NULL,
  CONSTRAINT `ProjectRequests_FK` FOREIGN KEY (`ClientID`) REFERENCES `Client` (`clientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Project_Requests`
--

LOCK TABLES `Project_Requests` WRITE;
/*!40000 ALTER TABLE `Project_Requests` DISABLE KEYS */;
INSERT INTO `Project_Requests` VALUES (1,1,1,'Beginning construction',NULL,NULL,NULL);
/*!40000 ALTER TABLE `Project_Requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reviews`
--

DROP TABLE IF EXISTS `Reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reviews` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `ClientID` int NOT NULL,
  `ContractorID` int NOT NULL,
  `ReviewText` varchar(100) DEFAULT NULL,
  `ReviewScore` varchar(100) DEFAULT NULL,
  `Timestamp` timestamp NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Reviews_FK` (`ClientID`),
  KEY `Reviews_FK_1` (`ContractorID`),
  CONSTRAINT `Reviews_FK` FOREIGN KEY (`ClientID`) REFERENCES `Client` (`clientID`),
  CONSTRAINT `Reviews_FK_1` FOREIGN KEY (`ContractorID`) REFERENCES `Contractor` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reviews`
--

LOCK TABLES `Reviews` WRITE;
/*!40000 ALTER TABLE `Reviews` DISABLE KEYS */;
INSERT INTO `Reviews` VALUES (1,1,1,'good work','95/100','2021-04-03 01:04:05');
/*!40000 ALTER TABLE `Reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Roles`
--

DROP TABLE IF EXISTS `Roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Roles` (
  `role_id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(150) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Roles`
--

LOCK TABLES `Roles` WRITE;
/*!40000 ALTER TABLE `Roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `Roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `roleID` int DEFAULT NULL,
  `userName` varchar(100) NOT NULL,
  `userPassword` varchar(100) NOT NULL,
  `userEmail` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `locationID` int DEFAULT NULL,
  PRIMARY KEY (`userID`),
  KEY `Users_FK` (`roleID`),
  CONSTRAINT `Users_FK` FOREIGN KEY (`roleID`) REFERENCES `Roles` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Workers`
--

DROP TABLE IF EXISTS `Workers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Workers` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `job_id` int NOT NULL,
  `part_or_full_time` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Workers`
--

LOCK TABLES `Workers` WRITE;
/*!40000 ALTER TABLE `Workers` DISABLE KEYS */;
/*!40000 ALTER TABLE `Workers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-14 17:22:13
