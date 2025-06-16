const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const User = require('../models/User');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('User Model Test', () => {
  it('should create a new user successfully', async () => {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      secondLastName: 'Smith',
      email: 'testuser@eafit.edu',
      password: 'password123',
      phoneNumber: '+1234567890',
      profileImage: 'http://example.com/profile.jpg',
      isVerified: true,
      role: 'user',
    };

    const user = new User(userData);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.role).toBe('user');
  });

  it('should fail if email does not end with .edu', async () => {
    try {
      const badUser = new User({
        firstName: 'Bad',
        lastName: 'Email',
        email: 'baduser@gmail.com',
        password: '123456',
        phoneNumber: '+1234567890',
        profileImage: 'http://example.com/profile.jpg',
        isVerified: false,
        role: 'user'
      });
      await badUser.save();
      throw new Error('User should not have been saved');
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.errors.email).toBeDefined();
      expect(err.errors.email.message).toMatch(/.edu/);
    }
  });
});
