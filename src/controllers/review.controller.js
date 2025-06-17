const Review = require('../models/review');

// Crear reseña
exports.createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        const saved = await review.save();
        res.status(201).json(saved);
    } catch (err) {
    res.status(400).json({ error: err.message });
    }
};

// Obtener reseñas por producto
exports.getReviewsByProduct = async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.productId })
          .populate({
            path: 'user',
            select: 'firstName lastName'
          });
    
        res.json(reviews);
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};

// Actualizar reseña
exports.updateReview = async (req, res) => {
    try {
        const updated = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: 'Reseña no encontrada' });
        res.json(updated);
    } catch (err) {
    res.status(400).json({ error: err.message });
    }
};

// Eliminar reseña
exports.deleteReview = async (req, res) => {
      try {
        const deleted = await Review.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Reseña no encontrada' });
        res.json({ message: 'Reseña eliminada' });
    } catch (err) {
    res.status(500).json({ error: err.message });
    }
};