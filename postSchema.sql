-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Room'
-- 
-- ---

DROP TABLE IF EXISTS `Room`;
		
CREATE TABLE Room (
  id INTEGER NOT NULL,
  Title VARCHAR NOT NULL,
  City VARCHAR NOT NULL,
  AvgRatings DECIMAL NOT NULL,
  TotalRatings INTEGER NOT NULL,
  PropertyType VARCHAR NOT NULL,
  plusVerified VARCHAR NOT NULL,
  Price VARCHAR NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IMAGES (
  imgID INTEGER NOT NULL,
  roomID INTEGER NOT NULL,
  imgUrl VARCHAR NOT NULL,
  PRIMARY KEY (imgID)
);
  `State` VARCHAR NULL DEFAULT NULL,
  `Listing_ID` INTEGER NULL DEFAULT NULL,
  `Img_ID` INTEGER NULL DEFAULT NULL,
-- ---
-- Table 'Image URL'
-- 
-- ---

DROP TABLE IF EXISTS `Image URL`;
		
CREATE TABLE `Image URL` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `url` VARCHAR NULL DEFAULT NULL,
  `Room_ID` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`Room_ID`)
);

-- ---
-- Table 'Listing'
-- 
-- ---

DROP TABLE IF EXISTS `Listing`;
		
CREATE TABLE `Listing` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `Listing_ID` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`, `Listing_ID`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Room` ADD FOREIGN KEY (Listing_ID) REFERENCES `Listing` (`Listing_ID`);
ALTER TABLE `Image URL` ADD FOREIGN KEY (Room_ID) REFERENCES `Room` (`Img_ID`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Room` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Image URL` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Listing` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Room` (`id`,`Title`,`City`,`State`,`Country`,`AvgRatings`,`TotalRatings`,`PropertyType`,`plusVerified`,`Price`,`Listing_ID`,`Img_ID`) VALUES
-- ('','','','','','','','','','','','');
-- INSERT INTO `Image URL` (`id`,`url`,`Room_ID`) VALUES
-- ('','','');
-- INSERT INTO `Listing` (`id`,`Listing_ID`) VALUES
-- ('','');