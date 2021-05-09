# fantastic-umbrella-ecommerce

* mysql2
* Sequalize
* dotenv package
* Use environment variables to store sensitive data (mySql userName, password, databaseName)
* Schema.sql to create database using MySql Shell Commands

GIVEN a functional Express.js API

* WHEN I add my database name, MySQL username, and MySQL password to an environment variable file

* THEN I am able to connect to a database using Sequelize

* WHEN I enter schema and seed commands

* THEN a development database is created and is seeded with test data

* WHEN I enter the command to invoke the application
* THEN my server is started and the Sequelize models are synced to the MySQL database
* WHEN I open API GET routes in Insomnia Core for categories, products, or tags
* THEN the data for each of these routes is displayed in a formatted JSON
* WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
* THEN I am able to successfully create, update, and delete data in my database

Database Models
* Category > id & category name

* Product > id, product_name, price, stock, category_id

* Tag > id, tag_name

* ProductTag > id, product_id, tag_id

Associations
* Product > Category (category can have multiple products, but product can only belong to one category)

* Category has many product models

* Product belongs to many Tag models - using the productTag through model, allow products to have multiple tags and tags have many products

* Tag belongs to many product models

Hint
* Make certain you setup foreign key relationships that match the column we created in the respective models

---
Fill out API Routes to Perform RESTful CRUD Operations
* product_routes.js, tag-routes.js, and category-routes.js 

Note : functionality for creating many-to-many relationship for products is already complete

Hint: Look at module projects code for syntax help

Hint: Use models column definitions to figure out what req.body will be for POST and PUT routes

---
After creating the models and routes, run `npm run seed` to seed data to your database so that you can test your routes

---
Sync Sequelize to the Database on Server Start
* Create the code needed in server.js to sync the sequelize models to the MySQL database on server start

---
Deliverables:
1.) Github Repo
2.) Walkthrough Video
* demonstrates functionality of the ecommerce backend 
* technical acceptace criteria - MySQL & Sequelize, Dotenv Package to store senssitive data, syncs sequelize to MySQL database on server start, column definitions for all four models, model associations
* How to seed the database from the command line
* How to start the application's server
* GET route demonstration for all categories, products and tags being tested in Insomnia Core
* Get Route Demo for a single category, product and tag being tested
* POST, PUT, and DELETE routes for categories, products and tags

The first animation shows GET routes to return all categories, all products, and all tags being tested in Insomnia Core:
<img src= "
assets/images/13-orm-homework-demo-01.gif">

The second animation shows GET routes to return a single category, a single product, and a single tag being tested in Insomnia Core:
<img src="
assets/images/13-orm-homework-demo-02.gif">

The final animation shows the POST, PUT, and DELETE routes for categories being tested in Insomnia Core:
<img src="
assets/images/13-orm-homework-demo-03.gif">