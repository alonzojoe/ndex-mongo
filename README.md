# Node.js Express MongoDB REST API Project

This project is a REST API built using Node.js, Express, and MongoDB. It provides endpoints to manage products.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alonzojoe/ndex-mongo.git

   ```

2. **Clone the repository:**

   ```bash
   npm install

   ```

3. **Create a .env file in the root directory of the project and specify your environment variables:**

   ```plaintext
   PORT=3000
   MONGODB_URL=mongodb://localhost:27017/dbname

   ```

4. \*\*Start the server (using nodemon setup in package.json) by running `npm run dev`

## API Endpoints

```plaintext
GET /api/v1/products: Get all products.
GET /api/v1/products/:id: Get a product by ID.
POST /api/v1/products: Create a new product. (Request body should contain JSON data with product details.)
PUT /api/v1/products/:id: Update a product by ID. (Request body should contain JSON data with updated product details.)
DELETE /api/v1/products/:id: Delete a product by ID.
```
