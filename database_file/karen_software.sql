-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 16, 2020 at 04:18 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `karen_software`
--

-- --------------------------------------------------------

--
-- Table structure for table `date_check`
--

CREATE TABLE `date_check` (
  `years` int(11) NOT NULL,
  `Date_start` date NOT NULL,
  `Date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `date_check`
--

INSERT INTO `date_check` (`years`, `Date_start`, `Date_end`) VALUES
(2019, '2019-02-01', '2019-02-07'),
(2020, '2020-02-01', '2020-02-07');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `Inventory_Number` int(20) NOT NULL,
  `Year` int(4) NOT NULL,
  `Email_Committee` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email_Importer` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Asset_Description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Model` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Serial` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Location` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Room` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Received_date` date NOT NULL,
  `Original_value` int(7) NOT NULL,
  `Cost_center` int(10) NOT NULL,
  `Department` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_Upload` date NOT NULL,
  `Vendor_name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` int(1) NOT NULL,
  `Date_scan` date DEFAULT NULL,
  `Image` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`Inventory_Number`, `Year`, `Email_Committee`, `Email_Importer`, `Asset_Description`, `Model`, `Serial`, `Location`, `Room`, `Received_date`, `Original_value`, `Cost_center`, `Department`, `Date_Upload`, `Vendor_name`, `Status`, `Date_scan`, `Image`) VALUES
(142033, 2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', 'ตู้หนังสือ ขนาด 0.40x1.20x1.80 เมตร ( 2 ตอน)', '', '', 'E1', '408', '2009-11-10', 7877, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2020-01-31', '', 1, '2020-02-05', 'ตู้หนังสือ.jpg'),
(148005, 2019, 'pipat@gmail.com', 'tanapun@gmail.com', 'เครื่องทำลายเอกสาร', 'HSM / 104.2', '', 'E3A', '315/1', '2004-11-18', 16800, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2019-01-31', '', 1, '2019-02-04', 'เครื่องทำลายเอกสาร.jpg'),
(152005, 2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', 'เครื่องโทรสาร', 'PANASONIC/KX-FLM662CX', '', 'E3A', '315', '2008-11-25', 13500, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2020-01-31', 'บริษัท พ.พานิชอีเลคทริคสแควร์ จำกัด', 1, '2020-02-03', 'เครื่องโทรสาร.jpg'),
(244187, 2019, 'pipat@gmail.com', 'tanapun@gmail.com', 'เก้าอี้คอมพิวเตอร์ สีฟ้า', 'บ. แอ็คเมนฯ', '', 'E1', '318', '2001-07-23', 2087, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2019-01-31', '', 2, '2019-02-03', 'เก้าอี้คอมพิวเตอร์.jpg'),
(546105, 2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', 'โต๊ะทำงานพนักงาน(65)', 'WELMA/0.80*1.35*0.75', '', 'E1', '406', '2003-08-26', 4000, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2020-01-31', '', 2, '2020-02-01', 'โต๊ะพนักงาน.jpg'),
(559008, 2019, 'pipat@gmail.com', 'tanapun@gmail.com', 'กระดานไวท์บอร์ดแบบมีล้อเลื่อน', 'KINGDOM/BS-90180N (58)', '', 'S6', '3412', '2016-02-18', 6300, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2019-01-31', 'บริษัท สยามสตีลอินเตอร์เนชั่นแนล', 0, '2019-02-02', 'กระดานไวท์บอร์ด.jpg'),
(648041, 2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', 'ตู้เหล็ก 2 บาน 0.45*0.90*1.80 ม.', 'Lucky /SH756', '', 'E1', '', '2005-08-18', 3950, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2020-01-31', 'บริษัท สยามสตีลอินเตอร์เนชั่นแนล', 0, '2020-02-03', 'ตู้เหล็ก.jpg'),
(845001, 2019, 'pipat@gmail.com', 'tanapun@gmail.com', 'ตู้ไม้สำหรับส่งงาน', 'LUCKY / SH-996', '', 'E3A', '316', '2002-05-15', 9800, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2019-01-31', '', 1, '2019-02-06', 'ตู้ไม้ส่งงาน.jpg'),
(944351, 2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', 'โต๊ะวางคอมพิวเตอร์', 'บ. ที เอส โฮม แอนด์ ออฟฟิศ', '', 'E1', '', '2001-07-23', 1813, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2020-01-31', '', 2, '2020-02-01', 'โต๊ะวางคอม.jpg'),
(14701470, 2019, 'pipat@gmail.com', 'tanapun@gmail.com', 'ตู้เอกสาร', 'บ. เว็ลม่าเฟอร์นิเทค', '', 'E1', '', '2001-07-23', 3544, 11130000, 'สำนักวิชาเทคโนโลยีสารสนเทศ', '2019-01-31', '', 0, '2019-02-04', 'ตู้เอกสาร.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `year_user`
--

CREATE TABLE `year_user` (
  `Year` int(4) NOT NULL,
  `Email_user` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Email_assigner` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(16) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `year_user`
--

INSERT INTO `year_user` (`Year`, `Email_user`, `Email_assigner`, `role`) VALUES
(0, '', '', ''),
(2014, 'dsaadas', 'dsaadas', ''),
(2019, 'pipat@gmail.com', 'tanapun@gmail.com', 'committee'),
(2019, 'tanapun2@gmail.com', 'tanapun2@gmail.com', ''),
(2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', 'committee'),
(2020, 'tanapun@gmail.com', 'tanapun@gmail.com', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `date_check`
--
ALTER TABLE `date_check`
  ADD PRIMARY KEY (`years`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`Inventory_Number`,`Year`),
  ADD KEY `ID_Importer` (`Email_Committee`),
  ADD KEY `ID_Committee` (`Email_Importer`),
  ADD KEY `Cost_center` (`Cost_center`),
  ADD KEY `Status` (`Status`),
  ADD KEY `Location` (`Location`);

--
-- Indexes for table `year_user`
--
ALTER TABLE `year_user`
  ADD PRIMARY KEY (`Year`,`Email_user`),
  ADD KEY `ID_User` (`Email_user`),
  ADD KEY `Email_assigner` (`Email_assigner`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `date_check`
--
ALTER TABLE `date_check`
  MODIFY `years` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2021;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`Email_Committee`) REFERENCES `year_user` (`Email_user`),
  ADD CONSTRAINT `item_ibfk_2` FOREIGN KEY (`Email_Importer`) REFERENCES `year_user` (`Email_user`);

--
-- Constraints for table `year_user`
--
ALTER TABLE `year_user`
  ADD CONSTRAINT `year_user_ibfk_1` FOREIGN KEY (`Email_assigner`) REFERENCES `year_user` (`Email_user`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
