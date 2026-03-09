# Finance Tracker App

A full-stack finance tracking application built with **FastAPI** (backend) and **React** (frontend). Track income and expenses with a clean, responsive interface.

---

## Features

Add income or expense transactions with:

- Amount
- Category
- Description
- Date

View all transactions in a styled list, with a modern and responsive React frontend backed by a fast FastAPI server. CORS is handled out of the box for frontend-backend communication.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | FastAPI, SQLAlchemy, SQLite |
| Frontend | React, Axios, Bootstrap |
| Data Validation | Pydantic |
| Middleware | CORS |

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/transactions/` | Add a new transaction |
| `GET` | `/transactions/` | Get all transactions |

---

## Folder Structure
```
Finance-Tracker-App/
│
├── FastAPI/                  # Backend
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   └── finance.db
│
└── React/finance-app/        # Frontend
    ├── src/
    ├── public/
    └── package.json
```

---

## Usage

### 1. Start the Backend
```bash
cd FastAPI
uvicorn main:app --reload
```

Server runs at `http://127.0.0.1:8000`

### 2. Start the Frontend
```bash
cd React/finance-app
npm install
npm start
```

App runs at `http://localhost:3000`

> Make sure the backend is running before opening the frontend.
