import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from './models/userModel.js'; // make sure path is correct

mongoose.connect('mongodb://localhost:27017/food-delivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

async function createAdmin() {
  const hashedPassword = await bcrypt.hash('admin123', 10); // choose your admin password
  const admin = new User({
    name: 'Admin',
    email: 'admin@example.com',
    password: hashedPassword,
    role: 'admin'
  });

  await admin.save();
  console.log('Admin user created!');
  mongoose.disconnect();
}

createAdmin();
