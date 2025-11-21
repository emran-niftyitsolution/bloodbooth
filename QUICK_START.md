# ⚡ Quick Start Guide

Get BloodBooth running in 5 minutes!

## 1️⃣ Clone & Install (1 min)

```bash
cd /path/to/your/projects
git clone <your-repo-url>
cd bloodb
bun install
```

## 2️⃣ Set Up Environment (1 min)

Create `.env.local`:
```bash
cp .env.example .env.local
```

Edit `.env.local` and update the JWT secret:
```env
JWT_SECRET=your-random-secret-key-here
```

## 3️⃣ Choose Your Database (2 min)

### Option A: Local MongoDB (Fast, for Development)
```bash
# macOS
brew install mongodb-community@7.0
brew services start mongodb-community@7.0

# Your .env.local is already configured for this!
```

### Option B: MongoDB Atlas (Cloud, for Production)
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account + cluster (takes 2 min)
3. Get connection string
4. Update `MONGODB_URI` in `.env.local`

## 4️⃣ Test Connection (30 sec)

```bash
bun run check-db
```

Should see: `✅ MongoDB connection successful!`

## 5️⃣ Start Development Server (30 sec)

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000)

## ✅ You're Done!

### Try It Out:
1. Click **Sign Up** in the navigation
2. Create an account
3. You'll be auto-logged in and redirected home
4. See your name in the navigation menu

### Check Your Database:
```bash
# MongoDB Shell
mongosh
use bloodbooth
db.users.find().pretty()
```

---

## 🆘 Having Issues?

### MongoDB won't connect?
```bash
# Check if running
brew services list

# Start it
brew services start mongodb-community@7.0
```

### JWT_SECRET error?
```bash
# Generate a secure secret
openssl rand -base64 32

# Add to .env.local
JWT_SECRET=<paste-generated-secret>
```

### Port 3000 already in use?
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 bun dev
```

---

## 📚 Next Steps

- ✅ Authentication is working
- 📝 Add profile page
- 📝 Implement password reset
- 📝 Add email verification
- 📝 Create donation tracking
- 📝 Build blood request system

See [DATABASE_SETUP.md](./DATABASE_SETUP.md) for detailed database info.

---

**Need Help?** Check the full [README.md](./README.md) or open an issue.

