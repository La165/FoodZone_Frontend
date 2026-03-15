# Moonlight MERN E-Commerce Project

A full-stack **MERN (MongoDB, Express, React, Node.js)** e-commerce application with user authentication, password reset, and cart management.  
This project demonstrates a real-world SPA (Single Page Application) with secure backend APIs and responsive frontend.

---
🎯 Live Demo

Frontend: https://food-zone-frontend.vercel.app

## 🌟 Features

- User registration, login, and logout
- Password reset via email
- Product listing with dynamic cart management
- SPA routing with React Router
- RESTful APIs with Express.js
- Responsive UI for desktop and mobile
- JWT-based authentication and secure password hashing

---

## 🛠️ Technologies Used

- **Frontend:** React, React Router, Axios  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Tokens)  
- **Email Service:** Nodemailer or SMTP provider  
- **Deployment:** Vercel (Frontend), Render/Heroku (Backend)  

---

## 📂 Project Structurefrontend/
├─ public/
├─ src/
├─ components/
├─ pages/
├─ Home.jsx
├─ Login.jsx
├─ Cart.jsx
├─ ResetPassword.jsx
├─ App.jsx
└─ index.js
└─ package.json
## 🚀 Installation

### Frontend
```bash
git clone <repo-url>
cd frontend
npm install
npm start       # for development
npm run build   # for production
**Deployment**
Frontend (Vercel)

Make sure vercel.json is set for SPA routing:

{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}


