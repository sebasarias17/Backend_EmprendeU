const mongoose = require('mongoose');
const {MongoMemoryServer} = require('mongodb-memory-server');
const Product = require('../models/Product');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Product Model Test', () => {
  it('should create a new product successfully', async () => {
    const productData = {
      name: 'Test Product',
      description: 'This is a test product',
      price: 100,
      entrepreneur: new mongoose.Types.ObjectId(),
      category: new mongoose.Types.ObjectId(),
      stockQuantity: 50,
      imageUrl: 'http://example.com/image.jpg',
      tags: ['electronics', 'gadgets']
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
    expect(savedProduct.price).toBe(productData.price);
  });

  it('should fail if price is negative', async () => {
    try {
      const badProduct = new Product({
        name: 'Bad Product',
        price: -10,
        entrepreneur: new mongoose.Types.ObjectId(),
        category: new mongoose.Types.ObjectId(),
        stockQuantity: 10,
        tags: ['test'],
      });
      await badProduct.save();
      throw new Error('Product should not have been saved');
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.errors.price).toBeDefined();
      expect(err.errors.price.message).toMatch(/positivo/);
    }
  });
});