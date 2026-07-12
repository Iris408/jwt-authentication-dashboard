# Setup Guide

This document explains how to run JWT Authentication Dashboard locally.

## Installation

Clone the repository:

```bash
git clone https://github.com/Iris408/jwt-authentication-dashboard
cd jwt-authentication-dashboard
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://mini-user-api.onrender.com
```

For local backend testing, use a local Mini User API backend URL:

```env
VITE_API_URL=http://127.0.0.1:8002
```

Never commit real `.env` files or production secrets to GitHub.

## Run Locally

Start the development server:

```bash
npm run dev
```

For local testing on a specific port:

```bash
npm run dev -- --host 0.0.0.0 --port 5175
```

Frontend runs at:

```text
http://localhost:5175
```

## Build Check

Run:

```bash
npm run build
```

This verifies that the React, TypeScript, and Vite frontend builds successfully.

## Demo Account

Use the demo account shown on the login page.

```text
Username: testuser
Password: password123
```

Note: the backend must contain an admin user for the admin panel to load protected user data correctly.

## Backend Dependency

This frontend connects to the Mini User API backend.

Backend repository:

```text
https://github.com/Iris408/mini-user-api
```

Live backend Swagger Docs:

```text
https://mini-user-api.onrender.com/docs
```