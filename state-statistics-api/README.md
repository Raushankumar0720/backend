# 🇮🇳 State Statistics Management API

> A complete **REST API** built with **Express.js** to manage statistical data of Indian states using an in-memory JSON array. No database. No authentication. Pure REST.

[![Node.js](https://img.shields.io/badge/Node.js-v22.x-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18-blue)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow)]()

---

## 📌 Table of Contents

- [Folder Structure](#-folder-structure)
- [Tech Stack](#-tech-stack)
- [Setup & Installation](#-setup--installation)
- [Data Structure](#-data-structure)
- [API Routes](#-api-routes)
  - [GET Routes](#-get-routes)
  - [POST Route](#-post-route)
  - [PUT Routes](#-put-routes)
  - [PATCH Routes](#-patch-routes)
  - [DELETE Routes](#-delete-routes)
- [Status Codes](#-status-codes)
- [Key Concepts](#-key-concepts)
- [Links](#-links)

---

## 📁 Folder Structure

```
state-statistics-api/
├── index.js                       ← Entry point (starts the server)
├── package.json                   ← Project metadata & dependencies
├── .gitignore
├── README.md
└── src/
    ├── app.js                     ← Express app + middleware setup
    ├── data/
    │   └── states.js              ← In-memory array (28 Indian states)
    ├── routes/
    │   └── stateRoutes.js         ← All 13 route definitions
    └── controllers/
        └── stateController.js     ← All business logic / handlers
```

---

## 🛠 Tech Stack

| Technology    | Purpose                  |
|---------------|--------------------------|
| **Node.js**   | Runtime environment      |
| **Express.js**| Web framework            |
| **CORS**      | Cross-origin access      |
| **Nodemon**   | Dev auto-reload          |

---

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/state-statistics-api.git
cd state-statistics-api
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start the Server

```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

### 4️⃣ Base URL

```
http://localhost:3000
```

---

## 📦 Data Structure

Each state object follows this exact schema:

```json
{
  "id": 7,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

| Field           | Type     | Description                        |
|-----------------|----------|------------------------------------|
| `id`            | `Number` | Unique identifier (auto-generated) |
| `name`          | `String` | State name                         |
| `population`    | `Number` | Total population                   |
| `literacyRate`  | `Number` | Literacy percentage                |
| `annualBudget`  | `Number` | Annual budget in crores (₹)        |
| `gdp`           | `Number` | State GDP in crores (₹)            |

---

## 📡 API Routes

### ✅ GET Routes

---

#### `GET /states`
Returns the complete list of all states.

**Response — `200 OK`**
```json
[
  {
    "id": 1,
    "name": "Andhra Pradesh",
    "population": 49386799,
    "literacyRate": 67.02,
    "annualBudget": 279279,
    "gdp": 14000000
  },
  ...
]
```

---

#### `GET /states/:id`
Returns a single state by its ID.

**Example**
```
GET /states/7
```

**Response — `200 OK`**
```json
{
  "id": 7,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

**Response — `404 Not Found`**
```json
{
  "message": "State not found"
}
```

---

#### `GET /states/highest-gdp`
Returns the state with the highest GDP (uses `reduce()`).

**Response — `200 OK`**
```json
{
  "id": 14,
  "name": "Maharashtra",
  "population": 112374333,
  "literacyRate": 82.34,
  "annualBudget": 340000,
  "gdp": 35000000
}
```

---

### ✅ POST Route

---

#### `POST /states`
Adds a new state. ID is auto-generated.

**Request Body**
```json
{
  "name": "New State",
  "population": 5000000,
  "literacyRate": 72.50,
  "annualBudget": 50000,
  "gdp": 2000000
}
```

**Response — `201 Created`**
```json
{
  "id": 29,
  "name": "New State",
  "population": 5000000,
  "literacyRate": 72.50,
  "annualBudget": 50000,
  "gdp": 2000000
}
```

---

### ✅ PUT Routes

> PUT **replaces** the entire resource (except `id`).

---

#### `PUT /states/:id`
Replaces the complete state record.

**Example**
```
PUT /states/3
```

**Request Body**
```json
{
  "name": "Assam",
  "population": 32000000,
  "literacyRate": 73.00,
  "annualBudget": 125000,
  "gdp": 5000000
}
```

**Response — `200 OK`** — returns the replaced object  
**Response — `404 Not Found`**

---

#### `PUT /states/:id/budget`
Replaces the `annualBudget` field only.

**Example**
```
PUT /states/4/budget
```

**Request Body**
```json
{
  "annualBudget": 280000
}
```

**Response — `200 OK`** — returns updated state object

---

#### `PUT /states/:id/population`
Replaces the `population` field only.

**Example**
```
PUT /states/4/population
```

**Request Body**
```json
{
  "population": 106000000
}
```

**Response — `200 OK`** — returns updated state object

---

### ✅ PATCH Routes

> PATCH **partially updates** — only provided fields are changed.

---

#### `PATCH /states/:id/literacy`
Updates `literacyRate` only.

**Request Body**
```json
{
  "literacyRate": 85.00
}
```

**Response — `200 OK`** — returns updated state object

---

#### `PATCH /states/:id/gdp`
Updates `gdp` only.

**Request Body**
```json
{
  "gdp": 22000000
}
```

**Response — `200 OK`** — returns updated state object

---

#### `PATCH /states/:id`
Updates any combination of fields without affecting others.

**Example**
```
PATCH /states/5
```

**Request Body**
```json
{
  "annualBudget": 130000,
  "literacyRate": 71.00
}
```

**Response — `200 OK`**
```json
{
  "id": 5,
  "name": "Chhattisgarh",
  "population": 25545198,
  "literacyRate": 71.00,
  "annualBudget": 130000,
  "gdp": 4000000
}
```

---

### ✅ DELETE Routes

---

#### `DELETE /states/:id`
Deletes a state by its ID.

**Example**
```
DELETE /states/22
```

**Response — `204 No Content`**  
**Response — `404 Not Found`**

---

#### `DELETE /states/name/:stateName`
Deletes a state by name. **Case-insensitive.**

**Example**
```
DELETE /states/name/goa
DELETE /states/name/GOA      ← also works
DELETE /states/name/Goa      ← also works
```

**Response — `204 No Content`**  
**Response — `404 Not Found`**

---

#### `DELETE /states/low-literacy/:percentage`
Deletes **all** states where `literacyRate` is less than the given value.

**Example**
```
DELETE /states/low-literacy/70
```
> Deletes all states with `literacyRate < 70`

**Response — `200 OK`**
```json
{
  "deletedCount": 4
}
```

---

## 📊 Status Codes

| Code  | Meaning          | When Used                              |
|-------|------------------|----------------------------------------|
| `200` | OK               | Successful GET, PUT, PATCH, DELETE (low-literacy) |
| `201` | Created          | Successful POST                        |
| `204` | No Content       | Successful DELETE by ID or name        |
| `404` | Not Found        | State ID or name does not exist        |

---

## 🔑 Key Concepts

| Concept                  | Where Applied                                          |
|--------------------------|--------------------------------------------------------|
| **REST Architecture**    | Proper HTTP methods and resource naming                |
| **Route Parameters**     | `/:id`, `/name/:stateName`, `/low-literacy/:percentage`|
| **PUT vs PATCH**         | PUT replaces fully; PATCH updates partially            |
| **In-place Mutation**    | `splice()` to mutate the original array reference      |
| **Auto ID Generation**   | `Math.max(...ids) + 1`                                 |
| **Case-Insensitive Match**| `.toLowerCase()` in delete by name                   |
| **Aggregation**          | `reduce()` for highest GDP computation                 |
| **Middleware Order**     | `cors()` → `express.json()` → routes                  |
| **Route Order**          | Static paths before dynamic `/:id` to avoid conflicts  |

---

## 🔗 Links

| Resource               | URL                                                                 |
|------------------------|---------------------------------------------------------------------|
| 📂 GitHub Repository   | [https://github.com/Raushankumar0720/backend](https://github.com/Raushankumar0720/backend) |
| 📬 Postman Docs        | [View Collection](https://documenter.getpostman.com/your-link)      |
| 🌐 Live API (Render)   | [state-statistics-api.onrender.com](https://state-statistics-api.onrender.com) |

---

## 👨‍💻 Author

**Your Name**  
Raushan kumar | Backend Development  
GitHub: [Raushankumar0720](https://github.com/Raushankumar0720)

---

> ⚠️ **Note:** This API uses an in-memory array. All data resets when the server restarts.