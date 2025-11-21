# 🗄️ Database Setup Guide

This guide will help you set up MongoDB for the BloodBooth application.

## Prerequisites

- Node.js installed
- Bun or npm package manager

## Option 1: Local MongoDB (Recommended for Development)

### Install MongoDB

**macOS (using Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community@7.0
```

**Windows:**
Download from [MongoDB Download Center](https://www.mongodb.com/try/download/community)

**Linux (Ubuntu/Debian):**
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

### Start MongoDB

**macOS:**
```bash
brew services start mongodb-community@7.0
```

**Windows:**
MongoDB runs as a service automatically after installation

**Linux:**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod  # Enable on boot
```

### Verify MongoDB is Running

```bash
mongosh
# Should connect to: mongodb://127.0.0.1:27017

# In MongoDB shell:
show dbs
exit
```

### Configure Environment

Your `.env.local` is already configured for local MongoDB:
```env
MONGODB_URI=mongodb://localhost:27017/bloodbooth
```

---

## Option 2: MongoDB Atlas (Cloud - Recommended for Production)

### Create Free MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (Free tier available)

### Get Connection String

1. Click "Connect" on your cluster
2. Choose "Connect your application"
3. Copy the connection string
4. Replace `<password>` with your database user password

### Update .env.local

```env
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/bloodbooth?retryWrites=true&w=majority
```

---

## Database Schema

### User Model

```typescript
{
  fullName: String (required)
  email: String (required, unique)
  password: String (required, hashed)
  phone: String (optional)
  bloodType: String (enum: A+, A-, B+, B-, AB+, AB-, O+, O-)
  dateOfBirth: Date (optional)
  isEmailVerified: Boolean (default: false)
  createdAt: Date (auto)
  updatedAt: Date (auto)
}
```

---

## Testing the Setup

### 1. Start the Development Server

```bash
bun run dev
```

### 2. Test Signup

Navigate to `http://localhost:3000/signup` and create an account

### 3. Check MongoDB

**Local MongoDB:**
```bash
mongosh
use bloodbooth
db.users.find().pretty()
```

**MongoDB Atlas:**
Use the web interface to browse collections

---

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/signup` | Register new user |
| POST | `/api/auth/login` | Login user |
| GET | `/api/auth/me` | Get current user (requires auth) |

### Example Requests

**Signup:**
```bash
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "password123",
    "bloodType": "O+"
  }'
```

**Login:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Get Current User:**
```bash
curl -X GET http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## Troubleshooting

### MongoDB Connection Failed

**Error:** `MongooseServerSelectionError: connect ECONNREFUSED`

**Solution:**
- Check if MongoDB is running: `brew services list` (macOS)
- Verify connection string in `.env.local`
- Check firewall settings

### JWT Error

**Error:** `JWT_SECRET not defined`

**Solution:**
- Ensure `.env.local` exists with `JWT_SECRET`
- Restart development server

### Duplicate Key Error

**Error:** `E11000 duplicate key error`

**Solution:**
- Email already exists in database
- Use a different email or delete existing user

---

## Security Best Practices

1. **Never commit `.env.local`** - It's in `.gitignore`
2. **Use strong JWT_SECRET** - Generate with: `openssl rand -base64 32`
3. **Use HTTPS in production** - Always encrypt data in transit
4. **Rotate JWT_SECRET regularly** - Update in production environment
5. **Implement rate limiting** - Prevent brute force attacks
6. **Use MongoDB Atlas IP whitelist** - Restrict database access

---

## Production Deployment

### Environment Variables

Set these in your production environment:

```env
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_random_string
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
```

### Vercel Deployment

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Database Backups

**MongoDB Atlas:**
- Automatic backups enabled in free tier
- Configure backup schedule in Atlas dashboard

**Local MongoDB:**
```bash
mongodump --db bloodbooth --out /path/to/backup
```

---

## Next Steps

- ✅ MongoDB setup complete
- ✅ User authentication working
- 📝 Add email verification
- 📝 Implement password reset
- 📝 Add profile management
- 📝 Create donation history tracking

---

Need help? Check the [MongoDB Documentation](https://docs.mongodb.com/) or [Mongoose Documentation](https://mongoosejs.com/docs/).

