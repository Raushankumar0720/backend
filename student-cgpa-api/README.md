 # 🎓 Student CGPA REST API

> A complete **REST API** built with **Express.js** to manage student academic performance records using in-memory JSON array. No database. No authentication. Pure REST.

[![Node.js](https://img.shields.io/badge/Node.js-v22.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow?style=for-the-badge)]()
[![REST API](https://img.shields.io/badge/REST-API-blue?style=for-the-badge)]()
[![Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://backend-7-de2t.onrender.com)

---

## 📌 Table of Contents

- [📁 Folder Structure](#-folder-structure)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Setup & Installation](#-setup--installation)
- [📦 Data Structure](#-data-structure)
- [📡 API Routes](#-api-routes)
- [📊 Status Codes](#-status-codes)
- [🔗 Links](#-links)
- [👨‍💻 Author](#-author)

---

## 📁 Folder Structure

```
student-cgpa-api/
├── index.js                       ← Entry point (starts the server)
├── package.json                   ← Project metadata & dependencies
├── package-lock.json              ← Locked dependency versions
├── .gitignore
├── README.md
└── src/
    ├── app.js                     ← Express app + middleware setup
    ├── data/
    │   └── students.js            ← In-memory array of student records
    ├── routes/
    │   └── studentRoutes.js       ← All route definitions
    └── controllers/
        └── studentController.js   ← All business logic / handlers
```

---

## 🛠 Tech Stack

| Technology     | Version  | Purpose                  |
|----------------|----------|--------------------------|
| **Node.js**    | v22.x    | Runtime environment      |
| **Express.js** | v4.18    | Web framework            |
| **CORS**       | v2.8.5   | Cross-origin access      |
| **Nodemon**    | v3.x     | Dev auto-reload          |

---

## 🚀 Setup & Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Raushankumar0720/backend.git
cd student-cgpa-api
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

Each student object follows this exact schema:

```json
{
  "id": 1,
  "name": "Raushan Kumar",
  "branch": "Computer Science",
  "semester": 4,
  "cgpa": 9.1
}
```

| Field        | Type     | Description                         |
|--------------|----------|-------------------------------------|
| `id`         | `Number` | Unique identifier                   |
| `name`       | `String` | Student full name                   |
| `branch`     | `String` | Engineering branch                  |
| `semester`   | `Number` | Current semester                    |
| `cgpa`       | `Number` | Cumulative GPA (out of 10)          |

---

## 📡 API Routes

All routes are **GET only**. No data modification is allowed.

| Method | Route                          | Description                        |
|--------|--------------------------------|------------------------------------|
| `GET`  | `/`                            | Root route — API health check      |
| `GET`  | `/students`                    | Get all students                   |
| `GET`  | `/students/topper`             | Get student with highest CGPA      |
| `GET`  | `/students/average`            | Get average CGPA of all students   |
| `GET`  | `/students/count`              | Get total number of students       |
| `GET`  | `/students/:id`                | Get single student by ID           |
| `GET`  | `/students/branch/:branchName` | Get all students of a branch       |

---

#### 🔹 `GET /`

Root route — confirms the API is running.

**Response — `200 OK`**

```json
{
  "message": "Welcome to Student CGPA API"
}
```

---

#### 🔹 `GET /students`

Returns the complete list of all students.

**Response — `200 OK`**

```json
[
  {
    "id": 1,
    "name": "Raushan Kumar",
    "branch": "Computer Science",
    "semester": 4,
    "cgpa": 9.1
  },
  {
    "id": 2,
    "name": "Amit Singh",
    "branch": "Mechanical",
    "semester": 3,
    "cgpa": 7.8
  }
]
```

---

#### 🔹 `GET /students/topper`

Returns the student with the highest CGPA. Uses `reduce()` internally.

**Response — `200 OK`**

```json
{
  "id": 1,
  "name": "Raushan Kumar",
  "branch": "Computer Science",
  "semester": 4,
  "cgpa": 9.1
}
```

---

#### 🔹 `GET /students/average`

Returns the average CGPA of all students.

**Response — `200 OK`**

```json
{
  "averageCGPA": 8.45
}
```

---

#### 🔹 `GET /students/count`

Returns the total number of students in the system.

**Response — `200 OK`**

```json
{
  "totalStudents": 10
}
```

---

#### 🔹 `GET /students/:id`

Returns a single student by their numeric ID.

**Example Request**

```
GET /students/3
```

**Response — `200 OK`**

```json
{
  "id": 3,
  "name": "Priya Sharma",
  "branch": "Electronics",
  "semester": 5,
  "cgpa": 8.6
}
```

**Response — `404 Not Found`**

```json
{
  "message": "Student not found"
}
```

---

#### 🔹 `GET /students/branch/:branchName`

Returns all students belonging to the given branch. **Case-insensitive.**

**Example Requests**

```
GET /students/branch/computer science
GET /students/branch/Computer Science
GET /students/branch/COMPUTER SCIENCE
```

> All three above produce the same result ✅

**Response — `200 OK`**

```json
[
  {
    "id": 1,
    "name": "Raushan Kumar",
    "branch": "Computer Science",
    "semester": 4,
    "cgpa": 9.1
  }
]
```

**Response — `404 Not Found`**

```json
{
  "message": "No students found in this branch"
}
```

---

## 📊 Status Codes

| Code  | Meaning       | When Used                              |
|-------|---------------|----------------------------------------|
| `200` | OK            | Successful GET request                 |
| `404` | Not Found     | Student ID or branch does not exist    |

---

## 🔗 Links

| Resource              | URL                                                                                  |
|-----------------------|--------------------------------------------------------------------------------------|
| 📂 GitHub Repository  | [github.com/Raushankumar0720/backend](https://github.com/Raushankumar0720/backend)   |
| 📬 Postman Docs       | [View Collection](https://documenter.getpostman.com/view/50841514/2sBXcGCynW)        |
| 🌐 Live API (Render)  | [backend-7-de2t.onrender.com](https://backend-7-de2t.onrender.com)                   |

### 🧪 Sample Live URLs

```
GET https://backend-7-de2t.onrender.com
GET https://backend-7-de2t.onrender.com/students
GET https://backend-7-de2t.onrender.com/students/topper
GET https://backend-7-de2t.onrender.com/students/average
GET https://backend-7-de2t.onrender.com/students/count
GET https://backend-7-de2t.onrender.com/students/1
GET https://backend-7-de2t.onrender.com/students/branch/computer science
```

---

## 👨‍💻 Author

**Raushan Kumar**  
Coding Gita Student | Backend Development  
GitHub: [@Raushankumar0720](https://github.com/Raushankumar0720)

---

> ⚠️ **Note:** This API uses an **in-memory array**. All data resets when the server restarts. No database is used.