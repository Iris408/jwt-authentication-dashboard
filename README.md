![Docker CI](https://github.com/Iris408/jwt-authentication-dashboard/actions/workflows/docker-ci.yml/badge.svg)
![Frontend CI](https://github.com/Iris408/jwt-authentication-dashboard/actions/workflows/frontend-ci.yml/badge.svg)

# JWT Authentication Dashboard / JWT認証ダッシュボード

JWT Authentication Dashboard is a React + TypeScript frontend authentication application connected to a deployed FastAPI backend.

It demonstrates a complete frontend JWT authentication flow, including user login, JWT token storage, protected dashboard access, admin-only user listing, role-based UI behaviour, Vercel deployment, Render backend integration, and GitHub Actions CI checks.

JWT認証ダッシュボードは、デプロイ済みのFastAPIバックエンドに接続されたReact + TypeScriptフロントエンド認証アプリケーションです。

ユーザーログイン、JWTトークン保存、保護されたダッシュボードアクセス、管理者専用ユーザー一覧、ロールベースUI、Vercelデプロイ、Renderバックエンド連携、GitHub Actions CIチェックを含む、実用的なJWT認証フローを示しています。

---

## Live Demo / ライブデモ

- Frontend deployed on Vercel:  
  [JWT Authentication Dashboard](https://jwt-authentication-dashboard-sepia.vercel.app)

- Backend API deployed on Render:  
  [Mini User API Swagger Docs](https://mini-user-api.onrender.com/docs)

- Backend repository:  
  [Mini User API Repo](https://github.com/Iris408/mini-user-api)

---

## Portfolio Status / ポートフォリオ状況

This project is portfolio-ready as a deployed React + TypeScript authentication dashboard connected to a deployed FastAPI backend.

It includes a polished login page, protected dashboard, admin panel, authenticated API requests, role-based access behaviour, and CI checks.

このプロジェクトは、デプロイ済みのFastAPIバックエンドに接続されたReact + TypeScript認証ダッシュボードとして、ポートフォリオ掲載可能な状態です。

ログインページ、保護されたダッシュボード、管理者パネル、認証付きAPIリクエスト、ロールベースアクセス、CIチェックを含んでいます。

| Area | Status |
| --- | --- |
| Frontend UI | ✅ Complete |
| Login flow | ✅ Working |
| JWT token storage | ✅ Working |
| Protected dashboard | ✅ Working |
| Admin-only user list | ✅ Working |
| Loading and error states | ✅ Added |
| Vercel frontend deployment | ✅ Live |
| Render backend integration | ✅ Live |
| GitHub Actions CI | ✅ Passing |

---

## Screenshots

### Login Page

<img src="./screenshots/01-login-page.png" width="700"/>

### Protected Dashboard

<img src="./screenshots/02-dashboard-page.png" width="700"/>

### Admin Panel

<img src="./screenshots/03-admin-page.png" width="700"/>

---

## Features / 機能

| English | 日本語 |
|---|---|
| User login flow | ユーザーログインフロー |
| JWT token storage | JWTトークンの保存 |
| Protected dashboard route | 保護されたダッシュボードルート |
| Admin-only user list | 管理者専用ユーザー一覧 |
| Role-based access behaviour | ロールベースアクセス制御 |
| Authenticated API requests | 認証付きAPIリクエスト |
| API integration with deployed backend | デプロイ済みバックエンドとのAPI統合 |
| Multi-page frontend routing | マルチページフロントエンドルーティング |
| Loading and error handling | 読み込み状態とエラー処理 |
| Responsive UI styling | レスポンシブUIスタイリング |
| GitHub Actions CI workflow | GitHub Actions CI ワークフロー |

---

## Tech Stack / 技術スタック

| Area / 分野 | Technologies / 技術 |
|---|---|
| Frontend / フロントエンド | React, TypeScript, CSS, Vite, React Router |
| Backend API / バックエンドAPI | FastAPI, PostgreSQL, SQLAlchemy, JWT Authentication |
| Deployment / デプロイ | Vercel, Render |
| CI/CD | GitHub Actions |
| Tools / ツール | Git, GitHub, VS Code |

---

## Project Architecture / 構成

```text
jwt-authentication-dashboard
│
├── src
│   ├── components
│   │   └── NavBar.tsx
│   │
│   ├── pages
│   │   ├── LoginPage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── AdminPage.tsx
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
│
├── screenshots
│   ├── 01-login-page.png
│   ├── 02-dashboard-page.png
│   └── 03-admin-page.png
│
├── .github
│   └── workflows
│
├── package.json
├── vite.config.ts
└── README.md
```

---

## Auth Flow / 認証フロー

1. User enters login credentials.
2. The frontend sends a login request to the Mini User API backend.
3. The backend verifies the user and returns a JWT access token.
4. The frontend stores the token in local storage.
5. Protected pages send the token in the `Authorization` header.
6. The dashboard loads the authenticated user profile.
7. The admin page loads user data only when the authenticated user has an admin role.

日本語:

1. ユーザーがログイン情報を入力します。
2. フロントエンドがMini User APIバックエンドへログインリクエストを送信します。
3. バックエンドがユーザーを認証し、JWTアクセストークンを返します。
4. フロントエンドがトークンをローカルストレージに保存します。
5. 保護されたページでは、`Authorization` ヘッダーにトークンを付けてリクエストします。
6. ダッシュボードが認証済みユーザー情報を取得します。
7. 管理者ページは、管理者ロールを持つユーザーのみユーザー一覧を取得できます。

---

## Pages / ページ

| Page | Route | Description |
|---|---|---|
| Login | `/` | User login page |
| Dashboard | `/dashboard` | Protected authenticated user dashboard |
| Admin | `/admin` | Admin-only user list and account overview |

---

## API Endpoints / APIエンドポイント

This frontend connects to the deployed Mini User API backend.

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Home / health check |
| POST | `/users` | Create a new user |
| POST | `/login` | Login user with JSON request |
| POST | `/token` | OAuth2 token login for Swagger authorization |
| GET | `/profile` | Get protected user profile |
| GET | `/users` | Get all users — admin only |
| GET | `/users/{user_id}` | Get one user by ID |
| PUT | `/users/{user_id}` | Update a user |
| DELETE | `/users/{user_id}` | Delete a user |

---

## Local Installation / ローカルインストール

Clone the repository:

```bash
git clone https://github.com/Iris408/jwt-authentication-dashboard
cd jwt-authentication-dashboard
npm install
```

Create a `.env` file in the project root:

```bash
VITE_API_URL=https://mini-user-api.onrender.com
```

Start the development server:

```bash
npm run dev
```

For local testing on a specific port:

```bash
npm run dev -- --host 0.0.0.0 --port 5175
```

---

## Build Check / ビルド確認

Run:

```bash
npm run build
```

This verifies that the TypeScript and Vite frontend build successfully.

---

## Demo Account / デモアカウント

Use the demo account shown on the login page.

```e
Username: testuser
Password: password123
```

Note: the backend must contain an admin user for the admin panel to load protected user data correctly.

---

## Recent Improvements / 最近の改善

| English | 日本語 |
|---|---|
| Refreshed login page UI | ログインページUIを改善 |
| Added modern protected dashboard layout | 保護ダッシュボードのレイアウトを改善 |
| Added admin panel statistics | 管理者パネルに統計カードを追加 |
| Added user account cards | ユーザーアカウントカードを追加 |
| Improved API URL handling | API URL処理を改善 |
| Added loading states | 読み込み状態を追加 |
| Added error handling | エラー処理を追加 |
| Fixed admin users API integration | 管理者ユーザーAPI連携を修正 |
| Improved Mini User API role checking | Mini User APIのロール確認を改善 |

---

## Future Improvements / 今後の改善

| English | 日本語 |
|---|---|
| Refresh token support | リフレッシュトークン対応 |
| Dedicated unauthorized page | 専用の未認可ページ |
| User profile editing | ユーザープロフィール編集 |
| Admin role editing | 管理者ロール編集 |
| Frontend test setup | フロントエンドテスト追加 |
| Dark/light mode support | ダーク・ライトモード対応 |
| Stronger production auth handling | 本番環境向け認証処理の強化 |
| Improved mobile screenshots | モバイルスクリーンショット改善 |

---

## Related Project / 関連プロジェクト

This frontend is connected to the Mini User API backend.

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
[Mini User API](https://github.com/Iris408/mini-user-api)

---

## Learning Purpose / 学習目的

This project was built to practise frontend authentication, protected routing, backend API integration, role-based UI logic, deployment, and portfolio-ready project presentation.

このプロジェクトは、フロントエンド認証、保護されたルーティング、バックエンドAPI連携、ロールベースUIロジック、デプロイ、ポートフォリオ向けプロジェクト整理を練習するために作成しました。