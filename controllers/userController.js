const User = require('../models/user');
exports.getAllUsers = async (req, res) => {
 try {
 const users = await User.findAll();
 res.json(users);
 } catch (error) {
 console.error(error);
 res.status(500).json({ message: 'Server error' });
 }
};