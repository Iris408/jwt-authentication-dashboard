# Project Details

This document contains additional technical notes for JWT Authentication Dashboard.

## Architecture

```text
React + TypeScript Frontend
        ↓
Mini User API FastAPI Backend
        ↓
PostgreSQL Database
```

## Frontend

The frontend is built with React, TypeScript, Vite, React Router, and CSS.

Main frontend responsibilities:

- Render login page
- Submit login credentials
- Store JWT access token
- Fetch authenticated user profile
- Render protected dashboard
- Render admin-only user list
- Handle loading and error states

## Backend API

This frontend connects to the Mini User API backend.

Mini User API includes:

- FastAPI backend
- PostgreSQL database
- SQLAlchemy ORM
- JWT authentication
- Role-based access control
- Protected profile route
- Admin-only users route
- Render deployment

Backend repository:

```text
https://github.com/Iris408/mini-user-api
```

## Deployment

The frontend is deployed on Vercel.

The backend API is deployed on Render.

This demonstrates frontend/backend deployment integration across two platforms.

## Known Limitations

- Refresh token support is not implemented yet.
- Admin panel depends on an admin user existing in the backend.
- Token storage uses local storage for demo purposes.
- Dedicated unauthorized page can be added later.
- Frontend test coverage can be expanded.
- Production auth hardening can be improved later.

## Future Improvements

- Refresh token support
- Dedicated unauthorized page
- User profile editing
- Admin role editing
- Frontend test setup
- Dark/light mode support
- Stronger production auth handling
- Improved mobile screenshots
- More complete logout/session handling

## Related Project

This frontend is connected to the Mini User API backend.

Related backend project:

```text
https://github.com/Iris408/mini-user-api
```

## What I Learned

Through this project, I practiced:

- React and TypeScript frontend development
- Vite project setup
- Frontend routing
- JWT login flow
- Token storage
- Protected route behaviour
- Admin-only UI behaviour
- Authenticated API requests
- Loading and error handling
- Vercel frontend deployment
- Render backend integration
- GitHub Actions CI workflows