-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2020 at 03:34 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.3.12

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
CREATE DATABASE IF NOT EXISTS `karen_software` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `karen_software`;

-- --------------------------------------------------------

--
-- Table structure for table `date_check`
--

CREATE TABLE `date_check` (
  `years` int(11) NOT NULL,
  `Date_start` date NOT NULL,
  `Date_end` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
(12352, 2018, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 1, '2020-01-01', 'dsadsjakldasdas.jpg'),
(12353, 2019, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 1, '2020-01-01', 'dsadsjakldasdas.jpg'),
(12354, 2020, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 1, '2020-01-01', 'dsadsjakldasdas.jpg'),
(55556, 2020, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 2, '2020-01-01', 'dsadsjakldasdas.jpg'),
(55557, 2017, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 2, '2020-01-01', 'dsadsjakldasdas.jpg'),
(55558, 2018, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 2, '2020-01-01', 'dsadsjakldasdas.jpg'),
(55559, 2020, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a toilet', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 7, '2020-01-01', 'zzz41564156.jpg'),
(14701470, 2020, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a chair', 'metal table', '12A', 'E!', '412', '2020-01-01', 4500, 0, 'IT', '2020-01-01', 'Table company', 0, '2020-01-01', 'sssldasdas.jpg'),
(15301530, 2018, 'tanapun@gmail.com', 'tanapun@gmail.com', 'a chair', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 0, '2020-01-01', 'dsadsjakldasdas.jpg'),
(15301531, 2019, 'tanapun2@gmail.com', 'tanapun2@gmail.com', 'a chair', 'metal chair', '55B', 'E3', '321', '2020-01-01', 500, 0, 'IT', '2020-01-01', 'Chair company', 0, '2020-01-01', 'dsadsjakldasdas.jpg');

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
(2019, 'tanapun2@gmail.com', 'tanapun2@gmail.com', ''),
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
  MODIFY `years` int(11) NOT NULL AUTO_INCREMENT;

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
