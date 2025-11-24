# 🔐 Auth Boilerplate

A modern, full-stack authentication boilerplate built with React, Node.js, Express, and MongoDB. Features a beautiful, glassmorphic UI with secure JWT-based authentication.

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.2.0-61dafb.svg)

## ✨ Features

- 🎨 **Modern UI Design** - Glassmorphic design with smooth animations and gradients
- 🔒 **Secure Authentication** - JWT-based authentication with bcrypt password hashing
- 🚀 **Fast Development** - Hot reload for both frontend and backend
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- 📚 **API Documentation** - Interactive Swagger/OpenAPI documentation
- 🛡️ **Protected Routes** - Client-side route protection with React Router
- 🎯 **Context API** - Centralized authentication state management
- ⚡ **Vite Build Tool** - Lightning-fast development with Rolldown

## 🏗️ Tech Stack

### Frontend
- **React 19.2** - Latest React with modern features
- **React Router DOM 7.9** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Vite (Rolldown)** - Next-generation build tool
- **Context API** - State management

### Backend
- **Node.js** - JavaScript runtime
- **Express 5.1** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose 9.0** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Swagger** - API documentation

## 📁 Project Structure

```
auth-boilerplate/
├── backend/
│   ├── config/
│   │   └── swagger.js          # Swagger configuration
│   ├── models/
│   │   └── User.js              # User model schema
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   └── health.js            # Health check endpoint
│   ├── .env                     # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── server.js                # Express server entry point
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Background.jsx   # Animated background component
│   │   │   ├── Button.jsx       # Reusable button component
│   │   │   ├── Card.jsx         # Card container component
│   │   │   ├── Input.jsx        # Form input component
│   │   │   └── ProtectedRoute.jsx # Route protection wrapper
│   │   ├── context/
│   │   │   └── AuthContext.jsx  # Authentication context
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Protected home page
│   │   │   ├── Login.jsx        # Login page
│   │   │   └── Signup.jsx       # Signup page
│   │   ├── services/
│   │   │   └── api.js           # API service layer
│   │   ├── App.jsx              # Main app component
│   │   ├── index.css            # Global styles
│   │   └── main.jsx             # React entry point
│   ├── .gitignore
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd auth-boilerplate
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/auth-boilerplate
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Set up the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

#### Development Mode

1. **Start the Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000/api`
   - API Documentation: `http://localhost:5000/api/docs`

#### Production Mode

1. **Build the Frontend**
   ```bash
   cd frontend
   npm run build
   ```

2. **Start the Backend**
   ```bash
   cd backend
   npm start
   ```

## 📡 API Endpoints

### Authentication

#### POST `/api/auth/signup`
Register a new user account.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "message": "User created successfully",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

#### POST `/api/auth/login`
Authenticate a user and receive a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "email": "user@example.com"
  }
}
```

### Health Check

#### GET `/api/health`
Check if the API is running.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2025-11-24T09:30:00.000Z"
}
```

## 🎨 Frontend Features

### Components

- **Background** - Animated gradient background with floating orbs
- **Card** - Glassmorphic card container with backdrop blur
- **Button** - Customizable button with hover effects and loading states
- **Input** - Styled form input with error handling
- **ProtectedRoute** - HOC for protecting authenticated routes

### Pages

- **Login** - User authentication page with email/password form
- **Signup** - New user registration page
- **Home** - Protected dashboard with user information and logout

### Authentication Flow

1. User enters credentials on Login/Signup page
2. Frontend sends request to backend API
3. Backend validates credentials and returns JWT token
4. Token is stored in localStorage
5. AuthContext manages authentication state
6. Protected routes check authentication status
7. Unauthorized users are redirected to login

## 🔒 Security Features

- **Password Hashing** - bcrypt with salt rounds for secure password storage
- **JWT Tokens** - Stateless authentication with 1-hour expiration
- **Protected Routes** - Client-side route guards
- **CORS Configuration** - Cross-origin resource sharing enabled
- **Input Validation** - Server-side validation for all inputs
- **Error Handling** - Comprehensive error messages without exposing sensitive data

## 🛠️ Development

### Available Scripts

#### Backend
```bash
npm start       # Start production server
npm run dev     # Start development server with hot reload
npm test        # Run tests (not configured yet)
```

#### Frontend
```bash
npm run dev     # Start Vite dev server
npm run build   # Build for production
npm run preview # Preview production build
npm run lint    # Run ESLint
```

### Code Style

- **Backend**: CommonJS modules, async/await for asynchronous operations
- **Frontend**: ES6+ modules, functional components with hooks
- **Styling**: Tailwind CSS utility classes with custom design tokens

## 📝 Environment Variables

### Backend (.env)

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/auth-boilerplate` |
| `JWT_SECRET` | Secret key for JWT signing | `supersecretkey` (change in production!) |

### Frontend

The frontend uses `http://localhost:5000/api` as the default API base URL. To change this, modify `API_BASE_URL` in `src/services/api.js`.

## 🚢 Deployment

### Backend Deployment (e.g., Heroku, Railway, Render)

1. Set environment variables in your hosting platform
2. Ensure MongoDB is accessible (use MongoDB Atlas for cloud hosting)
3. Deploy the `backend` directory
4. Update CORS settings if needed

### Frontend Deployment (e.g., Vercel, Netlify)

1. Build the frontend: `npm run build`
2. Deploy the `dist` folder
3. Update API base URL to point to your deployed backend
4. Configure redirects for client-side routing

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Express.js for the robust backend framework
- Tailwind CSS for the utility-first CSS framework
- MongoDB for the flexible NoSQL database
- Swagger for API documentation tools

## 📧 Support

For support, please open an issue in the GitHub repository.

---

**Built with ❤️ using modern web technologies**
