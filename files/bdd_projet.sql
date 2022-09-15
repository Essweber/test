-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------


-- -----------------------------------------------------
-- Schema pre-projet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pre-projet` DEFAULT CHARACTER SET utf8 ;

-- -----------------------------------------------------
-- Table `pre-projet`.`users`
-- -----------------------------------------------------
-- CREATE TABLE IF NOT EXISTS `pre-projet`.`users` (
--   `id` INT(11) NOT NULL AUTO_INCREMENT,
--   `fname` VARCHAR(45) NOT NULL,
--   `lname` VARCHAR(45) NOT NULL,
--   `email` VARCHAR(255) NOT NULL,
--   `password` VARCHAR(100) NOT NULL,
--   `tel` INT(11) NULL DEFAULT NULL,
--   `type` INT(11) NOT NULL,
--   `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
--   PRIMARY KEY (`id`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `pre-projet`.`organisations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`organisations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `activites` VARCHAR(200) NOT NULL,
  `adresse` VARCHAR(100) NOT NULL,
  `created-at` TIMESTAMP NOT NULL,
  `updated-at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_organisations_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_organisations_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pre-projet`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`events`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`events` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(45) NOT NULL,
  `start_date` DATETIME NOT NULL,
  `end_date` DATETIME NOT NULL,
  `location` VARCHAR(100) NULL,
  `description` VARCHAR(255) NOT NULL,
  `nature` ENUM('physique', 'en ligne', 'les deux') NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `users_id` INT(11) NOT NULL,
  `organisations_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_events_users_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_events_organisations1_idx` (`organisations_id` ASC) VISIBLE,
  CONSTRAINT `fk_events_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `pre-projet`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_events_organisations1`
    FOREIGN KEY (`organisations_id`)
    REFERENCES `pre-projet`.`organisations` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`demandes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`demandes` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `events_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_demandes_events_idx` (`events_id` ASC),
  CONSTRAINT `fk_demandes_events`
    FOREIGN KEY (`events_id`)
    REFERENCES `pre-projet`.`events` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `pre-projet`.`actors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`actors` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(225) NOT NULL,
  `event-id` INT NULL,
  `created-at` TIMESTAMP NOT NULL,
  `updated_at` TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
  `demandes_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_actors_demandes1_idx` (`demandes_id` ASC),
  CONSTRAINT `fk_actors_demandes1`
    FOREIGN KEY (`demandes_id`)
    REFERENCES `pre-projet`.`demandes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`categories` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` ENUM('standard', 'vip') NOT NULL,
  `created-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`displacements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`displacements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `gust_complete_name` VARCHAR(45) NOT NULL,
  `gust_adresse` VARCHAR(45) NOT NULL,
  `gust_contact` INT NOT NULL,
  `created-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_displacements_demandes1_idx` (`demandes_id` ASC),
  CONSTRAINT `fk_displacements_demandes1`
    FOREIGN KEY (`demandes_id`)
    REFERENCES `pre-projet`.`demandes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`materiaux`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`materiaux` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `type` VARCHAR(100) NOT NULL,
  `description` VARCHAR(225) NULL,
  `created-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_materiaux_demandes1_idx` (`demandes_id` ASC),
  CONSTRAINT `fk_materiaux_demandes1`
    FOREIGN KEY (`demandes_id`)
    REFERENCES `pre-projet`.`demandes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`location`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`location` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `region` VARCHAR(45) NOT NULL,
  `prefecture` VARCHAR(45) NULL,
  `place_nbre` INT NULL,
  `description` VARCHAR(225) NULL,
  `created-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_location_demandes1_idx` (`demandes_id` ASC),
  CONSTRAINT `fk_location_demandes1`
    FOREIGN KEY (`demandes_id`)
    REFERENCES `pre-projet`.`demandes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`tickets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`tickets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `price` INT NOT NULL,
  `nbre` INT NOT NULL,
  `description` VARCHAR(225) NOT NULL,
  `created-at` TIMESTAMP NOT NULL,
  `updated-at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `demandes_id` INT(11) NOT NULL,
  `categories_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tickets_demandes1_idx` (`demandes_id` ASC),
  INDEX `fk_tickets_categories1_idx` (`categories_id` ASC),
  CONSTRAINT `fk_tickets_demandes1`
    FOREIGN KEY (`demandes_id`)
    REFERENCES `pre-projet`.`demandes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tickets_categories1`
    FOREIGN KEY (`categories_id`)
    REFERENCES `pre-projet`.`categories` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pre-projet`.`sells`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pre-projet`.`sells` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nbre` INT NOT NULL,
  `created-at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated-at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `tickets_id` INT NOT NULL,
  `users_id` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sells_tickets1_idx` (`tickets_id` ASC),
  INDEX `fk_sells_users1_idx` (`users_id` ASC),
  CONSTRAINT `fk_sells_tickets1`
    FOREIGN KEY (`tickets_id`)
    REFERENCES `pre-projet`.`tickets` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sells_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `pre-projet`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `pre-projet` ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
