-- MariaDB dump 10.19  Distrib 10.5.16-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: db_cloudairline
-- ------------------------------------------------------
-- Server version	10.5.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `customer_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `gender` bit(1) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (1,'20 Atwood Crossing','ligoe0@house.gov','Hoàng Long','','0918562981 '),(2,'178 Clarendon','bbenninck1@hibu.com','Nam','','0841678331 '),(3,'6 Corry Lane','wcrocken2@cpanel.net','Dung Hà','\0','0313403678 '),(4,'6 Leroy Park','dladdle3@wp.com','Hoàng Tuấn','','0761699299'),(5,'80 Anderson Lane','mseeds4@creativecommons.org','Việt Trung','','0165805514 '),(6,'24008 Old Shore Pass','iswinnard5@flavors.me','Văn Thanh','','0851546838 '),(7,'910 Stang Road','larchard6@devhub.com','Thanh Phương','\0','0355217450'),(8,'28266 Colorado Court','mpershouse7@bloglovin.com','Việt Đức','','0179834343'),(9,'80 Shasta Hill','mmosdell8@51.la','Hồng Hưng','','0103936444'),(10,'709 Kropf Avenue','gportwaine9@skype.com','Việt Dũng','','0826853666'),(11,'83106 Muir Pass','rroderighia@myspace.com','Thu Trà','\0','0788817371'),(12,'77233 Namekagon Way','gschadeb@ucoz.ru','Thu Hương','\0','0829053898'),(13,'62061 Steensland Terrace','skibardc@qq.com','Đức Lâm','','0681290513'),(14,'980 Shasta Avenue','nableyd@netvibes.com','Việt Thắng','','0654869290'),(15,'2 Victoria Pass','hmcquartere@dot.gov','Quang Mãi','','0697962327'),(16,'9416 Ramsey Lane','esainzf@wix.com','Hà Chi','\0','0375301773'),(17,'9 Darwin Lane','jrosenfeldg@nps.gov','Quốc Trung','','0954001654'),(18,'9 Doe Crossing Terrace','lkeyteh@dailymail.co.uk','Hải Nam','','0371957366'),(19,'133 Nevada Pass','cadamieci@yellowbook.com','Phương Thanh','\0','0602030447'),(20,'91 Reindahl Alley','lzarfaij@slideshare.net','Khởi My','\0','0741113560');
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer_lst_ticket_customer`
--

DROP TABLE IF EXISTS `customer_lst_ticket_customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer_lst_ticket_customer` (
  `customer_customer_id` bigint(20) NOT NULL,
  `lst_ticket_customer_ticket_id` bigint(20) NOT NULL,
  PRIMARY KEY (`customer_customer_id`,`lst_ticket_customer_ticket_id`),
  UNIQUE KEY `UK_143yaif7wi6sdv0i6os1tkn2k` (`lst_ticket_customer_ticket_id`),
  CONSTRAINT `FK1mh8f6cxplogwvxkvf4sg6tda` FOREIGN KEY (`customer_customer_id`) REFERENCES `customer` (`customer_id`),
  CONSTRAINT `FKha8fqwtxgq0kat2cxnfctk06f` FOREIGN KEY (`lst_ticket_customer_ticket_id`) REFERENCES `ticket` (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer_lst_ticket_customer`
--

LOCK TABLES `customer_lst_ticket_customer` WRITE;
/*!40000 ALTER TABLE `customer_lst_ticket_customer` DISABLE KEYS */;
/*!40000 ALTER TABLE `customer_lst_ticket_customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight`
--

DROP TABLE IF EXISTS `flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flight` (
  `flight_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `plane_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`flight_id`),
  KEY `FK7p9fvp6d7uh9cgn47uet8a8nb` (`plane_id`),
  CONSTRAINT `FK7p9fvp6d7uh9cgn47uet8a8nb` FOREIGN KEY (`plane_id`) REFERENCES `plane` (`plane_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight`
--

LOCK TABLES `flight` WRITE;
/*!40000 ALTER TABLE `flight` DISABLE KEYS */;
INSERT INTO `flight` VALUES (1,'08:00:00','10:00:00',1),(2,'23:30:00','01:30:00',2),(3,'08:00:00','10:00:00',3),(4,'21:30:00','11:30:00',4),(5,'21:30:00','11:30:00',5),(6,'23:30:00','01:30:00',6),(7,'13:30:00','15:30:00',7),(8,'23:30:00','01:30:00',8),(9,'23:30:00','01:30:00',9),(10,'08:00:00','10:00:00',10),(11,'13:30:00','15:30:00',11),(12,'23:30:00','01:30:00',12),(13,'23:30:00','01:30:00',13),(14,'13:30:00','15:30:00',14),(15,'21:30:00','11:30:00',15),(16,'13:30:00','15:30:00',16),(17,'23:30:00','01:30:00',17),(18,'21:30:00','11:30:00',18),(19,'13:30:00','15:30:00',19),(20,'23:30:00','01:30:00',20);
/*!40000 ALTER TABLE `flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `flight_lst_ticket_flight`
--

DROP TABLE IF EXISTS `flight_lst_ticket_flight`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `flight_lst_ticket_flight` (
  `flight_flight_id` bigint(20) NOT NULL,
  `lst_ticket_flight_ticket_id` bigint(20) NOT NULL,
  PRIMARY KEY (`flight_flight_id`,`lst_ticket_flight_ticket_id`),
  UNIQUE KEY `UK_bmv57t9fcxt4578qyq6cnntvj` (`lst_ticket_flight_ticket_id`),
  CONSTRAINT `FKnq33je6apk13c7x8mfvdmtxm1` FOREIGN KEY (`lst_ticket_flight_ticket_id`) REFERENCES `ticket` (`ticket_id`),
  CONSTRAINT `FKsuodkck6tkut3jrmnxhjqbh39` FOREIGN KEY (`flight_flight_id`) REFERENCES `flight` (`flight_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `flight_lst_ticket_flight`
--

LOCK TABLES `flight_lst_ticket_flight` WRITE;
/*!40000 ALTER TABLE `flight_lst_ticket_flight` DISABLE KEYS */;
/*!40000 ALTER TABLE `flight_lst_ticket_flight` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place`
--

DROP TABLE IF EXISTS `place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `place` (
  `place_id` varchar(255) NOT NULL,
  `airport_name` varchar(255) DEFAULT NULL,
  `place_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`place_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place`
--

LOCK TABLES `place` WRITE;
/*!40000 ALTER TABLE `place` DISABLE KEYS */;
INSERT INTO `place` VALUES ('BMV','Sân bay Buôn Ma Thuột','Đắk Lắk'),('CAH','Sân bay Cà Mau','Cà Mau'),('DIN','Sân bay Điện Biên Phủ','Điện Biên'),('DLI','Sân bay Liên Khương - Đà Lạt','Lâm Đồng'),('HAN',' Sân bay Nội Bài','Hà Nội'),('PXU','Sân bay Pleiku - Gia Lai','Gia Lai'),('SGN',' Sân bay Tân Sơn Nhất','Thành phố Hồ Chí Minh'),('SQH','Sân bay Nà Sản','Sơn La'),('TBB','Sân bay Tuy Hòa - Phú Yên','Phú Yên'),('THD',' Sân bay Thọ Xuân - Thanh Hóa','Thanh Hóa'),('UIH','Sân bay Phú Cát - Bình Định','Bình Định'),('VCL','Sân bay Chu Lai - Quảng Nam','Quảng Nam'),('VCS','Sân bay Côn Đảo','Bà Rịa - Vũng Tàu'),('VDH','Sân bay Đồng Hới - Quảng Bình','Quảng Bình'),('VKG','Sân bay Rạch Giá - Kiên Giang','Kiên Giang');
/*!40000 ALTER TABLE `place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `place_lst_ticket_place`
--

DROP TABLE IF EXISTS `place_lst_ticket_place`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `place_lst_ticket_place` (
  `place_place_id` varchar(255) NOT NULL,
  `lst_ticket_place_ticket_id` bigint(20) NOT NULL,
  PRIMARY KEY (`place_place_id`,`lst_ticket_place_ticket_id`),
  UNIQUE KEY `UK_2vh0esitky7i0o86mj1r7r8gn` (`lst_ticket_place_ticket_id`),
  CONSTRAINT `FK9730t4v7n8dh6pwrd4wm3v88i` FOREIGN KEY (`place_place_id`) REFERENCES `place` (`place_id`),
  CONSTRAINT `FKeow368vhxxehjq5hwoxgpm6uc` FOREIGN KEY (`lst_ticket_place_ticket_id`) REFERENCES `ticket` (`ticket_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `place_lst_ticket_place`
--

LOCK TABLES `place_lst_ticket_place` WRITE;
/*!40000 ALTER TABLE `place_lst_ticket_place` DISABLE KEYS */;
/*!40000 ALTER TABLE `place_lst_ticket_place` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plane`
--

DROP TABLE IF EXISTS `plane`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plane` (
  `plane_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `plane_brand` varchar(255) DEFAULT NULL,
  `plane_code` varchar(255) DEFAULT NULL,
  `total_seat` int(11) DEFAULT NULL,
  PRIMARY KEY (`plane_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plane`
--

LOCK TABLES `plane` WRITE;
/*!40000 ALTER TABLE `plane` DISABLE KEYS */;
INSERT INTO `plane` VALUES (1,'Boeing','772022',300),(2,'Boeing','3122',200),(3,'Boeing','5312',300),(4,'Boeing','1162',200),(5,'Boeing','4322',500),(6,'Airbus','7130',100),(7,'Airbus','1112',120),(8,'Airbus','1422',125),(9,'Airbus','1132',320),(10,'Airbus','8321',120),(11,'Antonov','9020',300),(12,'Antonov','4302',300),(13,'Antonov','2102',200),(14,'Antonov','7262',100),(15,'Antonov','1016',200),(16,'Antonov','1132',300),(17,'Antonov','4212',250),(18,'Antonov','8222',200),(19,'Antonov','0721',100),(20,'Antonov','7867',100);
/*!40000 ALTER TABLE `plane` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plane_lst_flights_plane`
--

DROP TABLE IF EXISTS `plane_lst_flights_plane`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `plane_lst_flights_plane` (
  `plane_plane_id` bigint(20) NOT NULL,
  `lst_flights_plane_flight_id` bigint(20) NOT NULL,
  PRIMARY KEY (`plane_plane_id`,`lst_flights_plane_flight_id`),
  UNIQUE KEY `UK_sjm5t1rkeej17rbupigjb96i1` (`lst_flights_plane_flight_id`),
  CONSTRAINT `FK83h92gfgbek8de3kjne29voyg` FOREIGN KEY (`lst_flights_plane_flight_id`) REFERENCES `flight` (`flight_id`),
  CONSTRAINT `FKqx2xxnamjmwwaey29gjgrt1ht` FOREIGN KEY (`plane_plane_id`) REFERENCES `plane` (`plane_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plane_lst_flights_plane`
--

LOCK TABLES `plane_lst_flights_plane` WRITE;
/*!40000 ALTER TABLE `plane_lst_flights_plane` DISABLE KEYS */;
/*!40000 ALTER TABLE `plane_lst_flights_plane` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt`
--

DROP TABLE IF EXISTS `receipt`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receipt` (
  `receipt_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `receipt_buying_date` date DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`receipt_id`),
  KEY `FK9llbb4mj9qe5l0krj2ro35u51` (`user_id`),
  CONSTRAINT `FK9llbb4mj9qe5l0krj2ro35u51` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt`
--

LOCK TABLES `receipt` WRITE;
/*!40000 ALTER TABLE `receipt` DISABLE KEYS */;
INSERT INTO `receipt` VALUES (1,'2022-12-10',NULL),(2,'2022-11-11',NULL),(3,'2022-12-12',NULL),(4,'2021-08-30',NULL),(5,'2021-11-10',NULL),(6,'2021-11-11',NULL),(7,'2022-01-05',NULL),(8,'2022-02-05',NULL),(9,'2021-08-18',NULL),(10,'2022-05-20',NULL),(11,'2022-02-28',NULL),(12,'2022-06-13',NULL),(13,'2021-12-24',NULL),(14,'2021-12-31',NULL),(15,'2021-10-27',NULL),(16,'2021-12-06',NULL),(17,'2022-01-29',NULL),(18,'2022-04-02',NULL),(19,'2021-12-06',NULL),(20,'2021-09-23',NULL);
/*!40000 ALTER TABLE `receipt` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receipt_lst_ticket`
--

DROP TABLE IF EXISTS `receipt_lst_ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receipt_lst_ticket` (
  `receipt_receipt_id` bigint(20) NOT NULL,
  `lst_ticket_ticket_id` bigint(20) NOT NULL,
  UNIQUE KEY `UK_o1mihfxd3ipjy642t8x46suq5` (`lst_ticket_ticket_id`),
  KEY `FKmoedpxhghjik9abbjq5nw9ivp` (`receipt_receipt_id`),
  CONSTRAINT `FKa5svbtyc15b4jia8cq8o8xlr4` FOREIGN KEY (`lst_ticket_ticket_id`) REFERENCES `ticket` (`ticket_id`),
  CONSTRAINT `FKmoedpxhghjik9abbjq5nw9ivp` FOREIGN KEY (`receipt_receipt_id`) REFERENCES `receipt` (`receipt_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receipt_lst_ticket`
--

LOCK TABLES `receipt_lst_ticket` WRITE;
/*!40000 ALTER TABLE `receipt_lst_ticket` DISABLE KEYS */;
/*!40000 ALTER TABLE `receipt_lst_ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ticket`
--

DROP TABLE IF EXISTS `ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket` (
  `ticket_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `flight_date` date DEFAULT NULL,
  `seat_number` int(11) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `ticket_price` varchar(255) DEFAULT NULL,
  `customer_id` bigint(20) DEFAULT NULL,
  `flight_id` bigint(20) DEFAULT NULL,
  `place_id` varchar(255) DEFAULT NULL,
  `receipt_id` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  KEY `FKmli0eqrecnnqvdgv3kcx7d9m8` (`customer_id`),
  KEY `FKfju27cbcbl1w16qeora1r636q` (`flight_id`),
  KEY `FK7lqw2qck0hjiyt81t37u3qki4` (`place_id`),
  KEY `FK5by9q16a98wsf6vcneqbejukj` (`receipt_id`),
  CONSTRAINT `FK5by9q16a98wsf6vcneqbejukj` FOREIGN KEY (`receipt_id`) REFERENCES `receipt` (`receipt_id`),
  CONSTRAINT `FK7lqw2qck0hjiyt81t37u3qki4` FOREIGN KEY (`place_id`) REFERENCES `place` (`place_id`),
  CONSTRAINT `FKfju27cbcbl1w16qeora1r636q` FOREIGN KEY (`flight_id`) REFERENCES `flight` (`flight_id`),
  CONSTRAINT `FKmli0eqrecnnqvdgv3kcx7d9m8` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ticket`
--

LOCK TABLES `ticket` WRITE;
/*!40000 ALTER TABLE `ticket` DISABLE KEYS */;
INSERT INTO `ticket` VALUES (1,'2022-05-28',65,'A','27',1,1,'BMV',1),(2,'2022-02-07',88,'A','11',2,2,'CAH',2),(3,'2022-08-01',23,'B','15',3,3,'DIN',3),(4,'2022-03-22',100,'A','45',4,4,'DIN',4),(5,'2022-01-04',60,'A','54',5,5,'HAN',5),(6,'2021-11-16',3,'B','18',6,6,'PXU',6),(7,'2022-04-17',41,'A','53',7,7,'SGN',7),(8,'2021-08-29',72,'B','26',8,8,'SQH',8),(9,'2021-12-12',10,'A','35',9,9,'TBB',9),(10,'2022-06-26',67,'B','12',10,10,'THD',10),(11,'2021-08-27',29,'A','39',11,11,'UIH',11),(12,'2022-03-30',3,'A','49',12,12,'VCL',12),(13,'2022-08-04',71,'A','30',13,13,'VCS',13),(14,'2021-11-19',10,'A','32',14,14,'VDH',14),(15,'2022-08-07',91,'B','13',15,15,'VKG',15),(16,'2022-07-18',7,'B','10',16,16,'VKG',16),(18,'2022-03-29',8,'B','16',18,18,'SGN',18),(19,'2022-07-19',62,'A','31',19,19,'THD',19),(20,'2022-03-12',61,'B','12',20,20,'SGN',20);
/*!40000 ALTER TABLE `ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `gender` bit(1) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'34361 Boyd Way','chilhouse0@sun.com','Cybil Hilhouse','','251-815-1169'),(2,'38737 Waywood Plaza','rlovekin1@t.com','Rosalind Lovekin','','0811968816-'),(3,'1 School Crossing','nglasspool2@ehow.com','Nichols Glasspool','\0','0544249442'),(4,'3 Ridge Oak Drive','afollan3@imgur.com','Arlina Follan','','0553701386'),(5,'46491 Arrowood Avenue','vbaudou4@webs.com','Vinny Baudou','\0','0893955344'),(6,'04 Derek Park','emurcott5@dagondesign.com','Erv Murcott','\0','0634125738'),(7,'332 American Drive','holivey6@weibo.com','Herculie Olivey','\0','0902565293'),(8,'259 Shopko Lane','tesom7@example.com','Tricia Esom','','0833801386'),(9,'32 Harbort Road','lscowen8@twitter.com','Lynea Scowen','','0487505338'),(10,'75 Ridgeview Street','bpoker9@about.me','Baxy Poker','\0','0617916936'),(11,'1 Swallow Circle','cpannamana@npr.org','Claiborne Pannaman','\0','0312135340'),(12,'3 Leroy Parkway','abanbrookb@ustream.tv','Asher Banbrook','\0','0242849348'),(13,'738 Burrows Pass','tocosgrac@ucoz.ru','Thoma O\'Cosgra','\0','0157684723'),(14,'19281 Namekagon Parkway','kcampad@freewebs.com','Kinnie Campa','\0','025708-3116'),(16,'142 Bonner Pass','ggurryf@ucoz.com','Georgy Gurry','\0','0366331558'),(17,'55447 Lillian Place','mmcgaughieg@soup.io','Maxim McGaughie','\0','0939536240'),(18,'1 Shasta Terrace','bwaineh@miibeian.gov.cn','Brandice Waine','','0412994087'),(19,'140 Sugar Pass','mscuddersi@apache.org','Mireielle Scudders','','0418254712'),(20,'939 Del Mar Circle','hwateridgej@w3.org','Hyatt Wateridge','\0','0241652892');
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

-- Dump completed on 2022-08-20 19:30:44
