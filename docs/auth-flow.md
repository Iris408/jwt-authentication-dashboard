# Auth Flow

This document explains the JWT authentication flow used by JWT Authentication Dashboard.

## Authentication Overview

The frontend connects to the Mini User API backend and uses JWT access tokens for authenticated requests.

## Basic Flow

```text
1. User enters login credentials.
2. Frontend sends a login request to the Mini User API backend.
3. Backend verifies the credentials.
4. Backend returns a JWT access token.
5. Frontend stores the token in local storage.
6. Protected pages send the token in the Authorization header.
7. Dashboard loads the authenticated user profile.
8. Admin page loads user data only when the authenticated user has an admin role.
```

## Token Storage

The JWT access token is stored in local storage.

This allows the frontend to send authenticated requests after login.

## Authorization Header

Protected API requests include the token in this format:

```text
Authorization: Bearer your_access_token
```

## Protected Dashboard

The dashboard route requires a valid token.

If the token is missing or invalid, the user should not be able to access protected dashboard content.

## Admin-only Page

The admin page checks whether the authenticated user has admin-level access before showing user list data.

This demonstrates basic role-based UI behaviour.

## Main Backend Routes Used

The connected Mini User API backend includes routes such as:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| POST | `/auth/login` | Login and receive JWT token |
| GET | `/users/me` | Get current authenticated user |
| GET | `/users` | Admin-only user list |

## Future Auth Improvements

- Add refresh token support
- Add logout token cleanup improvements
- Add dedicated unauthorized page
- Add user profile editing
- Improve production auth handling
- Add frontend auth tests