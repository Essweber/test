-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 13, 2022 at 01:24 AM
-- Server version: 5.7.24
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pre-projet`
--

-- --------------------------------------------------------

--
-- Table structure for table `actors`
--

CREATE TABLE `actors` (
  `actor-id` int(11) NOT NULL,
  `actor-title` varchar(45) NOT NULL,
  `actor-description` varchar(225) NOT NULL,
  `actor-event-id` int(11) NOT NULL,
  `actor-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `actor-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categorie-id` int(11) NOT NULL,
  `categorie-name` enum('standard','vip') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `demandes`
--

CREATE TABLE `demandes` (
  `demande-id` int(11) NOT NULL,
  `demande-lieu` tinyint(1) DEFAULT NULL,
  `demande-actor` tinyint(1) DEFAULT NULL,
  `demande-deplacement` tinyint(1) DEFAULT NULL,
  `demande-materiel` tinyint(1) DEFAULT NULL,
  `demande-tickets` tinyint(1) DEFAULT NULL,
  `demande-autre` tinyint(1) DEFAULT NULL,
  `demande-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `demande-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `deplacements`
--

CREATE TABLE `deplacements` (
  `deplacement-id` int(11) NOT NULL,
  `deplacement-invited-complete-name` varchar(100) NOT NULL,
  `deplacement-invited-adresse` varchar(45) NOT NULL,
  `deplacement-invited-contact` int(11) NOT NULL,
  `deplacement-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deplacement-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event-id` int(11) NOT NULL,
  `event-name` varchar(45) NOT NULL,
  `event-organisation-id` int(11) NOT NULL,
  `event-type` varchar(100) NOT NULL,
  `event-start-date` date NOT NULL,
  `event-start-hour` time NOT NULL,
  `event-end-date` date NOT NULL,
  `event-end-hour` time NOT NULL,
  `event-place` varchar(100) DEFAULT NULL,
  `event-description` varchar(255) NOT NULL,
  `event-creator-id` int(11) NOT NULL,
  `event-nature` enum('physique','en ligne','les deux') NOT NULL,
  `event-stat` enum('modifié','non modifié') NOT NULL DEFAULT 'non modifié',
  `event-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `event-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `materiaux`
--

CREATE TABLE `materiaux` (
  `materiel-id` int(11) NOT NULL,
  `materiel-name` varchar(45) NOT NULL,
  `materiel-type` int(11) NOT NULL,
  `materiel-description` varchar(225) NOT NULL,
  `materiel-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `materiel-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organisations`
--

CREATE TABLE `organisations` (
  `organisation-id` int(11) NOT NULL,
  `organisation-activites` varchar(200) NOT NULL,
  `organisation-adresse` varchar(100) NOT NULL,
  `organisation-creator-id` int(11) NOT NULL,
  `organisation-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `organisation-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `place`
--

CREATE TABLE `place` (
  `place-id` int(11) NOT NULL,
  `place-region` varchar(45) NOT NULL,
  `place-prefecture` varchar(45) NOT NULL,
  `place-nbre` int(11) NOT NULL,
  `place-description` varchar(225) NOT NULL,
  `place-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `place-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `sells`
--

CREATE TABLE `sells` (
  `sell-id` int(11) NOT NULL,
  `sell-ticket-id` int(11) NOT NULL,
  `sell-nbre` int(11) NOT NULL,
  `sell-client-id` int(11) NOT NULL,
  `sell-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sell-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `ticket-id` int(11) NOT NULL,
  `ticket-event-id` int(11) NOT NULL,
  `ticket-categorie-id` int(11) NOT NULL,
  `ticket-price` int(11) NOT NULL,
  `ticket-nbre` int(11) NOT NULL,
  `ticket-description` varchar(225) NOT NULL,
  `ticket-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ticket-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user-id` int(11) NOT NULL,
  `user-fname` varchar(45) NOT NULL,
  `user-lname` varchar(45) NOT NULL,
  `user-email` varchar(255) NOT NULL,
  `user-password` varchar(100) NOT NULL,
  `user-tel` int(11) DEFAULT NULL,
  `user-type` int(11) DEFAULT NULL,
  `user-created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user-updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`actor-id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categorie-id`);

--
-- Indexes for table `demandes`
--
ALTER TABLE `demandes`
  ADD PRIMARY KEY (`demande-id`);

--
-- Indexes for table `deplacements`
--
ALTER TABLE `deplacements`
  ADD PRIMARY KEY (`deplacement-id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event-id`);

--
-- Indexes for table `materiaux`
--
ALTER TABLE `materiaux`
  ADD PRIMARY KEY (`materiel-id`);

--
-- Indexes for table `organisations`
--
ALTER TABLE `organisations`
  ADD PRIMARY KEY (`organisation-id`);

--
-- Indexes for table `place`
--
ALTER TABLE `place`
  ADD PRIMARY KEY (`place-id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`ticket-id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user-id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `actor-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categorie-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `demandes`
--
ALTER TABLE `demandes`
  MODIFY `demande-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `deplacements`
--
ALTER TABLE `deplacements`
  MODIFY `deplacement-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materiaux`
--
ALTER TABLE `materiaux`
  MODIFY `materiel-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `organisations`
--
ALTER TABLE `organisations`
  MODIFY `organisation-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `place`
--
ALTER TABLE `place`
  MODIFY `place-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `ticket-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user-id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
