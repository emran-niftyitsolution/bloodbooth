/**
 * Database Connection Check Script
 * Run with: bun run scripts/check-db.ts
 */

import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

async function checkDatabaseConnection() {
  console.log('🔍 Checking MongoDB connection...\n');

  if (!MONGODB_URI) {
    console.error('❌ Error: MONGODB_URI not found in .env.local');
    console.log('\n💡 Create a .env.local file with:');
    console.log('MONGODB_URI=mongodb://localhost:27017/bloodbooth');
    process.exit(1);
  }

  console.log(`📡 Connecting to: ${MONGODB_URI.split('@')[1] || MONGODB_URI}\n`);

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB connection successful!');
    console.log(`📊 Database: ${mongoose.connection.name}`);
    console.log(`🖥️  Host: ${mongoose.connection.host}`);
    console.log(`🔌 Port: ${mongoose.connection.port || 'N/A'}`);
    
    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`\n📁 Collections (${collections.length}):`);
    collections.forEach(col => {
      console.log(`   - ${col.name}`);
    });

    // Count users
    const User = mongoose.model('User', new mongoose.Schema({}));
    const userCount = await User.countDocuments();
    console.log(`\n👥 Total users: ${userCount}`);

    console.log('\n✨ Everything looks good! You can start the dev server now.');
    
  } catch (error: any) {
    console.error('\n❌ MongoDB connection failed!');
    console.error('Error:', error.message);
    
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\n💡 Possible solutions:');
      console.log('   1. Check if MongoDB is running:');
      console.log('      macOS: brew services list');
      console.log('      Linux: sudo systemctl status mongod');
      console.log('   2. Start MongoDB:');
      console.log('      macOS: brew services start mongodb-community@7.0');
      console.log('      Linux: sudo systemctl start mongod');
      console.log('   3. Or use MongoDB Atlas (cloud database)');
    }
    
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
}

checkDatabaseConnection();

