const UserModel = require('../models/user.model');
const authService = require('../services/auth.service');

const signUp = async (req, res) => {
  try {
    req.body.isAdmin = false;
    const newUser = await UserModel.create(req.body);
    return res.status(200).json(newUser.attachToken());
  } catch (error) {
    return res.status(400).json(error);
  }
}

const getProfile = (req, res) => {
  return res.status(200).json(req.user.getPublicData());
}

module.exports = {
  signUp,
  getProfile
}