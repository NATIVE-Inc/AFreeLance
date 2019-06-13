-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 12 juin 2019 à 20:01
-- Version du serveur :  5.7.24
-- Version de PHP :  5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `skillfindr`
--

-- --------------------------------------------------------

--
-- Structure de la table `oauth`
--

DROP TABLE IF EXISTS `oauth`;
CREATE TABLE IF NOT EXISTS `oauth` (
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `auth_date` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `oauth`
--

INSERT INTO `oauth` (`first_name`, `last_name`, `email`, `password`, `auth_date`) VALUES
('John', 'smith', 'be.jema@yahoo.fr', 'smile4me', 'This is the date'),
('', 'dh', 'be.jema@yahoo.frs', 'smile4me', 'This is the date');

-- --------------------------------------------------------

--
-- Structure de la table `work`
--

DROP TABLE IF EXISTS `work`;
CREATE TABLE IF NOT EXISTS `work` (
  `img` varchar(30) NOT NULL,
  `title` text NOT NULL,
  `description` mediumtext NOT NULL,
  `categories` enum('Agriculture','Information Technology','Business','Real Estate') NOT NULL,
  `location` enum('Yaounde','Douala','Buea','Bamenda') NOT NULL,
  `up_date` date NOT NULL,
  `skills` enum('Programming','Communication','Hair dressing','Carpenter') NOT NULL,
  `author` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `work`
--

INSERT INTO `work` (`img`, `title`, `description`, `categories`, `location`, `up_date`, `skills`, `author`) VALUES
('images/blog/01.jpg', 'Blog Spot', 'This is a description', 'Agriculture', 'Yaounde', '2019-05-01', 'Programming', ''),
('images/blog/02.jpg', 'Blog Spot 2', 'This is a description', 'Information Technology', 'Douala', '2019-05-09', 'Communication', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
