const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review.controller');

router.post('/', reviewController.createReview);
router.get('/product/:productId/reviews', reviewController.getReviewsByProduct);
router.put('/:id', reviewController.updateReview);
router.delete('/', reviewController.deleteReview);

module.exports = router;
