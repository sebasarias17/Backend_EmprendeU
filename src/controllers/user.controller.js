const User = require('../models/user');

// Crear usuario
exports.createUser = async (req, res) => {
  try {
      const user = new User(req.body);
      const saved = await user.save();
      res.status(201).json(saved);
  } catch (err) {
  res.status(400).json({ error: "El usuario ya existe" });
  }
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener usuario por ID
exports.getUserById = async (req, res) => {
      try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

// Actualizar usuario
exports.updateUser = async (req, res) => {
    try {
      const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updated) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(updated);
  } catch (err) {
  res.status(400).json({ error: err.message });
  }
};

// Eliminar usuario
exports.deleteUser = async (req, res) => {  
  try {
    const {id} = req.body;
    if (!id) return res.status(400).json({ error: 'Se requiere el ID del usuario en la solicitud' });
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Usuario no encontrado' });
    res.json({ message: 'Usuario eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};