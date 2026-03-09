# Finance Tracker App

A full-stack finance tracking application built with **FastAPI (backend)** and **React (frontend)**. Track income and expenses with a clean, responsive interface.

---

## Features

- Add income or expense transactions with:
  - Amount
  - Category
  - Description
  - Date
- View all transactions in a styled list
- Modern and responsive React frontend
- Fast and secure FastAPI backend
- Handles CORS for frontend-backend integration

---

## Tech Stack
Layer: Technology
Backend: FastAPI, SQLAlchemy, SQLite
Frontend: React, Axios, Bootstrap
Data Validation: Pydantic
Middleware: CORS

## API Endpoints
Method	Endpoint	Description
POST	/transactions/	Add a new transaction
GET	/transactions/	Get all transactions

---
## Folder Structure

Finance-Tracker-App/
│
├── FastAPI/             # Backend
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   └── finance.db
│
└── React/finance-app/   # Frontend
    ├── src/
    ├── public/
    └── package.json

---

## Usage
## Backend
- uvicorn main:app --reload
- http://127.0.0.1:8000

## Frontend
-npm start
-http://localhost:3000
