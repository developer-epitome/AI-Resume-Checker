# AI Resume Checker

An AI-powered resume analysis platform that helps job seekers evaluate, improve, and track their resumes using ATS-oriented scoring and intelligent recommendations.

## Live Application

**[Open AI Resume Checker](https://ai-resume-checker-frontend-sigma.vercel.app/)**

---

## Overview

AI Resume Checker analyzes PDF resumes and provides actionable feedback designed to improve resume quality, ATS compatibility, keyword relevance, and overall presentation.

The platform combines automated resume parsing, AI-powered analysis, ATS scoring, and version tracking into a single application.

### Key Capabilities

- Resume PDF upload and text extraction
- AI-powered resume analysis
- ATS compatibility scoring
- Resume strengths and weaknesses
- Keyword and content analysis
- AI-generated improvement recommendations
- Resume version history
- Dashboard and performance insights
- Secure user authentication
- Protected API endpoints

---

## Features

### Resume Analysis

Upload a PDF resume and automatically extract its contents for analysis.

The system evaluates areas such as:

- Professional summary
- Work experience
- Skills
- Education
- Keywords
- Achievements
- Resume structure
- ATS compatibility

### ATS Scoring

Provides an overall ATS-oriented score along with detailed feedback to help identify areas that may reduce resume effectiveness.

### AI Recommendations

Uses AI to generate practical suggestions for improving:

- Resume bullet points
- Professional descriptions
- Keyword usage
- Content clarity
- Achievement statements
- Overall resume effectiveness

### Dashboard

The dashboard provides an overview of resume performance, analysis results, and recent activity.

### Resume History

Users can maintain and review previous resume analyses and versions, making it easier to track improvements over time.

### Authentication

The application includes:

- User registration
- Secure login
- JWT authentication
- Protected routes
- Logout functionality
- Password hashing

---

## Technology Stack

### Frontend

- React
- Vite
- Axios
- React Query

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Zod
- Multer
- pdf-parse

### AI

- Google Gemini API

### Deployment

- Vercel

---

## Architecture

```text
                    ┌─────────────────────┐
                    │      React App      │
                    │      Vite           │
                    └──────────┬──────────┘
                               │
                               │ REST API
                               │ HTTPS
                               ▼
                    ┌─────────────────────┐
                    │    Express API      │
                    │      Node.js        │
                    └───────┬─────┬───────┘
                            │     │
                 ┌──────────┘     └──────────┐
                 ▼                           ▼
        ┌─────────────────┐        ┌─────────────────┐
        │     MongoDB     │        │   Gemini API    │
        │     Database    │        │       AI        │
        └─────────────────┘        └─────────────────┘
