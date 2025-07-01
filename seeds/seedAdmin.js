// ==================== seeds/seedAdmin.js ====================
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
require('dotenv').config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/laundry_shop');
    
    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@laundry.com' });
    if (existingAdmin) {
      console.log('Admin already exists');
      process.exit(0);
    }

    // Create default admin
    const admin = new Admin({
      name: 'Admin',
      email: 'admin@laundry.com',
      password: 'admin123',
      role: 'owner'
    });

    await admin.save();
    console.log('Default admin created successfully');
    console.log('Email: admin@laundry.com');
    console.log('Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();