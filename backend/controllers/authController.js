const User = require('../models/User');
const jwt = require('jsonwebtoken');

//Generated a web token for authetication
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '10d' });
};


// controller for registering new user
exports.registerUser = async (req, res) => {
  //req.body for taking input
  const { name, email, password, role } = req.body;
  // try {
  //     const user = new User({ name, email, password, role });
  //     await user.save();
  //     res.status(201).json({
  //       id: user._id,
  //       name: user.name,
  //       email: user.email,
  //       role: user.role,
  //       token: generateToken(user._id),
  //     });
  //   } catch (error) {
  //     res.status(400).json({ error: error.message });
  //   }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
}


// this is for User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};