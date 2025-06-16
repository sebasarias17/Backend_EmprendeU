const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Review = require('../models/Review');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Review Model Test', () => {
  it('should create a new review successfully', async () => {
    const reviewData = {
      product: new mongoose.Types.ObjectId(),
      user: new mongoose.Types.ObjectId(),
      rating: 5,
      comment: 'Excellent product!',
    };

    const review = new Review(reviewData);
    const savedReview = await review.save();

    expect(savedReview._id).toBeDefined();
    expect(savedReview.rating).toBe(reviewData.rating);
    expect(savedReview.comment).toBe(reviewData.comment);
  });

  it('should fail if rating is not between 1 and 5', async () => {
    try {
      const badReview = new Review({
        product: new mongoose.Types.ObjectId(),
        user: new mongoose.Types.ObjectId(),
        rating: 6, 
        comment: 'Invalid rating',
      });
      await badReview.save();
      throw new Error('Review should not have been saved');
    } catch (err) {
      expect(err).toBeDefined();
      expect(err.errors.rating).toBeDefined();
      expect(err.errors.rating.message).toMatch(/La calificacion debe estar entre 1 y 5/);
    }
  });
});
