# Student CGPA REST API

## Objective
A RESTful API built with Express.js to manage student academic performance records using only **GET routes**.

## Routes Implemented
- GET  /  -> Root route 
- GET /students → All students
- GET /students/topper → Highest CGPA student
- GET /students/average → Average CGPA
- GET /students/count → Total students
- GET /students/:id → Student by ID
- GET /students/branch/:branchName → Students by branch

## Sample API URLs
- https://backend-7-de2t.onrender.com/students
- https://backend-7-de2t.onrender.com/students/topper
- https://backend-7-de2t.onrender.com/students/average

## Render deployed url
- https://backend-7-de2t.onrender.com

## Steps to Run Locally
```bash
git clone https://github.com/Raushankumar0720/backend.git
cd student-cgpa-api
npm install
npm start