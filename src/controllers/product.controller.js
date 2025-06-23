const Product = require('../models/product');

// Crear producto
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: "este producto ya existe." });
  }
};

// Obtener productos por ID de usuario y filtro opcional por tag
exports.getProductsByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { tag } = req.query;
    const filter = { entrepreneur: userId };

    if (tag) {
      filter.tags = { $in: [tag.toLowerCase()] };
    }
    const products = await Product.find(filter)
      .populate('entrepreneur', 'firstName lastName')
      .populate('category', 'name');

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener producto por ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({
        path: 'entrepreneur',
        select: 'firstName lastName'
      })
      .populate({
        path: 'category', 
        select: 'name'
      });

    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar producto
exports.updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar producto
exports.deleteProduct = async (req, res) => {
  try {
    const {id} = req.body;
    if(!id) return res.status(400).json({error:'Se requiere el ID del producto en la solicitud'});
    const deleted = await Product.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Producto no encontrado' });
    res.json({ message: 'Producto eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
