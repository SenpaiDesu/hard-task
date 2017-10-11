const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');
const { JWT_SECRET } = require('../config');

const checkToken = async (req, res, next) => {
  try {
    const token = req.get('Authorization');
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await UserModel.findById(payload._id);
    if (user)
      req.user = user;
    next();

  } catch (error) {
    next();
  }
};

const protectRoute = (req, res, next) => {
  try {
    if (!req.user)
      return res.status(401).json({ error: 'For this action need authorization' });
    else
      next();
  } catch (error) {
    return res.status(500).json({ error });
  }
  
};

const checkAuthState = (req, res) => {
  try {
    if (!req.user)
      return res.status(200).json({ isLoggedIn: false });
    else
      return res.status(200).json({ isLoggedIn: true });
  } catch (error) {
    return res.status(500).json({ isLoggedIn: false });
  }
}

const signInWithEmailAndPassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: 'Missing credentials' });
    const user = await UserModel.findOne({ email });
    if (!user)
      return res.status(401).json({ error: 'Wrong email or password' });
    else if (!user.comparePassword(password))
      return res.status(401).json({ error: 'Wrong email or password' });
    else
      return res.status(200).json(user.attachToken());
  } catch (error) {
    return res.status(500).json({ error });
  }
}

module.exports = {
  checkToken,
  protectRoute,
  checkAuthState,
  signInWithEmailAndPassword
}