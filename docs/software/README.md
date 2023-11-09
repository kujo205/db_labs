# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

``` sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema opinio
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `opinio` ;

-- -----------------------------------------------------
-- Schema opinio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `opinio` DEFAULT CHARACTER SET utf8 ;
USE `opinio` ;

-- -----------------------------------------------------
-- Table `opinio`.`Poll`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Poll` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Poll` (
  `id` INT NOT NULL,
  `title` MEDIUMTEXT NOT NULL,
  `description` LONGTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Question`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Question` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Question` (
  `id` INT NOT NULL,
  `type` MEDIUMTEXT NOT NULL,
  `text` LONGTEXT NOT NULL,
  `Poll_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Poll_id`),
  INDEX `fk_Question_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Answer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Answer` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Answer` (
  `id` INT NOT NULL,
  `field` BLOB NOT NULL,
  `Question_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Question_id`),
  INDEX `fk_Answer_Question_idx` (`Question_id` ASC) VISIBLE,
  CONSTRAINT `fk_Answer_Question`
    FOREIGN KEY (`Question_id`)
    REFERENCES `opinio`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Role` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Role` (
  `id` INT NOT NULL,
  `name` TINYTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`User`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`User` ;

CREATE TABLE IF NOT EXISTS `opinio`.`User` (
  `id` INT NOT NULL,
  `mail` MEDIUMTEXT NOT NULL,
  `password` MEDIUMTEXT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  `age` INT NULL,
  `gender` MEDIUMTEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Grant` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Grant` (
  `id` INT ZEROFILL NOT NULL,
  `assignedAt` DATE NOT NULL,
  `Role_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  `Answer_id` INT NULL,
  `Answer_Question_id` INT NULL,
  `Poll_id` INT NULL,
  PRIMARY KEY (`id`, `Role_id`, `User_id`),
  INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
  INDEX `fk_Grant_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Grant_Answer1_idx` (`Answer_id` ASC, `Answer_Question_id` ASC) VISIBLE,
  INDEX `fk_Grant_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `opinio`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `opinio`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_Answer1`
    FOREIGN KEY (`Answer_id` , `Answer_Question_id`)
    REFERENCES `opinio`.`Answer` (`id` , `Question_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`State`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`State` ;

CREATE TABLE IF NOT EXISTS `opinio`.`State` (
  `id` INT NOT NULL,
  `text` LONGTEXT NOT NULL,
  `type` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Action`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Action` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Action` (
  `id` INT NOT NULL,
  `date` DATE NOT NULL,
  `Poll_id` INT NOT NULL,
  `Grant_id` INT ZEROFILL NOT NULL,
  `State_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Poll_id`, `Grant_id`, `State_id`),
  INDEX `fk_Action_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  INDEX `fk_Action_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  INDEX `fk_Action_State1_idx` (`State_id` ASC) VISIBLE,
  CONSTRAINT `fk_Action_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `opinio`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_State1`
    FOREIGN KEY (`State_id`)
    REFERENCES `opinio`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Specialty`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Specialty` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Specialty` (
  `id` INT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`Qualification`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`Qualification` ;

CREATE TABLE IF NOT EXISTS `opinio`.`Qualification` (
  `id` INT NOT NULL,
  `level` INT NOT NULL,
  `User_id` INT NOT NULL,
  `Specialty_id` INT NOT NULL,
  PRIMARY KEY (`id`, `User_id`, `Specialty_id`),
  INDEX `fk_Qualification_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Qualification_Specialty1_idx` (`Specialty_id` ASC) VISIBLE,
  CONSTRAINT `fk_Qualification_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `opinio`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Qualification_Specialty1`
    FOREIGN KEY (`Specialty_id`)
    REFERENCES `opinio`.`Specialty` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `opinio`.`EarnedMoney`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `opinio`.`EarnedMoney` ;

CREATE TABLE IF NOT EXISTS `opinio`.`EarnedMoney` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NOT NULL,
  `amount` INT NOT NULL,
  `tookAway` TINYINT NOT NULL,
  `User_id` INT NOT NULL,
  `Poll_id` INT NOT NULL,
  PRIMARY KEY (`id`, `User_id`, `Poll_id`),
  INDEX `fk_EarnedMoney_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_EarnedMoney_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_EarnedMoney_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `opinio`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_EarnedMoney_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `opinio`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

## RESTfull сервіс для управління даними

