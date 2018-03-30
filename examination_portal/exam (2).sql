-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 27, 2018 at 08:32 AM
-- Server version: 5.6.24
-- PHP Version: 5.5.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `exam`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `username` varchar(10) NOT NULL,
  `password` varchar(10) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`username`, `password`, `status`) VALUES
('AITS', 'ACS_AITS', 0),
('AITS', 'ACS_AITS', 0);

-- --------------------------------------------------------

--
-- Table structure for table `answersheets`
--

CREATE TABLE IF NOT EXISTS `answersheets` (
  `name` varchar(30) NOT NULL,
  `roll` varchar(10) NOT NULL,
  `year` varchar(1) NOT NULL,
  `section` varchar(1) NOT NULL,
  `branch` varchar(4) NOT NULL,
  `paper_set` int(11) NOT NULL,
  `answers` longtext NOT NULL,
  `originalkey` varchar(1000) NOT NULL,
  `secretkey` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `answersheets`
--

INSERT INTO `answersheets` (`name`, `roll`, `year`, `section`, `branch`, `paper_set`, `answers`, `originalkey`, `secretkey`) VALUES
('Lekha', '11701A0514', '1', 'A', 'CSE', 1, 'AAAAA&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'HASKELL'),
('Anand', '15701A0505', '3', 'A', 'CSE', 2, 'AAAAAAAAAA&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'HASKELL'),
('ASHA', '15701A0508', '3', 'A', 'CSE', 1, 'AAAAAAAAAA&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'HASKELL');

-- --------------------------------------------------------

--
-- Table structure for table `final_result`
--

CREATE TABLE IF NOT EXISTS `final_result` (
  `name` varchar(100) NOT NULL,
  `roll` varchar(100) NOT NULL,
  `year` int(1) NOT NULL,
  `section` varchar(1) NOT NULL,
  `branch` varchar(3) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_result`
--

INSERT INTO `final_result` (`name`, `roll`, `year`, `section`, `branch`, `score`) VALUES
('Lekha', '11701A0514', 1, 'A', 'CSE', 5),
('Aravind', '15701A0270', 3, 'B', 'EEE', 0),
('SAIRAM REDDY', '15701A0271', 3, 'B', 'EEE', 5),
('Anand', '15701A0505', 3, 'A', 'CSE', 10),
('ASHA', '15701A0508', 3, 'A', 'CSE', 10),
('Shaik zainab', '15701A0511', 3, 'A', 'CSE', 1),
('Chandra mouli', '15701A0514', 3, 'A', 'CSE', 10),
('m meena', '15701A0542', 3, 'A', 'CSE', 4),
('hfbh', 'io', 1, 'A', 'CSE', 2);

-- --------------------------------------------------------

--
-- Table structure for table `questionpapers`
--

CREATE TABLE IF NOT EXISTS `questionpapers` (
  `test_name` varchar(100) NOT NULL,
  `questions_count` int(11) NOT NULL,
  `test_time` int(11) NOT NULL,
  `passkey` varchar(10) NOT NULL,
  `set1key` text NOT NULL,
  `set2key` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questionpapers`
--

INSERT INTO `questionpapers` (`test_name`, `questions_count`, `test_time`, `passkey`, `set1key`, `set2key`) VALUES
('Haskell', 10, 2, 'CM', 'AAAAAAAAAA', 'BBBBBBBBBB'),
('D', 10, 12, 'DA', 'AAAAAAAAAA', 'AAAAAAAAAA'),
('Haskell', 100, 12, 'HASKELL', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
('JAVA', 100, 12, 'JAVA', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
('JAVAX', 10, 12, 'JAVAX', 'AAAAAAAAAA', 'AAAAAAAAAA'),
('C++ programming', 100, 12, 'LMN', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'),
('clanguage', 5, 12, 'PM', 'AAAAA', 'CCCCC'),
('34', 10, 2, 'QWE', 'AAAAAAAAAA', 'AAAAAAAAAA'),
('R programming', 10, 12, 'R', 'AAAAAAAAAA', 'AAAAAAAAAA'),
('SWIFT', 10, 12, 'SWIFT', 'AAAAAAAAAA', 'AAAAAAAAAA'),
('TEST1', 10, 12, 'TEST1', 'AAAAAAAAAA', 'AAAAAAAAAA'),
('XX', 10, 12, 'XX', 'AAAAAAAAAA', 'AAAAAAAAAA');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `s_roll` varchar(10) NOT NULL,
  `s_name` varchar(30) NOT NULL,
  `s_branch` varchar(3) NOT NULL,
  `s_year` int(1) NOT NULL,
  `s_section` varchar(1) NOT NULL,
  `status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`s_roll`, `s_name`, `s_branch`, `s_year`, `s_section`, `status`) VALUES
('11701A0514', 'Lekha', 'CSE', 1, 'A', 1),
('15701A0270', 'Aravind', 'EEE', 3, 'B', 1),
('15701A0271', 'SAIRAM REDDY', 'EEE', 3, 'B', 1),
('15701A0505', 'Anand', 'CSE', 3, 'A', 1),
('15701A0508', 'ASHA', 'CSE', 3, 'A', 1),
('15701A0511', 'Shaik zainab', 'CSE', 3, 'A', 1),
('15701A0514', 'Chandra mouli', 'CSE', 3, 'A', 1),
('15701A0542', 'm meena', 'CSE', 3, 'A', 1),
('15701a0552', 'nayeem', 'CSE', 3, 'A', 1),
('io', 'hfbh', 'CSE', 1, 'A', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `final_result`
--
ALTER TABLE `final_result`
  ADD PRIMARY KEY (`roll`);

--
-- Indexes for table `questionpapers`
--
ALTER TABLE `questionpapers`
  ADD PRIMARY KEY (`passkey`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`s_roll`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
