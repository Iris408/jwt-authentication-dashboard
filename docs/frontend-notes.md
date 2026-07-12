# Frontend Notes

This document contains frontend-specific notes for JWT Authentication Dashboard.

## Pages

| Page | Route | Description |
| --- | --- | --- |
| Login | `/` | User login page |
| Dashboard | `/dashboard` | Protected authenticated user dashboard |
| Admin | `/admin` | Admin-only user list and account overview |

## Main Frontend Responsibilities

The frontend handles:

- Login form state
- API login request
- JWT token storage
- Authenticated profile request
- Protected dashboard rendering
- Admin-only user list request
- Role-based UI behaviour
- Loading states
- Error messages
- Responsive page styling

## Project Structure

```text
jwt-authentication-dashboard/
  src/
    components/
      NavBar.tsx
    pages/
      LoginPage.tsx
      DashboardPage.tsx
      AdminPage.tsx
    App.tsx
    main.tsx
    styles.css
  screenshots/
  .github/
  package.json
  vite.config.ts
  README.md
```

## Recent Improvements

- Refreshed login page UI
- Added modern protected dashboard layout
- Added admin panel statistics
- Added user account cards
- Improved API URL handling
- Added loading states
- Added error handling
- Fixed admin users API integration
- Improved Mini User API role checking

## UI Notes

The project is designed as a focused authentication dashboard rather than a large full-stack app.

The main frontend goal is to show:

- Login flow
- Protected route behaviour
- Role-based access behaviour
- Backend API integration
- Clean dashboard UI