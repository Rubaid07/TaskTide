# 🎯 TaskTide – Freelance Task Marketplace

TaskTide is a freelance task marketplace where users can post short freelance jobs, browse available opportunities, and freelancers can bid based on skills, budget, and deadlines. The system is built using the MERN stack and secured with Firebase and JWT-based authentication.

---

## 🌐 Live Links

- 🔗 [Live site](https://tasktide07.web.app)

## 🌐 Server side Repo Links

- 🔗 (https://github.com/Rubaid07/TaskTide-server)
---

## 🧠 Project Overview

This platform enables two types of users:
- **Clients**: Can post, update, or delete tasks and monitor bids.
- **Freelancers**: Can browse all available tasks and place bids.

All task operations (Add, Update, Delete) are fully functional. Tasks are sorted based on deadline, and bid counters update in real-time. Routes like Add Task, My Tasks, and Task Details are protected.

---

## 🚀 Main Features

- 📋 Add new tasks with title, budget, deadline, category, and description  
- ✏️ Update and ❌ Delete own tasks from My Posted Tasks page  
- 📄 Task details view (private route)  
- 🔍 Browse tasks sorted by closest deadline  
- 📊 Bidding system with dynamic bid count  
- 📱 Fully responsive design for mobile, tablet, and desktop  

---

## 🛠️ Tech Stack

### 💻 Frontend
- React
- React Router DOM
- Tailwind CSS
- DaisyUI
- Firebase Authentication

### 🖥️ Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

---

## 📦 Dependencies

```bash
# Frontend
"axios"
"firebase"
"react-router-dom"
"react-toastify"
"sweetalert2"
"daisyui"
"react-icons"
"react-slick"
"slick-carousel"
"react-simple-typewriter"
"react-countup"

# Backend
"cors"
"dotenv"
"express"
"mongoose"
"jsonwebtoken"
```

---

# How to Run This Project Locally

🔧 Prerequisites:
- Node.js and npm must be installed
- MongoDB Atlas URI (or local MongoDB)
- Firebase project with Email/Password & Google login enabled

🖥️ Backend Setup:
1. Clone the server repo:
   git clone https://github.com/Rubaid07/TaskTide-server.git
   cd tasktide-server
   npm install

2. Create a `.env` file in the root of `server/` and add:
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key

3. Run the server:
   npm run dev

💻 Client Setup:
1. Clone the client repo:
   git clone https://github.com/Rubaid07/TaskTide.git
   cd tasktide-client
   npm install

2. Create a `.env` file in the root of `client/` and add:
   VITE_apiKey=http://localhost:5000
   VITE_authDomain=your_project.firebaseapp.com
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_sender_id
   VITE_appId=your_app_id

3. Run the client:
   npm run dev

🟢 Client will run on: http://localhost:5173
🟢 Server will run on: http://localhost:3000
