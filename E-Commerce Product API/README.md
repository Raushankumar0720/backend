# E-Commerce Product API 

# 🎯 Objective
Develop a RESTful API using Express.js that manages product listings for an e-commerce platform.
The API uses an in-memory JSON array (no database) and supports CRUD-like operations with proper REST principles and HTTP status codes.

# 🛠️ Tech Stack
- Node.js
- Express.js
- CORS Middleware
- In-memory JSON array (no external DB)

# 📂 Project Structure
backend/
- │── server.js        # Main application file
- │── README.md        # Documentation
- │── package.json     # Dependencies



# 📌 Features
- 3 GET routes → Fetch products
- 1 POST route → Add new product
- 3 PUT routes → Update product details
- Proper HTTP status codes (200, 201, 404)
- Clean RESTful design
- No authentication, no validation libraries, no database

# 📑 API Endpoints
🔹 GET Routes
- GET /products
→ Returns all products.
- GET /products/:id
→ Returns product by ID.
→ 404 if not found.
- GET /products/category/:categoryName
→ Returns products filtered by category.
→ Empty array if none found.

🔹 POST Route
- POST /products
→ Adds a new product.
→ Auto-generates ID.
→ Returns 201 with created product.
Sample Request:
{
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}


Sample Response:
{
  "id": 6,
  "name": "Bluetooth Speaker",
  "category": "Electronics",
  "price": 2999,
  "stock": 20,
  "rating": 4.6
}



🔹 PUT Routes
- PUT /products/:id
→ Replace entire product (except ID).
→ Requires full object in body.
→ 404 if not found.
Body Example:
{
  "name": "Sports Shoes",
  "category": "Footwear",
  "price": 2799,
  "stock": 35,
  "rating": 4.7
}



- PUT /products/:id/stock
→ Update only stock value.
→ 404 if not found.
Body Example:
{
  "stock": 60
}



- PUT /products/:id/price
→ Update only price.
→ 404 if not found.
Body Example:
{
  "price": 1299
}

### Render deployed URL 
- https://backend-8-4e3p.onrender.com

▶️ Steps to Run Locally
```bash
git clone https://github.com/Raushankumar0720/backend
cd backend
npm install
node server.js


Server will run on:
http://localhost:5000




