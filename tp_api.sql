-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 21 mars 2023 à 19:31
-- Version du serveur : 5.7.36
-- Version de PHP : 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `tp_api`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

DROP TABLE IF EXISTS `admins`;
CREATE TABLE IF NOT EXISTS `admins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `pincode` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`id`, `created_at`, `modified_at`, `pincode`) VALUES
(1, '2023-03-21 15:16:12', '2023-03-21 15:16:12', 428274);

-- --------------------------------------------------------

--
-- Structure de la table `restauranttables`
--

DROP TABLE IF EXISTS `restauranttables`;
CREATE TABLE IF NOT EXISTS `restauranttables` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `restauranttables`
--

INSERT INTO `restauranttables` (`id`, `created_at`, `modified_at`, `name`) VALUES
(1, '2023-03-21 12:57:35', '2023-03-21 12:57:35', 'Paris'),
(2, '2023-03-21 12:58:00', '2023-03-21 12:58:00', 'Tokyo'),
(3, '2023-03-21 12:58:06', '2023-03-21 12:58:06', 'New-York'),
(4, '2023-03-21 12:58:10', '2023-03-21 12:58:10', 'Berlin'),
(5, '2023-03-21 13:23:40', '2023-03-21 13:23:40', 'Madrid');

-- --------------------------------------------------------

--
-- Structure de la table `services`
--

DROP TABLE IF EXISTS `services`;
CREATE TABLE IF NOT EXISTS `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `shiftType` int(11) DEFAULT NULL,
  `shiftClosed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `services`
--

INSERT INTO `services` (`id`, `created_at`, `modified_at`, `shiftType`, `shiftClosed`) VALUES
(1, '2023-03-21 14:59:24', '2023-03-21 14:59:24', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `serviceusers`
--

DROP TABLE IF EXISTS `serviceusers`;
CREATE TABLE IF NOT EXISTS `serviceusers` (
  `id_service` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  KEY `id_service` (`id_service`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `tabletips`
--

DROP TABLE IF EXISTS `tabletips`;
CREATE TABLE IF NOT EXISTS `tabletips` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `tips` int(11) DEFAULT NULL,
  `id_restaurantTable` int(11) DEFAULT NULL,
  `id_service` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_restaurantTable` (`id_restaurantTable`),
  KEY `id_service` (`id_service`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `tabletips`
--

INSERT INTO `tabletips` (`id`, `created_at`, `modified_at`, `tips`, `id_restaurantTable`, `id_service`) VALUES
(1, '2023-03-21 14:13:18', '2023-03-21 14:13:18', 10, 1, 1),
(2, '2023-03-21 14:14:32', '2023-03-21 14:14:32', 2, 2, 1),
(3, '2023-03-21 14:14:37', '2023-03-21 14:14:37', 5, 2, 1),
(5, '2023-03-21 14:17:12', '2023-03-21 14:17:12', 5, 2, 1),
(6, '2023-03-21 14:19:43', '2023-03-21 14:19:43', 5, 2, 1);

-- --------------------------------------------------------

--
-- Structure de la table `tipspayments`
--

DROP TABLE IF EXISTS `tipspayments`;
CREATE TABLE IF NOT EXISTS `tipspayments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `active` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `created_at`, `modified_at`, `firstname`, `lastname`, `status`, `active`) VALUES
(2, '2023-03-21 10:40:42', '2023-03-21 11:03:44', 'Anonyme', 'Anonyme', 1, 0),
(3, '2023-03-21 10:42:01', '2023-03-21 10:42:01', 'Lea', 'AEZJ', 1, 0),
(4, '2023-03-21 10:49:39', '2023-03-21 10:49:39', 'Lea', 'AEZJ', 1, 0),
(5, '2023-03-21 12:54:29', '2023-03-21 12:54:29', 'Leo', 'Dupont', 1, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
