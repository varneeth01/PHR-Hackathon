# PHR Hackathon Project
**Overview**
This project is a healthcare service platform that allows users to access various healthcare services, including teleconsultations, appointment bookings, and personal health records (PHR) management, powered by the Ayushman Bharat Health Account (ABHA). The app is built using React Native for mobile platforms and integrates various APIs to facilitate secure and easy access to healthcare services.

Features
ABHA Account Creation: Allows users to create and manage their Ayushman Bharat Health Account (ABHA).
User Registration & Login: Secure user authentication using ABHA credentials.
Profile Management: Users can update their profiles with health-related details and personal preferences.
Teleconsultation: Book appointments for video consultations with healthcare professionals.
Appointment Booking: Book doctor or clinic appointments nearby.
Scan & Share: A feature for scanning QR codes to quickly share health records.
Ambulance Booking: Quick access to emergency ambulance services.
PHR Integration: Manage and share your personal health records with doctors or healthcare institutions.
Technology Stack
Frontend: React Native (with TypeScript)
Backend: Node.js, Express (API-driven microservices architecture)
Database: MongoDB (for user and health data storage)
API Integration: ABDM (Ayushman Bharat Digital Mission) APIs for healthcare services.
Video Calls: WebRTC for real-time teleconsultation features.
Setup Instructions
Prerequisites
Ensure you have the following installed:

Node.js (v14.x or later)
React Native CLI
MongoDB (for database)
Expo CLI (for easy React Native development)

This project uses MongoDB to store user details, health records, appointments, and consultation data.

Collection: users
Stores user profiles, including ABHA details.
Collection: appointments
Stores appointment booking information.
Collection: teleconsultations
Stores video consultation records.
Collection: ambulance_bookings
Stores ambulance service requests.
API Endpoints
Here are some of the key API endpoints used by the backend:

User Registration: POST /api/auth/register
User Login: POST /api/auth/login
Update Profile: PUT /api/user/profile
Get Appointments: GET /api/appointments
Book Appointment: POST /api/appointments
Teleconsultation: POST /api/teleconsultation
Ambulance Booking: POST /api/ambulance
Folder Structure

.
├── app
│   ├── components
│   │   ├── Registration.jsx
│   │   ├── Login.jsx
│   │   ├── ProfileUpdate.jsx
│   │   └── ScanShare.jsx
│   ├── navigation
│   └── services
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── assets
├── node_modules
├── package.json
├── .gitignore
└── README.md

Video  Preview : https://github.com/user-attachments/assets/0e8108c5-ce64-4fe6-ae48-9c645093d58b
