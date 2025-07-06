# 🛠 Tools R Us – Fullstack Tool Rental Platform

### Overview
A complete peer-to-peer tool rental app inspired by the nostalgia of Toys R Us, built for modern contractors, handymen, and tool owners.

### Tech Stack
- Frontend: React + Tailwind
- Backend: Express.js
- Database: Firebase Firestore
- Auth: Firebase Auth
- Payments: PayPal SDK, Cash App Pay (via Square), Venmo
- Email: Nodemailer

### Features
✅ Register/Login Users  
✅ Add/Edit/Delete Tools  
✅ PayPal + Cash App + Venmo Checkout  
✅ Admin Dashboard + Moderation Tools  
✅ Email Notifications for Rentals  
✅ Seeded Demo Mode via `/demo-data/`

### Local Setup
```bash
git clone https://github.com/MikeyMike225/tools-r-us.git
cd tools-r-us/backend
cp .env.example .env
npm install
node demo-data/seed.js
npm start
```
