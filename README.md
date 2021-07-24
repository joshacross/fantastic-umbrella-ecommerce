# Fastastic Umbrella E-Commerce

Fantastic Umbrella E-Commerce is a fully responsive e-commerce store that uses mySQL, Sequelize, and Express.js for it's backend and performs api calls to cover creating, deleting, reading, and updating products in the database. 

## Languages
* Javascript
* mySQL
* Sequelize
* 

## Description
Fantastic Umbrella Ecommerce is an internet retail Ecommerce backend using Express.js API that configures to sequelize to interact with MySQL Database. 

## Video Walkthrough (Coming Soon)

## Languages
* mysql2
* Sequalize
* dotenv package
* Use environment variables to store sensitive data (mySql userName, password, databaseName)
* Schema.sql to create database using MySql Shell Commands

## Functionality
* MySQL Database used to create Product, Product Tag, Tag, and Product Category Models.

* Express API routing to handle product creation requests along with updating, reading, and deleting products, tags, and categories in the MySQL database.

* Product > Category (category can have multiple products, but product can only belong to one category)

* Category has many product models

* Product belongs to many Tag models - using the productTag through model, allow products to have multiple tags and tags have many products

* Tag belongs to many product models

* Foreign key relationships that match respective columns to their respective models.

## Get Started
* Clone Repository to your local directory
* Open up your desired code editor and NPM install to install packages.
* Once your packages have finished installing, type `npm run seeds/index.js`
* Sequelize with link to your MySQL, create models, and import seeds data.
* Once database has been seeded, npm start and a local instance will start at port localhost:3001.
* CRUD operations are handled at localhost:3001/api/
* Insomnia Core and CRUD demo coming soon.