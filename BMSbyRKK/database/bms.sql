-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2022 at 02:55 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bms`
--

-- --------------------------------------------------------

--
-- Table structure for table `cus_det`
--

CREATE TABLE `cus_det` (
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `accnum` varchar(255) NOT NULL,
  `bal` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cus_det`
--

INSERT INTO `cus_det` (`fname`, `lname`, `email`, `accnum`, `bal`) VALUES
('Shreya ', 'Paul', 'shreya@gmail.com', '33401220000', '40000'),
('Ankita', 'Guha', 'ankita@gmail.com', '33401220001', '75000'),
('Bishnu', 'Saha', 'bishnu@gmail.com', '33401220002', '15000'),
('Dipanjan', 'Roy', 'dipa@gmail.com', '33401220003', '22000'),
('Anup', 'Majumdar', 'anup@gmail.com', '33401220018', '15000'),
('Debdas', 'Kundu', 'dk@gmail.com', '33401220050', '25000'),
('Akash', 'Mahanta', 'akash@gmail.com', '33401220057', '100000'),
('Abhishek', 'Sinha', 'abhi@gmail.com', '33401220058', '80000'),
('Ritam Kumar', 'Kundu', 'ritam@gmail.com', '33401220074', '31000'),
('Rajendra Nath', 'Murmu', 'rajen@gmail.com', '33401220077', '50000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cus_det`
--
ALTER TABLE `cus_det`
  ADD PRIMARY KEY (`accnum`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
