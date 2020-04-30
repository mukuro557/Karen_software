-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 30, 2020 at 01:12 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
  `Date_start` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_end` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `date_check`
--

INSERT INTO `date_check` (`years`, `Date_start`, `Date_end`) VALUES
(2019, '2019-02-01', '2019-02-07'),
(2020, '2020-04-20', '2020-05-14');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `Inventory_Number` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Year` int(4) NOT NULL,
  `Email_Committee` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Email_Importer` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Asset_Description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `Model` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Serial` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Location` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Room` varchar(25) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Received_date` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Original_value` int(7) NOT NULL,
  `Cost_center` int(10) NOT NULL,
  `Department` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Date_Upload` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Vendor_name` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Status` int(1) NOT NULL,
  `Date_scan` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `takepicture` int(11) NOT NULL,
  `Image` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`Inventory_Number`, `Year`, `Email_Committee`, `Email_Importer`, `Asset_Description`, `Model`, `Serial`, `Location`, `Room`, `Received_date`, `Original_value`, `Cost_center`, `Department`, `Date_Upload`, `Vendor_name`, `Status`, `Date_scan`, `takepicture`, `Image`) VALUES
('711000100142030', 2019, '6131302005@lamduan.mfu.ac.th', '6131302005@lamduan.mfu.ac.th', 'ตู้หนังสือ ขนาด 0.40x1.20x1.80 เมตร ( 2 ตอน)', '', '', 'E1', '0', '2009-11-10', 7877, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', '', 0, NULL, 0, NULL),
('711000100142033', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'ตู้หนังสือ ขนาด 0.40x1.20x1.80 เมตร ( 2 ตอน)', '', '', 'E1', '408', '2009-11-10', 7877, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', '', 0, NULL, 1, NULL),
('711000100142038', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'ตู้หนังสือ ขนาด 0.40x1.20x1.80 เมตร ( 2 ตอน)', '', '', 'E1', '0', '2009-11-10', 7877, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', '', 0, NULL, 1, NULL),
('711001403551009', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'ตู้ล็อกเกอร์ 6 ช่อง 0.45*0.90*1.80 ม.', 'LUCKY/LK-6106', '', 'E3A', '305', '2007-11-15', 5500, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', 'บริษัท สยามสตีลอินเตอร์เนชั่นแนล', 0, NULL, 1, NULL),
('711001403551010', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'ตู้ล็อกเกอร์ 6 ช่อง 0.45*0.90*1.80 ม.', 'LUCKY/LK-6106', '', 'E3A', 'ห้องเลขา', '2007-11-15', 5500, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', 'บริษัท สยามสตีลอินเตอร์เนชั่นแนล', 0, NULL, 0, NULL),
('711001403551011', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'ตู้ล็อกเกอร์ 6 ช่อง 0.45*0.90*1.80 ม.', 'LUCKY/LK-6106', '', 'E3A', 'ห้องเลขา', '2007-11-15', 5500, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', 'บริษัท สยามสตีลอินเตอร์เนชั่นแนล', 0, NULL, 0, NULL),
('711001403551012', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'ตู้ล็อกเกอร์ 6 ช่อง 0.45*0.90*1.80 ม.', 'LUCKY/LK-6106', '', 'E3A', '305', '2007-11-15', 5500, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', 'บริษัท สยามสตีลอินเตอร์เนชั่นแนล', 0, NULL, 0, NULL),
('749001500148005', 2020, NULL, '6131302005@lamduan.mfu.ac.th', 'เครื่องทำลายเอกสาร', 'HSM / 104.2', '', 'E3A', '315/1', '2004-11-18', 16800, 11130000, 'สำนักวิชาเทคโนโลยีสา', '', '', 0, NULL, 0, NULL);

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
(2019, 'pipat@gmail.com', 'tanapun@gmail.com', '2'),
(2019, 'tanapun2@gmail.com', 'tanapun2@gmail.com', '1'),
(2020, '6131302005@lamduan.mfu.ac.th', 'tanapun2@gmail.com', '1'),
(2020, 'boahancock557@gmail.com', '6131302005@lamduan.mfu.ac.th', '2'),
(2020, 'dsaadas12@gmail.com', '6131302005@lamduan.mfu.ac.th', '1'),
(2020, 'mnyspx@gmail.com', 'tanapun@gmail.com', '2'),
(2020, 'pokemon@gmail.com', 'boahancock557@gmail.com', '2'),
(2020, 'pokemon@gmial.com', '6131302005@lamduan.mfu.ac.th', '2'),
(2020, 'pokemon673@gmial.com', '6131302005@lamduan.mfu.ac.th', '2'),
(2020, 'tanapun@gmail.com', 'tanapun@gmail.com', '1'),
(2020, 'tanapun558@gmail.com', '6131302005@lamduan.mfu.ac.th', '2');

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
