# Labecommerce API Documentation

Welcome to the API documentation for the Express server.
Link to documentation https://documenter.getpostman.com/view/21558010/2sA3JRYyQi

## Table of Contents
1. [Getting Started](#getting-started)
2. [Routes](#routes)
    - [GET /ping](#get-ping)
    - [GET /users](#get-users)
    - [GET /products](#get-products)
    - [GET /products/search](#get-products-search)
    - [POST /users](#post-users)
    - [POST /products](#post-products)
    - [DELETE /users/:id](#delete-usersid)
    - [DELETE /products/:id](#delete-productsid)
    - [PUT /products/:id](#put-productsid)

## Getting Started
1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start the server using `npm start`.

## Routes

### GET /ping
- Description: A simple ping route to check if the server is running.
- Usage: Make a GET request to `/ping`.
- Response: Returns "Pong!" if the server is running.

### GET /users
- Description: Get all users from the database.
- Usage: Make a GET request to `/users`.
- Response: Returns an array of user objects.

### GET /products
- Description: Get all products from the database.
- Usage: Make a GET request to `/products`.
- Response: Returns an array of product objects.

### GET /products/search
- Description: Search for products by name.
- Parameters:
    - `name` (string): The name of the product to search for.
- Usage: Make a GET request to `/products/search?name=your_search_term`.
- Response: Returns an array of product objects matching the search term.

### POST /users
- Description: Create a new user.
- Body Parameters:
    - `id` (string): The ID of the user.
    - `name` (string): The name of the user.
    - `email` (string): The email of the user.
    - `password` (string): The password of the user.
- Usage: Make a POST request to `/users` with a JSON body containing the user data.
- Response: Returns a success message if the user is created successfully.

### POST /products
- Description: Create a new product.
- Body Parameters:
    - `id` (string): The ID of the product.
    - `name` (string): The name of the product.
    - `price` (number): The price of the product.
    - `description` (string): The description of the product.
    - `imageUrl` (string): The URL of the product image.
- Usage: Make a POST request to `/products` with a JSON body containing the product data.
- Response: Returns a success message if the product is created successfully.

### DELETE /users/:id
- Description: Delete a user by ID.
- Path Parameters:
    - `id` (string): The ID of the user to delete.
- Usage: Make a DELETE request to `/users/:id`.
- Response: Returns a success message if the user is deleted successfully.

### DELETE /products/:id
- Description: Delete a product by ID.
- Path Parameters:
    - `id` (string): The ID of the product to delete.
- Usage: Make a DELETE request to `/products/:id`.
- Response: Returns a success message if the product is deleted successfully.

### PUT /products/:id
- Description: Edit a product by ID.
- Path Parameters:
    - `id` (string): The ID of the product to edit.
- Body Parameters: (Optional)
    - `id` (string): The new ID of the product.
    - `name` (string): The new name of the product.
    - `price` (number): The new price of the product.
    - `description` (string): The new description of the product.
    - `imageUrl` (string): The new URL of the product image.
- Usage: Make a PUT request to `/products/:id` with a JSON body containing the fields to update.
- Response: Returns a success message if the product is edited successfully.

