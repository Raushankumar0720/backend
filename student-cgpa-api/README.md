# Student CGPA REST API

## Objective
A RESTful API built with Express.js to manage student academic performance records using only **GET routes**.

## Routes Implemented
- GET /students → All students
- GET /students/topper → Highest CGPA student
- GET /students/average → Average CGPA
- GET /students/count → Total students
- GET /students/:id → Student by ID
- GET /students/branch/:branchName → Students by branch

## Sample API URLs
- https://student-cgpa-api.onrender.com/students
- https://student-cgpa-api.onrender.com/students/topper
- https://student-cgpa-api.onrender.com/students/average

## Steps to Run Locally
```bash
git clone https://github.com/username/student-cgpa-api
cd student-cgpa-api
npm install
npm start