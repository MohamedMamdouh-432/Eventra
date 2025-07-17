# 🎟️ Eventra - Event Management Platform

Eventra is a modern, full-stack Event Management System built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to discover, register, and organize events — whether it's a local meetup, a concert, a tech workshop, or a conference.

## Strategy
* Best Strategy: 
    - Start Backend First
    - Build frontend feature-by-feature as the API becomes available.
    - Deploy All Together

# 🚀 Features

### 👥 User Roles
- **Attendee**: Register for events, view your upcoming schedule
- **Organizer**: Create, edit, and manage events
- **Admin**: Control platform-wide access and analytics

### Interfaces
- User dashboard for events you created or joined
- Admin dashboard for full control

### 🎯 Core Features
- Event creation with image, date, location, and category
- Browse and filter events
- Register (or book tickets) for events
- Email notifications/reminders
- Role-based authentication (JWT)
- Mobile responsive design

### 🌟 Features in Details
    Phase 1: 🔐 User Auth System
        JWT Configuration
        Register
        Login
        Password hashing with bcrypt
        Middleware to protect private routes

    Phase 2: 👤 User Management
        Get current user
        Edit profile
        Role: admin, organizer, attendee

    Phase 3: 📅 Events CRUD
        Organizer can create/edit/delete
        Public can view list/details
        Filters: date, category, keyword

    Phase 4: 📝 Event Registration
        Attendee can register/unregister
        List my registrations
        Capacity check (optional)

    Phase 5: 🧠 Admin Dashboard
        List all users
        Remove abusive events
        Statistics (number of users/events/registrations)

---
## 🧑‍💻 Tech Stack

| Layer         | Technology                     |
|---------------|--------------------------------|
| Frontend      | React.js, React Router, Bootstrap/Material UI |
| State Management    | Context API or Redux Toolkit (optional) |
| Backend       | Node.js, Express.js            |
| Database      | MongoDB + Mongoose             |
| Auth          | JWT (JSON Web Token)           |
| Image Upload  | Cloudinary / Multer            |
| Styling       | Bootstrap / Sass / Styled Components |
| Extras        | Nodemailer (emails), React Datepicker, Toastify, Framer Motion |
---

## 🚀 Project Workflow

| Phase | Description | Tools |
|-------|-------------|-------|
| ✅ Step 1: Plan | Draw wireframes, decide features, define user roles | Figma, Miro, Paper |
| ✅ Step 2: Design Database | Define MongoDB schemas for `User`, `Event`, `Registration`, etc. | Mongoose, MongoDB |
| ✅ Step 3: Build Backend APIs | Auth routes, event CRUD, registration endpoints | Node.js, Express.js |
| ✅ Step 4: Test APIs | Test all routes independently | Postman |
| ✅ Step 5: Scaffold Frontend | Set up React structure, install dependencies | React, React Router |
| ✅ Step 6: Build Pages | Navbar → Home → Events → Event Details → Create/Edit Event | React, Bootstrap/MUI |
| ✅ Step 7: Connect to API | Axios calls to backend, manage state | Axios, Context/Redux |
| ✅ Step 8: UX Polish | Toasts, loaders, validations, animations | Toastify, Framer Motion |
| ✅ Step 9: Auth Logic | Login/Register flow, JWT handling, role-based UI | JWT, React Router DOM |
| ✅ Step 10: Deployment | Deploy backend & frontend, connect env vars | Render, Vercel, Netlify |
