# 🚀 TOEFL-UP: AI-Powered TOEFL Practice Platform

TOEFL-UP is a modern, lightweight TOEFL preparation platform that combines a clean static frontend with a powerful AI-driven backend. Generate custom Reading and Listening practices on any topic using GPT-4o.

## ✨ Features

- **🤖 AI Practice Generator**: Instantly create TOEFL-style Reading passages and Listening transcripts (Lectures/Conversations) with questions using GPT-4o.
- **🎧 Listening Practice**: Interactive player for audio practice or AI-generated transcripts with toggle views.
- **📚 Reading Practice**: Comprehensive reading interface with instant feedback on questions.
- **🔐 Secure Authentication**: JWT-based authentication system using high-security **PBKDF2-SHA256** hashing (no password length limits).
- **📊 User Dashboard**: Track your progress and jump straight into new AI-generated or library practices.
- **👤 Profile Management**: Customize your profile, update avatars, and change passwords securely.

## 🛠️ Tech Stack

- **Frontend**: Pure Static HTML + React (Window-based), Tailwind CSS. No `node_modules` or complex build tools required!
- **Backend**: FastAPI (Python), SQLAlchemy, SQLite.
- **AI Integration**: OpenAI API (GPT-4o).
- **Security**: PBKDF2-SHA256 password hashing, JWT tokens.

## 🚀 Quick Start

### 1. Prerequisites
- Python 3.8+
- OpenAI API Key (optional, for AI generation)

### 2. Setup Backend
```bash
cd server
pip install -r requirements.txt
```
Create a `.env` file in the `server` folder:
```env
OPENAI_API_KEY=your_api_key_here
```
Run the server:
```bash
python main.py
```
The API will be available at `http://localhost:8001`.

### 3. Setup Frontend
You can serve the frontend using any static file server. For example, from the project root:
```bash
# Using Python
python -m http.server 8080
```
Open `http://localhost:8080` in your browser.

## 📝 Important Notes

- **Password Length**: Unlike standard bcrypt, our system supports passwords of any length thanks to PBKDF2-SHA256.
- **AI Generation**: Ensure your `OPENAI_API_KEY` is set in `server/.env` to use the AI Practice Generator on the Dashboard.
- **Static Build**: The frontend is designed to be extremely lightweight. No `npm install` is needed.

---
*Happy studying! Build your confidence for the TOEFL with TOEFL-UP.*
