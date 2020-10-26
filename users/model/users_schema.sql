DROP DATABASE IF EXISTS membership_db;

CREATE DATABASE membership_db;

USE membership_db;

CREATE TABLE users (
  id INT AUTO_INVREMENT NOT NULL,
  username VARCHAR(25) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE blogs (
  id INT AUTO_INCREMENT NOT NULL,
  blog VARCHAR(255) NOT NULL,
  userID INT references users(id),
  PRIMARY KEY (id)
)