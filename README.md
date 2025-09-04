# 🎟️ Eventra - Event Management Platform

### Eventra is a modern, full-stack Event Management System built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to discover, register, and organize events — whether it's a local meetup, a concert, a tech workshop, or a conference.

## Ⓜ️ Modules
    Authentication  Communities
    Users           Chats  
    Events          Notifications
    Registration    Tickets

## 🚀 Features

    👥 User Roles
    - Attendee: Register for events, view your upcoming schedule
    - Organizer: Create, edit, and manage events
    - Admin: Control platform-wide access and analytics

    📄 Interfaces
    - User dashboard for events you created or joined
    - Admin dashboard for full control

    🎯 Core Features
    - Event creation with image, date, location, and category
    - Browse and filter events
    - Register (or book tickets) for events
    - Email notifications/reminders
    - Role-based authentication (JWT)
    - Mobile responsive design

## 🌟 Features in Details
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
