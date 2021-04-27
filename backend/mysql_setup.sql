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
  KEY `contractor_FK` (`ContractorID`),
  CONSTRAINT `client_FK` FOREIGN KEY (`ClientID`) REFERENCES `Clients` (`clientID`),
  CONSTRAINT `contractor_FK` FOREIGN KEY (`ContractorID`) REFERENCES `Contractors` (`ID`)
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
-- Table structure for table `Clients`
--

DROP TABLE IF EXISTS `Clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Clients` (
  `clientID` int NOT NULL AUTO_INCREMENT,
  `clientName` varchar(100) NOT NULL,
  `clientUsername` varchar(100) NOT NULL,
  `clientPassword` varchar(100) NOT NULL,
  `locationID` int NOT NULL,
  PRIMARY KEY (`clientID`),
  KEY `Clients_FK` (`locationID`),
  CONSTRAINT `Clients_FK` FOREIGN KEY (`locationID`) REFERENCES `Locations` (`locationID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Clients`
--

LOCK TABLES `Clients` WRITE;
/*!40000 ALTER TABLE `Clients` DISABLE KEYS */;
INSERT INTO `Clients` VALUES (1,'Corp','corpo','password',1);
/*!40000 ALTER TABLE `Clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ContractorType`
--

DROP TABLE IF EXISTS `ContractorType`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ContractorType` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `type_description` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ContractorType`
--

LOCK TABLES `ContractorType` WRITE;
/*!40000 ALTER TABLE `ContractorType` DISABLE KEYS */;
INSERT INTO `ContractorType` VALUES (1,'Plumber'),(2,'Stonemason'),(3,'Carpenter'),(4,'Painter'),(5,'Roofer');
/*!40000 ALTER TABLE `ContractorType` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Contractors`
--

DROP TABLE IF EXISTS `Contractors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Contractors` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `contractorName` varchar(255) DEFAULT NULL,
  `isCompany` tinyint(1) DEFAULT '0',
  `LocationID` int NOT NULL,
  `ContractorType` int NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `Contractors_FK` (`LocationID`),
  CONSTRAINT `Contractors_FK` FOREIGN KEY (`LocationID`) REFERENCES `Locations` (`locationID`),
  CONSTRAINT `type` FOREIGN KEY (`ID`) REFERENCES `ContractorType` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contractors`
--

LOCK TABLES `Contractors` WRITE;
/*!40000 ALTER TABLE `Contractors` DISABLE KEYS */;
INSERT INTO `Contractors` VALUES (1,'CarpentryCorp',1,1,3);
/*!40000 ALTER TABLE `Contractors` ENABLE KEYS */;
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
-- Table structure for table `Locations`
--

DROP TABLE IF EXISTS `Locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Locations` (
  `locationID` int NOT NULL AUTO_INCREMENT,
  `locationDescription` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`locationID`)
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
-- Table structure for table `ProjectRequests`
--

DROP TABLE IF EXISTS `ProjectRequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ProjectRequests` (
  `ProjectID` int NOT NULL,
  `ContractorID` int DEFAULT NULL,
  `ClientID` int DEFAULT NULL,
  `Status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ProjectID`),
  KEY `ProjectRequests_FK` (`ClientID`),
  CONSTRAINT `ProjectRequests_FK` FOREIGN KEY (`ClientID`) REFERENCES `Clients` (`clientID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ProjectRequests`
--

LOCK TABLES `ProjectRequests` WRITE;
/*!40000 ALTER TABLE `ProjectRequests` DISABLE KEYS */;
INSERT INTO `ProjectRequests` VALUES (1,1,1,'Beginning construction');
/*!40000 ALTER TABLE `ProjectRequests` ENABLE KEYS */;
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
  CONSTRAINT `Reviews_FK` FOREIGN KEY (`ClientID`) REFERENCES `Clients` (`clientID`),
  CONSTRAINT `Reviews_FK_1` FOREIGN KEY (`ContractorID`) REFERENCES `Contractors` (`ID`)
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
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `userID` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) NOT NULL,
  `userEmail` varchar(100) DEFAULT NULL,
  `userPassword` varchar(100) NOT NULL,
  PRIMARY KEY (`userID`)
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
  `WorkerID` int NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) DEFAULT NULL,
  `LocationID` int DEFAULT NULL,
  `ProjectID` int DEFAULT NULL,
  `isBusyorFree` tinyint(1) DEFAULT NULL,
  `JobType` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`WorkerID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Workers`
--

LOCK TABLES `Workers` WRITE;
/*!40000 ALTER TABLE `Workers` DISABLE KEYS */;
INSERT INTO `Workers` VALUES (1,'John Doe',1,1,0,'Carpenter');
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

-- Dump completed on 2021-04-08 17:35:59
