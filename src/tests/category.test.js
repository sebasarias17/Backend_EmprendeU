const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const Category = require('../models/Category');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Category Model Test', () => {
  it('should create a new category successfully', async () => {
    const categoryData = {
      name: 'Electronics',
      description: 'Devices and gadgets',
    };

    const category = new Category(categoryData);
    const savedCategory = await category.save();

    expect(savedCategory._id).toBeDefined();
    expect(savedCategory.name).toBe(categoryData.name);
    expect(savedCategory.description).toBe(categoryData.description);
  });

  it('should fail if name is not provided', async () => {
    try {
      const badCategory = new Category({
        description: 'No name provided',
      });
      await badCategory.save();
      throw new Error('Category should not have been saved');
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.errors.name).toBeDefined();
      expect(err.errors.name.message).toMatch(/Path `name` is required/);
    }
  });
});