CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
   id INT( 11 ) AUTO_INCREMENT NOT NULL,
   burger_name VARCHAR( 255) NOT NULL,
   devoured BOOLEAN NOT NULL DEFAULT false,
   removed BOOLEAN NOT NULL DEFAULT false,
   created_at TIMESTAMP NOT NULL,
   PRIMARY KEY ( id )
);