# 🩸 BloodBooth

A modern, ultra-responsive blood donation platform built with Next.js 16, Ant Design, Framer Motion, and Tailwind CSS v4.

## ✨ Features

- **Modern UI/UX**: Cutting-edge design with glassmorphism, bento grids, and 3D transforms
- **Smooth Animations**: Physics-based animations powered by Framer Motion
- **Real-time Blood Demand**: Live status of blood type availability
- **Donor Stories**: Testimonials from our community of heroes
- **Mobile Responsive**: Fully optimized for all screen sizes
- **Integrated Navigation**: Modern hero section with transparent navigation inside
- **Scroll Progress Bar**: Animated gradient progress indicator
- **Modern Ant Design Buttons**: All buttons styled with gradients and rounded shapes
- **Custom Loading State**: Animated loading screen with brand elements
- **404 & Error Pages**: Beautiful custom error pages
- **PWA Ready**: Manifest file and icons for progressive web app
- **SEO Optimized**: Complete metadata and Open Graph tags
- **Authentication System**: Complete login, signup, and password recovery
- **Auto-Login**: Automatic redirect to home after successful authentication
- **Session Management**: Remember me functionality with localStorage/sessionStorage
- **User Menu**: Dynamic navigation showing user profile when logged in
- **Protected States**: Conditional UI based on authentication status

## 🚀 Getting Started

### 1. Install Dependencies

```bash
bun install
# or
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/bloodbooth

# JWT Secret (change this!)
JWT_SECRET=your-super-secret-jwt-key-change-this

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Node Environment
NODE_ENV=development
```

### 3. Set Up MongoDB

**Option A: Local MongoDB**
```bash
# macOS
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# Or use MongoDB Atlas (cloud) - see DATABASE_SETUP.md
```

**Option B: MongoDB Atlas (Recommended)**
1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Update `MONGODB_URI` in `.env.local`

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed instructions.

### 4. Run the Development Server

```bash
bun dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **UI Components**: Ant Design 5
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

### Backend
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcryptjs
- **API Routes**: Next.js API Routes

### Development
- **Package Manager**: Bun
- **Environment**: Node.js

## 📁 Project Structure

```
bloodb/
├── app/
│   ├── api/
│   │   └── auth/          # Authentication API routes
│   │       ├── signup/    # POST /api/auth/signup
│   │       ├── login/     # POST /api/auth/login
│   │       └── me/        # GET /api/auth/me
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── forgot-password/   # Password recovery
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main homepage
│   ├── loading.tsx        # Loading state
│   ├── error.tsx          # Error boundary
│   ├── not-found.tsx      # 404 page
│   └── globals.css        # Global styles
├── lib/
│   ├── auth.ts            # Client-side auth utilities
│   ├── db.ts              # MongoDB connection
│   └── jwt.ts             # JWT utilities
├── models/
│   └── User.ts            # Mongoose User model
├── components/
│   └── ui/                # Reusable UI components
├── public/                # Static assets
├── types/
│   └── global.d.ts        # TypeScript global types
├── .env.local             # Environment variables (create this)
├── .env.example           # Example environment variables
├── DATABASE_SETUP.md      # Database setup guide
└── package.json
```

## 🎨 Design Features

- **Glassmorphism Effects**: Frosted glass UI elements
- **Animated Gradients**: Smooth color transitions
- **Bento Grid Layouts**: Modern card-based designs
- **3D Transforms**: Interactive hover effects
- **Spring Animations**: Natural motion physics
- **Scroll Triggers**: Content reveals on scroll
- **Dark Mode Sections**: Contrast for visual hierarchy

## 🌐 Pages & Sections

### Main Pages
1. **Homepage (`/`)**: Complete landing page with all sections
2. **Login (`/login`)**: Beautiful authentication page with auto-login and redirect
3. **Sign Up (`/signup`)**: Comprehensive registration form with auto-login
4. **Forgot Password (`/forgot-password`)**: Password reset flow

### Authentication Features
- ✅ Auto-login after signup
- ✅ Auto-redirect to home after login
- ✅ Remember me functionality
- ✅ Dynamic navigation (shows user menu when logged in)
- ✅ Blood type badge display for logged-in users
- ✅ User dropdown menu with profile, settings, logout
- ✅ Cross-tab sync (login/logout reflected in all tabs)
- ✅ Session persistence (localStorage or sessionStorage)

### Homepage Sections
1. **Hero with Navigation**: Integrated header in hero section
2. **Stats Dashboard**: Live donation statistics
3. **Urgent Need Banner**: Critical blood requirement alerts
4. **Blood Type Demand**: Real-time availability status
5. **Testimonials**: Donor success stories
6. **Impact Gallery**: Visual showcase of our work
7. **Process Guide**: Step-by-step donation process
8. **Benefits**: Why donate blood
9. **Ways to Help**: Multiple contribution options
10. **Call to Action**: Prominent donation prompts
11. **Footer**: Contact and quick links

## 🔧 Configuration

### Image Optimization

Images are configured to load from Unsplash in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.unsplash.com',
    },
  ],
}
```

### Custom Fonts

The project uses Geist Sans and Geist Mono fonts, optimized with `next/font`.

## 📦 Dependencies

### Frontend
- `next`: ^16.0.3
- `react`: ^19.2.0
- `antd`: ^5.29.1
- `framer-motion`: ^12.23.24
- `lucide-react`: ^0.554.0
- `tailwindcss`: ^4
- `typescript`: ^5

### Backend
- `mongoose`: ^8.20.1
- `bcryptjs`: ^3.0.3
- `jsonwebtoken`: ^9.0.2

### Dev Dependencies
- `@types/bcryptjs`: ^3.0.0
- `@types/jsonwebtoken`: ^9.0.10
- `dotenv`: ^17.2.3

## 🔌 API Documentation

### Authentication Endpoints

#### POST `/api/auth/signup`
Create a new user account.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "phone": "+1234567890",
  "bloodType": "O+",
  "dateOfBirth": "1990-01-01"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Account created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com",
    "bloodType": "O+",
    "phone": "+1234567890"
  }
}
```

#### POST `/api/auth/login`
Login with email and password.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com",
    "bloodType": "O+",
    "phone": "+1234567890"
  }
}
```

#### GET `/api/auth/me`
Get current user information (requires authentication).

**Headers:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "fullName": "John Doe",
    "email": "john@example.com",
    "bloodType": "O+",
    "phone": "+1234567890",
    "dateOfBirth": "1990-01-01T00:00:00.000Z",
    "isEmailVerified": false,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
}
```

---

## 🎯 Performance

- Optimized images with Next.js Image component
- Lazy loading for off-screen content
- Reduced motion support for accessibility
- Smooth 60fps animations
- Minimal JavaScript bundle
- Database connection pooling with Mongoose
- JWT-based stateless authentication

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🧪 Testing Database Connection

Before starting development, test your MongoDB connection:

```bash
bun run check-db
```

This will:
- ✅ Verify MongoDB connection
- 📊 Show database info
- 📁 List collections
- 👥 Count users

---

## 🔧 Troubleshooting

### MongoDB Connection Issues

**Error: `ECONNREFUSED`**
```bash
# macOS
brew services start mongodb-community@7.0

# Linux
sudo systemctl start mongod
```

**Error: `JWT_SECRET not defined`**
- Ensure `.env.local` exists with all required variables
- Restart the dev server

**Error: `E11000 duplicate key error`**
- Email already registered
- Use a different email or clear the database

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed troubleshooting.

---

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

For support, email info@bloodbooth.org or join our community channels.

---

**BloodBooth** - *Saving lives, one donation at a time.* ❤️
