-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 23, 2022 at 12:01 PM
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
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `description` varchar(225) NOT NULL,
  `event-id` int(11) DEFAULT NULL,
  `created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` enum('standard','vip') NOT NULL,
  `created-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `demandes`
--

CREATE TABLE `demandes` (
  `id` int(11) NOT NULL,
  `location_region` varchar(45) DEFAULT NULL,
  `location_prefecture` varchar(45) DEFAULT NULL,
  `place_nbre` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `location_description` varchar(255) DEFAULT NULL,
  `actor_title` varchar(45) DEFAULT NULL,
  `actor_description` varchar(255) DEFAULT NULL,
  `gust_name` varchar(45) DEFAULT NULL,
  `gust_adresse` varchar(100) DEFAULT NULL,
  `gust_contact` int(11) DEFAULT NULL,
  `materiel_type` varchar(45) DEFAULT NULL,
  `materiel_name` varchar(45) DEFAULT NULL,
  `materiel_description` varchar(255) DEFAULT NULL,
  `other_description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `event_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `demandes`
--

INSERT INTO `demandes` (`id`, `location_region`, `location_prefecture`, `place_nbre`, `duration`, `location_description`, `actor_title`, `actor_description`, `gust_name`, `gust_adresse`, `gust_contact`, `materiel_type`, `materiel_name`, `materiel_description`, `other_description`, `created_at`, `updated_at`, `event_id`) VALUES
(1, 'az', 'aze', 14, 22, 'cdf', 'fghh', 'ee', 'jh', 'sd', 45, 'yh', 'gr', 'et', 'egj', '2022-09-19 20:08:09', '2022-09-19 20:08:09', 1),
(2, 'az', 'aze', 14, 22, 'fr', 'f', 'r', 'rd', 'sd', 45, 'yh', 'oi', 'f', 'fr', '2022-09-19 21:27:15', '2022-09-19 21:27:15', 1),
(3, 'az', 'aze', 14, 22, 'fr', 'f', 'r', 'rd', 'sd', 45, 'yh', 'oi', 'f', 'fr', '2022-09-19 21:30:19', '2022-09-19 21:30:19', 1),
(4, 'az', 'aze', 14, 22, 'fr', 'f', 'r', 'rd', 'sd', 45, 'yh', 'oi', 'f', 'fr', '2022-09-19 21:31:21', '2022-09-19 21:31:21', 1),
(5, 'az', 'aze', 14, 22, 'fr', 'f', 'r', 'rd', 'sd', 45, 'yh', 'oi', 'f', 'fr', '2022-09-19 21:32:14', '2022-09-19 21:32:14', 1),
(6, 'az', 'aze', 14, 22, 'fr', 'f', 'r', 'rd', 'sd', 45, 'yh', 'oi', 'f', 'fr', '2022-09-19 21:32:24', '2022-09-19 21:32:24', 1),
(7, 'az', 'aze', 14, 22, 'ffds', '', '', 'sv', 'pooo', 58, 'gj', 'hjh', 'szyr', 'y', '2022-09-20 13:50:22', '2022-09-20 13:50:22', 1),
(8, 'az', 'aze', 14, 22, 'ffds', 'ghg', 'ghf', 'sv', 'pooo', 58, 'gj', 'hjh', 'szyr', 'y', '2022-09-20 13:50:45', '2022-09-20 13:50:45', 1);

-- --------------------------------------------------------

--
-- Table structure for table `displacements`
--

CREATE TABLE `displacements` (
  `id` int(11) NOT NULL,
  `gust_complete_name` varchar(45) NOT NULL,
  `gust_adresse` varchar(45) NOT NULL,
  `gust_contact` int(11) NOT NULL,
  `created-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `start_date` date NOT NULL,
  `start_houre` time NOT NULL,
  `end_date` date NOT NULL,
  `end_houre` time NOT NULL,
  `location` varchar(100) DEFAULT NULL,
  `description` varchar(255) NOT NULL,
  `nature` enum('physique','en ligne','les deux') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creator_id` int(11) NOT NULL,
  `organisation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `name`, `type`, `start_date`, `start_houre`, `end_date`, `end_houre`, `location`, `description`, `nature`, `created_at`, `updated_at`, `creator_id`, `organisation_id`) VALUES
(1, 'trr', 'rtyrrrrrr', '2022-09-06', '12:12:00', '2022-09-06', '15:18:00', 'togo', 'boom', 'physique', '2022-09-19 10:20:45', '2022-09-19 10:20:45', 1, 1),
(2, 'loto', 'education', '2022-08-30', '14:01:00', '2022-09-05', '21:00:00', 'kara', 'dgree', 'les deux', '2022-09-19 10:34:49', '2022-09-19 10:34:49', 1, 1),
(3, 'loto', 'pop hit', '2022-09-06', '04:01:00', '2022-09-07', '01:04:00', 'kara', 'mopoo', 'en ligne', '2022-09-19 19:50:58', '2022-09-19 19:50:58', 1, 1),
(4, 'pop', 'education', '2022-09-06', '02:02:00', '2022-09-13', '02:02:00', 'kara', 'hjgd', 'physique', '2022-09-20 13:49:45', '2022-09-20 13:49:45', 1, 1),
(5, 'der', '2', '2022-09-07', '05:05:00', '2022-09-08', '05:05:00', 'kara', 'tyht', 'physique', '2022-09-23 09:22:47', '2022-09-23 09:22:47', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `location`
--

CREATE TABLE `location` (
  `id` int(11) NOT NULL,
  `region` varchar(45) NOT NULL,
  `prefecture` varchar(45) DEFAULT NULL,
  `place_nbre` int(11) DEFAULT NULL,
  `description` varchar(225) DEFAULT NULL,
  `created-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `materiaux`
--

CREATE TABLE `materiaux` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `type` varchar(100) NOT NULL,
  `description` varchar(225) DEFAULT NULL,
  `created-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `organisations`
--

CREATE TABLE `organisations` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `activites` varchar(200) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creator_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `organisations`
--

INSERT INTO `organisations` (`id`, `name`, `activites`, `adresse`, `created-at`, `updated-at`, `creator_id`) VALUES
(1, 'pop', 'der', 'der', '2022-09-17 02:36:10', '2022-09-17 02:35:58', 1),
(6, 'Mix Techno', 'Maintenance informatique', 'kara ville sud', '2022-09-22 19:47:56', '2022-09-19 14:28:50', 2),
(8, 'ALOUA PRODUCT', 'REPARATION', 'kara ville sud', '2022-09-22 23:10:42', '2022-09-22 23:09:19', 38),
(9, 'Mix Techno', 'popnop', 'derhich', '2022-09-22 23:33:23', '2022-09-22 23:33:23', 36);

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `category_id`, `title`, `body`, `author`, `created_at`) VALUES
(1, 1, 'Technology Post One', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Sam Smith', '2022-09-22 16:09:04'),
(2, 2, 'Gaming Post One', 'Adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque.', 'Kevin Williams', '2022-09-22 16:09:04'),
(3, 1, 'Technology Post Two', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Sam Smith', '2022-09-22 16:09:04'),
(4, 4, 'Entertainment Post One', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Mary Jackson', '2022-09-22 16:09:04'),
(5, 4, 'Entertainment Post Two', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Mary Jackson', '2022-09-22 16:09:04'),
(6, 1, 'Technology Post Three', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum est nec lorem mattis interdum. Cras augue est, interdum eu consectetur et, faucibus vel turpis. Etiam pulvinar, enim quis elementum iaculis, tortor sapien eleifend eros, vitae rutrum augue quam sed leo. Vivamus fringilla, diam sit amet vestibulum vulputate, urna risus hendrerit arcu, vitae fringilla odio justo vulputate neque. Nulla a massa sed est vehicula rhoncus sit amet quis libero. Integer euismod est quis turpis hendrerit, in feugiat mauris laoreet. Vivamus nec laoreet neque. Cras condimentum aliquam nunc nec maximus. Cras facilisis eros quis leo euismod pharetra sed cursus orci.', 'Sam Smith', '2022-09-22 16:09:04');

-- --------------------------------------------------------

--
-- Table structure for table `sells`
--

CREATE TABLE `sells` (
  `id` int(11) NOT NULL,
  `nbre` int(11) NOT NULL,
  `created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tickets_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `nbre` int(11) NOT NULL,
  `description` varchar(225) NOT NULL,
  `created-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated-at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` int(11) NOT NULL,
  `categories_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(100) NOT NULL,
  `tel` int(11) DEFAULT NULL,
  `type` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `email`, `password`, `tel`, `type`, `created_at`, `updated_at`) VALUES
(1, 'aloua', 'lo', 'ess@mail', 'part', 2222, 2, '2022-09-11 01:05:25', '2022-09-11 01:05:25'),
(2, 'Wassao', 'Ruth', 'wass@mail', 'adm', 2222, 1, '2022-09-11 01:05:25', '2022-09-11 01:05:25'),
(3, 'as', 'lo', 'ess@mail', 'api', 44, 2, '2022-09-15 00:06:35', '2022-09-15 00:06:35'),
(4, 'sd', 'sd', 'sd', 'sdf', 99999922, 2, '2022-09-15 08:50:04', '2022-09-15 08:50:04'),
(5, 'papa', 'koko', 'pa', 'p5', 55, 2, '2022-09-15 09:50:07', '2022-09-15 09:50:07'),
(6, 'papa', 'koko', 'pa', 'p5', 55, 2, '2022-09-15 09:50:11', '2022-09-15 09:50:11'),
(7, 'papa', 'koko', 'pa', 'p5', 55, 2, '2022-09-15 09:50:13', '2022-09-15 09:50:13'),
(8, 'papa', 'koko', 'pa', 'p5', 55, 2, '2022-09-15 09:50:13', '2022-09-15 09:50:13'),
(9, 'papa', 'koko', 'pa', 'p5', 55, 2, '2022-09-15 09:50:13', '2022-09-15 09:50:13'),
(10, 'papa', 'koko', 'pa', 'p5', 55, 2, '2022-09-15 09:50:14', '2022-09-15 09:50:14'),
(11, 'moptar', 'koko', 'ess@mail', 'sdf', 4215, 2, '2022-09-17 02:16:59', '2022-09-17 02:16:59'),
(12, 'bonsoa', 'mp', 'mail.com', 'pro', 5656, 1, '2022-09-20 11:06:38', '2022-09-20 11:06:38'),
(13, 'tereee', 'tereee', 'as@mail', 'koko', 3212, 1, '2022-09-20 14:16:49', '2022-09-20 14:16:49'),
(14, 'aloua', 'tereee', 'ess', 'p5', 55, 2, '2022-09-20 14:21:26', '2022-09-20 14:21:26'),
(17, 'aloua', 'lo', 'mail.com', 'ff', 2222, 1, '2022-09-20 14:24:47', '2022-09-20 14:24:47'),
(21, 'aloua', 'lo', 'mail.com', 'ff', 2222, 1, '2022-09-20 14:25:54', '2022-09-20 14:25:54'),
(26, 'aloua', 'lo', 'mail.com', 'ff', 2222, 1, '2022-09-20 14:27:00', '2022-09-20 14:27:00'),
(27, 'aloua', 'lo', 'mail.com', 'ff', 2222, 1, '2022-09-20 14:27:01', '2022-09-20 14:27:01'),
(28, 'aloua', 'lo', 'mail.com', 'ff', 2222, 1, '2022-09-20 14:27:01', '2022-09-20 14:27:01'),
(29, 'aloua', 'tereee', 'mail.com', 'adm', 55, 1, '2022-09-20 14:27:42', '2022-09-20 14:27:42'),
(30, 'aloua', 'tereee', 'mail.com', 'adm', 55, 1, '2022-09-20 14:29:14', '2022-09-20 14:29:14'),
(31, 'aloua', 'tereee', 'as@mail', 'ff', 5656, 1, '2022-09-20 14:41:37', '2022-09-20 14:41:37'),
(32, 'aloua', 'esso', 'esso@gmail.com', 'admin', 90809080, 1, '2022-09-22 18:09:54', '2022-09-22 18:09:54'),
(33, 'kaza', 'emma', 'emma@gmail.com', '1234', 1214, 1, '2022-09-22 20:24:44', '2022-09-22 20:24:44'),
(34, 'aloua', 'ruth', 'pa', 'az12', 4215, 1, '2022-09-22 20:29:15', '2022-09-22 20:29:15'),
(35, 'as', 'tereee', 'mail.com', 'part', 2222, 1, '2022-09-22 20:32:00', '2022-09-22 20:32:00'),
(36, 'papa', 'lo', 'ess', 'az12', 1214, 1, '2022-09-22 22:45:42', '2022-09-22 22:45:42'),
(37, 'alo', 'koko', 'mail.com', 'boss', 5656, 1, '2022-09-22 22:49:33', '2022-09-22 22:49:33'),
(38, 'ALOUA', 'ESSOTCHOSSIM', '@Mministredejesus', 'ff', 4215, 1, '2022-09-22 23:05:45', '2022-09-22 23:05:45'),
(39, 'aloua', 'lo', 'mail.com', 'az12', 55, 1, '2022-09-22 23:31:23', '2022-09-22 23:31:23'),
(40, 'alo', 'koko', 'ess', 'az12', 55, 1, '2022-09-22 23:33:10', '2022-09-22 23:33:10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `actors`
--
ALTER TABLE `actors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_actors_demandes1_idx` (`demandes_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `demandes`
--
ALTER TABLE `demandes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_demandes_events_idx` (`event_id`);

--
-- Indexes for table `displacements`
--
ALTER TABLE `displacements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_displacements_demandes1_idx` (`demandes_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_events_users_idx` (`creator_id`),
  ADD KEY `fk_events_organisations1_idx` (`organisation_id`);

--
-- Indexes for table `location`
--
ALTER TABLE `location`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_location_demandes1_idx` (`demandes_id`);

--
-- Indexes for table `materiaux`
--
ALTER TABLE `materiaux`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_materiaux_demandes1_idx` (`demandes_id`);

--
-- Indexes for table `organisations`
--
ALTER TABLE `organisations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_organisations_users1_idx` (`creator_id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sells`
--
ALTER TABLE `sells`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_sells_tickets1_idx` (`tickets_id`),
  ADD KEY `fk_sells_users1_idx` (`client_id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_tickets_demandes1_idx` (`demandes_id`),
  ADD KEY `fk_tickets_categories1_idx` (`categories_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `actors`
--
ALTER TABLE `actors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `demandes`
--
ALTER TABLE `demandes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `displacements`
--
ALTER TABLE `displacements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `location`
--
ALTER TABLE `location`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `materiaux`
--
ALTER TABLE `materiaux`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `organisations`
--
ALTER TABLE `organisations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `sells`
--
ALTER TABLE `sells`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
