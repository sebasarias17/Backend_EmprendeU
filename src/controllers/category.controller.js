const Category = require('../models/category');

// Crear categoría
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const saved = await category.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "Esta categoria ya existe." });
  }
};

// Obtener todas las categorías
exports.getAllCategories = async (req, res) => {
  try {
      const categories = await Category.find();
      res.json(categories);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

// Obtener categoría por ID
exports.getCategoryById = async (req, res) => {
  try {
      const category = await Category.findById(req.params.id);
      if (!category) return res.status(404).json({ error: 'Categoría no encontrada' });
      res.json(category);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

//Actualizar categoría
exports.updateCategory = async (req, res) => {
  try {
      const updated = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: 'Categoría no encontrada' });
      res.json(updated);
  } catch (err) {
  res.status(400).json({ error: err.message });
  }
};

// Eliminar categoría
exports.deleteCategory = async (req, res) => {
  try {
      const {id} = req.body;
      if(!id) return res.status(404).json({error: 'Se requiere el ID de la categoria en la solicitud'});
      const deleted = await Category.findById(id);
      if (!deleted) return res.status(404).json({ error: 'Categoría no encontrada' });
      res.json({message:'Categoria eliminada.'});
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};