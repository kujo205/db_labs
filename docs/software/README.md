# Реалізація інформаційного та програмного забезпечення

## SQL-скрипт для створення на початкового наповнення бази даних

``` sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Role` (
  `id` INT NOT NULL,
  `name` TINYTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `id` INT NOT NULL,
  `mail` MEDIUMTEXT NOT NULL,
  `password` MEDIUMTEXT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  `age` INT NULL,
  `gender` MEDIUMTEXT NULL,
  `earnedMoney` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Grant`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Grant` (
  `id` INT ZEROFILL NOT NULL,
  `assignedAt` DATE NOT NULL,
  `Role_id` INT NOT NULL,
  `User_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Role_id`, `User_id`),
  INDEX `fk_Grant_Role1_idx` (`Role_id` ASC) VISIBLE,
  INDEX `fk_Grant_User1_idx` (`User_id` ASC) VISIBLE,
  CONSTRAINT `fk_Grant_Role1`
    FOREIGN KEY (`Role_id`)
    REFERENCES `mydb`.`Role` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Grant_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Poll`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Poll` (
  `id` INT NOT NULL,
  `title` MEDIUMTEXT NOT NULL,
  `description` LONGTEXT NOT NULL,
  `Grant_id` INT ZEROFILL NOT NULL,
  PRIMARY KEY (`id`, `Grant_id`),
  INDEX `fk_Poll_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  CONSTRAINT `fk_Poll_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `mydb`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Question`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Question` (
  `id` INT NOT NULL,
  `type` MEDIUMTEXT NOT NULL,
  `text` LONGTEXT NOT NULL,
  `Poll_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Poll_id`),
  INDEX `fk_Question_Poll1_idx` (`Poll_id` ASC) VISIBLE,
  CONSTRAINT `fk_Question_Poll1`
    FOREIGN KEY (`Poll_id`)
    REFERENCES `mydb`.`Poll` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Answer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Answer` (
  `id` INT NOT NULL,
  `field` BLOB NOT NULL,
  `Question_id` INT NOT NULL,
  `Grant_id` INT ZEROFILL NOT NULL,
  PRIMARY KEY (`id`, `Question_id`, `Grant_id`),
  INDEX `fk_Answer_Question_idx` (`Question_id` ASC) VISIBLE,
  INDEX `fk_Answer_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  CONSTRAINT `fk_Answer_Question`
    FOREIGN KEY (`Question_id`)
    REFERENCES `mydb`.`Question` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Answer_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `mydb`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`State`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`State` (
  `id` INT NOT NULL,
  `text` LONGTEXT NOT NULL,
  `type` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Action`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Action` (
  `id` INT NOT NULL,
  `date` DATE NOT NULL,
  `Poll_id` INT NOT NULL,
  `Poll_Grant_id` INT ZEROFILL NOT NULL,
  `Grant_id` INT ZEROFILL NOT NULL,
  `State_id` INT NOT NULL,
  PRIMARY KEY (`id`, `Poll_id`, `Poll_Grant_id`, `Grant_id`, `State_id`),
  INDEX `fk_Action_Poll1_idx` (`Poll_id` ASC, `Poll_Grant_id` ASC) VISIBLE,
  INDEX `fk_Action_Grant1_idx` (`Grant_id` ASC) VISIBLE,
  INDEX `fk_Action_State1_idx` (`State_id` ASC) VISIBLE,
  CONSTRAINT `fk_Action_Poll1`
    FOREIGN KEY (`Poll_id` , `Poll_Grant_id`)
    REFERENCES `mydb`.`Poll` (`id` , `Grant_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_Grant1`
    FOREIGN KEY (`Grant_id`)
    REFERENCES `mydb`.`Grant` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Action_State1`
    FOREIGN KEY (`State_id`)
    REFERENCES `mydb`.`State` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Specialty`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Specialty` (
  `id` INT NOT NULL,
  `name` MEDIUMTEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Qualification`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Qualification` (
  `id` INT NOT NULL,
  `level` INT NOT NULL,
  `User_id` INT NOT NULL,
  `Specialty_id` INT NOT NULL,
  PRIMARY KEY (`id`, `User_id`, `Specialty_id`),
  INDEX `fk_Qualification_User1_idx` (`User_id` ASC) VISIBLE,
  INDEX `fk_Qualification_Specialty1_idx` (`Specialty_id` ASC) VISIBLE,
  CONSTRAINT `fk_Qualification_User1`
    FOREIGN KEY (`User_id`)
    REFERENCES `mydb`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Qualification_Specialty1`
    FOREIGN KEY (`Specialty_id`)
    REFERENCES `mydb`.`Specialty` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
```

- RESTfull сервіс для управління даними

